(function() {
    try {
        var g = this;

        function l(a, b) {
            var c = aa;
            return !!a || (c.log(b), !1)
        }

        function ba(a) {
            return a
        }

        function n(a, b) {
            for (var c = b.split("."); c.length && a;) a = a[c.shift()];
            return a
        }

        function r(a, b) {
            if (!Array.isArray(a)) return !1;
            b = b || ba;
            for (var c = 0, d = a.length; c < d; c++)
                if (!0 === b(a[c])) return !0;
            return !1
        }

        function x(a, b, c) {
            a = n(a, b);
            return "string" === typeof a ? a : c || ""
        }

        function y(a, b) {
            var c = n(a, b);
            return Array.isArray(c) ? c : []
        }

        function A(a, b) {
            for (var c = y(a, b), d = [], e = 0, f = c.length; e < f; e++) d.push(B(c[e]) ? c[e] : {});
            return d
        }

        function B(a) {
            return !(!a || a.constructor !== Object)
        };

        function C(a, b) {
            var c = (g.ButtonWebConfig || {})[a];
            return void 0 === c ? b : c
        }

        function ca() {
            var a = C("inject");
            return a instanceof Array ? a : []
        }

        function D(a, b) {
            var c = C(a, b);
            return "string" === typeof c ? c : b || ""
        }

        function da(a, b) {
            var c = C(a, b);
            return "boolean" === typeof c ? c : b || !1
        }

        function ea(a) {
            a = C(a);
            if ("function" === typeof a) return a
        }

        function fa(a, b) {
            return n(g.ButtonWebConfig, ["defaults", a, b].join(".")) || null
        };

        function ga(a, b) {
            var c;
            try {
                (c = g.JSON.parse(a)) && c.constructor === Object || (c = {})
            } catch (d) {
                b.log("Invalid JSON:" + a), c = {}
            }
            return c
        }

        function ha(a) {
            try {
                return g.JSON.stringify(a)
            } catch (b) {
                return "{}"
            }
        };

        function ia(a) {
            var b = {
                    url: g.location.href
                },
                c;
            for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
            a = new Date;
            c = -a.getTimezoneOffset();
            b.user_local_time = a.getFullYear() + "-" + E(a.getMonth() + 1) + "-" + E(a.getDate()) + "T" + E(a.getHours()) + ":" + E(a.getMinutes()) + ":" + E(a.getSeconds()) + (0 <= c ? "+" : "-") + E(c / 60) + ":" + E(c % 60);
            return b
        }

        function ja(a) {
            var b = fa(a, "context");
            if (b && b.constructor === Object) return b;
            b = C("context");
            return (b || {})[a]
        }

        function E(a) {
            a = Math.abs(a).toString();
            1 === a.length && (a = "0" + a);
            return a
        }

        function la(a) {
            return {
                placement_id: a,
                context: ia(ja(a) || {})
            }
        }

        function ma(a, b) {
            var c = a.getAttribute("data-bttnio-id"),
                d;
            d = (d = a.getAttribute("data-bttnio-context")) ? ga(d, b) : void 0;
            d = d || ja(c) || {};
            return {
                placement_id: c,
                context: ia(d)
            }
        };

        function na(a) {
            var b;
            return function() {
                var c = this,
                    d = arguments;
                clearTimeout(b);
                b = setTimeout(function() {
                    b = null;
                    a.apply(c, d)
                }, 300)
            }
        }

        function F(a, b) {
            "function" === typeof a && a.apply(g, Array.prototype.slice.call(arguments, 1))
        }

        function oa(a, b) {
            var c = !1,
                d = Array.prototype.slice.call(arguments, 1);
            return function() {
                "function" !== typeof a || c || (c = !0, a.apply(g, d))
            }
        };
        var G = void 0;

        function H() {
            return "try{" + D("siteCatalyst", "s") + ".tl(true,'e','usebutton')}catch(e){}"
        }

        function I() {
            void 0 === G && (G = "function" === typeof n(g, D("siteCatalyst", "s") + ".tl"));
            return G
        };

        function J(a) {
            return a.substr(0, 7)
        }

        function pa(a, b) {
            for (var c in b) {
                var d = b[c];
                "[object Object]" === Object.prototype.toString.call(d) ? pa(a[c], d) : a[c] = d
            }
        }

        function K(a, b) {
            var c = document.createElement(a),
                d = Array.prototype.splice.call(arguments, 1);
            "a" === a && (c.rel = "noskim", c.setAttribute("data-bttnio-link", 1), I() && c.setAttribute("onclick", H()));
            for (var e = 0, f = d.length; e < f; e++)
                for (var h in d[e]) d[e].hasOwnProperty(h) && (c.style[h] = d[e][h]);
            return c
        }

        function L(a, b) {
            for (var c = K(a), d = Array.prototype.splice.call(arguments, 1), e = [], f = 0, h = d.length; f < h; f++)
                if ("string" === typeof d[f]) e.push(d[f]);
                else
                    for (var u in d[f]) d[f].hasOwnProperty(u) && d[f][u] && e.push(u);
            c.className = e.join(" ");
            return c
        }

        function M(a, b, c) {
            a = K(a);
            pa(a, b);
            c = c || [];
            b = 0;
            for (var d = c.length; b < d; ++b) a.appendChild(c[b]);
            return a
        }

        function qa(a) {
            var b;
            document.contains && document.contains(a) ? b = !0 : (b = a.getBoundingClientRect(), b = 0 !== b.left || 0 !== b.top || 0 !== b.bottom || 0 !== b.right);
            if (!b) return !1;
            a = a.getBoundingClientRect();
            a: {
                var c = g.innerHeight;b = Math.max(a.left, 0);
                var d = Math.min(a.right, g.innerWidth);
                if (b <= d) {
                    var e = Math.max(a.top, 0),
                        c = Math.min(a.bottom, c);
                    if (e <= c) {
                        b = (d - b) * (c - e);
                        break a
                    }
                }
                b = 0
            }
            return b >= a.width * a.height / 2
        };
        var ra = /^(?:track\.bttn\.io\/([^\/]+).*|(?!track)([^\.]+)\.bttn\.io(?:\/.*|$))/,
            N = K("a");

        function P(a) {
            return a.replace(/^www./, "").toLowerCase()
        }

        function sa() {
            var a = {},
                b = N.search.replace(/^\?/, "").split("&"),
                c, d, e;
            c = 0;
            for (d = b.length; c < d; c++) e = b[c].split("="), a[e[0]] = decodeURIComponent(e[1] || "");
            return a
        }

        function ta(a) {
            var b = a.dataset.bttnioTargetHref;
            if (void 0 !== b) return b;
            var b = C("relativeLinkLocation"),
                b = B(b) ? b : null,
                c = document.createElement("a");
            c.href = "/";
            b = null === b || c.hostname !== a.hostname ? {
                hostname: a.hostname,
                port: a.port
            } : {
                hostname: x(b, "hostname", a.hostname),
                port: x(b, "port", a.port)
            };
            N.href = a.href;
            N.hostname = b.hostname;
            b.port && (N.port = b.port);
            return N.href
        }

        function ua(a, b) {
            var c = b.links_configuration,
                d = ta(a);
            N.href = d;
            var e = P(N.hostname),
                f = N.pathname,
                h = sa();
            if (!c || a.getAttribute("data-bttnio-enhanced") || a.getAttribute("data-bttnio-link")) return !1;
            var u = A(c, "supported_hostnames");
            if (r(u, function(a) {
                    return e === P(x(a, "hostname"))
                })) return !0;
            d = A(c, "supported_bttnio_subdomains");
            if (d.length) {
                var v = (e + f).match(ra);
                if (v) {
                    var w = v[1] || v[2];
                    if (r(d, function(a) {
                            return w.toLowerCase() === x(a, "subdomain")
                        })) return !0
                }
            }
            c = A(c, "supported_affiliates");
            return r(c, function(a) {
                if (e !==
                    P(x(a, "hostname"))) return !1;
                var b = A(a, "query_url_keys"),
                    b = r(b, function(a) {
                        a = x(a, "key");
                        if (h.hasOwnProperty(a)) {
                            var b = P(M("a", {
                                href: h[a]
                            }).hostname);
                            return r(u, function(a) {
                                return b === P(x(a, "hostname"))
                            })
                        }
                        return !1
                    }),
                    c = A(a, "query_ids"),
                    c = r(c, function(a) {
                        var b = x(a, "key");
                        return h.hasOwnProperty(b) ? (a = A(a, "values"), r(a, function(a) {
                            return x(a, "value") === h[b]
                        })) : !1
                    });
                a = A(a, "pathname_ids");
                a = r(a, function(a) {
                    var b = x(a, "regex"),
                        c;
                    if (!b) return !1;
                    try {
                        c = (new RegExp(b)).exec(f)
                    } catch (d) {
                        return !1
                    }
                    if (c) {
                        var e = c.slice(1);
                        a = A(a, "matches");
                        return r(a, function(a) {
                            a: if (a = y(a, "values"), Array.isArray(e) && Array.isArray(a) && e.length === a.length) {
                                var b, c;
                                b = 0;
                                for (c = e.length; b < c; b++)
                                    if (e[b] !== a[b]) {
                                        a = !1;
                                        break a
                                    }
                                a = !0
                            } else a = !1;
                            return a
                        })
                    }
                    return !1
                });
                return b || c || a
            })
        };

        function va() {
            var a = Q;
            this.b = g.XMLHttpRequest;
            this.a = a
        }

        function wa(a, b, c, d, e) {
            var f = new a.b;
            f.onreadystatechange = function() {
                4 === f.readyState && "function" === typeof e && e(ga(f.responseText, a.a))
            };
            f.open(b, "https://web.usebutton.com" + c);
            f.setRequestHeader("X-BTNVersion", "1.15.0");
            d && f.setRequestHeader("Content-Type", "application/json");
            f.send(d ? ha(d) : void 0)
        }

        function xa(a, b, c) {
            wa(a, "GET", b, null, c)
        }

        function ya(a, b, c, d) {
            wa(a, "POST", b, c, d)
        };

        function za(a) {
            return a.replace("btn_source=card", "btn_source=sdk")
        };

        function R(a) {
            a.preventDefault()
        }

        function Aa(a) {
            a.stopPropagation();
            R(a)
        }

        function Ba(a, b) {
            this.b = a;
            this.j = b;
            this.f = !1;
            this.l = x(this.b, "card.type");
            var c = this;
            this.m = function() {
                c.f && 90 === Math.abs(g.orientation) && c.c()
            }
        }
        var S = !1;

        function Ca(a) {
            var b = n(a.b, "card.footer"),
                b = M("a", {
                    className: "bttnio-footer bttnio-ellipsis",
                    style: {
                        backgroundColor: J(x(b, "background.color")),
                        color: J(x(b, "label_text.color"))
                    },
                    innerHTML: ['<img src="', x(b, "icon_image.url"), '">', x(b, "label_text.text")].join(" "),
                    href: x(b, "action")
                });
            I() && b.setAttribute("onclick", H());
            b.addEventListener("click", a.c.bind(a));
            return b
        }

        function Da(a) {
            a = n(a.b, "card.body");
            var b = L("div", "bttnio-card", "bttnio-productcard"),
                c = L("div", "bttnio-imagewrapper"),
                d = n(a, "images") || [],
                e = x(d[0], "url");
            if (e) {
                d = "fit" === x(d[0], "fill_mode") ? "bttnio-imagewrapper-fit" : "bttnio-imagewrapper-fill";
                c.classList.add(d);
                var f = L("img");
                f.onerror = function() {
                    var a = L("div", "bttnio-error");
                    a.innerHTML = '<span class="bttnio-errortext">&#9888;</span>';
                    c.appendChild(a)
                };
                f.onload = function() {
                    c.appendChild(f)
                };
                f.src = e
            }
            e = L("div", "bttnio-details");
            e.innerHTML = ['<div class="bttnio-titletext bttnio-ellipsis">',
                x(a, "title_text.text"), '</div><div class="bttnio-subtitletext bttnio-ellipsis">', x(a, "subtitle_text.text"), '</div><div class="bttnio-descriptiontext bttnio-ellipsis">', x(a, "description_text.text"), "</div>"
            ].join("");
            b.appendChild(c);
            b.appendChild(e);
            return b
        }

        function Ea(a) {
            var b = L("div", "bttnio-card", "bttnio-listcard"),
                c = L("div", "bttnio-list"),
                d = L("div", "bttnio-listwrapper"),
                e = Fa(a.b, !1);
            if (null === e) return b;
            var f = L("div", "bttnio-header");
            f.style.backgroundColor = J(x(a.b, "card.header.background.color"));
            f.style.color = J(x(a.b, "card.header.title_text.color"));
            c.innerHTML = e;
            c.onclick = a.c.bind(a);
            f.innerHTML = x(a.b, "card.header.title_text.text");
            var h;
            c.ontouchstart = function(a) {
                h = a.touches[0].clientY
            };
            c.ontouchmove = function(a) {
                a.stopPropagation();
                if (0 === c.scrollTop &&
                    a.changedTouches[0].clientY > h || c.scrollTop + c.clientHeight >= c.scrollHeight && a.changedTouches[0].clientY < h) return a.preventDefault(), !1
            };
            d.appendChild(c);
            b.appendChild(f);
            b.appendChild(d);
            return b
        }

        function Ga(a, b) {
            b ? (a.a.removeEventListener("touchmove", Aa), document.body.removeEventListener("touchmove", R)) : (a.a.addEventListener("touchmove", Aa), document.body.addEventListener("touchmove", R))
        }

        function Ha(a) {
            a.f || S || (S = !0, a.f = !0, a.a = L("div", "bttnio-inventory", "bttnio-" + a.j, "bttnio-" + a.l), g.addEventListener("orientationchange", a.m), window.screen && "number" === typeof window.screen.height ? a.a.style.height = Math.min(window.screen.height, window.innerHeight) + "px" : a.a.style.bottom = 0, a.i = L("div", "bttnio-container"), a.h = "list" === a.l ? Ea(a) : Da(a), a.h.appendChild(Ca(a)), a.h.onclick = function(a) {
                    a.stopPropagation()
                }, a.g = L("a", "bttnio-cancel"), a.g.innerHTML = "ios" === a.j ? "Cancel" : "Dismiss", a.a.onclick = a.g.onclick =
                function(b) {
                    b.stopPropagation();
                    a.c()
                }, a.i.appendChild(a.h), a.i.appendChild(a.g), a.a.appendChild(a.i), document.body.appendChild(a.a), Ga(a, !1), setTimeout(function() {
                    a.a.className = [a.a.className, "active"].join(" ")
                }, 10))
        }
        Ba.prototype.c = function() {
            var a = this;
            a.f && (S = !1, a.a.className = a.a.className.replace(/active/, ""), g.removeEventListener("orientationchange", a.m), setTimeout(function() {
                a.a.parentNode && a.a.parentNode.removeChild(a.a);
                Ga(a, !0)
            }, 300))
        };

        function Ia(a) {
            return (a = (n(a, "card.body.groups") || [])[0]) ? a.items : null
        }

        function Fa(a, b, c) {
            a = Ia(a);
            if (!a) return null;
            for (var d = [], e = 0, f = a.length; e < f; e++) {
                var h = a[e],
                    u = x(h, "title_text.text"),
                    v = x(h, "icon_image.url"),
                    w = x(h, "subtitle_text.text"),
                    q = x(h, "icon_text.text"),
                    h = b ? za(h.action) : h.action,
                    p = !c && v,
                    k = "bttnio-title bttnio-ellipsis" + (p ? "" : " bttnio-full-row"),
                    t = "bttnio-subtitle bttnio-ellipsis" + (q || p ? "" : " bttnio-full-row");
                d.push(['<a class="bttnio-listitem" href="', h, '" rel="noskim"', I() ? ' onclick="' + H() + '"' : "", ">", c ? '<div class="bttnio-hero-image-wrapper" style="background-image: url(' +
                    v + ')"></div>' : "", '<div class="bttnio-wrapper"><div class="bttnio-listitem-row">', '<div class="' + k + '">', u, "</div>", '<div class="bttnio-image' + (q ? "" : " bttnio-image-full") + '">', p ? '<img src="' + v + '">' : "", '</div></div><div class="bttnio-listitem-row">', '<div class="' + t + '">', w, '</div><div class="bttnio-icon-text bttnio-ellipsis">', q, "</div></div></div></a>"
                ].join(""))
            }
            return d.join("")
        };
        var Ja = {
            ios: 3.5,
            android: 1.75
        };

        function Ka(a, b) {
            var c = a - b;
            return b + 1 / (1 + Math.abs(c) / 200) * c
        }

        function T(a, b, c) {
            a.style.transitionDuration = c + "s";
            a.style.transform = "translateX(" + b + "px)"
        }

        function La(a, b, c, d, e) {
            this.b = a;
            this.a = b;
            this.c = c;
            this.g = d;
            this.f = e
        }

        function Ma(a) {
            a.innerHTML = "";
            a.removeAttribute("data-bttnio-srctok");
            a.removeAttribute("data-bttnio-viewed")
        }

        function Na(a, b, c, d, e, f) {
            var h = null,
                u = null,
                v = null,
                w = null,
                q = 0,
                p = 0,
                k = 0,
                t = 0;
            return {
                w: function(a) {
                    h = v = a.touches[0] ? a.touches[0].clientX : null;
                    u = a.touches[0] ? a.touches[0].clientY : null;
                    k = c.getBoundingClientRect().left - d.getBoundingClientRect().left;
                    t = (a = c.querySelector(".bttnio-listitem:last-child")) ? -1 * a.offsetLeft : 0
                },
                v: function(a) {
                    var b = a.touches[0] ? a.touches[0].clientX : null,
                        d = u - (a.touches[0] ? a.touches[0].clientY : 0),
                        e = v - b;
                    null === w && (w = Math.abs(d) > Math.abs(e));
                    w || (q = e, v = b, b = k + v - h, 0 < b ? b = Ka(b, 0) : b < t && (b =
                        Ka(b, t)), T(c, b, 0), a.preventDefault(), a.stopPropagation())
                },
                u: function() {
                    0 < q ? p = Math.min(a - 1, p + 1) : 0 > q && (p = Math.max(0, p - 1));
                    T(c, b.offsetLeft - c.querySelectorAll(".bttnio-listitem")[p].offsetLeft, Math.min(1, (Ja[e] || Ja.ios) / Math.max(1, Math.abs(q))));
                    w || f("inline");
                    q = 0;
                    w = null
                },
                s: function() {
                    p = 0;
                    T(c, b.offsetLeft, .5)
                }
            }
        }

        function Oa(a) {
            var b = x(a.a, "meta.placement_id"),
                c = x(a.a, "card.type"),
                d = a.b.getAttribute("data-bttnio-inventory-mode"),
                d = (d ? d : fa(b, "inventoryMode")) || "card",
                e = x(a.a, "meta.render_hint");
            "inline" === d && "list" !== c && a.g.log(b + " was configured for inline inventory but received an incompatible Campaign");
            var f = (b = "inline_proto_20170330" === e) || "inline_proto" === e;
            "list" !== c || !f && "inline" !== e && "inline" !== d ? Pa(a) : Qa(a, f, b);
            a.b.setAttribute("data-bttnio-srctok", n(a.a, "meta.source_token"))
        }

        function Ra(a, b) {
            var c = M("div", {
                innerHTML: n(a, "preview.label_text.text"),
                className: "bttnio-callout"
            });
            if (b) {
                var d = n(a, "card.header.subtitle_text.text"),
                    e = n(a, "card.header.subtitle_text.color");
                return [M("div", {
                    className: "bttnio-inventory-subhead"
                }, [M("img", {
                    src: n(a, "preview.icon_image.url")
                }), M("div", {
                    innerHTML: d,
                    className: "bttnio-ellipsis bttnio-message",
                    style: {
                        color: e
                    }
                })]), c]
            }
            return [c, M("div", {
                className: "bttnio-inventory-subhead"
            }, [M("div", {
                    innerHTML: n(a, "preview.title_text.text"),
                    className: "bttnio-ellipsis"
                }),
                M("div", {
                    innerHTML: n(a, "card.header.title_text.text"),
                    className: "bttnio-ellipsis"
                })
            ])]
        }

        function Qa(a, b, c) {
            var d = a.b,
                e = a.a,
                f = a.c;
            d.innerHTML = "";
            var h = x(e, "preview.icon_image.url"),
                u = x(e, "preview.icon_image.alt_text"),
                v = x(e, "preview.label_text.text"),
                w = x(e, "preview.label_text.color"),
                q = x(e, "meta.source_token"),
                p = x(e, "card.footer.action"),
                k = (Ia(e) || []).length;
            if (q && !(1 > k)) {
                var t;
                b ? (c = c ? M("div", {
                    className: "bttnio-inventory-bigheader bttnio-ellipsis"
                }, Ra(e, !!c)) : v ? M("div", {
                    className: "bttnio-inventory-header bttnio-ellipsis"
                }, Ra(e, !!c)) : K("div"), t = M("a", {
                    className: "bttnio-inventory-footer bttnio-ellipsis",
                    href: za(p),
                    style: {
                        color: J(x(e, "card.footer.label_text.color"))
                    }
                }, [M("img", {
                    src: x(e, "card.footer.icon_image.url"),
                    alt: x(e, "card.footer.icon_image.alt_text")
                }), M("span", {
                    innerHTML: x(e, "card.footer.label_text.text")
                })]), I() && t.setAttribute("onclick", H())) : c = M("div", {
                    className: "bttnio-inventory-header bttnio-ellipsis"
                }, [M("img", {
                    src: h,
                    alt: u
                }), M("span", {
                    innerHTML: v,
                    style: {
                        color: w
                    }
                })]);
                e = M("div", {
                    className: "bttnio-inventory-list-items-wrapper",
                    innerHTML: Fa(e, !0, b)
                });
                p = M("div", {
                    className: "bttnio-inventory-list"
                }, [e]);
                b = M("div", {
                    className: "bttnio-inventory-preview bttnio-" + f + (b ? " bttnio-inventory-preview-v2" : "")
                }, b ? [c, p, t] : [c, p]);
                a = Na(k, c, e, p, f, oa(a.f || function() {}, "inline"));
                c.addEventListener("click", a.s);
                b.addEventListener("touchstart", a.w);
                b.addEventListener("touchmove", a.v);
                b.addEventListener("touchend", a.u);
                d.appendChild(b);
                T(e, c.offsetLeft, 0)
            }
        }

        function Pa(a) {
            var b = a.b,
                c = a.a;
            b.innerHTML = "";
            b.style.textAlign = "left";
            var d = x(c, "preview.icon_image.url"),
                e = x(c, "preview.icon_image.alt_text"),
                f = x(c, "preview.label_text.text"),
                h = x(c, "preview.direct_link"),
                u = h || x(c, "card.footer.action"),
                v = x(c, "preview.background.color"),
                w = x(c, "preview.label_text.color"),
                q = x(c, "meta.source_token");
            if (d && f && u && v && w && q) {
                var q = L("div", "bttnio-layout"),
                    p = L("div", "bttnio-row"),
                    k = L("div", "bttnio-cell", "bttnio-ellipsis"),
                    t = M("span", {
                        innerHTML: f
                    }),
                    d = M("img", {
                        src: d,
                        alt: e
                    }),
                    f = M("a", {
                        href: u,
                        title: f,
                        className: "bttnio-preview",
                        style: {
                            backgroundColor: J(v),
                            color: J(w)
                        }
                    }),
                    u = n(c, "card.type");
                h || "list" !== u && "product" !== u ? I() && f.setAttribute("onclick", H()) : f.onclick = function(b) {
                    90 !== Math.abs(g.orientation) && (b.preventDefault(), F(a.f, "card"), Ha(new Ba(c, a.c)))
                };
                k.appendChild(d);
                k.appendChild(t);
                p.appendChild(k);
                q.appendChild(p);
                f.appendChild(q);
                b.appendChild(f)
            }
        };

        function U(a) {
            a += "=";
            var b = document.cookie.split(";"),
                c, d;
            for (c = 0; c < b.length; c++) {
                for (d = b[c];
                    " " === d.charAt(0);) d = d.substring(1, d.length);
                if (0 === d.indexOf(a)) return d.substring(a.length, d.length)
            }
        }

        function V(a, b, c) {
            document.cookie = [a + "=" + b, "path=/", "max-age=" + (void 0 === c ? 31536E3 : c)].join(";")
        };

        function Sa() {
            var a = {},
                b = (n(g.location, "search") || "").replace(/^\?/, "").split("&"),
                c, d, e;
            c = 0;
            for (d = b.length; c < d; c++) e = b[c].split("="), 2 === e.length && (a[e[0]] = e[1]);
            (a = a.btn_ref) && V("bttnreferrertoken", a)
        };
        var Ta = [".bttnio-preview, .bttnio-inventory { text-transform: none }", ".bttnio-preview, .bttnio-inventory-preview { padding: 10px; box-sizing: border-box; display: block; border-radius: 3px; font-size: 1em; font-family: -apple-system, roboto, Helvetica, sans-serif; text-decoration: none; text-transform: none }", ".bttnio-preview img { display: inline-block; margin-right: 10px; max-width: 2em !important; vertical-align: middle }", ".bttnio-preview .bttnio-layout { display: table; width: 100%; table-layout: fixed }",
                ".bttnio-ellipsis { overflow: hidden; white-space: nowrap; text-overflow: ellipsis }", ".bttnio-listitem .bttnio-title, .bttnio-listitem .bttnio-subtitle { width: 80% }", ".bttnio-listitem .bttnio-title.bttnio-full-row, .bttnio-listitem .bttnio-subtitle.bttnio-full-row { width: 100% }", '.bttnio-inventory { font-family: -apple-system, Roboto, "Helvetica Neue", sans-serif !important; background-color: rgba(0, 0, 0, 0); position: fixed; top: 0; left: 0; right: 0; transition: background-color .3s ease-out; z-index: ' +
                (Number.MAX_SAFE_INTEGER || 1E7) + "; -webkit-touch-callout: none; -webkit-user-select: none; user-select: none }", ".bttnio-inventory a, .bttnio-inventory a:link, .bttnio-inventory a:hover, .bttnio-inventory a:active, .bttnio-inventory a:focus { color: #09091A }", ".bttnio-inventory img { display: inline-block }", ".bttnio-inventory .bttnio-container { position: absolute; max-width: 400px; margin: 0 auto; bottom: 40px; left: 10px; right: 10px; transform: translateY(200%); transition: transform .3s ease-out }",
                ".bttnio-inventory .bttnio-header { border-radius: 2px 2px 0 0; padding: 12px; text-align: left; font-size: 18px }", ".bttnio-inventory .bttnio-listcard .bttnio-list { max-height: 250px; overflow-y: scroll; background-color: #fff; -webkit-overflow-scrolling: touch }", ".bttnio-inventory .bttnio-listitem-row, .bttnio-inventory-preview .bttnio-listitem-row { height: 19px; margin-bottom: 6px }", ".bttnio-inventory .bttnio-listitem-row:last-child, .bttnio-inventory-preview .bttnio-listitem-row:last-child { height: 15px; margin-bottom: 0px }",
                ".bttnio-inventory .bttnio-listcard .bttnio-listitem, .bttnio-inventory-preview .bttnio-listitem { display: block; box-sizing: border-box; text-decoration: none; font-size: 13px; background-color: #fff; border-bottom: 1px solid #eee; padding: 14px 10px 12px }", ".bttnio-inventory .bttnio-listcard .bttnio-wrapper, .bttnio-inventory-preview .bttnio-wrapper { position: relative }", ".bttnio-inventory .bttnio-listcard .bttnio-listitem:last-child { border-bottom: 0 none }", ".bttnio-inventory .bttnio-listcard .bttnio-title, .bttnio-inventory-preview .bttnio-title { font-size: 16px; float: left; line-height: 19px; padding-bottom: 1px }",
                ".bttnio-inventory .bttnio-listcard .bttnio-subtitle, .bttnio-inventory-preview .bttnio-subtitle { float: left; line-height: 15px }", ".bttnio-inventory .bttnio-listcard .bttnio-icon-text, .bttnio-inventory-preview .bttnio-icon-text { float: right; line-height: 15px }", ".bttnio-inventory .bttnio-listcard .bttnio-image, .bttnio-inventory-preview .bttnio-image { position: absolute; right: 0; top: 0; height: 100%;  }", ".bttnio-inventory .bttnio-listcard .bttnio-image img, .bttnio-inventory-preview .bttnio-image img { max-width: 100px; max-height: 19px; position: absolute; top: 0; bottom: 0; margin: initial; right: 0 }",
                ".bttnio-inventory .bttnio-listcard .bttnio-image.bttnio-image-full img, .bttnio-inventory-preview .bttnio-image.bttnio-image-full img { max-width: 50px; max-height: 100%; margin: auto }", ".bttnio-inventory .bttnio-listcard .bttnio-footer { display: block; padding: 12px; font-size: 18px; line-height: 20px; text-decoration: none }", ".bttnio-inventory .bttnio-listcard .bttnio-footer img { max-width: 20px; max-height: 20px; vertical-align: sub }", ".bttnio-inventory .bttnio-productcard .bttnio-imagewrapper { height: 180px; background-color: #F7F7F7; overflow: hidden; border-radius: 10px 10px 0 0 }",
                ".bttnio-inventory .bttnio-productcard .bttnio-imagewrapper-fit { text-align: center; background-color: white  }", ".bttnio-inventory .bttnio-productcard .bttnio-imagewrapper-fill img { width: 100% }", ".bttnio-inventory .bttnio-productcard .bttnio-imagewrapper-fit img { max-width: 100%; max-height: 100% }", ".bttnio-inventory .bttnio-productcard .bttnio-error { text-align: center }", ".bttnio-inventory .bttnio-productcard .bttnio-error .bttnio-errortext { vertical-align: middle; line-height: 180px; font-size: 32px; text-align: center; color: #8E8E93; opacity: 0.2 }",
                ".bttnio-inventory .bttnio-productcard .bttnio-details { background-color: white; padding: 12px 10px; font-size: 12px; color: #4A4A4A }", ".bttnio-inventory .bttnio-productcard .bttnio-titletext { font-size: 14px; line-height: 16px; margin-bottom: 6px }", ".bttnio-inventory .bttnio-productcard .bttnio-subtitletext { color: #9B9B9B; line-height: 15px; margin-bottom: 15px }", ".bttnio-inventory .bttnio-productcard .bttnio-descriptiontext { line-height: 14px }", ".bttnio-inventory .bttnio-productcard .bttnio-footer { height: 48px; display: block; border-radius: 0 0 10px 10px; font-size: 16px; line-height: 16px; text-decoration: none; padding: 16px 10px; box-sizing: border-box }",
                ".bttnio-inventory .bttnio-productcard .bttnio-footer img { max-height: 18px; max-width: 18px; margin-right: 10px; vertical-align: sub;  }", ".bttnio-inventory .bttnio-cancel { background-color: #fff; padding: 12px; font-size: 18px; display: block }", ".bttnio-inventory.active { background-color: rgba(0, 0, 0, .55) }", ".bttnio-inventory.active .bttnio-container { transform: translateY(0) }", ".bttnio-inventory-preview { position: relative; padding: 0px; font-size: 13px; color: #4A4A4A; letter-spacing: -0.08px }",
                ".bttnio-inventory-preview a, .bttnio-inventory-preview a:link, .bttnio-inventory-preview a:hover, .bttnio-inventory-preview a:active, .bttnio-inventory-preview a:focus { color: #4A4A4A }", ".bttnio-inventory-preview .bttnio-inventory-header { margin-left: 10px; margin-bottom: 8px; height: 16px; line-height: 16px }", ".bttnio-inventory-preview .bttnio-inventory-header > img { display: inline; max-width: 16px; max-height: 16px; vertical-align: top }", ".bttnio-inventory-preview .bttnio-inventory-header > span { font-size: 11px; margin-left: 8px; letter-spacing: 0.05px; vertical-align: top }",
                ".bttnio-inventory-preview .bttnio-inventory-bigheader { margin: 0 0 6px 10px }", ".bttnio-inventory-preview .bttnio-inventory-bigheader img { max-width: 32px; max-height: 32px; margin-right: 8px }", ".bttnio-inventory-preview .bttnio-inventory-bigheader .bttnio-message { flex: 1; font-size: 16px; line-height: 32px }", ".bttnio-inventory-preview .bttnio-inventory-list { white-space: nowrap; overflow: hidden; padding-right: 1px }", ".bttnio-inventory-preview .bttnio-inventory-list-items-wrapper { transition: transform 1s ease-out; transform: translateX(0px) }",
                ".bttnio-inventory-preview .bttnio-listitem-row { height: 15px; margin-bottom: 4px }", ".bttnio-inventory-preview .bttnio-listitem-row:last-child { height: 15px; margin-bottom: 0px }", ".bttnio-inventory-preview .bttnio-listitem { display: inline-block; vertical-align: top; height: 48px; border: 1px solid #C6C6C6; border-radius: 4px; width: 80%; max-width: 260px; margin-left: 8px; padding: 6px }", ".bttnio-inventory-preview .bttnio-listitem:first-child { margin-left: 0px }", ".bttnio-inventory-preview .bttnio-listitem .bttnio-title { font-size: 15px; letter-spacing: -0.24px }",
                ".bttnio-inventory-preview .bttnio-image img { max-height: 15px }", ".bttnio-inventory-preview .bttnio-listitem .bttnio-title, .bttnio-inventory-preview .bttnio-listitem .bttnio-subtitle { width: 186px }", ".bttnio-inventory-preview .bttnio-listitem .bttnio-title.bttnio-full-row, .bttnio-inventory-preview .bttnio-listitem .bttnio-subtitle.bttnio-full-row { width: 241px }", ".bttnio-listitem .bttnio-icon-text { max-width: 50px; text-align: right }", ".bttnio-inventory.bttnio-ios .bttnio-card { margin-bottom: 10px }",
                ".bttnio-inventory.bttnio-ios .bttnio-productcard { margin-bottom: 6px }", ".bttnio-inventory.bttnio-ios .bttnio-header { border-radius: 10px 10px 0 0; text-align: center }", ".bttnio-inventory.bttnio-ios .bttnio-listcard .bttnio-listwrapper { border-radius: 0 0 10px 10px; margin-bottom: 10px }", ".bttnio-inventory.bttnio-ios .bttnio-listcard .bttnio-list { border-radius: 0 0 10px 10px; -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC) }",
                ".bttnio-inventory.bttnio-ios .bttnio-listcard .bttnio-footer { border-radius: 10px; text-align: center }", ".bttnio-inventory.bttnio-ios .bttnio-cancel { border-radius: 10px; color: #0076ff; text-align: center }", ".bttnio-inventory.bttnio-android.bttnio-product .bttnio-cancel { font-size: 14px; padding: 10px }", ".bttnio-inventory.bttnio-android .bttnio-listcard .bttnio-listitem { padding: 12px 10px }", ".bttnio-inventory.bttnio-android .bttnio-listcard .bttnio-subtitle { color: #9B9B9B }", ".bttnio-inventory.bttnio-android .bttnio-listcard .bttnio-footer { border-top: 1px solid #eee; border-bottom: 1px solid #eee }",
                ".bttnio-inventory.bttnio-android .bttnio-productcard { background-color: white; border-bottom: 1px solid #eee }", ".bttnio-inventory.bttnio-android .bttnio-productcard .bttnio-imagewrapper { height: 160px; border-radius: 0 }", ".bttnio-inventory.bttnio-android .bttnio-productcard .bttnio-imagewrapper-fill { background-color: #E0E0E0 }", ".bttnio-inventory.bttnio-android .bttnio-productcard .bttnio-subtitletext { margin-bottom: 12px }", ".bttnio-inventory.bttnio-android .bttnio-productcard .bttnio-descriptiontext { margin-bottom: 2px }",
                ".bttnio-inventory.bttnio-android .bttnio-productcard .bttnio-footer { font-size: 14px; border-radius: 2px; margin: 0 10px; padding: 9px 10px; height: 36px; margin-bottom: 12px }", ".bttnio-inventory.bttnio-android .bttnio-productcard .bttnio-footer img { vertical-align: text-bottom }", ".bttnio-inventory-preview.bttnio-android a, .bttnio-inventory-preview.bttnio-android a:link, .bttnio-inventory-preview.bttnio-android a:hover, .bttnio-inventory-preview.bttnio-android a:active, .bttnio-inventory-preview.bttnio-android a:focus { color: #212121 }",
                ".bttnio-inventory-preview.bttnio-android .bttnio-inventory-header { height: 18px; line-height: 18px }", ".bttnio-inventory-preview.bttnio-android .bttnio-inventory-header > img { max-width: 18px; max-height: 18px }", ".bttnio-inventory-preview.bttnio-android .bttnio-inventory-header > span { font-size: 13px; color: #7B7B7B }", ".bttnio-inventory-preview.bttnio-android .bttnio-inventory-list { padding-bottom: 3px; padding-right: 2px }", ".bttnio-inventory-preview.bttnio-android .bttnio-listitem { font-size: 14px; height: 54px; border-radius: 2.25px; width: 80%; max-width: 292px; box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24); margin-left: 10px; border: none; margin-top: 1px }",
                ".bttnio-inventory-preview.bttnio-android .bttnio-listitem-row:first-child { height: 21px; margin-bottom: 5px }", ".bttnio-inventory-preview.bttnio-android .bttnio-listitem:first-child { margin-left: 0px }", ".bttnio-inventory-preview.bttnio-android .bttnio-listitem .bttnio-title { font-size: 16px; line-height: 20px; letter-spacing: -0.24px }", ".bttnio-inventory-preview.bttnio-android .bttnio-listitem .bttnio-title, .bttnio-inventory-preview.bttnio-android .bttnio-listitem .bttnio-subtitle { width: 218px }",
                ".bttnio-inventory-preview.bttnio-android .bttnio-listitem .bttnio-title.bttnio-full-row, .bttnio-inventory-preview.bttnio-android .bttnio-listitem .bttnio-subtitle.bttnio-full-row { width: 269px }", ".bttnio-inventory-preview.bttnio-android .bttnio-image img { max-height: 21px }", ".bttnio-inventory-preview.bttnio-android .bttnio-image.bttnio-image-full img { max-height: 100% }", ".bttnio-inventory-preview-v2 { margin-bottom: 20px !important }", ".bttnio-inventory-preview-v2 .bttnio-callout { font-size: 16px; color: #09091A; font-weight: 500; margin-bottom: 3px }",
                ".bttnio-inventory-preview-v2 .bttnio-inventory-header { height: auto !important }", ".bttnio-inventory-preview-v2 .bttnio-inventory-subhead { display: flex; justify-content: space-between; color: #8B8B8B8; font-size: 12px; padding-right: 8px }", ".bttnio-inventory-preview-v2 .bttnio-inventory-footer { display: block; margin: 12px 0 0 10px; height: 19px; line-height: 19px; text-decoration: none }", ".bttnio-inventory-preview-v2 .bttnio-inventory-footer > img { display: inline; max-width: 19px; max-height: 19px; vertical-align: top }",
                ".bttnio-inventory-preview-v2 .bttnio-inventory-footer > span { font-size: 16px; margin-left: 8px; letter-spacing: 0.05px; vertical-align: top }", ".bttnio-inventory-preview-v2 .bttnio-listitem { padding: 0; height: auto }", ".bttnio-inventory-preview-v2 .bttnio-hero-image-wrapper { height: 172px; background-color: #F7F7F7; background-size: cover; border-radius: 3px 3px 0 0 }", ".bttnio-inventory-preview-v2 .bttnio-listitem { margin-bottom: 0 !important }", ".bttnio-inventory-preview-v2 .bttnio-wrapper { padding: 8px }",
                ".bttnio-inventory-preview-v2.bttnio-android .bttnio-listitem { height: auto }"
            ],
            Ua = !1;

        function Va() {
            if (!Ua) {
                Ua = !0;
                var a = document.createElement("style");
                document.head.appendChild(a);
                for (var b = 0, c = Ta.length; b < c; b++) a.sheet.insertRule(Ta[b], b);
                a = document.createElement("style");
                a.setAttribute("media", "only screen and (max-device-height: 568px)");
                document.head.appendChild(a);
                a.sheet.insertRule(".bttnio-inventory .bttnio-list { max-height: 200px }", 0)
            }
        };
        var Wa = /^sess-/;

        function Xa(a, b, c, d, e) {
            var f = [],
                h = [],
                u = ca(),
                v = b.length,
                w = [],
                q = u.length,
                p = C("userIdentifier"),
                k;
            for (k = 0; k < v; k++) f.push(ma(b[k], c));
            for (k = 0; k < q; k++) h.push(la(u[k]));
            k = 0;
            for (b = d.length; k < b; k++) w.push({
                pub_ref: d[k].dataset.bttnioPubRef,
                href: ta(d[k])
            });
            a = {
                application_id: a,
                placements: f,
                smart_placements: h,
                links: w
            };
            e && (a.session_id = e);
            p && (a.thirdparty_id = p);
            return a
        }

        function W(a, b) {
            var c = U("bttnsessionid");
            this.c = Wa.test(c) ? c : void 0;
            this.h = b;
            this.a = a;
            this.c && this.a.log("Restored sessionId: " + this.c);
            this.l = !!U("bttnlockout");
            this.j = this.m = !1;
            this.i = null;
            this.f = [];
            this.b = [];
            this.g = [];
            this.o = !1;
            this.A = oa(function() {
                var a = this;
                window.addEventListener("scroll", na(function() {
                    a.m || Ya(a)
                }))
            }.bind(this));
            Sa();
            if (this.l) this.a.log("bttnlockout cookie found: platform is not supported");
            else {
                c = C("enhanceLinks");
                if (!C("noUI") && !c) this.refresh();
                else if (c) {
                    var d = this;
                    Za(d,
                        function(a) {
                            d.i = a;
                            d.refresh()
                        })
                }(c = C("siteCatalyst")) && "function" !== typeof g[c].tl && this.a.log("Invalidate SiteCatalyst detected: " + c + ".tl is not a function")
            }
        }

        function Za(a, b) {
            var c = C("applicationId");
            c ? a.j || (a.j = !0, xa(a.h, "/v1/web/config?application_id=" + c, function(c) {
                a.j = !1;
                F(b, n(c, "object") || null)
            })) : a.a.log("Missing ButtonWebConfig.application_id")
        }

        function $a(a, b) {
            return function(c) {
                var d = n(b, "meta.source_token");
                "card" === c ? X(a, [{
                    name: "btn:web-button-tapped",
                    value: {
                        promotion_source_token: d
                    }
                }, {
                    name: "btn:web-inventory-card-displayed",
                    value: {
                        promotion_source_token: d
                    }
                }]) : "inline" === c && X(a, [{
                    name: "btn:web-inventory-inline-swiped",
                    value: {
                        promotion_source_token: d
                    }
                }])
            }
        }

        function Ya(a) {
            var b = a.g.concat(a.f);
            if (!(1 > b.length)) {
                var c = [],
                    d = [],
                    e, f, h;
                e = 0;
                for (f = b.length; e < f; e++) h = b[e], "1" !== h.getAttribute("data-bttnio-viewed") && h.getAttribute("data-bttnio-srctok") && qa(h) && c.push(h);
                e = 0;
                for (f = c.length; e < f; e++) b = c[e].getAttribute("data-bttnio-srctok"), d.push({
                    name: "btn:web-button-viewed",
                    value: {
                        promotion_source_token: b
                    }
                });
                0 < d.length && (a.m = !0, X(a, d, function(b) {
                    if (b) {
                        e = 0;
                        for (f = c.length; e < f; e++) c[e].setAttribute("data-bttnio-viewed", "1");
                        a.m = !1
                    }
                }))
            }
        }

        function ab(a) {
            if (!a.i) return [];
            var b = [].slice.call(document.querySelectorAll(D("linkSelector", "a"))),
                c = [],
                d, e;
            d = 0;
            for (e = b.length; d < e; d++) ua(b[d], a.i) && c.push(b[d]);
            return c.slice(0, 50)
        }
        W.prototype.refresh = function(a) {
            var b = this,
                c = D("applicationId");
            if (b.l) b.a.log("Unsupported platform; will not make requests");
            else if (c) {
                b.f = [].slice.call(document.querySelectorAll("[data-bttnio-id]"));
                b.b = ab(b);
                var d = b.f.length,
                    e = b.b.length,
                    f = ca().length;
                if (!(1 > d && 1 > f && 1 > e)) {
                    Va();
                    b.A();
                    for (e = 0; e < d; e++) b.a.log("Found Button: " + b.f[e].getAttribute("data-bttnio-id"));
                    c = Xa(c, b.f, b.a, b.b, b.c);
                    ya(b.h, "/v1/web/get-buttons", c, function(c) {
                        if ("error" in c) b.a.log("Error fetching Buttons: " + n(c, "error.message")),
                            F(a, !1, []);
                        else {
                            var d = n(c, "object.supported_os");
                            b.o || (b.o = !0, F(ea("onLoad"), d));
                            if (d) {
                                var d = x(c, "object.os_type", "unknown"),
                                    e = n(c, "object.buttons") || [],
                                    f = e.length,
                                    q = n(c, "object.smart_buttons") || [],
                                    p = q.length,
                                    k = n(c, "object.links") || [],
                                    t = k.length,
                                    m = x(c, "object.session_id");
                                c = [];
                                var z = da("noUI");
                                b.c && m === b.c || b.a.log("Initiating new session: " + m);
                                b.c = m;
                                V("bttnsessionid", m);
                                if (t === b.b.length)
                                    for (m = 0; m < t; m++) k[m] && (b.b[m].href = k[m], b.b[m].setAttribute("rel", "noskim"), b.b[m].setAttribute("data-bttnio-enhanced",
                                        1), I() && b.b[m].setAttribute("onclick", H()));
                                for (m = 0; m < f; m++) t = e[m], (k = n(t, "meta.placement_id")) && t ? (c.push({
                                    id: k,
                                    button: t
                                }), z || (b.a.log("Action available for " + k), Oa(new La(b.f[m], t, d, b.a, $a(b, t))))) : Ma(b.f[m]);
                                for (m = 0; m < p; m++) t = q[m], e = x(t, "selector"), f = n(t, "promotion"), k = x(f, "meta.placement_id"), e && f && c.push({
                                    id: k,
                                    button: f,
                                    B: e
                                });
                                if (!z) {
                                    for (var p = [], O, z = 0, e = b.g.length; z < e; z++) Ma(b.g[z]);
                                    z = 0;
                                    for (e = q.length; z < e; z++)
                                        if (m = x(q[z], "selector"), f = n(q[z], "promotion"), m) {
                                            a: {
                                                try {
                                                    var ka = document.querySelectorAll(m);
                                                    if (1 !== ka.length) throw Error();
                                                    O = ka[0];
                                                    break a
                                                } catch (eb) {}
                                                O = void 0
                                            }
                                            O && (m = K("div"), O.appendChild(m), p.push(m), Oa(new La(m, f, d, b.a, $a(b, f))))
                                        }
                                    b.g = p
                                }
                                F(ea("onButtonsLoaded"), c);
                                F(a, !0, c);
                                Ya(b)
                            } else b.a.log("Received unsupported platform signal. Will set bttnlockout cookie"), V("bttnlockout", "1", 14400)
                        }
                    })
                }
            } else b.a.log("Error: No applicationId present in ButtonWebConfig!")
        };
        W.prototype.logout = function() {
            V("bttnsessionid", "", 0)
        };

        function X(a, b, c) {
            ya(a.h, "/v1/web/events", {
                session_id: a.c,
                events: b
            }, function(a) {
                "function" === typeof c && c("ok" === n(a, "meta.status"))
            })
        }
        W.prototype.reportEvent = function(a, b, c) {
            this.c ? this.l ? this.a.log("Platform not supported, will not report events") : (a = {
                name: a
            }, B(b) && (a.value = b), X(this, [a], c)) : this.a.log("No Button session \u2013 cannot report events")
        };
        W.prototype.getReferrerToken = function() {
            return U("bttnreferrertoken")
        };

        function bb(a) {
            this.a = a
        }
        bb.prototype.log = function(a) {
            this.a && g.console && g.console.log("[Button]", a)
        };
        var Y = g.__bttnio || "bttnio",
            Q = new bb(da("enableLogging", !1));
        if (n(g, Y + ".ok")) Q.log("The ButtonJS snippet was loaded multiple times");
        else {
            var cb = n(g, Y + ".q") || [],
                db = new va,
                aa = Q,
                Z = l(g.XMLHttpRequest, "No XMLHttpRequest") && l(g.JSON, "No native JSON support") ? new W(Q, db) : {};
            g[Y] = function() {
                var a = [].slice.call(arguments),
                    b = a.shift();
                if (b && "function" === typeof Z[b]) return Q.log(b + "(" + a.join(",") + ")"), Z[b].apply(Z, a)
            };
            for (g[Y].ok = !0; cb.length;) g[Y].apply(this, cb.shift())
        };
    } catch (e) {}
})();