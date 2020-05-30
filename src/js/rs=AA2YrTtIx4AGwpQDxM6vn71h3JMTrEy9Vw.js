this.gbar_ = this.gbar_ || {};
(function (_) {
    var window = this;
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var aa, ba, ca, da, fa, ha, ja, ka, oa, pa, Aa, Ba, Da, Ea, Ga;
        aa = function (a) {
            var b = 0;
            return function () {
                return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
            }
        };
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        };
        ca = function (a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("a");
        };
        da = ca(this);
        fa = function (a, b) {
            if (b) {
                var c = da;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ba(c, a, {configurable: !0, writable: !0, value: b})
            }
        };
        fa("Symbol", function (a) {
            if (a) return a;
            var b = function (e, f) {
                this.j = e;
                ba(this, "description", {configurable: !0, writable: !0, value: f})
            };
            b.prototype.toString = function () {
                return this.j
            };
            var c = 0,
                d = function (e) {
                    if (this instanceof d) throw new TypeError("b");
                    return new b("jscomp_symbol_" + (e || "") + "_" + c++, e)
                };
            return d
        });
        fa("Symbol.iterator", function (a) {
            if (a) return a;
            a = Symbol("c");
            for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
                var d = da[b[c]];
                "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                        return ha(aa(this))
                    }
                })
            }
            return a
        });
        ha = function (a) {
            a = {next: a};
            a[Symbol.iterator] = function () {
                return this
            };
            return a
        };
        _.ia = function (a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {next: aa(a)}
        };
        ja = "function" == typeof Object.create ? Object.create : function (a) {
            var b = function () {
            };
            b.prototype = a;
            return new b
        };
        if ("function" == typeof Object.setPrototypeOf) ka = Object.setPrototypeOf;
        else {
            var la;
            a: {
                var ma = {Ug: !0},
                    na = {};
                try {
                    na.__proto__ = ma;
                    la = na.Ug;
                    break a
                } catch (a) {
                }
                la = !1
            }
            ka = la ? function (a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError("d`" + a);
                return a
            } : null
        }
        oa = ka;
        _.n = function (a, b) {
            a.prototype = ja(b.prototype);
            a.prototype.constructor = a;
            if (oa) oa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.M = b.prototype
        };
        pa = function (a, b, c) {
            if (null == a) throw new TypeError("e`" + c);
            if (b instanceof RegExp) throw new TypeError("f`" + c);
            return a + ""
        };
        fa("String.prototype.startsWith", function (a) {
            return a ? a : function (b, c) {
                var d = pa(this, b, "startsWith"),
                    e = d.length,
                    f = b.length;
                c = Math.max(0, Math.min(c | 0, d.length));
                for (var g = 0; g < f && c < e;)
                    if (d[c++] != b[g++]) return !1;
                return g >= f
            }
        });
        fa("Number.MAX_SAFE_INTEGER", function () {
            return 9007199254740991
        });
        var qa = function (a, b) {
            a instanceof String && (a += "");
            var c = 0,
                d = {
                    next: function () {
                        if (c < a.length) {
                            var e = c++;
                            return {value: b(e, a[e]), done: !1}
                        }
                        d.next = function () {
                            return {done: !0, value: void 0}
                        };
                        return d.next()
                    }
                };
            d[Symbol.iterator] = function () {
                return d
            };
            return d
        };
        fa("Array.prototype.keys", function (a) {
            return a ? a : function () {
                return qa(this, function (b) {
                    return b
                })
            }
        });
        fa("Array.prototype.values", function (a) {
            return a ? a : function () {
                return qa(this, function (b, c) {
                    return c
                })
            }
        });
        var ra = function (a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
        fa("WeakMap", function (a) {
            function b() {
            }

            function c(l) {
                var m = typeof l;
                return "object" === m && null !== l || "function" === m
            }

            function d(l) {
                if (!ra(l, f)) {
                    var m = new b;
                    ba(l, f, {value: m})
                }
            }

            function e(l) {
                var m = Object[l];
                m && (Object[l] = function (r) {
                    if (r instanceof b) return r;
                    d(r);
                    return m(r)
                })
            }

            if (function () {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        m = Object.seal({}),
                        r = new a([
                            [l, 2],
                            [m, 3]
                        ]);
                    if (2 != r.get(l) || 3 != r.get(m)) return !1;
                    r.delete(l);
                    r.set(m, 4);
                    return !r.has(l) && 4 == r.get(m)
                } catch (t) {
                    return !1
                }
            }()) return a;
            var f = "$jscomp_hidden_" + Math.random();
            e("freeze");
            e("preventExtensions");
            e("seal");
            var g = 0,
                k = function (l) {
                    this.j = (g += Math.random() + 1).toString();
                    if (l) {
                        l = _.ia(l);
                        for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
                    }
                };
            k.prototype.set = function (l, m) {
                if (!c(l)) throw Error("g");
                d(l);
                if (!ra(l, f)) throw Error("h`" + l);
                l[f][this.j] = m;
                return this
            };
            k.prototype.get = function (l) {
                return c(l) && ra(l, f) ? l[f][this.j] : void 0
            };
            k.prototype.has = function (l) {
                return c(l) && ra(l, f) && ra(l[f], this.j)
            };
            k.prototype.delete = function (l) {
                return c(l) &&
                ra(l, f) && ra(l[f], this.j) ? delete l[f][this.j] : !1
            };
            return k
        });
        var sa = "function" == typeof Object.assign ? Object.assign : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ra(d, e) && (a[e] = d[e])
            }
            return a
        };
        fa("Object.assign", function (a) {
            return a || sa
        });
        fa("Array.from", function (a) {
            return a ? a : function (b, c, d) {
                c = null != c ? c : function (k) {
                    return k
                };
                var e = [],
                    f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
                if ("function" == typeof f) {
                    b = f.call(b);
                    for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
                } else
                    for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
                return e
            }
        });
        fa("Map", function (a) {
            if (function () {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var k = Object.seal({x: 4}),
                        l = new a(_.ia([
                            [k, "s"]
                        ]));
                    if ("s" != l.get(k) || 1 != l.size || l.get({x: 4}) || l.set({x: 4}, "t") != l || 2 != l.size) return !1;
                    var m = l.entries(),
                        r = m.next();
                    if (r.done || r.value[0] != k || "s" != r.value[1]) return !1;
                    r = m.next();
                    return r.done || 4 != r.value[0].x || "t" != r.value[1] || !m.next().done ? !1 : !0
                } catch (t) {
                    return !1
                }
            }()) return a;
            var b = new WeakMap,
                c = function (k) {
                    this.o = {};
                    this.j =
                        f();
                    this.size = 0;
                    if (k) {
                        k = _.ia(k);
                        for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                    }
                };
            c.prototype.set = function (k, l) {
                k = 0 === k ? 0 : k;
                var m = d(this, k);
                m.list || (m.list = this.o[m.id] = []);
                m.Xa ? m.Xa.value = l : (m.Xa = {
                    next: this.j,
                    Zb: this.j.Zb,
                    head: this.j,
                    key: k,
                    value: l
                }, m.list.push(m.Xa), this.j.Zb.next = m.Xa, this.j.Zb = m.Xa, this.size++);
                return this
            };
            c.prototype.delete = function (k) {
                k = d(this, k);
                return k.Xa && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.o[k.id], k.Xa.Zb.next = k.Xa.next, k.Xa.next.Zb =
                    k.Xa.Zb, k.Xa.head = null, this.size--, !0) : !1
            };
            c.prototype.clear = function () {
                this.o = {};
                this.j = this.j.Zb = f();
                this.size = 0
            };
            c.prototype.has = function (k) {
                return !!d(this, k).Xa
            };
            c.prototype.get = function (k) {
                return (k = d(this, k).Xa) && k.value
            };
            c.prototype.entries = function () {
                return e(this, function (k) {
                    return [k.key, k.value]
                })
            };
            c.prototype.keys = function () {
                return e(this, function (k) {
                    return k.key
                })
            };
            c.prototype.values = function () {
                return e(this, function (k) {
                    return k.value
                })
            };
            c.prototype.forEach = function (k, l) {
                for (var m = this.entries(),
                         r; !(r = m.next()).done;) r = r.value, k.call(l, r[1], r[0], this)
            };
            c.prototype[Symbol.iterator] = c.prototype.entries;
            var d = function (k, l) {
                    var m = l && typeof l;
                    "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g, b.set(l, m)) : m = "p_" + l;
                    var r = k.o[m];
                    if (r && ra(k.o, m))
                        for (k = 0; k < r.length; k++) {
                            var t = r[k];
                            if (l !== l && t.key !== t.key || l === t.key) return {id: m, list: r, index: k, Xa: t}
                        }
                    return {id: m, list: r, index: -1, Xa: void 0}
                },
                e = function (k, l) {
                    var m = k.j;
                    return ha(function () {
                        if (m) {
                            for (; m.head != k.j;) m = m.Zb;
                            for (; m.next != m.head;) return m =
                                m.next, {done: !1, value: l(m)};
                            m = null
                        }
                        return {done: !0, value: void 0}
                    })
                },
                f = function () {
                    var k = {};
                    return k.Zb = k.next = k.head = k
                },
                g = 0;
            return c
        });
        fa("Set", function (a) {
            if (function () {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({x: 4}),
                        d = new a(_.ia([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({x: 4}) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
            var b = function (c) {
                this.j = new Map;
                if (c) {
                    c =
                        _.ia(c);
                    for (var d; !(d = c.next()).done;) this.add(d.value)
                }
                this.size = this.j.size
            };
            b.prototype.add = function (c) {
                c = 0 === c ? 0 : c;
                this.j.set(c, c);
                this.size = this.j.size;
                return this
            };
            b.prototype.delete = function (c) {
                c = this.j.delete(c);
                this.size = this.j.size;
                return c
            };
            b.prototype.clear = function () {
                this.j.clear();
                this.size = 0
            };
            b.prototype.has = function (c) {
                return this.j.has(c)
            };
            b.prototype.entries = function () {
                return this.j.entries()
            };
            b.prototype.values = function () {
                return this.j.values()
            };
            b.prototype.keys = b.prototype.values;
            b.prototype[Symbol.iterator] = b.prototype.values;
            b.prototype.forEach = function (c, d) {
                var e = this;
                this.j.forEach(function (f) {
                    return c.call(d, f, f, e)
                })
            };
            return b
        });
        fa("Object.entries", function (a) {
            return a ? a : function (b) {
                var c = [],
                    d;
                for (d in b) ra(b, d) && c.push([d, b[d]]);
                return c
            }
        });
        fa("Object.is", function (a) {
            return a ? a : function (b, c) {
                return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
            }
        });
        fa("Array.prototype.includes", function (a) {
            return a ? a : function (b, c) {
                var d = this;
                d instanceof String && (d = String(d));
                var e = d.length;
                c = c || 0;
                for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                    var f = d[c];
                    if (f === b || Object.is(f, b)) return !0
                }
                return !1
            }
        });
        fa("String.prototype.includes", function (a) {
            return a ? a : function (b, c) {
                return -1 !== pa(this, b, "includes").indexOf(b, c || 0)
            }
        });
        _.ta = _.ta || {};
        _.p = this || self;
        _.ua = function () {
        };
        _.va = function (a) {
            a.Xe = void 0;
            a.ua = function () {
                return a.Xe ? a.Xe : a.Xe = new a
            }
        };
        _.xa = function (a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        };
        _.ya = function (a) {
            return "function" == _.xa(a)
        };
        _.za = function (a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        };
        _.Ca = function (a) {
            return Object.prototype.hasOwnProperty.call(a, Aa) && a[Aa] || (a[Aa] = ++Ba)
        };
        Aa = "closure_uid_" + (1E9 * Math.random() >>> 0);
        Ba = 0;
        Da = function (a, b, c) {
            return a.call.apply(a.bind, arguments)
        };
        Ea = function (a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function () {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function () {
                return a.apply(b, arguments)
            }
        };
        _.q = function (a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.q = Da : _.q = Ea;
            return _.q.apply(null, arguments)
        };
        _.Fa = Date.now || function () {
            return +new Date
        };
        _.u = function (a, b) {
            a = a.split(".");
            var c = _.p;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };
        _.v = function (a, b) {
            function c() {
            }

            c.prototype = b.prototype;
            a.M = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
        Ga = function (a) {
            return a
        };
        _.Ha = function (a) {
            var b = null,
                c = _.p.trustedTypes;
            if (!c || !c.createPolicy) return b;
            try {
                b = c.createPolicy(a, {createHTML: Ga, createScript: Ga, createScriptURL: Ga})
            } catch (d) {
                _.p.console && _.p.console.error(d.message)
            }
            return b
        };
        _.Ia = function (a) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, _.Ia);
            else {
                var b = Error().stack;
                b && (this.stack = b)
            }
            a && (this.message = String(a))
        };
        _.v(_.Ia, Error);
        _.Ia.prototype.name = "CustomError";
        _.Ja = Array.prototype.indexOf ? function (a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function (a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        };
        _.Ka = Array.prototype.forEach ? function (a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        };
        _.La = Array.prototype.filter ? function (a, b, c) {
            return Array.prototype.filter.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = [], f = 0, g = "string" === typeof a ? a.split("") : a, k = 0; k < d; k++)
                if (k in g) {
                    var l = g[k];
                    b.call(c, l, k, a) && (e[f++] = l)
                }
            return e
        };
        _.Ma = Array.prototype.map ? function (a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function (a, b, c) {
            for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        };
        _.Na = Array.prototype.some ? function (a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function (a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
        _.Oa = function (a, b) {
            return 0 <= (0, _.Ja)(a, b)
        };
        var Qa;
        _.Pa = function (a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        };
        Qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        _.Ra = function (a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Qa.length; f++) c = Qa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
        var Ta = function () {
                var a = Sa;
                return function () {
                    var b = this || _.p;
                    b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {});
                    var c = a(_.Ca(_.Ha), arguments);
                    return b.hasOwnProperty(c) ? b[c] : b[c] = _.Ha.apply(this, arguments)
                }
            },
            Sa = function (a, b) {
                a = [a];
                for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
                return a.join("\x0B")
            };
        _.Ua = function () {
            return Ta()("ogb-qtm#html")
        };
        var Wa;
        _.Xa = function (a, b) {
            this.j = a === _.Va && b || "";
            this.o = Wa
        };
        _.Xa.prototype.Pb = !0;
        _.Xa.prototype.Fb = function () {
            return this.j
        };
        _.Ya = function (a) {
            return a instanceof _.Xa && a.constructor === _.Xa && a.o === Wa ? a.j : "type_error:Const"
        };
        Wa = {};
        _.Va = {};
        var $a, Za;
        _.ab = function (a, b) {
            this.o = a === Za && b || "";
            this.w = $a
        };
        _.ab.prototype.Pb = !0;
        _.ab.prototype.Fb = function () {
            return this.o.toString()
        };
        _.ab.prototype.Ve = !0;
        _.ab.prototype.j = function () {
            return 1
        };
        _.cb = function (a) {
            return _.bb(a).toString()
        };
        _.bb = function (a) {
            if (a instanceof _.ab && a.constructor === _.ab && a.w === $a) return a.o;
            _.xa(a);
            return "type_error:TrustedResourceUrl"
        };
        $a = {};
        _.db = function (a) {
            var b = _.Ua();
            a = b ? b.createScriptURL(a) : a;
            return new _.ab(Za, a)
        };
        Za = {};
        var fb;
        _.eb = String.prototype.trim ? function (a) {
            return a.trim()
        } : function (a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        };
        _.gb = function (a, b) {
            var c = 0;
            a = (0, _.eb)(String(a)).split(".");
            b = (0, _.eb)(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = fb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || fb(0 == f[2].length, 0 == g[2].length) || fb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        };
        fb = function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
        var lb, ib;
        _.jb = function (a, b) {
            this.o = a === _.hb && b || "";
            this.w = ib
        };
        _.jb.prototype.Pb = !0;
        _.jb.prototype.Fb = function () {
            return this.o.toString()
        };
        _.jb.prototype.Ve = !0;
        _.jb.prototype.j = function () {
            return 1
        };
        _.kb = function (a) {
            if (a instanceof _.jb && a.constructor === _.jb && a.w === ib) return a.o;
            _.xa(a);
            return "type_error:SafeUrl"
        };
        lb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        _.mb = function (a) {
            if (a instanceof _.jb) return a;
            a = "object" == typeof a && a.Pb ? a.Fb() : String(a);
            lb.test(a) || (a = "about:invalid#zClosurez");
            return new _.jb(_.hb, a)
        };
        _.nb = function (a) {
            if (a instanceof _.jb) return a;
            a = "object" == typeof a && a.Pb ? a.Fb() : String(a);
            lb.test(a) || (a = "about:invalid#zClosurez");
            return new _.jb(_.hb, a)
        };
        ib = {};
        _.hb = {};
        _.pb = function () {
            this.j = "";
            this.o = _.ob
        };
        _.pb.prototype.Pb = !0;
        _.ob = {};
        _.pb.prototype.Fb = function () {
            return this.j
        };
        _.qb = function (a) {
            var b = new _.pb;
            b.j = a;
            return b
        };
        _.rb = _.qb("");
        a: {
            var tb = _.p.navigator;
            if (tb) {
                var ub = tb.userAgent;
                if (ub) {
                    _.sb = ub;
                    break a
                }
            }
            _.sb = ""
        }
        _.w = function (a) {
            return -1 != _.sb.indexOf(a)
        };
        var xb;
        _.vb = function () {
            return _.w("Trident") || _.w("MSIE")
        };
        _.wb = function () {
            return _.w("Firefox") || _.w("FxiOS")
        };
        _.yb = function () {
            return _.w("Safari") && !(xb() || _.w("Coast") || _.w("Opera") || _.w("Edge") || _.w("Edg/") || _.w("OPR") || _.wb() || _.w("Silk") || _.w("Android"))
        };
        xb = function () {
            return (_.w("Chrome") || _.w("CriOS")) && !_.w("Edge")
        };
        _.zb = function () {
            return _.w("Android") && !(xb() || _.wb() || _.w("Opera") || _.w("Silk"))
        };
        var Ab;
        _.Bb = function () {
            this.o = "";
            this.A = Ab;
            this.w = null
        };
        _.Bb.prototype.Ve = !0;
        _.Bb.prototype.j = function () {
            return this.w
        };
        _.Bb.prototype.Pb = !0;
        _.Bb.prototype.Fb = function () {
            return this.o.toString()
        };
        _.Cb = function (a) {
            if (a instanceof _.Bb && a.constructor === _.Bb && a.A === Ab) return a.o;
            _.xa(a);
            return "type_error:SafeHtml"
        };
        Ab = {};
        _.Db = function (a, b) {
            var c = new _.Bb,
                d = _.Ua();
            c.o = d ? d.createHTML(a) : a;
            c.w = b;
            return c
        };
        _.Eb = new _.Bb;
        _.Eb.o = _.p.trustedTypes && _.p.trustedTypes.emptyHTML ? _.p.trustedTypes.emptyHTML : "";
        _.Eb.w = 0;
        _.Fb = _.Db("<br>", 0);
        _.Gb = function (a) {
            var b = !1,
                c;
            return function () {
                b || (c = a(), b = !0);
                return c
            }
        }(function () {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = _.Cb(_.Eb);
            return !b.parentElement
        });
        var Hb;
        Hb = function () {
            return _.w("iPhone") && !_.w("iPod") && !_.w("iPad")
        };
        _.Ib = function () {
            return Hb() || _.w("iPad") || _.w("iPod")
        };
        _.Jb = function (a) {
            _.Jb[" "](a);
            return a
        };
        _.Jb[" "] = _.ua;
        var Lb = function (a, b) {
            var c = Kb;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
        var Zb, $b, Kb, hc;
        _.Mb = _.w("Opera");
        _.x = _.vb();
        _.Nb = _.w("Edge");
        _.Ob = _.Nb || _.x;
        _.Pb = _.w("Gecko") && !(-1 != _.sb.toLowerCase().indexOf("webkit") && !_.w("Edge")) && !(_.w("Trident") || _.w("MSIE")) && !_.w("Edge");
        _.Qb = -1 != _.sb.toLowerCase().indexOf("webkit") && !_.w("Edge");
        _.Rb = _.w("Macintosh");
        _.Sb = _.w("Windows");
        _.Tb = _.w("Linux") || _.w("CrOS");
        _.Ub = _.w("Android");
        _.Vb = Hb();
        _.Wb = _.w("iPad");
        _.Xb = _.w("iPod");
        _.Yb = _.Ib();
        Zb = function () {
            var a = _.p.document;
            return a ? a.documentMode : void 0
        };
        a: {
            var ac = "",
                bc = function () {
                    var a = _.sb;
                    if (_.Pb) return /rv:([^\);]+)(\)|;)/.exec(a);
                    if (_.Nb) return /Edge\/([\d\.]+)/.exec(a);
                    if (_.x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                    if (_.Qb) return /WebKit\/(\S+)/.exec(a);
                    if (_.Mb) return /(?:Version)[ \/]?(\S+)/.exec(a)
                }();
            bc && (ac = bc ? bc[1] : "");
            if (_.x) {
                var cc = Zb();
                if (null != cc && cc > parseFloat(ac)) {
                    $b = String(cc);
                    break a
                }
            }
            $b = ac
        }
        _.dc = $b;
        Kb = {};
        _.ec = function (a) {
            return Lb(a, function () {
                return 0 <= _.gb(_.dc, a)
            })
        };
        _.gc = function (a) {
            return Number(fc) >= a
        };
        if (_.p.document && _.x) {
            var ic = Zb();
            hc = ic ? ic : parseInt(_.dc, 10) || void 0
        } else hc = void 0;
        var fc = hc;
        _.jc = _.wb();
        _.kc = Hb() || _.w("iPod");
        _.lc = _.w("iPad");
        _.mc = _.zb();
        _.nc = xb();
        _.oc = _.yb() && !_.Ib();
        var pc = {},
            qc = null;
        _.rc = function (a) {
            this.j = 0;
            this.o = a
        };
        _.rc.prototype.next = function () {
            return this.j < this.o.length ? {done: !1, value: this.o[this.j++]} : {done: !0, value: void 0}
        };
        "undefined" != typeof Symbol && "undefined" != typeof Symbol.iterator && (_.rc.prototype[Symbol.iterator] = function () {
            return this
        });
        var yc;
        _.y = function () {
        };
        _.sc = "function" == typeof Uint8Array;
        _.z = function (a, b, c, d, e, f) {
            a.j = null;
            b || (b = c ? [c] : []);
            a.H = c ? String(c) : void 0;
            a.B = 0 === c ? -1 : 0;
            a.w = b;
            a: {
                c = a.w.length;
                b = -1;
                if (c && (b = c - 1, c = a.w[b], !(null === c || "object" != typeof c || Array.isArray(c) || _.sc && c instanceof Uint8Array))) {
                    a.C = b - a.B;
                    a.A = c;
                    break a
                }
                -1 < d ? (a.C = Math.max(d, b + 1 - a.B), a.A = null) : a.C = Number.MAX_VALUE
            }
            a.J = {};
            if (e)
                for (d = 0; d < e.length; d++) b = e[d], b < a.C ? (b += a.B, a.w[b] = a.w[b] || _.tc) : (_.uc(a), a.A[b] = a.A[b] || _.tc);
            if (f && f.length)
                for (d = 0; d < f.length; d++) _.vc(a, f[d])
        };
        _.tc = [];
        _.uc = function (a) {
            var b = a.C + a.B;
            a.w[b] || (a.A = a.w[b] = {})
        };
        _.A = function (a, b) {
            if (b < a.C) {
                b += a.B;
                var c = a.w[b];
                return c === _.tc ? a.w[b] = [] : c
            }
            if (a.A) return c = a.A[b], c === _.tc ? a.A[b] = [] : c
        };
        _.B = function (a, b) {
            a = _.A(a, b);
            return null == a ? a : !!a
        };
        _.C = function (a, b, c) {
            a = _.A(a, b);
            return null == a ? c : a
        };
        _.wc = function (a, b, c) {
            a = _.B(a, b);
            return null == a ? c : a
        };
        _.xc = function (a, b, c) {
            a = _.A(a, b);
            a = null == a ? a : +a;
            return null == a ? c : a
        };
        _.E = function (a, b, c) {
            b < a.C ? a.w[b + a.B] = c : (_.uc(a), a.A[b] = c);
            return a
        };
        _.vc = function (a, b) {
            for (var c, d, e = 0; e < b.length; e++) {
                var f = b[e],
                    g = _.A(a, f);
                null != g && (c = f, d = g, _.E(a, f, void 0))
            }
            return c ? (_.E(a, c, d), c) : 0
        };
        _.G = function (a, b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                var d = _.A(a, c);
                d && (a.j[c] = new b(d))
            }
            return a.j[c]
        };
        _.H = function (a, b, c) {
            a.j || (a.j = {});
            var d = c ? c.tb() : c;
            a.j[b] = c;
            return _.E(a, b, d)
        };
        yc = function (a) {
            if (a.j)
                for (var b in a.j) {
                    var c = a.j[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && c[d].tb();
                    else c && c.tb()
                }
        };
        _.y.prototype.tb = function () {
            yc(this);
            return this.w
        };
        _.y.prototype.o = _.sc ? function () {
            var a = Uint8Array.prototype.toJSON;
            Uint8Array.prototype.toJSON = function () {
                var b;
                void 0 === b && (b = 0);
                if (!qc) {
                    qc = {};
                    for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                        var f = c.concat(d[e].split(""));
                        pc[e] = f;
                        for (var g = 0; g < f.length; g++) {
                            var k = f[g];
                            void 0 === qc[k] && (qc[k] = g)
                        }
                    }
                }
                b = pc[b];
                c = [];
                for (d = 0; d < this.length; d += 3) {
                    var l = this[d],
                        m = (e = d + 1 < this.length) ? this[d + 1] : 0;
                    k = (f = d + 2 < this.length) ? this[d + 2] : 0;
                    g = l >> 2;
                    l = (l & 3) << 4 | m >> 4;
                    m = (m & 15) << 2 | k >> 6;
                    k &= 63;
                    f || (k = 64, e || (m = 64));
                    c.push(b[g], b[l], b[m] || "", b[k] || "")
                }
                return c.join("")
            };
            try {
                return JSON.stringify(this.w && this.tb(), zc)
            } finally {
                Uint8Array.prototype.toJSON = a
            }
        } : function () {
            return JSON.stringify(this.w && this.tb(), zc)
        };
        var zc = function (a, b) {
            return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
        };
        _.y.prototype.toString = function () {
            yc(this);
            return this.w.toString()
        };
        _.I = function () {
            this.Wa = this.Wa;
            this.Db = this.Db
        };
        _.I.prototype.Wa = !1;
        _.I.prototype.ta = function () {
            this.Wa || (this.Wa = !0, this.R())
        };
        _.I.prototype.R = function () {
            if (this.Db)
                for (; this.Db.length;) this.Db.shift()()
        };
        var Ac = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(Ac, _.y);
        _.Bc = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(_.Bc, _.y);
        var Cc = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(Cc, _.y);
        _.Dc = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(_.Dc, _.y);
        _.Ec = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(_.Ec, _.y);
        var Fc = function (a) {
            _.I.call(this);
            this.w = a;
            this.j = [];
            this.o = {}
        };
        _.v(Fc, _.I);
        Fc.prototype.ud = function () {
            for (var a = this.j.length, b = this.j, c = [], d = 0; d < a; ++d) {
                var e = b[d].j();
                a: {
                    var f = this.w;
                    for (var g = e.split("."), k = g.length, l = 0; l < k; ++l)
                        if (f[g[l]]) f = f[g[l]];
                        else {
                            f = null;
                            break a
                        }
                    f = f instanceof Function ? f : null
                }
                if (f && f != this.o[e]) try {
                    b[d].ud(f)
                } catch (m) {
                } else c.push(b[d])
            }
            this.j = c.concat(b.slice(a))
        };
        var Mc;
        _.Gc = function () {
            this.j = {};
            this.o = {}
        };
        _.va(_.Gc);
        _.Ic = function (a) {
            return _.Hc(_.Gc.ua(), a)
        };
        _.Kc = function (a, b) {
            var c = _.Gc.ua();
            if (a in c.j) {
                if (c.j[a] != b) throw new Jc(a);
            } else {
                c.j[a] = b;
                if (b = c.o[a])
                    for (var d = 0, e = b.length; d < e; d++) b[d].j(c.j, a);
                delete c.o[a]
            }
        };
        _.Hc = function (a, b) {
            if (b in a.j) return a.j[b];
            throw new Lc(b);
        };
        Mc = function () {
            _.Ia.call(this)
        };
        _.v(Mc, _.Ia);
        var Jc = function () {
            _.Ia.call(this)
        };
        _.v(Jc, Mc);
        var Lc = function () {
            _.Ia.call(this)
        };
        _.v(Lc, Mc);
        var Pc = function (a) {
            _.I.call(this);
            this.B = a;
            this.w = this.j = null;
            this.C = 0;
            this.A = {};
            this.o = !1;
            a = window.navigator.userAgent;
            0 <= a.indexOf("MSIE") && 0 <= a.indexOf("Trident") && (a = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)) && a[1] && 9 > parseFloat(a[1]) && (this.o = !0)
        };
        _.n(Pc, _.I);
        Pc.prototype.D = function (a, b) {
            this.j = b;
            this.w = a;
            b.preventDefault ? b.preventDefault() : b.returnValue = !1
        };
        _.Qc = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(_.Qc, _.y);
        _.Rc = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(_.Rc, _.y);
        _.J = function (a, b) {
            return null != a ? !!a : !!b
        };
        _.L = function (a, b) {
            void 0 == b && (b = "");
            return null != a ? a : b
        };
        _.Sc = function (a, b) {
            void 0 == b && (b = 0);
            return null != a ? a : b
        };
        _.Tc = function () {
            this.data = {}
        };
        _.Tc.prototype.j = function () {
            window.console && window.console.log && window.console.log("Log data: ", this.data)
        };
        _.Tc.prototype.o = function (a) {
            var b = [],
                c;
            for (c in this.data) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(this.data[c])));
            return ("atyp=i&zx=" + (new Date).getTime() + "&" + b.join("&")).substr(0, a)
        };
        var Uc = function (a, b) {
            this.data = {};
            var c = _.G(a, Cc, 8) || new Cc;
            window.google && window.google.kEI && (this.data.ei = window.google.kEI);
            this.data.sei = _.L(_.A(a, 10));
            this.data.ogf = _.L(_.A(c, 3));
            var d = window.google && window.google.sn ? /.*hp$/.test(window.google.sn) ? !1 : !0 : _.J(_.B(a, 7));
            this.data.ogrp = d ? "1" : "";
            this.data.ogv = _.L(_.A(c, 6)) + "." + _.L(_.A(c, 7));
            this.data.ogd = _.L(_.A(a, 21));
            this.data.ogc = _.L(_.A(a, 20));
            this.data.ogl = _.L(_.A(a, 5));
            b && (this.data.oggv = b)
        };
        _.v(Uc, _.Tc);
        var Vc = [1, 2, 3, 4, 5, 6, 9, 10, 11, 13, 14, 28, 29, 30, 34, 35, 37, 38, 39, 40, 42, 43, 48, 49, 50, 51, 52, 53, 62, 500],
            Yc = function (a, b, c, d, e, f) {
                Uc.call(this, a, b);
                _.Ra(this.data, {
                    oge: d,
                    ogex: _.L(_.A(a, 9)),
                    ogp: _.L(_.A(a, 6)),
                    ogsr: Math.round(1 / (Wc(d) ? _.Sc(_.xc(c, 3, 1)) : _.Sc(_.xc(c, 2, 1E-4)))),
                    ogus: e
                });
                if (f) {
                    "ogw" in f && (this.data.ogw = f.ogw, delete f.ogw);
                    "ved" in f && (this.data.ved = f.ved, delete f.ved);
                    a = [];
                    for (var g in f) 0 != a.length && a.push(","), a.push(Xc(g)), a.push("."), a.push(Xc(f[g]));
                    f = a.join("");
                    "" != f && (this.data.ogad = f)
                }
            };
        _.v(Yc, Uc);
        var Xc = function (a) {
                a = String(a);
                return a.replace(".", "%2E").replace(",", "%2C")
            },
            Zc = null,
            Wc = function (a) {
                if (!Zc) {
                    Zc = {};
                    for (var b = 0; b < Vc.length; b++) Zc[Vc[b]] = !0
                }
                return !!Zc[a]
            };
        var $c, cd, bd;
        _.ad = function (a) {
            var b = window.google && window.google.logUrl ? "" : "https://www.google.com";
            b += "/gen_204?";
            b += a.o(2040 - b.length);
            $c(_.mb(b))
        };
        $c = function (a) {
            var b = new Image;
            b.onerror = b.onload = b.onabort = function () {
                bd in cd && delete cd[bd]
            };
            cd[bd++] = b;
            b.src = _.kb(a)
        };
        cd = [];
        bd = 0;
        var gd = function () {
            var a = dd,
                b = ed,
                c = fd;
            this.C = a;
            this.B = b;
            this.A = _.Sc(_.xc(a, 2, 1E-4), 1E-4);
            this.o = _.Sc(_.xc(a, 3, 1), 1);
            b = Math.random();
            this.w = _.J(_.B(a, 1)) && b < this.A;
            this.j = _.J(_.B(a, 1)) && b < this.o;
            a = 0;
            _.J(_.B(c, 1)) && (a |= 1);
            _.J(_.B(c, 2)) && (a |= 2);
            _.J(_.B(c, 3)) && (a |= 4);
            this.D = a
        };
        gd.prototype.log = function (a, b) {
            try {
                if (Wc(a) ? this.j : this.w) {
                    var c = new Yc(this.B, "quantum:gapiBuildLabel", this.C, a, this.D, b);
                    _.ad(c)
                }
            } catch (d) {
            }
        };
        _.hd = function (a, b, c, d, e) {
            Uc.call(this, a, b);
            _.Ra(this.data, {
                jexpid: _.L(_.A(a, 9)),
                srcpg: "prop=" + _.L(_.A(a, 6)),
                jsr: Math.round(1 / d),
                emsg: c.name + ":" + c.message
            });
            if (e) {
                e._sn && (e._sn = "og." + e._sn);
                for (var f in e) this.data[encodeURIComponent(f)] = e[f]
            }
        };
        _.v(_.hd, Uc);
        _.id = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(_.id, _.y);
        var ld = function () {
            var a = jd;
            this.D = kd;
            this.A = _.Sc(_.xc(a, 2, .001), .001);
            this.C = _.J(_.B(a, 1)) && Math.random() < this.A;
            this.B = _.Sc(_.C(a, 3, 1), 1);
            this.w = 0;
            this.j = this.o = null;
            _.wc(a, 4, !0)
        };
        ld.prototype.log = function (a, b) {
            if (this.j) {
                var c = new Ac;
                _.E(c, 1, a.message);
                _.E(c, 2, a.stack);
                _.E(c, 3, a.lineNumber);
                _.E(c, 5, 1);
                var d = new _.Bc;
                _.H(d, 40, c);
                this.j.log(98, d)
            }
            try {
                if (this.C && this.w < this.B) {
                    try {
                        var e = (this.o || _.Hc(_.Gc.ua(), "lm")).j(a, b)
                    } catch (f) {
                        e = new _.hd(this.D, "quantum:gapiBuildLabel", a, this.A, b)
                    }
                    _.ad(e);
                    this.w++
                }
            } catch (f) {
            }
        };
        var md = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(md, _.y);
        var nd = function (a) {
            this.j = a;
            this.o = void 0;
            this.w = []
        };
        nd.prototype.then = function (a, b, c) {
            this.w.push(new od(a, b, c));
            _.pd(this)
        };
        _.qd = function (a, b) {
            if (void 0 !== a.j || void 0 !== a.o) throw Error("o");
            a.j = b;
            _.pd(a)
        };
        _.pd = function (a) {
            if (0 < a.w.length) {
                var b = void 0 !== a.j,
                    c = void 0 !== a.o;
                if (b || c) {
                    b = b ? a.A : a.B;
                    c = a.w;
                    a.w = [];
                    try {
                        (0, _.Ka)(c, b, a)
                    } catch (d) {
                        console.error(d)
                    }
                }
            }
        };
        nd.prototype.A = function (a) {
            a.o && a.o.call(a.j, this.j)
        };
        nd.prototype.B = function (a) {
            a.w && a.w.call(a.j, this.o)
        };
        var od = function (a, b, c) {
            this.o = a;
            this.w = b;
            this.j = c
        };
        _.M = function () {
            this.A = new nd;
            this.o = new nd;
            this.D = new nd;
            this.B = new nd;
            this.C = new nd;
            this.G = new nd;
            this.J = new nd;
            this.j = new nd;
            this.w = new nd
        };
        _.va(_.M);
        _.h = _.M.prototype;
        _.h.Dh = function () {
            return this.A
        };
        _.h.Lh = function () {
            return this.o
        };
        _.h.Rh = function () {
            return this.D
        };
        _.h.Kh = function () {
            return this.B
        };
        _.h.Ph = function () {
            return this.C
        };
        _.h.Sh = function () {
            return this.G
        };
        _.h.Hh = function () {
            return this.J
        };
        _.h.Ih = function () {
            return this.j
        };
        _.h.wh = function () {
            return this.w
        };
        var rd = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(rd, _.y);
        _.td = function () {
            return _.G(_.sd, _.Dc, 1)
        };
        _.ud = function () {
            return _.G(_.sd, _.Ec, 5)
        };
        var vd;
        window.gbar_ && window.gbar_.CONFIG ? vd = window.gbar_.CONFIG[0] || {} : vd = [];
        _.sd = new rd(vd);
        var jd, kd, ed, fd, dd;
        jd = _.G(_.sd, _.id, 3) || new _.id;
        kd = _.td() || new _.Dc;
        _.wd = new ld;
        ed = _.td() || new _.Dc;
        fd = _.ud() || new _.Ec;
        dd = _.G(_.sd, md, 4) || new md;
        _.xd = new gd;
        _.u("gbar_._DumpException", function (a) {
            _.wd ? _.wd.log(a) : console.error(a)
        });
        _.yd = new Pc(_.wd);
        _.xd.log(8, {m: "BackCompat" == document.compatMode ? "q" : "s"});
        _.u("gbar.A", nd);
        nd.prototype.aa = nd.prototype.then;
        _.u("gbar.B", _.M);
        _.M.prototype.ba = _.M.prototype.Lh;
        _.M.prototype.bb = _.M.prototype.Rh;
        _.M.prototype.bd = _.M.prototype.Ph;
        _.M.prototype.be = _.M.prototype.Sh;
        _.M.prototype.bf = _.M.prototype.Dh;
        _.M.prototype.bg = _.M.prototype.Kh;
        _.M.prototype.bh = _.M.prototype.Hh;
        _.M.prototype.bi = _.M.prototype.Ih;
        _.M.prototype.bj = _.M.prototype.wh;
        _.u("gbar.a", _.M.ua());
        var zd = new Fc(window);
        _.Kc("api", zd);
        var Ad = _.ud() || new _.Ec,
            Bd = _.L(_.A(Ad, 8));
        window.__PVT = Bd;
        _.Kc("eq", _.yd);

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        _.Id = !_.x || _.gc(9);
        _.Jd = !_.x || _.gc(9);
        _.Kd = _.x && !_.ec("9");
        _.Ld = function () {
            if (!_.p.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function () {
                        a = !0
                    }
                });
            try {
                _.p.addEventListener("test", _.ua, b), _.p.removeEventListener("test", _.ua, b)
            } catch (c) {
            }
            return a
        }();
        _.Md = _.Qb ? "webkitTransitionEnd" : _.Mb ? "otransitionend" : "transitionend";

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Nd = function (a, b, c) {
            if (!a.o)
                if (c instanceof Array) {
                    c = _.ia(c);
                    for (var d = c.next(); !d.done; d = c.next()) _.Nd(a, b, d.value)
                } else {
                    d = (0, _.q)(a.D, a, b);
                    var e = a.C + c;
                    a.C++;
                    b.setAttribute("data-eqid", e);
                    a.A[e] = d;
                    b && b.addEventListener ? b.addEventListener(c, d, !1) : b && b.attachEvent ? b.attachEvent("on" + c, d) : a.B.log(Error("m`" + b))
                }
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var Rd, Sd, Td, Xd, Yd, Zd, $d, ae, be, ce, he;
        _.Qd = function (a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function () {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        };
        Rd = null;
        Sd = /^[\w+/_-]+[=]{0,2}$/;
        Td = function (a) {
            return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Sd.test(a) ? a : ""
        };
        _.Ud = function (a) {
            var b = _.xa(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        };
        _.Vd = function (a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
        _.Wd = function (a, b) {
            return 0 == a.lastIndexOf(b, 0)
        };
        Xd = /&/g;
        Yd = /</g;
        Zd = />/g;
        $d = /"/g;
        ae = /'/g;
        be = /\x00/g;
        ce = /[\x00&<>"']/;
        _.de = function (a, b) {
            if (b) a = a.replace(Xd, "&amp;").replace(Yd, "&lt;").replace(Zd, "&gt;").replace($d, "&quot;").replace(ae, "&#39;").replace(be, "&#0;");
            else {
                if (!ce.test(a)) return a;
                -1 != a.indexOf("&") && (a = a.replace(Xd, "&amp;"));
                -1 != a.indexOf("<") && (a = a.replace(Yd, "&lt;"));
                -1 != a.indexOf(">") && (a = a.replace(Zd, "&gt;"));
                -1 != a.indexOf('"') && (a = a.replace($d, "&quot;"));
                -1 != a.indexOf("'") && (a = a.replace(ae, "&#39;"));
                -1 != a.indexOf("\x00") && (a = a.replace(be, "&#0;"))
            }
            return a
        };
        _.ee = function (a) {
            var b;
            (b = a.ownerDocument && a.ownerDocument.defaultView) && b != _.p ? b = Td(b.document) : (null === Rd && (Rd = Td(_.p.document)), b = Rd);
            b && a.setAttribute("nonce", b)
        };
        _.fe = function (a, b) {
            a.src = _.bb(b);
            _.ee(a)
        };
        _.ge = function (a) {
            return a = _.de(a, void 0)
        };
        he = !_.x || _.gc(9);
        _.ie = !_.Pb && !_.x || _.x && _.gc(9) || _.Pb && _.ec("1.9.1");
        _.je = _.x && !_.ec("9");
        _.ke = _.x || _.Mb || _.Qb;
        _.le = function (a, b) {
            this.width = a;
            this.height = b
        };
        _.h = _.le.prototype;
        _.h.aspectRatio = function () {
            return this.width / this.height
        };
        _.h.zc = function () {
            return !(this.width * this.height)
        };
        _.h.ceil = function () {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        _.h.floor = function () {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        _.h.round = function () {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        var oe, te;
        _.me = function (a, b) {
            return (b || document).getElementsByTagName(String(a))
        };
        _.N = function (a, b) {
            var c = b || document;
            if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
            else {
                c = document;
                var d = b || c;
                a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.ne(c, "*", a, b)[0] || null
            }
            return a || null
        };
        _.ne = function (a, b, c, d) {
            a = d || a;
            b = b && "*" != b ? String(b).toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    d = {};
                    for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                    d.length = e;
                    return d
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && _.Oa(b.split(/\s+/), c) && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        };
        _.pe = function (a, b) {
            _.Pa(b, function (c, d) {
                c && "object" == typeof c && c.Pb && (c = c.Fb());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : oe.hasOwnProperty(d) ? a.setAttribute(oe[d], c) : _.Wd(d, "aria-") || _.Wd(d, "data-") ? a.setAttribute(d, c) : a[d] = c
            })
        };
        oe = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        };
        _.se = function (a, b) {
            var c = String(b[0]),
                d = b[1];
            if (!he && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', _.ge(d.name), '"');
                if (d.type) {
                    c.push(' type="', _.ge(d.type), '"');
                    var e = {};
                    _.Ra(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c = _.qe(a, c);
            d && ("string" === typeof d ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : _.pe(c, d));
            2 < b.length && _.re(a, c, b, 2);
            return c
        };
        _.re = function (a, b, c, d) {
            function e(g) {
                g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
            }

            for (; d < c.length; d++) {
                var f = c[d];
                !_.Ud(f) || _.za(f) && 0 < f.nodeType ? e(f) : (0, _.Ka)(te(f) ? _.Vd(f) : f, e)
            }
        };
        _.ue = function (a) {
            return _.qe(document, a)
        };
        _.qe = function (a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        };
        _.ve = function (a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        };
        _.we = function (a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        };
        _.xe = function (a) {
            return _.za(a) && 1 == a.nodeType
        };
        _.ye = function (a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        };
        te = function (a) {
            if (a && "number" == typeof a.length) {
                if (_.za(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (_.ya(a)) return "function" == typeof a.item
            }
            return !1
        };
        _.ze = function (a, b, c) {
            for (var d = 0; a && (null == c || d <= c);) {
                if (b(a)) return a;
                a = a.parentNode;
                d++
            }
            return null
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var Ae = function (a, b) {
            this.w = a;
            this.A = b;
            this.o = 0;
            this.j = null
        };
        Ae.prototype.get = function () {
            if (0 < this.o) {
                this.o--;
                var a = this.j;
                this.j = a.next;
                a.next = null
            } else a = this.w();
            return a
        };
        var Be = function (a, b) {
            a.A(b);
            100 > a.o && (a.o++, b.next = a.j, a.j = b)
        };
        var Ce = function (a) {
                _.p.setTimeout(function () {
                    throw a;
                }, 0)
            },
            De, Ee = function () {
                var a = _.p.MessageChannel;
                "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.w("Presto") && (a = function () {
                    var e = _.ue("IFRAME");
                    e.style.display = "none";
                    document.documentElement.appendChild(e);
                    var f = e.contentWindow;
                    e = f.document;
                    e.open();
                    e.close();
                    var g = "callImmediate" + Math.random(),
                        k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                    e = (0, _.q)(function (l) {
                        if (("*" ==
                            k || l.origin == k) && l.data == g) this.port1.onmessage()
                    }, this);
                    f.addEventListener("message", e, !1);
                    this.port1 = {};
                    this.port2 = {
                        postMessage: function () {
                            f.postMessage(g, k)
                        }
                    }
                });
                if ("undefined" !== typeof a && !_.vb()) {
                    var b = new a,
                        c = {},
                        d = c;
                    b.port1.onmessage = function () {
                        if (void 0 !== c.next) {
                            c = c.next;
                            var e = c.Ef;
                            c.Ef = null;
                            e()
                        }
                    };
                    return function (e) {
                        d.next = {Ef: e};
                        d = d.next;
                        b.port2.postMessage(0)
                    }
                }
                return function (e) {
                    _.p.setTimeout(e, 0)
                }
            };
        var Fe = function () {
                this.o = this.j = null
            },
            He = new Ae(function () {
                return new Ge
            }, function (a) {
                a.reset()
            });
        Fe.prototype.add = function (a, b) {
            var c = He.get();
            c.set(a, b);
            this.o ? this.o.next = c : this.j = c;
            this.o = c
        };
        Fe.prototype.remove = function () {
            var a = null;
            this.j && (a = this.j, this.j = this.j.next, this.j || (this.o = null), a.next = null);
            return a
        };
        var Ge = function () {
            this.next = this.scope = this.Yb = null
        };
        Ge.prototype.set = function (a, b) {
            this.Yb = a;
            this.scope = b;
            this.next = null
        };
        Ge.prototype.reset = function () {
            this.next = this.scope = this.Yb = null
        };
        var Ie, Je, Ke, Le, Ne;
        _.Me = function (a, b) {
            Ie || Je();
            Ke || (Ie(), Ke = !0);
            Le.add(a, b)
        };
        Je = function () {
            if (_.p.Promise && _.p.Promise.resolve) {
                var a = _.p.Promise.resolve(void 0);
                Ie = function () {
                    a.then(Ne)
                }
            } else Ie = function () {
                var b = Ne;
                !_.ya(_.p.setImmediate) || _.p.Window && _.p.Window.prototype && !_.w("Edge") && _.p.Window.prototype.setImmediate == _.p.setImmediate ? (De || (De = Ee()), De(b)) : _.p.setImmediate(b)
            }
        };
        Ke = !1;
        Le = new Fe;
        Ne = function () {
            for (var a; a = Le.remove();) {
                try {
                    a.Yb.call(a.scope)
                } catch (b) {
                    Ce(b)
                }
                Be(He, a)
            }
            Ke = !1
        };
        _.Oe = function (a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };
        var Re, df, $e, Ye, Ze, ef, cf, ff;
        _.Qe = function (a) {
            this.j = 0;
            this.D = void 0;
            this.A = this.o = this.w = null;
            this.B = this.C = !1;
            if (a != _.ua) try {
                var b = this;
                a.call(void 0, function (c) {
                    _.Pe(b, 2, c)
                }, function (c) {
                    _.Pe(b, 3, c)
                })
            } catch (c) {
                _.Pe(this, 3, c)
            }
        };
        Re = function () {
            this.next = this.context = this.o = this.w = this.j = null;
            this.A = !1
        };
        Re.prototype.reset = function () {
            this.context = this.o = this.w = this.j = null;
            this.A = !1
        };
        var Se = new Ae(function () {
                return new Re
            }, function (a) {
                a.reset()
            }),
            Te = function (a, b, c) {
                var d = Se.get();
                d.w = a;
                d.o = b;
                d.context = c;
                return d
            };
        _.Qe.prototype.then = function (a, b, c) {
            return Ue(this, _.ya(a) ? a : null, _.ya(b) ? b : null, c)
        };
        _.Qe.prototype.$goog_Thenable = !0;
        _.Ve = function (a, b) {
            return Ue(a, null, b, void 0)
        };
        _.Qe.prototype.cancel = function (a) {
            if (0 == this.j) {
                var b = new _.We(a);
                _.Me(function () {
                    Xe(this, b)
                }, this)
            }
        };
        var Xe = function (a, b) {
                if (0 == a.j)
                    if (a.w) {
                        var c = a.w;
                        if (c.o) {
                            for (var d = 0, e = null, f = null, g = c.o; g && (g.A || (d++, g.j == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                            e && (0 == c.j && 1 == d ? Xe(c, b) : (f ? (d = f, d.next == c.A && (c.A = d), d.next = d.next.next) : Ye(c), Ze(c, e, 3, b)))
                        }
                        a.w = null
                    } else _.Pe(a, 3, b)
            },
            af = function (a, b) {
                a.o || 2 != a.j && 3 != a.j || $e(a);
                a.A ? a.A.next = b : a.o = b;
                a.A = b
            },
            Ue = function (a, b, c, d) {
                var e = Te(null, null, null);
                e.j = new _.Qe(function (f, g) {
                    e.w = b ? function (k) {
                        try {
                            var l = b.call(d, k);
                            f(l)
                        } catch (m) {
                            g(m)
                        }
                    } : f;
                    e.o = c ? function (k) {
                        try {
                            var l =
                                c.call(d, k);
                            void 0 === l && k instanceof _.We ? g(k) : f(l)
                        } catch (m) {
                            g(m)
                        }
                    } : g
                });
                e.j.w = a;
                af(a, e);
                return e.j
            };
        _.Qe.prototype.J = function (a) {
            this.j = 0;
            _.Pe(this, 2, a)
        };
        _.Qe.prototype.H = function (a) {
            this.j = 0;
            _.Pe(this, 3, a)
        };
        _.Pe = function (a, b, c) {
            0 == a.j && (a === c && (b = 3, c = new TypeError("p")), a.j = 1, _.bf(c, a.J, a.H, a) || (a.D = c, a.j = b, a.w = null, $e(a), 3 != b || c instanceof _.We || cf(a, c)))
        };
        _.bf = function (a, b, c, d) {
            if (a instanceof _.Qe) return af(a, Te(b || _.ua, c || null, d)), !0;
            if (_.Oe(a)) return a.then(b, c, d), !0;
            if (_.za(a)) try {
                var e = a.then;
                if (_.ya(e)) return df(a, e, b, c, d), !0
            } catch (f) {
                return c.call(d, f), !0
            }
            return !1
        };
        df = function (a, b, c, d, e) {
            var f = !1,
                g = function (l) {
                    f || (f = !0, c.call(e, l))
                },
                k = function (l) {
                    f || (f = !0, d.call(e, l))
                };
            try {
                b.call(a, g, k)
            } catch (l) {
                k(l)
            }
        };
        $e = function (a) {
            a.C || (a.C = !0, _.Me(a.G, a))
        };
        Ye = function (a) {
            var b = null;
            a.o && (b = a.o, a.o = b.next, b.next = null);
            a.o || (a.A = null);
            return b
        };
        _.Qe.prototype.G = function () {
            for (var a; a = Ye(this);) Ze(this, a, this.j, this.D);
            this.C = !1
        };
        Ze = function (a, b, c, d) {
            if (3 == c && b.o && !b.A)
                for (; a && a.B; a = a.w) a.B = !1;
            if (b.j) b.j.w = null, ef(b, c, d);
            else try {
                b.A ? b.w.call(b.context) : ef(b, c, d)
            } catch (e) {
                ff.call(null, e)
            }
            Be(Se, b)
        };
        ef = function (a, b, c) {
            2 == b ? a.w.call(a.context, c) : a.o && a.o.call(a.context, c)
        };
        cf = function (a, b) {
            a.B = !0;
            _.Me(function () {
                a.B && ff.call(null, b)
            })
        };
        ff = Ce;
        _.We = function (a) {
            _.Ia.call(this, a)
        };
        _.v(_.We, _.Ia);
        _.We.prototype.name = "cancel";

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var jf;
        _.gf = function (a) {
            a = a.split(".");
            for (var b = _.p, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        };
        _.hf = function (a, b) {
            b = (0, _.Ja)(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        };
        jf = function (a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        };
        _.kf = function (a, b) {
            try {
                return _.Jb(a[b]), !0
            } catch (c) {
            }
            return !1
        };
        _.lf = function (a, b) {
            this.type = a;
            this.j = this.target = b;
            this.defaultPrevented = this.o = !1
        };
        _.lf.prototype.stopPropagation = function () {
            this.o = !0
        };
        _.lf.prototype.preventDefault = function () {
            this.defaultPrevented = !0
        };
        _.mf = function (a, b) {
            _.lf.call(this, a ? a.type : "");
            this.relatedTarget = this.j = this.target = null;
            this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
            this.key = "";
            this.w = this.keyCode = 0;
            this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
            this.state = null;
            this.pointerId = 0;
            this.pointerType = "";
            this.Ya = null;
            a && this.init(a, b)
        };
        _.v(_.mf, _.lf);
        var nf = {2: "touch", 3: "pen", 4: "mouse"};
        _.mf.prototype.init = function (a, b) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.j = b;
            (b = a.relatedTarget) ? _.Pb && (_.kf(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX :
                a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.w = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : nf[a.pointerType] || "";
            this.state = a.state;
            this.Ya = a;
            a.defaultPrevented && this.preventDefault()
        };
        _.mf.prototype.stopPropagation = function () {
            _.mf.M.stopPropagation.call(this);
            this.Ya.stopPropagation ? this.Ya.stopPropagation() : this.Ya.cancelBubble = !0
        };
        _.mf.prototype.preventDefault = function () {
            _.mf.M.preventDefault.call(this);
            var a = this.Ya;
            if (a.preventDefault) a.preventDefault();
            else if (a.returnValue = !1, _.Kd) try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
            } catch (b) {
            }
        };
        var qf;
        _.of = "closure_listenable_" + (1E6 * Math.random() | 0);
        _.pf = function (a) {
            return !(!a || !a[_.of])
        };
        qf = 0;
        var rf;
        rf = function (a, b, c, d, e) {
            this.listener = a;
            this.j = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.je = e;
            this.key = ++qf;
            this.Wc = this.Rd = !1
        };
        _.sf = function (a) {
            a.Wc = !0;
            a.listener = null;
            a.j = null;
            a.src = null;
            a.je = null
        };
        _.tf = function (a) {
            this.src = a;
            this.j = {};
            this.o = 0
        };
        _.tf.prototype.add = function (a, b, c, d, e) {
            var f = a.toString();
            a = this.j[f];
            a || (a = this.j[f] = [], this.o++);
            var g = uf(a, b, d, e);
            -1 < g ? (b = a[g], c || (b.Rd = !1)) : (b = new rf(b, this.src, f, !!d, e), b.Rd = c, a.push(b));
            return b
        };
        _.tf.prototype.remove = function (a, b, c, d) {
            a = a.toString();
            if (!(a in this.j)) return !1;
            var e = this.j[a];
            b = uf(e, b, c, d);
            return -1 < b ? (_.sf(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.j[a], this.o--), !0) : !1
        };
        _.vf = function (a, b) {
            var c = b.type;
            if (!(c in a.j)) return !1;
            var d = _.hf(a.j[c], b);
            d && (_.sf(b), 0 == a.j[c].length && (delete a.j[c], a.o--));
            return d
        };
        _.tf.prototype.Yd = function (a, b) {
            a = this.j[a.toString()];
            var c = [];
            if (a)
                for (var d = 0; d < a.length; ++d) {
                    var e = a[d];
                    e.capture == b && c.push(e)
                }
            return c
        };
        _.tf.prototype.xd = function (a, b, c, d) {
            a = this.j[a.toString()];
            var e = -1;
            a && (e = uf(a, b, c, d));
            return -1 < e ? a[e] : null
        };
        _.tf.prototype.hasListener = function (a, b) {
            var c = void 0 !== a,
                d = c ? a.toString() : "",
                e = void 0 !== b;
            return jf(this.j, function (f) {
                for (var g = 0; g < f.length; ++g)
                    if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
                return !1
            })
        };
        var uf = function (a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.Wc && f.listener == b && f.capture == !!c && f.je == d) return e
            }
            return -1
        };
        var wf, xf, yf, Bf, Df, Ef, Jf, If, Ff, Kf;
        wf = "closure_lm_" + (1E6 * Math.random() | 0);
        xf = {};
        yf = 0;
        _.O = function (a, b, c, d, e) {
            if (d && d.once) return _.zf(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) _.O(a, b[f], c, d, e);
                return null
            }
            c = _.Af(c);
            return _.pf(a) ? a.K(b, c, _.za(d) ? !!d.capture : !!d, e) : Bf(a, b, c, !1, d, e)
        };
        Bf = function (a, b, c, d, e, f) {
            if (!b) throw Error("q");
            var g = _.za(e) ? !!e.capture : !!e,
                k = _.Cf(a);
            k || (a[wf] = k = new _.tf(a));
            c = k.add(b, c, d, g, f);
            if (c.j) return c;
            d = Df();
            c.j = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) _.Ld || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(Ef(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("r");
            yf++;
            return c
        };
        Df = function () {
            var a = Ff,
                b = _.Jd ? function (c) {
                    return a.call(b.src, b.listener, c)
                } : function (c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        };
        _.zf = function (a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) _.zf(a, b[f], c, d, e);
                return null
            }
            c = _.Af(c);
            return _.pf(a) ? a.Gb(b, c, _.za(d) ? !!d.capture : !!d, e) : Bf(a, b, c, !0, d, e)
        };
        _.Gf = function (a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) _.Gf(a, b[f], c, d, e);
            else d = _.za(d) ? !!d.capture : !!d, c = _.Af(c), _.pf(a) ? a.Ea(b, c, d, e) : a && (a = _.Cf(a)) && (b = a.xd(b, c, d, e)) && _.Hf(b)
        };
        _.Hf = function (a) {
            if ("number" === typeof a || !a || a.Wc) return !1;
            var b = a.src;
            if (_.pf(b)) return b.Og(a);
            var c = a.type,
                d = a.j;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ef(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            yf--;
            (c = _.Cf(b)) ? (_.vf(c, a), 0 == c.o && (c.src = null, b[wf] = null)) : _.sf(a);
            return !0
        };
        Ef = function (a) {
            return a in xf ? xf[a] : xf[a] = "on" + a
        };
        Jf = function (a, b, c, d) {
            var e = !0;
            if (a = _.Cf(a))
                if (b = a.j[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.Wc && (f = If(f, d), e = e && !1 !== f)
                    }
            return e
        };
        If = function (a, b) {
            var c = a.listener,
                d = a.je || a.src;
            a.Rd && _.Hf(a);
            return c.call(d, b)
        };
        Ff = function (a, b) {
            if (a.Wc) return !0;
            if (!_.Jd) {
                var c = b || _.gf("window.event");
                b = new _.mf(c, this);
                var d = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (e = b.j; e; e = e.parentNode) c.push(e);
                    a = a.type;
                    for (e = c.length - 1; !b.o && 0 <= e; e--) {
                        b.j = c[e];
                        var f = Jf(c[e], a, !0, b);
                        d = d && f
                    }
                    for (e = 0; !b.o && e < c.length; e++) b.j = c[e], f = Jf(c[e], a, !1, b), d = d && f
                }
                return d
            }
            return If(a, new _.mf(b, this))
        };
        _.Cf = function (a) {
            a = a[wf];
            return a instanceof _.tf ? a : null
        };
        Kf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
        _.Af = function (a) {
            if (_.ya(a)) return a;
            a[Kf] || (a[Kf] = function (b) {
                return a.handleEvent(b)
            });
            return a[Kf]
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var Qf, Zf;
        _.Lf = function (a) {
            a && "function" == typeof a.ta && a.ta()
        };
        _.Mf = function (a, b) {
            b = _.Qd(_.Lf, b);
            a.Wa ? b() : (a.Db || (a.Db = []), a.Db.push(b))
        };
        _.Nf = function (a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        };
        _.Of = function (a, b) {
            if ((0, _.Gb)())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = _.Cb(b)
        };
        _.Pf = function (a) {
            var b = 0,
                c;
            for (c in a.j) {
                for (var d = a.j[c], e = 0; e < d.length; e++) ++b, _.sf(d[e]);
                delete a.j[c];
                a.o--
            }
        };
        _.Rf = function (a) {
            return /^[\s\xa0]*$/.test(a)
        };
        _.Sf = function (a, b) {
            return "string" === typeof b ? a.getElementById(b) : b
        };
        _.Tf = function (a) {
            return "CSS1Compat" == a.compatMode
        };
        _.Uf = function (a) {
            a = (a || window).document;
            a = _.Tf(a) ? a.documentElement : a.body;
            return new _.le(a.clientWidth, a.clientHeight)
        };
        _.Vf = function (a) {
            return a ? a.parentWindow || a.defaultView : window
        };
        _.Wf = function (a) {
            return _.ie && void 0 != a.children ? a.children : (0, _.La)(a.childNodes, function (b) {
                return 1 == b.nodeType
            })
        };
        _.Xf = function (a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        };
        _.Yf = function (a) {
            try {
                var b = a && a.activeElement;
                return b && b.nodeName ? b : null
            } catch (c) {
                return null
            }
        };
        Zf = function (a) {
            this.j = a || _.p.document || document
        };
        _.h = Zf.prototype;
        _.h.F = function (a) {
            return _.Sf(this.j, a)
        };
        _.h.Ba = function (a, b, c) {
            return _.se(this.j, arguments)
        };
        _.h.createElement = function (a) {
            return _.qe(this.j, a)
        };
        _.h.$d = function (a, b) {
            a.appendChild(b)
        };
        _.h.Xf = _.ve;
        _.h.ae = _.we;
        _.h.Uh = _.Wf;
        _.h.Wf = _.Xf;
        _.$f = function (a) {
            return a ? new Zf(_.ye(a)) : Qf || (Qf = new Zf)
        };
        _.P = function () {
            _.I.call(this);
            this.Eb = new _.tf(this);
            this.Wg = this;
            this.Id = null
        };
        _.v(_.P, _.I);
        _.P.prototype[_.of] = !0;
        _.h = _.P.prototype;
        _.h.Mh = function () {
            return this.Id
        };
        _.h.Ic = function (a) {
            this.Id = a
        };
        _.h.addEventListener = function (a, b, c, d) {
            _.O(this, a, b, c, d)
        };
        _.h.removeEventListener = function (a, b, c, d) {
            _.Gf(this, a, b, c, d)
        };
        _.h.dispatchEvent = function (a) {
            var b, c = this.Id;
            if (c)
                for (b = []; c; c = c.Id) b.push(c);
            c = this.Wg;
            var d = a.type || a;
            if ("string" === typeof a) a = new _.lf(a, c);
            else if (a instanceof _.lf) a.target = a.target || c;
            else {
                var e = a;
                a = new _.lf(d, c);
                _.Ra(a, e)
            }
            e = !0;
            if (b)
                for (var f = b.length - 1; !a.o && 0 <= f; f--) {
                    var g = a.j = b[f];
                    e = bg(g, d, !0, a) && e
                }
            a.o || (g = a.j = c, e = bg(g, d, !0, a) && e, a.o || (e = bg(g, d, !1, a) && e));
            if (b)
                for (f = 0; !a.o && f < b.length; f++) g = a.j = b[f], e = bg(g, d, !1, a) && e;
            return e
        };
        _.h.R = function () {
            _.P.M.R.call(this);
            this.Eb && _.Pf(this.Eb);
            this.Id = null
        };
        _.h.K = function (a, b, c, d) {
            return this.Eb.add(String(a), b, !1, c, d)
        };
        _.h.Gb = function (a, b, c, d) {
            return this.Eb.add(String(a), b, !0, c, d)
        };
        _.h.Ea = function (a, b, c, d) {
            return this.Eb.remove(String(a), b, c, d)
        };
        _.h.Og = function (a) {
            return _.vf(this.Eb, a)
        };
        var bg = function (a, b, c, d) {
            b = a.Eb.j[String(b)];
            if (!b) return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.Wc && g.capture == c) {
                    var k = g.listener,
                        l = g.je || g.src;
                    g.Rd && a.Og(g);
                    e = !1 !== k.call(l, d) && e
                }
            }
            return e && !d.defaultPrevented
        };
        _.P.prototype.Yd = function (a, b) {
            return this.Eb.Yd(String(a), b)
        };
        _.P.prototype.xd = function (a, b, c, d) {
            return this.Eb.xd(String(a), b, c, d)
        };
        _.P.prototype.hasListener = function (a, b) {
            return this.Eb.hasListener(void 0 !== a ? String(a) : void 0, b)
        };
        _.cg = function (a, b) {
            _.P.call(this);
            this.o = a || 1;
            this.j = b || _.p;
            this.w = (0, _.q)(this.tk, this);
            this.A = (0, _.Fa)()
        };
        _.v(_.cg, _.P);
        _.h = _.cg.prototype;
        _.h.wc = !1;
        _.h.Lb = null;
        _.h.tk = function () {
            if (this.wc) {
                var a = (0, _.Fa)() - this.A;
                0 < a && a < .8 * this.o ? this.Lb = this.j.setTimeout(this.w, this.o - a) : (this.Lb && (this.j.clearTimeout(this.Lb), this.Lb = null), this.dispatchEvent("tick"), this.wc && (this.stop(), this.start()))
            }
        };
        _.h.start = function () {
            this.wc = !0;
            this.Lb || (this.Lb = this.j.setTimeout(this.w, this.o), this.A = (0, _.Fa)())
        };
        _.h.stop = function () {
            this.wc = !1;
            this.Lb && (this.j.clearTimeout(this.Lb), this.Lb = null)
        };
        _.h.R = function () {
            _.cg.M.R.call(this);
            this.stop();
            delete this.j
        };
        _.dg = function (a, b, c) {
            if (_.ya(a)) c && (a = (0, _.q)(a, c));
            else if (a && "function" == typeof a.handleEvent) a = (0, _.q)(a.handleEvent, a);
            else throw Error("s");
            return 2147483647 < Number(b) ? -1 : _.p.setTimeout(a, b || 0)
        };
        _.eg = function (a) {
            _.p.clearTimeout(a)
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var pg, tg, ug;
        _.lg = function (a) {
            return new _.le(a.width, a.height)
        };
        _.mg = function (a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        };
        _.ng = function (a, b, c, d) {
            Array.prototype.splice.apply(a, _.mg(arguments, 1))
        };
        _.og = function (a) {
            return String(a).replace(/\-([a-z])/g, function (b, c) {
                return c.toUpperCase()
            })
        };
        pg = function (a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
                return c + d.toUpperCase()
            })
        };
        _.qg = function (a, b) {
            return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
        };
        _.rg = function (a, b, c) {
            return _.se(document, arguments)
        };
        _.sg = function (a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = String(b);
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = String(b)
            } else _.ve(a), a.appendChild(_.ye(a).createTextNode(String(b)))
        };
        tg = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1};
        ug = {IMG: " ", BR: "\n"};
        _.vg = function (a, b, c) {
            if (!(a.nodeName in tg))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in ug) b.push(ug[a.nodeName]);
                else
                    for (a = a.firstChild; a;) _.vg(a, b, c), a = a.nextSibling
        };
        var yg;
        _.xg = function (a, b, c) {
            if ("string" === typeof b) (b = _.wg(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = _.wg(c, d);
                    f && (c.style[f] = e)
                }
        };
        yg = {};
        _.wg = function (a, b) {
            var c = yg[b];
            if (!c) {
                var d = _.og(b);
                c = d;
                void 0 === a.style[d] && (d = (_.Qb ? "Webkit" : _.Pb ? "Moz" : _.x ? "ms" : _.Mb ? "O" : null) + pg(d), void 0 !== a.style[d] && (c = d));
                yg[b] = c
            }
            return c
        };
        _.zg = function (a, b) {
            var c = _.ye(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        };
        _.Ag = function (a, b) {
            return _.zg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        };
        _.Bg = function (a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {left: 0, top: 0, right: 0, bottom: 0}
            }
        };
        _.Cg = function (a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        };
        _.Eg = function (a) {
            var b = _.Dg;
            if ("none" != _.Ag(a, "display")) return b(a);
            var c = a.style,
                d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        };
        _.Dg = function (a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = _.Qb && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = _.Bg(a), new _.le(a.right - a.left, a.bottom - a.top)) : new _.le(b, c)
        };
        _.Fg = _.Pb ? "MozUserSelect" : _.Qb || _.Nb ? "WebkitUserSelect" : null;

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var Gg;
        Gg = [1, 4, 2];
        _.Hg = function (a) {
            return (_.Id ? 0 == a.Ya.button : "click" == a.type ? !0 : !!(a.Ya.button & Gg[0])) && !(_.Qb && _.Rb && a.ctrlKey)
        };
        _.Ig = function (a) {
            _.I.call(this);
            this.X = a;
            this.P = {}
        };
        _.v(_.Ig, _.I);
        var Jg = [];
        _.Ig.prototype.K = function (a, b, c, d) {
            return Kg(this, a, b, c, d)
        };
        _.Ig.prototype.A = function (a, b, c, d, e) {
            return Kg(this, a, b, c, d, e)
        };
        var Kg = function (a, b, c, d, e, f) {
            Array.isArray(c) || (c && (Jg[0] = c.toString()), c = Jg);
            for (var g = 0; g < c.length; g++) {
                var k = _.O(b, c[g], d || a.handleEvent, e || !1, f || a.X || a);
                if (!k) break;
                a.P[k.key] = k
            }
            return a
        };
        _.Ig.prototype.Gb = function (a, b, c, d) {
            return Lg(this, a, b, c, d)
        };
        var Lg = function (a, b, c, d, e, f) {
            if (Array.isArray(c))
                for (var g = 0; g < c.length; g++) Lg(a, b, c[g], d, e, f);
            else {
                b = _.zf(b, c, d || a.handleEvent, e, f || a.X || a);
                if (!b) return a;
                a.P[b.key] = b
            }
            return a
        };
        _.Ig.prototype.Ea = function (a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) this.Ea(a, b[f], c, d, e);
            else c = c || this.handleEvent, d = _.za(d) ? !!d.capture : !!d, e = e || this.X || this, c = _.Af(c), d = !!d, b = _.pf(a) ? a.xd(b, c, d, e) : a ? (a = _.Cf(a)) ? a.xd(b, c, d, e) : null : null, b && (_.Hf(b), delete this.P[b.key]);
            return this
        };
        _.Mg = function (a) {
            _.Pa(a.P, function (b, c) {
                this.P.hasOwnProperty(c) && _.Hf(b)
            }, a);
            a.P = {}
        };
        _.Ig.prototype.R = function () {
            _.Ig.M.R.call(this);
            _.Mg(this)
        };
        _.Ig.prototype.handleEvent = function () {
            throw Error("v");
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var dh;
        _.eh = function (a, b) {
            b ? a.setAttribute("role", b) : a.removeAttribute("role")
        };
        _.U = function (a, b, c) {
            Array.isArray(c) && (c = c.join(" "));
            var d = "aria-" + b;
            "" === c || void 0 == c ? (dh || (dh = {
                atomic: !1,
                autocomplete: "none",
                dropeffect: "none",
                haspopup: !1,
                live: "off",
                multiline: !1,
                multiselectable: !1,
                orientation: "vertical",
                readonly: !1,
                relevant: "additions text",
                required: !1,
                sort: "none",
                busy: !1,
                disabled: !1,
                hidden: !1,
                invalid: "false"
            }), c = dh, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        _.gh = function (a, b, c) {
            _.fh.K(b, c, void 0, a.X || a, a);
            return a
        };
        _.hh = function (a, b) {
            b = b instanceof _.jb ? b : _.nb(b);
            a.href = _.kb(b)
        };
        _.ih = function (a, b) {
            var c = b || document;
            return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : _.ne(document, "*", a, b)
        };
        _.jh = function (a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
        };
        _.kh = function (a, b) {
            return b ? _.ze(a, function (c) {
                return !b || "string" === typeof c.className && _.Oa(c.className.split(/\s+/), b)
            }, void 0) : null
        };
        var lh, mh;
        lh = function () {
        };
        _.fh = new lh;
        mh = ["click", "keydown", "keyup"];
        lh.prototype.K = function (a, b, c, d, e) {
            var f = function (g) {
                var k = _.Af(b),
                    l = _.xe(g.target) ? g.target.getAttribute("role") || null : null;
                "click" == g.type && _.Hg(g) ? k.call(d, g) : 13 != g.keyCode && 3 != g.keyCode || "keyup" == g.type ? 32 != g.keyCode || "keyup" != g.type || "button" != l && "tab" != l || (k.call(d, g), g.preventDefault()) : (g.type = "keypress", k.call(d, g))
            };
            f.yb = b;
            f.bk = d;
            e ? e.K(a, mh, f, c) : _.O(a, mh, f, c)
        };
        lh.prototype.Ea = function (a, b, c, d, e) {
            for (var f, g = 0; f = mh[g]; g++) {
                var k = a;
                var l = f;
                var m = !!c;
                l = _.pf(k) ? k.Yd(l, m) : k ? (k = _.Cf(k)) ? k.Yd(l, m) : [] : [];
                for (k = 0; m = l[k]; k++) {
                    var r = m.listener;
                    if (r.yb == b && r.bk == d) {
                        e ? e.Ea(a, f, m.listener, c, d) : _.Gf(a, f, m.listener, c, d);
                        break
                    }
                }
            }
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var oh;
        oh = function (a, b, c) {
            if (a.o) return null;
            if (c instanceof Array) {
                var d = null;
                c = _.ia(c);
                for (var e = c.next(); !e.done; e = c.next()) (e = oh(a, b, e.value)) && (d = e);
                return d
            }
            d = null;
            a.j && a.j.type == c && a.w == b && (d = a.j, a.j = null);
            if (e = b.getAttribute("data-eqid")) b.removeAttribute("data-eqid"), (e = a.A[e]) ? b.removeEventListener ? b.removeEventListener(c, e, !1) : b.detachEvent && b.detachEvent("on" + c, e) : a.B.log(Error("n`" + b));
            return d
        };
        _.ph = function (a, b, c) {
            return function () {
                try {
                    return b.apply(c, arguments)
                } catch (d) {
                    a.log(d)
                }
            }
        };
        _.rh = function (a, b, c, d, e, f) {
            d = _.ph(a, d, f);
            a = _.O(b, c, d, e, f);
            _.qh(b, c);
            return a
        };
        _.qh = function (a, b) {
            if (a instanceof Element && (b = oh(_.Ic("eq"), a, b || [])))
                if (_.x && b instanceof MouseEvent && a.dispatchEvent) {
                    var c = document.createEvent("MouseEvent");
                    c.initMouseEvent(b.type, !0, !0, b.view, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget);
                    a.dispatchEvent(c)
                } else a.dispatchEvent && a.dispatchEvent(b)
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.pj = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(_.pj, _.y);
        _.qj = function (a, b, c) {
            a.rel = c;
            a.href = -1 != c.toLowerCase().indexOf("stylesheet") ? _.cb(b) : b instanceof _.ab ? _.cb(b) : b instanceof _.jb ? _.kb(b) : _.kb(_.nb(b))
        };
        _.rj = function (a) {
            return _.db(_.A(a, 4) || "")
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var Ij;
        _.Hj = function (a) {
            this.j = a || {cookie: ""}
        };
        _.h = _.Hj.prototype;
        _.h.set = function (a, b, c) {
            var d = !1;
            if ("object" === typeof c) {
                var e = c.Pl;
                d = c.dk || !1;
                var f = c.domain || void 0;
                var g = c.path || void 0;
                var k = c.se
            }
            if (/[;=\s]/.test(a)) throw Error("T`" + a);
            if (/[;\r\n]/.test(b)) throw Error("U`" + b);
            void 0 === k && (k = -1);
            c = f ? ";domain=" + f : "";
            g = g ? ";path=" + g : "";
            d = d ? ";secure" : "";
            k = 0 > k ? "" : 0 == k ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.Fa)() + 1E3 * k)).toUTCString();
            this.j.cookie = a + "=" + b + c + g + k + d + (null != e ? ";samesite=" + e : "")
        };
        _.h.get = function (a, b) {
            for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
                f = (0, _.eb)(d[e]);
                if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
                if (f == a) return ""
            }
            return b
        };
        _.h.remove = function (a, b, c) {
            var d = void 0 !== this.get(a);
            this.set(a, "", {se: 0, path: b, domain: c});
            return d
        };
        _.h.mb = function () {
            return Ij(this).keys
        };
        _.h.Pa = function () {
            return Ij(this).values
        };
        _.h.zc = function () {
            return !this.j.cookie
        };
        _.h.clear = function () {
            for (var a = Ij(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
        };
        Ij = function (a) {
            a = (a.j.cookie || "").split(";");
            for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = (0, _.eb)(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
            return {keys: b, values: c}
        };
        _.Jj = new _.Hj("undefined" == typeof document ? null : document);

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        _.Kj = function (a) {
            switch (a) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    return !0;
                default:
                    return !1
            }
        };
        _.Lj = function () {
        };
        _.Lj.prototype.o = null;
        var Nj;
        Nj = function () {
        };
        _.v(Nj, _.Lj);
        Nj.prototype.j = function () {
            var a = Oj(this);
            return a ? new ActiveXObject(a) : new XMLHttpRequest
        };
        Nj.prototype.A = function () {
            var a = {};
            Oj(this) && (a[0] = !0, a[1] = !0);
            return a
        };
        var Oj = function (a) {
            if (!a.w && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.w = d
                    } catch (e) {
                    }
                }
                throw Error("V");
            }
            return a.w
        };
        _.Mj = new Nj;

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        _.Pj = function (a, b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                for (var d = _.A(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.j[c] = e
            }
        };
        _.Qj = function (a, b, c) {
            _.Pj(a, b, c);
            b = a.j[c];
            b == _.tc && (b = a.j[c] = []);
            return b
        };
        _.Rj = function (a) {
            return a.contentDocument || a.contentWindow.document
        };
        _.Sj = function (a, b) {
            this.o = {};
            this.j = [];
            this.w = 0;
            var c = arguments.length;
            if (1 < c) {
                if (c % 2) throw Error("j");
                for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
            } else if (a)
                if (a instanceof _.Sj)
                    for (c = a.mb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
                else
                    for (d in a) this.set(d, a[d])
        };
        _.Sj.prototype.Pa = function () {
            Tj(this);
            for (var a = [], b = 0; b < this.j.length; b++) a.push(this.o[this.j[b]]);
            return a
        };
        _.Sj.prototype.mb = function () {
            Tj(this);
            return this.j.concat()
        };
        _.Vj = function (a, b) {
            return Uj(a.o, b)
        };
        _.Sj.prototype.zc = function () {
            return 0 == this.w
        };
        _.Sj.prototype.clear = function () {
            this.o = {};
            this.w = this.j.length = 0
        };
        _.Sj.prototype.remove = function (a) {
            return Uj(this.o, a) ? (delete this.o[a], this.w--, this.j.length > 2 * this.w && Tj(this), !0) : !1
        };
        var Tj = function (a) {
            if (a.w != a.j.length) {
                for (var b = 0, c = 0; b < a.j.length;) {
                    var d = a.j[b];
                    Uj(a.o, d) && (a.j[c++] = d);
                    b++
                }
                a.j.length = c
            }
            if (a.w != a.j.length) {
                var e = {};
                for (c = b = 0; b < a.j.length;) d = a.j[b], Uj(e, d) || (a.j[c++] = d, e[d] = 1), b++;
                a.j.length = c
            }
        };
        _.Sj.prototype.get = function (a, b) {
            return Uj(this.o, a) ? this.o[a] : b
        };
        _.Sj.prototype.set = function (a, b) {
            Uj(this.o, a) || (this.w++, this.j.push(a));
            this.o[a] = b
        };
        _.Sj.prototype.forEach = function (a, b) {
            for (var c = this.mb(), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = this.get(e);
                a.call(b, f, e, this)
            }
        };
        var Uj = function (a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var ck;
        _.Wj = function (a) {
            return encodeURIComponent(String(a))
        };
        _.Xj = function (a, b, c, d, e, f) {
            var g = "";
            a && (g += a + ":");
            c && (g += "//", b && (g += b + "@"), g += c, d && (g += ":" + d));
            e && (g += e);
            f && (g += "?" + f);
            return g
        };
        _.Yj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        _.Zj = function (a) {
            a = a.match(_.Yj)[1] || null;
            !a && _.p.self && _.p.self.location && (a = _.p.self.location.protocol, a = a.substr(0, a.length - 1));
            return a ? a.toLowerCase() : ""
        };
        _.ak = function (a, b) {
            if (!b) return a;
            var c = a.indexOf("#");
            0 > c && (c = a.length);
            var d = a.indexOf("?");
            if (0 > d || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.substr(0, d), e, a.substr(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        };
        _.bk = function (a, b, c) {
            if (Array.isArray(b))
                for (var d = 0; d < b.length; d++) _.bk(a, String(b[d]), c);
            else null != b && c.push(a + ("" === b ? "" : "=" + _.Wj(b)))
        };
        ck = function (a, b) {
            var c = [];
            for (b = b || 0; b < a.length; b += 2) _.bk(a[b], a[b + 1], c);
            return c.join("&")
        };
        _.dk = function (a, b) {
            var c = 2 == arguments.length ? ck(arguments[1], 0) : ck(arguments, 1);
            return _.ak(a, c)
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var ek, gk, ik, jk, lk, mk, ok, pk, uk;
        ek = function (a) {
            if (Array.isArray(a)) {
                for (var b = Array(a.length), c = 0; c < a.length; c++) {
                    var d = a[c];
                    null != d && (b[c] = "object" == typeof d ? ek(d) : d)
                }
                return b
            }
            if (_.sc && a instanceof Uint8Array) return new Uint8Array(a);
            b = {};
            for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? ek(d) : d);
            return b
        };
        _.fk = function (a) {
            return new a.constructor(ek(a.tb()))
        };
        gk = function (a, b) {
            a.o = b;
            a.Lb && a.wc ? (a.stop(), a.start()) : a.Lb && a.stop()
        };
        _.hk = function (a, b, c) {
            a.j || (a.j = {});
            c = c || [];
            for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].tb();
            a.j[b] = c;
            return _.E(a, b, d)
        };
        ik = function (a) {
            return a.o || (a.o = a.A())
        };
        jk = function (a) {
            if (a.Pa && "function" == typeof a.Pa) return a.Pa();
            if ("string" === typeof a) return a.split("");
            if (_.Ud(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return _.Nf(a)
        };
        lk = function (a) {
            a: {
                var b = kk;
                for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        };
        mk = function (a) {
            var b = b || 0;
            return function () {
                return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
            }
        };
        ok = function () {
            this.j = nk
        };
        ok.prototype.o = function () {
            return !!this.j
        };
        pk = function (a, b) {
            return a + Math.random() * (b - a)
        };
        _.qk = function (a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (_.Ud(a) || "string" === typeof a) (0, _.Ka)(a, b, void 0);
            else {
                if (a.mb && "function" == typeof a.mb) var c = a.mb();
                else if (a.Pa && "function" == typeof a.Pa) c = void 0;
                else if (_.Ud(a) || "string" === typeof a) {
                    c = [];
                    for (var d = a.length, e = 0; e < d; e++) c.push(e)
                } else
                    for (e in c = [], d = 0, a) c[d++] = e;
                d = jk(a);
                e = d.length;
                for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            }
        };
        _.rk = function (a, b, c) {
            c = null != c ? "=" + _.Wj(c) : "";
            return _.ak(a, b + c)
        };
        _.sk = function (a, b, c, d) {
            for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
                var f = a.charCodeAt(b - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
                b += e + 1
            }
            return -1
        };
        _.tk = /#|$/;
        uk = /[?&]($|#)/;
        _.vk = function (a, b) {
            for (var c = a.search(_.tk), d = 0, e, f = []; 0 <= (e = _.sk(a, d, b, c));) f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c);
            f.push(a.substr(d));
            return f.join("").replace(uk, "$1")
        };
        var wk = function (a) {
            if (!a) return "";
            a = a.split("#")[0].split("?")[0];
            a = a.toLowerCase();
            0 == a.indexOf("//") && (a = window.location.protocol + a);
            /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
            var b = a.substring(a.indexOf("://") + 3),
                c = b.indexOf("/");
            -1 != c && (b = b.substring(0, c));
            a = a.substring(0, a.indexOf("://"));
            if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "chrome-untrusted" !== a && "chrome" !== a && "app" !== a) throw Error("W`" + a);
            c = "";
            var d = b.indexOf(":");
            if (-1 !=
                d) {
                var e = b.substring(d + 1);
                b = b.substring(0, d);
                if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
            }
            return a + "://" + b + c
        };
        var xk = function () {
            function a() {
                e[0] = 1732584193;
                e[1] = 4023233417;
                e[2] = 2562383102;
                e[3] = 271733878;
                e[4] = 3285377520;
                r = m = 0
            }

            function b(t) {
                for (var F = g, D = 0; 64 > D; D += 4) F[D / 4] = t[D] << 24 | t[D + 1] << 16 | t[D + 2] << 8 | t[D + 3];
                for (D = 16; 80 > D; D++) t = F[D - 3] ^ F[D - 8] ^ F[D - 14] ^ F[D - 16], F[D] = (t << 1 | t >>> 31) & 4294967295;
                t = e[0];
                var R = e[1],
                    K = e[2],
                    ea = e[3],
                    Nc = e[4];
                for (D = 0; 80 > D; D++) {
                    if (40 > D)
                        if (20 > D) {
                            var wa = ea ^ R & (K ^ ea);
                            var Oc = 1518500249
                        } else wa = R ^ K ^ ea, Oc = 1859775393;
                    else 60 > D ? (wa = R & K | ea & (R | K), Oc = 2400959708) : (wa = R ^ K ^ ea, Oc = 3395469782);
                    wa = ((t << 5 | t >>>
                        27) & 4294967295) + wa + Nc + Oc + F[D] & 4294967295;
                    Nc = ea;
                    ea = K;
                    K = (R << 30 | R >>> 2) & 4294967295;
                    R = t;
                    t = wa
                }
                e[0] = e[0] + t & 4294967295;
                e[1] = e[1] + R & 4294967295;
                e[2] = e[2] + K & 4294967295;
                e[3] = e[3] + ea & 4294967295;
                e[4] = e[4] + Nc & 4294967295
            }

            function c(t, F) {
                if ("string" === typeof t) {
                    t = unescape(encodeURIComponent(t));
                    for (var D = [], R = 0, K = t.length; R < K; ++R) D.push(t.charCodeAt(R));
                    t = D
                }
                F || (F = t.length);
                D = 0;
                if (0 == m)
                    for (; D + 64 < F;) b(t.slice(D, D + 64)), D += 64, r += 64;
                for (; D < F;)
                    if (f[m++] = t[D++], r++, 64 == m)
                        for (m = 0, b(f); D + 64 < F;) b(t.slice(D, D + 64)), D += 64, r +=
                            64
            }

            function d() {
                var t = [],
                    F = 8 * r;
                56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
                for (var D = 63; 56 <= D; D--) f[D] = F & 255, F >>>= 8;
                b(f);
                for (D = F = 0; 5 > D; D++)
                    for (var R = 24; 0 <= R; R -= 8) t[F++] = e[D] >> R & 255;
                return t
            }

            for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
            var m, r;
            a();
            return {
                reset: a, update: c, digest: d, vh: function () {
                    for (var t = d(), F = "", D = 0; D < t.length; D++) F += "0123456789ABCDEF".charAt(Math.floor(t[D] / 16)) + "0123456789ABCDEF".charAt(t[D] % 16);
                    return F
                }
            }
        };
        var zk = function (a, b, c) {
                var d = [],
                    e = [];
                if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], (0, _.Ka)(d, function (k) {
                    e.push(k)
                }), yk(e.join(" "));
                var f = [],
                    g = [];
                (0, _.Ka)(c, function (k) {
                    g.push(k.key);
                    f.push(k.value)
                });
                c = Math.floor((new Date).getTime() / 1E3);
                e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
                (0, _.Ka)(d, function (k) {
                    e.push(k)
                });
                a = yk(e.join(" "));
                a = [c, a];
                0 == g.length || a.push(g.join(""));
                return a.join("_")
            },
            yk = function (a) {
                var b = xk();
                b.update(a);
                return b.vh().toLowerCase()
            };
        _.Ak = function (a) {
            var b = wk(String(_.p.location.href)),
                c;
            (c = _.p.__SAPISID || _.p.__APISID || _.p.__OVERRIDE_SID) ? c = !0 : (c = new _.Hj(document), c = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID"), c = !!c);
            if (c && (c = (b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? _.p.__SAPISID : _.p.__APISID, c || (c = new _.Hj(document), c = c.get(b ? "SAPISID" : "APISID") || c.get("__Secure-3PAPISID")), c)) {
                b = b ? "SAPISIDHASH" : "APISIDHASH";
                var d = String(_.p.location.href);
                return d && c && b ? [b, zk(wk(d), c, a || null)].join(" ") :
                    null
            }
            return null
        };
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        _.Bk = function (a) {
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {
            }
            throw Error("X`" + a);
        };
        _.Ck = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
        var Dk = function (a) {
            this.o = this.j = this.w = a
        };
        Dk.prototype.reset = function () {
            this.o = this.j = this.w
        };
        var Ek = function (a) {
                _.P.call(this);
                this.headers = new _.Sj;
                this.G = a || null;
                this.o = !1;
                this.D = this.j = null;
                this.H = "";
                this.Qc = 0;
                this.w = this.L = this.A = this.J = !1;
                this.C = 0;
                this.B = null;
                this.S = "";
                this.N = this.O = !1
            },
            Fk, Gk, Hk;
        _.v(Ek, _.P);
        Fk = /^https?$/i;
        Gk = ["POST", "PUT"];
        Hk = [];
        _.Ik = function (a, b, c, d, e, f, g) {
            var k = new Ek;
            Hk.push(k);
            b && k.K("complete", b);
            k.Gb("ready", k.T);
            f && (k.C = Math.max(0, f));
            g && (k.O = g);
            k.send(a, c, d, e)
        };
        Ek.prototype.T = function () {
            this.ta();
            _.hf(Hk, this)
        };
        Ek.prototype.send = function (a, b, c, d) {
            if (this.j) throw Error("Z`" + this.H + "`" + a);
            b = b ? b.toUpperCase() : "GET";
            this.H = a;
            this.Qc = 0;
            this.J = !1;
            this.o = !0;
            this.j = this.G ? this.G.j() : _.Mj.j();
            this.D = this.G ? ik(this.G) : ik(_.Mj);
            this.j.onreadystatechange = (0, _.q)(this.P, this);
            try {
                this.L = !0, this.j.open(b, String(a), !0), this.L = !1
            } catch (f) {
                Jk(this);
                return
            }
            a = c || "";
            var e = new _.Sj(this.headers);
            d && _.qk(d, function (f, g) {
                e.set(g, f)
            });
            d = lk(e.mb());
            c = _.p.FormData && a instanceof _.p.FormData;
            !_.Oa(Gk, b) || d || c || e.set("Content-Type",
                "application/x-www-form-urlencoded;charset=utf-8");
            e.forEach(function (f, g) {
                this.j.setRequestHeader(g, f)
            }, this);
            this.S && (this.j.responseType = this.S);
            "withCredentials" in this.j && this.j.withCredentials !== this.O && (this.j.withCredentials = this.O);
            try {
                Kk(this), 0 < this.C && ((this.N = Lk(this.j)) ? (this.j.timeout = this.C, this.j.ontimeout = (0, _.q)(this.Ld, this)) : this.B = _.dg(this.Ld, this.C, this)), this.A = !0, this.j.send(a), this.A = !1
            } catch (f) {
                Jk(this)
            }
        };
        var Lk = function (a) {
                return _.x && _.ec(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
            },
            kk = function (a) {
                return "content-type" == a.toLowerCase()
            };
        Ek.prototype.Ld = function () {
            "undefined" != typeof _.ta && this.j && (this.Qc = 8, this.dispatchEvent("timeout"), this.abort(8))
        };
        var Jk = function (a) {
                a.o = !1;
                a.j && (a.w = !0, a.j.abort(), a.w = !1);
                a.Qc = 5;
                Mk(a);
                Nk(a)
            },
            Mk = function (a) {
                a.J || (a.J = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
            };
        Ek.prototype.abort = function (a) {
            this.j && this.o && (this.o = !1, this.w = !0, this.j.abort(), this.w = !1, this.Qc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Nk(this))
        };
        Ek.prototype.R = function () {
            this.j && (this.o && (this.o = !1, this.w = !0, this.j.abort(), this.w = !1), Nk(this, !0));
            Ek.M.R.call(this)
        };
        Ek.prototype.P = function () {
            this.Wa || (this.L || this.A || this.w ? Ok(this) : this.U())
        };
        Ek.prototype.U = function () {
            Ok(this)
        };
        var Ok = function (a) {
                if (a.o && "undefined" != typeof _.ta && (!a.D[1] || 4 != (a.j ? a.j.readyState : 0) || 2 != a.vc()))
                    if (a.A && 4 == (a.j ? a.j.readyState : 0)) _.dg(a.P, 0, a);
                    else if (a.dispatchEvent("readystatechange"), 4 == (a.j ? a.j.readyState : 0)) {
                        a.o = !1;
                        try {
                            a.ne() ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.Qc = 6, a.vc(), Mk(a))
                        } finally {
                            Nk(a)
                        }
                    }
            },
            Nk = function (a, b) {
                if (a.j) {
                    Kk(a);
                    var c = a.j,
                        d = a.D[0] ? _.ua : null;
                    a.j = null;
                    a.D = null;
                    b || a.dispatchEvent("ready");
                    try {
                        c.onreadystatechange = d
                    } catch (e) {
                    }
                }
            },
            Kk = function (a) {
                a.j && a.N &&
                (a.j.ontimeout = null);
                a.B && (_.eg(a.B), a.B = null)
            };
        Ek.prototype.ne = function () {
            var a = this.vc(),
                b;
            if (!(b = _.Kj(a))) {
                if (a = 0 === a) a = _.Zj(String(this.H)), a = !Fk.test(a);
                b = a
            }
            return b
        };
        Ek.prototype.vc = function () {
            try {
                return 2 < (this.j ? this.j.readyState : 0) ? this.j.status : -1
            } catch (a) {
                return -1
            }
        };
        Ek.prototype.Zd = function () {
            try {
                return this.j ? this.j.responseText : ""
            } catch (a) {
                return ""
            }
        };
        Ek.prototype.Vf = function () {
            if (this.j) {
                a: {
                    var a = this.j.responseText;
                    if (_.p.JSON) try {
                        var b = _.p.JSON.parse(a);
                        break a
                    } catch (c) {
                    }
                    b = _.Bk(a)
                }
                return b
            }
        };
        var Pk = function (a, b, c) {
            _.Ik(a.url, function (d) {
                d = d.target;
                d.ne() ? b(d.Zd()) : c(d.vc())
            }, a.$j, a.body, a.Zj, a.uk, a.withCredentials)
        };
        var Qk = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(Qk, _.y);
        Qk.prototype.Xc = function (a) {
            return _.E(this, 5, a)
        };
        var Rk = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(Rk, _.y);
        var Sk;
        _.Tk = function (a) {
            _.z(this, a, 0, 30, Sk, null)
        };
        _.v(_.Tk, _.y);
        Sk = [3, 20, 27];
        _.Uk = function (a) {
            var b = (0, _.Fa)().toString();
            _.E(a, 1, b)
        };
        _.Vk = function (a, b) {
            return _.E(a, 8, b)
        };
        var Xk = function (a) {
            _.z(this, a, 0, 17, Wk, null)
        };
        _.v(Xk, _.y);
        var Wk = [3, 5],
            Yk = function (a) {
                var b = (0, _.Fa)().toString();
                return _.E(a, 4, b)
            },
            Zk = function (a, b) {
                return _.hk(a, 3, b)
            },
            $k = function (a, b) {
                return _.E(a, 14, b)
            };
        var bl = function (a) {
            _.z(this, a, 0, 6, al, null)
        };
        _.v(bl, _.y);
        var al = [5];
        var nk = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(nk, _.y);
        var cl = new ok;
        var el = function (a, b, c, d, e, f, g, k, l, m, r) {
            _.P.call(this);
            this.W = a;
            this.S = b || _.ua;
            this.B = new Xk;
            this.Z = d;
            this.U = r;
            this.j = [];
            this.T = "";
            this.$ = _.Qd(pk, 0, 1);
            this.J = e || null;
            this.D = c || null;
            this.H = g || !1;
            this.L = l || null;
            this.V = !1;
            this.X = this.N = -1;
            this.P = !1;
            this.w = null;
            this.ka = !k;
            this.O = 0;
            this.sa = 1;
            this.Y = f || !1;
            a = new Rk;
            a = _.E(a, 1, 1);
            f || (f = (new Qk).Xc(document.documentElement.getAttribute("lang")), _.H(a, 11, f));
            _.H(this.B, 1, a);
            _.E(this.B, 2, this.W);
            this.A = new Dk(1E4);
            this.o = new _.cg(this.A.j);
            _.Mf(this, this.o);
            _.O(this.o,
                "tick", mk(dl(this, m)), !1, this);
            this.G = new _.cg(6E5);
            _.Mf(this, this.G);
            _.O(this.G, "tick", mk(dl(this, m)), !1, this);
            this.H || this.G.start();
            this.Y || (_.O(_.Vf(), "beforeunload", this.C, !1, this), _.O(_.Vf(), "unload", this.C, !1, this), _.O(document, "pagehide", this.C, !1, this))
        };
        _.v(el, _.P);
        var dl = function (a, b) {
            return b ? function () {
                b().then(a.flush.bind(a))
            } : a.flush
        };
        el.prototype.R = function () {
            this.C();
            el.M.R.call(this)
        };
        var fl = function (a) {
            a.J || (a.J = .01 > a.$() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
            return a.J
        };
        el.prototype.ud = function (a) {
            a instanceof _.Tk ? this.log(a) : (a = _.Vk(new _.Tk, a.o()), this.log(a))
        };
        _.gl = function (a, b) {
            a.A = new Dk(1 > b ? 1 : b);
            gk(a.o, a.A.j)
        };
        el.prototype.log = function (a) {
            a = _.fk(a);
            var b = this.sa++;
            _.E(a, 21, b);
            _.A(a, 1) || _.Uk(a);
            this.w && (b = _.fk(this.w), _.H(a, 16, b));
            for (; 1E3 <= this.j.length;) this.j.shift(), ++this.O;
            this.j.push(a);
            this.dispatchEvent(new hl(a));
            this.H || this.o.wc || this.o.start()
        };
        el.prototype.flush = function (a, b) {
            if (0 == this.j.length) a && a();
            else {
                var c = (0, _.Fa)();
                if (this.X > c && this.N < c) b && b("throttled");
                else {
                    var d = $k(Zk(Yk(_.fk(this.B)), this.j), this.O);
                    c = {};
                    var e = this.S();
                    e && (c.Authorization = e);
                    var f = fl(this);
                    this.D && (c["X-Goog-AuthUser"] = this.D, f = _.rk(f, "authuser", this.D));
                    this.L && (c["X-Goog-PageId"] = this.L, f = _.rk(f, "pageId", this.L));
                    if (e && this.T == e) b && b("stale-auth-token");
                    else {
                        this.j = [];
                        this.o.wc && this.o.stop();
                        this.O = 0;
                        var g = d.o();
                        c = {
                            url: f,
                            body: g,
                            zl: 1,
                            Zj: c,
                            $j: "POST",
                            withCredentials: this.ka,
                            uk: 0
                        };
                        f = (0, _.q)(function (k) {
                            this.A.reset();
                            gk(this.o, this.A.j);
                            if (k) {
                                try {
                                    var l = JSON.parse(k.replace(")]}'\n", ""));
                                    var m = new bl(l)
                                } catch (r) {
                                }
                                m && (k = _.C(m, 1, "-1"), k = Number(k), 0 < k && (this.N = (0, _.Fa)(), this.X = this.N + k), _.uc(m), m.j || (m.j = {}), cl.o() ? (!m.j[175237375] && m.A[175237375] && (m.j[175237375] = new cl.j(m.A[175237375])), m = m.j[175237375]) : m = m.A[175237375], m && (m = _.C(m, 1, -1), -1 != m && (this.P || _.gl(this, m))))
                            }
                            a && a()
                        }, this);
                        g = (0, _.q)(function (k) {
                            var l = _.Qj(d, _.Tk, 3),
                                m = this.A;
                            m.o = Math.min(3E5, 2 * m.o);
                            m.j = Math.min(3E5,
                                m.o + Math.round(.2 * (Math.random() - .5) * m.o));
                            gk(this.o, this.A.j);
                            401 == k && e && (this.T = e);
                            if (500 <= k && 600 > k || 401 == k || 0 == k) this.j = l.concat(this.j), this.H || this.o.wc || this.o.start();
                            b && b("net-send-failed", k)
                        }, this);
                        this.U ? this.U.send(c, f, g) : this.Z(c, f, g)
                    }
                }
            }
        };
        el.prototype.C = function () {
            this.V && il(this);
            this.flush()
        };
        var il = function (a) {
                jl(a, function (b, c) {
                    b = _.rk(b, "format", "json");
                    return _.Vf().navigator.sendBeacon(b, c.o())
                })
            },
            jl = function (a, b) {
                if (0 != a.j.length) {
                    var c = _.vk(fl(a), "format");
                    c = _.dk(c, "auth", a.S(), "authuser", a.D || "0");
                    for (var d = 0; 10 > d && a.j.length; ++d) {
                        var e = a.j.slice(0, 32),
                            f = Zk(Yk(_.fk(a.B)), e);
                        if (!b(c, f)) break;
                        a.j = a.j.slice(e.length)
                    }
                }
            },
            hl = function () {
                this.type = "event-logged"
            };
        _.v(hl, _.lf);
        _.kl = function (a, b, c, d, e, f, g) {
            el.call(this, a, _.Ak, b, Pk, c, d, e, void 0, f, g)
        };
        _.v(_.kl, el);

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        _.ml = function (a) {
            (0, _.ll)();
            return _.db(a)
        };
        _.ll = _.ua;

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var xm, zm, Im, Km, Tm, Lm, Nm, Mm, Qm, Om, Jm, Um, Vm, Pm;
        _.wm = function (a) {
            return new _.Xa(_.Va, a)
        };
        xm = function (a) {
            return Array.prototype.concat.apply([], arguments)
        };
        _.ym = function () {
            return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, _.Fa)()).toString(36)
        };
        zm = function (a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };
        _.Am = function (a, b) {
            this.o = this.G = this.w = "";
            this.D = null;
            this.B = this.A = "";
            this.C = !1;
            var c;
            a instanceof _.Am ? (this.C = void 0 !== b ? b : a.C, _.Bm(this, a.w), this.G = a.G, _.Cm(this, a.o), _.Dm(this, a.D), _.Em(this, a.A), _.Fm(this, _.Gm(a.j)), _.Hm(this, a.B)) : a && (c = String(a).match(_.Yj)) ? (this.C = !!b, _.Bm(this, c[1] || "", !0), this.G = Im(c[2] || ""), _.Cm(this, c[3] || "", !0), _.Dm(this, c[4]), _.Em(this, c[5] || "", !0), _.Fm(this, c[6] || "", !0), _.Hm(this, c[7] || "", !0)) : (this.C = !!b, this.j = new Jm(null, this.C))
        };
        _.Am.prototype.toString = function () {
            var a = [],
                b = this.w;
            b && a.push(Km(b, Lm, !0), ":");
            var c = this.o;
            if (c || "file" == b) a.push("//"), (b = this.G) && a.push(Km(b, Lm, !0), "@"), a.push(_.Wj(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.D, null != c && a.push(":", String(c));
            if (c = this.A) this.o && "/" != c.charAt(0) && a.push("/"), a.push(Km(c, "/" == c.charAt(0) ? Mm : Nm, !0));
            (c = this.j.toString()) && a.push("?", c);
            (c = this.B) && a.push("#", Km(c, Om));
            return a.join("")
        };
        _.Bm = function (a, b, c) {
            a.w = c ? Im(b, !0) : b;
            a.w && (a.w = a.w.replace(/:$/, ""));
            return a
        };
        _.Cm = function (a, b, c) {
            a.o = c ? Im(b, !0) : b;
            return a
        };
        _.Dm = function (a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("ba`" + b);
                a.D = b
            } else a.D = null;
            return a
        };
        _.Em = function (a, b, c) {
            a.A = c ? Im(b, !0) : b;
            return a
        };
        _.Fm = function (a, b, c) {
            b instanceof Jm ? (a.j = b, Pm(a.j, a.C)) : (c || (b = Km(b, Qm)), a.j = new Jm(b, a.C));
            return a
        };
        _.Rm = function (a, b, c) {
            a.j.set(b, c);
            return a
        };
        _.Sm = function (a, b) {
            return a.j.get(b)
        };
        _.Hm = function (a, b, c) {
            a.B = c ? Im(b) : b;
            return a
        };
        Im = function (a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        };
        Km = function (a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, Tm), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        };
        Tm = function (a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        };
        Lm = /[#\/\?@]/g;
        Nm = /[#\?:]/g;
        Mm = /[#\?]/g;
        Qm = /[#\?@]/g;
        Om = /#/g;
        Jm = function (a, b) {
            this.o = this.j = null;
            this.w = a || null;
            this.A = !!b
        };
        Um = function (a) {
            a.j || (a.j = new _.Sj, a.o = 0, a.w && zm(a.w, function (b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
            }))
        };
        Jm.prototype.add = function (a, b) {
            Um(this);
            this.w = null;
            a = Vm(this, a);
            var c = this.j.get(a);
            c || this.j.set(a, c = []);
            c.push(b);
            this.o += 1;
            return this
        };
        Jm.prototype.remove = function (a) {
            Um(this);
            a = Vm(this, a);
            return _.Vj(this.j, a) ? (this.w = null, this.o -= this.j.get(a).length, this.j.remove(a)) : !1
        };
        Jm.prototype.clear = function () {
            this.j = this.w = null;
            this.o = 0
        };
        Jm.prototype.zc = function () {
            Um(this);
            return 0 == this.o
        };
        _.Wm = function (a, b) {
            Um(a);
            b = Vm(a, b);
            return _.Vj(a.j, b)
        };
        _.h = Jm.prototype;
        _.h.forEach = function (a, b) {
            Um(this);
            this.j.forEach(function (c, d) {
                (0, _.Ka)(c, function (e) {
                    a.call(b, e, d, this)
                }, this)
            }, this)
        };
        _.h.mb = function () {
            Um(this);
            for (var a = this.j.Pa(), b = this.j.mb(), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
            return c
        };
        _.h.Pa = function (a) {
            Um(this);
            var b = [];
            if ("string" === typeof a) _.Wm(this, a) && (b = xm(b, this.j.get(Vm(this, a))));
            else {
                a = this.j.Pa();
                for (var c = 0; c < a.length; c++) b = xm(b, a[c])
            }
            return b
        };
        _.h.set = function (a, b) {
            Um(this);
            this.w = null;
            a = Vm(this, a);
            _.Wm(this, a) && (this.o -= this.j.get(a).length);
            this.j.set(a, [b]);
            this.o += 1;
            return this
        };
        _.h.get = function (a, b) {
            if (!a) return b;
            a = this.Pa(a);
            return 0 < a.length ? String(a[0]) : b
        };
        _.Xm = function (a, b, c) {
            a.remove(b);
            0 < c.length && (a.w = null, a.j.set(Vm(a, b), _.Vd(c)), a.o += c.length)
        };
        Jm.prototype.toString = function () {
            if (this.w) return this.w;
            if (!this.j) return "";
            for (var a = [], b = this.j.mb(), c = 0; c < b.length; c++) {
                var d = b[c],
                    e = _.Wj(d);
                d = this.Pa(d);
                for (var f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + _.Wj(d[f]));
                    a.push(g)
                }
            }
            return this.w = a.join("&")
        };
        _.Gm = function (a) {
            var b = new Jm;
            b.w = a.w;
            a.j && (b.j = new _.Sj(a.j), b.o = a.o);
            return b
        };
        Vm = function (a, b) {
            b = String(b);
            a.A && (b = b.toLowerCase());
            return b
        };
        Pm = function (a, b) {
            b && !a.A && (Um(a), a.w = null, a.j.forEach(function (c, d) {
                var e = d.toLowerCase();
                d != e && (this.remove(d), _.Xm(this, e, c))
            }, a));
            a.A = b
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.Ym = function (a) {
            return _.db(_.Ya(a))
        };
        _.Zm = function (a, b) {
            a.src = _.cb(b)
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

        Math.uuid.js (v1.4)
        http://www.broofa.com
        mailto:robert@broofa.com
        Copyright (c) 2010 Robert Kieffer
        Dual licensed under the MIT and GPL licenses.
        */
        var $m = function (a) {
                _.z(this, a, 0, -1, null, null)
            },
            en, fn, gn, hn, jn, kn;
        _.v($m, _.y);
        var an = [2],
            bn = function (a) {
                _.z(this, a, 0, -1, an, null)
            };
        _.v(bn, _.y);
        _.cn = function (a) {
            var b = Number(a);
            return 0 == b && _.Rf(a) ? NaN : b
        };
        _.dn = function (a, b, c) {
            _.A(a, b).push(c);
            return a
        };
        en = /^(?:(.*?)\.)?([a-zA-Z_$][\w$]*(?:\/.?<)?)?(\(.*\))?@(?::0|((?:http|https|file):\/\/[^\s)]+|javascript:.*))$/;
        fn = /^\s{3,4}at(?: (?:(.*?)\.)?((?:new )?(?:[a-zA-Z_$][\w$]*|<anonymous>))(?: \[as ([a-zA-Z_$][\w$]*)\])?)? (?:\(unknown source\)|\(native\)|\((?:eval at )?((?:http|https|file):\/\/[^\s)]+|javascript:.*)\)|((?:http|https|file):\/\/[^\s)]+|javascript:.*))$/;
        gn = function (a, b, c, d, e) {
            this.o = a;
            this.name = b;
            this.j = c;
            this.A = d;
            this.w = e
        };
        hn = function (a) {
            this.j = [];
            if (a.stack) {
                a = a.stack.replace(/\s*$/, "").split("\n");
                for (var b = 0; b < a.length; b++) {
                    var c, d = en;
                    if (c = a[b].match(fn)) c = new gn(c[1] || "", c[2] || "", c[3] || "", "", c[4] || c[5] || ""), this.j.push(c);
                    else if (c = a[b].match(d)) c = new gn(c[1] || "", c[2] || "", "", c[3] || "", c[4] || ""), this.j.push(c)
                }
            }
        };
        jn = function (a) {
            return (0, _.Ma)(a.j, function (b) {
                var c = [b.o ? b.o + "." : "", b.name ? b.name : "anonymous", b.A, b.j ? " [as " + b.j + "]" : ""];
                if (b.w) {
                    c.push(" at ");
                    b = b.w;
                    var d = "",
                        e = b.match(/(.*?)(:\d+(:\d+)?)$/);
                    e && (b = e[1], d = e[2]);
                    c.push(b.replace(window.location.href.replace(/#.*/, ""), "[page]").replace(/http.*?extern_js.*?\.js/, "[xjs]"));
                    c.push(d)
                }
                return c.join("")
            })
        };
        kn = function (a, b, c, d, e) {
            _.hd.call(this, a, b, c, d, e);
            this.w = new hn(c)
        };
        _.v(kn, _.hd);
        kn.prototype.j = function () {
            kn.M.j.call(this);
            window.console && window.console.log && window.console.log("Stack: ", this.w)
        };
        kn.prototype.o = function (a) {
            var b = kn.M.o.call(this, a) + "&jsst=";
            var c = this.w;
            a -= b.length;
            if (4 > a) a = "";
            else if (0 == c.j.length) a = "none";
            else {
                c = jn(c);
                var d;
                var e = c.length - 2;
                for (d = _.Wj(c.join("\n")); 0 < e && d.length > a; e--, d = _.Wj(c.join("\n"))) e == c.length - 2 ? c[e] = "[...]" : c.splice(e, 1);
                a = d.substr(0, a)
            }
            return b + a
        };
        var ln = function (a, b, c) {
            _.I.call(this);
            this.o = a;
            this.w = b;
            this.A = c
        };
        _.n(ln, _.I);
        ln.prototype.j = function (a, b) {
            return new kn(this.o, this.w, a, this.A, b)
        };
        var mn = [1, 2, 3, 4],
            nn = function (a) {
                _.z(this, a, 0, -1, mn, null)
            };
        _.v(nn, _.y);
        var on = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
                var b = 16 * Math.random() | 0;
                return ("x" == a ? b : b & 3 | 8).toString(16)
            })
        };
        var pn = function (a, b) {
            _.I.call(this);
            this.D = b;
            this.Y = 0;
            this.B = _.Sc(_.xc(a, 2, 1E-4), .001);
            this.A = _.Sc(_.xc(a, 10, 0), 0);
            this.U = _.L(_.A(a, 21), "");
            this.V = _.Sc(_.A(a, 4), 0);
            this.T = _.Sc(_.A(a, 5), -1);
            this.S = _.L(_.A(a, 7), "");
            this.N = _.L(_.A(a, 6), "");
            this.L = _.L(_.A(a, 8), "");
            this.H = _.A(a, 9);
            this.X = !!_.B(a, 11);
            this.P = !!_.B(a, 12);
            this.J = !!_.B(a, 15);
            this.W = _.B(a, 22);
            this.G = !!_.B(a, 16);
            this.o = null != _.A(a, 17) ? _.A(a, 17).split(",") : [];
            var c = Math.random();
            this.C = _.J(_.B(a, 1)) && c < this.B;
            this.w = _.J(_.B(a, 1)) && c < this.A;
            this.O =
                "og-" + on();
            if (this.C || this.w) {
                a = this.j = new _.kl(373, _.L(_.A(b, 5)));
                a.P = !0;
                _.gl(a, 1E3);
                this.j.V = !!_.Vf().navigator.sendBeacon && (_.nc || _.jc && _.ec(45));
                if (0 != this.o.length) {
                    a = new nn;
                    for (b = 0; b < this.o.length; b++) c = Number(this.o[b]), isNaN(c) || 0 == c || _.dn(a, 3, c);
                    b = this.j;
                    a ? (b.w || (b.w = new bn), a = a.o(), _.E(b.w, 4, a)) : b.w && _.E(b.w, 4, void 0)
                }
                _.Mf(this, this.j)
            }
        };
        _.v(pn, _.I);
        var qn = [1, 61];
        pn.prototype.log = function (a, b) {
            var c = !_.Oa(qn, a);
            if (c ? this.C : this.w) {
                b = (void 0 === b ? null : b) || new _.Bc;
                _.E(b, 1, a);
                var d = ++this.Y;
                _.E(b, 38, d);
                _.E(b, 2, this.V);
                _.E(b, 4, c ? this.B : this.A);
                _.E(b, 6, this.U);
                _.E(b, 3, this.T);
                _.E(b, 11, this.N);
                _.E(b, 10, this.S);
                _.E(b, 5, this.L);
                window.performance && window.performance.timing && _.E(b, 14, (new Date).getTime() - window.performance.timing.navigationStart);
                _.E(b, 13, this.H);
                _.E(b, 16, this.X);
                _.E(b, 17, this.P);
                _.E(b, 19, this.O);
                c = 0;
                _.B(this.D, 1) && (c |= 1);
                _.B(this.D, 3) && (c |= 4);
                _.E(b,
                    12, c);
                _.E(b, 25, this.J);
                _.E(b, 26, this.G);
                1 === a && _.E(b, 51, this.W);
                a = new _.Tk;
                _.Vk(a, b.o());
                this.j.log(a)
            }
        };
        var rn, sn, un, vn, wn;
        rn = _.G(_.sd, $m, 16) || new $m;
        sn = _.ud() || new _.Ec;
        _.tn = new pn(rn, sn);
        un = _.td() || new _.Dc;
        wn = _.G(_.sd, _.Qc, 14) || new _.Qc;
        vn = _.A(wn, 9);
        var xn = _.xc(_.G(_.sd, _.id, 3) || new _.id, 2, .001);
        _.wd.o = new ln(un, vn, xn);
        _.wd.j = _.tn;

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        _.Rn = function (a, b) {
            b = b instanceof _.jb ? b : _.nb(b);
            a.href = _.kb(b)
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Tn;
        _.Sn = function (a, b) {
            return _.E(a, 27, b)
        };
        Tn = function (a, b) {
            b = b instanceof _.jb ? b : _.nb(b);
            a.action = _.kb(b)
        };
        _.Un = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(_.Un, _.y);
        _.Vn = function (a, b) {
            return _.E(a, 2, b)
        };
        var Wn = function (a, b, c) {
                this.groupId = a;
                this.C = "dp_" + a;
                this.D = "count_" + a;
                this.A = b;
                this.j = !!c
            },
            Xn = /google(?:.[a-z]{2,3}){1,2}$/i,
            Yn = function () {
                var a = _.p.location.hostname.match(Xn);
                return a && a[0] ? a[0] : null
            };
        Wn.prototype.Be = function () {
            return !!navigator.cookieEnabled
        };
        Wn.prototype.Ma = function (a) {
            this.Be() && this.Mc(!1, a)
        };
        Wn.prototype.accept = function (a) {
            this.Be() && this.Mc(!0, a)
        };
        Wn.prototype.Mc = function () {
            throw Error("da");
        };
        _.Zn = function (a) {
            0 < a.A && a.Be() && a.Dd(void 0, void 0)
        };
        Wn.prototype.Dd = function () {
            throw Error("da");
        };
        Wn.prototype.Ub = function () {
            return 0
        };
        Wn.prototype.$e = function () {
            return !1
        };
        _.$n = function (a, b, c, d, e) {
            Wn.call(this, b, c);
            this.o = e;
            this.w = !d || -2 == d || 31536E3 < d ? 31536E3 : d;
            this.B = new RegExp("\\b" + this.groupId + "-([0-9]+):")
        };
        _.v(_.$n, Wn);
        _.h = _.$n.prototype;
        _.h.Be = function () {
            navigator.cookieEnabled || (this.w = -1);
            return !0
        };
        _.h.Mc = function (a, b) {
            var c = _.Jj.get("OGP", ""),
                d = "-" + this.groupId + ":";
            (new RegExp(d)).test(c) || (c += d);
            (d = Yn()) && _.Jj.set("OGP", c, {se: this.w, path: "/", domain: d});
            this.o && this.o.Mc(a, b)
        };
        _.h.Dd = function (a) {
            var b = _.Jj.get("OGPC", ""),
                c = this.Ub(b),
                d = !0;
            -1 == c && (d = !1, c = 0);
            a = this.groupId + "-" + (c + (a || 1)) + ":";
            b = d ? b.replace(this.B, a) : (b ? b : "") + a;
            (d = Yn()) && _.Jj.set("OGPC", b, {se: this.w, path: "/", domain: d});
            this.o && this.o.Dd()
        };
        _.h.Ub = function (a) {
            var b = a || _.Jj.get("OGPC", "");
            a = -1;
            b && (b = b.match(this.B)) && 1 < b.length && (a = parseInt(b[1], 10) || 0);
            return a
        };
        _.h.$e = function () {
            return -1 != _.Jj.get("OGP", "").indexOf("-" + this.groupId + ":")
        };
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        _.ao = function () {
        };
        _.v(_.ao, _.Lj);
        _.ao.prototype.j = function () {
            var a = new XMLHttpRequest;
            if ("withCredentials" in a) return a;
            if ("undefined" != typeof XDomainRequest) return new bo;
            throw Error("ea");
        };
        _.ao.prototype.A = function () {
            return {}
        };
        var bo = function () {
            this.j = new XDomainRequest;
            this.readyState = 0;
            this.onreadystatechange = null;
            this.responseType = this.responseText = "";
            this.status = -1;
            this.statusText = "";
            this.j.onload = (0, _.q)(this.Vh, this);
            this.j.onerror = (0, _.q)(this.Yf, this);
            this.j.onprogress = (0, _.q)(this.Gi, this);
            this.j.ontimeout = (0, _.q)(this.Ni, this)
        };
        _.h = bo.prototype;
        _.h.open = function (a, b, c) {
            if (null != c && !c) throw Error("fa");
            this.j.open(a, b)
        };
        _.h.send = function (a) {
            if (a)
                if ("string" == typeof a) this.j.send(a);
                else throw Error("ga");
            else this.j.send()
        };
        _.h.abort = function () {
            this.j.abort()
        };
        _.h.setRequestHeader = function () {
        };
        _.h.getResponseHeader = function (a) {
            return "content-type" == a.toLowerCase() ? this.j.contentType : ""
        };
        _.h.Vh = function () {
            this.status = 200;
            this.responseText = this.j.responseText;
            co(this, 4)
        };
        _.h.Yf = function () {
            this.status = 500;
            this.responseText = "";
            co(this, 4)
        };
        _.h.Ni = function () {
            this.Yf()
        };
        _.h.Gi = function () {
            this.status = 200;
            co(this, 1)
        };
        var co = function (a, b) {
            a.readyState = b;
            if (a.onreadystatechange) a.onreadystatechange()
        };
        bo.prototype.getAllResponseHeaders = function () {
            return "content-type: " + this.j.contentType
        };
        var go = function () {
                _.P.call(this);
                this.o = "closure_frame" + eo++;
                this.w = [];
                fo[this.o] = this
            },
            ho;
        _.v(go, _.P);
        var fo = {},
            eo = 0,
            io = function (a, b) {
                var c = _.$f(a);
                _.qk(b, function (d, e) {
                    Array.isArray(d) || (d = [d]);
                    (0, _.Ka)(d, function (f) {
                        f = c.Ba("INPUT", {type: "hidden", name: e, value: f});
                        a.appendChild(f)
                    })
                })
            };
        _.h = go.prototype;
        _.h.Ga = null;
        _.h.Ka = null;
        _.h.Gc = null;
        _.h.oj = 0;
        _.h.xc = !1;
        _.h.Ce = !1;
        _.h.re = null;
        _.h.Fc = null;
        _.h.send = function (a, b, c, d) {
            if (this.xc) throw Error("ha");
            a = new _.Am(a);
            b = b ? b.toUpperCase() : "GET";
            c && _.Rm(a, "zx", _.ym());
            ho || (ho = _.rg("FORM"), ho.acceptCharset = "utf-8", c = ho.style, c.position = "absolute", c.visibility = "hidden", c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = "hidden", document.body.appendChild(ho));
            this.Ga = ho;
            "GET" == b && io(this.Ga, a.j);
            d && io(this.Ga, d);
            d = this.Ga;
            a = a.toString();
            (0, _.ll)();
            Tn(d, new _.jb(_.hb, a));
            this.Ga.method = b;
            this.xc = !0;
            this.Gc = this.o + "_" + (this.oj++).toString(36);
            this.Ka = _.$f(this.Ga).Ba("IFRAME", {name: this.Gc, id: this.Gc});
            _.x && 7 > Number(_.dc) && Tn(this.Ka, new _.jb(_.hb, _.Ya(_.wm('javascript:""'))));
            d = this.Ka.style;
            d.visibility = "hidden";
            d.width = d.height = "10px";
            d.display = "none";
            _.Qb ? d.marginTop = d.marginLeft = "-10px" : (d.position = "absolute", d.top = d.left = "-10px");
            if (_.x && !_.ec("11")) {
                this.Ga.target = this.Gc || "";
                _.$f(this.Ga).j.body.appendChild(this.Ka);
                _.O(this.Ka, "readystatechange", this.lf, !1, this);
                try {
                    this.j = !1, this.Ga.submit()
                } catch (t) {
                    _.Gf(this.Ka, "readystatechange",
                        this.lf, !1, this), jo(this)
                }
            } else {
                _.$f(this.Ga).j.body.appendChild(this.Ka);
                d = this.Gc + "_inner";
                a = _.Rj(this.Ka);
                document.baseURI ? (b = _.ge(d), b = _.Db('<head><base href="' + _.ge(document.baseURI) + '"></head><body><iframe id="' + b + '" name="' + b + '"></iframe>', null)) : (b = _.ge(d), b = _.Db('<body><iframe id="' + b + '" name="' + b + '"></iframe>', null));
                _.Mb && !_.Qb ? _.Of(a.documentElement, b) : a.write(_.Cb(b));
                _.O(a.getElementById(d), "load", this.we, !1, this);
                var e = _.me("TEXTAREA", this.Ga);
                b = 0;
                for (c = e.length; b < c; b++) {
                    var f = e[b].value,
                        g = [];
                    _.vg(e[b], g, !1);
                    g.join("") != f && (_.sg(e[b], f), e[b].value = f)
                }
                e = a.importNode(this.Ga, !0);
                e.target = d;
                e.action = this.Ga.action;
                a.body.appendChild(e);
                f = _.me("SELECT", this.Ga);
                g = _.me("SELECT", e);
                b = 0;
                for (c = f.length; b < c; b++)
                    for (var k = _.me("OPTION", f[b]), l = _.me("OPTION", g[b]), m = 0, r = k.length; m < r; m++) l[m].selected = k[m].selected;
                f = _.me("INPUT", this.Ga);
                g = _.me("INPUT", e);
                b = 0;
                for (c = f.length; b < c; b++)
                    if ("file" == f[b].type && f[b].value != g[b].value) {
                        this.Ga.target = d;
                        e = this.Ga;
                        break
                    }
                try {
                    this.j = !1, e.submit(), a.close(),
                    _.Pb && _.dg(this.C, 250, this)
                } catch (t) {
                    _.Gf(a.getElementById(d), "load", this.we, !1, this), a.close(), jo(this)
                }
            }
            ko(this)
        };
        _.h.abort = function () {
            if (this.xc) {
                var a = lo(this);
                if (a)
                    if (_.pf(a)) a.Eb && _.Pf(a.Eb);
                    else if (a = _.Cf(a)) {
                        var b = 0,
                            c;
                        for (c in a.j)
                            for (var d = a.j[c].concat(), e = 0; e < d.length; ++e) _.Hf(d[e]) && ++b
                    }
                this.Ce = this.xc = !1;
                this.dispatchEvent("abort");
                mo(this)
            }
        };
        _.h.R = function () {
            this.xc && this.abort();
            go.M.R.call(this);
            this.Ka && no(this);
            ko(this);
            delete this.B;
            this.re = this.Ga = null;
            delete fo[this.o]
        };
        _.h.ne = function () {
            return this.Ce
        };
        _.h.Zd = function () {
            return this.re
        };
        _.h.Vf = function () {
            return _.Bk(this.re)
        };
        _.h.lf = function () {
            if ("complete" == this.Ka.readyState) {
                _.Gf(this.Ka, "readystatechange", this.lf, !1, this);
                try {
                    var a = _.Rj(this.Ka);
                    if (_.x && "about:blank" == a.location && !navigator.onLine) {
                        jo(this);
                        return
                    }
                } catch (b) {
                    jo(this);
                    return
                }
                oo(this, a)
            }
        };
        _.h.we = function () {
            if (!_.Mb || _.Qb || "about:blank" != (this.Ka ? _.Rj(lo(this)) : null).location) {
                _.Gf(lo(this), "load", this.we, !1, this);
                try {
                    oo(this, this.Ka ? _.Rj(lo(this)) : null)
                } catch (a) {
                    jo(this)
                }
            }
        };
        var oo = function (a, b) {
                a.xc = !1;
                try {
                    var c = b.body;
                    a.re = c.textContent || c.innerText
                } catch (e) {
                    var d = 1
                }
                d || "function" != typeof a.B || (b = a.B(b)) && (d = 4);
                d ? jo(a) : (a.Ce = !0, a.dispatchEvent("complete"), a.dispatchEvent("success"), mo(a))
            },
            jo = function (a) {
                a.j || (a.Ce = !1, a.xc = !1, a.dispatchEvent("complete"), a.dispatchEvent("error"), mo(a), a.j = !0)
            },
            mo = function (a) {
                no(a);
                ko(a);
                a.Ga = null;
                a.dispatchEvent("ready")
            },
            no = function (a) {
                var b = a.Ka;
                b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.w.push(b));
                a.Fc && (_.eg(a.Fc),
                    a.Fc = null);
                _.Pb || _.Mb && !_.Qb ? a.Fc = _.dg(a.A, 2E3, a) : a.A();
                a.Ka = null;
                a.Gc = null
            };
        go.prototype.A = function () {
            this.Fc && (_.eg(this.Fc), this.Fc = null);
            for (; 0 != this.w.length;) {
                var a = this.w.pop();
                _.we(a)
            }
        };
        var ko = function (a) {
                a.Ga && a.Ga == ho && _.ve(a.Ga)
            },
            lo = function (a) {
                return a.Ka ? _.x && !_.ec("11") ? a.Ka : _.Rj(a.Ka).getElementById(a.Gc + "_inner") : null
            };
        go.prototype.C = function () {
            if (this.xc) {
                var a = this.Ka ? _.Rj(lo(this)) : null;
                a && !_.kf(a, "documentUri") ? (_.Gf(lo(this), "load", this.we, !1, this), jo(this)) : _.dg(this.C, 250, this)
            }
        };
        var po;
        po = window.location.protocol + "//www.google.com/_/og/promos/";
        _.qo = function (a, b, c, d, e, f, g) {
            var k = {};
            k.p = c;
            k.g = b;
            k.a = d;
            k.at = e;
            k.eid = f;
            k.pid = 1;
            if (g) k.t = g;
            else return a.log(Error("ia")), null;
            return k
        };
        _.ro = function (a, b, c) {
            if (a) {
                var d = [po, c ? "g" : "z"];
                c && b && d.push(["?authuser=", b].join(""));
                b = d.join("");
                try {
                    _.Mj = new _.ao;
                    c = [];
                    for (var e in a) a.hasOwnProperty(e) && c.push(e + "=" + a[e]);
                    _.Ik(b, null, "POST", c.join("&"), null, void 0, !0)
                } catch (f) {
                    e = new go, _.O(e, "ready", e.ta, !1, e), e.send(b, "POST", !1, a)
                }
            }
        };
        var so = function (a, b, c, d, e, f, g, k) {
            Wn.call(this, b, c);
            this.o = a;
            g || k ? (this.w = d, this.G = e, this.B = g || k || "", this.J = !!k, this.H = f) : a.log(Error("ja"))
        };
        _.v(so, Wn);
        so.prototype.Mc = function (a, b) {
            a ? (a = this.G, (b = _.qo(this.o, this.groupId, this.w, "a", 3, b || "", this.B)) && (b.u = a)) : (a = this.G, (b = _.qo(this.o, this.groupId, this.w, "d", 2, b || "", this.B)) && (b.u = a));
            _.ro(b, this.H, this.J)
        };
        so.prototype.Dd = function (a, b) {
            a = a || 1;
            (b = _.qo(this.o, this.groupId, this.w, "i", 1, b || "", this.B)) && (b.c = a);
            _.ro(b, this.H, this.J)
        };
        var to = function (a, b, c, d, e) {
            Wn.call(this, b, c, e);
            this.w = a;
            this.o = d
        };
        _.v(to, Wn);
        to.prototype.Mc = function () {
            this.w.rf(this.o, this.C, "1", this.j)
        };
        to.prototype.Dd = function (a) {
            a = this.Ub() + (a || 1);
            this.w.rf(this.o, this.D, a.toString(), this.j)
        };
        to.prototype.$e = function () {
            return !!this.w.Oe(this.o, this.C, this.j)
        };
        to.prototype.Ub = function () {
            var a = this.w.Oe(this.o, this.D, this.j);
            return parseInt(a || 0, 10)
        };
        _.uo = function (a, b, c, d, e, f, g, k, l, m, r) {
            if (m || r) try {
                var t = new so(a, e, f, g, k, c, m, r)
            } catch (F) {
                t = null
            } else t = null;
            switch (d) {
                case 2:
                case 6:
                    return t;
                case 1:
                    return new to(b, e, f, l, void 0);
                default:
                    return new _.$n(a, e, f, k)
            }
        };
        var vo, wo;
        vo = function (a) {
            switch (a) {
                case "i":
                    return 36;
                case "x":
                    return 37;
                case "n":
                    return 37;
                case "a":
                    return 38;
                case "d":
                    return 37;
                case "ed":
                    return 37;
                case "end":
                    return 38;
                case "ec":
                    return 38;
                case "er_em":
                    return 72;
                case "rl":
                    return 77;
                case "lc":
                    return 111;
                case "hc":
                    return 112;
                default:
                    return 0
            }
        };
        wo = function (a) {
            var b = new _.Bc;
            switch (a) {
                case "x":
                    _.E(b, 28, 1);
                    break;
                case "n":
                    _.E(b, 28, 2);
                    break;
                case "a":
                    _.E(b, 29, 1);
                    break;
                case "er_em":
                    _.E(b, 30, 1);
                    break;
                case "ed":
                    _.E(b, 28, 3);
                    break;
                case "end":
                    _.E(b, 29, 3);
                    break;
                case "ec":
                    _.E(b, 29, 3)
            }
            return b
        };
        _.xo = function (a, b, c, d, e, f, g, k, l, m) {
            var r = vo(b);
            if (0 !== r) {
                b = wo(b);
                _.E(b, 34, g);
                _.E(b, 48, k);
                _.E(b, 31, c);
                _.E(b, 39, e);
                c = _.Vn(new _.Un, d);
                36 === r && _.E(c, 1, l);
                _.H(b, 50, c);
                if (f) {
                    l = !1;
                    try {
                        var t = f.getBoundingClientRect()
                    } catch (F) {
                        _.E(b, 49, 1), l = !0
                    }
                    null != t && (_.E(b, 43, t.top), _.E(b, 44, t.bottom), _.E(b, 45, t.left), _.E(b, 46, t.right));
                    null != t && 0 !== t.top - t.bottom || l || (document.body.contains(f) ? _.ze(f, function (F) {
                        return _.xe(F) && "none" == F.style.display
                    }) && _.E(b, 49, 3) : _.E(b, 49, 2))
                }
                null != m && _.Sn(b, m);
                a.log(r, b)
            }
        };
        _.yo = function () {
            this.yb = null;
            this.j = !1
        };
        _.va(_.yo);

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Qp = function (a) {
                _.z(this, a, 0, -1, null, null)
            },
            Sp;
        _.v(Qp, _.y);
        _.Rp = function (a, b) {
            this.o = a;
            this.j = b
        };
        _.Rp.prototype.log = function (a, b) {
            b = void 0 === b ? new _.Bc : b;
            Sp(this, a, b)
        };
        _.Tp = function (a, b, c) {
            c = void 0 === c ? new _.Bc : c;
            var d = a.j ? 103 : 14;
            _.E(c, 18, b);
            Sp(a, d, c)
        };
        _.Up = function (a, b, c) {
            c = void 0 === c ? new _.Bc : c;
            var d = a.j ? 94 : 8,
                e = new Qp;
            _.E(e, 1, b);
            _.H(c, 47, e);
            Sp(a, d, c)
        };
        Sp = function (a, b, c) {
            var d = _.G(c, Qp, 47) || new Qp;
            _.H(c, 47, d);
            a.o.log(b, c)
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var eq, oq, tq, yq, zq, Bq, Cq, Eq;
        _.cq = function (a, b) {
            return _.Db(a, b)
        };
        _.dq = function (a) {
            if (a instanceof _.Bb) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.Ve && (c = a.j());
            return _.cq(_.de(b && a.Pb ? a.Fb() : String(a)), c)
        };
        eq = function (a) {
            var b = _.dq(_.Eb),
                c = b.j(),
                d = [],
                e = function (f) {
                    Array.isArray(f) ? (0, _.Ka)(f, e) : (f = _.dq(f), d.push(_.Cb(f).toString()), f = f.j(), 0 == c ? c = f : 0 != f && c != f && (c = null))
                };
            (0, _.Ka)(a, e);
            return _.cq(d.join(_.Cb(b).toString()), c)
        };
        _.fq = function (a) {
            return eq(Array.prototype.slice.call(arguments))
        };
        _.gq = function (a, b) {
            var c = _.qe(a, "DIV");
            _.x ? (b = _.fq(_.Fb, b), _.Of(c, b), c.removeChild(c.firstChild)) : _.Of(c, b);
            if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
            else {
                for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
                c = a
            }
            return c
        };
        _.hq = function (a, b) {
            this.x = void 0 !== a ? a : 0;
            this.y = void 0 !== b ? b : 0
        };
        _.hq.prototype.ceil = function () {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        };
        _.hq.prototype.floor = function () {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        };
        _.hq.prototype.round = function () {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        };
        _.iq = function (a) {
            return new _.hq(a.x, a.y)
        };
        _.jq = function (a) {
            return a.scrollingElement ? a.scrollingElement : !_.Qb && _.Tf(a) ? a.documentElement : a.body || a.documentElement
        };
        _.kq = function (a) {
            var b = _.jq(a);
            a = a.parentWindow || a.defaultView;
            return _.x && _.ec("10") && a.pageYOffset != b.scrollTop ? new _.hq(b.scrollLeft, b.scrollTop) : new _.hq(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        };
        _.lq = function (a) {
            a = a.j;
            return a.parentWindow || a.defaultView
        };
        _.mq = function (a) {
            return "rtl" == _.Ag(a, "direction")
        };
        _.nq = function (a) {
            for (var b in a) return !1;
            return !0
        };
        oq = function (a, b) {
            return new _.hq(a.x - b.x, a.y - b.y)
        };
        _.pq = function (a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        };
        _.h = _.pq.prototype;
        _.h.getHeight = function () {
            return this.bottom - this.top
        };
        _.h.expand = function (a, b, c, d) {
            _.za(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
            return this
        };
        _.h.ceil = function () {
            this.top = Math.ceil(this.top);
            this.right = Math.ceil(this.right);
            this.bottom = Math.ceil(this.bottom);
            this.left = Math.ceil(this.left);
            return this
        };
        _.h.floor = function () {
            this.top = Math.floor(this.top);
            this.right = Math.floor(this.right);
            this.bottom = Math.floor(this.bottom);
            this.left = Math.floor(this.left);
            return this
        };
        _.h.round = function () {
            this.top = Math.round(this.top);
            this.right = Math.round(this.right);
            this.bottom = Math.round(this.bottom);
            this.left = Math.round(this.left);
            return this
        };
        _.qq = function (a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        };
        _.qq.prototype.ceil = function () {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        _.qq.prototype.floor = function () {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        _.qq.prototype.round = function () {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        _.rq = function (a, b, c) {
            if (b instanceof _.hq) {
                var d = b.x;
                b = b.y
            } else d = b, b = c;
            a.style.left = _.Cg(d, !1);
            a.style.top = _.Cg(b, !1)
        };
        _.sq = function (a) {
            a = a ? _.ye(a) : document;
            return !_.x || _.gc(9) || _.Tf(_.$f(a).j) ? a.documentElement : a.body
        };
        tq = function (a) {
            if (_.x && !_.gc(8)) return a.offsetParent;
            var b = _.ye(a),
                c = _.Ag(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = _.Ag(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        };
        _.uq = function (a) {
            var b = _.ye(a),
                c = new _.hq(0, 0),
                d = _.sq(b);
            if (a == d) return c;
            a = _.Bg(a);
            b = _.kq(_.$f(b).j);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        };
        _.vq = function (a) {
            for (var b = new _.pq(0, Infinity, Infinity, 0), c = _.$f(a), d = c.j.body, e = c.j.documentElement, f = _.jq(c.j); a = tq(a);)
                if (!(_.x && 0 == a.clientWidth || _.Qb && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != _.Ag(a, "overflow")) {
                    var g = _.uq(a),
                        k = new _.hq(a.clientLeft, a.clientTop);
                    g.x += k.x;
                    g.y += k.y;
                    b.top = Math.max(b.top, g.y);
                    b.right = Math.min(b.right, g.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                    b.left = Math.max(b.left, g.x)
                }
            d = f.scrollLeft;
            f = f.scrollTop;
            b.left = Math.max(b.left, d);
            b.top =
                Math.max(b.top, f);
            c = _.Uf(_.lq(c));
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, f + c.height);
            return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
        };
        _.wq = function (a) {
            a = _.Bg(a);
            return new _.hq(a.left, a.top)
        };
        _.xq = function (a, b) {
            a.style.display = b ? "" : "none"
        };
        yq = function (a, b) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var c = a.style.left,
                d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = b;
            b = a.style.pixelLeft;
            a.style.left = c;
            a.runtimeStyle.left = d;
            return +b
        };
        zq = function (a, b) {
            return (b = a.currentStyle ? a.currentStyle[b] : null) ? yq(a, b) : 0
        };
        _.Aq = function (a, b) {
            if (_.x) {
                var c = zq(a, b + "Left"),
                    d = zq(a, b + "Right"),
                    e = zq(a, b + "Top");
                a = zq(a, b + "Bottom");
                return new _.pq(e, d, a, c)
            }
            c = _.zg(a, b + "Left");
            d = _.zg(a, b + "Right");
            e = _.zg(a, b + "Top");
            a = _.zg(a, b + "Bottom");
            return new _.pq(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        };
        Bq = {thin: 2, medium: 4, thick: 6};
        Cq = function (a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
            b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return b in Bq ? Bq[b] : yq(a, b)
        };
        _.Dq = function (a) {
            if (_.x && !_.gc(9)) {
                var b = Cq(a, "borderLeft"),
                    c = Cq(a, "borderRight"),
                    d = Cq(a, "borderTop");
                a = Cq(a, "borderBottom");
                return new _.pq(d, c, a, b)
            }
            b = _.zg(a, "borderLeftWidth");
            c = _.zg(a, "borderRightWidth");
            d = _.zg(a, "borderTopWidth");
            a = _.zg(a, "borderBottomWidth");
            return new _.pq(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        };
        Eq = function () {
            if (_.Sb) {
                var a = /Windows NT ([0-9.]+)/;
                return (a = a.exec(_.sb)) ? a[1] : "0"
            }
            return _.Rb ? (a = /10[_.][0-9_.]+/, (a = a.exec(_.sb)) ? a[0].replace(/_/g, ".") : "10") : _.Ub ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(_.sb)) ? a[1] : "") : _.Vb || _.Wb || _.Xb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(_.sb)) ? a[1].replace(/_/g, ".") : "") : ""
        }();
        var Fq = function (a) {
                return (a = a.exec(_.sb)) ? a[1] : ""
            },
            Gq = function () {
                if (_.jc) return Fq(/Firefox\/([0-9.]+)/);
                if (_.x || _.Nb || _.Mb) return _.dc;
                if (_.nc) return _.Ib() ? Fq(/CriOS\/([0-9.]+)/) : Fq(/Chrome\/([0-9.]+)/);
                if (_.oc && !_.Ib()) return Fq(/Version\/([0-9.]+)/);
                if (_.kc || _.lc) {
                    var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.sb);
                    if (a) return a[1] + "." + a[2]
                } else if (_.mc) return (a = Fq(/Android\s+([0-9.]+)/)) ? a : Fq(/Version\/([0-9.]+)/);
                return ""
            }();
        var Hq;
        _.Jq = function (a, b, c, d, e, f, g, k, l) {
            var m;
            if (m = c.offsetParent) {
                var r = "HTML" == m.tagName || "BODY" == m.tagName;
                if (!r || "static" != _.Ag(m, "position")) {
                    var t = _.uq(m);
                    if (!r) {
                        r = _.mq(m);
                        var F;
                        if (F = r) {
                            if (F = _.oc) F = 0 <= _.gb(Gq, 10);
                            var D;
                            if (D = _.Yb) D = 0 <= _.gb(Eq, 10);
                            F = _.Pb || F || D
                        }
                        r = F ? -m.scrollLeft : !r || _.Ob && _.ec("8") || "visible" == _.Ag(m, "overflowX") ? m.scrollLeft : m.scrollWidth - m.clientWidth - m.scrollLeft;
                        t = oq(t, new _.hq(r, m.scrollTop))
                    }
                }
            }
            m = t || new _.hq;
            t = _.uq(a);
            r = _.Eg(a);
            t = new _.qq(t.x, t.y, r.width, r.height);
            if (r = _.vq(a)) {
                var R = new _.qq(r.left,
                    r.top, r.right - r.left, r.bottom - r.top);
                r = Math.max(t.left, R.left);
                F = Math.min(t.left + t.width, R.left + R.width);
                r <= F && (D = Math.max(t.top, R.top), R = Math.min(t.top + t.height, R.top + R.height), D <= R && (t.left = r, t.top = D, t.width = F - r, t.height = R - D))
            }
            r = _.$f(a);
            D = _.$f(c);
            if (r.j != D.j) {
                F = r.j.body;
                D = _.lq(D);
                R = new _.hq(0, 0);
                var K = _.Vf(_.ye(F));
                if (_.kf(K, "parent")) {
                    var ea = F;
                    do {
                        var Nc = K == D ? _.uq(ea) : _.wq(ea);
                        R.x += Nc.x;
                        R.y += Nc.y
                    } while (K && K != D && K != K.parent && (ea = K.frameElement) && (K = K.parent))
                }
                F = oq(R, _.uq(F));
                !_.x || _.gc(9) || _.Tf(r.j) ||
                (F = oq(F, _.kq(r.j)));
                t.left += F.x;
                t.top += F.y
            }
            a = Hq(a, b);
            b = t.left;
            a & 4 ? b += t.width : a & 2 && (b += t.width / 2);
            b = new _.hq(b, t.top + (a & 1 ? t.height : 0));
            b = oq(b, m);
            e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
            if (g)
                if (l) var wa = l;
                else if (wa = _.vq(c)) wa.top -= m.y, wa.right -= m.x, wa.bottom -= m.y, wa.left -= m.x;
            return _.Iq(b, c, d, f, wa, g, k)
        };
        _.Iq = function (a, b, c, d, e, f, g) {
            a = _.iq(a);
            var k = Hq(b, c);
            c = _.Eg(b);
            g = g ? _.lg(g) : _.lg(c);
            a = _.iq(a);
            g = _.lg(g);
            var l = 0;
            if (d || 0 != k) k & 4 ? a.x -= g.width + (d ? d.right : 0) : k & 2 ? a.x -= g.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
            if (f) {
                if (e) {
                    d = a;
                    k = g;
                    l = 0;
                    65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                    132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                    d.x < e.left && f & 1 && (d.x = e.left, l |= 1);
                    if (f & 16) {
                        var m = d.x;
                        d.x < e.left && (d.x = e.left, l |= 4);
                        d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width -
                            e.left), k.width = Math.max(k.width, 0), l |= 4)
                    }
                    d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                    f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                    d.y < e.top && f & 4 && (d.y = e.top, l |= 2);
                    f & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
                    d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
                    f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                    e = l
                } else e = 256;
                l = e
            }
            f =
                new _.qq(0, 0, 0, 0);
            f.left = a.x;
            f.top = a.y;
            f.width = g.width;
            f.height = g.height;
            e = l;
            if (e & 496) return e;
            _.rq(b, new _.hq(f.left, f.top));
            g = new _.le(f.width, f.height);
            _.qg(c, g) || (c = g, g = _.Tf(_.$f(_.ye(b)).j), !_.x || _.ec("10") || g && _.ec("8") ? (b = b.style, _.Pb ? b.MozBoxSizing = "border-box" : _.Qb ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (a = b.style, g ? (g = _.Aq(b, "padding"), b = _.Dq(b), a.pixelWidth = c.width - b.left - g.left - g.right - b.right, a.pixelHeight =
                c.height - b.top - g.top - g.bottom - b.bottom) : (a.pixelWidth = c.width, a.pixelHeight = c.height)));
            return e
        };
        Hq = function (a, b) {
            return (b & 8 && _.mq(a) ? b ^ 4 : b) & -9
        };
        _.Kq = function (a) {
            _.P.call(this);
            this.j = a;
            a = _.x ? "focusout" : "blur";
            this.o = _.O(this.j, _.x ? "focusin" : "focus", this, !_.x);
            this.w = _.O(this.j, a, this, !_.x)
        };
        _.v(_.Kq, _.P);
        _.Kq.prototype.handleEvent = function (a) {
            var b = new _.mf(a.Ya);
            b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
            this.dispatchEvent(b)
        };
        _.Kq.prototype.R = function () {
            _.Kq.M.R.call(this);
            _.Hf(this.o);
            _.Hf(this.w);
            delete this.j
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var Vq = function (a, b) {
            _.P.call(this);
            this.w = new _.Ig(this);
            this.Ae(a || null);
            b && (this.Sc = b)
        };
        _.v(Vq, _.P);
        _.h = Vq.prototype;
        _.h.wb = null;
        _.h.Bf = null;
        _.h.Uc = !1;
        _.h.ef = -1;
        _.h.Sc = "toggle_display";
        _.h.F = function () {
            return this.wb
        };
        _.h.Ae = function (a) {
            if (this.Uc) throw Error("ra");
            this.wb = a
        };
        _.h.isVisible = function () {
            return this.Uc
        };
        _.h.Nb = function (a) {
            this.O && this.O.stop();
            this.H && this.H.stop();
            if (a) {
                if (!this.Uc && this.kf()) {
                    if (!this.wb) throw Error("sa");
                    this.Ad();
                    a = _.ye(this.wb);
                    this.w.K(a, "mousedown", this.Bg, !0);
                    if (_.x) {
                        try {
                            var b = a.activeElement
                        } catch (d) {
                        }
                        for (; b && "IFRAME" == b.nodeName;) {
                            try {
                                var c = _.Rj(b)
                            } catch (d) {
                                break
                            }
                            a = c;
                            b = a.activeElement
                        }
                        this.w.K(a, "mousedown", this.Bg, !0);
                        this.w.K(a, "deactivate", this.Ag)
                    } else this.w.K(a, "blur", this.Ag);
                    "toggle_display" == this.Sc ? (this.wb.style.visibility = "visible", _.xq(this.wb, !0)) : "move_offscreen" ==
                        this.Sc && this.Ad();
                    this.Uc = !0;
                    this.ef = (0, _.Fa)();
                    this.O ? (_.zf(this.O, "end", this.ag, !1, this), this.O.play()) : this.ag()
                }
            } else Wq(this)
        };
        _.h.Ad = _.ua;
        var Wq = function (a, b) {
            a.Uc && a.dispatchEvent({
                type: "beforehide",
                target: b
            }) && (a.w && _.Mg(a.w), a.Uc = !1, (0, _.Fa)(), a.H ? (_.zf(a.H, "end", _.Qd(a.Ff, b), !1, a), a.H.play()) : a.Ff(b))
        };
        _.h = Vq.prototype;
        _.h.Ff = function (a) {
            "toggle_display" == this.Sc ? this.Vi() : "move_offscreen" == this.Sc && (this.wb.style.top = "-10000px");
            this.Qe(a)
        };
        _.h.Vi = function () {
            this.wb.style.visibility = "hidden";
            _.xq(this.wb, !1)
        };
        _.h.kf = function () {
            return this.dispatchEvent("beforeshow")
        };
        _.h.ag = function () {
            this.dispatchEvent("show")
        };
        _.h.Qe = function (a) {
            this.dispatchEvent({type: "hide", target: a})
        };
        _.h.Bg = function (a) {
            a = a.target;
            _.Xf(this.wb, a) || Xq(this, a) || 150 > (0, _.Fa)() - this.ef || Wq(this, a)
        };
        _.h.Ag = function (a) {
            var b = _.ye(this.wb);
            if ("undefined" != typeof document.activeElement) {
                if (a = b.activeElement, !a || _.Xf(this.wb, a) || "BODY" == a.tagName || Xq(this, a)) return
            } else if (a.target != b) return;
            150 > (0, _.Fa)() - this.ef || Wq(this)
        };
        var Xq = function (a, b) {
            return (0, _.Na)(a.Bf || [], function (c) {
                return b === c || _.Xf(c, b)
            })
        };
        Vq.prototype.R = function () {
            Vq.M.R.call(this);
            this.w.ta();
            _.Lf(this.O);
            _.Lf(this.H);
            delete this.wb;
            delete this.w;
            delete this.Bf
        };
        var Yq = function () {
        };
        Yq.prototype.j = function () {
        };
        var Zq = function (a, b, c) {
            this.o = a;
            this.w = b;
            this.A = c
        };
        _.v(Zq, Yq);
        Zq.prototype.j = function (a, b, c) {
            _.Jq(this.o, this.w, a, b, void 0, c, this.A)
        };
        var $q = function (a, b) {
            this.ha = 8;
            this.U = b || void 0;
            Vq.call(this, a)
        };
        _.v($q, Vq);
        $q.prototype.Ad = function () {
            if (this.U) {
                var a = !this.isVisible() && "move_offscreen" != this.Sc,
                    b = this.F();
                a && (b.style.visibility = "hidden", _.xq(b, !0));
                this.U.j(b, this.ha, this.wa);
                a && _.xq(b, !1)
            }
        };
        var ar = function (a, b) {
            this.o = a instanceof _.hq ? a : new _.hq(a, b)
        };
        _.v(ar, Yq);
        ar.prototype.j = function (a, b, c) {
            _.Jq(_.sq(a), 0, a, b, this.o, c, null, void 0)
        };
        var br = function () {
                this.j = new _.Sj
            },
            cr = function (a) {
                var b = typeof a;
                return "object" == b && a || "function" == b ? "o" + _.Ca(a) : b.charAt(0) + a
            };
        _.h = br.prototype;
        _.h.add = function (a) {
            this.j.set(cr(a), a)
        };
        _.h.remove = function (a) {
            return this.j.remove(cr(a))
        };
        _.h.clear = function () {
            this.j.clear()
        };
        _.h.zc = function () {
            return this.j.zc()
        };
        _.h.Pa = function () {
            return this.j.Pa()
        };
        var dr = function (a, b, c) {
            this.G = c || (a ? _.$f(_.Sf(document, a)) : _.$f());
            $q.call(this, this.G.Ba("DIV", {style: "position:absolute;display:none;"}));
            this.S = new _.hq(1, 1);
            this.C = new br;
            this.B = null;
            a && (a = _.Sf(document, a), this.C.add(a), _.O(a, "mouseover", this.Z, !1, this), _.O(a, "mouseout", this.L, !1, this), _.O(a, "mousemove", this.W, !1, this), _.O(a, "focus", this.V, !1, this), _.O(a, "blur", this.L, !1, this));
            null != b && _.sg(this.F(), b)
        };
        _.v(dr, $q);
        var er = [];
        dr.prototype.o = null;
        dr.prototype.className = "gb_Aa-gb_4e";
        dr.prototype.Ae = function (a) {
            var b = this.F();
            b && _.we(b);
            dr.M.Ae.call(this, a);
            a ? (b = this.G.j.body, b.insertBefore(a, b.lastChild), _.Lf(this.B), this.B = new _.Kq(this.F()), _.Mf(this, this.B), _.O(this.B, "focusin", this.D, void 0, this), _.O(this.B, "focusout", this.P, void 0, this)) : (_.Lf(this.B), this.B = null)
        };
        var fr = function (a) {
            return a.A ? a.isVisible() ? 4 : 1 : a.J ? 3 : a.isVisible() ? 2 : 0
        };
        dr.prototype.kf = function () {
            if (!Vq.prototype.kf.call(this)) return !1;
            if (this.j)
                for (var a, b = 0; a = er[b]; b++) _.Xf(a.F(), this.j) || a.Nb(!1);
            _.Oa(er, this) || er.push(this);
            a = this.F();
            a.className = this.className;
            this.D();
            _.O(a, "mouseover", this.sa, !1, this);
            _.O(a, "mouseout", this.ka, !1, this);
            gr(this);
            return !0
        };
        dr.prototype.Qe = function () {
            _.hf(er, this);
            for (var a = this.F(), b, c = 0; b = er[c]; c++) b.j && _.Xf(a, b.j) && b.Nb(!1);
            this.$ && this.$.P();
            _.Gf(a, "mouseover", this.sa, !1, this);
            _.Gf(a, "mouseout", this.ka, !1, this);
            this.j = void 0;
            0 == fr(this) && (this.N = !1);
            Vq.prototype.Qe.call(this)
        };
        dr.prototype.Y = function (a, b) {
            this.j == a && _.Vj(this.C.j, cr(this.j)) && (this.N || !this.ya ? (this.Nb(!1), this.isVisible() || (this.j = a, this.U = b || this.T(0) || void 0, this.isVisible() && this.Ad(), this.Nb(!0))) : this.j = void 0);
            this.A = void 0
        };
        dr.prototype.ma = function (a) {
            this.J = void 0;
            if (a == this.j) {
                a = this.G;
                var b;
                a = (b = _.Yf(a.j)) && this.F() && a.Wf(this.F(), b);
                null != this.o && (this.o == this.F() || _.Vj(this.C.j, cr(this.o))) || a || this.X && this.X.o || this.Nb(!1)
            }
        };
        var hr = function (a, b) {
            var c = _.kq(a.G.j);
            a.S.x = b.clientX + c.x;
            a.S.y = b.clientY + c.y
        };
        dr.prototype.Z = function (a) {
            var b = ir(this, a.target);
            this.o = b;
            this.D();
            b != this.j && (this.j = b, this.A || (this.A = _.dg((0, _.q)(this.Y, this, b, void 0), 500)), jr(this), hr(this, a))
        };
        var ir = function (a, b) {
            try {
                for (; b && !_.Vj(a.C.j, cr(b));) b = b.parentNode;
                return b
            } catch (c) {
                return null
            }
        };
        dr.prototype.W = function (a) {
            hr(this, a);
            this.N = !0
        };
        dr.prototype.V = function (a) {
            this.o = a = ir(this, a.target);
            this.N = !0;
            if (this.j != a) {
                this.j = a;
                var b = this.T(1);
                this.D();
                this.A || (this.A = _.dg((0, _.q)(this.Y, this, a, b), 500));
                jr(this)
            }
        };
        dr.prototype.T = function (a) {
            return 0 == a ? new kr(_.iq(this.S)) : new lr(this.o)
        };
        var jr = function (a) {
            if (a.j)
                for (var b, c = 0; b = er[c]; c++) _.Xf(b.F(), a.j) && (b.X = a, a.$ = b)
        };
        dr.prototype.L = function (a) {
            var b = ir(this, a.target),
                c = ir(this, a.relatedTarget);
            b != c && (b == this.o && (this.o = null), gr(this), this.N = !1, !this.isVisible() || a.relatedTarget && _.Xf(this.F(), a.relatedTarget) ? this.j = void 0 : this.P())
        };
        dr.prototype.sa = function () {
            var a = this.F();
            this.o != a && (this.D(), this.o = a)
        };
        dr.prototype.ka = function (a) {
            var b = this.F();
            this.o != b || a.relatedTarget && _.Xf(b, a.relatedTarget) || (this.o = null, this.P())
        };
        var gr = function (a) {
            a.A && (_.eg(a.A), a.A = void 0)
        };
        dr.prototype.P = function () {
            2 == fr(this) && (this.J = _.dg((0, _.q)(this.ma, this, this.j), 0))
        };
        dr.prototype.D = function () {
            this.J && (_.eg(this.J), this.J = void 0)
        };
        dr.prototype.R = function () {
            var a;
            this.Nb(!1);
            gr(this);
            for (var b = this.C.Pa(), c = 0; a = b[c]; c++) _.Gf(a, "mouseover", this.Z, !1, this), _.Gf(a, "mouseout", this.L, !1, this), _.Gf(a, "mousemove", this.W, !1, this), _.Gf(a, "focus", this.V, !1, this), _.Gf(a, "blur", this.L, !1, this);
            this.C.clear();
            this.F() && _.we(this.F());
            this.o = null;
            delete this.G;
            dr.M.R.call(this)
        };
        var kr = function (a, b) {
            ar.call(this, a, b)
        };
        _.v(kr, ar);
        kr.prototype.j = function (a, b, c) {
            b = _.sq(a);
            b = _.vq(b);
            c = c ? new _.pq(c.top + 10, c.right, c.bottom, c.left + 10) : new _.pq(10, 0, 0, 10);
            _.Iq(this.o, a, 8, c, b, 9) & 496 && _.Iq(this.o, a, 8, c, b, 5)
        };
        var lr = function (a) {
            Zq.call(this, a, 5)
        };
        _.v(lr, Zq);
        lr.prototype.j = function (a, b, c) {
            var d = new _.hq(10, 0);
            _.Jq(this.o, this.w, a, b, d, c, 9) & 496 && _.Jq(this.o, 4, a, 1, d, c, 5)
        };
        _.mr = function (a, b) {
            dr.call(this, a);
            this.className = "gb_4e";
            this.Ae(b);
            this.ha = 2;
            this.isVisible() && this.Ad()
        };
        _.n(_.mr, dr);
        _.mr.prototype.T = function () {
            return new nr(this.o)
        };
        _.mr.prototype.Nb = function (a) {
            a || gr(this);
            return dr.prototype.Nb.call(this, a)
        };
        var nr = function (a) {
            Zq.call(this, a, 3)
        };
        _.n(nr, Zq);
        nr.prototype.j = function (a, b, c) {
            var d = new _.hq(0, 0),
                e = _.Uf();
            _.Jq(this.o, this.w, a, b, d, c, 9, void 0, new _.pq(0, e.width - 8, e.height, 8)) & 496 && _.Jq(this.o, 4, a, 1, d, c, 5)
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Gt, Ht;
        Gt = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
        Ht = function (a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
            return b
        };
        _.It = function (a, b) {
            a = _.cb(a);
            a = Gt.exec(a);
            var c = a[3] || "";
            return _.db(a[1] + Ht("?", a[2] || "", b) + Ht("#", c, void 0))
        };
        _.Jt = function (a) {
            return a instanceof _.Am ? new _.Am(a) : new _.Am(a, void 0)
        };
        var Kt = function () {
        };
        var Lt = function (a) {
            this.j = a || {}
        };
        _.v(Lt, Kt);
        var Ot = function () {
                Mt || (Mt = new Lt, -1 == _.sb.toLowerCase().indexOf("webkit") || _.w("Edge") ? _.wb() ? Nt("-moz-") : _.vb() ? Nt("-ms-") : _.w("Opera") && Nt("-o-") : Nt("-webkit-"), Mt.j.is_rtl = !1);
                var a = Mt.j.is_rtl;
                return !(null == a || !a)
            },
            Nt = function (a) {
                Mt.j.css3_prefix = a
            };
        var Mt = null;
        var Qt, Rt, St, Tt, Pt;
        _.Ut = function (a) {
            if (null == a) return "";
            if (!Pt.test(a)) return a;
            -1 != a.indexOf("&") && (a = a.replace(Qt, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Rt, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(St, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(Tt, "&quot;"));
            return a
        };
        Qt = /&/g;
        Rt = /</g;
        St = />/g;
        Tt = /"/g;
        Pt = /[&<>"]/;
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        _.Vt = function (a) {
            var b = a.match(/\bhref="/g);
            if (!b || 1 >= b.length) return a;
            var c = new _.Am;
            a = a.replace(/\bhref="(.*?)"/g, function (d, e) {
                d = _.Jt(e);
                c.w || _.Bm(c, d.w);
                c.o || _.Cm(c, d.o);
                c.A || _.Em(c, d.A);
                c.B || _.Hm(c, d.B);
                e = _.ia(d.j.mb());
                for (var f = e.next(); !f.done; f = e.next()) f = f.value, _.Wm(c.j, f) || _.Xm(c.j, f, d.j.Pa(f));
                return ""
            });
            a = a.replace(/\s\s+/g, " ").replace(/\s+$/g, "");
            return a + ' href="' + c.toString() + '"'
        };
        _.Wt = function (a) {
            return "" === a ? "" : ' class="' + (" " === a.charAt(a.length - 1) ? a.slice(0, -1) : a) + '"'
        };
        _.Xt = function (a) {
            return "" !== a ? ' style="' + a + '"' : ""
        };
        var Yt = function (a) {
                this.j = a = void 0 === a ? document : a;
                this.w = null;
                this.o = []
            },
            Zt;
        Yt.prototype.document = function () {
            return this.j
        };
        Zt = function (a) {
            var b = a.j.createElement("STYLE");
            a.j.head ? a.j.head.appendChild(b) : a.j.body.appendChild(b);
            return b
        };
        _.$t = function (a) {
            if (!a.j || 0 == a.o.length) return "";
            var b = a.o.join("");
            if (_.x) {
                a.w || (a.w = Zt(a));
                var c = a.w
            } else c = Zt(a);
            c.styleSheet && !c.sheet ? c.styleSheet.cssText += b : c.textContent += b;
            a.o.length = 0;
            return ""
        };
        _.au = function () {
            var a = void 0 === a ? document : a;
            var b = void 0 === b ? new Yt(a) : b;
            this.B = a;
            this.w = b;
            new function () {
            };
            this.o = {};
            this.j = [Ot()]
        };
        _.au.prototype.document = function () {
            return this.B
        };
        _.bu = function (a, b, c, d, e, f, g, k, l, m, r) {
            if (!Array.isArray(c)) {
                var t = [],
                    F;
                for (F in c) t[c[F]] = F;
                c = t
            }
            a.o[b] = {
                kb: c,
                El: d,
                Fl: e,
                Ll: void 0 === f ? null : f,
                Hl: void 0 === g ? null : g,
                Ml: void 0 === k ? "" : k,
                Il: void 0 === l ? null : l,
                Nl: "",
                Jl: void 0 === m ? null : m,
                Ol: "",
                Kl: void 0 === r ? null : r,
                Gl: !0
            }
        };
        _.cu = function (a, b) {
            a = a.j;
            a: {
                if (b)
                    for (b = b.parentNode; _.xe(b); b = b.parentNode) {
                        var c = b.getAttribute("dir");
                        if (c && (c = c.toLowerCase(), "ltr" == c || "rtl" == c)) {
                            b = c;
                            break a
                        }
                    }
                b = Ot() ? "rtl" : "ltr"
            }
            a[0] = "rtl" == b
        };
        _.du = function (a) {
            a.A && a.A.ud()
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var gA = function (a, b) {
                if (bA.test(b)) return b;
                b = 0 <= b.indexOf("left") ? b.replace(cA, "right") : b.replace(dA, "left");
                _.Oa(eA, a) && (a = b.split(fA), 4 <= a.length && (b = [a[0], a[3], a[2], a[1]].join(" ")));
                return b
            },
            hA = function (a, b, c) {
                return _.uo(_.wd, _.Gc.ua().j.p_st || null, _.A(a, 8) || 0, _.C(a, 5, 0), c.toString(), _.C(a, 4, 25), b.toString(), _.A(a, 9) || 0, null, _.A(a, 6) || void 0, _.A(a, 7) || void 0)
            },
            iA = function (a) {
                _.z(this, a, 0, -1, null, null)
            },
            jA;
        _.v(iA, _.y);
        jA = [1];
        _.kA = function (a) {
            _.z(this, a, 0, -1, jA, null)
        };
        _.v(_.kA, _.y);
        _.kA.prototype.$a = function (a) {
            return _.E(this, 10, a)
        };
        var lA = function (a) {
            _.z(this, a, 0, -1, null, null)
        };
        _.v(lA, _.y);
        lA.prototype.getHeight = function () {
            return _.A(this, 5)
        };
        var mA = function (a, b) {
                a.yb = b;
                a.j && (a.j = !0, a.yb && a.yb.notify())
            },
            nA = function (a) {
                return a[a.length - 1]
            },
            bA = /['"\(]/,
            eA = ["border-color", "border-style", "border-width", "margin", "padding"],
            cA = /left/g,
            dA = /right/g,
            fA = /\s+/;
        var oA = function (a) {
            this.j = a
        };
        oA.prototype.send = function (a, b, c) {
            this.j.then(function (d) {
                d.send(a, b, c)
            })
        };
        var pA = function (a) {
            this.data = a
        };
        var qA = function (a) {
            this.j = a
        };
        qA.prototype.send = function (a, b, c) {
            c = void 0 === c ? [] : c;
            var d = new MessageChannel;
            rA(d.port1, b);
            this.j.postMessage(a, [d.port2].concat(c))
        };
        var sA = function (a, b) {
                rA(a, b);
                return new qA(a)
            },
            rA = function (a, b) {
                b && (a.onmessage = function (c) {
                    b(new pA(c.data, sA(c.ports[0], void 0)))
                })
            };
        var uA = function (a) {
                var b = a.destination,
                    c = a.lg,
                    d = a.origin,
                    e = void 0 === a.Ie ? "ZNWN1d" : a.Ie;
                a = void 0 === a.onMessage ? void 0 : a.onMessage;
                if ("*" === d) throw Error("Ua");
                if ("null" === d) throw Error("Va");
                return tA({
                    destination: b, zk: function (f) {
                        if (f.source === c.contentWindow) {
                            if (f.origin !== d) throw Error("Wa`" + d + "`" + f.origin);
                            if (f.data === e) return !0
                        }
                        return !1
                    }, onMessage: a
                })
            },
            tA = function (a) {
                var b = a.destination,
                    c = a.zk,
                    d = void 0 === a.onMessage ? void 0 : a.onMessage;
                return new oA(new _.Qe(function (e, f) {
                    var g = function (k) {
                        var l = !1;
                        try {
                            l = c(k)
                        } catch (m) {
                            b.removeEventListener("message", g, !1), f(m)
                        }
                        l && (b.removeEventListener("message", g, !1), e(sA(k.ports[0], d)))
                    };
                    b.addEventListener("message", g, !1)
                }))
            };
        var vA = function () {
            window.addEventListener("message", function (a) {
                "verify-origin" === a.data && a.source.parent === window && a.source.postMessage("verify-origin-reply", a.origin)
            })
        };
        var wA = function (a, b, c, d, e) {
                this.parent = a;
                this.A = b;
                this.C = c;
                this.J = void 0 === e ? !1 : e;
                this.D = d ? d : 0;
                a = _.cb(this.A).match(_.Yj);
                this.B = _.Xj(a[1], null, a[3], a[4])
            },
            xA = function (a, b) {
                var c = document.location;
                c = c.protocol + "//" + c.host;
                var d = {origin: c};
                0 !== a.C && (d.pid = a.C);
                0 !== a.D && (d.spid = a.D);
                a = _.It(a.A, d);
                "chrome-untrusted://new-tab-page" === c && (a = _.It(a, {origin: "chrome://new-tab-page"}));
                b && (a = _.It(a, b));
                return a
            },
            yA = function (a, b, c) {
                if (a.j) return a.j;
                a.j = _.gf("gapi.iframes.getContext")().openChild({
                    attributes: {
                        role: "presentation",
                        style: {height: "100%", visibility: "hidden"},
                        onload: b
                    },
                    where: a.parent,
                    url: _.cb(xA(a, c)),
                    dontclear: !0,
                    hintInFragment: !0
                });
                return a.j
            },
            zA = function (a, b, c, d, e) {
                if (!a.G) {
                    var f = _.ue("IFRAME");
                    _.pe(f, {
                        role: "presentation",
                        style: "height: 100%; width: 100%; visibility: hidden;",
                        frameborder: 0,
                        scrolling: "no"
                    });
                    f.addEventListener("load", b);
                    _.Zm(f, xA(a, e));
                    a.parent.appendChild(f);
                    a.G = uA({destination: window, lg: f, origin: a.B, Ie: d, onMessage: c});
                    a.w = f
                }
            },
            AA = function (a, b, c) {
                if (a.o) return a.o;
                a.o = uA({
                    destination: window,
                    lg: a.w,
                    origin: a.B,
                    Ie: c,
                    onMessage: b
                });
                return a.o
            };
        wA.prototype.getIframeEl = function () {
            return this.J ? this.w ? this.w : null : this.j ? this.j.getIframeEl() : null
        };
        var BA = function (a, b) {
            _.lf.call(this, a, b)
        };
        _.n(BA, _.lf);
        var CA = function (a, b, c, d, e, f) {
            e = void 0 === e ? {} : e;
            f = void 0 === f ? !1 : f;
            _.P.call(this);
            this.C = !1;
            this.O = a;
            this.w = null;
            this.o = f;
            this.B = void 0;
            this.j = new wA(this.O, _.rj(b), /^\d+$/.test(c) ? parseInt(c, 10) : 0, /^\d+$/.test(d) ? parseInt(d, 10) : 0, this.o);
            this.A = e;
            this.J = this.H = !1
        };
        _.n(CA, _.P);
        var DA = function (a) {
            if (a.C) return 3;
            a.C = !0;
            if (!_.gf("gapi.iframes.getContext") && !a.o) {
                var b = _.gf("gapi.load");
                if (!b) return 2;
                b("gapi.iframes", (0, _.q)(a.G, a));
                return 1
            }
            a.G();
            return 0
        };
        CA.prototype.getIframeEl = function () {
            return this.j.getIframeEl()
        };
        var EA = function (a) {
            var b = _.ue("LINK"),
                c = _.cb(xA(a.j, a.A)) + (a.o ? "" : "&usegapi=1");
            b.crossOrigin = "use-credentials";
            _.nc && (b.addEventListener("load", function () {
                a.H = !0
            }), b.addEventListener("error", function () {
                a.J = !0
            }));
            _.qj(b, c, "prefetch");
            document.head.appendChild(b)
        };
        CA.prototype.focus = function () {
            this.getIframeEl().focus()
        };
        var FA = function (a, b) {
                a.getIframeEl() && _.xg(a.getIframeEl(), {visibility: b ? "" : "hidden"})
            },
            GA = function (a, b, c) {
                a.o ? a.B && (b = {event: b}, c && (b.data = c), a.B.send(b)) : a.w && a.w.send(b, c, void 0, _.gf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
            };
        CA.prototype.G = function () {
            var a = this,
                b = function () {
                    return void a.dispatchEvent("loaded")
                };
            if (this.o) {
                var c = HA.exec(_.cb(xA(this.j, this.A)))[1];
                zA(this.j, b, this.D.bind(this), "ogi_" + c, this.A);
                this.B = AA(this.j, this.D.bind(this), "ogd_" + c)
            } else _.gf("gapi.iframes.getContext") && (this.w = yA(this.j, b, this.A), IA(this, this.w))
        };
        CA.prototype.D = function (a) {
            var b = new BA(a.data.event, this);
            b.data = a.data.data;
            this.dispatchEvent(b)
        };
        var IA = function (a, b) {
            _.Pa(JA, function (c) {
                b.register(c, function (d) {
                    var e = new BA(c, a);
                    e.data = d;
                    a.dispatchEvent(e)
                }, _.gf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
            })
        };
        CA.prototype.remove = function () {
            var a = this.getIframeEl();
            a && a.parentNode.removeChild(a)
        };
        var JA = {
                Dk: "blur",
                Ek: "caev",
                Hk: "close",
                Kk: "dismiss",
                Tk: "_ready",
                Uk: "alogc",
                Vk: "alogn",
                Wk: "alogma",
                Yk: "alogmm",
                Xk: "alogm",
                Zk: "plog",
                jl: "_renderfailed",
                kl: "_renderstart",
                nl: "restyle",
                ql: "savec",
                rl: "savek",
                sl: "_startuploaded",
                wl: "unload"
            },
            HA = /\/widget\/(.+)(\/|\?)/;
        var KA = ["a", "er_em", "lc"],
            LA = function (a, b, c, d) {
                this.B = _.tn;
                this.D = a;
                this.j = b;
                this.A = c;
                this.C = d;
                this.w = this.o = !1
            };
        LA.prototype.log = function (a, b, c, d, e) {
            KA.includes(a) || this.D.log(this.j.toString(), "7", a, "&ap=1" + b, c);
            if ("i" === a) {
                if (this.w) return;
                this.o && (a = "rl", this.w = !0);
                this.o = !0
            }
            _.xo(this.B, a, this.j, this.A, this.C, d, !0, !0, !1, e)
        };
        var MA = function (a) {
            this.o = a;
            this.j = !1
        };
        MA.prototype.Ma = function () {
            this.o.Ma()
        };
        var OA = function (a, b, c, d) {
            d = void 0 === d ? !1 : d;
            _.P.call(this);
            this.w = new _.Ig(this);
            _.Mf(this, this.w);
            this.j = a;
            this.wa = b;
            this.Z = new _.Rp(b, !0);
            this.B = _.ue("DIV");
            this.o = null;
            this.G = this.V = this.ka = this.$ = this.S = this.sa = this.J = this.H = !1;
            this.Aa = _.A(a, 33) || "_renderstart";
            this.A = this.N = null;
            this.T = this.U = !1;
            this.D = d;
            this.W = !1;
            this.Y = c;
            this.P = null;
            a = this.B;
            b = Object.assign({}, NA);
            this.j.getHeight() ? b.height = this.j.getHeight() + "px" : b.bottom = "0px";
            _.A(this.j, 6) && (b.width = _.A(this.j, 6) + "px");
            (c = _.A(this.j, 7)) &&
            (b["margin-top"] = c + "px");
            (c = _.B(this.j, 11)) ? b.left = 0 : b.right = 0;
            _.A(this.j, 8) && (c ? b["margin-left"] = _.A(this.j, 8) + "px" : b["margin-right"] = _.A(this.j, 8) + "px");
            _.xg(a, b);
            this.Y.appendChild(this.B)
        };
        _.n(OA, _.P);
        OA.prototype.F = function () {
            return this.B
        };
        var TA = function (a, b) {
            PA(a);
            if (a.G = b) {
                if (3 !== _.A(a.j, 17)) {
                    b = _.A(a.j, 7);
                    var c = "100vh";
                    b && (c = "calc(" + -1 * (Math.max(0, _.uq(a.Y).y - _.kq(document).y) + b) + "px + " + c + ")");
                    _.xg(a.B, "max-height", c)
                }
                a.H ? (QA(a, !0), FA(a.o, !0), a.dispatchEvent("rav"), null != _.A(a.j, 18) && a.ha && (b = a.O ? _.fk(a.O) : new _.Bc, _.E(b, 24, Date.now() - a.ha), null != a.ma && _.E(b, 41, a.ma), RA(a, _.A(a.j, 18), b))) : a.T ? SA(a) : a.dispatchEvent("sorp")
            } else QA(a, !1), FA(a.o, !1), a.dispatchEvent("h")
        };
        OA.prototype.$a = function (a) {
            this.D = a;
            if (this.J) {
                var b = this.o,
                    c = {};
                c.enabled = a;
                GA(b, "dm", c)
            }
            this.dispatchEvent("sdm")
        };
        OA.prototype.isVisible = function () {
            var a = "hidden" != this.B.style.visibility;
            return "none" != this.B.style.display && a
        };
        var QA = function (a, b) {
                _.xg(a.B, {visibility: b ? "" : "hidden"})
            },
            VA = function (a, b, c, d) {
                a.o = b;
                _.xe(c) ? a.A = c : a.N = c;
                UA(a, d);
                if ((b = _.B(a.j, 10) || _.C(a.j, 27, 0)) || null != a.N) c = _.C(a.j, 27, 0), null == a.C && 0 < c ? a.C = _.dg(a.X, c, a) : a.X();
                !b && _.B(a.j, 24) && EA(a.o)
            },
            WA = function (a) {
                _.Mg(a.w);
                a.A.removeAttribute("data-ogsr-fb")
            };
        OA.prototype.notify = function () {
            null != _.A(this.j, 31) && RA(this, _.A(this.j, 31));
            TA(this, !0)
        };
        var UA = function (a, b) {
            a.w.K(a.o, "_ready", a.Lj);
            a.w.K(a.o, "_startuploaded", function () {
                a.$ = !0
            });
            a.w.K(a.o, "_renderfailed", a.Pj);
            a.w.K(a.o, "_renderstart", a.Qj);
            a.w.K(a.o, "loaded", function () {
                a.ka = !0
            });
            a.w.K(a.o, a.Aa, a.nk);
            _.B(a.j, 9) && a.w.K(a.o, "blur", a.Gj);
            a.w.K(a.o, "restyle", a.Rj);
            a.w.K(a.o, "unload", a.Jj);
            a.w.K(a.o, "close", a.wg);
            b && 0 < b.length && (0, _.Ka)(b, function (c) {
                return _.gh(a.w, c, a.wg)
            });
            null != a.A ? (a.w.K(a.A, ["mouseover", "focus"], a.Vj), _.gh(a.w, a.A, a.Fg), a.w.K(a.A, "keydown", function (c) {
                27 == c.keyCode &&
                a.isVisible() && (a.W = !0, a.Fg(c))
            }), 1 == _.A(a.j, 17) && (a.w.K(a.o, "alogn", a.Ej), a.w.K(a.o, "alogm", a.Nj), a.w.K(a.o, "alogmm", a.Oj), a.w.K(a.o, "alogma", a.Mj), a.w.K(a.o, "alogc", a.Dj)), a.w.K(window, ["keyup", "keydown"], a.Sj), _.x && a.w.K(a.A, "focusin", function () {
                a.U = !0
            }), _.qh(a.A, "click"), (b = a.A.querySelector("[data-eqid]")) && _.qh(b, "click")) : null != a.N && (mA(a.N, a), a.w.K(a.o, "plog", a.Yg));
            a.w.K(window, "beforeunload", a.Fj)
        };
        _.h = OA.prototype;
        _.h.Qj = function (a) {
            this.sa = !0;
            null != _.A(this.j, 32) && RA(this, _.A(this.j, 32));
            a.data && ("null" !== a.data.ttf && (this.ma = Number(a.data.ttf) || null), (a.data.height || a.data.width) && XA(this, a.data.height, a.data.width))
        };
        _.h.Lj = function () {
            this.J = !0
        };
        _.h.Yg = function (a) {
            "i" === a.data.ld.apatk && RA(this, 110)
        };
        _.h.Fj = function () {
            this.V = !0;
            null != this.C && (_.eg(this.C), this.C = null);
            this.isVisible() || this.J || this.o.remove()
        };
        _.h.nk = function () {
            this.H = !0;
            null != this.L && _.eg(this.L);
            TA(this, this.G)
        };
        var PA = function (a) {
            null != a.C && (_.eg(a.C), a.C = null);
            var b = DA(a.o);
            null == a.P && (a.P = b);
            if (3 != b) {
                if (b = _.A(a.j, 14)) a.L = _.dg(a.ya, b, a);
                null != _.A(a.j, 30) && RA(a, _.A(a.j, 30))
            }
        };
        OA.prototype.X = function () {
            var a = this;
            "complete" == document.readyState ? PA(this) : window.addEventListener("load", function () {
                return PA(a)
            })
        };
        OA.prototype.ya = function () {
            this.H || this.S || (this.T = !0, this.G && SA(this))
        };
        var SA = function (a) {
            null != _.A(a.j, 16) && RA(a, _.A(a.j, 16));
            a.dispatchEvent("sort")
        };
        _.h = OA.prototype;
        _.h.Pj = function () {
            this.S = !0;
            null != this.L && _.eg(this.L);
            null != _.A(this.j, 26) && this.G && RA(this, _.A(this.j, 26))
        };
        _.h.Fg = function (a) {
            this.ha = Date.now();
            var b = !_.Hg(a);
            b = void 0 === b ? !1 : b;
            var c = !this.isVisible();
            TA(this, c);
            var d = this.o,
                e = {};
            e.keyboardAction = void 0 === b ? !1 : b;
            GA(d, c ? "open" : "close", e);
            if (c ? null != _.A(this.j, 12) : null != _.A(this.j, 13)) b = c ? _.A(this.j, 12) : _.A(this.j, 13), RA(this, b);
            this.U = !1;
            a.preventDefault();
            a.stopPropagation()
        };
        _.h.Sj = function (a) {
            32 == a.keyCode && a.target instanceof Element && _.Xf(this.A, a.target) && (a.stopPropagation(), a.preventDefault())
        };
        _.h.Vj = function () {
            PA(this)
        };
        _.h.Rj = function (a) {
            a.data && XA(this, a.data.height, a.data.width)
        };
        var XA = function (a, b, c) {
            b = void 0 === b ? "" : b;
            c = void 0 === c ? "" : c;
            var d = {};
            b && (d.height = b);
            c && (d.width = c);
            _.xg(a.B, d)
        };
        _.h = OA.prototype;
        _.h.Gj = function () {
            document.activeElement == this.A || _.Xf(this.A, document.activeElement) || this.U || TA(this, !1)
        };
        _.h.Jj = function () {
            this.H = !1;
            TA(this, !1)
        };
        _.h.wg = function () {
            TA(this, !1)
        };
        _.h.Ej = function (a) {
            var b = Number(a.data.pid) || -1,
                c = a = a.data.vis;
            if (4 < a || 0 >= a) c = 0;
            a = c;
            c = new _.Bc;
            b = _.E(c, 15, b);
            b = _.Sn(b, YA(this));
            _.Up(this.Z, a, b)
        };
        _.h.Nj = function () {
            RA(this, 104)
        };
        _.h.Oj = function () {
            RA(this, 105)
        };
        _.h.Mj = function (a) {
            a = a.data.an;
            var b = _.Sn(new _.Bc, YA(this));
            _.Tp(this.Z, a, b)
        };
        _.h.Dj = function (a) {
            RA(this, a.data.mouseSession ? 99 : 100)
        };
        var YA = function (a) {
                var b = a.o && a.o.getIframeEl(),
                    c = 0;
                a.J && (c |= 1);
                a.$ && (c |= 128);
                a.sa && (c |= 32);
                a.S && (c |= 64);
                a.isVisible() && (c |= 2);
                a.T && (c |= 4);
                b && (c |= 8);
                a.ka && (c |= 16);
                _.gf("gapi.iframes") && (c |= 256);
                a.o.H && (c |= 512);
                a.o.J && (c |= 1024);
                a.W && (c |= 2048);
                switch (a.P) {
                    case 2:
                        c |= 4096;
                        break;
                    case 1:
                        c |= 8192
                }
                a.V && (c |= 16384);
                a.G && (c |= 32768);
                return c
            },
            RA = function (a, b, c) {
                c = c || (a.O ? _.fk(a.O) : new _.Bc);
                _.Sn(c, YA(a));
                if (null != _.A(a.j, 19)) {
                    var d = _.G(a.j, iA, 19);
                    d = _.A(d, 1);
                    _.E(c, 31, d);
                    _.E(c, 34, !0)
                }
                a.wa.log(b, c)
            },
            NA = {
                overflow: "hidden",
                position: "absolute",
                top: "0",
                visibility: "hidden",
                width: "350px",
                "z-index": 991
            };
        var ZA = function (a, b, c, d) {
            _.P.call(this);
            this.w = a;
            this.j = b;
            this.B = d;
            this.o = new _.Ig(this);
            _.Mf(this, this.o);
            this.A = c;
            this.o.K(this.w, "plog", this.D);
            this.o.K(this.w, "savec", this.C);
            this.o.K(this.w, "savek", this.C);
            this.o.K(this.w, "caev", this.C);
            this.o.Gb(this.j, "rav", this.J);
            this.o.Gb(this.w, "dismiss", this.G)
        };
        _.n(ZA, _.P);
        ZA.prototype.J = function () {
            var a = this.B;
            a.j || (_.Zn(a.o), a.j = !0);
            this.A.log("i", "&vis=1", 1, this.j.F(), YA(this.j))
        };
        ZA.prototype.G = function (a) {
            a = a.data && a.data.type ? a.data.type : "d";
            "ec" === a ? $A() : "end" !== a && this.B.Ma();
            TA(this.j, !1);
            this.A.log(a, "", 1, this.j.F(), YA(this.j))
        };
        ZA.prototype.C = function (a) {
            switch (a.data.apatk) {
                case "c":
                    $A();
                    break;
                case "d":
                    this.B.Ma()
            }
        };
        var $A = function () {
            var a = _.gf("window.launchConsentDialog");
            a && a()
        };
        ZA.prototype.D = function (a) {
            var b = a.data.ld;
            a = b.apatk;
            if ("i" != a) {
                var c = b.sp;
                b = b.ad;
                var d = this.j.F(),
                    e = YA(this.j);
                this.A.log(a, b, c, d, e)
            }
        };
        var aB = function (a) {
            this.o = a;
            this.j = null
        };
        aB.prototype.La = function () {
            var a = this.o,
                b = this.A,
                c = this.w;
            bB(a);
            b = "<div" + _.Wt("") + _.Xt(cB(a, b, c) + "") + _.Vt(dB(a, b, c) + "") + ">";
            c = eB(c);
            var d = _.$t(a.w);
            "" !== d && (b += " <style>" + d + "</style>");
            b += c + "</div>";
            _.du(a);
            a = _.gq(document, _.Db(b, null));
            this.j && this.j.appendChild(a);
            return a
        };
        aB.prototype.fill = function (a, b) {
            this.A = a;
            this.w = b
        };
        aB.prototype.instantiate = function (a) {
            this.j = a;
            _.cu(this.o, a)
        };
        var dB = function () {
                return ' dir="' + _.Ut("ltr") + '"'
            },
            fB = function () {
                return ""
            },
            cB = function (a, b, c) {
                return "padding:" + _.Ut(nA(a.j) ? gA("padding", b ? "12px" : "3px") : b ? "12px" : "3px") + ";" + (c ? "" : "display:" + _.Ut(nA(a.j) ? gA("display", "inline-block") : "inline-block") + ";") + "vertical-align:" + _.Ut(nA(a.j) ? gA("vertical-align", "middle") : "middle") + ";" + (c && !nA(a.j) ? "margin-left:" + _.Ut("calc(50% - 24px)") + ";" : "") + (c && nA(a.j) ? "margin-right:" + _.Ut("calc(50% - 24px)") + ";" : "") + (c ? "margin-top:" + _.Ut(nA(a.j) ? gA("margin-top", "98px") :
                    "98px") + ";" : "")
            },
            gB = function () {
                return !0
            },
            hB = function () {
                return !1
            },
            iB = function (a, b) {
                bB(a);
                return eB(b.sg)
            },
            jB = function (a, b) {
                bB(a);
                var c = b.Xi;
                b = b.sg;
                a = "<div" + _.Wt("") + _.Xt(cB(a, c, b) + "") + _.Vt(dB(a, c, b) + "") + ">";
                c = eB(b);
                return _.Db(a + (c + "</div>"), null)
            },
            eB = function (a) {
                return " <div" + _.Wt((a ? "mspin-medium " : "") + (a ? "" : "mspin-small ")) + _.Xt("") + _.Vt("") + "> <div> <div></div> </div> </div> "
            },
            bB = function (a) {
                kB in a.o || _.bu(a, kB, {Xi: 0, sg: 1}, iB, jB, gB, hB, "", dB, fB, cB)
            },
            kB = "t-s91B_Xq1PdE",
            lB = function (a) {
                this.o = a;
                this.j = null
            };
        lB.prototype.La = function () {
            var a = this.o,
                b = this.w;
            mB(a);
            b = "<div" + _.Wt("") + _.Xt(nB(a, b) + "") + _.Vt("") + ">";
            var c = _.$t(a.w);
            "" !== c && (b += " <style>" + c + "</style>");
            b += "</div>";
            _.du(a);
            a = _.gq(document, _.Db(b, null));
            this.j && this.j.appendChild(a);
            return a
        };
        lB.prototype.fill = function (a) {
            this.w = a
        };
        lB.prototype.instantiate = function (a) {
            this.j = a;
            _.cu(this.o, a)
        };
        var oB = function () {
                return ""
            },
            pB = function () {
                return ""
            },
            nB = function (a, b) {
                return "box-shadow:0 -1px 2px 0 rgba(60,64,67,0.30),0 -2px 6px 2px rgba(60,64,67,0.15);height:calc(100% - 16px);" + (nA(a.j) ? "" : "left:0;") + (nA(a.j) ? "right:0;" : "") + "margin:8px;position:absolute;top:0;width:calc(100% - 16px);background:" + _.Ut(nA(a.j) ? gA("background", b ? "#2d2e30" : "#FFF") : b ? "#2d2e30" : "#FFF") + ";"
            },
            qB = function () {
                return !0
            },
            rB = function () {
                return !1
            },
            sB = function (a) {
                mB(a);
                return ""
            },
            tB = function (a, b) {
                mB(a);
                a = "<div" + _.Wt("") + _.Xt(nB(a,
                    b.Sd) + "") + _.Vt("") + ">";
                return _.Db(a + "</div>", null)
            },
            mB = function (a) {
                uB in a.o || _.bu(a, uB, {Sd: 0}, sB, tB, qB, rB, "", oB, pB, nB)
            },
            uB = "t-LSLm3aJIFAU",
            vB = function (a) {
                this.o = a;
                this.j = null
            };
        vB.prototype.La = function () {
            var a = this.o,
                b = this.B,
                c = this.C,
                d = this.A,
                e = this.w;
            wB(a);
            var f = "<div" + _.Wt("") + _.Xt(xB(a, b, c, d, e) + "") + _.Vt(' data-fb=""') + ">";
            b = yB(a, b, c, d, e);
            c = _.$t(a.w);
            "" !== c && (f += " <style>" + c + "</style>");
            f += b + "</div>";
            _.du(a);
            a = _.gq(document, _.Db(f, null));
            this.j && this.j.appendChild(a);
            return a
        };
        vB.prototype.fill = function (a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.w = d
        };
        vB.prototype.instantiate = function (a) {
            this.j = a;
            _.cu(this.o, a)
        };
        var zB = function () {
                return ""
            },
            AB = function () {
                return ""
            },
            xB = function (a, b, c, d, e) {
                return "font:14px/22px Roboto,RobotoDraft,Arial,sans-serif;letter-spacing:0.03px;padding:134px 50px;text-align:center;white-space:normal;color:" + _.Ut(nA(a.j) ? gA("color", e ? "#e8eaed" : "#5F6368") : e ? "#e8eaed" : "#5F6368") + ";"
            },
            BB = function () {
                return !0
            },
            CB = function () {
                return !1
            },
            DB = function (a, b) {
                wB(a);
                return yB(a, b.Cf, b.mg, b.zf, b.Sd)
            },
            EB = function (a, b) {
                wB(a);
                var c = b.Cf,
                    d = b.mg,
                    e = b.zf,
                    f = b.Sd;
                b = "<div" + _.Wt("") + _.Xt(xB(a, c, d, e, f) + "") + _.Vt(' data-fb=""') +
                    ">";
                a = yB(a, c, d, e, f);
                return _.Db(b + (a + "</div>"), null)
            },
            yB = function (a, b, c, d, e) {
                return ' <svg height="28px" viewbox="0 0 24 24" width="28px" xmlns="http://www.w3.org/2000/svg"> <path' + _.Wt("") + _.Xt("") + _.Vt(' fill="' + _.Ut(e ? "#E8EAED" : "#80868B") + '" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"') + "></path> </svg> <p" + _.Wt("") + _.Xt("margin-top:4px;") + _.Vt("") + "> " + _.Ut(b) + " <a" + _.Wt("") + _.Xt("font:14px/22px Roboto,RobotoDraft,Arial,sans-serif;font-weight:bold;letter-spacing:0.03px;text-decoration:none;color:" +
                    _.Ut(nA(a.j) ? gA("color", e ? "#8AB4F8" : "#4285F4") : e ? "#8AB4F8" : "#4285F4") + ";") + _.Vt(' target="_blank"') + ">" + _.Ut(c) + "</a> " + _.Ut(d) + " </p> "
            },
            wB = function (a) {
                FB in a.o || _.bu(a, FB, {Cf: 0, mg: 1, zf: 2, Sd: 3}, DB, EB, BB, CB, ' data-fb=""', zB, AB, xB)
            },
            FB = "t-PFKuGYhRe5s";
        var HB = function (a, b, c, d) {
            _.P.call(this);
            this.j = a;
            this.J = b;
            this.O = c;
            this.D = d;
            this.N = 0;
            this.B = null;
            this.A = 0;
            this.P = !0;
            this.G = null;
            this.S = !1;
            this.H = new _.au;
            this.L = this.o = this.C = null;
            this.T = !1;
            this.w = new _.Ig(this);
            _.Mf(this, this.w);
            _.xg(this.j.F(), {transition: "height .3s ease-in-out"});
            GB(this)
        };
        _.n(HB, _.P);
        var GB = function (a) {
            a.w.K(a.j, "sorp", a.Af);
            a.w.K(a.j, "sort", a.dj);
            a.w.K(a.j, "rav", a.jj);
            a.w.K(a.j, "h", a.Ij);
            a.w.K(a.j, "sdm", function () {
                a.o && a.o.querySelector("[data-fb]") && IB(a)
            });
            a.w.K(a.J, "close", a.ij)
        };
        _.h = HB.prototype;
        _.h.jj = function () {
            JB(this);
            this.C && this.C.Nb(!1);
            this.J.focus();
            this.D.setAttribute("aria-expanded", !0)
        };
        _.h.Ij = function () {
            this.D.setAttribute("aria-expanded", !1)
        };
        _.h.ij = function () {
            this.D.focus()
        };
        _.h.dj = function () {
            var a = this;
            switch (this.N) {
                case 2:
                    JB(this);
                    WA(this.j);
                    QA(this.j, !1);
                    this.D.click();
                    break;
                case 1:
                    this.B && _.Rn(top.location, _.mb(this.B));
                case 3:
                    this.Af(), IB(this)
            }
            if (this.S) {
                var b = _.ue("IFRAME"),
                    c = _.O(window, "message", function (d) {
                        if ("afbp" === d.Ya.data) {
                            d = a.j;
                            switch (_.A(d.j, 17)) {
                                case 1:
                                    RA(d, 73)
                            }
                            a.j.F().removeChild(b);
                            _.Hf(c)
                        }
                    });
                _.Zm(b, KB);
                b.style.display = "none";
                this.j.F().appendChild(b)
            }
        };
        _.h.Af = function () {
            this.o && JB(this);
            if (!this.L) {
                if (!this.T) {
                    var a = 1 == this.A ? LB : MB;
                    var b = _.ue("LINK");
                    _.qj(b, a, "stylesheet");
                    document.head.appendChild(b);
                    this.T = !0
                }
                a = new aB(this.H);
                a.fill(this.P, 1 == this.A);
                this.L = a.La()
            }
            a = this.L;
            switch (this.A) {
                case 1:
                    b = new lB(this.H);
                    b.fill(this.j.D);
                    this.o = b.La();
                    this.o.appendChild(a);
                    this.j.F().appendChild(this.o);
                    FA(this.J, !1);
                    QA(this.j, !0);
                    break;
                default:
                    this.o = a, _.xq(this.O, !1), _.jh(this.o, this.O)
            }
        };
        var IB = function (a) {
                if (1 == a.A && a.B && a.G) {
                    _.xg(a.o, "background", a.j.D ? "#2d2e30" : "#FFF");
                    _.ve(a.o);
                    var b = new vB(a.H);
                    NB(a, b, a.G);
                    b = b.La();
                    var c = b.querySelectorAll("a")[0];
                    _.hh(c, a.B);
                    a.w.K(c, "click", function () {
                        var d = a.j;
                        null != _.A(d.j, 21) && RA(d, _.A(d.j, 21))
                    });
                    a.o.appendChild(b)
                }
            },
            JB = function (a) {
                a.o && (_.we(a.o), 1 != a.A && _.xq(a.O, !0), a.o = null)
            },
            NB = function (a, b, c) {
                c = /(.*)%1\$s(.*)%2\$s(.*)/.exec(c);
                b.fill(c[1], c[2], c[3], a.j.D)
            },
            KB = _.Ym(_.wm("http://127.0.0.1:5500/gb/html/afbp.html")),
            MB = _.Ym(_.wm("http://127.0.0.1:5500/images/icons/material/anim/mspin/mspin_googcolor_small.css")),
            LB = _.Ym(_.wm("http://127.0.0.1:5500/images/icons/material/anim/mspin/mspin_googcolor_medium.css"));
        var OB = function (a, b) {
            this.o = a;
            this.j = b
        };
        _.h = OB.prototype;
        _.h.Vc = function () {
            return this.o
        };
        _.h.ve = function (a) {
            TA(this.j, a)
        };
        _.h.$a = function (a) {
            this.j.$a(a)
        };
        _.h.Ye = function () {
            return !0
        };
        _.h.Sb = function () {
            return this.j.isVisible()
        };
        _.h.ue = function () {
        };
        _.PB = function (a) {
            if (a) {
                var b = document.querySelector("#gb [data-ogsr-up]");
                if (b) {
                    var c = 0 !== _.C(a, 7, 0),
                        d = _.Qj(a, lA, 1);
                    if (c || d && d.length) {
                        vA();
                        c = _.Gc.ua().j.dd || null;
                        for (var e = 0; e < d.length; e++) {
                            var f = d[e];
                            if (_.G(f, _.pj, 3)) {
                                if (3 === _.A(f, 17)) {
                                    var g = _.G(f, iA, 19);
                                    if (_.B(g, 11)) {
                                        var k = _.A(g, 1) || 0,
                                            l = _.A(g, 2) || 0;
                                        f = _.A(g, 12) || 0;
                                        g = hA(g, k, l);
                                        _.Zn(g);
                                        l = _.Hc(_.Gc.ua(), "p_log");
                                        k = new LA(l, k, f, g.Ub());
                                        k.D.log(k.j.toString(), "7", "i", "&ap=1&vis=0", 1);
                                        _.xo(k.B, "i", k.j, k.A, k.C, null, !0, !0, !0);
                                        continue
                                    }
                                }
                                k = new OA(f, _.tn,
                                    b, !!_.B(a, 10));
                                g = k.F();
                                l = a;
                                var m = {};
                                m.hl = _.A(l, 9);
                                switch (_.A(f, 17)) {
                                    case 1:
                                        m.gm = "", _.B(l, 10) && (m.dm = "")
                                }
                                g = new CA(g, _.G(f, _.pj, 3), _.A(l, 4), _.A(l, 5), m, !!_.B(f, 34));
                                if (3 === _.A(f, 17)) {
                                    m = _.G(f, iA, 19);
                                    f = _.A(m, 1) || 0;
                                    var r = _.A(m, 2) || 0;
                                    l = _.A(m, 12);
                                    var t = new _.Bc;
                                    _.E(t, 31, f);
                                    var F = _.Vn(new _.Un, l);
                                    _.H(t, 50, F);
                                    k.O = t;
                                    F = _.N("gb_3c");
                                    t = Array.from(_.ih("gb_D", F));
                                    (F = _.N("gb_ia", F)) && _.ng(t, void 0, 0, F);
                                    VA(k, g, _.yo.ua(), t);
                                    r = hA(m, f, r);
                                    m = new MA(r);
                                    r = r.Ub();
                                    t = _.Hc(_.Gc.ua(), "p_log");
                                    new ZA(g, k, new LA(t, f, l, r), m)
                                } else if (m =
                                    null, (l = 1 === _.A(f, 17)) ? (m = document.querySelector("#gb [data-ogsr-alt]"), c.A(new OB("app", k))) : 2 === _.A(f, 17) && (m = (m = _.N("gb_Sa")) ? _.N("gb_D", m) : null, c.A(new OB("account", k))), null != m && (VA(k, g, m), r = k.D, l && r !== _.B(a, 10) && c.$a(r), l = m.getElementsByClassName("gb_D")[0] || m, k = new HB(k, g, m, l), r = _.A(f, 15), g = _.B(a, 6), m = _.A(f, 22), t = _.C(f, 23, 0), k.N = t, k.B = r, r = k, t = _.A(f, 20), r.A = t, r.P = g, r.G = m, m = r, r = !!_.B(f, 25), m.S = r, g && 1 === _.A(f, 17) && (f = _.N("gb_Xd")))) f = new _.mr(l, f), k.C && k.C.ta(), k.C = f
                            } else _.wd.log(Error("Xa"))
                        }
                    } else _.wd.log(Error("Ya"))
                } else _.wd.log(Error("Za"))
            } else _.wd.log(Error("$a"))
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var GE = new _.kA;
        window.gbar_ && window.gbar_.D_CONFIG && (GE = new _.kA(window.gbar_.D_CONFIG));
        _.PB(GE);

    } catch (e) {
        _._DumpException(e)
    }
})(this.gbar_);
// Google Inc.            this.C = new nd;
this.G = new nd;
this.J = new nd;
this.j = new nd;
this.w = new nd
}
;
_.va(_.M);
_.h = _.M.prototype;
_.h.Dh = function () {
    return this.A
};
_.h.Lh = function () {
    return this.o
};
_.h.Rh = function () {
    return this.D
};
_.h.Kh = function () {
    return this.B
};
_.h.Ph = function () {
    return this.C
};
_.h.Sh = function () {
    return this.G
};
_.h.Hh = function () {
    return this.J
};
_.h.Ih = function () {
    return this.j
};
_.h.wh = function () {
    return this.w
};
var rd = function (a) {
    _.z(this, a, 0, -1, null, null)
};
_.v(rd, _.y);
_.td = function () {
    return _.G(_.sd, _.Dc, 1)
};
_.ud = function () {
    return _.G(_.sd, _.Ec, 5)
};
var vd;
window.gbar_ && window.gbar_.CONFIG ? vd = window.gbar_.CONFIG[0] || {} : vd = [];
_.sd = new rd(vd);
var jd, kd, ed, fd, dd;
jd = _.G(_.sd, _.id, 3) || new _.id;
kd = _.td() || new _.Dc;
_.wd = new ld;
ed = _.td() || new _.Dc;
fd = _.ud() || new _.Ec;
dd = _.G(_.sd, md, 4) || new md;
_.xd = new gd;
_.u("gbar_._DumpException", function (a) {
    _.wd ? _.wd.log(a) : console.error(a)
});
_.yd = new Pc(_.wd);
_.xd.log(8, {m: "BackCompat" == document.compatMode ? "q" : "s"});
_.u("gbar.A", nd);
nd.prototype.aa = nd.prototype.then;
_.u("gbar.B", _.M);
_.M.prototype.ba = _.M.prototype.Lh;
_.M.prototype.bb = _.M.prototype.Rh;
_.M.prototype.bd = _.M.prototype.Ph;
_.M.prototype.be = _.M.prototype.Sh;
_.M.prototype.bf = _.M.prototype.Dh;
_.M.prototype.bg = _.M.prototype.Kh;
_.M.prototype.bh = _.M.prototype.Hh;
_.M.prototype.bi = _.M.prototype.Ih;
_.M.prototype.bj = _.M.prototype.wh;
_.u("gbar.a", _.M.ua());
var zd = new Fc(window);
_.Kc("api", zd);
var Ad = _.ud() || new _.Ec,
    Bd = _.L(_.A(Ad, 8));
window.__PVT = Bd;
_.Kc("eq", _.yd);

} catch
(e)
{
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.Id = !_.x || _.gc(9);
    _.Jd = !_.x || _.gc(9);
    _.Kd = _.x && !_.ec("9");
    _.Ld = function () {
        if (!_.p.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function () {
                    a = !0
                }
            });
        try {
            _.p.addEventListener("test", _.ua, b), _.p.removeEventListener("test", _.ua, b)
        } catch (c) {
        }
        return a
    }();
    _.Md = _.Qb ? "webkitTransitionEnd" : _.Mb ? "otransitionend" : "transitionend";

} catch (e) {
    _._DumpException(e)
}
try {
    _.Nd = function (a, b, c) {
        if (!a.o)
            if (c instanceof Array) {
                c = _.ia(c);
                for (var d = c.next(); !d.done; d = c.next()) _.Nd(a, b, d.value)
            } else {
                d = (0, _.q)(a.D, a, b);
                var e = a.C + c;
                a.C++;
                b.setAttribute("data-eqid", e);
                a.A[e] = d;
                b && b.addEventListener ? b.addEventListener(c, d, !1) : b && b.attachEvent ? b.attachEvent("on" + c, d) : a.B.log(Error("m`" + b))
            }
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var Rd, Sd, Td, Xd, Yd, Zd, $d, ae, be, ce, he;
    _.Qd = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    Rd = null;
    Sd = /^[\w+/_-]+[=]{0,2}$/;
    Td = function (a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Sd.test(a) ? a : ""
    };
    _.Ud = function (a) {
        var b = _.xa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.Vd = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    _.Wd = function (a, b) {
        return 0 == a.lastIndexOf(b, 0)
    };
    Xd = /&/g;
    Yd = /</g;
    Zd = />/g;
    $d = /"/g;
    ae = /'/g;
    be = /\x00/g;
    ce = /[\x00&<>"']/;
    _.de = function (a, b) {
        if (b) a = a.replace(Xd, "&amp;").replace(Yd, "&lt;").replace(Zd, "&gt;").replace($d, "&quot;").replace(ae, "&#39;").replace(be, "&#0;");
        else {
            if (!ce.test(a)) return a;
            -1 != a.indexOf("&") && (a = a.replace(Xd, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Yd, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Zd, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace($d, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(ae, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(be, "&#0;"))
        }
        return a
    };
    _.ee = function (a) {
        var b;
        (b = a.ownerDocument && a.ownerDocument.defaultView) && b != _.p ? b = Td(b.document) : (null === Rd && (Rd = Td(_.p.document)), b = Rd);
        b && a.setAttribute("nonce", b)
    };
    _.fe = function (a, b) {
        a.src = _.bb(b);
        _.ee(a)
    };
    _.ge = function (a) {
        return a = _.de(a, void 0)
    };
    he = !_.x || _.gc(9);
    _.ie = !_.Pb && !_.x || _.x && _.gc(9) || _.Pb && _.ec("1.9.1");
    _.je = _.x && !_.ec("9");
    _.ke = _.x || _.Mb || _.Qb;
    _.le = function (a, b) {
        this.width = a;
        this.height = b
    };
    _.h = _.le.prototype;
    _.h.aspectRatio = function () {
        return this.width / this.height
    };
    _.h.zc = function () {
        return !(this.width * this.height)
    };
    _.h.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.h.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.h.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var oe, te;
    _.me = function (a, b) {
        return (b || document).getElementsByTagName(String(a))
    };
    _.N = function (a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.ne(c, "*", a, b)[0] || null
        }
        return a || null
    };
    _.ne = function (a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && _.Oa(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    };
    _.pe = function (a, b) {
        _.Pa(b, function (c, d) {
            c && "object" == typeof c && c.Pb && (c = c.Fb());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : oe.hasOwnProperty(d) ? a.setAttribute(oe[d], c) : _.Wd(d, "aria-") || _.Wd(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    };
    oe = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.se = function (a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!he && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', _.ge(d.name), '"');
            if (d.type) {
                c.push(' type="', _.ge(d.type), '"');
                var e = {};
                _.Ra(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = _.qe(a, c);
        d && ("string" === typeof d ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : _.pe(c, d));
        2 < b.length && _.re(a, c, b, 2);
        return c
    };
    _.re = function (a, b, c, d) {
        function e(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
        }

        for (; d < c.length; d++) {
            var f = c[d];
            !_.Ud(f) || _.za(f) && 0 < f.nodeType ? e(f) : (0, _.Ka)(te(f) ? _.Vd(f) : f, e)
        }
    };
    _.ue = function (a) {
        return _.qe(document, a)
    };
    _.qe = function (a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.ve = function (a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    };
    _.we = function (a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.xe = function (a) {
        return _.za(a) && 1 == a.nodeType
    };
    _.ye = function (a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    te = function (a) {
        if (a && "number" == typeof a.length) {
            if (_.za(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (_.ya(a)) return "function" == typeof a.item
        }
        return !1
    };
    _.ze = function (a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var Ae = function (a, b) {
        this.w = a;
        this.A = b;
        this.o = 0;
        this.j = null
    };
    Ae.prototype.get = function () {
        if (0 < this.o) {
            this.o--;
            var a = this.j;
            this.j = a.next;
            a.next = null
        } else a = this.w();
        return a
    };
    var Be = function (a, b) {
        a.A(b);
        100 > a.o && (a.o++, b.next = a.j, a.j = b)
    };
    var Ce = function (a) {
            _.p.setTimeout(function () {
                throw a;
            }, 0)
        },
        De, Ee = function () {
            var a = _.p.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.w("Presto") && (a = function () {
                var e = _.ue("IFRAME");
                e.style.display = "none";
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.close();
                var g = "callImmediate" + Math.random(),
                    k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = (0, _.q)(function (l) {
                    if (("*" ==
                        k || l.origin == k) && l.data == g) this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function () {
                        f.postMessage(g, k)
                    }
                }
            });
            if ("undefined" !== typeof a && !_.vb()) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function () {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.Ef;
                        c.Ef = null;
                        e()
                    }
                };
                return function (e) {
                    d.next = {Ef: e};
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return function (e) {
                _.p.setTimeout(e, 0)
            }
        };
    var Fe = function () {
            this.o = this.j = null
        },
        He = new Ae(function () {
            return new Ge
        }, function (a) {
            a.reset()
        });
    Fe.prototype.add = function (a, b) {
        var c = He.get();
        c.set(a, b);
        this.o ? this.o.next = c : this.j = c;
        this.o = c
    };
    Fe.prototype.remove = function () {
        var a = null;
        this.j && (a = this.j, this.j = this.j.next, this.j || (this.o = null), a.next = null);
        return a
    };
    var Ge = function () {
        this.next = this.scope = this.Yb = null
    };
    Ge.prototype.set = function (a, b) {
        this.Yb = a;
        this.scope = b;
        this.next = null
    };
    Ge.prototype.reset = function () {
        this.next = this.scope = this.Yb = null
    };
    var Ie, Je, Ke, Le, Ne;
    _.Me = function (a, b) {
        Ie || Je();
        Ke || (Ie(), Ke = !0);
        Le.add(a, b)
    };
    Je = function () {
        if (_.p.Promise && _.p.Promise.resolve) {
            var a = _.p.Promise.resolve(void 0);
            Ie = function () {
                a.then(Ne)
            }
        } else Ie = function () {
            var b = Ne;
            !_.ya(_.p.setImmediate) || _.p.Window && _.p.Window.prototype && !_.w("Edge") && _.p.Window.prototype.setImmediate == _.p.setImmediate ? (De || (De = Ee()), De(b)) : _.p.setImmediate(b)
        }
    };
    Ke = !1;
    Le = new Fe;
    Ne = function () {
        for (var a; a = Le.remove();) {
            try {
                a.Yb.call(a.scope)
            } catch (b) {
                Ce(b)
            }
            Be(He, a)
        }
        Ke = !1
    };
    _.Oe = function (a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var Re, df, $e, Ye, Ze, ef, cf, ff;
    _.Qe = function (a) {
        this.j = 0;
        this.D = void 0;
        this.A = this.o = this.w = null;
        this.B = this.C = !1;
        if (a != _.ua) try {
            var b = this;
            a.call(void 0, function (c) {
                _.Pe(b, 2, c)
            }, function (c) {
                _.Pe(b, 3, c)
            })
        } catch (c) {
            _.Pe(this, 3, c)
        }
    };
    Re = function () {
        this.next = this.context = this.o = this.w = this.j = null;
        this.A = !1
    };
    Re.prototype.reset = function () {
        this.context = this.o = this.w = this.j = null;
        this.A = !1
    };
    var Se = new Ae(function () {
            return new Re
        }, function (a) {
            a.reset()
        }),
        Te = function (a, b, c) {
            var d = Se.get();
            d.w = a;
            d.o = b;
            d.context = c;
            return d
        };
    _.Qe.prototype.then = function (a, b, c) {
        return Ue(this, _.ya(a) ? a : null, _.ya(b) ? b : null, c)
    };
    _.Qe.prototype.$goog_Thenable = !0;
    _.Ve = function (a, b) {
        return Ue(a, null, b, void 0)
    };
    _.Qe.prototype.cancel = function (a) {
        if (0 == this.j) {
            var b = new _.We(a);
            _.Me(function () {
                Xe(this, b)
            }, this)
        }
    };
    var Xe = function (a, b) {
            if (0 == a.j)
                if (a.w) {
                    var c = a.w;
                    if (c.o) {
                        for (var d = 0, e = null, f = null, g = c.o; g && (g.A || (d++, g.j == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.j && 1 == d ? Xe(c, b) : (f ? (d = f, d.next == c.A && (c.A = d), d.next = d.next.next) : Ye(c), Ze(c, e, 3, b)))
                    }
                    a.w = null
                } else _.Pe(a, 3, b)
        },
        af = function (a, b) {
            a.o || 2 != a.j && 3 != a.j || $e(a);
            a.A ? a.A.next = b : a.o = b;
            a.A = b
        },
        Ue = function (a, b, c, d) {
            var e = Te(null, null, null);
            e.j = new _.Qe(function (f, g) {
                e.w = b ? function (k) {
                    try {
                        var l = b.call(d, k);
                        f(l)
                    } catch (m) {
                        g(m)
                    }
                } : f;
                e.o = c ? function (k) {
                    try {
                        var l =
                            c.call(d, k);
                        void 0 === l && k instanceof _.We ? g(k) : f(l)
                    } catch (m) {
                        g(m)
                    }
                } : g
            });
            e.j.w = a;
            af(a, e);
            return e.j
        };
    _.Qe.prototype.J = function (a) {
        this.j = 0;
        _.Pe(this, 2, a)
    };
    _.Qe.prototype.H = function (a) {
        this.j = 0;
        _.Pe(this, 3, a)
    };
    _.Pe = function (a, b, c) {
        0 == a.j && (a === c && (b = 3, c = new TypeError("p")), a.j = 1, _.bf(c, a.J, a.H, a) || (a.D = c, a.j = b, a.w = null, $e(a), 3 != b || c instanceof _.We || cf(a, c)))
    };
    _.bf = function (a, b, c, d) {
        if (a instanceof _.Qe) return af(a, Te(b || _.ua, c || null, d)), !0;
        if (_.Oe(a)) return a.then(b, c, d), !0;
        if (_.za(a)) try {
            var e = a.then;
            if (_.ya(e)) return df(a, e, b, c, d), !0
        } catch (f) {
            return c.call(d, f), !0
        }
        return !1
    };
    df = function (a, b, c, d, e) {
        var f = !1,
            g = function (l) {
                f || (f = !0, c.call(e, l))
            },
            k = function (l) {
                f || (f = !0, d.call(e, l))
            };
        try {
            b.call(a, g, k)
        } catch (l) {
            k(l)
        }
    };
    $e = function (a) {
        a.C || (a.C = !0, _.Me(a.G, a))
    };
    Ye = function (a) {
        var b = null;
        a.o && (b = a.o, a.o = b.next, b.next = null);
        a.o || (a.A = null);
        return b
    };
    _.Qe.prototype.G = function () {
        for (var a; a = Ye(this);) Ze(this, a, this.j, this.D);
        this.C = !1
    };
    Ze = function (a, b, c, d) {
        if (3 == c && b.o && !b.A)
            for (; a && a.B; a = a.w) a.B = !1;
        if (b.j) b.j.w = null, ef(b, c, d);
        else try {
            b.A ? b.w.call(b.context) : ef(b, c, d)
        } catch (e) {
            ff.call(null, e)
        }
        Be(Se, b)
    };
    ef = function (a, b, c) {
        2 == b ? a.w.call(a.context, c) : a.o && a.o.call(a.context, c)
    };
    cf = function (a, b) {
        a.B = !0;
        _.Me(function () {
            a.B && ff.call(null, b)
        })
    };
    ff = Ce;
    _.We = function (a) {
        _.Ia.call(this, a)
    };
    _.v(_.We, _.Ia);
    _.We.prototype.name = "cancel";

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var jf;
    _.gf = function (a) {
        a = a.split(".");
        for (var b = _.p, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    };
    _.hf = function (a, b) {
        b = (0, _.Ja)(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    jf = function (a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    };
    _.kf = function (a, b) {
        try {
            return _.Jb(a[b]), !0
        } catch (c) {
        }
        return !1
    };
    _.lf = function (a, b) {
        this.type = a;
        this.j = this.target = b;
        this.defaultPrevented = this.o = !1
    };
    _.lf.prototype.stopPropagation = function () {
        this.o = !0
    };
    _.lf.prototype.preventDefault = function () {
        this.defaultPrevented = !0
    };
    _.mf = function (a, b) {
        _.lf.call(this, a ? a.type : "");
        this.relatedTarget = this.j = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.w = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.Ya = null;
        a && this.init(a, b)
    };
    _.v(_.mf, _.lf);
    var nf = {2: "touch", 3: "pen", 4: "mouse"};
    _.mf.prototype.init = function (a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.j = b;
        (b = a.relatedTarget) ? _.Pb && (_.kf(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX :
            a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.w = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : nf[a.pointerType] || "";
        this.state = a.state;
        this.Ya = a;
        a.defaultPrevented && this.preventDefault()
    };
    _.mf.prototype.stopPropagation = function () {
        _.mf.M.stopPropagation.call(this);
        this.Ya.stopPropagation ? this.Ya.stopPropagation() : this.Ya.cancelBubble = !0
    };
    _.mf.prototype.preventDefault = function () {
        _.mf.M.preventDefault.call(this);
        var a = this.Ya;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, _.Kd) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {
        }
    };
    var qf;
    _.of = "closure_listenable_" + (1E6 * Math.random() | 0);
    _.pf = function (a) {
        return !(!a || !a[_.of])
    };
    qf = 0;
    var rf;
    rf = function (a, b, c, d, e) {
        this.listener = a;
        this.j = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.je = e;
        this.key = ++qf;
        this.Wc = this.Rd = !1
    };
    _.sf = function (a) {
        a.Wc = !0;
        a.listener = null;
        a.j = null;
        a.src = null;
        a.je = null
    };
    _.tf = function (a) {
        this.src = a;
        this.j = {};
        this.o = 0
    };
    _.tf.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.j[f];
        a || (a = this.j[f] = [], this.o++);
        var g = uf(a, b, d, e);
        -1 < g ? (b = a[g], c || (b.Rd = !1)) : (b = new rf(b, this.src, f, !!d, e), b.Rd = c, a.push(b));
        return b
    };
    _.tf.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.j)) return !1;
        var e = this.j[a];
        b = uf(e, b, c, d);
        return -1 < b ? (_.sf(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.j[a], this.o--), !0) : !1
    };
    _.vf = function (a, b) {
        var c = b.type;
        if (!(c in a.j)) return !1;
        var d = _.hf(a.j[c], b);
        d && (_.sf(b), 0 == a.j[c].length && (delete a.j[c], a.o--));
        return d
    };
    _.tf.prototype.Yd = function (a, b) {
        a = this.j[a.toString()];
        var c = [];
        if (a)
            for (var d = 0; d < a.length; ++d) {
                var e = a[d];
                e.capture == b && c.push(e)
            }
        return c
    };
    _.tf.prototype.xd = function (a, b, c, d) {
        a = this.j[a.toString()];
        var e = -1;
        a && (e = uf(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    _.tf.prototype.hasListener = function (a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return jf(this.j, function (f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
            return !1
        })
    };
    var uf = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Wc && f.listener == b && f.capture == !!c && f.je == d) return e
        }
        return -1
    };
    var wf, xf, yf, Bf, Df, Ef, Jf, If, Ff, Kf;
    wf = "closure_lm_" + (1E6 * Math.random() | 0);
    xf = {};
    yf = 0;
    _.O = function (a, b, c, d, e) {
        if (d && d.once) return _.zf(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) _.O(a, b[f], c, d, e);
            return null
        }
        c = _.Af(c);
        return _.pf(a) ? a.K(b, c, _.za(d) ? !!d.capture : !!d, e) : Bf(a, b, c, !1, d, e)
    };
    Bf = function (a, b, c, d, e, f) {
        if (!b) throw Error("q");
        var g = _.za(e) ? !!e.capture : !!e,
            k = _.Cf(a);
        k || (a[wf] = k = new _.tf(a));
        c = k.add(b, c, d, g, f);
        if (c.j) return c;
        d = Df();
        c.j = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) _.Ld || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Ef(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("r");
        yf++;
        return c
    };
    Df = function () {
        var a = Ff,
            b = _.Jd ? function (c) {
                return a.call(b.src, b.listener, c)
            } : function (c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    };
    _.zf = function (a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) _.zf(a, b[f], c, d, e);
            return null
        }
        c = _.Af(c);
        return _.pf(a) ? a.Gb(b, c, _.za(d) ? !!d.capture : !!d, e) : Bf(a, b, c, !0, d, e)
    };
    _.Gf = function (a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) _.Gf(a, b[f], c, d, e);
        else d = _.za(d) ? !!d.capture : !!d, c = _.Af(c), _.pf(a) ? a.Ea(b, c, d, e) : a && (a = _.Cf(a)) && (b = a.xd(b, c, d, e)) && _.Hf(b)
    };
    _.Hf = function (a) {
        if ("number" === typeof a || !a || a.Wc) return !1;
        var b = a.src;
        if (_.pf(b)) return b.Og(a);
        var c = a.type,
            d = a.j;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ef(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        yf--;
        (c = _.Cf(b)) ? (_.vf(c, a), 0 == c.o && (c.src = null, b[wf] = null)) : _.sf(a);
        return !0
    };
    Ef = function (a) {
        return a in xf ? xf[a] : xf[a] = "on" + a
    };
    Jf = function (a, b, c, d) {
        var e = !0;
        if (a = _.Cf(a))
            if (b = a.j[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.Wc && (f = If(f, d), e = e && !1 !== f)
                }
        return e
    };
    If = function (a, b) {
        var c = a.listener,
            d = a.je || a.src;
        a.Rd && _.Hf(a);
        return c.call(d, b)
    };
    Ff = function (a, b) {
        if (a.Wc) return !0;
        if (!_.Jd) {
            var c = b || _.gf("window.event");
            b = new _.mf(c, this);
            var d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (e = b.j; e; e = e.parentNode) c.push(e);
                a = a.type;
                for (e = c.length - 1; !b.o && 0 <= e; e--) {
                    b.j = c[e];
                    var f = Jf(c[e], a, !0, b);
                    d = d && f
                }
                for (e = 0; !b.o && e < c.length; e++) b.j = c[e], f = Jf(c[e], a, !1, b), d = d && f
            }
            return d
        }
        return If(a, new _.mf(b, this))
    };
    _.Cf = function (a) {
        a = a[wf];
        return a instanceof _.tf ? a : null
    };
    Kf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    _.Af = function (a) {
        if (_.ya(a)) return a;
        a[Kf] || (a[Kf] = function (b) {
            return a.handleEvent(b)
        });
        return a[Kf]
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var Qf, Zf;
    _.Lf = function (a) {
        a && "function" == typeof a.ta && a.ta()
    };
    _.Mf = function (a, b) {
        b = _.Qd(_.Lf, b);
        a.Wa ? b() : (a.Db || (a.Db = []), a.Db.push(b))
    };
    _.Nf = function (a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    _.Of = function (a, b) {
        if ((0, _.Gb)())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = _.Cb(b)
    };
    _.Pf = function (a) {
        var b = 0,
            c;
        for (c in a.j) {
            for (var d = a.j[c], e = 0; e < d.length; e++) ++b, _.sf(d[e]);
            delete a.j[c];
            a.o--
        }
    };
    _.Rf = function (a) {
        return /^[\s\xa0]*$/.test(a)
    };
    _.Sf = function (a, b) {
        return "string" === typeof b ? a.getElementById(b) : b
    };
    _.Tf = function (a) {
        return "CSS1Compat" == a.compatMode
    };
    _.Uf = function (a) {
        a = (a || window).document;
        a = _.Tf(a) ? a.documentElement : a.body;
        return new _.le(a.clientWidth, a.clientHeight)
    };
    _.Vf = function (a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    _.Wf = function (a) {
        return _.ie && void 0 != a.children ? a.children : (0, _.La)(a.childNodes, function (b) {
            return 1 == b.nodeType
        })
    };
    _.Xf = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.Yf = function (a) {
        try {
            var b = a && a.activeElement;
            return b && b.nodeName ? b : null
        } catch (c) {
            return null
        }
    };
    Zf = function (a) {
        this.j = a || _.p.document || document
    };
    _.h = Zf.prototype;
    _.h.F = function (a) {
        return _.Sf(this.j, a)
    };
    _.h.Ba = function (a, b, c) {
        return _.se(this.j, arguments)
    };
    _.h.createElement = function (a) {
        return _.qe(this.j, a)
    };
    _.h.$d = function (a, b) {
        a.appendChild(b)
    };
    _.h.Xf = _.ve;
    _.h.ae = _.we;
    _.h.Uh = _.Wf;
    _.h.Wf = _.Xf;
    _.$f = function (a) {
        return a ? new Zf(_.ye(a)) : Qf || (Qf = new Zf)
    };
    _.P = function () {
        _.I.call(this);
        this.Eb = new _.tf(this);
        this.Wg = this;
        this.Id = null
    };
    _.v(_.P, _.I);
    _.P.prototype[_.of] = !0;
    _.h = _.P.prototype;
    _.h.Mh = function () {
        return this.Id
    };
    _.h.Ic = function (a) {
        this.Id = a
    };
    _.h.addEventListener = function (a, b, c, d) {
        _.O(this, a, b, c, d)
    };
    _.h.removeEventListener = function (a, b, c, d) {
        _.Gf(this, a, b, c, d)
    };
    _.h.dispatchEvent = function (a) {
        var b, c = this.Id;
        if (c)
            for (b = []; c; c = c.Id) b.push(c);
        c = this.Wg;
        var d = a.type || a;
        if ("string" === typeof a) a = new _.lf(a, c);
        else if (a instanceof _.lf) a.target = a.target || c;
        else {
            var e = a;
            a = new _.lf(d, c);
            _.Ra(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.o && 0 <= f; f--) {
                var g = a.j = b[f];
                e = bg(g, d, !0, a) && e
            }
        a.o || (g = a.j = c, e = bg(g, d, !0, a) && e, a.o || (e = bg(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.o && f < b.length; f++) g = a.j = b[f], e = bg(g, d, !1, a) && e;
        return e
    };
    _.h.R = function () {
        _.P.M.R.call(this);
        this.Eb && _.Pf(this.Eb);
        this.Id = null
    };
    _.h.K = function (a, b, c, d) {
        return this.Eb.add(String(a), b, !1, c, d)
    };
    _.h.Gb = function (a, b, c, d) {
        return this.Eb.add(String(a), b, !0, c, d)
    };
    _.h.Ea = function (a, b, c, d) {
        return this.Eb.remove(String(a), b, c, d)
    };
    _.h.Og = function (a) {
        return _.vf(this.Eb, a)
    };
    var bg = function (a, b, c, d) {
        b = a.Eb.j[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Wc && g.capture == c) {
                var k = g.listener,
                    l = g.je || g.src;
                g.Rd && a.Og(g);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    _.P.prototype.Yd = function (a, b) {
        return this.Eb.Yd(String(a), b)
    };
    _.P.prototype.xd = function (a, b, c, d) {
        return this.Eb.xd(String(a), b, c, d)
    };
    _.P.prototype.hasListener = function (a, b) {
        return this.Eb.hasListener(void 0 !== a ? String(a) : void 0, b)
    };
    _.cg = function (a, b) {
        _.P.call(this);
        this.o = a || 1;
        this.j = b || _.p;
        this.w = (0, _.q)(this.tk, this);
        this.A = (0, _.Fa)()
    };
    _.v(_.cg, _.P);
    _.h = _.cg.prototype;
    _.h.wc = !1;
    _.h.Lb = null;
    _.h.tk = function () {
        if (this.wc) {
            var a = (0, _.Fa)() - this.A;
            0 < a && a < .8 * this.o ? this.Lb = this.j.setTimeout(this.w, this.o - a) : (this.Lb && (this.j.clearTimeout(this.Lb), this.Lb = null), this.dispatchEvent("tick"), this.wc && (this.stop(), this.start()))
        }
    };
    _.h.start = function () {
        this.wc = !0;
        this.Lb || (this.Lb = this.j.setTimeout(this.w, this.o), this.A = (0, _.Fa)())
    };
    _.h.stop = function () {
        this.wc = !1;
        this.Lb && (this.j.clearTimeout(this.Lb), this.Lb = null)
    };
    _.h.R = function () {
        _.cg.M.R.call(this);
        this.stop();
        delete this.j
    };
    _.dg = function (a, b, c) {
        if (_.ya(a)) c && (a = (0, _.q)(a, c));
        else if (a && "function" == typeof a.handleEvent) a = (0, _.q)(a.handleEvent, a);
        else throw Error("s");
        return 2147483647 < Number(b) ? -1 : _.p.setTimeout(a, b || 0)
    };
    _.eg = function (a) {
        _.p.clearTimeout(a)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var pg, tg, ug;
    _.lg = function (a) {
        return new _.le(a.width, a.height)
    };
    _.mg = function (a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    _.ng = function (a, b, c, d) {
        Array.prototype.splice.apply(a, _.mg(arguments, 1))
    };
    _.og = function (a) {
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase()
        })
    };
    pg = function (a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
            return c + d.toUpperCase()
        })
    };
    _.qg = function (a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    };
    _.rg = function (a, b, c) {
        return _.se(document, arguments)
    };
    _.sg = function (a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else _.ve(a), a.appendChild(_.ye(a).createTextNode(String(b)))
    };
    tg = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1};
    ug = {IMG: " ", BR: "\n"};
    _.vg = function (a, b, c) {
        if (!(a.nodeName in tg))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ug) b.push(ug[a.nodeName]);
            else
                for (a = a.firstChild; a;) _.vg(a, b, c), a = a.nextSibling
    };
    var yg;
    _.xg = function (a, b, c) {
        if ("string" === typeof b) (b = _.wg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.wg(c, d);
                f && (c.style[f] = e)
            }
    };
    yg = {};
    _.wg = function (a, b) {
        var c = yg[b];
        if (!c) {
            var d = _.og(b);
            c = d;
            void 0 === a.style[d] && (d = (_.Qb ? "Webkit" : _.Pb ? "Moz" : _.x ? "ms" : _.Mb ? "O" : null) + pg(d), void 0 !== a.style[d] && (c = d));
            yg[b] = c
        }
        return c
    };
    _.zg = function (a, b) {
        var c = _.ye(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    _.Ag = function (a, b) {
        return _.zg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    _.Bg = function (a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
    };
    _.Cg = function (a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Eg = function (a) {
        var b = _.Dg;
        if ("none" != _.Ag(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.Dg = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = _.Qb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = _.Bg(a), new _.le(a.right - a.left, a.bottom - a.top)) : new _.le(b, c)
    };
    _.Fg = _.Pb ? "MozUserSelect" : _.Qb || _.Nb ? "WebkitUserSelect" : null;

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var Gg;
    Gg = [1, 4, 2];
    _.Hg = function (a) {
        return (_.Id ? 0 == a.Ya.button : "click" == a.type ? !0 : !!(a.Ya.button & Gg[0])) && !(_.Qb && _.Rb && a.ctrlKey)
    };
    _.Ig = function (a) {
        _.I.call(this);
        this.X = a;
        this.P = {}
    };
    _.v(_.Ig, _.I);
    var Jg = [];
    _.Ig.prototype.K = function (a, b, c, d) {
        return Kg(this, a, b, c, d)
    };
    _.Ig.prototype.A = function (a, b, c, d, e) {
        return Kg(this, a, b, c, d, e)
    };
    var Kg = function (a, b, c, d, e, f) {
        Array.isArray(c) || (c && (Jg[0] = c.toString()), c = Jg);
        for (var g = 0; g < c.length; g++) {
            var k = _.O(b, c[g], d || a.handleEvent, e || !1, f || a.X || a);
            if (!k) break;
            a.P[k.key] = k
        }
        return a
    };
    _.Ig.prototype.Gb = function (a, b, c, d) {
        return Lg(this, a, b, c, d)
    };
    var Lg = function (a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) Lg(a, b, c[g], d, e, f);
        else {
            b = _.zf(b, c, d || a.handleEvent, e, f || a.X || a);
            if (!b) return a;
            a.P[b.key] = b
        }
        return a
    };
    _.Ig.prototype.Ea = function (a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) this.Ea(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = _.za(d) ? !!d.capture : !!d, e = e || this.X || this, c = _.Af(c), d = !!d, b = _.pf(a) ? a.xd(b, c, d, e) : a ? (a = _.Cf(a)) ? a.xd(b, c, d, e) : null : null, b && (_.Hf(b), delete this.P[b.key]);
        return this
    };
    _.Mg = function (a) {
        _.Pa(a.P, function (b, c) {
            this.P.hasOwnProperty(c) && _.Hf(b)
        }, a);
        a.P = {}
    };
    _.Ig.prototype.R = function () {
        _.Ig.M.R.call(this);
        _.Mg(this)
    };
    _.Ig.prototype.handleEvent = function () {
        throw Error("v");
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var dh;
    _.eh = function (a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    };
    _.U = function (a, b, c) {
        Array.isArray(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (dh || (dh = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = dh, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.gh = function (a, b, c) {
        _.fh.K(b, c, void 0, a.X || a, a);
        return a
    };
    _.hh = function (a, b) {
        b = b instanceof _.jb ? b : _.nb(b);
        a.href = _.kb(b)
    };
    _.ih = function (a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : _.ne(document, "*", a, b)
    };
    _.jh = function (a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    };
    _.kh = function (a, b) {
        return b ? _.ze(a, function (c) {
            return !b || "string" === typeof c.className && _.Oa(c.className.split(/\s+/), b)
        }, void 0) : null
    };
    var lh, mh;
    lh = function () {
    };
    _.fh = new lh;
    mh = ["click", "keydown", "keyup"];
    lh.prototype.K = function (a, b, c, d, e) {
        var f = function (g) {
            var k = _.Af(b),
                l = _.xe(g.target) ? g.target.getAttribute("role") || null : null;
            "click" == g.type && _.Hg(g) ? k.call(d, g) : 13 != g.keyCode && 3 != g.keyCode || "keyup" == g.type ? 32 != g.keyCode || "keyup" != g.type || "button" != l && "tab" != l || (k.call(d, g), g.preventDefault()) : (g.type = "keypress", k.call(d, g))
        };
        f.yb = b;
        f.bk = d;
        e ? e.K(a, mh, f, c) : _.O(a, mh, f, c)
    };
    lh.prototype.Ea = function (a, b, c, d, e) {
        for (var f, g = 0; f = mh[g]; g++) {
            var k = a;
            var l = f;
            var m = !!c;
            l = _.pf(k) ? k.Yd(l, m) : k ? (k = _.Cf(k)) ? k.Yd(l, m) : [] : [];
            for (k = 0; m = l[k]; k++) {
                var r = m.listener;
                if (r.yb == b && r.bk == d) {
                    e ? e.Ea(a, f, m.listener, c, d) : _.Gf(a, f, m.listener, c, d);
                    break
                }
            }
        }
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var oh;
    oh = function (a, b, c) {
        if (a.o) return null;
        if (c instanceof Array) {
            var d = null;
            c = _.ia(c);
            for (var e = c.next(); !e.done; e = c.next()) (e = oh(a, b, e.value)) && (d = e);
            return d
        }
        d = null;
        a.j && a.j.type == c && a.w == b && (d = a.j, a.j = null);
        if (e = b.getAttribute("data-eqid")) b.removeAttribute("data-eqid"), (e = a.A[e]) ? b.removeEventListener ? b.removeEventListener(c, e, !1) : b.detachEvent && b.detachEvent("on" + c, e) : a.B.log(Error("n`" + b));
        return d
    };
    _.ph = function (a, b, c) {
        return function () {
            try {
                return b.apply(c, arguments)
            } catch (d) {
                a.log(d)
            }
        }
    };
    _.rh = function (a, b, c, d, e, f) {
        d = _.ph(a, d, f);
        a = _.O(b, c, d, e, f);
        _.qh(b, c);
        return a
    };
    _.qh = function (a, b) {
        if (a instanceof Element && (b = oh(_.Ic("eq"), a, b || [])))
            if (_.x && b instanceof MouseEvent && a.dispatchEvent) {
                var c = document.createEvent("MouseEvent");
                c.initMouseEvent(b.type, !0, !0, b.view, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget);
                a.dispatchEvent(c)
            } else a.dispatchEvent && a.dispatchEvent(b)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    _.pj = function (a) {
        _.z(this, a, 0, -1, null, null)
    };
    _.v(_.pj, _.y);
    _.qj = function (a, b, c) {
        a.rel = c;
        a.href = -1 != c.toLowerCase().indexOf("stylesheet") ? _.cb(b) : b instanceof _.ab ? _.cb(b) : b instanceof _.jb ? _.kb(b) : _.kb(_.nb(b))
    };
    _.rj = function (a) {
        return _.db(_.A(a, 4) || "")
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var Ij;
    _.Hj = function (a) {
        this.j = a || {cookie: ""}
    };
    _.h = _.Hj.prototype;
    _.h.set = function (a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Pl;
            d = c.dk || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var k = c.se
        }
        if (/[;=\s]/.test(a)) throw Error("T`" + a);
        if (/[;\r\n]/.test(b)) throw Error("U`" + b);
        void 0 === k && (k = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        k = 0 > k ? "" : 0 == k ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.Fa)() + 1E3 * k)).toUTCString();
        this.j.cookie = a + "=" + b + c + g + k + d + (null != e ? ";samesite=" + e : "")
    };
    _.h.get = function (a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = (0, _.eb)(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    _.h.remove = function (a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {se: 0, path: b, domain: c});
        return d
    };
    _.h.mb = function () {
        return Ij(this).keys
    };
    _.h.Pa = function () {
        return Ij(this).values
    };
    _.h.zc = function () {
        return !this.j.cookie
    };
    _.h.clear = function () {
        for (var a = Ij(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    Ij = function (a) {
        a = (a.j.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = (0, _.eb)(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {keys: b, values: c}
    };
    _.Jj = new _.Hj("undefined" == typeof document ? null : document);

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.Kj = function (a) {
        switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                return !0;
            default:
                return !1
        }
    };
    _.Lj = function () {
    };
    _.Lj.prototype.o = null;
    var Nj;
    Nj = function () {
    };
    _.v(Nj, _.Lj);
    Nj.prototype.j = function () {
        var a = Oj(this);
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    Nj.prototype.A = function () {
        var a = {};
        Oj(this) && (a[0] = !0, a[1] = !0);
        return a
    };
    var Oj = function (a) {
        if (!a.w && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.w = d
                } catch (e) {
                }
            }
            throw Error("V");
        }
        return a.w
    };
    _.Mj = new Nj;

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.Pj = function (a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            for (var d = _.A(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
    };
    _.Qj = function (a, b, c) {
        _.Pj(a, b, c);
        b = a.j[c];
        b == _.tc && (b = a.j[c] = []);
        return b
    };
    _.Rj = function (a) {
        return a.contentDocument || a.contentWindow.document
    };
    _.Sj = function (a, b) {
        this.o = {};
        this.j = [];
        this.w = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("j");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof _.Sj)
                for (c = a.mb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    _.Sj.prototype.Pa = function () {
        Tj(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.o[this.j[b]]);
        return a
    };
    _.Sj.prototype.mb = function () {
        Tj(this);
        return this.j.concat()
    };
    _.Vj = function (a, b) {
        return Uj(a.o, b)
    };
    _.Sj.prototype.zc = function () {
        return 0 == this.w
    };
    _.Sj.prototype.clear = function () {
        this.o = {};
        this.w = this.j.length = 0
    };
    _.Sj.prototype.remove = function (a) {
        return Uj(this.o, a) ? (delete this.o[a], this.w--, this.j.length > 2 * this.w && Tj(this), !0) : !1
    };
    var Tj = function (a) {
        if (a.w != a.j.length) {
            for (var b = 0, c = 0; b < a.j.length;) {
                var d = a.j[b];
                Uj(a.o, d) && (a.j[c++] = d);
                b++
            }
            a.j.length = c
        }
        if (a.w != a.j.length) {
            var e = {};
            for (c = b = 0; b < a.j.length;) d = a.j[b], Uj(e, d) || (a.j[c++] = d, e[d] = 1), b++;
            a.j.length = c
        }
    };
    _.Sj.prototype.get = function (a, b) {
        return Uj(this.o, a) ? this.o[a] : b
    };
    _.Sj.prototype.set = function (a, b) {
        Uj(this.o, a) || (this.w++, this.j.push(a));
        this.o[a] = b
    };
    _.Sj.prototype.forEach = function (a, b) {
        for (var c = this.mb(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    var Uj = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var ck;
    _.Wj = function (a) {
        return encodeURIComponent(String(a))
    };
    _.Xj = function (a, b, c, d, e, f) {
        var g = "";
        a && (g += a + ":");
        c && (g += "//", b && (g += b + "@"), g += c, d && (g += ":" + d));
        e && (g += e);
        f && (g += "?" + f);
        return g
    };
    _.Yj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    _.Zj = function (a) {
        a = a.match(_.Yj)[1] || null;
        !a && _.p.self && _.p.self.location && (a = _.p.self.location.protocol, a = a.substr(0, a.length - 1));
        return a ? a.toLowerCase() : ""
    };
    _.ak = function (a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.substr(0, d), e, a.substr(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    };
    _.bk = function (a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) _.bk(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + _.Wj(b)))
    };
    ck = function (a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) _.bk(a[b], a[b + 1], c);
        return c.join("&")
    };
    _.dk = function (a, b) {
        var c = 2 == arguments.length ? ck(arguments[1], 0) : ck(arguments, 1);
        return _.ak(a, c)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var ek, gk, ik, jk, lk, mk, ok, pk, uk;
    ek = function (a) {
        if (Array.isArray(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? ek(d) : d)
            }
            return b
        }
        if (_.sc && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? ek(d) : d);
        return b
    };
    _.fk = function (a) {
        return new a.constructor(ek(a.tb()))
    };
    gk = function (a, b) {
        a.o = b;
        a.Lb && a.wc ? (a.stop(), a.start()) : a.Lb && a.stop()
    };
    _.hk = function (a, b, c) {
        a.j || (a.j = {});
        c = c || [];
        for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].tb();
        a.j[b] = c;
        return _.E(a, b, d)
    };
    ik = function (a) {
        return a.o || (a.o = a.A())
    };
    jk = function (a) {
        if (a.Pa && "function" == typeof a.Pa) return a.Pa();
        if ("string" === typeof a) return a.split("");
        if (_.Ud(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return _.Nf(a)
    };
    lk = function (a) {
        a: {
            var b = kk;
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    mk = function (a) {
        var b = b || 0;
        return function () {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    };
    ok = function () {
        this.j = nk
    };
    ok.prototype.o = function () {
        return !!this.j
    };
    pk = function (a, b) {
        return a + Math.random() * (b - a)
    };
    _.qk = function (a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
        else if (_.Ud(a) || "string" === typeof a) (0, _.Ka)(a, b, void 0);
        else {
            if (a.mb && "function" == typeof a.mb) var c = a.mb();
            else if (a.Pa && "function" == typeof a.Pa) c = void 0;
            else if (_.Ud(a) || "string" === typeof a) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++) c.push(e)
            } else
                for (e in c = [], d = 0, a) c[d++] = e;
            d = jk(a);
            e = d.length;
            for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        }
    };
    _.rk = function (a, b, c) {
        c = null != c ? "=" + _.Wj(c) : "";
        return _.ak(a, b + c)
    };
    _.sk = function (a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    };
    _.tk = /#|$/;
    uk = /[?&]($|#)/;
    _.vk = function (a, b) {
        for (var c = a.search(_.tk), d = 0, e, f = []; 0 <= (e = _.sk(a, d, b, c));) f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c);
        f.push(a.substr(d));
        return f.join("").replace(uk, "$1")
    };
    var wk = function (a) {
        if (!a) return "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/");
        -1 != c && (b = b.substring(0, c));
        a = a.substring(0, a.indexOf("://"));
        if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "chrome-untrusted" !== a && "chrome" !== a && "app" !== a) throw Error("W`" + a);
        c = "";
        var d = b.indexOf(":");
        if (-1 !=
            d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
        }
        return a + "://" + b + c
    };
    var xk = function () {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            r = m = 0
        }

        function b(t) {
            for (var F = g, D = 0; 64 > D; D += 4) F[D / 4] = t[D] << 24 | t[D + 1] << 16 | t[D + 2] << 8 | t[D + 3];
            for (D = 16; 80 > D; D++) t = F[D - 3] ^ F[D - 8] ^ F[D - 14] ^ F[D - 16], F[D] = (t << 1 | t >>> 31) & 4294967295;
            t = e[0];
            var R = e[1],
                K = e[2],
                ea = e[3],
                Nc = e[4];
            for (D = 0; 80 > D; D++) {
                if (40 > D)
                    if (20 > D) {
                        var wa = ea ^ R & (K ^ ea);
                        var Oc = 1518500249
                    } else wa = R ^ K ^ ea, Oc = 1859775393;
                else 60 > D ? (wa = R & K | ea & (R | K), Oc = 2400959708) : (wa = R ^ K ^ ea, Oc = 3395469782);
                wa = ((t << 5 | t >>>
                    27) & 4294967295) + wa + Nc + Oc + F[D] & 4294967295;
                Nc = ea;
                ea = K;
                K = (R << 30 | R >>> 2) & 4294967295;
                R = t;
                t = wa
            }
            e[0] = e[0] + t & 4294967295;
            e[1] = e[1] + R & 4294967295;
            e[2] = e[2] + K & 4294967295;
            e[3] = e[3] + ea & 4294967295;
            e[4] = e[4] + Nc & 4294967295
        }

        function c(t, F) {
            if ("string" === typeof t) {
                t = unescape(encodeURIComponent(t));
                for (var D = [], R = 0, K = t.length; R < K; ++R) D.push(t.charCodeAt(R));
                t = D
            }
            F || (F = t.length);
            D = 0;
            if (0 == m)
                for (; D + 64 < F;) b(t.slice(D, D + 64)), D += 64, r += 64;
            for (; D < F;)
                if (f[m++] = t[D++], r++, 64 == m)
                    for (m = 0, b(f); D + 64 < F;) b(t.slice(D, D + 64)), D += 64, r +=
                        64
        }

        function d() {
            var t = [],
                F = 8 * r;
            56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
            for (var D = 63; 56 <= D; D--) f[D] = F & 255, F >>>= 8;
            b(f);
            for (D = F = 0; 5 > D; D++)
                for (var R = 24; 0 <= R; R -= 8) t[F++] = e[D] >> R & 255;
            return t
        }

        for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
        var m, r;
        a();
        return {
            reset: a, update: c, digest: d, vh: function () {
                for (var t = d(), F = "", D = 0; D < t.length; D++) F += "0123456789ABCDEF".charAt(Math.floor(t[D] / 16)) + "0123456789ABCDEF".charAt(t[D] % 16);
                return F
            }
        }
    };
    var zk = function (a, b, c) {
            var d = [],
                e = [];
            if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], (0, _.Ka)(d, function (k) {
                e.push(k)
            }), yk(e.join(" "));
            var f = [],
                g = [];
            (0, _.Ka)(c, function (k) {
                g.push(k.key);
                f.push(k.value)
            });
            c = Math.floor((new Date).getTime() / 1E3);
            e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
            (0, _.Ka)(d, function (k) {
                e.push(k)
            });
            a = yk(e.join(" "));
            a = [c, a];
            0 == g.length || a.push(g.join(""));
            return a.join("_")
        },
        yk = function (a) {
            var b = xk();
            b.update(a);
            return b.vh().toLowerCase()
        };
    _.Ak = function (a) {
        var b = wk(String(_.p.location.href)),
            c;
        (c = _.p.__SAPISID || _.p.__APISID || _.p.__OVERRIDE_SID) ? c = !0 : (c = new _.Hj(document), c = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID"), c = !!c);
        if (c && (c = (b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? _.p.__SAPISID : _.p.__APISID, c || (c = new _.Hj(document), c = c.get(b ? "SAPISID" : "APISID") || c.get("__Secure-3PAPISID")), c)) {
            b = b ? "SAPISIDHASH" : "APISIDHASH";
            var d = String(_.p.location.href);
            return d && c && b ? [b, zk(wk(d), c, a || null)].join(" ") :
                null
        }
        return null
    };
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.Bk = function (a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {
        }
        throw Error("X`" + a);
    };
    _.Ck = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    var Dk = function (a) {
        this.o = this.j = this.w = a
    };
    Dk.prototype.reset = function () {
        this.o = this.j = this.w
    };
    var Ek = function (a) {
            _.P.call(this);
            this.headers = new _.Sj;
            this.G = a || null;
            this.o = !1;
            this.D = this.j = null;
            this.H = "";
            this.Qc = 0;
            this.w = this.L = this.A = this.J = !1;
            this.C = 0;
            this.B = null;
            this.S = "";
            this.N = this.O = !1
        },
        Fk, Gk, Hk;
    _.v(Ek, _.P);
    Fk = /^https?$/i;
    Gk = ["POST", "PUT"];
    Hk = [];
    _.Ik = function (a, b, c, d, e, f, g) {
        var k = new Ek;
        Hk.push(k);
        b && k.K("complete", b);
        k.Gb("ready", k.T);
        f && (k.C = Math.max(0, f));
        g && (k.O = g);
        k.send(a, c, d, e)
    };
    Ek.prototype.T = function () {
        this.ta();
        _.hf(Hk, this)
    };
    Ek.prototype.send = function (a, b, c, d) {
        if (this.j) throw Error("Z`" + this.H + "`" + a);
        b = b ? b.toUpperCase() : "GET";
        this.H = a;
        this.Qc = 0;
        this.J = !1;
        this.o = !0;
        this.j = this.G ? this.G.j() : _.Mj.j();
        this.D = this.G ? ik(this.G) : ik(_.Mj);
        this.j.onreadystatechange = (0, _.q)(this.P, this);
        try {
            this.L = !0, this.j.open(b, String(a), !0), this.L = !1
        } catch (f) {
            Jk(this);
            return
        }
        a = c || "";
        var e = new _.Sj(this.headers);
        d && _.qk(d, function (f, g) {
            e.set(g, f)
        });
        d = lk(e.mb());
        c = _.p.FormData && a instanceof _.p.FormData;
        !_.Oa(Gk, b) || d || c || e.set("Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (f, g) {
            this.j.setRequestHeader(g, f)
        }, this);
        this.S && (this.j.responseType = this.S);
        "withCredentials" in this.j && this.j.withCredentials !== this.O && (this.j.withCredentials = this.O);
        try {
            Kk(this), 0 < this.C && ((this.N = Lk(this.j)) ? (this.j.timeout = this.C, this.j.ontimeout = (0, _.q)(this.Ld, this)) : this.B = _.dg(this.Ld, this.C, this)), this.A = !0, this.j.send(a), this.A = !1
        } catch (f) {
            Jk(this)
        }
    };
    var Lk = function (a) {
            return _.x && _.ec(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        },
        kk = function (a) {
            return "content-type" == a.toLowerCase()
        };
    Ek.prototype.Ld = function () {
        "undefined" != typeof _.ta && this.j && (this.Qc = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    var Jk = function (a) {
            a.o = !1;
            a.j && (a.w = !0, a.j.abort(), a.w = !1);
            a.Qc = 5;
            Mk(a);
            Nk(a)
        },
        Mk = function (a) {
            a.J || (a.J = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    Ek.prototype.abort = function (a) {
        this.j && this.o && (this.o = !1, this.w = !0, this.j.abort(), this.w = !1, this.Qc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Nk(this))
    };
    Ek.prototype.R = function () {
        this.j && (this.o && (this.o = !1, this.w = !0, this.j.abort(), this.w = !1), Nk(this, !0));
        Ek.M.R.call(this)
    };
    Ek.prototype.P = function () {
        this.Wa || (this.L || this.A || this.w ? Ok(this) : this.U())
    };
    Ek.prototype.U = function () {
        Ok(this)
    };
    var Ok = function (a) {
            if (a.o && "undefined" != typeof _.ta && (!a.D[1] || 4 != (a.j ? a.j.readyState : 0) || 2 != a.vc()))
                if (a.A && 4 == (a.j ? a.j.readyState : 0)) _.dg(a.P, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == (a.j ? a.j.readyState : 0)) {
                    a.o = !1;
                    try {
                        a.ne() ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.Qc = 6, a.vc(), Mk(a))
                    } finally {
                        Nk(a)
                    }
                }
        },
        Nk = function (a, b) {
            if (a.j) {
                Kk(a);
                var c = a.j,
                    d = a.D[0] ? _.ua : null;
                a.j = null;
                a.D = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                }
            }
        },
        Kk = function (a) {
            a.j && a.N &&
            (a.j.ontimeout = null);
            a.B && (_.eg(a.B), a.B = null)
        };
    Ek.prototype.ne = function () {
        var a = this.vc(),
            b;
        if (!(b = _.Kj(a))) {
            if (a = 0 === a) a = _.Zj(String(this.H)), a = !Fk.test(a);
            b = a
        }
        return b
    };
    Ek.prototype.vc = function () {
        try {
            return 2 < (this.j ? this.j.readyState : 0) ? this.j.status : -1
        } catch (a) {
            return -1
        }
    };
    Ek.prototype.Zd = function () {
        try {
            return this.j ? this.j.responseText : ""
        } catch (a) {
            return ""
        }
    };
    Ek.prototype.Vf = function () {
        if (this.j) {
            a: {
                var a = this.j.responseText;
                if (_.p.JSON) try {
                    var b = _.p.JSON.parse(a);
                    break a
                } catch (c) {
                }
                b = _.Bk(a)
            }
            return b
        }
    };
    var Pk = function (a, b, c) {
        _.Ik(a.url, function (d) {
            d = d.target;
            d.ne() ? b(d.Zd()) : c(d.vc())
        }, a.$j, a.body, a.Zj, a.uk, a.withCredentials)
    };
    var Qk = function (a) {
        _.z(this, a, 0, -1, null, null)
    };
    _.v(Qk, _.y);
    Qk.prototype.Xc = function (a) {
        return _.E(this, 5, a)
    };
    var Rk = function (a) {
        _.z(this, a, 0, -1, null, null)
    };
    _.v(Rk, _.y);
    var Sk;
    _.Tk = function (a) {
        _.z(this, a, 0, 30, Sk, null)
    };
    _.v(_.Tk, _.y);
    Sk = [3, 20, 27];
    _.Uk = function (a) {
        var b = (0, _.Fa)().toString();
        _.E(a, 1, b)
    };
    _.Vk = function (a, b) {
        return _.E(a, 8, b)
    };
    var Xk = function (a) {
        _.z(this, a, 0, 17, Wk, null)
    };
    _.v(Xk, _.y);
    var Wk = [3, 5],
        Yk = function (a) {
            var b = (0, _.Fa)().toString();
            return _.E(a, 4, b)
        },
        Zk = function (a, b) {
            return _.hk(a, 3, b)
        },
        $k = function (a, b) {
            return _.E(a, 14, b)
        };
    var bl = function (a) {
        _.z(this, a, 0, 6, al, null)
    };
    _.v(bl, _.y);
    var al = [5];
    var nk = function (a) {
        _.z(this, a, 0, -1, null, null)
    };
    _.v(nk, _.y);
    var cl = new ok;
    var el = function (a, b, c, d, e, f, g, k, l, m, r) {
        _.P.call(this);
        this.W = a;
        this.S = b || _.ua;
        this.B = new Xk;
        this.Z = d;
        this.U = r;
        this.j = [];
        this.T = "";
        this.$ = _.Qd(pk, 0, 1);
        this.J = e || null;
        this.D = c || null;
        this.H = g || !1;
        this.L = l || null;
        this.V = !1;
        this.X = this.N = -1;
        this.P = !1;
        this.w = null;
        this.ka = !k;
        this.O = 0;
        this.sa = 1;
        this.Y = f || !1;
        a = new Rk;
        a = _.E(a, 1, 1);
        f || (f = (new Qk).Xc(document.documentElement.getAttribute("lang")), _.H(a, 11, f));
        _.H(this.B, 1, a);
        _.E(this.B, 2, this.W);
        this.A = new Dk(1E4);
        this.o = new _.cg(this.A.j);
        _.Mf(this, this.o);
        _.O(this.o,
            "tick", mk(dl(this, m)), !1, this);
        this.G = new _.cg(6E5);
        _.Mf(this, this.G);
        _.O(this.G, "tick", mk(dl(this, m)), !1, this);
        this.H || this.G.start();
        this.Y || (_.O(_.Vf(), "beforeunload", this.C, !1, this), _.O(_.Vf(), "unload", this.C, !1, this), _.O(document, "pagehide", this.C, !1, this))
    };
    _.v(el, _.P);
    var dl = function (a, b) {
        return b ? function () {
            b().then(a.flush.bind(a))
        } : a.flush
    };
    el.prototype.R = function () {
        this.C();
        el.M.R.call(this)
    };
    var fl = function (a) {
        a.J || (a.J = .01 > a.$() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
        return a.J
    };
    el.prototype.ud = function (a) {
        a instanceof _.Tk ? this.log(a) : (a = _.Vk(new _.Tk, a.o()), this.log(a))
    };
    _.gl = function (a, b) {
        a.A = new Dk(1 > b ? 1 : b);
        gk(a.o, a.A.j)
    };
    el.prototype.log = function (a) {
        a = _.fk(a);
        var b = this.sa++;
        _.E(a, 21, b);
        _.A(a, 1) || _.Uk(a);
        this.w && (b = _.fk(this.w), _.H(a, 16, b));
        for (; 1E3 <= this.j.length;) this.j.shift(), ++this.O;
        this.j.push(a);
        this.dispatchEvent(new hl(a));
        this.H || this.o.wc || this.o.start()
    };
    el.prototype.flush = function (a, b) {
        if (0 == this.j.length) a && a();
        else {
            var c = (0, _.Fa)();
            if (this.X > c && this.N < c) b && b("throttled");
            else {
                var d = $k(Zk(Yk(_.fk(this.B)), this.j), this.O);
                c = {};
                var e = this.S();
                e && (c.Authorization = e);
                var f = fl(this);
                this.D && (c["X-Goog-AuthUser"] = this.D, f = _.rk(f, "authuser", this.D));
                this.L && (c["X-Goog-PageId"] = this.L, f = _.rk(f, "pageId", this.L));
                if (e && this.T == e) b && b("stale-auth-token");
                else {
                    this.j = [];
                    this.o.wc && this.o.stop();
                    this.O = 0;
                    var g = d.o();
                    c = {
                        url: f,
                        body: g,
                        zl: 1,
                        Zj: c,
                        $j: "POST",
                        withCredentials: this.ka,
                        uk: 0
                    };
                    f = (0, _.q)(function (k) {
                        this.A.reset();
                        gk(this.o, this.A.j);
                        if (k) {
                            try {
                                var l = JSON.parse(k.replace(")]}'\n", ""));
                                var m = new bl(l)
                            } catch (r) {
                            }
                            m && (k = _.C(m, 1, "-1"), k = Number(k), 0 < k && (this.N = (0, _.Fa)(), this.X = this.N + k), _.uc(m), m.j || (m.j = {}), cl.o() ? (!m.j[175237375] && m.A[175237375] && (m.j[175237375] = new cl.j(m.A[175237375])), m = m.j[175237375]) : m = m.A[175237375], m && (m = _.C(m, 1, -1), -1 != m && (this.P || _.gl(this, m))))
                        }
                        a && a()
                    }, this);
                    g = (0, _.q)(function (k) {
                        var l = _.Qj(d, _.Tk, 3),
                            m = this.A;
                        m.o = Math.min(3E5, 2 * m.o);
                        m.j = Math.min(3E5,
                            m.o + Math.round(.2 * (Math.random() - .5) * m.o));
                        gk(this.o, this.A.j);
                        401 == k && e && (this.T = e);
                        if (500 <= k && 600 > k || 401 == k || 0 == k) this.j = l.concat(this.j), this.H || this.o.wc || this.o.start();
                        b && b("net-send-failed", k)
                    }, this);
                    this.U ? this.U.send(c, f, g) : this.Z(c, f, g)
                }
            }
        }
    };
    el.prototype.C = function () {
        this.V && il(this);
        this.flush()
    };
    var il = function (a) {
            jl(a, function (b, c) {
                b = _.rk(b, "format", "json");
                return _.Vf().navigator.sendBeacon(b, c.o())
            })
        },
        jl = function (a, b) {
            if (0 != a.j.length) {
                var c = _.vk(fl(a), "format");
                c = _.dk(c, "auth", a.S(), "authuser", a.D || "0");
                for (var d = 0; 10 > d && a.j.length; ++d) {
                    var e = a.j.slice(0, 32),
                        f = Zk(Yk(_.fk(a.B)), e);
                    if (!b(c, f)) break;
                    a.j = a.j.slice(e.length)
                }
            }
        },
        hl = function () {
            this.type = "event-logged"
        };
    _.v(hl, _.lf);
    _.kl = function (a, b, c, d, e, f, g) {
        el.call(this, a, _.Ak, b, Pk, c, d, e, void 0, f, g)
    };
    _.v(_.kl, el);

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.ml = function (a) {
        (0, _.ll)();
        return _.db(a)
    };
    _.ll = _.ua;

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var xm, zm, Im, Km, Tm, Lm, Nm, Mm, Qm, Om, Jm, Um, Vm, Pm;
    _.wm = function (a) {
        return new _.Xa(_.Va, a)
    };
    xm = function (a) {
        return Array.prototype.concat.apply([], arguments)
    };
    _.ym = function () {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, _.Fa)()).toString(36)
    };
    zm = function (a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    };
    _.Am = function (a, b) {
        this.o = this.G = this.w = "";
        this.D = null;
        this.B = this.A = "";
        this.C = !1;
        var c;
        a instanceof _.Am ? (this.C = void 0 !== b ? b : a.C, _.Bm(this, a.w), this.G = a.G, _.Cm(this, a.o), _.Dm(this, a.D), _.Em(this, a.A), _.Fm(this, _.Gm(a.j)), _.Hm(this, a.B)) : a && (c = String(a).match(_.Yj)) ? (this.C = !!b, _.Bm(this, c[1] || "", !0), this.G = Im(c[2] || ""), _.Cm(this, c[3] || "", !0), _.Dm(this, c[4]), _.Em(this, c[5] || "", !0), _.Fm(this, c[6] || "", !0), _.Hm(this, c[7] || "", !0)) : (this.C = !!b, this.j = new Jm(null, this.C))
    };
    _.Am.prototype.toString = function () {
        var a = [],
            b = this.w;
        b && a.push(Km(b, Lm, !0), ":");
        var c = this.o;
        if (c || "file" == b) a.push("//"), (b = this.G) && a.push(Km(b, Lm, !0), "@"), a.push(_.Wj(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.D, null != c && a.push(":", String(c));
        if (c = this.A) this.o && "/" != c.charAt(0) && a.push("/"), a.push(Km(c, "/" == c.charAt(0) ? Mm : Nm, !0));
        (c = this.j.toString()) && a.push("?", c);
        (c = this.B) && a.push("#", Km(c, Om));
        return a.join("")
    };
    _.Bm = function (a, b, c) {
        a.w = c ? Im(b, !0) : b;
        a.w && (a.w = a.w.replace(/:$/, ""));
        return a
    };
    _.Cm = function (a, b, c) {
        a.o = c ? Im(b, !0) : b;
        return a
    };
    _.Dm = function (a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("ba`" + b);
            a.D = b
        } else a.D = null;
        return a
    };
    _.Em = function (a, b, c) {
        a.A = c ? Im(b, !0) : b;
        return a
    };
    _.Fm = function (a, b, c) {
        b instanceof Jm ? (a.j = b, Pm(a.j, a.C)) : (c || (b = Km(b, Qm)), a.j = new Jm(b, a.C));
        return a
    };
    _.Rm = function (a, b, c) {
        a.j.set(b, c);
        return a
    };
    _.Sm = function (a, b) {
        return a.j.get(b)
    };
    _.Hm = function (a, b, c) {
        a.B = c ? Im(b) : b;
        return a
    };
    Im = function (a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    };
    Km = function (a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, Tm), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    };
    Tm = function (a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    };
    Lm = /[#\/\?@]/g;
    Nm = /[#\?:]/g;
    Mm = /[#\?]/g;
    Qm = /[#\?@]/g;
    Om = /#/g;
    Jm = function (a, b) {
        this.o = this.j = null;
        this.w = a || null;
        this.A = !!b
    };
    Um = function (a) {
        a.j || (a.j = new _.Sj, a.o = 0, a.w && zm(a.w, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    };
    Jm.prototype.add = function (a, b) {
        Um(this);
        this.w = null;
        a = Vm(this, a);
        var c = this.j.get(a);
        c || this.j.set(a, c = []);
        c.push(b);
        this.o += 1;
        return this
    };
    Jm.prototype.remove = function (a) {
        Um(this);
        a = Vm(this, a);
        return _.Vj(this.j, a) ? (this.w = null, this.o -= this.j.get(a).length, this.j.remove(a)) : !1
    };
    Jm.prototype.clear = function () {
        this.j = this.w = null;
        this.o = 0
    };
    Jm.prototype.zc = function () {
        Um(this);
        return 0 == this.o
    };
    _.Wm = function (a, b) {
        Um(a);
        b = Vm(a, b);
        return _.Vj(a.j, b)
    };
    _.h = Jm.prototype;
    _.h.forEach = function (a, b) {
        Um(this);
        this.j.forEach(function (c, d) {
            (0, _.Ka)(c, function (e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    _.h.mb = function () {
        Um(this);
        for (var a = this.j.Pa(), b = this.j.mb(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    _.h.Pa = function (a) {
        Um(this);
        var b = [];
        if ("string" === typeof a) _.Wm(this, a) && (b = xm(b, this.j.get(Vm(this, a))));
        else {
            a = this.j.Pa();
            for (var c = 0; c < a.length; c++) b = xm(b, a[c])
        }
        return b
    };
    _.h.set = function (a, b) {
        Um(this);
        this.w = null;
        a = Vm(this, a);
        _.Wm(this, a) && (this.o -= this.j.get(a).length);
        this.j.set(a, [b]);
        this.o += 1;
        return this
    };
    _.h.get = function (a, b) {
        if (!a) return b;
        a = this.Pa(a);
        return 0 < a.length ? String(a[0]) : b
    };
    _.Xm = function (a, b, c) {
        a.remove(b);
        0 < c.length && (a.w = null, a.j.set(Vm(a, b), _.Vd(c)), a.o += c.length)
    };
    Jm.prototype.toString = function () {
        if (this.w) return this.w;
        if (!this.j) return "";
        for (var a = [], b = this.j.mb(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = _.Wj(d);
            d = this.Pa(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + _.Wj(d[f]));
                a.push(g)
            }
        }
        return this.w = a.join("&")
    };
    _.Gm = function (a) {
        var b = new Jm;
        b.w = a.w;
        a.j && (b.j = new _.Sj(a.j), b.o = a.o);
        return b
    };
    Vm = function (a, b) {
        b = String(b);
        a.A && (b = b.toLowerCase());
        return b
    };
    Pm = function (a, b) {
        b && !a.A && (Um(a), a.w = null, a.j.forEach(function (c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d), _.Xm(this, e, c))
        }, a));
        a.A = b
    };

} catch (e) {
    _._DumpException(e)
}
try {
    _.Ym = function (a) {
        return _.db(_.Ya(a))
    };
    _.Zm = function (a, b) {
        a.src = _.cb(b)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

        Math.uuid.js (v1.4)
        http://www.broofa.com
        mailto:robert@broofa.com
        Copyright (c) 2010 Robert Kieffer
        Dual licensed under the MIT and GPL licenses.
        */
    var $m = function (a) {
            _.z(this, a, 0, -1, null, null)
        },
        en, fn, gn, hn, jn, kn;
    _.v($m, _.y);
    var an = [2],
        bn = function (a) {
            _.z(this, a, 0, -1, an, null)
        };
    _.v(bn, _.y);
    _.cn = function (a) {
        var b = Number(a);
        return 0 == b && _.Rf(a) ? NaN : b
    };
    _.dn = function (a, b, c) {
        _.A(a, b).push(c);
        return a
    };
    en = /^(?:(.*?)\.)?([a-zA-Z_$][\w$]*(?:\/.?<)?)?(\(.*\))?@(?::0|((?:http|https|file):\/\/[^\s)]+|javascript:.*))$/;
    fn = /^\s{3,4}at(?: (?:(.*?)\.)?((?:new )?(?:[a-zA-Z_$][\w$]*|<anonymous>))(?: \[as ([a-zA-Z_$][\w$]*)\])?)? (?:\(unknown source\)|\(native\)|\((?:eval at )?((?:http|https|file):\/\/[^\s)]+|javascript:.*)\)|((?:http|https|file):\/\/[^\s)]+|javascript:.*))$/;
    gn = function (a, b, c, d, e) {
        this.o = a;
        this.name = b;
        this.j = c;
        this.A = d;
        this.w = e
    };
    hn = function (a) {
        this.j = [];
        if (a.stack) {
            a = a.stack.replace(/\s*$/, "").split("\n");
            for (var b = 0; b < a.length; b++) {
                var c, d = en;
                if (c = a[b].match(fn)) c = new gn(c[1] || "", c[2] || "", c[3] || "", "", c[4] || c[5] || ""), this.j.push(c);
                else if (c = a[b].match(d)) c = new gn(c[1] || "", c[2] || "", "", c[3] || "", c[4] || ""), this.j.push(c)
            }
        }
    };
    jn = function (a) {
        return (0, _.Ma)(a.j, function (b) {
            var c = [b.o ? b.o + "." : "", b.name ? b.name : "anonymous", b.A, b.j ? " [as " + b.j + "]" : ""];
            if (b.w) {
                c.push(" at ");
                b = b.w;
                var d = "",
                    e = b.match(/(.*?)(:\d+(:\d+)?)$/);
                e && (b = e[1], d = e[2]);
                c.push(b.replace(window.location.href.replace(/#.*/, ""), "[page]").replace(/http.*?extern_js.*?\.js/, "[xjs]"));
                c.push(d)
            }
            return c.join("")
        })
    };
    kn = function (a, b, c, d, e) {
        _.hd.call(this, a, b, c, d, e);
        this.w = new hn(c)
    };
    _.v(kn, _.hd);
    kn.prototype.j = function () {
        kn.M.j.call(this);
        window.console && window.console.log && window.console.log("Stack: ", this.w)
    };
    kn.prototype.o = function (a) {
        var b = kn.M.o.call(this, a) + "&jsst=";
        var c = this.w;
        a -= b.length;
        if (4 > a) a = "";
        else if (0 == c.j.length) a = "none";
        else {
            c = jn(c);
            var d;
            var e = c.length - 2;
            for (d = _.Wj(c.join("\n")); 0 < e && d.length > a; e--, d = _.Wj(c.join("\n"))) e == c.length - 2 ? c[e] = "[...]" : c.splice(e, 1);
            a = d.substr(0, a)
        }
        return b + a
    };
    var ln = function (a, b, c) {
        _.I.call(this);
        this.o = a;
        this.w = b;
        this.A = c
    };
    _.n(ln, _.I);
    ln.prototype.j = function (a, b) {
        return new kn(this.o, this.w, a, this.A, b)
    };
    var mn = [1, 2, 3, 4],
        nn = function (a) {
            _.z(this, a, 0, -1, mn, null)
        };
    _.v(nn, _.y);
    var on = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    };
    var pn = function (a, b) {
        _.I.call(this);
        this.D = b;
        this.Y = 0;
        this.B = _.Sc(_.xc(a, 2, 1E-4), .001);
        this.A = _.Sc(_.xc(a, 10, 0), 0);
        this.U = _.L(_.A(a, 21), "");
        this.V = _.Sc(_.A(a, 4), 0);
        this.T = _.Sc(_.A(a, 5), -1);
        this.S = _.L(_.A(a, 7), "");
        this.N = _.L(_.A(a, 6), "");
        this.L = _.L(_.A(a, 8), "");
        this.H = _.A(a, 9);
        this.X = !!_.B(a, 11);
        this.P = !!_.B(a, 12);
        this.J = !!_.B(a, 15);
        this.W = _.B(a, 22);
        this.G = !!_.B(a, 16);
        this.o = null != _.A(a, 17) ? _.A(a, 17).split(",") : [];
        var c = Math.random();
        this.C = _.J(_.B(a, 1)) && c < this.B;
        this.w = _.J(_.B(a, 1)) && c < this.A;
        this.O =
            "og-" + on();
        if (this.C || this.w) {
            a = this.j = new _.kl(373, _.L(_.A(b, 5)));
            a.P = !0;
            _.gl(a, 1E3);
            this.j.V = !!_.Vf().navigator.sendBeacon && (_.nc || _.jc && _.ec(45));
            if (0 != this.o.length) {
                a = new nn;
                for (b = 0; b < this.o.length; b++) c = Number(this.o[b]), isNaN(c) || 0 == c || _.dn(a, 3, c);
                b = this.j;
                a ? (b.w || (b.w = new bn), a = a.o(), _.E(b.w, 4, a)) : b.w && _.E(b.w, 4, void 0)
            }
            _.Mf(this, this.j)
        }
    };
    _.v(pn, _.I);
    var qn = [1, 61];
    pn.prototype.log = function (a, b) {
        var c = !_.Oa(qn, a);
        if (c ? this.C : this.w) {
            b = (void 0 === b ? null : b) || new _.Bc;
            _.E(b, 1, a);
            var d = ++this.Y;
            _.E(b, 38, d);
            _.E(b, 2, this.V);
            _.E(b, 4, c ? this.B : this.A);
            _.E(b, 6, this.U);
            _.E(b, 3, this.T);
            _.E(b, 11, this.N);
            _.E(b, 10, this.S);
            _.E(b, 5, this.L);
            window.performance && window.performance.timing && _.E(b, 14, (new Date).getTime() - window.performance.timing.navigationStart);
            _.E(b, 13, this.H);
            _.E(b, 16, this.X);
            _.E(b, 17, this.P);
            _.E(b, 19, this.O);
            c = 0;
            _.B(this.D, 1) && (c |= 1);
            _.B(this.D, 3) && (c |= 4);
            _.E(b,
                12, c);
            _.E(b, 25, this.J);
            _.E(b, 26, this.G);
            1 === a && _.E(b, 51, this.W);
            a = new _.Tk;
            _.Vk(a, b.o());
            this.j.log(a)
        }
    };
    var rn, sn, un, vn, wn;
    rn = _.G(_.sd, $m, 16) || new $m;
    sn = _.ud() || new _.Ec;
    _.tn = new pn(rn, sn);
    un = _.td() || new _.Dc;
    wn = _.G(_.sd, _.Qc, 14) || new _.Qc;
    vn = _.A(wn, 9);
    var xn = _.xc(_.G(_.sd, _.id, 3) || new _.id, 2, .001);
    _.wd.o = new ln(un, vn, xn);
    _.wd.j = _.tn;

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.Rn = function (a, b) {
        b = b instanceof _.jb ? b : _.nb(b);
        a.href = _.kb(b)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var Tn;
    _.Sn = function (a, b) {
        return _.E(a, 27, b)
    };
    Tn = function (a, b) {
        b = b instanceof _.jb ? b : _.nb(b);
        a.action = _.kb(b)
    };
    _.Un = function (a) {
        _.z(this, a, 0, -1, null, null)
    };
    _.v(_.Un, _.y);
    _.Vn = function (a, b) {
        return _.E(a, 2, b)
    };
    var Wn = function (a, b, c) {
            this.groupId = a;
            this.C = "dp_" + a;
            this.D = "count_" + a;
            this.A = b;
            this.j = !!c
        },
        Xn = /google(?:.[a-z]{2,3}){1,2}$/i,
        Yn = function () {
            var a = _.p.location.hostname.match(Xn);
            return a && a[0] ? a[0] : null
        };
    Wn.prototype.Be = function () {
        return !!navigator.cookieEnabled
    };
    Wn.prototype.Ma = function (a) {
        this.Be() && this.Mc(!1, a)
    };
    Wn.prototype.accept = function (a) {
        this.Be() && this.Mc(!0, a)
    };
    Wn.prototype.Mc = function () {
        throw Error("da");
    };
    _.Zn = function (a) {
        0 < a.A && a.Be() && a.Dd(void 0, void 0)
    };
    Wn.prototype.Dd = function () {
        throw Error("da");
    };
    Wn.prototype.Ub = function () {
        return 0
    };
    Wn.prototype.$e = function () {
        return !1
    };
    _.$n = function (a, b, c, d, e) {
        Wn.call(this, b, c);
        this.o = e;
        this.w = !d || -2 == d || 31536E3 < d ? 31536E3 : d;
        this.B = new RegExp("\\b" + this.groupId + "-([0-9]+):")
    };
    _.v(_.$n, Wn);
    _.h = _.$n.prototype;
    _.h.Be = function () {
        navigator.cookieEnabled || (this.w = -1);
        return !0
    };
    _.h.Mc = function (a, b) {
        var c = _.Jj.get("OGP", ""),
            d = "-" + this.groupId + ":";
        (new RegExp(d)).test(c) || (c += d);
        (d = Yn()) && _.Jj.set("OGP", c, {se: this.w, path: "/", domain: d});
        this.o && this.o.Mc(a, b)
    };
    _.h.Dd = function (a) {
        var b = _.Jj.get("OGPC", ""),
            c = this.Ub(b),
            d = !0;
        -1 == c && (d = !1, c = 0);
        a = this.groupId + "-" + (c + (a || 1)) + ":";
        b = d ? b.replace(this.B, a) : (b ? b : "") + a;
        (d = Yn()) && _.Jj.set("OGPC", b, {se: this.w, path: "/", domain: d});
        this.o && this.o.Dd()
    };
    _.h.Ub = function (a) {
        var b = a || _.Jj.get("OGPC", "");
        a = -1;
        b && (b = b.match(this.B)) && 1 < b.length && (a = parseInt(b[1], 10) || 0);
        return a
    };
    _.h.$e = function () {
        return -1 != _.Jj.get("OGP", "").indexOf("-" + this.groupId + ":")
    };
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.ao = function () {
    };
    _.v(_.ao, _.Lj);
    _.ao.prototype.j = function () {
        var a = new XMLHttpRequest;
        if ("withCredentials" in a) return a;
        if ("undefined" != typeof XDomainRequest) return new bo;
        throw Error("ea");
    };
    _.ao.prototype.A = function () {
        return {}
    };
    var bo = function () {
        this.j = new XDomainRequest;
        this.readyState = 0;
        this.onreadystatechange = null;
        this.responseType = this.responseText = "";
        this.status = -1;
        this.statusText = "";
        this.j.onload = (0, _.q)(this.Vh, this);
        this.j.onerror = (0, _.q)(this.Yf, this);
        this.j.onprogress = (0, _.q)(this.Gi, this);
        this.j.ontimeout = (0, _.q)(this.Ni, this)
    };
    _.h = bo.prototype;
    _.h.open = function (a, b, c) {
        if (null != c && !c) throw Error("fa");
        this.j.open(a, b)
    };
    _.h.send = function (a) {
        if (a)
            if ("string" == typeof a) this.j.send(a);
            else throw Error("ga");
        else this.j.send()
    };
    _.h.abort = function () {
        this.j.abort()
    };
    _.h.setRequestHeader = function () {
    };
    _.h.getResponseHeader = function (a) {
        return "content-type" == a.toLowerCase() ? this.j.contentType : ""
    };
    _.h.Vh = function () {
        this.status = 200;
        this.responseText = this.j.responseText;
        co(this, 4)
    };
    _.h.Yf = function () {
        this.status = 500;
        this.responseText = "";
        co(this, 4)
    };
    _.h.Ni = function () {
        this.Yf()
    };
    _.h.Gi = function () {
        this.status = 200;
        co(this, 1)
    };
    var co = function (a, b) {
        a.readyState = b;
        if (a.onreadystatechange) a.onreadystatechange()
    };
    bo.prototype.getAllResponseHeaders = function () {
        return "content-type: " + this.j.contentType
    };
    var go = function () {
            _.P.call(this);
            this.o = "closure_frame" + eo++;
            this.w = [];
            fo[this.o] = this
        },
        ho;
    _.v(go, _.P);
    var fo = {},
        eo = 0,
        io = function (a, b) {
            var c = _.$f(a);
            _.qk(b, function (d, e) {
                Array.isArray(d) || (d = [d]);
                (0, _.Ka)(d, function (f) {
                    f = c.Ba("INPUT", {type: "hidden", name: e, value: f});
                    a.appendChild(f)
                })
            })
        };
    _.h = go.prototype;
    _.h.Ga = null;
    _.h.Ka = null;
    _.h.Gc = null;
    _.h.oj = 0;
    _.h.xc = !1;
    _.h.Ce = !1;
    _.h.re = null;
    _.h.Fc = null;
    _.h.send = function (a, b, c, d) {
        if (this.xc) throw Error("ha");
        a = new _.Am(a);
        b = b ? b.toUpperCase() : "GET";
        c && _.Rm(a, "zx", _.ym());
        ho || (ho = _.rg("FORM"), ho.acceptCharset = "utf-8", c = ho.style, c.position = "absolute", c.visibility = "hidden", c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = "hidden", document.body.appendChild(ho));
        this.Ga = ho;
        "GET" == b && io(this.Ga, a.j);
        d && io(this.Ga, d);
        d = this.Ga;
        a = a.toString();
        (0, _.ll)();
        Tn(d, new _.jb(_.hb, a));
        this.Ga.method = b;
        this.xc = !0;
        this.Gc = this.o + "_" + (this.oj++).toString(36);
        this.Ka = _.$f(this.Ga).Ba("IFRAME", {name: this.Gc, id: this.Gc});
        _.x && 7 > Number(_.dc) && Tn(this.Ka, new _.jb(_.hb, _.Ya(_.wm('javascript:""'))));
        d = this.Ka.style;
        d.visibility = "hidden";
        d.width = d.height = "10px";
        d.display = "none";
        _.Qb ? d.marginTop = d.marginLeft = "-10px" : (d.position = "absolute", d.top = d.left = "-10px");
        if (_.x && !_.ec("11")) {
            this.Ga.target = this.Gc || "";
            _.$f(this.Ga).j.body.appendChild(this.Ka);
            _.O(this.Ka, "readystatechange", this.lf, !1, this);
            try {
                this.j = !1, this.Ga.submit()
            } catch (t) {
                _.Gf(this.Ka, "readystatechange",
                    this.lf, !1, this), jo(this)
            }
        } else {
            _.$f(this.Ga).j.body.appendChild(this.Ka);
            d = this.Gc + "_inner";
            a = _.Rj(this.Ka);
            document.baseURI ? (b = _.ge(d), b = _.Db('<head><base href="' + _.ge(document.baseURI) + '"></head><body><iframe id="' + b + '" name="' + b + '"></iframe>', null)) : (b = _.ge(d), b = _.Db('<body><iframe id="' + b + '" name="' + b + '"></iframe>', null));
            _.Mb && !_.Qb ? _.Of(a.documentElement, b) : a.write(_.Cb(b));
            _.O(a.getElementById(d), "load", this.we, !1, this);
            var e = _.me("TEXTAREA", this.Ga);
            b = 0;
            for (c = e.length; b < c; b++) {
                var f = e[b].value,
                    g = [];
                _.vg(e[b], g, !1);
                g.join("") != f && (_.sg(e[b], f), e[b].value = f)
            }
            e = a.importNode(this.Ga, !0);
            e.target = d;
            e.action = this.Ga.action;
            a.body.appendChild(e);
            f = _.me("SELECT", this.Ga);
            g = _.me("SELECT", e);
            b = 0;
            for (c = f.length; b < c; b++)
                for (var k = _.me("OPTION", f[b]), l = _.me("OPTION", g[b]), m = 0, r = k.length; m < r; m++) l[m].selected = k[m].selected;
            f = _.me("INPUT", this.Ga);
            g = _.me("INPUT", e);
            b = 0;
            for (c = f.length; b < c; b++)
                if ("file" == f[b].type && f[b].value != g[b].value) {
                    this.Ga.target = d;
                    e = this.Ga;
                    break
                }
            try {
                this.j = !1, e.submit(), a.close(),
                _.Pb && _.dg(this.C, 250, this)
            } catch (t) {
                _.Gf(a.getElementById(d), "load", this.we, !1, this), a.close(), jo(this)
            }
        }
        ko(this)
    };
    _.h.abort = function () {
        if (this.xc) {
            var a = lo(this);
            if (a)
                if (_.pf(a)) a.Eb && _.Pf(a.Eb);
                else if (a = _.Cf(a)) {
                    var b = 0,
                        c;
                    for (c in a.j)
                        for (var d = a.j[c].concat(), e = 0; e < d.length; ++e) _.Hf(d[e]) && ++b
                }
            this.Ce = this.xc = !1;
            this.dispatchEvent("abort");
            mo(this)
        }
    };
    _.h.R = function () {
        this.xc && this.abort();
        go.M.R.call(this);
        this.Ka && no(this);
        ko(this);
        delete this.B;
        this.re = this.Ga = null;
        delete fo[this.o]
    };
    _.h.ne = function () {
        return this.Ce
    };
    _.h.Zd = function () {
        return this.re
    };
    _.h.Vf = function () {
        return _.Bk(this.re)
    };
    _.h.lf = function () {
        if ("complete" == this.Ka.readyState) {
            _.Gf(this.Ka, "readystatechange", this.lf, !1, this);
            try {
                var a = _.Rj(this.Ka);
                if (_.x && "about:blank" == a.location && !navigator.onLine) {
                    jo(this);
                    return
                }
            } catch (b) {
                jo(this);
                return
            }
            oo(this, a)
        }
    };
    _.h.we = function () {
        if (!_.Mb || _.Qb || "about:blank" != (this.Ka ? _.Rj(lo(this)) : null).location) {
            _.Gf(lo(this), "load", this.we, !1, this);
            try {
                oo(this, this.Ka ? _.Rj(lo(this)) : null)
            } catch (a) {
                jo(this)
            }
        }
    };
    var oo = function (a, b) {
            a.xc = !1;
            try {
                var c = b.body;
                a.re = c.textContent || c.innerText
            } catch (e) {
                var d = 1
            }
            d || "function" != typeof a.B || (b = a.B(b)) && (d = 4);
            d ? jo(a) : (a.Ce = !0, a.dispatchEvent("complete"), a.dispatchEvent("success"), mo(a))
        },
        jo = function (a) {
            a.j || (a.Ce = !1, a.xc = !1, a.dispatchEvent("complete"), a.dispatchEvent("error"), mo(a), a.j = !0)
        },
        mo = function (a) {
            no(a);
            ko(a);
            a.Ga = null;
            a.dispatchEvent("ready")
        },
        no = function (a) {
            var b = a.Ka;
            b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.w.push(b));
            a.Fc && (_.eg(a.Fc),
                a.Fc = null);
            _.Pb || _.Mb && !_.Qb ? a.Fc = _.dg(a.A, 2E3, a) : a.A();
            a.Ka = null;
            a.Gc = null
        };
    go.prototype.A = function () {
        this.Fc && (_.eg(this.Fc), this.Fc = null);
        for (; 0 != this.w.length;) {
            var a = this.w.pop();
            _.we(a)
        }
    };
    var ko = function (a) {
            a.Ga && a.Ga == ho && _.ve(a.Ga)
        },
        lo = function (a) {
            return a.Ka ? _.x && !_.ec("11") ? a.Ka : _.Rj(a.Ka).getElementById(a.Gc + "_inner") : null
        };
    go.prototype.C = function () {
        if (this.xc) {
            var a = this.Ka ? _.Rj(lo(this)) : null;
            a && !_.kf(a, "documentUri") ? (_.Gf(lo(this), "load", this.we, !1, this), jo(this)) : _.dg(this.C, 250, this)
        }
    };
    var po;
    po = window.location.protocol + "//www.google.com/_/og/promos/";
    _.qo = function (a, b, c, d, e, f, g) {
        var k = {};
        k.p = c;
        k.g = b;
        k.a = d;
        k.at = e;
        k.eid = f;
        k.pid = 1;
        if (g) k.t = g;
        else return a.log(Error("ia")), null;
        return k
    };
    _.ro = function (a, b, c) {
        if (a) {
            var d = [po, c ? "g" : "z"];
            c && b && d.push(["?authuser=", b].join(""));
            b = d.join("");
            try {
                _.Mj = new _.ao;
                c = [];
                for (var e in a) a.hasOwnProperty(e) && c.push(e + "=" + a[e]);
                _.Ik(b, null, "POST", c.join("&"), null, void 0, !0)
            } catch (f) {
                e = new go, _.O(e, "ready", e.ta, !1, e), e.send(b, "POST", !1, a)
            }
        }
    };
    var so = function (a, b, c, d, e, f, g, k) {
        Wn.call(this, b, c);
        this.o = a;
        g || k ? (this.w = d, this.G = e, this.B = g || k || "", this.J = !!k, this.H = f) : a.log(Error("ja"))
    };
    _.v(so, Wn);
    so.prototype.Mc = function (a, b) {
        a ? (a = this.G, (b = _.qo(this.o, this.groupId, this.w, "a", 3, b || "", this.B)) && (b.u = a)) : (a = this.G, (b = _.qo(this.o, this.groupId, this.w, "d", 2, b || "", this.B)) && (b.u = a));
        _.ro(b, this.H, this.J)
    };
    so.prototype.Dd = function (a, b) {
        a = a || 1;
        (b = _.qo(this.o, this.groupId, this.w, "i", 1, b || "", this.B)) && (b.c = a);
        _.ro(b, this.H, this.J)
    };
    var to = function (a, b, c, d, e) {
        Wn.call(this, b, c, e);
        this.w = a;
        this.o = d
    };
    _.v(to, Wn);
    to.prototype.Mc = function () {
        this.w.rf(this.o, this.C, "1", this.j)
    };
    to.prototype.Dd = function (a) {
        a = this.Ub() + (a || 1);
        this.w.rf(this.o, this.D, a.toString(), this.j)
    };
    to.prototype.$e = function () {
        return !!this.w.Oe(this.o, this.C, this.j)
    };
    to.prototype.Ub = function () {
        var a = this.w.Oe(this.o, this.D, this.j);
        return parseInt(a || 0, 10)
    };
    _.uo = function (a, b, c, d, e, f, g, k, l, m, r) {
        if (m || r) try {
            var t = new so(a, e, f, g, k, c, m, r)
        } catch (F) {
            t = null
        } else t = null;
        switch (d) {
            case 2:
            case 6:
                return t;
            case 1:
                return new to(b, e, f, l, void 0);
            default:
                return new _.$n(a, e, f, k)
        }
    };
    var vo, wo;
    vo = function (a) {
        switch (a) {
            case "i":
                return 36;
            case "x":
                return 37;
            case "n":
                return 37;
            case "a":
                return 38;
            case "d":
                return 37;
            case "ed":
                return 37;
            case "end":
                return 38;
            case "ec":
                return 38;
            case "er_em":
                return 72;
            case "rl":
                return 77;
            case "lc":
                return 111;
            case "hc":
                return 112;
            default:
                return 0
        }
    };
    wo = function (a) {
        var b = new _.Bc;
        switch (a) {
            case "x":
                _.E(b, 28, 1);
                break;
            case "n":
                _.E(b, 28, 2);
                break;
            case "a":
                _.E(b, 29, 1);
                break;
            case "er_em":
                _.E(b, 30, 1);
                break;
            case "ed":
                _.E(b, 28, 3);
                break;
            case "end":
                _.E(b, 29, 3);
                break;
            case "ec":
                _.E(b, 29, 3)
        }
        return b
    };
    _.xo = function (a, b, c, d, e, f, g, k, l, m) {
        var r = vo(b);
        if (0 !== r) {
            b = wo(b);
            _.E(b, 34, g);
            _.E(b, 48, k);
            _.E(b, 31, c);
            _.E(b, 39, e);
            c = _.Vn(new _.Un, d);
            36 === r && _.E(c, 1, l);
            _.H(b, 50, c);
            if (f) {
                l = !1;
                try {
                    var t = f.getBoundingClientRect()
                } catch (F) {
                    _.E(b, 49, 1), l = !0
                }
                null != t && (_.E(b, 43, t.top), _.E(b, 44, t.bottom), _.E(b, 45, t.left), _.E(b, 46, t.right));
                null != t && 0 !== t.top - t.bottom || l || (document.body.contains(f) ? _.ze(f, function (F) {
                    return _.xe(F) && "none" == F.style.display
                }) && _.E(b, 49, 3) : _.E(b, 49, 2))
            }
            null != m && _.Sn(b, m);
            a.log(r, b)
        }
    };
    _.yo = function () {
        this.yb = null;
        this.j = !1
    };
    _.va(_.yo);

} catch (e) {
    _._DumpException(e)
}
try {
    var Qp = function (a) {
            _.z(this, a, 0, -1, null, null)
        },
        Sp;
    _.v(Qp, _.y);
    _.Rp = function (a, b) {
        this.o = a;
        this.j = b
    };
    _.Rp.prototype.log = function (a, b) {
        b = void 0 === b ? new _.Bc : b;
        Sp(this, a, b)
    };
    _.Tp = function (a, b, c) {
        c = void 0 === c ? new _.Bc : c;
        var d = a.j ? 103 : 14;
        _.E(c, 18, b);
        Sp(a, d, c)
    };
    _.Up = function (a, b, c) {
        c = void 0 === c ? new _.Bc : c;
        var d = a.j ? 94 : 8,
            e = new Qp;
        _.E(e, 1, b);
        _.H(c, 47, e);
        Sp(a, d, c)
    };
    Sp = function (a, b, c) {
        var d = _.G(c, Qp, 47) || new Qp;
        _.H(c, 47, d);
        a.o.log(b, c)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var eq, oq, tq, yq, zq, Bq, Cq, Eq;
    _.cq = function (a, b) {
        return _.Db(a, b)
    };
    _.dq = function (a) {
        if (a instanceof _.Bb) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.Ve && (c = a.j());
        return _.cq(_.de(b && a.Pb ? a.Fb() : String(a)), c)
    };
    eq = function (a) {
        var b = _.dq(_.Eb),
            c = b.j(),
            d = [],
            e = function (f) {
                Array.isArray(f) ? (0, _.Ka)(f, e) : (f = _.dq(f), d.push(_.Cb(f).toString()), f = f.j(), 0 == c ? c = f : 0 != f && c != f && (c = null))
            };
        (0, _.Ka)(a, e);
        return _.cq(d.join(_.Cb(b).toString()), c)
    };
    _.fq = function (a) {
        return eq(Array.prototype.slice.call(arguments))
    };
    _.gq = function (a, b) {
        var c = _.qe(a, "DIV");
        _.x ? (b = _.fq(_.Fb, b), _.Of(c, b), c.removeChild(c.firstChild)) : _.Of(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    };
    _.hq = function (a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.hq.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.hq.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.hq.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.iq = function (a) {
        return new _.hq(a.x, a.y)
    };
    _.jq = function (a) {
        return a.scrollingElement ? a.scrollingElement : !_.Qb && _.Tf(a) ? a.documentElement : a.body || a.documentElement
    };
    _.kq = function (a) {
        var b = _.jq(a);
        a = a.parentWindow || a.defaultView;
        return _.x && _.ec("10") && a.pageYOffset != b.scrollTop ? new _.hq(b.scrollLeft, b.scrollTop) : new _.hq(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    };
    _.lq = function (a) {
        a = a.j;
        return a.parentWindow || a.defaultView
    };
    _.mq = function (a) {
        return "rtl" == _.Ag(a, "direction")
    };
    _.nq = function (a) {
        for (var b in a) return !1;
        return !0
    };
    oq = function (a, b) {
        return new _.hq(a.x - b.x, a.y - b.y)
    };
    _.pq = function (a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.h = _.pq.prototype;
    _.h.getHeight = function () {
        return this.bottom - this.top
    };
    _.h.expand = function (a, b, c, d) {
        _.za(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    _.h.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.h.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.h.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    _.qq = function (a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    _.qq.prototype.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.qq.prototype.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.qq.prototype.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.rq = function (a, b, c) {
        if (b instanceof _.hq) {
            var d = b.x;
            b = b.y
        } else d = b, b = c;
        a.style.left = _.Cg(d, !1);
        a.style.top = _.Cg(b, !1)
    };
    _.sq = function (a) {
        a = a ? _.ye(a) : document;
        return !_.x || _.gc(9) || _.Tf(_.$f(a).j) ? a.documentElement : a.body
    };
    tq = function (a) {
        if (_.x && !_.gc(8)) return a.offsetParent;
        var b = _.ye(a),
            c = _.Ag(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = _.Ag(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    _.uq = function (a) {
        var b = _.ye(a),
            c = new _.hq(0, 0),
            d = _.sq(b);
        if (a == d) return c;
        a = _.Bg(a);
        b = _.kq(_.$f(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    _.vq = function (a) {
        for (var b = new _.pq(0, Infinity, Infinity, 0), c = _.$f(a), d = c.j.body, e = c.j.documentElement, f = _.jq(c.j); a = tq(a);)
            if (!(_.x && 0 == a.clientWidth || _.Qb && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != _.Ag(a, "overflow")) {
                var g = _.uq(a),
                    k = new _.hq(a.clientLeft, a.clientTop);
                g.x += k.x;
                g.y += k.y;
                b.top = Math.max(b.top, g.y);
                b.right = Math.min(b.right, g.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                b.left = Math.max(b.left, g.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top =
            Math.max(b.top, f);
        c = _.Uf(_.lq(c));
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    };
    _.wq = function (a) {
        a = _.Bg(a);
        return new _.hq(a.left, a.top)
    };
    _.xq = function (a, b) {
        a.style.display = b ? "" : "none"
    };
    yq = function (a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    };
    zq = function (a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? yq(a, b) : 0
    };
    _.Aq = function (a, b) {
        if (_.x) {
            var c = zq(a, b + "Left"),
                d = zq(a, b + "Right"),
                e = zq(a, b + "Top");
            a = zq(a, b + "Bottom");
            return new _.pq(e, d, a, c)
        }
        c = _.zg(a, b + "Left");
        d = _.zg(a, b + "Right");
        e = _.zg(a, b + "Top");
        a = _.zg(a, b + "Bottom");
        return new _.pq(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
    };
    Bq = {thin: 2, medium: 4, thick: 6};
    Cq = function (a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Bq ? Bq[b] : yq(a, b)
    };
    _.Dq = function (a) {
        if (_.x && !_.gc(9)) {
            var b = Cq(a, "borderLeft"),
                c = Cq(a, "borderRight"),
                d = Cq(a, "borderTop");
            a = Cq(a, "borderBottom");
            return new _.pq(d, c, a, b)
        }
        b = _.zg(a, "borderLeftWidth");
        c = _.zg(a, "borderRightWidth");
        d = _.zg(a, "borderTopWidth");
        a = _.zg(a, "borderBottomWidth");
        return new _.pq(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };
    Eq = function () {
        if (_.Sb) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(_.sb)) ? a[1] : "0"
        }
        return _.Rb ? (a = /10[_.][0-9_.]+/, (a = a.exec(_.sb)) ? a[0].replace(/_/g, ".") : "10") : _.Ub ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(_.sb)) ? a[1] : "") : _.Vb || _.Wb || _.Xb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(_.sb)) ? a[1].replace(/_/g, ".") : "") : ""
    }();
    var Fq = function (a) {
            return (a = a.exec(_.sb)) ? a[1] : ""
        },
        Gq = function () {
            if (_.jc) return Fq(/Firefox\/([0-9.]+)/);
            if (_.x || _.Nb || _.Mb) return _.dc;
            if (_.nc) return _.Ib() ? Fq(/CriOS\/([0-9.]+)/) : Fq(/Chrome\/([0-9.]+)/);
            if (_.oc && !_.Ib()) return Fq(/Version\/([0-9.]+)/);
            if (_.kc || _.lc) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.sb);
                if (a) return a[1] + "." + a[2]
            } else if (_.mc) return (a = Fq(/Android\s+([0-9.]+)/)) ? a : Fq(/Version\/([0-9.]+)/);
            return ""
        }();
    var Hq;
    _.Jq = function (a, b, c, d, e, f, g, k, l) {
        var m;
        if (m = c.offsetParent) {
            var r = "HTML" == m.tagName || "BODY" == m.tagName;
            if (!r || "static" != _.Ag(m, "position")) {
                var t = _.uq(m);
                if (!r) {
                    r = _.mq(m);
                    var F;
                    if (F = r) {
                        if (F = _.oc) F = 0 <= _.gb(Gq, 10);
                        var D;
                        if (D = _.Yb) D = 0 <= _.gb(Eq, 10);
                        F = _.Pb || F || D
                    }
                    r = F ? -m.scrollLeft : !r || _.Ob && _.ec("8") || "visible" == _.Ag(m, "overflowX") ? m.scrollLeft : m.scrollWidth - m.clientWidth - m.scrollLeft;
                    t = oq(t, new _.hq(r, m.scrollTop))
                }
            }
        }
        m = t || new _.hq;
        t = _.uq(a);
        r = _.Eg(a);
        t = new _.qq(t.x, t.y, r.width, r.height);
        if (r = _.vq(a)) {
            var R = new _.qq(r.left,
                r.top, r.right - r.left, r.bottom - r.top);
            r = Math.max(t.left, R.left);
            F = Math.min(t.left + t.width, R.left + R.width);
            r <= F && (D = Math.max(t.top, R.top), R = Math.min(t.top + t.height, R.top + R.height), D <= R && (t.left = r, t.top = D, t.width = F - r, t.height = R - D))
        }
        r = _.$f(a);
        D = _.$f(c);
        if (r.j != D.j) {
            F = r.j.body;
            D = _.lq(D);
            R = new _.hq(0, 0);
            var K = _.Vf(_.ye(F));
            if (_.kf(K, "parent")) {
                var ea = F;
                do {
                    var Nc = K == D ? _.uq(ea) : _.wq(ea);
                    R.x += Nc.x;
                    R.y += Nc.y
                } while (K && K != D && K != K.parent && (ea = K.frameElement) && (K = K.parent))
            }
            F = oq(R, _.uq(F));
            !_.x || _.gc(9) || _.Tf(r.j) ||
            (F = oq(F, _.kq(r.j)));
            t.left += F.x;
            t.top += F.y
        }
        a = Hq(a, b);
        b = t.left;
        a & 4 ? b += t.width : a & 2 && (b += t.width / 2);
        b = new _.hq(b, t.top + (a & 1 ? t.height : 0));
        b = oq(b, m);
        e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
        if (g)
            if (l) var wa = l;
            else if (wa = _.vq(c)) wa.top -= m.y, wa.right -= m.x, wa.bottom -= m.y, wa.left -= m.x;
        return _.Iq(b, c, d, f, wa, g, k)
    };
    _.Iq = function (a, b, c, d, e, f, g) {
        a = _.iq(a);
        var k = Hq(b, c);
        c = _.Eg(b);
        g = g ? _.lg(g) : _.lg(c);
        a = _.iq(a);
        g = _.lg(g);
        var l = 0;
        if (d || 0 != k) k & 4 ? a.x -= g.width + (d ? d.right : 0) : k & 2 ? a.x -= g.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (f) {
            if (e) {
                d = a;
                k = g;
                l = 0;
                65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                d.x < e.left && f & 1 && (d.x = e.left, l |= 1);
                if (f & 16) {
                    var m = d.x;
                    d.x < e.left && (d.x = e.left, l |= 4);
                    d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width -
                        e.left), k.width = Math.max(k.width, 0), l |= 4)
                }
                d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                d.y < e.top && f & 4 && (d.y = e.top, l |= 2);
                f & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
                d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
                f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                e = l
            } else e = 256;
            l = e
        }
        f =
            new _.qq(0, 0, 0, 0);
        f.left = a.x;
        f.top = a.y;
        f.width = g.width;
        f.height = g.height;
        e = l;
        if (e & 496) return e;
        _.rq(b, new _.hq(f.left, f.top));
        g = new _.le(f.width, f.height);
        _.qg(c, g) || (c = g, g = _.Tf(_.$f(_.ye(b)).j), !_.x || _.ec("10") || g && _.ec("8") ? (b = b.style, _.Pb ? b.MozBoxSizing = "border-box" : _.Qb ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (a = b.style, g ? (g = _.Aq(b, "padding"), b = _.Dq(b), a.pixelWidth = c.width - b.left - g.left - g.right - b.right, a.pixelHeight =
            c.height - b.top - g.top - g.bottom - b.bottom) : (a.pixelWidth = c.width, a.pixelHeight = c.height)));
        return e
    };
    Hq = function (a, b) {
        return (b & 8 && _.mq(a) ? b ^ 4 : b) & -9
    };
    _.Kq = function (a) {
        _.P.call(this);
        this.j = a;
        a = _.x ? "focusout" : "blur";
        this.o = _.O(this.j, _.x ? "focusin" : "focus", this, !_.x);
        this.w = _.O(this.j, a, this, !_.x)
    };
    _.v(_.Kq, _.P);
    _.Kq.prototype.handleEvent = function (a) {
        var b = new _.mf(a.Ya);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(b)
    };
    _.Kq.prototype.R = function () {
        _.Kq.M.R.call(this);
        _.Hf(this.o);
        _.Hf(this.w);
        delete this.j
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var Vq = function (a, b) {
        _.P.call(this);
        this.w = new _.Ig(this);
        this.Ae(a || null);
        b && (this.Sc = b)
    };
    _.v(Vq, _.P);
    _.h = Vq.prototype;
    _.h.wb = null;
    _.h.Bf = null;
    _.h.Uc = !1;
    _.h.ef = -1;
    _.h.Sc = "toggle_display";
    _.h.F = function () {
        return this.wb
    };
    _.h.Ae = function (a) {
        if (this.Uc) throw Error("ra");
        this.wb = a
    };
    _.h.isVisible = function () {
        return this.Uc
    };
    _.h.Nb = function (a) {
        this.O && this.O.stop();
        this.H && this.H.stop();
        if (a) {
            if (!this.Uc && this.kf()) {
                if (!this.wb) throw Error("sa");
                this.Ad();
                a = _.ye(this.wb);
                this.w.K(a, "mousedown", this.Bg, !0);
                if (_.x) {
                    try {
                        var b = a.activeElement
                    } catch (d) {
                    }
                    for (; b && "IFRAME" == b.nodeName;) {
                        try {
                            var c = _.Rj(b)
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.w.K(a, "mousedown", this.Bg, !0);
                    this.w.K(a, "deactivate", this.Ag)
                } else this.w.K(a, "blur", this.Ag);
                "toggle_display" == this.Sc ? (this.wb.style.visibility = "visible", _.xq(this.wb, !0)) : "move_offscreen" ==
                    this.Sc && this.Ad();
                this.Uc = !0;
                this.ef = (0, _.Fa)();
                this.O ? (_.zf(this.O, "end", this.ag, !1, this), this.O.play()) : this.ag()
            }
        } else Wq(this)
    };
    _.h.Ad = _.ua;
    var Wq = function (a, b) {
        a.Uc && a.dispatchEvent({
            type: "beforehide",
            target: b
        }) && (a.w && _.Mg(a.w), a.Uc = !1, (0, _.Fa)(), a.H ? (_.zf(a.H, "end", _.Qd(a.Ff, b), !1, a), a.H.play()) : a.Ff(b))
    };
    _.h = Vq.prototype;
    _.h.Ff = function (a) {
        "toggle_display" == this.Sc ? this.Vi() : "move_offscreen" == this.Sc && (this.wb.style.top = "-10000px");
        this.Qe(a)
    };
    _.h.Vi = function () {
        this.wb.style.visibility = "hidden";
        _.xq(this.wb, !1)
    };
    _.h.kf = function () {
        return this.dispatchEvent("beforeshow")
    };
    _.h.ag = function () {
        this.dispatchEvent("show")
    };
    _.h.Qe = function (a) {
        this.dispatchEvent({type: "hide", target: a})
    };
    _.h.Bg = function (a) {
        a = a.target;
        _.Xf(this.wb, a) || Xq(this, a) || 150 > (0, _.Fa)() - this.ef || Wq(this, a)
    };
    _.h.Ag = function (a) {
        var b = _.ye(this.wb);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement, !a || _.Xf(this.wb, a) || "BODY" == a.tagName || Xq(this, a)) return
        } else if (a.target != b) return;
        150 > (0, _.Fa)() - this.ef || Wq(this)
    };
    var Xq = function (a, b) {
        return (0, _.Na)(a.Bf || [], function (c) {
            return b === c || _.Xf(c, b)
        })
    };
    Vq.prototype.R = function () {
        Vq.M.R.call(this);
        this.w.ta();
        _.Lf(this.O);
        _.Lf(this.H);
        delete this.wb;
        delete this.w;
        delete this.Bf
    };
    var Yq = function () {
    };
    Yq.prototype.j = function () {
    };
    var Zq = function (a, b, c) {
        this.o = a;
        this.w = b;
        this.A = c
    };
    _.v(Zq, Yq);
    Zq.prototype.j = function (a, b, c) {
        _.Jq(this.o, this.w, a, b, void 0, c, this.A)
    };
    var $q = function (a, b) {
        this.ha = 8;
        this.U = b || void 0;
        Vq.call(this, a)
    };
    _.v($q, Vq);
    $q.prototype.Ad = function () {
        if (this.U) {
            var a = !this.isVisible() && "move_offscreen" != this.Sc,
                b = this.F();
            a && (b.style.visibility = "hidden", _.xq(b, !0));
            this.U.j(b, this.ha, this.wa);
            a && _.xq(b, !1)
        }
    };
    var ar = function (a, b) {
        this.o = a instanceof _.hq ? a : new _.hq(a, b)
    };
    _.v(ar, Yq);
    ar.prototype.j = function (a, b, c) {
        _.Jq(_.sq(a), 0, a, b, this.o, c, null, void 0)
    };
    var br = function () {
            this.j = new _.Sj
        },
        cr = function (a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + _.Ca(a) : b.charAt(0) + a
        };
    _.h = br.prototype;
    _.h.add = function (a) {
        this.j.set(cr(a), a)
    };
    _.h.remove = function (a) {
        return this.j.remove(cr(a))
    };
    _.h.clear = function () {
        this.j.clear()
    };
    _.h.zc = function () {
        return this.j.zc()
    };
    _.h.Pa = function () {
        return this.j.Pa()
    };
    var dr = function (a, b, c) {
        this.G = c || (a ? _.$f(_.Sf(document, a)) : _.$f());
        $q.call(this, this.G.Ba("DIV", {style: "position:absolute;display:none;"}));
        this.S = new _.hq(1, 1);
        this.C = new br;
        this.B = null;
        a && (a = _.Sf(document, a), this.C.add(a), _.O(a, "mouseover", this.Z, !1, this), _.O(a, "mouseout", this.L, !1, this), _.O(a, "mousemove", this.W, !1, this), _.O(a, "focus", this.V, !1, this), _.O(a, "blur", this.L, !1, this));
        null != b && _.sg(this.F(), b)
    };
    _.v(dr, $q);
    var er = [];
    dr.prototype.o = null;
    dr.prototype.className = "gb_Aa-gb_4e";
    dr.prototype.Ae = function (a) {
        var b = this.F();
        b && _.we(b);
        dr.M.Ae.call(this, a);
        a ? (b = this.G.j.body, b.insertBefore(a, b.lastChild), _.Lf(this.B), this.B = new _.Kq(this.F()), _.Mf(this, this.B), _.O(this.B, "focusin", this.D, void 0, this), _.O(this.B, "focusout", this.P, void 0, this)) : (_.Lf(this.B), this.B = null)
    };
    var fr = function (a) {
        return a.A ? a.isVisible() ? 4 : 1 : a.J ? 3 : a.isVisible() ? 2 : 0
    };
    dr.prototype.kf = function () {
        if (!Vq.prototype.kf.call(this)) return !1;
        if (this.j)
            for (var a, b = 0; a = er[b]; b++) _.Xf(a.F(), this.j) || a.Nb(!1);
        _.Oa(er, this) || er.push(this);
        a = this.F();
        a.className = this.className;
        this.D();
        _.O(a, "mouseover", this.sa, !1, this);
        _.O(a, "mouseout", this.ka, !1, this);
        gr(this);
        return !0
    };
    dr.prototype.Qe = function () {
        _.hf(er, this);
        for (var a = this.F(), b, c = 0; b = er[c]; c++) b.j && _.Xf(a, b.j) && b.Nb(!1);
        this.$ && this.$.P();
        _.Gf(a, "mouseover", this.sa, !1, this);
        _.Gf(a, "mouseout", this.ka, !1, this);
        this.j = void 0;
        0 == fr(this) && (this.N = !1);
        Vq.prototype.Qe.call(this)
    };
    dr.prototype.Y = function (a, b) {
        this.j == a && _.Vj(this.C.j, cr(this.j)) && (this.N || !this.ya ? (this.Nb(!1), this.isVisible() || (this.j = a, this.U = b || this.T(0) || void 0, this.isVisible() && this.Ad(), this.Nb(!0))) : this.j = void 0);
        this.A = void 0
    };
    dr.prototype.ma = function (a) {
        this.J = void 0;
        if (a == this.j) {
            a = this.G;
            var b;
            a = (b = _.Yf(a.j)) && this.F() && a.Wf(this.F(), b);
            null != this.o && (this.o == this.F() || _.Vj(this.C.j, cr(this.o))) || a || this.X && this.X.o || this.Nb(!1)
        }
    };
    var hr = function (a, b) {
        var c = _.kq(a.G.j);
        a.S.x = b.clientX + c.x;
        a.S.y = b.clientY + c.y
    };
    dr.prototype.Z = function (a) {
        var b = ir(this, a.target);
        this.o = b;
        this.D();
        b != this.j && (this.j = b, this.A || (this.A = _.dg((0, _.q)(this.Y, this, b, void 0), 500)), jr(this), hr(this, a))
    };
    var ir = function (a, b) {
        try {
            for (; b && !_.Vj(a.C.j, cr(b));) b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    };
    dr.prototype.W = function (a) {
        hr(this, a);
        this.N = !0
    };
    dr.prototype.V = function (a) {
        this.o = a = ir(this, a.target);
        this.N = !0;
        if (this.j != a) {
            this.j = a;
            var b = this.T(1);
            this.D();
            this.A || (this.A = _.dg((0, _.q)(this.Y, this, a, b), 500));
            jr(this)
        }
    };
    dr.prototype.T = function (a) {
        return 0 == a ? new kr(_.iq(this.S)) : new lr(this.o)
    };
    var jr = function (a) {
        if (a.j)
            for (var b, c = 0; b = er[c]; c++) _.Xf(b.F(), a.j) && (b.X = a, a.$ = b)
    };
    dr.prototype.L = function (a) {
        var b = ir(this, a.target),
            c = ir(this, a.relatedTarget);
        b != c && (b == this.o && (this.o = null), gr(this), this.N = !1, !this.isVisible() || a.relatedTarget && _.Xf(this.F(), a.relatedTarget) ? this.j = void 0 : this.P())
    };
    dr.prototype.sa = function () {
        var a = this.F();
        this.o != a && (this.D(), this.o = a)
    };
    dr.prototype.ka = function (a) {
        var b = this.F();
        this.o != b || a.relatedTarget && _.Xf(b, a.relatedTarget) || (this.o = null, this.P())
    };
    var gr = function (a) {
        a.A && (_.eg(a.A), a.A = void 0)
    };
    dr.prototype.P = function () {
        2 == fr(this) && (this.J = _.dg((0, _.q)(this.ma, this, this.j), 0))
    };
    dr.prototype.D = function () {
        this.J && (_.eg(this.J), this.J = void 0)
    };
    dr.prototype.R = function () {
        var a;
        this.Nb(!1);
        gr(this);
        for (var b = this.C.Pa(), c = 0; a = b[c]; c++) _.Gf(a, "mouseover", this.Z, !1, this), _.Gf(a, "mouseout", this.L, !1, this), _.Gf(a, "mousemove", this.W, !1, this), _.Gf(a, "focus", this.V, !1, this), _.Gf(a, "blur", this.L, !1, this);
        this.C.clear();
        this.F() && _.we(this.F());
        this.o = null;
        delete this.G;
        dr.M.R.call(this)
    };
    var kr = function (a, b) {
        ar.call(this, a, b)
    };
    _.v(kr, ar);
    kr.prototype.j = function (a, b, c) {
        b = _.sq(a);
        b = _.vq(b);
        c = c ? new _.pq(c.top + 10, c.right, c.bottom, c.left + 10) : new _.pq(10, 0, 0, 10);
        _.Iq(this.o, a, 8, c, b, 9) & 496 && _.Iq(this.o, a, 8, c, b, 5)
    };
    var lr = function (a) {
        Zq.call(this, a, 5)
    };
    _.v(lr, Zq);
    lr.prototype.j = function (a, b, c) {
        var d = new _.hq(10, 0);
        _.Jq(this.o, this.w, a, b, d, c, 9) & 496 && _.Jq(this.o, 4, a, 1, d, c, 5)
    };
    _.mr = function (a, b) {
        dr.call(this, a);
        this.className = "gb_4e";
        this.Ae(b);
        this.ha = 2;
        this.isVisible() && this.Ad()
    };
    _.n(_.mr, dr);
    _.mr.prototype.T = function () {
        return new nr(this.o)
    };
    _.mr.prototype.Nb = function (a) {
        a || gr(this);
        return dr.prototype.Nb.call(this, a)
    };
    var nr = function (a) {
        Zq.call(this, a, 3)
    };
    _.n(nr, Zq);
    nr.prototype.j = function (a, b, c) {
        var d = new _.hq(0, 0),
            e = _.Uf();
        _.Jq(this.o, this.w, a, b, d, c, 9, void 0, new _.pq(0, e.width - 8, e.height, 8)) & 496 && _.Jq(this.o, 4, a, 1, d, c, 5)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var Gt, Ht;
    Gt = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    Ht = function (a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
            var e = c[d];
            e = Array.isArray(e) ? e : [e];
            for (var f = 0; f < e.length; f++) {
                var g = e[f];
                null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
            }
        }
        return b
    };
    _.It = function (a, b) {
        a = _.cb(a);
        a = Gt.exec(a);
        var c = a[3] || "";
        return _.db(a[1] + Ht("?", a[2] || "", b) + Ht("#", c, void 0))
    };
    _.Jt = function (a) {
        return a instanceof _.Am ? new _.Am(a) : new _.Am(a, void 0)
    };
    var Kt = function () {
    };
    var Lt = function (a) {
        this.j = a || {}
    };
    _.v(Lt, Kt);
    var Ot = function () {
            Mt || (Mt = new Lt, -1 == _.sb.toLowerCase().indexOf("webkit") || _.w("Edge") ? _.wb() ? Nt("-moz-") : _.vb() ? Nt("-ms-") : _.w("Opera") && Nt("-o-") : Nt("-webkit-"), Mt.j.is_rtl = !1);
            var a = Mt.j.is_rtl;
            return !(null == a || !a)
        },
        Nt = function (a) {
            Mt.j.css3_prefix = a
        };
    var Mt = null;
    var Qt, Rt, St, Tt, Pt;
    _.Ut = function (a) {
        if (null == a) return "";
        if (!Pt.test(a)) return a;
        -1 != a.indexOf("&") && (a = a.replace(Qt, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Rt, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(St, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Tt, "&quot;"));
        return a
    };
    Qt = /&/g;
    Rt = /</g;
    St = />/g;
    Tt = /"/g;
    Pt = /[&<>"]/;
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.Vt = function (a) {
        var b = a.match(/\bhref="/g);
        if (!b || 1 >= b.length) return a;
        var c = new _.Am;
        a = a.replace(/\bhref="(.*?)"/g, function (d, e) {
            d = _.Jt(e);
            c.w || _.Bm(c, d.w);
            c.o || _.Cm(c, d.o);
            c.A || _.Em(c, d.A);
            c.B || _.Hm(c, d.B);
            e = _.ia(d.j.mb());
            for (var f = e.next(); !f.done; f = e.next()) f = f.value, _.Wm(c.j, f) || _.Xm(c.j, f, d.j.Pa(f));
            return ""
        });
        a = a.replace(/\s\s+/g, " ").replace(/\s+$/g, "");
        return a + ' href="' + c.toString() + '"'
    };
    _.Wt = function (a) {
        return "" === a ? "" : ' class="' + (" " === a.charAt(a.length - 1) ? a.slice(0, -1) : a) + '"'
    };
    _.Xt = function (a) {
        return "" !== a ? ' style="' + a + '"' : ""
    };
    var Yt = function (a) {
            this.j = a = void 0 === a ? document : a;
            this.w = null;
            this.o = []
        },
        Zt;
    Yt.prototype.document = function () {
        return this.j
    };
    Zt = function (a) {
        var b = a.j.createElement("STYLE");
        a.j.head ? a.j.head.appendChild(b) : a.j.body.appendChild(b);
        return b
    };
    _.$t = function (a) {
        if (!a.j || 0 == a.o.length) return "";
        var b = a.o.join("");
        if (_.x) {
            a.w || (a.w = Zt(a));
            var c = a.w
        } else c = Zt(a);
        c.styleSheet && !c.sheet ? c.styleSheet.cssText += b : c.textContent += b;
        a.o.length = 0;
        return ""
    };
    _.au = function () {
        var a = void 0 === a ? document : a;
        var b = void 0 === b ? new Yt(a) : b;
        this.B = a;
        this.w = b;
        new function () {
        };
        this.o = {};
        this.j = [Ot()]
    };
    _.au.prototype.document = function () {
        return this.B
    };
    _.bu = function (a, b, c, d, e, f, g, k, l, m, r) {
        if (!Array.isArray(c)) {
            var t = [],
                F;
            for (F in c) t[c[F]] = F;
            c = t
        }
        a.o[b] = {
            kb: c,
            El: d,
            Fl: e,
            Ll: void 0 === f ? null : f,
            Hl: void 0 === g ? null : g,
            Ml: void 0 === k ? "" : k,
            Il: void 0 === l ? null : l,
            Nl: "",
            Jl: void 0 === m ? null : m,
            Ol: "",
            Kl: void 0 === r ? null : r,
            Gl: !0
        }
    };
    _.cu = function (a, b) {
        a = a.j;
        a: {
            if (b)
                for (b = b.parentNode; _.xe(b); b = b.parentNode) {
                    var c = b.getAttribute("dir");
                    if (c && (c = c.toLowerCase(), "ltr" == c || "rtl" == c)) {
                        b = c;
                        break a
                    }
                }
            b = Ot() ? "rtl" : "ltr"
        }
        a[0] = "rtl" == b
    };
    _.du = function (a) {
        a.A && a.A.ud()
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var gA = function (a, b) {
            if (bA.test(b)) return b;
            b = 0 <= b.indexOf("left") ? b.replace(cA, "right") : b.replace(dA, "left");
            _.Oa(eA, a) && (a = b.split(fA), 4 <= a.length && (b = [a[0], a[3], a[2], a[1]].join(" ")));
            return b
        },
        hA = function (a, b, c) {
            return _.uo(_.wd, _.Gc.ua().j.p_st || null, _.A(a, 8) || 0, _.C(a, 5, 0), c.toString(), _.C(a, 4, 25), b.toString(), _.A(a, 9) || 0, null, _.A(a, 6) || void 0, _.A(a, 7) || void 0)
        },
        iA = function (a) {
            _.z(this, a, 0, -1, null, null)
        },
        jA;
    _.v(iA, _.y);
    jA = [1];
    _.kA = function (a) {
        _.z(this, a, 0, -1, jA, null)
    };
    _.v(_.kA, _.y);
    _.kA.prototype.$a = function (a) {
        return _.E(this, 10, a)
    };
    var lA = function (a) {
        _.z(this, a, 0, -1, null, null)
    };
    _.v(lA, _.y);
    lA.prototype.getHeight = function () {
        return _.A(this, 5)
    };
    var mA = function (a, b) {
            a.yb = b;
            a.j && (a.j = !0, a.yb && a.yb.notify())
        },
        nA = function (a) {
            return a[a.length - 1]
        },
        bA = /['"\(]/,
        eA = ["border-color", "border-style", "border-width", "margin", "padding"],
        cA = /left/g,
        dA = /right/g,
        fA = /\s+/;
    var oA = function (a) {
        this.j = a
    };
    oA.prototype.send = function (a, b, c) {
        this.j.then(function (d) {
            d.send(a, b, c)
        })
    };
    var pA = function (a) {
        this.data = a
    };
    var qA = function (a) {
        this.j = a
    };
    qA.prototype.send = function (a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        rA(d.port1, b);
        this.j.postMessage(a, [d.port2].concat(c))
    };
    var sA = function (a, b) {
            rA(a, b);
            return new qA(a)
        },
        rA = function (a, b) {
            b && (a.onmessage = function (c) {
                b(new pA(c.data, sA(c.ports[0], void 0)))
            })
        };
    var uA = function (a) {
            var b = a.destination,
                c = a.lg,
                d = a.origin,
                e = void 0 === a.Ie ? "ZNWN1d" : a.Ie;
            a = void 0 === a.onMessage ? void 0 : a.onMessage;
            if ("*" === d) throw Error("Ua");
            if ("null" === d) throw Error("Va");
            return tA({
                destination: b, zk: function (f) {
                    if (f.source === c.contentWindow) {
                        if (f.origin !== d) throw Error("Wa`" + d + "`" + f.origin);
                        if (f.data === e) return !0
                    }
                    return !1
                }, onMessage: a
            })
        },
        tA = function (a) {
            var b = a.destination,
                c = a.zk,
                d = void 0 === a.onMessage ? void 0 : a.onMessage;
            return new oA(new _.Qe(function (e, f) {
                var g = function (k) {
                    var l = !1;
                    try {
                        l = c(k)
                    } catch (m) {
                        b.removeEventListener("message", g, !1), f(m)
                    }
                    l && (b.removeEventListener("message", g, !1), e(sA(k.ports[0], d)))
                };
                b.addEventListener("message", g, !1)
            }))
        };
    var vA = function () {
        window.addEventListener("message", function (a) {
            "verify-origin" === a.data && a.source.parent === window && a.source.postMessage("verify-origin-reply", a.origin)
        })
    };
    var wA = function (a, b, c, d, e) {
            this.parent = a;
            this.A = b;
            this.C = c;
            this.J = void 0 === e ? !1 : e;
            this.D = d ? d : 0;
            a = _.cb(this.A).match(_.Yj);
            this.B = _.Xj(a[1], null, a[3], a[4])
        },
        xA = function (a, b) {
            var c = document.location;
            c = c.protocol + "//" + c.host;
            var d = {origin: c};
            0 !== a.C && (d.pid = a.C);
            0 !== a.D && (d.spid = a.D);
            a = _.It(a.A, d);
            "chrome-untrusted://new-tab-page" === c && (a = _.It(a, {origin: "chrome://new-tab-page"}));
            b && (a = _.It(a, b));
            return a
        },
        yA = function (a, b, c) {
            if (a.j) return a.j;
            a.j = _.gf("gapi.iframes.getContext")().openChild({
                attributes: {
                    role: "presentation",
                    style: {height: "100%", visibility: "hidden"},
                    onload: b
                },
                where: a.parent,
                url: _.cb(xA(a, c)),
                dontclear: !0,
                hintInFragment: !0
            });
            return a.j
        },
        zA = function (a, b, c, d, e) {
            if (!a.G) {
                var f = _.ue("IFRAME");
                _.pe(f, {
                    role: "presentation",
                    style: "height: 100%; width: 100%; visibility: hidden;",
                    frameborder: 0,
                    scrolling: "no"
                });
                f.addEventListener("load", b);
                _.Zm(f, xA(a, e));
                a.parent.appendChild(f);
                a.G = uA({destination: window, lg: f, origin: a.B, Ie: d, onMessage: c});
                a.w = f
            }
        },
        AA = function (a, b, c) {
            if (a.o) return a.o;
            a.o = uA({
                destination: window,
                lg: a.w,
                origin: a.B,
                Ie: c,
                onMessage: b
            });
            return a.o
        };
    wA.prototype.getIframeEl = function () {
        return this.J ? this.w ? this.w : null : this.j ? this.j.getIframeEl() : null
    };
    var BA = function (a, b) {
        _.lf.call(this, a, b)
    };
    _.n(BA, _.lf);
    var CA = function (a, b, c, d, e, f) {
        e = void 0 === e ? {} : e;
        f = void 0 === f ? !1 : f;
        _.P.call(this);
        this.C = !1;
        this.O = a;
        this.w = null;
        this.o = f;
        this.B = void 0;
        this.j = new wA(this.O, _.rj(b), /^\d+$/.test(c) ? parseInt(c, 10) : 0, /^\d+$/.test(d) ? parseInt(d, 10) : 0, this.o);
        this.A = e;
        this.J = this.H = !1
    };
    _.n(CA, _.P);
    var DA = function (a) {
        if (a.C) return 3;
        a.C = !0;
        if (!_.gf("gapi.iframes.getContext") && !a.o) {
            var b = _.gf("gapi.load");
            if (!b) return 2;
            b("gapi.iframes", (0, _.q)(a.G, a));
            return 1
        }
        a.G();
        return 0
    };
    CA.prototype.getIframeEl = function () {
        return this.j.getIframeEl()
    };
    var EA = function (a) {
        var b = _.ue("LINK"),
            c = _.cb(xA(a.j, a.A)) + (a.o ? "" : "&usegapi=1");
        b.crossOrigin = "use-credentials";
        _.nc && (b.addEventListener("load", function () {
            a.H = !0
        }), b.addEventListener("error", function () {
            a.J = !0
        }));
        _.qj(b, c, "prefetch");
        document.head.appendChild(b)
    };
    CA.prototype.focus = function () {
        this.getIframeEl().focus()
    };
    var FA = function (a, b) {
            a.getIframeEl() && _.xg(a.getIframeEl(), {visibility: b ? "" : "hidden"})
        },
        GA = function (a, b, c) {
            a.o ? a.B && (b = {event: b}, c && (b.data = c), a.B.send(b)) : a.w && a.w.send(b, c, void 0, _.gf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
        };
    CA.prototype.G = function () {
        var a = this,
            b = function () {
                return void a.dispatchEvent("loaded")
            };
        if (this.o) {
            var c = HA.exec(_.cb(xA(this.j, this.A)))[1];
            zA(this.j, b, this.D.bind(this), "ogi_" + c, this.A);
            this.B = AA(this.j, this.D.bind(this), "ogd_" + c)
        } else _.gf("gapi.iframes.getContext") && (this.w = yA(this.j, b, this.A), IA(this, this.w))
    };
    CA.prototype.D = function (a) {
        var b = new BA(a.data.event, this);
        b.data = a.data.data;
        this.dispatchEvent(b)
    };
    var IA = function (a, b) {
        _.Pa(JA, function (c) {
            b.register(c, function (d) {
                var e = new BA(c, a);
                e.data = d;
                a.dispatchEvent(e)
            }, _.gf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
        })
    };
    CA.prototype.remove = function () {
        var a = this.getIframeEl();
        a && a.parentNode.removeChild(a)
    };
    var JA = {
            Dk: "blur",
            Ek: "caev",
            Hk: "close",
            Kk: "dismiss",
            Tk: "_ready",
            Uk: "alogc",
            Vk: "alogn",
            Wk: "alogma",
            Yk: "alogmm",
            Xk: "alogm",
            Zk: "plog",
            jl: "_renderfailed",
            kl: "_renderstart",
            nl: "restyle",
            ql: "savec",
            rl: "savek",
            sl: "_startuploaded",
            wl: "unload"
        },
        HA = /\/widget\/(.+)(\/|\?)/;
    var KA = ["a", "er_em", "lc"],
        LA = function (a, b, c, d) {
            this.B = _.tn;
            this.D = a;
            this.j = b;
            this.A = c;
            this.C = d;
            this.w = this.o = !1
        };
    LA.prototype.log = function (a, b, c, d, e) {
        KA.includes(a) || this.D.log(this.j.toString(), "7", a, "&ap=1" + b, c);
        if ("i" === a) {
            if (this.w) return;
            this.o && (a = "rl", this.w = !0);
            this.o = !0
        }
        _.xo(this.B, a, this.j, this.A, this.C, d, !0, !0, !1, e)
    };
    var MA = function (a) {
        this.o = a;
        this.j = !1
    };
    MA.prototype.Ma = function () {
        this.o.Ma()
    };
    var OA = function (a, b, c, d) {
        d = void 0 === d ? !1 : d;
        _.P.call(this);
        this.w = new _.Ig(this);
        _.Mf(this, this.w);
        this.j = a;
        this.wa = b;
        this.Z = new _.Rp(b, !0);
        this.B = _.ue("DIV");
        this.o = null;
        this.G = this.V = this.ka = this.$ = this.S = this.sa = this.J = this.H = !1;
        this.Aa = _.A(a, 33) || "_renderstart";
        this.A = this.N = null;
        this.T = this.U = !1;
        this.D = d;
        this.W = !1;
        this.Y = c;
        this.P = null;
        a = this.B;
        b = Object.assign({}, NA);
        this.j.getHeight() ? b.height = this.j.getHeight() + "px" : b.bottom = "0px";
        _.A(this.j, 6) && (b.width = _.A(this.j, 6) + "px");
        (c = _.A(this.j, 7)) &&
        (b["margin-top"] = c + "px");
        (c = _.B(this.j, 11)) ? b.left = 0 : b.right = 0;
        _.A(this.j, 8) && (c ? b["margin-left"] = _.A(this.j, 8) + "px" : b["margin-right"] = _.A(this.j, 8) + "px");
        _.xg(a, b);
        this.Y.appendChild(this.B)
    };
    _.n(OA, _.P);
    OA.prototype.F = function () {
        return this.B
    };
    var TA = function (a, b) {
        PA(a);
        if (a.G = b) {
            if (3 !== _.A(a.j, 17)) {
                b = _.A(a.j, 7);
                var c = "100vh";
                b && (c = "calc(" + -1 * (Math.max(0, _.uq(a.Y).y - _.kq(document).y) + b) + "px + " + c + ")");
                _.xg(a.B, "max-height", c)
            }
            a.H ? (QA(a, !0), FA(a.o, !0), a.dispatchEvent("rav"), null != _.A(a.j, 18) && a.ha && (b = a.O ? _.fk(a.O) : new _.Bc, _.E(b, 24, Date.now() - a.ha), null != a.ma && _.E(b, 41, a.ma), RA(a, _.A(a.j, 18), b))) : a.T ? SA(a) : a.dispatchEvent("sorp")
        } else QA(a, !1), FA(a.o, !1), a.dispatchEvent("h")
    };
    OA.prototype.$a = function (a) {
        this.D = a;
        if (this.J) {
            var b = this.o,
                c = {};
            c.enabled = a;
            GA(b, "dm", c)
        }
        this.dispatchEvent("sdm")
    };
    OA.prototype.isVisible = function () {
        var a = "hidden" != this.B.style.visibility;
        return "none" != this.B.style.display && a
    };
    var QA = function (a, b) {
            _.xg(a.B, {visibility: b ? "" : "hidden"})
        },
        VA = function (a, b, c, d) {
            a.o = b;
            _.xe(c) ? a.A = c : a.N = c;
            UA(a, d);
            if ((b = _.B(a.j, 10) || _.C(a.j, 27, 0)) || null != a.N) c = _.C(a.j, 27, 0), null == a.C && 0 < c ? a.C = _.dg(a.X, c, a) : a.X();
            !b && _.B(a.j, 24) && EA(a.o)
        },
        WA = function (a) {
            _.Mg(a.w);
            a.A.removeAttribute("data-ogsr-fb")
        };
    OA.prototype.notify = function () {
        null != _.A(this.j, 31) && RA(this, _.A(this.j, 31));
        TA(this, !0)
    };
    var UA = function (a, b) {
        a.w.K(a.o, "_ready", a.Lj);
        a.w.K(a.o, "_startuploaded", function () {
            a.$ = !0
        });
        a.w.K(a.o, "_renderfailed", a.Pj);
        a.w.K(a.o, "_renderstart", a.Qj);
        a.w.K(a.o, "loaded", function () {
            a.ka = !0
        });
        a.w.K(a.o, a.Aa, a.nk);
        _.B(a.j, 9) && a.w.K(a.o, "blur", a.Gj);
        a.w.K(a.o, "restyle", a.Rj);
        a.w.K(a.o, "unload", a.Jj);
        a.w.K(a.o, "close", a.wg);
        b && 0 < b.length && (0, _.Ka)(b, function (c) {
            return _.gh(a.w, c, a.wg)
        });
        null != a.A ? (a.w.K(a.A, ["mouseover", "focus"], a.Vj), _.gh(a.w, a.A, a.Fg), a.w.K(a.A, "keydown", function (c) {
            27 == c.keyCode &&
            a.isVisible() && (a.W = !0, a.Fg(c))
        }), 1 == _.A(a.j, 17) && (a.w.K(a.o, "alogn", a.Ej), a.w.K(a.o, "alogm", a.Nj), a.w.K(a.o, "alogmm", a.Oj), a.w.K(a.o, "alogma", a.Mj), a.w.K(a.o, "alogc", a.Dj)), a.w.K(window, ["keyup", "keydown"], a.Sj), _.x && a.w.K(a.A, "focusin", function () {
            a.U = !0
        }), _.qh(a.A, "click"), (b = a.A.querySelector("[data-eqid]")) && _.qh(b, "click")) : null != a.N && (mA(a.N, a), a.w.K(a.o, "plog", a.Yg));
        a.w.K(window, "beforeunload", a.Fj)
    };
    _.h = OA.prototype;
    _.h.Qj = function (a) {
        this.sa = !0;
        null != _.A(this.j, 32) && RA(this, _.A(this.j, 32));
        a.data && ("null" !== a.data.ttf && (this.ma = Number(a.data.ttf) || null), (a.data.height || a.data.width) && XA(this, a.data.height, a.data.width))
    };
    _.h.Lj = function () {
        this.J = !0
    };
    _.h.Yg = function (a) {
        "i" === a.data.ld.apatk && RA(this, 110)
    };
    _.h.Fj = function () {
        this.V = !0;
        null != this.C && (_.eg(this.C), this.C = null);
        this.isVisible() || this.J || this.o.remove()
    };
    _.h.nk = function () {
        this.H = !0;
        null != this.L && _.eg(this.L);
        TA(this, this.G)
    };
    var PA = function (a) {
        null != a.C && (_.eg(a.C), a.C = null);
        var b = DA(a.o);
        null == a.P && (a.P = b);
        if (3 != b) {
            if (b = _.A(a.j, 14)) a.L = _.dg(a.ya, b, a);
            null != _.A(a.j, 30) && RA(a, _.A(a.j, 30))
        }
    };
    OA.prototype.X = function () {
        var a = this;
        "complete" == document.readyState ? PA(this) : window.addEventListener("load", function () {
            return PA(a)
        })
    };
    OA.prototype.ya = function () {
        this.H || this.S || (this.T = !0, this.G && SA(this))
    };
    var SA = function (a) {
        null != _.A(a.j, 16) && RA(a, _.A(a.j, 16));
        a.dispatchEvent("sort")
    };
    _.h = OA.prototype;
    _.h.Pj = function () {
        this.S = !0;
        null != this.L && _.eg(this.L);
        null != _.A(this.j, 26) && this.G && RA(this, _.A(this.j, 26))
    };
    _.h.Fg = function (a) {
        this.ha = Date.now();
        var b = !_.Hg(a);
        b = void 0 === b ? !1 : b;
        var c = !this.isVisible();
        TA(this, c);
        var d = this.o,
            e = {};
        e.keyboardAction = void 0 === b ? !1 : b;
        GA(d, c ? "open" : "close", e);
        if (c ? null != _.A(this.j, 12) : null != _.A(this.j, 13)) b = c ? _.A(this.j, 12) : _.A(this.j, 13), RA(this, b);
        this.U = !1;
        a.preventDefault();
        a.stopPropagation()
    };
    _.h.Sj = function (a) {
        32 == a.keyCode && a.target instanceof Element && _.Xf(this.A, a.target) && (a.stopPropagation(), a.preventDefault())
    };
    _.h.Vj = function () {
        PA(this)
    };
    _.h.Rj = function (a) {
        a.data && XA(this, a.data.height, a.data.width)
    };
    var XA = function (a, b, c) {
        b = void 0 === b ? "" : b;
        c = void 0 === c ? "" : c;
        var d = {};
        b && (d.height = b);
        c && (d.width = c);
        _.xg(a.B, d)
    };
    _.h = OA.prototype;
    _.h.Gj = function () {
        document.activeElement == this.A || _.Xf(this.A, document.activeElement) || this.U || TA(this, !1)
    };
    _.h.Jj = function () {
        this.H = !1;
        TA(this, !1)
    };
    _.h.wg = function () {
        TA(this, !1)
    };
    _.h.Ej = function (a) {
        var b = Number(a.data.pid) || -1,
            c = a = a.data.vis;
        if (4 < a || 0 >= a) c = 0;
        a = c;
        c = new _.Bc;
        b = _.E(c, 15, b);
        b = _.Sn(b, YA(this));
        _.Up(this.Z, a, b)
    };
    _.h.Nj = function () {
        RA(this, 104)
    };
    _.h.Oj = function () {
        RA(this, 105)
    };
    _.h.Mj = function (a) {
        a = a.data.an;
        var b = _.Sn(new _.Bc, YA(this));
        _.Tp(this.Z, a, b)
    };
    _.h.Dj = function (a) {
        RA(this, a.data.mouseSession ? 99 : 100)
    };
    var YA = function (a) {
            var b = a.o && a.o.getIframeEl(),
                c = 0;
            a.J && (c |= 1);
            a.$ && (c |= 128);
            a.sa && (c |= 32);
            a.S && (c |= 64);
            a.isVisible() && (c |= 2);
            a.T && (c |= 4);
            b && (c |= 8);
            a.ka && (c |= 16);
            _.gf("gapi.iframes") && (c |= 256);
            a.o.H && (c |= 512);
            a.o.J && (c |= 1024);
            a.W && (c |= 2048);
            switch (a.P) {
                case 2:
                    c |= 4096;
                    break;
                case 1:
                    c |= 8192
            }
            a.V && (c |= 16384);
            a.G && (c |= 32768);
            return c
        },
        RA = function (a, b, c) {
            c = c || (a.O ? _.fk(a.O) : new _.Bc);
            _.Sn(c, YA(a));
            if (null != _.A(a.j, 19)) {
                var d = _.G(a.j, iA, 19);
                d = _.A(d, 1);
                _.E(c, 31, d);
                _.E(c, 34, !0)
            }
            a.wa.log(b, c)
        },
        NA = {
            overflow: "hidden",
            position: "absolute",
            top: "0",
            visibility: "hidden",
            width: "350px",
            "z-index": 991
        };
    var ZA = function (a, b, c, d) {
        _.P.call(this);
        this.w = a;
        this.j = b;
        this.B = d;
        this.o = new _.Ig(this);
        _.Mf(this, this.o);
        this.A = c;
        this.o.K(this.w, "plog", this.D);
        this.o.K(this.w, "savec", this.C);
        this.o.K(this.w, "savek", this.C);
        this.o.K(this.w, "caev", this.C);
        this.o.Gb(this.j, "rav", this.J);
        this.o.Gb(this.w, "dismiss", this.G)
    };
    _.n(ZA, _.P);
    ZA.prototype.J = function () {
        var a = this.B;
        a.j || (_.Zn(a.o), a.j = !0);
        this.A.log("i", "&vis=1", 1, this.j.F(), YA(this.j))
    };
    ZA.prototype.G = function (a) {
        a = a.data && a.data.type ? a.data.type : "d";
        "ec" === a ? $A() : "end" !== a && this.B.Ma();
        TA(this.j, !1);
        this.A.log(a, "", 1, this.j.F(), YA(this.j))
    };
    ZA.prototype.C = function (a) {
        switch (a.data.apatk) {
            case "c":
                $A();
                break;
            case "d":
                this.B.Ma()
        }
    };
    var $A = function () {
        var a = _.gf("window.launchConsentDialog");
        a && a()
    };
    ZA.prototype.D = function (a) {
        var b = a.data.ld;
        a = b.apatk;
        if ("i" != a) {
            var c = b.sp;
            b = b.ad;
            var d = this.j.F(),
                e = YA(this.j);
            this.A.log(a, b, c, d, e)
        }
    };
    var aB = function (a) {
        this.o = a;
        this.j = null
    };
    aB.prototype.La = function () {
        var a = this.o,
            b = this.A,
            c = this.w;
        bB(a);
        b = "<div" + _.Wt("") + _.Xt(cB(a, b, c) + "") + _.Vt(dB(a, b, c) + "") + ">";
        c = eB(c);
        var d = _.$t(a.w);
        "" !== d && (b += " <style>" + d + "</style>");
        b += c + "</div>";
        _.du(a);
        a = _.gq(document, _.Db(b, null));
        this.j && this.j.appendChild(a);
        return a
    };
    aB.prototype.fill = function (a, b) {
        this.A = a;
        this.w = b
    };
    aB.prototype.instantiate = function (a) {
        this.j = a;
        _.cu(this.o, a)
    };
    var dB = function () {
            return ' dir="' + _.Ut("ltr") + '"'
        },
        fB = function () {
            return ""
        },
        cB = function (a, b, c) {
            return "padding:" + _.Ut(nA(a.j) ? gA("padding", b ? "12px" : "3px") : b ? "12px" : "3px") + ";" + (c ? "" : "display:" + _.Ut(nA(a.j) ? gA("display", "inline-block") : "inline-block") + ";") + "vertical-align:" + _.Ut(nA(a.j) ? gA("vertical-align", "middle") : "middle") + ";" + (c && !nA(a.j) ? "margin-left:" + _.Ut("calc(50% - 24px)") + ";" : "") + (c && nA(a.j) ? "margin-right:" + _.Ut("calc(50% - 24px)") + ";" : "") + (c ? "margin-top:" + _.Ut(nA(a.j) ? gA("margin-top", "98px") :
                "98px") + ";" : "")
        },
        gB = function () {
            return !0
        },
        hB = function () {
            return !1
        },
        iB = function (a, b) {
            bB(a);
            return eB(b.sg)
        },
        jB = function (a, b) {
            bB(a);
            var c = b.Xi;
            b = b.sg;
            a = "<div" + _.Wt("") + _.Xt(cB(a, c, b) + "") + _.Vt(dB(a, c, b) + "") + ">";
            c = eB(b);
            return _.Db(a + (c + "</div>"), null)
        },
        eB = function (a) {
            return " <div" + _.Wt((a ? "mspin-medium " : "") + (a ? "" : "mspin-small ")) + _.Xt("") + _.Vt("") + "> <div> <div></div> </div> </div> "
        },
        bB = function (a) {
            kB in a.o || _.bu(a, kB, {Xi: 0, sg: 1}, iB, jB, gB, hB, "", dB, fB, cB)
        },
        kB = "t-s91B_Xq1PdE",
        lB = function (a) {
            this.o = a;
            this.j = null
        };
    lB.prototype.La = function () {
        var a = this.o,
            b = this.w;
        mB(a);
        b = "<div" + _.Wt("") + _.Xt(nB(a, b) + "") + _.Vt("") + ">";
        var c = _.$t(a.w);
        "" !== c && (b += " <style>" + c + "</style>");
        b += "</div>";
        _.du(a);
        a = _.gq(document, _.Db(b, null));
        this.j && this.j.appendChild(a);
        return a
    };
    lB.prototype.fill = function (a) {
        this.w = a
    };
    lB.prototype.instantiate = function (a) {
        this.j = a;
        _.cu(this.o, a)
    };
    var oB = function () {
            return ""
        },
        pB = function () {
            return ""
        },
        nB = function (a, b) {
            return "box-shadow:0 -1px 2px 0 rgba(60,64,67,0.30),0 -2px 6px 2px rgba(60,64,67,0.15);height:calc(100% - 16px);" + (nA(a.j) ? "" : "left:0;") + (nA(a.j) ? "right:0;" : "") + "margin:8px;position:absolute;top:0;width:calc(100% - 16px);background:" + _.Ut(nA(a.j) ? gA("background", b ? "#2d2e30" : "#FFF") : b ? "#2d2e30" : "#FFF") + ";"
        },
        qB = function () {
            return !0
        },
        rB = function () {
            return !1
        },
        sB = function (a) {
            mB(a);
            return ""
        },
        tB = function (a, b) {
            mB(a);
            a = "<div" + _.Wt("") + _.Xt(nB(a,
                b.Sd) + "") + _.Vt("") + ">";
            return _.Db(a + "</div>", null)
        },
        mB = function (a) {
            uB in a.o || _.bu(a, uB, {Sd: 0}, sB, tB, qB, rB, "", oB, pB, nB)
        },
        uB = "t-LSLm3aJIFAU",
        vB = function (a) {
            this.o = a;
            this.j = null
        };
    vB.prototype.La = function () {
        var a = this.o,
            b = this.B,
            c = this.C,
            d = this.A,
            e = this.w;
        wB(a);
        var f = "<div" + _.Wt("") + _.Xt(xB(a, b, c, d, e) + "") + _.Vt(' data-fb=""') + ">";
        b = yB(a, b, c, d, e);
        c = _.$t(a.w);
        "" !== c && (f += " <style>" + c + "</style>");
        f += b + "</div>";
        _.du(a);
        a = _.gq(document, _.Db(f, null));
        this.j && this.j.appendChild(a);
        return a
    };
    vB.prototype.fill = function (a, b, c, d) {
        this.B = a;
        this.C = b;
        this.A = c;
        this.w = d
    };
    vB.prototype.instantiate = function (a) {
        this.j = a;
        _.cu(this.o, a)
    };
    var zB = function () {
            return ""
        },
        AB = function () {
            return ""
        },
        xB = function (a, b, c, d, e) {
            return "font:14px/22px Roboto,RobotoDraft,Arial,sans-serif;letter-spacing:0.03px;padding:134px 50px;text-align:center;white-space:normal;color:" + _.Ut(nA(a.j) ? gA("color", e ? "#e8eaed" : "#5F6368") : e ? "#e8eaed" : "#5F6368") + ";"
        },
        BB = function () {
            return !0
        },
        CB = function () {
            return !1
        },
        DB = function (a, b) {
            wB(a);
            return yB(a, b.Cf, b.mg, b.zf, b.Sd)
        },
        EB = function (a, b) {
            wB(a);
            var c = b.Cf,
                d = b.mg,
                e = b.zf,
                f = b.Sd;
            b = "<div" + _.Wt("") + _.Xt(xB(a, c, d, e, f) + "") + _.Vt(' data-fb=""') +
                ">";
            a = yB(a, c, d, e, f);
            return _.Db(b + (a + "</div>"), null)
        },
        yB = function (a, b, c, d, e) {
            return ' <svg height="28px" viewbox="0 0 24 24" width="28px" xmlns="http://www.w3.org/2000/svg"> <path' + _.Wt("") + _.Xt("") + _.Vt(' fill="' + _.Ut(e ? "#E8EAED" : "#80868B") + '" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"') + "></path> </svg> <p" + _.Wt("") + _.Xt("margin-top:4px;") + _.Vt("") + "> " + _.Ut(b) + " <a" + _.Wt("") + _.Xt("font:14px/22px Roboto,RobotoDraft,Arial,sans-serif;font-weight:bold;letter-spacing:0.03px;text-decoration:none;color:" +
                _.Ut(nA(a.j) ? gA("color", e ? "#8AB4F8" : "#4285F4") : e ? "#8AB4F8" : "#4285F4") + ";") + _.Vt(' target="_blank"') + ">" + _.Ut(c) + "</a> " + _.Ut(d) + " </p> "
        },
        wB = function (a) {
            FB in a.o || _.bu(a, FB, {Cf: 0, mg: 1, zf: 2, Sd: 3}, DB, EB, BB, CB, ' data-fb=""', zB, AB, xB)
        },
        FB = "t-PFKuGYhRe5s";
    var HB = function (a, b, c, d) {
        _.P.call(this);
        this.j = a;
        this.J = b;
        this.O = c;
        this.D = d;
        this.N = 0;
        this.B = null;
        this.A = 0;
        this.P = !0;
        this.G = null;
        this.S = !1;
        this.H = new _.au;
        this.L = this.o = this.C = null;
        this.T = !1;
        this.w = new _.Ig(this);
        _.Mf(this, this.w);
        _.xg(this.j.F(), {transition: "height .3s ease-in-out"});
        GB(this)
    };
    _.n(HB, _.P);
    var GB = function (a) {
        a.w.K(a.j, "sorp", a.Af);
        a.w.K(a.j, "sort", a.dj);
        a.w.K(a.j, "rav", a.jj);
        a.w.K(a.j, "h", a.Ij);
        a.w.K(a.j, "sdm", function () {
            a.o && a.o.querySelector("[data-fb]") && IB(a)
        });
        a.w.K(a.J, "close", a.ij)
    };
    _.h = HB.prototype;
    _.h.jj = function () {
        JB(this);
        this.C && this.C.Nb(!1);
        this.J.focus();
        this.D.setAttribute("aria-expanded", !0)
    };
    _.h.Ij = function () {
        this.D.setAttribute("aria-expanded", !1)
    };
    _.h.ij = function () {
        this.D.focus()
    };
    _.h.dj = function () {
        var a = this;
        switch (this.N) {
            case 2:
                JB(this);
                WA(this.j);
                QA(this.j, !1);
                this.D.click();
                break;
            case 1:
                this.B && _.Rn(top.location, _.mb(this.B));
            case 3:
                this.Af(), IB(this)
        }
        if (this.S) {
            var b = _.ue("IFRAME"),
                c = _.O(window, "message", function (d) {
                    if ("afbp" === d.Ya.data) {
                        d = a.j;
                        switch (_.A(d.j, 17)) {
                            case 1:
                                RA(d, 73)
                        }
                        a.j.F().removeChild(b);
                        _.Hf(c)
                    }
                });
            _.Zm(b, KB);
            b.style.display = "none";
            this.j.F().appendChild(b)
        }
    };
    _.h.Af = function () {
        this.o && JB(this);
        if (!this.L) {
            if (!this.T) {
                var a = 1 == this.A ? LB : MB;
                var b = _.ue("LINK");
                _.qj(b, a, "stylesheet");
                document.head.appendChild(b);
                this.T = !0
            }
            a = new aB(this.H);
            a.fill(this.P, 1 == this.A);
            this.L = a.La()
        }
        a = this.L;
        switch (this.A) {
            case 1:
                b = new lB(this.H);
                b.fill(this.j.D);
                this.o = b.La();
                this.o.appendChild(a);
                this.j.F().appendChild(this.o);
                FA(this.J, !1);
                QA(this.j, !0);
                break;
            default:
                this.o = a, _.xq(this.O, !1), _.jh(this.o, this.O)
        }
    };
    var IB = function (a) {
            if (1 == a.A && a.B && a.G) {
                _.xg(a.o, "background", a.j.D ? "#2d2e30" : "#FFF");
                _.ve(a.o);
                var b = new vB(a.H);
                NB(a, b, a.G);
                b = b.La();
                var c = b.querySelectorAll("a")[0];
                _.hh(c, a.B);
                a.w.K(c, "click", function () {
                    var d = a.j;
                    null != _.A(d.j, 21) && RA(d, _.A(d.j, 21))
                });
                a.o.appendChild(b)
            }
        },
        JB = function (a) {
            a.o && (_.we(a.o), 1 != a.A && _.xq(a.O, !0), a.o = null)
        },
        NB = function (a, b, c) {
            c = /(.*)%1\$s(.*)%2\$s(.*)/.exec(c);
            b.fill(c[1], c[2], c[3], a.j.D)
        },
        KB = _.Ym(_.wm("http://127.0.0.1:5500/gb/html/afbp.html")),
        MB = _.Ym(_.wm("http://127.0.0.1:5500/images/icons/material/anim/mspin/mspin_googcolor_small.css")),
        LB = _.Ym(_.wm("http://127.0.0.1:5500/images/icons/material/anim/mspin/mspin_googcolor_medium.css"));
    var OB = function (a, b) {
        this.o = a;
        this.j = b
    };
    _.h = OB.prototype;
    _.h.Vc = function () {
        return this.o
    };
    _.h.ve = function (a) {
        TA(this.j, a)
    };
    _.h.$a = function (a) {
        this.j.$a(a)
    };
    _.h.Ye = function () {
        return !0
    };
    _.h.Sb = function () {
        return this.j.isVisible()
    };
    _.h.ue = function () {
    };
    _.PB = function (a) {
        if (a) {
            var b = document.querySelector("#gb [data-ogsr-up]");
            if (b) {
                var c = 0 !== _.C(a, 7, 0),
                    d = _.Qj(a, lA, 1);
                if (c || d && d.length) {
                    vA();
                    c = _.Gc.ua().j.dd || null;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        if (_.G(f, _.pj, 3)) {
                            if (3 === _.A(f, 17)) {
                                var g = _.G(f, iA, 19);
                                if (_.B(g, 11)) {
                                    var k = _.A(g, 1) || 0,
                                        l = _.A(g, 2) || 0;
                                    f = _.A(g, 12) || 0;
                                    g = hA(g, k, l);
                                    _.Zn(g);
                                    l = _.Hc(_.Gc.ua(), "p_log");
                                    k = new LA(l, k, f, g.Ub());
                                    k.D.log(k.j.toString(), "7", "i", "&ap=1&vis=0", 1);
                                    _.xo(k.B, "i", k.j, k.A, k.C, null, !0, !0, !0);
                                    continue
                                }
                            }
                            k = new OA(f, _.tn,
                                b, !!_.B(a, 10));
                            g = k.F();
                            l = a;
                            var m = {};
                            m.hl = _.A(l, 9);
                            switch (_.A(f, 17)) {
                                case 1:
                                    m.gm = "", _.B(l, 10) && (m.dm = "")
                            }
                            g = new CA(g, _.G(f, _.pj, 3), _.A(l, 4), _.A(l, 5), m, !!_.B(f, 34));
                            if (3 === _.A(f, 17)) {
                                m = _.G(f, iA, 19);
                                f = _.A(m, 1) || 0;
                                var r = _.A(m, 2) || 0;
                                l = _.A(m, 12);
                                var t = new _.Bc;
                                _.E(t, 31, f);
                                var F = _.Vn(new _.Un, l);
                                _.H(t, 50, F);
                                k.O = t;
                                F = _.N("gb_3c");
                                t = Array.from(_.ih("gb_D", F));
                                (F = _.N("gb_ia", F)) && _.ng(t, void 0, 0, F);
                                VA(k, g, _.yo.ua(), t);
                                r = hA(m, f, r);
                                m = new MA(r);
                                r = r.Ub();
                                t = _.Hc(_.Gc.ua(), "p_log");
                                new ZA(g, k, new LA(t, f, l, r), m)
                            } else if (m =
                                null, (l = 1 === _.A(f, 17)) ? (m = document.querySelector("#gb [data-ogsr-alt]"), c.A(new OB("app", k))) : 2 === _.A(f, 17) && (m = (m = _.N("gb_Sa")) ? _.N("gb_D", m) : null, c.A(new OB("account", k))), null != m && (VA(k, g, m), r = k.D, l && r !== _.B(a, 10) && c.$a(r), l = m.getElementsByClassName("gb_D")[0] || m, k = new HB(k, g, m, l), r = _.A(f, 15), g = _.B(a, 6), m = _.A(f, 22), t = _.C(f, 23, 0), k.N = t, k.B = r, r = k, t = _.A(f, 20), r.A = t, r.P = g, r.G = m, m = r, r = !!_.B(f, 25), m.S = r, g && 1 === _.A(f, 17) && (f = _.N("gb_Xd")))) f = new _.mr(l, f), k.C && k.C.ta(), k.C = f
                        } else _.wd.log(Error("Xa"))
                    }
                } else _.wd.log(Error("Ya"))
            } else _.wd.log(Error("Za"))
        } else _.wd.log(Error("$a"))
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var GE = new _.kA;
    window.gbar_ && window.gbar_.D_CONFIG && (GE = new _.kA(window.gbar_.D_CONFIG));
    _.PB(GE);

} catch (e) {
    _._DumpException(e)
}
})
(this.gbar_);
// Google Inc.            this.C = new nd;
this.G = new nd;
this.J = new nd;
this.j = new nd;
this.w = new nd
}
;
_.va(_.M);
_.h = _.M.prototype;
_.h.Dh = function () {
    return this.A
};
_.h.Lh = function () {
    return this.o
};
_.h.Rh = function () {
    return this.D
};
_.h.Kh = function () {
    return this.B
};
_.h.Ph = function () {
    return this.C
};
_.h.Sh = function () {
    return this.G
};
_.h.Hh = function () {
    return this.J
};
_.h.Ih = function () {
    return this.j
};
_.h.wh = function () {
    return this.w
};
var rd = function (a) {
    _.z(this, a, 0, -1, null, null)
};
_.v(rd, _.y);
_.td = function () {
    return _.G(_.sd, _.Dc, 1)
};
_.ud = function () {
    return _.G(_.sd, _.Ec, 5)
};
var vd;
window.gbar_ && window.gbar_.CONFIG ? vd = window.gbar_.CONFIG[0] || {} : vd = [];
_.sd = new rd(vd);
var jd, kd, ed, fd, dd;
jd = _.G(_.sd, _.id, 3) || new _.id;
kd = _.td() || new _.Dc;
_.wd = new ld;
ed = _.td() || new _.Dc;
fd = _.ud() || new _.Ec;
dd = _.G(_.sd, md, 4) || new md;
_.xd = new gd;
_.u("gbar_._DumpException", function (a) {
    _.wd ? _.wd.log(a) : console.error(a)
});
_.yd = new Pc(_.wd);
_.xd.log(8, {m: "BackCompat" == document.compatMode ? "q" : "s"});
_.u("gbar.A", nd);
nd.prototype.aa = nd.prototype.then;
_.u("gbar.B", _.M);
_.M.prototype.ba = _.M.prototype.Lh;
_.M.prototype.bb = _.M.prototype.Rh;
_.M.prototype.bd = _.M.prototype.Ph;
_.M.prototype.be = _.M.prototype.Sh;
_.M.prototype.bf = _.M.prototype.Dh;
_.M.prototype.bg = _.M.prototype.Kh;
_.M.prototype.bh = _.M.prototype.Hh;
_.M.prototype.bi = _.M.prototype.Ih;
_.M.prototype.bj = _.M.prototype.wh;
_.u("gbar.a", _.M.ua());
var zd = new Fc(window);
_.Kc("api", zd);
var Ad = _.ud() || new _.Ec,
    Bd = _.L(_.A(Ad, 8));
window.__PVT = Bd;
_.Kc("eq", _.yd);

} catch
(e)
{
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.Id = !_.x || _.gc(9);
    _.Jd = !_.x || _.gc(9);
    _.Kd = _.x && !_.ec("9");
    _.Ld = function () {
        if (!_.p.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function () {
                    a = !0
                }
            });
        try {
            _.p.addEventListener("test", _.ua, b), _.p.removeEventListener("test", _.ua, b)
        } catch (c) {
        }
        return a
    }();
    _.Md = _.Qb ? "webkitTransitionEnd" : _.Mb ? "otransitionend" : "transitionend";

} catch (e) {
    _._DumpException(e)
}
try {
    _.Nd = function (a, b, c) {
        if (!a.o)
            if (c instanceof Array) {
                c = _.ia(c);
                for (var d = c.next(); !d.done; d = c.next()) _.Nd(a, b, d.value)
            } else {
                d = (0, _.q)(a.D, a, b);
                var e = a.C + c;
                a.C++;
                b.setAttribute("data-eqid", e);
                a.A[e] = d;
                b && b.addEventListener ? b.addEventListener(c, d, !1) : b && b.attachEvent ? b.attachEvent("on" + c, d) : a.B.log(Error("m`" + b))
            }
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var Rd, Sd, Td, Xd, Yd, Zd, $d, ae, be, ce, he;
    _.Qd = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    Rd = null;
    Sd = /^[\w+/_-]+[=]{0,2}$/;
    Td = function (a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Sd.test(a) ? a : ""
    };
    _.Ud = function (a) {
        var b = _.xa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.Vd = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    _.Wd = function (a, b) {
        return 0 == a.lastIndexOf(b, 0)
    };
    Xd = /&/g;
    Yd = /</g;
    Zd = />/g;
    $d = /"/g;
    ae = /'/g;
    be = /\x00/g;
    ce = /[\x00&<>"']/;
    _.de = function (a, b) {
        if (b) a = a.replace(Xd, "&amp;").replace(Yd, "&lt;").replace(Zd, "&gt;").replace($d, "&quot;").replace(ae, "&#39;").replace(be, "&#0;");
        else {
            if (!ce.test(a)) return a;
            -1 != a.indexOf("&") && (a = a.replace(Xd, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Yd, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Zd, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace($d, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(ae, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(be, "&#0;"))
        }
        return a
    };
    _.ee = function (a) {
        var b;
        (b = a.ownerDocument && a.ownerDocument.defaultView) && b != _.p ? b = Td(b.document) : (null === Rd && (Rd = Td(_.p.document)), b = Rd);
        b && a.setAttribute("nonce", b)
    };
    _.fe = function (a, b) {
        a.src = _.bb(b);
        _.ee(a)
    };
    _.ge = function (a) {
        return a = _.de(a, void 0)
    };
    he = !_.x || _.gc(9);
    _.ie = !_.Pb && !_.x || _.x && _.gc(9) || _.Pb && _.ec("1.9.1");
    _.je = _.x && !_.ec("9");
    _.ke = _.x || _.Mb || _.Qb;
    _.le = function (a, b) {
        this.width = a;
        this.height = b
    };
    _.h = _.le.prototype;
    _.h.aspectRatio = function () {
        return this.width / this.height
    };
    _.h.zc = function () {
        return !(this.width * this.height)
    };
    _.h.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.h.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.h.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var oe, te;
    _.me = function (a, b) {
        return (b || document).getElementsByTagName(String(a))
    };
    _.N = function (a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.ne(c, "*", a, b)[0] || null
        }
        return a || null
    };
    _.ne = function (a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && _.Oa(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    };
    _.pe = function (a, b) {
        _.Pa(b, function (c, d) {
            c && "object" == typeof c && c.Pb && (c = c.Fb());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : oe.hasOwnProperty(d) ? a.setAttribute(oe[d], c) : _.Wd(d, "aria-") || _.Wd(d, "data-") ? a.setAttribute(d, c) : a[d] = c
        })
    };
    oe = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.se = function (a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!he && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', _.ge(d.name), '"');
            if (d.type) {
                c.push(' type="', _.ge(d.type), '"');
                var e = {};
                _.Ra(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = _.qe(a, c);
        d && ("string" === typeof d ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : _.pe(c, d));
        2 < b.length && _.re(a, c, b, 2);
        return c
    };
    _.re = function (a, b, c, d) {
        function e(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
        }

        for (; d < c.length; d++) {
            var f = c[d];
            !_.Ud(f) || _.za(f) && 0 < f.nodeType ? e(f) : (0, _.Ka)(te(f) ? _.Vd(f) : f, e)
        }
    };
    _.ue = function (a) {
        return _.qe(document, a)
    };
    _.qe = function (a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.ve = function (a) {
        for (var b; b = a.firstChild;) a.removeChild(b)
    };
    _.we = function (a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.xe = function (a) {
        return _.za(a) && 1 == a.nodeType
    };
    _.ye = function (a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    te = function (a) {
        if (a && "number" == typeof a.length) {
            if (_.za(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (_.ya(a)) return "function" == typeof a.item
        }
        return !1
    };
    _.ze = function (a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var Ae = function (a, b) {
        this.w = a;
        this.A = b;
        this.o = 0;
        this.j = null
    };
    Ae.prototype.get = function () {
        if (0 < this.o) {
            this.o--;
            var a = this.j;
            this.j = a.next;
            a.next = null
        } else a = this.w();
        return a
    };
    var Be = function (a, b) {
        a.A(b);
        100 > a.o && (a.o++, b.next = a.j, a.j = b)
    };
    var Ce = function (a) {
            _.p.setTimeout(function () {
                throw a;
            }, 0)
        },
        De, Ee = function () {
            var a = _.p.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.w("Presto") && (a = function () {
                var e = _.ue("IFRAME");
                e.style.display = "none";
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.close();
                var g = "callImmediate" + Math.random(),
                    k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = (0, _.q)(function (l) {
                    if (("*" ==
                        k || l.origin == k) && l.data == g) this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function () {
                        f.postMessage(g, k)
                    }
                }
            });
            if ("undefined" !== typeof a && !_.vb()) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function () {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.Ef;
                        c.Ef = null;
                        e()
                    }
                };
                return function (e) {
                    d.next = {Ef: e};
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return function (e) {
                _.p.setTimeout(e, 0)
            }
        };
    var Fe = function () {
            this.o = this.j = null
        },
        He = new Ae(function () {
            return new Ge
        }, function (a) {
            a.reset()
        });
    Fe.prototype.add = function (a, b) {
        var c = He.get();
        c.set(a, b);
        this.o ? this.o.next = c : this.j = c;
        this.o = c
    };
    Fe.prototype.remove = function () {
        var a = null;
        this.j && (a = this.j, this.j = this.j.next, this.j || (this.o = null), a.next = null);
        return a
    };
    var Ge = function () {
        this.next = this.scope = this.Yb = null
    };
    Ge.prototype.set = function (a, b) {
        this.Yb = a;
        this.scope = b;
        this.next = null
    };
    Ge.prototype.reset = function () {
        this.next = this.scope = this.Yb = null
    };
    var Ie, Je, Ke, Le, Ne;
    _.Me = function (a, b) {
        Ie || Je();
        Ke || (Ie(), Ke = !0);
        Le.add(a, b)
    };
    Je = function () {
        if (_.p.Promise && _.p.Promise.resolve) {
            var a = _.p.Promise.resolve(void 0);
            Ie = function () {
                a.then(Ne)
            }
        } else Ie = function () {
            var b = Ne;
            !_.ya(_.p.setImmediate) || _.p.Window && _.p.Window.prototype && !_.w("Edge") && _.p.Window.prototype.setImmediate == _.p.setImmediate ? (De || (De = Ee()), De(b)) : _.p.setImmediate(b)
        }
    };
    Ke = !1;
    Le = new Fe;
    Ne = function () {
        for (var a; a = Le.remove();) {
            try {
                a.Yb.call(a.scope)
            } catch (b) {
                Ce(b)
            }
            Be(He, a)
        }
        Ke = !1
    };
    _.Oe = function (a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var Re, df, $e, Ye, Ze, ef, cf, ff;
    _.Qe = function (a) {
        this.j = 0;
        this.D = void 0;
        this.A = this.o = this.w = null;
        this.B = this.C = !1;
        if (a != _.ua) try {
            var b = this;
            a.call(void 0, function (c) {
                _.Pe(b, 2, c)
            }, function (c) {
                _.Pe(b, 3, c)
            })
        } catch (c) {
            _.Pe(this, 3, c)
        }
    };
    Re = function () {
        this.next = this.context = this.o = this.w = this.j = null;
        this.A = !1
    };
    Re.prototype.reset = function () {
        this.context = this.o = this.w = this.j = null;
        this.A = !1
    };
    var Se = new Ae(function () {
            return new Re
        }, function (a) {
            a.reset()
        }),
        Te = function (a, b, c) {
            var d = Se.get();
            d.w = a;
            d.o = b;
            d.context = c;
            return d
        };
    _.Qe.prototype.then = function (a, b, c) {
        return Ue(this, _.ya(a) ? a : null, _.ya(b) ? b : null, c)
    };
    _.Qe.prototype.$goog_Thenable = !0;
    _.Ve = function (a, b) {
        return Ue(a, null, b, void 0)
    };
    _.Qe.prototype.cancel = function (a) {
        if (0 == this.j) {
            var b = new _.We(a);
            _.Me(function () {
                Xe(this, b)
            }, this)
        }
    };
    var Xe = function (a, b) {
            if (0 == a.j)
                if (a.w) {
                    var c = a.w;
                    if (c.o) {
                        for (var d = 0, e = null, f = null, g = c.o; g && (g.A || (d++, g.j == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.j && 1 == d ? Xe(c, b) : (f ? (d = f, d.next == c.A && (c.A = d), d.next = d.next.next) : Ye(c), Ze(c, e, 3, b)))
                    }
                    a.w = null
                } else _.Pe(a, 3, b)
        },
        af = function (a, b) {
            a.o || 2 != a.j && 3 != a.j || $e(a);
            a.A ? a.A.next = b : a.o = b;
            a.A = b
        },
        Ue = function (a, b, c, d) {
            var e = Te(null, null, null);
            e.j = new _.Qe(function (f, g) {
                e.w = b ? function (k) {
                    try {
                        var l = b.call(d, k);
                        f(l)
                    } catch (m) {
                        g(m)
                    }
                } : f;
                e.o = c ? function (k) {
                    try {
                        var l =
                            c.call(d, k);
                        void 0 === l && k instanceof _.We ? g(k) : f(l)
                    } catch (m) {
                        g(m)
                    }
                } : g
            });
            e.j.w = a;
            af(a, e);
            return e.j
        };
    _.Qe.prototype.J = function (a) {
        this.j = 0;
        _.Pe(this, 2, a)
    };
    _.Qe.prototype.H = function (a) {
        this.j = 0;
        _.Pe(this, 3, a)
    };
    _.Pe = function (a, b, c) {
        0 == a.j && (a === c && (b = 3, c = new TypeError("p")), a.j = 1, _.bf(c, a.J, a.H, a) || (a.D = c, a.j = b, a.w = null, $e(a), 3 != b || c instanceof _.We || cf(a, c)))
    };
    _.bf = function (a, b, c, d) {
        if (a instanceof _.Qe) return af(a, Te(b || _.ua, c || null, d)), !0;
        if (_.Oe(a)) return a.then(b, c, d), !0;
        if (_.za(a)) try {
            var e = a.then;
            if (_.ya(e)) return df(a, e, b, c, d), !0
        } catch (f) {
            return c.call(d, f), !0
        }
        return !1
    };
    df = function (a, b, c, d, e) {
        var f = !1,
            g = function (l) {
                f || (f = !0, c.call(e, l))
            },
            k = function (l) {
                f || (f = !0, d.call(e, l))
            };
        try {
            b.call(a, g, k)
        } catch (l) {
            k(l)
        }
    };
    $e = function (a) {
        a.C || (a.C = !0, _.Me(a.G, a))
    };
    Ye = function (a) {
        var b = null;
        a.o && (b = a.o, a.o = b.next, b.next = null);
        a.o || (a.A = null);
        return b
    };
    _.Qe.prototype.G = function () {
        for (var a; a = Ye(this);) Ze(this, a, this.j, this.D);
        this.C = !1
    };
    Ze = function (a, b, c, d) {
        if (3 == c && b.o && !b.A)
            for (; a && a.B; a = a.w) a.B = !1;
        if (b.j) b.j.w = null, ef(b, c, d);
        else try {
            b.A ? b.w.call(b.context) : ef(b, c, d)
        } catch (e) {
            ff.call(null, e)
        }
        Be(Se, b)
    };
    ef = function (a, b, c) {
        2 == b ? a.w.call(a.context, c) : a.o && a.o.call(a.context, c)
    };
    cf = function (a, b) {
        a.B = !0;
        _.Me(function () {
            a.B && ff.call(null, b)
        })
    };
    ff = Ce;
    _.We = function (a) {
        _.Ia.call(this, a)
    };
    _.v(_.We, _.Ia);
    _.We.prototype.name = "cancel";

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var jf;
    _.gf = function (a) {
        a = a.split(".");
        for (var b = _.p, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    };
    _.hf = function (a, b) {
        b = (0, _.Ja)(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    jf = function (a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    };
    _.kf = function (a, b) {
        try {
            return _.Jb(a[b]), !0
        } catch (c) {
        }
        return !1
    };
    _.lf = function (a, b) {
        this.type = a;
        this.j = this.target = b;
        this.defaultPrevented = this.o = !1
    };
    _.lf.prototype.stopPropagation = function () {
        this.o = !0
    };
    _.lf.prototype.preventDefault = function () {
        this.defaultPrevented = !0
    };
    _.mf = function (a, b) {
        _.lf.call(this, a ? a.type : "");
        this.relatedTarget = this.j = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.w = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.Ya = null;
        a && this.init(a, b)
    };
    _.v(_.mf, _.lf);
    var nf = {2: "touch", 3: "pen", 4: "mouse"};
    _.mf.prototype.init = function (a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.j = b;
        (b = a.relatedTarget) ? _.Pb && (_.kf(b, "nodeName") || (b = null)) : "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX :
            a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.w = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : nf[a.pointerType] || "";
        this.state = a.state;
        this.Ya = a;
        a.defaultPrevented && this.preventDefault()
    };
    _.mf.prototype.stopPropagation = function () {
        _.mf.M.stopPropagation.call(this);
        this.Ya.stopPropagation ? this.Ya.stopPropagation() : this.Ya.cancelBubble = !0
    };
    _.mf.prototype.preventDefault = function () {
        _.mf.M.preventDefault.call(this);
        var a = this.Ya;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, _.Kd) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {
        }
    };
    var qf;
    _.of = "closure_listenable_" + (1E6 * Math.random() | 0);
    _.pf = function (a) {
        return !(!a || !a[_.of])
    };
    qf = 0;
    var rf;
    rf = function (a, b, c, d, e) {
        this.listener = a;
        this.j = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.je = e;
        this.key = ++qf;
        this.Wc = this.Rd = !1
    };
    _.sf = function (a) {
        a.Wc = !0;
        a.listener = null;
        a.j = null;
        a.src = null;
        a.je = null
    };
    _.tf = function (a) {
        this.src = a;
        this.j = {};
        this.o = 0
    };
    _.tf.prototype.add = function (a, b, c, d, e) {
        var f = a.toString();
        a = this.j[f];
        a || (a = this.j[f] = [], this.o++);
        var g = uf(a, b, d, e);
        -1 < g ? (b = a[g], c || (b.Rd = !1)) : (b = new rf(b, this.src, f, !!d, e), b.Rd = c, a.push(b));
        return b
    };
    _.tf.prototype.remove = function (a, b, c, d) {
        a = a.toString();
        if (!(a in this.j)) return !1;
        var e = this.j[a];
        b = uf(e, b, c, d);
        return -1 < b ? (_.sf(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.j[a], this.o--), !0) : !1
    };
    _.vf = function (a, b) {
        var c = b.type;
        if (!(c in a.j)) return !1;
        var d = _.hf(a.j[c], b);
        d && (_.sf(b), 0 == a.j[c].length && (delete a.j[c], a.o--));
        return d
    };
    _.tf.prototype.Yd = function (a, b) {
        a = this.j[a.toString()];
        var c = [];
        if (a)
            for (var d = 0; d < a.length; ++d) {
                var e = a[d];
                e.capture == b && c.push(e)
            }
        return c
    };
    _.tf.prototype.xd = function (a, b, c, d) {
        a = this.j[a.toString()];
        var e = -1;
        a && (e = uf(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    _.tf.prototype.hasListener = function (a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return jf(this.j, function (f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
            return !1
        })
    };
    var uf = function (a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Wc && f.listener == b && f.capture == !!c && f.je == d) return e
        }
        return -1
    };
    var wf, xf, yf, Bf, Df, Ef, Jf, If, Ff, Kf;
    wf = "closure_lm_" + (1E6 * Math.random() | 0);
    xf = {};
    yf = 0;
    _.O = function (a, b, c, d, e) {
        if (d && d.once) return _.zf(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) _.O(a, b[f], c, d, e);
            return null
        }
        c = _.Af(c);
        return _.pf(a) ? a.K(b, c, _.za(d) ? !!d.capture : !!d, e) : Bf(a, b, c, !1, d, e)
    };
    Bf = function (a, b, c, d, e, f) {
        if (!b) throw Error("q");
        var g = _.za(e) ? !!e.capture : !!e,
            k = _.Cf(a);
        k || (a[wf] = k = new _.tf(a));
        c = k.add(b, c, d, g, f);
        if (c.j) return c;
        d = Df();
        c.j = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) _.Ld || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Ef(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("r");
        yf++;
        return c
    };
    Df = function () {
        var a = Ff,
            b = _.Jd ? function (c) {
                return a.call(b.src, b.listener, c)
            } : function (c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    };
    _.zf = function (a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) _.zf(a, b[f], c, d, e);
            return null
        }
        c = _.Af(c);
        return _.pf(a) ? a.Gb(b, c, _.za(d) ? !!d.capture : !!d, e) : Bf(a, b, c, !0, d, e)
    };
    _.Gf = function (a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) _.Gf(a, b[f], c, d, e);
        else d = _.za(d) ? !!d.capture : !!d, c = _.Af(c), _.pf(a) ? a.Ea(b, c, d, e) : a && (a = _.Cf(a)) && (b = a.xd(b, c, d, e)) && _.Hf(b)
    };
    _.Hf = function (a) {
        if ("number" === typeof a || !a || a.Wc) return !1;
        var b = a.src;
        if (_.pf(b)) return b.Og(a);
        var c = a.type,
            d = a.j;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ef(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        yf--;
        (c = _.Cf(b)) ? (_.vf(c, a), 0 == c.o && (c.src = null, b[wf] = null)) : _.sf(a);
        return !0
    };
    Ef = function (a) {
        return a in xf ? xf[a] : xf[a] = "on" + a
    };
    Jf = function (a, b, c, d) {
        var e = !0;
        if (a = _.Cf(a))
            if (b = a.j[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.Wc && (f = If(f, d), e = e && !1 !== f)
                }
        return e
    };
    If = function (a, b) {
        var c = a.listener,
            d = a.je || a.src;
        a.Rd && _.Hf(a);
        return c.call(d, b)
    };
    Ff = function (a, b) {
        if (a.Wc) return !0;
        if (!_.Jd) {
            var c = b || _.gf("window.event");
            b = new _.mf(c, this);
            var d = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == c.keyCode) try {
                        c.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == c.returnValue) c.returnValue = !0
                }
                c = [];
                for (e = b.j; e; e = e.parentNode) c.push(e);
                a = a.type;
                for (e = c.length - 1; !b.o && 0 <= e; e--) {
                    b.j = c[e];
                    var f = Jf(c[e], a, !0, b);
                    d = d && f
                }
                for (e = 0; !b.o && e < c.length; e++) b.j = c[e], f = Jf(c[e], a, !1, b), d = d && f
            }
            return d
        }
        return If(a, new _.mf(b, this))
    };
    _.Cf = function (a) {
        a = a[wf];
        return a instanceof _.tf ? a : null
    };
    Kf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    _.Af = function (a) {
        if (_.ya(a)) return a;
        a[Kf] || (a[Kf] = function (b) {
            return a.handleEvent(b)
        });
        return a[Kf]
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var Qf, Zf;
    _.Lf = function (a) {
        a && "function" == typeof a.ta && a.ta()
    };
    _.Mf = function (a, b) {
        b = _.Qd(_.Lf, b);
        a.Wa ? b() : (a.Db || (a.Db = []), a.Db.push(b))
    };
    _.Nf = function (a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    _.Of = function (a, b) {
        if ((0, _.Gb)())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = _.Cb(b)
    };
    _.Pf = function (a) {
        var b = 0,
            c;
        for (c in a.j) {
            for (var d = a.j[c], e = 0; e < d.length; e++) ++b, _.sf(d[e]);
            delete a.j[c];
            a.o--
        }
    };
    _.Rf = function (a) {
        return /^[\s\xa0]*$/.test(a)
    };
    _.Sf = function (a, b) {
        return "string" === typeof b ? a.getElementById(b) : b
    };
    _.Tf = function (a) {
        return "CSS1Compat" == a.compatMode
    };
    _.Uf = function (a) {
        a = (a || window).document;
        a = _.Tf(a) ? a.documentElement : a.body;
        return new _.le(a.clientWidth, a.clientHeight)
    };
    _.Vf = function (a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    _.Wf = function (a) {
        return _.ie && void 0 != a.children ? a.children : (0, _.La)(a.childNodes, function (b) {
            return 1 == b.nodeType
        })
    };
    _.Xf = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.Yf = function (a) {
        try {
            var b = a && a.activeElement;
            return b && b.nodeName ? b : null
        } catch (c) {
            return null
        }
    };
    Zf = function (a) {
        this.j = a || _.p.document || document
    };
    _.h = Zf.prototype;
    _.h.F = function (a) {
        return _.Sf(this.j, a)
    };
    _.h.Ba = function (a, b, c) {
        return _.se(this.j, arguments)
    };
    _.h.createElement = function (a) {
        return _.qe(this.j, a)
    };
    _.h.$d = function (a, b) {
        a.appendChild(b)
    };
    _.h.Xf = _.ve;
    _.h.ae = _.we;
    _.h.Uh = _.Wf;
    _.h.Wf = _.Xf;
    _.$f = function (a) {
        return a ? new Zf(_.ye(a)) : Qf || (Qf = new Zf)
    };
    _.P = function () {
        _.I.call(this);
        this.Eb = new _.tf(this);
        this.Wg = this;
        this.Id = null
    };
    _.v(_.P, _.I);
    _.P.prototype[_.of] = !0;
    _.h = _.P.prototype;
    _.h.Mh = function () {
        return this.Id
    };
    _.h.Ic = function (a) {
        this.Id = a
    };
    _.h.addEventListener = function (a, b, c, d) {
        _.O(this, a, b, c, d)
    };
    _.h.removeEventListener = function (a, b, c, d) {
        _.Gf(this, a, b, c, d)
    };
    _.h.dispatchEvent = function (a) {
        var b, c = this.Id;
        if (c)
            for (b = []; c; c = c.Id) b.push(c);
        c = this.Wg;
        var d = a.type || a;
        if ("string" === typeof a) a = new _.lf(a, c);
        else if (a instanceof _.lf) a.target = a.target || c;
        else {
            var e = a;
            a = new _.lf(d, c);
            _.Ra(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.o && 0 <= f; f--) {
                var g = a.j = b[f];
                e = bg(g, d, !0, a) && e
            }
        a.o || (g = a.j = c, e = bg(g, d, !0, a) && e, a.o || (e = bg(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.o && f < b.length; f++) g = a.j = b[f], e = bg(g, d, !1, a) && e;
        return e
    };
    _.h.R = function () {
        _.P.M.R.call(this);
        this.Eb && _.Pf(this.Eb);
        this.Id = null
    };
    _.h.K = function (a, b, c, d) {
        return this.Eb.add(String(a), b, !1, c, d)
    };
    _.h.Gb = function (a, b, c, d) {
        return this.Eb.add(String(a), b, !0, c, d)
    };
    _.h.Ea = function (a, b, c, d) {
        return this.Eb.remove(String(a), b, c, d)
    };
    _.h.Og = function (a) {
        return _.vf(this.Eb, a)
    };
    var bg = function (a, b, c, d) {
        b = a.Eb.j[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.Wc && g.capture == c) {
                var k = g.listener,
                    l = g.je || g.src;
                g.Rd && a.Og(g);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    _.P.prototype.Yd = function (a, b) {
        return this.Eb.Yd(String(a), b)
    };
    _.P.prototype.xd = function (a, b, c, d) {
        return this.Eb.xd(String(a), b, c, d)
    };
    _.P.prototype.hasListener = function (a, b) {
        return this.Eb.hasListener(void 0 !== a ? String(a) : void 0, b)
    };
    _.cg = function (a, b) {
        _.P.call(this);
        this.o = a || 1;
        this.j = b || _.p;
        this.w = (0, _.q)(this.tk, this);
        this.A = (0, _.Fa)()
    };
    _.v(_.cg, _.P);
    _.h = _.cg.prototype;
    _.h.wc = !1;
    _.h.Lb = null;
    _.h.tk = function () {
        if (this.wc) {
            var a = (0, _.Fa)() - this.A;
            0 < a && a < .8 * this.o ? this.Lb = this.j.setTimeout(this.w, this.o - a) : (this.Lb && (this.j.clearTimeout(this.Lb), this.Lb = null), this.dispatchEvent("tick"), this.wc && (this.stop(), this.start()))
        }
    };
    _.h.start = function () {
        this.wc = !0;
        this.Lb || (this.Lb = this.j.setTimeout(this.w, this.o), this.A = (0, _.Fa)())
    };
    _.h.stop = function () {
        this.wc = !1;
        this.Lb && (this.j.clearTimeout(this.Lb), this.Lb = null)
    };
    _.h.R = function () {
        _.cg.M.R.call(this);
        this.stop();
        delete this.j
    };
    _.dg = function (a, b, c) {
        if (_.ya(a)) c && (a = (0, _.q)(a, c));
        else if (a && "function" == typeof a.handleEvent) a = (0, _.q)(a.handleEvent, a);
        else throw Error("s");
        return 2147483647 < Number(b) ? -1 : _.p.setTimeout(a, b || 0)
    };
    _.eg = function (a) {
        _.p.clearTimeout(a)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var pg, tg, ug;
    _.lg = function (a) {
        return new _.le(a.width, a.height)
    };
    _.mg = function (a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    _.ng = function (a, b, c, d) {
        Array.prototype.splice.apply(a, _.mg(arguments, 1))
    };
    _.og = function (a) {
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase()
        })
    };
    pg = function (a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
            return c + d.toUpperCase()
        })
    };
    _.qg = function (a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    };
    _.rg = function (a, b, c) {
        return _.se(document, arguments)
    };
    _.sg = function (a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else _.ve(a), a.appendChild(_.ye(a).createTextNode(String(b)))
    };
    tg = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1};
    ug = {IMG: " ", BR: "\n"};
    _.vg = function (a, b, c) {
        if (!(a.nodeName in tg))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ug) b.push(ug[a.nodeName]);
            else
                for (a = a.firstChild; a;) _.vg(a, b, c), a = a.nextSibling
    };
    var yg;
    _.xg = function (a, b, c) {
        if ("string" === typeof b) (b = _.wg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.wg(c, d);
                f && (c.style[f] = e)
            }
    };
    yg = {};
    _.wg = function (a, b) {
        var c = yg[b];
        if (!c) {
            var d = _.og(b);
            c = d;
            void 0 === a.style[d] && (d = (_.Qb ? "Webkit" : _.Pb ? "Moz" : _.x ? "ms" : _.Mb ? "O" : null) + pg(d), void 0 !== a.style[d] && (c = d));
            yg[b] = c
        }
        return c
    };
    _.zg = function (a, b) {
        var c = _.ye(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    _.Ag = function (a, b) {
        return _.zg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    _.Bg = function (a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
    };
    _.Cg = function (a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Eg = function (a) {
        var b = _.Dg;
        if ("none" != _.Ag(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.Dg = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = _.Qb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = _.Bg(a), new _.le(a.right - a.left, a.bottom - a.top)) : new _.le(b, c)
    };
    _.Fg = _.Pb ? "MozUserSelect" : _.Qb || _.Nb ? "WebkitUserSelect" : null;

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var Gg;
    Gg = [1, 4, 2];
    _.Hg = function (a) {
        return (_.Id ? 0 == a.Ya.button : "click" == a.type ? !0 : !!(a.Ya.button & Gg[0])) && !(_.Qb && _.Rb && a.ctrlKey)
    };
    _.Ig = function (a) {
        _.I.call(this);
        this.X = a;
        this.P = {}
    };
    _.v(_.Ig, _.I);
    var Jg = [];
    _.Ig.prototype.K = function (a, b, c, d) {
        return Kg(this, a, b, c, d)
    };
    _.Ig.prototype.A = function (a, b, c, d, e) {
        return Kg(this, a, b, c, d, e)
    };
    var Kg = function (a, b, c, d, e, f) {
        Array.isArray(c) || (c && (Jg[0] = c.toString()), c = Jg);
        for (var g = 0; g < c.length; g++) {
            var k = _.O(b, c[g], d || a.handleEvent, e || !1, f || a.X || a);
            if (!k) break;
            a.P[k.key] = k
        }
        return a
    };
    _.Ig.prototype.Gb = function (a, b, c, d) {
        return Lg(this, a, b, c, d)
    };
    var Lg = function (a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) Lg(a, b, c[g], d, e, f);
        else {
            b = _.zf(b, c, d || a.handleEvent, e, f || a.X || a);
            if (!b) return a;
            a.P[b.key] = b
        }
        return a
    };
    _.Ig.prototype.Ea = function (a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) this.Ea(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = _.za(d) ? !!d.capture : !!d, e = e || this.X || this, c = _.Af(c), d = !!d, b = _.pf(a) ? a.xd(b, c, d, e) : a ? (a = _.Cf(a)) ? a.xd(b, c, d, e) : null : null, b && (_.Hf(b), delete this.P[b.key]);
        return this
    };
    _.Mg = function (a) {
        _.Pa(a.P, function (b, c) {
            this.P.hasOwnProperty(c) && _.Hf(b)
        }, a);
        a.P = {}
    };
    _.Ig.prototype.R = function () {
        _.Ig.M.R.call(this);
        _.Mg(this)
    };
    _.Ig.prototype.handleEvent = function () {
        throw Error("v");
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var dh;
    _.eh = function (a, b) {
        b ? a.setAttribute("role", b) : a.removeAttribute("role")
    };
    _.U = function (a, b, c) {
        Array.isArray(c) && (c = c.join(" "));
        var d = "aria-" + b;
        "" === c || void 0 == c ? (dh || (dh = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = dh, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.gh = function (a, b, c) {
        _.fh.K(b, c, void 0, a.X || a, a);
        return a
    };
    _.hh = function (a, b) {
        b = b instanceof _.jb ? b : _.nb(b);
        a.href = _.kb(b)
    };
    _.ih = function (a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : _.ne(document, "*", a, b)
    };
    _.jh = function (a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    };
    _.kh = function (a, b) {
        return b ? _.ze(a, function (c) {
            return !b || "string" === typeof c.className && _.Oa(c.className.split(/\s+/), b)
        }, void 0) : null
    };
    var lh, mh;
    lh = function () {
    };
    _.fh = new lh;
    mh = ["click", "keydown", "keyup"];
    lh.prototype.K = function (a, b, c, d, e) {
        var f = function (g) {
            var k = _.Af(b),
                l = _.xe(g.target) ? g.target.getAttribute("role") || null : null;
            "click" == g.type && _.Hg(g) ? k.call(d, g) : 13 != g.keyCode && 3 != g.keyCode || "keyup" == g.type ? 32 != g.keyCode || "keyup" != g.type || "button" != l && "tab" != l || (k.call(d, g), g.preventDefault()) : (g.type = "keypress", k.call(d, g))
        };
        f.yb = b;
        f.bk = d;
        e ? e.K(a, mh, f, c) : _.O(a, mh, f, c)
    };
    lh.prototype.Ea = function (a, b, c, d, e) {
        for (var f, g = 0; f = mh[g]; g++) {
            var k = a;
            var l = f;
            var m = !!c;
            l = _.pf(k) ? k.Yd(l, m) : k ? (k = _.Cf(k)) ? k.Yd(l, m) : [] : [];
            for (k = 0; m = l[k]; k++) {
                var r = m.listener;
                if (r.yb == b && r.bk == d) {
                    e ? e.Ea(a, f, m.listener, c, d) : _.Gf(a, f, m.listener, c, d);
                    break
                }
            }
        }
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var oh;
    oh = function (a, b, c) {
        if (a.o) return null;
        if (c instanceof Array) {
            var d = null;
            c = _.ia(c);
            for (var e = c.next(); !e.done; e = c.next()) (e = oh(a, b, e.value)) && (d = e);
            return d
        }
        d = null;
        a.j && a.j.type == c && a.w == b && (d = a.j, a.j = null);
        if (e = b.getAttribute("data-eqid")) b.removeAttribute("data-eqid"), (e = a.A[e]) ? b.removeEventListener ? b.removeEventListener(c, e, !1) : b.detachEvent && b.detachEvent("on" + c, e) : a.B.log(Error("n`" + b));
        return d
    };
    _.ph = function (a, b, c) {
        return function () {
            try {
                return b.apply(c, arguments)
            } catch (d) {
                a.log(d)
            }
        }
    };
    _.rh = function (a, b, c, d, e, f) {
        d = _.ph(a, d, f);
        a = _.O(b, c, d, e, f);
        _.qh(b, c);
        return a
    };
    _.qh = function (a, b) {
        if (a instanceof Element && (b = oh(_.Ic("eq"), a, b || [])))
            if (_.x && b instanceof MouseEvent && a.dispatchEvent) {
                var c = document.createEvent("MouseEvent");
                c.initMouseEvent(b.type, !0, !0, b.view, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget);
                a.dispatchEvent(c)
            } else a.dispatchEvent && a.dispatchEvent(b)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    _.pj = function (a) {
        _.z(this, a, 0, -1, null, null)
    };
    _.v(_.pj, _.y);
    _.qj = function (a, b, c) {
        a.rel = c;
        a.href = -1 != c.toLowerCase().indexOf("stylesheet") ? _.cb(b) : b instanceof _.ab ? _.cb(b) : b instanceof _.jb ? _.kb(b) : _.kb(_.nb(b))
    };
    _.rj = function (a) {
        return _.db(_.A(a, 4) || "")
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var Ij;
    _.Hj = function (a) {
        this.j = a || {cookie: ""}
    };
    _.h = _.Hj.prototype;
    _.h.set = function (a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Pl;
            d = c.dk || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var k = c.se
        }
        if (/[;=\s]/.test(a)) throw Error("T`" + a);
        if (/[;\r\n]/.test(b)) throw Error("U`" + b);
        void 0 === k && (k = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        k = 0 > k ? "" : 0 == k ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.Fa)() + 1E3 * k)).toUTCString();
        this.j.cookie = a + "=" + b + c + g + k + d + (null != e ? ";samesite=" + e : "")
    };
    _.h.get = function (a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = (0, _.eb)(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    _.h.remove = function (a, b, c) {
        var d = void 0 !== this.get(a);
        this.set(a, "", {se: 0, path: b, domain: c});
        return d
    };
    _.h.mb = function () {
        return Ij(this).keys
    };
    _.h.Pa = function () {
        return Ij(this).values
    };
    _.h.zc = function () {
        return !this.j.cookie
    };
    _.h.clear = function () {
        for (var a = Ij(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    Ij = function (a) {
        a = (a.j.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = (0, _.eb)(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {keys: b, values: c}
    };
    _.Jj = new _.Hj("undefined" == typeof document ? null : document);

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.Kj = function (a) {
        switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                return !0;
            default:
                return !1
        }
    };
    _.Lj = function () {
    };
    _.Lj.prototype.o = null;
    var Nj;
    Nj = function () {
    };
    _.v(Nj, _.Lj);
    Nj.prototype.j = function () {
        var a = Oj(this);
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    Nj.prototype.A = function () {
        var a = {};
        Oj(this) && (a[0] = !0, a[1] = !0);
        return a
    };
    var Oj = function (a) {
        if (!a.w && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.w = d
                } catch (e) {
                }
            }
            throw Error("V");
        }
        return a.w
    };
    _.Mj = new Nj;

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.Pj = function (a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            for (var d = _.A(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
    };
    _.Qj = function (a, b, c) {
        _.Pj(a, b, c);
        b = a.j[c];
        b == _.tc && (b = a.j[c] = []);
        return b
    };
    _.Rj = function (a) {
        return a.contentDocument || a.contentWindow.document
    };
    _.Sj = function (a, b) {
        this.o = {};
        this.j = [];
        this.w = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("j");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof _.Sj)
                for (c = a.mb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    _.Sj.prototype.Pa = function () {
        Tj(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.o[this.j[b]]);
        return a
    };
    _.Sj.prototype.mb = function () {
        Tj(this);
        return this.j.concat()
    };
    _.Vj = function (a, b) {
        return Uj(a.o, b)
    };
    _.Sj.prototype.zc = function () {
        return 0 == this.w
    };
    _.Sj.prototype.clear = function () {
        this.o = {};
        this.w = this.j.length = 0
    };
    _.Sj.prototype.remove = function (a) {
        return Uj(this.o, a) ? (delete this.o[a], this.w--, this.j.length > 2 * this.w && Tj(this), !0) : !1
    };
    var Tj = function (a) {
        if (a.w != a.j.length) {
            for (var b = 0, c = 0; b < a.j.length;) {
                var d = a.j[b];
                Uj(a.o, d) && (a.j[c++] = d);
                b++
            }
            a.j.length = c
        }
        if (a.w != a.j.length) {
            var e = {};
            for (c = b = 0; b < a.j.length;) d = a.j[b], Uj(e, d) || (a.j[c++] = d, e[d] = 1), b++;
            a.j.length = c
        }
    };
    _.Sj.prototype.get = function (a, b) {
        return Uj(this.o, a) ? this.o[a] : b
    };
    _.Sj.prototype.set = function (a, b) {
        Uj(this.o, a) || (this.w++, this.j.push(a));
        this.o[a] = b
    };
    _.Sj.prototype.forEach = function (a, b) {
        for (var c = this.mb(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    var Uj = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var ck;
    _.Wj = function (a) {
        return encodeURIComponent(String(a))
    };
    _.Xj = function (a, b, c, d, e, f) {
        var g = "";
        a && (g += a + ":");
        c && (g += "//", b && (g += b + "@"), g += c, d && (g += ":" + d));
        e && (g += e);
        f && (g += "?" + f);
        return g
    };
    _.Yj = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    _.Zj = function (a) {
        a = a.match(_.Yj)[1] || null;
        !a && _.p.self && _.p.self.location && (a = _.p.self.location.protocol, a = a.substr(0, a.length - 1));
        return a ? a.toLowerCase() : ""
    };
    _.ak = function (a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.substr(0, d), e, a.substr(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    };
    _.bk = function (a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) _.bk(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + _.Wj(b)))
    };
    ck = function (a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) _.bk(a[b], a[b + 1], c);
        return c.join("&")
    };
    _.dk = function (a, b) {
        var c = 2 == arguments.length ? ck(arguments[1], 0) : ck(arguments, 1);
        return _.ak(a, c)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var ek, gk, ik, jk, lk, mk, ok, pk, uk;
    ek = function (a) {
        if (Array.isArray(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? ek(d) : d)
            }
            return b
        }
        if (_.sc && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? ek(d) : d);
        return b
    };
    _.fk = function (a) {
        return new a.constructor(ek(a.tb()))
    };
    gk = function (a, b) {
        a.o = b;
        a.Lb && a.wc ? (a.stop(), a.start()) : a.Lb && a.stop()
    };
    _.hk = function (a, b, c) {
        a.j || (a.j = {});
        c = c || [];
        for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].tb();
        a.j[b] = c;
        return _.E(a, b, d)
    };
    ik = function (a) {
        return a.o || (a.o = a.A())
    };
    jk = function (a) {
        if (a.Pa && "function" == typeof a.Pa) return a.Pa();
        if ("string" === typeof a) return a.split("");
        if (_.Ud(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return _.Nf(a)
    };
    lk = function (a) {
        a: {
            var b = kk;
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    mk = function (a) {
        var b = b || 0;
        return function () {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    };
    ok = function () {
        this.j = nk
    };
    ok.prototype.o = function () {
        return !!this.j
    };
    pk = function (a, b) {
        return a + Math.random() * (b - a)
    };
    _.qk = function (a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
        else if (_.Ud(a) || "string" === typeof a) (0, _.Ka)(a, b, void 0);
        else {
            if (a.mb && "function" == typeof a.mb) var c = a.mb();
            else if (a.Pa && "function" == typeof a.Pa) c = void 0;
            else if (_.Ud(a) || "string" === typeof a) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++) c.push(e)
            } else
                for (e in c = [], d = 0, a) c[d++] = e;
            d = jk(a);
            e = d.length;
            for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        }
    };
    _.rk = function (a, b, c) {
        c = null != c ? "=" + _.Wj(c) : "";
        return _.ak(a, b + c)
    };
    _.sk = function (a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    };
    _.tk = /#|$/;
    uk = /[?&]($|#)/;
    _.vk = function (a, b) {
        for (var c = a.search(_.tk), d = 0, e, f = []; 0 <= (e = _.sk(a, d, b, c));) f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c);
        f.push(a.substr(d));
        return f.join("").replace(uk, "$1")
    };
    var wk = function (a) {
        if (!a) return "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/");
        -1 != c && (b = b.substring(0, c));
        a = a.substring(0, a.indexOf("://"));
        if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "chrome-untrusted" !== a && "chrome" !== a && "app" !== a) throw Error("W`" + a);
        c = "";
        var d = b.indexOf(":");
        if (-1 !=
            d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if ("http" === a && "80" !== e || "https" === a && "443" !== e) c = ":" + e
        }
        return a + "://" + b + c
    };
    var xk = function () {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            r = m = 0
        }

        function b(t) {
            for (var F = g, D = 0; 64 > D; D += 4) F[D / 4] = t[D] << 24 | t[D + 1] << 16 | t[D + 2] << 8 | t[D + 3];
            for (D = 16; 80 > D; D++) t = F[D - 3] ^ F[D - 8] ^ F[D - 14] ^ F[D - 16], F[D] = (t << 1 | t >>> 31) & 4294967295;
            t = e[0];
            var R = e[1],
                K = e[2],
                ea = e[3],
                Nc = e[4];
            for (D = 0; 80 > D; D++) {
                if (40 > D)
                    if (20 > D) {
                        var wa = ea ^ R & (K ^ ea);
                        var Oc = 1518500249
                    } else wa = R ^ K ^ ea, Oc = 1859775393;
                else 60 > D ? (wa = R & K | ea & (R | K), Oc = 2400959708) : (wa = R ^ K ^ ea, Oc = 3395469782);
                wa = ((t << 5 | t >>>
                    27) & 4294967295) + wa + Nc + Oc + F[D] & 4294967295;
                Nc = ea;
                ea = K;
                K = (R << 30 | R >>> 2) & 4294967295;
                R = t;
                t = wa
            }
            e[0] = e[0] + t & 4294967295;
            e[1] = e[1] + R & 4294967295;
            e[2] = e[2] + K & 4294967295;
            e[3] = e[3] + ea & 4294967295;
            e[4] = e[4] + Nc & 4294967295
        }

        function c(t, F) {
            if ("string" === typeof t) {
                t = unescape(encodeURIComponent(t));
                for (var D = [], R = 0, K = t.length; R < K; ++R) D.push(t.charCodeAt(R));
                t = D
            }
            F || (F = t.length);
            D = 0;
            if (0 == m)
                for (; D + 64 < F;) b(t.slice(D, D + 64)), D += 64, r += 64;
            for (; D < F;)
                if (f[m++] = t[D++], r++, 64 == m)
                    for (m = 0, b(f); D + 64 < F;) b(t.slice(D, D + 64)), D += 64, r +=
                        64
        }

        function d() {
            var t = [],
                F = 8 * r;
            56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
            for (var D = 63; 56 <= D; D--) f[D] = F & 255, F >>>= 8;
            b(f);
            for (D = F = 0; 5 > D; D++)
                for (var R = 24; 0 <= R; R -= 8) t[F++] = e[D] >> R & 255;
            return t
        }

        for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
        var m, r;
        a();
        return {
            reset: a, update: c, digest: d, vh: function () {
                for (var t = d(), F = "", D = 0; D < t.length; D++) F += "0123456789ABCDEF".charAt(Math.floor(t[D] / 16)) + "0123456789ABCDEF".charAt(t[D] % 16);
                return F
            }
        }
    };
    var zk = function (a, b, c) {
            var d = [],
                e = [];
            if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], (0, _.Ka)(d, function (k) {
                e.push(k)
            }), yk(e.join(" "));
            var f = [],
                g = [];
            (0, _.Ka)(c, function (k) {
                g.push(k.key);
                f.push(k.value)
            });
            c = Math.floor((new Date).getTime() / 1E3);
            e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
            (0, _.Ka)(d, function (k) {
                e.push(k)
            });
            a = yk(e.join(" "));
            a = [c, a];
            0 == g.length || a.push(g.join(""));
            return a.join("_")
        },
        yk = function (a) {
            var b = xk();
            b.update(a);
            return b.vh().toLowerCase()
        };
    _.Ak = function (a) {
        var b = wk(String(_.p.location.href)),
            c;
        (c = _.p.__SAPISID || _.p.__APISID || _.p.__OVERRIDE_SID) ? c = !0 : (c = new _.Hj(document), c = c.get("SAPISID") || c.get("APISID") || c.get("__Secure-3PAPISID") || c.get("SID"), c = !!c);
        if (c && (c = (b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:")) ? _.p.__SAPISID : _.p.__APISID, c || (c = new _.Hj(document), c = c.get(b ? "SAPISID" : "APISID") || c.get("__Secure-3PAPISID")), c)) {
            b = b ? "SAPISIDHASH" : "APISIDHASH";
            var d = String(_.p.location.href);
            return d && c && b ? [b, zk(wk(d), c, a || null)].join(" ") :
                null
        }
        return null
    };
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.Bk = function (a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {
        }
        throw Error("X`" + a);
    };
    _.Ck = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    var Dk = function (a) {
        this.o = this.j = this.w = a
    };
    Dk.prototype.reset = function () {
        this.o = this.j = this.w
    };
    var Ek = function (a) {
            _.P.call(this);
            this.headers = new _.Sj;
            this.G = a || null;
            this.o = !1;
            this.D = this.j = null;
            this.H = "";
            this.Qc = 0;
            this.w = this.L = this.A = this.J = !1;
            this.C = 0;
            this.B = null;
            this.S = "";
            this.N = this.O = !1
        },
        Fk, Gk, Hk;
    _.v(Ek, _.P);
    Fk = /^https?$/i;
    Gk = ["POST", "PUT"];
    Hk = [];
    _.Ik = function (a, b, c, d, e, f, g) {
        var k = new Ek;
        Hk.push(k);
        b && k.K("complete", b);
        k.Gb("ready", k.T);
        f && (k.C = Math.max(0, f));
        g && (k.O = g);
        k.send(a, c, d, e)
    };
    Ek.prototype.T = function () {
        this.ta();
        _.hf(Hk, this)
    };
    Ek.prototype.send = function (a, b, c, d) {
        if (this.j) throw Error("Z`" + this.H + "`" + a);
        b = b ? b.toUpperCase() : "GET";
        this.H = a;
        this.Qc = 0;
        this.J = !1;
        this.o = !0;
        this.j = this.G ? this.G.j() : _.Mj.j();
        this.D = this.G ? ik(this.G) : ik(_.Mj);
        this.j.onreadystatechange = (0, _.q)(this.P, this);
        try {
            this.L = !0, this.j.open(b, String(a), !0), this.L = !1
        } catch (f) {
            Jk(this);
            return
        }
        a = c || "";
        var e = new _.Sj(this.headers);
        d && _.qk(d, function (f, g) {
            e.set(g, f)
        });
        d = lk(e.mb());
        c = _.p.FormData && a instanceof _.p.FormData;
        !_.Oa(Gk, b) || d || c || e.set("Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function (f, g) {
            this.j.setRequestHeader(g, f)
        }, this);
        this.S && (this.j.responseType = this.S);
        "withCredentials" in this.j && this.j.withCredentials !== this.O && (this.j.withCredentials = this.O);
        try {
            Kk(this), 0 < this.C && ((this.N = Lk(this.j)) ? (this.j.timeout = this.C, this.j.ontimeout = (0, _.q)(this.Ld, this)) : this.B = _.dg(this.Ld, this.C, this)), this.A = !0, this.j.send(a), this.A = !1
        } catch (f) {
            Jk(this)
        }
    };
    var Lk = function (a) {
            return _.x && _.ec(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        },
        kk = function (a) {
            return "content-type" == a.toLowerCase()
        };
    Ek.prototype.Ld = function () {
        "undefined" != typeof _.ta && this.j && (this.Qc = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    var Jk = function (a) {
            a.o = !1;
            a.j && (a.w = !0, a.j.abort(), a.w = !1);
            a.Qc = 5;
            Mk(a);
            Nk(a)
        },
        Mk = function (a) {
            a.J || (a.J = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    Ek.prototype.abort = function (a) {
        this.j && this.o && (this.o = !1, this.w = !0, this.j.abort(), this.w = !1, this.Qc = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Nk(this))
    };
    Ek.prototype.R = function () {
        this.j && (this.o && (this.o = !1, this.w = !0, this.j.abort(), this.w = !1), Nk(this, !0));
        Ek.M.R.call(this)
    };
    Ek.prototype.P = function () {
        this.Wa || (this.L || this.A || this.w ? Ok(this) : this.U())
    };
    Ek.prototype.U = function () {
        Ok(this)
    };
    var Ok = function (a) {
            if (a.o && "undefined" != typeof _.ta && (!a.D[1] || 4 != (a.j ? a.j.readyState : 0) || 2 != a.vc()))
                if (a.A && 4 == (a.j ? a.j.readyState : 0)) _.dg(a.P, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == (a.j ? a.j.readyState : 0)) {
                    a.o = !1;
                    try {
                        a.ne() ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.Qc = 6, a.vc(), Mk(a))
                    } finally {
                        Nk(a)
                    }
                }
        },
        Nk = function (a, b) {
            if (a.j) {
                Kk(a);
                var c = a.j,
                    d = a.D[0] ? _.ua : null;
                a.j = null;
                a.D = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                }
            }
        },
        Kk = function (a) {
            a.j && a.N &&
            (a.j.ontimeout = null);
            a.B && (_.eg(a.B), a.B = null)
        };
    Ek.prototype.ne = function () {
        var a = this.vc(),
            b;
        if (!(b = _.Kj(a))) {
            if (a = 0 === a) a = _.Zj(String(this.H)), a = !Fk.test(a);
            b = a
        }
        return b
    };
    Ek.prototype.vc = function () {
        try {
            return 2 < (this.j ? this.j.readyState : 0) ? this.j.status : -1
        } catch (a) {
            return -1
        }
    };
    Ek.prototype.Zd = function () {
        try {
            return this.j ? this.j.responseText : ""
        } catch (a) {
            return ""
        }
    };
    Ek.prototype.Vf = function () {
        if (this.j) {
            a: {
                var a = this.j.responseText;
                if (_.p.JSON) try {
                    var b = _.p.JSON.parse(a);
                    break a
                } catch (c) {
                }
                b = _.Bk(a)
            }
            return b
        }
    };
    var Pk = function (a, b, c) {
        _.Ik(a.url, function (d) {
            d = d.target;
            d.ne() ? b(d.Zd()) : c(d.vc())
        }, a.$j, a.body, a.Zj, a.uk, a.withCredentials)
    };
    var Qk = function (a) {
        _.z(this, a, 0, -1, null, null)
    };
    _.v(Qk, _.y);
    Qk.prototype.Xc = function (a) {
        return _.E(this, 5, a)
    };
    var Rk = function (a) {
        _.z(this, a, 0, -1, null, null)
    };
    _.v(Rk, _.y);
    var Sk;
    _.Tk = function (a) {
        _.z(this, a, 0, 30, Sk, null)
    };
    _.v(_.Tk, _.y);
    Sk = [3, 20, 27];
    _.Uk = function (a) {
        var b = (0, _.Fa)().toString();
        _.E(a, 1, b)
    };
    _.Vk = function (a, b) {
        return _.E(a, 8, b)
    };
    var Xk = function (a) {
        _.z(this, a, 0, 17, Wk, null)
    };
    _.v(Xk, _.y);
    var Wk = [3, 5],
        Yk = function (a) {
            var b = (0, _.Fa)().toString();
            return _.E(a, 4, b)
        },
        Zk = function (a, b) {
            return _.hk(a, 3, b)
        },
        $k = function (a, b) {
            return _.E(a, 14, b)
        };
    var bl = function (a) {
        _.z(this, a, 0, 6, al, null)
    };
    _.v(bl, _.y);
    var al = [5];
    var nk = function (a) {
        _.z(this, a, 0, -1, null, null)
    };
    _.v(nk, _.y);
    var cl = new ok;
    var el = function (a, b, c, d, e, f, g, k, l, m, r) {
        _.P.call(this);
        this.W = a;
        this.S = b || _.ua;
        this.B = new Xk;
        this.Z = d;
        this.U = r;
        this.j = [];
        this.T = "";
        this.$ = _.Qd(pk, 0, 1);
        this.J = e || null;
        this.D = c || null;
        this.H = g || !1;
        this.L = l || null;
        this.V = !1;
        this.X = this.N = -1;
        this.P = !1;
        this.w = null;
        this.ka = !k;
        this.O = 0;
        this.sa = 1;
        this.Y = f || !1;
        a = new Rk;
        a = _.E(a, 1, 1);
        f || (f = (new Qk).Xc(document.documentElement.getAttribute("lang")), _.H(a, 11, f));
        _.H(this.B, 1, a);
        _.E(this.B, 2, this.W);
        this.A = new Dk(1E4);
        this.o = new _.cg(this.A.j);
        _.Mf(this, this.o);
        _.O(this.o,
            "tick", mk(dl(this, m)), !1, this);
        this.G = new _.cg(6E5);
        _.Mf(this, this.G);
        _.O(this.G, "tick", mk(dl(this, m)), !1, this);
        this.H || this.G.start();
        this.Y || (_.O(_.Vf(), "beforeunload", this.C, !1, this), _.O(_.Vf(), "unload", this.C, !1, this), _.O(document, "pagehide", this.C, !1, this))
    };
    _.v(el, _.P);
    var dl = function (a, b) {
        return b ? function () {
            b().then(a.flush.bind(a))
        } : a.flush
    };
    el.prototype.R = function () {
        this.C();
        el.M.R.call(this)
    };
    var fl = function (a) {
        a.J || (a.J = .01 > a.$() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
        return a.J
    };
    el.prototype.ud = function (a) {
        a instanceof _.Tk ? this.log(a) : (a = _.Vk(new _.Tk, a.o()), this.log(a))
    };
    _.gl = function (a, b) {
        a.A = new Dk(1 > b ? 1 : b);
        gk(a.o, a.A.j)
    };
    el.prototype.log = function (a) {
        a = _.fk(a);
        var b = this.sa++;
        _.E(a, 21, b);
        _.A(a, 1) || _.Uk(a);
        this.w && (b = _.fk(this.w), _.H(a, 16, b));
        for (; 1E3 <= this.j.length;) this.j.shift(), ++this.O;
        this.j.push(a);
        this.dispatchEvent(new hl(a));
        this.H || this.o.wc || this.o.start()
    };
    el.prototype.flush = function (a, b) {
        if (0 == this.j.length) a && a();
        else {
            var c = (0, _.Fa)();
            if (this.X > c && this.N < c) b && b("throttled");
            else {
                var d = $k(Zk(Yk(_.fk(this.B)), this.j), this.O);
                c = {};
                var e = this.S();
                e && (c.Authorization = e);
                var f = fl(this);
                this.D && (c["X-Goog-AuthUser"] = this.D, f = _.rk(f, "authuser", this.D));
                this.L && (c["X-Goog-PageId"] = this.L, f = _.rk(f, "pageId", this.L));
                if (e && this.T == e) b && b("stale-auth-token");
                else {
                    this.j = [];
                    this.o.wc && this.o.stop();
                    this.O = 0;
                    var g = d.o();
                    c = {
                        url: f,
                        body: g,
                        zl: 1,
                        Zj: c,
                        $j: "POST",
                        withCredentials: this.ka,
                        uk: 0
                    };
                    f = (0, _.q)(function (k) {
                        this.A.reset();
                        gk(this.o, this.A.j);
                        if (k) {
                            try {
                                var l = JSON.parse(k.replace(")]}'\n", ""));
                                var m = new bl(l)
                            } catch (r) {
                            }
                            m && (k = _.C(m, 1, "-1"), k = Number(k), 0 < k && (this.N = (0, _.Fa)(), this.X = this.N + k), _.uc(m), m.j || (m.j = {}), cl.o() ? (!m.j[175237375] && m.A[175237375] && (m.j[175237375] = new cl.j(m.A[175237375])), m = m.j[175237375]) : m = m.A[175237375], m && (m = _.C(m, 1, -1), -1 != m && (this.P || _.gl(this, m))))
                        }
                        a && a()
                    }, this);
                    g = (0, _.q)(function (k) {
                        var l = _.Qj(d, _.Tk, 3),
                            m = this.A;
                        m.o = Math.min(3E5, 2 * m.o);
                        m.j = Math.min(3E5,
                            m.o + Math.round(.2 * (Math.random() - .5) * m.o));
                        gk(this.o, this.A.j);
                        401 == k && e && (this.T = e);
                        if (500 <= k && 600 > k || 401 == k || 0 == k) this.j = l.concat(this.j), this.H || this.o.wc || this.o.start();
                        b && b("net-send-failed", k)
                    }, this);
                    this.U ? this.U.send(c, f, g) : this.Z(c, f, g)
                }
            }
        }
    };
    el.prototype.C = function () {
        this.V && il(this);
        this.flush()
    };
    var il = function (a) {
            jl(a, function (b, c) {
                b = _.rk(b, "format", "json");
                return _.Vf().navigator.sendBeacon(b, c.o())
            })
        },
        jl = function (a, b) {
            if (0 != a.j.length) {
                var c = _.vk(fl(a), "format");
                c = _.dk(c, "auth", a.S(), "authuser", a.D || "0");
                for (var d = 0; 10 > d && a.j.length; ++d) {
                    var e = a.j.slice(0, 32),
                        f = Zk(Yk(_.fk(a.B)), e);
                    if (!b(c, f)) break;
                    a.j = a.j.slice(e.length)
                }
            }
        },
        hl = function () {
            this.type = "event-logged"
        };
    _.v(hl, _.lf);
    _.kl = function (a, b, c, d, e, f, g) {
        el.call(this, a, _.Ak, b, Pk, c, d, e, void 0, f, g)
    };
    _.v(_.kl, el);

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.ml = function (a) {
        (0, _.ll)();
        return _.db(a)
    };
    _.ll = _.ua;

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var xm, zm, Im, Km, Tm, Lm, Nm, Mm, Qm, Om, Jm, Um, Vm, Pm;
    _.wm = function (a) {
        return new _.Xa(_.Va, a)
    };
    xm = function (a) {
        return Array.prototype.concat.apply([], arguments)
    };
    _.ym = function () {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, _.Fa)()).toString(36)
    };
    zm = function (a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    };
    _.Am = function (a, b) {
        this.o = this.G = this.w = "";
        this.D = null;
        this.B = this.A = "";
        this.C = !1;
        var c;
        a instanceof _.Am ? (this.C = void 0 !== b ? b : a.C, _.Bm(this, a.w), this.G = a.G, _.Cm(this, a.o), _.Dm(this, a.D), _.Em(this, a.A), _.Fm(this, _.Gm(a.j)), _.Hm(this, a.B)) : a && (c = String(a).match(_.Yj)) ? (this.C = !!b, _.Bm(this, c[1] || "", !0), this.G = Im(c[2] || ""), _.Cm(this, c[3] || "", !0), _.Dm(this, c[4]), _.Em(this, c[5] || "", !0), _.Fm(this, c[6] || "", !0), _.Hm(this, c[7] || "", !0)) : (this.C = !!b, this.j = new Jm(null, this.C))
    };
    _.Am.prototype.toString = function () {
        var a = [],
            b = this.w;
        b && a.push(Km(b, Lm, !0), ":");
        var c = this.o;
        if (c || "file" == b) a.push("//"), (b = this.G) && a.push(Km(b, Lm, !0), "@"), a.push(_.Wj(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.D, null != c && a.push(":", String(c));
        if (c = this.A) this.o && "/" != c.charAt(0) && a.push("/"), a.push(Km(c, "/" == c.charAt(0) ? Mm : Nm, !0));
        (c = this.j.toString()) && a.push("?", c);
        (c = this.B) && a.push("#", Km(c, Om));
        return a.join("")
    };
    _.Bm = function (a, b, c) {
        a.w = c ? Im(b, !0) : b;
        a.w && (a.w = a.w.replace(/:$/, ""));
        return a
    };
    _.Cm = function (a, b, c) {
        a.o = c ? Im(b, !0) : b;
        return a
    };
    _.Dm = function (a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("ba`" + b);
            a.D = b
        } else a.D = null;
        return a
    };
    _.Em = function (a, b, c) {
        a.A = c ? Im(b, !0) : b;
        return a
    };
    _.Fm = function (a, b, c) {
        b instanceof Jm ? (a.j = b, Pm(a.j, a.C)) : (c || (b = Km(b, Qm)), a.j = new Jm(b, a.C));
        return a
    };
    _.Rm = function (a, b, c) {
        a.j.set(b, c);
        return a
    };
    _.Sm = function (a, b) {
        return a.j.get(b)
    };
    _.Hm = function (a, b, c) {
        a.B = c ? Im(b) : b;
        return a
    };
    Im = function (a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    };
    Km = function (a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, Tm), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    };
    Tm = function (a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    };
    Lm = /[#\/\?@]/g;
    Nm = /[#\?:]/g;
    Mm = /[#\?]/g;
    Qm = /[#\?@]/g;
    Om = /#/g;
    Jm = function (a, b) {
        this.o = this.j = null;
        this.w = a || null;
        this.A = !!b
    };
    Um = function (a) {
        a.j || (a.j = new _.Sj, a.o = 0, a.w && zm(a.w, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    };
    Jm.prototype.add = function (a, b) {
        Um(this);
        this.w = null;
        a = Vm(this, a);
        var c = this.j.get(a);
        c || this.j.set(a, c = []);
        c.push(b);
        this.o += 1;
        return this
    };
    Jm.prototype.remove = function (a) {
        Um(this);
        a = Vm(this, a);
        return _.Vj(this.j, a) ? (this.w = null, this.o -= this.j.get(a).length, this.j.remove(a)) : !1
    };
    Jm.prototype.clear = function () {
        this.j = this.w = null;
        this.o = 0
    };
    Jm.prototype.zc = function () {
        Um(this);
        return 0 == this.o
    };
    _.Wm = function (a, b) {
        Um(a);
        b = Vm(a, b);
        return _.Vj(a.j, b)
    };
    _.h = Jm.prototype;
    _.h.forEach = function (a, b) {
        Um(this);
        this.j.forEach(function (c, d) {
            (0, _.Ka)(c, function (e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    _.h.mb = function () {
        Um(this);
        for (var a = this.j.Pa(), b = this.j.mb(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    _.h.Pa = function (a) {
        Um(this);
        var b = [];
        if ("string" === typeof a) _.Wm(this, a) && (b = xm(b, this.j.get(Vm(this, a))));
        else {
            a = this.j.Pa();
            for (var c = 0; c < a.length; c++) b = xm(b, a[c])
        }
        return b
    };
    _.h.set = function (a, b) {
        Um(this);
        this.w = null;
        a = Vm(this, a);
        _.Wm(this, a) && (this.o -= this.j.get(a).length);
        this.j.set(a, [b]);
        this.o += 1;
        return this
    };
    _.h.get = function (a, b) {
        if (!a) return b;
        a = this.Pa(a);
        return 0 < a.length ? String(a[0]) : b
    };
    _.Xm = function (a, b, c) {
        a.remove(b);
        0 < c.length && (a.w = null, a.j.set(Vm(a, b), _.Vd(c)), a.o += c.length)
    };
    Jm.prototype.toString = function () {
        if (this.w) return this.w;
        if (!this.j) return "";
        for (var a = [], b = this.j.mb(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = _.Wj(d);
            d = this.Pa(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + _.Wj(d[f]));
                a.push(g)
            }
        }
        return this.w = a.join("&")
    };
    _.Gm = function (a) {
        var b = new Jm;
        b.w = a.w;
        a.j && (b.j = new _.Sj(a.j), b.o = a.o);
        return b
    };
    Vm = function (a, b) {
        b = String(b);
        a.A && (b = b.toLowerCase());
        return b
    };
    Pm = function (a, b) {
        b && !a.A && (Um(a), a.w = null, a.j.forEach(function (c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d), _.Xm(this, e, c))
        }, a));
        a.A = b
    };

} catch (e) {
    _._DumpException(e)
}
try {
    _.Ym = function (a) {
        return _.db(_.Ya(a))
    };
    _.Zm = function (a, b) {
        a.src = _.cb(b)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

        Math.uuid.js (v1.4)
        http://www.broofa.com
        mailto:robert@broofa.com
        Copyright (c) 2010 Robert Kieffer
        Dual licensed under the MIT and GPL licenses.
        */
    var $m = function (a) {
            _.z(this, a, 0, -1, null, null)
        },
        en, fn, gn, hn, jn, kn;
    _.v($m, _.y);
    var an = [2],
        bn = function (a) {
            _.z(this, a, 0, -1, an, null)
        };
    _.v(bn, _.y);
    _.cn = function (a) {
        var b = Number(a);
        return 0 == b && _.Rf(a) ? NaN : b
    };
    _.dn = function (a, b, c) {
        _.A(a, b).push(c);
        return a
    };
    en = /^(?:(.*?)\.)?([a-zA-Z_$][\w$]*(?:\/.?<)?)?(\(.*\))?@(?::0|((?:http|https|file):\/\/[^\s)]+|javascript:.*))$/;
    fn = /^\s{3,4}at(?: (?:(.*?)\.)?((?:new )?(?:[a-zA-Z_$][\w$]*|<anonymous>))(?: \[as ([a-zA-Z_$][\w$]*)\])?)? (?:\(unknown source\)|\(native\)|\((?:eval at )?((?:http|https|file):\/\/[^\s)]+|javascript:.*)\)|((?:http|https|file):\/\/[^\s)]+|javascript:.*))$/;
    gn = function (a, b, c, d, e) {
        this.o = a;
        this.name = b;
        this.j = c;
        this.A = d;
        this.w = e
    };
    hn = function (a) {
        this.j = [];
        if (a.stack) {
            a = a.stack.replace(/\s*$/, "").split("\n");
            for (var b = 0; b < a.length; b++) {
                var c, d = en;
                if (c = a[b].match(fn)) c = new gn(c[1] || "", c[2] || "", c[3] || "", "", c[4] || c[5] || ""), this.j.push(c);
                else if (c = a[b].match(d)) c = new gn(c[1] || "", c[2] || "", "", c[3] || "", c[4] || ""), this.j.push(c)
            }
        }
    };
    jn = function (a) {
        return (0, _.Ma)(a.j, function (b) {
            var c = [b.o ? b.o + "." : "", b.name ? b.name : "anonymous", b.A, b.j ? " [as " + b.j + "]" : ""];
            if (b.w) {
                c.push(" at ");
                b = b.w;
                var d = "",
                    e = b.match(/(.*?)(:\d+(:\d+)?)$/);
                e && (b = e[1], d = e[2]);
                c.push(b.replace(window.location.href.replace(/#.*/, ""), "[page]").replace(/http.*?extern_js.*?\.js/, "[xjs]"));
                c.push(d)
            }
            return c.join("")
        })
    };
    kn = function (a, b, c, d, e) {
        _.hd.call(this, a, b, c, d, e);
        this.w = new hn(c)
    };
    _.v(kn, _.hd);
    kn.prototype.j = function () {
        kn.M.j.call(this);
        window.console && window.console.log && window.console.log("Stack: ", this.w)
    };
    kn.prototype.o = function (a) {
        var b = kn.M.o.call(this, a) + "&jsst=";
        var c = this.w;
        a -= b.length;
        if (4 > a) a = "";
        else if (0 == c.j.length) a = "none";
        else {
            c = jn(c);
            var d;
            var e = c.length - 2;
            for (d = _.Wj(c.join("\n")); 0 < e && d.length > a; e--, d = _.Wj(c.join("\n"))) e == c.length - 2 ? c[e] = "[...]" : c.splice(e, 1);
            a = d.substr(0, a)
        }
        return b + a
    };
    var ln = function (a, b, c) {
        _.I.call(this);
        this.o = a;
        this.w = b;
        this.A = c
    };
    _.n(ln, _.I);
    ln.prototype.j = function (a, b) {
        return new kn(this.o, this.w, a, this.A, b)
    };
    var mn = [1, 2, 3, 4],
        nn = function (a) {
            _.z(this, a, 0, -1, mn, null)
        };
    _.v(nn, _.y);
    var on = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    };
    var pn = function (a, b) {
        _.I.call(this);
        this.D = b;
        this.Y = 0;
        this.B = _.Sc(_.xc(a, 2, 1E-4), .001);
        this.A = _.Sc(_.xc(a, 10, 0), 0);
        this.U = _.L(_.A(a, 21), "");
        this.V = _.Sc(_.A(a, 4), 0);
        this.T = _.Sc(_.A(a, 5), -1);
        this.S = _.L(_.A(a, 7), "");
        this.N = _.L(_.A(a, 6), "");
        this.L = _.L(_.A(a, 8), "");
        this.H = _.A(a, 9);
        this.X = !!_.B(a, 11);
        this.P = !!_.B(a, 12);
        this.J = !!_.B(a, 15);
        this.W = _.B(a, 22);
        this.G = !!_.B(a, 16);
        this.o = null != _.A(a, 17) ? _.A(a, 17).split(",") : [];
        var c = Math.random();
        this.C = _.J(_.B(a, 1)) && c < this.B;
        this.w = _.J(_.B(a, 1)) && c < this.A;
        this.O =
            "og-" + on();
        if (this.C || this.w) {
            a = this.j = new _.kl(373, _.L(_.A(b, 5)));
            a.P = !0;
            _.gl(a, 1E3);
            this.j.V = !!_.Vf().navigator.sendBeacon && (_.nc || _.jc && _.ec(45));
            if (0 != this.o.length) {
                a = new nn;
                for (b = 0; b < this.o.length; b++) c = Number(this.o[b]), isNaN(c) || 0 == c || _.dn(a, 3, c);
                b = this.j;
                a ? (b.w || (b.w = new bn), a = a.o(), _.E(b.w, 4, a)) : b.w && _.E(b.w, 4, void 0)
            }
            _.Mf(this, this.j)
        }
    };
    _.v(pn, _.I);
    var qn = [1, 61];
    pn.prototype.log = function (a, b) {
        var c = !_.Oa(qn, a);
        if (c ? this.C : this.w) {
            b = (void 0 === b ? null : b) || new _.Bc;
            _.E(b, 1, a);
            var d = ++this.Y;
            _.E(b, 38, d);
            _.E(b, 2, this.V);
            _.E(b, 4, c ? this.B : this.A);
            _.E(b, 6, this.U);
            _.E(b, 3, this.T);
            _.E(b, 11, this.N);
            _.E(b, 10, this.S);
            _.E(b, 5, this.L);
            window.performance && window.performance.timing && _.E(b, 14, (new Date).getTime() - window.performance.timing.navigationStart);
            _.E(b, 13, this.H);
            _.E(b, 16, this.X);
            _.E(b, 17, this.P);
            _.E(b, 19, this.O);
            c = 0;
            _.B(this.D, 1) && (c |= 1);
            _.B(this.D, 3) && (c |= 4);
            _.E(b,
                12, c);
            _.E(b, 25, this.J);
            _.E(b, 26, this.G);
            1 === a && _.E(b, 51, this.W);
            a = new _.Tk;
            _.Vk(a, b.o());
            this.j.log(a)
        }
    };
    var rn, sn, un, vn, wn;
    rn = _.G(_.sd, $m, 16) || new $m;
    sn = _.ud() || new _.Ec;
    _.tn = new pn(rn, sn);
    un = _.td() || new _.Dc;
    wn = _.G(_.sd, _.Qc, 14) || new _.Qc;
    vn = _.A(wn, 9);
    var xn = _.xc(_.G(_.sd, _.id, 3) || new _.id, 2, .001);
    _.wd.o = new ln(un, vn, xn);
    _.wd.j = _.tn;

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.Rn = function (a, b) {
        b = b instanceof _.jb ? b : _.nb(b);
        a.href = _.kb(b)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var Tn;
    _.Sn = function (a, b) {
        return _.E(a, 27, b)
    };
    Tn = function (a, b) {
        b = b instanceof _.jb ? b : _.nb(b);
        a.action = _.kb(b)
    };
    _.Un = function (a) {
        _.z(this, a, 0, -1, null, null)
    };
    _.v(_.Un, _.y);
    _.Vn = function (a, b) {
        return _.E(a, 2, b)
    };
    var Wn = function (a, b, c) {
            this.groupId = a;
            this.C = "dp_" + a;
            this.D = "count_" + a;
            this.A = b;
            this.j = !!c
        },
        Xn = /google(?:.[a-z]{2,3}){1,2}$/i,
        Yn = function () {
            var a = _.p.location.hostname.match(Xn);
            return a && a[0] ? a[0] : null
        };
    Wn.prototype.Be = function () {
        return !!navigator.cookieEnabled
    };
    Wn.prototype.Ma = function (a) {
        this.Be() && this.Mc(!1, a)
    };
    Wn.prototype.accept = function (a) {
        this.Be() && this.Mc(!0, a)
    };
    Wn.prototype.Mc = function () {
        throw Error("da");
    };
    _.Zn = function (a) {
        0 < a.A && a.Be() && a.Dd(void 0, void 0)
    };
    Wn.prototype.Dd = function () {
        throw Error("da");
    };
    Wn.prototype.Ub = function () {
        return 0
    };
    Wn.prototype.$e = function () {
        return !1
    };
    _.$n = function (a, b, c, d, e) {
        Wn.call(this, b, c);
        this.o = e;
        this.w = !d || -2 == d || 31536E3 < d ? 31536E3 : d;
        this.B = new RegExp("\\b" + this.groupId + "-([0-9]+):")
    };
    _.v(_.$n, Wn);
    _.h = _.$n.prototype;
    _.h.Be = function () {
        navigator.cookieEnabled || (this.w = -1);
        return !0
    };
    _.h.Mc = function (a, b) {
        var c = _.Jj.get("OGP", ""),
            d = "-" + this.groupId + ":";
        (new RegExp(d)).test(c) || (c += d);
        (d = Yn()) && _.Jj.set("OGP", c, {se: this.w, path: "/", domain: d});
        this.o && this.o.Mc(a, b)
    };
    _.h.Dd = function (a) {
        var b = _.Jj.get("OGPC", ""),
            c = this.Ub(b),
            d = !0;
        -1 == c && (d = !1, c = 0);
        a = this.groupId + "-" + (c + (a || 1)) + ":";
        b = d ? b.replace(this.B, a) : (b ? b : "") + a;
        (d = Yn()) && _.Jj.set("OGPC", b, {se: this.w, path: "/", domain: d});
        this.o && this.o.Dd()
    };
    _.h.Ub = function (a) {
        var b = a || _.Jj.get("OGPC", "");
        a = -1;
        b && (b = b.match(this.B)) && 1 < b.length && (a = parseInt(b[1], 10) || 0);
        return a
    };
    _.h.$e = function () {
        return -1 != _.Jj.get("OGP", "").indexOf("-" + this.groupId + ":")
    };
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.ao = function () {
    };
    _.v(_.ao, _.Lj);
    _.ao.prototype.j = function () {
        var a = new XMLHttpRequest;
        if ("withCredentials" in a) return a;
        if ("undefined" != typeof XDomainRequest) return new bo;
        throw Error("ea");
    };
    _.ao.prototype.A = function () {
        return {}
    };
    var bo = function () {
        this.j = new XDomainRequest;
        this.readyState = 0;
        this.onreadystatechange = null;
        this.responseType = this.responseText = "";
        this.status = -1;
        this.statusText = "";
        this.j.onload = (0, _.q)(this.Vh, this);
        this.j.onerror = (0, _.q)(this.Yf, this);
        this.j.onprogress = (0, _.q)(this.Gi, this);
        this.j.ontimeout = (0, _.q)(this.Ni, this)
    };
    _.h = bo.prototype;
    _.h.open = function (a, b, c) {
        if (null != c && !c) throw Error("fa");
        this.j.open(a, b)
    };
    _.h.send = function (a) {
        if (a)
            if ("string" == typeof a) this.j.send(a);
            else throw Error("ga");
        else this.j.send()
    };
    _.h.abort = function () {
        this.j.abort()
    };
    _.h.setRequestHeader = function () {
    };
    _.h.getResponseHeader = function (a) {
        return "content-type" == a.toLowerCase() ? this.j.contentType : ""
    };
    _.h.Vh = function () {
        this.status = 200;
        this.responseText = this.j.responseText;
        co(this, 4)
    };
    _.h.Yf = function () {
        this.status = 500;
        this.responseText = "";
        co(this, 4)
    };
    _.h.Ni = function () {
        this.Yf()
    };
    _.h.Gi = function () {
        this.status = 200;
        co(this, 1)
    };
    var co = function (a, b) {
        a.readyState = b;
        if (a.onreadystatechange) a.onreadystatechange()
    };
    bo.prototype.getAllResponseHeaders = function () {
        return "content-type: " + this.j.contentType
    };
    var go = function () {
            _.P.call(this);
            this.o = "closure_frame" + eo++;
            this.w = [];
            fo[this.o] = this
        },
        ho;
    _.v(go, _.P);
    var fo = {},
        eo = 0,
        io = function (a, b) {
            var c = _.$f(a);
            _.qk(b, function (d, e) {
                Array.isArray(d) || (d = [d]);
                (0, _.Ka)(d, function (f) {
                    f = c.Ba("INPUT", {type: "hidden", name: e, value: f});
                    a.appendChild(f)
                })
            })
        };
    _.h = go.prototype;
    _.h.Ga = null;
    _.h.Ka = null;
    _.h.Gc = null;
    _.h.oj = 0;
    _.h.xc = !1;
    _.h.Ce = !1;
    _.h.re = null;
    _.h.Fc = null;
    _.h.send = function (a, b, c, d) {
        if (this.xc) throw Error("ha");
        a = new _.Am(a);
        b = b ? b.toUpperCase() : "GET";
        c && _.Rm(a, "zx", _.ym());
        ho || (ho = _.rg("FORM"), ho.acceptCharset = "utf-8", c = ho.style, c.position = "absolute", c.visibility = "hidden", c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = "hidden", document.body.appendChild(ho));
        this.Ga = ho;
        "GET" == b && io(this.Ga, a.j);
        d && io(this.Ga, d);
        d = this.Ga;
        a = a.toString();
        (0, _.ll)();
        Tn(d, new _.jb(_.hb, a));
        this.Ga.method = b;
        this.xc = !0;
        this.Gc = this.o + "_" + (this.oj++).toString(36);
        this.Ka = _.$f(this.Ga).Ba("IFRAME", {name: this.Gc, id: this.Gc});
        _.x && 7 > Number(_.dc) && Tn(this.Ka, new _.jb(_.hb, _.Ya(_.wm('javascript:""'))));
        d = this.Ka.style;
        d.visibility = "hidden";
        d.width = d.height = "10px";
        d.display = "none";
        _.Qb ? d.marginTop = d.marginLeft = "-10px" : (d.position = "absolute", d.top = d.left = "-10px");
        if (_.x && !_.ec("11")) {
            this.Ga.target = this.Gc || "";
            _.$f(this.Ga).j.body.appendChild(this.Ka);
            _.O(this.Ka, "readystatechange", this.lf, !1, this);
            try {
                this.j = !1, this.Ga.submit()
            } catch (t) {
                _.Gf(this.Ka, "readystatechange",
                    this.lf, !1, this), jo(this)
            }
        } else {
            _.$f(this.Ga).j.body.appendChild(this.Ka);
            d = this.Gc + "_inner";
            a = _.Rj(this.Ka);
            document.baseURI ? (b = _.ge(d), b = _.Db('<head><base href="' + _.ge(document.baseURI) + '"></head><body><iframe id="' + b + '" name="' + b + '"></iframe>', null)) : (b = _.ge(d), b = _.Db('<body><iframe id="' + b + '" name="' + b + '"></iframe>', null));
            _.Mb && !_.Qb ? _.Of(a.documentElement, b) : a.write(_.Cb(b));
            _.O(a.getElementById(d), "load", this.we, !1, this);
            var e = _.me("TEXTAREA", this.Ga);
            b = 0;
            for (c = e.length; b < c; b++) {
                var f = e[b].value,
                    g = [];
                _.vg(e[b], g, !1);
                g.join("") != f && (_.sg(e[b], f), e[b].value = f)
            }
            e = a.importNode(this.Ga, !0);
            e.target = d;
            e.action = this.Ga.action;
            a.body.appendChild(e);
            f = _.me("SELECT", this.Ga);
            g = _.me("SELECT", e);
            b = 0;
            for (c = f.length; b < c; b++)
                for (var k = _.me("OPTION", f[b]), l = _.me("OPTION", g[b]), m = 0, r = k.length; m < r; m++) l[m].selected = k[m].selected;
            f = _.me("INPUT", this.Ga);
            g = _.me("INPUT", e);
            b = 0;
            for (c = f.length; b < c; b++)
                if ("file" == f[b].type && f[b].value != g[b].value) {
                    this.Ga.target = d;
                    e = this.Ga;
                    break
                }
            try {
                this.j = !1, e.submit(), a.close(),
                _.Pb && _.dg(this.C, 250, this)
            } catch (t) {
                _.Gf(a.getElementById(d), "load", this.we, !1, this), a.close(), jo(this)
            }
        }
        ko(this)
    };
    _.h.abort = function () {
        if (this.xc) {
            var a = lo(this);
            if (a)
                if (_.pf(a)) a.Eb && _.Pf(a.Eb);
                else if (a = _.Cf(a)) {
                    var b = 0,
                        c;
                    for (c in a.j)
                        for (var d = a.j[c].concat(), e = 0; e < d.length; ++e) _.Hf(d[e]) && ++b
                }
            this.Ce = this.xc = !1;
            this.dispatchEvent("abort");
            mo(this)
        }
    };
    _.h.R = function () {
        this.xc && this.abort();
        go.M.R.call(this);
        this.Ka && no(this);
        ko(this);
        delete this.B;
        this.re = this.Ga = null;
        delete fo[this.o]
    };
    _.h.ne = function () {
        return this.Ce
    };
    _.h.Zd = function () {
        return this.re
    };
    _.h.Vf = function () {
        return _.Bk(this.re)
    };
    _.h.lf = function () {
        if ("complete" == this.Ka.readyState) {
            _.Gf(this.Ka, "readystatechange", this.lf, !1, this);
            try {
                var a = _.Rj(this.Ka);
                if (_.x && "about:blank" == a.location && !navigator.onLine) {
                    jo(this);
                    return
                }
            } catch (b) {
                jo(this);
                return
            }
            oo(this, a)
        }
    };
    _.h.we = function () {
        if (!_.Mb || _.Qb || "about:blank" != (this.Ka ? _.Rj(lo(this)) : null).location) {
            _.Gf(lo(this), "load", this.we, !1, this);
            try {
                oo(this, this.Ka ? _.Rj(lo(this)) : null)
            } catch (a) {
                jo(this)
            }
        }
    };
    var oo = function (a, b) {
            a.xc = !1;
            try {
                var c = b.body;
                a.re = c.textContent || c.innerText
            } catch (e) {
                var d = 1
            }
            d || "function" != typeof a.B || (b = a.B(b)) && (d = 4);
            d ? jo(a) : (a.Ce = !0, a.dispatchEvent("complete"), a.dispatchEvent("success"), mo(a))
        },
        jo = function (a) {
            a.j || (a.Ce = !1, a.xc = !1, a.dispatchEvent("complete"), a.dispatchEvent("error"), mo(a), a.j = !0)
        },
        mo = function (a) {
            no(a);
            ko(a);
            a.Ga = null;
            a.dispatchEvent("ready")
        },
        no = function (a) {
            var b = a.Ka;
            b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.w.push(b));
            a.Fc && (_.eg(a.Fc),
                a.Fc = null);
            _.Pb || _.Mb && !_.Qb ? a.Fc = _.dg(a.A, 2E3, a) : a.A();
            a.Ka = null;
            a.Gc = null
        };
    go.prototype.A = function () {
        this.Fc && (_.eg(this.Fc), this.Fc = null);
        for (; 0 != this.w.length;) {
            var a = this.w.pop();
            _.we(a)
        }
    };
    var ko = function (a) {
            a.Ga && a.Ga == ho && _.ve(a.Ga)
        },
        lo = function (a) {
            return a.Ka ? _.x && !_.ec("11") ? a.Ka : _.Rj(a.Ka).getElementById(a.Gc + "_inner") : null
        };
    go.prototype.C = function () {
        if (this.xc) {
            var a = this.Ka ? _.Rj(lo(this)) : null;
            a && !_.kf(a, "documentUri") ? (_.Gf(lo(this), "load", this.we, !1, this), jo(this)) : _.dg(this.C, 250, this)
        }
    };
    var po;
    po = window.location.protocol + "//www.google.com/_/og/promos/";
    _.qo = function (a, b, c, d, e, f, g) {
        var k = {};
        k.p = c;
        k.g = b;
        k.a = d;
        k.at = e;
        k.eid = f;
        k.pid = 1;
        if (g) k.t = g;
        else return a.log(Error("ia")), null;
        return k
    };
    _.ro = function (a, b, c) {
        if (a) {
            var d = [po, c ? "g" : "z"];
            c && b && d.push(["?authuser=", b].join(""));
            b = d.join("");
            try {
                _.Mj = new _.ao;
                c = [];
                for (var e in a) a.hasOwnProperty(e) && c.push(e + "=" + a[e]);
                _.Ik(b, null, "POST", c.join("&"), null, void 0, !0)
            } catch (f) {
                e = new go, _.O(e, "ready", e.ta, !1, e), e.send(b, "POST", !1, a)
            }
        }
    };
    var so = function (a, b, c, d, e, f, g, k) {
        Wn.call(this, b, c);
        this.o = a;
        g || k ? (this.w = d, this.G = e, this.B = g || k || "", this.J = !!k, this.H = f) : a.log(Error("ja"))
    };
    _.v(so, Wn);
    so.prototype.Mc = function (a, b) {
        a ? (a = this.G, (b = _.qo(this.o, this.groupId, this.w, "a", 3, b || "", this.B)) && (b.u = a)) : (a = this.G, (b = _.qo(this.o, this.groupId, this.w, "d", 2, b || "", this.B)) && (b.u = a));
        _.ro(b, this.H, this.J)
    };
    so.prototype.Dd = function (a, b) {
        a = a || 1;
        (b = _.qo(this.o, this.groupId, this.w, "i", 1, b || "", this.B)) && (b.c = a);
        _.ro(b, this.H, this.J)
    };
    var to = function (a, b, c, d, e) {
        Wn.call(this, b, c, e);
        this.w = a;
        this.o = d
    };
    _.v(to, Wn);
    to.prototype.Mc = function () {
        this.w.rf(this.o, this.C, "1", this.j)
    };
    to.prototype.Dd = function (a) {
        a = this.Ub() + (a || 1);
        this.w.rf(this.o, this.D, a.toString(), this.j)
    };
    to.prototype.$e = function () {
        return !!this.w.Oe(this.o, this.C, this.j)
    };
    to.prototype.Ub = function () {
        var a = this.w.Oe(this.o, this.D, this.j);
        return parseInt(a || 0, 10)
    };
    _.uo = function (a, b, c, d, e, f, g, k, l, m, r) {
        if (m || r) try {
            var t = new so(a, e, f, g, k, c, m, r)
        } catch (F) {
            t = null
        } else t = null;
        switch (d) {
            case 2:
            case 6:
                return t;
            case 1:
                return new to(b, e, f, l, void 0);
            default:
                return new _.$n(a, e, f, k)
        }
    };
    var vo, wo;
    vo = function (a) {
        switch (a) {
            case "i":
                return 36;
            case "x":
                return 37;
            case "n":
                return 37;
            case "a":
                return 38;
            case "d":
                return 37;
            case "ed":
                return 37;
            case "end":
                return 38;
            case "ec":
                return 38;
            case "er_em":
                return 72;
            case "rl":
                return 77;
            case "lc":
                return 111;
            case "hc":
                return 112;
            default:
                return 0
        }
    };
    wo = function (a) {
        var b = new _.Bc;
        switch (a) {
            case "x":
                _.E(b, 28, 1);
                break;
            case "n":
                _.E(b, 28, 2);
                break;
            case "a":
                _.E(b, 29, 1);
                break;
            case "er_em":
                _.E(b, 30, 1);
                break;
            case "ed":
                _.E(b, 28, 3);
                break;
            case "end":
                _.E(b, 29, 3);
                break;
            case "ec":
                _.E(b, 29, 3)
        }
        return b
    };
    _.xo = function (a, b, c, d, e, f, g, k, l, m) {
        var r = vo(b);
        if (0 !== r) {
            b = wo(b);
            _.E(b, 34, g);
            _.E(b, 48, k);
            _.E(b, 31, c);
            _.E(b, 39, e);
            c = _.Vn(new _.Un, d);
            36 === r && _.E(c, 1, l);
            _.H(b, 50, c);
            if (f) {
                l = !1;
                try {
                    var t = f.getBoundingClientRect()
                } catch (F) {
                    _.E(b, 49, 1), l = !0
                }
                null != t && (_.E(b, 43, t.top), _.E(b, 44, t.bottom), _.E(b, 45, t.left), _.E(b, 46, t.right));
                null != t && 0 !== t.top - t.bottom || l || (document.body.contains(f) ? _.ze(f, function (F) {
                    return _.xe(F) && "none" == F.style.display
                }) && _.E(b, 49, 3) : _.E(b, 49, 2))
            }
            null != m && _.Sn(b, m);
            a.log(r, b)
        }
    };
    _.yo = function () {
        this.yb = null;
        this.j = !1
    };
    _.va(_.yo);

} catch (e) {
    _._DumpException(e)
}
try {
    var Qp = function (a) {
            _.z(this, a, 0, -1, null, null)
        },
        Sp;
    _.v(Qp, _.y);
    _.Rp = function (a, b) {
        this.o = a;
        this.j = b
    };
    _.Rp.prototype.log = function (a, b) {
        b = void 0 === b ? new _.Bc : b;
        Sp(this, a, b)
    };
    _.Tp = function (a, b, c) {
        c = void 0 === c ? new _.Bc : c;
        var d = a.j ? 103 : 14;
        _.E(c, 18, b);
        Sp(a, d, c)
    };
    _.Up = function (a, b, c) {
        c = void 0 === c ? new _.Bc : c;
        var d = a.j ? 94 : 8,
            e = new Qp;
        _.E(e, 1, b);
        _.H(c, 47, e);
        Sp(a, d, c)
    };
    Sp = function (a, b, c) {
        var d = _.G(c, Qp, 47) || new Qp;
        _.H(c, 47, d);
        a.o.log(b, c)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var eq, oq, tq, yq, zq, Bq, Cq, Eq;
    _.cq = function (a, b) {
        return _.Db(a, b)
    };
    _.dq = function (a) {
        if (a instanceof _.Bb) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.Ve && (c = a.j());
        return _.cq(_.de(b && a.Pb ? a.Fb() : String(a)), c)
    };
    eq = function (a) {
        var b = _.dq(_.Eb),
            c = b.j(),
            d = [],
            e = function (f) {
                Array.isArray(f) ? (0, _.Ka)(f, e) : (f = _.dq(f), d.push(_.Cb(f).toString()), f = f.j(), 0 == c ? c = f : 0 != f && c != f && (c = null))
            };
        (0, _.Ka)(a, e);
        return _.cq(d.join(_.Cb(b).toString()), c)
    };
    _.fq = function (a) {
        return eq(Array.prototype.slice.call(arguments))
    };
    _.gq = function (a, b) {
        var c = _.qe(a, "DIV");
        _.x ? (b = _.fq(_.Fb, b), _.Of(c, b), c.removeChild(c.firstChild)) : _.Of(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    };
    _.hq = function (a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.hq.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.hq.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.hq.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.iq = function (a) {
        return new _.hq(a.x, a.y)
    };
    _.jq = function (a) {
        return a.scrollingElement ? a.scrollingElement : !_.Qb && _.Tf(a) ? a.documentElement : a.body || a.documentElement
    };
    _.kq = function (a) {
        var b = _.jq(a);
        a = a.parentWindow || a.defaultView;
        return _.x && _.ec("10") && a.pageYOffset != b.scrollTop ? new _.hq(b.scrollLeft, b.scrollTop) : new _.hq(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    };
    _.lq = function (a) {
        a = a.j;
        return a.parentWindow || a.defaultView
    };
    _.mq = function (a) {
        return "rtl" == _.Ag(a, "direction")
    };
    _.nq = function (a) {
        for (var b in a) return !1;
        return !0
    };
    oq = function (a, b) {
        return new _.hq(a.x - b.x, a.y - b.y)
    };
    _.pq = function (a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.h = _.pq.prototype;
    _.h.getHeight = function () {
        return this.bottom - this.top
    };
    _.h.expand = function (a, b, c, d) {
        _.za(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    _.h.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.h.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.h.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    _.qq = function (a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    _.qq.prototype.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.qq.prototype.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.qq.prototype.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.rq = function (a, b, c) {
        if (b instanceof _.hq) {
            var d = b.x;
            b = b.y
        } else d = b, b = c;
        a.style.left = _.Cg(d, !1);
        a.style.top = _.Cg(b, !1)
    };
    _.sq = function (a) {
        a = a ? _.ye(a) : document;
        return !_.x || _.gc(9) || _.Tf(_.$f(a).j) ? a.documentElement : a.body
    };
    tq = function (a) {
        if (_.x && !_.gc(8)) return a.offsetParent;
        var b = _.ye(a),
            c = _.Ag(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = _.Ag(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    _.uq = function (a) {
        var b = _.ye(a),
            c = new _.hq(0, 0),
            d = _.sq(b);
        if (a == d) return c;
        a = _.Bg(a);
        b = _.kq(_.$f(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    _.vq = function (a) {
        for (var b = new _.pq(0, Infinity, Infinity, 0), c = _.$f(a), d = c.j.body, e = c.j.documentElement, f = _.jq(c.j); a = tq(a);)
            if (!(_.x && 0 == a.clientWidth || _.Qb && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != _.Ag(a, "overflow")) {
                var g = _.uq(a),
                    k = new _.hq(a.clientLeft, a.clientTop);
                g.x += k.x;
                g.y += k.y;
                b.top = Math.max(b.top, g.y);
                b.right = Math.min(b.right, g.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                b.left = Math.max(b.left, g.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top =
            Math.max(b.top, f);
        c = _.Uf(_.lq(c));
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    };
    _.wq = function (a) {
        a = _.Bg(a);
        return new _.hq(a.left, a.top)
    };
    _.xq = function (a, b) {
        a.style.display = b ? "" : "none"
    };
    yq = function (a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    };
    zq = function (a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? yq(a, b) : 0
    };
    _.Aq = function (a, b) {
        if (_.x) {
            var c = zq(a, b + "Left"),
                d = zq(a, b + "Right"),
                e = zq(a, b + "Top");
            a = zq(a, b + "Bottom");
            return new _.pq(e, d, a, c)
        }
        c = _.zg(a, b + "Left");
        d = _.zg(a, b + "Right");
        e = _.zg(a, b + "Top");
        a = _.zg(a, b + "Bottom");
        return new _.pq(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
    };
    Bq = {thin: 2, medium: 4, thick: 6};
    Cq = function (a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Bq ? Bq[b] : yq(a, b)
    };
    _.Dq = function (a) {
        if (_.x && !_.gc(9)) {
            var b = Cq(a, "borderLeft"),
                c = Cq(a, "borderRight"),
                d = Cq(a, "borderTop");
            a = Cq(a, "borderBottom");
            return new _.pq(d, c, a, b)
        }
        b = _.zg(a, "borderLeftWidth");
        c = _.zg(a, "borderRightWidth");
        d = _.zg(a, "borderTopWidth");
        a = _.zg(a, "borderBottomWidth");
        return new _.pq(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
    };
    Eq = function () {
        if (_.Sb) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(_.sb)) ? a[1] : "0"
        }
        return _.Rb ? (a = /10[_.][0-9_.]+/, (a = a.exec(_.sb)) ? a[0].replace(/_/g, ".") : "10") : _.Ub ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(_.sb)) ? a[1] : "") : _.Vb || _.Wb || _.Xb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(_.sb)) ? a[1].replace(/_/g, ".") : "") : ""
    }();
    var Fq = function (a) {
            return (a = a.exec(_.sb)) ? a[1] : ""
        },
        Gq = function () {
            if (_.jc) return Fq(/Firefox\/([0-9.]+)/);
            if (_.x || _.Nb || _.Mb) return _.dc;
            if (_.nc) return _.Ib() ? Fq(/CriOS\/([0-9.]+)/) : Fq(/Chrome\/([0-9.]+)/);
            if (_.oc && !_.Ib()) return Fq(/Version\/([0-9.]+)/);
            if (_.kc || _.lc) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.sb);
                if (a) return a[1] + "." + a[2]
            } else if (_.mc) return (a = Fq(/Android\s+([0-9.]+)/)) ? a : Fq(/Version\/([0-9.]+)/);
            return ""
        }();
    var Hq;
    _.Jq = function (a, b, c, d, e, f, g, k, l) {
        var m;
        if (m = c.offsetParent) {
            var r = "HTML" == m.tagName || "BODY" == m.tagName;
            if (!r || "static" != _.Ag(m, "position")) {
                var t = _.uq(m);
                if (!r) {
                    r = _.mq(m);
                    var F;
                    if (F = r) {
                        if (F = _.oc) F = 0 <= _.gb(Gq, 10);
                        var D;
                        if (D = _.Yb) D = 0 <= _.gb(Eq, 10);
                        F = _.Pb || F || D
                    }
                    r = F ? -m.scrollLeft : !r || _.Ob && _.ec("8") || "visible" == _.Ag(m, "overflowX") ? m.scrollLeft : m.scrollWidth - m.clientWidth - m.scrollLeft;
                    t = oq(t, new _.hq(r, m.scrollTop))
                }
            }
        }
        m = t || new _.hq;
        t = _.uq(a);
        r = _.Eg(a);
        t = new _.qq(t.x, t.y, r.width, r.height);
        if (r = _.vq(a)) {
            var R = new _.qq(r.left,
                r.top, r.right - r.left, r.bottom - r.top);
            r = Math.max(t.left, R.left);
            F = Math.min(t.left + t.width, R.left + R.width);
            r <= F && (D = Math.max(t.top, R.top), R = Math.min(t.top + t.height, R.top + R.height), D <= R && (t.left = r, t.top = D, t.width = F - r, t.height = R - D))
        }
        r = _.$f(a);
        D = _.$f(c);
        if (r.j != D.j) {
            F = r.j.body;
            D = _.lq(D);
            R = new _.hq(0, 0);
            var K = _.Vf(_.ye(F));
            if (_.kf(K, "parent")) {
                var ea = F;
                do {
                    var Nc = K == D ? _.uq(ea) : _.wq(ea);
                    R.x += Nc.x;
                    R.y += Nc.y
                } while (K && K != D && K != K.parent && (ea = K.frameElement) && (K = K.parent))
            }
            F = oq(R, _.uq(F));
            !_.x || _.gc(9) || _.Tf(r.j) ||
            (F = oq(F, _.kq(r.j)));
            t.left += F.x;
            t.top += F.y
        }
        a = Hq(a, b);
        b = t.left;
        a & 4 ? b += t.width : a & 2 && (b += t.width / 2);
        b = new _.hq(b, t.top + (a & 1 ? t.height : 0));
        b = oq(b, m);
        e && (b.x += (a & 4 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
        if (g)
            if (l) var wa = l;
            else if (wa = _.vq(c)) wa.top -= m.y, wa.right -= m.x, wa.bottom -= m.y, wa.left -= m.x;
        return _.Iq(b, c, d, f, wa, g, k)
    };
    _.Iq = function (a, b, c, d, e, f, g) {
        a = _.iq(a);
        var k = Hq(b, c);
        c = _.Eg(b);
        g = g ? _.lg(g) : _.lg(c);
        a = _.iq(a);
        g = _.lg(g);
        var l = 0;
        if (d || 0 != k) k & 4 ? a.x -= g.width + (d ? d.right : 0) : k & 2 ? a.x -= g.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (f) {
            if (e) {
                d = a;
                k = g;
                l = 0;
                65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2);
                132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5);
                d.x < e.left && f & 1 && (d.x = e.left, l |= 1);
                if (f & 16) {
                    var m = d.x;
                    d.x < e.left && (d.x = e.left, l |= 4);
                    d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width -
                        e.left), k.width = Math.max(k.width, 0), l |= 4)
                }
                d.x + k.width > e.right && f & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
                f & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
                d.y < e.top && f & 4 && (d.y = e.top, l |= 2);
                f & 32 && (m = d.y, d.y < e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
                d.y + k.height > e.bottom && f & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
                f & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
                e = l
            } else e = 256;
            l = e
        }
        f =
            new _.qq(0, 0, 0, 0);
        f.left = a.x;
        f.top = a.y;
        f.width = g.width;
        f.height = g.height;
        e = l;
        if (e & 496) return e;
        _.rq(b, new _.hq(f.left, f.top));
        g = new _.le(f.width, f.height);
        _.qg(c, g) || (c = g, g = _.Tf(_.$f(_.ye(b)).j), !_.x || _.ec("10") || g && _.ec("8") ? (b = b.style, _.Pb ? b.MozBoxSizing = "border-box" : _.Qb ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (a = b.style, g ? (g = _.Aq(b, "padding"), b = _.Dq(b), a.pixelWidth = c.width - b.left - g.left - g.right - b.right, a.pixelHeight =
            c.height - b.top - g.top - g.bottom - b.bottom) : (a.pixelWidth = c.width, a.pixelHeight = c.height)));
        return e
    };
    Hq = function (a, b) {
        return (b & 8 && _.mq(a) ? b ^ 4 : b) & -9
    };
    _.Kq = function (a) {
        _.P.call(this);
        this.j = a;
        a = _.x ? "focusout" : "blur";
        this.o = _.O(this.j, _.x ? "focusin" : "focus", this, !_.x);
        this.w = _.O(this.j, a, this, !_.x)
    };
    _.v(_.Kq, _.P);
    _.Kq.prototype.handleEvent = function (a) {
        var b = new _.mf(a.Ya);
        b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
        this.dispatchEvent(b)
    };
    _.Kq.prototype.R = function () {
        _.Kq.M.R.call(this);
        _.Hf(this.o);
        _.Hf(this.w);
        delete this.j
    };

} catch (e) {
    _._DumpException(e)
}
try {
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    var Vq = function (a, b) {
        _.P.call(this);
        this.w = new _.Ig(this);
        this.Ae(a || null);
        b && (this.Sc = b)
    };
    _.v(Vq, _.P);
    _.h = Vq.prototype;
    _.h.wb = null;
    _.h.Bf = null;
    _.h.Uc = !1;
    _.h.ef = -1;
    _.h.Sc = "toggle_display";
    _.h.F = function () {
        return this.wb
    };
    _.h.Ae = function (a) {
        if (this.Uc) throw Error("ra");
        this.wb = a
    };
    _.h.isVisible = function () {
        return this.Uc
    };
    _.h.Nb = function (a) {
        this.O && this.O.stop();
        this.H && this.H.stop();
        if (a) {
            if (!this.Uc && this.kf()) {
                if (!this.wb) throw Error("sa");
                this.Ad();
                a = _.ye(this.wb);
                this.w.K(a, "mousedown", this.Bg, !0);
                if (_.x) {
                    try {
                        var b = a.activeElement
                    } catch (d) {
                    }
                    for (; b && "IFRAME" == b.nodeName;) {
                        try {
                            var c = _.Rj(b)
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.w.K(a, "mousedown", this.Bg, !0);
                    this.w.K(a, "deactivate", this.Ag)
                } else this.w.K(a, "blur", this.Ag);
                "toggle_display" == this.Sc ? (this.wb.style.visibility = "visible", _.xq(this.wb, !0)) : "move_offscreen" ==
                    this.Sc && this.Ad();
                this.Uc = !0;
                this.ef = (0, _.Fa)();
                this.O ? (_.zf(this.O, "end", this.ag, !1, this), this.O.play()) : this.ag()
            }
        } else Wq(this)
    };
    _.h.Ad = _.ua;
    var Wq = function (a, b) {
        a.Uc && a.dispatchEvent({
            type: "beforehide",
            target: b
        }) && (a.w && _.Mg(a.w), a.Uc = !1, (0, _.Fa)(), a.H ? (_.zf(a.H, "end", _.Qd(a.Ff, b), !1, a), a.H.play()) : a.Ff(b))
    };
    _.h = Vq.prototype;
    _.h.Ff = function (a) {
        "toggle_display" == this.Sc ? this.Vi() : "move_offscreen" == this.Sc && (this.wb.style.top = "-10000px");
        this.Qe(a)
    };
    _.h.Vi = function () {
        this.wb.style.visibility = "hidden";
        _.xq(this.wb, !1)
    };
    _.h.kf = function () {
        return this.dispatchEvent("beforeshow")
    };
    _.h.ag = function () {
        this.dispatchEvent("show")
    };
    _.h.Qe = function (a) {
        this.dispatchEvent({type: "hide", target: a})
    };
    _.h.Bg = function (a) {
        a = a.target;
        _.Xf(this.wb, a) || Xq(this, a) || 150 > (0, _.Fa)() - this.ef || Wq(this, a)
    };
    _.h.Ag = function (a) {
        var b = _.ye(this.wb);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement, !a || _.Xf(this.wb, a) || "BODY" == a.tagName || Xq(this, a)) return
        } else if (a.target != b) return;
        150 > (0, _.Fa)() - this.ef || Wq(this)
    };
    var Xq = function (a, b) {
        return (0, _.Na)(a.Bf || [], function (c) {
            return b === c || _.Xf(c, b)
        })
    };
    Vq.prototype.R = function () {
        Vq.M.R.call(this);
        this.w.ta();
        _.Lf(this.O);
        _.Lf(this.H);
        delete this.wb;
        delete this.w;
        delete this.Bf
    };
    var Yq = function () {
    };
    Yq.prototype.j = function () {
    };
    var Zq = function (a, b, c) {
        this.o = a;
        this.w = b;
        this.A = c
    };
    _.v(Zq, Yq);
    Zq.prototype.j = function (a, b, c) {
        _.Jq(this.o, this.w, a, b, void 0, c, this.A)
    };
    var $q = function (a, b) {
        this.ha = 8;
        this.U = b || void 0;
        Vq.call(this, a)
    };
    _.v($q, Vq);
    $q.prototype.Ad = function () {
        if (this.U) {
            var a = !this.isVisible() && "move_offscreen" != this.Sc,
                b = this.F();
            a && (b.style.visibility = "hidden", _.xq(b, !0));
            this.U.j(b, this.ha, this.wa);
            a && _.xq(b, !1)
        }
    };
    var ar = function (a, b) {
        this.o = a instanceof _.hq ? a : new _.hq(a, b)
    };
    _.v(ar, Yq);
    ar.prototype.j = function (a, b, c) {
        _.Jq(_.sq(a), 0, a, b, this.o, c, null, void 0)
    };
    var br = function () {
            this.j = new _.Sj
        },
        cr = function (a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + _.Ca(a) : b.charAt(0) + a
        };
    _.h = br.prototype;
    _.h.add = function (a) {
        this.j.set(cr(a), a)
    };
    _.h.remove = function (a) {
        return this.j.remove(cr(a))
    };
    _.h.clear = function () {
        this.j.clear()
    };
    _.h.zc = function () {
        return this.j.zc()
    };
    _.h.Pa = function () {
        return this.j.Pa()
    };
    var dr = function (a, b, c) {
        this.G = c || (a ? _.$f(_.Sf(document, a)) : _.$f());
        $q.call(this, this.G.Ba("DIV", {style: "position:absolute;display:none;"}));
        this.S = new _.hq(1, 1);
        this.C = new br;
        this.B = null;
        a && (a = _.Sf(document, a), this.C.add(a), _.O(a, "mouseover", this.Z, !1, this), _.O(a, "mouseout", this.L, !1, this), _.O(a, "mousemove", this.W, !1, this), _.O(a, "focus", this.V, !1, this), _.O(a, "blur", this.L, !1, this));
        null != b && _.sg(this.F(), b)
    };
    _.v(dr, $q);
    var er = [];
    dr.prototype.o = null;
    dr.prototype.className = "gb_Aa-gb_4e";
    dr.prototype.Ae = function (a) {
        var b = this.F();
        b && _.we(b);
        dr.M.Ae.call(this, a);
        a ? (b = this.G.j.body, b.insertBefore(a, b.lastChild), _.Lf(this.B), this.B = new _.Kq(this.F()), _.Mf(this, this.B), _.O(this.B, "focusin", this.D, void 0, this), _.O(this.B, "focusout", this.P, void 0, this)) : (_.Lf(this.B), this.B = null)
    };
    var fr = function (a) {
        return a.A ? a.isVisible() ? 4 : 1 : a.J ? 3 : a.isVisible() ? 2 : 0
    };
    dr.prototype.kf = function () {
        if (!Vq.prototype.kf.call(this)) return !1;
        if (this.j)
            for (var a, b = 0; a = er[b]; b++) _.Xf(a.F(), this.j) || a.Nb(!1);
        _.Oa(er, this) || er.push(this);
        a = this.F();
        a.className = this.className;
        this.D();
        _.O(a, "mouseover", this.sa, !1, this);
        _.O(a, "mouseout", this.ka, !1, this);
        gr(this);
        return !0
    };
    dr.prototype.Qe = function () {
        _.hf(er, this);
        for (var a = this.F(), b, c = 0; b = er[c]; c++) b.j && _.Xf(a, b.j) && b.Nb(!1);
        this.$ && this.$.P();
        _.Gf(a, "mouseover", this.sa, !1, this);
        _.Gf(a, "mouseout", this.ka, !1, this);
        this.j = void 0;
        0 == fr(this) && (this.N = !1);
        Vq.prototype.Qe.call(this)
    };
    dr.prototype.Y = function (a, b) {
        this.j == a && _.Vj(this.C.j, cr(this.j)) && (this.N || !this.ya ? (this.Nb(!1), this.isVisible() || (this.j = a, this.U = b || this.T(0) || void 0, this.isVisible() && this.Ad(), this.Nb(!0))) : this.j = void 0);
        this.A = void 0
    };
    dr.prototype.ma = function (a) {
        this.J = void 0;
        if (a == this.j) {
            a = this.G;
            var b;
            a = (b = _.Yf(a.j)) && this.F() && a.Wf(this.F(), b);
            null != this.o && (this.o == this.F() || _.Vj(this.C.j, cr(this.o))) || a || this.X && this.X.o || this.Nb(!1)
        }
    };
    var hr = function (a, b) {
        var c = _.kq(a.G.j);
        a.S.x = b.clientX + c.x;
        a.S.y = b.clientY + c.y
    };
    dr.prototype.Z = function (a) {
        var b = ir(this, a.target);
        this.o = b;
        this.D();
        b != this.j && (this.j = b, this.A || (this.A = _.dg((0, _.q)(this.Y, this, b, void 0), 500)), jr(this), hr(this, a))
    };
    var ir = function (a, b) {
        try {
            for (; b && !_.Vj(a.C.j, cr(b));) b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    };
    dr.prototype.W = function (a) {
        hr(this, a);
        this.N = !0
    };
    dr.prototype.V = function (a) {
        this.o = a = ir(this, a.target);
        this.N = !0;
        if (this.j != a) {
            this.j = a;
            var b = this.T(1);
            this.D();
            this.A || (this.A = _.dg((0, _.q)(this.Y, this, a, b), 500));
            jr(this)
        }
    };
    dr.prototype.T = function (a) {
        return 0 == a ? new kr(_.iq(this.S)) : new lr(this.o)
    };
    var jr = function (a) {
        if (a.j)
            for (var b, c = 0; b = er[c]; c++) _.Xf(b.F(), a.j) && (b.X = a, a.$ = b)
    };
    dr.prototype.L = function (a) {
        var b = ir(this, a.target),
            c = ir(this, a.relatedTarget);
        b != c && (b == this.o && (this.o = null), gr(this), this.N = !1, !this.isVisible() || a.relatedTarget && _.Xf(this.F(), a.relatedTarget) ? this.j = void 0 : this.P())
    };
    dr.prototype.sa = function () {
        var a = this.F();
        this.o != a && (this.D(), this.o = a)
    };
    dr.prototype.ka = function (a) {
        var b = this.F();
        this.o != b || a.relatedTarget && _.Xf(b, a.relatedTarget) || (this.o = null, this.P())
    };
    var gr = function (a) {
        a.A && (_.eg(a.A), a.A = void 0)
    };
    dr.prototype.P = function () {
        2 == fr(this) && (this.J = _.dg((0, _.q)(this.ma, this, this.j), 0))
    };
    dr.prototype.D = function () {
        this.J && (_.eg(this.J), this.J = void 0)
    };
    dr.prototype.R = function () {
        var a;
        this.Nb(!1);
        gr(this);
        for (var b = this.C.Pa(), c = 0; a = b[c]; c++) _.Gf(a, "mouseover", this.Z, !1, this), _.Gf(a, "mouseout", this.L, !1, this), _.Gf(a, "mousemove", this.W, !1, this), _.Gf(a, "focus", this.V, !1, this), _.Gf(a, "blur", this.L, !1, this);
        this.C.clear();
        this.F() && _.we(this.F());
        this.o = null;
        delete this.G;
        dr.M.R.call(this)
    };
    var kr = function (a, b) {
        ar.call(this, a, b)
    };
    _.v(kr, ar);
    kr.prototype.j = function (a, b, c) {
        b = _.sq(a);
        b = _.vq(b);
        c = c ? new _.pq(c.top + 10, c.right, c.bottom, c.left + 10) : new _.pq(10, 0, 0, 10);
        _.Iq(this.o, a, 8, c, b, 9) & 496 && _.Iq(this.o, a, 8, c, b, 5)
    };
    var lr = function (a) {
        Zq.call(this, a, 5)
    };
    _.v(lr, Zq);
    lr.prototype.j = function (a, b, c) {
        var d = new _.hq(10, 0);
        _.Jq(this.o, this.w, a, b, d, c, 9) & 496 && _.Jq(this.o, 4, a, 1, d, c, 5)
    };
    _.mr = function (a, b) {
        dr.call(this, a);
        this.className = "gb_4e";
        this.Ae(b);
        this.ha = 2;
        this.isVisible() && this.Ad()
    };
    _.n(_.mr, dr);
    _.mr.prototype.T = function () {
        return new nr(this.o)
    };
    _.mr.prototype.Nb = function (a) {
        a || gr(this);
        return dr.prototype.Nb.call(this, a)
    };
    var nr = function (a) {
        Zq.call(this, a, 3)
    };
    _.n(nr, Zq);
    nr.prototype.j = function (a, b, c) {
        var d = new _.hq(0, 0),
            e = _.Uf();
        _.Jq(this.o, this.w, a, b, d, c, 9, void 0, new _.pq(0, e.width - 8, e.height, 8)) & 496 && _.Jq(this.o, 4, a, 1, d, c, 5)
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var Gt, Ht;
    Gt = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    Ht = function (a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
            var e = c[d];
            e = Array.isArray(e) ? e : [e];
            for (var f = 0; f < e.length; f++) {
                var g = e[f];
                null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
            }
        }
        return b
    };
    _.It = function (a, b) {
        a = _.cb(a);
        a = Gt.exec(a);
        var c = a[3] || "";
        return _.db(a[1] + Ht("?", a[2] || "", b) + Ht("#", c, void 0))
    };
    _.Jt = function (a) {
        return a instanceof _.Am ? new _.Am(a) : new _.Am(a, void 0)
    };
    var Kt = function () {
    };
    var Lt = function (a) {
        this.j = a || {}
    };
    _.v(Lt, Kt);
    var Ot = function () {
            Mt || (Mt = new Lt, -1 == _.sb.toLowerCase().indexOf("webkit") || _.w("Edge") ? _.wb() ? Nt("-moz-") : _.vb() ? Nt("-ms-") : _.w("Opera") && Nt("-o-") : Nt("-webkit-"), Mt.j.is_rtl = !1);
            var a = Mt.j.is_rtl;
            return !(null == a || !a)
        },
        Nt = function (a) {
            Mt.j.css3_prefix = a
        };
    var Mt = null;
    var Qt, Rt, St, Tt, Pt;
    _.Ut = function (a) {
        if (null == a) return "";
        if (!Pt.test(a)) return a;
        -1 != a.indexOf("&") && (a = a.replace(Qt, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Rt, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(St, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Tt, "&quot;"));
        return a
    };
    Qt = /&/g;
    Rt = /</g;
    St = />/g;
    Tt = /"/g;
    Pt = /[&<>"]/;
    /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
    _.Vt = function (a) {
        var b = a.match(/\bhref="/g);
        if (!b || 1 >= b.length) return a;
        var c = new _.Am;
        a = a.replace(/\bhref="(.*?)"/g, function (d, e) {
            d = _.Jt(e);
            c.w || _.Bm(c, d.w);
            c.o || _.Cm(c, d.o);
            c.A || _.Em(c, d.A);
            c.B || _.Hm(c, d.B);
            e = _.ia(d.j.mb());
            for (var f = e.next(); !f.done; f = e.next()) f = f.value, _.Wm(c.j, f) || _.Xm(c.j, f, d.j.Pa(f));
            return ""
        });
        a = a.replace(/\s\s+/g, " ").replace(/\s+$/g, "");
        return a + ' href="' + c.toString() + '"'
    };
    _.Wt = function (a) {
        return "" === a ? "" : ' class="' + (" " === a.charAt(a.length - 1) ? a.slice(0, -1) : a) + '"'
    };
    _.Xt = function (a) {
        return "" !== a ? ' style="' + a + '"' : ""
    };
    var Yt = function (a) {
            this.j = a = void 0 === a ? document : a;
            this.w = null;
            this.o = []
        },
        Zt;
    Yt.prototype.document = function () {
        return this.j
    };
    Zt = function (a) {
        var b = a.j.createElement("STYLE");
        a.j.head ? a.j.head.appendChild(b) : a.j.body.appendChild(b);
        return b
    };
    _.$t = function (a) {
        if (!a.j || 0 == a.o.length) return "";
        var b = a.o.join("");
        if (_.x) {
            a.w || (a.w = Zt(a));
            var c = a.w
        } else c = Zt(a);
        c.styleSheet && !c.sheet ? c.styleSheet.cssText += b : c.textContent += b;
        a.o.length = 0;
        return ""
    };
    _.au = function () {
        var a = void 0 === a ? document : a;
        var b = void 0 === b ? new Yt(a) : b;
        this.B = a;
        this.w = b;
        new function () {
        };
        this.o = {};
        this.j = [Ot()]
    };
    _.au.prototype.document = function () {
        return this.B
    };
    _.bu = function (a, b, c, d, e, f, g, k, l, m, r) {
        if (!Array.isArray(c)) {
            var t = [],
                F;
            for (F in c) t[c[F]] = F;
            c = t
        }
        a.o[b] = {
            kb: c,
            El: d,
            Fl: e,
            Ll: void 0 === f ? null : f,
            Hl: void 0 === g ? null : g,
            Ml: void 0 === k ? "" : k,
            Il: void 0 === l ? null : l,
            Nl: "",
            Jl: void 0 === m ? null : m,
            Ol: "",
            Kl: void 0 === r ? null : r,
            Gl: !0
        }
    };
    _.cu = function (a, b) {
        a = a.j;
        a: {
            if (b)
                for (b = b.parentNode; _.xe(b); b = b.parentNode) {
                    var c = b.getAttribute("dir");
                    if (c && (c = c.toLowerCase(), "ltr" == c || "rtl" == c)) {
                        b = c;
                        break a
                    }
                }
            b = Ot() ? "rtl" : "ltr"
        }
        a[0] = "rtl" == b
    };
    _.du = function (a) {
        a.A && a.A.ud()
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var gA = function (a, b) {
            if (bA.test(b)) return b;
            b = 0 <= b.indexOf("left") ? b.replace(cA, "right") : b.replace(dA, "left");
            _.Oa(eA, a) && (a = b.split(fA), 4 <= a.length && (b = [a[0], a[3], a[2], a[1]].join(" ")));
            return b
        },
        hA = function (a, b, c) {
            return _.uo(_.wd, _.Gc.ua().j.p_st || null, _.A(a, 8) || 0, _.C(a, 5, 0), c.toString(), _.C(a, 4, 25), b.toString(), _.A(a, 9) || 0, null, _.A(a, 6) || void 0, _.A(a, 7) || void 0)
        },
        iA = function (a) {
            _.z(this, a, 0, -1, null, null)
        },
        jA;
    _.v(iA, _.y);
    jA = [1];
    _.kA = function (a) {
        _.z(this, a, 0, -1, jA, null)
    };
    _.v(_.kA, _.y);
    _.kA.prototype.$a = function (a) {
        return _.E(this, 10, a)
    };
    var lA = function (a) {
        _.z(this, a, 0, -1, null, null)
    };
    _.v(lA, _.y);
    lA.prototype.getHeight = function () {
        return _.A(this, 5)
    };
    var mA = function (a, b) {
            a.yb = b;
            a.j && (a.j = !0, a.yb && a.yb.notify())
        },
        nA = function (a) {
            return a[a.length - 1]
        },
        bA = /['"\(]/,
        eA = ["border-color", "border-style", "border-width", "margin", "padding"],
        cA = /left/g,
        dA = /right/g,
        fA = /\s+/;
    var oA = function (a) {
        this.j = a
    };
    oA.prototype.send = function (a, b, c) {
        this.j.then(function (d) {
            d.send(a, b, c)
        })
    };
    var pA = function (a) {
        this.data = a
    };
    var qA = function (a) {
        this.j = a
    };
    qA.prototype.send = function (a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        rA(d.port1, b);
        this.j.postMessage(a, [d.port2].concat(c))
    };
    var sA = function (a, b) {
            rA(a, b);
            return new qA(a)
        },
        rA = function (a, b) {
            b && (a.onmessage = function (c) {
                b(new pA(c.data, sA(c.ports[0], void 0)))
            })
        };
    var uA = function (a) {
            var b = a.destination,
                c = a.lg,
                d = a.origin,
                e = void 0 === a.Ie ? "ZNWN1d" : a.Ie;
            a = void 0 === a.onMessage ? void 0 : a.onMessage;
            if ("*" === d) throw Error("Ua");
            if ("null" === d) throw Error("Va");
            return tA({
                destination: b, zk: function (f) {
                    if (f.source === c.contentWindow) {
                        if (f.origin !== d) throw Error("Wa`" + d + "`" + f.origin);
                        if (f.data === e) return !0
                    }
                    return !1
                }, onMessage: a
            })
        },
        tA = function (a) {
            var b = a.destination,
                c = a.zk,
                d = void 0 === a.onMessage ? void 0 : a.onMessage;
            return new oA(new _.Qe(function (e, f) {
                var g = function (k) {
                    var l = !1;
                    try {
                        l = c(k)
                    } catch (m) {
                        b.removeEventListener("message", g, !1), f(m)
                    }
                    l && (b.removeEventListener("message", g, !1), e(sA(k.ports[0], d)))
                };
                b.addEventListener("message", g, !1)
            }))
        };
    var vA = function () {
        window.addEventListener("message", function (a) {
            "verify-origin" === a.data && a.source.parent === window && a.source.postMessage("verify-origin-reply", a.origin)
        })
    };
    var wA = function (a, b, c, d, e) {
            this.parent = a;
            this.A = b;
            this.C = c;
            this.J = void 0 === e ? !1 : e;
            this.D = d ? d : 0;
            a = _.cb(this.A).match(_.Yj);
            this.B = _.Xj(a[1], null, a[3], a[4])
        },
        xA = function (a, b) {
            var c = document.location;
            c = c.protocol + "//" + c.host;
            var d = {origin: c};
            0 !== a.C && (d.pid = a.C);
            0 !== a.D && (d.spid = a.D);
            a = _.It(a.A, d);
            "chrome-untrusted://new-tab-page" === c && (a = _.It(a, {origin: "chrome://new-tab-page"}));
            b && (a = _.It(a, b));
            return a
        },
        yA = function (a, b, c) {
            if (a.j) return a.j;
            a.j = _.gf("gapi.iframes.getContext")().openChild({
                attributes: {
                    role: "presentation",
                    style: {height: "100%", visibility: "hidden"},
                    onload: b
                },
                where: a.parent,
                url: _.cb(xA(a, c)),
                dontclear: !0,
                hintInFragment: !0
            });
            return a.j
        },
        zA = function (a, b, c, d, e) {
            if (!a.G) {
                var f = _.ue("IFRAME");
                _.pe(f, {
                    role: "presentation",
                    style: "height: 100%; width: 100%; visibility: hidden;",
                    frameborder: 0,
                    scrolling: "no"
                });
                f.addEventListener("load", b);
                _.Zm(f, xA(a, e));
                a.parent.appendChild(f);
                a.G = uA({destination: window, lg: f, origin: a.B, Ie: d, onMessage: c});
                a.w = f
            }
        },
        AA = function (a, b, c) {
            if (a.o) return a.o;
            a.o = uA({
                destination: window,
                lg: a.w,
                origin: a.B,
                Ie: c,
                onMessage: b
            });
            return a.o
        };
    wA.prototype.getIframeEl = function () {
        return this.J ? this.w ? this.w : null : this.j ? this.j.getIframeEl() : null
    };
    var BA = function (a, b) {
        _.lf.call(this, a, b)
    };
    _.n(BA, _.lf);
    var CA = function (a, b, c, d, e, f) {
        e = void 0 === e ? {} : e;
        f = void 0 === f ? !1 : f;
        _.P.call(this);
        this.C = !1;
        this.O = a;
        this.w = null;
        this.o = f;
        this.B = void 0;
        this.j = new wA(this.O, _.rj(b), /^\d+$/.test(c) ? parseInt(c, 10) : 0, /^\d+$/.test(d) ? parseInt(d, 10) : 0, this.o);
        this.A = e;
        this.J = this.H = !1
    };
    _.n(CA, _.P);
    var DA = function (a) {
        if (a.C) return 3;
        a.C = !0;
        if (!_.gf("gapi.iframes.getContext") && !a.o) {
            var b = _.gf("gapi.load");
            if (!b) return 2;
            b("gapi.iframes", (0, _.q)(a.G, a));
            return 1
        }
        a.G();
        return 0
    };
    CA.prototype.getIframeEl = function () {
        return this.j.getIframeEl()
    };
    var EA = function (a) {
        var b = _.ue("LINK"),
            c = _.cb(xA(a.j, a.A)) + (a.o ? "" : "&usegapi=1");
        b.crossOrigin = "use-credentials";
        _.nc && (b.addEventListener("load", function () {
            a.H = !0
        }), b.addEventListener("error", function () {
            a.J = !0
        }));
        _.qj(b, c, "prefetch");
        document.head.appendChild(b)
    };
    CA.prototype.focus = function () {
        this.getIframeEl().focus()
    };
    var FA = function (a, b) {
            a.getIframeEl() && _.xg(a.getIframeEl(), {visibility: b ? "" : "hidden"})
        },
        GA = function (a, b, c) {
            a.o ? a.B && (b = {event: b}, c && (b.data = c), a.B.send(b)) : a.w && a.w.send(b, c, void 0, _.gf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
        };
    CA.prototype.G = function () {
        var a = this,
            b = function () {
                return void a.dispatchEvent("loaded")
            };
        if (this.o) {
            var c = HA.exec(_.cb(xA(this.j, this.A)))[1];
            zA(this.j, b, this.D.bind(this), "ogi_" + c, this.A);
            this.B = AA(this.j, this.D.bind(this), "ogd_" + c)
        } else _.gf("gapi.iframes.getContext") && (this.w = yA(this.j, b, this.A), IA(this, this.w))
    };
    CA.prototype.D = function (a) {
        var b = new BA(a.data.event, this);
        b.data = a.data.data;
        this.dispatchEvent(b)
    };
    var IA = function (a, b) {
        _.Pa(JA, function (c) {
            b.register(c, function (d) {
                var e = new BA(c, a);
                e.data = d;
                a.dispatchEvent(e)
            }, _.gf("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
        })
    };
    CA.prototype.remove = function () {
        var a = this.getIframeEl();
        a && a.parentNode.removeChild(a)
    };
    var JA = {
            Dk: "blur",
            Ek: "caev",
            Hk: "close",
            Kk: "dismiss",
            Tk: "_ready",
            Uk: "alogc",
            Vk: "alogn",
            Wk: "alogma",
            Yk: "alogmm",
            Xk: "alogm",
            Zk: "plog",
            jl: "_renderfailed",
            kl: "_renderstart",
            nl: "restyle",
            ql: "savec",
            rl: "savek",
            sl: "_startuploaded",
            wl: "unload"
        },
        HA = /\/widget\/(.+)(\/|\?)/;
    var KA = ["a", "er_em", "lc"],
        LA = function (a, b, c, d) {
            this.B = _.tn;
            this.D = a;
            this.j = b;
            this.A = c;
            this.C = d;
            this.w = this.o = !1
        };
    LA.prototype.log = function (a, b, c, d, e) {
        KA.includes(a) || this.D.log(this.j.toString(), "7", a, "&ap=1" + b, c);
        if ("i" === a) {
            if (this.w) return;
            this.o && (a = "rl", this.w = !0);
            this.o = !0
        }
        _.xo(this.B, a, this.j, this.A, this.C, d, !0, !0, !1, e)
    };
    var MA = function (a) {
        this.o = a;
        this.j = !1
    };
    MA.prototype.Ma = function () {
        this.o.Ma()
    };
    var OA = function (a, b, c, d) {
        d = void 0 === d ? !1 : d;
        _.P.call(this);
        this.w = new _.Ig(this);
        _.Mf(this, this.w);
        this.j = a;
        this.wa = b;
        this.Z = new _.Rp(b, !0);
        this.B = _.ue("DIV");
        this.o = null;
        this.G = this.V = this.ka = this.$ = this.S = this.sa = this.J = this.H = !1;
        this.Aa = _.A(a, 33) || "_renderstart";
        this.A = this.N = null;
        this.T = this.U = !1;
        this.D = d;
        this.W = !1;
        this.Y = c;
        this.P = null;
        a = this.B;
        b = Object.assign({}, NA);
        this.j.getHeight() ? b.height = this.j.getHeight() + "px" : b.bottom = "0px";
        _.A(this.j, 6) && (b.width = _.A(this.j, 6) + "px");
        (c = _.A(this.j, 7)) &&
        (b["margin-top"] = c + "px");
        (c = _.B(this.j, 11)) ? b.left = 0 : b.right = 0;
        _.A(this.j, 8) && (c ? b["margin-left"] = _.A(this.j, 8) + "px" : b["margin-right"] = _.A(this.j, 8) + "px");
        _.xg(a, b);
        this.Y.appendChild(this.B)
    };
    _.n(OA, _.P);
    OA.prototype.F = function () {
        return this.B
    };
    var TA = function (a, b) {
        PA(a);
        if (a.G = b) {
            if (3 !== _.A(a.j, 17)) {
                b = _.A(a.j, 7);
                var c = "100vh";
                b && (c = "calc(" + -1 * (Math.max(0, _.uq(a.Y).y - _.kq(document).y) + b) + "px + " + c + ")");
                _.xg(a.B, "max-height", c)
            }
            a.H ? (QA(a, !0), FA(a.o, !0), a.dispatchEvent("rav"), null != _.A(a.j, 18) && a.ha && (b = a.O ? _.fk(a.O) : new _.Bc, _.E(b, 24, Date.now() - a.ha), null != a.ma && _.E(b, 41, a.ma), RA(a, _.A(a.j, 18), b))) : a.T ? SA(a) : a.dispatchEvent("sorp")
        } else QA(a, !1), FA(a.o, !1), a.dispatchEvent("h")
    };
    OA.prototype.$a = function (a) {
        this.D = a;
        if (this.J) {
            var b = this.o,
                c = {};
            c.enabled = a;
            GA(b, "dm", c)
        }
        this.dispatchEvent("sdm")
    };
    OA.prototype.isVisible = function () {
        var a = "hidden" != this.B.style.visibility;
        return "none" != this.B.style.display && a
    };
    var QA = function (a, b) {
            _.xg(a.B, {visibility: b ? "" : "hidden"})
        },
        VA = function (a, b, c, d) {
            a.o = b;
            _.xe(c) ? a.A = c : a.N = c;
            UA(a, d);
            if ((b = _.B(a.j, 10) || _.C(a.j, 27, 0)) || null != a.N) c = _.C(a.j, 27, 0), null == a.C && 0 < c ? a.C = _.dg(a.X, c, a) : a.X();
            !b && _.B(a.j, 24) && EA(a.o)
        },
        WA = function (a) {
            _.Mg(a.w);
            a.A.removeAttribute("data-ogsr-fb")
        };
    OA.prototype.notify = function () {
        null != _.A(this.j, 31) && RA(this, _.A(this.j, 31));
        TA(this, !0)
    };
    var UA = function (a, b) {
        a.w.K(a.o, "_ready", a.Lj);
        a.w.K(a.o, "_startuploaded", function () {
            a.$ = !0
        });
        a.w.K(a.o, "_renderfailed", a.Pj);
        a.w.K(a.o, "_renderstart", a.Qj);
        a.w.K(a.o, "loaded", function () {
            a.ka = !0
        });
        a.w.K(a.o, a.Aa, a.nk);
        _.B(a.j, 9) && a.w.K(a.o, "blur", a.Gj);
        a.w.K(a.o, "restyle", a.Rj);
        a.w.K(a.o, "unload", a.Jj);
        a.w.K(a.o, "close", a.wg);
        b && 0 < b.length && (0, _.Ka)(b, function (c) {
            return _.gh(a.w, c, a.wg)
        });
        null != a.A ? (a.w.K(a.A, ["mouseover", "focus"], a.Vj), _.gh(a.w, a.A, a.Fg), a.w.K(a.A, "keydown", function (c) {
            27 == c.keyCode &&
            a.isVisible() && (a.W = !0, a.Fg(c))
        }), 1 == _.A(a.j, 17) && (a.w.K(a.o, "alogn", a.Ej), a.w.K(a.o, "alogm", a.Nj), a.w.K(a.o, "alogmm", a.Oj), a.w.K(a.o, "alogma", a.Mj), a.w.K(a.o, "alogc", a.Dj)), a.w.K(window, ["keyup", "keydown"], a.Sj), _.x && a.w.K(a.A, "focusin", function () {
            a.U = !0
        }), _.qh(a.A, "click"), (b = a.A.querySelector("[data-eqid]")) && _.qh(b, "click")) : null != a.N && (mA(a.N, a), a.w.K(a.o, "plog", a.Yg));
        a.w.K(window, "beforeunload", a.Fj)
    };
    _.h = OA.prototype;
    _.h.Qj = function (a) {
        this.sa = !0;
        null != _.A(this.j, 32) && RA(this, _.A(this.j, 32));
        a.data && ("null" !== a.data.ttf && (this.ma = Number(a.data.ttf) || null), (a.data.height || a.data.width) && XA(this, a.data.height, a.data.width))
    };
    _.h.Lj = function () {
        this.J = !0
    };
    _.h.Yg = function (a) {
        "i" === a.data.ld.apatk && RA(this, 110)
    };
    _.h.Fj = function () {
        this.V = !0;
        null != this.C && (_.eg(this.C), this.C = null);
        this.isVisible() || this.J || this.o.remove()
    };
    _.h.nk = function () {
        this.H = !0;
        null != this.L && _.eg(this.L);
        TA(this, this.G)
    };
    var PA = function (a) {
        null != a.C && (_.eg(a.C), a.C = null);
        var b = DA(a.o);
        null == a.P && (a.P = b);
        if (3 != b) {
            if (b = _.A(a.j, 14)) a.L = _.dg(a.ya, b, a);
            null != _.A(a.j, 30) && RA(a, _.A(a.j, 30))
        }
    };
    OA.prototype.X = function () {
        var a = this;
        "complete" == document.readyState ? PA(this) : window.addEventListener("load", function () {
            return PA(a)
        })
    };
    OA.prototype.ya = function () {
        this.H || this.S || (this.T = !0, this.G && SA(this))
    };
    var SA = function (a) {
        null != _.A(a.j, 16) && RA(a, _.A(a.j, 16));
        a.dispatchEvent("sort")
    };
    _.h = OA.prototype;
    _.h.Pj = function () {
        this.S = !0;
        null != this.L && _.eg(this.L);
        null != _.A(this.j, 26) && this.G && RA(this, _.A(this.j, 26))
    };
    _.h.Fg = function (a) {
        this.ha = Date.now();
        var b = !_.Hg(a);
        b = void 0 === b ? !1 : b;
        var c = !this.isVisible();
        TA(this, c);
        var d = this.o,
            e = {};
        e.keyboardAction = void 0 === b ? !1 : b;
        GA(d, c ? "open" : "close", e);
        if (c ? null != _.A(this.j, 12) : null != _.A(this.j, 13)) b = c ? _.A(this.j, 12) : _.A(this.j, 13), RA(this, b);
        this.U = !1;
        a.preventDefault();
        a.stopPropagation()
    };
    _.h.Sj = function (a) {
        32 == a.keyCode && a.target instanceof Element && _.Xf(this.A, a.target) && (a.stopPropagation(), a.preventDefault())
    };
    _.h.Vj = function () {
        PA(this)
    };
    _.h.Rj = function (a) {
        a.data && XA(this, a.data.height, a.data.width)
    };
    var XA = function (a, b, c) {
        b = void 0 === b ? "" : b;
        c = void 0 === c ? "" : c;
        var d = {};
        b && (d.height = b);
        c && (d.width = c);
        _.xg(a.B, d)
    };
    _.h = OA.prototype;
    _.h.Gj = function () {
        document.activeElement == this.A || _.Xf(this.A, document.activeElement) || this.U || TA(this, !1)
    };
    _.h.Jj = function () {
        this.H = !1;
        TA(this, !1)
    };
    _.h.wg = function () {
        TA(this, !1)
    };
    _.h.Ej = function (a) {
        var b = Number(a.data.pid) || -1,
            c = a = a.data.vis;
        if (4 < a || 0 >= a) c = 0;
        a = c;
        c = new _.Bc;
        b = _.E(c, 15, b);
        b = _.Sn(b, YA(this));
        _.Up(this.Z, a, b)
    };
    _.h.Nj = function () {
        RA(this, 104)
    };
    _.h.Oj = function () {
        RA(this, 105)
    };
    _.h.Mj = function (a) {
        a = a.data.an;
        var b = _.Sn(new _.Bc, YA(this));
        _.Tp(this.Z, a, b)
    };
    _.h.Dj = function (a) {
        RA(this, a.data.mouseSession ? 99 : 100)
    };
    var YA = function (a) {
            var b = a.o && a.o.getIframeEl(),
                c = 0;
            a.J && (c |= 1);
            a.$ && (c |= 128);
            a.sa && (c |= 32);
            a.S && (c |= 64);
            a.isVisible() && (c |= 2);
            a.T && (c |= 4);
            b && (c |= 8);
            a.ka && (c |= 16);
            _.gf("gapi.iframes") && (c |= 256);
            a.o.H && (c |= 512);
            a.o.J && (c |= 1024);
            a.W && (c |= 2048);
            switch (a.P) {
                case 2:
                    c |= 4096;
                    break;
                case 1:
                    c |= 8192
            }
            a.V && (c |= 16384);
            a.G && (c |= 32768);
            return c
        },
        RA = function (a, b, c) {
            c = c || (a.O ? _.fk(a.O) : new _.Bc);
            _.Sn(c, YA(a));
            if (null != _.A(a.j, 19)) {
                var d = _.G(a.j, iA, 19);
                d = _.A(d, 1);
                _.E(c, 31, d);
                _.E(c, 34, !0)
            }
            a.wa.log(b, c)
        },
        NA = {
            overflow: "hidden",
            position: "absolute",
            top: "0",
            visibility: "hidden",
            width: "350px",
            "z-index": 991
        };
    var ZA = function (a, b, c, d) {
        _.P.call(this);
        this.w = a;
        this.j = b;
        this.B = d;
        this.o = new _.Ig(this);
        _.Mf(this, this.o);
        this.A = c;
        this.o.K(this.w, "plog", this.D);
        this.o.K(this.w, "savec", this.C);
        this.o.K(this.w, "savek", this.C);
        this.o.K(this.w, "caev", this.C);
        this.o.Gb(this.j, "rav", this.J);
        this.o.Gb(this.w, "dismiss", this.G)
    };
    _.n(ZA, _.P);
    ZA.prototype.J = function () {
        var a = this.B;
        a.j || (_.Zn(a.o), a.j = !0);
        this.A.log("i", "&vis=1", 1, this.j.F(), YA(this.j))
    };
    ZA.prototype.G = function (a) {
        a = a.data && a.data.type ? a.data.type : "d";
        "ec" === a ? $A() : "end" !== a && this.B.Ma();
        TA(this.j, !1);
        this.A.log(a, "", 1, this.j.F(), YA(this.j))
    };
    ZA.prototype.C = function (a) {
        switch (a.data.apatk) {
            case "c":
                $A();
                break;
            case "d":
                this.B.Ma()
        }
    };
    var $A = function () {
        var a = _.gf("window.launchConsentDialog");
        a && a()
    };
    ZA.prototype.D = function (a) {
        var b = a.data.ld;
        a = b.apatk;
        if ("i" != a) {
            var c = b.sp;
            b = b.ad;
            var d = this.j.F(),
                e = YA(this.j);
            this.A.log(a, b, c, d, e)
        }
    };
    var aB = function (a) {
        this.o = a;
        this.j = null
    };
    aB.prototype.La = function () {
        var a = this.o,
            b = this.A,
            c = this.w;
        bB(a);
        b = "<div" + _.Wt("") + _.Xt(cB(a, b, c) + "") + _.Vt(dB(a, b, c) + "") + ">";
        c = eB(c);
        var d = _.$t(a.w);
        "" !== d && (b += " <style>" + d + "</style>");
        b += c + "</div>";
        _.du(a);
        a = _.gq(document, _.Db(b, null));
        this.j && this.j.appendChild(a);
        return a
    };
    aB.prototype.fill = function (a, b) {
        this.A = a;
        this.w = b
    };
    aB.prototype.instantiate = function (a) {
        this.j = a;
        _.cu(this.o, a)
    };
    var dB = function () {
            return ' dir="' + _.Ut("ltr") + '"'
        },
        fB = function () {
            return ""
        },
        cB = function (a, b, c) {
            return "padding:" + _.Ut(nA(a.j) ? gA("padding", b ? "12px" : "3px") : b ? "12px" : "3px") + ";" + (c ? "" : "display:" + _.Ut(nA(a.j) ? gA("display", "inline-block") : "inline-block") + ";") + "vertical-align:" + _.Ut(nA(a.j) ? gA("vertical-align", "middle") : "middle") + ";" + (c && !nA(a.j) ? "margin-left:" + _.Ut("calc(50% - 24px)") + ";" : "") + (c && nA(a.j) ? "margin-right:" + _.Ut("calc(50% - 24px)") + ";" : "") + (c ? "margin-top:" + _.Ut(nA(a.j) ? gA("margin-top", "98px") :
                "98px") + ";" : "")
        },
        gB = function () {
            return !0
        },
        hB = function () {
            return !1
        },
        iB = function (a, b) {
            bB(a);
            return eB(b.sg)
        },
        jB = function (a, b) {
            bB(a);
            var c = b.Xi;
            b = b.sg;
            a = "<div" + _.Wt("") + _.Xt(cB(a, c, b) + "") + _.Vt(dB(a, c, b) + "") + ">";
            c = eB(b);
            return _.Db(a + (c + "</div>"), null)
        },
        eB = function (a) {
            return " <div" + _.Wt((a ? "mspin-medium " : "") + (a ? "" : "mspin-small ")) + _.Xt("") + _.Vt("") + "> <div> <div></div> </div> </div> "
        },
        bB = function (a) {
            kB in a.o || _.bu(a, kB, {Xi: 0, sg: 1}, iB, jB, gB, hB, "", dB, fB, cB)
        },
        kB = "t-s91B_Xq1PdE",
        lB = function (a) {
            this.o = a;
            this.j = null
        };
    lB.prototype.La = function () {
        var a = this.o,
            b = this.w;
        mB(a);
        b = "<div" + _.Wt("") + _.Xt(nB(a, b) + "") + _.Vt("") + ">";
        var c = _.$t(a.w);
        "" !== c && (b += " <style>" + c + "</style>");
        b += "</div>";
        _.du(a);
        a = _.gq(document, _.Db(b, null));
        this.j && this.j.appendChild(a);
        return a
    };
    lB.prototype.fill = function (a) {
        this.w = a
    };
    lB.prototype.instantiate = function (a) {
        this.j = a;
        _.cu(this.o, a)
    };
    var oB = function () {
            return ""
        },
        pB = function () {
            return ""
        },
        nB = function (a, b) {
            return "box-shadow:0 -1px 2px 0 rgba(60,64,67,0.30),0 -2px 6px 2px rgba(60,64,67,0.15);height:calc(100% - 16px);" + (nA(a.j) ? "" : "left:0;") + (nA(a.j) ? "right:0;" : "") + "margin:8px;position:absolute;top:0;width:calc(100% - 16px);background:" + _.Ut(nA(a.j) ? gA("background", b ? "#2d2e30" : "#FFF") : b ? "#2d2e30" : "#FFF") + ";"
        },
        qB = function () {
            return !0
        },
        rB = function () {
            return !1
        },
        sB = function (a) {
            mB(a);
            return ""
        },
        tB = function (a, b) {
            mB(a);
            a = "<div" + _.Wt("") + _.Xt(nB(a,
                b.Sd) + "") + _.Vt("") + ">";
            return _.Db(a + "</div>", null)
        },
        mB = function (a) {
            uB in a.o || _.bu(a, uB, {Sd: 0}, sB, tB, qB, rB, "", oB, pB, nB)
        },
        uB = "t-LSLm3aJIFAU",
        vB = function (a) {
            this.o = a;
            this.j = null
        };
    vB.prototype.La = function () {
        var a = this.o,
            b = this.B,
            c = this.C,
            d = this.A,
            e = this.w;
        wB(a);
        var f = "<div" + _.Wt("") + _.Xt(xB(a, b, c, d, e) + "") + _.Vt(' data-fb=""') + ">";
        b = yB(a, b, c, d, e);
        c = _.$t(a.w);
        "" !== c && (f += " <style>" + c + "</style>");
        f += b + "</div>";
        _.du(a);
        a = _.gq(document, _.Db(f, null));
        this.j && this.j.appendChild(a);
        return a
    };
    vB.prototype.fill = function (a, b, c, d) {
        this.B = a;
        this.C = b;
        this.A = c;
        this.w = d
    };
    vB.prototype.instantiate = function (a) {
        this.j = a;
        _.cu(this.o, a)
    };
    var zB = function () {
            return ""
        },
        AB = function () {
            return ""
        },
        xB = function (a, b, c, d, e) {
            return "font:14px/22px Roboto,RobotoDraft,Arial,sans-serif;letter-spacing:0.03px;padding:134px 50px;text-align:center;white-space:normal;color:" + _.Ut(nA(a.j) ? gA("color", e ? "#e8eaed" : "#5F6368") : e ? "#e8eaed" : "#5F6368") + ";"
        },
        BB = function () {
            return !0
        },
        CB = function () {
            return !1
        },
        DB = function (a, b) {
            wB(a);
            return yB(a, b.Cf, b.mg, b.zf, b.Sd)
        },
        EB = function (a, b) {
            wB(a);
            var c = b.Cf,
                d = b.mg,
                e = b.zf,
                f = b.Sd;
            b = "<div" + _.Wt("") + _.Xt(xB(a, c, d, e, f) + "") + _.Vt(' data-fb=""') +
                ">";
            a = yB(a, c, d, e, f);
            return _.Db(b + (a + "</div>"), null)
        },
        yB = function (a, b, c, d, e) {
            return ' <svg height="28px" viewbox="0 0 24 24" width="28px" xmlns="http://www.w3.org/2000/svg"> <path' + _.Wt("") + _.Xt("") + _.Vt(' fill="' + _.Ut(e ? "#E8EAED" : "#80868B") + '" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"') + "></path> </svg> <p" + _.Wt("") + _.Xt("margin-top:4px;") + _.Vt("") + "> " + _.Ut(b) + " <a" + _.Wt("") + _.Xt("font:14px/22px Roboto,RobotoDraft,Arial,sans-serif;font-weight:bold;letter-spacing:0.03px;text-decoration:none;color:" +
                _.Ut(nA(a.j) ? gA("color", e ? "#8AB4F8" : "#4285F4") : e ? "#8AB4F8" : "#4285F4") + ";") + _.Vt(' target="_blank"') + ">" + _.Ut(c) + "</a> " + _.Ut(d) + " </p> "
        },
        wB = function (a) {
            FB in a.o || _.bu(a, FB, {Cf: 0, mg: 1, zf: 2, Sd: 3}, DB, EB, BB, CB, ' data-fb=""', zB, AB, xB)
        },
        FB = "t-PFKuGYhRe5s";
    var HB = function (a, b, c, d) {
        _.P.call(this);
        this.j = a;
        this.J = b;
        this.O = c;
        this.D = d;
        this.N = 0;
        this.B = null;
        this.A = 0;
        this.P = !0;
        this.G = null;
        this.S = !1;
        this.H = new _.au;
        this.L = this.o = this.C = null;
        this.T = !1;
        this.w = new _.Ig(this);
        _.Mf(this, this.w);
        _.xg(this.j.F(), {transition: "height .3s ease-in-out"});
        GB(this)
    };
    _.n(HB, _.P);
    var GB = function (a) {
        a.w.K(a.j, "sorp", a.Af);
        a.w.K(a.j, "sort", a.dj);
        a.w.K(a.j, "rav", a.jj);
        a.w.K(a.j, "h", a.Ij);
        a.w.K(a.j, "sdm", function () {
            a.o && a.o.querySelector("[data-fb]") && IB(a)
        });
        a.w.K(a.J, "close", a.ij)
    };
    _.h = HB.prototype;
    _.h.jj = function () {
        JB(this);
        this.C && this.C.Nb(!1);
        this.J.focus();
        this.D.setAttribute("aria-expanded", !0)
    };
    _.h.Ij = function () {
        this.D.setAttribute("aria-expanded", !1)
    };
    _.h.ij = function () {
        this.D.focus()
    };
    _.h.dj = function () {
        var a = this;
        switch (this.N) {
            case 2:
                JB(this);
                WA(this.j);
                QA(this.j, !1);
                this.D.click();
                break;
            case 1:
                this.B && _.Rn(top.location, _.mb(this.B));
            case 3:
                this.Af(), IB(this)
        }
        if (this.S) {
            var b = _.ue("IFRAME"),
                c = _.O(window, "message", function (d) {
                    if ("afbp" === d.Ya.data) {
                        d = a.j;
                        switch (_.A(d.j, 17)) {
                            case 1:
                                RA(d, 73)
                        }
                        a.j.F().removeChild(b);
                        _.Hf(c)
                    }
                });
            _.Zm(b, KB);
            b.style.display = "none";
            this.j.F().appendChild(b)
        }
    };
    _.h.Af = function () {
        this.o && JB(this);
        if (!this.L) {
            if (!this.T) {
                var a = 1 == this.A ? LB : MB;
                var b = _.ue("LINK");
                _.qj(b, a, "stylesheet");
                document.head.appendChild(b);
                this.T = !0
            }
            a = new aB(this.H);
            a.fill(this.P, 1 == this.A);
            this.L = a.La()
        }
        a = this.L;
        switch (this.A) {
            case 1:
                b = new lB(this.H);
                b.fill(this.j.D);
                this.o = b.La();
                this.o.appendChild(a);
                this.j.F().appendChild(this.o);
                FA(this.J, !1);
                QA(this.j, !0);
                break;
            default:
                this.o = a, _.xq(this.O, !1), _.jh(this.o, this.O)
        }
    };
    var IB = function (a) {
            if (1 == a.A && a.B && a.G) {
                _.xg(a.o, "background", a.j.D ? "#2d2e30" : "#FFF");
                _.ve(a.o);
                var b = new vB(a.H);
                NB(a, b, a.G);
                b = b.La();
                var c = b.querySelectorAll("a")[0];
                _.hh(c, a.B);
                a.w.K(c, "click", function () {
                    var d = a.j;
                    null != _.A(d.j, 21) && RA(d, _.A(d.j, 21))
                });
                a.o.appendChild(b)
            }
        },
        JB = function (a) {
            a.o && (_.we(a.o), 1 != a.A && _.xq(a.O, !0), a.o = null)
        },
        NB = function (a, b, c) {
            c = /(.*)%1\$s(.*)%2\$s(.*)/.exec(c);
            b.fill(c[1], c[2], c[3], a.j.D)
        },
        KB = _.Ym(_.wm("http://127.0.0.1:5500/gb/html/afbp.html")),
        MB = _.Ym(_.wm("http://127.0.0.1:5500/images/icons/material/anim/mspin/mspin_googcolor_small.css")),
        LB = _.Ym(_.wm("http://127.0.0.1:5500/images/icons/material/anim/mspin/mspin_googcolor_medium.css"));
    var OB = function (a, b) {
        this.o = a;
        this.j = b
    };
    _.h = OB.prototype;
    _.h.Vc = function () {
        return this.o
    };
    _.h.ve = function (a) {
        TA(this.j, a)
    };
    _.h.$a = function (a) {
        this.j.$a(a)
    };
    _.h.Ye = function () {
        return !0
    };
    _.h.Sb = function () {
        return this.j.isVisible()
    };
    _.h.ue = function () {
    };
    _.PB = function (a) {
        if (a) {
            var b = document.querySelector("#gb [data-ogsr-up]");
            if (b) {
                var c = 0 !== _.C(a, 7, 0),
                    d = _.Qj(a, lA, 1);
                if (c || d && d.length) {
                    vA();
                    c = _.Gc.ua().j.dd || null;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        if (_.G(f, _.pj, 3)) {
                            if (3 === _.A(f, 17)) {
                                var g = _.G(f, iA, 19);
                                if (_.B(g, 11)) {
                                    var k = _.A(g, 1) || 0,
                                        l = _.A(g, 2) || 0;
                                    f = _.A(g, 12) || 0;
                                    g = hA(g, k, l);
                                    _.Zn(g);
                                    l = _.Hc(_.Gc.ua(), "p_log");
                                    k = new LA(l, k, f, g.Ub());
                                    k.D.log(k.j.toString(), "7", "i", "&ap=1&vis=0", 1);
                                    _.xo(k.B, "i", k.j, k.A, k.C, null, !0, !0, !0);
                                    continue
                                }
                            }
                            k = new OA(f, _.tn,
                                b, !!_.B(a, 10));
                            g = k.F();
                            l = a;
                            var m = {};
                            m.hl = _.A(l, 9);
                            switch (_.A(f, 17)) {
                                case 1:
                                    m.gm = "", _.B(l, 10) && (m.dm = "")
                            }
                            g = new CA(g, _.G(f, _.pj, 3), _.A(l, 4), _.A(l, 5), m, !!_.B(f, 34));
                            if (3 === _.A(f, 17)) {
                                m = _.G(f, iA, 19);
                                f = _.A(m, 1) || 0;
                                var r = _.A(m, 2) || 0;
                                l = _.A(m, 12);
                                var t = new _.Bc;
                                _.E(t, 31, f);
                                var F = _.Vn(new _.Un, l);
                                _.H(t, 50, F);
                                k.O = t;
                                F = _.N("gb_3c");
                                t = Array.from(_.ih("gb_D", F));
                                (F = _.N("gb_ia", F)) && _.ng(t, void 0, 0, F);
                                VA(k, g, _.yo.ua(), t);
                                r = hA(m, f, r);
                                m = new MA(r);
                                r = r.Ub();
                                t = _.Hc(_.Gc.ua(), "p_log");
                                new ZA(g, k, new LA(t, f, l, r), m)
                            } else if (m =
                                null, (l = 1 === _.A(f, 17)) ? (m = document.querySelector("#gb [data-ogsr-alt]"), c.A(new OB("app", k))) : 2 === _.A(f, 17) && (m = (m = _.N("gb_Sa")) ? _.N("gb_D", m) : null, c.A(new OB("account", k))), null != m && (VA(k, g, m), r = k.D, l && r !== _.B(a, 10) && c.$a(r), l = m.getElementsByClassName("gb_D")[0] || m, k = new HB(k, g, m, l), r = _.A(f, 15), g = _.B(a, 6), m = _.A(f, 22), t = _.C(f, 23, 0), k.N = t, k.B = r, r = k, t = _.A(f, 20), r.A = t, r.P = g, r.G = m, m = r, r = !!_.B(f, 25), m.S = r, g && 1 === _.A(f, 17) && (f = _.N("gb_Xd")))) f = new _.mr(l, f), k.C && k.C.ta(), k.C = f
                        } else _.wd.log(Error("Xa"))
                    }
                } else _.wd.log(Error("Ya"))
            } else _.wd.log(Error("Za"))
        } else _.wd.log(Error("$a"))
    };

} catch (e) {
    _._DumpException(e)
}
try {
    var GE = new _.kA;
    window.gbar_ && window.gbar_.D_CONFIG && (GE = new _.kA(window.gbar_.D_CONFIG));
    _.PB(GE);

} catch (e) {
    _._DumpException(e)
}
})
(this.gbar_);
// Google Inc.