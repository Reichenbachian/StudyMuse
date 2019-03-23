#### System
import sys
import os

### DlFramework
from dlframework.filters.general_filters import array_length_ok
from dlframework.keras_extensions.callbacks import ConfusionMatrix, ROCAnalysis
from dlframework.callbacks.classification_callbacks import LabelHistogram, num_per_class, precision_per_class, recall_per_class
from dlframework.callbacks.image_callbacks import SaveImage
from dlframework.augmentations.general_augmentations import identity, add_noise
from dlframework.augmentations.image_augmentations import augment_image
from dlframework.processors.general_processors import reshape, map_labels, make_categorical
from dlframework.processors.audio_processors import wav_normalize

### Data Manipulation
import pandas as pd
import keras

### DL
from functools import partial
from keras.callbacks import Callback
from keras import backend as K
from keras.optimizers import SGD
import tensorflow as tf
from keras.callbacks import EarlyStopping

class stm_configuration(object):
    #### Names
    experiment_name = 'stm_vae_test'
    local_cache_directory = '../local_cache/'

    #### Input
    input_shape = (75, 75, 2)
    
    #### Output
    saving_path = '' + experiment_name

    #### Controllers
    filters     = []
    augmentors = [identity,
                  identity,
                  # partial(add_noise, scale=.5),
                  # partial(add_noise, scale=.5),
                  # partial(offset, max_offset_scale=3),
                  # partial(add_linear_trend, scale=3),
                  # add_noise,
                  # add_noise
                  ]
    processors = []
    
    
    #### Train
    train_steps_per_epoch = 100
    nb_epochs = 100000
    save_every = 100
          

    #### Callbacks                
    tensorboard_dir = os.path.join(saving_path,'results/')
    
    callbacks = [keras.callbacks.TensorBoard(log_dir=tensorboard_dir, write_images= True),
                EarlyStopping()]

    # Snapshot Callback is a default callback and needs the user to give config parameters at all times
    snapshot_parameters = {'filepath': os.path.join(saving_path,'weights',
                                                    experiment_name+'_weights.{epoch:02d}-{val_acc:.2f}.hdf5'),
                           'save_best': True,       #optional
                           'filepath_best': os.path.join(saving_path,'weights',
                                                         experiment_name+'_weights_best_model.{epoch:02d}-{val_acc:.2f}.hdf5'),
                           'period': 5,              #optional
                           'monitor':'val_acc',     #optional
                           'mode':'max'
                          }

    model_compilation_args = {
                               'optimizer': keras.optimizers.SGD(),
                               'loss': ['categorical_crossentropy'],
                               'metrics': ['accuracy']
                             }
    
    #### Add per class precision and recall.
    custom_metrics = []
    for i, lbl_name in enumerate(mapped_label_list):
        p = partial(recall_per_class, cls=i)
        p.__name__ = "recall_"+lbl_name
        custom_metrics.append(p)
    for i, lbl_name in enumerate(mapped_label_list):
        p = partial(precision_per_class, cls=i)
        p.__name__ = "precision_"+lbl_name
        custom_metrics.append(p)

    # for i, lbl_name in enumerate(mapped_label_list):
    #     p = partial(num_per_class, cls=i)
    #     p.__name__ = lbl_name+"_samples_in_batch"
    #     custom_metrics.append(p)

    model_compilation_args['metrics'] += custom_metrics
    
    training_steps = 1467 
    validation_steps = 91
    num_epochs = 100000
    less_epochs = 100
    save_every = 1

    transfer_learning = False #turn to true when using transfer learning
    model_path = 'models/STMComp.json'
    weights_path= 'models/STMComp.h5'


config = stm_configuration
