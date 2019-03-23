var Helicon;
(function(b) {
    var a;
    (function(c) {}
    )(a = b.I || (b.I = {}))
}
)(Helicon || (Helicon = {}));
var Thelxinoe;
(function(b) {
    var a;
    (function(c) {
        function d() {
            return new Thelxinoe.Aiakos()
        }
        c.CreateAikos = d
    }
    )(a = b.I || (b.I = {}))
}
)(Thelxinoe || (Thelxinoe = {}));
var Helicon;
(function(b) {
    var a;
    (function(c) {}
    )(a = b.I || (b.I = {}))
}
)(Helicon || (Helicon = {}));
var Helicon;
(function(b) {
    var a;
    (function(d) {
        function e(f) {
            return new c(f)
        }
        d.CreateClio = e;
        var c = (function() {
            function f(g) {
                var h = this
                  , i = g.Parser;
                h.s = g;
                h.r = i.InitAiakos();
                i.XtraLoader = function(k, j, l) {
                    return h.K(k, j, l)
                }
                ;
                g.LoadXmlHandler = function(j) {
                    return h.L(j)
                }
            }
            Object.defineProperty(f.prototype, "ApiProblemHandler", {
                set: function(g) {
                    this.I = g
                },
                enumerable: true,
                configurable: true
            });
            f.prototype.Session = function(i, h, g) {
                this.u = i;
                this.t = h ? h : "Musicnotes";
                this.y = g ? g : "/get/DeliveryApi.aspx";
                this.A = 0;
                this.z = "";
                this.B = 0;
                this.C = 0;
                this.D = 0
            }
            ;
            f.hexToArray = function(j) {
                j = j.replace(/\s|:/gm, "");
                if (j.length & 1) {
                    j = "0" + j
                }
                var g = new Uint8Array(j.length / 2);
                for (var h = 0; h < j.length; h += 2) {
                    g[h / 2] = parseInt(j.substr(h, 2), 16)
                }
                return g
            }
            ;
            f.prototype.J = function(i) {
                function j(l) {
                    var p = 0;
                    var q = 0
                      , m = 2
                      , r = 20;
                    for (var o = 0; o < 30; o += 1) {
                        var n;
                        if (m) {
                            n = l >> --r & 1;
                            q ^= n;
                            m -= 1
                        } else {
                            m = 2;
                            n = q
                        }
                        p |= n << o
                    }
                    p ^= 56394373;
                    return p
                }
                var h = new Array(2);
                var k = this.r.HashNibl(this.u);
                var g = i[0] + (i[4] << 8) + ((i[2] & 15) << 16);
                g = j(g);
                h[0] = g | k << 30;
                g = i[1] + (i[3] << 8) + ((i[2] & 240) << 12);
                g = j(g);
                h[1] = g | k << 28 & 3221225472;
                return h
            }
            ;
            f.prototype.K = function(h, q, n) {
                var o;
                var m;
                function k() {
                    return (o[0] * 4294967296 + o[1]).toString()
                }
                function l() {
                    m[1] = Math.floor((m[1] + (m[0] % 10) * 4294967296) / 10);
                    m[0] = Math.floor(m[0] / 10)
                }
                function p(u, v) {
                    return u[0] < v[0] || u[0] == v[0] && u[1] < v[1]
                }
                if (h < 20) {
                    return 0
                }
                var g = new Uint8Array(20);
                if (q.Read(g, 20) != 20) {
                    return -2
                }
                var t = new DataView(g.buffer,0,20);
                if (t.getUint8(0) == 149) {
                    this.A = t.getUint8(10);
                    if (n) {
                        o = [t.getUint32(16, true), t.getUint32(12, true)]
                    } else {
                        o = [t.getUint32(12), t.getUint32(16)]
                    }
                    m = [232830643, 2808348672];
                    var j = [232830, 2764472319];
                    var s = "";
                    if (o[0] & 2147483648) {
                        o[0] = (~o[0]) >> 0;
                        o[1] = 4294967296 - o[1];
                        if (o[1] == 0) {
                            o[0] += 1
                        }
                        s = "-"
                    }
                    if (!p(j, o)) {
                        s += k()
                    } else {
                        while (p(o, m)) {
                            l()
                        }
                        do {
                            var r = 48;
                            do {
                                if (o[1] < m[1]) {
                                    o[1] += 4294967296;
                                    o[0] -= 1
                                }
                                o[1] -= m[1];
                                o[0] -= m[0];
                                r += 1
                            } while (!p(o, m));s += String.fromCharCode(r);
                            l()
                        } while (p(j, o));var i = k();
                        while (i.length < 15) {
                            i = "0" + i
                        }
                        s += i
                    }
                    this.z = s
                }
                return 0
            }
            ;
            f.prototype.L = function(g) {
                var j = this, k, m, h;
                function i(p) {
                    var o = "";
                    p += ">";
                    var r = k;
                    var l = r.indexOf("<" + p);
                    if (l >= 0) {
                        l += p.length + 1;
                        var q = r.indexOf("</" + p, l);
                        if (q >= 0) {
                            o = r.substring(l, q)
                        }
                    }
                    return o
                }
                function n(l, o) {
                    if (j.I) {
                        j.I({
                            Type: 4,
                            Code: l,
                            Diag: o
                        })
                    }
                }
                if (g.Type == 1) {
                    k = Mneme.RdStr(g.Data);
                    if (k) {
                        m = i("msg");
                        if (m == "fail") {
                            h = parseInt(i("code"));
                            n(isNaN(h) ? 14 : h, i("reason"))
                        }
                    }
                }
                if (!m) {
                    n(14, "no xml message")
                }
            }
            ;
            f.prototype.M = function(i, h) {
                var g = '<?xml version="1.0" encoding="utf-8"?>\n<DeliveryAPI><ver>0</ver><dt>' + (h ? h : 19) + "</dt><rev>1.91</rev><msg>" + i + "</msg><dlr>" + this.t + "</dlr><cid>" + this.u + "</cid><ppn>" + this.w + "</ppn>";
                return g
            }
            ;
            f.prototype.ToDeliver = function(j, i, h) {
                var g = this.M(j, h);
                g += "<oid>1</oid><srn>" + this.v.toString() + "</srn><why><to>view</to>";
                if (i) {
                    g += "<to>print</to>"
                }
                g += "</why>";
                return g
            }
            ;
            f.prototype.N = function(h) {
                var g = this.ToDeliver("reqDeliver", h);
                g += "<ran>" + this.H + "</ran>";
                g += "</DeliveryAPI>";
                return g
            }
            ;
            f.prototype.O = function() {
                var h = this;
                if (!(h.w && h.y && h.x && h.t && h.u && h.v)) {
                    return false
                }
                h.H = h.r.Ran() ^ 117;
                var g = f.hexToArray(h.x);
                g[0] ^= h.H;
                var i = h.J(g);
                if (i == null) {
                    return false
                }
                h.r.SetPerm(i[0], i[1], h.t, h.u);
                return true
            }
            ;
            f.prototype.Fetch = function(l, j, g, k) {
                var i = this;
                i.v = l;
                i.w = j;
                i.x = g;
                if (!i.O()) {
                    return false
                }
                var h = i.N(k);
                i.s.LoadFromUrl(i.y, h, null, k);
                return true
            }
            ;
            f.prototype.Tally = function(g) {
                this.B += 1;
                this.C += g
            }
            ;
            f.prototype.Result = function(g, h, i, j) {
                if (g < 0 || g >= 6) {
                    g = 0
                }
                this.D = g;
                this.E = h ? h : 0;
                this.F = i ? i : 0;
                this.G = j ? j : ""
            }
            ;
            f.prototype.P = function(h) {
                var n = this
                  , o = n.D
                  , l = ["", "confirm", "fail", "warn", "cancel", "reject"][o]
                  , m = n.z;
                if (!m) {
                    m = "1-" + n.v
                }
                var k = n.M("reqConfirm", h);
                k += "<rpt>" + m + "</rpt><result>" + l + "</result><tries>" + n.B + "</tries><copy>" + n.C + "</copy>";
                if (o == 2 || o == 3) {
                    var g = 10;
                    var j = n.G;
                    var i = n.E;
                    if (i < 0) {
                        j = "p. " + n.F;
                        g = 8
                    }
                    if (i == 7) {
                        g = 7
                    }
                    k += "<fail><in>deliver</in><code>" + g + "</code>";
                    if (j) {
                        k += "<reason>" + j + "</reason>"
                    }
                    if (i != 0) {
                        k += "<err>" + i + "</err>"
                    }
                    k += "</fail>"
                }
                k += "</DeliveryAPI>";
                return k
            }
            ;
            f.prototype.Confirm = function(h) {
                if (this.D == 0) {
                    return false
                }
                var g = this.P(h);
                this.s.LoadFromUrl(this.y, g);
                return true
            }
            ;
            Object.defineProperty(f.prototype, "Copies", {
                get: function() {
                    var g = this.r
                      , h = g ? g.Copies : 0;
                    h -= this.C;
                    if (h < 0) {
                        h = 0
                    }
                    return h
                },
                enumerable: true,
                configurable: true
            });
            return f
        }());
        d.Cl = c
    }
    )(a = b.Clio || (b.Clio = {}))
}
)(Helicon || (Helicon = {}));
var Thelxinoe;
(function(a) {
    var b = (function() {
        function c() {
            this.B = new Uint8Array(256)
        }
        Object.defineProperty(c.prototype, "Reader", {
            set: function(d) {
                this.y = d
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.Read = function(f, e) {
            var d = this.y.Read(f, e);
            this.C(f.subarray(0, d));
            return d
        }
        ;
        Object.defineProperty(c.prototype, "Pos", {
            get: function() {
                return this.y.Pos
            },
            enumerable: true,
            configurable: true
        });
        c.prototype.C = function(g) {
            var f = this, e = f.z, j = f.A, d, i, h;
            for (d = 0; d < g.length; d++) {
                e = e + 1 & 255;
                i = f.B[e];
                j = j + i & 255;
                h = f.B[j];
                f.B[j] = i;
                f.B[e] = h;
                g[d] ^= f.B[i + h & 255]
            }
            f.z = e;
            f.A = j
        }
        ;
        c.prototype.Init = function(f) {
            var e = this, g = 0, h = 0, j = 0, d;
            e.z = e.A = 0;
            for (d = 0; d < 256; d++) {
                e.B[d] = d
            }
            do {
                for (d = 0; d < 256; d++) {
                    var i = e.B[d];
                    j = j + i + f[g] & 255;
                    e.B[d] = e.B[j];
                    e.B[j] = i;
                    if (++g == 5) {
                        g = 0
                    }
                }
            } while (!h++)
        }
        ;
        return c
    }());
    a.Prep = b
}
)(Thelxinoe || (Thelxinoe = {}));
var Thelxinoe;
(function(a) {
    var c = (function() {
        function d() {}
        d.prototype.Clear = function() {
            this.h = 0
        }
        ;
        Object.defineProperty(d.prototype, "UseCount", {
            get: function() {
                return this.h
            },
            set: function(e) {
                this.h = e
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(d.prototype, "IsPermitted", {
            get: function() {
                return this.UseCount > 0
            },
            enumerable: true,
            configurable: true
        });
        return d
    }());
    var b = (function() {
        function d() {
            this.i = new Array(12);
            for (var e = 0; e < 12; e++) {
                this.i[e] = new c()
            }
            this.j = new Array(2);
            this.t()
        }
        d.prototype.t = function() {
            var e = this
              , g = e.i
              , f = g.length;
            while (--f >= 0) {
                g[f].Clear()
            }
            e.s = false;
            e.p = -200;
            e.q = e.o = 0
        }
        ;
        d.prototype.Ok = function() {
            return !this.s
        }
        ;
        d.prototype.u = function(e) {
            var f = 0;
            for (var g = 0; g < 32; g += 4) {
                f ^= e >> g & 15
            }
            return f
        }
        ;
        d.prototype.HashNibl = function(e) {
            return this.u(this.z(e))
        }
        ;
        d.prototype.v = function(g) {
            var f = 0;
            var i = 0;
            var j = true;
            g &= 1073741823;
            g ^= 56394373;
            for (var e = 0; e < 20; e += 1) {
                var h = (g & 1);
                i ^= h;
                f <<= 1;
                f |= h;
                j = !j;
                if (j) {
                    g >>= 1;
                    if (i != (g & 1)) {
                        return -1
                    }
                }
                g >>= 1
            }
            return f
        }
        ;
        d.prototype.w = function(h, f, g) {
            var i = false;
            if (!h) {
                i = true
            }
            if (this.u(h) != (f[0] >>> 30 | f[1] >>> 28 & 12)) {
                i = true
            }
            var e = this.v(f[0]);
            if (e < 0) {
                i = true
            }
            g[0] = e & 255;
            g[4] = (e >> 8) & 255;
            g[2] = e >> 16;
            e = this.v(f[1]);
            if (e < 0) {
                i = true
            }
            g[1] = e & 255;
            g[3] = (e >> 8) & 255;
            g[2] |= e >> 12 & 240;
            return i
        }
        ;
        d.prototype.x = function(h, j, g) {
            var i = (h + (j << 8));
            var f = new Uint16Array(g.buffer);
            for (var e = 0; e < 32; e++) {
                f[e] ^= i;
                i = (i + 43 + 73 * 256) & 65535
            }
        }
        ;
        d.prototype.y = function(i, e) {
            var f = 0;
            var h = 1;
            for (var g = 0; g < e; g++) {
                f ^= i[g] << h % 28;
                h += 5
            }
            return f >>> 0
        }
        ;
        d.prototype.z = function(h) {
            var j = 0, g = h.length, i = 1, f, e;
            for (e = 0; e < g; e++) {
                f = h.charCodeAt(e);
                if (f > 127) {
                    f -= 256
                }
                j ^= f << i % 28;
                i += 5
            }
            if (!j) {
                j = 1
            }
            return j >>> 0
        }
        ;
        d.prototype.Ran = function() {
            var e = new Date();
            return e.getSeconds() * e.getMinutes() * e.getMilliseconds() / 13585
        }
        ;
        d.prototype.SetPerm = function(h, f, e, g) {
            this.j[0] = h;
            this.j[1] = f;
            this.k = this.z(e);
            this.l = this.z(g)
        }
        ;
        d.prototype.ReadIn = function(u, j, g) {
            var o = this, r = -2, v, n, k = 0, C = 0, p = new Array(2);
            o.t();
            var q = new Uint8Array(72);
            if (g.Read(q, 1) != 1) {
                return r
            }
            if (q[0] == 2 && (j == 94 || j == 92)) {
                v = u.GetFirstMunfo("dlr");
                C = o.z(v);
                if (v != "") {
                    n = u.GetFirstMunfo("cid");
                    if (n != "") {
                        k = o.z(n);
                        if (k == o.l && C == o.k) {
                            p = o.j.slice()
                        }
                    }
                }
            }
            var B = new Uint8Array(5);
            var h = o.w(k, p, B);
            if (!o.r) {
                o.r = new a.Prep()
            }
            var x = o.r;
            x.Reader = g;
            x.Init(B);
            var l = new Uint8Array(2);
            if (x.Read(l, 2) != 2) {
                return r
            }
            var w = l[0] % (15 + 1);
            if (x.Read(q, w) != w) {
                return r
            }
            var m = j - 22;
            if (x.Read(q, m) != m) {
                return r
            }
            m = o.y(q, m);
            o.x(l[0], l[1], q);
            var y = new DataView(q.buffer,0), A = u.Endian, i = y.getUint32(0, A), s = y.getUint32(4, A), f = y.getUint32(8, A), z = o.i, e;
            for (e = 0; e < z.length; e++) {
                var E = y.getUint32(12 + e * 4, A);
                z[e].UseCount = E >>> 24
            }
            o.m = y.getUint16(60, A);
            o.n = y.getUint16(62, A);
            B.set(q.subarray(64, 69));
            o.o = q[69];
            if (j < 94) {
                o.p = 1
            } else {
                o.p = q[70];
                o.q = q[71]
            }
            w = 15 - w;
            if (x.Read(q, w) != w || x.Read(q, 4) != 4) {
                return r
            }
            var D = y.getUint32(0, A);
            if (D != m) {
                h = true
            }
            if (!h && C == i && f == o.z(u.GetFirstMunfo("clt")) && s == o.z(u.GetFirstMunfo("pop"))) {
                o.s = false;
                x.Init(B);
                r = 0
            } else {
                o.t();
                o.s = true;
                r = 7
            }
            return r
        }
        ;
        d.prototype.Prep = function(e) {
            this.r.Reader = e;
            return this.r
        }
        ;
        Object.defineProperty(d.prototype, "Copies", {
            get: function() {
                return this.p
            },
            enumerable: true,
            configurable: true
        });
        return d
    }());
    a.Aiakos = b
}
)(Thelxinoe || (Thelxinoe = {}));
