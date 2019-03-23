function Embedded(n, t) {
    function b(n) {
        function t(n, t) {
            n.css("visibility", t && !r ? "visible" : "hidden")
        }
        t(rt, n > i.FirstPageNumber);
        t(ut, n < i.LastPageNumber || !s);
        s && ($("#previewPageRight .fa").toggle(n < i.LastPageNumber && !r), $("#previewPageLeft .fa").toggle(n > i.FirstPageNumber && !r));
        u.val(n)
    }

    function ot(n, i) {
        function d(n, t) {
            st.removeClass(n).addClass(t)
        }

        function g(n) {
            n && (r = !0);
            u.prop(y, r);
            ft.prop(y, k = !n)
        }

        function ut(n) {
            var h, u;
            if (!o) return !1;
            if (h = !1, it) {
                var f = o.clientHeight,
                    t = f,
                    c = o.offsetTop,
                    i = c;
                r ? (i = Math.max(0, n - w), t = Math.max(9, Math.min(ct, window.scrollY + window.innerHeight) - w - i)) : e ? (u = n - l, u > 0 ? (t += n - l, t >= s && (t = s, e = !1)) : u < 0 ? (n = o.scrollTop, u *= l ? Math.max(n / l, 1) : 1, i += u, i <= 0 && (i = 0), n += u, n < 0 && (n = 0), e = n || i, e || (t = s), o.style.top = Math.floor(i) + "px", o.scrollTop = n) : (i = o.offsetTop, t = n + window.innerHeight - (w + i), t > f && (t > s && (t = s, e = !1), i > s - t && (i = s - t)))) : s = f;
                t = Math.floor(t);
                i = Math.floor(i);
                h = t != f || i != c;
                t != f && (o.style.height = t + "px");
                i != c && (o.style.top = i + "px");
                l = n
            }
            return h
        }

        function et() {
            if (!rt) {
                var t = Math.round(window.scrollY);
                !t && r && l >= h ? window.scrollTo(0, l) : ut(t) && r && n.RePosY()
            }
        }

        function ot() {
            function f() {
                var n = window.scrollY;
                (rt = n < h) ? (window.scrollTo(0, ++i), setTimeout(f, 5)) : ut(n)
            }

            function r(n) {
                var t = $("#" + n);
                return t.length ? t[0].getBoundingClientRect() : {}
            }
            var t, i, u;
            (k || !n.Pause()) && (d(p, "fa-pause"), k && (g(!0), n.Play(0, !at)));
            tt && (h = r("svgplayer").top, t = r("addToCartBtnMobile").top, t || (t = r("addToCartBtn").top), t || (t = r("useQCOMobile").top), t && (h = Math.min(h, t)), u = r("product" + (a ? "Svg" : "Canvas")).bottom, i = window.scrollY, h = Math.min(h, Math.max(0, u - window.innerHeight)) + i, i = tt == 1 ? i : h - 1, o && f())
        }
        var p = "fa-play",
            nt = "fa-spin fa-spinner",
            st = c.prop(y, !1).find("i"),
            rt, h, l = 0,
            ht, w = v.getBoundingClientRect().top + window.scrollY,
            s = v.clientHeight,
            ct = w + s,
            o = $(a ? "#svgWin" : "#canvasWin")[0],
            k;
        d(p, nt);
        n.Chording = t.ChordPlaybackHandling;
        n.PageChangeHandler = b;
        n.ReadyHandler = function() {
            k = !0;
            c.off(f);
            c.on(f, ot);
            ft.on(f, function() {
                n.Stop()
            });
            n.EndHandler = function(t) {
                d("fa-pause", p);
                t && (e = !0, g(r = !1), b(n.Page))
            };
            d(nt, p);
            i && ot();
            it && ($(window).resize(et), $(window).scroll(et), n.SystemChangeHandler = function(n) {
                ht = n
            })
        };
        g(i)
    }

    function k(n, t, i) {
        i = i ? ", code " + i : "";
        alert("error in " + n + i + ": " + t)
    }

    function st(n) {
        k("loading sheet music", n.Diag, n.Code)
    }

    function p() {
        return v.clientWidth
    }

    function ht() {
        var n = p() > 380,
            t = n ? "" : "0",
            i = n ? "" : ".3em",
            r = "paddingLeft",
            u = "paddingRight";
        $("#ofPages").toggle(n); // Toggles the number of pages for some reason
        $(".print-container").css(r, t);
        $(".playback-container").css(u, t);
        l.length && (l.css(r, i), l.css(u, i))
    }

    function ct() {
        i.NoYBar = !0;
        i.ZoomMode = 2;
        w = p();
        i.Render()
    }

    function yt() {
        function n() {
            var n = p();
            n != w && (w = n, i.Rescale(), ht())
        }
        n();
        vt = setTimeout(n, 200)
    }

    function pt(n) {
        /*
            Used for loading the sample mtd.
        */
        var r = new Helicon.Hcn("productSvg"),
            s = $("#print-options-dialog"),
            u, e, o;
        i = r;
        r.PlaySupported || $("#helicon-playback").hide();
        r.LoadSuccessHandler = function() {
            if (ct(), $(window).resize(yt), a) ot(r);
            else {
                wt();
                c.on(f, function() {
                    nt(0)
                });
                c.prop(y, !1)
            }
        };
        r.LoadFailureHandler = st;
        l.length && (u = new Melete.Mt(r, window.frames.invisible),
                            u.Logo = t.PrintMusicnotesLogoText, u.ProblemHandler = k,
                            u.Papers($("#pdPaperSizeType")[0], t.DefaultToLetterPaper),
                            e = u.PrintOptions, o = new Melete.Ui.OpDlg(e),
                            o.PrintHandler = function() {
                                                e.Persist();
                                                u.Print()
                                            }, l.click(function() {
                                                u.Print()
                                            }), $("#showPrintOptions").click(function() {
                                                s.modal("show")
                                            }), o.CloseHandler = function() {
                                                s.modal("hide")
                                            });
        ht(); // (non-font) Formatting shits
        // r.LoadFromUrl("/mtds/" + n + ".mtd")
        r.LoadFromUrl("s" + n + ".mtd")
    }

    function o(n) {
        /*
            Change page by n.
        */
        // Turn page if not available
        s ? r || i.TurnPage(n) : nt(2)
        i.TurnPage(n)
    }

    function lt() {
        h != null && (clearTimeout(h), h = null)
    }

    function d() {
        var n = u.val();
        lt();
        s ? (i.Page = n, i.Render()) : nt(n)
    }

    function wt() {
        ut.on(f, function() {
            o(1)
        });
        rt.on(f, function() {
            o(-1)
        });
        h = null;
        u.click(function() {
            u.select()
        });
        u.bind("keypress", function(n) {
            var t = n.which;
            if (t < 48) {
                switch (t) {
                    case 10:
                    case 13:
                        d();
                        break;
                    case 43:
                        o(1);
                        break;
                    case 45:
                        o(-1)
                }
                return t < 9
            }
            return t < 58
        });
        u.blur(d);
        u.bind("input", function() {
            lt();
            h = setTimeout(d, 2e3)
        });
        b(1)
    }

    function g() {
        et.hide()
    }

    function nt(t) {
        /*
            Loads full version of file.
        */
        var r = new Helicon.Hcn("productCanvas"),
                s = $("#print-options-dialog"),
                u, e, o;
        // var r = new Helicon.Hcn("productSvg"),
        //         s = $("#print-options-dialog"),
        //         u, e, o;
        i = r;
        r.PlaySupported || $("#helicon-playback").hide(); // Hide the other
        r.BgColor = [255, 255, 255]; // Make background fully white
        r.Session(n.Cid, null, "/mtds/"+n.Ppn+".mtd");
        ot(r, t == 0); // ?
        et.show(); // Show loading screen
        r.LoadSuccessHandler = function() {
            g(); // Hide loading screen
            $("#productSvg").hide();
            $("#productCanvas").show();
            i.Stop();
            i = r;
            r.Size = {
                Wide: p(),
                High: v.clientHeight
            };
            r.Page = t;
            r.LoadedFonts = [];
            et.hide(); // End loading screen
             // Set action for right and left arrow keys
            $("#previewPageRight").on(f, function() {
                o(1)
            });
            $("#previewPageLeft").on(f, function() {
                o(-1)
            })
        };
        r.LoadFailureHandler = function(n) {
            g();
            st(n)
        };
        r.ApiProblemHandler = function(n) {
            g();
            k("sheet music data", n.Diag, n.Code)
        };
        ht();
        r.Fetch(1, n.Ppn, n.Hex)
    }
    var a = t.NoFullPreview,
        tt = t.ScrollToStartPlay,
        it = t.ScrollInternally,
        at = t.AnimatePlayback,
        s, i, h, vt, w = 0,
        r, e = !1,
        v = $("#productDisplay")[0],
        u = $("#mBedPageNo"),
        rt = $("#left"),
        ut = $("#right"),
        c = $("#start-playback"),
        ft = $("#stop-playback"),
        l = $("#print-sample"),
        et = $("#fullPreviewLoadingOverlay"),
        y = "disabled",
        f = "click";
    pt(n.Ppn) // Ppn is like MN0000000
}