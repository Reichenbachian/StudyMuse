# Config and extra packages
from config import config as cfg
import logging
from functools import partial
import os

# Dl Framework
from dlframework.utils import get_logger, load_subcategories
from dlframework.trainer.solver import train_model
from dlframework.datasource.image_ds import ImageDataSource
from dlframework.nets.image_nets import medium_model
from dlframework.retrievals.JsonFile import JsonFile
# Controllers
from dlframework.unwrappers.general_unwrappers import unwrapper
from dlframework.filters.general_filters import accept_label, ignore_label

# Data
import pandas as pd 
import matplotlib
matplotlib.use('Agg')

logger = get_logger()
logger.setLevel(logging.INFO)

ds_params_val = {"batch_size":40,
                 "n_workers":1, 
                 "next_sample_timeout": 50,
                 "processors":cfg.processors,
                 "unwrapper": [unwrapper],
                 "entities_per_sample": 1,
                 'queue_size_in_batches': 500,
                 "relevant_labels": cfg.mapped_label_list}

ds_params_train = ds_params_val.copy()
ds_params_train.update({"augmentors": cfg.augmentors, 
                        "batch_size": 10
                        })

###############################
#####  StudyMuse Data     #####
###############################
abs_path = os.path.dirname(os.getcwd()+'/local_cache/')+'/'

print('Opening Training retrieval...')
train_retrieval = JsonFile(fp=abs_path+'train.json',
                            data_columns=['band_1', 'band_2'],
                            label_columns=['is_iceberg'])

print('Opening Validation retrieval...')
validation_retrieval = JsonFile(fp=abs_path+'val.json',
                            data_columns=['band_1', 'band_2'],
                            label_columns=['is_iceberg'])


iceberg_trainds = ImageDataSource(datasource_name='iceberg_trainds', dataset_name="Kaggle",
                                        retrieval=train_retrieval,
                                        filters = cfg.filters + [partial(accept_label, labelnames="is_iceberg")],
                                               **ds_params_train)

boat_trainds = ImageDataSource(datasource_name='boat_trainds', dataset_name="Kaggle",
                                        retrieval=train_retrieval,
                                        filters = cfg.filters + [partial(ignore_label, labelnames="is_iceberg")],
                                               **ds_params_train)

# #### VALIDATION DATASOURCE

# iceberg_valds = ImageDataSource(datasource_name='iceberg_valds', dataset_name="Kaggle",
#                                         retrieval=validation_retrieval,
#                                         filters = cfg.filters + [partial(accept_label, labelnames="is_iceberg")],
#                                                **ds_params_train)

# boat_valds = ImageDataSource(datasource_name='boat_valds', dataset_name="Kaggle",
#                                         retrieval=validation_retrieval,
#                                         filters = cfg.filters + [partial(ignore_label, labelnames="is_iceberg")],
#                                                **ds_params_train)


train_datasource =  iceberg_trainds + boat_trainds
validation_datasource = iceberg_valds + boat_valds




print '# of entities of Training dataset :', len(train_datasource.entities)
print '# of entities of Validation dataset :', len(validation_datasource.entities) 

def train(model, cwd, logger, experiment):
    train_model(model, train_datasource, validation_datasource, cfg)
    # serialize model to JSON
    model.save_model_to_json(cwd + 'models/' + experiment+".json")
    print 'Starting fit_generator'
    # serialize weights to HDF5
    model.save_model_h5(cwd + 'models/' + experiment +".h5")
    logger.info('Saved model to disk')    

def run_train(logger):
    # train_datasource.start_parallel_prefetch_loop()
    # validation_datasource.start_parallel_prefetch_loop()
    print 'Running', cfg.experiment_name, '...' 
    model = medium_model(num_classes = cfg.num_classes,
                            input_shape = cfg.input_shape,
                            transfer = cfg.transfer_learning,
                            softmax=True)
    
    print 'model built, training'
    train(model, cfg.saving_path, logger, cfg.experiment_name)
    print 'finished training'
    
if __name__ == '__main__':
    run_train(logger)
