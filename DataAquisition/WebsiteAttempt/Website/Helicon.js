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
var Thelxinoe;
(function(b) {
    var a;
    (function(c) {
        function d() {
            return new Thelxinoe.Aiakos()
        }
        c.CreateAikos = d
    })(a = b.I || (b.I = {}))
})(Thelxinoe || (Thelxinoe = {}));
var Melete;
(function(b) {
    var a;
    (function(c) {
        var e;
        (function(f) {
            f[f.Unknown = 0] = "Unknown";
            f[f.Closed = 1] = "Closed";
            f[f.Printing = 2] = "Printing"
        })(e = c.Dismissal || (c.Dismissal = {}));
        var d;
        (function(f) {
            f[f.Ok = 0] = "Ok";
            f[f.Problem = 1] = "Problem";
            f[f.GetSupport = 2] = "GetSupport"
        })(d = c.SessionResult || (c.SessionResult = {}))
    })(a = b.I || (b.I = {}))
})(Melete || (Melete = {}));
var Helicon;
(function(b) {
    var a = (function() {
        function c(d) {
            // INIT FUNCTION FOR HCN
            var e = this;
            if (!d || typeof d != "object" || !d.Canvas) {
                d = new Mneme.Mn(d)
            }
            e.H = d;
            d.Hcn = this;
            e.K = 0;
            if (typeof Aoide == "object" && Aoide.Ao) {
                e.J = new Aoide.Ao(e);
                e.J.NewPage = function(f) {
                    e.Page = f + e.H.FirstPageNumber
                }
            }
            if (!c.browser) {
                e.Q(navigator.userAgent)
            }
        }
        Object.defineProperty(c, "Browser", {
            get: function() {
                return c.browser
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c, "Platform", {
            get: function() {
                return c.platform
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.Q = function(d) {
            var e = [, "Windows", "Macintosh", "Android", "Linux"];

            function f(g) {
                var h;
                for (h = 0; h < g.length; h++) {
                    if (d.indexOf(g[h]) >= 0) {
                        break
                    }
                }
                return h
            }
            c.browser = f(c.knownBrowsers);
            c.platform = f(e)
        };
        Object.defineProperty(c.prototype, "BrowserName", {
            get: function() {
                var d = "Unknown",
                    e = c.browser;
                if (e > 0 && e < 7) {
                    d = c.knownBrowsers[e].replace("/", "")
                }
                return d
            },
            enumerable: true,
            configurable: true
        });
        c.IsOurWoff = function(d) {
            return c.ourWoffs.indexOf(d) >= 0
        };
        c.MbedWoffs = function(g, e) {
            var h, d, f;
            f = e.length;
            if (f) {
                h = g.createElement("div");
                h.style.visibility = "hidden";
                do {
                    d = g.createElement("span");
                    d.style.fontFamily = e[--f];
                    d.textContent = "G";
                    h.appendChild(d)
                } while (f);
                g.body.appendChild(h)
            }
        };
        c.prototype.RegPrintFrame = function(d) {
            this.R = d
        };
        c.prototype.PrepPrint = function(j) {
            var e = c.browser,
                k, i = [],
                h, g, d;

            function f() {
                c.MbedWoffs(k, i)
            }
            if (!j) {
                j = this.R;
                this.R = null
            }
            if (j && (e == 3 || e == 2)) {
                h = this.Fonts, d = h.length;
                while (--d >= 0) {
                    g = h[d];
                    if (c.IsOurWoff(g) && i.indexOf(g) < 0) {
                        i.push(g)
                    }
                }
                k = (j.contentWindow || j).document;
                if (k.readyState == "complete") {
                    f()
                } else {
                    k.addEventListener("DOMContentLoaded", f)
                }
            }
        };
        c.prototype.NewPage = function(e, d) {
            this.Page = e;
            this.Render(d)
        };
        c.prototype.TurnPage = function(e, d) {
            this.NewPage(this.Page + e, d);
            this.ScrollPos(0)
        };
        c.prototype.MessageFor = function(e) {
            var d = Math.abs(e);
            if (d >= c.errmess.length) {
                return "Unknown"
            }
            return c.errmess[d]
        };
        c.deComma = function(e) {
            var d = e.indexOf(", ");
            if (d < 0 || e.indexOf(" & ") > 0 || e.indexOf(" and ") > 0) {
                return e
            }
            return e.substr(d + 2) + " " + e.substr(0, d)
        };
        c.prototype.GetMunfos = function(f, d) {
            var g, e = this.H.GetMunfos(f),
                h;
            if (!e) {
                e = []
            }
            if (d) {
                h = e;
                e = new Array(h.length);
                for (g = 0; g < e.length; g++) {
                    e[g] = c.deComma(h[g])
                }
            }
            return e
        };
        c.prototype.GetFirstMunfo = function(f, d) {
            var e = this.H.GetFirstMunfo(f);
            if (d) {
                e = c.deComma(e)
            }
            return e
        };
        Object.defineProperty(c.prototype, "LoadSuccessHandler", {
            set: function(d) {
                this.M = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "LoadFailureHandler", {
            set: function(d) {
                this.L = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "LoadXmlHandler", {
            set: function(d) {
                this.N = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "LoadSoundFontHandler", {
            set: function(d) {
                this.O = d
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.LoadNewData = function(m, d, g) {
            var l = "",
                e = 5,
                f = -1,
                j, i, h, k = this;
            if (!d) {
                d = k.L
            }
            if (m.byteLength >= 3) {
                j = m[0];
                i = m[1];
                h = m[2]
            }
            if (j == 82 && i == 73 && h == 70) {
                e = 0;
                if (k.J) {
                    k.J.Clear()
                }
                f = k.H.LoadMtd(m, g);
                m = null;
                if (f >= 0) {
                    d = k.M;
                    k.PrepPrint()
                }
                if (f != 0) {
                    l = k.MessageFor(f)
                }
            } else {
                if (j == 77 && i == 78 && h == 83) {
                    e = 3;
                    if (k.O) {
                        d = k.O
                    }
                } else {
                    l = c.errmess[1];
                    if (j == 239 && i == 187 && h == 191 && m.byteLength >= 6) {
                        m = m.subarray(3);
                        j = m[0];
                        i = m[1];
                        h = m[2]
                    }
                    if (j == 60) {
                        if (i == 63 && h == 120) {
                            e = 1;
                            if (k.N) {
                                d = k.N
                            }
                        } else {
                            if (i == 104 && h == 84 || i == 33 && h == 68) {
                                e = 2
                            }
                        }
                    }
                }
            }
            if (d) {
                d({
                    Type: e,
                    Code: f,
                    Diag: l,
                    Data: m
                })
            }
        };
        c.prototype.LoadFromUrl = function(e, d, j, i) {
            var l = this,
                g = new XMLHttpRequest(),
                f;

            function k(m) {
                f = true;
                if (l.L) {
                    l.L({
                        Type: 4,
                        Code: m,
                        Diag: "Internet Data Request failed"
                    })
                }
            }
            if (!d) {
                d = null
            }
            g.open("GET", e, true);
            g.responseType = "arraybuffer";
            if (!j) {
                j = k
            }
            g.addEventListener("error", function() {
                f = true;
                j(-1)
            });
            if (c.browser == 6 && g.overrideMimeType) {
                g.overrideMimeType("application/octet-stream")
            }
            g.ontimeout = function() {
                f = true;
                j(-2)
            };
            g.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            g.onload = function() {
                if (g.status > 399) {
                    j(g.status)
                } else {
                    l.LoadNewData(new Uint8Array(g.response), null, i)
                }
            };
            try {
                g.send(d)
            } catch (h) {
                if (!f) {
                    j(-3)
                }
            }
        };
        Object.defineProperty(c.prototype, "Parser", {
            get: function() {
                return this.H
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.Clone = function(d, f) {
            var e = new c(d);
            e.Parser.Clone(this.H, f ? f : 0);
            return e
        };
        Object.defineProperty(c.prototype, "Page", {
            get: function() {
                return this.H.Page
            },
            set: function(e) {
                if (!isNaN(e = Number(e))) {
                    var d = this;
                    d.H.Page = Math.floor(e);
                    if (d.P) {
                        d.P(d.Page)
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "PageChangeHandler", {
            set: function(d) {
                this.P = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "Size", {
            set: function(d) {
                this.H.Size = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "Horizontal", {
            get: function() {
                return this.H.Horizontal
            },
            set: function(d) {
                this.H.Horizontal = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "Vertical", {
            get: function() {
                return this.H.Vertical
            },
            set: function(d) {
                this.H.Vertical = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "Aspect", {
            get: function() {
                return this.H.Aspect
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "NoYBar", {
            set: function(d) {
                this.H.NoYBar = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "Approve", {
            set: function(d) {
                this.H.Approve = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "Fonts", {
            get: function() {
                return this.H.Fonts
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.S = function(e) {
            var d = -1,
                f;
            if (e.length >= 3) {
                while (++d < 3) {
                    f = e[d];
                    if (typeof f != "number" || f < 0 || f > 255) {
                        break
                    }
                }
            }
            return d == 3
        };
        Object.defineProperty(c.prototype, "Color", {
            set: function(d) {
                if (this.S(d)) {
                    this.H.Color = d
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "BgColor", {
            set: function(d) {
                if (this.S(d)) {
                    this.H.BgColor = d
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "PprColor", {
            set: function(d) {
                if (this.S(d)) {
                    this.H.PprColor = d
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "Zoom", {
            get: function() {
                return this.H.Zoom
            },
            set: function(d) {
                this.H.Zoom = d;
                this.K = 0
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "Rect", {
            get: function() {
                return this.H.Rect
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "ZoomMode", {
            get: function() {
                return this.K
            },
            set: function(d) {
                this.K = d;
                if (d > 0) {
                    this.H.FitTo(d == 2)
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "FirstPageNumber", {
            get: function() {
                return this.H.FirstPageNumber
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "LastPageNumber", {
            get: function() {
                return this.H.LastPageNumber
            },
            set: function(val) {
                breakpoint;
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.Render = function(d) {
            return this.H.Ready ? this.H.Render(d) : 7
        };
        c.prototype.Rescale = function(f) {
            var e = this,
                d = e.H;
            if (f) {
                e.K = 0
            }
            if (e.K) {
                d.FitTo(e.K == 2)
            } else {
                d.Zoom = f
            }
            d.Scale()
        };
        c.prototype.Draw = function(e, f, d, g) {
            return this.H.Render(g, f, e, d)
        };
        Object.defineProperty(c.prototype, "Canvas", {
            get: function() {
                return this.H.Canvas
            },
            set: function(d) {
                this.H.Canvas = d
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.T = function() {
            if (!this.I && b.Clio) {
                this.I = (b.Clio).CreateClio(this)
            }
            return this.I
        };
        Object.defineProperty(c.prototype, "Clio", {
            set: function(d) {
                this.I = d
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "ApiProblemHandler", {
            set: function(d) {
                var e = this.T();
                if (e) {
                    e.ApiProblemHandler = d
                }
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.Session = function(g, f, d) {
            var e = this.T();
            if (e) {
                e.Session(g, f, d)
            }
        };
        c.prototype.Fetch = function(h, e, d, g) {
            var f = this.T();
            if (f) {
                return f.Fetch(h, e, d, g)
            }
            return false
        };
        c.prototype.Tally = function(d) {
            var e = this.I;
            if (e) {
                e.Tally(d)
            }
        };
        c.prototype.Confirm = function(d, f, g, h, i) {
            var e = this.I;
            if (e) {
                e.Result(d, g, h, i);
                e.Confirm(f)
            }
        };
        c.prototype.ToDeliver = function(g, f, e) {
            var d = this.I;
            if (!d) {
                throw "Clio missing"
            }
            return d.ToDeliver(g, f, e)
        };
        Object.defineProperty(c.prototype, "Copies", {
            get: function() {
                var d = this.I;
                return d ? d.Copies : 200
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "PlaySupported", {
            get: function() {
                return this.J && this.J.PlaySupported
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "Playing", {
            get: function() {
                return this.J && this.J.Playing
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.Visit = function(e, d) {
            this.H.Render(null, e, null, null, d)
        };
        Object.defineProperty(c.prototype, "Chording", {
            set: function(d) {
                if (this.J) {
                    this.J.Chording = d
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "Gain", {
            get: function() {
                return this.J ? this.J.Gain : 0
            },
            set: function(d) {
                if (this.J) {
                    this.J.Gain = d
                }
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.Play = function(e, d) {
            if (this.J) {
                this.J.Play(e, d)
            }
        };
        c.prototype.Stop = function() {
            if (this.J) {
                this.J.Stop()
            }
        };
        c.prototype.Pause = function(d) {
            return this.J && this.J.Pause(d)
        };
        Object.defineProperty(c.prototype, "ReadyHandler", {
            set: function(d) {
                if (this.J) {
                    this.J.ReadyHandler = d
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "EndHandler", {
            set: function(d) {
                if (this.J) {
                    this.J.EndHandler = d
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "MnsfDir", {
            set: function(d) {
                if (this.J) {
                    this.J.Foundry.FontsUrl = d
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(c.prototype, "LoadedFonts", {
            set: function(d) {
                this.H.LoadedFonts = d[0] == "*" ? d : c.ourWoffs
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.ScrollPos = function(e, f, d) {
            this.H.ScrollPos(e, f, d)
        };
        c.prototype.RePosY = function() {
            this.H.RePosY()
        };
        return c
    }());
    a.errmess = ["Success", "Not digital sheet music", "Reading sheet music data", "Out of memory", "Unsupported version", "Digital sheet music data garbled", "Reconstituting sheet music data", "Permission denied", "RECOVERED_READ", "Program fault"];
    a.knownBrowsers = [, "Edge/", "OPR/", "Chrome/", "Firefox/", "Safari/", "Trident/"];
    a.browser = 0;
    a.platform = 0;
    a.ourWoffs = ["Doremi", "Jive", "Jivetalk"];
    b.Hcn = a
})(Helicon || (Helicon = {}));
var Mneme;
(function(b) {
    var a;
    (function(c) {})(a = b.I || (b.I = {}))
})(Mneme || (Mneme = {}));
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
var Mneme;
(function(b) {
    var a = (function() {
        function c(d) {
            this.d = d;
            this.Pos = 0
        }
        c.prototype.Read = function(h, f) {
            var g = this.Pos,
                e = this.d,
                d = e.byteLength - g;
            if (f > d) {
                f = d
            }
            h.set(e.subarray(g, g + f));
            this.Pos += f;
            return f
        };
        return c
    }());
    b.ByteReader = a
})(Mneme || (Mneme = {}));
var Mneme;
(function(c) {
    var b = (function() {
        function d(e, f) {
            this.reader = e;
            if (c.Mn.Ndef(f)) {
                f = true
            }
            this.LNdian = f
        }
        d.prototype.Skip = function(e) {
            return c.Skip(this.reader, e)
        };
        d.prototype.ToGo = function(e) {
            return e - this.reader.Pos
        };
        d.prototype.GetChunk = function(f, j) {
            var g = this,
                h = 0,
                k, i, e, l;
            j.IsList = false;
            j.Id = 0;
            j.Len = 0;
            if (g.reader.Pos & 1) {
                g.Skip(1)
            }
            if (g.ToGo(f) < 8) {
                h = -1
            } else {
                k = new Uint8Array(8);
                if (g.reader.Read(k, 8) != 8) {
                    h = -2
                } else {
                    i = new DataView(k.buffer, 0, 8);
                    e = i.getInt32(4, g.LNdian);
                    l = i.getInt32(0, true);
                    if (l == 1414744396) {
                        j.IsList = true;
                        if (g.ToGo(f) < 4) {
                            h = -1
                        } else {
                            e -= 4;
                            if (g.reader.Read(k, 4) != 4) {
                                h = -1
                            }
                            l = i.getInt32(0, true)
                        }
                    }
                    if (e < 0 || e > 2 * 1024 * 1024 || k[0] < 32 || k[1] < 32 || k[2] < 32 || k[3] < 32) {
                        h = -2
                    } else {
                        j.Len = e;
                        j.Id = l
                    }
                }
            }
            return h
        };
        d.prototype.NextChunk = function(e, f, h) {
            var g;
            do {
                g = this.GetChunk(e, f);
                if (g < 0) {
                    break
                }
                g = h.indexOf(f.Id);
                if (g == -1) {
                    this.Skip(f.Len)
                }
            } while (g < 0);
            return g
        };
        d.prototype.RiffStart = function() {
            var h = -1;
            var k = new Uint8Array(12),
                i = this.reader.Read(k, 12);
            if (i == 12) {
                if (k[0] == 82 && k[1] == 73 && k[2] == 70) {
                    var f = k[3];
                    if (f == 70 || f == 88) {
                        var e = new DataView(k.buffer, 4, 8);
                        var j = e.getInt32(4, true);
                        if (j == 1178883149) {
                            var g = f == 70;
                            this.LNdian = g;
                            h = e.getInt32(0, g)
                        }
                    }
                }
            }
            return h
        };
        return d
    }());
    c.Chunker = b;
    var a = (function(d) {
        __extends(e, d);

        function e(g, f, h) {
            var i = d.call(this, g, h) || this;
            i.J = (f < 0 ? 0 : f) + g.Pos;
            i.I = new Uint8Array(1);
            i.L = false;
            return i
        }
        e.prototype.More = function() {
            return this.ToGo(this.J) > 0
        };
        e.prototype.Done = function() {
            var f = this.ToGo(this.J);
            if (f > 0) {
                this.Skip(f)
            }
        };
        e.prototype.Byte = function() {
            if (this.reader.Read(this.I, 1) != 1) {
                return 0
            } else {
                return this.I[0]
            }
        };
        e.prototype.Next = function() {
            if (this.L) {
                this.L = false;
                return this.K
            }
            return this.Byte()
        };
        e.prototype.Peek = function() {
            this.K = this.Byte();
            this.L = true;
            return this.K
        };
        e.prototype.String = function() {
            var f = this.Byte(),
                g = new Uint8Array(f);
            if (this.reader.Read(g, f) == f) {
                return c.RdStr(g, f)
            }
            return ""
        };
        e.prototype.Val = function() {
            var f;
            var g = 0;
            while (this.More()) {
                f = this.Byte();
                g = (g << 7) + f;
                if (f >= 128) {
                    g -= 128
                } else {
                    break
                }
            }
            return g
        };
        e.prototype.Signed = function() {
            var f = this.Val();
            if (f & 1) {
                f = ~f
            }
            return f >> 1
        };
        return e
    }(b));
    c.Byter = a
})(Mneme || (Mneme = {}));
var Mneme;
(function(b) {
    var a;
    (function(d) {
        var c = (function() {
            function e() {
                var h, f, g = this;
                g.U = new Array(1257 + 1);
                g.V = new Array(1257 + 1);
                for (h = 2; h <= 1257; h++) {
                    g.U[h] = Math.floor(h / 2);
                    g.V[h] = 1
                }
                g.S = new Array(628 + 1);
                g.T = new Array(628 + 1);
                for (h = 1; h <= 628; h++) {
                    g.S[h] = 2 * h;
                    g.T[h] = 2 * h + 1
                }
                g.O = new Array(6);
                g.W = [4, 6, 8, 10, 12, 14];
                f = 0;
                for (h = 0; h < 6; h++) {
                    g.O[h] = f;
                    f += 1 << g.W[h]
                }
                g.P = f - 1 + 64;
                g.N = 0;
                g.Z = new Uint8Array(g.P)
            }
            e.prototype.Initialize = function(j) {
                var h = this,
                    f = new Uint8Array(2);

                function i() {
                    if (j.Read(f, 2) != 2) {
                        h.R = true;
                        return 0
                    }
                    return (f[0] << 8) + f[1]
                }
                h.a = j;
                var g = 0;
                if (!h.a) {
                    h.R = true
                } else {
                    h.R = false;
                    g = i();
                    if (g >= 32768) {
                        g = g - 32768 + (i() << 15)
                    }
                }
                h.UncompressedSize = g;
                h.X = new Uint8Array(1);
                h.Q = 0;
                h.Pos = 0
            };
            e.prototype.CannotFinish = function() {
                this.R = true
            };
            e.prototype.b = function(k) {
                var j = this,
                    f, m, i, l, g = k + 629;

                function h(o, n) {
                    var p;
                    do {
                        if ((p = j.V[o] + j.V[n]) > 32767) {
                            p -= 65536
                        } else {
                            if (p < -32768) {
                                p += 65536
                            }
                        }
                        j.V[o = j.U[o]] = p;
                        if (o != 1) {
                            p = j.U[o];
                            n = j.S[p] == o ? j.T[p] : j.S[p]
                        }
                    } while (o != 1);
                    if (j.V[1] == 2000) {
                        for (o = 1; o <= 1257; o++) {
                            j.V[o] >>= 1
                        }
                    }
                }++j.V[g];
                if (j.U[g] != 1) {
                    i = j.U[g];
                    if (j.S[i] == g) {
                        h(g, j.T[i])
                    } else {
                        h(g, j.S[i])
                    }
                    do {
                        l = j.U[i];
                        if (j.S[l] == i) {
                            f = j.T[l]
                        } else {
                            f = j.S[l]
                        }
                        if (j.V[g] > j.V[f]) {
                            if (j.S[l] == i) {
                                j.T[l] = g
                            } else {
                                j.S[l] = g
                            }
                            if (j.S[i] == g) {
                                j.S[i] = f;
                                m = j.T[i]
                            } else {
                                j.T[i] = f;
                                m = j.S[i]
                            }
                            j.U[f] = i;
                            j.U[g] = l;
                            h(f, m);
                            g = f
                        }
                        g = j.U[g];
                        i = j.U[g]
                    } while (i != 1)
                }
            };
            e.prototype.c = function() {
                var f = this,
                    g;
                if (f.Q-- == 0) {
                    if (f.a.Read(f.X, 1) != 1) {
                        return 256
                    }
                    f.Y = f.X[0];
                    f.Q = 7
                }
                g = (f.Y & 128) != 0 ? 1 : 0;
                f.Y = (f.Y << 1) & 255;
                return g
            };
            e.prototype.d = function(j) {
                var f, k = 1,
                    h = 0,
                    g;
                for (f = 0; f < j; f++) {
                    g = this.c();
                    if (g) {
                        if (g == 256) {
                            return -1
                        }
                        h |= k
                    }
                    k <<= 1
                }
                return h
            };
            e.prototype.e = function() {
                var f = 1,
                    g;
                do {
                    g = this.c();
                    if (g == 256) {
                        return g
                    }
                    if (g) {
                        f = this.T[f]
                    } else {
                        f = this.S[f]
                    }
                } while (f <= 628);
                f -= 629;
                this.b(f);
                return f
            };
            e.prototype.IsFinished = function() {
                var g = true,
                    f = this;
                if (f.Z) {
                    if (!f.R) {
                        g = f.e() == 256
                    }
                    f.Z = null;
                    f.X = null
                }
                return g
            };
            e.prototype.Read = function(m, h) {
                var g = this,
                    l, f, k, j = 0;

                function i(n) {
                    m[j++] = n;
                    g.Z[g.N] = n;
                    if (++g.N >= g.P) {
                        g.N = 0
                    }
                    g.Pos += 1
                }
                while (j < h && !g.R) {
                    if (g.L) {
                        g.L -= 1;
                        i(g.Z[g.M]);
                        if (++g.M >= g.P) {
                            g.M = 0
                        }
                    } else {
                        l = g.e();
                        if (l == 256) {
                            g.R = true
                        } else {
                            if (l < 256) {
                                i(l)
                            } else {
                                f = Math.floor((l - 257) / 62);
                                g.L = l - 257 + 3 - f * 62;
                                k = g.d(g.W[f]);
                                if (k == -1) {
                                    g.R = true;
                                    continue
                                }
                                k += g.L + g.O[f];
                                k = g.N - k;
                                if (k < 0) {
                                    k += g.P
                                }
                                g.M = k
                            }
                        }
                    }
                }
                return j
            };
            return e
        }());
        d.Decompressor = c
    })(a = b.Decompress || (b.Decompress = {}))
})(Mneme || (Mneme = {}));
var Mneme;
(function(b) {
    var a;
    (function(i) {
        var l = (function() {
            function n(r, q, p, o) {
                this.Id = r;
                this.y = o;
                this.Needs = q;
                this.Mtd = p
            }
            n.prototype.Prep = function(o, p) {
                this.w = o;
                this.Max = o.Pos + p
            };
            n.prototype.ReadPlayer = function(q, o) {
                var p = 0;
                var r = this.Mtd.HandlePlayerData;
                if (r) {
                    p = r(q + o.Pos, o, this.Mtd.LNdian)
                } else {
                    b.Skip(o, q)
                }
                return p
            };
            n.prototype.Read = function(o) {
                if (this.w.Pos + o > this.Max) {
                    return false
                }
                this.Bytes = new Uint8Array(o);
                return this.w.Read(this.Bytes, o) == o
            };
            n.prototype.DView = function(p, q) {
                var o = this;
                if (b.Mn.Ndef(p)) {
                    p = o.Needs
                }
                if (b.Mn.Ndef(q)) {
                    q = o.Mtd.Endian
                }
                o.x = q;
                if (!o.Read(p)) {
                    return -2
                }
                o.v = new DataView(o.Bytes.buffer, 0, p);
                return 0
            };
            n.prototype.I16 = function(o) {
                return this.v.getInt16(o, this.x)
            };
            n.prototype.U16 = function(o) {
                return this.v.getUint16(o, this.x)
            };
            n.prototype.I32 = function(o) {
                return this.v.getInt32(o, this.x)
            };
            n.prototype.Skip = function(o) {
                return b.Skip(this.w, o)
            };
            n.prototype.Str = function(o) {
                if (!this.Read(o)) {
                    return null
                }
                return b.RdStr(this.Bytes, o)
            };
            n.prototype.MakeByter = function(o, p) {
                return new b.Byter(this.w, o, p)
            };
            return n
        }());
        i.ParserImpl = l;
        var m = (function(o) {
            __extends(n, o);

            function n(p) {
                return o.call(this, 1885631597, 8, p, "Preface") || this
            }
            n.prototype.Handler = function(r, p) {
                var s = this,
                    q;
                s.Prep(p, r);
                q = s.DView();
                if (q == 0) {
                    s.Mtd.PageCount = s.I16(4);
                    s.Mtd.Approval = (s.I16(6) & 4096) != 0
                }
                return q
            };
            return n
        }(l));
        i.PrefaceParser = m;
        var d = (function(o) {
            __extends(n, o);

            function n(p) {
                return o.call(this, 1852401520, 24, p, "PageInfo") || this
            }
            n.prototype.Handler = function(r, p) {
                var u = this,
                    s = u.Mtd;
                u.Prep(p, r);
                var q = u.DView();
                if (q == 0) {
                    s.PageHeight = u.I32(0);
                    s.PageWidth = u.I32(4);
                    s.StartPage = u.I16(8);
                    s.PageCount = u.I16(10);
                    s.FirstNumericalFolio = u.I16(20)
                }
                return q
            };
            return n
        }(l));
        i.PageInfoParser = d;
        var j = (function(o) {
            __extends(n, o);

            function n(p) {
                return o.call(this, 1330007625, 0, p, "Info") || this
            }
            n.prototype.Handler = function(q, p) {
                var u = this;
                u.Prep(p, q);
                var w = new b.Chunker(p, u.Mtd.LNdian);
                var s = {};
                var r;
                do {
                    r = w.GetChunk(u.Max, s);
                    if (r >= 0) {
                        var v = u.Str(s.Len - 1);
                        if (v == null) {
                            r = -2
                        } else {
                            w.Skip(1);
                            u.Mtd.AddMunfo(s.Id, v)
                        }
                    }
                } while (r >= 0);
                if (r == -1 && w.ToGo(u.Max) < 1) {
                    r = 0
                }
                return r
            };
            return n
        }(l));
        i.InfoParser = j;
        var f = (function(o) {
            __extends(n, o);

            function n(p) {
                return o.call(this, 1953392237, 0, p, "FontInfo") || this
            }
            n.prototype.Handler = function(r, u) {
                var x = this,
                    y = x.Mtd,
                    p = -2;
                x.Prep(u, r);
                if (x.Read(2)) {
                    var v = x.Bytes[0],
                        w = x.Bytes[1],
                        s = new Array(v),
                        q;
                    y.FontEncodings = new Array(v);
                    y.FontNames = new Array(v);
                    for (q = 0; q < v; q++) {
                        if (!x.Read(w)) {
                            break
                        }
                        s[q] = x.Bytes[2];
                        y.FontEncodings[q] = x.Bytes[3]
                    }
                    if (q == v) {
                        for (q = 0; q < v; q++) {
                            if ((y.FontNames[q] = x.Str(s[q])) == null) {
                                break
                            }
                        }
                        if (q == v) {
                            p = 0
                        }
                    }
                }
                return p
            };
            return n
        }(l));
        i.FontInfoParser = f;
        var h = (function(n) {
            __extends(o, n);

            function o(p) {
                return n.call(this, 1348760685, 0, p, "PageList") || this
            }
            o.prototype.Handler = function(r, w) {
                var B = this,
                    C = B.Mtd,
                    q = C.PageCount,
                    v = new b.Chunker(w, C.LNdian),
                    z = {},
                    A = 0,
                    u = 0,
                    y = 0;

                function s(D, t, E) {
                    return t.Read(D.PageData[y] = new Uint8Array(E), E) == E
                }
                var x = null;

                function p(D, t) {
                    if (!x) {
                        x = new b.Decompress.Decompressor()
                    }
                    x.Initialize(t);
                    if (!s(D, x, x.UncompressedSize)) {
                        u = -6
                    }
                }
                C.PageData = new Array(q);
                B.Prep(w, r);
                while (u == 0) { // Get readers ready
                    A = v.GetChunk(B.Max, z);
                    if (A < 0) {
                        break
                    }
                    if (y >= q) {
                        u = 5
                    } else {
                        switch (z.Id) {
                            case 1684305005: // mtdd
                                if (!s(C, w, z.Len)) {
                                    u = 5
                                }
                                break;
                            case 1667527789: // mtdc
                                p(C, w);
                                break;
                            case 2036626541: // mtdy
                                if (C.Aiakos && C.Aiakos.Ok()) {
                                    p(C, C.Aiakos.Prep(w))
                                } else {
                                    v.Skip(z.Len); // Unreadable section
                                    u = 7
                                }
                                break;
                            default:
                                u = 5
                        }
                        if (u == 0) {
                            y += 1;
                            if (y == q && x && !x.IsFinished()) {
                                u = -6 // Imediate stop error code
                            }
                        }
                    }
                }
                if (u == 0 && (A != -1 || y != q)) {
                    u = A
                }
                // C.PageCount = 6; // TO-DO: FIX! EDITED FOR SPECIFIC SONG
                return u
            };
            return o
        }(l));
        i.PageListParser = h;
        var e = (function(n) {
            __extends(o, n);

            function o(p) {
                return n.call(this, 1768188269, 0, p, "Thelxinoe") || this // midi
            }
            o.prototype.Handler = function(q, p) {
                if (!this.Mtd.InitAiakos()) {
                    b.Skip(p, q);
                    return C.PageCount
                }
                return this.Mtd.Aiakos.ReadIn(this.Mtd, q, p)
            };
            return o
        }(l));
        i.ThelxParser = e;
        var c = (function(o) {
            __extends(n, o);

            function n(p) {
                return o.call(this, 1145918573, 0, p, "Player") || this
            }
            n.prototype.Handler = function(q, p) {
                return this.ReadPlayer(q, p)
            };
            return n
        }(l));
        i.Player = c;
        var k = (function(n) {
            __extends(o, n);

            function o(p) {
                return n.call(this, 1481462893, 0, p, "Player") || this
            }
            o.prototype.Handler = function(s, q) {
                var p = new b.Decompress.Decompressor(),
                    r;
                p.Initialize(q);
                r = this.ReadPlayer(p.UncompressedSize, p);
                if (!r && !p.IsFinished()) {
                    r = -6
                }
                return r
            };
            return o
        }(l));
        i.XPlayer = k;
        var g = (function(n) {
            __extends(o, n);

            function o(p, t, s, q, r) {
                var u = n.call(this, t, s, p, r) || this;
                u.z = q;
                return u
            }
            o.prototype.Handler = function(r, p) {
                var s = this;
                s.Prep(p, r);
                var q = s.z.call(s.Mtd, this);
                var u = s.Max - p.Pos;
                if (u > 0) {
                    b.Skip(p, u)
                }
                return q
            };
            return o
        }(l));
        i.Proxy = g
    })(a = b.Parsers || (b.Parsers = {}))
})(Mneme || (Mneme = {}));
var Mneme;
(function(b) {
    var a;
    (function(c) {
        var d = (function() {
            function e() {
                this.Init();
                this.Parsers = [new b.Parsers.PrefaceParser(this), new b.Parsers.PageInfoParser(this), new b.Parsers.InfoParser(this), new b.Parsers.FontInfoParser(this), new b.Parsers.ThelxParser(this), new b.Parsers.PageListParser(this), new b.Parsers.XPlayer(this), new b.Parsers.Player(this)]
            }
            e.prototype.Init = function() {
                this.PageCount = 0;
                this.LNdian = true;
                this.Approval = false;
                this.E = {}
            };
            Object.defineProperty(e.prototype, "HandleXtraData", {
                set: function(f) {
                    this.D = f
                },
                enumerable: true,
                configurable: true
            });
            e.prototype.Parse = function(m, i, n, g) {
                var h = 0;
                var o = new b.Chunker(m),
                    k;
                o.LNdian = g;
                var f = [];
                for (k = 0; k < n.length; k++) {
                    f.push(n[k].Id)
                }
                var l = {};
                var j;
                do {
                    j = o.NextChunk(i, l, f);
                    if (j < 0) {
                        break
                    }
                    j = n[j].Needs > i - m.Pos ? -2 : n[j].Handler(l.Len, m);
                    if (j) {
                        h = j
                    }
                } while (h >= 0);
                if (h == 0 && j != -1 && Math.abs(m.Pos - i) > 1) {
                    h = j
                }
                return h
            };
            e.prototype.ReadIn = function(k) {
                var i = this,
                    h, g = new b.ByteReader(k),
                    f = new b.Chunker(g),
                    j = f.RiffStart();
                i.Init();
                if (j < 0) {
                    h = j
                } else {
                    j += 8;
                    h = i.Parse(g, j, i.Parsers, i.LNdian = f.LNdian);
                    if (i.D) {
                        i.D(k.length - g.Pos, g, i.LNdian)
                    }
                }
                return h
            };
            e.prototype.GetMunfos = function(g) {
                var f;
                f = g.charCodeAt(2) << 24;
                f += g.charCodeAt(1) << 16;
                f += g.charCodeAt(0) << 8;
                f += 73;
                return this.E[f]
            };
            e.first = function(f) {
                return b.Mn.Ndef(f) ? "" : f[0]
            };
            e.prototype.GetFirstMunfo = function(f) {
                return e.first(this.GetMunfos(f))
            };
            e.prototype.AddMunfo = function(h, f) {
                var g = this.E[h];
                if (g) {
                    g.push(f)
                } else {
                    this.E[h] = [f]
                }
            };
            Object.defineProperty(e.prototype, "Endian", {
                get: function() {
                    return this.LNdian
                },
                enumerable: true,
                configurable: true
            });
            e.prototype.InitAiakos = function() {
                if (!this.Aiakos) {
                    try {
                        this.Aiakos = Thelxinoe.I.CreateAikos()
                    } catch (f) {}
                }
                return this.Aiakos
            };
            return e
        }());
        c.Mtd = d
    })(a = b.MtdFile || (b.MtdFile = {}))
})(Mneme || (Mneme = {}));
var Mneme;
(function(b) {
    var a;
    (function(e) {
        var c = (function() {
            function g(h, i) {
                this.Hndlr = h;
                this.NArg = i
            }
            return g
        }());
        var d = (function() {
            function g(i, j) {
                this.Y = j;
                this.b = Helicon.Hcn.Browser;
                this.Init(i);

                function h(n, m, o) {
                    return {
                        Name: n,
                        Italic: m,
                        Bold: o,
                        Symbol: false,
                        Encoding: 0,
                        Ajust: 1
                    }
                }
                var l = "Times";
                var k = "Helvetica";
                this.d = [h(l, false, false), h(l, true, false), h(l, false, true), h(k, false, false), h(k, true, false), h(k, false, true)]
            }
            g.prototype.SubstituteAnsi = function(n) {
                var m = 0;
                var k;
                var h = n.length;
                for (var j = 0; j < h; j++) {
                    var l = n.charCodeAt(j);
                    var i = 0;
                    if (l < 32) {
                        if (l >= 20) {
                            i = g.NonAnsiSubstitutes[l - 20]
                        }
                    } else {
                        if (l >= 128 && l < 160) {
                            i = g.UnicodeRedirections[l - 128]
                        }
                    }
                    if (i > 0) {
                        if (m == 0) {
                            k = n.substr(0, j)
                        } else {
                            k += n.substr(m, j - m)
                        }
                        k += String.fromCharCode(i);
                        m = j + 1
                    }
                }
                if (k) {
                    n = k + n.substr(m, h - m)
                }
                return n
            };
            g.prototype.DshGaps = function(k, h, j, i, m) {
                var l = Math.sqrt(k * k + h * h);
                if (!l || !j) {
                    return null
                }
                l /= j;
                return {
                    Dash: l * m,
                    Gap: l * i
                }
            };
            g.prototype.Init = function(l) {
                var m = this,
                    i = l.FontNames.length;
                m.c = new Array(i);
                for (var n = 0; n < i; n++) {
                    var h = new e.FontInfo();
                    var k = l.FontNames[n];
                    var j = k.indexOf("-");
                    if (j < 0) {
                        h.Name = k
                    } else {
                        h.Name = k.substr(0, j++);
                        if (k.substr(j, 4) == "Bold") {
                            h.Bold = true;
                            j += 4
                        }
                        k = k.substr(j);
                        if (k == "Italic" || k == "Oblique") {
                            h.Italic = true
                        }
                    }
                    h.Encoding = l.FontEncodings[n];
                    h.Ajust = h.Encoding >= 34 && h.Name.indexOf("Times") >= 0 ? m.Y : 1;
                    m.c[n] = h
                }
                m.Z = m.a = 0
            };
            g.prototype.Gtft = function(h) {
                var i = this.c;
                if (h >= 0) {
                    if (h < i.length) {
                        return i[h]
                    } else {
                        h = -1
                    }
                }
                h = ~h;
                if (h >= 6) {
                    h = 0
                }
                return this.d[h]
            };
            g.prototype.SubSym = function(m) {
                var p = this,
                    o = 1,
                    l = "",
                    n = "Symbol",
                    k = 0,
                    i, j;
                if (m.length == 1) {
                    i = m.charCodeAt(0);
                    if (i >= 210 && i <= 212 || i >= 226 && i <= 228) {
                        if (i < 226) {
                            n = "Times";
                            o *= p.Y
                        } else {
                            n = "Arial";
                            o = 0.9434
                        }
                        i &= 15;
                        if (i == 3) {
                            k = 169
                        } else {
                            if (i == 2) {
                                k = 174
                            } else {
                                k = 8482
                            }
                        }
                    }
                    if (k) {
                        l = String.fromCharCode(k)
                    }
                }
                if (l == "" && m != "") {
                    j = Helicon.Hcn.Browser;
                    if (j != 4 && Helicon.Hcn.Platform == 1 && (m.charCodeAt(0) < 236 || j != 3 && j != 2)) {
                        l = m
                    } else {
                        for (var h = 0; h < m.length; h++) {
                            k = m.charCodeAt(h);
                            for (i = 0; g.SymSub[i][0] < k; i++) {}
                            if (g.SymSub[i][0] == k) {
                                k = g.SymSub[i][1]
                            }
                            l += String.fromCharCode(k)
                        }
                        i = p.a;
                        if (p.c[i].Encoding == 34) {
                            n = p.c[i].Name
                        } else {
                            n = "Times"
                        }
                    }
                }
                return {
                    SubString: l,
                    FontName: n,
                    ScaleBy: o
                }
            };
            return g
        }());
        d.NonAnsiSubstitutes = [728, 711, 729, 305, 8260, 733, 321, 322, 731, 730, 64257, 64258];
        d.UnicodeRedirections = [8364, 506, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, 510, 381, 507, 508, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, 509, 382, 376];
        d.SymSub = [
            [67, 88],
            [68, 916],
            [70, 934],
            [71, 915],
            [76, 923],
            [80, 928],
            [81, 920],
            [83, 931],
            [85, 89],
            [86, 987],
            [87, 937],
            [88, 926],
            [89, 936],
            [97, 945],
            [98, 946],
            [99, 967],
            [100, 948],
            [101, 949],
            [102, 981],
            [103, 947],
            [104, 951],
            [105, 953],
            [106, 966],
            [107, 954],
            [108, 955],
            [109, 956],
            [110, 957],
            [111, 959],
            [112, 960],
            [113, 952],
            [114, 961],
            [115, 963],
            [116, 964],
            [117, 965],
            [118, 982],
            [119, 969],
            [120, 958],
            [121, 968],
            [122, 950],
            [162, 180],
            [172, 8592],
            [173, 8593],
            [174, 8594],
            [175, 8595],
            [190, 9472],
            [199, 8745],
            [210, 174],
            [211, 169],
            [212, 8482],
            [214, 8730],
            [226, 174],
            [227, 169],
            [228, 8482],
            [236, 9127],
            [237, 9128],
            [238, 9129],
            [252, 9131],
            [253, 9132],
            [254, 9133],
            [4095, 0]
        ];
        e.RendInfo = d;
        var f = (function() {
            function g(R) {
                var W = this,
                    h, af, aj, ah, r, K;
                W.g = R;

                function ai(ao) {
                    var t = ao[0];
                    if (t == 127 && W.h) {
                        R.Rgb(W.h)
                    } else {
                        if (t == 0 && W.i) {
                            R.Rgb(W.i)
                        } else {
                            R.Gray(t / 127)
                        }
                    }
                }

                function C(t) {
                    R.LinJoin(t[0] == 1 ? "round" : t[0] == 2 ? "bevel" : "miter")
                }

                function s(t) {
                    R.LinCap(t[0] == 1 ? "round" : t[0] == 2 ? "square" : "butt")
                }

                function E(t) {
                    R.LinWid(t[0])
                }

                function Z(ao, t) {
                    R.Gsv(t.Peek() != 17)
                }

                function al() {
                    R.Grst()
                }

                function ae() {
                    R.Eoclp()
                }

                function v() {
                    R.Clp()
                }

                function i(ao) {
                    var ap = ao[3];

                    function t(aq) {
                        return Math.round(255 - ((aq * (100 - ap) * 255) / 100 + ap * 255) / 100)
                    }
                    R.Rgb([t(ao[0]), t(ao[1]), t(ao[2])])
                }

                function k(t) {
                    R.Rct(t[0], t[1], t[2], t[3])
                }

                function B(t) {
                    R.Rrct(t[0], t[1], t[2], t[3], t[4])
                }

                function Y(t) {
                    R.XLat(t[0], t[1])
                }

                function X(t) {
                    R.Rot(t[0])
                }

                function A(t) {
                    R.Rotr(t[0], t[1], t[2])
                }

                function u(t) {
                    R.Arc(t[0], t[1], t[2], t[3], t[4])
                }

                function aa(t) {
                    R.Arcn(t[0], t[1], t[2], t[3], t[4])
                }

                function J(t) {
                    R.Dot(t[0], t[1], t[2])
                }

                function ak() {
                    R.Fil()
                }

                function n() {
                    R.Eofil()
                }

                function H(t) {
                    R.MvTo(t[0], t[1])
                }

                function M() {
                    R.Strk()
                }

                function V(t) {
                    R.LinTo(t[0], t[1])
                }

                function I(t) {
                    R.Line(aj = t[0], ah = t[1], r = t[2], K = t[3])
                }

                function ac(t) {
                    R.LinTo(t[0], t[1]);
                    R.Strk();
                    R.MvTo(t[0], t[1])
                }

                function l(t) {
                    R.Dshto(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7])
                }

                function G(ao) {
                    var ap = String.fromCharCode(ao[2]),
                        t = ao[3],
                        aq = "";
                    while (t-- > 0) {
                        aq += ap
                    }
                    R.Wavy(ao[0], ao[1], aq)
                }

                function am() {
                    R.Relstr(h, 0, 0)
                }

                function F(ao, t) {
                    R.Abstr(t.String(), ao[0], ao[1])
                }

                function z(ao, t) {
                    R.Relstr(t.String(), ao[0], ao[1])
                }

                function y(ao, t) {
                    R.OutStr(t.String(), ao[0], ao[1])
                }

                function S(t) {
                    R.Sid3(t[0], t[1], t[2], t[3], t[4], t[5])
                }

                function o(t) {
                    R.Sid4(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7])
                }

                function L(ao) {
                    var t = ao[0],
                        ap = ao[1];
                    R.Curv(t, ap, ao[2] + t, ao[3] + ap, ao[4] + t, ao[5] + ap, ao[6] + t, ao[7] + ap, false)
                }

                function x(ao) {
                    var t = ao[14],
                        ap = ao[15];
                    R.Curv(t, ap, ao[8] + t, ao[9] + ap, ao[10] + t, ao[11] + ap, ao[12] + t, ao[13] + ap, false);
                    R.LinTo(ao[6] + t, ao[7] + ap);
                    R.Curv(0, 0, ao[0] + t, ao[1] + ap, ao[2] + t, ao[3] + ap, ao[4] + t, ao[5] + ap, true);
                    if (!ao[16]) {
                        R.Fil()
                    }
                }

                function Q(ao) {
                    var t = ao[0],
                        ap = ao[1];
                    R.FulSlr(t, ap, ao[2] + t, ao[3] + ap, ao[4] + t, ao[5] + ap, ao[6] + t, ao[7] + ap, ao[8] + t, ao[9] + ap, ao[10] + t, ao[11] + ap, ao[12] + t, ao[13] + ap, ao[14] + t, ao[15] + ap, ao[16] + t, ao[17] + ap, ao[18] + t, ao[19] + ap, ao[20] + t, ao[21] + ap, ao[22] ? 1 : 0, ao[22], ao[23], ao[24], ao[25]);
                    ao[22] = 0
                }

                function P(ao) {
                    var t = ao[0],
                        ap = ao[1];
                    R.Curvdsh(t, ap, ao[2] + t, ao[3] + ap, ao[4] + t, ao[5] + ap, ao[6] + t, ao[7] + ap, ao[8], ao[9], ao[10], ao[11], ao[12])
                }

                function w(t) {
                    R.Beam(t[0], t[1], t[2] + t[0], t[3] + t[1], t[4])
                }

                function q(t) {
                    R.Elis(t[0], t[1], t[2], t[3], t[4], t[5])
                }

                function ad(t) {
                    R.Fnt(t[0], t[1], t[2], t[3])
                }

                function m(t) {
                    R.Chr(af = t[0], t[1], h = String.fromCharCode(t[2]))
                }

                function ag(t) {
                    R.Chr(af = t[0], t[1], h)
                }

                function an(t) {
                    R.Chr(af, t[0], h)
                }

                function O(t) {
                    R.Line(aj = t[0], ah, r, K)
                }

                function j(t) {
                    R.Line(aj, ah = t[0], r, K)
                }

                function N(t) {
                    R.Line(aj = t[0], ah = t[1], r, K)
                }

                function p(ao, t) {
                    R.Relstr(t.String(), 0, 0)
                }

                function T(t) {
                    R.Fnt(t[0], t[1], t[1], 0)
                }

                function U(ao) {
                    var t = ao[0],
                        ap = ao[1];
                    R.Curv(t, ap, ao[2] + t, ao[3] + ap, ao[4] + t, ao[5] + ap, ao[6] + t, ao[7] + ap, true)
                }

                function ab() {}

                function D(t, ao) {
                    return new c(t, ao)
                }
                W.f = new Array(D(ai, 1), D(C, 1), D(s, 1), D(E, 1), D(Z, 0), D(al, 0), D(ae, 0), D(v, 0), D(i, 4), D(k, 4), D(B, 5), D(Y, 2), D(X, 2), D(A, 3), D(u, 5), D(aa, 5), D(J, 3), D(ak, 0), D(n, 0), D(H, 2), D(M, 0), D(V, 2), D(I, 4), D(ac, 2), D(l, 8), D(G, 4), D(am, 0), D(F, 2), D(z, 2), D(y, 2), D(S, 6), D(o, 8), D(L, 8), D(x, 17), D(Q, 22), D(P, 13), D(w, 5), D(q, 6), D(ad, 4), D(m, 3), D(ab, 1), D(ab, 0), D(ab, 0), D(ab, 0), D(ab, 1), D(ab, 0), D(ab, 1), D(ab, 2), D(ab, 3), D(ab, 4), D(ag, 2), D(an, 1), D(O, 1), D(j, 1), D(N, 2), D(p, 0), D(Q, 26), D(T, 2), D(U, 8))
            }
            g.prototype.MtdXlate = function(p, m) {
                var o, k, h, j, q = new Array(26),
                    i = new b.Byter(p, m),
                    l = this.f,
                    r;
                while (i.More()) {
                    k = i.Next();
                    if (k < 128) {
                        h = 1
                    } else {
                        k -= 128;
                        h = i.Byte()
                    }
                    j = k >= 64;
                    if (j) {
                        k -= 64
                    }
                    if (k >= 59) {
                        return 5
                    }
                    o = l[k];
                    var n = o.NArg;
                    do {
                        for (r = 0; r < n; r++) {
                            q[r] = j ? i.Signed() : i.Val()
                        }
                        o.Hndlr(q, i)
                    } while (--h > 0 && i.More());
                    if (h > 0) {
                        return 5
                    }
                }
                return i.More() ? 5 : 0
            };
            g.prototype.PreApproval = function(k, j) {
                var i = this.g,
                    h, m, l;
                i.Gray(0.3);
                i.Fnt(-4, 250, 250, 0);
                for (m = 1000; m < j - 300; m += 1200) {
                    l = m < 2500 || m > 12000 ? 99999 : 10000 - m * 0.7;
                    for (h = 250; h < k - 200; h += 1400) {
                        if (h < l || h > l + 2600) {
                            i.Rotr(h, m, -52);
                            // i.Abstr("PREVIEW", h, m);
                            i.Rotr(h, m, 52)
                        }
                    }
                }
                i.Gray(0)
            };
            g.prototype.Sample = function() {
                var i = 3600,
                    j = 13000,
                    h = this.g;
                h.Gray(0.8);
                h.Rotr(i, j, -52);
                h.Fnt(-6, 2800, 2800, 0);
                h.Abstr("SAMPLE", i, j);
                h.Rotr(i, j, 52);
                h.Gray(0)
            };
            g.prototype.Approval = function() {
                // var i = 3100,
                //     j = 11000,
                //     h = this.g;
                // h.Rgb([128, 0, 26]);
                // h.Rotr(i, j, -52);
                // h.Fnt(-6, 1800, 1800, 0);
                // h.Abstr("Preview Only", i, j, 0.6);
                // h.Fnt(-6, 785, 785, 0);
                // h.Abstr("Legal Use Requires Purchase", i + 60, j + 1000, 0.6);
                // h.Rotr(i, j, 52)
            };
            g.prototype.BackFill = function(j, k, i, l) {
                var h = this.g;
                h.Rgb(j);
                h.Rct(l, 0, k, i);
                h.Fil();
                h.Gray(0);
                this.h = j[0] == 255 && j[1] == 255 && j[2] == 255 ? null : j
            };
            Object.defineProperty(g.prototype, "Color", {
                set: function(h) {
                    this.g.Rgb(this.i = h)
                },
                enumerable: true,
                configurable: true
            });
            return g
        }());
        e.MtdInterp = f
    })(a = b.Render || (b.Render = {}))
})(Mneme || (Mneme = {}));
var Mneme;
(function(c) {
    function b(i, h) {
        var g = i.X - h.X,
            f = i.Y - h.Y;
        return Math.sqrt(g * g + f * f)
    }
    c.Dist = b;

    function e(k, f) {
        var j;
        try {
            j = String.fromCharCode.apply(null, k)
        } catch (h) {
            if (d.Ndef(f)) {
                f = k.length
            }
            j = "";
            for (var g = 0; g < f; g++) {
                j += String.fromCharCode(k[g])
            }
        }
        return j
    }
    c.RdStr = e;

    function a(f, i) {
        if (i > 0) {
            var h = new Uint8Array(16),
                g;
            while (i >= 16) {
                g = f.Read(h, 16);
                i -= g;
                if (g < 16) {
                    break
                }
            }
            if (i > 0 && i < 16) {
                i -= f.Read(h, i)
            }
        }
        return i
    }
    c.Skip = a;
    var d = (function() {
        function f(i) {
            var h = this,
                g = new c.MtdFile.Mtd();
            h.m = g;
            h.F = 0;
            h.Parse = g.Parse;
            h.Canvas = i;
            h.n = false;
            h.L();
            h.A = Helicon.Hcn.Platform == 3
        }
        Object.defineProperty(f.prototype, "Hcn", {
            set: function(g) {
                this.I = g
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "BgColor", {
            set: function(g) {
                this.y = g
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "PprColor", {
            set: function(g) {
                this.z = g
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "Color", {
            set: function(g) {
                this.x = g
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "Approve", {
            set: function(g) {
                this.B = g ? 1 : 2
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "FirstPageNumber", {
            get: function() {
                return this.m.StartPage + this.m.FirstNumericalFolio
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "LastPageNumber", {
            get: function() {
                return this.FirstPageNumber + this.m.PageCount - 1
            },
            set: function(val) {
                breakpoint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "Page", {
            get: function() {
                return this.r + this.m.FirstNumericalFolio
            },
            set: function(h) {
                var g = this;
                if (h > g.LastPageNumber) {
                    h = g.LastPageNumber
                }
                h -= g.FirstPageNumber;
                if (h < 0) {
                    h = 0
                }
                g.r = h
            },
            enumerable: true,
            configurable: true
        });
        f.prototype.Skip = function(g, h) {
            return c.Skip(g, h)
        };
        Object.defineProperty(f.prototype, "Size", {
            set: function(g) {
                this.v = this.u = g
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "Zoom", {
            get: function() {
                return this.s
            },
            set: function(j) {
                var h = this,
                    k, g, i = this.m.PageWidth;
                if (!j || j < 0) {
                    j = h.s
                }
                h.u = h.v;
                g = h.O();
                if (g && i) {
                    k = (g.Wide * 15) / j - h.m.PageWidth;
                    h.t = k > 0 ? k / 2 : 0
                }
                h.s = j
            },
            enumerable: true,
            configurable: true
        });
        f.prototype.K = function() {
            return this.I && this.I.Playing
        };
        f.prototype.ScrollPos = function(i, g, l) {
            var o = this,
                k = o.q,
                n = 15 / o.s,
                m, h, j;
            if (k) {
                m = k.scrollTop * n;
                h = k.clientHeight * n;
                if (!l) {
                    l = o.Mtd.PageHeight
                } else {
                    l += 80
                }
                if (!g) {
                    g = l
                } else {
                    g += 80
                }
                if (m > i || g > m + h) {
                    j = i;
                    if (j > l - h) {
                        j = l - h
                    }
                    if (j < 0) {
                        j = 0
                    }
                    k.scrollTop = Math.floor(j / n)
                }
                if (!o.C) {
                    o.C = h
                }
                o.D = i;
                o.E = l
            }
        };
        f.prototype.Scale = function() {
            var k = this,
                l, h = k.p,
                j, g = Math.round,
                i;
            if (h instanceof HTMLCanvasElement || !(i = h.firstElementChild) || i.childElementCount < 9) {
                k.Render()
            } else {
                j = k.O();
                l = 15 / k.s;
                h.setAttribute("viewBox", -g(k.t).toString() + " 0 " + g(j.Wide * l) + " " + g(j.High * l))
            }
        };
        f.prototype.RePosY = function() {
            var i = this,
                k = i.q,
                l = i.s / 15,
                h, g, j;
            if (k) {
                h = k.clientHeight;
                if (g = h - i.C) {
                    j = k.scrollTop;
                    if (g > 0) {
                        if (j + h > i.E * l) {
                            k.scrollTop = Math.max(0, j - g)
                        }
                    } else {
                        if (i.K()) {
                            k.scrollTop = j + Math.min(-g, Math.max(0, i.D * l - j))
                        }
                    }
                    i.C = h
                }
            }
        };
        Object.defineProperty(f.prototype, "Rect", {
            get: function() {
                var h = this,
                    g = h.s / 15;
                return {
                    left: Math.floor(g * h.t),
                    top: 0,
                    width: Math.floor(g * h.m.PageWidth),
                    height: Math.floor(g * h.m.PageHeight)
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "Fonts", {
            get: function() {
                return this.m.FontNames
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "Aspect", {
            get: function() {
                if (!this.m.PageHeight) {
                    return 3 / 4
                }
                return this.m.PageWidth / this.m.PageHeight
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "XtraLoader", {
            set: function(g) {
                this.m.HandleXtraData = g
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "PlayerLoader", {
            set: function(g) {
                this.m.HandlePlayerData = g
            },
            enumerable: true,
            configurable: true
        });
        f.Ndef = function(g) {
            return typeof(g) === "undefined"
        };
        f.asMwin = function(h) {
            var g = null;
            if (h) {
                g = ((typeof(h) == "string" ? document.getElementById(h) : h))
            }
            return g
        };
        f.prototype.L = function() {
            var g = this;
            g.C = g.Horizontal = g.Vertical = g.t = g.r = 0;
            g.s = 1;
            g.H = false
        };
        f.prototype.M = function(h, g) {
            var i = this;
            if (!g) {
                i.L()
            }
            if (i.n = h) {
                if (i.o == null) {
                    i.o = new c.Render.RendInfo(i.m, i.A ? 0.86 : 1)
                } else {
                    i.o.Init(i.m)
                }
                i.ScrollPos(0)
            }
        };
        f.prototype.Clone = function(g, i) {
            var h = this;
            h.m = g.m;
            h.H = g.H;
            h.n = g.n;
            h.Page = g.r;
            h.F = i;
            if (i && g.A) {
                h.o = new c.Render.RendInfo(g.m, 1)
            } else {
                h.o = g.o
            }
        };
        Object.defineProperty(f.prototype, "Canvas", {
            get: function() {
                return this.p
            },
            set: function(g) {
                var h = f.asMwin(g),
                    i;
                this.q = null;
                this.p = h;
                if (h) {
                    i = h.parentNode;
                    if (i && i instanceof HTMLDivElement && i.childElementCount == 1) {
                        this.q = i
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "Ready", {
            get: function() {
                return this.n
            },
            enumerable: true,
            configurable: true
        });
        f.prototype.LoadMtd = function(i, h) {
            var g = this.m.ReadIn(i);
            this.M(g >= 0, h);
            return g
        };
        Object.defineProperty(f.prototype, "Endian", {
            get: function() {
                return this.m.Endian
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(f.prototype, "Mtd", {
            get: function() {
                return this.m
            },
            set: function(g) {
                this.m = g;
                this.M(true)
            },
            enumerable: true,
            configurable: true
        });
        f.prototype.InitAiakos = function() {
            return this.m.InitAiakos()
        };
        f.prototype.N = function(i) {
            var j = c.Render,
                h = this.o,
                g = f.asMwin(i);
            if (!g) {
                g = this.p
            }
            return new(g instanceof HTMLCanvasElement ? j.CanvasDeviceDriver : j.SvgDeviceDriver)(h, g)
        };
        f.prototype.O = function(g, j) {
            var i = this,
                h = i.u,
                k;
            if (!h) {
                g = f.asMwin(g);
                k = g || i.F ? g : i.q;
                if (k) {
                    h = {
                        Wide: k.clientWidth,
                        High: k.clientHeight
                    }
                }
            }
            if (!h) {
                h = i.w
            }
            if (!h) {
                if (!j) {
                    j = i.N(g)
                }
                if (j) {
                    h = i.w = j.CanvasSize()
                }
            }
            return h
        };
        f.prototype.FitTo = function(v, g) {
            var s = this,
                r = 1,
                w, p, i, m, u = s.m,
                h = s.Canvas,
                o = u.PageWidth,
                j = u.PageHeight,
                l = "hidden",
                k = l,
                n = s.q,
                q;
            if (s.F || !n || g) {
                w = s.O(g);
                p = w.Wide;
                i = w.High
            } else {
                q = n.style;
                i = n.clientHeight;
                p = n.clientWidth;
                if (v && !s.NoYBar && !s.K()) {
                    k = q.overflowY;
                    if (k && k != l) {
                        p += 16
                    }
                    k = p * j / (o * i) > 1.035 ? "auto" : l
                }
                q.overflowY = k;
                q.overflowX = l;
                p = n.clientWidth;
                if (v) {
                    m = Math.floor(p * j / o)
                } else {
                    m = i
                }
                s.u = {
                    High: m,
                    Wide: p
                };
                h.style.width = p + "px";
                h.style.height = m + "px"
            }
            if (p) {
                p *= 15;
                i *= 15;
                s.t = 0;
                if (v || i * o > p * j) {
                    r = p / o
                } else {
                    r = i / j;
                    p /= r;
                    if (p > o) {
                        s.t = (p - o) / 2
                    }
                }
            }
            s.s = r
        };
        f.prototype.P = function(g) {
            var i = this,
                j = i.N(g),
                h = i.O(g, j);
            if (j) {
                j.Wide = h.Wide;
                j.High = h.High;
                j.Zum(i.s / 15)
            }
            return j
        };
        f.prototype.Q = function(q, s, p, o) {
            var v = this,
                w = v.m,
                l = w.PageData[q],
                n = new c.ByteReader(l),
                i = v.Horizontal + v.t,
                h = i,
                g = v.B ? v.B == 1 : w.Approval && (q > 0 || w.PageCount <= 1 || w.GetFirstMunfo("sto") || v.F),
                m = new c.Render.MtdInterp(s),
                u = 15 / v.Zoom,
                k, r, j;
            if (!v.F && p) {
                r = v.z;
                k = v.y;
                if (p == 2) {
                    if (!k) {
                        k = r ? r : [255, 255, 255];
                        r = null
                    }
                    m.BackFill(k, s.Wide * u, s.High * u, 0)
                } else {
                    h = 0;
                    if (!r) {
                        r = k
                    }
                }
                if (r) {
                    m.BackFill(r, w.PageWidth, w.PageHeight, h)
                }
            }
            if (i || v.Vertical) {
                s.XLat(i, v.Vertical)
            }
            if (g) {
                m.PreApproval(w.PageWidth, w.PageHeight)
            } else {
                if (v.F && v.GetMunfos("pag")) {
                    m.Sample()
                }
            }
            if (v.x) {
                m.Color = v.x
            }
            j = m.MtdXlate(n, l.length);
            if (g) {
                m.Approval()
            }
            if (o) {
                o(j, q + this.FirstPageNumber)
            }
            return j
        };
        f.prototype.R = function() {
            var g = c.Render.Woff,
                h = this;
            if (!h.G && g) {
                h.G = new g()
            }
            return h.G
        };
        f.prototype.Render = function(n, o, i, k, q) {
            var s = this,
                g = -9,
                r = c.Render,
                m = r.SvgDeviceDriver,
                l = r.CanvasDeviceDriver,
                p, h;

            function j() {
                return s.Q(o, q, p, n)
            }
            if (!q) {
                q = s.P(i)
            }
            if (q) {
                p = m && q instanceof m ? 1 : l && q instanceof l ? 2 : 0;
                if (f.Ndef(o)) {
                    o = s.r
                }
                if (p == 1) {
                    q.AssignIDs = o
                } else {
                    if (p == 2) {
                        q.RedNotes = k
                    }
                }
                if (o >= 0 && o < s.m.PageCount) {
                    if (p != 2 || s.H) {
                        g = j()
                    } else {
                        s.H = true;
                        if (h = s.R()) {
                            h.Load(s.Mtd.FontNames, j);
                            g = 0
                        }
                    }
                }
            }
            return g
        };
        Object.defineProperty(f.prototype, "LoadedFonts", {
            set: function(h) {
                var g = this.R();
                if (g) {
                    g.LoadedFonts = h
                } else {
                    this.H = true
                }
            },
            enumerable: true,
            configurable: true
        });
        f.prototype.GetMunfos = function(g) {
            return this.m.GetMunfos(g)
        };
        f.prototype.GetFirstMunfo = function(g) {
            return this.m.GetFirstMunfo(g)
        };
        f.prototype.MakeParser = function(k, j, h, i, g) {
            return new c.Parsers.Proxy(h, k, j, i, g)
        };
        return f
    }());
    c.Mn = d
})(Mneme || (Mneme = {}));
var Mneme;
(function(b) {
    var a = (function() {
        function c() {}
        c.calcDashSeg = function(h, i, k, f) {
            var d, j = 0,
                g = 0,
                e = f;
            if (h == 2 || h == 0) {
                e -= i;
                j = 1
            } else {
                if (h == 4) {
                    e -= k;
                    g = 1
                }
            }
            e /= (i + k);
            d = Math.floor(0.33 + e);
            if (d < 1) {
                d = 1
            }
            j += d;
            g += d;
            e = j * i + g * k;
            e = f / e;
            return {
                Dash: i * e,
                Gap: k * e
            }
        };
        c.segmentPhasesFor = function(f, h, d) {
            var i, g = [];
            if (f == 0) {
                if (h == 100) {
                    i = 0
                } else {
                    i = 1;
                    g.push(d * h / 100)
                }
            } else {
                g.push(d * f / 100);
                if (h >= 100) {
                    i = 3
                } else {
                    g.push(d * h / 100);
                    if (f < h) {
                        i = 4
                    } else {
                        i = 2;
                        var e = g[0];
                        g[0] = g[1];
                        g[1] = e
                    }
                }
            }
            g.push(d);
            return {
                Phases: c.partialDashTemplate[i],
                PhaseChanges: g
            }
        };
        c.DeCastel = function(m, l, o, n, k, j, h, g) {
            var f = {
                    X: m,
                    Y: l
                },
                e = [f];

            function d(q, p) {
                return {
                    X: (q.X + p.X) / 2,
                    Y: (q.Y + p.Y) / 2
                }
            }

            function i(t, v, u, p) {
                if (b.Dist(t, p) <= 100) {
                    e.push(p)
                } else {
                    var q = d(v, u);
                    v = d(v, t);
                    u = d(u, p);
                    var s = d(v, q);
                    var r = d(u, q);
                    q = d(s, r);
                    if (q.X == p.X && q.Y == p.Y) {
                        e.push(p)
                    } else {
                        i(t, v, s, q);
                        if (q.X == t.X && q.Y == t.Y) {
                            e.push(p)
                        } else {
                            i(q, r, u, p)
                        }
                    }
                }
            }
            i(f, {
                X: o,
                Y: n
            }, {
                X: k,
                Y: j
            }, {
                X: h,
                Y: g
            });
            return e
        };
        c.prototype.DashSegs = function(n, w, o, t, r, l) {
            var f, i, k = 0,
                p = 0,
                j, q, h, m, s, e, g, u;

            function v(x) {
                var B = 0,
                    A = x[0],
                    y, z;
                for (z = 0; z < x.length; z++) {
                    y = x[z];
                    B += b.Dist(A, y);
                    A = y
                }
                return B
            }

            function d() {
                var x, z;

                function y(B, A) {
                    return B + (A - B) * x
                }
                if (++k >= q.length) {
                    return false
                }
                f = q[k];
                z = b.Dist(i, f);
                p += z;
                if (p <= j) {
                    i = f;
                    return true
                } else {
                    x = (j - (p - z)) / z;
                    i.X = y(i.X, f.X);
                    i.Y = y(i.Y, f.Y);
                    p = j;
                    k -= 1;
                    return false
                }
            }
            q = c.DeCastel(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7]);
            if (q.length) {
                s = v(q);
                e = c.segmentPhasesFor(o, t, s);
                i = q[0];
                u = e.Phases;
                for (g = 0; g < u.length; g++) {
                    j = e.PhaseChanges[g];
                    m = u[g];
                    h = c.calcDashSeg(m, n, w, j - p);
                    if (m >= 3) {
                        j = p + h.Gap;
                        while (d()) {
                            i = f
                        }
                        j = e.PhaseChanges[g]
                    }
                    l(m, i, h, function(y) {
                        var x = d();
                        y.X = i.X;
                        y.Y = i.Y;
                        return x
                    })
                }
            }
        };
        return c
    }());
    a.partialDashTemplate = [
        [2],
        [1, 0],
        [1, 0, 3],
        [0, 3],
        [0, 4, 0]
    ];
    b.Dasher = a
})(Mneme || (Mneme = {}));
var Mneme;
(function(b) {
    var a;
    (function(d) {
        var c = (function() {
            function e(j, i) {
                this.g = "http://www.w3.org/2000/svg";
                var h = this,
                    g = Helicon.Hcn,
                    f;
                h.G = j;
                h.e = i;
                h.m = g.Browser == 4;
                h.n = h.m && g.Platform == 1;
                h.l = [];
                h.Clear();
                h.k = "";
                h.o = typeof Aoide == "object" && (f = Aoide.LiteSvg) ? f.SvgPage : function(k) {
                    return ""
                }
            }
            Object.defineProperty(e.prototype, "AssignIDs", {
                set: function(f) {
                    this.k = this.o(f)
                },
                enumerable: true,
                configurable: true
            });
            e.prototype.CanvasSize = function() {
                var h, f, i = this.e,
                    k, j;
                try {
                    h = i.width.baseVal.value;
                    f = i.height.baseVal.value
                } catch (g) {
                    k = i;
                    j = k.getBoundingClientRect();
                    h = j.width;
                    f = j.height
                }
                if (h <= 1) {
                    h = 768;
                    f = 1024
                }
                return {
                    Wide: h,
                    High: f
                }
            };
            e.prototype.Zum = function(i) {
                var h = this.e,
                    f = this.Wide / i,
                    g = this.High / i,
                    j = h.viewBox.baseVal;
                if (j) {
                    j.width = f;
                    j.height = g
                } else {
                    this.q(h, "viewBox", "0 0 " + f + " " + g)
                }
            };
            e.prototype.p = function(f) {
                return document.createElementNS(this.g, f)
            };
            e.prototype.q = function(g, f, h) {
                g.setAttribute(f, h.toString())
            };
            e.prototype.r = function(h) {
                var j = "",
                    i = h.length,
                    f, g = this.p("polygon");
                g.style.fill = this.I;
                g.style.strokeWidth = "0";
                this.f.appendChild(g);
                for (f = 0; f < i; f += 2) {
                    if (f > 0) {
                        j += " "
                    }
                    j += h[f] + "," + h[f + 1]
                }
                this.q(g, "points", j)
            };
            e.prototype.s = function() {
                var h = this,
                    f = h.e.createSVGMatrix(),
                    g = h.e.createSVGTransformFromMatrix(f);
                h.v(g);
                h.J = ""
            };
            e.prototype.t = function() {
                var f = this;
                f.a = f.b = f.c = 0;
                f.K = ""
            };
            e.prototype.Clear = function() {
                var f = this,
                    g = f.e;
                while (g.firstChild) {
                    g.removeChild(g.firstChild)
                }
                f.I = "rgb(0,0,0)";
                f.H = "1";
                f.LinJoin("miter");
                f.LinCap("butt");
                f.s();
                f.O = 1;
                f.l.length = f.d = f.j = f.Q = 0;
                f.t()
            };
            e.prototype.u = function(g) {
                var f = this,
                    h = g.style;
                h.stroke = f.I;
                h.strokeWidth = f.H;
                h.strokeLinecap = f.h;
                h.strokeLinejoin = f.i;
                h.fill = "none"
            };
            e.prototype.Gray = function(f) {
                if (f === 1) {
                    this.I = "white"
                } else {
                    if (f === 0) {
                        this.I = "rgb(0,0,0)"
                    } else {
                        var g = (Math.round(f * 255)).toString();
                        this.I = "rgb(" + g + "," + g + "," + g + ")"
                    }
                }
            };
            e.prototype.LinJoin = function(f) {
                this.i = f
            };
            e.prototype.LinCap = function(f) {
                this.h = f
            };
            e.prototype.LinWid = function(f) {
                this.H = f.toString()
            };
            e.prototype.v = function(f) {
                var g = this.p("g");
                g.transform.baseVal.appendItem(f);
                this.e.appendChild(g);
                this.f = g
            };
            e.prototype.Gsv = function(i) {
                var h = this,
                    j = h.f,
                    g = null,
                    f = j.transform.baseVal;
                if (f.numberOfItems > 0) {
                    g = f.getItem(0)
                }
                h.l.push({
                    Srfc: i ? j : null,
                    Pth: h.J,
                    Xfrm: g,
                    Rot: h.a,
                    Dx: h.b,
                    Dy: h.c
                });
                if (i) {
                    if (g) {
                        h.v(g)
                    } else {
                        h.s()
                    }
                }
            };
            e.prototype.Grst = function() {
                var g = this,
                    h = g.l.pop(),
                    f, i;
                if (h) {
                    g.J = h.Pth;
                    g.a = h.Rot;
                    g.b = h.Dx;
                    g.c = h.Dy;
                    f = h.Srfc;
                    if (f) {
                        i = f.transform.baseVal;
                        if (i.numberOfItems == 0 && h.Xfrm) {
                            i.appendItem(h.Xfrm)
                        }
                        g.f = f
                    }
                } else {
                    g.s();
                    g.t()
                }
                g.K = ""
            };
            e.prototype.Eoclp = function() {
                this.K = this.J;
                this.J = ""
            };
            e.prototype.Clp = function() {
                this.J = ""
            };
            e.prototype.Rgb = function(f) {
                this.I = "rgb(" + f[0] + "," + f[1] + "," + f[2] + ")"
            };
            e.prototype.w = function(f, k, g, j) {
                var i = this;
                i.J += "M" + f + "," + k;
                i.LinTo(f, k + j);
                i.LinTo(f + g, k + j);
                i.LinTo(f + g, k)
            };
            e.prototype.x = function() {
                this.J += "Z";
                this.Z = this.l.length == 0
            };
            e.prototype.Rct = function(f, j, g, i) {
                this.w(f, j, g, i);
                this.x()
            };
            e.prototype.Rrct = function(f, l, j, m, i) {
                var o = this,
                    n = j + f,
                    k = l + m - f,
                    g = j + i - f;
                o.J += "M" + l + "," + n;
                o.Arc(l + f, n, f, 180, 270);
                o.Arc(k, n, f, 270, 360);
                o.Arc(k, g, f, 0, 90);
                o.Arc(l + f, g, f, 90, 180);
                o.x()
            };
            e.prototype.y = function(f) {
                this.f.transform.baseVal.initialize(this.e.createSVGTransformFromMatrix(f(this.f.transform.baseVal.getItem(0).matrix)))
            };
            e.prototype.XLat = function(g, f) {
                this.y(function(h) {
                    return h.translate(g, f)
                })
            };
            e.prototype.Rot = function(f) {
                this.y(function(g) {
                    return g.rotate(f)
                })
            };
            e.prototype.z = function(g, f, i, h) {
                return g.translate(f, i).rotate(h).translate(-f, -i)
            };
            e.prototype.Rotr = function(g, f, i) {
                var h = this;
                h.y(function(j) {
                    return h.z(j, g, f, i)
                });
                h.a += i;
                if (i !== 0 && h.a === 0) {
                    g = -g;
                    f = -f
                }
                h.b += g;
                h.c += f
            };
            e.prototype.A = function(m, k, j, l, f, n) {
                function h(o) {
                    o *= 0.0174532925;
                    return {
                        X: m + Math.cos(o) * j,
                        Y: k + Math.sin(o) * j
                    }
                }
                if (j <= 0) {
                    this.LinTo(m, k)
                } else {
                    var g = h(l),
                        i = h(f);
                    this.J += "L" + g.X + "," + g.Y + "A" + j + "," + j + ", 0 " + (Math.abs(f - l) >= 180 ? "1," : "0,") + n + " " + i.X + "," + i.Y
                }
            };
            e.prototype.Arc = function(f, j, h, g, i) {
                this.A(f, j, h, g, i, 1)
            };
            e.prototype.Arcn = function(f, j, h, g, i) {
                this.A(f, j, h, g, i, 0)
            };
            e.prototype.B = function(f) {
                f.style.fill = this.I;
                f.style.strokeWidth = "0";
                this.f.appendChild(f)
            };
            e.prototype.Dot = function(g, i, f) {
                var h = this.p("circle");
                h.r.baseVal.value = f;
                this.B(h);
                h.cx.baseVal.value = g;
                h.cy.baseVal.value = i
            };
            e.prototype.C = function() {
                var f = this,
                    g = f.p("path");
                f.q(g, "d", f.J);
                f.J = "";
                return g
            };
            e.prototype.D = function(h) {
                var g = this,
                    f = g.e.createSVGMatrix();
                g.Z = false;
                f = g.z(f, g.b, g.c, g.a);
                h.transform.baseVal.appendItem(g.e.createSVGTransformFromMatrix(f))
            };
            e.prototype.E = function(h) {
                var f = this,
                    g = f.C();
                g.style.fillRule = h;
                if (f.Z) {
                    f.D(g)
                }
                f.B(g)
            };
            e.prototype.Fil = function() {
                this.E("nonzero")
            };
            e.prototype.Eofil = function() {
                this.E("evenodd")
            };
            e.prototype.MvTo = function(f, g) {
                this.J = "M" + f + "," + g
            };
            e.prototype.Strk = function() {
                var f = this,
                    g = f.C();
                f.u(g);
                if (f.Z) {
                    f.D(g)
                }
                f.f.appendChild(g)
            };
            e.prototype.LinTo = function(f, g) {
                this.J += "L" + f + "," + g
            };
            e.prototype.F = function(j, g, i, f, h) {
                this.f.appendChild(j);
                j.x1.baseVal.value = g;
                j.x2.baseVal.value = i;
                j.y1.baseVal.value = f;
                j.y2.baseVal.value = h
            };
            e.prototype.Line = function(g, f, h, j) {
                var i = this.p("line");
                this.u(i);
                this.F(i, g, g + h, f, f + j)
            };
            e.prototype.StrkTo = function(f, g) {
                this.LinTo(f, g);
                this.Strk();
                this.MvTo(f, g)
            };
            e.prototype.Dshto = function(q, o, i, g, m, n, h, f) {
                var p = this,
                    k = p.G.DshGaps(i, g, m, n, h),
                    r, l, j;
                if (k) {
                    r = p.p("line");
                    p.u(r);
                    r.style.strokeDasharray = k.Dash.toString() + " " + k.Gap;
                    p.f.appendChild(r);
                    l = q - i;
                    j = o - g;
                    if (f) {
                        p.F(r, l, q, j, o)
                    } else {
                        p.F(r, q, l, o, j)
                    }
                }
            };
            e.prototype.Wavy = function(f, h, g) {
                this.J1(g, f, h)
            };
            e.prototype.G1 = function(f) {
                var g = this;
                g.q(f, "font-size", g.M);
                g.q(f, "font-family", g.L);
                if (g.S) {
                    f.style.fontWeight = "Bold"
                }
                if (g.T) {
                    f.style.fontStyle = "Italic"
                }
            };
            e.prototype.H1 = function(f) {
                return document.createTextNode(this.G.SubstituteAnsi(f))
            };
            e.prototype.I1 = function(h) {
                var g = this,
                    f = g.G.SubSym(h);
                h = f.SubString;
                g.L = f.FontName;
                g.M = (parseFloat(g.M) * f.ScaleBy).toString();
                return h
            };
            e.prototype.J1 = function(l, f, m) {
                var i = this,
                    k = i.p("text"),
                    h, j = i.O,
                    g;
                if (i.U) {
                    l = i.I1(l)
                }
                k.appendChild(i.H1(l));
                i.G1(k);
                k.style.fill = i.I;
                k.style.strokeWidth = "0";
                i.P = j;
                if (j == 1 && !i.a && i.Q == 0) {
                    i.q(k, "x", f);
                    i.q(k, "y", m)
                } else {
                    g = i.e.createSVGMatrix();
                    if (i.a) {
                        if (i.K === "") {
                            g = i.z(g, i.b, i.c, i.a)
                        } else {
                            g = i.z(g, i.b, i.c, 0)
                        }
                    }
                    g = g.translate(f, m);
                    if (j !== 1) {
                        g = g.scaleNonUniform(j, 1)
                    }
                    if (i.Q !== 0) {
                        g = g.translate(i.R, 0).skewX(i.Q)
                    }
                    h = i.e.createSVGTransformFromMatrix(g);
                    k.transform.baseVal.appendItem(h)
                }
                i.f.appendChild(k);
                i.V = k;
                i.W = f;
                i.X = m;
                return k
            };
            e.prototype.Abstr = function(j, f, k, g) {
                var h = this,
                    i = h.J1(j, f, k);
                if (g) {
                    i.style.fillOpacity = g.toString()
                }
                if (h.k && j.length < 3) {
                    i.id = h.k + h.j++
                }
            };
            e.prototype.K1 = function() {
                var g = this,
                    h, f = g.V.getBBox();
                h = (f.width + f.x * 2) * g.P;
                if (g.m && g.P > 1) {
                    h -= (g.n ? 118 : 59) / g.P
                }
                return g.W + h
            };
            e.prototype.Relstr = function(j, g, f) {
                var h = this,
                    i;
                if (h.V) {
                    if (h.U) {
                        j = h.I1(j)
                    }
                    if (h.O !== h.P) {
                        h.J1(j, h.K1() + g, h.X + f)
                    } else {
                        i = h.p("tspan");
                        h.G1(i);
                        if (g < 0 && h.m && h.L == "Jivetalk") {
                            g *= 0.2
                        }
                        h.q(i, "dx", g);
                        h.q(i, "dy", f);
                        i.appendChild(h.H1(j));
                        h.V.appendChild(i)
                    }
                }
            };
            e.prototype.OutStr = function(i, g, f) {
                this.J1(i, g, f);
                var h = this.V.style;
                h.fill = "none";
                h.stroke = this.I;
                h.strokeWidth = "10"
            };
            e.prototype.Sid3 = function(g, f, i, h, k, j) {
                this.r(arguments)
            };
            e.prototype.Sid4 = function(i, h, k, j, m, l, g, f) {
                this.r(arguments)
            };
            e.prototype.Curv = function(i, h, k, j, g, f, n, m, l) {
                if (!l) {
                    this.MvTo(i, h)
                }
                if (k < 0) {
                    k = 0
                }
                if (g < 0) {
                    g = 0
                }
                if (n < 0) {
                    n = 0
                }
                if (j < 0) {
                    j = 0
                }
                if (f < 0) {
                    f = 0
                }
                if (m < 0) {
                    m = 0
                }
                this.J += "C" + k + "," + j + "," + g + "," + f + "," + n + "," + m
            };
            e.prototype.L1 = function(j, g, l, f, i, p) {
                var n = this,
                    h = null,
                    m = new b.Dasher(),
                    k, o;
                if (j && n.J !== "") {
                    k = n.p("clipPath");
                    h = "clp" + n.d++;
                    k.id = h;
                    k.appendChild(n.C());
                    n.f.appendChild(k);
                    h = "url(#" + h + ")"
                }
                m.DashSegs(g, l, f, i, p, function(t, q, r, s) {
                    n.MvTo(q.X, q.Y);
                    while (s(q)) {
                        n.LinTo(q.X, q.Y)
                    }
                    n.LinTo(q.X, q.Y);
                    o = n.C();
                    n.u(o);
                    if (t !== 0) {
                        o.style.strokeDasharray = r.Dash.toString() + " " + r.Gap
                    }
                    if (h) {
                        o.style.clipPath = h
                    }
                    n.f.appendChild(o)
                })
            };
            e.prototype.FulSlr = function(p, o, z, v, F, E, k, j, m, l, C, A, h, f, x, u, w, s, D, B, i, g, H, n, G, y, r) {
                var q = this;
                q.Curv(p, o, z, v, F, E, k, j, false);
                q.LinTo(m, l);
                q.Curv(0, 0, C, A, h, f, x, u, true);
                q.Curv(0, 0, w, s, D, B, i, g, true);
                if (!H) {
                    q.Fil()
                } else {
                    q.L1(true, n, G, y, r, arguments)
                }
            };
            e.prototype.Curvdsh = function(k, h, o, n, l, j, q, p, f, m, i, g, r) {
                this.L1(r === 0, f, m, i, g, arguments)
            };
            e.prototype.Beam = function(j, h, i, g, f) {
                this.Sid4(j, h, i, g, i, g - f, j, h - f)
            };
            e.prototype.Elis = function(j, i, n, g, p, m) {
                var r = this,
                    l = r.K1() + g,
                    h = r.X + p,
                    f = r.J,
                    q, k, o;
                if (j === 0) {
                    r.w(l, h, n, i)
                } else {
                    k = l + n;
                    o = h + i;
                    r.Curv(l, h, l + j, o, k - j, o, k, h, false)
                }
                q = r.H;
                r.LinWid(m);
                r.Strk();
                r.J = f;
                r.H = q
            };
            e.prototype.Fnt = function(j, h, i, g) {
                var k = this,
                    f = k.G.Gtft(j);
                k.L = f.Name;
                k.S = f.Bold;
                k.T = f.Italic;
                k.U = f.Encoding === 16;
                k.M = (h * f.Ajust).toString();
                if (h > 0) {
                    k.O = i / h;
                    if (g) {
                        g = Math.atan(-g / h);
                        k.R = h * Math.sin(g) * 0.2135230315;
                        g = g * 57.295779513
                    }
                } else {
                    k.O = 1;
                    g = 0
                }
                k.Q = g
            };
            e.prototype.Chr = function(f, h, g) {
                this.Abstr(g, f, h)
            };
            return e
        }());
        d.SvgDeviceDriver = c
    })(a = b.Render || (b.Render = {}))
})(Mneme || (Mneme = {}));