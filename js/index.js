!function (t, n, r) {
    if (!n._sufei_data) {
        n._sufei_data = 1;
        var e;
        !function (t) {
            function n(t) {
                for (var n = 0, r = t.length, i = []; r > n;) {
                    var o = t[n++] << 16 | t[n++] << 8 | t[n++];
                    i.push(e.charAt(o >> 18), e.charAt(o >> 12 & 63), e.charAt(o >> 6 & 63), e.charAt(63 & o))
                }
                return i.join("")
            }

            function r(t) {
                for (var n = 0, r = t.length, e = []; r > n;) {
                    var o = i[t.charAt(n++)] << 18 | i[t.charAt(n++)] << 12 | i[t.charAt(n++)] << 6 | i[t.charAt(n++)];
                    e.push(o >> 16, o >> 8 & 255, 255 & o)
                }
                return e
            }

            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = {}, o = 0; 64 > o; o++)i[e[o]] = o;
            t.a = n, t.b = r
        }(e || (e = {}));
        var i;
        !function (n) {
            function r() {
                return 4294967295 * Math.random() >>> 0
            }

            function e(t) {
                for (var n = 0, r = 0, e = t.length; e > r; r++)n = (n << 5) - n + t.charCodeAt(r), n >>>= 0;
                return n
            }

            function i(t, n, r) {
                c ? t.addEventListener(n, r) : t.attachEvent("on" + n, r)
            }

            function o(t) {
                return /^(\d+\.)+\d+$/.test(t)
            }

            function a(t) {
                if (o(t))return t;
                var n = f.test(t) ? -3 : -2, r = t.split(".");
                return r.slice(n).join(".")
            }

            function u(t) {
                if (t) {
                    var n = t.match(s);
                    if (n) {
                        var r = n[1];
                        return v.test(r) && (r = r.split("@").pop().split(":")[0]), r
                    }
                }
            }

            var c = !!t.addEventListener;
            n.c = r, n.d = e, n.e = Date.now || function () {
                    return +new Date
                }, n.f = i, n.g = o;
            var f = /\.com\.cn$|\.com\.hk$/;
            n.h = a;
            var s = /^\s*(?:https?:)?\/{2,}([^\/\?\#\\]+)/i, v = /[@:]/;
            n.i = u
        }(i || (i = {}));
        var o;
        !function (t) {
            function r(t) {
                a++
            }

            function e(t) {
                u++
            }

            function o() {
                return a << 16 | u
            }

            var a = 0, u = 0, c = "onwheel"in n.createElement("div") ? "wheel" : "onmousewheel"in n ? "mousewheel" : "DOMMouseScroll";
            i.f(n, c, e), i.f(n, "mousemove", r), i.f(n, "touchmove", r), t.j = o
        }(o || (o = {}));
        var a;
        !function (r) {
            function e() {
                var n = "";
                try {
                    n = "ActiveXObject"in t ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(",", ".") : navigator.plugins["Shockwave Flash"].description
                } catch (r) {
                }
                return +n.match(/\d+\.\d+/) || -1
            }

            function i() {
                return "chrome"in t
            }

            function o() {
                return "ActiveXObject"in t
            }

            function a() {
                return "MozSettingsEvent"in t
            }

            function u() {
                return "safari"in t
            }

            function c() {
                return "sgAppName"in navigator
            }

            function f() {
                return "callPhantom"in t
            }

            function s() {
                return "webdriver"in t
            }

            function v() {
                return "ontouchstart"in n
            }

            function h() {
                return !0
            }

            function l() {
                return navigator.javaEnabled()
            }

            function p() {
                try {
                    return "localStorage"in t
                } catch (n) {
                    return !1
                }
            }

            function d() {
                return w > 8
            }

            function g() {
                return !1
            }

            function m() {
                for (var t = 0, n = 0; 16 > n; n++) {
                    var r = +y[n]();
                    t = t << 1 | r
                }
                return t
            }

            var w = e(), y = [i, o, a, u, c, g, g, f, s, g, g, v, h, l, p, d];
            r.k = m
        }(a || (a = {}));
        var u, c = "l", f = "isg2", s = [/\.alicdn\.com\//], v = n.head || n.getElementsByTagName("head")[0];
        !function (t) {
            function r(t) {
                var r = n.cookie, e = "; " + t + "=", i = r.indexOf(e);
                if (-1 == i) {
                    if (e = t + "=", r.substr(0, e.length) != e)return;
                    i = 0
                }
                var o = i + e.length, a = r.indexOf("; ", o);
                return -1 == a && (a = r.length), r.substring(o, a)
            }

            function e(t, r, e, i, o) {
                var a = t + "=" + r;
                i && (a += "; domain=" + i), o && (a += "; path=" + o), e && (a += "; expires=" + e), n.cookie = a
            }

            function i(t, n, r) {
                this.write(t, "", "Thu, 01 Jan 1970 00:00:00 GMT", n, r)
            }

            t.l = r, t.m = e, t.n = i
        }(u || (u = {}));
        var h, l = function () {
            function t(t) {
                this._fields = t
            }

            return t.prototype.o = function () {
                for (var t = this._fields, n = [], r = -1, e = 0, i = t.length; i > e; e++)for (var o = this[e], a = t[e], u = r += a; n[u] = 255 & o, 0 != --a;)--u, o >>= 8;
                return n
            }, t.prototype.b = function (t) {
                for (var n = this._fields, r = 0, e = 0, i = n.length; i > e; e++) {
                    var o = n[e], a = 0;
                    do a = (a << 8) + t[r++]; while (--o > 0);
                    this[e] = a >>> 0
                }
            }, t.prototype.p = function (t, n) {
                this._desc || (this._desc = []), this._desc[t] = n
            }, t.prototype.q = function () {
                for (var t = {}, n = 0; n < this._fields.length; n++) {
                    var r = this._desc[n] || n;
                    t[r] = this[n]
                }
                return t
            }, t
        }();
        !function (t) {
            function n(t) {
                for (var n = 0, r = 0, e = t.length; e > r; r++)n = (n << 5) - n + t[r];
                return 255 & n
            }

            function r(t, n, r, e, i) {
                for (var o = t.length; o > n;)r[e++] = t[n++] ^ 255 & i, i = ~(131 * i)
            }

            function i(t) {
                return e.a(t).replace(/\+/g, "-").replace(/\=/g, "_")
            }

            function o(t) {
                return t = t.replace(/\-/g, "+").replace(/\_/g, "="), e.b(t)
            }

            function a(t) {
                var e = n(t), o = [c, e];
                return r(t, 0, o, 2, e), i(o)
            }

            function u(t) {
                var e = o(t), i = e[0];
                if (i == c) {
                    var a = e[1], u = [];
                    if (r(e, 2, u, 0, a), n(u) == a)return u
                }
            }

            var c = 2;
            t.r = a, t.s = u
        }(h || (h = {}));
        var p;
        !function (t) {
            function n() {
                var t = u.l(c);
                if (t && 32 == t.length) {
                    var n = h.s(t);
                    if (n && (s.b(n), 0 != s[d]))return
                }
                s[d] = i.c()
            }

            function r() {
                s[v]++, s[m] = i.e() / 1e3 | 0;
                var t = o.j();
                s[y] = t >> 16, s[b] = 65535 & t;
                var n = s.o();
                return h.r(n)
            }

            function e() {
                var t = 4, r = 2;
                s = new l([r, r, t, t, t, r, r, r]), n(), s[p] = 65535 & i.c(), s[v] = 0, s[g] = i.d(navigator.userAgent), s[w] = a.k()
            }

            function f() {
                var t = r();
                return t
            }

            var s, v = 0, p = 1, d = 2, g = 3, m = 4, w = 5, y = 6, b = 7;
            t.t = e, t.j = f
        }(p || (p = {}));
        var d;
        !function (r) {
            function e(t, n, r) {
                if (!t)return !1;
                var e = t[n];
                if (!e)return !1;
                var i = r(e);
                return T || (i._str = e + ""), i._raw = e, t[n] = i, !0
            }

            function o(t, n, r) {
                if ("apply"in n)return n.apply(t, r);
                switch (r.length) {
                    case 0:
                        return n();
                    case 1:
                        return n(r[0]);
                    case 2:
                        return n(r[0], r[1]);
                    default:
                        return n(r[0], r[2], r[3])
                }
            }

            function a() {
                var t = p.j();
                u.m(c, t, "Fri, 01 Feb 2030 00:00:00 GMT", M, "/")
            }

            function h(t) {
                var n = i.i(t);
                return n ? O.test(n) : !0
            }

            function l() {
                function r(t) {
                    if (!/^https?\:/.test(t.protocol))return !1;
                    var n = t.target;
                    if (!n) {
                        var r = e[0];
                        r && (n = r.target)
                    }
                    var i = !n || /^_self$/i.test(n);
                    if (i) {
                        var o = t.href.split("#")[0];
                        if (o == E && t.hash)return !1
                    }
                    return !0
                }

                var e = n.getElementsByTagName("base");
                i.f(n, "click", function (t) {
                    t = t || event;
                    var n = t.target || t.srcElement;
                    do if ("A" == n.tagName) {
                        r(n) && a();
                        break
                    } while (n = n.parentNode)
                }), i.f(n, "submit", a), i.f(t, "unload", a)
            }

            function d(t) {
                if (h(t))return void a();
                var n = p.j();
                return t + (/\?/.test(t) ? "&" : "?") + f + "=" + encodeURIComponent(n)
            }

            function g(n, r) {
                if (n in t) {
                    t.hasOwnProperty(n) && e(t, n, r);
                    var i = t.Window;
                    if (i) {
                        var o = i.prototype;
                        o.hasOwnProperty(n) && e(o, n, r)
                    }
                }
            }

            function m() {
                g("fetch", function (t) {
                    return function (n, r) {
                        var e = d(n);
                        return e ? n = e : (r = r || {}, r.credentials = "include"), t.call(this, n, r)
                    }
                })
            }

            function w() {
                var n = t.XMLHttpRequest;
                n && y(n.prototype), b()
            }

            function y(n) {
                T ? e(n, "open", function (t) {
                    return function () {
                        try {
                            a()
                        } catch (n) {
                        }
                        return t.apply(this, arguments)
                    }
                }) : e(t, "XMLHttpRequest", function (t) {
                    return function () {
                        try {
                            a()
                        } catch (n) {
                        }
                        return new t
                    }
                })
            }

            function b() {
                e(t, "ActiveXObject", function (t) {
                    return function (n) {
                        if (n && /XMLHTTP/i.test(n))try {
                            a()
                        } catch (r) {
                        }
                        return new t(n)
                    }
                })
            }

            function _(n) {
                var r = s, e = t.sufei_jsonp_ignore;
                e && (r = r.concat(e));
                for (var i = 0; i < r.length; i++)if (r[i].test(n))return !0;
                return !1
            }

            function A() {
                function t(t) {
                    if (t && "SCRIPT" == t.tagName) {
                        var n = t.src;
                        /callback=/.test(n) && (_(n) || (h(n) ? a() : t.src = d(t.src)))
                    }
                }

                function r(n) {
                    return function (r) {
                        try {
                            t(r)
                        } catch (e) {
                        }
                        return o(this, n, arguments)
                    }
                }

                function i(t) {
                    T ? e(Element.prototype, t, r) : (e(v, t, r), e(n.body, t, r))
                }

                i("insertBefore"), i("appendChild")
            }

            function j() {
                E = location.href.split("#")[0], k = location.hostname, M = i.h(k), O = new RegExp("\\.?" + M.replace(/\./g, "\\.") + "$", "i"), l(), w(), m(), A(), a()
            }

            var E, k, M, O, T = !!t.addEventListener;
            r.t = j
        }(d || (d = {}));
        var g;
        !function (t) {
            function n() {
                p.t(), d.t()
            }

            function r() {
                try {
                    n()
                } catch (t) {
                }
            }

            r()
        }(g || (g = {}))
    }
}(window, document);
