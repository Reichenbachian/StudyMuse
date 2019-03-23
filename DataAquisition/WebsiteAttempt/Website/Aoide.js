var __extends = (this && this.__extends) || (function() {
    var a = Object.setPrototypeOf || ({
            __proto__: []
        }
        instanceof Array && function(e, c) {
            e.__proto__ = c
        }) || function(f, c) {
        for (var e in c) {
            if (c.hasOwnProperty(e)) {
                f[e] = c[e]
            }
        }
    };
    return function(f, c) {
        a(f, c);

        function e() {
            this.constructor = f
        }
        f.prototype = c === null ? Object.create(c) : (e.prototype = c.prototype, new e())
    }
})();
var Helicon;
(function(b) {
    var a;
    (function(c) {})(a = b.I || (b.I = {}))
})(Helicon || (Helicon = {}));
var Helicon;
(function(b) {
    var a;
    (function(c) {})(a = b.I || (b.I = {}))
})(Helicon || (Helicon = {}));
var Aoide;
(function(b) {
    var a;
    (function(c) {})(a = b.I || (b.I = {}))
})(Aoide || (Aoide = {}));
var Aoide;
(function(b) {
    var a;
    (function(c) {})(a = b.I || (b.I = {}))
})(Aoide || (Aoide = {}));
var Aoide;
(function(b) {
    var a = (function() {
        function c(d) {
            var h = this,
                g, j = navigator.userAgent,
                i = 1,
                f, l = window.AudioContext;
            h.B = d;
            g = c.context;
            if (!g) {
                if (!l) {
                    l = window.webkitAudioContext
                }
                try {
                    g = l ? new l() : null
                } catch (k) {
                    g = null
                }
                c.context = g
            }
            if (g) {
                d.Parser.PlayerLoader = function(m, e, n) {
                    return h.ReadIn(m, e, n)
                }
            }
            h.Foundry = new b.Foundry(d, g);
            h.T = 0.1;
            f = j.indexOf(" Firefox/");
            if (f > 0) {
                h.T = 0.22;
                if (j.indexOf("Windows") < 0 && j.indexOf("Macintosh") < 0) {
                    i = 2
                }
                f = parseFloat(j.substr(f + 9, 4));
                if (!isNaN(f) && f < 30) {
                    i = 2
                }
            } else {
                if (j.indexOf(" OPR/") > 0) {
                    i = 2
                }
            }
            h.Foundry.Encoding = i;
            if (g) {
                if (g.createGain) {
                    h.K = g.createGain();
                    h.K.connect(g.destination)
                }
            }
            h.M = [];
            h.J = 1;
            h.W = h.V = 0;
            h.Y = 2
        }
        Object.defineProperty(c.prototype, "Chording", {
            set: function(d) {
                this.Y = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "PlaySupported", {
            get: function() {
                return this.D !== null && c.context != null
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.Clear = function() {
            if (c.context && this.D) {
                this.e()
            }
            this.D = null
        };
        Object.defineProperty(c.prototype, "Context", {
            get: function() {
                return c.context
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "Gain", {
            get: function() {
                return this.K ? this.K.gain.value : 0
            },
            set: function(d) {
                if (this.K) {
                    this.K.gain.value = d < 0 ? 0 : d > 1 ? 1 : d
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "ReadyHandler", {
            set: function(d) {
                this.E = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "NewPage", {
            set: function(d) {
                this.F = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "EndHandler", {
            set: function(d) {
                this.G = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "Playing", {
            get: function() {
                return this.Q
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.ReadIn = function(g, h, d) {
            var k = this,
                j, m = new b.Piece(),
                f;

            function l(e) {
                c.fontsReady += e;
                if (c.fontsReady > 0 && k.E && k.PlaySupported) {
                    k.E()
                }
            }
            try {
                f = new b.Loader(m, k.Y > 0).Load(k.B.Parser, g, h, d);
                if (f >= 0) {
                    for (j = 0; j < m.Kids.length; j++) {
                        b.MapNotes(m.Page(j), m.Tab, k.B, j)
                    }
                    k.D = new b.Passage(m, k.Y);
                    k.Z = m.Concert;
                    k.Foundry.Prepare(k.L = m.MidiInstruments, l)
                }
            } catch (i) {
                f = -9
            }
            return f
        };
        c.prototype.e = function(i) {
            var f = this,
                h, d = c.context.currentTime,
                e = f.M,
                g;
            if (e) {
                for (g = 0; g < e.length; g++) {
                    e[g].stop(d)
                }
            }
            f.M = [];
            f.Q = false;
            if (!i) {
                if (f.R) {
                    g = f.D.Next;
                    while (f.R > 0 && (h = f.D.Upto(false, 9999))) {
                        f.h(h, g)
                    }
                }
                f.R = 0
            }
        };
        c.prototype.f = function() {
            var f, d, e = this;
            e.I = 0;
            if (e.Q) {
                e.P += 2.5;
                while (f = e.D.Upto(true, e.I > 0 ? e.P : 9999)) {
                    e.H = (f.Time * e.J) + e.N;
                    for (d = 0; d < f.Events.length; d++) {
                        f.Events[d].Play(e)
                    }
                }
            }
        };
        c.prototype.g = function() {
            var d = this;
            if (c.context.currentTime >= d.O) {
                d.O = d.I;
                d.V = setTimeout(function() {
                    d.f()
                }, 1)
            }
        };
        c.prototype.h = function(f, d) {
            for (var e = 0; e < f.Events.length; e++) {
                f.Events[e].Lite(this, d)
            }
        };
        c.prototype.i = function() {
            var e = this,
                d, g, f = (c.context.currentTime - e.N) / e.J + 0.1;
            if (e.Q) {
                while ((g = e.D.Upto(false, f))) {
                    e.h(g)
                }
                d = e.D.Next / e.J + e.N - c.context.currentTime;
                if (d < 0.04) {
                    d = 0.04
                }
                e.W = setTimeout(function() {
                    e.i()
                }, d);
                e.g()
            }
        };
        c.prototype.Page = function(f, d) {
            var e = this;
            e.X = d;
            e.C.Page(e.S = f);
            if (e.F) {
                e.F(f)
            }
        };
        c.prototype.Scroll = function(e, d) {
            this.B.ScrollPos(e, d, this.X)
        };
        c.prototype.Lite = function(d, f, e) {
            if (this.Q || d == 0) {
                this.C.Lite(d, f, e);
                this.R += d == 0 ? -1 : 1
            }
        };
        c.prototype.Predraw = function(d, e) {
            this.C.Predraw(d, (e - c.context.currentTime + this.N) * this.J)
        };
        c.prototype.j = function(d) {
            var e = this;
            if (e.V) {
                clearTimeout(e.V)
            }
            if (e.W) {
                clearTimeout(e.W)
            }
            e.W = e.V = 0;
            if (e.G) {
                e.G(d)
            }
        };
        c.prototype.Note = function(k, m, i, h) {
            var n = this,
                g = n.H,
                f = n.L[k],
                l = n.Foundry.Font(f).Note(n.Z ? m : m + c.instrumentTranspositions[f]),
                e = c.context,
                d = e.createBufferSource(),
                j = e.createGain();
            j.gain.value = i;
            j.connect(n.K);
            n.I = n.H;
            n.M.push(d);
            d.onended = function() {
                var o = n.M.indexOf(d);
                if (o >= 0) {
                    n.M.splice(o, 1)
                }
                if (i < 0 && n.Q) {
                    n.j(2)
                }
                n.g()
            };
            d.buffer = l.Audio;
            d.playbackRate.value = l.Rate;
            h *= n.J;
            h += n.T;
            if (h < 0.2) {
                h = 0.2
            }
            j.gain.setTargetAtTime(0, g + h - 0.09, 0.01);
            if (h > l.Lasts + 0.2 && l.From) {
                d.loop = true;
                d.loopStart = l.To;
                d.loopEnd = l.From
            }
            d.connect(j);
            d.start(g, 0, h)
        };
        c.prototype.k = function(d) {
            var f = this,
                e = c.context;
            f.Q = true;
            if (e && c.fontsReady > 0) {
                f.N = e.currentTime + 0.2 * this.J - d;
                f.P = f.O = f.N + 2.5;
                f.f();
                if (!f.U) {
                    f.i()
                }
            }
        };
        c.prototype.l = function(d) {
            this.J = d ? 1 / Math.pow(2, d) : 1
        };
        c.prototype.Play = function(f, e) {
            var d = this;
            if (d.Context) {
                d.e();
                d.S = 0;
                d.U = e;
                d.l(f);
                d.C = d.B.Canvas instanceof HTMLCanvasElement ? new b.LiteCanvas() : new b.LiteSvg();
                d.C.Init(d.B, 0, ["#000", "red", "#980000"]);
                d.D.Start();
                d.k(0)
            }
        };
        c.prototype.Stop = function() {
            if (c.context) {
                this.e();
                this.j(1)
            }
        };
        c.prototype.Pause = function(i) {
            var f = this,
                h, e, d, g = f.Q;
            if (f.Context) {
                if (g) {
                    f.D.Mark(c.context.currentTime - f.N, f.U);
                    f.e(true);
                    f.j(0)
                } else {
                    f.e(true);
                    h = f.J;
                    if (typeof i == "number") {
                        f.l(i)
                    }
                    e = f.J;
                    d = f.D.Resume();
                    if (e <= 1 && h <= 1 || e > 1 && h < 1) {
                        if (e != h) {
                            d *= e / h
                        }
                    } else {
                        d *= e
                    }
                    f.k(d)
                }
            }
            return g
        };
        return c
    }());
    a.fontsReady = 0;
    a.instrumentTranspositions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -12, -12, -12, -12, -12, -12, -12, -12, -12, -12, -12, -12, -12, -12, -12, -12, 0, 0, 0, -12, 0, 0, 0, -12, 0, 0, 0, 0, 0, 0, 0, 0, -2, 0, 0, -2, -7, 0, 0, 0, -2, -9, -14, -21, 0, -7, 0, -2, 12, 0, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    b.Ao = a
})(Aoide || (Aoide = {}));
var Aoide;
(function(b) {
    var a = (function() {
        function c() {}
        c.prototype.Init = function(f, e, d) {
            var g = this;
            g.m = f;
            g.l = f.Canvas;
            g.n = f.FirstPageNumber;
            if (g.j != e) {
                g.j = -1
            }
            g.o = d;
            g.k = ""
        };
        c.prototype.Lite = function(f, h, g) {
            var e, d = this;
            if (e = (d.l.getElementById(d.k + h))) {
                e.style.fill = d.o[f]
            }
        };
        c.SvgPage = function(f) {
            var d = "",
                e = String.fromCharCode;
            if (f >= 0) {
                if (f > 25) {
                    d = e(Math.floor(f / 26) + 65)
                }
                d += e(f % 26 + 65)
            }
            return d
        };
        c.prototype.Page = function(e) {
            var d = this;
            if (d.j != e) {
                d.j = e;
                d.m.NewPage(e + d.n);
                d.k = c.SvgPage(e)
            }
        };
        c.prototype.Predraw = function(d, e) {};
        return c
    }());
    b.LiteSvg = a
})(Aoide || (Aoide = {}));
var Aoide;
(function(c) {
    var a = (function() {
        function d() {
            this.Full = document.createElement("canvas");
            this.Notes = document.createElement("canvas");
            this.Rests = document.createElement("canvas")
        }
        return d
    }());
    var b = (function() {
        function d() {
            var f = this;
            var e = this;
            e.G = new a();
            e.H = new a();
            window.addEventListener("resize", function() {
                e.Q = f.R = true;
                if (e.P) {
                    e.S()
                }
            }, false)
        }
        d.prototype.Init = function(g, f, e) {
            var h = this,
                i;
            h.D = g;
            h.E = g.Canvas;
            h.F = h.E.getContext("2d");
            h.I = -1;
            i = h.K = h.D.Zoom / 15;
            h.L = h.D.Rect.left / i;
            h.D.Draw(h.H.Notes, h.J = f, h.M = e[1]);
            h.D.Draw(h.H.Rests, f, h.N = e[2]);
            h.D.Draw(h.H.Full, f);
            h.P = true
        };
        d.prototype.Lite = function(m, e, l) {
            if (l) {
                var i = this.L,
                    f = this.K,
                    h = l.Left - 20,
                    j = l.Top - 15,
                    g = l.Right - h + 10,
                    k = l.Bottom - j + 25;
                h += i;
                this.F.drawImage(m ? m == 1 ? this.G.Notes : this.G.Rests : this.G.Full, h * f, j * f, g * f, k * f, h - i, j, g, k)
            }
        };
        d.prototype.Page = function(k) {
            var g = this,
                i = g.K = g.D.Zoom / 15,
                f = g.G,
                j, h, e;
            g.G = g.H;
            g.H = f;
            if (g.R) {
                g.R = false;
                g.J = -1
            } else {
                g.J = g.I
            }
            g.I = k;
            j = g.D.Rect.left;
            g.L = j / i;
            h = g.E.width - j;
            e = g.E.height;
            g.F.drawImage(g.G.Full, j, 0, h, e, 0, 0, h / i, e / i)
        };
        d.prototype.S = function() {
            var f = this,
                g = this.J,
                e;
            f.P = false;
            e = (f.O - Date.now()) / 10;
            setTimeout(function() {
                f.Q = false;
                f.D.Draw(f.H.Full, g);
                setTimeout(function() {
                    if (f.Q && e > 0) {
                        f.S()
                    } else {
                        f.D.Draw(f.H.Notes, f.J = g, f.M);
                        setTimeout(function() {
                            if (f.Q && e > 0) {
                                f.S()
                            } else {
                                f.D.Draw(f.H.Rests, f.J = g, f.N);
                                if (f.Q && e > 0) {
                                    f.S()
                                } else {
                                    f.P = true
                                }
                            }
                        }, e)
                    }
                }, e)
            }, e)
        };
        d.prototype.Predraw = function(f, g) {
            var e = this;
            e.O = g * 1000 + Date.now();
            if (e.J != f || e.Q) {
                e.J = f;
                e.S()
            }
        };
        return d
    }());
    c.LiteCanvas = b
})(Aoide || (Aoide = {}));
var Aoide;
(function(m) {
    var n = (function() {
        function t(w, x, v, u) {
            this.Notehead = x;
            this.Width = v;
            this.Height = u
        }
        return t
    }());
    m.NoteShape = n;
    var c = (function() {
        function t(x, v, u, y) {
            var w = this;
            w.MidiCounts = x;
            w.Semitone = v;
            w.Shape = u;
            w.b = (y & 8) != 0
        }
        Object.defineProperty(t.prototype, "HasSound", {
            get: function() {
                return !this.b && this.Shape.Notehead != 11
            },
            enumerable: true,
            configurable: true
        });
        return t
    }());
    m.NoteData = c;
    var j = (function() {
        function t(y, x, w, u) {
            var v = this;
            v.Left = y;
            v.Top = x;
            v.Right = w;
            v.Bottom = u
        }
        return t
    }());
    m.BBox = j;
    var k = (function() {
        function t(u, v) {
            if (u) {
                this.Mom = u;
                this.Index = u.Add(this);
                this.Bbox = v
            }
        }
        t.prototype.Add = function(v) {
            var u = this.Kids;
            if (!u) {
                this.Kids = u = []
            }
            u.push(v);
            return u.length - 1
        };
        t.prototype.Child = function(u) {
            var v = this.Kids;
            return v && u >= 0 && u < v.length ? v[u] : null
        };
        t.prototype.DescendTo = function(v) {
            var u = this;
            while (u.Level < v && u.Kids) {
                u = u.Kids[0]
            }
            return u
        };
        t.prototype.AscendTo = function(v) {
            var u = this;
            while (u.Level > v && u.Mom) {
                u = u.Mom
            }
            return u
        };
        Object.defineProperty(t.prototype, "NextSib", {
            get: function() {
                var v, w = this.Mom,
                    u = w.Child(this.Index + 1);
                if (this.Level > 0) {
                    while (!u && (w = w.NextSib)) {
                        if (v = w.Kids) {
                            u = v[0]
                        }
                    }
                }
                return u
            },
            enumerable: true,
            configurable: true
        });
        return t
    }());
    m.BBoxKid = k;
    var h = (function(u) {
        __extends(t, u);

        function t(x, w, v, y) {
            var z = u.call(this, x, y) || this;
            z.c = w;
            z.d = v;
            return z
        }
        Object.defineProperty(t.prototype, "Level", {
            get: function() {
                return 0
            },
            enumerable: true,
            configurable: true
        });
        return t
    }(k));
    m.Page = h;
    var a = (function(u) {
        __extends(t, u);

        function t(v, w) {
            return u.call(this, v, w) || this
        }
        Object.defineProperty(t.prototype, "Level", {
            get: function() {
                return 1
            },
            enumerable: true,
            configurable: true
        });
        return t
    }(k));
    m.System = a;
    var p = (function(u) {
        __extends(t, u);

        function t(v, w, x) {
            var y = u.call(this, v, x) || this;
            y.e = w;
            return y
        }
        Object.defineProperty(t.prototype, "Level", {
            get: function() {
                return 2
            },
            enumerable: true,
            configurable: true
        });
        return t
    }(k));
    m.Staff = p;
    var q = (function(u) {
        __extends(t, u);

        function t(v, w) {
            return u.call(this, v, w) || this
        }
        Object.defineProperty(t.prototype, "Level", {
            get: function() {
                return 3
            },
            enumerable: true,
            configurable: true
        });
        return t
    }(k));
    m.Measure = q;
    var s = (function(u) {
        __extends(t, u);

        function t(v, w) {
            var x = u.call(this, v, w) || this;
            x.f = x.g = 0;
            return x
        }
        Object.defineProperty(t.prototype, "Level", {
            get: function() {
                return 4
            },
            enumerable: true,
            configurable: true
        });
        return t
    }(k));
    m.Slice = s;
    var d = (function(u) {
        __extends(t, u);

        function t(x, w, v) {
            var y = u.call(this, x, v) || this;
            y.NoteData = w;
            y.OrnamentCode = 0;
            y.Id = -1;
            return y
        }
        Object.defineProperty(t.prototype, "Level", {
            get: function() {
                return 5
            },
            enumerable: true,
            configurable: true
        });
        return t
    }(k));
    m.Item = d;
    var g = (function() {
        function t() {}
        return t
    }());
    m.Sequence = g;
    var r = (function() {
        function t() {}
        return t
    }());
    m.Track = r;
    var e = (function() {
        function t(v, u) {
            this.Time = v;
            this.Value = u
        }
        return t
    }());
    m.Function = e;
    var o = (function() {
        function t() {}
        return t
    }());
    m.TrackFunctions = o;
    var l = (function(u) {
        __extends(t, u);

        function t(z, x, w, v) {
            var y = u.call(this, z, w) || this;
            y.EndTime = z + x;
            y.ToValue = v;
            return y
        }
        return t
    }(e));
    m.TimedFunction = l;
    var b = (function() {
        function t() {}
        return t
    }());
    m.TimedFunctions = b;
    var i = (function() {
        function t(x, u, w) {
            var v = this;
            v.Duration = x;
            v.Tracks = u;
            v.h = w;
            v.RepeatNumber = 0
        }
        t.prototype.NoNotation = function(u) {
            return this.h & u
        };
        return t
    }());
    m.Time = i;
    var f = (function(u) {
        __extends(t, u);

        function t() {
            var w = u.call(this) || this;
            var v = w;
            v.RealTimeDuration = 0;
            v.NoteShapes = [];
            v.NoteDataDefs = [];
            v.Expressions = v.Performances = [];
            v.Tracks = [];
            v.Items = [];
            v.Times = [];
            return w
        }
        t.prototype.Page = function(v) {
            return this.Child(v)
        };
        Object.defineProperty(t.prototype, "Level", {
            get: function() {
                return -1
            },
            enumerable: true,
            configurable: true
        });
        return t
    }(k));
    m.Piece = f
})(Aoide || (Aoide = {}));
var Aoide;
(function(b) {
    var a = (function() {
        function c(e, d) {
            this.h = e;
            this.i = d
        }
        Object.defineProperty(c.prototype, "Endian", {
            get: function() {
                return false
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.j = function(d) {
            return !d.Read(2) || d.Bytes[0] ? -4 : 0
        };
        c.prototype.k = function(g, d, e) {
            var f;
            return g.Read(1) && (f = g.Bytes[0] - e) >= d ? g.DView(f) : -2
        };
        c.prototype.l = function(g) {
            var f, l, n, i, s, k, e, j, m, p, h, o, r, d, q = this.h;
            e = g.DView(6);
            if (e) {
                return e
            }
            f = g.Bytes[0];
            if (f < 6) {
                return -4
            }
            l = g.Bytes[1];
            n = g.U16(2);
            i = g.U16(4);
            k = f - 6;
            if (g.Skip(k)) {
                return -2
            }
            n *= l;
            if (!g.Read(n)) {
                return -2
            }
            r = g.Bytes;
            for (k = 0; k < n; k += l) {
                q.NoteShapes.push(new b.NoteShape(r[k + 0], r[k + 1], r[k + 2] * 20, r[k + 3] * 20))
            }
            if (k = g.DView(2)) {
                return k
            }
            s = g.U16(0) - 2;
            e = 0;
            if (s > 0) {
                d = g.MakeByter(s, false);
                while (i-- > 0) {
                    j = d.Val();
                    m = d.Byte();
                    p = d.Byte();
                    h = d.Val();
                    o = h < 0 || h >= q.NoteShapes.length ? null : q.NoteShapes[h];
                    if (!o) {
                        e = 8
                    }
                    q.NoteDataDefs.push(new b.NoteData(j, p, o, m))
                }
                d.Done()
            }
            return e
        };
        c.prototype.m = function(g, s) {
            function m() {
                return s.Val() * 20
            }
            var w = 0,
                E, x, C, l, j, r, d, e, u, F, M, B, i, I, L, p, n, K, J, f, k, A, P, h, o, H, q, G, N, t = m(),
                v = m(),
                D, y = this.h,
                z = y.Items,
                O = new b.System(g, E = new b.BBox(m(), Infinity, m(), 0));
            x = s.Byte();
            while (x-- > 0) {
                m();
                m();
                G = m();
                l = new b.BBox(t, G, v, G + m());
                s.Skip(2);
                L = (I = m()) + m();
                J = s.Byte();
                k = s.Byte() * 20 + t;
                C = new b.Staff(O, J, l);
                j = s.Byte();
                f = s.Byte();
                while (f-- > 0) {
                    m();
                    m();
                    s.Byte()
                }
                while (j-- > 0) {
                    d = new b.BBox(k, l.Top, k + m(), l.Bottom);
                    r = new b.Measure(C, d);
                    e = s.Byte();
                    if (e > 127) {
                        e -= 128;
                        s.Byte();
                        s.Val()
                    }
                    while (e-- > 0) {
                        o = Infinity;
                        H = 0;
                        N = m() + k;
                        F = new b.BBox(k, I, k + m(), L);
                        u = new b.Slice(r, F);
                        M = s.Byte();
                        p = (M & 64) != 0;
                        M &= 63;
                        if (M == 1) {
                            n = 20;
                            K = 60
                        } else {
                            n = 0;
                            K = 20
                        }
                        for (B = 0; B < M; B++) {
                            i = new b.BBox(N - 20, m() + l.Top - n);
                            A = s.Val();
                            if (A >= y.NoteDataDefs.length) {
                                A = 0;
                                w = 5
                            }
                            P = y.NoteDataDefs[A];
                            h = P.Shape;
                            i.Right = i.Left + h.Width + 40;
                            i.Bottom = i.Top + h.Height + K;
                            D = new b.Item(u, P, i);
                            if (y.Len < z.length) {
                                z[y.Len] = D
                            } else {
                                z.push(D)
                            }
                            y.Len += 1;
                            if (o > i.Left) {
                                o = i.Left
                            }
                            if (H < i.Right) {
                                H = i.Right
                            }
                        }
                        if (p) {
                            q = s.Byte();
                            while (q-- > 0) {
                                B = s.Byte();
                                G = m();
                                if (B > M) {
                                    w = -2
                                } else {
                                    i = u.Kids[B].Bbox;
                                    n = i.Right - i.Left;
                                    i.Left = F.Left + G;
                                    i.Right = i.Left + n;
                                    if (o > i.Left) {
                                        o = i.Left
                                    }
                                    if (H < i.Right) {
                                        H = i.Right
                                    }
                                }
                            }
                        }
                        k = F.Right;
                        if (H) {
                            F.Left = N = o;
                            F.Right = H
                        }
                    }
                    k = d.Right
                }
                if (E.Top > l.Top) {
                    E.Top = l.Top
                }
                if (E.Bottom < l.Bottom) {
                    E.Bottom = l.Bottom
                }
            }
            s.Done();
            return w
        };
        c.prototype.n = function(e) {
            var i = 0,
                l, f, j, g, h = 0,
                k, d = e.Read(1) ? 0 : -2;
            if (!d) {
                i = e.Bytes[0];
                if (i && i < 7) {
                    d = -2
                }
            }
            if (!d && i) {
                d = e.DView(6);
                if (!d) {
                    if (!e.Bytes[1]) {
                        d = -2
                    } else {
                        i = e.Bytes[0];
                        l = e.I16(2);
                        if (!this.i) {
                            i = 0;
                            l += e.I16(4)
                        }
                        e.Skip(l);
                        if (i) {
                            k = this.h.Chords = new Array(++i);
                            while (++h < i && !d) {
                                j = k[h] = [];
                                if (!e.Read(5)) {
                                    d = -2
                                } else {
                                    f = e.Bytes[4];
                                    if (f > 12) {
                                        f = 12;
                                        d = 8
                                    }
                                    if (!e.Read(f * 3)) {
                                        d = -2
                                    } else {
                                        f *= 3;
                                        for (g = 0; g < f; g += 3) {
                                            if (!(e.Bytes[g + 0] >> 5)) {
                                                j.push(e.Bytes[g + 2])
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return d
        };
        c.prototype.o = function(e) {
            function n(q) {
                return e.I16(q) * 20
            }
            var k, f, o, i, l, d, h, j, p = this.h,
                m, g = this.k(e, 26, 1);
            if (g == 0) {
                f = e.Bytes[0];
                if (f < 19) {
                    return -2
                }
                k = e.Bytes[1];
                p.Items = new Array(e.I16(12));
                p.Len = 0;
                while (k-- > 0) {
                    m = e.DView(f);
                    if (m) {
                        return m
                    }
                    l = new b.Page(p, e.I16(0), e.I16(2), new b.BBox(n(4), n(8), n(6), n(10)));
                    l.First = p.Len;
                    i = e.Bytes[12];
                    o = e.U16(15) + e.U16(17);
                    if (e.Skip(o)) {
                        return -2
                    }
                    while (i-- > 0) {
                        m = e.DView(2);
                        if (m) {
                            return m
                        }
                        m = this.m(l, e.MakeByter(e.U16(0) - 2, false));
                        if (m) {
                            if (m < 0) {
                                return m
                            } else {
                                g = m
                            }
                        }
                    }
                    m = e.DView(2);
                    if (m) {
                        return m
                    }
                    o = e.U16(0);
                    if (o) {
                        d = e.MakeByter(o - 2);
                        while (d.More()) {
                            h = d.Byte();
                            o = d.Val();
                            while (o-- > 0) {
                                j = d.Val();
                                if (j >= 0 && (j += l.First) < p.Len) {
                                    p.Items[j].OrnamentCode = h
                                }
                            }
                        }
                    }
                    l.Len = p.Len - l.First
                }
            }
            return g
        };
        c.prototype.p = function(g) {
            var j, o, p, n, i, q, m, f, r, l, e, k, t, d, s = this.h,
                h = this.k(g, 10, 1);
            if (!h) {
                t = g.Bytes;
                j = t[0];
                o = t[1];
                p = t[2];
                n = t[4];
                s.Concert = (t[9] & 1);
                g.Read(g.I16(5));
                s.MidiInstruments = [];
                while (n-- > 0) {
                    g.Read(o);
                    s.MidiInstruments.push(g.Bytes[0])
                }
                s.Tracks = q = new Array(p);
                for (m = 0; m < p; m++) {
                    if (g.DView(j + 2, false)) {
                        return -2
                    }
                    i = new b.Track();
                    t = g.Bytes;
                    if (i.Tab = t[1] >> 5) {
                        s.Tab = true
                    }
                    i.Sequences = new Array(f = g.I16(j));
                    q[m] = i;
                    r = g.I16(6) - 2;
                    if (r < 0) {
                        return -2
                    }
                    d = g.MakeByter(r, false);
                    for (e = 0; e < f; e++) {
                        l = new b.Sequence();
                        k = d.Byte();
                        l.Level = k & 31;
                        if (k > 127) {
                            l.Articulation = d.Val()
                        }
                        l.Start = d.Val();
                        l.End = d.Val() + l.Start;
                        i.Sequences[e] = l
                    }
                    d.Done()
                }
            }
            return h
        };
        c.prototype.q = function(f, g, l) {
            var p, e, j, h, n, m, k, o, i, d;
            if (!f.Read(3) || (e = (p = f.Bytes)[0] - 2) < 0 || (h = p[1]) < 6) {
                return -2
            }
            m = g(j = p[2]);
            f.Skip(e);
            for (e = 0; e < j; e++) {
                if (f.DView(h)) {
                    return -2
                }
                m[e] = n = new b.TrackFunctions();
                n.Mask = f.I16(0);
                n.Functions = i = new Array(k = f.I16(2));
                d = f.MakeByter(f.I16(4));
                for (o = 0; o < k; o++) {
                    i[o] = l(d)
                }
                d.Done()
            }
            return 0
        };
        c.prototype.r = function(e) {
            var d = this;
            return this.q(e, function(f) {
                return d.h.Performances = new Array(f)
            }, function(f) {
                return new b.Function(f.Val(), f.Byte())
            })
        };
        c.prototype.s = function(e) {
            var d = this;
            return this.q(e, function(f) {
                return d.h.Expressions = new Array(f)
            }, function(f) {
                return new b.TimedFunction(f.Val(), f.Val(), f.Byte(), f.Byte())
            })
        };
        c.prototype.t = function(f) {
            var d, l, j, r, g, n, e, o, q, p, m, i, k = 0,
                t = this.h,
                s = t.Tracks.length,
                h = this.k(f, 5, 0);
            if (!h) {
                e = f.MakeByter(f.U16(3), false);
                t.RealTimeDuration = e.Val();
                e.Val();
                g = t.Times = new Array(d = e.Val());
                j = e.Val();
                o = s < 30 ? 1 << (s + 1) : 0;
                for (l = 0; l < d; l++) {
                    p = e.Val();
                    m = e.Val();
                    if (m & o) {
                        m ^= o;
                        q = 0
                    } else {
                        if (s < 5) {
                            r = e.Byte();
                            if (s < 3) {
                                q = (r >> 2) & 3
                            } else {
                                q = r >> 4;
                                e.Byte()
                            }
                        } else {
                            e.Val();
                            q = e.Val();
                            e.Val();
                            e.Val()
                        }
                    }
                    g[l] = new b.Time(p, m, q)
                }
                for (r = 0; r < j; r++) {
                    n = new Array(d);
                    for (l = 0; l < d; l++) {
                        n[l] = (k += e.Val() / 25)
                    }
                    if (!r) {
                        t.TimeLine = n
                    }
                }
                r = e.Byte();
                while (r-- > 0) {
                    l = e.Val();
                    k = Math.min(e.Val(), d - 1);
                    i = e.Byte();
                    e.Byte();
                    while (l <= k) {
                        g[l++].RepeatNumber = i
                    }
                }
                if (this.i) {
                    o = e.Byte();
                    if (o) {
                        o = 1 << o;
                        for (l = 0; l < d; l++) {
                            if (g[l].Tracks & o) {
                                g[l].Chord = e.Val();
                                e.Val()
                            }
                        }
                    }
                    i = e.Val();
                    l = 0;
                    while (i-- > 0) {
                        k = e.Val() / 25;
                        r = e.Val();
                        e.Val();
                        for (; l < d && k > n[l]; l++) {}
                        if (l == d || k < n[l]) {
                            if (!l) {
                                p *= 25
                            } else {
                                p = n[l - 1];
                                if (p >= k) {
                                    p = 0
                                } else {
                                    p = (k - p) / ((l < d ? n[l] : k) - p);
                                    q = g[l - 1].Duration;
                                    p = q - Math.round(q * p);
                                    g[l - 1].Duration -= p
                                }
                            }
                            n.splice(l, 0, k);
                            g.splice(l, 0, new b.Time(p, o, 0));
                            d += 1
                        }
                        g[l].Chord = r
                    }
                }
                e.Done()
            }
            return h
        };
        c.prototype.Load = function(f, g, h, e) {
            var i = [
                    [1987079533, 2, this.j, "Preface"],
                    [1684958573, 8, this.l, "NoteDefs"],
                    [1684237677, 7, this.n, "Chords"],
                    [1684172141, 28, this.o, "BBoxes"],
                    [1685286253, 10, this.p, "Sequences"],
                    [1953525101, 9, this.r, "Performance"],
                    [1952804205, 9, this.s, "Expression"],
                    [1685351789, 0, this.t, "TimeMap"]
                ],
                j = i.length,
                l = new Array(j),
                k, d;
            for (k = 0; k < j; k++) {
                d = i[k];
                l[k] = f.MakeParser(d[0], d[1], this, d[2], d[3])
            }
            return f.Parse(h, g, l, e)
        };
        return c
    }());
    b.Loader = a
})(Aoide || (Aoide = {}));
var Mneme;
(function(b) {
    var a;
    (function(d) {
        var c = (function() {
            function e() {}
            return e
        }());
        d.FontInfo = c
    })(a = b.Render || (b.Render = {}))
})(Mneme || (Mneme = {}));
var Aoide;
(function(b) {
    function a(f, h, i, j) {
        var c = 0,
            l = h ? 40 : 64;

        function d(s, r, o) {
            var n, m = null,
                q, p;
            for (p = 0; p < s.Kids.length && !m; p++) {
                n = s.Kids[p];
                if (n.Id < 0) {
                    q = n.Bbox;
                    if (o >= q.Top && o <= q.Bottom && r >= q.Left && r <= q.Right) {
                        m = n
                    }
                }
            }
            return m
        }

        function g(w, s) {
            var y = null,
                r = s - 60,
                x, p = null,
                q, C = null,
                o, n, m = null,
                z, B, A = null,
                t, v = f.Kids,
                u = v.length;
            w += l;
            for (q = 0; !p && q < u; q++) {
                x = v[q];
                if (x.Bbox.Bottom >= r) {
                    p = x
                }
            }
            if (p) {
                while (p.Bbox.Top <= s + 20) {
                    for (o = 0; o < p.Kids.length; o++) {
                        x = p.Kids[o];
                        if (x.Bbox.Bottom >= r) {
                            C = x;
                            break
                        }
                    }
                    if (C && C.Bbox.Top <= s + 20 && (n = C.Kids)) {
                        for (z = 0; z < n.length; z++) {
                            x = n[z];
                            if (x.Bbox.Right > w) {
                                m = x;
                                break
                            }
                        }
                        if (m && m.Bbox.Left <= w + 20) {
                            B = m.Kids;
                            if (B) {
                                for (t = 0; !y && t < B.length; t++) {
                                    A = B[t];
                                    if (A.Bbox.Left <= w && A.Bbox.Right >= w) {
                                        y = d(A, w, s)
                                    }
                                }
                            }
                            if (!y) {
                                if (++z < n.length && (B = n[z].Kids)) {
                                    y = d(B[0], w, s)
                                }
                            }
                        }
                    }
                    if (!y && q < u) {
                        p = v[q++]
                    } else {
                        break
                    }
                }
            }
            if (y) {
                y.Id = c
            }
            c += 1
        }

        function k() {}
        var e = {
            Chr: function(m, n) {
                g(m, n)
            },
            Abstr: function(n, m, o) {
                if (n.length < 3) {
                    g(m, o)
                }
            },
            Clear: k,
            Rgb: k,
            Gray: k,
            LinJoin: k,
            LinCap: k,
            LinWid: k,
            Gsv: k,
            Grst: k,
            Eoclp: k,
            Clp: k,
            Rct: k,
            Rrct: k,
            XLat: k,
            Rot: k,
            Rotr: k,
            Arc: k,
            Arcn: k,
            Dot: k,
            Fil: k,
            Eofil: k,
            MvTo: k,
            Strk: k,
            LinTo: k,
            Line: k,
            Dshto: k,
            Wavy: k,
            Relstr: k,
            OutStr: k,
            Sid3: k,
            Sid4: k,
            Curv: k,
            FulSlr: k,
            Curvdsh: k,
            Beam: k,
            Elis: k,
            Fnt: k
        };
        i.Visit(j, e)
    }
    b.MapNotes = a
})(Aoide || (Aoide = {}));
var Aoide;
(function(h) {
    var c = (function() {
        function i(j) {
            this.Page = j;
            this.Low = 0
        }
        i.prototype.Play = function(j) {};
        i.prototype.Lite = function(k) {
            var j = this;
            k.Page(j.Page, j.Low);
            if (j.Next) {
                k.Predraw(j.Next.Page, j.Next.Needed)
            }
        };
        return i
    }());
    var g = (function() {
        function i(k, j) {
            this.M = k;
            this.Low = j
        }
        i.prototype.Play = function(j) {};
        i.prototype.Lite = function(j) {
            j.Scroll(this.M, this.Low)
        };
        return i
    }());
    var b = (function() {
        function i(j) {
            this.Rate = 60 / j
        }
        i.prototype.Play = function(j) {};
        i.prototype.Lite = function(j) {};
        return i
    }());
    var a = (function() {
        function i(n, m, j, l, o, p) {
            var k = this;
            k.BBox = n;
            k.P = m;
            k.N = j;
            k.O = Math.min(l, 127) / 127;
            k.Lasts = o;
            k.Id = p
        }
        Object.defineProperty(i.prototype, "Plays", {
            get: function() {
                return this.O > 0 || this.N < 0
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(i.prototype, "Velocity", {
            get: function() {
                return this.O * 127
            },
            enumerable: true,
            configurable: true
        });
        i.prototype.Play = function(k) {
            var j = this;
            if (j.O) {
                k.Note(j.P, j.N, j.O, j.Lasts)
            }
        };
        i.prototype.Lite = function(k) {
            var j = this,
                l = j.Id;
            if (l >= 0) {
                k.Lite(j.Plays ? 1 : 2, l, j.BBox)
            }
        };
        return i
    }());
    var e = (function() {
        function i(k, j) {
            this.Q = k;
            this.R = j
        }
        i.prototype.Play = function(j) {};
        i.prototype.Lite = function(j, k) {
            if (!k || this.R < k) {
                j.Lite(0, this.Q.Id, this.Q.BBox)
            }
        };
        return i
    }());
    var f = (function() {
        function i(j) {
            this.S = j
        }
        Object.defineProperty(i.prototype, "Mask", {
            set: function(j) {
                var k = this,
                    m = null,
                    l, n;
                if (k.S) {
                    for (n = 0; n < k.S.length; n++) {
                        l = k.S[n];
                        if (j ? l.Mask & j : !l.Mask) {
                            m = l.Functions;
                            break
                        }
                    }
                }
                k.T = m;
                k.V = -1;
                k.W = 0
            },
            enumerable: true,
            configurable: true
        });
        i.prototype.For = function(l) {
            var k = this,
                n = null,
                j = k.V,
                m = k.T;
            if (m) {
                if (l < k.W) {
                    j = -1
                }
                while (m.length > j + 1 && m[j + 1].Time <= l) {
                    j++
                }
                if (j >= 0) {
                    n = m[j];
                    k.W = n.Time;
                    k.V = j
                }
            }
            return n
        };
        i.prototype.Tempos = function(m) {
            var q = 80,
                p = 48,
                r, k, s, o, n, t, l, j;
            this.Mask = 0;
            if ((t = this.T)) {
                for (j = 0; j < t.length; j++) {
                    l = t[j];
                    k = l.Value;
                    r = l.ToValue;
                    o = l.Time;
                    n = l.EndTime;
                    if (o != n) {
                        q *= p / k;
                        s = (r - q) / (n - o);
                        q += s / 2;
                        do {
                            m(o, new b(q * k));
                            q += s
                        } while (++o < n);
                        m(o, new b(r * k))
                    }
                    m(o, new b(k * r));
                    q = r;
                    p = k
                }
            }
        };
        return i
    }());
    h.Funcs = f;
    var d = (function() {
        function i(E, o) {
            var y = E.Tracks.length,
                G, D, m, j, ag, N, ak, aa, L, ai, H, p, F, Y, P, W, J, O, I, T, K, z = [],
                w, R, v, x, S, ad, Z = new f(E.Performances),
                V, n = new f(E.Expressions),
                af, C, ab = -1,
                ah, l = 0,
                Q = 60 / (48 * 80),
                ac = 0,
                s = 0,
                r = 0,
                al, B, u, U = [0, 0, 0, 20, 25, 30],
                M = E.Times,
                ae = M.length,
                q = E.MidiInstruments,
                X = this;

            function A(t, am) {
                if (t < ae) {
                    if (!u[t]) {
                        u[t] = []
                    }
                    u[t].unshift(am)
                }
            }

            function aj() {
                var ao, ap, am, t, an = -1,
                    aq = -1;
                for (ak = 0; ak < ae; ak += 1) {
                    z = u[ak];
                    if (z) {
                        for (T = 0; T < z.length; T++) {
                            al = z[T];
                            if (al instanceof(a)) {
                                if (!al.Lasts) {
                                    if (an < 0) {
                                        an = ak
                                    }
                                } else {
                                    B = X.Y[ak];
                                    if (an >= 0) {
                                        ao = ak - an;
                                        ap = ao * 0.09375;
                                        if (aq >= 0 && ap > B - aq) {
                                            ap = B - aq
                                        }
                                        ap /= ao;
                                        while (an < ak) {
                                            X.Y[an] -= (ak - an) * ap;
                                            t = u[an];
                                            for (Y = 0; Y < t.length; Y++) {
                                                am = t[Y];
                                                if (am instanceof(a)) {
                                                    am.Lasts = ap
                                                }
                                            }
                                            an += 1
                                        }
                                        if (ak > C) {
                                            ak = ae
                                        }
                                        an = -1
                                    }
                                    aq = B
                                }
                                break
                            }
                        }
                    }
                }
            }

            function k() {
                var ao, ap, an = 80,
                    am = q.length,
                    t = M.length - 1;
                ab = -1;
                q.push(24);
                for (ak = 0; ak <= t; ak++) {
                    if (ak == t || M[ak].Chord) {
                        if (ab >= 0) {
                            ao = (X.Y[ak] - X.Y[ab]) - 3;
                            if (ao < 1) {
                                ao = 1
                            }
                            ap = E.Chords[M[ab].Chord];
                            z = u[ab];
                            if (!z) {
                                z = u[ab] = []
                            } else {
                                for (Y = 0; Y < z.length; Y++) {
                                    if (z[Y] instanceof a) {
                                        p = z[Y].Velocity;
                                        if (p) {
                                            an = p;
                                            break
                                        }
                                    }
                                }
                            }
                            p = Math.ceil(an * 0.5);
                            for (Y = 0; Y < ap.length; Y++) {
                                z.push(new a(null, am, ap[Y] + 12, p, ao, -1))
                            }
                        }
                        ab = ak
                    }
                }
            }
            u = X.X = new Array(ae);
            n.Tempos(A);
            m = 1;
            for (G = 0; G < y; G++, m <<= 1) {
                D = E.Tracks[G];
                S = -1, I = null;
                Z.Mask = m;
                n.Mask = m;
                ak = 0;
                for (j = 0; j < D.Sequences.length; j++) {
                    ag = D.Sequences[j];
                    if (ag.Articulation) {
                        ak = ag.Articulation
                    }
                    W = E.DescendTo(ag.Level);
                    while (W.Level < ag.Level && (J = W.NextSib)) {
                        W = J.DescendTo(ag.Level)
                    }
                    for (N = 0; W && N < ag.End; N++, W = W.NextSib) {
                        if (N < ag.Start) {
                            continue
                        }
                        for (aa = null; ak < ae; ak++) {
                            aa = M[ak];
                            if (aa.Tracks & m) {
                                break
                            }
                        }
                        if (aa && !aa.NoNotation(m)) {
                            if (aa.Chord) {
                                ab = M[ak].Chord
                            }
                            V = Z.For(ak);
                            H = V ? V.Value : 100;
                            L = E.TimeLine[ak];
                            af = n.For(L);
                            if (af) {
                                T = af.EndTime;
                                if (L <= T) {
                                    P = af.Value;
                                    F = af.ToValue - P;
                                    T -= af.Time;
                                    if (T) {
                                        F *= (L - af.Time) / T
                                    }
                                    H = Math.round(F) + P
                                }
                            }
                            P = W.Level;
                            while (P < 4 && W.Kids) {
                                W = W.Kids[0];
                                P += 1
                            }
                            if (P != 4 || !W.Kids) {
                                J = W
                            } else {
                                J = W.Kids[0];
                                P = 5
                            }
                            if (P < 5) {
                                Y = 1
                            } else {
                                z = new Array(Y = J.Mom.Kids.length)
                            }
                            ah = 0;
                            for (T = 0; T < Y; T++, J = J.NextSib) {
                                O = W.AscendTo(1);
                                K = O.AscendTo(0).Index;
                                if (K != S) {
                                    if (!(u[ak] && u[ak][0] instanceof c)) {
                                        A(ak, new c(K))
                                    }
                                    S = K
                                }
                                if (I != O) {
                                    I = O;
                                    R = u[ak] ? u[ak].length : 0;
                                    for (w = 0; w < R; w++) {
                                        if (u[ak][w] instanceof g) {
                                            break
                                        }
                                    }
                                    if (w == R) {
                                        if (!u[ak]) {
                                            u[ak] = []
                                        }
                                        u[ak].push(new g(O.Bbox.Top, O.Bbox.Bottom))
                                    }
                                }
                                if (P == 5) {
                                    ai = J.NoteData;
                                    w = ai.Shape.Notehead;
                                    if (o >= 2 && w == 11 && ab >= 0) {
                                        aa.Chord = ab
                                    }
                                    R = G;
                                    p = 0;
                                    x = ai.Semitone;
                                    if (x && ai.HasSound) {
                                        p = J.OrnamentCode;
                                        p = p > 5 ? 0 : U[p];
                                        p += H;
                                        if (D.Tab == 1) {
                                            p = 0;
                                            x = -1
                                        } else {
                                            if (w == 6 || w == 13) {
                                                if (D.Tab) {
                                                    p /= 5
                                                } else {
                                                    v = true;
                                                    R = y;
                                                    x = 37
                                                }
                                            }
                                        }
                                    }
                                    z[T] = new a(J.Bbox, R, x, p, ai.MidiCounts, J.Id);
                                    ah += 1
                                }
                            }
                            if (l < ah) {
                                l = ah
                            }
                            if (P == 5) {
                                if (!u[ak]) {
                                    u[ak] = z
                                } else {
                                    u[ak] = u[ak].concat(z)
                                }
                            }
                        }
                        ak++
                    }
                }
            }
            if (v) {
                q.push(128)
            }
            X.Y = new Array(ae);
            X.Z = [];
            S = -1;
            L = 0;
            for (ak = 0; ak < ae; ak += 1) {
                X.Y[ak] = L;
                L += M[ak].Duration;
                if (z = u[ak]) {
                    al = z[0];
                    if (al instanceof b && z.length > 1) {
                        al = z[1]
                    }
                    if (al instanceof c) {
                        if (S != al.Page) {
                            if (ad) {
                                ad.Next = al
                            }
                            ad = al;
                            S = ad.Page;
                            al.Needed = ak;
                            X.Z.push(ak)
                        } else {
                            z.shift()
                        }
                    } else {
                        if (al instanceof g) {
                            if (ad.Low < al.Low) {
                                ad.Low = al.Low
                            }
                        }
                    }
                }
            }
            if (E.Chords && (o == 3 || o > 0 && y == 1 && (l < 3 || q.length > 0 && q[0] == 54))) {
                k()
            }
            if (ak--) {
                u.push([new a(new h.BBox(), 0, 60, -1, 1, -1)]);
                X.Y[ae++] = this.Y[ak] + M[ak].Duration
            }
            C = -1;
            for (ak = 0; ak < ae; ak += 1) {
                z = u[ak];
                if (z) {
                    ac = X.Y[ak];
                    B = X.Y[ak] = (ac - r) * Q + s;
                    for (T = 0; T < z.length; T++) {
                        al = z[T];
                        if (al instanceof(a)) {
                            if (!(al.Lasts *= Q)) {
                                C = ak
                            }
                        } else {
                            if (al instanceof(b)) {
                                r = ac;
                                s = B;
                                Q = al.Rate
                            }
                        }
                    }
                }
            }
            if (ae) {
                for (ad = u[0][0]; ad; ad = ad.Next) {
                    ad.Needed = this.Y[ad.Needed]
                }
            }
            if (C >= 0) {
                aj()
            }
            for (ak = 0; ak < ae; ak += 1) {
                z = u[ak];
                if (z) {
                    ac = X.Y[ak];
                    R = x = -1;
                    for (T = 0; T < z.length; T++) {
                        al = z[T];
                        if (al instanceof a && al.Id >= 0) {
                            B = al.Lasts;
                            if (B < 0.17) {
                                B = 0.17
                            }
                            B += ac;
                            Y = ak;
                            while (++Y < ae && X.Y[Y] < B) {}
                            if (Y >= ae || X.Y[Y] > B) {
                                X.Y.splice(Y, 0, B);
                                u.splice(Y, 0, []);
                                ae++
                            }
                            u[Y].push(new e(al, this.Y[ak]));
                            if (al.Plays) {
                                if (x < 0) {
                                    x = T
                                }
                            } else {
                                R = T
                            }
                        }
                    }
                    if (x >= 0 && x < R) {
                        while (x < R) {
                            al = z[x];
                            if (al instanceof a && al.Id >= 0 && al.Plays) {
                                z.splice(x, 1);
                                z.push(al);
                                R -= 1
                            } else {
                                x += 1
                            }
                        }
                    }
                }
            }
            X.Start()
        }
        i.prototype.Start = function() {
            this.c = this.a = this.b = 0
        };
        i.prototype.Resume = function() {
            var j = this,
                k = j.c;
            if (k) {
                j.a = k;
                k = j.Y[k]
            } else {
                j.Start()
            }
            return k
        };
        i.prototype.Mark = function(k, j) {
            var m = this,
                l;
            if (j) {
                while (m.Upto(false, k)) {}
            }
            l = m.b;
            while (l > 0 && k - m.Y[l - 1] < 0.2) {
                --l
            }
            m.c = l
        };
        i.prototype.Upto = function(o, p) {
            var k = this,
                l = o ? k.a : k.b,
                j = k.X,
                m = null,
                n;
            while (l < j.length && !j[l]) {
                l++
            }
            if (l < j.length) {
                n = k.Y[l];
                if (n <= p) {
                    m = j[l++]
                }
            }
            if (o) {
                k.a = l
            } else {
                k.b = l
            }
            return m ? {
                Time: n,
                Events: m
            } : m
        };
        Object.defineProperty(i.prototype, "Next", {
            get: function() {
                var k = this.Y,
                    j = this.b;
                return j < k.length ? k[j] : 9999
            },
            enumerable: true,
            configurable: true
        });
        return i
    }());
    h.Passage = d
})(Aoide || (Aoide = {}));
var Aoide;
(function(c) {
    var b = (function() {
        function d(j, i, g, e, h) {
            var f = this;
            f.M = j;
            f.N = i;
            f.O = g;
            f.P = e;
            f.Q = h;
            f.R = f.S = 0;
            f.T = Math.pow(2, 1 / 12)
        }
        Object.defineProperty(d.prototype, "Patch", {
            get: function() {
                return this.M
            },
            enumerable: true,
            configurable: true
        });
        d.prototype.Note = function(g) {
            var f = this,
                e = Math.round((g -= f.P) / f.O);
            if (e >= f.N.length) {
                e = f.N.length - 1
            }
            if (e < 0) {
                e = 0
            }
            var j = f.N[e],
                i = (j.Audio),
                h = Math.pow(f.T, g - e * f.O);
            return {
                Rate: h,
                From: j.From / h,
                To: j.To / h,
                Audio: i,
                Lasts: i.duration / h
            }
        };
        d.prototype.Decode = function(h, i) {
            var g = this,
                f = true,
                j;

            function e() {
                if (f) {
                    i(f = false)
                }
            }

            function k(l) {
                h.decodeAudioData((l.Audio), function(m) {
                    l.Audio = m;
                    if ((g.R += 1) == g.N.length && f) {
                        i(true)
                    }
                }, e)
            }
            if (!h) {
                e()
            } else {
                if (!g.R) {
                    for (j = 0; j < g.N.length; j++) {
                        k(g.N[j])
                    }
                }
            }
        };
        return d
    }());
    c.SoundFont = b;
    var a = (function() {
        function d(e, g) {
            var h = this;
            this.b = null;
            var f = this;
            f.c = e;
            f.a = g;
            if (!d.fonts) {
                d.fonts = []
            }
            f.U = [];
            f.V = f.W = f.X = 0;
            f.Y = 0;
            f.Z = "/assets/mnsf/";
            e.LoadSoundFontHandler = function(i) {
                return h.d(i)
            }
        }
        d.prototype.d = function(f) {
            var m = this,
                y = f.Data,
                x = 0,
                o = y.length,
                i;

            function s(t) {
                t += x;
                return (y[t] << 8) + y[t + 1]
            }

            function l() {
                m.X += 1
            }
            if (o < 24 || y[4] > 1 || (i = s(6)) < 16) {
                l();
                return
            }
            var g = y[8],
                e = s(10),
                A = y[12],
                h = y[13],
                p = y[14],
                r = y[15],
                j = Math.floor((h - A) / p),
                w = new Array(j + 1),
                z, n, u, k;

            function v(t) {
                return e > 0 ? s(t) / e : 0
            }
            for (z = 0; z <= j; z++) {
                x += i;
                if (x + r > o || y[0 + x] != A + z * p) {
                    l();
                    return
                }
                i = (y[x + 1] << 16) + s(1 + 1);
                if (x + i > o) {
                    l();
                    return
                }
                n = v(4);
                u = v(6);
                x += r;
                k = y.buffer.slice(x, x + i);
                w[z] = {
                    From: n,
                    To: u,
                    Audio: k
                }
            }
            m.V += 1;
            var q = new b(g, w, p, A, h);
            d.fonts[g] = q;
            q.Decode(m.a, function(t) {
                if (t) {
                    m.W += 1
                } else {
                    l();
                    m.V -= 1
                }
                m.e()
            })
        };
        d.prototype.Font = function(g) {
            var f = d.fonts;
            var e = f[g];
            for (g = 0; !e && g < f.length; g++) {
                e = f[g]
            }
            return e ? e : null
        };
        Object.defineProperty(d.prototype, "Encoding", {
            get: function() {
                return this.Y
            },
            set: function(e) {
                if (e > 0 && e < 3) {
                    this.Y = e
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(d.prototype, "FontsUrl", {
            get: function() {
                return this.Z
            },
            set: function(f) {
                var e = f.length;
                if (e == 0 || f.charAt(e - 1) != "/") {
                    f += "/"
                }
                this.Z = f
            },
            enumerable: true,
            configurable: true
        });
        d.prototype.e = function() {
            var e = this;
            if (e.b && e.W + e.X >= e.U.length) {
                e.b(e.ReadyFonts, e.X)
            }
        };
        d.prototype.f = function(f) {
            var e = this;
            e.c.LoadFromUrl(e.Z + f + "." + d.encodingNames[e.Y] + ".mnsf", null, function() {
                e.X += 1;
                e.e()
            })
        };
        d.prototype.Prepare = function(k, h) {
            var g = this,
                e = true,
                j, i, f = g.U;
            if (h) {
                g.b = h
            }
            for (j = 0; j < k.length; j++) {
                i = k[j];
                if (!d.fonts[i]) {
                    e = false;
                    if (f.indexOf(i) < 0) {
                        f.push(i);
                        g.f(i)
                    }
                }
            }
            if (e) {
                g.e()
            }
        };
        d.prototype.Progress = function() {
            var e = this.U.length;
            if (!e) {
                return 0
            }
            return ((this.V + this.W) / 2 + this.X) / e
        };
        Object.defineProperty(d.prototype, "ReadyFonts", {
            get: function() {
                return this.W
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(d.prototype, "FailedFonts", {
            get: function() {
                return this.X
            },
            enumerable: true,
            configurable: true
        });
        return d
    }());
    a.encodingNames = ["mp3", "mp3", "ogg"];
    c.Foundry = a
})(Aoide || (Aoide = {}));