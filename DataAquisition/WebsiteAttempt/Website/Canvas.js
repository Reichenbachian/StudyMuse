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
    var a;
    (function(d) {
        var c = (function() {
            function e(h, f) {
                var g = this;
                g.v = h;
                g.t = f;
                g.u = f.getContext("2d");
                g.D = g.H = g.E = 0;
                g.y = g.C = 1;
                g.Clear()
            }
            e.prototype.Clear = function() {
                var f = this;
                while (f.H > 0) {
                    f.Grst()
                }
                f.u.setTransform(1, 0, 0, 1, 0, 0);
                f.Gray(0)
            };
            Object.defineProperty(e.prototype, "RedNotes", {
                set: function(f) {
                    this.J = f
                },
                enumerable: true,
                configurable: true
            });
            e.prototype.CanvasSize = function() {
                return {
                    Wide: this.Wide,
                    High: this.High
                }
            };
            Object.defineProperty(e.prototype, "Wide", {
                get: function() {
                    return this.t.width
                },
                set: function(f) {
                    this.t.width = f
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(e.prototype, "High", {
                get: function() {
                    return this.t.height
                },
                set: function(f) {
                    this.t.height = f
                },
                enumerable: true,
                configurable: true
            });
            e.prototype.Zum = function(f) {
                this.u.scale(f, f)
            };
            e.prototype.Gray = function(f) {
                f = Math.round(f * 255);
                this.Rgb([f, f, f])
            };
            e.prototype.Rgb = function(f) {
                var g = f[0] + "," + f[1] + "," + f[2];
                this.G = g;
                g = "rgb(" + g + ")";
                this.u.strokeStyle = g;
                this.u.fillStyle = g
            };
            e.prototype.LinJoin = function(f) {
                this.u.lineJoin = f
            };
            e.prototype.LinCap = function(f) {
                this.u.lineCap = f
            };
            e.prototype.LinWid = function(f) {
                this.u.lineWidth = f
            };
            e.prototype.Gsv = function() {
                this.u.save();
                this.H += 1
            };
            e.prototype.Grst = function() {
                this.u.restore();
                this.H -= 1
            };
            e.prototype.L = function() {
                this.u.beginPath();
                this.I = false
            };
            e.prototype.Clp = function() {
                if (this.I) {
                    this.u.clip()
                }
            };
            e.prototype.Eoclp = function() {
                if (this.I) {
                    this.u.clip("evenodd");
                    this.L()
                }
            };
            e.prototype.Rct = function(g, i, h, f) {
                this.I = true;
                this.u.rect(g, i, h, f)
            };
            e.prototype.Rrct = function(h, g, l, j, f) {
                var i = this,
                    k = l + h;
                j += g - h;
                f += l - h;
                i.u.moveTo(g, k);
                i.Arc(g + h, k, h, 180, 270);
                i.Arc(j, k, h, 270, 360);
                i.Arc(j, f, h, 0, 90);
                i.Arc(g + h, f, h, 90, 180);
                i.u.closePath()
            };
            e.prototype.XLat = function(g, f) {
                this.u.translate(g, f)
            };
            e.prototype.Rot = function(f) {
                this.u.rotate(f * Math.PI / 180)
            };
            e.prototype.Rotr = function(f, h, g) {
                this.XLat(f, h);
                this.Rot(g);
                this.XLat(-f, -h)
            };
            e.prototype.Arc = function(f, k, h, g, j, i) {
                this.u.arc(f, k, h, g * Math.PI / 180, j * Math.PI / 180, i)
            };
            e.prototype.Arcn = function(f, j, h, g, i) {
                this.Arc(f, j, h, g, i, true)
            };
            e.prototype.Dot = function(g, h, f) {
                this.u.beginPath();
                this.u.arc(g, h, f, 0, Math.PI * 2);
                this.Fil()
            };
            e.prototype.Fil = function() {
                this.u.fill("evenodd");
                this.L()
            };
            e.prototype.Eofil = function() {
                this.u.fill("evenodd");
                this.L()
            };
            e.prototype.MvTo = function(f, g) {
                this.L();
                this.u.moveTo(f, g);
                this.I = true
            };
            e.prototype.Strk = function() {
                this.u.stroke();
                this.L()
            };
            e.prototype.LinTo = function(f, g) {
                this.u.lineTo(f, g)
            };
            e.prototype.Line = function(g, f, i, j) {
                var h = this.u;
                h.moveTo(g, f);
                h.lineTo(g + i, f + j);
                h.stroke();
                h.beginPath()
            };
            e.prototype.Dshto = function(o, m, i, g, k, l, h, f) {
                var n = this,
                    j = n.v.DshGaps(i, g, k, l, h);
                n.Gsv();
                if (j && n.u.setLineDash) {
                    n.u.setLineDash([j.Dash, j.Gap])
                }
                if (f) {
                    n.Line(o - i, m - g, i, g)
                } else {
                    n.Line(o, m, -i, -g)
                }
                n.Grst()
            };
            e.prototype.Wavy = function(f, h, g) {
                this.Abstr(g, f, h)
            };
            e.prototype.Abstr = function(j, l, k, i, f) {
                var o = this,
                    n = o.y,
                    p = o.E,
                    m = o.J || n != 1 || p || i,
                    h, g = o.u;
                o.C = n;
                if (o.w) {
                    h = o.v.SubSym(j);
                    j = h.SubString;
                    g.font = (o.x * h.ScaleBy) + "pt " + h.FontName
                } else {
                    j = o.v.SubstituteAnsi(j)
                }
                o.B = j;
                o.z = l;
                o.A = k;
                o.D = 0;
                if (m) {
                    o.Gsv();
                    if (o.J && j != "b" && j != "#" && j != "n") {
                        o.u.fillStyle = o.J
                    }
                    if (i) {
                        o.u.fillStyle = "rgba(" + o.G + "," + i + ")"
                    }
                    if (n != 1 || p) {
                        o.XLat(l, k);
                        if (n != 1) {
                            g.scale(n, 1)
                        }
                        if (p) {
                            o.u.transform(1, 0, p, 1, o.F, 0)
                        }
                        l = k = 0
                    }
                }
                if (f) {
                    g.strokeText(j, l, k)
                } else {
                    g.fillText(j, l, k)
                }
                if (m) {
                    o.Grst()
                }
            };
            e.prototype.Relstr = function(i, g, f) {
                var h = this;
                h.Abstr(i, h.z + (g + (h.D ? h.D : h.u.measureText(h.B).width)) * h.C, h.A + f)
            };
            e.prototype.OutStr = function(h, g, f) {
                this.Abstr(h, g, f, 0, true)
            };
            e.prototype.M = function(g) {
                var h = this.u,
                    f = g.length;
                h.beginPath();
                h.moveTo(g[0], g[1]);
                for (var i = 2; i < f; i += 2) {
                    h.lineTo(g[i], g[i + 1])
                }
                h.fill()
            };
            e.prototype.Sid3 = function(g, f, i, h, k, j) {
                this.M(arguments)
            };
            e.prototype.Sid4 = function(i, h, k, j, m, l, g, f) {
                this.M(arguments)
            };
            e.prototype.Curv = function(i, h, k, j, g, f, n, m, l) {
                if (!l) {
                    this.MvTo(i, h)
                }
                this.u.bezierCurveTo(k, j, g, f, n, m)
            };
            e.prototype.FulSlr = function(p, o, z, v, F, E, k, j, m, l, C, A, h, f, x, u, w, s, D, B, i, g, H, n, G, y, r) {
                var q = this;
                q.Curv(p, o, z, v, F, E, k, j);
                q.LinTo(m, l);
                q.Curv(0, 0, C, A, h, f, x, u, true);
                q.Curv(0, 0, w, s, D, B, i, g, true);
                if (!H) {
                    q.Fil()
                } else {
                    q.N(true, n, G, y, r, arguments)
                }
            };
            e.prototype.Curvdsh = function(k, h, o, n, l, j, q, p, f, m, i, g, r) {
                this.N(r === 0, f, m, i, g, arguments)
            };
            e.prototype.N = function(j, m, h, g, f, l) {
                var i = this,
                    k = new b.Dasher();
                i.Gsv();
                if (j) {
                    i.u.clip()
                }
                k.DashSegs(m, h, g, f, l, function(q, n, o, p) {
                    i.MvTo(n.X, n.Y);
                    while (p(n)) {
                        i.LinTo(n.X, n.Y)
                    }
                    i.LinTo(n.X, n.Y);
                    i.Gsv();
                    if (q !== 0 && i.u.setLineDash) {
                        i.u.setLineDash([o.Dash, o.Gap])
                    }
                    i.Strk();
                    i.Grst()
                });
                i.Grst()
            };
            e.prototype.Beam = function(j, h, i, g, f) {
                this.Sid4(j, h, i, g, i, g - f, j, h - f)
            };
            e.prototype.Elis = function(i, h, l, f, m, k) {
                var n = this,
                    j = n.z + f + n.u.measureText(n.B).width,
                    g = n.A + m;
                n.Gsv();
                if (i) {
                    n.Curv(j, g, j + i, g + h, j + l - i, g + h, j + l, g)
                } else {
                    n.MvTo(j, g);
                    n.LinTo(j, g + h);
                    n.LinTo(j + l, g + h);
                    n.LinTo(j + l, g)
                }
                n.LinWid(k);
                n.Strk()
            };
            e.prototype.Fnt = function(j, h, i, g) {
                var l = this,
                    f = l.v.Gtft(j),
                    k = f.Name,
                    m = "";
                l.x = Math.round(h * f.Ajust * (k == "Doremi" ? 0.74 : 0.75));
                if (l.B) {
                    l.D = l.u.measureText(l.B).width
                }
                if (f.Italic) {
                    m = "italic "
                }
                if (g) {
                    g = Math.atan(-g / h);
                    l.F = -h * Math.cos(g) * 0.12;
                    g = Math.tan(g)
                }
                l.E = g;
                if (f.Bold) {
                    m += "bold "
                }
                l.w = f.Encoding == 16;
                l.y = h ? i / h : 1;
                l.u.font = m + l.x + "pt " + k
            };
            e.prototype.Chr = function(f, h, g) {
                this.Abstr(g, f, h)
            };
            return e
        }());
        d.CanvasDeviceDriver = c
    })(a = b.Render || (b.Render = {}))
})(Mneme || (Mneme = {}));