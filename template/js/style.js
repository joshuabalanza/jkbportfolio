/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(()=>{
    var u = (e,t)=>()=>(t || e((t = {
        exports: {}
    }).exports, t),
    t.exports);
    var Di = u(()=>{
        window.tram = function(e) {
            function t(l, T) {
                var A = new h.Bare;
                return A.init(l, T)
            }
            function r(l) {
                return l.replace(/[A-Z]/g, function(T) {
                    return "-" + T.toLowerCase()
                })
            }
            function n(l) {
                var T = parseInt(l.slice(1), 16)
                  , A = T >> 16 & 255
                  , C = T >> 8 & 255
                  , w = 255 & T;
                return [A, C, w]
            }
            function i(l, T, A) {
                return "#" + (1 << 24 | l << 16 | T << 8 | A).toString(16).slice(1)
            }
            function a() {}
            function o(l, T) {
                d("Type warning: Expected: [" + l + "] Got: [" + typeof T + "] " + T)
            }
            function s(l, T, A) {
                d("Units do not match [" + l + "]: " + T + ", " + A)
            }
            function c(l, T, A) {
                if (T !== void 0 && (A = T),
                l === void 0)
                    return A;
                var C = A;
                return xt.test(l) || !_t.test(l) ? C = parseInt(l, 10) : _t.test(l) && (C = 1e3 * parseFloat(l)),
                0 > C && (C = 0),
                C === C ? C : A
            }
            function d(l) {
                ce.debug && window && window.console.warn(l)
            }
            function _(l) {
                for (var T = -1, A = l ? l.length : 0, C = []; ++T < A; ) {
                    var w = l[T];
                    w && C.push(w)
                }
                return C
            }
            var f = function(l, T, A) {
                function C(re) {
                    return typeof re == "object"
                }
                function w(re) {
                    return typeof re == "function"
                }
                function x() {}
                function Y(re, de) {
                    function B() {
                        var Ne = new oe;
                        return w(Ne.init) && Ne.init.apply(Ne, arguments),
                        Ne
                    }
                    function oe() {}
                    de === A && (de = re,
                    re = Object),
                    B.Bare = oe;
                    var se, me = x[l] = re[l], et = oe[l] = B[l] = new x;
                    return et.constructor = B,
                    B.mixin = function(Ne) {
                        return oe[l] = B[l] = Y(B, Ne)[l],
                        B
                    }
                    ,
                    B.open = function(Ne) {
                        if (se = {},
                        w(Ne) ? se = Ne.call(B, et, me, B, re) : C(Ne) && (se = Ne),
                        C(se))
                            for (var Tr in se)
                                T.call(se, Tr) && (et[Tr] = se[Tr]);
                        return w(et.init) || (et.init = re),
                        B
                    }
                    ,
                    B.open(de)
                }
                return Y
            }("prototype", {}.hasOwnProperty)
              , m = {
                ease: ["ease", function(l, T, A, C) {
                    var w = (l /= C) * l
                      , x = w * l;
                    return T + A * (-2.75 * x * w + 11 * w * w + -15.5 * x + 8 * w + .25 * l)
                }
                ],
                "ease-in": ["ease-in", function(l, T, A, C) {
                    var w = (l /= C) * l
                      , x = w * l;
                    return T + A * (-1 * x * w + 3 * w * w + -3 * x + 2 * w)
                }
                ],
                "ease-out": ["ease-out", function(l, T, A, C) {
                    var w = (l /= C) * l
                      , x = w * l;
                    return T + A * (.3 * x * w + -1.6 * w * w + 2.2 * x + -1.8 * w + 1.9 * l)
                }
                ],
                "ease-in-out": ["ease-in-out", function(l, T, A, C) {
                    var w = (l /= C) * l
                      , x = w * l;
                    return T + A * (2 * x * w + -5 * w * w + 2 * x + 2 * w)
                }
                ],
                linear: ["linear", function(l, T, A, C) {
                    return A * l / C + T
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, T, A, C) {
                    return A * (l /= C) * l + T
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, T, A, C) {
                    return -A * (l /= C) * (l - 2) + T
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, T, A, C) {
                    return (l /= C / 2) < 1 ? A / 2 * l * l + T : -A / 2 * (--l * (l - 2) - 1) + T
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, T, A, C) {
                    return A * (l /= C) * l * l + T
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, T, A, C) {
                    return A * ((l = l / C - 1) * l * l + 1) + T
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, T, A, C) {
                    return (l /= C / 2) < 1 ? A / 2 * l * l * l + T : A / 2 * ((l -= 2) * l * l + 2) + T
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, T, A, C) {
                    return A * (l /= C) * l * l * l + T
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, T, A, C) {
                    return -A * ((l = l / C - 1) * l * l * l - 1) + T
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, T, A, C) {
                    return (l /= C / 2) < 1 ? A / 2 * l * l * l * l + T : -A / 2 * ((l -= 2) * l * l * l - 2) + T
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, T, A, C) {
                    return A * (l /= C) * l * l * l * l + T
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, T, A, C) {
                    return A * ((l = l / C - 1) * l * l * l * l + 1) + T
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, T, A, C) {
                    return (l /= C / 2) < 1 ? A / 2 * l * l * l * l * l + T : A / 2 * ((l -= 2) * l * l * l * l + 2) + T
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, T, A, C) {
                    return -A * Math.cos(l / C * (Math.PI / 2)) + A + T
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, T, A, C) {
                    return A * Math.sin(l / C * (Math.PI / 2)) + T
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, T, A, C) {
                    return -A / 2 * (Math.cos(Math.PI * l / C) - 1) + T
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, T, A, C) {
                    return l === 0 ? T : A * Math.pow(2, 10 * (l / C - 1)) + T
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, T, A, C) {
                    return l === C ? T + A : A * (-Math.pow(2, -10 * l / C) + 1) + T
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, T, A, C) {
                    return l === 0 ? T : l === C ? T + A : (l /= C / 2) < 1 ? A / 2 * Math.pow(2, 10 * (l - 1)) + T : A / 2 * (-Math.pow(2, -10 * --l) + 2) + T
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, T, A, C) {
                    return -A * (Math.sqrt(1 - (l /= C) * l) - 1) + T
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, T, A, C) {
                    return A * Math.sqrt(1 - (l = l / C - 1) * l) + T
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, T, A, C) {
                    return (l /= C / 2) < 1 ? -A / 2 * (Math.sqrt(1 - l * l) - 1) + T : A / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + T
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, T, A, C, w) {
                    return w === void 0 && (w = 1.70158),
                    A * (l /= C) * l * ((w + 1) * l - w) + T
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, T, A, C, w) {
                    return w === void 0 && (w = 1.70158),
                    A * ((l = l / C - 1) * l * ((w + 1) * l + w) + 1) + T
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, T, A, C, w) {
                    return w === void 0 && (w = 1.70158),
                    (l /= C / 2) < 1 ? A / 2 * l * l * (((w *= 1.525) + 1) * l - w) + T : A / 2 * ((l -= 2) * l * (((w *= 1.525) + 1) * l + w) + 2) + T
                }
                ]
            }
              , g = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , v = document
              , O = window
              , b = "bkwld-tram"
              , y = /[\-\.0-9]/g
              , E = /[A-Z]/
              , S = "number"
              , D = /^(rgb|#)/
              , N = /(em|cm|mm|in|pt|pc|px)$/
              , M = /(em|cm|mm|in|pt|pc|px|%)$/
              , V = /(deg|rad|turn)$/
              , k = "unitless"
              , H = /(all|none) 0s ease 0s/
              , ee = /^(width|height)$/
              , W = " "
              , q = v.createElement("a")
              , p = ["Webkit", "Moz", "O", "ms"]
              , L = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , R = function(l) {
                if (l in q.style)
                    return {
                        dom: l,
                        css: l
                    };
                var T, A, C = "", w = l.split("-");
                for (T = 0; T < w.length; T++)
                    C += w[T].charAt(0).toUpperCase() + w[T].slice(1);
                for (T = 0; T < p.length; T++)
                    if (A = p[T] + C,
                    A in q.style)
                        return {
                            dom: A,
                            css: L[T] + l
                        }
            }
              , F = t.support = {
                bind: Function.prototype.bind,
                transform: R("transform"),
                transition: R("transition"),
                backface: R("backface-visibility"),
                timing: R("transition-timing-function")
            };
            if (F.transition) {
                var j = F.timing.dom;
                if (q.style[j] = m["ease-in-back"][0],
                !q.style[j])
                    for (var $ in g)
                        m[$][0] = g[$]
            }
            var G = t.frame = function() {
                var l = O.requestAnimationFrame || O.webkitRequestAnimationFrame || O.mozRequestAnimationFrame || O.oRequestAnimationFrame || O.msRequestAnimationFrame;
                return l && F.bind ? l.bind(O) : function(T) {
                    O.setTimeout(T, 16)
                }
            }()
              , U = t.now = function() {
                var l = O.performance
                  , T = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
                return T && F.bind ? T.bind(l) : Date.now || function() {
                    return +new Date
                }
            }()
              , K = f(function(l) {
                function T(J, ue) {
                    var ge = _(("" + J).split(W))
                      , le = ge[0];
                    ue = ue || {};
                    var Le = Et[le];
                    if (!Le)
                        return d("Unsupported property: " + le);
                    if (!ue.weak || !this.props[le]) {
                        var ke = Le[0]
                          , De = this.props[le];
                        return De || (De = this.props[le] = new ke.Bare),
                        De.init(this.$el, ge, Le, ue),
                        De
                    }
                }
                function A(J, ue, ge) {
                    if (J) {
                        var le = typeof J;
                        if (ue || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        le == "number" && ue)
                            return this.timer = new te({
                                duration: J,
                                context: this,
                                complete: x
                            }),
                            void (this.active = !0);
                        if (le == "string" && ue) {
                            switch (J) {
                            case "hide":
                                B.call(this);
                                break;
                            case "stop":
                                Y.call(this);
                                break;
                            case "redraw":
                                oe.call(this);
                                break;
                            default:
                                T.call(this, J, ge && ge[1])
                            }
                            return x.call(this)
                        }
                        if (le == "function")
                            return void J.call(this, this);
                        if (le == "object") {
                            var Le = 0;
                            et.call(this, J, function(ye, Ey) {
                                ye.span > Le && (Le = ye.span),
                                ye.stop(),
                                ye.animate(Ey)
                            }, function(ye) {
                                "wait"in ye && (Le = c(ye.wait, 0))
                            }),
                            me.call(this),
                            Le > 0 && (this.timer = new te({
                                duration: Le,
                                context: this
                            }),
                            this.active = !0,
                            ue && (this.timer.complete = x));
                            var ke = this
                              , De = !1
                              , un = {};
                            G(function() {
                                et.call(ke, J, function(ye) {
                                    ye.active && (De = !0,
                                    un[ye.name] = ye.nextStyle)
                                }),
                                De && ke.$el.css(un)
                            })
                        }
                    }
                }
                function C(J) {
                    J = c(J, 0),
                    this.active ? this.queue.push({
                        options: J
                    }) : (this.timer = new te({
                        duration: J,
                        context: this,
                        complete: x
                    }),
                    this.active = !0)
                }
                function w(J) {
                    return this.active ? (this.queue.push({
                        options: J,
                        args: arguments
                    }),
                    void (this.timer.complete = x)) : d("No active transition timer. Use start() or wait() before then().")
                }
                function x() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var J = this.queue.shift();
                        A.call(this, J.options, !0, J.args)
                    }
                }
                function Y(J) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var ue;
                    typeof J == "string" ? (ue = {},
                    ue[J] = 1) : ue = typeof J == "object" && J != null ? J : this.props,
                    et.call(this, ue, Ne),
                    me.call(this)
                }
                function re(J) {
                    Y.call(this, J),
                    et.call(this, J, Tr, hy)
                }
                function de(J) {
                    typeof J != "string" && (J = "block"),
                    this.el.style.display = J
                }
                function B() {
                    Y.call(this),
                    this.el.style.display = "none"
                }
                function oe() {
                    this.el.offsetHeight
                }
                function se() {
                    Y.call(this),
                    e.removeData(this.el, b),
                    this.$el = this.el = null
                }
                function me() {
                    var J, ue, ge = [];
                    this.upstream && ge.push(this.upstream);
                    for (J in this.props)
                        ue = this.props[J],
                        ue.active && ge.push(ue.string);
                    ge = ge.join(","),
                    this.style !== ge && (this.style = ge,
                    this.el.style[F.transition.dom] = ge)
                }
                function et(J, ue, ge) {
                    var le, Le, ke, De, un = ue !== Ne, ye = {};
                    for (le in J)
                        ke = J[le],
                        le in xe ? (ye.transform || (ye.transform = {}),
                        ye.transform[le] = ke) : (E.test(le) && (le = r(le)),
                        le in Et ? ye[le] = ke : (De || (De = {}),
                        De[le] = ke));
                    for (le in ye) {
                        if (ke = ye[le],
                        Le = this.props[le],
                        !Le) {
                            if (!un)
                                continue;
                            Le = T.call(this, le)
                        }
                        ue.call(this, Le, ke)
                    }
                    ge && De && ge.call(this, De)
                }
                function Ne(J) {
                    J.stop()
                }
                function Tr(J, ue) {
                    J.set(ue)
                }
                function hy(J) {
                    this.$el.css(J)
                }
                function Be(J, ue) {
                    l[J] = function() {
                        return this.children ? gy.call(this, ue, arguments) : (this.el && ue.apply(this, arguments),
                        this)
                    }
                }
                function gy(J, ue) {
                    var ge, le = this.children.length;
                    for (ge = 0; le > ge; ge++)
                        J.apply(this.children[ge], ue);
                    return this
                }
                l.init = function(J) {
                    if (this.$el = e(J),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    ce.keepInherited && !ce.fallback) {
                        var ue = Je(this.el, "transition");
                        ue && !H.test(ue) && (this.upstream = ue)
                    }
                    F.backface && ce.hideBackface && Ce(this.el, F.backface.css, "hidden")
                }
                ,
                Be("add", T),
                Be("start", A),
                Be("wait", C),
                Be("then", w),
                Be("next", x),
                Be("stop", Y),
                Be("set", re),
                Be("show", de),
                Be("hide", B),
                Be("redraw", oe),
                Be("destroy", se)
            })
              , h = f(K, function(l) {
                function T(A, C) {
                    var w = e.data(A, b) || e.data(A, b, new K.Bare);
                    return w.el || w.init(A),
                    C ? w.start(C) : w
                }
                l.init = function(A, C) {
                    var w = e(A);
                    if (!w.length)
                        return this;
                    if (w.length === 1)
                        return T(w[0], C);
                    var x = [];
                    return w.each(function(Y, re) {
                        x.push(T(re, C))
                    }),
                    this.children = x,
                    this
                }
            })
              , I = f(function(l) {
                function T() {
                    var x = this.get();
                    this.update("auto");
                    var Y = this.get();
                    return this.update(x),
                    Y
                }
                function A(x, Y, re) {
                    return Y !== void 0 && (re = Y),
                    x in m ? x : re
                }
                function C(x) {
                    var Y = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(x);
                    return (Y ? i(Y[1], Y[2], Y[3]) : x).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var w = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                l.init = function(x, Y, re, de) {
                    this.$el = x,
                    this.el = x[0];
                    var B = Y[0];
                    re[2] && (B = re[2]),
                    ft[B] && (B = ft[B]),
                    this.name = B,
                    this.type = re[1],
                    this.duration = c(Y[1], this.duration, w.duration),
                    this.ease = A(Y[2], this.ease, w.ease),
                    this.delay = c(Y[3], this.delay, w.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = ee.test(this.name),
                    this.unit = de.unit || this.unit || ce.defaultUnit,
                    this.angle = de.angle || this.angle || ce.defaultAngle,
                    ce.fallback || de.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + W + this.duration + "ms" + (this.ease != "ease" ? W + m[this.ease][0] : "") + (this.delay ? W + this.delay + "ms" : ""))
                }
                ,
                l.set = function(x) {
                    x = this.convert(x, this.type),
                    this.update(x),
                    this.redraw()
                }
                ,
                l.transition = function(x) {
                    this.active = !0,
                    x = this.convert(x, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    x == "auto" && (x = T.call(this))),
                    this.nextStyle = x
                }
                ,
                l.fallback = function(x) {
                    var Y = this.el.style[this.name] || this.convert(this.get(), this.type);
                    x = this.convert(x, this.type),
                    this.auto && (Y == "auto" && (Y = this.convert(this.get(), this.type)),
                    x == "auto" && (x = T.call(this))),
                    this.tween = new z({
                        from: Y,
                        to: x,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.get = function() {
                    return Je(this.el, this.name)
                }
                ,
                l.update = function(x) {
                    Ce(this.el, this.name, x)
                }
                ,
                l.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    Ce(this.el, this.name, this.get()));
                    var x = this.tween;
                    x && x.context && x.destroy()
                }
                ,
                l.convert = function(x, Y) {
                    if (x == "auto" && this.auto)
                        return x;
                    var re, de = typeof x == "number", B = typeof x == "string";
                    switch (Y) {
                    case S:
                        if (de)
                            return x;
                        if (B && x.replace(y, "") === "")
                            return +x;
                        re = "number(unitless)";
                        break;
                    case D:
                        if (B) {
                            if (x === "" && this.original)
                                return this.original;
                            if (Y.test(x))
                                return x.charAt(0) == "#" && x.length == 7 ? x : C(x)
                        }
                        re = "hex or rgb string";
                        break;
                    case N:
                        if (de)
                            return x + this.unit;
                        if (B && Y.test(x))
                            return x;
                        re = "number(px) or string(unit)";
                        break;
                    case M:
                        if (de)
                            return x + this.unit;
                        if (B && Y.test(x))
                            return x;
                        re = "number(px) or string(unit or %)";
                        break;
                    case V:
                        if (de)
                            return x + this.angle;
                        if (B && Y.test(x))
                            return x;
                        re = "number(deg) or string(angle)";
                        break;
                    case k:
                        if (de || B && M.test(x))
                            return x;
                        re = "number(unitless) or string(unit or %)"
                    }
                    return o(re, x),
                    x
                }
                ,
                l.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , X = f(I, function(l, T) {
                l.init = function() {
                    T.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), D))
                }
            })
              , Q = f(I, function(l, T) {
                l.init = function() {
                    T.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                l.get = function() {
                    return this.$el[this.name]()
                }
                ,
                l.update = function(A) {
                    this.$el[this.name](A)
                }
            })
              , Z = f(I, function(l, T) {
                function A(C, w) {
                    var x, Y, re, de, B;
                    for (x in C)
                        de = xe[x],
                        re = de[0],
                        Y = de[1] || x,
                        B = this.convert(C[x], re),
                        w.call(this, Y, B, re)
                }
                l.init = function() {
                    T.init.apply(this, arguments),
                    this.current || (this.current = {},
                    xe.perspective && ce.perspective && (this.current.perspective = ce.perspective,
                    Ce(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                l.set = function(C) {
                    A.call(this, C, function(w, x) {
                        this.current[w] = x
                    }),
                    Ce(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                l.transition = function(C) {
                    var w = this.values(C);
                    this.tween = new Oe({
                        current: this.current,
                        values: w,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var x, Y = {};
                    for (x in this.current)
                        Y[x] = x in w ? w[x] : this.current[x];
                    this.active = !0,
                    this.nextStyle = this.style(Y)
                }
                ,
                l.fallback = function(C) {
                    var w = this.values(C);
                    this.tween = new Oe({
                        current: this.current,
                        values: w,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                l.update = function() {
                    Ce(this.el, this.name, this.style(this.current))
                }
                ,
                l.style = function(C) {
                    var w, x = "";
                    for (w in C)
                        x += w + "(" + C[w] + ") ";
                    return x
                }
                ,
                l.values = function(C) {
                    var w, x = {};
                    return A.call(this, C, function(Y, re, de) {
                        x[Y] = re,
                        this.current[Y] === void 0 && (w = 0,
                        ~Y.indexOf("scale") && (w = 1),
                        this.current[Y] = this.convert(w, de))
                    }),
                    x
                }
            })
              , z = f(function(l) {
                function T(B) {
                    re.push(B) === 1 && G(A)
                }
                function A() {
                    var B, oe, se, me = re.length;
                    if (me)
                        for (G(A),
                        oe = U(),
                        B = me; B--; )
                            se = re[B],
                            se && se.render(oe)
                }
                function C(B) {
                    var oe, se = e.inArray(B, re);
                    se >= 0 && (oe = re.slice(se + 1),
                    re.length = se,
                    oe.length && (re = re.concat(oe)))
                }
                function w(B) {
                    return Math.round(B * de) / de
                }
                function x(B, oe, se) {
                    return i(B[0] + se * (oe[0] - B[0]), B[1] + se * (oe[1] - B[1]), B[2] + se * (oe[2] - B[2]))
                }
                var Y = {
                    ease: m.ease[1],
                    from: 0,
                    to: 1
                };
                l.init = function(B) {
                    this.duration = B.duration || 0,
                    this.delay = B.delay || 0;
                    var oe = B.ease || Y.ease;
                    m[oe] && (oe = m[oe][1]),
                    typeof oe != "function" && (oe = Y.ease),
                    this.ease = oe,
                    this.update = B.update || a,
                    this.complete = B.complete || a,
                    this.context = B.context || this,
                    this.name = B.name;
                    var se = B.from
                      , me = B.to;
                    se === void 0 && (se = Y.from),
                    me === void 0 && (me = Y.to),
                    this.unit = B.unit || "",
                    typeof se == "number" && typeof me == "number" ? (this.begin = se,
                    this.change = me - se) : this.format(me, se),
                    this.value = this.begin + this.unit,
                    this.start = U(),
                    B.autoplay !== !1 && this.play()
                }
                ,
                l.play = function() {
                    this.active || (this.start || (this.start = U()),
                    this.active = !0,
                    T(this))
                }
                ,
                l.stop = function() {
                    this.active && (this.active = !1,
                    C(this))
                }
                ,
                l.render = function(B) {
                    var oe, se = B - this.start;
                    if (this.delay) {
                        if (se <= this.delay)
                            return;
                        se -= this.delay
                    }
                    if (se < this.duration) {
                        var me = this.ease(se, 0, 1, this.duration);
                        return oe = this.startRGB ? x(this.startRGB, this.endRGB, me) : w(this.begin + me * this.change),
                        this.value = oe + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    oe = this.endHex || this.begin + this.change,
                    this.value = oe + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                l.format = function(B, oe) {
                    if (oe += "",
                    B += "",
                    B.charAt(0) == "#")
                        return this.startRGB = n(oe),
                        this.endRGB = n(B),
                        this.endHex = B,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var se = oe.replace(y, "")
                          , me = B.replace(y, "");
                        se !== me && s("tween", oe, B),
                        this.unit = se
                    }
                    oe = parseFloat(oe),
                    B = parseFloat(B),
                    this.begin = this.value = oe,
                    this.change = B - oe
                }
                ,
                l.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = a
                }
                ;
                var re = []
                  , de = 1e3
            })
              , te = f(z, function(l) {
                l.init = function(T) {
                    this.duration = T.duration || 0,
                    this.complete = T.complete || a,
                    this.context = T.context,
                    this.play()
                }
                ,
                l.render = function(T) {
                    var A = T - this.start;
                    A < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , Oe = f(z, function(l, T) {
                l.init = function(A) {
                    this.context = A.context,
                    this.update = A.update,
                    this.tweens = [],
                    this.current = A.current;
                    var C, w;
                    for (C in A.values)
                        w = A.values[C],
                        this.current[C] !== w && this.tweens.push(new z({
                            name: C,
                            from: this.current[C],
                            to: w,
                            duration: A.duration,
                            delay: A.delay,
                            ease: A.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                l.render = function(A) {
                    var C, w, x = this.tweens.length, Y = !1;
                    for (C = x; C--; )
                        w = this.tweens[C],
                        w.context && (w.render(A),
                        this.current[w.name] = w.value,
                        Y = !0);
                    return Y ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                l.destroy = function() {
                    if (T.destroy.call(this),
                    this.tweens) {
                        var A, C = this.tweens.length;
                        for (A = C; A--; )
                            this.tweens[A].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , ce = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !F.transition,
                agentTests: []
            };
            t.fallback = function(l) {
                if (!F.transition)
                    return ce.fallback = !0;
                ce.agentTests.push("(" + l + ")");
                var T = new RegExp(ce.agentTests.join("|"),"i");
                ce.fallback = T.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(l) {
                return new z(l)
            }
            ,
            t.delay = function(l, T, A) {
                return new te({
                    complete: T,
                    duration: l,
                    context: A
                })
            }
            ,
            e.fn.tram = function(l) {
                return t.call(null, this, l)
            }
            ;
            var Ce = e.style
              , Je = e.css
              , ft = {
                transform: F.transform && F.transform.css
            }
              , Et = {
                color: [X, D],
                background: [X, D, "background-color"],
                "outline-color": [X, D],
                "border-color": [X, D],
                "border-top-color": [X, D],
                "border-right-color": [X, D],
                "border-bottom-color": [X, D],
                "border-left-color": [X, D],
                "border-width": [I, N],
                "border-top-width": [I, N],
                "border-right-width": [I, N],
                "border-bottom-width": [I, N],
                "border-left-width": [I, N],
                "border-spacing": [I, N],
                "letter-spacing": [I, N],
                margin: [I, N],
                "margin-top": [I, N],
                "margin-right": [I, N],
                "margin-bottom": [I, N],
                "margin-left": [I, N],
                padding: [I, N],
                "padding-top": [I, N],
                "padding-right": [I, N],
                "padding-bottom": [I, N],
                "padding-left": [I, N],
                "outline-width": [I, N],
                opacity: [I, S],
                top: [I, M],
                right: [I, M],
                bottom: [I, M],
                left: [I, M],
                "font-size": [I, M],
                "text-indent": [I, M],
                "word-spacing": [I, M],
                width: [I, M],
                "min-width": [I, M],
                "max-width": [I, M],
                height: [I, M],
                "min-height": [I, M],
                "max-height": [I, M],
                "line-height": [I, k],
                "scroll-top": [Q, S, "scrollTop"],
                "scroll-left": [Q, S, "scrollLeft"]
            }
              , xe = {};
            F.transform && (Et.transform = [Z],
            xe = {
                x: [M, "translateX"],
                y: [M, "translateY"],
                rotate: [V],
                rotateX: [V],
                rotateY: [V],
                scale: [S],
                scaleX: [S],
                scaleY: [S],
                skew: [V],
                skewX: [V],
                skewY: [V]
            }),
            F.transform && F.backface && (xe.z = [M, "translateZ"],
            xe.rotateZ = [V],
            xe.scaleZ = [S],
            xe.perspective = [N]);
            var xt = /ms/
              , _t = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var bs = u((EW,Os)=>{
        var _y = window.$
          , my = Di() && _y.tram;
        Os.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , i = Function.prototype
              , a = r.push
              , o = r.slice
              , s = r.concat
              , c = n.toString
              , d = n.hasOwnProperty
              , _ = r.forEach
              , f = r.map
              , m = r.reduce
              , g = r.reduceRight
              , v = r.filter
              , O = r.every
              , b = r.some
              , y = r.indexOf
              , E = r.lastIndexOf
              , S = Array.isArray
              , D = Object.keys
              , N = i.bind
              , M = e.each = e.forEach = function(p, L, R) {
                if (p == null)
                    return p;
                if (_ && p.forEach === _)
                    p.forEach(L, R);
                else if (p.length === +p.length) {
                    for (var F = 0, j = p.length; F < j; F++)
                        if (L.call(R, p[F], F, p) === t)
                            return
                } else
                    for (var $ = e.keys(p), F = 0, j = $.length; F < j; F++)
                        if (L.call(R, p[$[F]], $[F], p) === t)
                            return;
                return p
            }
            ;
            e.map = e.collect = function(p, L, R) {
                var F = [];
                return p == null ? F : f && p.map === f ? p.map(L, R) : (M(p, function(j, $, G) {
                    F.push(L.call(R, j, $, G))
                }),
                F)
            }
            ,
            e.find = e.detect = function(p, L, R) {
                var F;
                return V(p, function(j, $, G) {
                    if (L.call(R, j, $, G))
                        return F = j,
                        !0
                }),
                F
            }
            ,
            e.filter = e.select = function(p, L, R) {
                var F = [];
                return p == null ? F : v && p.filter === v ? p.filter(L, R) : (M(p, function(j, $, G) {
                    L.call(R, j, $, G) && F.push(j)
                }),
                F)
            }
            ;
            var V = e.some = e.any = function(p, L, R) {
                L || (L = e.identity);
                var F = !1;
                return p == null ? F : b && p.some === b ? p.some(L, R) : (M(p, function(j, $, G) {
                    if (F || (F = L.call(R, j, $, G)))
                        return t
                }),
                !!F)
            }
            ;
            e.contains = e.include = function(p, L) {
                return p == null ? !1 : y && p.indexOf === y ? p.indexOf(L) != -1 : V(p, function(R) {
                    return R === L
                })
            }
            ,
            e.delay = function(p, L) {
                var R = o.call(arguments, 2);
                return setTimeout(function() {
                    return p.apply(null, R)
                }, L)
            }
            ,
            e.defer = function(p) {
                return e.delay.apply(e, [p, 1].concat(o.call(arguments, 1)))
            }
            ,
            e.throttle = function(p) {
                var L, R, F;
                return function() {
                    L || (L = !0,
                    R = arguments,
                    F = this,
                    my.frame(function() {
                        L = !1,
                        p.apply(F, R)
                    }))
                }
            }
            ,
            e.debounce = function(p, L, R) {
                var F, j, $, G, U, K = function() {
                    var h = e.now() - G;
                    h < L ? F = setTimeout(K, L - h) : (F = null,
                    R || (U = p.apply($, j),
                    $ = j = null))
                };
                return function() {
                    $ = this,
                    j = arguments,
                    G = e.now();
                    var h = R && !F;
                    return F || (F = setTimeout(K, L)),
                    h && (U = p.apply($, j),
                    $ = j = null),
                    U
                }
            }
            ,
            e.defaults = function(p) {
                if (!e.isObject(p))
                    return p;
                for (var L = 1, R = arguments.length; L < R; L++) {
                    var F = arguments[L];
                    for (var j in F)
                        p[j] === void 0 && (p[j] = F[j])
                }
                return p
            }
            ,
            e.keys = function(p) {
                if (!e.isObject(p))
                    return [];
                if (D)
                    return D(p);
                var L = [];
                for (var R in p)
                    e.has(p, R) && L.push(R);
                return L
            }
            ,
            e.has = function(p, L) {
                return d.call(p, L)
            }
            ,
            e.isObject = function(p) {
                return p === Object(p)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var k = /(.)^/
              , H = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , ee = /\\|'|\r|\n|\u2028|\u2029/g
              , W = function(p) {
                return "\\" + H[p]
            }
              , q = /^\s*(\w|\$)+\s*$/;
            return e.template = function(p, L, R) {
                !L && R && (L = R),
                L = e.defaults({}, L, e.templateSettings);
                var F = RegExp([(L.escape || k).source, (L.interpolate || k).source, (L.evaluate || k).source].join("|") + "|$", "g")
                  , j = 0
                  , $ = "__p+='";
                p.replace(F, function(h, I, X, Q, Z) {
                    return $ += p.slice(j, Z).replace(ee, W),
                    j = Z + h.length,
                    I ? $ += `'+
  ((__t=(` + I + `))==null?'':_.escape(__t))+
  '` : X ? $ += `'+
  ((__t=(` + X + `))==null?'':__t)+
  '` : Q && ($ += `';
  ` + Q + `
  __p+='`),
                    h
                }),
                $ += `';
  `;
                var G = L.variable;
                if (G) {
                    if (!q.test(G))
                        throw new Error("variable is not a bare identifier: " + G)
                } else
                    $ = `with(obj||{}){
  ` + $ + `}
  `,
                    G = "obj";
                $ = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
  ` + $ + `return __p;
  `;
                var U;
                try {
                    U = new Function(L.variable || "obj","_",$)
                } catch (h) {
                    throw h.source = $,
                    h
                }
                var K = function(h) {
                    return U.call(this, h, e)
                };
                return K.source = "function(" + G + `){
  ` + $ + "}",
                K
            }
            ,
            e
        }()
    }
    );
    var Fe = u((_W,Ls)=>{
        var fe = {}
          , Ht = {}
          , jt = []
          , Gi = window.Webflow || []
          , mt = window.jQuery
          , je = mt(window)
          , yy = mt(document)
          , tt = mt.isFunction
          , He = fe._ = bs()
          , Ss = fe.tram = Di() && mt.tram
          , ln = !1
          , Xi = !1;
        Ss.config.hideBackface = !1;
        Ss.config.keepInherited = !0;
        fe.define = function(e, t, r) {
            Ht[e] && Rs(Ht[e]);
            var n = Ht[e] = t(mt, He, r) || {};
            return As(n),
            n
        }
        ;
        fe.require = function(e) {
            return Ht[e]
        }
        ;
        function As(e) {
            fe.env() && (tt(e.design) && je.on("__wf_design", e.design),
            tt(e.preview) && je.on("__wf_preview", e.preview)),
            tt(e.destroy) && je.on("__wf_destroy", e.destroy),
            e.ready && tt(e.ready) && Iy(e)
        }
        function Iy(e) {
            if (ln) {
                e.ready();
                return
            }
            He.contains(jt, e.ready) || jt.push(e.ready)
        }
        function Rs(e) {
            tt(e.design) && je.off("__wf_design", e.design),
            tt(e.preview) && je.off("__wf_preview", e.preview),
            tt(e.destroy) && je.off("__wf_destroy", e.destroy),
            e.ready && tt(e.ready) && Ty(e)
        }
        function Ty(e) {
            jt = He.filter(jt, function(t) {
                return t !== e.ready
            })
        }
        fe.push = function(e) {
            if (ln) {
                tt(e) && e();
                return
            }
            Gi.push(e)
        }
        ;
        fe.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var cn = navigator.userAgent.toLowerCase()
          , Cs = fe.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , Oy = fe.env.chrome = /chrome/.test(cn) && /Google/.test(navigator.vendor) && parseInt(cn.match(/chrome\/(\d+)\./)[1], 10)
          , by = fe.env.ios = /(ipod|iphone|ipad)/.test(cn);
        fe.env.safari = /safari/.test(cn) && !Oy && !by;
        var Fi;
        Cs && yy.on("touchstart mousedown", function(e) {
            Fi = e.target
        });
        fe.validClick = Cs ? function(e) {
            return e === Fi || mt.contains(e, Fi)
        }
        : function() {
            return !0
        }
        ;
        var xs = "resize.webflow orientationchange.webflow load.webflow"
          , wy = "scroll.webflow " + xs;
        fe.resize = Ui(je, xs);
        fe.scroll = Ui(je, wy);
        fe.redraw = Ui();
        function Ui(e, t) {
            var r = []
              , n = {};
            return n.up = He.throttle(function(i) {
                He.each(r, function(a) {
                    a(i)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(i) {
                typeof i == "function" && (He.contains(r, i) || r.push(i))
            }
            ,
            n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = He.filter(r, function(a) {
                    return a !== i
                })
            }
            ,
            n
        }
        fe.location = function(e) {
            window.location = e
        }
        ;
        fe.env() && (fe.location = function() {}
        );
        fe.ready = function() {
            ln = !0,
            Xi ? Sy() : He.each(jt, ws),
            He.each(Gi, ws),
            fe.resize.up()
        }
        ;
        function ws(e) {
            tt(e) && e()
        }
        function Sy() {
            Xi = !1,
            He.each(Ht, As)
        }
        var Nt;
        fe.load = function(e) {
            Nt.then(e)
        }
        ;
        function Ns() {
            Nt && (Nt.reject(),
            je.off("load", Nt.resolve)),
            Nt = new mt.Deferred,
            je.on("load", Nt.resolve)
        }
        fe.destroy = function(e) {
            e = e || {},
            Xi = !0,
            je.triggerHandler("__wf_destroy"),
            e.domready != null && (ln = e.domready),
            He.each(Ht, Rs),
            fe.resize.off(),
            fe.scroll.off(),
            fe.redraw.off(),
            jt = [],
            Gi = [],
            Nt.state() === "pending" && Ns()
        }
        ;
        mt(fe.ready);
        Ns();
        Ls.exports = window.Webflow = fe
    }
    );
    var Ms = u((mW,Ps)=>{
        var qs = Fe();
        qs.define("brand", Ps.exports = function(e) {
            var t = {}, r = document, n = e("html"), i = e("body"), a = ".w-webflow-badge", o = window.location, s = /PhantomJS/i.test(navigator.userAgent), c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", d;
            t.ready = function() {
                var g = n.attr("data-wf-status")
                  , v = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(v) && o.hostname !== v && (g = !0),
                g && !s && (d = d || f(),
                m(),
                setTimeout(m, 500),
                e(r).off(c, _).on(c, _))
            }
            ;
            function _() {
                var g = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(d).attr("style", g ? "display: none !important;" : "")
            }
            function f() {
                var g = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , v = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                    marginRight: "8px",
                    width: "16px"
                })
                  , O = e("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow");
                return g.append(v, O),
                g[0]
            }
            function m() {
                var g = i.children(a)
                  , v = g.length && g.get(0) === d
                  , O = qs.env("editor");
                if (v) {
                    O && g.remove();
                    return
                }
                g.length && g.remove(),
                O || i.append(d)
            }
            return t
        }
        )
    }
    );
    var Fs = u((yW,Ds)=>{
        var Vi = Fe();
        Vi.define("edit", Ds.exports = function(e, t, r) {
            if (r = r || {},
            (Vi.env("test") || Vi.env("frame")) && !r.fixture && !Ay())
                return {
                    exit: 1
                };
            var n = {}, i = e(window), a = e(document.documentElement), o = document.location, s = "hashchange", c, d = r.load || m, _ = !1;
            try {
                _ = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            _ ? d() : o.search ? (/[?&](edit)(?:[=&?]|$)/.test(o.search) || /\?edit$/.test(o.href)) && d() : i.on(s, f).triggerHandler(s);
            function f() {
                c || /\?edit/.test(o.hash) && d()
            }
            function m() {
                c = !0,
                window.WebflowEditor = !0,
                i.off(s, f),
                E(function(D) {
                    e.ajax({
                        url: y("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: a.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: g(D)
                    })
                })
            }
            function g(D) {
                return function(N) {
                    if (!N) {
                        console.error("Could not load editor data");
                        return
                    }
                    N.thirdPartyCookiesSupported = D,
                    v(b(N.bugReporterScriptPath), function() {
                        v(b(N.scriptPath), function() {
                            window.WebflowEditor(N)
                        })
                    })
                }
            }
            function v(D, N) {
                e.ajax({
                    type: "GET",
                    url: D,
                    dataType: "script",
                    cache: !0
                }).then(N, O)
            }
            function O(D, N, M) {
                throw console.error("Could not load editor script: " + N),
                M
            }
            function b(D) {
                return D.indexOf("//") >= 0 ? D : y("https://editor-api.webflow.com" + D)
            }
            function y(D) {
                return D.replace(/([^:])\/\//g, "$1/")
            }
            function E(D) {
                var N = window.document.createElement("iframe");
                N.src = "https://webflow.com/site/third-party-cookie-check.html",
                N.style.display = "none",
                N.sandbox = "allow-scripts allow-same-origin";
                var M = function(V) {
                    V.data === "WF_third_party_cookies_unsupported" ? (S(N, M),
                    D(!1)) : V.data === "WF_third_party_cookies_supported" && (S(N, M),
                    D(!0))
                };
                N.onerror = function() {
                    S(N, M),
                    D(!1)
                }
                ,
                window.addEventListener("message", M, !1),
                window.document.body.appendChild(N)
            }
            function S(D, N) {
                window.removeEventListener("message", N, !1),
                D.remove()
            }
            return n
        }
        );
        function Ay() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var Xs = u((IW,Gs)=>{
        var Ry = Fe();
        Ry.define("focus-visible", Gs.exports = function() {
            function e(r) {
                var n = !0
                  , i = !1
                  , a = null
                  , o = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(S) {
                    return !!(S && S !== document && S.nodeName !== "HTML" && S.nodeName !== "BODY" && "classList"in S && "contains"in S.classList)
                }
                function c(S) {
                    var D = S.type
                      , N = S.tagName;
                    return !!(N === "INPUT" && o[D] && !S.readOnly || N === "TEXTAREA" && !S.readOnly || S.isContentEditable)
                }
                function d(S) {
                    S.getAttribute("data-wf-focus-visible") || S.setAttribute("data-wf-focus-visible", "true")
                }
                function _(S) {
                    S.getAttribute("data-wf-focus-visible") && S.removeAttribute("data-wf-focus-visible")
                }
                function f(S) {
                    S.metaKey || S.altKey || S.ctrlKey || (s(r.activeElement) && d(r.activeElement),
                    n = !0)
                }
                function m() {
                    n = !1
                }
                function g(S) {
                    s(S.target) && (n || c(S.target)) && d(S.target)
                }
                function v(S) {
                    s(S.target) && S.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                    window.clearTimeout(a),
                    a = window.setTimeout(function() {
                        i = !1
                    }, 100),
                    _(S.target))
                }
                function O() {
                    document.visibilityState === "hidden" && (i && (n = !0),
                    b())
                }
                function b() {
                    document.addEventListener("mousemove", E),
                    document.addEventListener("mousedown", E),
                    document.addEventListener("mouseup", E),
                    document.addEventListener("pointermove", E),
                    document.addEventListener("pointerdown", E),
                    document.addEventListener("pointerup", E),
                    document.addEventListener("touchmove", E),
                    document.addEventListener("touchstart", E),
                    document.addEventListener("touchend", E)
                }
                function y() {
                    document.removeEventListener("mousemove", E),
                    document.removeEventListener("mousedown", E),
                    document.removeEventListener("mouseup", E),
                    document.removeEventListener("pointermove", E),
                    document.removeEventListener("pointerdown", E),
                    document.removeEventListener("pointerup", E),
                    document.removeEventListener("touchmove", E),
                    document.removeEventListener("touchstart", E),
                    document.removeEventListener("touchend", E)
                }
                function E(S) {
                    S.target.nodeName && S.target.nodeName.toLowerCase() === "html" || (n = !1,
                    y())
                }
                document.addEventListener("keydown", f, !0),
                document.addEventListener("mousedown", m, !0),
                document.addEventListener("pointerdown", m, !0),
                document.addEventListener("touchstart", m, !0),
                document.addEventListener("visibilitychange", O, !0),
                b(),
                r.addEventListener("focus", g, !0),
                r.addEventListener("blur", v, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var Ws = u((TW,Vs)=>{
        var Us = Fe();
        Us.define("focus", Vs.exports = function() {
            var e = []
              , t = !1;
            function r(o) {
                t && (o.preventDefault(),
                o.stopPropagation(),
                o.stopImmediatePropagation(),
                e.unshift(o))
            }
            function n(o) {
                var s = o.target
                  , c = s.tagName;
                return /^a$/i.test(c) && s.href != null || /^(button|textarea)$/i.test(c) && s.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && s.controls === !0
            }
            function i(o) {
                n(o) && (t = !0,
                setTimeout(()=>{
                    for (t = !1,
                    o.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function a() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Us.env.safari && (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: a
            }
        }
        )
    }
    );
    var Hs = u((OW,ks)=>{
        "use strict";
        var Wi = window.jQuery
          , rt = {}
          , fn = []
          , Bs = ".w-ix"
          , dn = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                Wi(t).triggerHandler(rt.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                Wi(t).triggerHandler(rt.types.OUTRO))
            }
        };
        rt.triggers = {};
        rt.types = {
            INTRO: "w-ix-intro" + Bs,
            OUTRO: "w-ix-outro" + Bs
        };
        rt.init = function() {
            for (var e = fn.length, t = 0; t < e; t++) {
                var r = fn[t];
                r[0](0, r[1])
            }
            fn = [],
            Wi.extend(rt.triggers, dn)
        }
        ;
        rt.async = function() {
            for (var e in dn) {
                var t = dn[e];
                dn.hasOwnProperty(e) && (rt.triggers[e] = function(r, n) {
                    fn.push([t, n])
                }
                )
            }
        }
        ;
        rt.async();
        ks.exports = rt
    }
    );
    var ki = u((bW,zs)=>{
        "use strict";
        var Bi = Hs();
        function js(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var Cy = window.jQuery
          , pn = {}
          , Ks = ".w-ix"
          , xy = {
            reset: function(e, t) {
                Bi.triggers.reset(e, t)
            },
            intro: function(e, t) {
                Bi.triggers.intro(e, t),
                js(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                Bi.triggers.outro(e, t),
                js(t, "COMPONENT_INACTIVE")
            }
        };
        pn.triggers = {};
        pn.types = {
            INTRO: "w-ix-intro" + Ks,
            OUTRO: "w-ix-outro" + Ks
        };
        Cy.extend(pn.triggers, xy);
        zs.exports = pn
    }
    );
    var Ys = u((wW,dt)=>{
        function Hi(e) {
            return dt.exports = Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            dt.exports.__esModule = !0,
            dt.exports.default = dt.exports,
            Hi(e)
        }
        dt.exports = Hi,
        dt.exports.__esModule = !0,
        dt.exports.default = dt.exports
    }
    );
    var Kt = u((SW,Or)=>{
        var Ny = Ys().default;
        function Qs(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (Qs = function(i) {
                return i ? r : t
            }
            )(e)
        }
        function Ly(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || Ny(e) !== "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = Qs(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in e)
                if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
                    var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        Or.exports = Ly,
        Or.exports.__esModule = !0,
        Or.exports.default = Or.exports
    }
    );
    var nt = u((AW,br)=>{
        function qy(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        br.exports = qy,
        br.exports.__esModule = !0,
        br.exports.default = br.exports
    }
    );
    var he = u((RW,$s)=>{
        var vn = function(e) {
            return e && e.Math == Math && e
        };
        $s.exports = vn(typeof globalThis == "object" && globalThis) || vn(typeof window == "object" && window) || vn(typeof self == "object" && self) || vn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    }
    );
    var zt = u((CW,Zs)=>{
        Zs.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    }
    );
    var Lt = u((xW,Js)=>{
        var Py = zt();
        Js.exports = !Py(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    }
    );
    var hn = u((NW,eu)=>{
        var wr = Function.prototype.call;
        eu.exports = wr.bind ? wr.bind(wr) : function() {
            return wr.apply(wr, arguments)
        }
    }
    );
    var iu = u(nu=>{
        "use strict";
        var tu = {}.propertyIsEnumerable
          , ru = Object.getOwnPropertyDescriptor
          , My = ru && !tu.call({
            1: 2
        }, 1);
        nu.f = My ? function(t) {
            var r = ru(this, t);
            return !!r && r.enumerable
        }
        : tu
    }
    );
    var ji = u((qW,au)=>{
        au.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    }
    );
    var Ke = u((PW,su)=>{
        var ou = Function.prototype
          , Ki = ou.bind
          , zi = ou.call
          , Dy = Ki && Ki.bind(zi);
        su.exports = Ki ? function(e) {
            return e && Dy(zi, e)
        }
        : function(e) {
            return e && function() {
                return zi.apply(e, arguments)
            }
        }
    }
    );
    var lu = u((MW,cu)=>{
        var uu = Ke()
          , Fy = uu({}.toString)
          , Gy = uu("".slice);
        cu.exports = function(e) {
            return Gy(Fy(e), 8, -1)
        }
    }
    );
    var du = u((DW,fu)=>{
        var Xy = he()
          , Uy = Ke()
          , Vy = zt()
          , Wy = lu()
          , Yi = Xy.Object
          , By = Uy("".split);
        fu.exports = Vy(function() {
            return !Yi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return Wy(e) == "String" ? By(e, "") : Yi(e)
        }
        : Yi
    }
    );
    var Qi = u((FW,pu)=>{
        var ky = he()
          , Hy = ky.TypeError;
        pu.exports = function(e) {
            if (e == null)
                throw Hy("Can't call method on " + e);
            return e
        }
    }
    );
    var Sr = u((GW,vu)=>{
        var jy = du()
          , Ky = Qi();
        vu.exports = function(e) {
            return jy(Ky(e))
        }
    }
    );
    var it = u((XW,hu)=>{
        hu.exports = function(e) {
            return typeof e == "function"
        }
    }
    );
    var Yt = u((UW,gu)=>{
        var zy = it();
        gu.exports = function(e) {
            return typeof e == "object" ? e !== null : zy(e)
        }
    }
    );
    var Ar = u((VW,Eu)=>{
        var $i = he()
          , Yy = it()
          , Qy = function(e) {
            return Yy(e) ? e : void 0
        };
        Eu.exports = function(e, t) {
            return arguments.length < 2 ? Qy($i[e]) : $i[e] && $i[e][t]
        }
    }
    );
    var mu = u((WW,_u)=>{
        var $y = Ke();
        _u.exports = $y({}.isPrototypeOf)
    }
    );
    var Iu = u((BW,yu)=>{
        var Zy = Ar();
        yu.exports = Zy("navigator", "userAgent") || ""
    }
    );
    var Ru = u((kW,Au)=>{
        var Su = he(), Zi = Iu(), Tu = Su.process, Ou = Su.Deno, bu = Tu && Tu.versions || Ou && Ou.version, wu = bu && bu.v8, ze, gn;
        wu && (ze = wu.split("."),
        gn = ze[0] > 0 && ze[0] < 4 ? 1 : +(ze[0] + ze[1]));
        !gn && Zi && (ze = Zi.match(/Edge\/(\d+)/),
        (!ze || ze[1] >= 74) && (ze = Zi.match(/Chrome\/(\d+)/),
        ze && (gn = +ze[1])));
        Au.exports = gn
    }
    );
    var Ji = u((HW,xu)=>{
        var Cu = Ru()
          , Jy = zt();
        xu.exports = !!Object.getOwnPropertySymbols && !Jy(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && Cu && Cu < 41
        })
    }
    );
    var ea = u((jW,Nu)=>{
        var eI = Ji();
        Nu.exports = eI && !Symbol.sham && typeof Symbol.iterator == "symbol"
    }
    );
    var ta = u((KW,Lu)=>{
        var tI = he()
          , rI = Ar()
          , nI = it()
          , iI = mu()
          , aI = ea()
          , oI = tI.Object;
        Lu.exports = aI ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var t = rI("Symbol");
            return nI(t) && iI(t.prototype, oI(e))
        }
    }
    );
    var Pu = u((zW,qu)=>{
        var sI = he()
          , uI = sI.String;
        qu.exports = function(e) {
            try {
                return uI(e)
            } catch {
                return "Object"
            }
        }
    }
    );
    var Du = u((YW,Mu)=>{
        var cI = he()
          , lI = it()
          , fI = Pu()
          , dI = cI.TypeError;
        Mu.exports = function(e) {
            if (lI(e))
                return e;
            throw dI(fI(e) + " is not a function")
        }
    }
    );
    var Gu = u((QW,Fu)=>{
        var pI = Du();
        Fu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : pI(r)
        }
    }
    );
    var Uu = u(($W,Xu)=>{
        var vI = he()
          , ra = hn()
          , na = it()
          , ia = Yt()
          , hI = vI.TypeError;
        Xu.exports = function(e, t) {
            var r, n;
            if (t === "string" && na(r = e.toString) && !ia(n = ra(r, e)) || na(r = e.valueOf) && !ia(n = ra(r, e)) || t !== "string" && na(r = e.toString) && !ia(n = ra(r, e)))
                return n;
            throw hI("Can't convert object to primitive value")
        }
    }
    );
    var Wu = u((ZW,Vu)=>{
        Vu.exports = !1
    }
    );
    var En = u((JW,ku)=>{
        var Bu = he()
          , gI = Object.defineProperty;
        ku.exports = function(e, t) {
            try {
                gI(Bu, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Bu[e] = t
            }
            return t
        }
    }
    );
    var _n = u((eB,ju)=>{
        var EI = he()
          , _I = En()
          , Hu = "__core-js_shared__"
          , mI = EI[Hu] || _I(Hu, {});
        ju.exports = mI
    }
    );
    var aa = u((tB,zu)=>{
        var yI = Wu()
          , Ku = _n();
        (zu.exports = function(e, t) {
            return Ku[e] || (Ku[e] = t !== void 0 ? t : {})
        }
        )("versions", []).push({
            version: "3.19.0",
            mode: yI ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    }
    );
    var Qu = u((rB,Yu)=>{
        var II = he()
          , TI = Qi()
          , OI = II.Object;
        Yu.exports = function(e) {
            return OI(TI(e))
        }
    }
    );
    var yt = u((nB,$u)=>{
        var bI = Ke()
          , wI = Qu()
          , SI = bI({}.hasOwnProperty);
        $u.exports = Object.hasOwn || function(t, r) {
            return SI(wI(t), r)
        }
    }
    );
    var oa = u((iB,Zu)=>{
        var AI = Ke()
          , RI = 0
          , CI = Math.random()
          , xI = AI(1.toString);
        Zu.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + xI(++RI + CI, 36)
        }
    }
    );
    var sa = u((aB,nc)=>{
        var NI = he()
          , LI = aa()
          , Ju = yt()
          , qI = oa()
          , ec = Ji()
          , rc = ea()
          , Qt = LI("wks")
          , qt = NI.Symbol
          , tc = qt && qt.for
          , PI = rc ? qt : qt && qt.withoutSetter || qI;
        nc.exports = function(e) {
            if (!Ju(Qt, e) || !(ec || typeof Qt[e] == "string")) {
                var t = "Symbol." + e;
                ec && Ju(qt, e) ? Qt[e] = qt[e] : rc && tc ? Qt[e] = tc(t) : Qt[e] = PI(t)
            }
            return Qt[e]
        }
    }
    );
    var sc = u((oB,oc)=>{
        var MI = he()
          , DI = hn()
          , ic = Yt()
          , ac = ta()
          , FI = Gu()
          , GI = Uu()
          , XI = sa()
          , UI = MI.TypeError
          , VI = XI("toPrimitive");
        oc.exports = function(e, t) {
            if (!ic(e) || ac(e))
                return e;
            var r = FI(e, VI), n;
            if (r) {
                if (t === void 0 && (t = "default"),
                n = DI(r, e, t),
                !ic(n) || ac(n))
                    return n;
                throw UI("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"),
            GI(e, t)
        }
    }
    );
    var ua = u((sB,uc)=>{
        var WI = sc()
          , BI = ta();
        uc.exports = function(e) {
            var t = WI(e, "string");
            return BI(t) ? t : t + ""
        }
    }
    );
    var la = u((uB,lc)=>{
        var kI = he()
          , cc = Yt()
          , ca = kI.document
          , HI = cc(ca) && cc(ca.createElement);
        lc.exports = function(e) {
            return HI ? ca.createElement(e) : {}
        }
    }
    );
    var fa = u((cB,fc)=>{
        var jI = Lt()
          , KI = zt()
          , zI = la();
        fc.exports = !jI && !KI(function() {
            return Object.defineProperty(zI("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    }
    );
    var da = u(pc=>{
        var YI = Lt()
          , QI = hn()
          , $I = iu()
          , ZI = ji()
          , JI = Sr()
          , eT = ua()
          , tT = yt()
          , rT = fa()
          , dc = Object.getOwnPropertyDescriptor;
        pc.f = YI ? dc : function(t, r) {
            if (t = JI(t),
            r = eT(r),
            rT)
                try {
                    return dc(t, r)
                } catch {}
            if (tT(t, r))
                return ZI(!QI($I.f, t, r), t[r])
        }
    }
    );
    var Rr = u((fB,hc)=>{
        var vc = he()
          , nT = Yt()
          , iT = vc.String
          , aT = vc.TypeError;
        hc.exports = function(e) {
            if (nT(e))
                return e;
            throw aT(iT(e) + " is not an object")
        }
    }
    );
    var Cr = u(_c=>{
        var oT = he()
          , sT = Lt()
          , uT = fa()
          , gc = Rr()
          , cT = ua()
          , lT = oT.TypeError
          , Ec = Object.defineProperty;
        _c.f = sT ? Ec : function(t, r, n) {
            if (gc(t),
            r = cT(r),
            gc(n),
            uT)
                try {
                    return Ec(t, r, n)
                } catch {}
            if ("get"in n || "set"in n)
                throw lT("Accessors not supported");
            return "value"in n && (t[r] = n.value),
            t
        }
    }
    );
    var mn = u((pB,mc)=>{
        var fT = Lt()
          , dT = Cr()
          , pT = ji();
        mc.exports = fT ? function(e, t, r) {
            return dT.f(e, t, pT(1, r))
        }
        : function(e, t, r) {
            return e[t] = r,
            e
        }
    }
    );
    var va = u((vB,yc)=>{
        var vT = Ke()
          , hT = it()
          , pa = _n()
          , gT = vT(Function.toString);
        hT(pa.inspectSource) || (pa.inspectSource = function(e) {
            return gT(e)
        }
        );
        yc.exports = pa.inspectSource
    }
    );
    var Oc = u((hB,Tc)=>{
        var ET = he()
          , _T = it()
          , mT = va()
          , Ic = ET.WeakMap;
        Tc.exports = _T(Ic) && /native code/.test(mT(Ic))
    }
    );
    var ha = u((gB,wc)=>{
        var yT = aa()
          , IT = oa()
          , bc = yT("keys");
        wc.exports = function(e) {
            return bc[e] || (bc[e] = IT(e))
        }
    }
    );
    var yn = u((EB,Sc)=>{
        Sc.exports = {}
    }
    );
    var Lc = u((_B,Nc)=>{
        var TT = Oc(), xc = he(), ga = Ke(), OT = Yt(), bT = mn(), Ea = yt(), _a = _n(), wT = ha(), ST = yn(), Ac = "Object already initialized", ya = xc.TypeError, AT = xc.WeakMap, In, xr, Tn, RT = function(e) {
            return Tn(e) ? xr(e) : In(e, {})
        }, CT = function(e) {
            return function(t) {
                var r;
                if (!OT(t) || (r = xr(t)).type !== e)
                    throw ya("Incompatible receiver, " + e + " required");
                return r
            }
        };
        TT || _a.state ? (It = _a.state || (_a.state = new AT),
        Rc = ga(It.get),
        ma = ga(It.has),
        Cc = ga(It.set),
        In = function(e, t) {
            if (ma(It, e))
                throw new ya(Ac);
            return t.facade = e,
            Cc(It, e, t),
            t
        }
        ,
        xr = function(e) {
            return Rc(It, e) || {}
        }
        ,
        Tn = function(e) {
            return ma(It, e)
        }
        ) : (Pt = wT("state"),
        ST[Pt] = !0,
        In = function(e, t) {
            if (Ea(e, Pt))
                throw new ya(Ac);
            return t.facade = e,
            bT(e, Pt, t),
            t
        }
        ,
        xr = function(e) {
            return Ea(e, Pt) ? e[Pt] : {}
        }
        ,
        Tn = function(e) {
            return Ea(e, Pt)
        }
        );
        var It, Rc, ma, Cc, Pt;
        Nc.exports = {
            set: In,
            get: xr,
            has: Tn,
            enforce: RT,
            getterFor: CT
        }
    }
    );
    var Mc = u((mB,Pc)=>{
        var Ia = Lt()
          , xT = yt()
          , qc = Function.prototype
          , NT = Ia && Object.getOwnPropertyDescriptor
          , Ta = xT(qc, "name")
          , LT = Ta && function() {}
        .name === "something"
          , qT = Ta && (!Ia || Ia && NT(qc, "name").configurable);
        Pc.exports = {
            EXISTS: Ta,
            PROPER: LT,
            CONFIGURABLE: qT
        }
    }
    );
    var Uc = u((yB,Xc)=>{
        var PT = he()
          , Dc = it()
          , MT = yt()
          , Fc = mn()
          , DT = En()
          , FT = va()
          , Gc = Lc()
          , GT = Mc().CONFIGURABLE
          , XT = Gc.get
          , UT = Gc.enforce
          , VT = String(String).split("String");
        (Xc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1, a = n ? !!n.enumerable : !1, o = n ? !!n.noTargetGet : !1, s = n && n.name !== void 0 ? n.name : t, c;
            if (Dc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!MT(r, "name") || GT && r.name !== s) && Fc(r, "name", s),
            c = UT(r),
            c.source || (c.source = VT.join(typeof s == "string" ? s : ""))),
            e === PT) {
                a ? e[t] = r : DT(t, r);
                return
            } else
                i ? !o && e[t] && (a = !0) : delete e[t];
            a ? e[t] = r : Fc(e, t, r)
        }
        )(Function.prototype, "toString", function() {
            return Dc(this) && XT(this).source || FT(this)
        })
    }
    );
    var Oa = u((IB,Vc)=>{
        var WT = Math.ceil
          , BT = Math.floor;
        Vc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? BT : WT)(t)
        }
    }
    );
    var Bc = u((TB,Wc)=>{
        var kT = Oa()
          , HT = Math.max
          , jT = Math.min;
        Wc.exports = function(e, t) {
            var r = kT(e);
            return r < 0 ? HT(r + t, 0) : jT(r, t)
        }
    }
    );
    var Hc = u((OB,kc)=>{
        var KT = Oa()
          , zT = Math.min;
        kc.exports = function(e) {
            return e > 0 ? zT(KT(e), 9007199254740991) : 0
        }
    }
    );
    var Kc = u((bB,jc)=>{
        var YT = Hc();
        jc.exports = function(e) {
            return YT(e.length)
        }
    }
    );
    var ba = u((wB,Yc)=>{
        var QT = Sr()
          , $T = Bc()
          , ZT = Kc()
          , zc = function(e) {
            return function(t, r, n) {
                var i = QT(t), a = ZT(i), o = $T(n, a), s;
                if (e && r != r) {
                    for (; a > o; )
                        if (s = i[o++],
                        s != s)
                            return !0
                } else
                    for (; a > o; o++)
                        if ((e || o in i) && i[o] === r)
                            return e || o || 0;
                return !e && -1
            }
        };
        Yc.exports = {
            includes: zc(!0),
            indexOf: zc(!1)
        }
    }
    );
    var Sa = u((SB,$c)=>{
        var JT = Ke()
          , wa = yt()
          , eO = Sr()
          , tO = ba().indexOf
          , rO = yn()
          , Qc = JT([].push);
        $c.exports = function(e, t) {
            var r = eO(e), n = 0, i = [], a;
            for (a in r)
                !wa(rO, a) && wa(r, a) && Qc(i, a);
            for (; t.length > n; )
                wa(r, a = t[n++]) && (~tO(i, a) || Qc(i, a));
            return i
        }
    }
    );
    var On = u((AB,Zc)=>{
        Zc.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    );
    var el = u(Jc=>{
        var nO = Sa()
          , iO = On()
          , aO = iO.concat("length", "prototype");
        Jc.f = Object.getOwnPropertyNames || function(t) {
            return nO(t, aO)
        }
    }
    );
    var rl = u(tl=>{
        tl.f = Object.getOwnPropertySymbols
    }
    );
    var il = u((xB,nl)=>{
        var oO = Ar()
          , sO = Ke()
          , uO = el()
          , cO = rl()
          , lO = Rr()
          , fO = sO([].concat);
        nl.exports = oO("Reflect", "ownKeys") || function(t) {
            var r = uO.f(lO(t))
              , n = cO.f;
            return n ? fO(r, n(t)) : r
        }
    }
    );
    var ol = u((NB,al)=>{
        var dO = yt()
          , pO = il()
          , vO = da()
          , hO = Cr();
        al.exports = function(e, t) {
            for (var r = pO(t), n = hO.f, i = vO.f, a = 0; a < r.length; a++) {
                var o = r[a];
                dO(e, o) || n(e, o, i(t, o))
            }
        }
    }
    );
    var ul = u((LB,sl)=>{
        var gO = zt()
          , EO = it()
          , _O = /#|\.prototype\./
          , Nr = function(e, t) {
            var r = yO[mO(e)];
            return r == TO ? !0 : r == IO ? !1 : EO(t) ? gO(t) : !!t
        }
          , mO = Nr.normalize = function(e) {
            return String(e).replace(_O, ".").toLowerCase()
        }
          , yO = Nr.data = {}
          , IO = Nr.NATIVE = "N"
          , TO = Nr.POLYFILL = "P";
        sl.exports = Nr
    }
    );
    var ll = u((qB,cl)=>{
        var Aa = he()
          , OO = da().f
          , bO = mn()
          , wO = Uc()
          , SO = En()
          , AO = ol()
          , RO = ul();
        cl.exports = function(e, t) {
            var r = e.target, n = e.global, i = e.stat, a, o, s, c, d, _;
            if (n ? o = Aa : i ? o = Aa[r] || SO(r, {}) : o = (Aa[r] || {}).prototype,
            o)
                for (s in t) {
                    if (d = t[s],
                    e.noTargetGet ? (_ = OO(o, s),
                    c = _ && _.value) : c = o[s],
                    a = RO(n ? s : r + (i ? "." : "#") + s, e.forced),
                    !a && c !== void 0) {
                        if (typeof d == typeof c)
                            continue;
                        AO(d, c)
                    }
                    (e.sham || c && c.sham) && bO(d, "sham", !0),
                    wO(o, s, d, e)
                }
        }
    }
    );
    var dl = u((PB,fl)=>{
        var CO = Sa()
          , xO = On();
        fl.exports = Object.keys || function(t) {
            return CO(t, xO)
        }
    }
    );
    var vl = u((MB,pl)=>{
        var NO = Lt()
          , LO = Cr()
          , qO = Rr()
          , PO = Sr()
          , MO = dl();
        pl.exports = NO ? Object.defineProperties : function(t, r) {
            qO(t);
            for (var n = PO(r), i = MO(r), a = i.length, o = 0, s; a > o; )
                LO.f(t, s = i[o++], n[s]);
            return t
        }
    }
    );
    var gl = u((DB,hl)=>{
        var DO = Ar();
        hl.exports = DO("document", "documentElement")
    }
    );
    var bl = u((FB,Ol)=>{
        var FO = Rr(), GO = vl(), El = On(), XO = yn(), UO = gl(), VO = la(), WO = ha(), _l = ">", ml = "<", Ca = "prototype", xa = "script", Il = WO("IE_PROTO"), Ra = function() {}, Tl = function(e) {
            return ml + xa + _l + e + ml + "/" + xa + _l
        }, yl = function(e) {
            e.write(Tl("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, BO = function() {
            var e = VO("iframe"), t = "java" + xa + ":", r;
            return e.style.display = "none",
            UO.appendChild(e),
            e.src = String(t),
            r = e.contentWindow.document,
            r.open(),
            r.write(Tl("document.F=Object")),
            r.close(),
            r.F
        }, bn, wn = function() {
            try {
                bn = new ActiveXObject("htmlfile")
            } catch {}
            wn = typeof document < "u" ? document.domain && bn ? yl(bn) : BO() : yl(bn);
            for (var e = El.length; e--; )
                delete wn[Ca][El[e]];
            return wn()
        };
        XO[Il] = !0;
        Ol.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Ra[Ca] = FO(t),
            n = new Ra,
            Ra[Ca] = null,
            n[Il] = t) : n = wn(),
            r === void 0 ? n : GO(n, r)
        }
    }
    );
    var Sl = u((GB,wl)=>{
        var kO = sa()
          , HO = bl()
          , jO = Cr()
          , Na = kO("unscopables")
          , La = Array.prototype;
        La[Na] == null && jO.f(La, Na, {
            configurable: !0,
            value: HO(null)
        });
        wl.exports = function(e) {
            La[Na][e] = !0
        }
    }
    );
    var Al = u(()=>{
        "use strict";
        var KO = ll()
          , zO = ba().includes
          , YO = Sl();
        KO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return zO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        YO("includes")
    }
    );
    var Cl = u((VB,Rl)=>{
        var QO = he()
          , $O = Ke();
        Rl.exports = function(e, t) {
            return $O(QO[e].prototype[t])
        }
    }
    );
    var Nl = u((WB,xl)=>{
        Al();
        var ZO = Cl();
        xl.exports = ZO("Array", "includes")
    }
    );
    var ql = u((BB,Ll)=>{
        var JO = Nl();
        Ll.exports = JO
    }
    );
    var Ml = u((kB,Pl)=>{
        var eb = ql();
        Pl.exports = eb
    }
    );
    var qa = u((HB,Dl)=>{
        var tb = typeof global == "object" && global && global.Object === Object && global;
        Dl.exports = tb
    }
    );
    var Ye = u((jB,Fl)=>{
        var rb = qa()
          , nb = typeof self == "object" && self && self.Object === Object && self
          , ib = rb || nb || Function("return this")();
        Fl.exports = ib
    }
    );
    var $t = u((KB,Gl)=>{
        var ab = Ye()
          , ob = ab.Symbol;
        Gl.exports = ob
    }
    );
    var Wl = u((zB,Vl)=>{
        var Xl = $t()
          , Ul = Object.prototype
          , sb = Ul.hasOwnProperty
          , ub = Ul.toString
          , Lr = Xl ? Xl.toStringTag : void 0;
        function cb(e) {
            var t = sb.call(e, Lr)
              , r = e[Lr];
            try {
                e[Lr] = void 0;
                var n = !0
            } catch {}
            var i = ub.call(e);
            return n && (t ? e[Lr] = r : delete e[Lr]),
            i
        }
        Vl.exports = cb
    }
    );
    var kl = u((YB,Bl)=>{
        var lb = Object.prototype
          , fb = lb.toString;
        function db(e) {
            return fb.call(e)
        }
        Bl.exports = db
    }
    );
    var Tt = u((QB,Kl)=>{
        var Hl = $t()
          , pb = Wl()
          , vb = kl()
          , hb = "[object Null]"
          , gb = "[object Undefined]"
          , jl = Hl ? Hl.toStringTag : void 0;
        function Eb(e) {
            return e == null ? e === void 0 ? gb : hb : jl && jl in Object(e) ? pb(e) : vb(e)
        }
        Kl.exports = Eb
    }
    );
    var Pa = u(($B,zl)=>{
        function _b(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        zl.exports = _b
    }
    );
    var Ma = u((ZB,Yl)=>{
        var mb = Pa()
          , yb = mb(Object.getPrototypeOf, Object);
        Yl.exports = yb
    }
    );
    var pt = u((JB,Ql)=>{
        function Ib(e) {
            return e != null && typeof e == "object"
        }
        Ql.exports = Ib
    }
    );
    var Da = u((ek,Zl)=>{
        var Tb = Tt()
          , Ob = Ma()
          , bb = pt()
          , wb = "[object Object]"
          , Sb = Function.prototype
          , Ab = Object.prototype
          , $l = Sb.toString
          , Rb = Ab.hasOwnProperty
          , Cb = $l.call(Object);
        function xb(e) {
            if (!bb(e) || Tb(e) != wb)
                return !1;
            var t = Ob(e);
            if (t === null)
                return !0;
            var r = Rb.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && $l.call(r) == Cb
        }
        Zl.exports = xb
    }
    );
    var Jl = u(Fa=>{
        "use strict";
        Object.defineProperty(Fa, "__esModule", {
            value: !0
        });
        Fa.default = Nb;
        function Nb(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var ef = u((Xa,Ga)=>{
        "use strict";
        Object.defineProperty(Xa, "__esModule", {
            value: !0
        });
        var Lb = Jl()
          , qb = Pb(Lb);
        function Pb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Zt;
        typeof self < "u" ? Zt = self : typeof window < "u" ? Zt = window : typeof global < "u" ? Zt = global : typeof Ga < "u" ? Zt = Ga : Zt = Function("return this")();
        var Mb = (0,
        qb.default)(Zt);
        Xa.default = Mb
    }
    );
    var Ua = u(qr=>{
        "use strict";
        qr.__esModule = !0;
        qr.ActionTypes = void 0;
        qr.default = af;
        var Db = Da()
          , Fb = nf(Db)
          , Gb = ef()
          , tf = nf(Gb);
        function nf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var rf = qr.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function af(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(af)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e
              , a = t
              , o = []
              , s = o
              , c = !1;
            function d() {
                s === o && (s = o.slice())
            }
            function _() {
                return a
            }
            function f(O) {
                if (typeof O != "function")
                    throw new Error("Expected listener to be a function.");
                var b = !0;
                return d(),
                s.push(O),
                function() {
                    if (b) {
                        b = !1,
                        d();
                        var E = s.indexOf(O);
                        s.splice(E, 1)
                    }
                }
            }
            function m(O) {
                if (!(0,
                Fb.default)(O))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof O.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (c)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    c = !0,
                    a = i(a, O)
                } finally {
                    c = !1
                }
                for (var b = o = s, y = 0; y < b.length; y++)
                    b[y]();
                return O
            }
            function g(O) {
                if (typeof O != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                i = O,
                m({
                    type: rf.INIT
                })
            }
            function v() {
                var O, b = f;
                return O = {
                    subscribe: function(E) {
                        if (typeof E != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function S() {
                            E.next && E.next(_())
                        }
                        S();
                        var D = b(S);
                        return {
                            unsubscribe: D
                        }
                    }
                },
                O[tf.default] = function() {
                    return this
                }
                ,
                O
            }
            return m({
                type: rf.INIT
            }),
            n = {
                dispatch: m,
                subscribe: f,
                getState: _,
                replaceReducer: g
            },
            n[tf.default] = v,
            n
        }
    }
    );
    var Wa = u(Va=>{
        "use strict";
        Va.__esModule = !0;
        Va.default = Xb;
        function Xb(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var uf = u(Ba=>{
        "use strict";
        Ba.__esModule = !0;
        Ba.default = kb;
        var of = Ua()
          , Ub = Da()
          , ik = sf(Ub)
          , Vb = Wa()
          , ak = sf(Vb);
        function sf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Wb(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function Bb(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: of.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: i
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + of.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function kb(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var a = Object.keys(r);
            if (!1)
                var o;
            var s;
            try {
                Bb(r)
            } catch (c) {
                s = c
            }
            return function() {
                var d = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , _ = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var f;
                for (var m = !1, g = {}, v = 0; v < a.length; v++) {
                    var O = a[v]
                      , b = r[O]
                      , y = d[O]
                      , E = b(y, _);
                    if (typeof E > "u") {
                        var S = Wb(O, _);
                        throw new Error(S)
                    }
                    g[O] = E,
                    m = m || E !== y
                }
                return m ? g : d
            }
        }
    }
    );
    var lf = u(ka=>{
        "use strict";
        ka.__esModule = !0;
        ka.default = Hb;
        function cf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function Hb(e, t) {
            if (typeof e == "function")
                return cf(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var a = r[i]
                  , o = e[a];
                typeof o == "function" && (n[a] = cf(o, t))
            }
            return n
        }
    }
    );
    var ja = u(Ha=>{
        "use strict";
        Ha.__esModule = !0;
        Ha.default = jb;
        function jb() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(a) {
                    return a
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(a, o) {
                    return o(a)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var ff = u(Ka=>{
        "use strict";
        Ka.__esModule = !0;
        var Kb = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        Ka.default = $b;
        var zb = ja()
          , Yb = Qb(zb);
        function Qb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function $b() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(i, a, o) {
                    var s = n(i, a, o)
                      , c = s.dispatch
                      , d = []
                      , _ = {
                        getState: s.getState,
                        dispatch: function(m) {
                            return c(m)
                        }
                    };
                    return d = t.map(function(f) {
                        return f(_)
                    }),
                    c = Yb.default.apply(void 0, d)(s.dispatch),
                    Kb({}, s, {
                        dispatch: c
                    })
                }
            }
        }
    }
    );
    var za = u(Ve=>{
        "use strict";
        Ve.__esModule = !0;
        Ve.compose = Ve.applyMiddleware = Ve.bindActionCreators = Ve.combineReducers = Ve.createStore = void 0;
        var Zb = Ua()
          , Jb = Jt(Zb)
          , ew = uf()
          , tw = Jt(ew)
          , rw = lf()
          , nw = Jt(rw)
          , iw = ff()
          , aw = Jt(iw)
          , ow = ja()
          , sw = Jt(ow)
          , uw = Wa()
          , lk = Jt(uw);
        function Jt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ve.createStore = Jb.default;
        Ve.combineReducers = tw.default;
        Ve.bindActionCreators = nw.default;
        Ve.applyMiddleware = aw.default;
        Ve.compose = sw.default
    }
    );
    var df = u(we=>{
        "use strict";
        Object.defineProperty(we, "__esModule", {
            value: !0
        });
        we.QuickEffectIds = we.QuickEffectDirectionConsts = we.EventTypeConsts = we.EventLimitAffectedElements = we.EventContinuousMouseAxes = we.EventBasedOn = we.EventAppliesTo = void 0;
        var cw = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        };
        we.EventTypeConsts = cw;
        var lw = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        };
        we.EventAppliesTo = lw;
        var fw = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        };
        we.EventBasedOn = fw;
        var dw = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        };
        we.EventContinuousMouseAxes = dw;
        var pw = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        };
        we.EventLimitAffectedElements = pw;
        var vw = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        };
        we.QuickEffectIds = vw;
        var hw = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        };
        we.QuickEffectDirectionConsts = hw
    }
    );
    var Ya = u(er=>{
        "use strict";
        Object.defineProperty(er, "__esModule", {
            value: !0
        });
        er.ActionTypeConsts = er.ActionAppliesTo = void 0;
        var gw = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        };
        er.ActionTypeConsts = gw;
        var Ew = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        };
        er.ActionAppliesTo = Ew
    }
    );
    var pf = u(Sn=>{
        "use strict";
        Object.defineProperty(Sn, "__esModule", {
            value: !0
        });
        Sn.InteractionTypeConsts = void 0;
        var _w = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        };
        Sn.InteractionTypeConsts = _w
    }
    );
    var vf = u(An=>{
        "use strict";
        Object.defineProperty(An, "__esModule", {
            value: !0
        });
        An.ReducedMotionTypes = void 0;
        var mw = Ya()
          , {TRANSFORM_MOVE: yw, TRANSFORM_SCALE: Iw, TRANSFORM_ROTATE: Tw, TRANSFORM_SKEW: Ow, STYLE_SIZE: bw, STYLE_FILTER: ww, STYLE_FONT_VARIATION: Sw} = mw.ActionTypeConsts
          , Aw = {
            [yw]: !0,
            [Iw]: !0,
            [Tw]: !0,
            [Ow]: !0,
            [bw]: !0,
            [ww]: !0,
            [Sw]: !0
        };
        An.ReducedMotionTypes = Aw
    }
    );
    var hf = u(ie=>{
        "use strict";
        Object.defineProperty(ie, "__esModule", {
            value: !0
        });
        ie.IX2_VIEWPORT_WIDTH_CHANGED = ie.IX2_TEST_FRAME_RENDERED = ie.IX2_STOP_REQUESTED = ie.IX2_SESSION_STOPPED = ie.IX2_SESSION_STARTED = ie.IX2_SESSION_INITIALIZED = ie.IX2_RAW_DATA_IMPORTED = ie.IX2_PREVIEW_REQUESTED = ie.IX2_PLAYBACK_REQUESTED = ie.IX2_PARAMETER_CHANGED = ie.IX2_MEDIA_QUERIES_DEFINED = ie.IX2_INSTANCE_STARTED = ie.IX2_INSTANCE_REMOVED = ie.IX2_INSTANCE_ADDED = ie.IX2_EVENT_STATE_CHANGED = ie.IX2_EVENT_LISTENER_ADDED = ie.IX2_ELEMENT_STATE_CHANGED = ie.IX2_CLEAR_REQUESTED = ie.IX2_ANIMATION_FRAME_CHANGED = ie.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
        var Rw = "IX2_RAW_DATA_IMPORTED";
        ie.IX2_RAW_DATA_IMPORTED = Rw;
        var Cw = "IX2_SESSION_INITIALIZED";
        ie.IX2_SESSION_INITIALIZED = Cw;
        var xw = "IX2_SESSION_STARTED";
        ie.IX2_SESSION_STARTED = xw;
        var Nw = "IX2_SESSION_STOPPED";
        ie.IX2_SESSION_STOPPED = Nw;
        var Lw = "IX2_PREVIEW_REQUESTED";
        ie.IX2_PREVIEW_REQUESTED = Lw;
        var qw = "IX2_PLAYBACK_REQUESTED";
        ie.IX2_PLAYBACK_REQUESTED = qw;
        var Pw = "IX2_STOP_REQUESTED";
        ie.IX2_STOP_REQUESTED = Pw;
        var Mw = "IX2_CLEAR_REQUESTED";
        ie.IX2_CLEAR_REQUESTED = Mw;
        var Dw = "IX2_EVENT_LISTENER_ADDED";
        ie.IX2_EVENT_LISTENER_ADDED = Dw;
        var Fw = "IX2_EVENT_STATE_CHANGED";
        ie.IX2_EVENT_STATE_CHANGED = Fw;
        var Gw = "IX2_ANIMATION_FRAME_CHANGED";
        ie.IX2_ANIMATION_FRAME_CHANGED = Gw;
        var Xw = "IX2_PARAMETER_CHANGED";
        ie.IX2_PARAMETER_CHANGED = Xw;
        var Uw = "IX2_INSTANCE_ADDED";
        ie.IX2_INSTANCE_ADDED = Uw;
        var Vw = "IX2_INSTANCE_STARTED";
        ie.IX2_INSTANCE_STARTED = Vw;
        var Ww = "IX2_INSTANCE_REMOVED";
        ie.IX2_INSTANCE_REMOVED = Ww;
        var Bw = "IX2_ELEMENT_STATE_CHANGED";
        ie.IX2_ELEMENT_STATE_CHANGED = Bw;
        var kw = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        ie.IX2_ACTION_LIST_PLAYBACK_CHANGED = kw;
        var Hw = "IX2_VIEWPORT_WIDTH_CHANGED";
        ie.IX2_VIEWPORT_WIDTH_CHANGED = Hw;
        var jw = "IX2_MEDIA_QUERIES_DEFINED";
        ie.IX2_MEDIA_QUERIES_DEFINED = jw;
        var Kw = "IX2_TEST_FRAME_RENDERED";
        ie.IX2_TEST_FRAME_RENDERED = Kw
    }
    );
    var gf = u(P=>{
        "use strict";
        Object.defineProperty(P, "__esModule", {
            value: !0
        });
        P.W_MOD_JS = P.W_MOD_IX = P.WILL_CHANGE = P.WIDTH = P.WF_PAGE = P.TRANSLATE_Z = P.TRANSLATE_Y = P.TRANSLATE_X = P.TRANSLATE_3D = P.TRANSFORM = P.SKEW_Y = P.SKEW_X = P.SKEW = P.SIBLINGS = P.SCALE_Z = P.SCALE_Y = P.SCALE_X = P.SCALE_3D = P.ROTATE_Z = P.ROTATE_Y = P.ROTATE_X = P.RENDER_TRANSFORM = P.RENDER_STYLE = P.RENDER_PLUGIN = P.RENDER_GENERAL = P.PRESERVE_3D = P.PLAIN_OBJECT = P.PARENT = P.OPACITY = P.IX2_ID_DELIMITER = P.IMMEDIATE_CHILDREN = P.HTML_ELEMENT = P.HEIGHT = P.FONT_VARIATION_SETTINGS = P.FLEX = P.FILTER = P.DISPLAY = P.CONFIG_Z_VALUE = P.CONFIG_Z_UNIT = P.CONFIG_Y_VALUE = P.CONFIG_Y_UNIT = P.CONFIG_X_VALUE = P.CONFIG_X_UNIT = P.CONFIG_VALUE = P.CONFIG_UNIT = P.COMMA_DELIMITER = P.COLOR = P.COLON_DELIMITER = P.CHILDREN = P.BOUNDARY_SELECTOR = P.BORDER_COLOR = P.BAR_DELIMITER = P.BACKGROUND_COLOR = P.BACKGROUND = P.AUTO = P.ABSTRACT_NODE = void 0;
        var zw = "|";
        P.IX2_ID_DELIMITER = zw;
        var Yw = "data-wf-page";
        P.WF_PAGE = Yw;
        var Qw = "w-mod-js";
        P.W_MOD_JS = Qw;
        var $w = "w-mod-ix";
        P.W_MOD_IX = $w;
        var Zw = ".w-dyn-item";
        P.BOUNDARY_SELECTOR = Zw;
        var Jw = "xValue";
        P.CONFIG_X_VALUE = Jw;
        var eS = "yValue";
        P.CONFIG_Y_VALUE = eS;
        var tS = "zValue";
        P.CONFIG_Z_VALUE = tS;
        var rS = "value";
        P.CONFIG_VALUE = rS;
        var nS = "xUnit";
        P.CONFIG_X_UNIT = nS;
        var iS = "yUnit";
        P.CONFIG_Y_UNIT = iS;
        var aS = "zUnit";
        P.CONFIG_Z_UNIT = aS;
        var oS = "unit";
        P.CONFIG_UNIT = oS;
        var sS = "transform";
        P.TRANSFORM = sS;
        var uS = "translateX";
        P.TRANSLATE_X = uS;
        var cS = "translateY";
        P.TRANSLATE_Y = cS;
        var lS = "translateZ";
        P.TRANSLATE_Z = lS;
        var fS = "translate3d";
        P.TRANSLATE_3D = fS;
        var dS = "scaleX";
        P.SCALE_X = dS;
        var pS = "scaleY";
        P.SCALE_Y = pS;
        var vS = "scaleZ";
        P.SCALE_Z = vS;
        var hS = "scale3d";
        P.SCALE_3D = hS;
        var gS = "rotateX";
        P.ROTATE_X = gS;
        var ES = "rotateY";
        P.ROTATE_Y = ES;
        var _S = "rotateZ";
        P.ROTATE_Z = _S;
        var mS = "skew";
        P.SKEW = mS;
        var yS = "skewX";
        P.SKEW_X = yS;
        var IS = "skewY";
        P.SKEW_Y = IS;
        var TS = "opacity";
        P.OPACITY = TS;
        var OS = "filter";
        P.FILTER = OS;
        var bS = "font-variation-settings";
        P.FONT_VARIATION_SETTINGS = bS;
        var wS = "width";
        P.WIDTH = wS;
        var SS = "height";
        P.HEIGHT = SS;
        var AS = "backgroundColor";
        P.BACKGROUND_COLOR = AS;
        var RS = "background";
        P.BACKGROUND = RS;
        var CS = "borderColor";
        P.BORDER_COLOR = CS;
        var xS = "color";
        P.COLOR = xS;
        var NS = "display";
        P.DISPLAY = NS;
        var LS = "flex";
        P.FLEX = LS;
        var qS = "willChange";
        P.WILL_CHANGE = qS;
        var PS = "AUTO";
        P.AUTO = PS;
        var MS = ",";
        P.COMMA_DELIMITER = MS;
        var DS = ":";
        P.COLON_DELIMITER = DS;
        var FS = "|";
        P.BAR_DELIMITER = FS;
        var GS = "CHILDREN";
        P.CHILDREN = GS;
        var XS = "IMMEDIATE_CHILDREN";
        P.IMMEDIATE_CHILDREN = XS;
        var US = "SIBLINGS";
        P.SIBLINGS = US;
        var VS = "PARENT";
        P.PARENT = VS;
        var WS = "preserve-3d";
        P.PRESERVE_3D = WS;
        var BS = "HTML_ELEMENT";
        P.HTML_ELEMENT = BS;
        var kS = "PLAIN_OBJECT";
        P.PLAIN_OBJECT = kS;
        var HS = "ABSTRACT_NODE";
        P.ABSTRACT_NODE = HS;
        var jS = "RENDER_TRANSFORM";
        P.RENDER_TRANSFORM = jS;
        var KS = "RENDER_GENERAL";
        P.RENDER_GENERAL = KS;
        var zS = "RENDER_STYLE";
        P.RENDER_STYLE = zS;
        var YS = "RENDER_PLUGIN";
        P.RENDER_PLUGIN = YS
    }
    );
    var Ge = u(Ie=>{
        "use strict";
        var Ef = Kt().default;
        Object.defineProperty(Ie, "__esModule", {
            value: !0
        });
        var Rn = {
            IX2EngineActionTypes: !0,
            IX2EngineConstants: !0
        };
        Ie.IX2EngineConstants = Ie.IX2EngineActionTypes = void 0;
        var Qa = df();
        Object.keys(Qa).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in Ie && Ie[e] === Qa[e] || Object.defineProperty(Ie, e, {
                enumerable: !0,
                get: function() {
                    return Qa[e]
                }
            })
        });
        var $a = Ya();
        Object.keys($a).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in Ie && Ie[e] === $a[e] || Object.defineProperty(Ie, e, {
                enumerable: !0,
                get: function() {
                    return $a[e]
                }
            })
        });
        var Za = pf();
        Object.keys(Za).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in Ie && Ie[e] === Za[e] || Object.defineProperty(Ie, e, {
                enumerable: !0,
                get: function() {
                    return Za[e]
                }
            })
        });
        var Ja = vf();
        Object.keys(Ja).forEach(function(e) {
            e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(Rn, e) || e in Ie && Ie[e] === Ja[e] || Object.defineProperty(Ie, e, {
                enumerable: !0,
                get: function() {
                    return Ja[e]
                }
            })
        });
        var QS = Ef(hf());
        Ie.IX2EngineActionTypes = QS;
        var $S = Ef(gf());
        Ie.IX2EngineConstants = $S
    }
    );
    var _f = u(Cn=>{
        "use strict";
        Object.defineProperty(Cn, "__esModule", {
            value: !0
        });
        Cn.ixData = void 0;
        var ZS = Ge()
          , {IX2_RAW_DATA_IMPORTED: JS} = ZS.IX2EngineActionTypes
          , eA = (e=Object.freeze({}),t)=>{
            switch (t.type) {
            case JS:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
        ;
        Cn.ixData = eA
    }
    );
    var Pr = u((yk,vt)=>{
        function eo() {
            return vt.exports = eo = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ,
            vt.exports.__esModule = !0,
            vt.exports.default = vt.exports,
            eo.apply(this, arguments)
        }
        vt.exports = eo,
        vt.exports.__esModule = !0,
        vt.exports.default = vt.exports
    }
    );
    var tr = u(Ee=>{
        "use strict";
        Object.defineProperty(Ee, "__esModule", {
            value: !0
        });
        var tA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        Ee.clone = Nn;
        Ee.addLast = If;
        Ee.addFirst = Tf;
        Ee.removeLast = Of;
        Ee.removeFirst = bf;
        Ee.insert = wf;
        Ee.removeAt = Sf;
        Ee.replaceAt = Af;
        Ee.getIn = Ln;
        Ee.set = qn;
        Ee.setIn = Pn;
        Ee.update = Cf;
        Ee.updateIn = xf;
        Ee.merge = Nf;
        Ee.mergeDeep = Lf;
        Ee.mergeIn = qf;
        Ee.omit = Pf;
        Ee.addDefaults = Mf;
        var mf = "INVALID_ARGS";
        function yf(e) {
            throw new Error(e)
        }
        function to(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var rA = {}.hasOwnProperty;
        function Nn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = to(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }
        function Xe(e, t, r) {
            var n = r;
            n == null && yf(mf);
            for (var i = !1, a = arguments.length, o = Array(a > 3 ? a - 3 : 0), s = 3; s < a; s++)
                o[s - 3] = arguments[s];
            for (var c = 0; c < o.length; c++) {
                var d = o[c];
                if (d != null) {
                    var _ = to(d);
                    if (_.length)
                        for (var f = 0; f <= _.length; f++) {
                            var m = _[f];
                            if (!(e && n[m] !== void 0)) {
                                var g = d[m];
                                t && xn(n[m]) && xn(g) && (g = Xe(e, t, n[m], g)),
                                !(g === void 0 || g === n[m]) && (i || (i = !0,
                                n = Nn(n)),
                                n[m] = g)
                            }
                        }
                }
            }
            return n
        }
        function xn(e) {
            var t = typeof e > "u" ? "undefined" : tA(e);
            return e != null && (t === "object" || t === "function")
        }
        function If(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function Tf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function Of(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function bf(e) {
            return e.length ? e.slice(1) : e
        }
        function wf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function Sf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function Af(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, i = Array(n), a = 0; a < n; a++)
                i[a] = e[a];
            return i[t] = r,
            i
        }
        function Ln(e, t) {
            if (!Array.isArray(t) && yf(mf),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function qn(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , i = e ?? n;
            if (i[t] === r)
                return i;
            var a = Nn(i);
            return a[t] = r,
            a
        }
        function Rf(e, t, r, n) {
            var i = void 0
              , a = t[n];
            if (n === t.length - 1)
                i = r;
            else {
                var o = xn(e) && xn(e[a]) ? e[a] : typeof t[n + 1] == "number" ? [] : {};
                i = Rf(o, t, r, n + 1)
            }
            return qn(e, a, i)
        }
        function Pn(e, t, r) {
            return t.length ? Rf(e, t, r, 0) : r
        }
        function Cf(e, t, r) {
            var n = e?.[t]
              , i = r(n);
            return qn(e, t, i)
        }
        function xf(e, t, r) {
            var n = Ln(e, t)
              , i = r(n);
            return Pn(e, t, i)
        }
        function Nf(e, t, r, n, i, a) {
            for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), c = 6; c < o; c++)
                s[c - 6] = arguments[c];
            return s.length ? Xe.call.apply(Xe, [null, !1, !1, e, t, r, n, i, a].concat(s)) : Xe(!1, !1, e, t, r, n, i, a)
        }
        function Lf(e, t, r, n, i, a) {
            for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), c = 6; c < o; c++)
                s[c - 6] = arguments[c];
            return s.length ? Xe.call.apply(Xe, [null, !1, !0, e, t, r, n, i, a].concat(s)) : Xe(!1, !0, e, t, r, n, i, a)
        }
        function qf(e, t, r, n, i, a, o) {
            var s = Ln(e, t);
            s == null && (s = {});
            for (var c = void 0, d = arguments.length, _ = Array(d > 7 ? d - 7 : 0), f = 7; f < d; f++)
                _[f - 7] = arguments[f];
            return _.length ? c = Xe.call.apply(Xe, [null, !1, !1, s, r, n, i, a, o].concat(_)) : c = Xe(!1, !1, s, r, n, i, a, o),
            Pn(e, t, c)
        }
        function Pf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (rA.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var a = {}, o = to(e), s = 0; s < o.length; s++) {
                var c = o[s];
                r.indexOf(c) >= 0 || (a[c] = e[c])
            }
            return a
        }
        function Mf(e, t, r, n, i, a) {
            for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), c = 6; c < o; c++)
                s[c - 6] = arguments[c];
            return s.length ? Xe.call.apply(Xe, [null, !0, !1, e, t, r, n, i, a].concat(s)) : Xe(!0, !1, e, t, r, n, i, a)
        }
        var nA = {
            clone: Nn,
            addLast: If,
            addFirst: Tf,
            removeLast: Of,
            removeFirst: bf,
            insert: wf,
            removeAt: Sf,
            replaceAt: Af,
            getIn: Ln,
            set: qn,
            setIn: Pn,
            update: Cf,
            updateIn: xf,
            merge: Nf,
            mergeDeep: Lf,
            mergeIn: qf,
            omit: Pf,
            addDefaults: Mf
        };
        Ee.default = nA
    }
    );
    var Ff = u(Mn=>{
        "use strict";
        var iA = nt().default;
        Object.defineProperty(Mn, "__esModule", {
            value: !0
        });
        Mn.ixRequest = void 0;
        var aA = iA(Pr())
          , oA = Ge()
          , sA = tr()
          , {IX2_PREVIEW_REQUESTED: uA, IX2_PLAYBACK_REQUESTED: cA, IX2_STOP_REQUESTED: lA, IX2_CLEAR_REQUESTED: fA} = oA.IX2EngineActionTypes
          , dA = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }
          , Df = Object.create(null, {
            [uA]: {
                value: "preview"
            },
            [cA]: {
                value: "playback"
            },
            [lA]: {
                value: "stop"
            },
            [fA]: {
                value: "clear"
            }
        })
          , pA = (e=dA,t)=>{
            if (t.type in Df) {
                let r = [Df[t.type]];
                return (0,
                sA.setIn)(e, [r], (0,
                aA.default)({}, t.payload))
            }
            return e
        }
        ;
        Mn.ixRequest = pA
    }
    );
    var Xf = u(Dn=>{
        "use strict";
        Object.defineProperty(Dn, "__esModule", {
            value: !0
        });
        Dn.ixSession = void 0;
        var vA = Ge()
          , at = tr()
          , {IX2_SESSION_INITIALIZED: hA, IX2_SESSION_STARTED: gA, IX2_TEST_FRAME_RENDERED: EA, IX2_SESSION_STOPPED: _A, IX2_EVENT_LISTENER_ADDED: mA, IX2_EVENT_STATE_CHANGED: yA, IX2_ANIMATION_FRAME_CHANGED: IA, IX2_ACTION_LIST_PLAYBACK_CHANGED: TA, IX2_VIEWPORT_WIDTH_CHANGED: OA, IX2_MEDIA_QUERIES_DEFINED: bA} = vA.IX2EngineActionTypes
          , Gf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }
          , wA = 20
          , SA = (e=Gf,t)=>{
            switch (t.type) {
            case hA:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    at.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case gA:
                return (0,
                at.set)(e, "active", !0);
            case EA:
                {
                    let {payload: {step: r=wA}} = t;
                    return (0,
                    at.set)(e, "tick", e.tick + r)
                }
            case _A:
                return Gf;
            case IA:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    at.set)(e, "tick", r)
                }
            case mA:
                {
                    let r = (0,
                    at.addLast)(e.eventListeners, t.payload);
                    return (0,
                    at.set)(e, "eventListeners", r)
                }
            case yA:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    at.setIn)(e, ["eventState", r], n)
                }
            case TA:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    at.setIn)(e, ["playbackState", r], n)
                }
            case OA:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , i = n.length
                      , a = null;
                    for (let o = 0; o < i; o++) {
                        let {key: s, min: c, max: d} = n[o];
                        if (r >= c && r <= d) {
                            a = s;
                            break
                        }
                    }
                    return (0,
                    at.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: a
                    })
                }
            case bA:
                return (0,
                at.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
        ;
        Dn.ixSession = SA
    }
    );
    var Vf = u((bk,Uf)=>{
        function AA() {
            this.__data__ = [],
            this.size = 0
        }
        Uf.exports = AA
    }
    );
    var Fn = u((wk,Wf)=>{
        function RA(e, t) {
            return e === t || e !== e && t !== t
        }
        Wf.exports = RA
    }
    );
    var Mr = u((Sk,Bf)=>{
        var CA = Fn();
        function xA(e, t) {
            for (var r = e.length; r--; )
                if (CA(e[r][0], t))
                    return r;
            return -1
        }
        Bf.exports = xA
    }
    );
    var Hf = u((Ak,kf)=>{
        var NA = Mr()
          , LA = Array.prototype
          , qA = LA.splice;
        function PA(e) {
            var t = this.__data__
              , r = NA(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : qA.call(t, r, 1),
            --this.size,
            !0
        }
        kf.exports = PA
    }
    );
    var Kf = u((Rk,jf)=>{
        var MA = Mr();
        function DA(e) {
            var t = this.__data__
              , r = MA(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        jf.exports = DA
    }
    );
    var Yf = u((Ck,zf)=>{
        var FA = Mr();
        function GA(e) {
            return FA(this.__data__, e) > -1
        }
        zf.exports = GA
    }
    );
    var $f = u((xk,Qf)=>{
        var XA = Mr();
        function UA(e, t) {
            var r = this.__data__
              , n = XA(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        Qf.exports = UA
    }
    );
    var Dr = u((Nk,Zf)=>{
        var VA = Vf()
          , WA = Hf()
          , BA = Kf()
          , kA = Yf()
          , HA = $f();
        function rr(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        rr.prototype.clear = VA;
        rr.prototype.delete = WA;
        rr.prototype.get = BA;
        rr.prototype.has = kA;
        rr.prototype.set = HA;
        Zf.exports = rr
    }
    );
    var ed = u((Lk,Jf)=>{
        var jA = Dr();
        function KA() {
            this.__data__ = new jA,
            this.size = 0
        }
        Jf.exports = KA
    }
    );
    var rd = u((qk,td)=>{
        function zA(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        td.exports = zA
    }
    );
    var id = u((Pk,nd)=>{
        function YA(e) {
            return this.__data__.get(e)
        }
        nd.exports = YA
    }
    );
    var od = u((Mk,ad)=>{
        function QA(e) {
            return this.__data__.has(e)
        }
        ad.exports = QA
    }
    );
    var ot = u((Dk,sd)=>{
        function $A(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        sd.exports = $A
    }
    );
    var ro = u((Fk,ud)=>{
        var ZA = Tt()
          , JA = ot()
          , e0 = "[object AsyncFunction]"
          , t0 = "[object Function]"
          , r0 = "[object GeneratorFunction]"
          , n0 = "[object Proxy]";
        function i0(e) {
            if (!JA(e))
                return !1;
            var t = ZA(e);
            return t == t0 || t == r0 || t == e0 || t == n0
        }
        ud.exports = i0
    }
    );
    var ld = u((Gk,cd)=>{
        var a0 = Ye()
          , o0 = a0["__core-js_shared__"];
        cd.exports = o0
    }
    );
    var pd = u((Xk,dd)=>{
        var no = ld()
          , fd = function() {
            var e = /[^.]+$/.exec(no && no.keys && no.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function s0(e) {
            return !!fd && fd in e
        }
        dd.exports = s0
    }
    );
    var io = u((Uk,vd)=>{
        var u0 = Function.prototype
          , c0 = u0.toString;
        function l0(e) {
            if (e != null) {
                try {
                    return c0.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        vd.exports = l0
    }
    );
    var gd = u((Vk,hd)=>{
        var f0 = ro()
          , d0 = pd()
          , p0 = ot()
          , v0 = io()
          , h0 = /[\\^$.*+?()[\]{}|]/g
          , g0 = /^\[object .+?Constructor\]$/
          , E0 = Function.prototype
          , _0 = Object.prototype
          , m0 = E0.toString
          , y0 = _0.hasOwnProperty
          , I0 = RegExp("^" + m0.call(y0).replace(h0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function T0(e) {
            if (!p0(e) || d0(e))
                return !1;
            var t = f0(e) ? I0 : g0;
            return t.test(v0(e))
        }
        hd.exports = T0
    }
    );
    var _d = u((Wk,Ed)=>{
        function O0(e, t) {
            return e?.[t]
        }
        Ed.exports = O0
    }
    );
    var Ot = u((Bk,md)=>{
        var b0 = gd()
          , w0 = _d();
        function S0(e, t) {
            var r = w0(e, t);
            return b0(r) ? r : void 0
        }
        md.exports = S0
    }
    );
    var Gn = u((kk,yd)=>{
        var A0 = Ot()
          , R0 = Ye()
          , C0 = A0(R0, "Map");
        yd.exports = C0
    }
    );
    var Fr = u((Hk,Id)=>{
        var x0 = Ot()
          , N0 = x0(Object, "create");
        Id.exports = N0
    }
    );
    var bd = u((jk,Od)=>{
        var Td = Fr();
        function L0() {
            this.__data__ = Td ? Td(null) : {},
            this.size = 0
        }
        Od.exports = L0
    }
    );
    var Sd = u((Kk,wd)=>{
        function q0(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        wd.exports = q0
    }
    );
    var Rd = u((zk,Ad)=>{
        var P0 = Fr()
          , M0 = "__lodash_hash_undefined__"
          , D0 = Object.prototype
          , F0 = D0.hasOwnProperty;
        function G0(e) {
            var t = this.__data__;
            if (P0) {
                var r = t[e];
                return r === M0 ? void 0 : r
            }
            return F0.call(t, e) ? t[e] : void 0
        }
        Ad.exports = G0
    }
    );
    var xd = u((Yk,Cd)=>{
        var X0 = Fr()
          , U0 = Object.prototype
          , V0 = U0.hasOwnProperty;
        function W0(e) {
            var t = this.__data__;
            return X0 ? t[e] !== void 0 : V0.call(t, e)
        }
        Cd.exports = W0
    }
    );
    var Ld = u((Qk,Nd)=>{
        var B0 = Fr()
          , k0 = "__lodash_hash_undefined__";
        function H0(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = B0 && t === void 0 ? k0 : t,
            this
        }
        Nd.exports = H0
    }
    );
    var Pd = u(($k,qd)=>{
        var j0 = bd()
          , K0 = Sd()
          , z0 = Rd()
          , Y0 = xd()
          , Q0 = Ld();
        function nr(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        nr.prototype.clear = j0;
        nr.prototype.delete = K0;
        nr.prototype.get = z0;
        nr.prototype.has = Y0;
        nr.prototype.set = Q0;
        qd.exports = nr
    }
    );
    var Fd = u((Zk,Dd)=>{
        var Md = Pd()
          , $0 = Dr()
          , Z0 = Gn();
        function J0() {
            this.size = 0,
            this.__data__ = {
                hash: new Md,
                map: new (Z0 || $0),
                string: new Md
            }
        }
        Dd.exports = J0
    }
    );
    var Xd = u((Jk,Gd)=>{
        function eR(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Gd.exports = eR
    }
    );
    var Gr = u((eH,Ud)=>{
        var tR = Xd();
        function rR(e, t) {
            var r = e.__data__;
            return tR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Ud.exports = rR
    }
    );
    var Wd = u((tH,Vd)=>{
        var nR = Gr();
        function iR(e) {
            var t = nR(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Vd.exports = iR
    }
    );
    var kd = u((rH,Bd)=>{
        var aR = Gr();
        function oR(e) {
            return aR(this, e).get(e)
        }
        Bd.exports = oR
    }
    );
    var jd = u((nH,Hd)=>{
        var sR = Gr();
        function uR(e) {
            return sR(this, e).has(e)
        }
        Hd.exports = uR
    }
    );
    var zd = u((iH,Kd)=>{
        var cR = Gr();
        function lR(e, t) {
            var r = cR(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        Kd.exports = lR
    }
    );
    var Xn = u((aH,Yd)=>{
        var fR = Fd()
          , dR = Wd()
          , pR = kd()
          , vR = jd()
          , hR = zd();
        function ir(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        ir.prototype.clear = fR;
        ir.prototype.delete = dR;
        ir.prototype.get = pR;
        ir.prototype.has = vR;
        ir.prototype.set = hR;
        Yd.exports = ir
    }
    );
    var $d = u((oH,Qd)=>{
        var gR = Dr()
          , ER = Gn()
          , _R = Xn()
          , mR = 200;
        function yR(e, t) {
            var r = this.__data__;
            if (r instanceof gR) {
                var n = r.__data__;
                if (!ER || n.length < mR - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new _R(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        Qd.exports = yR
    }
    );
    var ao = u((sH,Zd)=>{
        var IR = Dr()
          , TR = ed()
          , OR = rd()
          , bR = id()
          , wR = od()
          , SR = $d();
        function ar(e) {
            var t = this.__data__ = new IR(e);
            this.size = t.size
        }
        ar.prototype.clear = TR;
        ar.prototype.delete = OR;
        ar.prototype.get = bR;
        ar.prototype.has = wR;
        ar.prototype.set = SR;
        Zd.exports = ar
    }
    );
    var ep = u((uH,Jd)=>{
        var AR = "__lodash_hash_undefined__";
        function RR(e) {
            return this.__data__.set(e, AR),
            this
        }
        Jd.exports = RR
    }
    );
    var rp = u((cH,tp)=>{
        function CR(e) {
            return this.__data__.has(e)
        }
        tp.exports = CR
    }
    );
    var ip = u((lH,np)=>{
        var xR = Xn()
          , NR = ep()
          , LR = rp();
        function Un(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new xR; ++t < r; )
                this.add(e[t])
        }
        Un.prototype.add = Un.prototype.push = NR;
        Un.prototype.has = LR;
        np.exports = Un
    }
    );
    var op = u((fH,ap)=>{
        function qR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        ap.exports = qR
    }
    );
    var up = u((dH,sp)=>{
        function PR(e, t) {
            return e.has(t)
        }
        sp.exports = PR
    }
    );
    var oo = u((pH,cp)=>{
        var MR = ip()
          , DR = op()
          , FR = up()
          , GR = 1
          , XR = 2;
        function UR(e, t, r, n, i, a) {
            var o = r & GR
              , s = e.length
              , c = t.length;
            if (s != c && !(o && c > s))
                return !1;
            var d = a.get(e)
              , _ = a.get(t);
            if (d && _)
                return d == t && _ == e;
            var f = -1
              , m = !0
              , g = r & XR ? new MR : void 0;
            for (a.set(e, t),
            a.set(t, e); ++f < s; ) {
                var v = e[f]
                  , O = t[f];
                if (n)
                    var b = o ? n(O, v, f, t, e, a) : n(v, O, f, e, t, a);
                if (b !== void 0) {
                    if (b)
                        continue;
                    m = !1;
                    break
                }
                if (g) {
                    if (!DR(t, function(y, E) {
                        if (!FR(g, E) && (v === y || i(v, y, r, n, a)))
                            return g.push(E)
                    })) {
                        m = !1;
                        break
                    }
                } else if (!(v === O || i(v, O, r, n, a))) {
                    m = !1;
                    break
                }
            }
            return a.delete(e),
            a.delete(t),
            m
        }
        cp.exports = UR
    }
    );
    var fp = u((vH,lp)=>{
        var VR = Ye()
          , WR = VR.Uint8Array;
        lp.exports = WR
    }
    );
    var pp = u((hH,dp)=>{
        function BR(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }),
            r
        }
        dp.exports = BR
    }
    );
    var hp = u((gH,vp)=>{
        function kR(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        vp.exports = kR
    }
    );
    var yp = u((EH,mp)=>{
        var gp = $t()
          , Ep = fp()
          , HR = Fn()
          , jR = oo()
          , KR = pp()
          , zR = hp()
          , YR = 1
          , QR = 2
          , $R = "[object Boolean]"
          , ZR = "[object Date]"
          , JR = "[object Error]"
          , eC = "[object Map]"
          , tC = "[object Number]"
          , rC = "[object RegExp]"
          , nC = "[object Set]"
          , iC = "[object String]"
          , aC = "[object Symbol]"
          , oC = "[object ArrayBuffer]"
          , sC = "[object DataView]"
          , _p = gp ? gp.prototype : void 0
          , so = _p ? _p.valueOf : void 0;
        function uC(e, t, r, n, i, a, o) {
            switch (r) {
            case sC:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case oC:
                return !(e.byteLength != t.byteLength || !a(new Ep(e), new Ep(t)));
            case $R:
            case ZR:
            case tC:
                return HR(+e, +t);
            case JR:
                return e.name == t.name && e.message == t.message;
            case rC:
            case iC:
                return e == t + "";
            case eC:
                var s = KR;
            case nC:
                var c = n & YR;
                if (s || (s = zR),
                e.size != t.size && !c)
                    return !1;
                var d = o.get(e);
                if (d)
                    return d == t;
                n |= QR,
                o.set(e, t);
                var _ = jR(s(e), s(t), n, i, a, o);
                return o.delete(e),
                _;
            case aC:
                if (so)
                    return so.call(e) == so.call(t)
            }
            return !1
        }
        mp.exports = uC
    }
    );
    var Vn = u((_H,Ip)=>{
        function cC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n; )
                e[i + r] = t[r];
            return e
        }
        Ip.exports = cC
    }
    );
    var Se = u((mH,Tp)=>{
        var lC = Array.isArray;
        Tp.exports = lC
    }
    );
    var uo = u((yH,Op)=>{
        var fC = Vn()
          , dC = Se();
        function pC(e, t, r) {
            var n = t(e);
            return dC(e) ? n : fC(n, r(e))
        }
        Op.exports = pC
    }
    );
    var wp = u((IH,bp)=>{
        function vC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
                var o = e[r];
                t(o, r, e) && (a[i++] = o)
            }
            return a
        }
        bp.exports = vC
    }
    );
    var co = u((TH,Sp)=>{
        function hC() {
            return []
        }
        Sp.exports = hC
    }
    );
    var lo = u((OH,Rp)=>{
        var gC = wp()
          , EC = co()
          , _C = Object.prototype
          , mC = _C.propertyIsEnumerable
          , Ap = Object.getOwnPropertySymbols
          , yC = Ap ? function(e) {
            return e == null ? [] : (e = Object(e),
            gC(Ap(e), function(t) {
                return mC.call(e, t)
            }))
        }
        : EC;
        Rp.exports = yC
    }
    );
    var xp = u((bH,Cp)=>{
        function IC(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Cp.exports = IC
    }
    );
    var Lp = u((wH,Np)=>{
        var TC = Tt()
          , OC = pt()
          , bC = "[object Arguments]";
        function wC(e) {
            return OC(e) && TC(e) == bC
        }
        Np.exports = wC
    }
    );
    var Xr = u((SH,Mp)=>{
        var qp = Lp()
          , SC = pt()
          , Pp = Object.prototype
          , AC = Pp.hasOwnProperty
          , RC = Pp.propertyIsEnumerable
          , CC = qp(function() {
            return arguments
        }()) ? qp : function(e) {
            return SC(e) && AC.call(e, "callee") && !RC.call(e, "callee")
        }
        ;
        Mp.exports = CC
    }
    );
    var Fp = u((AH,Dp)=>{
        function xC() {
            return !1
        }
        Dp.exports = xC
    }
    );
    var Wn = u((Ur,or)=>{
        var NC = Ye()
          , LC = Fp()
          , Up = typeof Ur == "object" && Ur && !Ur.nodeType && Ur
          , Gp = Up && typeof or == "object" && or && !or.nodeType && or
          , qC = Gp && Gp.exports === Up
          , Xp = qC ? NC.Buffer : void 0
          , PC = Xp ? Xp.isBuffer : void 0
          , MC = PC || LC;
        or.exports = MC
    }
    );
    var Bn = u((RH,Vp)=>{
        var DC = 9007199254740991
          , FC = /^(?:0|[1-9]\d*)$/;
        function GC(e, t) {
            var r = typeof e;
            return t = t ?? DC,
            !!t && (r == "number" || r != "symbol" && FC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Vp.exports = GC
    }
    );
    var kn = u((CH,Wp)=>{
        var XC = 9007199254740991;
        function UC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= XC
        }
        Wp.exports = UC
    }
    );
    var kp = u((xH,Bp)=>{
        var VC = Tt()
          , WC = kn()
          , BC = pt()
          , kC = "[object Arguments]"
          , HC = "[object Array]"
          , jC = "[object Boolean]"
          , KC = "[object Date]"
          , zC = "[object Error]"
          , YC = "[object Function]"
          , QC = "[object Map]"
          , $C = "[object Number]"
          , ZC = "[object Object]"
          , JC = "[object RegExp]"
          , ex = "[object Set]"
          , tx = "[object String]"
          , rx = "[object WeakMap]"
          , nx = "[object ArrayBuffer]"
          , ix = "[object DataView]"
          , ax = "[object Float32Array]"
          , ox = "[object Float64Array]"
          , sx = "[object Int8Array]"
          , ux = "[object Int16Array]"
          , cx = "[object Int32Array]"
          , lx = "[object Uint8Array]"
          , fx = "[object Uint8ClampedArray]"
          , dx = "[object Uint16Array]"
          , px = "[object Uint32Array]"
          , ve = {};
        ve[ax] = ve[ox] = ve[sx] = ve[ux] = ve[cx] = ve[lx] = ve[fx] = ve[dx] = ve[px] = !0;
        ve[kC] = ve[HC] = ve[nx] = ve[jC] = ve[ix] = ve[KC] = ve[zC] = ve[YC] = ve[QC] = ve[$C] = ve[ZC] = ve[JC] = ve[ex] = ve[tx] = ve[rx] = !1;
        function vx(e) {
            return BC(e) && WC(e.length) && !!ve[VC(e)]
        }
        Bp.exports = vx
    }
    );
    var jp = u((NH,Hp)=>{
        function hx(e) {
            return function(t) {
                return e(t)
            }
        }
        Hp.exports = hx
    }
    );
    var zp = u((Vr,sr)=>{
        var gx = qa()
          , Kp = typeof Vr == "object" && Vr && !Vr.nodeType && Vr
          , Wr = Kp && typeof sr == "object" && sr && !sr.nodeType && sr
          , Ex = Wr && Wr.exports === Kp
          , fo = Ex && gx.process
          , _x = function() {
            try {
                var e = Wr && Wr.require && Wr.require("util").types;
                return e || fo && fo.binding && fo.binding("util")
            } catch {}
        }();
        sr.exports = _x
    }
    );
    var Hn = u((LH,$p)=>{
        var mx = kp()
          , yx = jp()
          , Yp = zp()
          , Qp = Yp && Yp.isTypedArray
          , Ix = Qp ? yx(Qp) : mx;
        $p.exports = Ix
    }
    );
    var po = u((qH,Zp)=>{
        var Tx = xp()
          , Ox = Xr()
          , bx = Se()
          , wx = Wn()
          , Sx = Bn()
          , Ax = Hn()
          , Rx = Object.prototype
          , Cx = Rx.hasOwnProperty;
        function xx(e, t) {
            var r = bx(e)
              , n = !r && Ox(e)
              , i = !r && !n && wx(e)
              , a = !r && !n && !i && Ax(e)
              , o = r || n || i || a
              , s = o ? Tx(e.length, String) : []
              , c = s.length;
            for (var d in e)
                (t || Cx.call(e, d)) && !(o && (d == "length" || i && (d == "offset" || d == "parent") || a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || Sx(d, c))) && s.push(d);
            return s
        }
        Zp.exports = xx
    }
    );
    var jn = u((PH,Jp)=>{
        var Nx = Object.prototype;
        function Lx(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || Nx;
            return e === r
        }
        Jp.exports = Lx
    }
    );
    var tv = u((MH,ev)=>{
        var qx = Pa()
          , Px = qx(Object.keys, Object);
        ev.exports = Px
    }
    );
    var Kn = u((DH,rv)=>{
        var Mx = jn()
          , Dx = tv()
          , Fx = Object.prototype
          , Gx = Fx.hasOwnProperty;
        function Xx(e) {
            if (!Mx(e))
                return Dx(e);
            var t = [];
            for (var r in Object(e))
                Gx.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        rv.exports = Xx
    }
    );
    var Mt = u((FH,nv)=>{
        var Ux = ro()
          , Vx = kn();
        function Wx(e) {
            return e != null && Vx(e.length) && !Ux(e)
        }
        nv.exports = Wx
    }
    );
    var Br = u((GH,iv)=>{
        var Bx = po()
          , kx = Kn()
          , Hx = Mt();
        function jx(e) {
            return Hx(e) ? Bx(e) : kx(e)
        }
        iv.exports = jx
    }
    );
    var ov = u((XH,av)=>{
        var Kx = uo()
          , zx = lo()
          , Yx = Br();
        function Qx(e) {
            return Kx(e, Yx, zx)
        }
        av.exports = Qx
    }
    );
    var cv = u((UH,uv)=>{
        var sv = ov()
          , $x = 1
          , Zx = Object.prototype
          , Jx = Zx.hasOwnProperty;
        function eN(e, t, r, n, i, a) {
            var o = r & $x
              , s = sv(e)
              , c = s.length
              , d = sv(t)
              , _ = d.length;
            if (c != _ && !o)
                return !1;
            for (var f = c; f--; ) {
                var m = s[f];
                if (!(o ? m in t : Jx.call(t, m)))
                    return !1
            }
            var g = a.get(e)
              , v = a.get(t);
            if (g && v)
                return g == t && v == e;
            var O = !0;
            a.set(e, t),
            a.set(t, e);
            for (var b = o; ++f < c; ) {
                m = s[f];
                var y = e[m]
                  , E = t[m];
                if (n)
                    var S = o ? n(E, y, m, t, e, a) : n(y, E, m, e, t, a);
                if (!(S === void 0 ? y === E || i(y, E, r, n, a) : S)) {
                    O = !1;
                    break
                }
                b || (b = m == "constructor")
            }
            if (O && !b) {
                var D = e.constructor
                  , N = t.constructor;
                D != N && "constructor"in e && "constructor"in t && !(typeof D == "function" && D instanceof D && typeof N == "function" && N instanceof N) && (O = !1)
            }
            return a.delete(e),
            a.delete(t),
            O
        }
        uv.exports = eN
    }
    );
    var fv = u((VH,lv)=>{
        var tN = Ot()
          , rN = Ye()
          , nN = tN(rN, "DataView");
        lv.exports = nN
    }
    );
    var pv = u((WH,dv)=>{
        var iN = Ot()
          , aN = Ye()
          , oN = iN(aN, "Promise");
        dv.exports = oN
    }
    );
    var hv = u((BH,vv)=>{
        var sN = Ot()
          , uN = Ye()
          , cN = sN(uN, "Set");
        vv.exports = cN
    }
    );
    var vo = u((kH,gv)=>{
        var lN = Ot()
          , fN = Ye()
          , dN = lN(fN, "WeakMap");
        gv.exports = dN
    }
    );
    var zn = u((HH,Ov)=>{
        var ho = fv()
          , go = Gn()
          , Eo = pv()
          , _o = hv()
          , mo = vo()
          , Tv = Tt()
          , ur = io()
          , Ev = "[object Map]"
          , pN = "[object Object]"
          , _v = "[object Promise]"
          , mv = "[object Set]"
          , yv = "[object WeakMap]"
          , Iv = "[object DataView]"
          , vN = ur(ho)
          , hN = ur(go)
          , gN = ur(Eo)
          , EN = ur(_o)
          , _N = ur(mo)
          , Dt = Tv;
        (ho && Dt(new ho(new ArrayBuffer(1))) != Iv || go && Dt(new go) != Ev || Eo && Dt(Eo.resolve()) != _v || _o && Dt(new _o) != mv || mo && Dt(new mo) != yv) && (Dt = function(e) {
            var t = Tv(e)
              , r = t == pN ? e.constructor : void 0
              , n = r ? ur(r) : "";
            if (n)
                switch (n) {
                case vN:
                    return Iv;
                case hN:
                    return Ev;
                case gN:
                    return _v;
                case EN:
                    return mv;
                case _N:
                    return yv
                }
            return t
        }
        );
        Ov.exports = Dt
    }
    );
    var Nv = u((jH,xv)=>{
        var yo = ao()
          , mN = oo()
          , yN = yp()
          , IN = cv()
          , bv = zn()
          , wv = Se()
          , Sv = Wn()
          , TN = Hn()
          , ON = 1
          , Av = "[object Arguments]"
          , Rv = "[object Array]"
          , Yn = "[object Object]"
          , bN = Object.prototype
          , Cv = bN.hasOwnProperty;
        function wN(e, t, r, n, i, a) {
            var o = wv(e)
              , s = wv(t)
              , c = o ? Rv : bv(e)
              , d = s ? Rv : bv(t);
            c = c == Av ? Yn : c,
            d = d == Av ? Yn : d;
            var _ = c == Yn
              , f = d == Yn
              , m = c == d;
            if (m && Sv(e)) {
                if (!Sv(t))
                    return !1;
                o = !0,
                _ = !1
            }
            if (m && !_)
                return a || (a = new yo),
                o || TN(e) ? mN(e, t, r, n, i, a) : yN(e, t, c, r, n, i, a);
            if (!(r & ON)) {
                var g = _ && Cv.call(e, "__wrapped__")
                  , v = f && Cv.call(t, "__wrapped__");
                if (g || v) {
                    var O = g ? e.value() : e
                      , b = v ? t.value() : t;
                    return a || (a = new yo),
                    i(O, b, r, n, a)
                }
            }
            return m ? (a || (a = new yo),
            IN(e, t, r, n, i, a)) : !1
        }
        xv.exports = wN
    }
    );
    var Io = u((KH,Pv)=>{
        var SN = Nv()
          , Lv = pt();
        function qv(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Lv(e) && !Lv(t) ? e !== e && t !== t : SN(e, t, r, n, qv, i)
        }
        Pv.exports = qv
    }
    );
    var Dv = u((zH,Mv)=>{
        var AN = ao()
          , RN = Io()
          , CN = 1
          , xN = 2;
        function NN(e, t, r, n) {
            var i = r.length
              , a = i
              , o = !n;
            if (e == null)
                return !a;
            for (e = Object(e); i--; ) {
                var s = r[i];
                if (o && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++i < a; ) {
                s = r[i];
                var c = s[0]
                  , d = e[c]
                  , _ = s[1];
                if (o && s[2]) {
                    if (d === void 0 && !(c in e))
                        return !1
                } else {
                    var f = new AN;
                    if (n)
                        var m = n(d, _, c, e, t, f);
                    if (!(m === void 0 ? RN(_, d, CN | xN, n, f) : m))
                        return !1
                }
            }
            return !0
        }
        Mv.exports = NN
    }
    );
    var To = u((YH,Fv)=>{
        var LN = ot();
        function qN(e) {
            return e === e && !LN(e)
        }
        Fv.exports = qN
    }
    );
    var Xv = u((QH,Gv)=>{
        var PN = To()
          , MN = Br();
        function DN(e) {
            for (var t = MN(e), r = t.length; r--; ) {
                var n = t[r]
                  , i = e[n];
                t[r] = [n, i, PN(i)]
            }
            return t
        }
        Gv.exports = DN
    }
    );
    var Oo = u(($H,Uv)=>{
        function FN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Uv.exports = FN
    }
    );
    var Wv = u((ZH,Vv)=>{
        var GN = Dv()
          , XN = Xv()
          , UN = Oo();
        function VN(e) {
            var t = XN(e);
            return t.length == 1 && t[0][2] ? UN(t[0][0], t[0][1]) : function(r) {
                return r === e || GN(r, e, t)
            }
        }
        Vv.exports = VN
    }
    );
    var kr = u((JH,Bv)=>{
        var WN = Tt()
          , BN = pt()
          , kN = "[object Symbol]";
        function HN(e) {
            return typeof e == "symbol" || BN(e) && WN(e) == kN
        }
        Bv.exports = HN
    }
    );
    var Qn = u((e5,kv)=>{
        var jN = Se()
          , KN = kr()
          , zN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , YN = /^\w*$/;
        function QN(e, t) {
            if (jN(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || KN(e) ? !0 : YN.test(e) || !zN.test(e) || t != null && e in Object(t)
        }
        kv.exports = QN
    }
    );
    var Kv = u((t5,jv)=>{
        var Hv = Xn()
          , $N = "Expected a function";
        function bo(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError($N);
            var r = function() {
                var n = arguments
                  , i = t ? t.apply(this, n) : n[0]
                  , a = r.cache;
                if (a.has(i))
                    return a.get(i);
                var o = e.apply(this, n);
                return r.cache = a.set(i, o) || a,
                o
            };
            return r.cache = new (bo.Cache || Hv),
            r
        }
        bo.Cache = Hv;
        jv.exports = bo
    }
    );
    var Yv = u((r5,zv)=>{
        var ZN = Kv()
          , JN = 500;
        function eL(e) {
            var t = ZN(e, function(n) {
                return r.size === JN && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        zv.exports = eL
    }
    );
    var $v = u((n5,Qv)=>{
        var tL = Yv()
          , rL = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , nL = /\\(\\)?/g
          , iL = tL(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(rL, function(r, n, i, a) {
                t.push(i ? a.replace(nL, "$1") : n || r)
            }),
            t
        });
        Qv.exports = iL
    }
    );
    var wo = u((i5,Zv)=>{
        function aL(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
                i[r] = t(e[r], r, e);
            return i
        }
        Zv.exports = aL
    }
    );
    var ih = u((a5,nh)=>{
        var Jv = $t()
          , oL = wo()
          , sL = Se()
          , uL = kr()
          , cL = 1 / 0
          , eh = Jv ? Jv.prototype : void 0
          , th = eh ? eh.toString : void 0;
        function rh(e) {
            if (typeof e == "string")
                return e;
            if (sL(e))
                return oL(e, rh) + "";
            if (uL(e))
                return th ? th.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -cL ? "-0" : t
        }
        nh.exports = rh
    }
    );
    var oh = u((o5,ah)=>{
        var lL = ih();
        function fL(e) {
            return e == null ? "" : lL(e)
        }
        ah.exports = fL
    }
    );
    var Hr = u((s5,sh)=>{
        var dL = Se()
          , pL = Qn()
          , vL = $v()
          , hL = oh();
        function gL(e, t) {
            return dL(e) ? e : pL(e, t) ? [e] : vL(hL(e))
        }
        sh.exports = gL
    }
    );
    var cr = u((u5,uh)=>{
        var EL = kr()
          , _L = 1 / 0;
        function mL(e) {
            if (typeof e == "string" || EL(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -_L ? "-0" : t
        }
        uh.exports = mL
    }
    );
    var $n = u((c5,ch)=>{
        var yL = Hr()
          , IL = cr();
        function TL(e, t) {
            t = yL(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[IL(t[r++])];
            return r && r == n ? e : void 0
        }
        ch.exports = TL
    }
    );
    var Zn = u((l5,lh)=>{
        var OL = $n();
        function bL(e, t, r) {
            var n = e == null ? void 0 : OL(e, t);
            return n === void 0 ? r : n
        }
        lh.exports = bL
    }
    );
    var dh = u((f5,fh)=>{
        function wL(e, t) {
            return e != null && t in Object(e)
        }
        fh.exports = wL
    }
    );
    var vh = u((d5,ph)=>{
        var SL = Hr()
          , AL = Xr()
          , RL = Se()
          , CL = Bn()
          , xL = kn()
          , NL = cr();
        function LL(e, t, r) {
            t = SL(t, e);
            for (var n = -1, i = t.length, a = !1; ++n < i; ) {
                var o = NL(t[n]);
                if (!(a = e != null && r(e, o)))
                    break;
                e = e[o]
            }
            return a || ++n != i ? a : (i = e == null ? 0 : e.length,
            !!i && xL(i) && CL(o, i) && (RL(e) || AL(e)))
        }
        ph.exports = LL
    }
    );
    var gh = u((p5,hh)=>{
        var qL = dh()
          , PL = vh();
        function ML(e, t) {
            return e != null && PL(e, t, qL)
        }
        hh.exports = ML
    }
    );
    var _h = u((v5,Eh)=>{
        var DL = Io()
          , FL = Zn()
          , GL = gh()
          , XL = Qn()
          , UL = To()
          , VL = Oo()
          , WL = cr()
          , BL = 1
          , kL = 2;
        function HL(e, t) {
            return XL(e) && UL(t) ? VL(WL(e), t) : function(r) {
                var n = FL(r, e);
                return n === void 0 && n === t ? GL(r, e) : DL(t, n, BL | kL)
            }
        }
        Eh.exports = HL
    }
    );
    var Jn = u((h5,mh)=>{
        function jL(e) {
            return e
        }
        mh.exports = jL
    }
    );
    var So = u((g5,yh)=>{
        function KL(e) {
            return function(t) {
                return t?.[e]
            }
        }
        yh.exports = KL
    }
    );
    var Th = u((E5,Ih)=>{
        var zL = $n();
        function YL(e) {
            return function(t) {
                return zL(t, e)
            }
        }
        Ih.exports = YL
    }
    );
    var bh = u((_5,Oh)=>{
        var QL = So()
          , $L = Th()
          , ZL = Qn()
          , JL = cr();
        function eq(e) {
            return ZL(e) ? QL(JL(e)) : $L(e)
        }
        Oh.exports = eq
    }
    );
    var bt = u((m5,wh)=>{
        var tq = Wv()
          , rq = _h()
          , nq = Jn()
          , iq = Se()
          , aq = bh();
        function oq(e) {
            return typeof e == "function" ? e : e == null ? nq : typeof e == "object" ? iq(e) ? rq(e[0], e[1]) : tq(e) : aq(e)
        }
        wh.exports = oq
    }
    );
    var Ao = u((y5,Sh)=>{
        var sq = bt()
          , uq = Mt()
          , cq = Br();
        function lq(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!uq(t)) {
                    var a = sq(r, 3);
                    t = cq(t),
                    r = function(s) {
                        return a(i[s], s, i)
                    }
                }
                var o = e(t, r, n);
                return o > -1 ? i[a ? t[o] : o] : void 0
            }
        }
        Sh.exports = lq
    }
    );
    var Ro = u((I5,Ah)=>{
        function fq(e, t, r, n) {
            for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
                if (t(e[a], a, e))
                    return a;
            return -1
        }
        Ah.exports = fq
    }
    );
    var Ch = u((T5,Rh)=>{
        var dq = /\s/;
        function pq(e) {
            for (var t = e.length; t-- && dq.test(e.charAt(t)); )
                ;
            return t
        }
        Rh.exports = pq
    }
    );
    var Nh = u((O5,xh)=>{
        var vq = Ch()
          , hq = /^\s+/;
        function gq(e) {
            return e && e.slice(0, vq(e) + 1).replace(hq, "")
        }
        xh.exports = gq
    }
    );
    var ei = u((b5,Ph)=>{
        var Eq = Nh()
          , Lh = ot()
          , _q = kr()
          , qh = 0 / 0
          , mq = /^[-+]0x[0-9a-f]+$/i
          , yq = /^0b[01]+$/i
          , Iq = /^0o[0-7]+$/i
          , Tq = parseInt;
        function Oq(e) {
            if (typeof e == "number")
                return e;
            if (_q(e))
                return qh;
            if (Lh(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Lh(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = Eq(e);
            var r = yq.test(e);
            return r || Iq.test(e) ? Tq(e.slice(2), r ? 2 : 8) : mq.test(e) ? qh : +e
        }
        Ph.exports = Oq
    }
    );
    var Fh = u((w5,Dh)=>{
        var bq = ei()
          , Mh = 1 / 0
          , wq = 17976931348623157e292;
        function Sq(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = bq(e),
            e === Mh || e === -Mh) {
                var t = e < 0 ? -1 : 1;
                return t * wq
            }
            return e === e ? e : 0
        }
        Dh.exports = Sq
    }
    );
    var Co = u((S5,Gh)=>{
        var Aq = Fh();
        function Rq(e) {
            var t = Aq(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Gh.exports = Rq
    }
    );
    var Uh = u((A5,Xh)=>{
        var Cq = Ro()
          , xq = bt()
          , Nq = Co()
          , Lq = Math.max;
        function qq(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = r == null ? 0 : Nq(r);
            return i < 0 && (i = Lq(n + i, 0)),
            Cq(e, xq(t, 3), i)
        }
        Xh.exports = qq
    }
    );
    var xo = u((R5,Vh)=>{
        var Pq = Ao()
          , Mq = Uh()
          , Dq = Pq(Mq);
        Vh.exports = Dq
    }
    );
    var ri = u(qe=>{
        "use strict";
        var Fq = nt().default;
        Object.defineProperty(qe, "__esModule", {
            value: !0
        });
        qe.withBrowser = qe.TRANSFORM_STYLE_PREFIXED = qe.TRANSFORM_PREFIXED = qe.IS_BROWSER_ENV = qe.FLEX_PREFIXED = qe.ELEMENT_MATCHES = void 0;
        var Gq = Fq(xo())
          , Bh = typeof window < "u";
        qe.IS_BROWSER_ENV = Bh;
        var ti = (e,t)=>Bh ? e() : t;
        qe.withBrowser = ti;
        var Xq = ti(()=>(0,
        Gq.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e=>e in Element.prototype));
        qe.ELEMENT_MATCHES = Xq;
        var Uq = ti(()=>{
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let a = t[i];
                    if (e.style.display = a,
                    e.style.display === a)
                        return a
                }
                return r
            } catch {
                return r
            }
        }
        , "flex");
        qe.FLEX_PREFIXED = Uq;
        var kh = ti(()=>{
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let a = t[i] + r;
                    if (e.style[a] !== void 0)
                        return a
                }
            }
            return "transform"
        }
        , "transform");
        qe.TRANSFORM_PREFIXED = kh;
        var Wh = kh.split("transform")[0]
          , Vq = Wh ? Wh + "TransformStyle" : "transformStyle";
        qe.TRANSFORM_STYLE_PREFIXED = Vq
    }
    );
    var No = u((x5,Yh)=>{
        var Wq = 4
          , Bq = .001
          , kq = 1e-7
          , Hq = 10
          , jr = 11
          , ni = 1 / (jr - 1)
          , jq = typeof Float32Array == "function";
        function Hh(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function jh(e, t) {
            return 3 * t - 6 * e
        }
        function Kh(e) {
            return 3 * e
        }
        function ii(e, t, r) {
            return ((Hh(t, r) * e + jh(t, r)) * e + Kh(t)) * e
        }
        function zh(e, t, r) {
            return 3 * Hh(t, r) * e * e + 2 * jh(t, r) * e + Kh(t)
        }
        function Kq(e, t, r, n, i) {
            var a, o, s = 0;
            do
                o = t + (r - t) / 2,
                a = ii(o, n, i) - e,
                a > 0 ? r = o : t = o;
            while (Math.abs(a) > kq && ++s < Hq);
            return o
        }
        function zq(e, t, r, n) {
            for (var i = 0; i < Wq; ++i) {
                var a = zh(t, r, n);
                if (a === 0)
                    return t;
                var o = ii(t, r, n) - e;
                t -= o / a
            }
            return t
        }
        Yh.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var a = jq ? new Float32Array(jr) : new Array(jr);
            if (t !== r || n !== i)
                for (var o = 0; o < jr; ++o)
                    a[o] = ii(o * ni, t, n);
            function s(c) {
                for (var d = 0, _ = 1, f = jr - 1; _ !== f && a[_] <= c; ++_)
                    d += ni;
                --_;
                var m = (c - a[_]) / (a[_ + 1] - a[_])
                  , g = d + m * ni
                  , v = zh(g, t, n);
                return v >= Bq ? zq(c, g, t, n) : v === 0 ? g : Kq(c, d, d + ni, t, n)
            }
            return function(d) {
                return t === r && n === i ? d : d === 0 ? 0 : d === 1 ? 1 : ii(s(d), r, i)
            }
        }
    }
    );
    var Lo = u(ne=>{
        "use strict";
        var Yq = nt().default;
        Object.defineProperty(ne, "__esModule", {
            value: !0
        });
        ne.bounce = NP;
        ne.bouncePast = LP;
        ne.easeOut = ne.easeInOut = ne.easeIn = ne.ease = void 0;
        ne.inBack = TP;
        ne.inCirc = _P;
        ne.inCubic = nP;
        ne.inElastic = wP;
        ne.inExpo = hP;
        ne.inOutBack = bP;
        ne.inOutCirc = yP;
        ne.inOutCubic = aP;
        ne.inOutElastic = AP;
        ne.inOutExpo = EP;
        ne.inOutQuad = rP;
        ne.inOutQuart = uP;
        ne.inOutQuint = fP;
        ne.inOutSine = vP;
        ne.inQuad = eP;
        ne.inQuart = oP;
        ne.inQuint = cP;
        ne.inSine = dP;
        ne.outBack = OP;
        ne.outBounce = IP;
        ne.outCirc = mP;
        ne.outCubic = iP;
        ne.outElastic = SP;
        ne.outExpo = gP;
        ne.outQuad = tP;
        ne.outQuart = sP;
        ne.outQuint = lP;
        ne.outSine = pP;
        ne.swingFrom = CP;
        ne.swingFromTo = RP;
        ne.swingTo = xP;
        var ai = Yq(No())
          , ht = 1.70158
          , Qq = (0,
        ai.default)(.25, .1, .25, 1);
        ne.ease = Qq;
        var $q = (0,
        ai.default)(.42, 0, 1, 1);
        ne.easeIn = $q;
        var Zq = (0,
        ai.default)(0, 0, .58, 1);
        ne.easeOut = Zq;
        var Jq = (0,
        ai.default)(.42, 0, .58, 1);
        ne.easeInOut = Jq;
        function eP(e) {
            return Math.pow(e, 2)
        }
        function tP(e) {
            return -(Math.pow(e - 1, 2) - 1)
        }
        function rP(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
        }
        function nP(e) {
            return Math.pow(e, 3)
        }
        function iP(e) {
            return Math.pow(e - 1, 3) + 1
        }
        function aP(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
        }
        function oP(e) {
            return Math.pow(e, 4)
        }
        function sP(e) {
            return -(Math.pow(e - 1, 4) - 1)
        }
        function uP(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
        }
        function cP(e) {
            return Math.pow(e, 5)
        }
        function lP(e) {
            return Math.pow(e - 1, 5) + 1
        }
        function fP(e) {
            return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
        }
        function dP(e) {
            return -Math.cos(e * (Math.PI / 2)) + 1
        }
        function pP(e) {
            return Math.sin(e * (Math.PI / 2))
        }
        function vP(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }
        function hP(e) {
            return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
        }
        function gP(e) {
            return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
        }
        function EP(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
        }
        function _P(e) {
            return -(Math.sqrt(1 - e * e) - 1)
        }
        function mP(e) {
            return Math.sqrt(1 - Math.pow(e - 1, 2))
        }
        function yP(e) {
            return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }
        function IP(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function TP(e) {
            let t = ht;
            return e * e * ((t + 1) * e - t)
        }
        function OP(e) {
            let t = ht;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }
        function bP(e) {
            let t = ht;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function wP(e) {
            let t = ht
              , r = 0
              , n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
        }
        function SP(e) {
            let t = ht
              , r = 0
              , n = 1;
            return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
        }
        function AP(e) {
            let t = ht
              , r = 0
              , n = 1;
            return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
            n < 1 ? (n = 1,
            t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
            e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
        }
        function RP(e) {
            let t = ht;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        }
        function CP(e) {
            let t = ht;
            return e * e * ((t + 1) * e - t)
        }
        function xP(e) {
            let t = ht;
            return (e -= 1) * e * ((t + 1) * e + t) + 1
        }
        function NP(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }
        function LP(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }
    }
    );
    var Po = u(Kr=>{
        "use strict";
        var qP = nt().default
          , PP = Kt().default;
        Object.defineProperty(Kr, "__esModule", {
            value: !0
        });
        Kr.applyEasing = FP;
        Kr.createBezierEasing = DP;
        Kr.optimizeFloat = qo;
        var Qh = PP(Lo())
          , MP = qP(No());
        function qo(e, t=5, r=10) {
            let n = Math.pow(r, t)
              , i = Number(Math.round(e * n) / n);
            return Math.abs(i) > 1e-4 ? i : 0
        }
        function DP(e) {
            return (0,
            MP.default)(...e)
        }
        function FP(e, t, r) {
            return t === 0 ? 0 : t === 1 ? 1 : qo(r ? t > 0 ? r(t) : t : t > 0 && e && Qh[e] ? Qh[e](t) : t)
        }
    }
    );
    var eg = u(lr=>{
        "use strict";
        Object.defineProperty(lr, "__esModule", {
            value: !0
        });
        lr.createElementState = Jh;
        lr.ixElements = void 0;
        lr.mergeActionState = Mo;
        var oi = tr()
          , Zh = Ge()
          , {HTML_ELEMENT: q5, PLAIN_OBJECT: GP, ABSTRACT_NODE: P5, CONFIG_X_VALUE: XP, CONFIG_Y_VALUE: UP, CONFIG_Z_VALUE: VP, CONFIG_VALUE: WP, CONFIG_X_UNIT: BP, CONFIG_Y_UNIT: kP, CONFIG_Z_UNIT: HP, CONFIG_UNIT: jP} = Zh.IX2EngineConstants
          , {IX2_SESSION_STOPPED: KP, IX2_INSTANCE_ADDED: zP, IX2_ELEMENT_STATE_CHANGED: YP} = Zh.IX2EngineActionTypes
          , $h = {}
          , QP = "refState"
          , $P = (e=$h,t={})=>{
            switch (t.type) {
            case KP:
                return $h;
            case zP:
                {
                    let {elementId: r, element: n, origin: i, actionItem: a, refType: o} = t.payload
                      , {actionTypeId: s} = a
                      , c = e;
                    return (0,
                    oi.getIn)(c, [r, n]) !== n && (c = Jh(c, n, o, r, a)),
                    Mo(c, r, s, i, a)
                }
            case YP:
                {
                    let {elementId: r, actionTypeId: n, current: i, actionItem: a} = t.payload;
                    return Mo(e, r, n, i, a)
                }
            default:
                return e
            }
        }
        ;
        lr.ixElements = $P;
        function Jh(e, t, r, n, i) {
            let a = r === GP ? (0,
            oi.getIn)(i, ["config", "target", "objectId"]) : null;
            return (0,
            oi.mergeIn)(e, [n], {
                id: n,
                ref: t,
                refId: a,
                refType: r
            })
        }
        function Mo(e, t, r, n, i) {
            let a = JP(i)
              , o = [t, QP, r];
            return (0,
            oi.mergeIn)(e, o, n, a)
        }
        var ZP = [[XP, BP], [UP, kP], [VP, HP], [WP, jP]];
        function JP(e) {
            let {config: t} = e;
            return ZP.reduce((r,n)=>{
                let i = n[0]
                  , a = n[1]
                  , o = t[i]
                  , s = t[a];
                return o != null && s != null && (r[a] = s),
                r
            }
            , {})
        }
    }
    );
    var tg = u(Ae=>{
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var eM = e=>e.value;
        Ae.getPluginConfig = eM;
        var tM = (e,t)=>{
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
        ;
        Ae.getPluginDuration = tM;
        var rM = e=>e || {
            value: 0
        };
        Ae.getPluginOrigin = rM;
        var nM = e=>({
            value: e.value
        });
        Ae.getPluginDestination = nM;
        var iM = e=>{
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
        ;
        Ae.createPluginInstance = iM;
        var aM = (e,t,r)=>{
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
        ;
        Ae.renderPlugin = aM;
        var oM = e=>{
            window.Webflow.require("lottie").createInstance(e).stop()
        }
        ;
        Ae.clearPlugin = oM
    }
    );
    var Do = u(be=>{
        "use strict";
        Object.defineProperty(be, "__esModule", {
            value: !0
        });
        be.getPluginOrigin = be.getPluginDuration = be.getPluginDestination = be.getPluginConfig = be.createPluginInstance = be.clearPlugin = void 0;
        be.isPluginType = cM;
        be.renderPlugin = void 0;
        var Ft = tg()
          , rg = Ge()
          , sM = ri()
          , uM = {
            [rg.ActionTypeConsts.PLUGIN_LOTTIE]: {
                getConfig: Ft.getPluginConfig,
                getOrigin: Ft.getPluginOrigin,
                getDuration: Ft.getPluginDuration,
                getDestination: Ft.getPluginDestination,
                createInstance: Ft.createPluginInstance,
                render: Ft.renderPlugin,
                clear: Ft.clearPlugin
            }
        };
        function cM(e) {
            return e === rg.ActionTypeConsts.PLUGIN_LOTTIE
        }
        var Gt = e=>t=>{
            if (!sM.IS_BROWSER_ENV)
                return ()=>null;
            let r = uM[t];
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
          , lM = Gt("getConfig");
        be.getPluginConfig = lM;
        var fM = Gt("getOrigin");
        be.getPluginOrigin = fM;
        var dM = Gt("getDuration");
        be.getPluginDuration = dM;
        var pM = Gt("getDestination");
        be.getPluginDestination = pM;
        var vM = Gt("createInstance");
        be.createPluginInstance = vM;
        var hM = Gt("render");
        be.renderPlugin = hM;
        var gM = Gt("clear");
        be.clearPlugin = gM
    }
    );
    var ig = u((G5,ng)=>{
        function EM(e, t) {
            return e == null || e !== e ? t : e
        }
        ng.exports = EM
    }
    );
    var og = u((X5,ag)=>{
        function _M(e, t, r, n) {
            var i = -1
              , a = e == null ? 0 : e.length;
            for (n && a && (r = e[++i]); ++i < a; )
                r = t(r, e[i], i, e);
            return r
        }
        ag.exports = _M
    }
    );
    var ug = u((U5,sg)=>{
        function mM(e) {
            return function(t, r, n) {
                for (var i = -1, a = Object(t), o = n(t), s = o.length; s--; ) {
                    var c = o[e ? s : ++i];
                    if (r(a[c], c, a) === !1)
                        break
                }
                return t
            }
        }
        sg.exports = mM
    }
    );
    var lg = u((V5,cg)=>{
        var yM = ug()
          , IM = yM();
        cg.exports = IM
    }
    );
    var Fo = u((W5,fg)=>{
        var TM = lg()
          , OM = Br();
        function bM(e, t) {
            return e && TM(e, t, OM)
        }
        fg.exports = bM
    }
    );
    var pg = u((B5,dg)=>{
        var wM = Mt();
        function SM(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!wM(r))
                    return e(r, n);
                for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
                    ;
                return r
            }
        }
        dg.exports = SM
    }
    );
    var Go = u((k5,vg)=>{
        var AM = Fo()
          , RM = pg()
          , CM = RM(AM);
        vg.exports = CM
    }
    );
    var gg = u((H5,hg)=>{
        function xM(e, t, r, n, i) {
            return i(e, function(a, o, s) {
                r = n ? (n = !1,
                a) : t(r, a, o, s)
            }),
            r
        }
        hg.exports = xM
    }
    );
    var _g = u((j5,Eg)=>{
        var NM = og()
          , LM = Go()
          , qM = bt()
          , PM = gg()
          , MM = Se();
        function DM(e, t, r) {
            var n = MM(e) ? NM : PM
              , i = arguments.length < 3;
            return n(e, qM(t, 4), r, i, LM)
        }
        Eg.exports = DM
    }
    );
    var yg = u((K5,mg)=>{
        var FM = Ro()
          , GM = bt()
          , XM = Co()
          , UM = Math.max
          , VM = Math.min;
        function WM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = n - 1;
            return r !== void 0 && (i = XM(r),
            i = r < 0 ? UM(n + i, 0) : VM(i, n - 1)),
            FM(e, GM(t, 3), i, !0)
        }
        mg.exports = WM
    }
    );
    var Tg = u((z5,Ig)=>{
        var BM = Ao()
          , kM = yg()
          , HM = BM(kM);
        Ig.exports = HM
    }
    );
    var bg = u(si=>{
        "use strict";
        Object.defineProperty(si, "__esModule", {
            value: !0
        });
        si.default = void 0;
        var jM = Object.prototype.hasOwnProperty;
        function Og(e, t) {
            return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
        }
        function KM(e, t) {
            if (Og(e, t))
                return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null)
                return !1;
            let r = Object.keys(e)
              , n = Object.keys(t);
            if (r.length !== n.length)
                return !1;
            for (let i = 0; i < r.length; i++)
                if (!jM.call(t, r[i]) || !Og(e[r[i]], t[r[i]]))
                    return !1;
            return !0
        }
        var zM = KM;
        si.default = zM
    }
    );
    var Hg = u(pe=>{
        "use strict";
        var li = nt().default;
        Object.defineProperty(pe, "__esModule", {
            value: !0
        });
        pe.cleanupHTMLElement = HD;
        pe.clearAllStyles = kD;
        pe.getActionListProgress = KD;
        pe.getAffectedElements = ko;
        pe.getComputedStyle = mD;
        pe.getDestinationValues = SD;
        pe.getElementId = hD;
        pe.getInstanceId = pD;
        pe.getInstanceOrigin = TD;
        pe.getItemConfigByKey = void 0;
        pe.getMaxDurationItemIndex = kg;
        pe.getNamespacedParameterId = QD;
        pe.getRenderType = Vg;
        pe.getStyleProp = AD;
        pe.mediaQueriesEqual = ZD;
        pe.observeStore = _D;
        pe.reduceListToGroup = zD;
        pe.reifyState = gD;
        pe.renderHTMLElement = RD;
        Object.defineProperty(pe, "shallowEqual", {
            enumerable: !0,
            get: function() {
                return Pg.default
            }
        });
        pe.shouldAllowMediaQuery = $D;
        pe.shouldNamespaceEventParameter = YD;
        pe.stringifyTarget = JD;
        var wt = li(ig())
          , Uo = li(_g())
          , Xo = li(Tg())
          , wg = tr()
          , Xt = Ge()
          , Pg = li(bg())
          , YM = Po()
          , ct = Do()
          , Pe = ri()
          , {BACKGROUND: QM, TRANSFORM: $M, TRANSLATE_3D: ZM, SCALE_3D: JM, ROTATE_X: eD, ROTATE_Y: tD, ROTATE_Z: rD, SKEW: nD, PRESERVE_3D: iD, FLEX: aD, OPACITY: ui, FILTER: zr, FONT_VARIATION_SETTINGS: Yr, WIDTH: st, HEIGHT: ut, BACKGROUND_COLOR: Mg, BORDER_COLOR: oD, COLOR: sD, CHILDREN: Sg, IMMEDIATE_CHILDREN: uD, SIBLINGS: Ag, PARENT: cD, DISPLAY: ci, WILL_CHANGE: fr, AUTO: St, COMMA_DELIMITER: Qr, COLON_DELIMITER: lD, BAR_DELIMITER: Rg, RENDER_TRANSFORM: Dg, RENDER_GENERAL: Vo, RENDER_STYLE: Wo, RENDER_PLUGIN: Fg} = Xt.IX2EngineConstants
          , {TRANSFORM_MOVE: dr, TRANSFORM_SCALE: pr, TRANSFORM_ROTATE: vr, TRANSFORM_SKEW: $r, STYLE_OPACITY: Gg, STYLE_FILTER: Zr, STYLE_FONT_VARIATION: Jr, STYLE_SIZE: hr, STYLE_BACKGROUND_COLOR: gr, STYLE_BORDER: Er, STYLE_TEXT_COLOR: _r, GENERAL_DISPLAY: fi} = Xt.ActionTypeConsts
          , fD = "OBJECT_VALUE"
          , Xg = e=>e.trim()
          , Bo = Object.freeze({
            [gr]: Mg,
            [Er]: oD,
            [_r]: sD
        })
          , Ug = Object.freeze({
            [Pe.TRANSFORM_PREFIXED]: $M,
            [Mg]: QM,
            [ui]: ui,
            [zr]: zr,
            [st]: st,
            [ut]: ut,
            [Yr]: Yr
        })
          , Cg = {}
          , dD = 1;
        function pD() {
            return "i" + dD++
        }
        var vD = 1;
        function hD(e, t) {
            for (let r in e) {
                let n = e[r];
                if (n && n.ref === t)
                    return n.id
            }
            return "e" + vD++
        }
        function gD({events: e, actionLists: t, site: r}={}) {
            let n = (0,
            Uo.default)(e, (o,s)=>{
                let {eventTypeId: c} = s;
                return o[c] || (o[c] = {}),
                o[c][s.id] = s,
                o
            }
            , {})
              , i = r && r.mediaQueries
              , a = [];
            return i ? a = i.map(o=>o.key) : (i = [],
            console.warn("IX2 missing mediaQueries in site data")),
            {
                ixData: {
                    events: e,
                    actionLists: t,
                    eventTypeMap: n,
                    mediaQueries: i,
                    mediaQueryKeys: a
                }
            }
        }
        var ED = (e,t)=>e === t;
        function _D({store: e, select: t, onChange: r, comparator: n=ED}) {
            let {getState: i, subscribe: a} = e
              , o = a(c)
              , s = t(i());
            function c() {
                let d = t(i());
                if (d == null) {
                    o();
                    return
                }
                n(d, s) || (s = d,
                r(s, e))
            }
            return o
        }
        function xg(e) {
            let t = typeof e;
            if (t === "string")
                return {
                    id: e
                };
            if (e != null && t === "object") {
                let {id: r, objectId: n, selector: i, selectorGuids: a, appliesTo: o, useEventTarget: s} = e;
                return {
                    id: r,
                    objectId: n,
                    selector: i,
                    selectorGuids: a,
                    appliesTo: o,
                    useEventTarget: s
                }
            }
            return {}
        }
        function ko({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
            var a, o, s;
            if (!i)
                throw new Error("IX2 missing elementApi");
            let {targets: c} = e;
            if (Array.isArray(c) && c.length > 0)
                return c.reduce((R,F)=>R.concat(ko({
                    config: {
                        target: F
                    },
                    event: t,
                    eventTarget: r,
                    elementRoot: n,
                    elementApi: i
                })), []);
            let {getValidDocument: d, getQuerySelector: _, queryDocument: f, getChildElements: m, getSiblingElements: g, matchSelector: v, elementContains: O, isSiblingNode: b} = i
              , {target: y} = e;
            if (!y)
                return [];
            let {id: E, objectId: S, selector: D, selectorGuids: N, appliesTo: M, useEventTarget: V} = xg(y);
            if (S)
                return [Cg[S] || (Cg[S] = {})];
            if (M === Xt.EventAppliesTo.PAGE) {
                let R = d(E);
                return R ? [R] : []
            }
            let H = ((a = t == null || (o = t.action) === null || o === void 0 || (s = o.config) === null || s === void 0 ? void 0 : s.affectedElements) !== null && a !== void 0 ? a : {})[E || D] || {}, ee = !!(H.id || H.selector), W, q, p, L = t && _(xg(t.target));
            if (ee ? (W = H.limitAffectedElements,
            q = L,
            p = _(H)) : q = p = _({
                id: E,
                selector: D,
                selectorGuids: N
            }),
            t && V) {
                let R = r && (p || V === !0) ? [r] : f(L);
                if (p) {
                    if (V === cD)
                        return f(p).filter(F=>R.some(j=>O(F, j)));
                    if (V === Sg)
                        return f(p).filter(F=>R.some(j=>O(j, F)));
                    if (V === Ag)
                        return f(p).filter(F=>R.some(j=>b(j, F)))
                }
                return R
            }
            return q == null || p == null ? [] : Pe.IS_BROWSER_ENV && n ? f(p).filter(R=>n.contains(R)) : W === Sg ? f(q, p) : W === uD ? m(f(q)).filter(v(p)) : W === Ag ? g(f(q)).filter(v(p)) : f(p)
        }
        function mD({element: e, actionItem: t}) {
            if (!Pe.IS_BROWSER_ENV)
                return {};
            let {actionTypeId: r} = t;
            switch (r) {
            case hr:
            case gr:
            case Er:
            case _r:
            case fi:
                return window.getComputedStyle(e);
            default:
                return {}
            }
        }
        var Ng = /px/
          , yD = (e,t)=>t.reduce((r,n)=>(r[n.type] == null && (r[n.type] = CD[n.type]),
        r), e || {})
          , ID = (e,t)=>t.reduce((r,n)=>(r[n.type] == null && (r[n.type] = xD[n.type] || n.defaultValue || 0),
        r), e || {});
        function TD(e, t={}, r={}, n, i) {
            let {getStyle: a} = i
              , {actionTypeId: o} = n;
            if ((0,
            ct.isPluginType)(o))
                return (0,
                ct.getPluginOrigin)(o)(t[o]);
            switch (n.actionTypeId) {
            case dr:
            case pr:
            case vr:
            case $r:
                return t[n.actionTypeId] || Ho[n.actionTypeId];
            case Zr:
                return yD(t[n.actionTypeId], n.config.filters);
            case Jr:
                return ID(t[n.actionTypeId], n.config.fontVariations);
            case Gg:
                return {
                    value: (0,
                    wt.default)(parseFloat(a(e, ui)), 1)
                };
            case hr:
                {
                    let s = a(e, st), c = a(e, ut), d, _;
                    return n.config.widthUnit === St ? d = Ng.test(s) ? parseFloat(s) : parseFloat(r.width) : d = (0,
                    wt.default)(parseFloat(s), parseFloat(r.width)),
                    n.config.heightUnit === St ? _ = Ng.test(c) ? parseFloat(c) : parseFloat(r.height) : _ = (0,
                    wt.default)(parseFloat(c), parseFloat(r.height)),
                    {
                        widthValue: d,
                        heightValue: _
                    }
                }
            case gr:
            case Er:
            case _r:
                return VD({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: a
                });
            case fi:
                return {
                    value: (0,
                    wt.default)(a(e, ci), r.display)
                };
            case fD:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
            }
        }
        var OD = (e,t)=>(t && (e[t.type] = t.value || 0),
        e)
          , bD = (e,t)=>(t && (e[t.type] = t.value || 0),
        e)
          , wD = (e,t,r)=>{
            if ((0,
            ct.isPluginType)(e))
                return (0,
                ct.getPluginConfig)(e)(r, t);
            switch (e) {
            case Zr:
                {
                    let n = (0,
                    Xo.default)(r.filters, ({type: i})=>i === t);
                    return n ? n.value : 0
                }
            case Jr:
                {
                    let n = (0,
                    Xo.default)(r.fontVariations, ({type: i})=>i === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        pe.getItemConfigByKey = wD;
        function SD({element: e, actionItem: t, elementApi: r}) {
            if ((0,
            ct.isPluginType)(t.actionTypeId))
                return (0,
                ct.getPluginDestination)(t.actionTypeId)(t.config);
            switch (t.actionTypeId) {
            case dr:
            case pr:
            case vr:
            case $r:
                {
                    let {xValue: n, yValue: i, zValue: a} = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: a
                    }
                }
            case hr:
                {
                    let {getStyle: n, setStyle: i, getProperty: a} = r
                      , {widthUnit: o, heightUnit: s} = t.config
                      , {widthValue: c, heightValue: d} = t.config;
                    if (!Pe.IS_BROWSER_ENV)
                        return {
                            widthValue: c,
                            heightValue: d
                        };
                    if (o === St) {
                        let _ = n(e, st);
                        i(e, st, ""),
                        c = a(e, "offsetWidth"),
                        i(e, st, _)
                    }
                    if (s === St) {
                        let _ = n(e, ut);
                        i(e, ut, ""),
                        d = a(e, "offsetHeight"),
                        i(e, ut, _)
                    }
                    return {
                        widthValue: c,
                        heightValue: d
                    }
                }
            case gr:
            case Er:
            case _r:
                {
                    let {rValue: n, gValue: i, bValue: a, aValue: o} = t.config;
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: a,
                        aValue: o
                    }
                }
            case Zr:
                return t.config.filters.reduce(OD, {});
            case Jr:
                return t.config.fontVariations.reduce(bD, {});
            default:
                {
                    let {value: n} = t.config;
                    return {
                        value: n
                    }
                }
            }
        }
        function Vg(e) {
            if (/^TRANSFORM_/.test(e))
                return Dg;
            if (/^STYLE_/.test(e))
                return Wo;
            if (/^GENERAL_/.test(e))
                return Vo;
            if (/^PLUGIN_/.test(e))
                return Fg
        }
        function AD(e, t) {
            return e === Wo ? t.replace("STYLE_", "").toLowerCase() : null
        }
        function RD(e, t, r, n, i, a, o, s, c) {
            switch (s) {
            case Dg:
                return qD(e, t, r, i, o);
            case Wo:
                return WD(e, t, r, i, a, o);
            case Vo:
                return BD(e, i, o);
            case Fg:
                {
                    let {actionTypeId: d} = i;
                    if ((0,
                    ct.isPluginType)(d))
                        return (0,
                        ct.renderPlugin)(d)(c, t, i)
                }
            }
        }
        var Ho = {
            [dr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [pr]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [vr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [$r]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }
          , CD = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        })
          , xD = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        })
          , ND = (e,t)=>{
            let r = (0,
            Xo.default)(t.filters, ({type: n})=>n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
          , LD = Object.keys(Ho);
        function qD(e, t, r, n, i) {
            let a = LD.map(s=>{
                let c = Ho[s]
                  , {xValue: d=c.xValue, yValue: _=c.yValue, zValue: f=c.zValue, xUnit: m="", yUnit: g="", zUnit: v=""} = t[s] || {};
                switch (s) {
                case dr:
                    return `${ZM}(${d}${m}, ${_}${g}, ${f}${v})`;
                case pr:
                    return `${JM}(${d}${m}, ${_}${g}, ${f}${v})`;
                case vr:
                    return `${eD}(${d}${m}) ${tD}(${_}${g}) ${rD}(${f}${v})`;
                case $r:
                    return `${nD}(${d}${m}, ${_}${g})`;
                default:
                    return ""
                }
            }
            ).join(" ")
              , {setStyle: o} = i;
            Ut(e, Pe.TRANSFORM_PREFIXED, i),
            o(e, Pe.TRANSFORM_PREFIXED, a),
            DD(n, r) && o(e, Pe.TRANSFORM_STYLE_PREFIXED, iD)
        }
        function PD(e, t, r, n) {
            let i = (0,
            Uo.default)(t, (o,s,c)=>`${o} ${c}(${s}${ND(c, r)})`, "")
              , {setStyle: a} = n;
            Ut(e, zr, n),
            a(e, zr, i)
        }
        function MD(e, t, r, n) {
            let i = (0,
            Uo.default)(t, (o,s,c)=>(o.push(`"${c}" ${s}`),
            o), []).join(", ")
              , {setStyle: a} = n;
            Ut(e, Yr, n),
            a(e, Yr, i)
        }
        function DD({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
            return e === dr && n !== void 0 || e === pr && n !== void 0 || e === vr && (t !== void 0 || r !== void 0)
        }
        var FD = "\\(([^)]+)\\)"
          , GD = /^rgb/
          , XD = RegExp(`rgba?${FD}`);
        function UD(e, t) {
            let r = e.exec(t);
            return r ? r[1] : ""
        }
        function VD({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
            let i = Bo[t]
              , a = n(e, i)
              , o = GD.test(a) ? a : r[i]
              , s = UD(XD, o).split(Qr);
            return {
                rValue: (0,
                wt.default)(parseInt(s[0], 10), 255),
                gValue: (0,
                wt.default)(parseInt(s[1], 10), 255),
                bValue: (0,
                wt.default)(parseInt(s[2], 10), 255),
                aValue: (0,
                wt.default)(parseFloat(s[3]), 1)
            }
        }
        function WD(e, t, r, n, i, a) {
            let {setStyle: o} = a;
            switch (n.actionTypeId) {
            case hr:
                {
                    let {widthUnit: s="", heightUnit: c=""} = n.config
                      , {widthValue: d, heightValue: _} = r;
                    d !== void 0 && (s === St && (s = "px"),
                    Ut(e, st, a),
                    o(e, st, d + s)),
                    _ !== void 0 && (c === St && (c = "px"),
                    Ut(e, ut, a),
                    o(e, ut, _ + c));
                    break
                }
            case Zr:
                {
                    PD(e, r, n.config, a);
                    break
                }
            case Jr:
                {
                    MD(e, r, n.config, a);
                    break
                }
            case gr:
            case Er:
            case _r:
                {
                    let s = Bo[n.actionTypeId]
                      , c = Math.round(r.rValue)
                      , d = Math.round(r.gValue)
                      , _ = Math.round(r.bValue)
                      , f = r.aValue;
                    Ut(e, s, a),
                    o(e, s, f >= 1 ? `rgb(${c},${d},${_})` : `rgba(${c},${d},${_},${f})`);
                    break
                }
            default:
                {
                    let {unit: s=""} = n.config;
                    Ut(e, i, a),
                    o(e, i, r.value + s);
                    break
                }
            }
        }
        function BD(e, t, r) {
            let {setStyle: n} = r;
            switch (t.actionTypeId) {
            case fi:
                {
                    let {value: i} = t.config;
                    i === aD && Pe.IS_BROWSER_ENV ? n(e, ci, Pe.FLEX_PREFIXED) : n(e, ci, i);
                    return
                }
            }
        }
        function Ut(e, t, r) {
            if (!Pe.IS_BROWSER_ENV)
                return;
            let n = Ug[t];
            if (!n)
                return;
            let {getStyle: i, setStyle: a} = r
              , o = i(e, fr);
            if (!o) {
                a(e, fr, n);
                return
            }
            let s = o.split(Qr).map(Xg);
            s.indexOf(n) === -1 && a(e, fr, s.concat(n).join(Qr))
        }
        function Wg(e, t, r) {
            if (!Pe.IS_BROWSER_ENV)
                return;
            let n = Ug[t];
            if (!n)
                return;
            let {getStyle: i, setStyle: a} = r
              , o = i(e, fr);
            !o || o.indexOf(n) === -1 || a(e, fr, o.split(Qr).map(Xg).filter(s=>s !== n).join(Qr))
        }
        function kD({store: e, elementApi: t}) {
            let {ixData: r} = e.getState()
              , {events: n={}, actionLists: i={}} = r;
            Object.keys(n).forEach(a=>{
                let o = n[a]
                  , {config: s} = o.action
                  , {actionListId: c} = s
                  , d = i[c];
                d && Lg({
                    actionList: d,
                    event: o,
                    elementApi: t
                })
            }
            ),
            Object.keys(i).forEach(a=>{
                Lg({
                    actionList: i[a],
                    elementApi: t
                })
            }
            )
        }
        function Lg({actionList: e={}, event: t, elementApi: r}) {
            let {actionItemGroups: n, continuousParameterGroups: i} = e;
            n && n.forEach(a=>{
                qg({
                    actionGroup: a,
                    event: t,
                    elementApi: r
                })
            }
            ),
            i && i.forEach(a=>{
                let {continuousActionGroups: o} = a;
                o.forEach(s=>{
                    qg({
                        actionGroup: s,
                        event: t,
                        elementApi: r
                    })
                }
                )
            }
            )
        }
        function qg({actionGroup: e, event: t, elementApi: r}) {
            let {actionItems: n} = e;
            n.forEach(({actionTypeId: i, config: a})=>{
                let o;
                (0,
                ct.isPluginType)(i) ? o = (0,
                ct.clearPlugin)(i) : o = Bg({
                    effect: jD,
                    actionTypeId: i,
                    elementApi: r
                }),
                ko({
                    config: a,
                    event: t,
                    elementApi: r
                }).forEach(o)
            }
            )
        }
        function HD(e, t, r) {
            let {setStyle: n, getStyle: i} = r
              , {actionTypeId: a} = t;
            if (a === hr) {
                let {config: o} = t;
                o.widthUnit === St && n(e, st, ""),
                o.heightUnit === St && n(e, ut, "")
            }
            i(e, fr) && Bg({
                effect: Wg,
                actionTypeId: a,
                elementApi: r
            })(e)
        }
        var Bg = ({effect: e, actionTypeId: t, elementApi: r})=>n=>{
            switch (t) {
            case dr:
            case pr:
            case vr:
            case $r:
                e(n, Pe.TRANSFORM_PREFIXED, r);
                break;
            case Zr:
                e(n, zr, r);
                break;
            case Jr:
                e(n, Yr, r);
                break;
            case Gg:
                e(n, ui, r);
                break;
            case hr:
                e(n, st, r),
                e(n, ut, r);
                break;
            case gr:
            case Er:
            case _r:
                e(n, Bo[t], r);
                break;
            case fi:
                e(n, ci, r);
                break
            }
        }
        ;
        function jD(e, t, r) {
            let {setStyle: n} = r;
            Wg(e, t, r),
            n(e, t, ""),
            t === Pe.TRANSFORM_PREFIXED && n(e, Pe.TRANSFORM_STYLE_PREFIXED, "")
        }
        function kg(e) {
            let t = 0
              , r = 0;
            return e.forEach((n,i)=>{
                let {config: a} = n
                  , o = a.delay + a.duration;
                o >= t && (t = o,
                r = i)
            }
            ),
            r
        }
        function KD(e, t) {
            let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
              , {actionItem: i, verboseTimeElapsed: a=0} = t
              , o = 0
              , s = 0;
            return r.forEach((c,d)=>{
                if (n && d === 0)
                    return;
                let {actionItems: _} = c
                  , f = _[kg(_)]
                  , {config: m, actionTypeId: g} = f;
                i.id === f.id && (s = o + a);
                let v = Vg(g) === Vo ? 0 : m.duration;
                o += m.delay + v
            }
            ),
            o > 0 ? (0,
            YM.optimizeFloat)(s / o) : 0
        }
        function zD({actionList: e, actionItemId: t, rawData: r}) {
            let {actionItemGroups: n, continuousParameterGroups: i} = e
              , a = []
              , o = s=>(a.push((0,
            wg.mergeIn)(s, ["config"], {
                delay: 0,
                duration: 0
            })),
            s.id === t);
            return n && n.some(({actionItems: s})=>s.some(o)),
            i && i.some(s=>{
                let {continuousActionGroups: c} = s;
                return c.some(({actionItems: d})=>d.some(o))
            }
            ),
            (0,
            wg.setIn)(r, ["actionLists"], {
                [e.id]: {
                    id: e.id,
                    actionItemGroups: [{
                        actionItems: a
                    }]
                }
            })
        }
        function YD(e, {basedOn: t}) {
            return e === Xt.EventTypeConsts.SCROLLING_IN_VIEW && (t === Xt.EventBasedOn.ELEMENT || t == null) || e === Xt.EventTypeConsts.MOUSE_MOVE && t === Xt.EventBasedOn.ELEMENT
        }
        function QD(e, t) {
            return e + lD + t
        }
        function $D(e, t) {
            return t == null ? !0 : e.indexOf(t) !== -1
        }
        function ZD(e, t) {
            return (0,
            Pg.default)(e && e.sort(), t && t.sort())
        }
        function JD(e) {
            if (typeof e == "string")
                return e;
            let {id: t="", selector: r="", useEventTarget: n=""} = e;
            return t + Rg + r + Rg + n
        }
    }
    );
    var Vt = u(Me=>{
        "use strict";
        var mr = Kt().default;
        Object.defineProperty(Me, "__esModule", {
            value: !0
        });
        Me.IX2VanillaUtils = Me.IX2VanillaPlugins = Me.IX2ElementsReducer = Me.IX2Easings = Me.IX2EasingUtils = Me.IX2BrowserSupport = void 0;
        var e1 = mr(ri());
        Me.IX2BrowserSupport = e1;
        var t1 = mr(Lo());
        Me.IX2Easings = t1;
        var r1 = mr(Po());
        Me.IX2EasingUtils = r1;
        var n1 = mr(eg());
        Me.IX2ElementsReducer = n1;
        var i1 = mr(Do());
        Me.IX2VanillaPlugins = i1;
        var a1 = mr(Hg());
        Me.IX2VanillaUtils = a1
    }
    );
    var Yg = u(pi=>{
        "use strict";
        Object.defineProperty(pi, "__esModule", {
            value: !0
        });
        pi.ixInstances = void 0;
        var jg = Ge()
          , Kg = Vt()
          , yr = tr()
          , {IX2_RAW_DATA_IMPORTED: o1, IX2_SESSION_STOPPED: s1, IX2_INSTANCE_ADDED: u1, IX2_INSTANCE_STARTED: c1, IX2_INSTANCE_REMOVED: l1, IX2_ANIMATION_FRAME_CHANGED: f1} = jg.IX2EngineActionTypes
          , {optimizeFloat: di, applyEasing: zg, createBezierEasing: d1} = Kg.IX2EasingUtils
          , {RENDER_GENERAL: p1} = jg.IX2EngineConstants
          , {getItemConfigByKey: jo, getRenderType: v1, getStyleProp: h1} = Kg.IX2VanillaUtils
          , g1 = (e,t)=>{
            let {position: r, parameterId: n, actionGroups: i, destinationKeys: a, smoothing: o, restingValue: s, actionTypeId: c, customEasingFn: d, skipMotion: _, skipToValue: f} = e
              , {parameters: m} = t.payload
              , g = Math.max(1 - o, .01)
              , v = m[n];
            v == null && (g = 1,
            v = s);
            let O = Math.max(v, 0) || 0
              , b = di(O - r)
              , y = _ ? f : di(r + b * g)
              , E = y * 100;
            if (y === r && e.current)
                return e;
            let S, D, N, M;
            for (let k = 0, {length: H} = i; k < H; k++) {
                let {keyframe: ee, actionItems: W} = i[k];
                if (k === 0 && (S = W[0]),
                E >= ee) {
                    S = W[0];
                    let q = i[k + 1]
                      , p = q && E !== ee;
                    D = p ? q.actionItems[0] : null,
                    p && (N = ee / 100,
                    M = (q.keyframe - ee) / 100)
                }
            }
            let V = {};
            if (S && !D)
                for (let k = 0, {length: H} = a; k < H; k++) {
                    let ee = a[k];
                    V[ee] = jo(c, ee, S.config)
                }
            else if (S && D && N !== void 0 && M !== void 0) {
                let k = (y - N) / M
                  , H = S.config.easing
                  , ee = zg(H, k, d);
                for (let W = 0, {length: q} = a; W < q; W++) {
                    let p = a[W]
                      , L = jo(c, p, S.config)
                      , j = (jo(c, p, D.config) - L) * ee + L;
                    V[p] = j
                }
            }
            return (0,
            yr.merge)(e, {
                position: y,
                current: V
            })
        }
          , E1 = (e,t)=>{
            let {active: r, origin: n, start: i, immediate: a, renderType: o, verbose: s, actionItem: c, destination: d, destinationKeys: _, pluginDuration: f, instanceDelay: m, customEasingFn: g, skipMotion: v} = e
              , O = c.config.easing
              , {duration: b, delay: y} = c.config;
            f != null && (b = f),
            y = m ?? y,
            o === p1 ? b = 0 : (a || v) && (b = y = 0);
            let {now: E} = t.payload;
            if (r && n) {
                let S = E - (i + y);
                if (s) {
                    let k = E - i
                      , H = b + y
                      , ee = di(Math.min(Math.max(0, k / H), 1));
                    e = (0,
                    yr.set)(e, "verboseTimeElapsed", H * ee)
                }
                if (S < 0)
                    return e;
                let D = di(Math.min(Math.max(0, S / b), 1))
                  , N = zg(O, D, g)
                  , M = {}
                  , V = null;
                return _.length && (V = _.reduce((k,H)=>{
                    let ee = d[H]
                      , W = parseFloat(n[H]) || 0
                      , p = (parseFloat(ee) - W) * N + W;
                    return k[H] = p,
                    k
                }
                , {})),
                M.current = V,
                M.position = D,
                D === 1 && (M.active = !1,
                M.complete = !0),
                (0,
                yr.merge)(e, M)
            }
            return e
        }
          , _1 = (e=Object.freeze({}),t)=>{
            switch (t.type) {
            case o1:
                return t.payload.ixInstances || Object.freeze({});
            case s1:
                return Object.freeze({});
            case u1:
                {
                    let {instanceId: r, elementId: n, actionItem: i, eventId: a, eventTarget: o, eventStateKey: s, actionListId: c, groupIndex: d, isCarrier: _, origin: f, destination: m, immediate: g, verbose: v, continuous: O, parameterId: b, actionGroups: y, smoothing: E, restingValue: S, pluginInstance: D, pluginDuration: N, instanceDelay: M, skipMotion: V, skipToValue: k} = t.payload
                      , {actionTypeId: H} = i
                      , ee = v1(H)
                      , W = h1(ee, H)
                      , q = Object.keys(m).filter(L=>m[L] != null)
                      , {easing: p} = i.config;
                    return (0,
                    yr.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: f,
                        destination: m,
                        destinationKeys: q,
                        immediate: g,
                        verbose: v,
                        current: null,
                        actionItem: i,
                        actionTypeId: H,
                        eventId: a,
                        eventTarget: o,
                        eventStateKey: s,
                        actionListId: c,
                        groupIndex: d,
                        renderType: ee,
                        isCarrier: _,
                        styleProp: W,
                        continuous: O,
                        parameterId: b,
                        actionGroups: y,
                        smoothing: E,
                        restingValue: S,
                        pluginInstance: D,
                        pluginDuration: N,
                        instanceDelay: M,
                        skipMotion: V,
                        skipToValue: k,
                        customEasingFn: Array.isArray(p) && p.length === 4 ? d1(p) : void 0
                    })
                }
            case c1:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    yr.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case l1:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , i = Object.keys(e)
                      , {length: a} = i;
                    for (let o = 0; o < a; o++) {
                        let s = i[o];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case f1:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: i} = n;
                    for (let a = 0; a < i; a++) {
                        let o = n[a]
                          , s = e[o]
                          , c = s.continuous ? g1 : E1;
                        r = (0,
                        yr.set)(r, o, c(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
        ;
        pi.ixInstances = _1
    }
    );
    var Qg = u(vi=>{
        "use strict";
        Object.defineProperty(vi, "__esModule", {
            value: !0
        });
        vi.ixParameters = void 0;
        var m1 = Ge()
          , {IX2_RAW_DATA_IMPORTED: y1, IX2_SESSION_STOPPED: I1, IX2_PARAMETER_CHANGED: T1} = m1.IX2EngineActionTypes
          , O1 = (e={},t)=>{
            switch (t.type) {
            case y1:
                return t.payload.ixParameters || {};
            case I1:
                return {};
            case T1:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
        ;
        vi.ixParameters = O1
    }
    );
    var $g = u(hi=>{
        "use strict";
        Object.defineProperty(hi, "__esModule", {
            value: !0
        });
        hi.default = void 0;
        var b1 = za()
          , w1 = _f()
          , S1 = Ff()
          , A1 = Xf()
          , R1 = Vt()
          , C1 = Yg()
          , x1 = Qg()
          , {ixElements: N1} = R1.IX2ElementsReducer
          , L1 = (0,
        b1.combineReducers)({
            ixData: w1.ixData,
            ixRequest: S1.ixRequest,
            ixSession: A1.ixSession,
            ixElements: N1,
            ixInstances: C1.ixInstances,
            ixParameters: x1.ixParameters
        });
        hi.default = L1
    }
    );
    var Zg = u((tj,en)=>{
        function q1(e, t) {
            if (e == null)
                return {};
            var r = {}, n = Object.keys(e), i, a;
            for (a = 0; a < n.length; a++)
                i = n[a],
                !(t.indexOf(i) >= 0) && (r[i] = e[i]);
            return r
        }
        en.exports = q1,
        en.exports.__esModule = !0,
        en.exports.default = en.exports
    }
    );
    var eE = u((rj,Jg)=>{
        var P1 = Tt()
          , M1 = Se()
          , D1 = pt()
          , F1 = "[object String]";
        function G1(e) {
            return typeof e == "string" || !M1(e) && D1(e) && P1(e) == F1
        }
        Jg.exports = G1
    }
    );
    var rE = u((nj,tE)=>{
        var X1 = So()
          , U1 = X1("length");
        tE.exports = U1
    }
    );
    var iE = u((ij,nE)=>{
        var V1 = "\\ud800-\\udfff"
          , W1 = "\\u0300-\\u036f"
          , B1 = "\\ufe20-\\ufe2f"
          , k1 = "\\u20d0-\\u20ff"
          , H1 = W1 + B1 + k1
          , j1 = "\\ufe0e\\ufe0f"
          , K1 = "\\u200d"
          , z1 = RegExp("[" + K1 + V1 + H1 + j1 + "]");
        function Y1(e) {
            return z1.test(e)
        }
        nE.exports = Y1
    }
    );
    var pE = u((aj,dE)=>{
        var oE = "\\ud800-\\udfff"
          , Q1 = "\\u0300-\\u036f"
          , $1 = "\\ufe20-\\ufe2f"
          , Z1 = "\\u20d0-\\u20ff"
          , J1 = Q1 + $1 + Z1
          , eF = "\\ufe0e\\ufe0f"
          , tF = "[" + oE + "]"
          , Ko = "[" + J1 + "]"
          , zo = "\\ud83c[\\udffb-\\udfff]"
          , rF = "(?:" + Ko + "|" + zo + ")"
          , sE = "[^" + oE + "]"
          , uE = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , cE = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , nF = "\\u200d"
          , lE = rF + "?"
          , fE = "[" + eF + "]?"
          , iF = "(?:" + nF + "(?:" + [sE, uE, cE].join("|") + ")" + fE + lE + ")*"
          , aF = fE + lE + iF
          , oF = "(?:" + [sE + Ko + "?", Ko, uE, cE, tF].join("|") + ")"
          , aE = RegExp(zo + "(?=" + zo + ")|" + oF + aF, "g");
        function sF(e) {
            for (var t = aE.lastIndex = 0; aE.test(e); )
                ++t;
            return t
        }
        dE.exports = sF
    }
    );
    var hE = u((oj,vE)=>{
        var uF = rE()
          , cF = iE()
          , lF = pE();
        function fF(e) {
            return cF(e) ? lF(e) : uF(e)
        }
        vE.exports = fF
    }
    );
    var EE = u((sj,gE)=>{
        var dF = Kn()
          , pF = zn()
          , vF = Mt()
          , hF = eE()
          , gF = hE()
          , EF = "[object Map]"
          , _F = "[object Set]";
        function mF(e) {
            if (e == null)
                return 0;
            if (vF(e))
                return hF(e) ? gF(e) : e.length;
            var t = pF(e);
            return t == EF || t == _F ? e.size : dF(e).length
        }
        gE.exports = mF
    }
    );
    var mE = u((uj,_E)=>{
        var yF = "Expected a function";
        function IF(e) {
            if (typeof e != "function")
                throw new TypeError(yF);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        _E.exports = IF
    }
    );
    var Yo = u((cj,yE)=>{
        var TF = Ot()
          , OF = function() {
            try {
                var e = TF(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        yE.exports = OF
    }
    );
    var Qo = u((lj,TE)=>{
        var IE = Yo();
        function bF(e, t, r) {
            t == "__proto__" && IE ? IE(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        TE.exports = bF
    }
    );
    var bE = u((fj,OE)=>{
        var wF = Qo()
          , SF = Fn()
          , AF = Object.prototype
          , RF = AF.hasOwnProperty;
        function CF(e, t, r) {
            var n = e[t];
            (!(RF.call(e, t) && SF(n, r)) || r === void 0 && !(t in e)) && wF(e, t, r)
        }
        OE.exports = CF
    }
    );
    var AE = u((dj,SE)=>{
        var xF = bE()
          , NF = Hr()
          , LF = Bn()
          , wE = ot()
          , qF = cr();
        function PF(e, t, r, n) {
            if (!wE(e))
                return e;
            t = NF(t, e);
            for (var i = -1, a = t.length, o = a - 1, s = e; s != null && ++i < a; ) {
                var c = qF(t[i])
                  , d = r;
                if (c === "__proto__" || c === "constructor" || c === "prototype")
                    return e;
                if (i != o) {
                    var _ = s[c];
                    d = n ? n(_, c, s) : void 0,
                    d === void 0 && (d = wE(_) ? _ : LF(t[i + 1]) ? [] : {})
                }
                xF(s, c, d),
                s = s[c]
            }
            return e
        }
        SE.exports = PF
    }
    );
    var CE = u((pj,RE)=>{
        var MF = $n()
          , DF = AE()
          , FF = Hr();
        function GF(e, t, r) {
            for (var n = -1, i = t.length, a = {}; ++n < i; ) {
                var o = t[n]
                  , s = MF(e, o);
                r(s, o) && DF(a, FF(o, e), s)
            }
            return a
        }
        RE.exports = GF
    }
    );
    var NE = u((vj,xE)=>{
        var XF = Vn()
          , UF = Ma()
          , VF = lo()
          , WF = co()
          , BF = Object.getOwnPropertySymbols
          , kF = BF ? function(e) {
            for (var t = []; e; )
                XF(t, VF(e)),
                e = UF(e);
            return t
        }
        : WF;
        xE.exports = kF
    }
    );
    var qE = u((hj,LE)=>{
        function HF(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        LE.exports = HF
    }
    );
    var ME = u((gj,PE)=>{
        var jF = ot()
          , KF = jn()
          , zF = qE()
          , YF = Object.prototype
          , QF = YF.hasOwnProperty;
        function $F(e) {
            if (!jF(e))
                return zF(e);
            var t = KF(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !QF.call(e, n)) || r.push(n);
            return r
        }
        PE.exports = $F
    }
    );
    var FE = u((Ej,DE)=>{
        var ZF = po()
          , JF = ME()
          , e2 = Mt();
        function t2(e) {
            return e2(e) ? ZF(e, !0) : JF(e)
        }
        DE.exports = t2
    }
    );
    var XE = u((_j,GE)=>{
        var r2 = uo()
          , n2 = NE()
          , i2 = FE();
        function a2(e) {
            return r2(e, i2, n2)
        }
        GE.exports = a2
    }
    );
    var VE = u((mj,UE)=>{
        var o2 = wo()
          , s2 = bt()
          , u2 = CE()
          , c2 = XE();
        function l2(e, t) {
            if (e == null)
                return {};
            var r = o2(c2(e), function(n) {
                return [n]
            });
            return t = s2(t),
            u2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        UE.exports = l2
    }
    );
    var BE = u((yj,WE)=>{
        var f2 = bt()
          , d2 = mE()
          , p2 = VE();
        function v2(e, t) {
            return p2(e, d2(f2(t)))
        }
        WE.exports = v2
    }
    );
    var HE = u((Ij,kE)=>{
        var h2 = Kn()
          , g2 = zn()
          , E2 = Xr()
          , _2 = Se()
          , m2 = Mt()
          , y2 = Wn()
          , I2 = jn()
          , T2 = Hn()
          , O2 = "[object Map]"
          , b2 = "[object Set]"
          , w2 = Object.prototype
          , S2 = w2.hasOwnProperty;
        function A2(e) {
            if (e == null)
                return !0;
            if (m2(e) && (_2(e) || typeof e == "string" || typeof e.splice == "function" || y2(e) || T2(e) || E2(e)))
                return !e.length;
            var t = g2(e);
            if (t == O2 || t == b2)
                return !e.size;
            if (I2(e))
                return !h2(e).length;
            for (var r in e)
                if (S2.call(e, r))
                    return !1;
            return !0
        }
        kE.exports = A2
    }
    );
    var KE = u((Tj,jE)=>{
        var R2 = Qo()
          , C2 = Fo()
          , x2 = bt();
        function N2(e, t) {
            var r = {};
            return t = x2(t, 3),
            C2(e, function(n, i, a) {
                R2(r, i, t(n, i, a))
            }),
            r
        }
        jE.exports = N2
    }
    );
    var YE = u((Oj,zE)=>{
        function L2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        zE.exports = L2
    }
    );
    var $E = u((bj,QE)=>{
        var q2 = Jn();
        function P2(e) {
            return typeof e == "function" ? e : q2
        }
        QE.exports = P2
    }
    );
    var JE = u((wj,ZE)=>{
        var M2 = YE()
          , D2 = Go()
          , F2 = $E()
          , G2 = Se();
        function X2(e, t) {
            var r = G2(e) ? M2 : D2;
            return r(e, F2(t))
        }
        ZE.exports = X2
    }
    );
    var t_ = u((Sj,e_)=>{
        var U2 = Ye()
          , V2 = function() {
            return U2.Date.now()
        };
        e_.exports = V2
    }
    );
    var i_ = u((Aj,n_)=>{
        var W2 = ot()
          , $o = t_()
          , r_ = ei()
          , B2 = "Expected a function"
          , k2 = Math.max
          , H2 = Math.min;
        function j2(e, t, r) {
            var n, i, a, o, s, c, d = 0, _ = !1, f = !1, m = !0;
            if (typeof e != "function")
                throw new TypeError(B2);
            t = r_(t) || 0,
            W2(r) && (_ = !!r.leading,
            f = "maxWait"in r,
            a = f ? k2(r_(r.maxWait) || 0, t) : a,
            m = "trailing"in r ? !!r.trailing : m);
            function g(M) {
                var V = n
                  , k = i;
                return n = i = void 0,
                d = M,
                o = e.apply(k, V),
                o
            }
            function v(M) {
                return d = M,
                s = setTimeout(y, t),
                _ ? g(M) : o
            }
            function O(M) {
                var V = M - c
                  , k = M - d
                  , H = t - V;
                return f ? H2(H, a - k) : H
            }
            function b(M) {
                var V = M - c
                  , k = M - d;
                return c === void 0 || V >= t || V < 0 || f && k >= a
            }
            function y() {
                var M = $o();
                if (b(M))
                    return E(M);
                s = setTimeout(y, O(M))
            }
            function E(M) {
                return s = void 0,
                m && n ? g(M) : (n = i = void 0,
                o)
            }
            function S() {
                s !== void 0 && clearTimeout(s),
                d = 0,
                n = c = i = s = void 0
            }
            function D() {
                return s === void 0 ? o : E($o())
            }
            function N() {
                var M = $o()
                  , V = b(M);
                if (n = arguments,
                i = this,
                c = M,
                V) {
                    if (s === void 0)
                        return v(c);
                    if (f)
                        return clearTimeout(s),
                        s = setTimeout(y, t),
                        g(c)
                }
                return s === void 0 && (s = setTimeout(y, t)),
                o
            }
            return N.cancel = S,
            N.flush = D,
            N
        }
        n_.exports = j2
    }
    );
    var o_ = u((Rj,a_)=>{
        var K2 = i_()
          , z2 = ot()
          , Y2 = "Expected a function";
        function Q2(e, t, r) {
            var n = !0
              , i = !0;
            if (typeof e != "function")
                throw new TypeError(Y2);
            return z2(r) && (n = "leading"in r ? !!r.leading : n,
            i = "trailing"in r ? !!r.trailing : i),
            K2(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        a_.exports = Q2
    }
    );
    var gi = u(ae=>{
        "use strict";
        var $2 = nt().default;
        Object.defineProperty(ae, "__esModule", {
            value: !0
        });
        ae.viewportWidthChanged = ae.testFrameRendered = ae.stopRequested = ae.sessionStopped = ae.sessionStarted = ae.sessionInitialized = ae.rawDataImported = ae.previewRequested = ae.playbackRequested = ae.parameterChanged = ae.mediaQueriesDefined = ae.instanceStarted = ae.instanceRemoved = ae.instanceAdded = ae.eventStateChanged = ae.eventListenerAdded = ae.elementStateChanged = ae.clearRequested = ae.animationFrameChanged = ae.actionListPlaybackChanged = void 0;
        var s_ = $2(Pr())
          , u_ = Ge()
          , Z2 = Vt()
          , {IX2_RAW_DATA_IMPORTED: J2, IX2_SESSION_INITIALIZED: eG, IX2_SESSION_STARTED: tG, IX2_SESSION_STOPPED: rG, IX2_PREVIEW_REQUESTED: nG, IX2_PLAYBACK_REQUESTED: iG, IX2_STOP_REQUESTED: aG, IX2_CLEAR_REQUESTED: oG, IX2_EVENT_LISTENER_ADDED: sG, IX2_TEST_FRAME_RENDERED: uG, IX2_EVENT_STATE_CHANGED: cG, IX2_ANIMATION_FRAME_CHANGED: lG, IX2_PARAMETER_CHANGED: fG, IX2_INSTANCE_ADDED: dG, IX2_INSTANCE_STARTED: pG, IX2_INSTANCE_REMOVED: vG, IX2_ELEMENT_STATE_CHANGED: hG, IX2_ACTION_LIST_PLAYBACK_CHANGED: gG, IX2_VIEWPORT_WIDTH_CHANGED: EG, IX2_MEDIA_QUERIES_DEFINED: _G} = u_.IX2EngineActionTypes
          , {reifyState: mG} = Z2.IX2VanillaUtils
          , yG = e=>({
            type: J2,
            payload: (0,
            s_.default)({}, mG(e))
        });
        ae.rawDataImported = yG;
        var IG = ({hasBoundaryNodes: e, reducedMotion: t})=>({
            type: eG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        });
        ae.sessionInitialized = IG;
        var TG = ()=>({
            type: tG
        });
        ae.sessionStarted = TG;
        var OG = ()=>({
            type: rG
        });
        ae.sessionStopped = OG;
        var bG = ({rawData: e, defer: t})=>({
            type: nG,
            payload: {
                defer: t,
                rawData: e
            }
        });
        ae.previewRequested = bG;
        var wG = ({actionTypeId: e=u_.ActionTypeConsts.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: a, testManual: o, verbose: s, rawData: c})=>({
            type: iG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: o,
                eventId: n,
                allowEvents: i,
                immediate: a,
                verbose: s,
                rawData: c
            }
        });
        ae.playbackRequested = wG;
        var SG = e=>({
            type: aG,
            payload: {
                actionListId: e
            }
        });
        ae.stopRequested = SG;
        var AG = ()=>({
            type: oG
        });
        ae.clearRequested = AG;
        var RG = (e,t)=>({
            type: sG,
            payload: {
                target: e,
                listenerParams: t
            }
        });
        ae.eventListenerAdded = RG;
        var CG = (e=1)=>({
            type: uG,
            payload: {
                step: e
            }
        });
        ae.testFrameRendered = CG;
        var xG = (e,t)=>({
            type: cG,
            payload: {
                stateKey: e,
                newState: t
            }
        });
        ae.eventStateChanged = xG;
        var NG = (e,t)=>({
            type: lG,
            payload: {
                now: e,
                parameters: t
            }
        });
        ae.animationFrameChanged = NG;
        var LG = (e,t)=>({
            type: fG,
            payload: {
                key: e,
                value: t
            }
        });
        ae.parameterChanged = LG;
        var qG = e=>({
            type: dG,
            payload: (0,
            s_.default)({}, e)
        });
        ae.instanceAdded = qG;
        var PG = (e,t)=>({
            type: pG,
            payload: {
                instanceId: e,
                time: t
            }
        });
        ae.instanceStarted = PG;
        var MG = e=>({
            type: vG,
            payload: {
                instanceId: e
            }
        });
        ae.instanceRemoved = MG;
        var DG = (e,t,r,n)=>({
            type: hG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        });
        ae.elementStateChanged = DG;
        var FG = ({actionListId: e, isPlaying: t})=>({
            type: gG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        });
        ae.actionListPlaybackChanged = FG;
        var GG = ({width: e, mediaQueries: t})=>({
            type: EG,
            payload: {
                width: e,
                mediaQueries: t
            }
        });
        ae.viewportWidthChanged = GG;
        var XG = ()=>({
            type: _G
        });
        ae.mediaQueriesDefined = XG
    }
    );
    var f_ = u(Re=>{
        "use strict";
        Object.defineProperty(Re, "__esModule", {
            value: !0
        });
        Re.elementContains = $G;
        Re.getChildElements = JG;
        Re.getClosestElement = void 0;
        Re.getProperty = jG;
        Re.getQuerySelector = zG;
        Re.getRefType = rX;
        Re.getSiblingElements = eX;
        Re.getStyle = HG;
        Re.getValidDocument = YG;
        Re.isSiblingNode = ZG;
        Re.matchSelector = KG;
        Re.queryDocument = QG;
        Re.setStyle = kG;
        var UG = Vt()
          , VG = Ge()
          , {ELEMENT_MATCHES: Zo} = UG.IX2BrowserSupport
          , {IX2_ID_DELIMITER: c_, HTML_ELEMENT: WG, PLAIN_OBJECT: BG, WF_PAGE: l_} = VG.IX2EngineConstants;
        function kG(e, t, r) {
            e.style[t] = r
        }
        function HG(e, t) {
            return e.style[t]
        }
        function jG(e, t) {
            return e[t]
        }
        function KG(e) {
            return t=>t[Zo](e)
        }
        function zG({id: e, selector: t}) {
            if (e) {
                let r = e;
                if (e.indexOf(c_) !== -1) {
                    let n = e.split(c_)
                      , i = n[0];
                    if (r = n[1],
                    i !== document.documentElement.getAttribute(l_))
                        return null
                }
                return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
            }
            return t
        }
        function YG(e) {
            return e == null || e === document.documentElement.getAttribute(l_) ? document : null
        }
        function QG(e, t) {
            return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
        }
        function $G(e, t) {
            return e.contains(t)
        }
        function ZG(e, t) {
            return e !== t && e.parentNode === t.parentNode
        }
        function JG(e) {
            let t = [];
            for (let r = 0, {length: n} = e || []; r < n; r++) {
                let {children: i} = e[r]
                  , {length: a} = i;
                if (a)
                    for (let o = 0; o < a; o++)
                        t.push(i[o])
            }
            return t
        }
        function eX(e=[]) {
            let t = []
              , r = [];
            for (let n = 0, {length: i} = e; n < i; n++) {
                let {parentNode: a} = e[n];
                if (!a || !a.children || !a.children.length || r.indexOf(a) !== -1)
                    continue;
                r.push(a);
                let o = a.firstElementChild;
                for (; o != null; )
                    e.indexOf(o) === -1 && t.push(o),
                    o = o.nextElementSibling
            }
            return t
        }
        var tX = Element.prototype.closest ? (e,t)=>document.documentElement.contains(e) ? e.closest(t) : null : (e,t)=>{
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[Zo] && r[Zo](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
        ;
        Re.getClosestElement = tX;
        function rX(e) {
            return e != null && typeof e == "object" ? e instanceof Element ? WG : BG : null
        }
    }
    );
    var Jo = u((Nj,p_)=>{
        var nX = ot()
          , d_ = Object.create
          , iX = function() {
            function e() {}
            return function(t) {
                if (!nX(t))
                    return {};
                if (d_)
                    return d_(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        p_.exports = iX
    }
    );
    var Ei = u((Lj,v_)=>{
        function aX() {}
        v_.exports = aX
    }
    );
    var mi = u((qj,h_)=>{
        var oX = Jo()
          , sX = Ei();
        function _i(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        _i.prototype = oX(sX.prototype);
        _i.prototype.constructor = _i;
        h_.exports = _i
    }
    );
    var m_ = u((Pj,__)=>{
        var g_ = $t()
          , uX = Xr()
          , cX = Se()
          , E_ = g_ ? g_.isConcatSpreadable : void 0;
        function lX(e) {
            return cX(e) || uX(e) || !!(E_ && e && e[E_])
        }
        __.exports = lX
    }
    );
    var T_ = u((Mj,I_)=>{
        var fX = Vn()
          , dX = m_();
        function y_(e, t, r, n, i) {
            var a = -1
              , o = e.length;
            for (r || (r = dX),
            i || (i = []); ++a < o; ) {
                var s = e[a];
                t > 0 && r(s) ? t > 1 ? y_(s, t - 1, r, n, i) : fX(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        I_.exports = y_
    }
    );
    var b_ = u((Dj,O_)=>{
        var pX = T_();
        function vX(e) {
            var t = e == null ? 0 : e.length;
            return t ? pX(e, 1) : []
        }
        O_.exports = vX
    }
    );
    var S_ = u((Fj,w_)=>{
        function hX(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        w_.exports = hX
    }
    );
    var C_ = u((Gj,R_)=>{
        var gX = S_()
          , A_ = Math.max;
        function EX(e, t, r) {
            return t = A_(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, i = -1, a = A_(n.length - t, 0), o = Array(a); ++i < a; )
                    o[i] = n[t + i];
                i = -1;
                for (var s = Array(t + 1); ++i < t; )
                    s[i] = n[i];
                return s[t] = r(o),
                gX(e, this, s)
            }
        }
        R_.exports = EX
    }
    );
    var N_ = u((Xj,x_)=>{
        function _X(e) {
            return function() {
                return e
            }
        }
        x_.exports = _X
    }
    );
    var P_ = u((Uj,q_)=>{
        var mX = N_()
          , L_ = Yo()
          , yX = Jn()
          , IX = L_ ? function(e, t) {
            return L_(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: mX(t),
                writable: !0
            })
        }
        : yX;
        q_.exports = IX
    }
    );
    var D_ = u((Vj,M_)=>{
        var TX = 800
          , OX = 16
          , bX = Date.now;
        function wX(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = bX()
                  , i = OX - (n - r);
                if (r = n,
                i > 0) {
                    if (++t >= TX)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        M_.exports = wX
    }
    );
    var G_ = u((Wj,F_)=>{
        var SX = P_()
          , AX = D_()
          , RX = AX(SX);
        F_.exports = RX
    }
    );
    var U_ = u((Bj,X_)=>{
        var CX = b_()
          , xX = C_()
          , NX = G_();
        function LX(e) {
            return NX(xX(e, void 0, CX), e + "")
        }
        X_.exports = LX
    }
    );
    var B_ = u((kj,W_)=>{
        var V_ = vo()
          , qX = V_ && new V_;
        W_.exports = qX
    }
    );
    var H_ = u((Hj,k_)=>{
        function PX() {}
        k_.exports = PX
    }
    );
    var es = u((jj,K_)=>{
        var j_ = B_()
          , MX = H_()
          , DX = j_ ? function(e) {
            return j_.get(e)
        }
        : MX;
        K_.exports = DX
    }
    );
    var Y_ = u((Kj,z_)=>{
        var FX = {};
        z_.exports = FX
    }
    );
    var ts = u((zj,$_)=>{
        var Q_ = Y_()
          , GX = Object.prototype
          , XX = GX.hasOwnProperty;
        function UX(e) {
            for (var t = e.name + "", r = Q_[t], n = XX.call(Q_, t) ? r.length : 0; n--; ) {
                var i = r[n]
                  , a = i.func;
                if (a == null || a == e)
                    return i.name
            }
            return t
        }
        $_.exports = UX
    }
    );
    var Ii = u((Yj,Z_)=>{
        var VX = Jo()
          , WX = Ei()
          , BX = 4294967295;
        function yi(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = BX,
            this.__views__ = []
        }
        yi.prototype = VX(WX.prototype);
        yi.prototype.constructor = yi;
        Z_.exports = yi
    }
    );
    var em = u((Qj,J_)=>{
        function kX(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        J_.exports = kX
    }
    );
    var rm = u(($j,tm)=>{
        var HX = Ii()
          , jX = mi()
          , KX = em();
        function zX(e) {
            if (e instanceof HX)
                return e.clone();
            var t = new jX(e.__wrapped__,e.__chain__);
            return t.__actions__ = KX(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        tm.exports = zX
    }
    );
    var am = u((Zj,im)=>{
        var YX = Ii()
          , nm = mi()
          , QX = Ei()
          , $X = Se()
          , ZX = pt()
          , JX = rm()
          , eU = Object.prototype
          , tU = eU.hasOwnProperty;
        function Ti(e) {
            if (ZX(e) && !$X(e) && !(e instanceof YX)) {
                if (e instanceof nm)
                    return e;
                if (tU.call(e, "__wrapped__"))
                    return JX(e)
            }
            return new nm(e)
        }
        Ti.prototype = QX.prototype;
        Ti.prototype.constructor = Ti;
        im.exports = Ti
    }
    );
    var sm = u((Jj,om)=>{
        var rU = Ii()
          , nU = es()
          , iU = ts()
          , aU = am();
        function oU(e) {
            var t = iU(e)
              , r = aU[t];
            if (typeof r != "function" || !(t in rU.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = nU(r);
            return !!n && e === n[0]
        }
        om.exports = oU
    }
    );
    var fm = u((eK,lm)=>{
        var um = mi()
          , sU = U_()
          , uU = es()
          , rs = ts()
          , cU = Se()
          , cm = sm()
          , lU = "Expected a function"
          , fU = 8
          , dU = 32
          , pU = 128
          , vU = 256;
        function hU(e) {
            return sU(function(t) {
                var r = t.length
                  , n = r
                  , i = um.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var a = t[n];
                    if (typeof a != "function")
                        throw new TypeError(lU);
                    if (i && !o && rs(a) == "wrapper")
                        var o = new um([],!0)
                }
                for (n = o ? n : r; ++n < r; ) {
                    a = t[n];
                    var s = rs(a)
                      , c = s == "wrapper" ? uU(a) : void 0;
                    c && cm(c[0]) && c[1] == (pU | fU | dU | vU) && !c[4].length && c[9] == 1 ? o = o[rs(c[0])].apply(o, c[3]) : o = a.length == 1 && cm(a) ? o[s]() : o.thru(a)
                }
                return function() {
                    var d = arguments
                      , _ = d[0];
                    if (o && d.length == 1 && cU(_))
                        return o.plant(_).value();
                    for (var f = 0, m = r ? t[f].apply(this, d) : _; ++f < r; )
                        m = t[f].call(this, m);
                    return m
                }
            })
        }
        lm.exports = hU
    }
    );
    var pm = u((tK,dm)=>{
        var gU = fm()
          , EU = gU();
        dm.exports = EU
    }
    );
    var hm = u((rK,vm)=>{
        function _U(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        vm.exports = _U
    }
    );
    var Em = u((nK,gm)=>{
        var mU = hm()
          , ns = ei();
        function yU(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = ns(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = ns(t),
            t = t === t ? t : 0),
            mU(ns(e), t, r)
        }
        gm.exports = yU
    }
    );
    var Mm = u(Ai=>{
        "use strict";
        var Si = nt().default;
        Object.defineProperty(Ai, "__esModule", {
            value: !0
        });
        Ai.default = void 0;
        var We = Si(Pr())
          , IU = Si(pm())
          , TU = Si(Zn())
          , OU = Si(Em())
          , Wt = Ge()
          , is = us()
          , Oi = gi()
          , bU = Vt()
          , {MOUSE_CLICK: wU, MOUSE_SECOND_CLICK: SU, MOUSE_DOWN: AU, MOUSE_UP: RU, MOUSE_OVER: CU, MOUSE_OUT: xU, DROPDOWN_CLOSE: NU, DROPDOWN_OPEN: LU, SLIDER_ACTIVE: qU, SLIDER_INACTIVE: PU, TAB_ACTIVE: MU, TAB_INACTIVE: DU, NAVBAR_CLOSE: FU, NAVBAR_OPEN: GU, MOUSE_MOVE: XU, PAGE_SCROLL_DOWN: Sm, SCROLL_INTO_VIEW: Am, SCROLL_OUT_OF_VIEW: UU, PAGE_SCROLL_UP: VU, SCROLLING_IN_VIEW: WU, PAGE_FINISH: Rm, ECOMMERCE_CART_CLOSE: BU, ECOMMERCE_CART_OPEN: kU, PAGE_START: Cm, PAGE_SCROLL: HU} = Wt.EventTypeConsts
          , as = "COMPONENT_ACTIVE"
          , xm = "COMPONENT_INACTIVE"
          , {COLON_DELIMITER: _m} = Wt.IX2EngineConstants
          , {getNamespacedParameterId: mm} = bU.IX2VanillaUtils
          , Nm = e=>t=>typeof t == "object" && e(t) ? !0 : t
          , rn = Nm(({element: e, nativeEvent: t})=>e === t.target)
          , jU = Nm(({element: e, nativeEvent: t})=>e.contains(t.target))
          , lt = (0,
        IU.default)([rn, jU])
          , Lm = (e,t)=>{
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , i = n[t];
                if (i && !zU[i.eventTypeId])
                    return i
            }
            return null
        }
          , KU = ({store: e, event: t})=>{
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!Lm(e, n)
        }
          , Ue = ({store: e, event: t, element: r, eventStateKey: n},i)=>{
            let {action: a, id: o} = t
              , {actionListId: s, autoStopEventId: c} = a.config
              , d = Lm(e, c);
            return d && (0,
            is.stopActionGroup)({
                store: e,
                eventId: c,
                eventTarget: r,
                eventStateKey: c + _m + n.split(_m)[1],
                actionListId: (0,
                TU.default)(d, "action.config.actionListId")
            }),
            (0,
            is.stopActionGroup)({
                store: e,
                eventId: o,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            (0,
            is.startActionGroup)({
                store: e,
                eventId: o,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            i
        }
          , Qe = (e,t)=>(r,n)=>e(r, n) === !0 ? t(r, n) : n
          , nn = {
            handler: Qe(lt, Ue)
        }
          , qm = (0,
        We.default)({}, nn, {
            types: [as, xm].join(" ")
        })
          , os = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }]
          , ym = "mouseover mouseout"
          , ss = {
            types: os
        }
          , zU = {
            PAGE_START: Cm,
            PAGE_FINISH: Rm
        }
          , tn = (()=>{
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return ()=>({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                OU.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )()
          , YU = (e,t)=>!(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)
          , QU = ({element: e, nativeEvent: t})=>{
            let {type: r, target: n, relatedTarget: i} = t
              , a = e.contains(n);
            if (r === "mouseover" && a)
                return !0;
            let o = e.contains(i);
            return !!(r === "mouseout" && a && o)
        }
          , $U = e=>{
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: i} = tn()
              , a = r.scrollOffsetValue
              , c = r.scrollOffsetUnit === "PX" ? a : i * (a || 0) / 100;
            return YU(t.getBoundingClientRect(), {
                left: 0,
                top: c,
                right: n,
                bottom: i - c
            })
        }
          , Pm = e=>(t,r)=>{
            let {type: n} = t.nativeEvent
              , i = [as, xm].indexOf(n) !== -1 ? n === as : r.isActive
              , a = (0,
            We.default)({}, r, {
                isActive: i
            });
            return (!r || a.isActive !== r.isActive) && e(t, a) || a
        }
          , Im = e=>(t,r)=>{
            let n = {
                elementHovered: QU(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
          , ZU = e=>(t,r)=>{
            let n = (0,
            We.default)({}, r, {
                elementVisible: $U(t)
            });
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
          , Tm = e=>(t,r={})=>{
            let {stiffScrollTop: n, scrollHeight: i, innerHeight: a} = tn()
              , {event: {config: o, eventTypeId: s}} = t
              , {scrollOffsetValue: c, scrollOffsetUnit: d} = o
              , _ = d === "PX"
              , f = i - a
              , m = Number((n / f).toFixed(2));
            if (r && r.percentTop === m)
                return r;
            let g = (_ ? c : a * (c || 0) / 100) / f, v, O, b = 0;
            r && (v = m > r.percentTop,
            O = r.scrollingDown !== v,
            b = O ? m : r.anchorTop);
            let y = s === Sm ? m >= b + g : m <= b - g
              , E = (0,
            We.default)({}, r, {
                percentTop: m,
                inBounds: y,
                anchorTop: b,
                scrollingDown: v
            });
            return r && y && (O || E.inBounds !== r.inBounds) && e(t, E) || E
        }
          , JU = (e,t)=>e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom
          , eV = e=>(t,r)=>{
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
          , tV = e=>(t,r)=>{
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
          , Om = e=>(t,r={
            clickCount: 0
        })=>{
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
          , bi = (e=!0)=>(0,
        We.default)({}, qm, {
            handler: Qe(e ? lt : rn, Pm((t,r)=>r.isActive ? nn.handler(t, r) : r))
        })
          , wi = (e=!0)=>(0,
        We.default)({}, qm, {
            handler: Qe(e ? lt : rn, Pm((t,r)=>r.isActive ? r : nn.handler(t, r)))
        })
          , bm = (0,
        We.default)({}, ss, {
            handler: ZU((e,t)=>{
                let {elementVisible: r} = t
                  , {event: n, store: i} = e
                  , {ixData: a} = i.getState()
                  , {events: o} = a;
                return !o[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Am === r ? (Ue(e),
                (0,
                We.default)({}, t, {
                    triggered: !0
                })) : t
            }
            )
        })
          , wm = .05
          , rV = {
            [qU]: bi(),
            [PU]: wi(),
            [LU]: bi(),
            [NU]: wi(),
            [GU]: bi(!1),
            [FU]: wi(!1),
            [MU]: bi(),
            [DU]: wi(),
            [kU]: {
                types: "ecommerce-cart-open",
                handler: Qe(lt, Ue)
            },
            [BU]: {
                types: "ecommerce-cart-close",
                handler: Qe(lt, Ue)
            },
            [wU]: {
                types: "click",
                handler: Qe(lt, Om((e,{clickCount: t})=>{
                    KU(e) ? t === 1 && Ue(e) : Ue(e)
                }
                ))
            },
            [SU]: {
                types: "click",
                handler: Qe(lt, Om((e,{clickCount: t})=>{
                    t === 2 && Ue(e)
                }
                ))
            },
            [AU]: (0,
            We.default)({}, nn, {
                types: "mousedown"
            }),
            [RU]: (0,
            We.default)({}, nn, {
                types: "mouseup"
            }),
            [CU]: {
                types: ym,
                handler: Qe(lt, Im((e,t)=>{
                    t.elementHovered && Ue(e)
                }
                ))
            },
            [xU]: {
                types: ym,
                handler: Qe(lt, Im((e,t)=>{
                    t.elementHovered || Ue(e)
                }
                ))
            },
            [XU]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i},a={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                })=>{
                    let {basedOn: o, selectedAxis: s, continuousParameterGroupId: c, reverse: d, restingState: _=0} = r
                      , {clientX: f=a.clientX, clientY: m=a.clientY, pageX: g=a.pageX, pageY: v=a.pageY} = n
                      , O = s === "X_AXIS"
                      , b = n.type === "mouseout"
                      , y = _ / 100
                      , E = c
                      , S = !1;
                    switch (o) {
                    case Wt.EventBasedOn.VIEWPORT:
                        {
                            y = O ? Math.min(f, window.innerWidth) / window.innerWidth : Math.min(m, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case Wt.EventBasedOn.PAGE:
                        {
                            let {scrollLeft: D, scrollTop: N, scrollWidth: M, scrollHeight: V} = tn();
                            y = O ? Math.min(D + g, M) / M : Math.min(N + v, V) / V;
                            break
                        }
                    case Wt.EventBasedOn.ELEMENT:
                    default:
                        {
                            E = mm(i, c);
                            let D = n.type.indexOf("mouse") === 0;
                            if (D && lt({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let N = t.getBoundingClientRect()
                              , {left: M, top: V, width: k, height: H} = N;
                            if (!D && !JU({
                                left: f,
                                top: m
                            }, N))
                                break;
                            S = !0,
                            y = O ? (f - M) / k : (m - V) / H;
                            break
                        }
                    }
                    return b && (y > 1 - wm || y < wm) && (y = Math.round(y)),
                    (o !== Wt.EventBasedOn.ELEMENT || S || S !== a.elementHovered) && (y = d ? 1 - y : y,
                    e.dispatch((0,
                    Oi.parameterChanged)(E, y))),
                    {
                        elementHovered: S,
                        clientX: f,
                        clientY: m,
                        pageX: g,
                        pageY: v
                    }
                }
            },
            [HU]: {
                types: os,
                handler: ({store: e, eventConfig: t})=>{
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: i, scrollHeight: a, clientHeight: o} = tn()
                      , s = i / (a - o);
                    s = n ? 1 - s : s,
                    e.dispatch((0,
                    Oi.parameterChanged)(r, s))
                }
            },
            [WU]: {
                types: os,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n},i={
                    scrollPercent: 0
                })=>{
                    let {scrollLeft: a, scrollTop: o, scrollWidth: s, scrollHeight: c, clientHeight: d} = tn()
                      , {basedOn: _, selectedAxis: f, continuousParameterGroupId: m, startsEntering: g, startsExiting: v, addEndOffset: O, addStartOffset: b, addOffsetValue: y=0, endOffsetValue: E=0} = r
                      , S = f === "X_AXIS";
                    if (_ === Wt.EventBasedOn.VIEWPORT) {
                        let D = S ? a / s : o / c;
                        return D !== i.scrollPercent && t.dispatch((0,
                        Oi.parameterChanged)(m, D)),
                        {
                            scrollPercent: D
                        }
                    } else {
                        let D = mm(n, m)
                          , N = e.getBoundingClientRect()
                          , M = (b ? y : 0) / 100
                          , V = (O ? E : 0) / 100;
                        M = g ? M : 1 - M,
                        V = v ? V : 1 - V;
                        let k = N.top + Math.min(N.height * M, d)
                          , ee = N.top + N.height * V - k
                          , W = Math.min(d + ee, c)
                          , p = Math.min(Math.max(0, d - k), W) / W;
                        return p !== i.scrollPercent && t.dispatch((0,
                        Oi.parameterChanged)(D, p)),
                        {
                            scrollPercent: p
                        }
                    }
                }
            },
            [Am]: bm,
            [UU]: bm,
            [Sm]: (0,
            We.default)({}, ss, {
                handler: Tm((e,t)=>{
                    t.scrollingDown && Ue(e)
                }
                )
            }),
            [VU]: (0,
            We.default)({}, ss, {
                handler: Tm((e,t)=>{
                    t.scrollingDown || Ue(e)
                }
                )
            }),
            [Rm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Qe(rn, eV(Ue))
            },
            [Cm]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Qe(rn, tV(Ue))
            }
        };
        Ai.default = rV
    }
    );
    var us = u(Rt=>{
        "use strict";
        var Ze = nt().default
          , nV = Kt().default;
        Object.defineProperty(Rt, "__esModule", {
            value: !0
        });
        Rt.observeRequests = LV;
        Rt.startActionGroup = hs;
        Rt.startEngine = Ni;
        Rt.stopActionGroup = vs;
        Rt.stopAllActionGroups = km;
        Rt.stopEngine = Li;
        var iV = Ze(Pr())
          , aV = Ze(Zg())
          , oV = Ze(xo())
          , At = Ze(Zn())
          , sV = Ze(EE())
          , uV = Ze(BE())
          , cV = Ze(HE())
          , lV = Ze(KE())
          , an = Ze(JE())
          , fV = Ze(o_())
          , $e = Ge()
          , Gm = Vt()
          , _e = gi()
          , Te = nV(f_())
          , dV = Ze(Mm())
          , pV = ["store", "computedStyle"]
          , vV = Object.keys($e.QuickEffectIds)
          , cs = e=>vV.includes(e)
          , {COLON_DELIMITER: ls, BOUNDARY_SELECTOR: Ri, HTML_ELEMENT: Xm, RENDER_GENERAL: hV, W_MOD_IX: Dm} = $e.IX2EngineConstants
          , {getAffectedElements: Ci, getElementId: gV, getDestinationValues: fs, observeStore: Bt, getInstanceId: EV, renderHTMLElement: _V, clearAllStyles: Um, getMaxDurationItemIndex: mV, getComputedStyle: yV, getInstanceOrigin: IV, reduceListToGroup: TV, shouldNamespaceEventParameter: OV, getNamespacedParameterId: bV, shouldAllowMediaQuery: xi, cleanupHTMLElement: wV, stringifyTarget: SV, mediaQueriesEqual: AV, shallowEqual: RV} = Gm.IX2VanillaUtils
          , {isPluginType: ds, createPluginInstance: ps, getPluginDuration: CV} = Gm.IX2VanillaPlugins
          , Fm = navigator.userAgent
          , xV = Fm.match(/iPad/i) || Fm.match(/iPhone/)
          , NV = 12;
        function LV(e) {
            Bt({
                store: e,
                select: ({ixRequest: t})=>t.preview,
                onChange: MV
            }),
            Bt({
                store: e,
                select: ({ixRequest: t})=>t.playback,
                onChange: DV
            }),
            Bt({
                store: e,
                select: ({ixRequest: t})=>t.stop,
                onChange: FV
            }),
            Bt({
                store: e,
                select: ({ixRequest: t})=>t.clear,
                onChange: GV
            })
        }
        function qV(e) {
            Bt({
                store: e,
                select: ({ixSession: t})=>t.mediaQueryKey,
                onChange: ()=>{
                    Li(e),
                    Um({
                        store: e,
                        elementApi: Te
                    }),
                    Ni({
                        store: e,
                        allowEvents: !0
                    }),
                    Vm()
                }
            })
        }
        function PV(e, t) {
            let r = Bt({
                store: e,
                select: ({ixSession: n})=>n.tick,
                onChange: n=>{
                    t(n),
                    r()
                }
            })
        }
        function MV({rawData: e, defer: t}, r) {
            let n = ()=>{
                Ni({
                    store: r,
                    rawData: e,
                    allowEvents: !0
                }),
                Vm()
            }
            ;
            t ? setTimeout(n, 0) : n()
        }
        function Vm() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
        }
        function DV(e, t) {
            let {actionTypeId: r, actionListId: n, actionItemId: i, eventId: a, allowEvents: o, immediate: s, testManual: c, verbose: d=!0} = e
              , {rawData: _} = e;
            if (n && i && _ && s) {
                let f = _.actionLists[n];
                f && (_ = TV({
                    actionList: f,
                    actionItemId: i,
                    rawData: _
                }))
            }
            if (Ni({
                store: t,
                rawData: _,
                allowEvents: o,
                testManual: c
            }),
            n && r === $e.ActionTypeConsts.GENERAL_START_ACTION || cs(r)) {
                vs({
                    store: t,
                    actionListId: n
                }),
                Bm({
                    store: t,
                    actionListId: n,
                    eventId: a
                });
                let f = hs({
                    store: t,
                    eventId: a,
                    actionListId: n,
                    immediate: s,
                    verbose: d
                });
                d && f && t.dispatch((0,
                _e.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !s
                }))
            }
        }
        function FV({actionListId: e}, t) {
            e ? vs({
                store: t,
                actionListId: e
            }) : km({
                store: t
            }),
            Li(t)
        }
        function GV(e, t) {
            Li(t),
            Um({
                store: t,
                elementApi: Te
            })
        }
        function Ni({store: e, rawData: t, allowEvents: r, testManual: n}) {
            let {ixSession: i} = e.getState();
            t && e.dispatch((0,
            _e.rawDataImported)(t)),
            i.active || (e.dispatch((0,
            _e.sessionInitialized)({
                hasBoundaryNodes: !!document.querySelector(Ri),
                reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
            })),
            r && (kV(e),
            XV(),
            e.getState().ixSession.hasDefinedMediaQueries && qV(e)),
            e.dispatch((0,
            _e.sessionStarted)()),
            UV(e, n))
        }
        function XV() {
            let {documentElement: e} = document;
            e.className.indexOf(Dm) === -1 && (e.className += ` ${Dm}`)
        }
        function UV(e, t) {
            let r = n=>{
                let {ixSession: i, ixParameters: a} = e.getState();
                i.active && (e.dispatch((0,
                _e.animationFrameChanged)(n, a)),
                t ? PV(e, r) : requestAnimationFrame(r))
            }
            ;
            r(window.performance.now())
        }
        function Li(e) {
            let {ixSession: t} = e.getState();
            if (t.active) {
                let {eventListeners: r} = t;
                r.forEach(VV),
                e.dispatch((0,
                _e.sessionStopped)())
            }
        }
        function VV({target: e, listenerParams: t}) {
            e.removeEventListener.apply(e, t)
        }
        function WV({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: a, parameterGroup: o, smoothing: s, restingValue: c}) {
            let {ixData: d, ixSession: _} = e.getState()
              , {events: f} = d
              , m = f[n]
              , {eventTypeId: g} = m
              , v = {}
              , O = {}
              , b = []
              , {continuousActionGroups: y} = o
              , {id: E} = o;
            OV(g, i) && (E = bV(t, E));
            let S = _.hasBoundaryNodes && r ? Te.getClosestElement(r, Ri) : null;
            y.forEach(D=>{
                let {keyframe: N, actionItems: M} = D;
                M.forEach(V=>{
                    let {actionTypeId: k} = V
                      , {target: H} = V.config;
                    if (!H)
                        return;
                    let ee = H.boundaryMode ? S : null
                      , W = SV(H) + ls + k;
                    if (O[W] = BV(O[W], N, V),
                    !v[W]) {
                        v[W] = !0;
                        let {config: q} = V;
                        Ci({
                            config: q,
                            event: m,
                            eventTarget: r,
                            elementRoot: ee,
                            elementApi: Te
                        }).forEach(p=>{
                            b.push({
                                element: p,
                                key: W
                            })
                        }
                        )
                    }
                }
                )
            }
            ),
            b.forEach(({element: D, key: N})=>{
                let M = O[N]
                  , V = (0,
                At.default)(M, "[0].actionItems[0]", {})
                  , {actionTypeId: k} = V
                  , H = ds(k) ? ps(k)(D, V) : null
                  , ee = fs({
                    element: D,
                    actionItem: V,
                    elementApi: Te
                }, H);
                gs({
                    store: e,
                    element: D,
                    eventId: n,
                    actionListId: a,
                    actionItem: V,
                    destination: ee,
                    continuous: !0,
                    parameterId: E,
                    actionGroups: M,
                    smoothing: s,
                    restingValue: c,
                    pluginInstance: H
                })
            }
            )
        }
        function BV(e=[], t, r) {
            let n = [...e], i;
            return n.some((a,o)=>a.keyframe === t ? (i = o,
            !0) : !1),
            i == null && (i = n.length,
            n.push({
                keyframe: t,
                actionItems: []
            })),
            n[i].actionItems.push(r),
            n
        }
        function kV(e) {
            let {ixData: t} = e.getState()
              , {eventTypeMap: r} = t;
            Wm(e),
            (0,
            an.default)(r, (i,a)=>{
                let o = dV.default[a];
                if (!o) {
                    console.warn(`IX2 event type not configured: ${a}`);
                    return
                }
                QV({
                    logic: o,
                    store: e,
                    events: i
                })
            }
            );
            let {ixSession: n} = e.getState();
            n.eventListeners.length && jV(e)
        }
        var HV = ["resize", "orientationchange"];
        function jV(e) {
            let t = ()=>{
                Wm(e)
            }
            ;
            HV.forEach(r=>{
                window.addEventListener(r, t),
                e.dispatch((0,
                _e.eventListenerAdded)(window, [r, t]))
            }
            ),
            t()
        }
        function Wm(e) {
            let {ixSession: t, ixData: r} = e.getState()
              , n = window.innerWidth;
            if (n !== t.viewportWidth) {
                let {mediaQueries: i} = r;
                e.dispatch((0,
                _e.viewportWidthChanged)({
                    width: n,
                    mediaQueries: i
                }))
            }
        }
        var KV = (e,t)=>(0,
        uV.default)((0,
        lV.default)(e, t), cV.default)
          , zV = (e,t)=>{
            (0,
            an.default)(e, (r,n)=>{
                r.forEach((i,a)=>{
                    let o = n + ls + a;
                    t(i, n, o)
                }
                )
            }
            )
        }
          , YV = e=>{
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Ci({
                config: t,
                elementApi: Te
            })
        }
        ;
        function QV({logic: e, store: t, events: r}) {
            $V(r);
            let {types: n, handler: i} = e
              , {ixData: a} = t.getState()
              , {actionLists: o} = a
              , s = KV(r, YV);
            if (!(0,
            sV.default)(s))
                return;
            (0,
            an.default)(s, (f,m)=>{
                let g = r[m]
                  , {action: v, id: O, mediaQueries: b=a.mediaQueryKeys} = g
                  , {actionListId: y} = v.config;
                AV(b, a.mediaQueryKeys) || t.dispatch((0,
                _e.mediaQueriesDefined)()),
                v.actionTypeId === $e.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(g.config) ? g.config : [g.config]).forEach(S=>{
                    let {continuousParameterGroupId: D} = S
                      , N = (0,
                    At.default)(o, `${y}.continuousParameterGroups`, [])
                      , M = (0,
                    oV.default)(N, ({id: H})=>H === D)
                      , V = (S.smoothing || 0) / 100
                      , k = (S.restingState || 0) / 100;
                    M && f.forEach((H,ee)=>{
                        let W = O + ls + ee;
                        WV({
                            store: t,
                            eventStateKey: W,
                            eventTarget: H,
                            eventId: O,
                            eventConfig: S,
                            actionListId: y,
                            parameterGroup: M,
                            smoothing: V,
                            restingValue: k
                        })
                    }
                    )
                }
                ),
                (v.actionTypeId === $e.ActionTypeConsts.GENERAL_START_ACTION || cs(v.actionTypeId)) && Bm({
                    store: t,
                    actionListId: y,
                    eventId: O
                })
            }
            );
            let c = f=>{
                let {ixSession: m} = t.getState();
                zV(s, (g,v,O)=>{
                    let b = r[v]
                      , y = m.eventState[O]
                      , {action: E, mediaQueries: S=a.mediaQueryKeys} = b;
                    if (!xi(S, m.mediaQueryKey))
                        return;
                    let D = (N={})=>{
                        let M = i({
                            store: t,
                            element: g,
                            event: b,
                            eventConfig: N,
                            nativeEvent: f,
                            eventStateKey: O
                        }, y);
                        RV(M, y) || t.dispatch((0,
                        _e.eventStateChanged)(O, M))
                    }
                    ;
                    E.actionTypeId === $e.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(b.config) ? b.config : [b.config]).forEach(D) : D()
                }
                )
            }
              , d = (0,
            fV.default)(c, NV)
              , _ = ({target: f=document, types: m, throttle: g})=>{
                m.split(" ").filter(Boolean).forEach(v=>{
                    let O = g ? d : c;
                    f.addEventListener(v, O),
                    t.dispatch((0,
                    _e.eventListenerAdded)(f, [v, O]))
                }
                )
            }
            ;
            Array.isArray(n) ? n.forEach(_) : typeof n == "string" && _(e)
        }
        function $V(e) {
            if (!xV)
                return;
            let t = {}
              , r = "";
            for (let n in e) {
                let {eventTypeId: i, target: a} = e[n]
                  , o = Te.getQuerySelector(a);
                t[o] || (i === $e.EventTypeConsts.MOUSE_CLICK || i === $e.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[o] = !0,
                r += o + "{cursor: pointer;touch-action: manipulation;}")
            }
            if (r) {
                let n = document.createElement("style");
                n.textContent = r,
                document.body.appendChild(n)
            }
        }
        function Bm({store: e, actionListId: t, eventId: r}) {
            let {ixData: n, ixSession: i} = e.getState()
              , {actionLists: a, events: o} = n
              , s = o[r]
              , c = a[t];
            if (c && c.useFirstGroupAsInitialState) {
                let d = (0,
                At.default)(c, "actionItemGroups[0].actionItems", [])
                  , _ = (0,
                At.default)(s, "mediaQueries", n.mediaQueryKeys);
                if (!xi(_, i.mediaQueryKey))
                    return;
                d.forEach(f=>{
                    var m;
                    let {config: g, actionTypeId: v} = f
                      , O = (g == null || (m = g.target) === null || m === void 0 ? void 0 : m.useEventTarget) === !0 ? {
                        target: s.target,
                        targets: s.targets
                    } : g
                      , b = Ci({
                        config: O,
                        event: s,
                        elementApi: Te
                    })
                      , y = ds(v);
                    b.forEach(E=>{
                        let S = y ? ps(v)(E, f) : null;
                        gs({
                            destination: fs({
                                element: E,
                                actionItem: f,
                                elementApi: Te
                            }, S),
                            immediate: !0,
                            store: e,
                            element: E,
                            eventId: r,
                            actionItem: f,
                            actionListId: t,
                            pluginInstance: S
                        })
                    }
                    )
                }
                )
            }
        }
        function km({store: e}) {
            let {ixInstances: t} = e.getState();
            (0,
            an.default)(t, r=>{
                if (!r.continuous) {
                    let {actionListId: n, verbose: i} = r;
                    Es(r, e),
                    i && e.dispatch((0,
                    _e.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function vs({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
            let {ixInstances: a, ixSession: o} = e.getState()
              , s = o.hasBoundaryNodes && r ? Te.getClosestElement(r, Ri) : null;
            (0,
            an.default)(a, c=>{
                let d = (0,
                At.default)(c, "actionItem.config.target.boundaryMode")
                  , _ = n ? c.eventStateKey === n : !0;
                if (c.actionListId === i && c.eventId === t && _) {
                    if (s && d && !Te.elementContains(s, c.element))
                        return;
                    Es(c, e),
                    c.verbose && e.dispatch((0,
                    _e.actionListPlaybackChanged)({
                        actionListId: i,
                        isPlaying: !1
                    }))
                }
            }
            )
        }
        function hs({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: a=0, immediate: o, verbose: s}) {
            var c;
            let {ixData: d, ixSession: _} = e.getState()
              , {events: f} = d
              , m = f[t] || {}
              , {mediaQueries: g=d.mediaQueryKeys} = m
              , v = (0,
            At.default)(d, `actionLists.${i}`, {})
              , {actionItemGroups: O, useFirstGroupAsInitialState: b} = v;
            if (!O || !O.length)
                return !1;
            a >= O.length && (0,
            At.default)(m, "config.loop") && (a = 0),
            a === 0 && b && a++;
            let E = (a === 0 || a === 1 && b) && cs((c = m.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? m.config.delay : void 0
              , S = (0,
            At.default)(O, [a, "actionItems"], []);
            if (!S.length || !xi(g, _.mediaQueryKey))
                return !1;
            let D = _.hasBoundaryNodes && r ? Te.getClosestElement(r, Ri) : null
              , N = mV(S)
              , M = !1;
            return S.forEach((V,k)=>{
                let {config: H, actionTypeId: ee} = V
                  , W = ds(ee)
                  , {target: q} = H;
                if (!q)
                    return;
                let p = q.boundaryMode ? D : null;
                Ci({
                    config: H,
                    event: m,
                    eventTarget: r,
                    elementRoot: p,
                    elementApi: Te
                }).forEach((R,F)=>{
                    let j = W ? ps(ee)(R, V) : null
                      , $ = W ? CV(ee)(R, V) : null;
                    M = !0;
                    let G = N === k && F === 0
                      , U = yV({
                        element: R,
                        actionItem: V
                    })
                      , K = fs({
                        element: R,
                        actionItem: V,
                        elementApi: Te
                    }, j);
                    gs({
                        store: e,
                        element: R,
                        actionItem: V,
                        eventId: t,
                        eventTarget: r,
                        eventStateKey: n,
                        actionListId: i,
                        groupIndex: a,
                        isCarrier: G,
                        computedStyle: U,
                        destination: K,
                        immediate: o,
                        verbose: s,
                        pluginInstance: j,
                        pluginDuration: $,
                        instanceDelay: E
                    })
                }
                )
            }
            ),
            M
        }
        function gs(e) {
            var t;
            let {store: r, computedStyle: n} = e, i = (0,
            aV.default)(e, pV), {element: a, actionItem: o, immediate: s, pluginInstance: c, continuous: d, restingValue: _, eventId: f} = i, m = !d, g = EV(), {ixElements: v, ixSession: O, ixData: b} = r.getState(), y = gV(v, a), {refState: E} = v[y] || {}, S = Te.getRefType(a), D = O.reducedMotion && $e.ReducedMotionTypes[o.actionTypeId], N;
            if (D && d)
                switch ((t = b.events[f]) === null || t === void 0 ? void 0 : t.eventTypeId) {
                case $e.EventTypeConsts.MOUSE_MOVE:
                case $e.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                    N = _;
                    break;
                default:
                    N = .5;
                    break
                }
            let M = IV(a, E, n, o, Te, c);
            if (r.dispatch((0,
            _e.instanceAdded)((0,
            iV.default)({
                instanceId: g,
                elementId: y,
                origin: M,
                refType: S,
                skipMotion: D,
                skipToValue: N
            }, i))),
            Hm(document.body, "ix2-animation-started", g),
            s) {
                ZV(r, g);
                return
            }
            Bt({
                store: r,
                select: ({ixInstances: V})=>V[g],
                onChange: jm
            }),
            m && r.dispatch((0,
            _e.instanceStarted)(g, O.tick))
        }
        function Es(e, t) {
            Hm(document.body, "ix2-animation-stopping", {
                instanceId: e.id,
                state: t.getState()
            });
            let {elementId: r, actionItem: n} = e
              , {ixElements: i} = t.getState()
              , {ref: a, refType: o} = i[r] || {};
            o === Xm && wV(a, n, Te),
            t.dispatch((0,
            _e.instanceRemoved)(e.id))
        }
        function Hm(e, t, r) {
            let n = document.createEvent("CustomEvent");
            n.initCustomEvent(t, !0, !0, r),
            e.dispatchEvent(n)
        }
        function ZV(e, t) {
            let {ixParameters: r} = e.getState();
            e.dispatch((0,
            _e.instanceStarted)(t, 0)),
            e.dispatch((0,
            _e.animationFrameChanged)(performance.now(), r));
            let {ixInstances: n} = e.getState();
            jm(n[t], e)
        }
        function jm(e, t) {
            let {active: r, continuous: n, complete: i, elementId: a, actionItem: o, actionTypeId: s, renderType: c, current: d, groupIndex: _, eventId: f, eventTarget: m, eventStateKey: g, actionListId: v, isCarrier: O, styleProp: b, verbose: y, pluginInstance: E} = e
              , {ixData: S, ixSession: D} = t.getState()
              , {events: N} = S
              , M = N[f] || {}
              , {mediaQueries: V=S.mediaQueryKeys} = M;
            if (xi(V, D.mediaQueryKey) && (n || r || i)) {
                if (d || c === hV && i) {
                    t.dispatch((0,
                    _e.elementStateChanged)(a, s, d, o));
                    let {ixElements: k} = t.getState()
                      , {ref: H, refType: ee, refState: W} = k[a] || {}
                      , q = W && W[s];
                    switch (ee) {
                    case Xm:
                        {
                            _V(H, W, q, f, o, b, Te, c, E);
                            break
                        }
                    }
                }
                if (i) {
                    if (O) {
                        let k = hs({
                            store: t,
                            eventId: f,
                            eventTarget: m,
                            eventStateKey: g,
                            actionListId: v,
                            groupIndex: _ + 1,
                            verbose: y
                        });
                        y && !k && t.dispatch((0,
                        _e.actionListPlaybackChanged)({
                            actionListId: v,
                            isPlaying: !1
                        }))
                    }
                    Es(e, t)
                }
            }
        }
    }
    );
    var zm = u(gt=>{
        "use strict";
        var JV = Kt().default
          , eW = nt().default;
        Object.defineProperty(gt, "__esModule", {
            value: !0
        });
        gt.actions = void 0;
        gt.destroy = Km;
        gt.init = aW;
        gt.setEnv = iW;
        gt.store = void 0;
        Ml();
        var tW = za()
          , rW = eW($g())
          , _s = us()
          , nW = JV(gi());
        gt.actions = nW;
        var qi = (0,
        tW.createStore)(rW.default);
        gt.store = qi;
        function iW(e) {
            e() && (0,
            _s.observeRequests)(qi)
        }
        function aW(e) {
            Km(),
            (0,
            _s.startEngine)({
                store: qi,
                rawData: e,
                allowEvents: !0
            })
        }
        function Km() {
            (0,
            _s.stopEngine)(qi)
        }
    }
    );
    var Zm = u((sK,$m)=>{
        var Ym = Fe()
          , Qm = zm();
        Qm.setEnv(Ym.env);
        Ym.define("ix2", $m.exports = function() {
            return Qm
        }
        )
    }
    );
    var ey = u((uK,Jm)=>{
        var Ir = Fe();
        Ir.define("links", Jm.exports = function(e, t) {
            var r = {}, n = e(window), i, a = Ir.env(), o = window.location, s = document.createElement("a"), c = "w--current", d = /index\.(html|php)$/, _ = /\/$/, f, m;
            r.ready = r.design = r.preview = g;
            function g() {
                i = a && Ir.env("design"),
                m = Ir.env("slug") || o.pathname || "",
                Ir.scroll.off(O),
                f = [];
                for (var y = document.links, E = 0; E < y.length; ++E)
                    v(y[E]);
                f.length && (Ir.scroll.on(O),
                O())
            }
            function v(y) {
                var E = i && y.getAttribute("href-disabled") || y.getAttribute("href");
                if (s.href = E,
                !(E.indexOf(":") >= 0)) {
                    var S = e(y);
                    if (s.hash.length > 1 && s.host + s.pathname === o.host + o.pathname) {
                        if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                            return;
                        var D = e(s.hash);
                        D.length && f.push({
                            link: S,
                            sec: D,
                            active: !1
                        });
                        return
                    }
                    if (!(E === "#" || E === "")) {
                        var N = s.href === o.href || E === m || d.test(E) && _.test(m);
                        b(S, c, N)
                    }
                }
            }
            function O() {
                var y = n.scrollTop()
                  , E = n.height();
                t.each(f, function(S) {
                    var D = S.link
                      , N = S.sec
                      , M = N.offset().top
                      , V = N.outerHeight()
                      , k = E * .5
                      , H = N.is(":visible") && M + V - k >= y && M + k <= y + E;
                    S.active !== H && (S.active = H,
                    b(D, c, H))
                })
            }
            function b(y, E, S) {
                var D = y.hasClass(E);
                S && D || !S && !D || (S ? y.addClass(E) : y.removeClass(E))
            }
            return r
        }
        )
    }
    );
    var ry = u((cK,ty)=>{
        var Pi = Fe();
        Pi.define("scroll", ty.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = v() ? null : window.history
              , i = e(window)
              , a = e(document)
              , o = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(q) {
                window.setTimeout(q, 15)
            }
              , c = Pi.env("editor") ? ".w-editor-body" : "body"
              , d = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"
              , _ = 'a[href="#"]'
              , f = 'a[href*="#"]:not(.w-tab-link):not(' + _ + ")"
              , m = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , g = document.createElement("style");
            g.appendChild(document.createTextNode(m));
            function v() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var O = /^#[a-zA-Z0-9][\w:.-]*$/;
            function b(q) {
                return O.test(q.hash) && q.host + q.pathname === r.host + r.pathname
            }
            let y = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function E() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || y.matches
            }
            function S(q, p) {
                var L;
                switch (p) {
                case "add":
                    L = q.attr("tabindex"),
                    L ? q.attr("data-wf-tabindex-swap", L) : q.attr("tabindex", "-1");
                    break;
                case "remove":
                    L = q.attr("data-wf-tabindex-swap"),
                    L ? (q.attr("tabindex", L),
                    q.removeAttr("data-wf-tabindex-swap")) : q.removeAttr("tabindex");
                    break
                }
                q.toggleClass("wf-force-outline-none", p === "add")
            }
            function D(q) {
                var p = q.currentTarget;
                if (!(Pi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(p.className))) {
                    var L = b(p) ? p.hash : "";
                    if (L !== "") {
                        var R = e(L);
                        R.length && (q && (q.preventDefault(),
                        q.stopPropagation()),
                        N(L, q),
                        window.setTimeout(function() {
                            M(R, function() {
                                S(R, "add"),
                                R.get(0).focus({
                                    preventScroll: !0
                                }),
                                S(R, "remove")
                            })
                        }, q ? 0 : 300))
                    }
                }
            }
            function N(q) {
                if (r.hash !== q && n && n.pushState && !(Pi.env.chrome && r.protocol === "file:")) {
                    var p = n.state && n.state.hash;
                    p !== q && n.pushState({
                        hash: q
                    }, "", q)
                }
            }
            function M(q, p) {
                var L = i.scrollTop()
                  , R = V(q);
                if (L !== R) {
                    var F = k(q, L, R)
                      , j = Date.now()
                      , $ = function() {
                        var G = Date.now() - j;
                        window.scroll(0, H(L, R, G, F)),
                        G <= F ? s($) : typeof p == "function" && p()
                    };
                    s($)
                }
            }
            function V(q) {
                var p = e(d)
                  , L = p.css("position") === "fixed" ? p.outerHeight() : 0
                  , R = q.offset().top - L;
                if (q.data("scroll") === "mid") {
                    var F = i.height() - L
                      , j = q.outerHeight();
                    j < F && (R -= Math.round((F - j) / 2))
                }
                return R
            }
            function k(q, p, L) {
                if (E())
                    return 0;
                var R = 1;
                return o.add(q).each(function(F, j) {
                    var $ = parseFloat(j.getAttribute("data-scroll-time"));
                    !isNaN($) && $ >= 0 && (R = $)
                }),
                (472.143 * Math.log(Math.abs(p - L) + 125) - 2e3) * R
            }
            function H(q, p, L, R) {
                return L > R ? p : q + (p - q) * ee(L / R)
            }
            function ee(q) {
                return q < .5 ? 4 * q * q * q : (q - 1) * (2 * q - 2) * (2 * q - 2) + 1
            }
            function W() {
                var {WF_CLICK_EMPTY: q, WF_CLICK_SCROLL: p} = t;
                a.on(p, f, D),
                a.on(q, _, function(L) {
                    L.preventDefault()
                }),
                document.head.insertBefore(g, document.head.firstChild)
            }
            return {
                ready: W
            }
        }
        )
    }
    );
    var iy = u((lK,ny)=>{
        var oW = Fe();
        oW.define("touch", ny.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(a) {
                return a = typeof a == "string" ? e(a).get(0) : a,
                a ? new n(a) : null
            }
            ;
            function n(a) {
                var o = !1, s = !1, c = Math.min(Math.round(window.innerWidth * .04), 40), d, _;
                a.addEventListener("touchstart", f, !1),
                a.addEventListener("touchmove", m, !1),
                a.addEventListener("touchend", g, !1),
                a.addEventListener("touchcancel", v, !1),
                a.addEventListener("mousedown", f, !1),
                a.addEventListener("mousemove", m, !1),
                a.addEventListener("mouseup", g, !1),
                a.addEventListener("mouseout", v, !1);
                function f(b) {
                    var y = b.touches;
                    y && y.length > 1 || (o = !0,
                    y ? (s = !0,
                    d = y[0].clientX) : d = b.clientX,
                    _ = d)
                }
                function m(b) {
                    if (o) {
                        if (s && b.type === "mousemove") {
                            b.preventDefault(),
                            b.stopPropagation();
                            return
                        }
                        var y = b.touches
                          , E = y ? y[0].clientX : b.clientX
                          , S = E - _;
                        _ = E,
                        Math.abs(S) > c && r && String(r()) === "" && (i("swipe", b, {
                            direction: S > 0 ? "right" : "left"
                        }),
                        v())
                    }
                }
                function g(b) {
                    if (o && (o = !1,
                    s && b.type === "mouseup")) {
                        b.preventDefault(),
                        b.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function v() {
                    o = !1
                }
                function O() {
                    a.removeEventListener("touchstart", f, !1),
                    a.removeEventListener("touchmove", m, !1),
                    a.removeEventListener("touchend", g, !1),
                    a.removeEventListener("touchcancel", v, !1),
                    a.removeEventListener("mousedown", f, !1),
                    a.removeEventListener("mousemove", m, !1),
                    a.removeEventListener("mouseup", g, !1),
                    a.removeEventListener("mouseout", v, !1),
                    a = null
                }
                this.destroy = O
            }
            function i(a, o, s) {
                var c = e.Event(a, {
                    originalEvent: o
                });
                e(o.target).trigger(c, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var ay = u(ms=>{
        "use strict";
        Object.defineProperty(ms, "__esModule", {
            value: !0
        });
        ms.default = sW;
        function sW(e, t, r, n, i, a, o, s, c, d, _, f, m) {
            return function(g) {
                e(g);
                var v = g.form
                  , O = {
                    name: v.attr("data-name") || v.attr("name") || "Untitled Form",
                    pageId: v.attr("data-wf-page-id") || "",
                    elementId: v.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(v.html()),
                    trackingCookies: n()
                };
                let b = v.attr("data-wf-flow");
                b && (O.wfFlow = b),
                i(g);
                var y = a(v, O.fields);
                if (y)
                    return o(y);
                if (O.fileUploads = s(v),
                c(g),
                !d) {
                    _(g);
                    return
                }
                f.ajax({
                    url: m,
                    type: "POST",
                    data: O,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(E) {
                    E && E.code === 200 && (g.success = !0),
                    _(g)
                }).fail(function() {
                    _(g)
                })
            }
        }
    }
    );
    var sy = u((dK,oy)=>{
        var Mi = Fe();
        Mi.define("forms", oy.exports = function(e, t) {
            var r = {}, n = e(document), i, a = window.location, o = window.XDomainRequest && !window.atob, s = ".w-form", c, d = /e(-)?mail/i, _ = /^\S+@\S+$/, f = window.alert, m = Mi.env(), g, v, O, b = /list-manage[1-9]?.com/i, y = t.debounce(function() {
                f("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                E(),
                !m && !g && D()
            }
            ;
            function E() {
                c = e("html").attr("data-wf-site"),
                v = "https://webflow.com/api/v1/form/" + c,
                o && v.indexOf("https://webflow.com") >= 0 && (v = v.replace("https://webflow.com", "https://formdata.webflow.com")),
                O = `${v}/signFile`,
                i = e(s + " form"),
                i.length && i.each(S)
            }
            function S(G, U) {
                var K = e(U)
                  , h = e.data(U, s);
                h || (h = e.data(U, s, {
                    form: K
                })),
                N(h);
                var I = K.closest("div.w-form");
                h.done = I.find("> .w-form-done"),
                h.fail = I.find("> .w-form-fail"),
                h.fileUploads = I.find(".w-file-upload"),
                h.fileUploads.each(function(Z) {
                    F(Z, h)
                });
                var X = h.form.attr("aria-label") || h.form.attr("data-name") || "Form";
                h.done.attr("aria-label") || h.form.attr("aria-label", X),
                h.done.attr("tabindex", "-1"),
                h.done.attr("role", "region"),
                h.done.attr("aria-label") || h.done.attr("aria-label", X + " success"),
                h.fail.attr("tabindex", "-1"),
                h.fail.attr("role", "region"),
                h.fail.attr("aria-label") || h.fail.attr("aria-label", X + " failure");
                var Q = h.action = K.attr("action");
                if (h.handler = null,
                h.redirect = K.attr("data-redirect"),
                b.test(Q)) {
                    h.handler = p;
                    return
                }
                if (!Q) {
                    if (c) {
                        h.handler = (()=>{
                            let Z = ay().default;
                            return Z(N, a, Mi, ee, R, V, f, k, M, c, L, e, v)
                        }
                        )();
                        return
                    }
                    y()
                }
            }
            function D() {
                g = !0,
                n.on("submit", s + " form", function(Z) {
                    var z = e.data(this, s);
                    z.handler && (z.evt = Z,
                    z.handler(z))
                });
                let G = ".w-checkbox-input"
                  , U = ".w-radio-input"
                  , K = "w--redirected-checked"
                  , h = "w--redirected-focus"
                  , I = "w--redirected-focus-visible"
                  , X = ":focus-visible, [data-wf-focus-visible]"
                  , Q = [["checkbox", G], ["radio", U]];
                n.on("change", s + ' form input[type="checkbox"]:not(' + G + ")", Z=>{
                    e(Z.target).siblings(G).toggleClass(K)
                }
                ),
                n.on("change", s + ' form input[type="radio"]', Z=>{
                    e(`input[name="${Z.target.name}"]:not(${G})`).map((te,Oe)=>e(Oe).siblings(U).removeClass(K));
                    let z = e(Z.target);
                    z.hasClass("w-radio-input") || z.siblings(U).addClass(K)
                }
                ),
                Q.forEach(([Z,z])=>{
                    n.on("focus", s + ` form input[type="${Z}"]:not(` + z + ")", te=>{
                        e(te.target).siblings(z).addClass(h),
                        e(te.target).filter(X).siblings(z).addClass(I)
                    }
                    ),
                    n.on("blur", s + ` form input[type="${Z}"]:not(` + z + ")", te=>{
                        e(te.target).siblings(z).removeClass(`${h} ${I}`)
                    }
                    )
                }
                )
            }
            function N(G) {
                var U = G.btn = G.form.find(':input[type="submit"]');
                G.wait = G.btn.attr("data-wait") || null,
                G.success = !1,
                U.prop("disabled", !1),
                G.label && U.val(G.label)
            }
            function M(G) {
                var U = G.btn
                  , K = G.wait;
                U.prop("disabled", !0),
                K && (G.label = U.val(),
                U.val(K))
            }
            function V(G, U) {
                var K = null;
                return U = U || {},
                G.find(':input:not([type="submit"]):not([type="file"])').each(function(h, I) {
                    var X = e(I)
                      , Q = X.attr("type")
                      , Z = X.attr("data-name") || X.attr("name") || "Field " + (h + 1)
                      , z = X.val();
                    if (Q === "checkbox")
                        z = X.is(":checked");
                    else if (Q === "radio") {
                        if (U[Z] === null || typeof U[Z] == "string")
                            return;
                        z = G.find('input[name="' + X.attr("name") + '"]:checked').val() || null
                    }
                    typeof z == "string" && (z = e.trim(z)),
                    U[Z] = z,
                    K = K || W(X, Q, Z, z)
                }),
                K
            }
            function k(G) {
                var U = {};
                return G.find(':input[type="file"]').each(function(K, h) {
                    var I = e(h)
                      , X = I.attr("data-name") || I.attr("name") || "File " + (K + 1)
                      , Q = I.attr("data-value");
                    typeof Q == "string" && (Q = e.trim(Q)),
                    U[X] = Q
                }),
                U
            }
            let H = {
                _mkto_trk: "marketo"
            };
            function ee() {
                return document.cookie.split("; ").reduce(function(U, K) {
                    let h = K.split("=")
                      , I = h[0];
                    if (I in H) {
                        let X = H[I]
                          , Q = h.slice(1).join("=");
                        U[X] = Q
                    }
                    return U
                }, {})
            }
            function W(G, U, K, h) {
                var I = null;
                return U === "password" ? I = "Passwords cannot be submitted." : G.attr("required") ? h ? d.test(G.attr("type")) && (_.test(h) || (I = "Please enter a valid email address for: " + K)) : I = "Please fill out the required field: " + K : K === "g-recaptcha-response" && !h && (I = "Please confirm you\u2019re not a robot."),
                I
            }
            function q(G) {
                R(G),
                L(G)
            }
            function p(G) {
                N(G);
                var U = G.form
                  , K = {};
                if (/^https/.test(a.href) && !/^https/.test(G.action)) {
                    U.attr("method", "post");
                    return
                }
                R(G);
                var h = V(U, K);
                if (h)
                    return f(h);
                M(G);
                var I;
                t.each(K, function(z, te) {
                    d.test(te) && (K.EMAIL = z),
                    /^((full[ _-]?)?name)$/i.test(te) && (I = z),
                    /^(first[ _-]?name)$/i.test(te) && (K.FNAME = z),
                    /^(last[ _-]?name)$/i.test(te) && (K.LNAME = z)
                }),
                I && !K.FNAME && (I = I.split(" "),
                K.FNAME = I[0],
                K.LNAME = K.LNAME || I[1]);
                var X = G.action.replace("/post?", "/post-json?") + "&c=?"
                  , Q = X.indexOf("u=") + 2;
                Q = X.substring(Q, X.indexOf("&", Q));
                var Z = X.indexOf("id=") + 3;
                Z = X.substring(Z, X.indexOf("&", Z)),
                K["b_" + Q + "_" + Z] = "",
                e.ajax({
                    url: X,
                    data: K,
                    dataType: "jsonp"
                }).done(function(z) {
                    G.success = z.result === "success" || /already/.test(z.msg),
                    G.success || console.info("MailChimp error: " + z.msg),
                    L(G)
                }).fail(function() {
                    L(G)
                })
            }
            function L(G) {
                var U = G.form
                  , K = G.redirect
                  , h = G.success;
                if (h && K) {
                    Mi.location(K);
                    return
                }
                G.done.toggle(h),
                G.fail.toggle(!h),
                h ? G.done.focus() : G.fail.focus(),
                U.toggle(!h),
                N(G)
            }
            function R(G) {
                G.evt && G.evt.preventDefault(),
                G.evt = null
            }
            function F(G, U) {
                if (!U.fileUploads || !U.fileUploads[G])
                    return;
                var K, h = e(U.fileUploads[G]), I = h.find("> .w-file-upload-default"), X = h.find("> .w-file-upload-uploading"), Q = h.find("> .w-file-upload-success"), Z = h.find("> .w-file-upload-error"), z = I.find(".w-file-upload-input"), te = I.find(".w-file-upload-label"), Oe = te.children(), ce = Z.find(".w-file-upload-error-msg"), Ce = Q.find(".w-file-upload-file"), Je = Q.find(".w-file-remove-link"), ft = Ce.find(".w-file-upload-file-name"), Et = ce.attr("data-w-size-error"), xe = ce.attr("data-w-type-error"), xt = ce.attr("data-w-generic-error");
                if (m || te.on("click keydown", function(w) {
                    w.type === "keydown" && w.which !== 13 && w.which !== 32 || (w.preventDefault(),
                    z.click())
                }),
                te.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                Je.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                m)
                    z.on("click", function(w) {
                        w.preventDefault()
                    }),
                    te.on("click", function(w) {
                        w.preventDefault()
                    }),
                    Oe.on("click", function(w) {
                        w.preventDefault()
                    });
                else {
                    Je.on("click keydown", function(w) {
                        if (w.type === "keydown") {
                            if (w.which !== 13 && w.which !== 32)
                                return;
                            w.preventDefault()
                        }
                        z.removeAttr("data-value"),
                        z.val(""),
                        ft.html(""),
                        I.toggle(!0),
                        Q.toggle(!1),
                        te.focus()
                    }),
                    z.on("change", function(w) {
                        K = w.target && w.target.files && w.target.files[0],
                        K && (I.toggle(!1),
                        Z.toggle(!1),
                        X.toggle(!0),
                        X.focus(),
                        ft.text(K.name),
                        C() || M(U),
                        U.fileUploads[G].uploading = !0,
                        j(K, T))
                    });
                    var _t = te.outerHeight();
                    z.height(_t),
                    z.width(1)
                }
                function l(w) {
                    var x = w.responseJSON && w.responseJSON.msg
                      , Y = xt;
                    typeof x == "string" && x.indexOf("InvalidFileTypeError") === 0 ? Y = xe : typeof x == "string" && x.indexOf("MaxFileSizeError") === 0 && (Y = Et),
                    ce.text(Y),
                    z.removeAttr("data-value"),
                    z.val(""),
                    X.toggle(!1),
                    I.toggle(!0),
                    Z.toggle(!0),
                    Z.focus(),
                    U.fileUploads[G].uploading = !1,
                    C() || N(U)
                }
                function T(w, x) {
                    if (w)
                        return l(w);
                    var Y = x.fileName
                      , re = x.postData
                      , de = x.fileId
                      , B = x.s3Url;
                    z.attr("data-value", de),
                    $(B, re, K, Y, A)
                }
                function A(w) {
                    if (w)
                        return l(w);
                    X.toggle(!1),
                    Q.css("display", "inline-block"),
                    Q.focus(),
                    U.fileUploads[G].uploading = !1,
                    C() || N(U)
                }
                function C() {
                    var w = U.fileUploads && U.fileUploads.toArray() || [];
                    return w.some(function(x) {
                        return x.uploading
                    })
                }
            }
            function j(G, U) {
                var K = new URLSearchParams({
                    name: G.name,
                    size: G.size
                });
                e.ajax({
                    type: "GET",
                    url: `${O}?${K}`,
                    crossDomain: !0
                }).done(function(h) {
                    U(null, h)
                }).fail(function(h) {
                    U(h)
                })
            }
            function $(G, U, K, h, I) {
                var X = new FormData;
                for (var Q in U)
                    X.append(Q, U[Q]);
                X.append("file", K, h),
                e.ajax({
                    type: "POST",
                    url: G,
                    data: X,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    I(null)
                }).fail(function(Z) {
                    I(Z)
                })
            }
            return r
        }
        )
    }
    );
    var ly = u((pK,cy)=>{
        var ys = Fe()
          , uy = "w-condition-invisible"
          , uW = "." + uy;
        function cW(e) {
            return e.filter(function(t) {
                return !sn(t)
            })
        }
        function sn(e) {
            return !!(e.$el && e.$el.closest(uW).length)
        }
        function Is(e, t) {
            for (var r = e; r >= 0; r--)
                if (!sn(t[r]))
                    return r;
            return -1
        }
        function Ts(e, t) {
            for (var r = e; r <= t.length - 1; r++)
                if (!sn(t[r]))
                    return r;
            return -1
        }
        function lW(e, t) {
            return Is(e - 1, t) === -1
        }
        function fW(e, t) {
            return Ts(e + 1, t) === -1
        }
        function on(e, t) {
            e.attr("aria-label") || e.attr("aria-label", t)
        }
        function dW(e, t, r, n) {
            var i = r.tram, a = Array.isArray, o = "w-lightbox", s = o + "-", c = /(^|\s+)/g, d = [], _, f, m, g = [];
            function v(h, I) {
                return d = a(h) ? h : [h],
                f || v.build(),
                cW(d).length > 1 && (f.items = f.empty,
                d.forEach(function(X, Q) {
                    var Z = U("thumbnail")
                      , z = U("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(Z);
                    on(z, `show item ${Q + 1} of ${d.length}`),
                    sn(X) && z.addClass(uy),
                    f.items = f.items.add(z),
                    ee(X.thumbnailUrl || X.url, function(te) {
                        te.prop("width") > te.prop("height") ? F(te, "wide") : F(te, "tall"),
                        Z.append(F(te, "thumbnail-image"))
                    })
                }),
                f.strip.empty().append(f.items),
                F(f.content, "group")),
                i(j(f.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }),
                F(f.html, "noscroll"),
                v.show(I || 0)
            }
            v.build = function() {
                return v.destroy(),
                f = {
                    html: r(t.documentElement),
                    empty: r()
                },
                f.arrowLeft = U("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"),
                f.arrowRight = U("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"),
                f.close = U("control close").attr("role", "button"),
                on(f.arrowLeft, "previous image"),
                on(f.arrowRight, "next image"),
                on(f.close, "close lightbox"),
                f.spinner = U("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"),
                f.strip = U("strip").attr("role", "tablist"),
                m = new p(f.spinner,L("hide")),
                f.content = U("content").append(f.spinner, f.arrowLeft, f.arrowRight, f.close),
                f.container = U("container").append(f.content, f.strip),
                f.lightbox = U("backdrop hide").append(f.container),
                f.strip.on("click", R("item"), S),
                f.content.on("swipe", D).on("click", R("left"), b).on("click", R("right"), y).on("click", R("close"), E).on("click", R("image, caption"), y),
                f.container.on("click", R("view"), E).on("dragstart", R("img"), M),
                f.lightbox.on("keydown", V).on("focusin", N),
                r(n).append(f.lightbox),
                v
            }
            ,
            v.destroy = function() {
                f && (j(f.html, "noscroll"),
                f.lightbox.remove(),
                f = void 0)
            }
            ,
            v.show = function(h) {
                if (h !== _) {
                    var I = d[h];
                    if (!I)
                        return v.hide();
                    if (sn(I)) {
                        if (h < _) {
                            var X = Is(h - 1, d);
                            h = X > -1 ? X : h
                        } else {
                            var Q = Ts(h + 1, d);
                            h = Q > -1 ? Q : h
                        }
                        I = d[h]
                    }
                    var Z = _;
                    _ = h,
                    f.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"),
                    m.show();
                    var z = I.html && K(I.width, I.height) || I.url;
                    return ee(z, function(te) {
                        if (h !== _)
                            return;
                        var Oe = U("figure", "figure").append(F(te, "image")), ce = U("frame").append(Oe), Ce = U("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(ce), Je, ft;
                        I.html && (Je = r(I.html),
                        ft = Je.is("iframe"),
                        ft && Je.on("load", Et),
                        Oe.append(F(Je, "embed"))),
                        I.caption && Oe.append(U("caption", "figcaption").text(I.caption)),
                        f.spinner.before(Ce),
                        ft || Et();
                        function Et() {
                            if (f.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"),
                            m.hide(),
                            h !== _) {
                                Ce.remove();
                                return
                            }
                            let xe = lW(h, d);
                            $(f.arrowLeft, "inactive", xe),
                            G(f.arrowLeft, xe),
                            xe && f.arrowLeft.is(":focus") && f.arrowRight.focus();
                            let xt = fW(h, d);
                            if ($(f.arrowRight, "inactive", xt),
                            G(f.arrowRight, xt),
                            xt && f.arrowRight.is(":focus") && f.arrowLeft.focus(),
                            f.view ? (i(f.view).add("opacity .3s").start({
                                opacity: 0
                            }).then(W(f.view)),
                            i(Ce).add("opacity .3s").add("transform .3s").set({
                                x: h > Z ? "80px" : "-80px"
                            }).start({
                                opacity: 1,
                                x: 0
                            })) : Ce.css("opacity", 1),
                            f.view = Ce,
                            f.view.prop("tabIndex", 0),
                            f.items) {
                                j(f.items, "active"),
                                f.items.removeAttr("aria-selected");
                                var _t = f.items.eq(h);
                                F(_t, "active"),
                                _t.attr("aria-selected", !0),
                                q(_t)
                            }
                        }
                    }),
                    f.close.prop("tabIndex", 0),
                    r(":focus").addClass("active-lightbox"),
                    g.length === 0 && (r("body").children().each(function() {
                        r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (g.push({
                            node: r(this),
                            hidden: r(this).attr("aria-hidden"),
                            tabIndex: r(this).attr("tabIndex")
                        }),
                        r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                    }),
                    f.close.focus()),
                    v
                }
            }
            ,
            v.hide = function() {
                return i(f.lightbox).add("opacity .3s").start({
                    opacity: 0
                }).then(H),
                v
            }
            ,
            v.prev = function() {
                var h = Is(_ - 1, d);
                h > -1 && v.show(h)
            }
            ,
            v.next = function() {
                var h = Ts(_ + 1, d);
                h > -1 && v.show(h)
            }
            ;
            function O(h) {
                return function(I) {
                    this === I.target && (I.stopPropagation(),
                    I.preventDefault(),
                    h())
                }
            }
            var b = O(v.prev)
              , y = O(v.next)
              , E = O(v.hide)
              , S = function(h) {
                var I = r(this).index();
                h.preventDefault(),
                v.show(I)
            }
              , D = function(h, I) {
                h.preventDefault(),
                I.direction === "left" ? v.next() : I.direction === "right" && v.prev()
            }
              , N = function() {
                this.focus()
            };
            function M(h) {
                h.preventDefault()
            }
            function V(h) {
                var I = h.keyCode;
                I === 27 || k(I, "close") ? v.hide() : I === 37 || k(I, "left") ? v.prev() : I === 39 || k(I, "right") ? v.next() : k(I, "item") && r(":focus").click()
            }
            function k(h, I) {
                if (h !== 13 && h !== 32)
                    return !1;
                var X = r(":focus").attr("class")
                  , Q = L(I).trim();
                return X.includes(Q)
            }
            function H() {
                f && (f.strip.scrollLeft(0).empty(),
                j(f.html, "noscroll"),
                F(f.lightbox, "hide"),
                f.view && f.view.remove(),
                j(f.content, "group"),
                F(f.arrowLeft, "inactive"),
                F(f.arrowRight, "inactive"),
                _ = f.view = void 0,
                g.forEach(function(h) {
                    var I = h.node;
                    I && (h.hidden ? I.attr("aria-hidden", h.hidden) : I.removeAttr("aria-hidden"),
                    h.tabIndex ? I.attr("tabIndex", h.tabIndex) : I.removeAttr("tabIndex"))
                }),
                g = [],
                r(".active-lightbox").removeClass("active-lightbox").focus())
            }
            function ee(h, I) {
                var X = U("img", "img");
                return X.one("load", function() {
                    I(X)
                }),
                X.attr("src", h),
                X
            }
            function W(h) {
                return function() {
                    h.remove()
                }
            }
            function q(h) {
                var I = h.get(0), X = f.strip.get(0), Q = I.offsetLeft, Z = I.clientWidth, z = X.scrollLeft, te = X.clientWidth, Oe = X.scrollWidth - te, ce;
                Q < z ? ce = Math.max(0, Q + Z - te) : Q + Z > te + z && (ce = Math.min(Q, Oe)),
                ce != null && i(f.strip).add("scroll-left 500ms").start({
                    "scroll-left": ce
                })
            }
            function p(h, I, X) {
                this.$element = h,
                this.className = I,
                this.delay = X || 200,
                this.hide()
            }
            p.prototype.show = function() {
                var h = this;
                h.timeoutId || (h.timeoutId = setTimeout(function() {
                    h.$element.removeClass(h.className),
                    delete h.timeoutId
                }, h.delay))
            }
            ,
            p.prototype.hide = function() {
                var h = this;
                if (h.timeoutId) {
                    clearTimeout(h.timeoutId),
                    delete h.timeoutId;
                    return
                }
                h.$element.addClass(h.className)
            }
            ;
            function L(h, I) {
                return h.replace(c, (I ? " ." : " ") + s)
            }
            function R(h) {
                return L(h, !0)
            }
            function F(h, I) {
                return h.addClass(L(I))
            }
            function j(h, I) {
                return h.removeClass(L(I))
            }
            function $(h, I, X) {
                return h.toggleClass(L(I), X)
            }
            function G(h, I) {
                return h.attr("aria-hidden", I).attr("tabIndex", I ? -1 : 0)
            }
            function U(h, I) {
                return F(r(t.createElement(I || "div")), h)
            }
            function K(h, I) {
                var X = '<svg xmlns="http://www.w3.org/2000/svg" width="' + h + '" height="' + I + '"/>';
                return "data:image/svg+xml;charset=utf-8," + encodeURI(X)
            }
            return function() {
                var h = e.navigator.userAgent
                  , I = /(iPhone|iPad|iPod);[^OS]*OS (\d)/
                  , X = h.match(I)
                  , Q = h.indexOf("Android ") > -1 && h.indexOf("Chrome") === -1;
                if (!Q && (!X || X[2] > 7))
                    return;
                var Z = t.createElement("style");
                t.head.appendChild(Z),
                e.addEventListener("resize", z, !0);
                function z() {
                    var te = e.innerHeight
                      , Oe = e.innerWidth
                      , ce = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + te + "px}.w-lightbox-view {width:" + Oe + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * te + "px}.w-lightbox-image {max-width:" + Oe + "px;max-height:" + te + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * te + "px}.w-lightbox-strip {padding: 0 " + .01 * te + "px}.w-lightbox-item {width:" + .1 * te + "px;padding:" + .02 * te + "px " + .01 * te + "px}.w-lightbox-thumbnail {height:" + .1 * te + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * te + "px}.w-lightbox-content {margin-top:" + .02 * te + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * te + "px}.w-lightbox-image {max-width:" + .96 * Oe + "px;max-height:" + .96 * te + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * Oe + "px;max-height:" + .84 * te + "px}}";
                    Z.textContent = ce
                }
                z()
            }(),
            v
        }
        ys.define("lightbox", cy.exports = function(e) {
            var t = {}, r = ys.env(), n = dW(window, document, e, r ? "#lightbox-mountpoint" : "body"), i = e(document), a, o, s = ".w-lightbox", c;
            t.ready = t.design = t.preview = d;
            function d() {
                o = r && ys.env("design"),
                n.destroy(),
                c = {},
                a = i.find(s),
                a.webflowLightBox(),
                a.each(function() {
                    on(e(this), "open lightbox"),
                    e(this).attr("aria-haspopup", "dialog")
                })
            }
            jQuery.fn.extend({
                webflowLightBox: function() {
                    var g = this;
                    e.each(g, function(v, O) {
                        var b = e.data(O, s);
                        b || (b = e.data(O, s, {
                            el: e(O),
                            mode: "images",
                            images: [],
                            embed: ""
                        })),
                        b.el.off(s),
                        _(b),
                        o ? b.el.on("setting" + s, _.bind(null, b)) : b.el.on("click" + s, f(b)).on("click" + s, function(y) {
                            y.preventDefault()
                        })
                    })
                }
            });
            function _(g) {
                var v = g.el.children(".w-json").html(), O, b;
                if (!v) {
                    g.items = [];
                    return
                }
                try {
                    v = JSON.parse(v)
                } catch (y) {
                    console.error("Malformed lightbox JSON configuration.", y)
                }
                m(v),
                v.items.forEach(function(y) {
                    y.$el = g.el
                }),
                O = v.group,
                O ? (b = c[O],
                b || (b = c[O] = []),
                g.items = b,
                v.items.length && (g.index = b.length,
                b.push.apply(b, v.items))) : (g.items = v.items,
                g.index = 0)
            }
            function f(g) {
                return function() {
                    g.items.length && n(g.items, g.index || 0)
                }
            }
            function m(g) {
                g.images && (g.images.forEach(function(v) {
                    v.type = "image"
                }),
                g.items = g.images),
                g.embed && (g.embed.type = "video",
                g.items = [g.embed]),
                g.groupId && (g.group = g.groupId)
            }
            return t
        }
        )
    }
    );
    var dy = u((vK,fy)=>{
        var Ct = Fe()
          , pW = ki();
        Ct.define("tabs", fy.exports = function(e) {
            var t = {}, r = e.tram, n = e(document), i, a, o = Ct.env, s = o.safari, c = o(), d = "data-w-tab", _ = "data-w-pane", f = ".w-tabs", m = "w--current", g = "w--tab-active", v = pW.triggers, O = !1;
            t.ready = t.design = t.preview = b,
            t.redraw = function() {
                O = !0,
                b(),
                O = !1
            }
            ,
            t.destroy = function() {
                i = n.find(f),
                i.length && (i.each(S),
                y())
            }
            ;
            function b() {
                a = c && Ct.env("design"),
                i = n.find(f),
                i.length && (i.each(D),
                Ct.env("preview") && !O && i.each(S),
                y(),
                E())
            }
            function y() {
                Ct.redraw.off(t.redraw)
            }
            function E() {
                Ct.redraw.on(t.redraw)
            }
            function S(W, q) {
                var p = e.data(q, f);
                p && (p.links && p.links.each(v.reset),
                p.panes && p.panes.each(v.reset))
            }
            function D(W, q) {
                var p = f.substr(1) + "-" + W
                  , L = e(q)
                  , R = e.data(q, f);
                if (R || (R = e.data(q, f, {
                    el: L,
                    config: {}
                })),
                R.current = null,
                R.tabIdentifier = p + "-" + d,
                R.paneIdentifier = p + "-" + _,
                R.menu = L.children(".w-tab-menu"),
                R.links = R.menu.children(".w-tab-link"),
                R.content = L.children(".w-tab-content"),
                R.panes = R.content.children(".w-tab-pane"),
                R.el.off(f),
                R.links.off(f),
                R.menu.attr("role", "tablist"),
                R.links.attr("tabindex", "-1"),
                N(R),
                !a) {
                    R.links.on("click" + f, V(R)),
                    R.links.on("keydown" + f, k(R));
                    var F = R.links.filter("." + m)
                      , j = F.attr(d);
                    j && H(R, {
                        tab: j,
                        immediate: !0
                    })
                }
            }
            function N(W) {
                var q = {};
                q.easing = W.el.attr("data-easing") || "ease";
                var p = parseInt(W.el.attr("data-duration-in"), 10);
                p = q.intro = p === p ? p : 0;
                var L = parseInt(W.el.attr("data-duration-out"), 10);
                L = q.outro = L === L ? L : 0,
                q.immediate = !p && !L,
                W.config = q
            }
            function M(W) {
                var q = W.current;
                return Array.prototype.findIndex.call(W.links, p=>p.getAttribute(d) === q, null)
            }
            function V(W) {
                return function(q) {
                    q.preventDefault();
                    var p = q.currentTarget.getAttribute(d);
                    p && H(W, {
                        tab: p
                    })
                }
            }
            function k(W) {
                return function(q) {
                    var p = M(W)
                      , L = q.key
                      , R = {
                        ArrowLeft: p - 1,
                        ArrowUp: p - 1,
                        ArrowRight: p + 1,
                        ArrowDown: p + 1,
                        End: W.links.length - 1,
                        Home: 0
                    };
                    if (L in R) {
                        q.preventDefault();
                        var F = R[L];
                        F === -1 && (F = W.links.length - 1),
                        F === W.links.length && (F = 0);
                        var j = W.links[F]
                          , $ = j.getAttribute(d);
                        $ && H(W, {
                            tab: $
                        })
                    }
                }
            }
            function H(W, q) {
                q = q || {};
                var p = W.config
                  , L = p.easing
                  , R = q.tab;
                if (R !== W.current) {
                    W.current = R;
                    var F;
                    W.links.each(function(I, X) {
                        var Q = e(X);
                        if (q.immediate || p.immediate) {
                            var Z = W.panes[I];
                            X.id || (X.id = W.tabIdentifier + "-" + I),
                            Z.id || (Z.id = W.paneIdentifier + "-" + I),
                            X.href = "#" + Z.id,
                            X.setAttribute("role", "tab"),
                            X.setAttribute("aria-controls", Z.id),
                            X.setAttribute("aria-selected", "false"),
                            Z.setAttribute("role", "tabpanel"),
                            Z.setAttribute("aria-labelledby", X.id)
                        }
                        X.getAttribute(d) === R ? (F = X,
                        Q.addClass(m).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(v.intro)) : Q.hasClass(m) && Q.removeClass(m).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(v.outro)
                    });
                    var j = []
                      , $ = [];
                    W.panes.each(function(I, X) {
                        var Q = e(X);
                        X.getAttribute(d) === R ? j.push(X) : Q.hasClass(g) && $.push(X)
                    });
                    var G = e(j)
                      , U = e($);
                    if (q.immediate || p.immediate) {
                        G.addClass(g).each(v.intro),
                        U.removeClass(g),
                        O || Ct.redraw.up();
                        return
                    } else {
                        var K = window.scrollX
                          , h = window.scrollY;
                        F.focus(),
                        window.scrollTo(K, h)
                    }
                    U.length && p.outro ? (U.each(v.outro),
                    r(U).add("opacity " + p.outro + "ms " + L, {
                        fallback: s
                    }).start({
                        opacity: 0
                    }).then(()=>ee(p, U, G))) : ee(p, U, G)
                }
            }
            function ee(W, q, p) {
                if (q.removeClass(g).css({
                    opacity: "",
                    transition: "",
                    transform: "",
                    width: "",
                    height: ""
                }),
                p.addClass(g).each(v.intro),
                Ct.redraw.up(),
                !W.intro)
                    return r(p).set({
                        opacity: 1
                    });
                r(p).set({
                    opacity: 0
                }).redraw().add("opacity " + W.intro + "ms " + W.easing, {
                    fallback: s
                }).start({
                    opacity: 1
                })
            }
            return t
        }
        )
    }
    );
    var vy = u((hK,py)=>{
        var kt = Fe();
        kt.define("maps", py.exports = function(e, t) {
            var r = {}, n = e(document), i = null, a, o = ".w-widget-map", s = "";
            r.ready = function() {
                kt.env() || c()
            }
            ,
            r.destroy = d;
            function c() {
                if (a = n.find(o),
                !a.length)
                    return;
                i === null ? (e.getScript("https://maps.googleapis.com/maps/api/js?v=3.31&sensor=false&callback=_wf_maps_loaded&key=" + s),
                window._wf_maps_loaded = b) : b();
                function b() {
                    window._wf_maps_loaded = function() {}
                    ,
                    i = window.google,
                    a.each(f),
                    d(),
                    _()
                }
            }
            function d() {
                kt.resize.off(m),
                kt.redraw.off(m)
            }
            function _() {
                kt.resize.on(m),
                kt.redraw.on(m)
            }
            function f(b, y) {
                var E = e(y).data();
                O(y, E)
            }
            function m() {
                a.each(g)
            }
            function g(b, y) {
                var E = O(y);
                i.maps.event.trigger(E.map, "resize"),
                E.setMapPosition()
            }
            var v = "w-widget-map";
            function O(b, y) {
                var E = e.data(b, v);
                if (E)
                    return E;
                var S = typeof y.widgetTooltip == "string" && y.widgetTooltip !== ""
                  , D = e(b)
                  , N = D.attr("title")
                  , M = "Map pin";
                N && y.widgetTooltip ? M = `Map pin on ${N} showing location of ${y.widgetTooltip}` : N && !y.widgetTooltip ? M = `Map pin on ${N}` : !N && y.widgetTooltip && (M = `Map pin showing location of ${y.widgetTooltip}`),
                E = e.data(b, v, {
                    latLng: "51.511214,-0.119824",
                    tooltip: "",
                    style: "roadmap",
                    zoom: 12,
                    marker: new i.maps.Marker({
                        draggable: !1,
                        title: M
                    }),
                    infowindow: new i.maps.InfoWindow({
                        disableAutoPan: !0
                    })
                }),
                typeof y.widgetLatlng == "string" && y.widgetLatlng.length !== "" && (E.latLng = y.widgetLatlng);
                var V = E.latLng.split(",")
                  , k = new i.maps.LatLng(V[0],V[1]);
                E.latLngObj = k;
                var H = !(kt.env.touch && !y.enableTouch);
                if (E.map = new i.maps.Map(b,{
                    center: E.latLngObj,
                    zoom: E.zoom,
                    maxZoom: 20,
                    mapTypeControl: !1,
                    panControl: !1,
                    streetViewControl: !1,
                    scrollwheel: y.enableScroll,
                    draggable: H,
                    zoomControl: !0,
                    zoomControlOptions: {
                        style: i.maps.ZoomControlStyle.SMALL
                    },
                    mapTypeId: E.style
                }),
                E.marker.setMap(E.map),
                E.setMapPosition = function() {
                    E.map.setCenter(E.latLngObj);
                    var p = 0
                      , L = 0
                      , R = D.css(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]);
                    p -= parseInt(R.paddingLeft, 10),
                    p += parseInt(R.paddingRight, 10),
                    L -= parseInt(R.paddingTop, 10),
                    L += parseInt(R.paddingBottom, 10),
                    (p || L) && E.map.panBy(p, L),
                    D.css("position", "")
                }
                ,
                i.maps.event.addListener(E.map, "tilesloaded", function() {
                    i.maps.event.clearListeners(E.map, "tilesloaded"),
                    E.setMapPosition()
                }),
                E.setMapPosition(),
                E.marker.setPosition(E.latLngObj),
                E.infowindow.setPosition(E.latLngObj),
                S) {
                    var ee = y.widgetTooltip;
                    E.tooltip = ee,
                    E.infowindow.setContent(ee),
                    E.infowindowOpen || (E.infowindow.open(E.map, E.marker),
                    E.infowindowOpen = !0)
                }
                var W = y.widgetStyle;
                W && E.map.setMapTypeId(W);
                var q = y.widgetZoom;
                return q != null && (E.zoom = q,
                E.map.setZoom(Number(q))),
                i.maps.event.addListener(E.marker, "click", function() {
                    window.open("https://maps.google.com/?z=" + E.zoom + "&daddr=" + E.latLng)
                }),
                E
            }
            return r
        }
        )
    }
    );
    Ms();
    Fs();
    Xs();
    Ws();
    ki();
    Zm();
    ey();
    ry();
    iy();
    sy();
    ly();
    dy();
    vy();
  }
  )();
  /*!
  * tram.js v0.8.2-global
  * Cross-browser CSS3 transitions in JavaScript
  * https://github.com/bkwld/tram
  * MIT License
  */
  /*!
  * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
  * _.each
  * _.map
  * _.find
  * _.filter
  * _.any
  * _.contains
  * _.delay
  * _.defer
  * _.throttle (webflow)
  * _.debounce
  * _.keys
  * _.has
  * _.now
  * _.template (webflow: upgraded to 1.13.6)
  *
  * http://underscorejs.org
  * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  * Underscore may be freely distributed under the MIT license.
  * @license MIT
  */
  /*! Bundled license information:
  
  timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
  */
  /**
  * ----------------------------------------------------------------------
  * Webflow: Interactions 2.0: Init
  */
  Webflow.require('ix2').init({
    "events": {
        "e-1168": {
            "id": "e-1168",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1169"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".customer-wrapper",
                "originalId": "6292458ea6c91839f7cb2518|51300c2e-83e6-32e9-54fe-8f07fea8a841",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".customer-wrapper",
                "originalId": "6292458ea6c91839f7cb2518|51300c2e-83e6-32e9-54fe-8f07fea8a841",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649686910700
        },
        "e-1169": {
            "id": "e-1169",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1168"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".customer-wrapper",
                "originalId": "6292458ea6c91839f7cb2518|51300c2e-83e6-32e9-54fe-8f07fea8a841",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".customer-wrapper",
                "originalId": "6292458ea6c91839f7cb2518|51300c2e-83e6-32e9-54fe-8f07fea8a841",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649686910709
        },
        "e-1214": {
            "id": "e-1214",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1215"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".service-list-item",
                "originalId": "6292458ea6c91840decb2534|b303050c-c3c6-44c1-cdd2-288cfdfe06bd",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".service-list-item",
                "originalId": "6292458ea6c91840decb2534|b303050c-c3c6-44c1-cdd2-288cfdfe06bd",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649769667793
        },
        "e-1215": {
            "id": "e-1215",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1214"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".service-list-item",
                "originalId": "6292458ea6c91840decb2534|b303050c-c3c6-44c1-cdd2-288cfdfe06bd",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".service-list-item",
                "originalId": "6292458ea6c91840decb2534|b303050c-c3c6-44c1-cdd2-288cfdfe06bd",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649769667797
        },
        "e-1242": {
            "id": "e-1242",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SLIDER_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1613"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".slide-1",
                "originalId": "6292458ea6c918633ccb250d|d1425947-5171-ef45-202b-8b99d1056c8c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slide-1",
                "originalId": "6292458ea6c918633ccb250d|d1425947-5171-ef45-202b-8b99d1056c8c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649925524675
        },
        "e-1244": {
            "id": "e-1244",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SLIDER_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1611"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".slide-2",
                "originalId": "6292458ea6c918633ccb250d|d1425947-5171-ef45-202b-8b99d1056c8d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slide-2",
                "originalId": "6292458ea6c918633ccb250d|d1425947-5171-ef45-202b-8b99d1056c8d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649925540789
        },
        "e-1246": {
            "id": "e-1246",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SLIDER_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1775"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".slide-3",
                "originalId": "6292458ea6c918633ccb250d|e97002fd-3a13-4a97-ae76-92fc6e2b93c3",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slide-3",
                "originalId": "6292458ea6c918633ccb250d|e97002fd-3a13-4a97-ae76-92fc6e2b93c3",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649925555567
        },
        "e-1254": {
            "id": "e-1254",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SLIDER_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1771"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".slide-4",
                "originalId": "6292458ea6c918633ccb250d|9ad303f7-2212-4a14-56b5-f69bfdf1c881",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slide-4",
                "originalId": "6292458ea6c918633ccb250d|9ad303f7-2212-4a14-56b5-f69bfdf1c881",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649926798806
        },
        "e-1256": {
            "id": "e-1256",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SLIDER_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1609"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".slide-5",
                "originalId": "6292458ea6c918633ccb250d|126377db-9f22-f9c7-3eb2-49553f7e25c9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".slide-5",
                "originalId": "6292458ea6c918633ccb250d|126377db-9f22-f9c7-3eb2-49553f7e25c9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1649926826014
        },
        "e-1276": {
            "id": "e-1276",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1277"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".portfolio-grid-collection-item",
                "originalId": "6292458ea6c9187e6dcb252d|7a0de349-8078-e8f7-1a14-e8faa8cbff35",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".portfolio-grid-collection-item",
                "originalId": "6292458ea6c9187e6dcb252d|7a0de349-8078-e8f7-1a14-e8faa8cbff35",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1650034338528
        },
        "e-1277": {
            "id": "e-1277",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1276"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".portfolio-grid-collection-item",
                "originalId": "6292458ea6c9187e6dcb252d|7a0de349-8078-e8f7-1a14-e8faa8cbff35",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".portfolio-grid-collection-item",
                "originalId": "6292458ea6c9187e6dcb252d|7a0de349-8078-e8f7-1a14-e8faa8cbff35",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1650034338533
        },
        "e-1280": {
            "id": "e-1280",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1281"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".portfolio-masonry-image-wrapper",
                "originalId": "6292458ea6c91805a6cb252e|339ecfd1-3cf3-3bd2-7ea9-97af6d64d53f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".portfolio-masonry-image-wrapper",
                "originalId": "6292458ea6c91805a6cb252e|339ecfd1-3cf3-3bd2-7ea9-97af6d64d53f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1650276600101
        },
        "e-1281": {
            "id": "e-1281",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1280"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".portfolio-masonry-image-wrapper",
                "originalId": "6292458ea6c91805a6cb252e|339ecfd1-3cf3-3bd2-7ea9-97af6d64d53f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".portfolio-masonry-image-wrapper",
                "originalId": "6292458ea6c91805a6cb252e|339ecfd1-3cf3-3bd2-7ea9-97af6d64d53f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1650276600109
        },
        "e-1360": {
            "id": "e-1360",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1361"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".about-3-tab-link",
                "originalId": "6292458ea6c91829b1cb250e|8029e61b-0de8-ee2f-8e2b-0227913c5bf5",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".about-3-tab-link",
                "originalId": "6292458ea6c91829b1cb250e|8029e61b-0de8-ee2f-8e2b-0227913c5bf5",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1650385609512
        },
        "e-1361": {
            "id": "e-1361",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1360"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".about-3-tab-link",
                "originalId": "6292458ea6c91829b1cb250e|8029e61b-0de8-ee2f-8e2b-0227913c5bf5",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".about-3-tab-link",
                "originalId": "6292458ea6c91829b1cb250e|8029e61b-0de8-ee2f-8e2b-0227913c5bf5",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1650385609517
        },
        "e-1597": {
            "id": "e-1597",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-1579"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9188280cb251f|dcc76b6d-d9bd-9f0e-c6bc-dbc9e653048b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9188280cb251f|dcc76b6d-d9bd-9f0e-c6bc-dbc9e653048b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1623763882545
        },
        "e-1668": {
            "id": "e-1668",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1671"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9187d88cb2521|2758fad0-0e4b-2f14-a171-18c70094988a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9187d88cb2521|2758fad0-0e4b-2f14-a171-18c70094988a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 400,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1648484172709
        },
        "e-1670": {
            "id": "e-1670",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-80",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1677"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9187d88cb2521|2758fad0-0e4b-2f14-a171-18c70094988a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9187d88cb2521|2758fad0-0e4b-2f14-a171-18c70094988a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1642490896095
        },
        "e-1677": {
            "id": "e-1677",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-81",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1670"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9187d88cb2521|2758fad0-0e4b-2f14-a171-18c70094988a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9187d88cb2521|2758fad0-0e4b-2f14-a171-18c70094988a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1642490896095
        },
        "e-1702": {
            "id": "e-1702",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1707"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".contacts-wrapper-2",
                "originalId": "235c0af8-2d7d-ce42-1cf2-6bf9394094e6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".contacts-wrapper-2",
                "originalId": "235c0af8-2d7d-ce42-1cf2-6bf9394094e6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1648484537171
        },
        "e-1703": {
            "id": "e-1703",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1706"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".testimonials",
                "originalId": "e9472f89-aeb4-7c23-74d6-f320605bbb27",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".testimonials",
                "originalId": "e9472f89-aeb4-7c23-74d6-f320605bbb27",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1648484401807
        },
        "e-1704": {
            "id": "e-1704",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1709"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-section-title",
                "originalId": "6292458ea6c9187d88cb2521|26d9aa9a-f25e-0a9e-7676-55328224da4a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-section-title",
                "originalId": "6292458ea6c9187d88cb2521|26d9aa9a-f25e-0a9e-7676-55328224da4a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1648484420796
        },
        "e-1712": {
            "id": "e-1712",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1711"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".location-map-wrapper.home-page",
                "originalId": "6370acf4-aba9-a2e7-43b5-152aab2a3600",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".location-map-wrapper.home-page",
                "originalId": "6370acf4-aba9-a2e7-43b5-152aab2a3600",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1648486192583
        },
        "e-1716": {
            "id": "e-1716",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1705"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-title-center",
                "originalId": "235c0af8-2d7d-ce42-1cf2-6bf9394094dd",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-title-center",
                "originalId": "235c0af8-2d7d-ce42-1cf2-6bf9394094dd",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1648484510069
        },
        "e-1717": {
            "id": "e-1717",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-92",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1756"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-link-2",
                "originalId": "32acf413-f35b-4404-7207-bbd1985db50c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-link-2",
                "originalId": "32acf413-f35b-4404-7207-bbd1985db50c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1648112298494
        },
        "e-1718": {
            "id": "e-1718",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-91",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1755"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".footer-link-2",
                "originalId": "32acf413-f35b-4404-7207-bbd1985db50c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".footer-link-2",
                "originalId": "32acf413-f35b-4404-7207-bbd1985db50c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1648112298481
        },
        "e-1754": {
            "id": "e-1754",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1755"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-title-wrapper-2",
                "originalId": "6292458ea6c91884f6cb2523|b2a523da-8722-b251-b7f1-17794f22e588",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-title-wrapper-2",
                "originalId": "6292458ea6c91884f6cb2523|b2a523da-8722-b251-b7f1-17794f22e588",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1652802414503
        },
        "e-1760": {
            "id": "e-1760",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1761"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".courses-collection",
                "originalId": "6278d8a6b3562cf0027ca46e|9dfc9c45-b61a-30c4-abfe-b8a50ddeffa2",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".courses-collection",
                "originalId": "6278d8a6b3562cf0027ca46e|9dfc9c45-b61a-30c4-abfe-b8a50ddeffa2",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1652803299080
        },
        "e-1762": {
            "id": "e-1762",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1763"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".home-4-testimonials-wrapper",
                "originalId": "d084625c-111b-941c-fdc0-66f24700dae3",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".home-4-testimonials-wrapper",
                "originalId": "d084625c-111b-941c-fdc0-66f24700dae3",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1652802499221
        },
        "e-1764": {
            "id": "e-1764",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1765"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".testimonials-wrapper-2",
                "originalId": "d084625c-111b-941c-fdc0-66f24700dae3",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".testimonials-wrapper-2",
                "originalId": "d084625c-111b-941c-fdc0-66f24700dae3",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1652802499221
        },
        "e-1766": {
            "id": "e-1766",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1767"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".home-team-wrapper",
                "originalId": "6292458ea6c91884f6cb2523|ac3b9c08-2aeb-039e-8580-5296959dbc48",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".home-team-wrapper",
                "originalId": "6292458ea6c91884f6cb2523|ac3b9c08-2aeb-039e-8580-5296959dbc48",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1652802519522
        },
        "e-1777": {
            "id": "e-1777",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1778"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".top-footer-image-wrapper",
                "originalId": "6292458ea6c91884f6cb2523|ae63bfab-49d3-ff67-96a8-375c6dda9246",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".top-footer-image-wrapper",
                "originalId": "6292458ea6c91884f6cb2523|ae63bfab-49d3-ff67-96a8-375c6dda9246",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1652802585662
        },
        "e-1788": {
            "id": "e-1788",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-1782"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".top-banner-button-wrapper",
                "originalId": "624bf5d052a82827dbfc91e4|3808e6e0-b029-e908-e6bf-4bfe931b7c82",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".top-banner-button-wrapper",
                "originalId": "624bf5d052a82827dbfc91e4|3808e6e0-b029-e908-e6bf-4bfe931b7c82",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1649850176920
        },
        "e-1790": {
            "id": "e-1790",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1795"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".top-banner-button-wrapper",
                "originalId": "624bf5d052a82827dbfc91e4|3808e6e0-b029-e908-e6bf-4bfe931b7c82",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".top-banner-button-wrapper",
                "originalId": "624bf5d052a82827dbfc91e4|3808e6e0-b029-e908-e6bf-4bfe931b7c82",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1649850188950
        },
        "e-1799": {
            "id": "e-1799",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1800"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6292458ea6c9187d88cb2521|a0ccb8f1-1652-5014-fdae-0469c0e2fef3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9187d88cb2521|a0ccb8f1-1652-5014-fdae-0469c0e2fef3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653299342690
        },
        "e-1800": {
            "id": "e-1800",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1799"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6292458ea6c9187d88cb2521|a0ccb8f1-1652-5014-fdae-0469c0e2fef3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9187d88cb2521|a0ccb8f1-1652-5014-fdae-0469c0e2fef3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653299342690
        },
        "e-1801": {
            "id": "e-1801",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1802"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6292458ea6c9187d88cb2521|24439c64-bacf-636d-4ae0-1c27f8c50356",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9187d88cb2521|24439c64-bacf-636d-4ae0-1c27f8c50356",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653299344658
        },
        "e-1802": {
            "id": "e-1802",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1801"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6292458ea6c9187d88cb2521|24439c64-bacf-636d-4ae0-1c27f8c50356",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9187d88cb2521|24439c64-bacf-636d-4ae0-1c27f8c50356",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653299344658
        },
        "e-1803": {
            "id": "e-1803",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1804"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6292458ea6c9187d88cb2521|73481c58-9cad-9cf3-c593-4b5ed860d2d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9187d88cb2521|73481c58-9cad-9cf3-c593-4b5ed860d2d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653299395621
        },
        "e-1804": {
            "id": "e-1804",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1803"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6292458ea6c9187d88cb2521|73481c58-9cad-9cf3-c593-4b5ed860d2d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9187d88cb2521|73481c58-9cad-9cf3-c593-4b5ed860d2d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653299395621
        },
        "e-1830": {
            "id": "e-1830",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-1836"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".about-us-img._2",
                "originalId": "6292458ea6c9182ef6cb2524|740c1e62-d978-2cc3-b532-04aee99c278b",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".about-us-img._2",
                "originalId": "6292458ea6c9182ef6cb2524|740c1e62-d978-2cc3-b532-04aee99c278b",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1624013213294
        },
        "e-1832": {
            "id": "e-1832",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1831"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".about-us-img._5",
                "originalId": "6292458ea6c9182ef6cb2524|740c1e62-d978-2cc3-b532-04aee99c278e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".about-us-img._5",
                "originalId": "6292458ea6c9182ef6cb2524|740c1e62-d978-2cc3-b532-04aee99c278e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1624013234582
        },
        "e-1834": {
            "id": "e-1834",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottomRight",
                    "autoStopEventId": "e-1833"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".about-us-img._4",
                "originalId": "6292458ea6c9182ef6cb2524|740c1e62-d978-2cc3-b532-04aee99c278d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".about-us-img._4",
                "originalId": "6292458ea6c9182ef6cb2524|740c1e62-d978-2cc3-b532-04aee99c278d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "BOTTOM_RIGHT",
                "effectIn": true
            },
            "createdOn": 1624002519242
        },
        "e-1835": {
            "id": "e-1835",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-1828"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".about-us-img._3",
                "originalId": "6292458ea6c9182ef6cb2524|740c1e62-d978-2cc3-b532-04aee99c278c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".about-us-img._3",
                "originalId": "6292458ea6c9182ef6cb2524|740c1e62-d978-2cc3-b532-04aee99c278c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1624002443430
        },
        "e-1837": {
            "id": "e-1837",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-1829"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".subtitle",
                "originalId": "61f838d84f9d78d92ed90992|d678fe53-4a53-f558-5539-1d7a76883d65",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".subtitle",
                "originalId": "61f838d84f9d78d92ed90992|d678fe53-4a53-f558-5539-1d7a76883d65",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 300,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1642503033449
        },
        "e-1838": {
            "id": "e-1838",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-1826"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".about-us-img._1",
                "originalId": "61f838d84f9d7886b1d90990|83c04074-e508-859f-4ee2-26a206ffed89",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".about-us-img._1",
                "originalId": "61f838d84f9d7886b1d90990|83c04074-e508-859f-4ee2-26a206ffed89",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 500,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1622559413938
        },
        "e-1839": {
            "id": "e-1839",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-114",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1840"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".home-5-our-services-wrap",
                "originalId": "61f838d84f9d78d92ed90992|b7dd8a45-97da-215d-e349-f03207701c71",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".home-5-our-services-wrap",
                "originalId": "61f838d84f9d78d92ed90992|b7dd8a45-97da-215d-e349-f03207701c71",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1641375490849
        },
        "e-1840": {
            "id": "e-1840",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-115",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1839"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".home-5-our-services-wrap",
                "originalId": "61f838d84f9d78d92ed90992|b7dd8a45-97da-215d-e349-f03207701c71",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".home-5-our-services-wrap",
                "originalId": "61f838d84f9d78d92ed90992|b7dd8a45-97da-215d-e349-f03207701c71",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1641375490857
        },
        "e-1870": {
            "id": "e-1870",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1871"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".central-alignment-heaading",
                "originalId": "62207e1dcb81f326fae6df8f|30e9cb06-a386-b29e-3bfa-f15e5e9f6226",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".central-alignment-heaading",
                "originalId": "62207e1dcb81f326fae6df8f|30e9cb06-a386-b29e-3bfa-f15e5e9f6226",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1643377093215
        },
        "e-1871": {
            "id": "e-1871",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeOut",
                    "autoStopEventId": "e-1870"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".central-alignment-heaading",
                "originalId": "62207e1dcb81f326fae6df8f|30e9cb06-a386-b29e-3bfa-f15e5e9f6226",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".central-alignment-heaading",
                "originalId": "62207e1dcb81f326fae6df8f|30e9cb06-a386-b29e-3bfa-f15e5e9f6226",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": false
            },
            "createdOn": 1643377093251
        },
        "e-1873": {
            "id": "e-1873",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-1874"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading-wrapper",
                "originalId": "624bf5d052a828127ffc91ea|da57d2ab-8252-0166-8b79-18b88c1dcfb9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-wrapper",
                "originalId": "624bf5d052a828127ffc91ea|da57d2ab-8252-0166-8b79-18b88c1dcfb9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1649850290298
        },
        "e-1886": {
            "id": "e-1886",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-461"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading-wrapper",
                "originalId": "624bf5d052a828127ffc91ea|da57d2ab-8252-0166-8b79-18b88c1dcfb9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-wrapper",
                "originalId": "624bf5d052a828127ffc91ea|da57d2ab-8252-0166-8b79-18b88c1dcfb9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1649850305495
        },
        "e-1919": {
            "id": "e-1919",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-399"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c918ebf5cb2526|6b026fe8-28ff-b49d-b40d-947eed3ce1d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c918ebf5cb2526|6b026fe8-28ff-b49d-b40d-947eed3ce1d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1649849127671
        },
        "e-1924": {
            "id": "e-1924",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-1926"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".main-image",
                "originalId": "6292458ea6c918ebf5cb2526|b47cd9f9-b7d2-10f7-5341-6f7bd4a5e218",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".main-image",
                "originalId": "6292458ea6c918ebf5cb2526|b47cd9f9-b7d2-10f7-5341-6f7bd4a5e218",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1649849248024
        },
        "e-1925": {
            "id": "e-1925",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1927"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".content-wrapper",
                "originalId": "6292458ea6c918ebf5cb2526|b47cd9f9-b7d2-10f7-5341-6f7bd4a5e21a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".content-wrapper",
                "originalId": "6292458ea6c918ebf5cb2526|b47cd9f9-b7d2-10f7-5341-6f7bd4a5e21a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1649849199568
        },
        "e-1929": {
            "id": "e-1929",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1933"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".main-image",
                "originalId": "6292458ea6c918ebf5cb2526|b47cd9f9-b7d2-10f7-5341-6f7bd4a5e218",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".main-image",
                "originalId": "6292458ea6c918ebf5cb2526|b47cd9f9-b7d2-10f7-5341-6f7bd4a5e218",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1649849258080
        },
        "e-1930": {
            "id": "e-1930",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-405"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".content-wrapper",
                "originalId": "6292458ea6c918ebf5cb2526|b47cd9f9-b7d2-10f7-5341-6f7bd4a5e21a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".content-wrapper",
                "originalId": "6292458ea6c918ebf5cb2526|b47cd9f9-b7d2-10f7-5341-6f7bd4a5e21a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1649849211018
        },
        "e-1934": {
            "id": "e-1934",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-149",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1935"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".content",
                "originalId": "7d22545d-d9ea-09dd-c05e-9359e35db8b6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".content",
                "originalId": "7d22545d-d9ea-09dd-c05e-9359e35db8b6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1648642588442
        },
        "e-1935": {
            "id": "e-1935",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-150",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1934"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".content",
                "originalId": "7d22545d-d9ea-09dd-c05e-9359e35db8b6",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".content",
                "originalId": "7d22545d-d9ea-09dd-c05e-9359e35db8b6",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1648642588444
        },
        "e-1938": {
            "id": "e-1938",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-1951"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".industries-block-wrapper",
                "originalId": "6292458ea6c918ebf5cb2526|1f8d4b7b-42e8-99f1-b7f7-d8aec94a1da4",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".industries-block-wrapper",
                "originalId": "6292458ea6c918ebf5cb2526|1f8d4b7b-42e8-99f1-b7f7-d8aec94a1da4",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1649849615068
        },
        "e-1943": {
            "id": "e-1943",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-1949"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".industries-block-wrapper",
                "originalId": "6292458ea6c918ebf5cb2526|1f8d4b7b-42e8-99f1-b7f7-d8aec94a1da4",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".industries-block-wrapper",
                "originalId": "6292458ea6c918ebf5cb2526|1f8d4b7b-42e8-99f1-b7f7-d8aec94a1da4",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1649849625213
        },
        "e-1956": {
            "id": "e-1956",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-151",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1957"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519|1a5a4fe8-ed27-bed1-98a4-1e6ed6407324",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519|1a5a4fe8-ed27-bed1-98a4-1e6ed6407324",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653579084989
        },
        "e-1957": {
            "id": "e-1957",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-152",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1956"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519|1a5a4fe8-ed27-bed1-98a4-1e6ed6407324",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519|1a5a4fe8-ed27-bed1-98a4-1e6ed6407324",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653579085007
        },
        "e-1958": {
            "id": "e-1958",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-153",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1959"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519|a0533b00-24ef-faa4-daa0-c501b1c13abd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519|a0533b00-24ef-faa4-daa0-c501b1c13abd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653579356394
        },
        "e-1959": {
            "id": "e-1959",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-154",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1958"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519|a0533b00-24ef-faa4-daa0-c501b1c13abd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519|a0533b00-24ef-faa4-daa0-c501b1c13abd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653579356414
        },
        "e-1960": {
            "id": "e-1960",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-156",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1961"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c|0a4ba8c3-6d5d-09f6-d3db-96fd08aa7d2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c|0a4ba8c3-6d5d-09f6-d3db-96fd08aa7d2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653580352603
        },
        "e-1961": {
            "id": "e-1961",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-157",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1960"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c|0a4ba8c3-6d5d-09f6-d3db-96fd08aa7d2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c|0a4ba8c3-6d5d-09f6-d3db-96fd08aa7d2c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653580352617
        },
        "e-1962": {
            "id": "e-1962",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-156",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1963"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c|f4f8b40a-dd31-23ff-b502-c3346a125471",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c|f4f8b40a-dd31-23ff-b502-c3346a125471",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653580421428
        },
        "e-1963": {
            "id": "e-1963",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-157",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1962"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c|f4f8b40a-dd31-23ff-b502-c3346a125471",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c|f4f8b40a-dd31-23ff-b502-c3346a125471",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653580421501
        },
        "e-1964": {
            "id": "e-1964",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-158",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1965"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".home-9-team-member-wrap",
                "originalId": "6292458ea6c918e18bcb2528|7960c622-9e2f-9245-4331-5dc2ce05276d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".home-9-team-member-wrap",
                "originalId": "6292458ea6c918e18bcb2528|7960c622-9e2f-9245-4331-5dc2ce05276d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653640522446
        },
        "e-1965": {
            "id": "e-1965",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-159",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1964"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".home-9-team-member-wrap",
                "originalId": "6292458ea6c918e18bcb2528|7960c622-9e2f-9245-4331-5dc2ce05276d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".home-9-team-member-wrap",
                "originalId": "6292458ea6c918e18bcb2528|7960c622-9e2f-9245-4331-5dc2ce05276d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1653640522461
        },
        "e-1970": {
            "id": "e-1970",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1971"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".home-tab-link",
                "originalId": "6292458ea6c9188280cb251f|d21afdfc-a665-c819-c19c-7091d1aa6770",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".home-tab-link",
                "originalId": "6292458ea6c9188280cb251f|d21afdfc-a665-c819-c19c-7091d1aa6770",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654090523833
        },
        "e-1971": {
            "id": "e-1971",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1970"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".home-tab-link",
                "originalId": "6292458ea6c9188280cb251f|d21afdfc-a665-c819-c19c-7091d1aa6770",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".home-tab-link",
                "originalId": "6292458ea6c9188280cb251f|d21afdfc-a665-c819-c19c-7091d1aa6770",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654090523848
        },
        "e-1980": {
            "id": "e-1980",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1981"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654525888995
        },
        "e-1982": {
            "id": "e-1982",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1983"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c918b328cb251d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c918b328cb251d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654526027642
        },
        "e-1984": {
            "id": "e-1984",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1985"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9189d61cb251a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9189d61cb251a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654526089280
        },
        "e-1986": {
            "id": "e-1986",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1987"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629e10f560bbc2b82199bc68",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629e10f560bbc2b82199bc68",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654526427863
        },
        "e-1988": {
            "id": "e-1988",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1989"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9188280cb251f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9188280cb251f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654526619631
        },
        "e-1990": {
            "id": "e-1990",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1991"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629e13f76b6051122256211a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629e13f76b6051122256211a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654527039852
        },
        "e-1992": {
            "id": "e-1992",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1993"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629e14d5013a1247c0ad1816",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629e14d5013a1247c0ad1816",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654527279157
        },
        "e-1994": {
            "id": "e-1994",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-161",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1995"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629e15a52ace7a5cb1352b77|53ff260c-dce4-c749-6e3b-4d3370a1adae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629e15a52ace7a5cb1352b77|53ff260c-dce4-c749-6e3b-4d3370a1adae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654527499482
        },
        "e-1996": {
            "id": "e-1996",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1997"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629e15a52ace7a5cb1352b77",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629e15a52ace7a5cb1352b77",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654527514172
        },
        "e-1998": {
            "id": "e-1998",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-1999"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654527828778
        },
        "e-2000": {
            "id": "e-2000",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-161",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2001"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629f15ce3c908d12425fc279|50e0a978-d774-2c18-ac87-4e1033c57151",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629f15ce3c908d12425fc279|50e0a978-d774-2c18-ac87-4e1033c57151",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654595892662
        },
        "e-2002": {
            "id": "e-2002",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2003"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629f36a187bb433abd0a26a3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629f36a187bb433abd0a26a3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654601376969
        },
        "e-2004": {
            "id": "e-2004",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2005"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629f36c2eb60d78110da4d74",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629f36c2eb60d78110da4d74",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654601410146
        },
        "e-2006": {
            "id": "e-2006",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2007"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629f36efdfb6ff5aab74a148",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629f36efdfb6ff5aab74a148",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654601454884
        },
        "e-2008": {
            "id": "e-2008",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-161",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2009"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629f372d1f7d3880b0848b15|53ff260c-dce4-c749-6e3b-4d3370a1adae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629f372d1f7d3880b0848b15|53ff260c-dce4-c749-6e3b-4d3370a1adae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654601517242
        },
        "e-2010": {
            "id": "e-2010",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2011"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629f372d1f7d3880b0848b15",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629f372d1f7d3880b0848b15",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654601517242
        },
        "e-2012": {
            "id": "e-2012",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-156",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2013"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c|a49e9f73-05e6-0db3-f0d1-14f84c936cde",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c|a49e9f73-05e6-0db3-f0d1-14f84c936cde",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606347800
        },
        "e-2013": {
            "id": "e-2013",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-157",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2012"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c|a49e9f73-05e6-0db3-f0d1-14f84c936cde",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c|a49e9f73-05e6-0db3-f0d1-14f84c936cde",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606347800
        },
        "e-2014": {
            "id": "e-2014",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-156",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2015"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c|a49e9f73-05e6-0db3-f0d1-14f84c936ce6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c|a49e9f73-05e6-0db3-f0d1-14f84c936ce6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606347800
        },
        "e-2015": {
            "id": "e-2015",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-157",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2014"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c|a49e9f73-05e6-0db3-f0d1-14f84c936ce6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c|a49e9f73-05e6-0db3-f0d1-14f84c936ce6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606347800
        },
        "e-2016": {
            "id": "e-2016",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-156",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2017"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c|81f3c888-f7e3-e5a7-5958-75f8a9852ee1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c|81f3c888-f7e3-e5a7-5958-75f8a9852ee1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606610075
        },
        "e-2017": {
            "id": "e-2017",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-157",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2016"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c|81f3c888-f7e3-e5a7-5958-75f8a9852ee1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c|81f3c888-f7e3-e5a7-5958-75f8a9852ee1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606610075
        },
        "e-2018": {
            "id": "e-2018",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-156",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2019"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c|81f3c888-f7e3-e5a7-5958-75f8a9852ee9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c|81f3c888-f7e3-e5a7-5958-75f8a9852ee9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606610075
        },
        "e-2019": {
            "id": "e-2019",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-157",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2018"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c91856e9cb251c|81f3c888-f7e3-e5a7-5958-75f8a9852ee9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c91856e9cb251c|81f3c888-f7e3-e5a7-5958-75f8a9852ee9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606610075
        },
        "e-2020": {
            "id": "e-2020",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-162",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2021"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519|16bb76f5-e9ce-eb9f-17da-8a45c6aedb93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519|16bb76f5-e9ce-eb9f-17da-8a45c6aedb93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606947135
        },
        "e-2021": {
            "id": "e-2021",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-152",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2020"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519|16bb76f5-e9ce-eb9f-17da-8a45c6aedb93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519|16bb76f5-e9ce-eb9f-17da-8a45c6aedb93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606947135
        },
        "e-2022": {
            "id": "e-2022",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-163",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2023"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519|16bb76f5-e9ce-eb9f-17da-8a45c6aedb9c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519|16bb76f5-e9ce-eb9f-17da-8a45c6aedb9c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606947135
        },
        "e-2023": {
            "id": "e-2023",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-154",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2022"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519|16bb76f5-e9ce-eb9f-17da-8a45c6aedb9c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519|16bb76f5-e9ce-eb9f-17da-8a45c6aedb9c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606947135
        },
        "e-2024": {
            "id": "e-2024",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-164",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2025"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519|5753b42d-2932-d640-b9de-c5065c18d810",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519|5753b42d-2932-d640-b9de-c5065c18d810",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606949694
        },
        "e-2025": {
            "id": "e-2025",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-152",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2024"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519|5753b42d-2932-d640-b9de-c5065c18d810",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519|5753b42d-2932-d640-b9de-c5065c18d810",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606949694
        },
        "e-2026": {
            "id": "e-2026",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-165",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2027"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519|5753b42d-2932-d640-b9de-c5065c18d819",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519|5753b42d-2932-d640-b9de-c5065c18d819",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606949694
        },
        "e-2027": {
            "id": "e-2027",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-154",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2026"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9182259cb2519|5753b42d-2932-d640-b9de-c5065c18d819",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9182259cb2519|5753b42d-2932-d640-b9de-c5065c18d819",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654606949694
        },
        "e-2028": {
            "id": "e-2028",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2029"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9181b23cb2522",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9181b23cb2522",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654607535415
        },
        "e-2030": {
            "id": "e-2030",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2031"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6292458ea6c9187d88cb2521",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6292458ea6c9187d88cb2521",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654607586842
        },
        "e-2032": {
            "id": "e-2032",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2033"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629f14fb9232b534535b1ffa",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629f14fb9232b534535b1ffa",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654607639568
        },
        "e-2034": {
            "id": "e-2034",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2035"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629f151f1cbdaceef19754a3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629f151f1cbdaceef19754a3",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654607672313
        },
        "e-2036": {
            "id": "e-2036",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2037"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629f15b08d62e6f78cdd91c1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629f15b08d62e6f78cdd91c1",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654607701962
        },
        "e-2038": {
            "id": "e-2038",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-160",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2039"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "629f15ce3c908d12425fc279",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "629f15ce3c908d12425fc279",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1654607724311
        },
        "e-2040": {
            "id": "e-2040",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-166",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2041"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "69529a78-324e-3db9-6dc4-38a3eba6b7f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "69529a78-324e-3db9-6dc4-38a3eba6b7f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1684420530415
        }
    },
    "actionLists": {
        "a-21": {
            "id": "a-21",
            "title": "Customer Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0.5,
                        "unit": ""
                    }
                }, {
                    "id": "a-21-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-21-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "globalSwatchId": "7ad493ea",
                        "rValue": 28,
                        "bValue": 31,
                        "gValue": 30,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1649686919091
        },
        "a-22": {
            "id": "a-22",
            "title": "Customer Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {},
                        "value": 0.5,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {},
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1649687125099
        },
        "a-23": {
            "id": "a-23",
            "title": "Service List Item Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 14,
                        "bValue": 14,
                        "gValue": 14,
                        "aValue": 0.6
                    }
                }, {
                    "id": "a-23-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "globalSwatchId": "478a3a9e",
                        "rValue": 214,
                        "bValue": 34,
                        "gValue": 34,
                        "aValue": 1
                    }
                }, {
                    "id": "a-23-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 260,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1649763678194
        },
        "a-24": {
            "id": "a-24",
            "title": "Service List Item Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n-5",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 14,
                        "bValue": 14,
                        "gValue": 14,
                        "aValue": 0.6
                    }
                }, {
                    "id": "a-24-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "yValue": 80,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1649763678194
        },
        "a-25": {
            "id": "a-25",
            "title": "Slide 1 Active Item",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1649857530206
        },
        "a-26": {
            "id": "a-26",
            "title": "Slide 2 Active Item",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "xValue": 24,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1649857530206
        },
        "a-27": {
            "id": "a-27",
            "title": "Slide 3 Active Item",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "xValue": 48,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1649857530206
        },
        "a-29": {
            "id": "a-29",
            "title": "Slide 4 Active Item",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "xValue": 72,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1649857530206
        },
        "a-30": {
            "id": "a-30",
            "title": "Slide 5 Active Item",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {},
                        "xValue": 96,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1649857530206
        },
        "a-40": {
            "id": "a-40",
            "title": "Portfolio Item Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-40-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "yValue": -120,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1650034342148
        },
        "a-41": {
            "id": "a-41",
            "title": "Portfolio Item Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 300,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-41-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1650034342148
        },
        "a-44": {
            "id": "a-44",
            "title": "Portfolio Masonry Item Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1650276606777
        },
        "a-45": {
            "id": "a-45",
            "title": "Portfolio Masonry Item Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1650276606777
        },
        "a-31": {
            "id": "a-31",
            "title": "About 3 Tab In View",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-31-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "globalSwatchId": "7376bfaa",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {},
                        "xValue": 1.3,
                        "yValue": 1.3,
                        "locked": true
                    }
                }, {
                    "id": "a-31-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "globalSwatchId": "478a3a9e",
                        "rValue": 214,
                        "bValue": 34,
                        "gValue": 34,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1650008404289
        },
        "a-32": {
            "id": "a-32",
            "title": "About 3 Tab Out of View",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {},
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-32-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "globalSwatchId": "7376bfaa",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1650008404289
        },
        "a-80": {
            "id": "a-80",
            "title": "Arrow Button Mouseover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-80-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-80-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "xValue": 6,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-80-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "xValue": 8,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-80-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-80-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "globalSwatchId": "a261dafc",
                        "rValue": 0,
                        "bValue": 226,
                        "gValue": 74,
                        "aValue": 1
                    }
                }, {
                    "id": "a-80-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-80-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-80-n-8",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "globalSwatchId": "d81f2e6f",
                        "rValue": 34,
                        "bValue": 34,
                        "gValue": 34,
                        "aValue": 1
                    }
                }, {
                    "id": "a-80-n-9",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "globalSwatchId": "88e2ffb2",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-80-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-80-n-11",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1642151000895
        },
        "a-81": {
            "id": "a-81",
            "title": "Arrow Button Mouseout",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-81-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-81-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-81-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-81-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "globalSwatchId": "88e2ffb2",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-81-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "globalSwatchId": "d81f2e6f",
                        "rValue": 34,
                        "bValue": 34,
                        "gValue": 34,
                        "aValue": 1
                    }
                }, {
                    "id": "a-81-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-81-n-7",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "globalSwatchId": "88e2ffb2",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-81-n-8",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.3
                    }
                }, {
                    "id": "a-81-n-9",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1642151299815
        },
        "a-92": {
            "id": "a-92",
            "title": "Footer Link Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-92-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "globalSwatchId": "990ea2ba",
                        "rValue": 153,
                        "bValue": 153,
                        "gValue": 153,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1648112302783
        },
        "a-91": {
            "id": "a-91",
            "title": "Footer Link Hover On",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-91-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "globalSwatchId": "88e2ffb2",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1648112302783
        },
        "a-3": {
            "id": "a-3",
            "title": "Nav Dropdown Link Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-7",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "globalSwatchId": "7ad493ea",
                        "rValue": 28,
                        "bValue": 31,
                        "gValue": 30,
                        "aValue": 1
                    }
                }, {
                    "id": "a-3-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "globalSwatchId": "7ad493ea",
                        "rValue": 28,
                        "bValue": 31,
                        "gValue": 30,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "xValue": 20,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-8",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "globalSwatchId": "478a3a9e",
                        "rValue": 214,
                        "bValue": 34,
                        "gValue": 34,
                        "aValue": 1
                    }
                }, {
                    "id": "a-3-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "globalSwatchId": "478a3a9e",
                        "rValue": 214,
                        "bValue": 34,
                        "gValue": 34,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1648048133414
        },
        "a-4": {
            "id": "a-4",
            "title": "Nav Dropdown Link Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "globalSwatchId": "478a3a9e",
                        "rValue": 214,
                        "bValue": 34,
                        "gValue": 34,
                        "aValue": 1
                    }
                }, {
                    "id": "a-4-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "globalSwatchId": "7ad493ea",
                        "rValue": 28,
                        "bValue": 31,
                        "gValue": 30,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1648048133414
        },
        "a-114": {
            "id": "a-114",
            "title": "Circle Down on Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-114-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "xValue": null,
                        "yValue": 35,
                        "zValue": null,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "px"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-114-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": true,
                            "id": "61f838d84f9d78d92ed90992|b7dd8a45-97da-215d-e349-f03207701c71"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "px",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1641375546300
        },
        "a-115": {
            "id": "a-115",
            "title": "Circle Up on Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-115-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1641376438799
        },
        "a-149": {
            "id": "a-149",
            "title": "Testimonial Hover Mouse In 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-149-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 250,
                        "target": {},
                        "yValue": -20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-149-n-2",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 250,
                        "target": {},
                        "globalSwatchId": "652833fd",
                        "rValue": 255,
                        "bValue": 56,
                        "gValue": 97,
                        "aValue": 1
                    }
                }, {
                    "id": "a-149-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 250,
                        "target": {},
                        "xValue": 1.1,
                        "yValue": 1.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1648642273794
        },
        "a-150": {
            "id": "a-150",
            "title": "Testimonial Hover Mouse Out 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-150-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 250,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-150-n-2",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 250,
                        "target": {},
                        "globalSwatchId": "24abe6cc",
                        "rValue": 142,
                        "bValue": 154,
                        "gValue": 143,
                        "aValue": 0.3
                    }
                }, {
                    "id": "a-150-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 250,
                        "target": {},
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1648642273794
        },
        "a-151": {
            "id": "a-151",
            "title": "Blog Details Left Arrow Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-151-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-151-n-7",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-151-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-151-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "globalSwatchId": "478a3a9e",
                        "rValue": 214,
                        "bValue": 34,
                        "gValue": 34,
                        "aValue": 1
                    }
                }, {
                    "id": "a-151-n-8",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "478a3a9e",
                        "rValue": 214,
                        "bValue": 34,
                        "gValue": 34,
                        "aValue": 1
                    }
                }, {
                    "id": "a-151-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "xValue": -5,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1653579089235
        },
        "a-152": {
            "id": "a-152",
            "title": "Blog Details Left Arrow Hover Out Green",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-152-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-152-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-152-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1653579089235
        },
        "a-153": {
            "id": "a-153",
            "title": "Blog Details Right Arrow Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-153-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-153-n-7",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-153-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-153-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "globalSwatchId": "478a3a9e",
                        "rValue": 214,
                        "bValue": 34,
                        "gValue": 34,
                        "aValue": 1
                    }
                }, {
                    "id": "a-153-n-8",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "478a3a9e",
                        "rValue": 214,
                        "bValue": 34,
                        "gValue": 34,
                        "aValue": 1
                    }
                }, {
                    "id": "a-153-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "xValue": 5,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1653579365705
        },
        "a-154": {
            "id": "a-154",
            "title": "Blog Details Right Arrow Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-154-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-154-n-6",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-154-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1653579365705
        },
        "a-156": {
            "id": "a-156",
            "title": "Project Details Button Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-156-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-prev-button-link-icon",
                            "selectorGuids": ["d61610f4-ddab-fdf7-3f4d-1a9dad93f899"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-156-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-next-button-link-icon",
                            "selectorGuids": ["353b606c-0b31-669d-7093-9dad5eee573e"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-156-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-prev-button-link-icon",
                            "selectorGuids": ["d61610f4-ddab-fdf7-3f4d-1a9dad93f899"]
                        },
                        "xValue": -5,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-156-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-next-button-link-icon",
                            "selectorGuids": ["353b606c-0b31-669d-7093-9dad5eee573e"]
                        },
                        "xValue": 5,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1653580356910
        },
        "a-157": {
            "id": "a-157",
            "title": "Project Details Button Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-157-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-prev-button-link-icon",
                            "selectorGuids": ["d61610f4-ddab-fdf7-3f4d-1a9dad93f899"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-157-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-next-button-link-icon",
                            "selectorGuids": ["353b606c-0b31-669d-7093-9dad5eee573e"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1653580356910
        },
        "a-158": {
            "id": "a-158",
            "title": "Home 9 Team Member Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-158-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-158-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "yValue": 70,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-158-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {},
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-158-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1653640530665
        },
        "a-159": {
            "id": "a-159",
            "title": "Home 9 Team Member Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-159-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {},
                        "yValue": 70,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-159-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200,
                        "target": {},
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1653640530665
        },
        "a-160": {
            "id": "a-160",
            "title": "Home Tabs Change",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-160-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "selector": ".home-tab-page",
                            "selectorGuids": ["94604199-4deb-c374-74af-39853236bf44"]
                        },
                        "xValue": -150,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-160-n-16",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".tab-content-wrapper",
                            "selectorGuids": ["e3d27648-02ea-988d-fe22-8400211d261e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-160-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".scrollbar",
                            "selectorGuids": ["a23db48f-cba7-1a9b-3603-3ff0ca628140"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-160-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "selector": ".tab-bottom-overlay",
                            "selectorGuids": ["fdde9aba-bd4a-220c-2978-c4bb7aa5b583"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-160-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "selector": ".tab-top-overlay",
                            "selectorGuids": ["6a0ccb78-9fe7-31fb-26be-dab49feb998c"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-160-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".home-tab-page",
                            "selectorGuids": ["94604199-4deb-c374-74af-39853236bf44"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-160-n-12",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "selector": ".tab-bottom-overlay",
                            "selectorGuids": ["fdde9aba-bd4a-220c-2978-c4bb7aa5b583"]
                        },
                        "widthUnit": "AUTO",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-160-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".scrollbar",
                            "selectorGuids": ["a23db48f-cba7-1a9b-3603-3ff0ca628140"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-160-n-13",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "selector": ".tab-top-overlay",
                            "selectorGuids": ["6a0ccb78-9fe7-31fb-26be-dab49feb998c"]
                        },
                        "widthUnit": "AUTO",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-160-n-17",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".tab-content-wrapper",
                            "selectorGuids": ["e3d27648-02ea-988d-fe22-8400211d261e"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1654088576585
        },
        "a-161": {
            "id": "a-161",
            "title": "Progress Bar (Home)",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-161-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".progress-bar-91",
                            "selectorGuids": ["bcd2891f-59e3-6f18-7f77-ae4dcc33ed6c"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-161-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".progress-bar-90",
                            "selectorGuids": ["cf36658d-a163-557b-6612-1430336f7f42"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-161-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".progress-bar-80",
                            "selectorGuids": ["84455871-eaca-9caa-6afa-1c70bbd92141"]
                        },
                        "widthValue": 0,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-161-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1500,
                        "easing": "",
                        "duration": 700,
                        "target": {
                            "selector": ".progress-bar-91",
                            "selectorGuids": ["bcd2891f-59e3-6f18-7f77-ae4dcc33ed6c"]
                        },
                        "widthValue": 91,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-161-n-5",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1500,
                        "easing": "",
                        "duration": 700,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".progress-bar-90",
                            "selectorGuids": ["cf36658d-a163-557b-6612-1430336f7f42"]
                        },
                        "widthValue": 90,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-161-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 1500,
                        "easing": "",
                        "duration": 700,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".progress-bar-80",
                            "selectorGuids": ["84455871-eaca-9caa-6afa-1c70bbd92141"]
                        },
                        "widthValue": 80,
                        "widthUnit": "%",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1650010655164
        },
        "a-162": {
            "id": "a-162",
            "title": "Blog Details Left Arrow Hover Green",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-162-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-162-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-162-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-162-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "globalSwatchId": "b3cd1326",
                        "rValue": 0,
                        "bValue": 130,
                        "gValue": 195,
                        "aValue": 1
                    }
                }, {
                    "id": "a-162-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "b3cd1326",
                        "rValue": 0,
                        "bValue": 130,
                        "gValue": 195,
                        "aValue": 1
                    }
                }, {
                    "id": "a-162-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "xValue": -5,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1653579089235
        },
        "a-163": {
            "id": "a-163",
            "title": "Blog Details Right Arrow Hover Green",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-163-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-163-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-163-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-163-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "globalSwatchId": "b3cd1326",
                        "rValue": 0,
                        "bValue": 130,
                        "gValue": 195,
                        "aValue": 1
                    }
                }, {
                    "id": "a-163-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "b3cd1326",
                        "rValue": 0,
                        "bValue": 130,
                        "gValue": 195,
                        "aValue": 1
                    }
                }, {
                    "id": "a-163-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "xValue": 5,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1653579365705
        },
        "a-164": {
            "id": "a-164",
            "title": "Blog Details Left Arrow Hover Blue",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-164-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-164-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-164-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-164-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "globalSwatchId": "daa1b239",
                        "rValue": 0,
                        "bValue": 221,
                        "gValue": 180,
                        "aValue": 1
                    }
                }, {
                    "id": "a-164-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "daa1b239",
                        "rValue": 0,
                        "bValue": 221,
                        "gValue": 180,
                        "aValue": 1
                    }
                }, {
                    "id": "a-164-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".prev-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee71926"]
                        },
                        "xValue": -5,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1653579089235
        },
        "a-165": {
            "id": "a-165",
            "title": "Blog Details Right Arrow Hover Blue",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-165-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-165-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "e2382e90",
                        "rValue": 175,
                        "bValue": 175,
                        "gValue": 175,
                        "aValue": 1
                    }
                }, {
                    "id": "a-165-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-165-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "globalSwatchId": "daa1b239",
                        "rValue": 0,
                        "bValue": 221,
                        "gValue": 180,
                        "aValue": 1
                    }
                }, {
                    "id": "a-165-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-details-link-title",
                            "selectorGuids": ["2f094545-8a26-2d6f-958b-cc8904d8f94b"]
                        },
                        "globalSwatchId": "daa1b239",
                        "rValue": 0,
                        "bValue": 221,
                        "gValue": 180,
                        "aValue": 1
                    }
                }, {
                    "id": "a-165-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".next-post-arrow",
                            "selectorGuids": ["34e07f19-2689-e4d6-30cf-251eeee7192a"]
                        },
                        "xValue": 5,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1653579365705
        },
        "a-166": {
            "id": "a-166",
            "title": "Hire Popup Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-166-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".hire-popup",
                            "selectorGuids": ["c76d5277-28aa-8f1e-6f05-c7850cb0233f"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-166-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".hire-popup",
                            "selectorGuids": ["c76d5277-28aa-8f1e-6f05-c7850cb0233f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1684420534894
        },
        "fadeIn": {
            "id": "fadeIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInBottomRight": {
            "id": "slideInBottomRight",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInRight": {
            "id": "slideInRight",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "fadeOut": {
            "id": "fadeOut",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
  });
  