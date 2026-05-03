var wa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(A, W, l) {
        if (l.get || l.set) throw new TypeError("ES3 does not support getters and setters.");
        A != Array.prototype && A != Object.prototype && (A[W] = l.value)
    },
    xa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

function Ba() {
    Ba = function() {};
    xa.Symbol || (xa.Symbol = Ia)
}
var Ja = 0;

function Ia(A) {
    return "jscomp_symbol_" + (A || "") + Ja++
}

function Ta() {
    Ba();
    var A = xa.Symbol.iterator;
    A || (A = xa.Symbol.iterator = xa.Symbol("iterator"));
    "function" != typeof Array.prototype[A] && wa(Array.prototype, A, {
        configurable: !0,
        writable: !0,
        value: function() {
            return cb(this)
        }
    });
    Ta = function() {}
}

function cb(A) {
    var W = 0;
    return db(function() {
        return W < A.length ? {
            done: !1,
            value: A[W++]
        } : {
            done: !0
        }
    })
}

function db(A) {
    Ta();
    A = {
        next: A
    };
    A[xa.Symbol.iterator] = function() {
        return this
    };
    return A
}

function qb(A) {
    Ta();
    var W = A[Symbol.iterator];
    return W ? W.call(A) : cb(A)
}

function rb(A, W) {
    Ta();
    A instanceof String && (A += "");
    var l = 0,
        O = {
            next: function() {
                if (l < A.length) {
                    var F = l++;
                    return {
                        value: W(F, A[F]),
                        done: !1
                    }
                }
                O.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return O.next()
            }
        };
    O[Symbol.iterator] = function() {
        return O
    };
    return O
}

function Ye(A, W) {
    if (W) {
        for (var l = xa, O = A.split("."), F = 0; F < O.length - 1; F++) {
            var P = O[F];
            P in l || (l[P] = {});
            l = l[P]
        }
        O = O[O.length - 1];
        F = l[O];
        P = W(F);
        P != F && null != P && wa(l, O, {
            configurable: !0,
            writable: !0,
            value: P
        })
    }
}
Ye("Array.prototype.values", function(A) {
    return A ? A : function() {
        return rb(this, function(A, l) {
            return l
        })
    }
});

function Ze(A, W) {
    return Object.prototype.hasOwnProperty.call(A, W)
}
Ye("WeakMap", function(A) {
    function W(l) {
        this.lo = (P += Math.random() + 1).toString();
        if (l) {
            Ba();
            Ta();
            l = qb(l);
            for (var G; !(G = l.next()).done;) G = G.value, this.set(G[0], G[1])
        }
    }

    function l(l) {
        Ze(l, F) || wa(l, F, {
            value: {}
        })
    }

    function O(A) {
        var G = Object[A];
        G && (Object[A] = function(A) {
            l(A);
            return G(A)
        })
    }
    if (function() {
            if (!A || !Object.seal) return !1;
            try {
                var l = Object.seal({}),
                    G = Object.seal({}),
                    F = new A([
                        [l, 2],
                        [G, 3]
                    ]);
                if (2 != F.get(l) || 3 != F.get(G)) return !1;
                F["delete"](l);
                F.set(G, 4);
                return !F.has(l) && 4 == F.get(G)
            } catch (ma) {
                return !1
            }
        }()) return A;
    var F = "$jscomp_hidden_" + Math.random().toString().substring(2);
    O("freeze");
    O("preventExtensions");
    O("seal");
    var P = 0;
    W.prototype.set = function(A, G) {
        l(A);
        if (!Ze(A, F)) throw Error("WeakMap key fail: " + A);
        A[F][this.lo] = G;
        return this
    };
    W.prototype.get = function(l) {
        return Ze(l, F) ? l[F][this.lo] : void 0
    };
    W.prototype.has = function(l) {
        return Ze(l, F) && Ze(l[F], this.lo)
    };
    W.prototype["delete"] = function(l) {
        return Ze(l, F) && Ze(l[F], this.lo) ? delete l[F][this.lo] : !1
    };
    return W
});
Ye("Map", function(A) {
    function W() {
        var l = {};
        return l.ji = l.next = l.head = l
    }

    function l(l, A) {
        var G = l.Nh;
        return db(function() {
            if (G) {
                for (; G.head != l.Nh;) G = G.ji;
                for (; G.next != G.head;) return G = G.next, {
                    done: !1,
                    value: A(G)
                };
                G = null
            }
            return {
                done: !0,
                value: void 0
            }
        })
    }

    function O(l, A) {
        var G;
        G = A && typeof A;
        "object" == G || "function" == G ? P.has(A) ? G = P.get(A) : (G = "" + ++Z, P.set(A, G)) : G = "p_" + A;
        var F = l.Qn[G];
        if (F && Ze(l.Qn, G))
            for (var O = 0; O < F.length; O++) {
                var W = F[O];
                if (A !== A && W.key !== W.key || A === W.key) return {
                    id: G,
                    list: F,
                    index: O,
                    fe: W
                }
            }
        return {
            id: G,
            list: F,
            index: -1,
            fe: void 0
        }
    }

    function F(l) {
        this.Qn = {};
        this.Nh = W();
        this.size = 0;
        if (l) {
            l = qb(l);
            for (var G; !(G = l.next()).done;) G = G.value, this.set(G[0], G[1])
        }
    }
    if (function() {
            if (!A || !A.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var l = Object.seal({
                        x: 4
                    }),
                    F = new A(qb([
                        [l, "s"]
                    ]));
                if ("s" != F.get(l) || 1 != F.size || F.get({
                        x: 4
                    }) || F.set({
                        x: 4
                    }, "t") != F || 2 != F.size) return !1;
                var P = F.entries(),
                    O = P.next();
                if (O.done || O.value[0] != l || "s" != O.value[1]) return !1;
                O = P.next();
                return O.done || 4 != O.value[0].x || "t" != O.value[1] ||
                    !P.next().done ? !1 : !0
            } catch (Ka) {
                return !1
            }
        }()) return A;
    Ba();
    Ta();
    var P = new WeakMap;
    F.prototype.set = function(l, A) {
        var G = O(this, l);
        G.list || (G.list = this.Qn[G.id] = []);
        G.fe ? G.fe.value = A : (G.fe = {
            next: this.Nh,
            ji: this.Nh.ji,
            head: this.Nh,
            key: l,
            value: A
        }, G.list.push(G.fe), this.Nh.ji.next = G.fe, this.Nh.ji = G.fe, this.size++);
        return this
    };
    F.prototype["delete"] = function(l) {
        l = O(this, l);
        return l.fe && l.list ? (l.list.splice(l.index, 1), l.list.length || delete this.Qn[l.id], l.fe.ji.next = l.fe.next, l.fe.next.ji = l.fe.ji, l.fe.head =
            null, this.size--, !0) : !1
    };
    F.prototype.clear = function() {
        this.Qn = {};
        this.Nh = this.Nh.ji = W();
        this.size = 0
    };
    F.prototype.has = function(l) {
        return !!O(this, l).fe
    };
    F.prototype.get = function(l) {
        return (l = O(this, l).fe) && l.value
    };
    F.prototype.entries = function() {
        return l(this, function(l) {
            return [l.key, l.value]
        })
    };
    F.prototype.keys = function() {
        return l(this, function(l) {
            return l.key
        })
    };
    F.prototype.values = function() {
        return l(this, function(l) {
            return l.value
        })
    };
    F.prototype.forEach = function(l, A) {
        for (var F = this.entries(), G; !(G =
                F.next()).done;) G = G.value, l.call(A, G[1], G[0], this)
    };
    F.prototype[Symbol.iterator] = F.prototype.entries;
    var Z = 0;
    return F
});
Ye("Array.prototype.keys", function(A) {
    return A ? A : function() {
        return rb(this, function(A) {
            return A
        })
    }
});
Ye("Array.prototype.entries", function(A) {
    return A ? A : function() {
        return rb(this, function(A, l) {
            return [A, l]
        })
    }
});
Ye("Array.prototype.fill", function(A) {
    return A ? A : function(A, l, O) {
        var F = this.length || 0;
        0 > l && (l = Math.max(0, F + l));
        if (null == O || O > F) O = F;
        O = Number(O);
        0 > O && (O = Math.max(0, F + O));
        for (l = Number(l || 0); l < O; l++) this[l] = A;
        return this
    }
});
window.Runtime = function(A, W) {
    function l(a, b) {
        this.files = {};
        this.root = "";
        a && this.load(a, b)
    }

    function O(a, b, c) {
        this.x = a;
        this.y = b;
        this.text = c
    }

    function F() {
        this.ud = "";
        this.offset = this.R = 0;
        this.td = !1
    }

    function P() {
        this.Jd = []
    }

    function Z(a, b, c, d) {
        this.left = a ? a : 0;
        this.top = b ? b : 0;
        this.right = c ? c : 0;
        this.bottom = d ? d : 0
    }

    function G() {
        this.y = this.x = 0
    }

    function eb() {
        this.lc = 12;
        this.Ke = 400;
        this.Je = 0;
        this.Ie = "Arial";
        this.cj = !1
    }

    function ma(a, b) {
        this.app = a;
        this.Oa = b;
        this.eb = new P;
        this.lk = null
    }

    function na(a, b, c) {
        this.app = a;
        this.width = b;
        this.height = c;
        this.canvas = document.createElement("canvas");
        this.canvas.width = b;
        this.canvas.height = c;
        this.be = this.canvas.getContext("2d")
    }

    function Ka() {
        this.WI = !!window.opr && !!opr.GP || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
        this.VI = "undefined" !== typeof InstallTrigger;
        this.YI = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString();
        this.ZA = !!document.documentMode;
        this.SI = !this.ZA && !!window.StyleMedia;
        (this.TI = (this.YA = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) && -1 != navigator.userAgent.indexOf("Edg")) || this.YA || this.SI || this.ZA || this.VI || this.WI || this.YI || this.dD(Ka.FH);
        this.version = this.eD(navigator.userAgent) || this.eD(navigator.appVersion) || "Unknown version";
        this.dD(Ka.HH)
    }

    function ya() {
        this.Nu = null;
        this.height = this.width = 0;
        this.Hg = null;
        this.Oa = this.color = 0;
        this.iI = null;
        this.Xr = this.Fv = this.RI = this.uA = this.Nd = 0;
        this.Mu = null;
        this.cj = !0
    }

    function X() {}

    function sb() {
        this.Oa = 0;
        this.name = null;
        this.index = 0
    }

    function ga() {}

    function tb() {}

    function ub() {}

    function vb() {}

    function wb() {}

    function xb() {}

    function yb() {}

    function zb() {}

    function Ab() {}

    function Bb() {}

    function Cb() {}

    function Db() {}

    function Eb() {}

    function Fb() {}

    function Gb() {}

    function Hb() {}

    function Ib() {}

    function Jb() {}

    function Kb() {}

    function Lb() {}

    function Mb() {}

    function Nb() {}

    function Ob() {}

    function Pb() {}

    function Qb() {}

    function Rb() {}

    function Sb() {}

    function Tb() {}

    function Ub() {}

    function Vb() {}

    function Wb() {}

    function Xb() {}

    function Yb() {}

    function Zb() {}

    function $b() {}

    function ac() {}

    function bc() {}

    function cc() {}

    function dc() {}

    function ec() {}

    function fc() {}

    function gc() {}

    function hc() {}

    function ic() {}

    function jc() {}

    function kc() {}

    function lc() {}

    function mc() {}

    function nc() {}

    function K() {}

    function ua() {}

    function oc() {}

    function K() {}

    function pc() {}

    function qc() {}

    function rc() {}

    function sc() {}

    function tc() {}

    function uc() {}

    function vc() {}

    function wc() {}

    function xc() {}

    function yc() {}

    function zc() {}

    function Ac() {}

    function Bc() {}

    function Cc() {}

    function Dc() {}

    function Ec() {}

    function Fc() {}

    function Gc() {}

    function fb() {}

    function Hc() {}

    function Ic() {}

    function Jc() {}

    function Kc() {}

    function Lc() {}

    function Mc() {}

    function Nc() {}

    function Oc() {}

    function Pc() {}

    function Qc() {}

    function Rc() {}

    function Sc() {}

    function Tc() {}

    function Uc() {}

    function aa() {}

    function gb() {}

    function va() {}

    function hb() {}

    function Vc() {}

    function Wc() {}

    function Xc() {}

    function Yc() {}

    function Zc() {}

    function $c() {}

    function ad() {}

    function bd() {}

    function cd() {}

    function dd() {}

    function ed() {}

    function fd() {}

    function gd() {}

    function hd() {}

    function id() {}

    function jd() {}

    function kd() {}

    function ld() {}

    function md() {}

    function nd() {}

    function od() {}

    function pd() {}

    function qd() {}

    function rd() {}

    function sd() {}

    function ib() {
        ka.Ub.oJ()
    }

    function td() {
        ka.Ub.tJ()
    }

    function n(a, b, c, d) {
        (this.bB = !0 === d) ? (this.canvas = a.canvas, this.es = a.es) : "string" === typeof a ? (this.canvas = document.getElementById(a), this.es = this.canvas.parentElement) : a instanceof HTMLElement &&
            (this.canvas = document.createElement("canvas"), this.es = a);
        a = this.Ru = a.Ru || document.createElement("div");
        a.appendChild(this.canvas);
        this.es.appendChild(a);
        a.style.overflow = "hidden";
        a.style.position = "relative";
        a.style.transform = "translateZ(0)";
        a.style.margin = "0";
        a.style.padding = "0";
        a.style.display = "block";
        a.style.boxSizing = "content-box";
        a.className = "MMFDiv";
        this.vA = this.wA = this.lv = null;
        this.gm = 0;
        this.appName = this.mv = null;
        this.vm = 0;
        this.xv = this.PA = null;
        this.Co = 0;
        this.AD = this.wc = this.Ve = this.Vb = this.ha =
            this.tc = this.wv = null;
        this.hb = this.BD = 0;
        this.$n = this.ao = this.vC = this.pp = this.ro = null;
        this.Fe = this.Ib = this.ux = 0;
        this.Ga = this.file = this.frame = null;
        this.Jw = this.Kw = this.Uk = 0;
        this.ii = this.H = null;
        this.Wv = !1;
        this.zA = this.Qf = this.yA = this.AA = this.BA = this.Aa = this.sa = this.co = this.bo = this.ig = this.hg = 0;
        this.Yn = this.Lw = this.uC = null;
        this.Xf = this.Wf = this.EH = this.DH = this.Zn = 0;
        this.Xc = null;
        this.Pz = 0;
        this.cursor = "auto";
        this.ss = !1;
        this.sk = this.Zq = null;
        this.td = !1;
        this.Ia = this.alpha = this.ee = this.de = this.Tz = this.Mj = this.Kj =
            0;
        this.file = b;
        this.yj = "";
        this.path = c;
        b = c.lastIndexOf("/");
        0 <= b && (this.yj = c.substring(0, b + 1));
        this.Ag = 0;
        this.H = null;
        this.Oh = this.Ph = this.od = 0;
        this.Dk = !1;
        this.Jb = [];
        this.Qo = -1;
        this.ls = this.Xk = this.zC = this.BC = this.AC = this.yC = this.xC = 0;
        this.gg = this.pd = this.yx = this.transition = null;
        this.Cu = !1;
        this.mh = this.lh = this.Cf = null;
        this.wo = n.dk;
        this.Ca = null;
        this.NG = this.pu = this.ou = this.QG = this.PG = this.OG = this.En = this.Sh = 0;
        this.rc = this.sc = 1;
        this.hasFocus = !0;
        this.rr = this.Du = !1;
        this.yv = this.ms = null;
        this.tr = -1;
        this.oo =
            null;
        this.no = 1E9;
        this.sr = null;
        0 <= window.location.href.indexOf("192.") && (b = window.location.href.indexOf("21700/"), 0 <= b && (this.sr = window.location.href.substring(0, b + 6), this.tr = -1, this.no = 25));
        this.sg = !1;
        this.GH = 8;
        this.Pn = new P;
        this.Vq = new P;
        this.Lb = [];
        this.me = 0;
        this.Ue = null;
        this.aw = "Please touch the screen to start";
        this.fullScreen = !1;
        this.SD = "***version***";
        this.Cx = this.zp = 0
    }

    function Ua(a, b, c) {
        this.changedTouches = Array(1);
        this.changedTouches[0] = {
            pageX: a,
            pageY: b,
            target: c,
            identifier: n.fy
        }
    }

    function I(a) {
        this.app =
            a;
        this.l = null;
        this.dB = this.Yc = this.ke = 0;
        this.zr = !1;
        this.Yb = 0;
        this.Ar = null;
        this.po = this.qo = 0;
        this.xA = null;
        this.oc = 0;
        this.Vn = this.Gd = this.Za = null;
        this.iB = this.Pr = this.Ov = this.Nv = this.ej = this.dj = this.Mg = 0;
        this.Bd = this.Ad = this.vo = this.gv = this.Wn = null;
        this.mm = this.Ca = this.me = 0
    }

    function ba(a) {
        this.app = a;
        this.ib = null;
        this.yu = !1;
        this.cz = !0;
        this.In = this.Ap = null;
        this.lB = 0;
        this.mk = null;
        this.Xu = !1;
        this.ib = Array(ba.cd);
        this.Ap = Array(ba.cd);
        this.In = Array(ba.cd);
        this.yu = this.cz = !0;
        var b;
        for (b = 0; b < ba.cd; b++) this.ib[b] =
            null, this.Ap[b] = 100, this.In[b] = !1;
        this.lB = 100;
        b = new Audio;
        var c = Array(4);
        c[0] = b.canPlayType("audio/ogg");
        c[1] = b.canPlayType("audio/x-m4a");
        c[2] = b.canPlayType("audio/mpeg");
        c[3] = b.canPlayType("audio/wav");
        for (b = this.bw = this.Rw = 0; 4 > b; b++) "probably" == c[b] && (this.Rw |= 1 << b), "maybe" == c[b] && (this.bw |= 1 << b);
        for (; null != a.Ga;) a = a.Ga;
        this.context = a.AD;
        this.$l = a.BD;
        null == this.context && ("undefined" !== typeof AudioContext ? (this.context = new AudioContext, this.$l = 1) : "undefined" !== typeof webkitAudioContext && (this.context =
            new webkitAudioContext, this.$l = 0), a.AD = this.context, a.BD = this.$l)
    }

    function ud(a) {
        this.app = a
    }

    function vd(a) {
        this.app = a;
        this.Kv = !1;
        this.C = null;
        this.context = this.app.context;
        this.wf = this.app.AC;
        this.color = this.app.zC;
        this.wi = this.app.xC;
        0 > this.wi && (this.wi = this.app.sa / 2);
        this.xi = this.app.yC;
        0 > this.xi && (this.xi = this.app.Aa / 2);
        this.size = this.app.BC;
        this.Cw = 0;
        this.Pq = 25;
        this.Oe = 0;
        this.Hg = new Image;
        var b = this;
        this.Hg.onload = function() {
            b.Kv = !0
        };
        this.Hg.src = this.app.yj + "Preloader.png"
    }

    function wd(a) {
        this.app =
            a;
        this.context = this.app.context;
        this.width = 100;
        this.height = 12;
        this.position = 0;
        this.cH = 10526880;
        this.borderColor = 8421504;
        this.dH = 0;
        this.rect = new Z;
        this.rect.left = this.app.sa / 2 - this.width / 2;
        this.rect.top = this.app.Aa / 2 - this.height / 2;
        this.rect.right = this.rect.left + this.width;
        this.rect.bottom = this.rect.top + this.height;
        this.reset()
    }

    function xd(a) {
        this.app = a;
        this.Kv = !1;
        this.Mc = new Ca;
        this.C = new n(this.app, this.app.file, this.app.path, !0);
        this.C.hD(this.app, this.app.ls, 0, this.Mc, this.app.sa, this.app.Aa);
        this.C.digest();
        this.C.Wv = !1;
        this.C.ui = !1;
        this.C.Ia &= ~n.zi;
        this.C.tx();
        this.C.Ws(0, 0);
        this.C.tp();
        this.Mc.x = this.app.sa / 2 - this.C.frame.ke / 2;
        this.Mc.y = this.app.Aa / 2 - this.C.frame.Yc / 2;
        this.iL = 0 != (this.app.Ia & n.$D);
        this.app.Jb.push(this.C);
        this.cm = 0
    }

    function t(a) {
        this.app = a;
        this.sA = this.rA = this.je = this.Ld = this.yr = this.kc = null;
        this.bc = Array(3);
        this.cc = Array(3);
        this.Oa = this.Ca = this.Tf = this.Sf = 0;
        this.touches = Array(3);
        this.Au = !1;
        this.$A = !0;
        this.hf = this.Ig = this.cB = 0
    }

    function k(a) {
        this.h = a;
        this.B = null;
        this.dh = this.zb = this.$m =
            this.ox = this.sb = this.Gc = this.Sc = this.nx = this.Af = 0;
        this.i = this.T = null;
        this.Re = this.fp = this.hp = this.pl = this.si = this.qc = this.mx = this.ri = this.gp = this.ql = this.ka = this.fa = this.Vd = this.Ud = 0;
        this.Ds = this.Es = this.Fs = null;
        this.Ls = this.gx = this.Um = this.Qm = this.Wm = this.Sm = this.Tm = this.Pm = this.Vm = this.Rm = this.jl = this.ld = this.ll = this.kl = this.il = this.hl = this.VC = this.eg = this.bp = this.ap = this.Zo = this.fl = 0;
        this.ml = null;
        this.Y = this.Zm = this.Os = this.Ns = this.hx = this.ix = this.YC = 0;
        this.Ks = this.Ym = this.na = null;
        this.Qc = 0;
        this.Js =
            this.nl = null;
        this.Xm = 0;
        this.ol = null;
        this.Fc = 0;
        this.rs = null;
        this.Jn = !1;
        this.G = null;
        this.Gv = Array(2);
        this.Mh = !1;
        this.nA = 0;
        this.lx = 255;
        this.ts = this.HJ = !1
    }

    function yd() {
        this.kH = null;
        this.wz = this.vz = this.uz = this.mH = this.lH = this.Lq = 0
    }

    function Q() {
        this.Bw = this.zw = this.kb = this.jd = this.fb = this.$c = 0;
        this.bg = !1;
        this.No = this.nC = this.oC = this.Rk = this.Cm = this.Rd = this.ds = this.Ed = this.Mb = this.rj = this.Vg = this.pj = this.xw = this.ww = this.qf = 0;
        this.qj = this.Dm = null;
        this.yw = 0;
        this.oj = null;
        this.Aw = 0;
        this.rf = null
    }

    function $e() {
        this.Me =
            this.name = null
    }

    function af() {
        this.value = null;
        this.Qs = this.Rs = this.Jc = this.tb = 0
    }

    function bf() {
        this.text = null;
        this.tb = 0
    }

    function cf() {
        this.eb = this.values = null;
        this.Oa = 0
    }

    function ca() {
        this.BJ = 0;
        this.zJ = null;
        this.AJ = 0;
        this.ta = this.W = null
    }

    function r() {
        this.Mi = this.Fh = this.ae = null
    }

    function Pa() {
        this.If = 0;
        this.Li = this.Jf = null
    }

    function zd() {
        this.Tl = this.Xy = this.Wy = this.qu = this.ru = 0;
        this.ek = null
    }

    function La() {
        this.a = null;
        this.al = this.Wo = this.Zg = 0;
        this.ws = !1;
        this.Zk = 0;
        this.ye = null;
        this.vs = this.us = 0;
        this.Xo =
            null;
        this.Km = this.Im = this.vf = this.uf = this.IC = this.$k = this.Hm = this.Vo = this.HC = this.Jm = this.uj = this.Xw = 0;
        this.JC = -1
    }

    function Ad(a, b) {
        this.ha = a;
        this.app = a.app;
        this.handle = b
    }

    function Bd(a) {
        this.app = a;
        this.images = this.file = null;
        this.mf = this.Wh = this.Hb = 0;
        this.fi = this.Lb = this.gi = this.fk = this.Ck = this.ki = this.Ya = this.Ba = this.Qk = null
    }

    function Y() {
        this.app = null;
        this.Ya = this.qh = this.ph = this.ya = this.Ea = this.height = this.width = this.handle = 0;
        this.Uh = this.Kk = this.jf = this.wb = null;
        this.mo = this.Bd = this.Ad = this.xb = 0
    }

    function Cd(a) {
        this.app = a;
        this.bs = this.fonts = this.file = null;
        this.Vh = 0;
        this.Ba = null;
        this.Lg = this.le = 0;
        this.Ya = null;
        this.Go = new za;
        this.Go.Rq()
    }

    function za() {
        this.Je = this.Ke = this.lc = this.handle = this.Ya = 0;
        this.font = this.Ie = null;
        this.cj = !1
    }

    function Dd(a) {
        this.app = a;
        this.Fj = null;
        this.Do = this.Wh = this.Hb = 0;
        this.file = this.Ya = this.Ba = this.cs = null
    }

    function Va(a) {
        this.Ub = a;
        this.context = a.wc.context;
        this.$l = a.wc.$l;
        this.kI = a.wc.kI;
        this.type = 0;
        this.file = a.file;
        this.handle = -1;
        this.ub = this.source = null;
        this.Ya = 0;
        this.Ln = !1;
        this.Xh = 0;
        this.name = null;
        this.Qi = this.gk = !1;
        this.frequency = 0;
        this.gain = this.response = null;
        this.volume = 100
    }

    function jb(a) {
        this.name = a;
        this.dK = [];
        this.position = 0;
        this.Hr = !1
    }

    function C(a) {
        this.Ub = a;
        this.l = null;
        this.cC = this.Mg = 0;
        this.Nk = Array(v.dd + v.Dy);
        this.Bo = this.Pg = 0;
        this.Ek = this.bf = this.hc = this.mc = this.ad = this.Pc = this.vd = this.Yg = null;
        this.Qe = Array(v.dd + 1);
        this.$C = !1;
        this.$e = null;
        this.So = this.Uo = this.Ro = this.To = 0;
        this.ep = !1;
        this.Td = null;
        this.Ps = 0;
        this.Ms = Array(4);
        this.Om = this.dl = this.zj = !1;
        this.Is = this.ni = this.cl = this.Pb = 0;
        this.cp = this.bh = !1;
        this.$g = null;
        this.$o = this.zf = this.ah = 0;
        this.el = this.oi = null;
        this.Wc = 0;
        this.Ec = !1;
        this.UC = this.ZC = this.Rc = this.kx = 0;
        this.Kn = !1;
        this.Aj = null;
        this.TC = 0;
        this.gl = null;
        this.Hu = !1;
        this.pB = 0;
        this.Ou = null;
        this.Jq = [];
        this.bm = H.$E;
        this.tf = this.sf = null
    }

    function H() {
        this.em = this.Wi = this.la = this.he = this.Fb = 0;
        this.ab = null;
        this.YH = 0
    }

    function U() {}

    function df() {
        this.hA = this.id = 0
    }

    function ef() {
        this.os = this.ns = 0
    }

    function ff(a, b, c, d, e) {
        this.GK = a;
        this.code = b;
        this.VJ =
            c;
        this.UJ = d;
        this.ag = e
    }

    function Ed() {
        this.Sw = this.ps = this.sj = this.Gm = this.tj = this.Wg = 0;
        this.Tw = this.cg = !1;
        this.J = null
    }

    function kb() {
        this.next = null;
        this.type = 0;
        this.name = null;
        this.index = this.Gr = this.up = this.nL = this.od = 0;
        this.xu = !1
    }

    function Aa() {
        this.Cr = this.eB = this.Qv = this.Sv = this.Rv = this.Uf = this.fj = 0;
        this.Pv = null;
        this.Pv = Array(4);
        var a;
        for (a = 0; 4 > a; a++) this.Pv[a] = null
    }

    function Fd() {
        this.Ba = this.list = null;
        this.Br = this.Yf = 0
    }

    function V(a) {
        this.app = a;
        this.qk = this.nk = this.As = this.zs = this.y = this.x = 0;
        this.Eq =
            this.Fm = this.Em = null;
        this.te = !1;
        this.Tk = null;
        this.gz = this.fz = this.iz = this.hz = this.ez = this.ee = this.de = this.Yr = this.Wr = this.Lj = this.Jj = this.Ia = this.mw = 0;
        this.Wa = this.Nb = this.pc = null;
        this.angle = 0;
        this.scale = this.rc = this.sc = 1;
        this.Ea = this.Bp = 320;
        this.ya = this.Dp = 240
    }

    function ia(a, b, c, d, e, f) {
        this.app = a;
        this.lJ = d;
        this.nf = this.type = 0;
        this.x = b;
        this.y = c;
        this.height = this.width = 0;
        this.ne = null;
        this.Wl = !1;
        this.gd = null;
        this.borderWidth = 0;
        this.borderColor = this.Pu = this.ik = null;
        this.ee = this.de = 0;
        this.W = this.body = null;
        if (d)
            if (this.ne = this.app.tc.Zi(d.Uf), this.type = this.ne.Ne, this.nf = this.ne.vc.hC, this.borderWidth = this.ne.vc.as, this.QA = this.ne.vc.Jo, this.de = this.ne.tw, this.ee = this.ne.uw, this.width = this.ne.vc.eC, this.height = this.ne.vc.fC, this.Wl = 0 != this.ne.vc.dC, this.ik = this.ne.vc.Rg, this.Pu = this.ne.vc.Am, this.borderColor = this.ne.vc.$r, 1 == this.type) this.gd = this.app.ha.Wb(this.ne.vc.Zh), this.width = this.gd.width, this.height = this.gd.height;
            else {
                if (32 <= this.type) {
                    a = this.app.H;
                    b = null;
                    for (e = c = 0; e < a.zb; e++) {
                        for (; null ==
                            a.G[c];) c++;
                        b = a.G[c];
                        c++;
                        if (b.mJ == d) break
                    }
                    this.W = b
                }
            }
        else {
            this.type = v.Fy;
            this.gd = e;
            this.width = this.gd.width;
            this.height = this.gd.height;
            this.x -= this.gd.Ea;
            this.y -= this.gd.ya;
            switch (f) {
                case 0:
                    this.nf = da.Jy;
                    break;
                case 1:
                    this.nf = da.mq;
                    break;
                case 2:
                    this.nf = da.og;
                    break;
                case 3:
                    this.nf = da.gu
            }
            this.Wl = !1
        }
    }

    function v() {
        this.uw = this.tw = this.di = this.Ne = this.Lo = 0;
        this.vc = this.vw = null;
        this.mC = this.lC = 0
    }

    function Gd() {
        this.Ug = this.Db = this.nj = 0;
        this.Tg = this.Mo = this.ei = null;
        this.Uq = 0
    }

    function da() {}

    function Hd() {
        this.Zh =
            0
    }

    function Ma() {
        this.Zh = this.Jo = this.Am = this.Rg = this.Ko = this.jj = this.$h = this.$r = this.as = 0
    }

    function u() {
        this.Sg = 0;
        this.qw = null;
        this.Cc = this.kj = 0;
        this.Zc = this.nb = this.ij = this.lj = this.ai = this.Pd = null;
        this.iC = this.jC = this.gC = 0;
        this.Io = this.Bm = null
    }

    function Id() {
        this.Qd = this.kC = this.ci = this.bi = 0;
        this.rw = null
    }

    function Jd() {
        this.Jz = this.Kz = this.Iz = 0
    }

    function la() {
        this.um = this.Jo = this.Am = this.Rg = this.Ko = this.jj = this.$h = this.$r = this.as = this.mj = this.Pk = this.pf = this.sw = this.ci = this.bi = 0;
        this.frames = null
    }

    function Kd() {
        this.ci =
            this.bi = this.Qd = 0;
        this.text = null
    }

    function qa() {
        this.zx = this.yp = this.fn = 0;
        this.vi = null
    }

    function Ld() {
        this.Sk = this.Iw = this.Hw = 0;
        this.Zb = null
    }

    function L() {
        this.jc = this.Kb = 0;
        this.c = null;
        this.io = this.Fa = this.Xb = this.Gg = this.ac = this.pr = 0;
        this.Bb = null;
        this.Av = 0;
        this.or = this.RA = null;
        this.jo = this.Bk = 0;
        this.N = this.lm = null;
        this.JI = this.gf = this.fd = this.Dv = this.X = this.qa = this.K = this.L = this.pa = this.oa = this.u = this.Fg = this.w = this.Eg = 0;
        this.ho = !1;
        this.D = this.O = this.ca = this.A = this.b = null
    }

    function Md() {
        this.sx = !1;
        this.Hg =
            null;
        this.za = !1;
        this.Da = null;
        this.te = !0;
        this.sc = this.rc = 1;
        this.y = this.x = this.angle = 0;
        this.zl = null
    }

    function R() {
        this.Qd = this.Oa = 0;
        this.C = null;
        this.Gw = this.Fw = 0;
        this.pC = this.level = -1;
        this.om = null;
        this.te = !0
    }

    function Nd() {
        this.ze = this.dc = this.mi = 0;
        this.La = -1;
        this.rb = this.qb = 1;
        this.lb = this.li = this.aa = this.Qa = this.Ka = 0;
        this.Xa = this.M = !1;
        this.wj = this.vj = 0;
        this.ys = -1;
        this.bx = this.$w = this.ax = this.Zw = this.Yw = this.xs = 0
    }

    function fa() {
        this.nd = this.md = this.Jc = this.tb = this.va = this.type = 0;
        this.dz = this.za = !1;
        this.Kd =
            this.Yf = this.fh = this.lp = this.Hc = 0;
        this.Pi = !1;
        this.Da = this.ra = null;
        this.Nd = 0;
        this.font = null;
        this.ce = this.Va = !1
    }

    function Od() {
        this.type = this.Hc = this.Ic = this.nd = this.md = this.va = this.ul = 0;
        this.za = !0;
        this.Yf = 0;
        this.ra = null;
        this.Kd = 0;
        this.Da = null;
        this.Nd = 0;
        this.alpha = 1;
        this.jk = "source-over";
        this.ce = !1
    }

    function Pd() {
        this.type = this.Hc = this.Ic = this.nd = this.md = this.va = this.ul = 0;
        this.za = !0;
        this.Yf = 0;
        this.ra = null;
        this.Kd = 0;
        this.Da = null;
        this.Nd = 0;
        this.alpha = 1;
        this.jk = "source-over";
        this.ce = !1
    }

    function Qd() {
        this.ti =
            null;
        this.mp = this.Ic = this.tb = this.Jc = 0;
        this.font = null;
        this.za = !0;
        this.bD = this.Oa = 0;
        this.ra = this.Da = null;
        this.Va = !1;
        this.rect = new Z;
        this.nd = this.md = this.deltaY = 0;
        this.ob = null;
        this.ce = !1
    }

    function Rd() {
        this.nd = this.md = 0;
        this.Sd = null;
        this.kk = 0;
        this.jh = []
    }

    function Sd(a, b) {
        this.ext = b.h.Zq.Er(a);
        this.nw = !1;
        this.pw = this.Ho = this.Qw = 0;
        this.Va = !1;
        this.za = !0;
        this.ra = this.Da = null
    }

    function Wa() {}

    function Da() {
        this.om = this.dir = this.y = this.x = 0;
        this.zu = !1
    }

    function Td(a) {
        a.file.s();
        this.jt = a.file.s()
    }

    function gf(a) {
        this.od =
            a.file.v();
        this.Gr = a.file.v();
        this.Ih = a.file.s()
    }

    function hf(a) {
        this.color = a.file.kd()
    }

    function jf(a) {
        this.cm = a.file.v();
        this.qH = a.file.v()
    }

    function ra(a) {
        this.Ih = a.file.s();
        for (var b = a.file.R, c = 0, d;;) {
            c++;
            d = a.file.v();
            if (0 == d) break;
            d = a.file.s();
            6 < d && a.file.wa(d - 6)
        }
        a.file.seek(b);
        this.ma = Array(c);
        for (b = 0; b < c; b++) this.ma[b] = aa.create(a.file)
    }

    function kf(a) {
        var b = a.file.s();
        a.file.wa(4);
        this.data = 0;
        6 < b && (this.data = a.file.R, a.file.wa(b - 6))
    }

    function oa(a) {
        this.Dg = a.file.s();
        this.BI = a.file.s()
    }

    function lf(a) {
        a.file.wa(4);
        this.R = 0;
        this.id = a.file.s()
    }

    function Ea(a) {
        this.value = a.file.v();
        this.jt = 0
    }

    function Ud(a) {
        this.key = a.file.s()
    }

    function mf(a) {
        this.bb = a.file.V();
        this.ag = a.file.V();
        this.type = a.file.V()
    }

    function nf(a) {
        a.file.wa(4);
        this.iA = 0;
        for (this.Db = [];;) {
            var b = a.file.V(),
                c = a.file.V();
            if (-1 == b) break;
            this.Db.push(b);
            this.Db.push(c)
        }
    }

    function pa() {}

    function Vd(a) {
        this.Oo = a.file.V();
        this.Wk = a.file.V();
        this.js = a.file.V();
        this.ks = a.file.V();
        this.gs = a.file.V();
        this.Mw = a.file.V();
        this.fs = a.file.v();
        this.hs = a.file.V();
        this.Po =
            a.file.V();
        this.Nw = a.file.V()
    }

    function lb(a) {
        this.Oo = a.file.V();
        this.Wk = a.file.V();
        this.js = a.file.V();
        this.ks = a.file.V();
        this.gs = a.file.V();
        this.Mw = a.file.V();
        this.fs = a.file.v();
        this.hs = a.file.V();
        this.Po = a.file.V();
        this.Nw = a.file.V();
        this.Mn = a.file.s();
        this.Ku = a.file.s()
    }

    function Wd(a) {
        this.Oo = a.file.V();
        this.Wk = a.file.V();
        this.js = a.file.V();
        this.ks = a.file.V();
        this.gs = a.file.V();
        this.Mw = a.file.V();
        this.fs = a.file.v();
        this.hs = a.file.V();
        this.Po = a.file.V();
        this.Nw = a.file.V();
        this.Mn = a.file.V();
        this.Ku =
            a.file.V();
        a.file.wa(4);
        this.bL = a.file.s()
    }

    function Qa(a) {
        this.at = a.file.s();
        this.zD = a.file.s()
    }

    function ha(a) {
        this.value = a.file.s()
    }

    function Xa(a) {
        this.vb = a.file.Ob()
    }

    function of(a) {
        this.od = a.file.v();
        this.Gr = a.file.v()
    }

    function Xd(a) {
        a.file.V();
        a.file.V();
        a.file.V();
        a.file.V()
    }

    function pf(a, b, c) {
        this.index = a.file.v();
        this.SJ = a.file.v();
        this.global = b;
        c ? this.RD = a.file.KC() : (this.RD = a.file.v(), a.file.wa(4))
    }

    function Yd(a) {
        this.Oa = a.file.v();
        this.tA = a.file.v();
        this.hI = a.file.v();
        this.values = [];
        for (var b =
                1, c = 2, d = 4, e = 0; 4 > e && 0 != (this.Oa & b); e++) {
            var f = new pf(a, 0 != (this.Oa & c), 0 != (this.Oa & d)),
                b = b << 4,
                c = c << 4,
                d = d << 4;
            this.values.push(f)
        }
    }

    function Ya() {
        this.hk = []
    }

    function Fa(a) {
        this.Ep = this.Cp = 1;
        this.Dw = -1;
        this.Ew = this.sx = !1;
        this.rk = this.pk = 0;
        if (!(this.Ra = a.getContext("2d"))) throw Error("Failed to init standard renderer");
    }

    function sa() {
        this.Rn = "";
        this.Qz = this.wp = this.xp = this.MD = this.ND = 0
    }

    function Zd() {}

    function z() {
        this.j = this.to = this.so = this.Kr = 0;
        this.xa = this.jB = !1;
        this.Kh = this.Vz = this.m = this.$ = null
    }

    function $d(a) {
        this.app =
            a
    }

    function Ra() {}

    function ae() {
        this.kB = this.f = this.g = this.jb = 0
    }

    function be() {
        this.f = this.g = this.jb = 0
    }

    function ce() {
        this.Cb = this.Bc = this.Fu = this.Lf = 0;
        this.CJ = null
    }

    function de() {
        this.f = this.g = this.Xq = this.$a = 0
    }

    function ee() {
        this.Cb = this.Bc = this.gj = 0
    }

    function fe() {}

    function ge() {
        this.f = this.g = this.Tn = this.jb = this.$a = 0
    }

    function he() {
        this.$v;
        this.Hk = this.Jk = this.Kg = this.Le = this.I = 0;
        this.ve = null
    }

    function ie() {
        this.f = this.g = this.jb = 0
    }

    function je() {
        this.Zv = this.f = this.g = this.jb = 0
    }

    function ke() {
        this.gj;
        this.Bc;
        this.Cb
    }

    function le() {
        this.f = this.g = this.eA = this.$a = this.jb = 0
    }

    function me() {
        this.f = this.g = this.jb = 0
    }

    function ne() {
        this.nc = this.f = this.g = this.jb = 0
    }

    function oe() {
        this.Gk = this.Fk = this.f = this.g = this.jb = 0
    }

    function pe() {
        this.qm = this.f = this.g = this.dA = this.Sn = this.$a = 0
    }

    function qe() {
        this.Jr = this.f = this.g = this.Sn = this.$a = 0
    }

    function re() {
        this.Ir = this.Nr = this.Or = this.Lr = this.zd = this.Yv = this.ja = this.ia = this.Hk = this.Jk = this.Kg = this.Le = this.I = this.VD = this.pt = this.Dx = 0
    }

    function se() {
        this.Vf = this.Ik = this.f = this.g =
            this.$a = this.jb = 0
    }

    function te() {}

    function ue() {
        this.f = this.g = this.$a = 0
    }

    function ve(a, b) {
        var c = new F;
        ka.Ub = new n(a, c, b);
        c.getFile(b, we)
    }

    function we() {
        ka.Ub.load()
    }

    function Za() {
        ka.Ub.tp()
    }

    function Ca() {
        this.y = this.x = 0;
        this.visible = !0;
        this.children = [];
        this.sg = !1
    }

    function ja() {}

    function J() {
        this.P = null;
        this.lineWidth = this.ya = this.Ea = this.width = this.height = this.lineWidth = 0
    }

    function qf() {
        this.P = null;
        this.angle = 0;
        this.sc = this.rc = 1;
        this.xx = 0
    }

    function E() {
        this.a = null;
        this.S = this.Rb = this.$b = this.Ss = this.tl =
            this.an = this.sl = 0;
        this.gh = null
    }

    function ze() {
        this.wm = 0;
        this.eb = null
    }

    function Ae() {
        this.xm = 0;
        this.values = null;
        this.Oa = 0
    }

    function Na() {
        this.np = 0;
        this.Wd = this.Ua = null
    }

    function Sa(a) {
        this.app = a;
        this.vk = null;
        this.Zr = 0
    }

    function Be() {
        this.handle = 0
    }

    function Ga() {
        this.ta = this.W = null
    }

    function Ce() {}

    function De() {}

    function Ee() {}

    function S() {
        this.yo = 100;
        this.Vr = this.aC = this.bC = this.Mk = 0
    }

    function Fe() {
        this.Ok = 0;
        this.hd = null
    }

    function Ge() {
        this.sB = this.tB = this.qB = this.rB = this.uo = 0
    }

    function He() {
        this.zB = this.yB =
            this.xB = this.AB = 0
    }

    function Ie() {
        this.EB = this.CB = this.DB = this.BB = 0
    }

    function Je() {
        this.$B = this.YB = this.lw = this.VB = this.WB = this.tm = 0;
        this.gb = null
    }

    function Ke() {
        this.gw = this.vB = this.hw = this.cw = this.fw = this.ew = this.dw = this.wB = 0;
        this.xe = null
    }

    function Le() {
        this.NB = this.MB = this.OB = this.LB = this.KB = this.PB = 0
    }

    function Me() {
        this.RB = this.QB = this.SB = this.kw = this.jw = this.TB = 0
    }

    function Ne() {}

    function Oe() {
        this.Og = null;
        this.data = 0;
        this.wr = !1
    }

    function M() {
        this.a = null;
        this.Cj = this.Be = this.eh = this.Qb = this.oe = this.jp =
            this.ip = 0
    }

    function ta() {
        this.Rt = this.Zp = this.Jl = this.sy = this.Il = this.$p = this.Yp = 0;
        this.Ei = !1
    }

    function Pe() {
        this.aq = !1;
        this.Kl = null
    }

    function Qe() {}

    function Re() {
        this.Tt = this.ng = this.Ut = this.wh = 0
    }

    function Se() {
        this.bq = this.cq = this.Yt = this.Xt = this.Wt = this.Vt = 0
    }

    function Te() {
        this.re = this.Zj = this.Yj = this.Ch = this.Bh = this.hq = this.wn = this.xn = this.Lc = 0;
        this.rd = !1;
        this.Ma = null;
        this.Ah = this.jq = this.iq = this.zh = 0;
        this.Ol = null;
        this.gq = !1
    }

    function T() {
        this.Ml = this.wy = this.Fi = this.Ff = this.Ef = this.Hd = this.vy = this.Zt =
            this.Zd = this.pb = 0;
        this.Wj = null;
        this.au = this.$t = 0;
        this.Vj = !1
    }

    function $a() {
        this.xy = this.bu = this.yy = this.cu = this.Xj = this.Nl = this.du = this.Id = this.yh = 0
    }

    function ab() {}

    function Ha() {
        this.rl = 0;
        this.ba = null;
        this.px = 0;
        this.U = !1;
        this.Dj = 0;
        this.Bj = !1;
        this.kp = 0
    }

    function Oa() {
        this.Oc = null;
        this.UA = 0;
        this.nm = this.He = this.Ac = null;
        this.ue = 0
    }
    var ka = this,
        p = {
            extend: function(a, b) {
                var c = Object.create(a.prototype || a);
                if (void 0 !== b && (b = b.prototype || b))
                    for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
                return c
            },
            Rp: function(a) {
                return a >>
                    16
            },
            SF: function(a) {
                return a & 65535
            },
            UF: function(a, b) {
                return b << 16 | a & 65535
            },
            yQ: function(a) {
                return a >>> 16 & 255
            },
            rQ: function(a) {
                return a >>> 8 & 255
            },
            lQ: function(a) {
                return a & 255
            },
            RO: function(a, b, c) {
                return (a & 255) << 16 | (b & 255) << 8 | c & 255
            },
            kL: function(a) {
                return (a & 255) << 16 | (a >>> 8 & 255) << 8 | a >>> 16 & 255
            },
            jH: function(a, b, c) {
                return Math.min(Math.max(a, b), c)
            },
            cf: function(a) {
                var b = (a >>> 16 & 255).toString(16),
                    c = (a >>> 8 & 255).toString(16);
                for (a = (a & 255).toString(16); 2 > b.length;) b = "0" + b;
                for (; 2 > c.length;) c = "0" + c;
                for (; 2 > a.length;) a =
                    "0" + a;
                return "#" + b + c + a
            },
            Md: function(a) {
                return 0 > a ? Math.ceil(a) : Math.floor(a)
            },
            IP: function(a) {
                return Math.round(a)
            },
            Jv: function(a) {
                return Math.ceil(a) == a
            },
            Sq: function(a, b, c, d, e) {
                ox = d / 2 * .5522848;
                oy = e / 2 * .5522848;
                xe = b + d;
                ye = c + e;
                xm = b + d / 2;
                ym = c + e / 2;
                a.beginPath();
                a.moveTo(b, ym);
                a.bezierCurveTo(b, ym - oy, xm - ox, c, xm, c);
                a.bezierCurveTo(xm + ox, c, xe, ym - oy, xe, ym);
                a.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
                a.bezierCurveTo(xm - ox, ye, b, ym + oy, b, ym);
                a.closePath()
            },
            aQ: function(a, b) {
                a.beginPath();
                a.moveTo(b.left, b.top);
                a.lineTo(b.right,
                    b.top);
                a.lineTo(b.right, b.bottom);
                a.lineTo(b.left, b.bottom);
                a.lineTo(b.left, b.top);
                a.closePath();
                a.stroke()
            },
            $P: function(a, b, c, d, e) {
                a.beginPath();
                a.moveTo(b, c);
                a.lineTo(d, e);
                a.closePath();
                a.stroke()
            },
            Xn: function(a, b) {
                for (var c = a.toString(); 4 > c.length;) c = "0" + c;
                return c + ("." + b)
            },
            yc: function(a, b) {
                if (a == b) return !0;
                a = a.toLowerCase();
                b = b.toLowerCase();
                return a == b
            },
            tC: function(a) {
                var b = a.lastIndexOf("\\");
                0 < b && (a = a.substring(b + 1));
                return a
            },
            VF: 40,
            MG: [0, 1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 25, 27,
                28, 29, 31, 32, 33, 35, 36, 37, 39, 40, 41, 43, 44, 45, 47, 48, 49, 51, 52
            ],
            CQ: function(a) {
                return a < p.VF ? p.MG[a] : Math.round(96 * a / 72)
            },
            Lp: 0,
            Mp: 0,
            Sj: 1,
            yt: 2,
            Kp: 8,
            Ai: 4,
            OE: 32,
            xt: 1024,
            PE: 2048,
            cA: function(a, b, c, d, e, f) {
                if (0 == b.length) return 0 != (c & 1024) && (d.right = d.left, d.bottom = d.top), 0;
                e.cj || (a.font = e.Bg());
                var g = 0,
                    h = String.fromCharCode(10),
                    q = String.fromCharCode(13),
                    ea = b.indexOf(h);
                if (0 <= ea) {
                    var D = new Z;
                    D.Bz(d);
                    var k, n = 0,
                        m = 0,
                        l;
                    do k = -1, n < b.length && (k = b.indexOf(q, n)), l = Math.max(ea, k), k == ea - 1 && ea--, ea = b.substring(n, ea), k = p.dm(a,
                        ea, c, D, f, e), m = Math.max(m, D.right - D.left), g += k, D.top += k, D.bottom = d.bottom, D.right = d.right, n = l + 1, ea = -1, n < b.length ? ea = b.indexOf(h, n) : (k = p.dm(a, "", c, D, f, e), m = Math.max(m, D.right - D.left), g += k, D.top += k, D.bottom = d.bottom, D.right = d.right); while (0 <= ea);
                    n < b.length && (ea = b.substring(n), k = p.dm(a, ea, c, D, f, e), m = Math.max(m, D.right - D.left), g += k);
                    0 != (c & p.xt) && (d.right = d.left + m, d.bottom = D.bottom);
                    return g
                }
                return g = p.dm(a, b, c | p.PE, d, f, e)
            },
            mt: null,
            dm: function(a, b, c, d, e, f) {
                0 == b.length && (b = " ");
                var g, h;
                g = f.df();
                h = f.cj ? f.measureText(" ") :
                    a.measureText(" ").width;
                var q = d.right - d.left,
                    ea = 0,
                    D = 0,
                    k, n, m, l = 0,
                    v = 0,
                    t;
                null == p.mt && (p.mt = Array(100));
                var u, w, N = !1,
                    B = !1,
                    z = d.top;
                n = g;
                0 != (n & 1) && n++;
                var E = z;
                do {
                    n = ea;
                    m = t = 0;
                    v += g;
                    do {
                        p.mt[t] = m;
                        t += 1;
                        k = D;
                        D = -1;
                        n < b.length && (D = b.indexOf(" ", n)); - 1 == D && (D = b.length);
                        if (D < n) {
                            m -= h;
                            break
                        }
                        w = b.substring(n, D);
                        u = f.cj ? f.measureText(w) : a.measureText(w).width;
                        if (m + u > q) {
                            t--;
                            if (0 < t) {
                                m -= h;
                                D = k;
                                break
                            }
                            for (k = n; k < D; k++) {
                                u = f.cj ? f.measureText(b.substring(k, k + 1)) : a.measureText(b.substring(k, k + 1)).width;
                                if (m + u >= q) {
                                    k--;
                                    if (0 < k) {
                                        l = Math.max(m,
                                            l);
                                        0 == (c & p.xt) && (m = 0 != (c & p.Sj) ? d.left + (d.right - d.left) / 2 - m / 2 : 0 != (c & p.yt) ? d.right - m : d.left, w = b.substring(n, k), e.push(new O(m, z, w)));
                                        D = k - 1;
                                        B = N = !0;
                                        break
                                    }
                                    D = k < b.length ? b.indexOf(" ", k) : -1;
                                    N = !0;
                                    0 <= D && (B = !0);
                                    break
                                }
                                m += u
                            }
                        }
                        if (N) break;
                        m += u;
                        if (m + h > q) break;
                        m += h;
                        n = D + 1
                    } while (1);
                    if (0 == B) {
                        if (N) break;
                        l = Math.max(m, l);
                        if (0 == (c & p.xt))
                            for (m = 0 != (c & p.Sj) ? d.left + (d.right - d.left) / 2 - m / 2 : 0 != (c & p.yt) ? d.right - m : d.left, n = ea, ea = 0; ea < t; ea++) {
                                D = -1;
                                n < b.length && (D = b.indexOf(" ", n)); - 1 == D && (D = b.length);
                                if (D < n) break;
                                w = b.substring(n, D);
                                e.push(new O(m + p.mt[ea], z, w));
                                n = D + 1
                            }
                    }
                    B = N = !1;
                    z += g;
                    ea = D + 1
                } while (ea < b.length);
                d.right = d.left + l;
                d.bottom = E + v;
                return v
            },
            Lh: function(a, b, c, d, e, f) {
                var g;
                if (e.cj)
                    for (f = 0; f < d.length; f++) g = d[f], e.fillText(a, g.text, b + g.x, c + g.y);
                else
                    for (a.font = e.Bg(), a.fillStyle = p.cf(f), a.textAlign = "left", a.textBaseline = "top", f = 0; f < d.length; f++) g = d[f], a.fillText(g.text, b + g.x, c + g.y)
            },
            bj: function(a, b) {
                var c = a.toString();
                if (0 != (b & fa.Yx)) {
                    var d = b & fa.Yx;
                    if (c.length > d) c = c.substring(c.length - d);
                    else
                        for (; c.length < d;) c = "0" + c
                }
                return c
            },
            bv: function(a, b) {
                var c;
                if (0 == (b & fa.FE)) c = a.toString();
                else {
                    var d = Math.floor(((b & fa.DE) >> fa.EE) + 1);
                    c = -1;
                    0 != (b & fa.HE) ? c = (b & fa.BE) >> fa.CE : 0 != a && -1 < a && 1 > a && (c = d);
                    c = 0 > c ? a.toPrecision(d) : a.toFixed(c);
                    var e, f, g;
                    if (0 != (b & fa.GE))
                        for (f = e = 0; f < c.length; f++) g = c.charAt(f), "." != g && "+" != g && "-" != g && "e" != g && "E" != g && e++;
                    f = !1;
                    "-" == c.charAt(0) && (f = !0, c = c.substr(1));
                    for (; e < d;) c = "0" + c, e++;
                    f && (c = "-" + c)
                }
                return c
            },
            hR: function(a, b) {
                for (var c = a, d = b, e = d.indexOf("\\"); 0 <= e;) c.substring(0, e) == d.substring(0, e) && (d = d.substring(e +
                    1), c = c.substring(e + 1)), e = d.indexOf("\\", e + 1);
                return c
            }
        },
        Ue = !1,
        bb = !1,
        mb = !1,
        nb = window.XMLHttpRequest ? new XMLHttpRequest : null;
    if (nb && nb.overrideMimeType) try {
        bb = "string" === typeof(new XMLHttpRequest).responseType, 0 <= navigator.userAgent.toLowerCase().indexOf("safari") && (bb = !1)
    } catch (a) {} else {
        var Ue = !0,
            ob = document.createElement("script");
        ob.type = "text/vbscript";
        ob.innerHTML = 'Function BinFileReaderImpl_IE_VBAjaxLoader(fileName)\n\r\n\t                Dim xhr\n\r\n\t                Set xhr = CreateObject("Microsoft.XMLHTTP")\n\r\n\t                xhr.Open "GET", fileName, False\n\r\n\t                xhr.setRequestHeader "Accept-Charset", "x-user-defined"\n\r\n\t                xhr.send\n\r\n\t                Dim byteArray()\n\r\n\t                if xhr.Status = 200 Then\n\r\n\t                    Dim byteString\n\r\n\t                    Dim i\n\r\n\t                    byteString=xhr.responseBody\n\r\n\t                    ReDim byteArray(LenB(byteString))\n\r\n\t                    For i = 1 To LenB(byteString)\n\r\n\t                        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n\r\n\t                    Next\n\r\n\t                End If\n\r\n\t                BinFileReaderImpl_IE_VBAjaxLoader=byteArray\n\r\n\t            End Function';
        document.head.appendChild(ob)
    }
    if (bb) {
        var Ve = new FileReader;
        try {
            Ve.readAsBinaryString && (mb = !0)
        } catch (a) {}
        Ve = null
    }
    nb = null;
    F.prototype = {
        ua: function() {
            return this.ud.charCodeAt(this.R++) & 255
        },
        getFile: function(a, b, c) {
            this.Ju = b;
            if (Ue) try {
                var d = BinFileReaderImpl_IE_VBAjaxLoader(a).toArray(),
                    e, f = d.length;
                f > c && (f = c);
                for (e = 0; e < f; e++) this.ud += String.fromCharCode(d[e]);
                this.end = this.ud.length;
                this.Ju()
            } catch (q) {} else {
                var g = new XMLHttpRequest;
                g.open("GET", a, !0);
                var h = this;
                bb ? (g.responseType = "blob", g.onload = function() {
                    if (4 ==
                        g.readyState && 200 == g.status) {
                        var a = new FileReader;
                        a.onloadend = function() {
                            if (mb) h.ud += a.result;
                            else {
                                var b = new Uint8Array(a.result),
                                    c;
                                for (c = 0; c < b.length; c++) h.ud += String.fromCharCode(b[c])
                            }
                            h.end = h.ud.length;
                            h.Ju()
                        };
                        mb ? a.readAsBinaryString(g.response) : a.readAsArrayBuffer(g.response)
                    }
                }) : (g.overrideMimeType("text/plain; charset=x-user-defined"), g.onload = function() {
                    4 == g.readyState && 200 == g.status && (h.ud += g.responseText, h.end = h.ud.length, h.Ju())
                });
                g.send(null)
            }
        },
        QK: function(a) {
            this.ud = a;
            this.end = a.length;
            var b = this;
            this.ua = function() {
                return b.ud.charCodeAt(b.R++) & 255
            }
        },
        vg: function(a, b) {
            var c = new F;
            c.ud = this.ud;
            c.offset = a;
            c.R = a;
            c.end = a + b;
            c.td = this.td;
            return c
        },
        nD: function(a) {
            this.td = a
        },
        OH: function() {
            var a = this.ua(),
                b = this.ua(),
                c = this.ua();
            255 == a && 254 == b ? (this.td = !0, this.R--) : 239 == a && 187 == b && 191 == c ? this.td = !1 : (this.td = !1, this.R -= 3)
        },
        wa: function(a) {
            this.R += a
        },
        Rh: function() {
            return this.R >= this.end
        },
        yb: function() {
            return this.ua()
        },
        s: function() {
            var a;
            a = this.ua();
            return 256 * this.ua() + a
        },
        V: function() {
            var a;
            a = this.ua();
            a = 256 * this.ua() + a;
            return 32768 > a ? a : a - 65536
        },
        Lm: function() {
            var a;
            a = this.ua();
            return 256 * this.ua() + a
        },
        v: function() {
            var a, b, c;
            a = this.ua();
            b = this.ua();
            c = this.ua();
            a = 16777216 * this.ua() + 65536 * c + 256 * b + a;
            return 2147483647 >= a ? a : a - 4294967296
        },
        kd: function() {
            var a, b, c;
            a = this.ua();
            b = this.ua();
            c = this.ua();
            this.ua();
            return 65536 * a + 256 * b + c
        },
        LC: function() {
            var a, b, c;
            a = this.ua();
            b = this.ua();
            c = this.ua();
            a = 16777216 * this.ua() + 65536 * c + 256 * b + a;
            2147483648 < a && (a -= 4294967296);
            return a / 65536
        },
        KC: function() {
            var a,
                b, c, d, e, f, g;
            a = this.ua();
            b = this.ua();
            c = this.ua();
            d = this.ua();
            e = this.ua();
            f = this.ua();
            g = this.ua();
            a = 72057594037927936 * this.ua() + 281474976710656 * g + 1099511627776 * f + 4294967296 * e + 16777216 * d + 65536 * c + 256 * b + a;
            0x7fffffffffffffff < a && (a -= 1.8446744073709552E19);
            return a / 4294967296
        },
        Ob: function(a) {
            var b = "";
            if (this.td)
                if (1 > arguments.length) {
                    if (this.Rh()) return b;
                    c = this.R;
                    for (b = this.Lm(); b && !this.Rh();) b = this.Lm();
                    b = (this.R - c - 2) / 2;
                    this.R = c;
                    b = this.Ob(b);
                    this.ua();
                    this.ua()
                } else {
                    b = "";
                    c = this.R;
                    for (e = 0; e < a; e++) {
                        d = this.Lm();
                        if (0 == d) break;
                        b += String.fromCharCode(d)
                    }
                    this.R = c + 2 * a
                }
            else if (1 > arguments.length) {
                if (this.Rh()) return b;
                for (var c = this.R, b = this.ua(); b && !this.Rh();) b = this.ua();
                b = this.R - c - 1;
                this.R = c;
                b = this.Ob(b);
                this.ua()
            } else {
                for (var d, c = this.R, e = 0; e < a; ++e) {
                    d = this.ua();
                    if (0 == d) break;
                    b += String.fromCharCode(d)
                }
                this.R = c + a
            }
            return b
        },
        mK: function() {
            var a = this.R,
                b, c = "",
                d, e;
            if (0 == this.td) {
                if (this.Rh()) return;
                for (b = this.ua(); 10 != b && 13 != b && !this.Rh();) b = this.ua();
                d = this.R;
                this.R = a;
                e = 1;
                10 != b && 13 != b && (e = 0);
                d > a + e && (c = this.Ob(d -
                    a - e));
                if (10 == b || 13 == b) this.ua(), a = this.yb(), 10 == b && 13 != a && this.R--, 13 == b && 10 != a && this.R--
            } else {
                if (this.Rh()) return;
                for (b = this.Lm(); 10 != b && 13 != b && !this.Rh();) b = this.Lm();
                d = this.R;
                this.R = a;
                e = 2;
                10 != b && 13 != b && (e = 0);
                d > a + e && (c = this.Ob((d - a - e) / 2));
                if (10 == b || 13 == b) this.R += 2, a = this.Lm(), 10 == b && 13 != a && (this.R -= 2), 13 == b && 10 != a && (this.R -= 2)
            }
            return c
        },
        seek: function(a) {
            a >= this.end && (a = this.end);
            this.R = a
        },
        cL: function(a) {
            var b = this.R,
                b = b - a;
            0 > b && (b = 0);
            this.R = b
        },
        qK: function(a) {
            var b, c = a.length;
            for (b = 0; b < c; b++) a[b] =
                this.ua()
        },
        MC: function(a) {
            var b = [],
                c;
            for (c = 0; c < a; c++) b[c] = this.ua();
            return b
        }
    };
    P.prototype = {
        add: function(a) {
            this.Jd.push(a)
        },
        QI: function(a, b) {
            this.Jd.splice(a, 0, b)
        },
        get: function(a) {
            return a < this.Jd.length ? this.Jd[a] : null
        },
        put: function(a, b) {
            this.Jd[a] = b
        },
        set: function(a, b) {
            a < this.Jd.length && (this.Jd[a] = b)
        },
        Yo: function(a) {
            a < this.Jd.length && this.Jd.splice(a, 1)
        },
        indexOf: function(a) {
            return this.Jd.indexOf(a)
        },
        contains: function(a) {
            return 0 <= this.Jd.indexOf(a)
        },
        NC: function(a) {
            a = this.Jd.indexOf(a);
            0 <= a && this.Jd.splice(a,
                1)
        },
        size: function() {
            return this.Jd.length
        },
        clear: function() {
            this.Jd.length = 0
        },
        sort: function(a) {
            Array.prototype.sort.call(this.Jd, a)
        }
    };
    Z.prototype = {
        load: function(a) {
            this.left = a.v();
            this.top = a.v();
            this.right = a.v();
            this.bottom = a.v()
        },
        Bz: function(a) {
            this.left = a.left;
            this.right = a.right;
            this.top = a.top;
            this.bottom = a.bottom
        }
    };
    eb.prototype = {
        Bg: function() {
            var a;
            a = this.Je ? "italic " : "normal ";
            var b = 100 * Math.floor(this.Ke / 100),
                b = Math.max(b, 100),
                b = Math.min(b, 900);
            a = a + (b + " ") + (this.lc + "px ");
            return a += this.Ie
        },
        df: function() {
            return this.lc + Math.ceil(this.lc / 8)
        },
        Z: function() {
            this.Ie = "Arial";
            this.lc = 13;
            this.Ke = 400;
            this.Je = 0
        }
    };
    ma.separator = "{@24}";
    ma.my = 1;
    ma.zF = 2;
    ma.prototype = {
        op: function() {
            if (null != this.eb && null != this.lk) {
                var a = "",
                    b;
                for (b = 0; b < this.eb.size(); b++) a += this.eb.get(b) + ma.separator;
                localStorage.setItem(this.lk, a)
            }
        },
        Dr: function(a) {
            var b = !0;
            null != this.lk && p.yc(a, this.lk) && (b = !1);
            if (b)
                if (this.op(), this.lk = a, this.eb = new P, a = localStorage.getItem(this.lk))
                    for (var b = 0, c = a.indexOf(ma.separator, 0); 0 <= c;) this.eb.add(a.substring(b,
                        c)), b = c + ma.separator.length, c = a.indexOf(ma.separator, b);
                else if (a = null, null == a && (b = this.app.pI(this.lk), null != b && (a = b.open())), a)
                for (b = !1, a.OH(), "undefined" != typeof this.Oa && (this.Oa & ma.my && (this.td = !1, b = !0), this.Oa & ma.zF && (this.td = !0)); 0 == a.Rh();) {
                    c = a.mK();
                    b && (c = this.JH(c));
                    if ("<" == c.substring(0, 1)) {
                        this.eb.clear();
                        break
                    }
                    if (null == c) break;
                    this.eb.add(c)
                }
        },
        JH: function(a) {
            for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b +=
                String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
            return b
        },
        cr: function(a) {
            var b, c;
            for (b = 0; b < this.eb.size(); b++)
                if (c = this.eb.get(b), "[" == c.charAt(0)) {
                    var d = c.lastIndexOf("]");
                    if (1 <= d && (c = c.substring(1, d), p.yc(a, c))) return b
                } return -1
        },
        iv: function(a, b) {
            for (var c, d; a < this.eb.size(); a++) {
                c = this.eb.get(a);
                if ("[" == c.charAt(0)) break;
                d = c.indexOf("=");
                if (0 <= d) {
                    for (var e = 0; e < d && 32 == c.charCodeAt(e);) e++;
                    for (; d > e && 32 == c.charCodeAt(d -
                            1);) d--;
                    if (d > e && (c = c.substring(0, d), p.yc(c, b))) return a
                }
            }
            return -1
        },
        zk: function(a, b, c, d) {
            this.Dr(d);
            a = this.cr(a);
            return 0 <= a && (a = this.iv(a + 1, b), 0 <= a) ? (b = this.eb.get(a), b.substring(b.indexOf("=") + 1)) : c
        },
        Al: function(a, b, c, d) {
            this.Dr(d);
            d = this.cr(a);
            if (0 > d) this.eb.add("[" + a + "]"), this.eb.add(b + "=" + c);
            else if (a = this.iv(d + 1, b), 0 <= a) this.eb.set(a, b + "=" + c);
            else {
                for (a = d + 1; a < this.eb.size(); a++)
                    if (d = this.eb.get(a), "[" == d.charAt(0)) {
                        d = b + "=" + c;
                        this.eb.QI(a, d);
                        return
                    } this.eb.add(b + "=" + c)
            }
        },
        Rz: function(a, b, c) {
            this.Dr(c);
            a = this.cr(a);
            0 <= a && (b = this.iv(a + 1, b), 0 <= b && this.eb.Yo(b), this.op())
        },
        MH: function(a, b) {
            this.Dr(b);
            var c = this.cr(a);
            if (0 <= c) {
                for (this.eb.Yo(c); !(c >= this.eb.size()) && "[" != this.eb.get(c).charAt(0);) this.eb.Yo(c);
                this.op()
            }
        }
    };
    na.prototype = {
        measureText: function(a, b) {
            b = this.app.pv(b);
            if (b.cj) return b.measureText(a);
            this.be.font = b.Bg();
            return this.be.measureText(a).width
        },
        Ys: function(a, b, c, d, e) {
            if (a == this.kJ && b == this.gJ && c == this.jJ && d == this.hJ && e == this.fJ) return this.iJ;
            var f = this.be;
            f.clearRect(0, 0, this.width,
                this.height);
            c || (c = new Z(0, 0, this.width, this.height));
            var g = [];
            d = this.app.pv(d);
            var h = p.cA(f, a, b, c, d, g);
            if (0 != h) {
                var q = 0;
                0 != (b & p.Kp) ? q = this.height - h : 0 != (b & p.Ai) && (q = this.height / 2 - h / 2);
                p.Lh(f, 0, q, g, d, e, 0, 0)
            }
            this.kJ = a;
            this.gJ = b;
            this.jJ = c;
            this.hJ = d;
            this.fJ = e;
            return this.iJ = h
        },
        oB: function(a) {
            a ? (this.be.fillStyle = p.cf(a), this.be.fillRect(0, 0, this.width, this.height)) : this.be.clearRect(0, 0, this.width, this.height)
        },
        Rr: function(a, b, c, d, e, f, g) {
            var h = [];
            c || (c = new Z(0, 0, this.width, this.height));
            e = this.app.pv(e);
            a = p.cA(this.be, a, b, c, e, h);
            if (0 != a) switch (c = 0, 0 != (b & p.Kp) ? c = this.height - a : 0 != (b & p.Ai) && (c = this.height / 2 - a / 2), f) {
                case 1:
                    p.Lh(this.be, 1, c + 1, h, e, g, 0, 0);
                    p.Lh(this.be, 0, c, h, e, d, 0, 0);
                    break;
                case 2:
                    p.Lh(this.be, 1, c, h, e, g, 0, 0);
                    p.Lh(this.be, 1, c + 2, h, e, g, 0, 0);
                    p.Lh(this.be, 0, c + 1, h, e, g, 0, 0);
                    p.Lh(this.be, 2, c + 1, h, e, g, 0, 0);
                    p.Lh(this.be, 1, c + 1, h, e, d, 0, 0);
                    break;
                case 0:
                    p.Lh(this.be, 0, c, h, e, d, 0, 0)
            }
        },
        resize: function(a, b) {
            if (a != this.width || b != this.height) this.width = a, this.height = b, this.canvas.width = a, this.canvas.height = b
        },
        Eb: function(a, b, c, d, e) {
            a.xj(this.canvas, b, c, this.width, this.height, d, e)
        }
    };
    Ka.FH = [{
        vb: navigator.userAgent,
        bd: "Chrome",
        uc: "Chrome"
    }, {
        vb: navigator.userAgent,
        bd: "OmniWeb",
        hn: "OmniWeb/",
        uc: "OmniWeb"
    }, {
        vb: navigator.vendor,
        bd: "Apple",
        uc: "Safari",
        hn: "Version"
    }, {
        gK: window.opera,
        uc: "Opera",
        hn: "Version"
    }, {
        vb: navigator.vendor,
        bd: "iCab",
        uc: "iCab"
    }, {
        vb: navigator.vendor,
        bd: "KDE",
        uc: "Konqueror"
    }, {
        vb: navigator.userAgent,
        bd: "Firefox",
        uc: "Firefox"
    }, {
        vb: navigator.vendor,
        bd: "Camino",
        uc: "Camino"
    }, {
        vb: navigator.userAgent,
        bd: "Netscape",
        uc: "Netscape"
    }, {
        vb: navigator.userAgent,
        bd: "MSIE",
        uc: "Explorer",
        hn: "MSIE"
    }, {
        vb: navigator.userAgent,
        bd: "Gecko",
        uc: "Mozilla",
        hn: "rv"
    }, {
        vb: navigator.userAgent,
        bd: "Mozilla",
        uc: "Netscape",
        hn: "Mozilla"
    }];
    Ka.HH = [{
        vb: navigator.platform,
        bd: "Win",
        uc: "Windows"
    }, {
        vb: navigator.platform,
        bd: "Mac",
        uc: "MacOS"
    }, {
        vb: navigator.userAgent,
        bd: "iPhone",
        uc: "iOS"
    }, {
        vb: navigator.userAgent,
        bd: "iPod",
        uc: "iOS"
    }, {
        vb: navigator.userAgent,
        bd: "iPad",
        uc: "iOS"
    }, {
        vb: navigator.userAgent,
        bd: "Android",
        uc: "Android"
    }, {
        vb: navigator.platform,
        bd: "Windows Phone",
        uc: "Windows Phone"
    }, {
        vb: navigator.platform,
        bd: "Linux",
        uc: "Linux"
    }];
    Ka.prototype = {
        dD: function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b].vb,
                    d = a[b].gK;
                this.TD = a[b].hn || a[b].uc;
                if (c) {
                    if (-1 != c.indexOf(a[b].bd)) return a[b].uc
                } else if (d) return a[b].uc
            }
        },
        eD: function(a) {
            var b = a.indexOf(this.TD);
            if (-1 != b) return parseFloat(a.substring(b + this.TD.length + 1))
        }
    };
    p.KQ = function(a, b, c, d) {
        var e = document.createElement("canvas");
        e.width = b.width;
        e.height = b.height;
        var f = e.getContext("2d");
        0 == b.xb ? f.drawImage(b.wb,
            0, 0) : f.drawImage(a.ha.Lb[b.xb], b.Ad, b.Bd, b.width, b.height, 0, 0, b.width, b.height);
        var g = f.getImageData(0, 0, b.width, b.height),
            h = d >> 16 & 255,
            q = d >> 8 & 255;
        d &= 255;
        var k = c >> 16 & 255,
            D = c >> 8 & 255;
        c &= 255;
        var n, p, m;
        for (m = 0; m < b.height; m++)
            for (p = 0; p < b.width; p++) n = 4 * (m * b.width + p), g.data[n] == k && g.data[n + 1] == D && g.data[n + 2] == c && (g.data[n] = h, g.data[n + 1] = q, g.data[n + 2] = d);
        f.putImageData(g, 0, 0);
        f = new Y;
        f.app = a;
        f.width = b.width;
        f.height = b.height;
        f.Ea = b.Ea;
        f.ya = b.ya;
        f.ph = b.ph;
        f.qh = b.qh;
        f.Ya = 0;
        f.wb = e;
        f.jf = b.jf;
        f.Kk = b.Kk;
        f.Uh = b.Uh;
        return f
    };
    ya.eF = 1;
    ya.aN = 2;
    ya.dF = 4;
    ya.cF = 8;
    ya.prototype = {
        nH: function(a) {
            if (this.iI != a.Ie || this.Nd != a.lc) return !1;
            var b = 0 != (this.uA & ya.eF),
                c = 0 != a.Je;
            if (b != c) return !1;
            b = 0 != (this.uA & ya.dF);
            c = 400 < a.Ke;
            return b != c ? !1 : !0
        },
        df: function() {
            return this.height + this.RI
        },
        measureText: function(a) {
            var b = 0,
                c = a.length,
                d, e;
            for (d = 0; d < c; d++) e = this.Nu.indexOf(a.charAt(d)), b = 0 <= e ? b + (this.Mu[e] + this.Fv) : b + this.width;
            return b
        },
        fillText: function(a, b, c, d) {
            var e = b.length,
                f, g, h, q, k = this.Hg;
            if (0 == (this.Oa & ya.cF))
                for (f = 0; f < e; f++) q =
                    this.Nu.indexOf(b.charAt(f)), 0 <= q ? (h = Math.floor(q / this.Xr), g = q - h * this.Xr, h *= this.height + 1, g *= this.width + 1, 0 == k.xb ? a.drawImage(k.wb, g, h, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(k.app.ha.Lb[k.xb], g + k.Ad, h + k.Bd, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height), c += this.Mu[q] + this.Fv) : (a.fillStyle = p.cf(this.color), a.fillRect(c, d, this.width, this.height), c += this.width);
            else
                for (c += this.measureText(b), f = e - 1; 0 <= f; f--) q = this.Nu.indexOf(b.charAt(f)),
                    0 <= q ? (c -= this.Mu[q] + this.Fv, h = q / this.Xr, g = q - h * this.Xr, h *= this.height + 1, g *= this.width + 1, 0 == k.xb ? a.drawImage(k.wb, g, h, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(k.app.ha.Lb[k.xb], g + k.Ad, h + k.Bd, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height)) : (c -= this.width, a.fillStyle = p.cf(this.color), a.fillRect(c, d, this.width, this.height))
        }
    };
    X.yi = 1;
    X.JL = 17408;
    X.IL = 17664;
    X.CL = 17920;
    X.AL = 18176;
    X.BL = 18432;
    X.DL = 18688;
    X.LL = 18944;
    X.GL = 19200;
    X.EL = 19456;
    X.FL = 19712;
    X.ML = 19968;
    X.NL = 20224;
    X.HL = 20480;
    X.KL = 20736;
    X.WD = 983039;
    X.create = function(a) {
        var b = !1,
            c = !1,
            d = !1,
            e = !1,
            f = !1,
            g = !1,
            h = !1,
            q = !1,
            k = !1,
            D = !1,
            n = a.file.R,
            p = a.file.s(),
            m, l = a.file.v();
        switch (l) {
            case 65535:
                m = new ga;
                break;
            case 131071:
                m = new ga;
                break;
            case 262143:
                m = new ACT_SETVARG;
                break;
            case 327679:
                m = new ACT_SUBVARG;
                break;
            case 393215:
                m = new ACT_ADDVARG;
                break;
            case 458751:
                m = new ACT_GRPACTIVATE;
                break;
            case 524287:
                m = new ACT_GRPDEACTIVATE;
                break;
            case 983039:
                m = new ACT_STARTLOOP;
                break;
            case 1048575:
                m = new ACT_STOPLOOP;
                break;
            case 1114111:
                m = new ACT_SETLOOPINDEX;
                break;
            case 1179647:
                m = new ACT_RANDOMIZE;
                break;
            case 1310719:
                m = new ACT_SETGLOBALSTRING;
                break;
            case 1572863:
                m = new ga;
                break;
            case 1638399:
                m = new ga;
                break;
            case 1835007:
                m = new ACT_SETVARGCONST;
                b = !0;
                break;
            case 1900543:
                m = new ACT_SETVARG;
                break;
            case 1966079:
                m = new ACT_SETVARGCONST;
                b = !0;
                break;
            case 2031615:
                m = new ACT_SETVARG;
                break;
            case 2097151:
                m = new ACT_ADDVARGCONST;
                c = !0;
                break;
            case 2162687:
                m = new ACT_ADDVARG;
                break;
            case 2228223:
                m = new ACT_ADDVARGCONST;
                c = !0;
                break;
            case 2293759:
                m =
                    new ACT_ADDVARG;
                break;
            case 2359295:
                m = new ACT_SUBVARGCONST;
                d = !0;
                break;
            case 2424831:
                m = new ACT_SUBVARG;
                break;
            case 2490367:
                m = new ACT_SUBVARGCONST;
                d = !0;
                break;
            case 2555903:
                m = new ACT_SUBVARG;
                break;
            case 2883583:
                m = new ACT_EXECUTECHILDEVENTS;
                break;
            case 2949119:
                m = new ga;
                break;
            case 65534:
                m = new ACT_PLAYSAMPLE;
                break;
            case 131070:
                m = new tb;
                break;
            case 327678:
                m = new ACT_PLAYLOOPSAMPLE;
                break;
            case 458750:
                m = new ACT_STOPSPESAMPLE;
                break;
            case 524286:
                m = new ACT_PAUSESAMPLE;
                break;
            case 589822:
                m = new ACT_RESUMESAMPLE;
                break;
            case 786430:
                m =
                    new ub;
                break;
            case 851966:
                m = new vb;
                break;
            case 917502:
                m = new ACT_PAUSECHANNEL;
                break;
            case 983038:
                m = new ACT_RESUMECHANNEL;
                break;
            case 1048574:
                m = new ACT_STOPCHANNEL;
                break;
            case 1114110:
                m = new ACT_SETCHANNELPOS;
                break;
            case 1179646:
                m = new wb;
                break;
            case 1245182:
                m = new ga;
                break;
            case 1310718:
                m = new ACT_SETSAMPLEPOS;
                break;
            case 1376254:
                m = new ACT_SETSAMPLEMAINVOL;
                break;
            case 1441790:
                m = new ACT_SETSAMPLEVOL;
                break;
            case 1507326:
                m = new ga;
                break;
            case 1572862:
                m = new ga;
                break;
            case 1638398:
                m = new ACT_PAUSEALLCHANNELS;
                break;
            case 1703934:
                m =
                    new ACT_RESUMEALLCHANNELS;
                break;
            case 2031614:
                m = new ACT_LOCKCHANNEL;
                break;
            case 2097150:
                m = new ACT_UNLOCKCHANNEL;
                break;
            case 2162686:
                m = new ACT_SETCHANNELFREQ;
                break;
            case 2228222:
                m = new ACT_SETSAMPLEFREQ;
                break;
            case 2424830:
                m = new ACT_PLAYSAMPLE2;
                break;
            case 65533:
                m = new xb;
                break;
            case 131069:
                m = new ACT_PREVLEVEL;
                break;
            case 196605:
                m = new yb;
                break;
            case 262141:
                m = new ACT_PAUSEKEY;
                break;
            case 327677:
                m = new zb;
                break;
            case 393213:
                m = new Ab;
                break;
            case 458749:
                m = new ACT_RESTARTLEVEL;
                break;
            case 524285:
                m = new Bb;
                break;
            case 589821:
                m =
                    new ACT_CDISPLAYX;
                break;
            case 655357:
                m = new ACT_CDISPLAYY;
                break;
            case 983037:
                m = new ACT_FULLSCREENMODE;
                break;
            case 1048573:
                m = new ACT_WINDOWEDMODE;
                break;
            case 1114109:
                m = new ACT_SETFRAMERATE;
                break;
            case 1179645:
                m = new ACT_PAUSEKEY;
                break;
            case 1245181:
                m = new ACT_PAUSEANYKEY;
                break;
            case 1310717:
                m = new ACT_SETVSYNCON;
                break;
            case 1376253:
                m = new ACT_SETVSYNCOFF;
                break;
            case 1441789:
                m = new ACT_SETVIRTUALWIDTH;
                break;
            case 1507325:
                m = new ACT_SETVIRTUALHEIGHT;
                break;
            case 1572861:
                m = new ACT_SETFRAMEBDKCOLOR;
                break;
            case 1638397:
                m =
                    new ACT_DELCREATEDBKDAT;
                break;
            case 1703933:
                m = new ACT_DELALLCREATEDBKD;
                break;
            case 1769469:
                m = new ACT_SETFRAMEWIDTH;
                break;
            case 1835005:
                m = new ACT_SETFRAMEHEIGHT;
                break;
            case 2097149:
                m = new ACT_PLAYDEMO;
                break;
            case 2162685:
                m = new ga;
                break;
            case 2228221:
                m = new ga;
                break;
            case 2293757:
                m = new ga;
                break;
            case 2359293:
                m = new ga;
                break;
            case 2424829:
                m = new ga;
                break;
            case 2490365:
                m = new ACT_SETSTRETCHRESAMPLING;
                break;
            case 65532:
                m = new ACT_SETTIMER;
                break;
            case 131068:
                m = new ACT_EVENTAFTER;
                break;
            case 196604:
                m = new ACT_NEVENTSAFTER;
                break;
            case 65530:
                m = new Cb;
                break;
            case 131066:
                m = new ACT_SHOWCURSOR;
                break;
            case 65529:
                m = new ACT_SETSCORE;
                break;
            case 131065:
                m = new ACT_SETLIVES;
                break;
            case 196601:
                m = new ACT_NOINPUT;
                break;
            case 262137:
                m = new ACT_RESTINPUT;
                break;
            case 327673:
                m = new ACT_ADDSCORE;
                break;
            case 393209:
                m = new ACT_ADDLIVES;
                break;
            case 458745:
                m = new ACT_SUBSCORE;
                break;
            case 524281:
                m = new ACT_SUBLIVES;
                break;
            case 589817:
                m = new ACT_SETINPUT;
                break;
            case 655353:
                m = new ACT_SETINPUTKEY;
                break;
            case 720889:
                m = new ACT_SETPLAYERNAME;
                break;
            case 65531:
                m = new Db;
                break;
            case 131067:
                m = new ACT_CREATEBYNAME;
                break;
            case 196603:
                m = new ACT_CREATEEXP;
                break;
            case 262139:
                m = new ACT_CREATEBYNAMEEXP;
                break;
            case 5242883:
                m = new ACT_STRDESTROY;
                break;
            case 5308419:
                m = new ACT_STRDISPLAY;
                break;
            case 5373955:
                m = new ACT_STRDISPLAYDURING;
                break;
            case 5439491:
                m = new Eb;
                break;
            case 5505027:
                m = new ACT_STRSET;
                break;
            case 5570563:
                m = new ACT_STRPREV;
                break;
            case 5636099:
                m = new ACT_STRNEXT;
                break;
            case 5701635:
                m = new ACT_STRDISPLAYSTRING;
                break;
            case 5767171:
                m = new Fb;
                break;
            case 5242882:
                m = new ACT_SPRPASTE;
                break;
            case 5308418:
                m = new ACT_SPRFRONT;
                break;
            case 5373954:
                m = new ACT_SPRBACK;
                break;
            case 5439490:
                m = new ACT_SPRADDBKD;
                break;
            case 5505026:
                m = new ACT_SPRREPLACECOLOR;
                break;
            case 5570562:
                m = new ACT_SPRSETSCALE;
                break;
            case 5636098:
                m = new ACT_SPRSETSCALEX;
                break;
            case 5701634:
                m = new ACT_SPRSETSCALEY;
                break;
            case 5767170:
                m = new Gb;
                break;
            case 5242887:
                m = new Hb;
                break;
            case 5308423:
                m = new Ib;
                break;
            case 5373959:
                m = new Jb;
                break;
            case 5439495:
                m = new ACT_CSETMIN;
                break;
            case 5505031:
                m = new Kb;
                break;
            case 5570567:
                m = new ACT_CSETCOLOR1;
                break;
            case 5636103:
                m = new ACT_CSETCOLOR2;
                break;
            case 5242884:
                m = new ACT_QASK;
                break;
            case 5242889:
                m = new ACT_CCARESTARTAPP;
                break;
            case 5308425:
                m = new ACT_CCARESTARTFRAME;
                break;
            case 5373961:
                m = new ACT_CCANEXTFRAME;
                break;
            case 5439497:
                m = new ACT_CCAPREVIOUSFRAME;
                break;
            case 5505033:
                m = new ACT_CCAENDAPP;
                break;
            case 5636105:
                m = new ACT_CCAJUMPFRAME;
                break;
            case 5701641:
                m = new ACT_CCASETGLOBALVALUE;
                break;
            case 5767177:
                m = new ACT_CCASHOW;
                break;
            case 5832713:
                m = new ACT_CCAHIDE;
                break;
            case 5898249:
                m = new ACT_CCASETGLOBALSTRING;
                break;
            case 5963785:
                m =
                    new ACT_CCAPAUSEAPP;
                break;
            case 6029321:
                m = new ACT_CCARESUMEAPP;
                break;
            case 6094857:
                m = new ACT_CCASETWIDTH;
                break;
            case 6160393:
                m = new ACT_CCASETHEIGHT;
                break;
            default:
                switch (l & 4294901760) {
                    case 0:
                        m = new ACT_EXTEXTRA;
                        D = !0;
                        break;
                    case 65536:
                        m = new Lb;
                        break;
                    case 131072:
                        m = new Mb;
                        break;
                    case 196608:
                        m = new Nb;
                        break;
                    case 262144:
                        m = new Ob;
                        break;
                    case 327680:
                        m = new Pb;
                        break;
                    case 393216:
                        m = new Qb;
                        break;
                    case 458752:
                        m = new ACT_EXTMAXSPEED;
                        break;
                    case 524288:
                        m = new ACT_EXTWRAP;
                        break;
                    case 589824:
                        m = new ACT_EXTBOUNCE;
                        break;
                    case 655360:
                        m =
                            new ACT_EXTREVERSE;
                        break;
                    case 720896:
                        m = new Rb;
                        break;
                    case 786432:
                        m = new ACT_EXTPREVMOVE;
                        break;
                    case 851968:
                        m = new Sb;
                        break;
                    case 917504:
                        m = new Tb;
                        break;
                    case 983040:
                        m = new Ub;
                        break;
                    case 1048576:
                        m = new ACT_EXTSTARTANIM;
                        break;
                    case 1114112:
                        m = new Vb;
                        break;
                    case 1179648:
                        m = new Wb;
                        break;
                    case 1245184:
                        m = new ACT_EXTFORCESPEED;
                        break;
                    case 1310720:
                        m = new ACT_EXTRESTANIM;
                        break;
                    case 1376256:
                        m = new ACT_EXTRESTDIR;
                        break;
                    case 1441792:
                        m = new ACT_EXTRESTSPEED;
                        break;
                    case 1507328:
                        m = new Xb;
                        break;
                    case 1572864:
                        m = new Yb;
                        break;
                    case 1638400:
                        m =
                            new ACT_EXTSHUFFLE;
                        break;
                    case 1703936:
                        m = new Zb;
                        break;
                    case 1769472:
                        m = new $b;
                        break;
                    case 1835008:
                        m = new ac;
                        break;
                    case 1900544:
                        m = new bc;
                        break;
                    case 1966080:
                        m = new cc;
                        break;
                    case 2031616:
                        m = new dc;
                        e = !0;
                        break;
                    case 2097152:
                        m = new fc;
                        f = !0;
                        break;
                    case 2162688:
                        m = new hc;
                        g = !0;
                        break;
                    case 2228224:
                        m = new ACT_EXTDISPATCHVAR;
                        break;
                    case 2293760:
                        m = new ACT_EXTSETFLAG;
                        h = !0;
                        break;
                    case 2359296:
                        m = new ACT_EXTCLRFLAG;
                        q = !0;
                        break;
                    case 2424832:
                        m = new ACT_EXTCHGFLAG;
                        k = !0;
                        break;
                    case 2490368:
                        m = new ACT_EXTINKEFFECT;
                        break;
                    case 2555904:
                        m = new ACT_EXTSETSEMITRANSPARENCY;
                        break;
                    case 2621440:
                        m = new ACT_EXTFORCEFRAME;
                        break;
                    case 2686976:
                        m = new ACT_EXTRESTFRAME;
                        break;
                    case 2752512:
                        m = new ACT_EXTSETACCELERATION;
                        break;
                    case 2818048:
                        m = new ACT_EXTSETDECELERATION;
                        break;
                    case 2883584:
                        m = new ACT_EXTSETROTATINGSPEED;
                        break;
                    case 2949120:
                        m = new ACT_EXTSETDIRECTIONS;
                        break;
                    case 3014656:
                        m = new ACT_EXTBRANCHNODE;
                        break;
                    case 3080192:
                        m = new ACT_EXTSETGRAVITY;
                        break;
                    case 3145728:
                        m = new ACT_EXTGOTONODE;
                        break;
                    case 3211264:
                        m = new ACT_EXTSETVARSTRING;
                        break;
                    case 3276800:
                        m = new ACT_EXTSETFONTNAME;
                        break;
                    case 3342336:
                        m =
                            new ACT_EXTSETFONTSIZE;
                        break;
                    case 3407872:
                        m = new ACT_EXTSETBOLD;
                        break;
                    case 3473408:
                        m = new ACT_EXTSETITALIC;
                        break;
                    case 3538944:
                        m = new ACT_EXTSETUNDERLINE;
                        break;
                    case 3604480:
                        m = new ga;
                        break;
                    case 3670016:
                        m = new ACT_EXTSETTEXTCOLOR;
                        break;
                    case 3735552:
                        m = new jc;
                        break;
                    case 3801088:
                        m = new kc;
                        break;
                    case 3866624:
                        m = new ACT_EXTMOVEBEFORE;
                        break;
                    case 3932160:
                        m = new ACT_EXTMOVEAFTER;
                        break;
                    case 3997696:
                        m = new lc;
                        break;
                    case 4063232:
                        m = new ga;
                        break;
                    case 4128768:
                        m = new mc;
                        break;
                    case 4194304:
                        m = new ga;
                        break;
                    case 4259840:
                        m = new nc;
                        break;
                    case 4325376:
                        m = new ACT_EXTSETRGBCOEF;
                        break;
                    case 4390912:
                        m = new ga;
                        break;
                    case 4456448:
                        m = new ACT_EXTSETFRICTION;
                        break;
                    case 4521984:
                        m = new ACT_EXTSETELASTICITY;
                        break;
                    case 4587520:
                        m = new ACT_EXTAPPLYIMPULSE;
                        break;
                    case 4653056:
                        m = new ACT_EXTAPPLYANGULARIMPULSE;
                        break;
                    case 4718592:
                        m = new ACT_EXTAPPLYFORCE;
                        break;
                    case 4784128:
                        m = new ACT_EXTAPPLYTORQUE;
                        break;
                    case 4849664:
                        m = new ACT_EXTSETLINEARVELOCITY;
                        break;
                    case 4915200:
                        m = new ACT_EXTSETANGULARVELOCITY;
                        break;
                    case 4980736:
                        m = new ACT_EXTFOREACH;
                        break;
                    case 5046272:
                        m =
                            new ACT_EXTFOREACH2;
                        break;
                    case 5111808:
                        m = new ACT_EXTSTOPFORCE;
                        break;
                    case 5177344:
                        m = new ACT_EXTSTOPTORQUE;
                        break;
                    default:
                        m = new De
                }
        }
        if (null != m) {
            m.ea = l;
            m.Nc = a.file.V();
            m.Sa = a.file.V();
            m.Ja = a.file.yb();
            m.ie = a.file.yb();
            m.ic = a.file.yb();
            m.uk = a.file.yb();
            l = 0;
            if (D) {
                m.ic--;
                var D = a.file.R,
                    v = a.file.s();
                a.file.s();
                l = a.file.s();
                a.file.seek(D + v)
            }
            if (0 < m.ic)
                for (m.o = Array(m.ic), D = 0; D < m.ic; D++) m.o[D] = Wa.create(a);
            if (0 != l) {
                D = null;
                switch (l) {
                    case 1:
                        D = new ACT_EXTSETFLAGBYEXP
                }
                null != D && (D.ea = m.ea, D.Nc = m.Nc, D.Sa = m.Sa, D.Ja =
                    m.Ja, D.ie = m.ie, D.ic = m.ic, D.uk = m.uk, D.o = m.o, m = D)
            }
            if (b || c || d) b = m.o[0], m.Dd = b.value, b = m.o[1], m.value = b.ma[0].value;
            if (e || f || g) D = null, b = m.o[0], 53 != b.code && (c = b.value, b = m.o[1], 0 <= c && 2 == b.ma.length && (0 >= b.ma[1].code || 1310720 <= b.ma[1].code) && (65535 == b.ma[0].code || 1572863 == b.ma[0].code) && (e ? (D = new ec, D.Dd = c, D.value = b.ma[0].value) : f ? (D = new gc, D.Dd = c, D.value = b.ma[0].value) : g && (D = new ic, D.Dd = c, D.value = b.ma[0].value)), null != D && (D.ea = m.ea, D.Nc = m.Nc, D.Sa = m.Sa, D.Ja = m.Ja, D.ie = m.ie, D.ic = m.ic, D.uk = m.uk, D.o = m.o, m = D));
            if (h || q || k) D = null, e = m.o[0], 2 == e.ma.length && (0 >= e.ma[1].code || 1310720 <= e.ma[1].code) && 65535 == e.ma[0].code && (h ? (D = new ACT_EXTSETFLAGCONST, D.P = 1 << e.ma[0].value) : q ? (D = new ACT_EXTCLRFLAGCONST, D.P = 1 << e.ma[0].value) : k && (D = new ACT_EXTCHGFLAGCONST, D.P = 1 << e.ma[0].value)), null != D && (D.ea = m.ea, D.Nc = m.Nc, D.Sa = m.Sa, D.Ja = m.Ja, D.ie = m.ie, D.ic = m.ic, D.uk = m.uk, D.o = m.o, m = D)
        }
        a.file.seek(n + p);
        return m
    };
    sb.XM = 1;
    ga.prototype = {
        ga: function() {}
    };
    tb.prototype = {
        ga: function(a) {
            a.h.wc.bt()
        }
    };
    ub.prototype = {
        ga: function(a) {
            var b = this.o[0],
                c = a.Ta(this.o[1]),
                d = !1;
            45 == b.code ? (b = a.jm(b), b = a.h.Ve.sv(b)) : (d = 0 != (b.zD & Qa.sG), b = b.at);
            0 <= b && a.h.wc.play(b, 1, c - 1, d, -1, 0)
        }
    };
    vb.prototype = {
        ga: function(a) {
            var b = this.o[0],
                c = !1;
            45 == b.code ? (b = a.jm(b), b = a.h.Ve.sv(b)) : (c = 0 != (b.zD & Qa.sG), b = b.at);
            var d = a.Ta(this.o[1]),
                e = a.Ta(this.o[2]);
            0 <= b && a.h.wc.play(b, e, d - 1, c, -1, 0)
        }
    };
    wb.prototype = {
        ga: function(a) {
            var b = a.Ta(this.o[0]),
                c = a.Ta(this.o[1]);
            0 <= c && 100 >= c && a.h.wc.$K(b - 1, c)
        }
    };
    xb.prototype = {
        ga: function(a) {
            a.sb = k.Wp;
            a.h.ui = !0
        }
    };
    yb.prototype = {
        ga: function(a) {
            var b;
            if (26 == this.o[0].code) {
                if (b = this.o[0].value, -1 == a.h.wF(b)) return
            } else {
                b = a.Ta(this.o[0]) - 1;
                if (0 > b || 4096 <= b) return;
                a.h.LP && b++;
                b |= 32768
            }
            a.sb = k.Vp;
            a.$m = b;
            a.h.ui = !0
        }
    };
    zb.prototype = {
        ga: function(a) {
            a.h.ui = !0;
            a.h.bB && !a.h.DQ && (a.sb = k.Up)
        }
    };
    Ab.prototype = {
        ga: function(a) {
            a.sb = k.Nt
        }
    };
    Bb.prototype = {
        ga: function(a) {
            var b = new Da;
            this.o[0].bl(a, 0, b);
            a.RK(b.x, b.y, b.om, 3)
        }
    };
    Cb.prototype = {
        ga: function(a) {
            0 == a.Re && a.HI()
        }
    };
    Db.prototype = {
        ga: function(a) {
            var b = this.o[0],
                c = new Da;
            b.bl(a, 17, c) && (c.zu ? (this.Ja |= X.yi, a.i.zj = !0) : this.Ja &= ~X.yi, b = a.ar(b.Mn, b.Ku, c.x, c.y, c.dir, 0, c.om, -1), 0 <= b && (b = a.G[b], a.i.Xi(b), b && 32 <= b.Fa && a.WG(b), a.Uj(b) || null != a.YQ && a.pi.kK(b)))
        }
    };
    Eb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && (24 == this.o[0].code ? a = this.o[0].color : (a = a.Ta(this.o[0]), a = p.kL(a)), k.YK(b, a))
        }
    };
    Fb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && (a = a.jm(this.o[0]), null == b.ti || null != b.ti && a != b.ti) && (b.OD(a), b.pL(-1))
        }
    };
    Gb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            if (null != b) {
                var c = a.Ta(this.o[0]),
                    c = c % 360;
                0 > c && (c += 360);
                var d = a.Uj(b);
                if (d) d.rp(c);
                else if (d = !1, 0 != a.Ta(this.o[1]) && (d = !0), a = !1, 0 != (b.D.S & E.uq) && (a = !0), b.b.Ka != c || a != d) b.b.Ka = c, b.D.S &= ~E.uq, d && (b.D.S |= E.uq), b.b.M = !0, c = b.c.h.ha.Yi(b.b.La, b.b.Ka, b.b.qb, b.b.rb), b.L = c.width, b.K = c.height, b.oa = c.Ea, b.pa = c.ya
            }
        }
    };
    Hb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && (a = a.ef(this.o[0]), b.Su(a), b.Nn(a))
        }
    };
    Ib.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && (a = a.ef(this.o[0]), b.xH(a))
        }
    };
    Jb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null !=
                b && (a = a.ef(this.o[0]), b.zH(a))
        }
    };
    Kb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && (a = a.ef(this.o[0]), b.yH(a))
        }
    };
    Lb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            if (null != b) {
                var c = new Da;
                this.o[0].bl(a, 1, c) && (k.ec(b, c.x), k.fc(b, c.y), -1 != c.dir && (c = c.dir &= 31, a.Ab(b) != c && (b.b.Qa = c, b.b.M = !0, b.A.ba.Ce(c), 2 == b.Fa && b.ca.Ni(0))))
            }
        }
    };
    Mb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && (a = a.Ta(this.o[0]), k.ec(b, Math.floor(a)))
        }
    };
    Nb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && (a = a.Ta(this.o[0]),
                k.fc(b, Math.floor(a)))
        }
    };
    Ob.prototype = {
        ga: function(a) {
            a = a.i.Pa(this);
            null != a && null != a.A && a.A.ba.stop()
        }
    };
    Pb.prototype = {
        ga: function(a) {
            a = a.i.Pa(this);
            null != a && null != a.A && a.A.ba.start()
        }
    };
    Qb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && (a = a.Ta(this.o[0]), null != b.A && b.A.ba.Te(a))
        }
    };
    Rb.prototype = {
        ga: function(a) {
            a = a.i.Pa(this);
            null != a && null != a.A && a.A.GJ(a)
        }
    };
    Sb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && (a = 22 == this.o[0].code ? a.Ta(this.o[0]) : this.o[0].value, null != b.A && b.A.PK(b, a))
        }
    };
    Tb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            if (null != b) {
                var c = new Da;
                if (this.o[0].bl(a, 0, c)) {
                    var d = c.x,
                        e = c.y,
                        d = d - b.w,
                        e = e - b.u,
                        c = a.Uj(b);
                    null == c ? (d = k.OA(d, e), d &= 31, a.Ab(b) != d && (b.b.Qa = d, b.b.M = !0, b.A.ba.Ce(d))) : (a = 180 * Math.atan2(-e, d) / 3.141592653589, 0 > a && (a = 360 + a), c.rp(a))
                }
            }
        }
    };
    Ub.prototype = {
        ga: function(a) {
            a = a.i.Pa(this);
            null != a && (a.ca.ws = !0)
        }
    };
    Vb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && (a = 10 == this.o[0].code ? this.o[0].value : a.Ta(this.o[0]), 0 > a && (a = 0), b.ca.Gn(a), b.b.M = !0)
        }
    };
    Wb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && (a = 29 == this.o[0].code ? a.lr(this.o[0].value) : a.Ta(this.o[0]), b.ca.YG(a), b.b.M = !0)
        }
    };
    Xb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            if (null != b) {
                var c;
                c = 29 == this.o[0].code ? a.lr(this.o[0].value) : a.Ta(this.o[0]);
                c &= 31;
                a.Ab(b) != c && (b.b.Qa = c, b.b.M = !0, b.A.ba.Ce(c), 2 == b.Fa && b.ca.Ni(0))
            }
        }
    };
    Yb.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && (3 == b.Fa ? 0 != (b.bD & k.Vx) ? (b.D.ym(), b.D.S &= ~E.qg, b.X |= L.vh) : (b.X |= L.Ye, a.Of(b.Kb)) : 0 == (b.X & L.Ye) && (b.X |= L.Ye, 0 != (b.qa & u.Gi) ||
                0 != (b.qa & u.Hi) ? a.XA(b) : (b.ho = !1, a.Of(b.Kb))))
        }
    };
    Zb.prototype = {
        ga: function(a) {
            a = a.i.Pa(this);
            null != a && k.JJ(a)
        }
    };
    $b.prototype = {
        ga: function(a) {
            a = a.i.Pa(this);
            null != a && k.KJ(a)
        }
    };
    ac.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            null != b && null != b.D && (b.D.ym(), b.D.S &= ~E.qg, 2 == this.o[0].code ? (b.D.sl = this.o[0].od, b.D.an = this.o[0].od) : (b.D.sl = a.Ta(this.o[0]), b.D.an = b.D.sl))
        }
    };
    bc.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            if (null != b) {
                var c = this.o[0],
                    d = new Da;
                c.bl(a, 17, d) && b.xD(c, d.x, d.y, d.dir)
            }
        }
    };
    cc.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            if (null != b) {
                var c = new Da;
                if (this.o[0].bl(a, 17, c)) {
                    var d = new Da;
                    this.o[1].bl(a, 0, d) && b.xD(this.o[0], c.x, c.y, k.OA(d.x - c.x, d.y - c.y))
                }
            }
        }
    };
    dc.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            if (null != b) {
                var c;
                c = 53 == this.o[0].code ? a.Ta(this.o[0]) : this.o[0].value;
                0 <= c && null != b.O && (c >= b.O.Ua.length && b.O.$i(c + 10), a = a.ef(this.o[1]), b.O.Ua[c] = a)
            }
        }
    };
    ec.prototype = {
        ga: function(a) {
            a = a.i.Pa(this);
            null != a && 0 <= this.Dd && null != a.O && (this.Dd >= a.O.Ua.length && a.O.$i(this.Dd + 10), a.O.Ua[this.Dd] =
                this.value)
        }
    };
    fc.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            if (null != b) {
                var c;
                c = 53 == this.o[0].code ? a.Ta(this.o[0]) : this.o[0].value;
                0 <= c && null != b.O && (c >= b.O.Ua.length && b.O.$i(c + 10), a = a.ef(this.o[1]), b.O.Ua[c] += a)
            }
        }
    };
    gc.prototype = {
        ga: function(a) {
            a = a.i.Pa(this);
            null != a && 0 <= this.Dd && null != a.O && (this.Dd >= a.O.Ua.length && a.O.$i(this.Dd + 10), a.O.Ua[this.Dd] += this.value)
        }
    };
    hc.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            if (null != b) {
                var c;
                c = 53 == this.o[0].code ? a.Ta(this.o[0]) : this.o[0].value;
                0 <= c && null != b.O &&
                    (c >= b.O.Ua.length && b.O.$i(c + 10), a = a.ef(this.o[1]), b.O.Ua[c] -= a)
            }
        }
    };
    ic.prototype = {
        ga: function(a) {
            a = a.i.Pa(this);
            null != a && 0 <= this.Dd && null != a.O && (this.Dd >= a.O.Ua.length && a.O.$i(this.Dd + 10), a.O.Ua[this.Dd] -= this.value)
        }
    };
    jc.prototype = {
        ga: function(a) {
            a = a.i.Pa(this);
            null != a && a.Xd(a.xk())
        }
    };
    kc.prototype = {
        ga: function(a) {
            a = a.i.Pa(this);
            null != a && a.Xd(0)
        }
    };
    lc.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            if (null != b && null != b.D) {
                var c = a.Ta(this.o[0]);
                0 < c && c <= a.B.oc && b.fd != c - 1 && (--c, null != b.D && (b.fd = c, b.D.tl = c,
                    b.Jh(), b.D.Hz(!1)))
            }
        }
    };
    mc.prototype = {
        ga: function(a) {
            a = a.i.Pa(this);
            if (null != a) {
                var b = this.o[0].vb,
                    c = E.eE;
                null != b && 0 != b.length && ("Add" == b ? c = E.Kx : "Invert" == b ? c = E.fE : "Sub" == b ? c = E.iE : "Mono" == b ? c = E.gE : "Blend" == b ? c = E.We : "XOR" == b ? c = E.Nx : "OR" == b ? c = E.hE : "AND" == b && (c = E.dE));
                a.D.FB(c, a.D.Rb)
            }
        }
    };
    nc.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            if (null != b && null != b.D) {
                a = p.jH(255 - a.Ta(this.o[0]), 0, 255);
                var c = 0 == (b.D.$b & E.tt);
                b.D.$b = b.D.$b & E.Lx | E.tt;
                var d = 16777215;
                c || (d = b.D.Rb);
                b.D.Rb = a << 24 | d & 16777215;
                b.D.FB(b.D.$b,
                    b.D.Rb)
            }
        }
    };
    K.By = 6;
    K.vE = -983041;
    K.wE = -1507329;
    K.xE = -1572865;
    K.create = function(a) {
        var b = a.file.R,
            c = a.file.s(),
            d, e = a.file.v();
        switch (e) {
            case -2752513:
                d = new CND_STARTCHILDEVENT;
                break;
            case -2686977:
                d = new ua;
                break;
            case -2555905:
                d = new CND_RUNNINGAS;
                break;
            case -2490369:
                d = new CND_COMPAREGCONST_GT;
                break;
            case -2424833:
                d = new CND_COMPAREGCONST_GE;
                break;
            case -2359297:
                d = new CND_COMPAREGCONST_LT;
                break;
            case -2293761:
                d = new CND_COMPAREGCONST_LE;
                break;
            case -2228225:
                d = new CND_COMPAREGCONST_NE;
                break;
            case -2162689:
                d = new CND_COMPAREGCONST_EQ;
                break;
            case -2097153:
                d = new CND_COMPAREGCONST_GT;
                break;
            case -2031617:
                d = new CND_COMPAREGCONST_GE;
                break;
            case -1966081:
                d = new CND_COMPAREGCONST_LT;
                break;
            case -1900545:
                d = new CND_COMPAREGCONST_LE;
                break;
            case -1835009:
                d = new CND_COMPAREGCONST_NE;
                break;
            case -1769473:
                d = new CND_COMPAREGCONST_EQ;
                break;
            case -1703937:
                d = new ua;
                break;
            case -1638401:
                d = new CND_CHANCE;
                break;
            case -1572865:
                d = new ua;
                break;
            case -1507329:
                d = new ua;
                break;
            case -1441793:
                d = new CND_GROUPSTART;
                break;
            case -1245185:
                d = new CND_COMPAREGSTRING;
                break;
            case -983041:
                d =
                    new CND_ONLOOP;
                break;
            case -720897:
                d = new CND_GROUPACTIVATED;
                break;
            case -655361:
                d = new ua;
                break;
            case -589825:
                d = new ua;
                break;
            case -524289:
                d = new ua;
                break;
            case -458753:
                d = new CND_COMPAREG;
                break;
            case -393217:
                d = new pc;
                break;
            case -327681:
                d = new qc;
                break;
            case -262145:
                d = new CND_REPEAT;
                break;
            case -196609:
                d = new CND_NOMORE;
                break;
            case -131073:
                d = new rc;
                break;
            case -65537:
                d = new ua;
                break;
            case -1:
                d = new oc;
                break;
            case -524290:
                d = new CND_SPCHANNELPAUSED;
                break;
            case -458754:
                d = new CND_NOSPCHANNELPLAYING;
                break;
            case -327682:
                d =
                    new CND_SPSAMPAUSED;
                break;
            case -131074:
                d = new CND_NOSAMPLAYING;
                break;
            case -2:
                d = new sc;
                break;
            case -458755:
                d = new CND_ENDOFPAUSE;
                break;
            case -393219:
                d = new CND_ISVSYNCON;
                break;
            case -327683:
                d = new CND_ISLADDER;
                break;
            case -262147:
                d = new CND_ISOBSTACLE;
                break;
            case -196611:
                d = new CND_QUITAPPLICATION;
                break;
            case -131075:
                d = new CND_LEVEL;
                break;
            case -65539:
                d = new tc;
                break;
            case -3:
                d = new uc;
                break;
            case -458756:
                d = new Bc;
                break;
            case -393220:
                d = new CND_TIMEREQUALS;
                break;
            case -327684:
                d = new CND_ONEVENT;
                break;
            case -262148:
                d = new CND_TIMEOUT;
                break;
            case -196612:
                d = new CND_EVERY;
                break;
            case -131076:
                d = new CND_TIMER;
                break;
            case -65540:
                d = new CND_TIMERINF;
                break;
            case -4:
                d = new vc;
                break;
            case -720902:
                d = new CND_ONMOUSEWHEELDOWN;
                break;
            case -655366:
                d = new CND_ONMOUSEWHEELUP;
                break;
            case -589830:
                d = new CND_MOUSEON;
                break;
            case -524294:
                d = new CND_ANYKEY;
                break;
            case -458758:
                d = new CND_MKEYDEPRESSED;
                break;
            case -393222:
                d = new CND_MCLICKONOBJECT;
                break;
            case -327686:
                d = new CND_MCLICKINZONE;
                break;
            case -262150:
                d = new CND_MCLICK;
                break;
            case -196614:
                d = new CND_MONOBJECT;
                break;
            case -131078:
                d = new CND_MINZONE;
                break;
            case -65542:
                d = new wc;
                break;
            case -6:
                d = new xc;
                break;
            case -327687:
                d = new yc;
                break;
            case -262151:
                d = new CND_NOMORELIVE;
                break;
            case -196615:
                d = new zc;
                break;
            case -131079:
                d = new CND_LIVE;
                break;
            case -65543:
                d = new CND_SCORE;
                break;
            case -7:
                d = new CND_PLAYERPLAYING;
                break;
            case -1441797:
                d = new CND_CHOOSEALLINLINE;
                break;
            case -1376261:
                d = new CND_CHOOSEFLAGRESET;
                break;
            case -1310725:
                d = new CND_CHOOSEFLAGSET;
                break;
            case -1245189:
                d = new CND_CHOOSEVALUE;
                break;
            case -1179653:
                d = new CND_PICKFROMID;
                break;
            case -1114117:
                d = new CND_CHOOSEALLINZONE;
                break;
            case -1048581:
                d = new CND_CHOOSEALL;
                break;
            case -983045:
                d = new CND_CHOOSEZONE;
                break;
            case -917509:
                d = new CND_NUMOFALLOBJECT;
                break;
            case -851973:
                d = new CND_NUMOFALLZONE;
                break;
            case -786437:
                d = new CND_NOMOREALLZONE;
                break;
            case -720901:
                d = new CND_CHOOSEFLAGRESET_OLD;
                break;
            case -655365:
                d = new CND_CHOOSEFLAGSET_OLD;
                break;
            case -458757:
                d = new CND_CHOOSEVALUE_OLD;
                break;
            case -393221:
                d = new CND_PICKFROMID_OLD;
                break;
            case -327685:
                d = new CND_CHOOSEALLINZONE_OLD;
                break;
            case -262149:
                d =
                    new CND_CHOOSEALL_OLD;
                break;
            case -196613:
                d = new CND_CHOOSEZONE_OLD;
                break;
            case -131077:
                d = new CND_NUMOFALLOBJECT_OLD;
                break;
            case -65541:
                d = new CND_NUMOFALLZONE_OLD;
                break;
            case -5:
                d = new CND_NOMOREALLZONE_OLD;
                break;
            case -5505022:
                d = new CND_CMPSCALEY;
                break;
            case -5439486:
                d = new CND_CMPSCALEX;
                break;
            case -5373950:
                d = new CND_CMPANGLE;
                break;
            case -5308409:
                d = new Ac;
                break;
            case -5439484:
                d = new CND_QEQUAL;
                break;
            case -5373948:
                d = new CND_QFALSE;
                break;
            case -5308412:
                d = new CND_QEXACT;
                break;
            case -5505015:
                d = new CND_CCAISPAUSED;
                break;
            case -5439479:
                d = new CND_CCAISVISIBLE;
                break;
            case -5373943:
                d = new CND_CCAAPPFINISHED;
                break;
            case -5308407:
                d = new CND_CCAFRAMECHANGED;
                break;
            default:
                switch (e & 4294901760) {
                    case -3211264:
                        d = new CND_EXTCMPINSTANCEDATA;
                        break;
                    case -3145728:
                        d = new CND_EXTPICKMAXVALUE;
                        break;
                    case -3080192:
                        d = new CND_EXTPICKMINVALUE;
                        break;
                    case -3014656:
                        d = new CND_EXTCMPLAYER;
                        break;
                    case -2949120:
                        d = new CND_EXTCOMPARE;
                        break;
                    case -2883584:
                        d = new CND_EXTPICKCLOSEST;
                        break;
                    case -2818048:
                        d = new fb;
                        break;
                    case -2752512:
                        d = new fb;
                        break;
                    case -2686976:
                        d =
                            new CND_EXTONLOOP;
                        break;
                    case -2621440:
                        d = new CND_EXTISSTRIKEOUT;
                        break;
                    case -2555904:
                        d = new CND_EXTISUNDERLINE;
                        break;
                    case -2490368:
                        d = new CND_EXTISITALIC;
                        break;
                    case -2424832:
                        d = new CND_EXTISBOLD;
                        break;
                    case -2359296:
                        d = new CND_EXTCMPVARSTRING;
                        break;
                    case -2293760:
                        d = new CND_EXTPATHNODENAME;
                        break;
                    case -2228224:
                        d = new Cc;
                        break;
                    case -2162688:
                        d = new CND_EXTNOMOREOBJECT;
                        break;
                    case -2097152:
                        d = new Dc;
                        break;
                    case -2031616:
                        d = new CND_EXTNOMOREZONE;
                        break;
                    case -1966080:
                        d = new CND_EXTNUMBERZONE;
                        break;
                    case -1900544:
                        d = new Ec;
                        break;
                    case -1835008:
                        d = new Fc;
                        break;
                    case -1769472:
                        d = new Gc;
                        break;
                    case -1703936:
                        d = new CND_EXTCMPVARFIXED;
                        break;
                    case -1638400:
                        d = new CND_EXTFLAGSET;
                        break;
                    case -1572864:
                        d = new CND_EXTFLAGRESET;
                        break;
                    case -1507328:
                        d = new Hc;
                        break;
                    case -1441792:
                        d = new Ic;
                        break;
                    case -1376256:
                        d = new Jc;
                        break;
                    case -1310720:
                        d = new Kc;
                        break;
                    case -1245184:
                        d = new CND_EXTCMPACC;
                        break;
                    case -1179648:
                        d = new CND_EXTCMPDEC;
                        break;
                    case -1114112:
                        d = new Lc;
                        break;
                    case -1048576:
                        d = new Mc;
                        break;
                    case -983040:
                        d = new Nc;
                        break;
                    case -917504:
                        d = new Oc;
                        break;
                    case -851968:
                        d = new Pc;
                        break;
                    case -786432:
                        d = new CND_EXTOUTPLAYFIELD;
                        break;
                    case -720896:
                        d = new CND_EXTINPLAYFIELD;
                        break;
                    case -655360:
                        d = new Qc;
                        break;
                    case -589824:
                        d = new CND_EXTISIN;
                        break;
                    case -524288:
                        d = new Rc;
                        break;
                    case -458752:
                        d = new Sc;
                        break;
                    case -393216:
                        d = new CND_EXTBOUNCING;
                        break;
                    case -327680:
                        d = new CND_EXTREVERSED;
                        break;
                    case -262144:
                        d = new Tc;
                        break;
                    case -196608:
                        d = new CND_EXTANIMPLAYING;
                        break;
                    case -131072:
                        d = new Uc;
                        break;
                    case -65536:
                        d = new CND_EXTCMPFRAME;
                        break;
                    default:
                        d = new Ee
                }
        }
        if (null != d && (d.ea = e, d.Nc =
                a.file.V(), d.Sa = a.file.V(), d.Ja = a.file.yb(), d.ie = a.file.yb(), d.ic = a.file.yb(), d.uk = a.file.yb(), d.ev = a.file.s(), 0 < d.ic)) {
            d.o = Array(d.ic);
            for (e = 0; e < d.ic; e++) d.o[e] = Wa.create(a); - 2686976 == d.ea && (e = d.o[0], 2 == e.ma.length && e.ma[0].code == aa.Fl && 0 == e.ma[1].code && (d.KP = !0, d.name = e.ma[0].vb.toLowerCase()))
        }
        a.file.seek(b + c);
        return d
    };
    K.Qg = function(a) {
        return a.ie & U.Dl ? !1 : !0
    };
    K.Yh = function(a) {
        return a.ie & U.Dl ? !0 : !1
    };
    K.Eo = function(a, b) {
        return a.ie & U.Dl ? !b : b
    };
    K.sH = function(a) {
        var b = a.i.Td,
            c = b.Wi;
        a = b.Wi = a.qc;
        if (a ==
            c) return !1;
        a--;
        return a == c ? !1 : !0
    };
    K.Qu = function(a, b) {
        var c, d = b.or;
        if (null == d) d = new P, b.or = d;
        else
            for (c = 0; c < d.size(); c++)
                if (d.get(c) == a) return !1;
        d.add(a);
        d = b.RA;
        if (null == d) return !0;
        for (c = 0; c < d.size(); c++)
            if (d.get(c) == a) return !1;
        return !0
    };
    K.sz = function(a, b) {
        return 0 == b ? !1 : b == a.qc || b == a.qc - 1 ? !0 : !1
    };
    ua.prototype = {
        Na: function() {
            return !1
        },
        da: function() {
            return !1
        }
    };
    oc.prototype = {
        Na: function() {
            return !0
        },
        da: function() {
            return !0
        }
    };
    K.prototype = {
        tH: function(a) {
            return K.Qu(this.ev, a)
        },
        xg: function(a, b) {
            var c = a.i.zg(this.Sa),
                d = a.i.Wc,
                e = this.o[0],
                f;
            f = e.ma[0];
            if (0 != (this.ie & U.$x))
                for (f = f.code != aa.ey && f.code != aa.bF || 0 != e.ma[1].code ? a.Ta(e) : f.value; null != c;) 0 == b.tk(c, f, e.Ih) && (d--, a.i.wd()), c = a.i.Pf();
            else
                for (; null != c;) f = a.Ta(e), 0 == b.tk(c, f, e.Ih) && (d--, a.i.wd()), c = a.i.Pf();
            return 0 != d ? !0 : !1
        },
        ge: function(a, b) {
            for (var c = a.i.zg(this.Sa), d = a.i.Wc; null != c;) 0 == b.yg(c) && (d--, a.i.wd()), c = a.i.Pf();
            return 0 != d ? !0 : !1
        },
        Hv: function(a) {
            if (a.i.bh) return a.i.zg(this.Sa), a.i.zg(this.o[0].bb), !1;
            var b = !1;
            0 != (this.ie & U.Dl) && (b = !0);
            var c = a.i.zg(this.Sa);
            if (null == c) return K.Yh(this);
            var d = a.i.Wc,
                e = this.o[0].ag;
            0 <= e ? (a.Gv[0] = e, a.Gv[1] = this.o[0].bb, e = a.Gv) : e = a.i.Pc[this.o[0].bb & 32767].J;
            var f, g = new P,
                h, q;
            do {
                h = c.w;
                q = c.u;
                3 <= this.ic && (h = a.Ta(this.o[1]), q = a.Ta(this.o[2]));
                f = a.zm(c, c.b.La, c.b.Ka, c.b.qb, c.b.rb, h, q, e);
                if (null == f) 0 == b && (d--, a.i.wd());
                else {
                    c = !1;
                    for (h = 0; h < f.size(); h++) q = f.get(h), 0 == (q.X & L.Ye) && (g.add(q), c = !0);
                    1 == b ? 1 == c && (d--, a.i.wd()) : 0 == c && (d--, a.i.wd())
                }
                c = a.i.Pf()
            } while (null != c);
            if (0 == d) return !1;
            c = a.i.zg(this.o[0].bb);
            if (null == c) return !1;
            d =
                a.i.Wc;
            if (0 == b) {
                do {
                    for (h = 0; h < g.size() && (q = g.get(h), c != q); h++);
                    h == g.size() && (d--, a.i.wd());
                    c = a.i.Pf()
                } while (null != c);
                return 0 != d ? !0 : !1
            }
            do {
                for (h = 0; h < g.size(); h++)
                    if (q = g.get(h), c == q) {
                        d--;
                        a.i.wd();
                        break
                    } c = a.i.Pf()
            } while (null != c);
            return 0 != d ? !0 : !1
        }
    };
    pc.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            a = a.i.Td;
            if (0 != (a.la & H.pn)) return !0;
            if (0 != (a.la & H.on)) return !1;
            a.Wi = -2;
            a.la |= H.pn;
            return !0
        }
    };
    qc.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            a = a.i.Td;
            if (0 != (a.la & H.Qp)) return !1;
            a.la |=
                H.Qp;
            return !0
        }
    };
    rc.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            var b = a.ef(this.o[0]);
            a = a.ef(this.o[1]);
            return k.Yl(b, a, this.o[1].Ih)
        }
    };
    sc.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            var b = this.o[0],
                c = !1;
            45 == b.code ? (b = a.jm(b), b = a.h.Ve.sv(b)) : b = b.at;
            0 <= b && (c = a.h.wc.ZI(b));
            return c ? K.Yh(this) : K.Qg(this)
        }
    };
    tc.prototype = {
        Na: function() {
            return !0
        },
        da: function() {
            return !0
        }
    };
    uc.prototype = {
        Na: function(a) {
            return 2 < a.qc ? !1 : !0
        },
        da: function(a) {
            return 2 < a.qc ? !1 : !0
        }
    };
    vc.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            var b;
            b = 22 == this.o[0].code ? a.Ta(this.o[0]) : this.o[0].od;
            return a.si > b ? !0 : !1
        }
    };
    wc.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            return K.Eo(this, a.h.Xc[this.o[0].key])
        }
    };
    xc.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            return 0 == a.h.Xc[this.o[0].key] ? K.Yh(this) : K.sH(a) ? K.Qg(this) : K.Yh(this)
        }
    };
    yc.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            a = a.Gc[this.Nc];
            a &= this.o[0].value;
            return a != this.o[0].value ? K.Yh(this) : K.Qg(this)
        }
    };
    zc.prototype = {
        Na: function(a) {
            if (this.Nc !=
                a.i.kx) return !1;
            a = a.i.Rc;
            a &= this.o[0].value;
            return a != this.o[0].value ? !1 : !0
        },
        da: function(a) {
            var b = this.Nc;
            a = a.Es[b] & a.Gc[b];
            a &= this.o[0].value;
            return this.o[0].value != a ? !1 : !0
        }
    };
    Ac.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            for (var b = a.i.zg(this.Sa), c = a.i.Wc, d; null != b;) b = b.va, d = a.ef(this.o[0]), 0 == k.Yl(b, d, this.o[0].Ih) && (c--, a.i.wd()), b = a.i.Pf();
            return 0 != c
        }
    };
    Bc.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            var b = this.o[1];
            if (0 == b.jt) a = 22 == this.o[0].code ? a.Ta(this.o[0]) :
                this.o[0].od, b.value = a, b.jt = -1;
            else if (b.value -= a.hp, 0 >= b.value) return a = 22 == this.o[0].code ? a.Ta(this.o[0]) : this.o[0].od, b.value += a, !0;
            return !1
        }
    };
    Cc.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            a.i.Dz(this.Sa, -1);
            if (0 == a.i.Wc) return !1;
            var b = a.random(a.i.Wc),
                b = a.i.Dz(this.Sa, b);
            if (0 < this.ic) {
                var c = this.o[0];
                if (68 == c.code && 0 == c.evaluate(b)) return !1
            }
            a.i.$H(this.Sa, b);
            return !0
        }
    };
    Dc.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            var b = 0,
                c, d = this.Sa;
            if (0 == (d & 32768)) c = a.T[d],
                b = c.qf;
            else if (32767 != (d & 32767)) {
                var d = a.i.Pc[d & 32767],
                    e;
                for (e = 0; e < d.J.length; e += 2) {
                    c = d.J[e + 1];
                    if (0 > c) break;
                    c = a.T[c];
                    b += c.qf
                }
            }
            a = a.Ta(this.o[0]);
            return k.Mq(b, a, this.o[0].Ih)
        }
    };
    Ec.prototype = p.extend(new K, {
        Na: function(a) {
            return this.ge(a, this)
        },
        da: function(a) {
            return this.ge(a, this)
        },
        yg: function(a) {
            return K.Eo(this, 0 == (a.D.S & E.pg))
        }
    });
    Fc.prototype = p.extend(new K, {
        Na: function(a) {
            return this.ge(a, this)
        },
        da: function(a) {
            return this.ge(a, this)
        },
        yg: function(a) {
            return 0 != (a.D.S & E.pg) ? !0 : !1
        }
    });
    Gc.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            var b = a.i.zg(this.Sa);
            if (null == b) return !1;
            var c = a.i.Wc,
                d, e = this.o[1],
                f;
            if (0 != (this.ie & U.$x)) {
                f = 53 == this.o[0].code ? a.Ta(this.o[0]) : this.o[0].value;
                d = a.ef(e);
                do 0 <= f && null != b.O ? (b = f < b.O.Ua.length ? b.O.im(f) : 0, 0 == k.Yl(b, d, e.Ih) && (c--, a.i.wd())) : (c--, a.i.wd()), b = a.i.Pf(); while (null != b)
            } else {
                do f = 53 == this.o[0].code ? a.Ta(this.o[0]) : this.o[0].value, 0 <= f && null != b.O ? (b = f < b.O.Ua.length ? b.O.im(f) : 0, d = a.ef(e), 0 == k.Yl(b, d, e.Ih) && (c--, a.i.wd())) : (c--, a.i.wd()), b =
                    a.i.Pf(); while (null != b)
            }
            return 0 != c
        }
    };
    fb.prototype = {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            var b = a.i.zg(this.Sa);
            if (null == b) return !1;
            var c = a.i.Wc,
                d = this.o[0].value,
                e = this.o[1],
                f = e.ma[0].value;
            do 0 <= d && null != b.O ? (b = d < b.O.Ua.length ? b.O.im(d) : 0, 0 == k.Yl(b, f, e.Ih) && (c--, a.i.wd())) : (c--, a.i.wd()), b = a.i.Pf(); while (null != b);
            return 0 != c
        }
    };
    Hc.prototype = p.extend(new K, {
        Na: function(a) {
            return this.ge(a, this)
        },
        da: function(a) {
            return this.ge(a, this)
        },
        yg: function(a) {
            var b = a.w,
                c = a.u;
            2 <= this.ic && (b = a.c.Ta(this.o[0]),
                c = a.c.Ta(this.o[1]));
            return a.c.Ui(a, a.b.La, a.b.Ka, a.b.qb, a.b.rb, b, c, 0, ja.kn) || a.c.Ui(a, a.b.La, a.b.Ka, a.b.qb, a.b.rb, b, c, 0, ja.Yd) ? K.Qg(this) : K.Yh(this)
        }
    });
    Ic.prototype = p.extend(new K, {
        Na: function(a) {
            return this.xg(a, this)
        },
        da: function(a) {
            return this.xg(a, this)
        },
        tk: function(a, b) {
            var c = a.c.fa + b,
                d = a.w - a.oa;
            if (d <= c) return K.Qg(this);
            c = a.c.fa + a.c.kl - b;
            d += a.L;
            if (d >= c) return K.Qg(this);
            c = a.c.ka + b;
            d = a.u - a.pa;
            if (d <= c) return K.Qg(this);
            c = a.c.ka + a.c.ll - b;
            d += a.K;
            return d >= c ? K.Qg(this) : K.Yh(this)
        }
    });
    Jc.prototype =
        p.extend(new K, {
            Na: function() {
                return !0
            },
            da: function(a) {
                return this.ge(a, this)
            },
            yg: function(a) {
                return a.b.dc != S.Ay ? !1 : K.sz(a.c, a.jo)
            }
        });
    Kc.prototype = p.extend(new K, {
        Na: function() {
            return !0
        },
        da: function(a) {
            return this.ge(a, this)
        },
        yg: function(a) {
            return a.b.dc != S.Ay ? !1 : K.sz(a.c, a.Bk)
        }
    });
    Lc.prototype = p.extend(new K, {
        Na: function(a) {
            return this.xg(a, this)
        },
        da: function(a) {
            return this.xg(a, this)
        },
        tk: function(a, b, c) {
            return k.Mq(a.w, b, c)
        }
    });
    Mc.prototype = p.extend(new K, {
        Na: function(a) {
            return this.xg(a, this)
        },
        da: function(a) {
            return this.xg(a, this)
        },
        tk: function(a, b, c) {
            return k.Mq(a.u, b, c)
        }
    });
    Nc.prototype = p.extend(new K, {
        Na: function(a) {
            return this.xg(a, this)
        },
        da: function(a) {
            return this.xg(a, this)
        },
        tk: function(a, b, c) {
            return k.Mq(a.b.aa, b, c)
        }
    });
    Oc.prototype = p.extend(new K, {
        Na: function(a, b) {
            for (var c = a.G[a.i.TC], d = this.Nc, e = this.o[0], f = e.ag;;) {
                if (d == b.ac) {
                    if (f == c.ac) break;
                    if (0 <= f) return !1;
                    if (this.Xl(a, e.bb, c.ac)) break;
                    return !1
                }
                if (f == b.ac) {
                    if (d == c.ac) break;
                    if (0 <= d) return !1;
                    if (this.Xl(a, this.Sa, c.ac)) break;
                    return !1
                }
                if (0 >
                    d) {
                    if (0 > f) {
                        if (this.Xl(a, this.Sa, b.ac)) {
                            if (this.Xl(a, e.bb, c.ac)) break;
                            if (0 == this.Xl(a, e.bb, b.ac)) return !1
                        }
                        if (this.Xl(a, this.Sa, c.ac)) break
                    } else if (f == c.ac) break;
                    return !1
                }
                if (0 <= f || d != c.ac) return !1;
                break
            }
            var g = c.io << 16 | this.ev & 65535;
            if (0 == K.Qu(g, b)) {
                if (0 == (a.i.Td.la & H.qn)) return !1;
                a.i.cp = !0
            }
            g = b.io << 16 | this.ev & 65535;
            if (0 == K.Qu(g, c)) {
                if (0 == (a.i.Td.la & H.qn)) return !1;
                a.i.cp = !0
            }
            0 > d && a.i.kA(this.Sa);
            0 > f && a.i.kA(e.bb);
            a.i.Xi(b);
            a.i.Xi(c);
            c.A.ba.oe == a.ld ? b.A.ba.oe = a.ld : b.A.ba.oe == a.ld && (c.A.ba.oe = a.ld);
            return !0
        },
        da: function(a) {
            return this.Hv(a)
        },
        Xl: function(a, b, c) {
            if (-1 == b) return !1;
            a = a.i.Pc[b & 32767];
            for (b = 0; b < a.J.length; b += 2) {
                var d = a.J[b];
                if (0 > d) break;
                if (d == c) return !0
            }
            return !1
        }
    });
    Pc.prototype = p.extend(new K, {
        Na: function(a, b) {
            return this.tH(b) ? (a.i.Xi(b), !0) : 0 == (a.i.Td.la & H.qn) ? !1 : a.i.cp = !0
        },
        da: function(a) {
            return K.Eo(this, this.ge(a, this))
        },
        yg: function(a) {
            return a.c.Ui(a, a.b.La, a.b.Ka, a.b.qb, a.b.rb, a.w, a.u, 0, ja.Yd)
        }
    });
    Qc.prototype = p.extend(new K, {
        Na: function(a) {
            return this.ge(a, this)
        },
        da: function(a) {
            return this.ge(a,
                this)
        },
        yg: function(a) {
            var b = a.w - a.oa,
                c = a.u - a.pa;
            return 0 != a.c.qs(b, c, b + a.L, c + a.K) ? K.Qg(this) : K.Yh(this)
        }
    });
    Rc.prototype = p.extend(new K, {
        Na: function(a) {
            return this.da(a)
        },
        da: function(a) {
            return 29 == this.o[0].code ? this.ge(a, this) : this.xg(a, this)
        },
        yg: function(a) {
            var b = this.o[0].value,
                c;
            for (c = 0; 32 > c; c++)
                if (0 != (1 << c & b) && a.c.Ab(a) == c) return K.Qg(this);
            return K.Yh(this)
        },
        tk: function(a, b) {
            return K.Eo(this, a.b.Qa == (b & 31))
        }
    });
    Sc.prototype = p.extend(new K, {
        Na: function(a) {
            return this.ge(a, this)
        },
        da: function(a) {
            return this.ge(a,
                this)
        },
        yg: function(a) {
            return K.Eo(this, 0 == a.b.aa)
        }
    });
    Tc.prototype = p.extend(new K, {
        Na: function(a) {
            return this.Hv(a)
        },
        da: function(a) {
            return this.Hv(a)
        }
    });
    Uc.prototype = p.extend(new K, {
        Na: function(a, b) {
            if ((10 == this.o[0].code ? this.o[0].value : a.Ta(this.o[0])) != a.i.Rc) return !1;
            a.i.Xi(b);
            return !0
        },
        da: function(a) {
            return 10 == this.o[0].code ? this.ge(a, this) : this.xg(a, this)
        },
        yg: function(a) {
            return this.o[0].value != a.ca.Zk ? !1 : 0 == a.ca.vf ? !0 : !1
        },
        tk: function(a, b) {
            return b != a.ca.Zk ? !1 : 0 == a.ca.vf ? !0 : !1
        }
    });
    aa.TM = 8960;
    aa.VM = 9216;
    aa.SM = 9472;
    aa.WM = 9728;
    aa.QM = 9984;
    aa.UM = 10752;
    aa.RM = 11008;
    aa.Fl = 262143;
    aa.ey = 65535;
    aa.bF = 1572863;
    aa.create = function(a) {
        var b = a.R,
            c, d = a.v();
        switch (d) {
            case 0:
                c = new va;
                break;
            case 131072:
                c = new dd;
                break;
            case 262144:
                c = new ed;
                break;
            case 393216:
                c = new fd;
                break;
            case 524288:
                c = new gd;
                break;
            case 655360:
                c = new EXP_MOD;
                break;
            case 786432:
                c = new EXP_POW;
                break;
            case 917504:
                c = new EXP_AND;
                break;
            case 1048576:
                c = new EXP_OR;
                break;
            case 1179648:
                c = new EXP_XOR;
                break;
            case 65535:
                c = new hb;
                break;
            case 131071:
                c = new hd;
                break;
            case 196607:
                c = new EXP_VARGLO;
                break;
            case 262143:
                c = new $c;
                break;
            case 327679:
                c = new id;
                break;
            case 393215:
                c = new EXP_VAL;
                break;
            case 458751:
            case 524287:
            case 589823:
            case 655359:
                c = new gb;
                break;
            case 720895:
                c = new EXP_SIN;
                break;
            case 786431:
                c = new EXP_COS;
                break;
            case 851967:
                c = new EXP_TAN;
                break;
            case 917503:
                c = new EXP_SQR;
                break;
            case 983039:
                c = new EXP_LOG;
                break;
            case 1048575:
                c = new EXP_LN;
                break;
            case 1114111:
                c = new EXP_HEX;
                break;
            case 1179647:
                c = new EXP_BIN;
                break;
            case 1245183:
                c = new EXP_EXP;
                break;
            case 1310719:
                c = new EXP_LEFT;
                break;
            case 1376255:
                c = new EXP_RIGHT;
                break;
            case 1441791:
                c = new EXP_MID;
                break;
            case 1507327:
                c = new EXP_LEN;
                break;
            case 1572863:
                c = new Vc;
                break;
            case 1638399:
                c = new Zc;
                break;
            case 1900543:
                c = new EXP_INT;
                break;
            case 1966079:
                c = new EXP_ABS;
                break;
            case 2031615:
                c = new EXP_CEIL;
                break;
            case 2097151:
                c = new EXP_FLOOR;
                break;
            case 2162687:
                c = new EXP_ACOS;
                break;
            case 2228223:
                c = new EXP_ASIN;
                break;
            case 2293759:
                c = new EXP_ATAN;
                break;
            case 2359295:
                c = new EXP_NOT;
                break;
            case 2686975:
                c = new EXP_MIN;
                break;
            case 2752511:
                c = new EXP_MAX;
                break;
            case 2818047:
                c =
                    new EXP_GETRGB;
                break;
            case 2883583:
                c = new EXP_GETRED;
                break;
            case 2949119:
                c = new EXP_GETGREEN;
                break;
            case 3014655:
                c = new EXP_GETBLUE;
                break;
            case 3080191:
                c = new EXP_LOOPINDEX;
                break;
            case 3145727:
                c = new EXP_NEWLINE;
                break;
            case 3211263:
                c = new EXP_ROUND;
                break;
            case 3276799:
                c = new EXP_STRINGGLO;
                break;
            case 3342335:
                c = new Yc;
                break;
            case 3407871:
                c = new EXP_LOWER;
                break;
            case 3473407:
                c = new EXP_UPPER;
                break;
            case 3538943:
                c = new EXP_FIND;
                break;
            case 3604479:
                c = new EXP_REVERSEFIND;
                break;
            case 3866623:
                c = new EXP_FLOATTOSTRING;
                break;
            case 3932159:
                c =
                    new EXP_ATAN2;
                break;
            case 3997695:
                c = new va;
                break;
            case 4063231:
                c = new gb;
                break;
            case 4128767:
                c = new EXP_DISTANCE;
                break;
            case 4194303:
                c = new EXP_ANGLE;
                break;
            case 4259839:
                c = new EXP_RANGE;
                break;
            case 4325375:
                c = new EXP_RANDOMRANGE;
                break;
            case 4456447:
                c = new EXP_RUNTIMENAME;
                break;
            case 4521983:
                c = new ad;
                break;
            case -1:
                c = new jd;
                break;
            case -65537:
                c = new kd;
                break;
            case -131073:
                c = new EXP_VIRGULE;
                break;
            case 65534:
                c = new EXP_GETSAMPLEMAINVOL;
                break;
            case 131070:
                c = new EXP_GETSAMPLEVOL;
                break;
            case 196606:
                c = new EXP_GETCHANNELVOL;
                break;
            case 262142:
                c = new va;
                break;
            case 327678:
                c = new EXP_GETSAMPLEPAN;
                break;
            case 393214:
                c = new EXP_GETCHANNELPAN;
                break;
            case 458750:
                c = new EXP_GETSAMPLEPOS;
                break;
            case 524286:
                c = new EXP_GETCHANNELPOS;
                break;
            case 589822:
                c = new EXP_GETSAMPLEDUR;
                break;
            case 655358:
                c = new EXP_GETCHANNELDUR;
                break;
            case 720894:
                c = new EXP_GETSAMPLEFREQ;
                break;
            case 786430:
                c = new EXP_GETCHANNELFREQ;
                break;
            case 851966:
                c = new EXP_GETCHANNELSNDNAME;
                break;
            case 65533:
                c = new EXP_GAMLEVEL;
                break;
            case 131069:
                c = new EXP_GAMNPLAYER;
                break;
            case 196605:
                c =
                    new EXP_PLAYXLEFT;
                break;
            case 262141:
                c = new EXP_PLAYXRIGHT;
                break;
            case 327677:
                c = new EXP_PLAYYTOP;
                break;
            case 393213:
                c = new EXP_PLAYYBOTTOM;
                break;
            case 458749:
                c = new EXP_PLAYWIDTH;
                break;
            case 524285:
                c = new EXP_PLAYHEIGHT;
                break;
            case 589821:
                c = new EXP_GAMLEVELNEW;
                break;
            case 655357:
                c = new EXP_GETCOLLISIONMASK;
                break;
            case 720893:
                c = new EXP_FRAMERATE;
                break;
            case 786429:
                c = new EXP_GETVIRTUALWIDTH;
                break;
            case 851965:
                c = new EXP_GETVIRTUALHEIGHT;
                break;
            case 917501:
                c = new EXP_GETFRAMEBKDCOLOR;
                break;
            case 983037:
                c = new va;
                break;
            case 1048573:
                c = new va;
                break;
            case 1114109:
                c = new EXP_FRAMEALPHACOEF;
                break;
            case 1179645:
                c = new EXP_FRAMERGBCOEF;
                break;
            case 1245181:
                c = new va;
                break;
            case 65532:
                c = new EXP_TIMVALUE;
                break;
            case 131068:
                c = new EXP_TIMCENT;
                break;
            case 196604:
                c = new EXP_TIMSECONDS;
                break;
            case 262140:
                c = new EXP_TIMHOURS;
                break;
            case 327676:
                c = new EXP_TIMMINITS;
                break;
            case 393212:
                c = new EXP_EVENTAFTER;
                break;
            case 65530:
                c = new EXP_XMOUSE;
                break;
            case 131066:
                c = new EXP_YMOUSE;
                break;
            case 196602:
                c = new EXP_MOUSEWHEELDELTA;
                break;
            case 65529:
                c = new EXP_PLASCORE;
                break;
            case 131065:
                c = new EXP_PLALIVES;
                break;
            case 196601:
                c = new EXP_GETINPUT;
                break;
            case 262137:
                c = new EXP_GETINPUTKEY;
                break;
            case 327673:
                c = new EXP_GETPLAYERNAME;
                break;
            case 65531:
                c = new EXP_CRENUMBERALL;
                break;
            case 131067:
                c = new EXP_LASTFIXEDVALUE;
                break;
            case 5242883:
                c = new EXP_STRNUMBER;
                break;
            case 5308419:
                c = new EXP_STRGETCURRENT;
                break;
            case 5373955:
                c = new EXP_STRGETNUMBER;
                break;
            case 5439491:
                c = new EXP_STRGETNUMERIC;
                break;
            case 5505027:
                c = new EXP_STRGETNPARA;
                break;
            case 5242882:
                c = new EXP_GETRGBAT;
                break;
            case 5308418:
                c =
                    new EXP_GETSCALEX;
                break;
            case 5373954:
                c = new EXP_GETSCALEY;
                break;
            case 5439490:
                c = new ld;
                break;
            case 5242887:
                c = new md;
                break;
            case 5308423:
                c = new EXP_CGETMIN;
                break;
            case 5373959:
                c = new nd;
                break;
            case 5439495:
                c = new EXP_CGETCOLOR1;
                break;
            case 5505031:
                c = new EXP_CGETCOLOR2;
                break;
            case 5242889:
                c = new EXP_CCAGETFRAMENUMBER;
                break;
            case 5308425:
                c = new EXP_CCAGETGLOBALVALUE;
                break;
            case 5373961:
                c = new EXP_CCAGETGLOBALSTRING;
                break;
            default:
                switch (d & 4294901760) {
                    case 65536:
                        c = new od;
                        break;
                    case 131072:
                        c = new EXP_EXTISPR;
                        break;
                    case 196608:
                        c =
                            new pd;
                        break;
                    case 262144:
                        c = new EXP_EXTACC;
                        break;
                    case 327680:
                        c = new EXP_EXTDEC;
                        break;
                    case 393216:
                        c = new qd;
                        break;
                    case 458752:
                        c = new EXP_EXTXLEFT;
                        break;
                    case 524288:
                        c = new EXP_EXTXRIGHT;
                        break;
                    case 589824:
                        c = new EXP_EXTYTOP;
                        break;
                    case 655360:
                        c = new EXP_EXTYBOTTOM;
                        break;
                    case 720896:
                        c = new rd;
                        break;
                    case 786432:
                        c = new EXP_EXTIDENTIFIER;
                        break;
                    case 851968:
                        c = new EXP_EXTFLAG;
                        break;
                    case 917504:
                        c = new EXP_EXTNANI;
                        break;
                    case 983040:
                        c = new sd;
                        break;
                    case 1048576:
                        c = new Wc;
                        break;
                    case 1114112:
                        c = new EXP_EXTGETSEMITRANSPARENCY;
                        break;
                    case 1179648:
                        c = new EXP_EXTNMOVE;
                        break;
                    case 1245184:
                        c = new Xc;
                        break;
                    case 1310720:
                        c = new EXP_EXTGETFONTNAME;
                        break;
                    case 1376256:
                        c = new EXP_EXTGETFONTSIZE;
                        break;
                    case 1441792:
                        c = new EXP_EXTGETFONTCOLOR;
                        break;
                    case 1507328:
                        c = new EXP_EXTGETLAYER;
                        break;
                    case 1572864:
                        c = new EXP_EXTGETGRAVITY;
                        break;
                    case 1638400:
                        c = new EXP_EXTXAP;
                        break;
                    case 1703936:
                        c = new EXP_EXTYAP;
                        break;
                    case 1769472:
                        c = new EXP_EXTALPHACOEF;
                        break;
                    case 1835008:
                        c = new EXP_EXTRGBCOEF;
                        break;
                    case 1900544:
                        c = new va;
                        break;
                    case 1966080:
                        c = new bd;
                        break;
                    case 2031616:
                        c =
                            new cd;
                        break;
                    case 2097152:
                        c = new EXP_EXTDISTANCE;
                        break;
                    case 2162688:
                        c = new EXP_EXTANGLE;
                        break;
                    case 2228224:
                        c = new EXP_EXTLOOPINDEX;
                        break;
                    case 2293760:
                        c = new EXP_EXTGETFRICTION;
                        break;
                    case 2359296:
                        c = new EXP_EXTGETRESTITUTION;
                        break;
                    case 2424832:
                        c = new EXP_EXTGETDENSITY;
                        break;
                    case 2490368:
                        c = new EXP_EXTGETVELOCITY;
                        break;
                    case 2555904:
                        c = new EXP_EXTGETANGLE;
                        break;
                    case 2621440:
                        c = new EXP_EXTWIDTH;
                        break;
                    case 2686976:
                        c = new EXP_EXTHEIGHT;
                        break;
                    case 2752512:
                        c = new EXP_EXTGETMASS;
                        break;
                    case 2818048:
                        c = new EXP_EXTGETANGULARVELOCITY;
                        break;
                    case 2883584:
                        c = new EXP_EXTGETNAME;
                        break;
                    case 2949120:
                        c = new EXP_NUMBEROFSELECTED;
                        break;
                    case 3014656:
                        c = new EXP_EXTINSTANCEDATA;
                        break;
                    default:
                        c = new Ce
                }
        }
        if (null != c && (c.code = d, 0 != d)) {
            var e = a.s(),
                f;
            switch (d) {
                case 262143:
                    c.vb = a.Ob();
                    break;
                case 65535:
                    c.value = a.v();
                    break;
                case 1572863:
                    c.value = a.KC();
                    break;
                case 1638399:
                    a.wa(4);
                    c.$f = a.s();
                    break;
                case 3342335:
                    a.wa(4);
                    c.$f = a.s();
                    break;
                default:
                    if (f = d & 65535, 0 != (f & 32768) && (f -= 65536), 2 <= f || f == v.Gy) switch (c.ag = a.V(), c.bb = a.V(), d & 4294901760) {
                        case 1048576:
                            c.$f = a.s();
                            break;
                        case 1245184:
                            c.$f = a.s()
                    }
            }
            a.seek(b + e)
        }
        return c
    };
    gb.prototype = {
        evaluate: function(a) {
            a.na[a.Y] = ""
        }
    };
    va.prototype = {
        evaluate: function(a) {
            a.na[a.Y] = 0
        }
    };
    hb.prototype = {
        evaluate: function(a) {
            a.na[a.Y] = this.value
        }
    };
    Vc.prototype = {
        evaluate: function(a) {
            a.na[a.Y] = this.value;
            a.Mh = !0
        }
    };
    Wc.prototype = {
        evaluate: function(a) {
            var b = a.i.ff(this.bb);
            null == b ? a.na[a.Y] = 0 : (b = null != b.O ? b.O.im(this.$f) : 0, p.Jv(b) || (a.Mh = !0), a.na[a.Y] = b)
        }
    };
    Xc.prototype = {
        evaluate: function(a) {
            var b = a.i.ff(this.bb);
            a.na[a.Y] = null == b ? "" : b.O.KA(this.$f)
        }
    };
    Yc.prototype = {
        evaluate: function(a) {
            a.na[a.Y] = a.h.DA(this.$f)
        }
    };
    Zc.prototype = {
        evaluate: function(a) {
            a.na[a.Y] = a.h.ov(this.$f)
        }
    };
    $c.prototype = {
        evaluate: function(a) {
            a.na[a.Y] = this.vb
        }
    };
    ad.prototype = {
        evaluate: function(a) {
            a.Qc++;
            var b = a.getExpression();
            a.Qc++;
            var c = a.getExpression();
            a.Qc++;
            var d = a.getExpression();
            a.na[a.Y] = b.split(c).join(d)
        }
    };
    bd.prototype = {
        evaluate: function(a) {
            var b = a.i.ff(this.bb);
            a.Qc++;
            var c = a.vv();
            null != b && null != b.O && 0 <= c && c < b.O.Ua.length ? (b = b.O.im(c), p.Jv(b) || (a.Mh = !0), a.na[a.Y] =
                b) : a.na[a.Y] = 0
        }
    };
    cd.prototype = {
        evaluate: function(a) {
            var b = a.i.ff(this.bb);
            a.Qc++;
            var c = a.vv();
            a.na[a.Y] = null != b && null != b.O && 0 <= c && c < b.O.Wd.length ? b.O.KA(c) : ""
        }
    };
    dd.prototype = {
        evaluate: function(a) {
            a.na[a.Y] += a.na[a.Y + 1]
        }
    };
    ed.prototype = {
        evaluate: function(a) {
            a.Jn ? (a.Qc++, a.nl[a.Qc].evaluate(a), a.na[a.Y] = -a.na[a.Y]) : a.na[a.Y] -= a.na[a.Y + 1]
        }
    };
    fd.prototype = {
        evaluate: function(a) {
            a.na[a.Y] *= a.na[a.Y + 1]
        }
    };
    gd.prototype = {
        evaluate: function(a) {
            var b = a.na[a.Y],
                c = a.na[a.Y + 1];
            a.na[a.Y] = 0 != c ? 0 == a.Mh ? p.Md(b / c) : a.na[a.Y] /
                a.na[a.Y + 1] : 0
        }
    };
    hd.prototype = {
        evaluate: function(a) {
            a.Qc++;
            var b = a.vv();
            a.na[a.Y] = a.random(b)
        }
    };
    id.prototype = {
        evaluate: function(a) {
            a.Qc++;
            var b = a.getExpression();
            a.na[a.Y] = b.toString()
        }
    };
    jd.prototype = {
        evaluate: function(a) {
            a.Qc++;
            a.na[a.Y] = a.getExpression()
        }
    };
    kd.prototype = {
        evaluate: function() {}
    };
    ld.prototype = {
        evaluate: function(a) {
            var b = a.i.ff(this.bb);
            if (null == b) a.na[a.Y] = 0;
            else {
                var c = b.b.Ka;
                a.Uj(b) && (c = 0, c == ca.Ex && (c = b.b.Ka));
                a.na[a.Y] = c
            }
        }
    };
    md.prototype = {
        evaluate: function(a) {
            var b = a.i.ff(this.bb);
            null == b ? a.na[a.Y] = 0 : (a.na[a.Y] = b.va, b.Pi && (a.Mh = !0))
        }
    };
    nd.prototype = {
        evaluate: function(a) {
            var b = a.i.ff(this.bb);
            a.na[a.Y] = null == b ? 0 : b.Jc
        }
    };
    od.prototype = {
        evaluate: function(a) {
            var b = a.i.ff(this.bb);
            a.na[a.Y] = null == b ? 0 : b.u
        }
    };
    pd.prototype = {
        evaluate: function(a) {
            var b = a.i.ff(this.bb);
            if (null == b) a.na[a.Y] = 0;
            else {
                var c = 0;
                null != b.ca && (c = b.A.ba.tv());
                a.na[a.Y] = c
            }
        }
    };
    qd.prototype = {
        evaluate: function(a) {
            var b = a.i.ff(this.bb);
            a.na[a.Y] = null == b ? 0 : a.Ab(b)
        }
    };
    rd.prototype = {
        evaluate: function(a) {
            var b = a.i.ff(this.bb);
            a.na[a.Y] = null == b ? 0 : b.w
        }
    };
    sd.prototype = {
        evaluate: function(a) {
            var b = this.bb,
                c;
            if (0 == (b & 32768)) c = a.T[b], a.na[a.Y] = c.qf;
            else {
                var d = 0;
                if (-1 != b) {
                    var b = a.i.Pc[b & 32767],
                        e;
                    for (e = 0; e < b.J.length; e += 2) {
                        c = b.J[e + 1];
                        if (0 > c) break;
                        c = a.T[c];
                        d += c.qf
                    }
                }
                a.na[a.Y] = d
            }
        }
    };
    ka.FusionVersion = "Clickteam Fusion HTML5 Exporter Build 285.1";
    n.mg = 4;
    n.WO = 770;
    n.un = 8;
    n.mN = 2;
    n.oF = 4;
    n.nN = 8;
    n.iy = 16;
    n.lN = 128;
    n.kN = 256;
    n.jN = 512;
    n.nF = 1024;
    n.iN = 2048;
    n.lF = 1;
    n.jF = 4;
    n.kF = 8;
    n.fN = 64;
    n.dN = 128;
    n.cN = 512;
    n.eN = 1024;
    n.mF = 4096;
    n.hN = 4096;
    n.gN = 8192;
    n.VO =
        1;
    n.xq = 0;
    n.Rl = 1;
    n.lu = 2;
    n.Pl = 3;
    n.wq = 4;
    n.vq = 5;
    n.Ql = 6;
    n.ZO = 7;
    n.ry = 203;
    n.mP = 37;
    n.yP = 39;
    n.BP = 38;
    n.jP = 40;
    n.Hf = 200;
    n.Dn = 201;
    n.Sl = 202;
    n.oP = 96;
    n.pP = 97;
    n.qP = 98;
    n.rP = 99;
    n.sP = 100;
    n.tP = 101;
    n.uP = 102;
    n.vP = 103;
    n.wP = 104;
    n.xP = 105;
    n.zP = 83;
    n.iP = 68;
    n.kP = 69;
    n.CP = 88;
    n.lP = 123;
    n.AP = 16;
    n.hP = 17;
    n.nP = 18;
    n.CM = 0;
    n.xM = 1;
    n.yM = 2;
    n.zM = 3;
    n.AM = 4;
    n.BM = 5;
    n.Ix = 4;
    n.ZL = 128;
    n.ZD = 1;
    n.aE = 4;
    n.RL = 65536;
    n.qt = 32768;
    n.bE = 1048576;
    n.$D = 8388608;
    n.zi = 16777216;
    n.QL = 33554432;
    n.YD = 67108864;
    n.qd = 10;
    n.fy = 592880741;
    n.dk = 1770410840;
    ka.loadApplication = ib;
    ka.loadInfo =
        td;
    n.prototype = {
        tJ: function() {
            var a = this.oo.v();
            0 > this.tr && (this.tr = a);
            a != this.tr && (this.oo.nD(!0), a = this.oo.Ob(), window.open(this.sr + a, "_self"));
            this.no = 25
        },
        load: function() {
            this.IJ = this.file.s();
            this.Tq = 1;
            this.Fr = new F;
            var a = this.file.v();
            this.Fr.getFile(this.path.substring(0, this.path.length - 1) + this.Tq.toString(), ib, a)
        },
        oJ: function() {
            this.Tq++;
            if (this.Tq > this.IJ) {
                var a = (new l(this.Fr.ud, "content")).file("Application.ccj").$y();
                this.Fr = null;
                this.file = new F;
                this.file.QK(a);
                this.digest();
                this.tx()
            } else a =
                this.file.v(), this.Fr.getFile(this.path.substring(0, this.path.length - 1) + this.Tq.toString(), ib, a)
        },
        digest: function() {
            this.file.seek(0);
            var a = this.file.MC(4);
            this.td = !1;
            80 == a[0] && 65 == a[1] && 77 == a[2] && 85 == a[3] && (this.td = !0);
            this.file.nD(this.td);
            this.file.wa(8);
            this.file.wa(4);
            this.tc = new Gd;
            this.ha = new Bd(this);
            this.Vb = new Cd(this);
            this.Ve = new Dd(this);
            this.wc = new ba(this);
            for (var b, c = 0; 32639 != c;)
                if (c = this.file.s(), this.file.s(), b = this.file.v(), 0 != b) {
                    a = this.file.R + b;
                    switch (c) {
                        case 8739:
                            this.nJ();
                            this.lv =
                                Array(this.Qf);
                            this.wA = Array(this.Qf);
                            this.vA = Array(this.Qf);
                            this.mv = Array(this.Qf);
                            for (b = 0; b < this.Qf; b++) this.mv[b] = null;
                            break;
                        case 8773:
                            this.Ia = this.file.v();
                            this.file.v();
                            this.file.v();
                            this.file.s();
                            this.file.s();
                            break;
                        case 8740:
                            this.appName = this.file.Ob();
                            break;
                        case 8774:
                            this.file.v();
                            break;
                        case 8750:
                            this.file.Ob();
                            break;
                        case 8782:
                            this.aw = this.file.Ob();
                            break;
                        case 8754:
                            this.sJ();
                            break;
                        case 8755:
                            this.rJ();
                            break;
                        case 8745:
                        case 8767:
                            this.Zq = new Sa(this);
                            this.Zq.AH(this.file);
                            this.tc.hi(this.file);
                            break;
                        case 8747:
                            this.pJ(b);
                            break;
                        case 8778:
                            this.Qo = this.file.v();
                            this.xC = this.file.v();
                            this.yC = this.file.v();
                            this.AC = this.file.v();
                            this.BC = this.file.v();
                            this.zC = this.file.kd();
                            this.Xk = this.file.v(); - 1 != this.Xk && (this.file.cL(4), this.Xk = this.file.kd());
                            this.ls = this.file.v();
                            this.Wv = !0;
                            break;
                        case 13107:
                            this.lv[this.gm] = this.file.R;
                            for (var d = 0; 32639 != d;)
                                if (d = this.file.s(), this.file.s(), b = this.file.v(), 0 != b) {
                                    var e = this.file.R + b;
                                    switch (d) {
                                        case 13108:
                                            0 == this.gm && (this.file.wa(8), this.file.kd());
                                            break;
                                        case 13110:
                                            this.mv[this.gm] =
                                                this.file.Ob();
                                            break;
                                        case 13129:
                                            this.wA[this.gm] = this.file.v();
                                            this.vA[this.gm] = this.file.v();
                                            break;
                                        case 13128:
                                            var f = b / 6;
                                            for (b = 0; b < f; b++) {
                                                var g = this.file.s();
                                                this.file.wa(4);
                                                0 != g && (this.Lb[g] = 1, this.me = Math.max(this.me, g + 1))
                                            }
                                    }
                                    this.file.seek(e)
                                } this.gm++;
                            break;
                        case 8760:
                            d = this.file.v();
                            this.sk = Array(d);
                            for (b = 0; b < d; b++) this.sk[b] = new ud(this), this.sk[b].hi();
                            break;
                        case 26214:
                            this.ha.hi(this.file);
                            break;
                        case 26215:
                            this.Vb.hi(this.file);
                            break;
                        case 26216:
                            this.Ve.hi(this.file)
                    }
                    this.file.seek(a)
                } this.context =
                new Fa(this.canvas);
            this.wc.WK(0 != (this.bo & n.nF));
            null == this.Ga && (this.we = new Ca)
        },
        hD: function(a, b, c, d, e, f) {
            this.Ga = a;
            this.Uk = c;
            this.we = d;
            this.ux = b;
            this.Kw = e;
            this.Jw = f
        },
        OI: function() {
            this.sg = !1;
            this.cD = 0;
            this.IK = this.JK = 1;
            this.LK = this.KK = this.sa / 2;
            this.NK = this.MK = this.Aa / 2
        },
        Zs: function() {
            window.setTimeout(Za.bind(this), 20)
        },
        tx: function() {
            (this.rr = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent)) && 0 < this.Ve.Hb && (this.Ue = new Va(this), this.Ue.wJ());
            this.Nm();
            this.Xc = Array(n.ry);
            var a;
            for (a = 0; a < n.ry; a++) this.Xc[a] = !1;
            this.canvas.Ub = this;
            if (null == this.Ga) {
                var b = this;
                window.addEventListener("keypress", function(a) {
                    b.QH(a)
                }, !1);
                window.addEventListener("keydown", function(a) {
                    b.$z(a)
                }, !1);
                window.addEventListener("keyup", function(a) {
                    b.aA(a)
                }, !1);
                window.addEventListener("blur", function() {
                    b.hasFocus = !1
                }, !1);
                window.addEventListener("focus", function() {
                    b.hasFocus = !0
                }, !1);
                if (window !== window.top) try {
                    var c = window.top;
                    c.addEventListener("focus", function() {
                        b.hasFocus = !0;
                        b.canvas.focus()
                    });
                    c.addEventListener("blur", function() {
                        b.hasFocus = !1
                    })
                } catch (d) {}
                window.addEventListener("resize", function() {
                    b.Nm()
                }, !1);
                document.addEventListener("blur", function() {
                    b.hasFocus = !1
                }, !1);
                document.addEventListener("focus", function() {
                    b.hasFocus = !0
                }, !1);
                document.addEventListener("fullscreenchange", function() {
                    b.fullScreen = document.hQ;
                    b.Nm()
                }, !1);
                document.addEventListener("mozfullscreenchange", function() {
                    b.fullScreen = document.mozFullScreen;
                    b.Nm()
                }, !1);
                document.addEventListener("webkitfullscreenchange",
                    function() {
                        b.fullScreen = document.webkitIsFullScreen;
                        b.Nm()
                    }, !1);
                this.canvas.addEventListener("mousemove", function(a) {
                    b.Tr(a, b.canvas);
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("mousedown", function(a) {
                    b.GB(a);
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("mouseup", function(a) {
                    b.IB(a);
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("mouseout", function(a) {
                    b.HB(a);
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("click",
                    function(a) {
                        a.preventDefault && a.preventDefault()
                    }, !1);
                this.canvas.addEventListener("dblclick", function(a) {
                    a.preventDefault && a.preventDefault()
                }, !1);
                this.canvas.addEventListener("contextmenu", function(a) {
                    a.preventDefault && a.preventDefault()
                }, !1);
                a = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
                document.attachEvent ? document.attachEvent("on" + a, function(a) {
                    b.JB(a)
                }) : document.addEventListener && document.addEventListener(a, function(a) {
                    b.JB(a)
                }, !1);
                document.onselectstart = function() {
                    return !1
                };
                this.canvas.onselectstart = function(a) {
                    a.preventDefault && a.preventDefault();
                    return !1
                };
                this.Ij = this.$I();
                this.Bf = new P;
                this.Cf = Array(n.qd);
                this.Ri = Array(n.qd);
                this.en = Array(n.qd);
                this.lh = Array(n.qd);
                this.mh = Array(n.qd);
                for (a = 0; a < n.qd; a++) this.Cf[a] = n.dk, this.lh[a] = 0, this.mh[a] = 0, this.Ri[a] = !1, this.en[a] = 0;
                this.Ij && (this.canvas.addEventListener("touchstart", function(a) {
                    b.et(a);
                    a.preventDefault && a.preventDefault()
                }, !1), this.canvas.addEventListener("touchmove", function(a) {
                        b.KD(a);
                        a.preventDefault && a.preventDefault()
                    },
                    !1), this.canvas.addEventListener("touchend", function(a) {
                    b.vp(a);
                    a.preventDefault && a.preventDefault()
                }, !1), this.canvas.addEventListener("touchcancel", function(a) {
                    b.vp(a);
                    a.preventDefault && a.preventDefault()
                }, !1));
                window.focus();
                this.Zs()
            } else
                for (this.Ij = this.Ga.Ij, this.Bf = new P, this.Cf = Array(n.qd), this.Ri = Array(n.qd), this.en = Array(n.qd), this.lh = Array(n.qd), this.mh = Array(n.qd), a = 0; a < n.qd; a++) this.Cf[a] = n.dk, this.lh[a] = 0, this.mh[a] = 0, this.Ri[a] = !1, this.en[a] = 0;
            this.hb = this.Mj = this.Kj = 0;
            this.Fe = -2;
            this.H =
                new k(this)
        },
        Nm: function() {
            var a = this.sa,
                b = this.Aa,
                c, d;
            this.fullScreen || this.bo & n.iy ? (c = window.innerWidth, d = window.innerHeight, document.documentElement.style.overflow = "hidden", document.body.scroll = "no") : (c = a, d = b);
            c /= a;
            d /= b;
            if (this.Ia & n.ZD || this.bo & n.iy && this.bo & n.oF) c = d = Math.min(c, d);
            if (c != this.rc || d != this.sc) this.rc = c, this.sc = d, this.canvas.width = Math.floor(this.rc * a), this.canvas.height = Math.floor(this.sc * b), this.context.kD(this.rc, this.sc);
            this.H && this.H.Oi()
        },
        $I: function() {
            var a = "Android;webOS;iPhone;iPad;iPod;Blackberry;Windows Phone;Touch".split(";"),
                b = navigator.userAgent,
                c;
            for (c in a)
                if (0 <= b.indexOf(a[c])) return !0;
            return !1
        },
        Vi: function(a) {
            this.Vq.NC(a);
            this.Oh++
        },
        Fn: function(a) {
            this.Pn.add(a);
            this.Ph++;
            this.Jg = !0
        },
        tp: function() {
            this.sr && (this.no--, 0 > this.no && (this.no = 1E9, this.oo = new F, this.oo.getFile(this.sr + "info.dat", td)));
            this.od = (new Date).getTime();
            if (this.cK(!1)) {
                if (this.Jg) {
                    if (null == this.ii) {
                        var a = this.Ag;
                        this.Wv ? (this.ii = 0 == this.Qo ? new vd(this) : new xd(this), 0 == this.Qo && -1 != this.Xk && (a = this.Xk)) : this.ii = new wd(this);
                        this.CC = !1;
                        this.fx = !0;
                        null == this.Ga && (this.frame.zr ? this.context.Kq(0, 0, this.canvas.width, this.canvas.height) : this.context.Dc(0, 0, this.sa, this.Aa, a), this.Zs());
                        return
                    }
                    if (null != this.ii && 0 == this.CC) {
                        this.CC = this.ii.load();
                        null == this.Ga && this.Zs();
                        return
                    }
                    for (; 0 < this.Pn.size() && this.Vq.size() < this.GH;) a = this.Pn.get(0), this.Vq.add(a), this.Pn.Yo(0), a.$u();
                    this.wc.IH();
                    a = !1;
                    0 == this.Pn.size() && 0 == this.Vq.size() && (a = !0);
                    null == this.ii || 0 == (this.Ia & n.zi) && 0 == (this.frame.mm & I.yF) || (this.fx || (this.ii.reset(), this.fx = !0), this.ii.step(),
                        a = this.ii.Iv());
                    a && (this.fx = !1, this.H.resume(), this.H.Hh(), this.Jg = !1, this.ha.yf(), this.Ve.yf(), this.Vb.yf(), this.Oh = this.Ph = 0, this.Cu && (this.Cu = !1, 0 != this.H.av() ? this.hb = n.vq : (this.hb = n.Pl, this.ED(this.gg), this.gg = null)));
                    null == this.Ga && this.Zs()
                } else null == this.Ga && (null == this.pd ? (this.context.ex(0 != (this.Ia & n.aE)), this.ms ? this.context.xj(this.ms, 0, 0, this.sa, this.Aa, 0, 0) : this.frame.zr ? this.context.Kq(0, 0, this.sa, this.Aa) : this.context.Dc(0, 0, this.sa, this.Aa, this.Ag), a = this.context.Ra, this.sg && (bRestore = !0, a.save(), a.translate(this.KK, this.MK), 0 != this.cD && a.rotate(.0174532925 * -this.cD), a.scale(Math.max(.001, this.IK), Math.max(.001, this.JK)), a.translate(-this.LK, -this.NK)), this.we.Eb(this.context, 0, 0), this.sg && a.restore(), this.Sh && this.Ca.Eb(this.context), this.Cx && (this.Cx--, this.kt || (a = new za, a.Rq(), a.lc = 16, this.kt = new na(this, this.sa, 30), this.kt.oB(16711680), this.kt.Rr(window.FusionVersion, p.Sj | p.Ai, null, 16777215, a, 1, 10526880)), this.kt.Eb(this.context, 0, 0, 0, 0))) : (this.context.ex(), this.context.xj(this.pd,
                    0, 0, this.sa, this.Aa, 0, 0)), 0 != (this.co & n.mF) && window.requestAnimationFrame ? window.requestAnimationFrame(Za) : (a = (new Date).getTime() - this.od, a = Math.max(1E3 / this.zA - a, 1), window.setTimeout(Za, a)));
                return !0
            }
            this.fA();
            return !1
        },
        bA: function(a, b, c, d) {
            this.Jg || (null == this.pd ? (d || this.context.Dc(b, c, this.Kw, this.Jw, this.Ag), this.context.clip(b, c, this.Kw, this.Jw), this.we.Eb(this.context, 0, 0), this.context.rL()) : (this.context.ex(), this.context.xj(this.pd, b, c, this.sa, this.Aa, 0, 0)))
        },
        gH: function() {
            0 == (this.Ia & n.bE) &&
                (this.hasFocus ? this.Du && (this.H.resume(), this.Du = !1) : (this.H.pause(this.co & n.kF), this.Du = !0))
        },
        cK: function(a) {
            this.gH();
            var b = !0,
                c = !0;
            do switch (this.hb) {
                case n.xq:
                    if (this.MI(), this.Ib = this.ux, this.hb = 1, this.cJ(), a) {
                        b = !1;
                        break
                    }
                case n.Rl:
                    this.hL();
                    break;
                case n.lu:
                    0 == this.xJ() ? (this.UH(), this.hb != n.Ql && this.hb != n.xq || this.Un()) : b = !1;
                    break;
                case n.Pl:
                    this.H.av();
                    0 != this.H.sb ? this.fL() ? this.hb = n.wq : this.Un() : b = !1;
                    break;
                case n.wq:
                    0 == this.yJ() ? (this.gA(), this.hb != n.Ql && this.hb != n.xq || this.Un()) : b = !1;
                    break;
                case n.vq:
                    this.Un();
                    break;
                default:
                    b = !1
            }
            while (1 == b);
            this.hb == n.Ql && (c = !1);
            return c
        },
        fA: function() {
            null != this.wc && this.wc.bt()
        },
        hL: function() {
            this.Ib != this.Fe && (this.frame = new I(this), this.frame.qJ(this.Ib));
            this.Ag = this.frame.dB;
            this.Fe = this.Ib;
            this.frame.dj = this.frame.ej = 0;
            this.frame.Nv = this.frame.Ov = 0;
            this.frame.aD = !1;
            this.OI();
            var a;
            null != this.Ga ? this.ig = this.hg = 0 : (this.hg = this.sa / 2 - this.frame.qo / 2, this.ig = this.Aa / 2 - this.frame.po / 2);
            for (a = 0; a < this.frame.oc; a++) this.frame.Za[a].BH(this.hg, this.ig);
            this.frame.Yb & I.LF && (document.title = this.frame.xA);
            this.ms = null;
            this.frame.Yb & I.MF && (this.ms = this.gg);
            this.frame.Yb & I.NF && (this.frame.zr = !0);
            this.H.SK(this.frame);
            this.H.NI(null != this.frame.Wn);
            this.hb = n.Pl;
            null != this.frame.Wn ? this.Jg ? this.Cu = !0 : 0 != this.H.av() ? this.hb = n.vq : (this.hb = n.Pl, this.ED(this.gg), this.gg = null) : this.gg = null;
            this.Jg ? this.H.pause(!0) : this.H.Hh()
        },
        SC: function() {
            null != this.Ga ? this.ig = this.hg = 0 : (this.hg = this.sa / 2 - this.frame.qo / 2, this.ig = this.Aa / 2 - this.frame.po / 2);
            var a;
            for (a = 0; a <
                this.frame.oc; a++) this.frame.Za[a].EK(this.hg, this.ig)
        },
        Un: function() {
            var a;
            a = this.H.dJ(!1);
            if (0 != (this.co & n.jF)) this.hb = n.Ql;
            else switch (p.SF(a)) {
                case 1:
                    this.Ib = this.Fe + 1;
                    1 == this.Qo && this.Ib == this.ls && this.Ib++;
                    this.hb = n.Rl;
                    this.Ib >= this.Qf && (this.hb = n.Ql);
                    break;
                case 2:
                    this.Ib = Math.max(0, this.Fe - 1);
                    1 == this.Qo && this.Ib == this.ls && (0 == this.Ib ? this.Ib = this.Fe : this.Ib--);
                    this.hb = n.Rl;
                    break;
                case 3:
                    this.hb = n.Rl;
                    0 != (p.Rp(a) & 32768) ? (this.Ib = p.Rp(a) & 32767, this.Ib >= this.Qf && (this.Ib = this.Qf - 1), 0 > this.Ib && (this.Ib =
                        0)) : p.Rp(a) < this.Zn ? (this.Ib = this.Yn[p.Rp(a)], -1 == this.Ib && (this.Ib = this.Fe + 1)) : this.Ib = this.Fe + 1;
                    break;
                case 4:
                    this.hb = n.xq;
                    this.Ib = this.ux;
                    break;
                default:
                    this.hb = n.Ql
            }
            this.hb == n.Rl && (0 > this.Ib || this.Ib >= this.Qf) && (this.hb = this.Fe);
            if (this.hb != n.Rl || this.Ib != this.Fe) {
                for (a = 0; a < this.frame.oc; a++) this.frame.Za[a].Sz();
                this.frame = null;
                this.Fe = -1
            }
        },
        uv: function() {
            null == this.yx && (this.yx = new $d(this));
            return this.yx
        },
        ED: function(a) {
            var b, c, d = this.frame.Wn;
            if (null != d) {
                b = document.createElement("canvas");
                b.width =
                    this.sa;
                b.height = this.Aa;
                c = document.createElement("canvas");
                c.width = this.sa;
                c.height = this.Aa;
                var e = new Fa(c);
                e.Dc(0, 0, this.sa, this.Aa, this.Ag);
                this.we.Eb(e, 0, 0);
                e = new Fa(b);
                0 != (d.xp & sa.yq) ? e.Dc(0, 0, this.sa, this.Aa, d.wp) : (e.Dc(0, 0, this.sa, this.Aa, this.yA), null != a && e.xj(a, 0, 0, a.width, a.height, 0, 0));
                this.pd = document.createElement("canvas");
                this.pd.width = this.sa;
                this.pd.height = this.Aa;
                this.pd.getContext("2d").drawImage(b, 0, 0);
                this.transition = this.uv().am(d, this.pd, b, c);
                if (null != this.transition) return this.hb =
                    n.lu, !0
            }
            this.pd = null;
            this.hb = n.Pl;
            this.H.Fz();
            return !1
        },
        xJ: function() {
            if (null != this.transition) {
                if (this.transition.vr()) return !1;
                this.transition.Sb(z.nu);
                return !0
            }
            return !1
        },
        UH: function() {
            null != this.transition && (this.transition.end(), this.pd = this.transition = null, this.hb == n.lu && (this.hb = n.Pl), this.H.Fz());
            return !0
        },
        fL: function() {
            var a, b, c = this.frame.gv;
            if (null != c) {
                a = document.createElement("canvas");
                a.width = this.sa;
                a.height = this.Aa;
                b = document.createElement("canvas");
                b.width = this.sa;
                b.height = this.Aa;
                var d = new Fa(a);
                d.Dc(0, 0, this.sa, this.Aa, this.Ag);
                this.we.Eb(d, 0, 0);
                d = new Fa(b);
                0 != (c.xp & sa.yq) ? d.Dc(0, 0, this.sa, this.Aa, c.wp) : d.Dc(0, 0, this.sa, this.Aa, 0);
                this.pd = document.createElement("canvas");
                this.pd.width = this.sa;
                this.pd.height = this.Aa;
                this.pd.getContext("2d").drawImage(a, 0, 0);
                this.transition = this.uv().am(c, this.pd, a, b);
                if (null != this.transition) return this.hb = n.wq, !0
            }
            this.pd = null;
            return !1
        },
        yJ: function() {
            if (null != this.transition) {
                if (this.transition.vr()) return this.gA(), !1;
                this.transition.Sb(z.zq)
            }
            return !0
        },
        gA: function() {
            null != this.transition && (this.gg = this.transition.m, this.transition.end(), this.pd = this.transition = null, this.hb == n.wq && (this.hb = n.vq));
            return !0
        },
        nJ: function() {
            this.file.wa(4);
            this.bo = this.file.s();
            this.co = this.file.s();
            this.file.s();
            this.file.s();
            this.sa = this.file.s();
            this.Aa = this.file.s();
            this.BA = this.file.v();
            this.AA = this.file.v();
            var a, b;
            this.uC = Array(n.mg);
            for (a = 0; a < n.mg; a++) this.uC[a] = this.file.s();
            this.Lw = Array(n.mg * n.un);
            for (a = 0; a < n.mg; a++)
                for (b = 0; b < n.un; b++) this.Lw[a * n.un + b] = this.file.s();
            this.yA = this.file.kd();
            this.Qf = this.file.v();
            this.zA = this.file.v();
            this.file.wa(1);
            this.file.wa(3)
        },
        sJ: function() {
            this.vm = this.file.s();
            this.xv = Array(this.vm);
            this.PA = Array(this.vm);
            var a;
            for (a = 0; a < this.vm; a++) this.xv[a] = this.file.v();
            this.file.qK(this.PA)
        },
        rJ: function() {
            this.Co = this.file.v();
            this.wv = Array(this.Co);
            var a;
            for (a = 0; a < this.Co; a++) this.wv[a] = this.file.Ob()
        },
        pJ: function(a) {
            this.Zn = a / 2;
            this.Yn = Array(this.Zn);
            for (a = 0; a < this.Zn; a++) this.Yn[a] = this.file.s()
        },
        wF: function(a) {
            return null == this.Yn ||
                -1 == a || a >= this.Zn ? -1 : this.Yn[a]
        },
        pv: function(a) {
            if (this.yv) {
                var b;
                for (b = 0; b < this.yv.size(); b++)
                    if (gFont = this.yv.get(b), gFont.nH(a)) return gFont
            }
            return a
        },
        cJ: function() {
            this.Ki = null
        },
        MI: function() {
            var a;
            if (null == this.Ga || null != this.Ga && 0 == (this.Uk & R.mE))
                for (this.ro = Array(n.mg), a = 0; a < n.mg; a++) this.ro[a] = this.AA ^ 4294967295;
            else this.ro = null;
            if (null == this.Ga || null != this.Ga && 0 == (this.Uk & R.oE))
                for (this.pp = Array(n.mg), a = 0; a < n.mg; a++) this.pp[a] = this.BA ^ 4294967295;
            else this.pp = null;
            this.vC = Array(n.mg);
            for (a =
                0; a < n.mg; a++) this.vC[a] = "";
            if (null == this.Ga || null != this.Ga && 0 == (this.Uk & R.Qx))
                for (this.ao = Array(this.vm), a = 0; a < this.vm; a++) this.ao[a] = this.xv[a];
            else this.ao = null;
            if (null == this.Ga || null != this.Ga && 0 == (this.Uk & R.Qx))
                for (this.$n = Array(this.Co), a = 0; a < this.Co; a++) this.$n[a] = this.wv[a];
            else this.$n = null
        },
        FA: function() {
            for (var a = this; null == a.ro;) a = this.Ga;
            return a.ro
        },
        JA: function() {
            for (var a = this; null == a.pp;) a = this.Ga;
            return a.pp
        },
        mI: function() {
            for (var a = this; null != a.Ga && 0 != (a.Uk & R.nE);) a = a.Ga;
            return a.Lw
        },
        sI: function() {
            for (var a = this; null == a.ao;) a = a.Ga;
            return a.ao
        },
        rI: function() {
            for (var a = this; null == a.$n;) a = a.Ga;
            return a.$n
        },
        qz: function(a) {
            var b = this.sI();
            if (0 > a || 1E3 < a) return null;
            var c = b.length;
            if (a + 1 > c)
                for (; c < a + 1; c++) b.push(0);
            return b
        },
        ov: function(a) {
            var b = this.qz(a);
            return null != b ? b[a] : 0
        },
        UK: function(a, b) {
            var c = this.qz(a);
            null != c && (c[a] = b)
        },
        pz: function(a) {
            var b = this.rI();
            if (0 > a || 1E3 < a) return null;
            var c = b.length;
            if (a + 1 > c)
                for (; c < a + 1; c++) b.push("");
            return b
        },
        DA: function(a) {
            var b = this.pz(a);
            return null !=
                b ? b[a] : ""
        },
        TK: function(a, b) {
            var c = this.pz(a);
            null != c && (c[a] = b)
        },
        QH: function(a) {
            a && (this.SD.charCodeAt(this.zp) == a.charCode ? (this.zp++, this.zp == this.SD.length && (this.Cx = 250, this.zp = 0)) : this.zp = 0)
        },
        $z: function(a) {
            if (a) {
                var b = a.keyCode;
                this.Dk = this.Xc[b] = !0;
                null != this.H && null != this.H.i && this.H.i.OJ(b);
                for (b = 0; b < this.Jb.length; b++) this.Jb[b].$z(a)
            }
        },
        aA: function(a) {
            if (a) {
                this.Xc[a.keyCode] = !1;
                var b;
                for (b = 0; b < this.Jb.length; b++) this.Jb[b].aA(a)
            }
        },
        Ws: function(a, b) {
            this.Kj = a;
            this.Mj = b
        },
        Tr: function(a, b, c) {
            a.pageX ?
                (this.Wf = a.pageX, this.Xf = a.pageY) : a.clientY && (this.Wf = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, this.Xf = a.clientY + document.body.scrollTop + document.documentElement.scrollTop);
            for (var d = 0, e = 0, f = b; f && "BODY" != f.tagName;) d += f.offsetTop, e += f.offsetLeft, f = f.offsetParent;
            this.Wf -= e + this.Kj;
            this.Xf -= d + this.Mj;
            this.Wf = Math.floor(this.Wf / this.rc);
            this.Xf = Math.floor(this.Xf / this.sc);
            null != this.H && null != this.H.i && this.H.i.rC();
            for (d = 0; d < this.Jb.length; d++) this.Jb[d].Tr(a, b);
            this.Ij ||
                305419896 == c || this.KD(new Ua(a.pageX, a.pageY, this.canvas))
        },
        IB: function(a) {
            var b;
            if (a.which) switch (a.which) {
                case 2:
                    b = n.Dn;
                    break;
                case 3:
                    b = n.Sl;
                    break;
                default:
                    b = n.Hf
            } else switch (a.button) {
                case 2:
                    b = n.Sl;
                    break;
                case 4:
                    b = n.Dn;
                    break;
                default:
                    b = n.Hf
            }
            this.Tr(a, this.canvas, 305419896);
            this.Xc[b] = !1;
            for (b = 0; b < this.Jb.length; b++) this.Jb[b].IB(a);
            this.Ij || this.vp(new Ua(a.pageX, a.pageY, this.canvas))
        },
        GB: function(a) {
            var b;
            if (a.which) switch (a.which) {
                case 2:
                    b = n.Dn;
                    break;
                case 3:
                    b = n.Sl;
                    break;
                default:
                    b = n.Hf
            } else switch (a.button) {
                case 2:
                    b =
                        n.Sl;
                    break;
                case 4:
                    b = n.Dn;
                    break;
                default:
                    b = n.Hf
            }
            this.Tr(a, this.canvas, 305419896);
            this.Dk = !0;
            this.Xc[b] = !0;
            null != this.H && null != this.H.i && this.H.i.qC(b - n.Hf, 0 == a.detail % 2 ? 2 : 1);
            for (b = 0; b < this.Jb.length; b++) this.Jb[b].GB(a);
            this.Ij || this.et(new Ua(a.pageX, a.pageY, this.canvas))
        },
        HB: function(a) {
            this.Xc[n.Hf] = !1;
            this.Xc[n.Dn] = !1;
            this.Xc[n.Sl] = !1;
            var b;
            for (b = 0; b < this.Jb.length; b++) this.Jb[b].HB(a);
            this.Ij || this.vp(new Ua(a.pageX, a.pageY, this.canvas))
        },
        JB: function(a) {
            this.Tz = "undefined" != typeof a.wheelDelta ?
                a.wheelDelta / 40 : -a.detail;
            null != this.H && null != this.H.i && this.H.PJ(this.Tz)
        },
        et: function(a) {
            !this.rr && this.Ue && (this.Ue.Vk(), this.Ue = null);
            if (null != this.Cf) {
                var b, c;
                for (b = 0; b < a.changedTouches.length; b++) {
                    var d = a.changedTouches[b];
                    for (c = 0; c < n.qd; c++)
                        if (this.Cf[c] == n.dk) {
                            this.Cf[c] = d.identifier;
                            this.Ri[c] = !1;
                            for (o = 0; o < this.Bf.size(); o++)
                                if (this.Bf.get(o).oL(d)) {
                                    this.Ri[c] = !0;
                                    this.en[c] = o;
                                    break
                                } if (!this.Ri[c] && (this.lh[c] = this.eo(d), this.mh[c] = this.fo(d), this.wo == n.dk && d.identifier != n.fy))
                                for (this.wo =
                                    c, this.Wf = this.lh[c], this.Xf = this.mh[c], this.Dk = !0, this.Xc[n.Hf] = !0, null != this.H && null != this.H.i && this.H.i.qC(0, 1), c = 0; c < this.Jb.length; c++) this.Jb[c].et(a);
                            break
                        }
                }
            }
        },
        KD: function(a) {
            if (null != this.Cf) {
                var b, c, d;
                for (b = 0; b < a.changedTouches.length; b++) {
                    var e = a.changedTouches[b];
                    for (c = 0; c < n.qd; c++)
                        if (this.Cf[c] == e.identifier) {
                            if (this.Ri[c]) this.Bf.get(this.en[c]).LD(e);
                            else {
                                for (d = 0; d < this.Bf.size(); d++) this.Bf.get(d).LD(e);
                                this.lh[c] = this.eo(e);
                                this.mh[c] = this.fo(e)
                            }
                            if (this.wo == c)
                                for (this.Wf = this.lh[c],
                                    this.Xf = this.mh[c], null != this.H && null != this.H.i && this.H.i.rC(), c = 0; c < this.Jb.length; c++) this.Jb[c].et(a, null);
                            break
                        }
                }
            }
        },
        vp: function(a) {
            this.rr && this.Ue && (this.Ue.Vk(), this.Ue = null);
            if (null != this.Cf) {
                var b, c, d;
                for (b = 0; b < a.changedTouches.length; b++) {
                    var e = a.changedTouches[b];
                    for (c = 0; c < n.qd; c++)
                        if (this.Cf[c] == e.identifier) {
                            this.Cf[c] = n.dk;
                            if (this.Ri[c]) this.Bf.get(this.en[c]).ID(e);
                            else {
                                for (d = 0; d < this.Bf.size(); d++) this.Bf.get(d).ID(e);
                                this.lh[c] = this.eo(e);
                                this.mh[c] = this.fo(e)
                            }
                            if (c == this.wo)
                                for (this.Wf =
                                    this.lh[c], this.Xf = this.mh[c], this.wo = n.dk, this.Xc[n.Hf] = !1, d = 0; d < this.Jb.length; d++) this.Jb[d].vp(a)
                        }
                }
            }
        },
        eo: function(a) {
            var b = a.pageX;
            for (a = a.target; a && "BODY" != a.tagName;) b -= a.offsetLeft, a = a.offsetParent;
            return Math.floor((b - this.Kj) / this.rc)
        },
        fo: function(a) {
            var b = a.pageY;
            for (a = a.target; a && "BODY" != a.tagName;) b -= a.offsetTop, a = a.offsetParent;
            return Math.floor((b - this.Mj) / this.sc)
        },
        pI: function(a) {
            if (null != this.sk) {
                var b;
                b = a.lastIndexOf("\\");
                0 > b && (b = a.lastIndexOf("/"));
                0 <= b && (a = a.substring(b + 1));
                for (b =
                    0; b < this.sk.length; b++)
                    if (this.sk[b].path == a) return this.sk[b]
            }
            return null
        },
        $s: function(a) {
            this.Pz = a;
            this.canvas.style.cursor = 0 <= this.Pz ? this.cursor : "none"
        },
        FD: function(a, b) {
            null == this.Ca && (this.Ca = new t(this), this.Ca.gB(), this.Ca.reset(b), this.Sh = 1, 0 > this.Bf.indexOf(this.Ca) && this.Bf.add(this.Ca))
        },
        dL: function() {
            this.eL();
            this.Sh = 2
        },
        VH: function() {
            null != this.Ca && (1 == this.Sh && this.Bf.NC(this.Ca), this.Ca = null);
            2 == this.Sh && this.SH();
            this.Sh = 0
        },
        eL: function() {
            if (0 == this.En) {
                var a = this;
                window.DeviceMotionEvent &&
                    (ka.RJ = function(b) {
                        a.OG = b.acceleration.y / 9.780318;
                        a.PG = b.acceleration.x / 9.780318;
                        a.QG = b.acceleration.z / 9.780318;
                        a.ou = b.accelerationIncludingGravity.y / 9.780318;
                        a.pu = b.accelerationIncludingGravity.x / 9.780318;
                        a.NG = b.accelerationIncludingGravity.z / 9.780318
                    })
            }
            this.En++
        },
        SH: function() {
            this.En--;
            0 >= this.En && (ka.RJ = null, this.En = 0)
        },
        hr: function() {
            var a = 0; - .2 > this.ou && (a |= 4);
            .2 < this.ou && (a |= 8); - .2 > this.pu && (a |= 1);
            .2 < this.pu && (a |= 2);
            return a
        },
        cv: function(a) {
            if (a.yl) {
                null == this.Ue && (a.JD = 2);
                switch (a.JD) {
                    case 0:
                        0 <
                            a.fg && (a.fg -= 2, 0 > a.fg && (a.fg = 0, phase++));
                        break;
                    case 2:
                        128 > a.fg && (a.fg += 4, 128 <= a.fg && (a.fg = 128, a.dt = !0))
                }
                this.context.Dc(a.pe.left, a.pe.top, a.pe.right - a.pe.left, a.pe.bottom - a.pe.top, this.Ag, 0, 0);
                a.yl.Eb(this.context, a.pe.left, a.pe.top, E.We, a.fg);
                a.dt && (a.yl = null, a.pe = null, a.dn = null)
            } else if (a.dt = !0, null != this.Ue) {
                a.dn = new za;
                a.dn.Rq();
                a.dn.lc = 24;
                var b = a.dn.lc + 6;
                a.yl = new na(this, 120, b);
                var c = a.yl.measureText(this.aw, a.dn) + 64;
                a.yl.resize(c, b);
                a.yl.oB();
                a.yl.Rr(this.aw, p.Ai | p.Sj, null, 16776960, a.dn, 2,
                    0);
                a.pe = new Z;
                a.pe.left = this.sa / 2 - c / 2;
                a.pe.top = this.Aa / 2 - b / 2;
                a.pe.right = a.pe.left + c;
                a.pe.bottom = a.pe.top + b;
                a.fg = 128;
                a.JD = 0;
                a.dt = !1;
                this.context.Dc(0, 0, this.sa, this.Aa, this.Ag, 0, 0)
            }
            return a.dt
        }
    };
    I.LF = 1;
    I.yN = 2;
    I.MF = 4;
    I.py = 32;
    I.AN = 256;
    I.zN = 2048;
    I.Vc = 32768;
    I.NF = 131072;
    I.kn = 0;
    I.Yd = 1;
    I.qE = 1;
    I.rE = 2;
    I.Hl = 6;
    I.yF = 256;
    I.BF = 1;
    I.CF = 2;
    I.DF = 4;
    I.HF = 0;
    I.IF = 1;
    I.FF = 2;
    I.GF = 3;
    I.prototype = {
        qJ: function(a) {
            this.app.file.seek(this.app.lv[a]);
            this.Vn = new C(this.app);
            this.Gd = new Fd;
            this.Ar = new Z;
            a = 0;
            var b;
            for (this.Pr = -1; 32639 !=
                a;)
                if (a = this.app.file.s(), this.app.file.s(), b = this.app.file.v(), 0 != b) {
                    this.eK = this.app.file.R + b;
                    switch (a) {
                        case 13108:
                            this.Uv();
                            null != this.app.Ga && 0 != (this.app.Uk & R.lE) ? (this.qo = this.app.DH, this.po = this.app.EH) : (this.qo = Math.min(this.app.sa, this.ke), this.po = Math.min(this.app.Aa, this.Yc));
                            break;
                        case 13128:
                            var c = b / 6;
                            this.vo = Array(c);
                            this.Ad = Array(c);
                            this.Bd = Array(c);
                            for (b = this.me = 0; b < c; b++) this.vo[b] = this.app.file.s(), this.me = Math.max(this.me, this.vo[b]), this.Ad[b] = this.app.file.s(), this.Bd[b] = this.app.file.s();
                            this.me++;
                            break;
                        case 13130:
                            this.Ca = this.app.file.s();
                            this.mm = this.app.file.s();
                            break;
                        case 13122:
                            this.Ar.load(this.app.file);
                            break;
                        case 13124:
                            this.Pr = this.app.file.s();
                            break;
                        case 13127:
                            this.iB = this.app.file.v();
                            break;
                        case 13109:
                            this.xA = this.app.file.Ob();
                            break;
                        case 13115:
                            this.Wn = new sa;
                            this.Wn.load(this.app.file);
                            break;
                        case 13116:
                            this.gv = new sa;
                            this.gv.load(this.app.file);
                            break;
                        case 13121:
                            this.vJ();
                            break;
                        case 13125:
                            this.uJ();
                            break;
                        case 13112:
                            this.Gd.load(this.app);
                            break;
                        case 13117:
                            this.Vn.load(this.app),
                                this.Mg = this.Vn.Mg
                    }
                    this.app.file.seek(this.eK)
                } this.app.tc.yf();
            for (b = 0; b < this.Gd.Yf; b++) this.app.tc.Ej(this.Gd.EA(b).Uf);
            this.app.ha.yf();
            this.app.Ve.yf();
            this.app.Vb.yf();
            this.app.tc.load(this.app.file);
            this.app.tc.gc(this.app.ha, this.app.Vb);
            this.app.Ia & n.zi && (this.app.Vb.qp(), this.app.Ve.qp(), 0 == this.app.me && this.app.ha.qp());
            this.app.ha.load(this.app.file);
            this.app.Vb.load(this.app.file);
            this.Vn.XH(this.app.Ve);
            this.app.Ve.load();
            this.app.tc.DK();
            for (b = 0; b < this.Gd.Yf; b++) a = this.Gd.list[b], a.Cr >=
                v.Tb && this.app.tc.XK(a.Uf)
        },
        vJ: function() {
            this.oc = this.app.file.v();
            this.Za = Array(this.oc);
            var a;
            for (a = 0; a < this.oc; a++) this.Za[a] = new V(this.app), this.Za[a].load(this.app.file)
        },
        uJ: function() {
            var a;
            for (a = 0; a < this.oc; a++) this.Za[a].de = this.app.file.v(), this.Za[a].ee = this.app.file.v(), this.app.file.wa(12)
        },
        Uv: function() {
            this.ke = this.app.file.v();
            this.Yc = this.app.file.v();
            this.dB = this.app.file.kd();
            this.Yb = this.app.file.v()
        }
    };
    ba.cd = 32;
    ba.prototype = {
        SG: function(a) {
            null == this.mk && (this.mk = new P);
            this.mk.add(a)
        },
        IH: function() {
            if (null != this.mk && 0 < this.mk.size()) {
                var b = this;
                while (b.mk.size() > 0) {
                    (function(a) {
                        var decodePromise = b.context.decodeAudioData(a.response, function(c) {
                            a.buffer = c;
                            a.response = null
                        }, function(err) {
                            a.buffer = null;
                            a.response = null
                        });
                        if (decodePromise && typeof decodePromise.catch === "function") {
                            decodePromise.catch(function() {
                                a.buffer = null;
                                a.response = null
                            })
                        }
                    })(b.mk.get(0));
                    b.mk.Yo(0)
                }
                this.Xu = !1
            }
        },
        reset: function() {
            var a;
            for (a = 0; a < ba.cd; a++) this.In[a] = !1
        },
        play: function(a, b, c, d) {
            if (0 != this.cz) {
                var e = this.app.Ve.wI(a);
                if (null != e) {
                    0 == this.yu && (c = 0);
                    if (0 > c) {
                        for (a = 0; a < ba.cd && (null != this.ib[a] || 0 != this.In[a]); a++);
                        if (a == ba.cd)
                            for (a = 0; a < ba.cd && (0 != this.In[a] || null == this.ib[a] || 0 != this.ib[a].Ln); a++);
                        c = a;
                        0 <= c && c < ba.cd && (this.Ap[c] = this.lB)
                    }
                    if (!(0 > c || c >= ba.cd)) {
                        if (null != this.ib[c]) {
                            if (1 == this.ib[c].Ln) return;
                            this.ib[c] != e && (this.ib[c].stop(), this.ib[c] = null)
                        }
                        for (a = 0; a < ba.cd; a++) this.ib[a] == e && (this.ib[a].stop(), this.ib[a] = null);
                        this.ib[c] = e;
                        e.play(b, d, this.Ap[c])
                    }
                }
            }
        },
        WK: function(a) {
            this.yu = a
        },
        bJ: function() {
            var a;
            for (a = 0; a < ba.cd; a++) null != this.ib[a] && this.ib[a].aB() && this.app.Ve.Ej(this.ib[a].handle)
        },
        bt: function() {
            var a;
            for (a = 0; a < ba.cd; a++) null != this.ib[a] && (this.ib[a].stop(), this.ib[a] = null)
        },
        ZI: function(a) {
            var b;
            for (b = 0; b < ba.cd; b++)
                if (null != this.ib[b] && this.ib[b].handle == a) return this.ib[b].aB();
            return !1
        },
        pause: function() {
            var a;
            for (a = 0; a < ba.cd; a++) null != this.ib[a] && this.ib[a].pause()
        },
        resume: function() {
            var a;
            for (a = 0; a < ba.cd; a++) null != this.ib[a] && this.ib[a].resume()
        },
        $K: function(a, b) {
            0 > b && (b = 0);
            100 < b && (b = 100);
            0 <= a && a < ba.cd && (this.Ap[a] = b, null != this.ib[a] && this.ib[a].ZK(b))
        },
        iH: function() {
            var a;
            for (a = 0; a < ba.cd; a++) null != this.ib[a] && this.ib[a].hH() && (this.ib[a] = null)
        }
    };
    ud.prototype = {
        hi: function() {
            var a =
                this.app.file.s();
            this.path = this.app.file.Ob(a);
            a = this.path.lastIndexOf("\\");
            0 <= a && (this.path = this.path.substring(a + 1));
            this.length = this.app.file.v();
            this.offset = this.app.file.R;
            this.app.file.wa(this.length)
        },
        open: function() {
            return this.app.file.vg(this.offset, this.length)
        }
    };
    vd.prototype = {
        load: function() {
            return this.Kv
        },
        reset: function() {
            this.Cw = this.Oe = 0;
            this.Pq = 25
        },
        step: function() {
            switch (this.Oe) {
                case 0:
                    -1 != this.app.Xk ? this.context.Dc(0, 0, this.app.sa, this.app.Aa, this.app.Xk) : this.context.Kq(0, 0,
                        this.app.sa, this.app.Aa);
                    this.context.xj(this.Hg, this.wi - this.Hg.width / 2, this.xi - this.Hg.height / 2, this.Hg.width, this.Hg.height, 0, 0);
                    this.Oe++;
                    break;
                case 1:
                    this.angle = this.app.Oh / this.app.Ph * 2 * Math.PI;
                    this.dm(this.angle);
                    this.app.Oh == this.app.Ph && this.Oe++;
                    break;
                case 2:
                    0 < this.Pq && this.Pq--;
                    0 == this.Pq && this.Oe++;
                    break;
                case 3:
                    this.app.cv(this) && this.Oe++
            }
        },
        Iv: function() {
            return 4 == this.Oe
        },
        dm: function(a) {
            var b, c, d, e, f;
            for (b = this.Cw; b <= a; b += .005) {
                c = this.wi + Math.cos(b) * (this.wf - this.size);
                d = this.xi - Math.sin(b) *
                    (this.wf - this.size);
                e = this.wi + Math.cos(b) * this.wf;
                f = this.xi - Math.sin(b) * this.wf;
                this.context.Fd(c, d, e, f, this.color, 1, 0, 0);
                var g;
                for (g = 0; 3 > g; g++) c = this.wi + Math.cos(b) * (this.wf - this.size - g), d = this.xi - Math.sin(b) * (this.wf - this.size - g), e = this.wi + Math.cos(b) * (this.wf - this.size - g - 1), f = this.xi - Math.sin(b) * (this.wf - this.size - g - 1), this.context.Fd(c, d, e, f, this.color, 1, 0, 0), c = this.wi + Math.cos(b) * (this.wf + g), d = this.xi - Math.sin(b) * (this.wf + g), e = this.wi + Math.cos(b) * (this.wf + g + 1), f = this.xi - Math.sin(b) * (this.wf +
                    g + 1), this.context.Fd(c, d, e, f, this.color, 1, 0, 0)
            }
            this.Cw = a
        }
    };
    wd.prototype = {
        load: function() {
            return !0
        },
        reset: function() {
            this.ss = !1;
            this.Oe = 0;
            this.alpha = 128;
            this.position = 0
        },
        step: function() {
            if (this.app.Oh < this.app.Ph) switch (this.Oe) {
                case 0:
                    0 < this.alpha && (this.alpha -= 2, 0 >= this.alpha && (this.alpha = 0, this.Oe++))
            } else switch (this.Oe) {
                case 0:
                case 1:
                    this.Oe = 2;
                    break;
                case 2:
                    128 > this.alpha && (this.alpha += 4);
                    128 <= this.alpha && (this.alpha = 128, null == this.app.Ue ? this.ss = !0 : this.Oe++);
                    break;
                default:
                    this.ss = this.app.cv(this);
                    return
            }
            this.context.Dc(this.rect.left, this.rect.top, this.width, this.height, this.cH, E.We, this.alpha);
            this.context.Bs(this.rect.left, this.rect.top, this.width, this.height, this.borderColor, 1, E.We, this.alpha);
            this.position = this.app.Oh / this.app.Ph * (this.width - 2);
            this.context.Dc(this.rect.left + 1, this.rect.top + 1, this.position, this.height - 2, this.dH, E.We, this.alpha)
        },
        Iv: function() {
            return this.ss && this.app.Oh == this.app.Ph
        }
    };
    xd.prototype = {
        load: function() {
            this.step();
            return !this.C.Jg
        },
        reset: function() {
            this.C.H.mA();
            this.C.H.Lv();
            this.C.H.ot(!1);
            this.C.H.Mm(-1, !1);
            this.C.H.i.ht();
            this.C.H.er();
            this.C.H.nv();
            this.C.H.B.dj = this.C.H.B.Nv = this.C.H.hl = 0;
            this.C.H.B.ej = this.C.H.B.Ov = this.C.H.il = 0;
            this.C.SC();
            this.C.H.uu();
            this.C.H.Ev();
            this.C.H.Mm(-1, !1);
            this.C.H.Ow();
            this.C.H.Tu(!1);
            this.C.H.dv();
            this.C.H.Tv();
            this.C.H.i.Pw();
            this.C.H.i.Gq(this.C.H);
            this.C.H.fv();
            this.C.H.Hq();
            this.C.H.sb = 0;
            this.C.H.$m = 0;
            this.C.ui = !1;
            this.app.Jb.push(this.C);
            this.cm = 0
        },
        step: function() {
            this.C.ui || (this.iL && (this.C.ui = this.app.Oh == this.app.Ph),
                0 == this.C.tp() && (this.C.ui = !0), this.C.bA(this.context, this.Mc.x, this.Mc.y, !1));
            this.C.ui && this.app.Ue && this.app.cv(this)
        },
        Iv: function() {
            var a = this.C.ui;
            this.app.Ue && (a = !1);
            if (a) {
                if (0 < this.cm && (this.cm--, 0 < this.cm)) return !1;
                var b;
                for (b = 0; b < this.app.Jb.length; b++)
                    if (this.app.Jb[b] == this.C) {
                        this.app.Jb.splice(b, 1);
                        break
                    }
            }
            return a
        }
    };
    t.xc = 0;
    t.Tc = 1;
    t.Uc = 2;
    t.oy = -1;
    t.qd = 3;
    t.Di = 1;
    t.jg = 2;
    t.kg = 4;
    t.ny = 8;
    t.xN = 2147483648;
    t.JF = 70;
    t.NE = 60;
    t.LE = .5;
    t.prototype = {
        gB: function() {
            null == this.kc && (this.kc = Y.vg(this.app, "joyback.png"),
                this.yr = Y.vg(this.app, "joyfront.png"), this.Ld = Y.vg(this.app, "fire1U.png"), this.je = Y.vg(this.app, "fire2U.png"), this.rA = Y.vg(this.app, "fire1D.png"), this.sA = Y.vg(this.app, "fire2D.png"))
        },
        reset: function(a) {
            this.Oa = a;
            null != this.kc && 0 != this.kc.width ? this.iD() : this.Au = !0;
            this.Ig = this.$A ? t.JF * Math.PI / 180 : t.NE * Math.PI / 180
        },
        iD: function() {
            var a, b;
            a = this.app.sa;
            b = this.app.Aa;
            0 == (this.Oa & t.ny) ? (0 != (this.Oa & t.Di) && (this.bc[t.xc] = 16 + this.kc.width / 2, this.cc[t.xc] = b - 16 - this.kc.height / 2), 0 != (this.Oa & t.jg) && 0 != (this.Oa &
                t.kg) ? (this.bc[t.Tc] = a - this.Ld.width / 2 - 32, this.cc[t.Tc] = b - this.Ld.height / 2 - 16, this.bc[t.Uc] = a - this.je.width / 2 - 16, this.cc[t.Uc] = b - this.je.height / 2 - this.Ld.height - 24) : 0 != (this.Oa & t.jg) ? (this.bc[t.Tc] = a - this.Ld.width / 2 - 16, this.cc[t.Tc] = b - this.Ld.height / 2 - 16) : 0 != (this.Oa & t.kg) && (this.bc[t.Uc] = a - this.je.width / 2 - 16, this.cc[t.Uc] = b - this.je.height / 2 - 16)) : (0 != (this.Oa & t.Di) && (this.bc[t.xc] = a - 16 - this.kc.width / 2, this.cc[t.xc] = b - 16 - this.kc.height / 2), 0 != (this.Oa & t.jg) && 0 != (this.Oa & t.kg) ? (this.bc[t.Tc] = this.Ld.width /
                2 + 16 + 2 * this.je.width / 3, this.cc[t.Tc] = b - this.Ld.height / 2 - 16, this.bc[t.Uc] = this.je.width / 2 + 16, this.cc[t.Uc] = b - this.je.height / 2 - this.Ld.height - 24) : 0 != (this.Oa & t.jg) ? (this.bc[t.Tc] = this.Ld.width / 2 + 16, this.cc[t.Tc] = b - this.Ld.height / 2 - 16) : 0 != (this.Oa & t.kg) && (this.bc[t.Uc] = this.je.width / 2 + 16, this.cc[t.Uc] = b - this.je.height / 2 - 16))
        },
        ec: function(a, b) {
            0 != (a & t.Di) ? this.bc[t.xc] = b : 0 != (a & t.jg) ? this.bc[t.Tc] = b : 0 != (a & t.kg) && (this.bc[t.Uc] = b)
        },
        fc: function(a, b) {
            0 != (a & t.Di) ? this.cc[t.xc] = b : 0 != (a & t.jg) ? this.cc[t.Tc] =
                b : 0 != (a & t.kg) && (this.cc[t.Uc] = b)
        },
        Eb: function(a) {
            this.Au && (this.Au = !1, this.iD());
            var b, c;
            0 != (this.Oa & t.Di) && (b = this.bc[t.xc] - this.kc.width / 2, c = this.cc[t.xc] - this.kc.height / 2, a.Pe(this.kc, b, c, 0, 1, 1, 0, 0), b = this.bc[t.xc] + this.Sf - this.yr.width / 2, c = this.cc[t.xc] + this.Tf - this.yr.height / 2, a.Pe(this.yr, b, c, 0, 1, 1, 0, 0));
            if (0 != (this.Oa & t.jg)) {
                var d = 0 == (this.Ca & 16) ? this.Ld : this.rA;
                b = this.bc[t.Tc] - d.width / 2;
                c = this.cc[t.Tc] - d.height / 2;
                a.Pe(d, b, c, 0, 1, 1, 0, 0)
            }
            0 != (this.Oa & t.kg) && (d = 0 == (this.Ca & 32) ? this.je : this.sA,
                b = this.bc[t.Uc] - d.width / 2, c = this.cc[t.Uc] - d.height / 2, a.Pe(d, b, c, 0, 1, 1, 0, 0))
        },
        oL: function(a) {
            var b = !1,
                c = this.app.eo(a),
                d = this.app.fo(a);
            this.cB = t.LE * Math.ceil(Math.sqrt(this.kc.width / 2 * this.kc.width / 2 + this.kc.height / 2 * this.kc.height / 2));
            this.hf = Math.ceil(Math.sqrt(this.kc.width / 4 * this.kc.width / 4 + this.kc.height / 4 * this.kc.height / 4));
            c = this.getKey(c, d);
            c != t.oy && (this.touches[c] = a.identifier, c == t.xc && (this.Ca &= 240, b = !0), c == t.Tc ? (this.Ca |= 16, b = !0) : c == t.Uc && (this.Ca |= 32, b = !0));
            return b
        },
        LD: function(a) {
            var b =
                this.app.eo(a),
                c = this.app.fo(a);
            if (this.getKey(b, c) == t.xc && a.identifier == this.touches[t.xc] && (this.Sf = b - this.bc[t.xc], this.Tf = c - this.cc[t.xc], a = (2 * Math.PI - Math.atan2(this.Tf, this.Sf)) % (2 * Math.PI), this.Ca &= 240, b = Math.sqrt(this.Sf * this.Sf + this.Tf * this.Tf), this.$A ? (this.Sf = Math.cos(a) * this.hf, this.Tf = Math.sin(a) * -this.hf) : (this.Sf < -this.hf && (this.Sf = -this.hf), this.Sf > this.hf && (this.Sf = this.hf), this.Tf < -this.hf && (this.Tf = -this.hf), this.Tf > this.hf && (this.Tf = this.hf)), b > this.cB && b < 3 * this.hf)) {
                b = 0;
                if (0 <=
                    a)
                    for (;;) {
                        if (this.Qh(a, 0, this.Ig) || this.Qh(a, 2 * Math.PI, this.Ig)) {
                            b = 8;
                            break
                        }
                        if (this.Qh(a, Math.PI / 2, this.Ig)) {
                            b = 1;
                            break
                        }
                        if (this.Qh(a, Math.PI, this.Ig)) {
                            b = 4;
                            break
                        }
                        if (this.Qh(a, Math.PI / 4 * 6, this.Ig)) {
                            b = 2;
                            break
                        }
                        if (this.Qh(a, Math.PI / 4, Math.PI / 2 - this.Ig)) {
                            b = 9;
                            break
                        }
                        if (this.Qh(a, Math.PI / 4 * 3, Math.PI / 2 - this.Ig)) {
                            b = 5;
                            break
                        }
                        if (this.Qh(a, Math.PI / 4 * 5, Math.PI / 2 - this.Ig)) {
                            b = 6;
                            break
                        }
                        if (this.Qh(a, Math.PI / 4 * 7, Math.PI / 2 - this.Ig)) {
                            b = 10;
                            break
                        }
                        break
                    }
                this.Ca |= b
            }
        },
        Qh: function(a, b, c) {
            return a > b - c / 2 && a < b + c / 2
        },
        ID: function(a) {
            var b;
            for (b = 0; b < t.qd; b++)
                if (this.touches[b] == a.identifier) {
                    this.touches[b] = 0;
                    switch (b) {
                        case t.xc:
                            this.Tf = this.Sf = 0;
                            this.Ca &= 240;
                            break;
                        case t.Tc:
                            this.Ca &= -17;
                            break;
                        case t.Uc:
                            this.Ca &= -33
                    }
                    break
                }
        },
        getKey: function(a, b) {
            return 0 != (this.Oa & t.Di) && a >= this.bc[t.xc] - this.kc.width / 2 && a < this.bc[t.xc] + this.kc.width / 2 && b > this.cc[t.xc] - this.kc.height / 2 && b < this.cc[t.xc] + this.kc.height / 2 ? t.xc : 0 != (this.Oa & t.jg) && a >= this.bc[t.Tc] - this.Ld.width / 2 && a < this.bc[t.Tc] + this.Ld.width / 2 && b > this.cc[t.Tc] - this.Ld.height / 2 && b < this.cc[t.Tc] +
                this.Ld.height / 2 ? t.Tc : 0 != (this.Oa & t.kg) && a >= this.bc[t.Uc] - this.je.width / 2 && a < this.bc[t.Uc] + this.je.width / 2 && b > this.cc[t.Uc] - this.je.height / 2 && b < this.cc[t.Uc] + this.je.height / 2 ? t.Uc : t.oy
        },
        hr: function() {
            return this.Ca
        }
    };
    k.bN = 2;
    k.fF = 4;
    k.tn = 16;
    k.gF = 32;
    k.iF = 64;
    k.hF = 128;
    k.Jt = 512;
    k.FM = 2;
    k.HM = 4;
    k.JM = 8;
    k.GM = 16;
    k.EM = 32;
    k.KM = 64;
    k.IM = 128;
    k.LM = 256;
    k.gy = 480;
    k.hy = 300;
    k.ln = 64;
    k.mn = 16;
    k.DP = 1;
    k.FP = 2;
    k.EP = 4;
    k.ju = 1;
    k.TO = 2;
    k.SO = 4;
    k.UO = 8;
    k.Jy = 0;
    k.mq = 1;
    k.og = 2;
    k.gu = 3;
    k.gG = 4;
    k.Wx = 1;
    k.Bl = 2;
    k.Vx = 4;
    k.Ux = 8;
    k.Xp = 10;
    k.Wp = 1;
    k.Ot =
        2;
    k.Vp = 3;
    k.Nt = 4;
    k.DN = 5;
    k.EN = 6;
    k.BN = 7;
    k.FN = 8;
    k.CN = 9;
    k.Up = -2;
    k.QF = 100;
    k.RF = 101;
    k.sh = 1;
    k.th = 2;
    k.uh = 4;
    k.rh = 8;
    k.jE = 15;
    k.Qt = 128;
    k.Df = 2147483647;
    k.Et = 1110591041;
    k.mu = 1110594637;
    k.rG = 1110600435;
    k.Pt = 1110874198;
    k.tq = 1110634490;
    k.jn = 1110590791;
    k.aK = [0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255, 255];
    k.Uy = [0, k.sh, k.th, 0, k.uh, k.uh + k.sh, k.uh + k.th, 0, k.rh, k.rh + k.sh, k.rh + k.th, 0, 0, 0, 0, 0];
    k.bz = !1;
    k.Yl = function(a, b, c) {
        switch (c) {
            case 0:
                return a == b;
            case 1:
                return a != b;
            case 2:
                return a <= b;
            case 3:
                return a < b;
            case 4:
                return a >=
                    b;
            case 5:
                return a > b
        }
        return !1
    };
    k.Mq = function(a, b, c) {
        switch (c) {
            case 0:
                return a == b;
            case 1:
                return a != b;
            case 2:
                return a <= b;
            case 3:
                return a < b;
            case 4:
                return a >= b;
            case 5:
                return a > b
        }
        return !1
    };
    k.vQ = function(a) {
        a = a.Fa >= v.lg ? a.ext.IA() : a.Bg();
        null == a && (a = new eb);
        return a
    };
    k.fR = function(a, b, c) {
        a.Fa >= v.lg ? a.ext.jD(b, c) : a.vl(b, c)
    };
    k.xQ = function(a) {
        return a.Fa >= v.lg ? 0 : a.fr()
    };
    k.YK = function(a, b) {
        a.Fa >= v.lg || a.Us(b)
    };
    k.KJ = function(a) {
        null != a.D && (a.D.ow(), a.D.S |= E.qg, a.D.sl = 0)
    };
    k.JJ = function(a) {
        null != a.D && (a.D.ym(),
            a.D.S &= ~E.qg, a.D.sl = 0)
    };
    k.ec = function(a, b) {
        null != a.A ? a.A.ba.ec(b) : a.w != b && (a.w = b, null != a.b && (a.b.M = !0, a.b.Xa = !0))
    };
    k.fc = function(a, b) {
        null != a.A ? a.A.ba.fc(b) : a.u != b && (a.u = b, null != a.b && (a.b.M = !0, a.b.Xa = !0))
    };
    k.OA = function(a, b) {
        if (0 == a) return 0 <= b ? 24 : 8;
        if (0 == b) return 0 <= a ? 0 : 16;
        var c, d = !1,
            e = !1;
        0 > a && (d = !0, a = -a);
        0 > b && (e = !0, b = -b);
        c = 256 * a / b;
        var f;
        for (f = 0; !(c >= M.Cl[f]); f += 2);
        c = M.Cl[f + 1];
        e && (c = -c + 32 & 31);
        d && (c = (-(c - 8 & 31) & 31) + 8 & 31);
        return c
    };
    k.prototype = {
        SK: function(a) {
            this.B = a
        },
        uu: function() {
            this.G = Array(this.B.Mg);
            this.i = this.B.Vn;
            this.Af = 0;
            var a;
            for (a = this.h.tc.CA(); null != a; a = this.h.tc.GA()) a.Ne >= v.Tb && this.Af++;
            this.gx = -1 == this.B.Pr ? this.h.od & 65535 : this.B.Pr;
            this.ol = Array(Math.round(this.B.Mg / 32 + 1));
            this.ml = new P;
            this.dh = this.B.Mg;
            this.nx = this.i.cC;
            this.B.dj = 0;
            this.B.ej = 0;
            this.fa = this.B.dj;
            this.ka = this.B.ej;
            this.Os = this.Ns = 0;
            this.Ud = this.B.Ar.right; - 1 == this.Ud && (this.Ud = 2147479552);
            this.Vd = this.B.Ar.bottom; - 1 == this.Vd && (this.Vd = 2147479552);
            this.ox = this.sb = this.zb = 0;
            this.Sc &= k.hF;
            this.Sc |= k.fF;
            this.Xm = 0;
            this.Js =
                Array(k.Xp);
            this.Ae = null;
            this.Sc |= k.iF;
            this.na = Array(k.Qt);
            this.Ym = Array(k.Qt);
            this.Ks = new va;
            this.Ks.code = 0;
            this.Fs = Array(4);
            this.Es = Array(4);
            this.Ds = Array(4);
            this.Gc = Array(4);
            for (a = this.Fc = 0; a < k.Xp; a++) this.Js[a] = 50;
            this.Eu = this.ts = !1;
            this.B.aD = !0
        },
        nv: function() {
            this.B.aD = !1;
            this.Ae = this.ml = this.ol = this.T = this.G = null;
            var a;
            for (a = 0; a < k.Qt; a++) this.na[a] = 0;
            this.Ks = null
        },
        NI: function(a) {
            this.uu();
            this.h.Sh = 0;
            if (null == this.h.Ga && this.h.Ij)
                if (this.B.Ca == I.GF) null == this.h.Ca && (this.h.Ca = new t(this.h),
                    this.h.Ca.gB()), this.h.Ca.reset(0), this.h.FD();
                else if (this.B.Ca != I.HF) {
                var b = 0;
                0 != (this.B.mm & I.BF) && (b = t.jg);
                0 != (this.B.mm & I.CF) && (b |= t.kg);
                0 != (this.B.mm & I.DF) && (b |= t.ny);
                0 != (this.B.mm & I.tN) && (b |= t.wN);
                this.B.Ca == I.IF && (b |= t.Di);
                0 != (b & (t.jg | t.kg | t.Di)) && (this.h.FD(b), this.h.Ca.reset(b));
                this.B.Ca == I.FF && this.h.dL()
            }
            this.lx = 255;
            a && (this.Sc |= k.tn);
            this.Ev();
            this.Mm(-1, !1);
            this.Ow();
            this.qc = 0;
            this.Tu(a);
            this.dv();
            this.II();
            this.Tv();
            this.i.Pw();
            this.i.Gq(this);
            this.wD();
            this.$m = 0;
            this.fv();
            this.Eu = !1
        },
        av: function() {
            if (0 < this.eg && null == this.h.Ng) this.ts && (1 == this.h.Dk && (0 <= this.Ls ? this.h.Xc[this.Ls] && (this.resume(), this.sb = 0, this.i.Ge(-458755)) : this.h.Dk && (this.resume(), this.sb = 0, this.i.Ge(-458755))), this.h.Dk = !1), null != this.rs && this.rs.CI(), a = this.sb;
            else {
                this.h.wu |= n.Ix;
                var a = this.eI();
                this.h.wu &= ~n.Ix;
                0 != (this.Sc & k.tn) && (this.nA = (new Date).getTime() - this.pl, this.ot(!0), this.i.ht())
            }
            if (a == k.Wp || a == k.Ot || a == k.Vp) {
                this.h.gg = document.createElement("canvas");
                this.h.gg.width = this.h.sa;
                this.h.gg.height =
                    this.h.Aa;
                var b = new Fa(this.h.gg);
                this.h.frame.zr ? b.Kq(0, 0, this.sa, this.Aa) : b.Dc(0, 0, this.sa, this.Aa, this.Ag);
                b.Dc(0, 0, this.h.sa, this.h.Aa, this.h.Ag);
                this.h.we.Eb(b, 0, 0)
            }
            if (0 != a) switch (a) {
                case 5:
                    this.pause();
                    this.h.Dk = !1;
                    this.ts = !0;
                    a = 0;
                    break;
                case 101:
                    if (this.B.dQ) break;
                    this.mA();
                    this.Lv();
                    this.ot(!1);
                    this.Mm(-1, !1);
                    this.i.ht();
                    this.er();
                    this.nv();
                    this.B.dj = this.B.Nv = this.hl = 0;
                    this.B.ej = this.B.Ov = this.il = 0;
                    this.h.SC();
                    this.uu();
                    this.Ev();
                    this.Mm(-1, !1);
                    this.Ow();
                    this.Tu(!1);
                    this.dv();
                    this.Tv();
                    this.i.Pw();
                    this.i.Gq(this);
                    this.fv();
                    this.wD();
                    this.$m = a = 0;
                    break;
                case 100:
                case -2:
                    this.i.Ge(-196611)
            }
            return this.sb = a
        },
        dJ: function(a) {
            var b;
            100 < this.sb && (this.sb = k.Up);
            b = this.$m;
            this.HK();
            this.Lv();
            this.ot(a);
            this.i.ht();
            this.nv();
            this.er();
            this.Mm(-1, !0);
            this.h.VH();
            return p.UF(this.sb, b)
        },
        Ev: function() {
            var a;
            for (a = 0; a < this.dh; a++) this.G[a] = null
        },
        Ow: function() {
            var a, b;
            this.Sc |= k.gF;
            this.Sc |= k.Jt;
            var c = this.Zo = 0;
            this.T = Array(this.Af);
            this.Re = 0;
            for (a = this.h.tc.CA(); null != a; a = this.h.tc.GA())
                if (b = a.Ne, b >= v.Tb) {
                    this.T[c] =
                        new Q;
                    this.T[c].wH(a);
                    this.T[c].Aw = c;
                    this.T[c].No = -1;
                    if (b == v.Eh || b == v.Hy)
                        for (a = this.B.Gd.dr(); null != a; a = this.B.Gd.Fo())
                            if (a.Uf == this.T[c].$c) {
                                this.T[c].No = a.fj;
                                break
                            } c++
                } this.i.fK(this.T);
            for (c = 0; c < this.B.oc; c++) this.B.Za[c].mw = 1;
            return 0
        },
        Fz: function() {
            var a, b, c, d, e;
            this.Sc &= ~k.tn;
            c = 0;
            for (e = this.B.Gd.dr(); null != e; c++, e = this.B.Gd.Fo())
                if (a = this.h.tc.Zi(e.Uf), b = a.vc, a = a.Ne, !(a < v.lg) && 0 == (b.Sg & u.Ny) && (d = k.Ux, e.Qv == Aa.Py)) {
                    if (0 == (b.kj & u.nq)) {
                        if (a != v.Eh) continue;
                        d |= k.Bl
                    }
                    0 == (b.Sg & u.Ky) && this.ar(e.fj, e.Uf,
                        2147483648, 2147483648, -1, d, -1, -1)
                } this.i.Gq(this);
            this.pl = (new Date).getTime() - this.nA
        },
        Tu: function(a) {
            var b, c, d, e, f;
            d = 0;
            for (f = this.B.Gd.dr(); null != f; d++, f = this.B.Gd.Fo())
                if (b = this.h.tc.Zi(f.Uf), c = b.vc, b = b.Ne, e = k.Ux, f.Qv == Aa.Py) {
                    b == v.Eh && (e |= k.Vx);
                    if (0 == (c.kj & u.nq)) {
                        if (b == v.Hy) continue;
                        e |= k.Bl
                    }
                    a && b >= v.lg && 0 == (c.Sg & u.Ny) || 0 == (c.Sg & u.Ky) && this.ar(f.fj, f.Uf, 2147483648, 2147483648, -1, e, -1, -1)
                } this.Sc &= ~k.Jt
        },
        Lv: function() {
            var a;
            for (a = 0; a < this.dh && 0 != this.zb; a++)
                if (null != this.G[a]) {
                    var b = this.G[a];
                    (32 >
                        b.Fa || b.N.Cc != k.jn) && this.br(a, !0)
                } for (a = 0; a < this.dh && 0 != this.zb; a++) null != this.G[a] && (b = this.G[a], 32 <= b.Fa && b.N.Cc == k.jn && this.br(a, !0))
        },
        ot: function(a) {
            a || (0 == (this.h.co & n.lF) ? this.h.wc.bt() : this.h.wc.bJ())
        },
        Mm: function(a, b) {
            var c, d;
            d = -1 == a ? this.B.oc : a + 1;
            for (c = 0; c < d; c++) {
                var e = this.B.Za[c];
                e.reset();
                e.LH();
                b && e.Sz()
            }
        },
        Hq: function() {
            0 != this.Re && this.fD(-1)
        },
        er: function() {
            0 != this.Re && this.fD(0)
        },
        Wz: function(a) {
            var b = 0,
                c, d = 0;
            for (c = 0; c < this.zb; c++) {
                for (; null == this.G[d];) d++;
                var e = this.G[d];
                d++;
                e != a &&
                    e.qa & u.Gf && (e = e.N.Pd.hd[e.A.rl], e.yo == S.eu && (b |= 1 << e.Mk - 1))
            }
            b != this.Re && (0 != this.Re && this.er(), this.Re = b, 0 != this.Re && this.Hq())
        },
        QJ: function(a) {
            var b = this.Re;
            a.qa & u.Gf && (a = a.N.Pd.hd[a.A.rl], a.yo == S.eu && (this.Re |= 1 << a.Mk - 1, 0 == b && this.Hq()))
        },
        fD: function(a) {
            0 <= a ? this.h.$s(1) : this.h.$s(-1)
        },
        wD: function() {
            this.h.$s(1)
        },
        HI: function() {
            this.h.$s(-1)
        },
        su: function(a) {
            var b, c;
            for (c = 0; c < this.ml.size() && (b = this.ml.get(c), !p.yc(b.name, a)); c++);
            c == this.ml.size() && (b = new sb, this.ml.add(b), c = this.ml.size() - 1, b.name =
                a, b.Oa = 0);
            return c
        },
        HK: function() {
            var a, b, c, d, e, f;
            for (c = 0; c < this.T.length; c++)
                if (b = this.T[c], f = b.kb, 32767 != b.$c && 0 == (f & 2147483648) && (d = this.h.tc.Zi(b.$c), 0 != (d.di & v.Oy) && (a = this.G[f], b.jd == v.Eh || b.jd == v.zn || null != a.O))) {
                    e = b.qj + b.jd.toString();
                    null == this.h.Ki && (this.h.Ki = new P);
                    var g = !1;
                    d = null;
                    for (a = 0; a < this.h.Ki.size(); a++)
                        if (d = this.h.Ki.get(a), e == d.name) {
                            g = !0;
                            break
                        } 0 == g ? (d = new $e, d.name = e, d.Me = new P, this.h.Ki.add(d)) : d.Me.clear();
                    for (;;) {
                        a = this.G[f];
                        if (b.jd == v.Eh) f = new bf, f.text = a.ti, f.tb = a.tb, d.Me.add(f);
                        else if (b.jd == v.zn) f = new af, f.value = a.va, f.tb = a.tb, f.Jc = a.Jc, f.Rs = a.Rs, f.Qs = a.Qs, d.Me.add(f);
                        else {
                            e = new cf;
                            e.Oa = a.O.np;
                            e.values = Array(a.O.Ua.length);
                            for (f = 0; f < a.O.Ua.length; f++) e.values[f] = a.O.Ua[f];
                            e.eb = Array(a.O.Wd.length);
                            for (f = 0; f < a.O.Wd.length; f++) e.eb[f] = a.O.Wd[f];
                            d.Me.add(e)
                        }
                        f = a.Xb;
                        if (0 != (f & 2147483648)) break
                    }
                }
        },
        Tv: function() {
            var a, b, c, d, e, f;
            if (null != this.h.Ki)
                for (c = 0; c < this.T.length; c++)
                    if (b = this.T[c], a = b.kb, 32767 != b.$c && 0 <= a && (e = this.h.tc.Zi(b.$c), 0 != (e.di & v.Oy)))
                        for (f = b.qj + b.jd.toString(),
                            d = 0; d < this.h.Ki.size(); d++)
                            if (e = this.h.Ki.get(d), f == e.name) {
                                for (d = 0;;) {
                                    a = this.G[a];
                                    if (b.jd == v.Eh) f = e.Me.get(d), a.ti = f.text, a.tb = f.tb, a.b.M = !0, a.MP = !0;
                                    else if (b.jd == v.zn) f = e.Me.get(d), a.va = f.value, a.tb = f.tb, a.Jc = f.Jc, a.Rs = f.Rs, a.Qs = f.Qs, a.JP = !0, a.b.M = !0;
                                    else {
                                        f = e.Me.get(d);
                                        a.O.np = f.Oa;
                                        a.O.$i(f.values.length);
                                        a.O.AI(f.eb.length);
                                        var g;
                                        for (g = 0; g < f.values.length; g++) a.O.Ua[g] = f.values[g];
                                        for (g = 0; g < f.eb.length; g++) a.O.Wd[g] = f.eb[g]
                                    }
                                    a = a.Xb;
                                    if (0 != (a & 2147483648)) break;
                                    d++;
                                    if (d >= e.Me.size()) break
                                }
                                break
                            }
        },
        ar: function(a,
            b, c, d, e, f, g, h) {
            for (;;) {
                var q = new yd,
                    n = null; - 1 != a && (n = this.B.Gd.tI(a));
                var D = this.h.tc.Zi(b),
                    p = D.vc;
                0 == (p.kj & u.nq) && (f |= k.Bl);
                if (this.zb >= this.dh) break;
                var l = null,
                    m = new L;
                switch (D.Ne) {
                    case 2:
                        l = new Md;
                        break;
                    case 3:
                        l = new Qd;
                        break;
                    case 4:
                        l = new Rd;
                        break;
                    case 5:
                        l = new Od;
                        break;
                    case 6:
                        l = new Pd;
                        break;
                    case 7:
                        l = new fa;
                        break;
                    case 8:
                        break;
                    case 9:
                        l = new R;
                        break;
                    default:
                        l = new Sd(D.Ne, this), null == l.ext && (l = null)
                }
                if (null == l) break;
                l.prototype = m;
                l.mJ = n;
                if (0 > h)
                    for (h = 0; h < this.dh && null != this.G[h]; h++);
                if (h >= this.dh) break;
                this.G[h] = l;
                this.zb++;
                l.JI = p.Cc;
                l.qa = p.Sg;
                h > this.YC && this.ix++;
                l.Kb = h;
                this.Zo++;
                0 == this.Zo && (this.Zo = 1);
                l.io = this.Zo;
                l.ac = b;
                l.pr = a;
                l.Fa = D.Ne;
                this.MJ(l);
                l.c = this;
                l.ho = !0;
                l.N = p;
                a = l.Bb;
                if (null != a.rf)
                    for (D = a.Aw, m = 0; m < a.rf.length; m++) {
                        var v = a.rf[m],
                            t = !1,
                            z, r = this.i.Pc[v],
                            w = r.J.length;
                        for (z = 0; z < w; z += 2) {
                            if (0 > r.J[z + 1]) {
                                w = z;
                                break
                            }
                            if (r.J[z + 1] == D) {
                                t = !0;
                                break
                            }
                        }
                        if (!t) {
                            v = this.i.ad[v];
                            t = -1;
                            for (z = 0; z < v.J.length; z += 2)
                                if (v.J[z + 1] == D) {
                                    t = z;
                                    break
                                } if (0 <= t) {
                                var N = !0;
                                if (0 <= r.J[0])
                                    for (t += 2; N && t < v.J.length; t += 2) {
                                        var B = v.J[t +
                                            1];
                                        for (z = 0; 0 <= r.J[z + 1]; z += 2)
                                            if (r.J[z + 1] == B) {
                                                for (N = w; N > z; N -= 2) r.J[N] = r.J[N - 2], r.J[N + 1] = r.J[N - 1];
                                                r.J[z] = b;
                                                r.J[z + 1] = D;
                                                N = !1;
                                                break
                                            }
                                    }
                                N && (r.J[w] = b, r.J[w + 1] = D)
                            }
                        }
                    }
                0 == (l.qa & u.Ly) && (l.qa &= ~u.$j, 0 != (l.gf & Q.pq) && 0 != (this.B.Yb & I.py) && (l.qa |= u.$j), 0 != (l.gf & (Q.$d | Q.qq)) && (l.qa |= u.$j));
                b = c;
                2147483648 == b && (b = n.Rv);
                q.lH = b;
                l.w = b;
                2147483648 == d && (d = n.Sv);
                q.mH = d;
                l.u = d;
                null != n && -1 == g && (g = n.eB);
                q.vz = g;
                l.fd = g;
                g = this.B.Za[g];
                g.mw++;
                q.wz = g.mw;
                q.Lq = f;
                q.uz = e;
                q.kH = n;
                l.b = null;
                0 != (l.qa & (u.Gi | u.Gf | u.Hi)) && (l.b = new Nd, l.b.Z());
                l.A =
                    null;
                0 != (l.qa & u.Gf) && (l.A = new Ha, 0 == (q.Lq & k.Wx) && l.A.Z(0, l, p, q, -1));
                l.ca = null;
                0 != (l.qa & u.Gi) && (l.ca = new La, l.ca.Z(l));
                l.D = null;
                0 != (l.qa & u.Hi) && (l.D = new E, l.D.KI(l, p, q));
                l.O = null;
                0 != (l.qa & u.mG) && (l.O = new Na, l.O.Z(l, p, q));
                l.Z(p, q);
                0 != (l.qa & u.Hi) && l.D.ur(!0);
                1 <= this.qc && l.Hh();
                return h
            }
            return -1
        },
        br: function(a, b) {
            var c = this.G[a];
            if (null != c) {
                if (1 != b || 0 != c.io) this.eJ(c), null != c.A && c.A.Gb(b), null != c.O && c.O.Gb(b), null != c.D && c.D.Gb(b), null != c.b && c.b.Gb(b), c.Gb(b), this.LJ(c);
                this.G[a] = null;
                this.zb--
            }
        },
        Of: function(a) {
            this.ol[Math.floor(a /
                32)] |= 1 << (a & 31);
            this.fp++
        },
        NH: function() {
            if (0 != this.fp)
                for (var a = 0, b, c; a < this.dh;) {
                    b = this.ol[a / 32];
                    if (0 != b) {
                        for (c = this.ol[a / 32] = 0; 0 != b && 32 > c; c++) {
                            if (0 != (b & 1)) {
                                var d = this.G[a + c];
                                if (null != d && 1 == d.Bb.qf && (this.i.yd(d, d.Fa | -2162688), d = d.Bb, null != d.rf)) {
                                    var e = d.Aw,
                                        f;
                                    for (f = 0; f < d.rf.length; f++) {
                                        var g, h = this.i.Pc[d.rf[f]];
                                        for (g = 0; g < h.J.length && 0 <= h.J[g]; g += 2)
                                            if (h.J[g + 1] == e) {
                                                for (; g < h.J.length - 2 && 0 <= h.J[g]; g += 2) h.J[g] = h.J[g + 2], h.J[g + 1] = h.J[g + 3];
                                                g < h.J.length && (h.J[g] = -1, h.J[g + 1] = -1);
                                                break
                                            }
                                    }
                                }
                                this.br(a + c, !1);
                                this.fp--
                            }
                            b >>= 1
                        }
                        if (0 == this.fp) break
                    }
                    a += 32
                }
        },
        eJ: function(a) {
            var b = 0,
                c, d;
            if (0 != (a.X & L.ky))
                for (c = 0; c < this.zb; c++) {
                    for (; null == this.G[b];) b++;
                    d = this.G[b];
                    b++;
                    null != d.A && d.b.dc == S.zy && (d = d.A.ba, d.Kl == a && 1 == d.aq && d.CD())
                }
        },
        Hh: function() {
            var a, b, c;
            for (c = a = 0; a < this.zb; a++) {
                for (; null == this.G[c];) c++;
                c++
            }
            for (c = a = 0; a < this.zb; a++) {
                for (; null == this.G[c];) c++;
                b = this.G[c];
                c++;
                b.Hh()
            }
        },
        MJ: function(a) {
            var b = a.ac,
                c;
            for (c = 0; c < this.Af && this.T[c].$c != b; c++);
            b = this.T[c];
            0 != (b.kb & 2147483648) ? (b.kb = a.Kb, a.Gg = c | 2147483648,
                a.Xb = 2147483648) : (c = this.G[b.kb], a.Gg = c.Gg, c.Gg = a.Kb, a.Xb = c.Kb, b.kb = a.Kb);
            a.Av = b.zw;
            a.Bb = b;
            a.gf = b.Rd; - 1 == a.pr ? a.pr = b.No : -1 == b.No && (b.No = a.pr);
            b.qf += 1
        },
        LJ: function(a) {
            var b = a.Bb;
            --b.qf;
            var c;
            0 == (a.Gg & 2147483648) ? (c = this.G[a.Gg], 0 == (a.Xb & 2147483648) ? (b = this.G[a.Xb], null != c && (c.Xb = a.Xb), null != b && (b.Gg = a.Gg)) : null != c && (c.Xb = 2147483648)) : 0 == (a.Xb & 2147483648) ? (c = this.G[a.Xb], null != c && (c.Gg = a.Gg, b.kb = c.Kb)) : b.kb = 2147483648
        },
        KE: function() {
            var a = this.jy();
            if (null != a) {
                var b = 0,
                    c;
                for (c = 0; c < this.zb; b++, c++) {
                    for (; null ==
                        this.G[b];) b++;
                    var d = this.G[b];
                    32 <= d.Fa && (d.N.Cc == k.Et || d.N.Cc == k.mu || d.N.Cc == k.rG || d.N.Cc == k.tq || d.N.Cc == k.Pt ? d.ext.lK() : d.N.Cc == k.jn && d.ext.lK())
                }
                for (c = b = 0; c < this.zb; b++, c++) {
                    for (; null == this.G[b];) b++;
                    d = this.G[b];
                    if (0 != (d.qa & u.Gf)) {
                        var e = !1;
                        d.b.dc == S.Dh && d.N.Pd.hd[d.A.rl].wr && (e = !0);
                        0 == e && 2 == d.Fa && a.kK(d)
                    }
                }
                for (c = b = 0; c < this.zb; b++, c++)
                    for (; null == this.G[b];) b++
            }
        },
        jy: function() {
            if (0 == this.WC) {
                this.WC = !0;
                this.pi = null;
                var a = 0,
                    b;
                for (b = 0; b < this.zb; a++, b++) {
                    for (; null == this.G[a];) a++;
                    var c = this.G[a];
                    if (32 <=
                        c.Fa && c.N.Cc == k.jn) {
                        this.pi = c.ext;
                        break
                    }
                }
            }
            return this.pi
        },
        Uj: function(a) {
            return a && 0 == (a.X & L.Ye) && 0 != (a.qa & u.Gf) && a.b.dc == S.Dh && a.N.Pd.hd[a.A.rl].wr ? a.A.ba.Cd : null
        },
        WG: function(a) {
            if (a.N.Cc == k.Et || a.N.Cc == k.mu || a.N.Cc == k.Pt || a.N.Cc == k.tq) {
                var b = 0,
                    c;
                for (c = 0; c < this.zb; b++, c++) {
                    for (; null == this.G[b];) b++;
                    var d = this.G[b];
                    32 <= d.Fa && d.N.Cc == k.jn && (a.N.Cc == k.Et ? a.ext.identifier == d.ext.identifier && d.ext.eQ.add(a.ext) : a.N.Cc == k.mu ? a.ext.identifier == d.ext.identifier && d.ext.iR.add(a.ext) : a.N.Cc == k.Pt ? a.ext.identifier ==
                        d.ext.identifier && d.ext.GQ.add(a.ext) : a.N.Cc == k.tq && a.ext.identifier == d.ext.identifier && d.ext.ZQ.add(a.ext))
                }
                if (a.N.Cc != k.tq)
                    for (c = b = 0; c < this.zb; b++, c++) {
                        for (; null == this.G[b];) b++;
                        d = this.G[b];
                        d.Fa == v.Tb && (d = this.Uj(d)) && a.ext.PQ(d)
                    }
            }
        },
        Ab: function(a) {
            return null != a.A && null != a.A.ba ? a.A.ba.Ab() : a.b.Qa
        },
        pause: function(a) {
            if (0 == this.eg) {
                this.eg = 1;
                this.VC = this.h.od;
                var b = 0,
                    c;
                for (c = 0; c < this.zb; c++) {
                    for (; null == this.G[b];) b++;
                    b++
                }
                a || this.h.wc.pause()
            }
        },
        resume: function() {
            if (!this.HJ && 0 != this.eg) {
                this.eg = 0;
                this.Hq();
                var a = 0,
                    b;
                for (b = 0; b < this.zb; b++) {
                    for (; null == this.G[a];) a++;
                    a++
                }
                this.h.wc.resume();
                a = this.h.od;
                a -= this.VC;
                this.pl += a;
                this.Ls = 0;
                this.ts = !1
            }
        },
        mA: function() {
            this.h.wc.bt()
        },
        Oi: function() {
            var a = 0,
                b;
            for (b = 0; b < this.zb; b++) {
                for (; null == this.G[a];) a++;
                var c = this.G[a];
                a++;
                c.Oi()
            }
        },
        ug: function(a, b, c) {
            a = this.wL(a, b, c);
            return null != a ? a.top : k.Df
        },
        wL: function(a, b, c) {
            b -= this.fa;
            c -= this.ka;
            var d; - 1 == a ? (d = 0, a = this.B.oc) : (d = a, a += 1);
            for (; d < a; d++) {
                var e = this.B.Za[d].uI(b, c);
                if (null != e) return e
            }
            return null
        },
        fv: function() {
            this.pl =
                this.h.od;
            this.fp = this.ox = this.sb = this.qc = this.si = 0;
            var a;
            for (a = 0; a < (this.dh + 31) / 32; a++) this.ol[a] = 0;
            this.kl = this.B.qo;
            this.ll = this.B.po;
            this.Sm = -k.gy;
            this.Wm = -k.hy;
            this.Qm = this.Ud + k.gy;
            this.Um = this.Vd + k.hy;
            this.hl = a = this.fa;
            a -= k.ln;
            0 > a && (a = this.Sm);
            this.Rm = a;
            this.il = a = this.ka;
            a -= k.mn;
            0 > a && (a = this.Wm);
            this.Vm = a;
            a = this.fa;
            a += this.kl + k.ln;
            a > this.Ud && (a = this.Qm);
            this.Pm = a;
            a = this.ka;
            a += this.ll + k.mn;
            a > this.Vd && (a = this.Um);
            this.Tm = a;
            for (a = this.eg = this.Zm = this.hx = this.jl = 0; 4 > a; a++) this.Gc[a] = 0, this.Fs[a] =
                0, this.Ds[a] = 255;
            this.fl = 0;
            this.i.Hu = !1;
            this.i.ep = !1;
            this.Ls = 0;
            this.pi = null;
            this.WC = !1;
            this.jx = this.Hs = this.Gs = this.XC = null;
            for (a = 0; a < k.Xp; a++) this.Js[a] = 20;
            this.Xm = 0
        },
        eI: function() {
            this.h.wc.iH();
            if (null != this.h.Ga && this.h.Jg) return this.pl = this.h.od, this.si = 0, this.sb;
            if (null != this.h.Ng) return this.h.Ng.handle(), 0;
            this.Eu || (this.KE(), this.Eu = !0);
            var a = this.h.od - this.pl,
                b = this.si;
            this.si = a;
            this.hp = a -= b;
            this.Zm += a;
            this.qc += 1;
            this.Fc = this.hp * this.B.iB / 1E3;
            this.Js[this.Xm] = a;
            this.Xm++;
            this.Xm >= k.Xp &&
                (this.Xm = 0);
            for (a = 0; 4 > a; a++) this.Fs[a] = this.Gc[a];
            this.aJ();
            1 == this.h.Sh ? this.Gc[0] |= this.h.Ca.hr() & this.lx : 2 == this.h.Sh && (this.Gc[0] |= this.h.hr() & this.lx);
            if (0 != this.Re)
                for (this.qv(), this.fl = 0, this.h.Xc[n.Hf] && (this.fl |= 16), this.h.Xc[n.Sl] && (this.fl |= 32), a = 0; a < this.nx; a++) 0 != (this.HQ & 1) && (b = this.Gc[a] & 207, b |= this.fl, this.Gc[a] = b);
            else this.qv();
            for (a = 0; 4 > a; a++)
                if (b = this.Gc[a] & k.aK[4 * this.nx + a], b &= this.Ds[a], this.Gc[a] = b, b ^= this.Fs[a], this.Es[a] = b, 0 != b)
                    if (b &= this.Gc[a], 0 != (b & 240)) this.i.kx = a, b = this.Es[a],
                        0 != (b & 240) && (this.i.Rc = b, this.i.Ge(-196615)), 0 != (b & 15) && (this.i.Rc = b, this.i.Ge(-196615));
                    else {
                        var c = this.i.mc[this.i.Qe[-v.Gy] + 4];
                        0 != c && (this.i.Rc = b, this.i.af(c, null))
                    } if (0 != this.zb) {
                a = this.zb;
                b = 0;
                do {
                    for (this.ix = 0; null == this.G[b];) b++;
                    c = this.G[b];
                    c.RA = c.or;
                    c.or = null;
                    c.ho && (this.YC = b, c.handle());
                    a += this.ix;
                    b++;
                    a--
                } while (0 != a)
            }
            this.ld++;
            this.i.uH();
            this.i.FI();
            this.i.$C && 0 == (this.Sc & k.tn) && this.i.af(0, null);
            this.i.EI();
            this.NH();
            this.doScroll();
            this.i.UC = -1;
            this.hx++;
            if (0 == this.sb) return this.ox;
            this.sb !=
                k.Wp && this.sb != k.Ot && this.sb != k.Up && this.sb != k.Vp && this.sb != k.QF && this.sb != k.Nt || this.i.Ge(-65539);
            return this.sb
        },
        aJ: function() {
            var a;
            for (a = 0; 4 > a; a++) this.Gc[a] = 0;
            var b = this.h.mI();
            for (a = 0; 4 > a; a++) {
                var c;
                for (c = 0; c < n.un; c++) this.h.Xc[b[a * n.un + c]] && (this.Gc[a] |= 1 << c)
            }
        },
        qv: function() {
            this.ap = this.h.Wf + this.fa - this.h.hg;
            this.bp = this.h.Xf + this.ka - this.h.ig
        },
        Zf: function(a) {
            a.A.U = !1;
            k.bz = !1;
            a.A.kp = 0;
            var b, c;
            0 != (a.gf & Q.qq) && (b = this.qs(a.b.Zw, a.b.ax, a.b.$w, a.b.bx), 0 != b && (c = this.qs(a.w - a.oa, a.u - a.pa, a.w - a.oa +
                a.L, a.u - a.pa + a.K), 0 == c && (b ^= c, 0 != b && (a.A.kp |= Ha.TE, this.i.Rc = b, this.i.yd(a, -720896 | a.Fa & 65535)))), b = this.qs(a.w - a.oa, a.u - a.pa, a.w - a.oa + a.L, a.u - a.pa + a.K), 0 != (b & a.A.px) && (c = a.A.U, 0 != (b & k.sh) ? a.A.ba.ec(a.w + this.Ud) : 0 != (b & k.th) && a.A.ba.ec(a.w - this.Ud), 0 != (b & k.uh) ? a.A.ba.fc(a.u + this.Vd) : 0 != (b & k.rh) && a.A.ba.fc(a.u - this.Vd), a.b.dc != S.fu && a.b.dc != S.Dh && (a.A.U = c)), b = this.Yk(a.b.Zw, a.b.ax, a.b.$w, a.b.bx), b != k.jE && (c = this.Yk(a.w - a.oa, a.u - a.pa, a.w - a.oa + a.L, a.u - a.pa + a.K), b = ~b & c, 0 != b && (a.A.kp |= Ha.UE, this.i.Rc = b,
                this.i.yd(a, -786432 | a.Fa & 65535))));
            0 != (a.gf & Q.pq) && (a.b.dc == S.fu ? a.A.ba.FJ() : this.Ui(a, a.b.La, a.b.Ka, a.b.qb, a.b.rb, a.w, a.u, 0, I.Yd) && this.i.yd(a, -851968 | a.Fa & 65535));
            if (0 != (a.gf & Q.Cn) && (b = this.zm(a, a.b.La, a.b.Ka, a.b.qb, a.b.rb, a.w, a.u, a.Bb.oj), null != b))
                for (c = 0; c < b.size(); c++) {
                    var d = b.get(c);
                    if (0 == (d.X & L.Ye)) {
                        var e = a.Fa,
                            f = a,
                            g = d;
                        f.Fa > g.Fa && (f = d, g = a, e = f.Fa);
                        this.i.Rc = g.ac;
                        this.i.TC = g.Kb;
                        this.i.yd(f, -917504 | e & 65535)
                    }
                }
            return k.bz
        },
        zm: function(a, b, c, d, e, f, g, h) {
            var q = null;
            f -= a.oa;
            var k = f + a.L;
            g -= a.pa;
            var D =
                g + a.K,
                n, l;
            if (0 != (a.X & L.vh) || 0 != (a.X & L.Ye)) return q;
            var m = !1,
                p = null,
                t = -1;
            a.Fa == v.Tb && 0 == (a.D.S & E.ak) && (m = !0);
            a.Fa == v.Tb && (t = a.D.tl);
            var z = a.X;
            a.X |= L.vh;
            var u = 0,
                w, N, B;
            if (null != h)
                for (u = 0; u < h.length; u += 2) {
                    w = h[u + 1];
                    if (0 > w) break;
                    for (var r = this.T[w].kb; 0 == (r & 2147483648);)
                        if (w = this.G[r], r = w.Xb, 0 == (w.X & L.vh) && 0 == (w.X & L.Ye) && (N = w.w - w.oa, B = w.u - w.pa, N < k && N + w.L > f && B < D && B + w.K > g)) switch (w.Fa) {
                            case v.Tb:
                                (0 > t || 0 <= t && t == w.D.tl) && 0 != (w.D.S & E.bk) && (0 == m || 0 != (w.D.S & E.ak) ? (null == q && (q = new P), q.add(w)) : (null == p && (l = this.h.ha.Wb(b),
                                    null != l && (p = l.Cg(0, c, d, e))), l = this.h.ha.Wb(w.b.La), null != l && (n = l.Cg(0, w.b.Ka, w.b.qb, w.b.rb)), null != p && null != n && p.Gj(f, g, 0, n, N, B, 0) && (null == q && (q = new P), q.add(w))));
                                break;
                            case v.Eh:
                            case v.zn:
                            case v.Ey:
                            case v.Iy:
                            case v.Cy:
                                null == q && (q = new P);
                                q.add(w);
                                break;
                            default:
                                null == q && (q = new P), q.add(w)
                        }
                } else
                    for (h = 0; h < this.zb; h++) {
                        for (; null == this.G[u];) u++;
                        w = this.G[u];
                        u++;
                        if (0 == (w.X & L.vh) && (N = w.w - w.oa, B = w.u - w.pa, N < k && N + w.L > f && B < D && B + w.K > g)) switch (w.Fa) {
                            case v.Tb:
                                (0 > t || 0 <= t && t == w.D.tl) && 0 != (w.D.S & E.bk) && (0 == m ||
                                    0 != (w.D.S & E.ak) ? (null == q && (q = new P), q.add(w)) : (null == p && (l = this.h.ha.Wb(b), null != l && (p = l.Cg(0, c, d, e))), l = this.h.ha.Wb(w.b.La), null != l && (n = l.Cg(0, w.b.Ka, w.b.qb, w.b.rb)), null != p && null != n && p.Gj(f, g, 0, n, N, B, 0) && (null == q && (q = new P), q.add(w))));
                                break;
                            case v.Eh:
                            case v.zn:
                            case v.Ey:
                            case v.Iy:
                            case v.Cy:
                                null == q && (q = new P);
                                q.add(w);
                                break;
                            default:
                                null == q && (q = new P), q.add(w)
                        }
                    }
            a.X = z;
            return q
        },
        Ui: function(a, b, c, d, e, f, g, h, q) {
            b = this.B.Za[a.fd];
            switch (a.Fa) {
                case v.Tb:
                    if (0 == (a.D.S & E.ak)) {
                        if (a = this.h.ha.Wb(a.b.La), null !=
                            a) return a = a.Cg(J.Gl, c, d, e), null != b.Gj(a, f - this.fa, g - this.ka, h, q)
                    } else return f = f - a.oa - this.fa, g = g - a.pa - this.ka, c = f + a.L, a = g + a.K, h = null != b.ct(f, g, c, a, h, q);
                    return !1;
                default:
                    return f = f - a.oa - this.fa, g = g - a.pa - this.ka, c = f + a.L, a = g + a.K, h = null != b.ct(f, g, c, a, h, q)
            }
        },
        Yk: function(a, b, c, d) {
            var e = 0;
            0 > a && (e |= k.sh);
            0 > b && (e |= k.uh);
            c > this.Ud && (e |= k.th);
            d > this.Vd && (e |= k.rh);
            return k.Uy[e]
        },
        qs: function(a, b, c, d) {
            var e = 15;
            a < this.Ud && (e &= ~k.th);
            b < this.Vd && (e &= ~k.rh);
            0 < c && (e &= ~k.sh);
            0 < d && (e &= ~k.uh);
            return k.Uy[e]
        },
        random: function(a) {
            var b =
                31415 * this.gx + 1;
            this.gx = b &= 65535;
            return b * a >>> 16
        },
        lr: function(a) {
            if (0 == a || -1 == a) return this.random(32);
            var b, c = 0,
                d = 0,
                e = a;
            for (b = 0; 32 > b; b++) 0 != (e & 1) && (d++, c = b), e >>>= 1;
            if (1 == d) return c;
            d = this.random(d);
            e = a;
            for (b = 0; 32 > b; b++) {
                if (0 != (e & 1) && (d--, 0 > d)) return b;
                e >>>= 1
            }
            return 0
        },
        ef: function(a) {
            this.nl = a.ma;
            this.Qc = 0;
            this.Mh = !1;
            return this.getExpression()
        },
        Ta: function(a) {
            this.nl = a.ma;
            this.Qc = 0;
            this.Mh = !1;
            return this.getExpression()
        },
        jm: function(a) {
            this.nl = a.ma;
            this.Qc = 0;
            this.Mh = !1;
            return this.getExpression()
        },
        vv: function() {
            this.Mh = !1;
            var a = this.getExpression();
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        },
        getExpression: function() {
            var a, b = this.Y;
            this.Ym[this.Y] = this.Ks;
            do {
                this.Y++;
                this.Jn = !0;
                this.nl[this.Qc].evaluate(this);
                this.Jn = !1;
                this.Qc++;
                do
                    if (a = this.nl[this.Qc], 0 < a.code && 1310720 > a.code) a.code > this.Ym[this.Y - 1].code ? (this.Ym[this.Y] = a, this.Qc++, this.Y++, this.Jn = !0, this.nl[this.Qc].evaluate(this), this.Jn = !1, this.Qc++) : (this.Y--, this.Ym[this.Y].evaluate(this));
                    else {
                        this.Y--;
                        if (this.Y == b) break;
                        this.Ym[this.Y].evaluate(this)
                    } while (1)
            } while (this.Y >
                b + 1);
            return this.na[b + 1]
        },
        XA: function(a) {
            var b = !1,
                c = 0;
            if (0 != (a.qa & u.Gi)) {
                if (null != a.D && a.D.LI()) return;
                null != a.ca && a.ca.rg(r.Nj) && (c = 1)
            }
            0 == c && (b = !0);
            b ? (a.ho = !1, this.Of(a.Kb)) : (null != a.D && (a.D.Ts(!1), a.X |= L.vh), null != a.A && (a.A.Gb(!1), a.A.VA(a, S.ZF, !1), a.b.aa = 0), 0 != (c & 1) && (a.ca.Gn(r.Nj), a.ca.Fq()))
        },
        dv: function() {
            var a, b = new Z,
                c;
            for (c = 0; c < this.B.oc; c++) {
                var d = this.B.Za[c],
                    e = 0 != (d.Ia & V.Ft),
                    f = 0 != (d.Ia & V.Gt),
                    g = d.Wr,
                    h;
                for (h = 0; h < g; h++) {
                    a = this.B.Gd.EA(d.Yr + h);
                    a.Cr < v.Tb && (b.left = a.Rv, b.top = a.Sv);
                    var q;
                    q = new ia(this.h,
                        b.left, b.top, a, null, 0);
                    q.sd(0, d);
                    e ? (q = new ia(this.h, this.B.ke + b.left, b.top, a, null, 0), q.sd(1, d), b.left + q.width > this.B.ke && (q = new ia(this.h, b.left - this.B.ke, b.top, a, null, 0), q.sd(4, d)), f && (q = new ia(this.h, b.left, this.B.Yc + b.top, a, null, 0), q.sd(2, d), q = new ia(this.h, this.B.ke + b.left, this.B.Yc + b.top, a, null, 0), q.sd(3, d), b.top + q.height > this.B.Yc && (q = new ia(this.h, b.left, b.top - this.B.Yc, a, null, 0), q.sd(5, d)))) : f && (q = new ia(this.h, b.left, this.B.Yc + b.top, a, null, 0), q.sd(2, d), b.top + q.height > this.B.Yc && (q = new ia(this.h,
                        b.left, b.top - this.B.Yc, a, null, 0), q.sd(5, d)))
                }
            }
        },
        OK: function() {
            for (var a, b = this.hl, c = this.il, d, e, f = 0; f < this.B.oc; f++) {
                a = this.B.Za[f];
                d = b;
                e = c;
                0 != (a.Ia & (V.Ht | V.It)) && (0 != (a.Ia & V.Ht) && (d *= a.Jj), 0 != (a.Ia & V.It) && (e *= a.Lj));
                d += a.zs;
                e += a.As;
                d += a.nk;
                e += a.qk;
                var g = 0 != (a.Ia & V.Gt);
                0 != (a.Ia & V.Ft) && (d %= this.B.ke, 0 > d && (d += this.B.ke));
                g && (e %= this.B.Yc, 0 > e && (e += this.B.Yc));
                a.x = d;
                a.y = e;
                a.zs += a.nk;
                a.As += a.qk;
                a.pc.x = -d + this.h.hg;
                a.pc.y = -e + this.h.ig;
                a.Nb.x = -d + this.h.hg;
                a.Nb.y = -e + this.h.ig;
                a.Wa.x = -d + this.h.hg;
                a.Wa.y = -e +
                    this.h.ig
            }
            this.B.dj = b;
            this.B.ej = c
        },
        II: function() {
            var a;
            for (a = 0; a < this.B.oc; a++) {
                var b = this.B.Za[a];
                b.Ia & V.rn && b.nr()
            }
        },
        RK: function(a, b, c, d) {
            a -= Math.floor(this.kl / 2);
            b -= Math.floor(this.ll / 2); - 1 != c && c < this.B.oc && (c = this.B.Za[c], 1 < c.Jj && (a -= this.fa, a /= c.Jj, a = p.Md(this.fa + a)), 1 < c.Lj && (b -= this.ka, b /= c.Lj, b = p.Md(this.ka + b)));
            0 > a && (a = 0);
            0 > b && (b = 0);
            c = a + this.kl;
            var e = b + this.ll;
            c > this.Ud && (c = this.Ud - this.kl, 0 > c && (c = 0), a = c);
            e > this.Vd && (e = this.Vd - this.ll, 0 > e && (e = 0), b = e);
            0 != (d & 1) && a != this.fa && (this.hl = a, this.jl |=
                k.ju);
            0 != (d & 2) && b != this.ka && (this.il = b, this.jl |= k.ju)
        },
        uL: function(a, b) {
            var c = !1;
            this.Ns = a - this.fa;
            this.Os = b - this.ka;
            if (0 != this.Ns || 0 != this.Os) c = !0;
            var d;
            if (!c)
                for (var e = 0; e < this.B.oc; e++)
                    if (d = this.B.Za[e], 0 != d.nk || 0 != d.qk) {
                        c = !0;
                        break
                    } var e = this.fa,
                f = this.ka,
                g = this.Ns,
                h = this.Os;
            this.fa = a;
            this.Rm = a - k.ln;
            0 > this.Rm && (this.Rm = this.Sm);
            this.ka = b;
            this.Vm = b - k.mn;
            0 > this.Vm && (this.Vm = this.Wm);
            this.Pm = a + this.kl + k.ln;
            this.Pm > this.Ud && (this.Pm = this.Qm);
            this.Tm = b + this.ll + k.mn;
            this.Tm > this.Vd && (this.Tm = this.Um);
            if (c)
                for (var q = c = 0; q < this.zb; q++) {
                    for (; null == this.G[c];) c++;
                    var l = this.G[c];
                    c++;
                    if (0 != (l.qa & u.lG)) null == l.A ? (l.w += g, l.u += h) : (l.A.ba.ec(l.w + g), l.A.ba.fc(l.u + h));
                    else if (d = l.fd, d < this.B.oc) {
                        var D = e,
                            n = f,
                            p = a,
                            m = b;
                        d = this.B.Za[d];
                        0 != (d.Ia & V.Ht) && (D *= d.Jj, p *= d.Jj);
                        0 != (d.Ia & V.It) && (n *= d.Lj, m *= d.Lj);
                        D = l.w + D - p + g - d.nk;
                        d = l.u + n - m + h - d.qk;
                        0 == (l.qa & u.Gf) ? (l.w = D, l.u = d) : (l.A.ba.ec(D), l.A.ba.fc(d));
                        l.fm()
                    }
                }
        },
        doScroll: function() {
            if (0 != (this.jl & k.ju)) {
                this.jl = 0;
                var a = this.B.dj != this.hl || this.B.ej != this.il;
                if (!a)
                    for (var b =
                            0; b < this.B.oc; b++)
                        if (0 != this.B.Za[b].nk || 0 != this.B.Za[b].qk) {
                            a = !0;
                            break
                        } if (a)
                    for (this.OK(), this.uL(this.B.dj, this.B.ej), b = 0; b < this.B.oc; b++) this.B.Za[b].nk = 0, this.B.Za[b].qk = 0;
                this.hl = this.fa;
                this.il = this.ka
            }
        },
        Aq: function(a, b, c, d, e, f) {
            d = this.B.Za[d];
            var g = new ia(this.h, b - this.fa + d.x, c - this.fa + d.y, null, a, e);
            g.sd(0, d);
            !f || e != da.mq && e != da.og || null == this.pi || (g.body = this.pi.OQ(pHo.w - this.fa + d.x, pHo.u - this.ka + d.y, pHo.b.La, e));
            f = 0 != (d.Ia & V.Gt);
            0 != (d.Ia & V.Ft) ? (g = new ia(this.h, this.B.ke + b - this.fa + d.x, c - this.ka +
                d.y, null, a, e), g.sd(1, d), b + g.width > this.B.ke && (g = new ia(this.h, b - this.fa + d.x - this.B.ke, c - this.ka + d.y, null, a, e), g.sd(4, d)), f && (g = new ia(this.h, b - this.fa + d.x, this.B.Yc + c - this.ka + d.y, null, a, e), g.sd(2, d), g = new ia(this.h, this.B.ke + b - this.fa + d.x, this.B.Yc + c - this.ka + d.y, null, a, e), g.sd(3, d), c + g.height > this.B.Yc && (g = new ia(this.h, b - this.fa + d.x, c - this.ka + d.y - this.B.Yc, null, a, e), g.sd(5, d)))) : f && (g = new ia(this.h, b - this.fa + d.x, this.B.Yc + c - this.ka + d.y, null, a, e), g.sd(2, d), c + g.height > this.B.Yc && (g = new ia(this.h, b -
                this.fa + d.x, c - this.ka + d.y - this.B.Yc, null, a, e), g.sd(5, d)))
        },
        PJ: function(a) {
            0 > a ? this.i.Ge(-720902) : this.i.Ge(-655366)
        },
        pA: function(a) {
            var b, c;
            if (0 != this.zb)
                for (b = 0; b < this.dh; b++)
                    if ((c = this.G[b]) && c.Bb.qj == a) return this.jv = c.Bb.qf - 1, c;
            return null
        },
        qA: function(a) {
            if (a && this.jv) {
                var b = a.Kb + 1;
                a = a.Bb.qj;
                for (var c;;) {
                    c = this.G[b];
                    if (null != c && c.Bb.qj == a) return this.jv--, c;
                    b++
                }
            }
            this.jv = 0;
            return null
        }
    };
    yd.Bl = 2;
    Q.KO = 15;
    Q.pG = 16;
    Q.Cn = 128;
    Q.$d = 256;
    Q.pq = 512;
    Q.qq = 1024;
    Q.LO = 2048;
    Q.rq = 4096;
    Q.oG = 65535;
    Q.prototype = {
        wH: function(a) {
            this.$c =
                a.Lo;
            this.jd = a.Ne;
            var b = a.vc;
            this.Rk = b.kj;
            this.oC = a.tw;
            this.nC = a.uw;
            this.ds = b.Sg;
            this.Mb = 0;
            this.kb = -1;
            this.Rd = Q.oG;
            null != a.vw && (this.qj = a.vw);
            this.Dm = Array(8);
            for (a = 0; 8 > a; a++) this.Dm[a] = b.qw[a];
            this.rf = null
        }
    };
    ca.YF = 0;
    ca.SN = 1;
    ca.VN = 2;
    ca.TN = 3;
    ca.PN = 4;
    ca.QN = 5;
    ca.RN = 6;
    ca.ON = 7;
    ca.UN = 8;
    ca.WN = 9;
    ca.LN = 0;
    ca.JN = 1;
    ca.NN = 2;
    ca.KN = 3;
    ca.MN = 4;
    ca.Ex = 123456789;
    ca.prototype = {
        EF: function() {
            m_currentAngle = 0
        },
        Z: function(a) {
            this.W = a;
            this.ta = this.W.c
        },
        Gb: function() {},
        move: function() {
            return !1
        },
        setPosition: function() {},
        ec: function() {},
        fc: function() {},
        stop: function() {},
        tg: function() {},
        reverse: function() {},
        start: function() {},
        Te: function() {},
        hh: function() {},
        Ce: function() {},
        Xs: function() {},
        Vs: function() {},
        tv: function() {
            return 0
        },
        Zu: function(a) {
            return this.W.A.Zu(this.W, a, 32)
        },
        Hn: function(a) {
            this.W.b.ze = a;
            null != this.W.ca && this.W.ca.Ze()
        },
        hr: function(a) {
            return this.W.c.Gc[a]
        },
        rp: function() {}
    };
    r.qe = 0;
    r.Kc = 1;
    r.De = 2;
    r.Fp = 3;
    r.Nj = 4;
    r.cE = 5;
    r.Gp = 6;
    r.Hx = 7;
    r.Gx = 8;
    r.Fx = 9;
    r.rt = 10;
    r.Hp = 11;
    r.SL = 12;
    r.lL = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    r.prototype = {
        load: function(a) {
            var b = a.R,
                c = Array(32),
                d;
            for (d = 0; 32 > d; d++) c[d] = a.s();
            this.ae = Array(32);
            this.Fh = Array(32);
            this.Mi = Array(32);
            for (d = 0; 32 > d; d++) this.ae[d] = null, this.Fh[d] = 0, this.Mi[d] = 0, 0 != c[d] && (this.ae[d] = new zd, a.seek(b + c[d]), this.ae[d].load(a))
        },
        gc: function(a) {
            var b;
            for (b = 0; 32 > b; b++) null != this.ae[b] && this.ae[b].gc(a)
        },
        bH: function(a) {
            var b, c, d, e, f;
            for (b = 0; 32 > b; b++)
                if (null == this.ae[b]) {
                    c = 0;
                    for (e = b + 1; 32 > c; c++, e++)
                        if (e &= 31, null != this.ae[e]) {
                            this.Fh[b] = e;
                            break
                        } d = 0;
                    for (f = b - 1; 32 > d; d++, f--)
                        if (f &= 31, null !=
                            this.ae[f]) {
                            this.Mi[b] = f;
                            break
                        } e == f || c < d ? this.Fh[b] |= 64 : d < c && (this.Mi[b] |= 64)
                } else 16 > a && 0 == r.lL[a] && (this.ae[b].ru = this.ae[b].qu)
        }
    };
    Pa.HD = [r.Fp, r.Kc, r.De, 0, r.De, r.qe, 0, 0, r.Kc, r.qe, 0, 0, r.qe, r.Kc, r.De, 0, r.qe, 0, 0, 0, r.qe, r.Kc, r.De, 0, r.qe, r.Kc, r.De, 0, r.Kc, r.De, r.qe, 0, r.qe, r.Kc, r.De, 0, r.Kc, r.De, r.qe, 0, r.qe, r.Kc, r.De, 0, r.qe, r.Kc, r.De, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    Pa.prototype = {
        load: function(a) {
            var b = a.R;
            a.wa(2);
            this.If = a.s();
            var c = Array(this.If),
                d;
            for (d = 0; d < this.If; d++) c[d] = a.s();
            this.Jf = Array(this.If);
            this.Li = Array(this.If);
            for (d = 0; d < this.If; d++) this.Jf[d] = null, this.Li[d] = 0, 0 != c[d] && (this.Jf[d] = new r, a.seek(b + c[d]), this.Jf[d].load(a), this.Li[d] = 1);
            for (a = 0; a < this.If; a++)
                if (0 == this.Li[a]) {
                    b = !1;
                    if (12 > a)
                        for (d = 0; 4 > d; d++)
                            if (0 != this.Li[Pa.HD[4 * a + d]]) {
                                this.Jf[a] = this.Jf[Pa.HD[4 * a + d]];
                                b = !0;
                                break
                            } if (0 == b)
                        for (d = 0; d < this.If; d++)
                            if (0 != this.Li[d]) {
                                this.Jf[a] = this.Jf[d];
                                break
                            }
                } else this.Jf[a].bH(a)
        },
        gc: function(a) {
            var b;
            for (b = 0; b < this.If; b++) 0 != this.Li[b] && this.Jf[b].gc(a)
        }
    };
    zd.prototype = {
        load: function(a) {
            this.ru =
                a.yb();
            this.qu = a.yb();
            this.Wy = a.s();
            this.Xy = a.s();
            this.Tl = a.s();
            this.ek = Array(this.Tl);
            var b;
            for (b = 0; b < this.Tl; b++) this.ek[b] = a.s()
        },
        gc: function(a) {
            var b;
            for (b = 0; b < this.Tl; b++)
                if (null != a) {
                    var c = a.wg(this.ek[b]); - 1 != c && (this.ek[b] = c)
                }
        }
    };
    La.vu = [r.qe, r.Kc, r.De, r.cE, r.Gp, r.Hx, r.Gx, r.Fx, r.rt, r.Hp, 12, 13, 14, 15, -1];
    La.prototype = {
        Z: function(a) {
            this.a = a;
            this.Km = 0;
            this.WA(r.Kc);
            if (this.rg(r.Fp)) this.Km = 1, this.Gn(r.Fp), this.Fq(), this.Hn();
            else {
                for (a = 0; 0 <= La.vu[a] && !this.rg(La.vu[a]); a++);
                0 > La.vu[a] && this.rg(r.Nj) &&
                    (this.Km = 2, this.Gn(r.Nj), this.Fq(), this.Hn())
            }
        },
        WA: function(a) {
            this.a.b.ze = a;
            this.ws = !1;
            this.uf = this.Vo = this.Im = this.al = this.Wo = this.Zg = 0;
            this.vs = this.uj = this.Zk = -1;
            this.Xo = this.ye = null;
            this.Hn()
        },
        Ze: function() {
            switch (this.Km) {
                case 0:
                    return this.Hn();
                case 1:
                    this.ZG();
                    break;
                case 2:
                    this.$G()
            }
            return !1
        },
        Hn: function() {
            var a = this.a.w;
            this.a.b.vj = a;
            a -= this.a.oa;
            this.a.b.Zw = a;
            a += this.a.L;
            this.a.b.$w = a;
            a = this.a.u;
            this.a.b.wj = a;
            a -= this.a.pa;
            this.a.b.ax = a;
            a += this.a.K;
            this.a.b.bx = a;
            this.a.b.ys = this.a.b.La;
            this.a.b.xs =
                this.a.b.Ka;
            return this.Ni(1)
        },
        Ni: function(a) {
            var b = this.a.N,
                c = this.a.b.aa,
                d = this.a.b.ze;
            0 != this.al && (c = this.al - 1);
            d == r.Kc && (0 == c && (d = r.qe), 75 <= c && (d = r.De));
            0 != this.Zg && (d = this.Zg - 1);
            d != this.Zk && (this.Zk = d, d >= b.ij.If && (d = b.ij.If - 1), b = b.ij.Jf[d], b != this.ye && (this.ye = b, this.us = -1, this.uf = 0, 0 == (this.a.qa & u.kG) && (this.Vo = 0)));
            var e, f = this.a.b.Qa % 32,
                b = !1;
            0 != this.Wo && (f = this.Wo - 1);
            if (this.us != f && (this.us = f, e = this.ye.ae[f], null == e ? 0 != (this.ye.Mi[f] & 64) ? f = this.ye.Mi[f] & 63 : 0 != (this.ye.Fh[f] & 64) ? f = this.ye.Fh[f] &
                    63 : (e = f, 0 > this.vs ? f = this.ye.Fh[f] & 63 : (f -= this.vs, f = 15 < (f & 31) ? this.ye.Fh[e] & 63 : this.ye.Mi[e] & 63)) : this.vs = f, e = this.ye.ae[f], null != this.ye.ae[0] && 0 != (this.a.N.kj & u.hG) && (this.a.b.Ka = 360 * this.us / 32, e = this.ye.ae[0], this.Xo = null, b = !0), this.Xo != e)) {
                this.Xo = e;
                this.$k = e.Wy;
                this.IC = e.Xy;
                var f = e.ru,
                    g = e.qu;
                if (f != this.uj || g != this.Jm) this.uj = f, this.Jm = g, this.HC = g - f, this.Hm = f, this.Xw = -1;
                this.vf = e.Tl;
                0 != this.Im && this.Im - 1 >= this.vf && (this.Im = 0);
                this.uf >= this.vf && (this.uf = 0);
                e = e.ek[this.uf];
                0 == this.ws && (this.a.b.La =
                    e, e = this.a.c.h.ha.Yi(e, this.a.b.Ka, this.a.b.qb, this.a.b.rb), null != e && (this.a.L = e.width, this.a.K = e.height, this.a.oa = e.Ea, this.a.pa = e.ya, this.a.Bv = e.ph, this.a.Cv = e.qh), this.a.b.M = !0, this.a.b.Xa = !0);
                if (1 == this.vf) {
                    0 == this.uj && (this.vf = 0);
                    e = this.a.b.La;
                    if (0 == e) return !1;
                    e = this.a.c.h.ha.Yi(e, this.a.b.Ka, this.a.b.qb, this.a.b.rb);
                    null != e && (this.a.L = e.width, this.a.K = e.height, this.a.oa = e.Ea, this.a.pa = e.ya, this.a.Bv = e.ph, this.a.Cv = e.qh);
                    return !1
                }
            }
            if (0 == a && 0 == this.Im || 0 == b && 0 == this.vf && d != r.Nj) return !1;
            a = this.HC;
            c != this.Xw && (this.Xw = c, 0 == a ? (this.Hm = this.uj, 0 != this.al && (this.Hm = this.al - 1)) : (d = this.a.b.lb - this.a.b.li, 0 == d ? 0 != this.al ? (a = a * c / 100 + this.uj, a > this.Jm && (a = this.Jm)) : (a /= 2, a += this.uj) : (a = a * c / d + this.uj, a > this.Jm && (a = this.Jm)), this.Hm = a));
            e = this.Xo;
            a = this.Im;
            if (0 == a) {
                if (0 == this.Hm || this.ws) return !1;
                c = this.Vo;
                a = this.uf;
                d = this.Hm;
                0 != (this.a.c.B.Yb & I.Vc) && (d = Math.round(d * this.a.c.Fc));
                for (c += d; 100 < c;)
                    if (c -= 100, a++, a >= this.vf && (a = this.IC, 0 != this.$k && (this.$k--, 0 == this.$k))) {
                        this.uf = this.vf - 1;
                        0 > this.uf && (this.uf =
                            0);
                        this.vf = 0;
                        0 != this.Zg && (this.al = this.Wo = this.Zg = 0);
                        this.uf < e.Tl && (e = e.ek[this.uf], e != this.a.b.La && (this.a.b.La = e, this.a.b.M = !0, this.a.b.Xa = !0));
                        this.Vo = c;
                        if (0 != (this.a.c.Sc & k.Jt)) return !1;
                        b && (this.a.b.M = !0, this.a.b.Xa = !0, e = this.a.c.h.ha.Yi(this.a.b.La, this.a.b.Ka, this.a.b.qb, this.a.b.rb), null != e && (this.a.L = e.width, this.a.K = e.height, this.a.oa = e.Ea, this.a.pa = e.ya, this.a.Bv = e.ph, this.a.Cv = e.qh));
                        b = -131072;
                        b |= this.a.Fa & 65535;
                        this.a.c.i.Rc = this.a.ca.Zk;
                        return this.a.c.i.yd(this.a, b)
                    } this.Vo = c
            } else a--;
            this.uf = a;
            this.a.b.M = !0;
            this.a.b.Xa = !0;
            e = e.ek[a];
            if (this.a.b.La != e || this.JC != this.a.b.Ka) this.a.b.La = e, this.JC = this.a.b.Ka, 0 <= e && (e = this.a.c.h.ha.Yi(e, this.a.b.Ka, this.a.b.qb, this.a.b.rb), null != e && (this.a.L = e.width, this.a.K = e.height, this.a.oa = e.Ea, this.a.pa = e.ya, this.a.Bv = e.ph, this.a.Cv = e.qh));
            return !1
        },
        rg: function(a) {
            return 0 == this.a.N.ij.Li[a] ? !1 : !0
        },
        Fq: function() {
            0 == this.$k && (this.$k = 1)
        },
        Gn: function(a) {
            this.Zg = a + 1;
            this.Ni(0)
        },
        aH: function() {
            this.Zg = 0;
            this.Ni(0)
        },
        YG: function(a) {
            this.Wo = (a & 31) + 1;
            this.Ni(0)
        },
        ZG: function() {
            this.Ni(1);
            this.Zg != r.Fp + 1 && (this.rg(r.qe) || this.rg(r.Kc) || this.rg(r.De) ? (this.Km = 0, this.aH()) : (this.Km = 2, this.a.c.XA(this.a)))
        },
        $G: function() {
            0 == (this.a.X & L.Ci) && (this.Ni(1), this.Zg != r.Nj + 1 && this.a.c.Of(this.a.Kb))
        }
    };
    Ad.prototype = {
        $u: function() {
            var a = this.app.yj + "M" + p.Xn(this.handle, "png"),
                b = new Image;
            this.ha.Lb[this.handle] = b;
            var c = this;
            b.onload = function() {
                c.app.Vi(c)
            };
            b.onerror = function() {
                c.app.Vi(c)
            };
            b.src = a
        }
    };
    Bd.prototype = {
        hi: function(a) {
            this.file = a;
            this.Hb = this.file.s();
            this.Qk = Array(this.Hb);
            a = this.file.s();
            var b, c, d = new Y;
            for (b = 0; b < a; b++) c = this.file.R, d.pm(this.file), this.Qk[d.handle] = c;
            this.Ya = Array(this.Hb);
            for (b = 0; b < this.Hb; b++) this.Ya[b] = 0;
            this.Ba = null;
            this.Wh = this.Hb;
            this.mf = 0;
            this.images = null
        },
        Wb: function(a) {
            return 0 <= a && a < this.Wh && -1 != this.Ba[a] ? this.images[this.Ba[a]] : null
        },
        qp: function() {
            var a;
            for (a = 0; a < this.Hb; a++) this.Qk[a] && (this.Ya[a] = 1)
        },
        yf: function() {
            if (0 == (this.app.Ia & n.zi) && 0 == (this.app.Ia & n.qt)) {
                var a;
                for (a = 0; a < this.Hb; a++) this.Ya[a] = 0
            }
            this.fi =
                null
        },
        Ej: function(a) {
            this.Ya[a]++
        },
        wg: function(a) {
            this.Ej(a);
            return -1
        },
        hB: function(a) {
            null == this.Lb[a] && (null != this.fi && a < this.fi.length && null != this.fi[a] ? this.Lb[a] = this.fi[a] : (this.Lb[a] = new Ad(this, a), this.app.Fn(this.Lb[a])))
        },
        load: function(a) {
            var b;
            if (0 < this.app.me)
                if (null == this.Lb) {
                    if (this.Lb = Array(this.app.me), this.app.Ia & n.zi)
                        for (b = 0; b < this.app.me; b++) this.app.Lb[b] && this.hB(b)
                } else if (0 == (this.app.Ia & n.zi)) {
                this.fi = Array(this.app.me);
                for (b = 0; b < this.app.me; b++) this.fi[b] = this.Lb[b];
                this.Lb =
                    Array(this.app.me);
                for (b = 0; b < this.app.me; b++) this.Lb[b] = null
            }
            for (b = this.mf = 0; b < this.Hb; b++) 0 != this.Ya[b] && this.mf++;
            b = Array(this.mf);
            var c = 0,
                d;
            for (d = 0; d < this.Hb; d++)
                if (0 != this.Ya[d]) {
                    if (null != this.images && -1 != this.Ba[d] && null != this.images[this.Ba[d]]) {
                        if (b[c] = this.images[this.Ba[d]], b[c].Ya = this.Ya[d], null != this.Lb && null != this.fi) {
                            var e = b[c].xb;
                            0 < e && (this.Lb[e] = this.fi[e])
                        }
                    } else 0 != this.Qk[d] && (b[c] = new Y, a.seek(this.Qk[d]), b[c].load(this.app), b[c].Ya = this.Ya[d]);
                    c++
                } this.images = b;
            this.Ba = Array(this.Hb);
            for (b = 0; b < this.Hb; b++) this.Ba[b] = -1;
            for (b = 0; b < this.mf; b++) this.images[b] && (this.Ba[this.images[b].handle] = b);
            this.Wh = this.Hb
        },
        fB: function(a) {
            var b;
            for (b = 0; b < a.length; b++)
                if (0 <= a[b] && a[b] < this.Wh && 0 != this.Qk[a[b]] && null == this.Wb(a[b])) {
                    var c, d = -1;
                    for (c = 0; c < this.mf; c++)
                        if (null == this.images[c]) {
                            d = c;
                            break
                        } if (-1 == d) {
                        var e = Array(this.mf + 10);
                        for (c = 0; c < this.mf; c++) e[c] = this.images[c];
                        for (; c < this.mf + 10; c++) e[c] = null;
                        d = this.mf;
                        this.mf += 10;
                        this.images = e
                    }
                    this.Ba[a[b]] = d;
                    this.images[d] = new Y;
                    this.images[d].Ya =
                        1;
                    this.file.seek(this.Qk[a[b]]);
                    this.images[d].load(this.app)
                }
        },
        Yi: function(a, b, c, d) {
            var e;
            null == this.gi && (this.gi = new Y);
            e = this.Wb(a);
            if (null != e) {
                a = e.width;
                var f = e.height,
                    g = e.Ea,
                    h = e.ya,
                    q = e.ph;
                e = e.qh;
                0 == b ? (1 != c && (g *= c, q *= c, a *= c), 1 != d && (h *= d, e *= d, f *= d)) : (1 != c && (g *= c, q *= c, a *= c), 1 != d && (h *= d, e *= d, f *= d), null == this.ki && (this.ki = new Z), null == this.Ck && (this.Ck = new G), null == this.fk && (this.fk = new G), this.Ck.x = g, this.Ck.y = h, this.fk.x = q, this.fk.y = e, this.ki.left = this.ki.top = 0, this.ki.right = a, this.ki.bottom = f,
                    this.RH(this.ki, this.Ck, this.fk, b), a = this.ki.right, f = this.ki.bottom, g = this.Ck.x, h = this.Ck.y, q = this.fk.x, e = this.fk.y);
                this.gi.width = a;
                this.gi.height = f;
                this.gi.Ea = g;
                this.gi.ya = h;
                this.gi.ph = q;
                this.gi.qh = e;
                return this.gi
            }
            return e
        },
        RH: function(a, b, c, d) {
            var e, f, g;
            90 == d ? (d = 0, g = 1) : 180 == d ? (d = -1, g = 0) : 270 == d ? (d = 0, g = -1) : (g = d * Math.PI / 180, d = Math.cos(g), g = Math.sin(g));
            var h, q, k, l, n;
            null == b ? h = q = n = f = 0 : (k = -b.x * d, l = -b.x * g, n = -b.y * d, f = -b.y * g, h = k + f, q = n - l);
            e = null == b ? a.right : a.right - b.x;
            k = e * d;
            l = e * g;
            e = k + f;
            n -= l;
            var p;
            f = null ==
                b ? a.bottom : a.bottom - b.y;
            p = k + f * g;
            f = f * d - l;
            var m, v;
            m = h + p - e;
            v = q + f - n;
            k = Math.min(h, Math.min(e, Math.min(p, m)));
            l = Math.min(q, Math.min(n, Math.min(f, v)));
            h = Math.max(h, Math.max(e, Math.max(p, m)));
            q = Math.max(q, Math.max(n, Math.max(f, v)));
            null != c && (null == b ? (e = c.x, f = c.y) : (e = c.x - b.x, f = c.y - b.y), c.x = e * d + f * g - k, c.y = f * d - e * g - l);
            null != b && (b.x = -k, b.y = -l);
            a.right = h - k;
            a.bottom = q - l
        }
    };
    Y.DJ = 10;
    Y.Sp = 1;
    Y.vg = function(a, b) {
        var c = new Y;
        c.app = a;
        c.wb = new Image;
        c.wb.onload = function() {
            c.app.Oh++;
            c.width = c.wb.width;
            c.height = c.wb.height
        };
        a.Ph++;
        a.Jg = !0;
        c.wb.src = a.yj + b;
        return c
    };
    Y.prototype = {
        pm: function(a) {
            this.handle = a.s();
            a.wa(12)
        },
        $u: function() {
            this.wb = new Image;
            var a = this;
            this.wb.onload = function() {
                a.app.Vi(a)
            };
            this.wb.onerror = function() {
                a.app.Vi(a)
            };
            this.wb.src = this.app.yj + p.Xn(this.handle, "png")
        },
        load: function(a) {
            this.app = a;
            this.handle = a.file.s();
            this.width = a.file.s();
            this.height = a.file.s();
            this.Ea = a.file.V();
            this.ya = a.file.V();
            this.ph = a.file.V();
            this.qh = a.file.V();
            this.xb = 0;
            this.wb = null;
            null != this.app.frame.vo ? (this.xb = this.app.frame.vo[this.handle],
                0 != this.xb ? (this.app.ha.hB(this.xb), this.Ad = this.app.frame.Ad[this.handle], this.Bd = this.app.frame.Bd[this.handle]) : this.app.Fn(this)) : this.app.Fn(this)
        },
        createElement: function() {
            var a = document.createElement("div");
            a.style.width = this.width + "px";
            a.style.height = this.height + "px";
            a.style.backgroundRepeat = "no-repeat";
            0 == this.xb ? a.style.backgroundImage = "url('" + this.wb.src + "')" : (a.style.backgroundPosition = "-" + this.Ad + "px -" + this.Bd + "px", a.style.backgroundImage = "url('" + this.app.yj + "M" + p.Xn(this.xb, "png") +
                "')");
            return a
        },
        Cg: function(a, b, c, d) {
            if (0 == (a & J.Tj)) {
                null == this.jf && (this.jf = new J, this.mo & Y.Sp ? this.jf.Vu(this.app, this, a) : this.jf.Uu(this.app, this, a));
                if (0 == b && 1 == c && 1 == d) return this.jf;
                null == this.Uh && (this.Uh = new P);
                var e, f = 2147483647,
                    g = -1;
                for (e = 0; e < this.Uh.size(); e++) {
                    a = this.Uh.get(e);
                    if (b == a.angle && c == a.rc && d == a.sc) return a.P;
                    a.xx < f && (f = a.xx, g = e)
                }
                this.Uh.size() < this.DJ && (g = -1);
                a = new qf;
                a.P = new J;
                a.P.CH(this.jf, b, c, d);
                a.angle = b;
                a.rc = c;
                a.sc = d;
                a.xx = this.app.od;
                0 > g ? this.Uh.add(a) : this.Uh.set(g, a);
                return a.P
            }
            null == this.Kk && (null == this.jf && (this.jf = new J, this.mo & Y.Sp ? this.jf.Vu(this.app, this, 0) : this.jf.Uu(this.app, this, 0)), this.Kk = new J, this.mo & Y.Sp ? this.Kk.Vu(this.app, this, a) : this.Kk.Uu(this.app, this, a));
            return this.Kk
        }
    };
    Cd.prototype = {
        hi: function(a) {
            var b = a.v(),
                c;
            this.le = 0;
            var d = a.R,
                e = new za;
            for (c = 0; c < b; c++) e.pm(a), this.le = Math.max(this.le, e.handle + 1);
            a.seek(d);
            this.bs = Array(this.le);
            for (c = 0; c < b; c++) d = a.R, e.pm(a), this.bs[e.handle] = d;
            this.Ya = Array(this.le);
            for (c = 0; c < this.le; c++) this.Ya[c] = 0;
            this.Ba = null;
            this.Lg = this.le;
            this.Vh = 0;
            this.fonts = null
        },
        load: function(a) {
            var b;
            for (b = this.Vh = 0; b < this.le; b++) 0 != this.Ya[b] && this.Vh++;
            b = Array(this.Vh);
            var c = 0,
                d;
            for (d = 0; d < this.le; d++) 0 != this.Ya[d] && (null != this.fonts && -1 != this.Ba[d] && null != this.fonts[this.Ba[d]] ? b[c] = this.fonts[this.Ba[d]] : (b[c] = new za, a.seek(this.bs[d]), b[c].load(a)), b[c].Ya = this.Ya[d], c++);
            this.fonts = b;
            this.Ba = Array(this.le);
            for (b = 0; b < this.le; b++) this.Ba[b] = -1;
            for (b = 0; b < this.Vh; b++) this.Ba[this.fonts[b].handle] = b;
            this.Lg = this.le
        },
        Rf: function(a) {
            return -1 == a ? this.Go : 0 <= a && a < this.Lg && -1 != this.Ba[a] ? this.fonts[this.Ba[a]] : null
        },
        gr: function(a) {
            return this.Rf(a).qI()
        },
        yf: function() {
            if (0 == (this.app.bQ & n.zi) && 0 == (this.app.Ia & n.qt)) {
                var a;
                for (a = 0; a < this.le; a++) this.Ya[a] = 0
            }
        },
        qp: function() {
            var a;
            for (a = 0; a < this.le; a++) this.bs[a] && (this.Ya[a] = 1)
        },
        Ej: function(a) {
            -1 == a ? null == this.Go && (this.Go = new za, this.Go.Rq()) : this.Ya[a]++
        },
        wg: function(a) {
            this.Ej(a);
            return -1
        },
        Dq: function(a) {
            var b, c;
            for (c = 0; c < this.Vh && (null == this.fonts[c] || this.fonts[c].lc !=
                    a.lc || this.fonts[c].Ke != a.Ke || this.fonts[c].Je != a.Je || this.fonts[c].Ie != a.Ie); c++);
            if (c < this.Vh) return this.fonts[c].handle;
            c = -1;
            for (b = this.le; b < this.Lg && -1 != this.Ba[b]; b++);
            if (-1 == c) {
                var d = Array(this.Lg + 10);
                for (b = 0; b < this.Lg; b++) d[b] = this.Ba[b];
                for (; b < this.Lg + 10; b++) d[b] = -1;
                c = this.Lg;
                this.Lg += 10;
                this.Ba = d
            }
            d = -1;
            for (b = 0; b < this.Vh; b++)
                if (null == this.fonts[b]) {
                    d = b;
                    break
                } - 1 == d && (d = this.Vh, this.fonts.push(null));
            this.Ba[c] = d;
            this.fonts[d] = new za;
            this.fonts[d].handle = c;
            this.fonts[d].lc = a.lc;
            this.fonts[d].Ke =
                a.Ke;
            this.fonts[d].Je = a.Je;
            this.fonts[d].Ie = a.Ie;
            return c
        }
    };
    za.prototype = {
        pm: function(a) {
            this.handle = a.v();
            0 == a.td ? a.wa(72) : a.wa(104)
        },
        load: function(a) {
            this.handle = a.v();
            var b = a.R;
            a.wa(12);
            this.lc = a.v();
            0 > this.lc && (this.lc = -this.lc);
            a.v();
            a.v();
            a.v();
            this.Ke = a.v();
            this.Je = a.yb();
            a.yb();
            a.yb();
            a.yb();
            a.yb();
            a.yb();
            a.yb();
            a.yb();
            this.Ie = a.Ob();
            0 == a.td ? a.seek(b + 72) : a.seek(b + 104)
        },
        qI: function() {
            var a = new eb;
            a.lc = this.lc;
            a.Ke = this.Ke;
            a.Je = this.Je;
            a.Ie = this.Ie;
            return a
        },
        Rq: function() {
            this.Ie = "Arial";
            this.lc =
                13;
            this.Ke = 400;
            this.Je = 0
        },
        df: function() {
            return this.lc + Math.ceil(this.lc / 8)
        },
        Bg: function() {
            if (null == this.font) {
                this.font = this.Je ? "italic " : "normal ";
                var a = 100 * Math.floor(this.Ke / 100),
                    a = Math.max(a, 100),
                    a = Math.min(a, 900);
                this.font += a + " ";
                this.font += this.lc + "px ";
                this.font += this.Ie
            }
            return this.font
        }
    };
    Dd.prototype = {
        hi: function(a) {
            this.file = a;
            this.Hb = this.file.s();
            this.cs = Array(this.Hb);
            this.Ya = Array(this.Hb);
            this.Ba = Array(this.Hb);
            for (a = 0; a < this.Hb; a++) this.Ya[a] = 0, this.Ba[a] = -1;
            var b = this.file.s(),
                c =
                new Va(this.app),
                d;
            for (a = 0; a < b; a++) d = this.file.R, c.pm(), this.cs[c.handle] = d;
            this.Wh = this.Hb;
            this.Do = 0;
            this.Fj = null
        },
        wI: function(a) {
            return 0 <= a && a < this.Wh && -1 != this.Ba[a] ? this.Fj[this.Ba[a]] : null
        },
        sv: function(a) {
            for (var b = 0; b < this.Wh; b++)
                if (-1 != this.Ba[b] && this.Fj[this.Ba[b]].name == a) return b;
            return -1
        },
        yf: function() {
            if (0 == (this.app.Ia & n.zi) && 0 == (this.app.Ia & n.qt)) {
                var a;
                for (a = 0; a < this.Hb; a++) this.Ya[a] = 0
            }
        },
        qp: function() {
            var a;
            for (a = 0; a < this.Hb; a++) this.cs[a] && (this.Ya[a] = 1)
        },
        Ej: function(a) {
            this.Ya[a]++
        },
        wg: function(a) {
            this.Ej(a);
            return -1
        },
        load: function() {
            var a;
            for (a = this.Do = 0; a < this.Hb; a++) 0 != this.Ya[a] && this.Do++;
            a = Array(this.Do);
            var b = 0,
                c;
            for (c = 0; c < this.Hb; c++) 0 != this.Ya[c] && (null != this.Fj && -1 != this.Ba[c] && null != this.Fj[this.Ba[c]] ? a[b] = this.Fj[this.Ba[c]] : (a[b] = new Va(this.app), this.file.seek(this.cs[c]), a[b].load()), a[b].Ya = this.Ya[c], b++);
            this.Fj = a;
            this.Ba = Array(this.Hb);
            for (a = 0; a < this.Hb; a++) this.Ba[a] = -1;
            for (a = 0; a < this.Do; a++) this.Ba[this.Fj[a].handle] = a;
            this.Wh = this.Hb;
            this.yf()
        }
    };
    Va.prototype = {
        pm: function() {
            this.handle = this.file.s();
            this.file.wa(5);
            var a = this.file.s();
            0 == this.file.td ? this.file.wa(a) : this.file.wa(2 * a)
        },
        $u: function() {
            var a, b = this.Ub.wc.Rw & this.type;
            0 == b && (b = this.Ub.wc.bw & this.type);
            for (a = 0; 4 > a && !(b & 1 << a); a++);
            if (4 > a) {
                b = "";
                switch (a) {
                    case 0:
                        b = "ogg";
                        break;
                    case 1:
                        b = "m4a";
                        break;
                    case 2:
                        b = "mp3";
                        break;
                    case 3:
                        b = "wav"
                }
                if (this.context) {
                    var c = this,
                        d = new XMLHttpRequest;
                    d.open("GET", this.Ub.yj + p.Xn(this.handle, b), !0);
                    d.responseType = "arraybuffer";
                    d.addEventListener("load", function() {
                        if (d.status >= 200 && d.status < 300 && d.response && d.response.byteLength > 0) {
                            c.response = d.response;
                            c.Ub.Vi(c);
                            c.Ub.wc.SG(c)
                        } else {
                            c.Ub.Vi(c)
                        }
                    });
                    d.addEventListener("error", function() {
                        c.Ub.Vi(c)
                    });
                    d.addEventListener("abort", function() {
                        c.Ub.Vi(c)
                    });
                    d.send()
                } else this.ub = new Audio, this.ub.LQ = "auto", c = this, this.ub.addEventListener("loadeddata", function(a) {
                    c.Ub.Vi(c);
                    c.ub.removeEventListener("loadeddata", arguments.callee, !1)
                }, !1), this.ub.addEventListener("error", function() {
                    c.Ub.Vi(c);
                    c.ub = null
                }, !1), this.ub.src = this.Ub.yj + p.Xn(this.handle, b), this.ub.load(), this.ub.autoplay = !1
            } else this.Ub.Vi(this)
        },
        load: function() {
            this.handle = this.file.s();
            this.type = this.file.yb();
            this.On = this.frequency = this.file.v();
            var a = this.file.s();
            this.name = this.file.Ob(a);
            this.ub = null;
            this.Ub.Fn(this)
        },
        wJ: function() {
            this.handle = 9999;
            this.type = 4;
            this.On = this.frequency = 4E4;
            this.name = "";
            this.ub = null;
            this.Ub.Fn(this)
        },
        Vk: function(a, b) {
            a || (a = 0);
            b || (b = this.frequency);
            if (this.ub) this.ub.volume = this.volume / 100, this.On = b, this.ub.playbackRate = b / this.frequency, this.ub.duration && (this.ub.currentTime = 0), this.ub.play();
            else if (this.buffer) {
                this.source = this.context.createBufferSource();
                this.source.buffer = this.buffer;
                0 == this.$l ? (this.source.gain.value = this.volume /
                    100, this.source.connect(this.context.destination)) : (this.gain = this.context.createGain(), this.source.connect(this.gain), this.gain.connect(this.context.destination), this.gain.gain.value = this.volume / 100);
                a || (a = 0);
                b || (b = this.frequency);
                this.On = b;
                this.source.playbackRate.value = b / this.frequency;
                this.startTime = Date.now() - a;
                "undefined" !== typeof this.source.start ? this.source.start(0, a / 1E3) : this.source.noteOn(a);
                var c = this;
                this.source.onended = function() {
                    c.az = !0
                }
            }
            this.gk = !1;
            this.Qi = !0;
            this.az = !1
        },
        play: function(a,
            b, c) {
            this.Xh = a;
            0 == this.Xh && (this.Xh = 1E7);
            this.volume = c;
            this.Vk()
        },
        stop: function() {
            this.ub ? this.ub.pause() : this.source && this.Qi && ("undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.source.onended = null);
            this.Qi = this.Ln = !1
        },
        ZK: function(a) {
            this.volume = a;
            this.ub ? this.ub.volume = a / 100 : this.source && (this.gain ? this.gain.gain.value = a / 100 : this.source.gain.value = a / 100)
        },
        pause: function() {
            this.gk || (this.ub ? this.ub.pause() : this.source && (this.source.onended = null, "undefined" !== typeof this.source.stop ?
                this.source.stop(0) : this.source.noteOff(0), this.YJ = Date.now() - this.startTime), this.gk = !0)
        },
        resume: function() {
            this.gk && (this.ub ? this.ub.play() : this.source && this.Vk(this.YJ), this.gk = !1)
        },
        XI: function() {
            return this.gk
        },
        aB: function() {
            return (this.ub || this.source) && this.Qi ? !0 : !1
        },
        setPosition: function(a) {
            this.ub ? this.ub.currentTime = a / 1E3 : this.source && (this.Qi && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0)), this.Vk(a))
        },
        hH: function() {
            if (1 == this.Qi &&
                0 == this.gk)
                if (this.ub) {
                    if (this.ub.ended) {
                        if (0 < this.Xh && (this.Xh--, 0 < this.Xh)) return this.Vk(0, this.On), !1;
                        this.Qi = this.Ln = !1;
                        return !0
                    }
                } else if (this.source && (3 == this.source.playbackState || this.az)) {
                if (0 < this.Xh && (this.Xh--, 0 < this.Xh)) return this.Vk(0, this.On), !1;
                this.Qi = this.Ln = !1;
                return !0
            }
            return !1
        }
    };
    jb.prototype = {
        Jx: function(a) {
            this.dK[this.position++] = a
        }
    };
    C.Ee = 80;
    C.Jp = 52;
    C.sE = C.Ee;
    C.tE = C.sE + 1 - C.Jp;
    C.kq = 4;
    C.wt = 199 + C.Ee;
    C.uE = C.wt + 1 - C.kq - C.Jp;
    C.qG = 256;
    C.VE = 1;
    C.OP = function(a, b) {
        var c = b >> 5,
            d = 1 << (b & 31),
            e = 0 != (a[c] & d);
        a[c] |= d;
        return e
    };
    C.ZH = function(a) {
        return a.Fb + 0
    };
    C.Xe = function(a) {
        a &= 65535;
        return 0 != (a & 32768) ? a - 65536 : a
    };
    C.Dt = function(a) {
        return a >> 16
    };
    C.yk = function(a) {
        return a & 4294901760
    };
    C.prototype = {
        zg: function(a) {
            var b;
            this.Wc = 0;
            this.$g = null;
            this.ah = -1;
            if (0 != (a & 32768)) return 32767 == (a & 32767) ? null : this.iK(a);
            var c = this.l.T[a];
            if (c.Mb == this.Pb) {
                if (0 != (c.fb & 2147483648)) return null;
                b = this.l.G[c.fb];
                this.oi = null;
                this.el = c;
                this.zf = b;
                this.$o = a
            } else {
                c.Mb = this.Pb;
                if (this.bh) return c.fb = -1, c.Ed = 0, null;
                c.fb = c.kb;
                if (0 != (c.kb & 2147483648)) return c.Ed = 0, null;
                var d = c.kb;
                do b = this.l.G[d], d = b.Xb, b.jc = d; while (0 == (d & 2147483648));
                b = this.l.G[c.kb];
                this.oi = null;
                this.el = c;
                this.zf = b;
                this.$o = a;
                c.Ed = c.qf
            }
            this.Wc = c.Ed;
            return b
        },
        iK: function(a) {
            var b, c, d = 0,
                e = 0;
            for (a = this.Pc[a & 32767]; e < a.J.length;) {
                c = a.J[e + 1];
                if (0 > c) break;
                c = this.l.T[c];
                if (c.Mb == this.Pb) b = 0, 0 == (c.fb & 2147483648) && (b = c.Ed, null == this.$g && (this.$g = a, this.ah = e));
                else if (b = 0, c.Mb = this.Pb, this.bh) c.fb = -1, c.Ed = 0;
                else if (c.fb = c.kb, 0 != (c.kb & 2147483648)) c.Ed =
                    0;
                else {
                    null == this.$g && (this.$g = a, this.ah = e);
                    b = c.kb;
                    do b = this.l.G[b], b = b.jc = b.Xb; while (0 == (b & 2147483648));
                    b = c.Ed = c.qf
                }
                d += b;
                e += 2
            }
            a = this.$g;
            return null != a ? (c = this.l.T[a.J[this.ah + 1]], this.oi = null, this.el = c, this.zf = b = this.l.G[c.fb], this.$o = a.J[this.ah + 1], this.Wc = d, b) : null
        },
        Pf: function() {
            var a = this.zf,
                b;
            if (null == a && (b = this.l.T[this.$o], 0 == (b.fb & 2147483648))) return a = this.l.G[b.fb], this.oi = null, this.el = b, this.zf = a;
            if (null != a && 0 == (a.jc & 2147483648)) return this.oi = a, this.el = null, this.zf = a = this.l.G[a.jc];
            if (null ==
                this.$g) return null;
            do {
                this.ah += 2;
                if (this.ah >= this.$g.J.length) return null;
                a = this.$g.J[this.ah + 1];
                if (0 > a) return null;
                b = this.l.T[a]
            } while (0 != (b.fb & 2147483648));
            this.oi = null;
            this.el = b;
            this.zf = a = this.l.G[b.fb];
            this.$o = this.$g.J[this.ah + 1];
            return a
        },
        kA: function(a) {
            a = this.Pc[a & 32767];
            for (var b = 0, c; b < a.J.length;) {
                c = a.J[b + 1];
                if (0 > c) break;
                c = this.l.T[c];
                c.Mb = this.Pb;
                c.Ed = 0;
                c.fb = -1;
                b += 2
            }
        },
        wd: function() {
            --this.zf.Bb.Ed;
            null != this.oi ? (this.oi.jc = this.zf.jc, this.zf = this.oi) : (this.el.fb = this.zf.jc, this.zf = null)
        },
        Xi: function(a) {
            var b = a.Bb;
            if (b.Mb != this.Pb) b.Mb = this.Pb, b.fb = a.Kb, b.Ed = 1, a.jc = -1;
            else {
                var c = b.fb;
                if (0 != (c & 2147483648)) b.fb = a.Kb, b.Ed += 1, a.jc = -1;
                else {
                    do {
                        if (a.Kb == c) return;
                        b = this.l.G[c];
                        c = b.jc
                    } while (0 == (c & 2147483648));
                    b.jc = a.Kb;
                    a.jc = -1;
                    a.Bb.Ed += 1
                }
            }
        },
        Uz: function(a) {
            a = this.l.T[a];
            a.Mb = this.Pb;
            a.fb = -1;
            a.Ed = 0
        },
        $H: function(a, b) {
            if (0 == (a & 32768)) this.Uz(a);
            else {
                if (32767 == (a & 32767)) return;
                var c = this.Pc[a & 32767],
                    d;
                for (d = 0; d < c.J.length; d += 2) {
                    var e = c.J[d + 1];
                    if (0 > e) break;
                    this.Uz(e)
                }
            }
            b.jc = -1;
            b.Bb.fb = b.Kb;
            b.Bb.Ed =
                1;
            b.Bb.Mb = this.Pb
        },
        lA: function() {
            var a, b, c;
            for (b = 0; b < this.l.Af; b++)
                if (c = this.l.T[b], c.Mb == this.Pb) {
                    if (c.yw != this.Is)
                        for (c.yw = this.Is, a = c.kb; 0 == (a & 2147483648);) a = this.l.G[a], a.Dv = 0, a = a.Xb;
                    for (a = c.fb; 0 == (a & 2147483648);) a = this.l.G[a], a.Dv = 1, a = a.jc
                }
        },
        jA: function() {
            var a, b, c, d, e;
            for (d = 0; d < this.l.Af; d++)
                if (e = this.l.T[d], e.yw == this.Is)
                    for (e.Mb = this.Pb, a = e.kb, c = null; 0 == (a & 2147483648);) b = this.l.G[a], 0 != b.Dv && (null != c ? c.jc = a : e.fb = a, b.jc = -1, c = b), a = b.Xb
        },
        ff: function(a) {
            if (this.dl) return this.Om = !1, a = this.kr(a);
            var b;
            if (0 == (a & 32768)) return b = this.l.T[a], b.Mb == this.Pb && 0 == (b.fb & 2147483648) ? this.l.G[b.fb] : 0 == (b.kb & 2147483648) ? this.l.G[b.kb] : null;
            a = this.Pc[a & 32767];
            var c = 0;
            if (c >= a.J.length) return null;
            do {
                b = a.J[c + 1];
                if (0 > b) break;
                b = this.l.T[b];
                if (b.Mb == this.Pb && 0 == (b.fb & 2147483648)) return this.l.G[b.fb];
                c += 2
            } while (c < a.J.length);
            c = 0;
            do {
                b = a.J[c + 1];
                if (0 > b) break;
                b = this.l.T[b];
                if (0 == (b.kb & 2147483648)) return this.l.G[b.kb];
                c += 2
            } while (c < a.J.length);
            return null
        },
        zI: function(a, b) {
            this.Om = !0;
            var c = this.kr(a);
            if (null !=
                c) return 0 != this.Ec && (b.Ja |= X.yi, this.zj = !0), c;
            b.Ja |= U.El;
            return c
        },
        Pa: function(a) {
            a.Ja &= ~U.El;
            this.Om = !0;
            var b = this.kr(a.Sa);
            if (null != b) return 0 != this.Ec && (a.Ja |= X.yi, this.zj = !0), b;
            a.Ja |= U.El;
            return b
        },
        kr: function(a) {
            return 0 == (a & 32768) ? this.xI(a) : this.yI(a)
        },
        xI: function(a) {
            var b = this.l.T[a];
            if (b.ww != this.cl) {
                b.ww = this.cl;
                b.xw = this.ni;
                if (b.Mb == this.Pb && 0 == (b.fb & 2147483648)) {
                    b.Vg = b.fb;
                    a = this.l.G[b.fb];
                    b.rj = a.jc;
                    if (0 != (a.jc & 2147483648)) return b.bg = !1, b.pj = 1, this.Ec = !1, a;
                    b.bg = !0;
                    b.pj = 2;
                    this.Ec = !0;
                    return a
                }
                if (this.Om &&
                    b.Mb == this.Pb) return b.pj = 0, b.Vg = -1, null;
                if (0 == (b.kb & 2147483648)) {
                    b.Vg = b.kb;
                    a = this.l.G[b.kb];
                    if (null == a) return b.pj = 0, b.Vg = -1, null;
                    if (0 == (a.Xb & 2147483648)) return b.rj = a.Xb, b.bg = !0, b.pj = 3, this.Ec = !0, a;
                    b.bg = !1;
                    b.pj = 1;
                    this.Ec = !1;
                    return a
                }
                b.pj = 0;
                b.Vg = -1;
                return null
            }
            if (b.xw != this.ni) {
                var c;
                b.xw = this.ni;
                switch (b.pj) {
                    case 0:
                        return this.Ec = b.bg, null;
                    case 1:
                        return a = this.l.G[b.Vg], this.Ec = b.bg, a;
                    case 2:
                        b.Vg = b.rj;
                        a = this.l.G[b.rj];
                        if (null == a) return null;
                        c = a.jc;
                        0 != (c & 2147483648) && (b.bg = !1, c = b.fb);
                        b.rj = c;
                        this.Ec =
                            b.bg;
                        return a;
                    case 3:
                        b.Vg = b.rj;
                        a = this.l.G[b.rj];
                        if (null == a) return null;
                        c = a.Xb;
                        0 != (c & 2147483648) && (b.bg = !1, c = b.kb);
                        b.rj = c;
                        this.Ec = b.bg;
                        return a
                }
            }
            if (0 > b.Vg) return null;
            a = this.l.G[b.Vg];
            this.Ec = b.bg;
            return a
        },
        yI: function(a) {
            var b, c = this.Pc[a & 32767];
            if (c.ps != this.cl) {
                c.ps = this.cl;
                c.Sw = this.ni;
                b = this.FC(c);
                if (0 <= b) {
                    c.Wg = b;
                    a = this.l.G[b];
                    if (null == a) return c.sj = 0, c.Wg = -1, null;
                    b = a.jc;
                    if (0 != (b & 2147483648) && (b = this.Vw(c), 0 > b)) return c.sj = 1, this.Ec = c.cg = !1, a;
                    c.tj = b;
                    c.sj = 2;
                    this.Ec = c.cg = !0;
                    return a
                }
                if (this.Om &&
                    c.Tw) return c.sj = 0, c.Wg = -1, null;
                b = this.EC(c);
                if (0 <= b && (c.Wg = b, a = this.l.G[b], null != a)) {
                    b = a.Xb;
                    if (0 != (b & 2147483648) && (b = this.Uw(c), 0 != (b & 2147483648))) return c.sj = 1, this.Ec = c.cg = !1, a;
                    c.tj = b;
                    c.sj = 3;
                    this.Ec = c.cg = !0;
                    return a
                }
                c.sj = 0;
                c.Wg = -1;
                return null
            }
            if (c.Sw != this.ni) switch (c.Sw = this.ni, c.sj) {
                case 0:
                    return this.Ec = c.cg, null;
                case 1:
                    return a = this.l.G[c.Wg], this.Ec = c.cg, a;
                case 2:
                    return c.Wg = c.tj, a = this.l.G[c.tj], null != a && (b = a.jc, 0 != (b & 2147483648) && (b = this.Vw(c), 0 > b && (c.cg = !1, b = this.FC(c))), c.tj = b), this.Ec =
                        c.cg, a;
                case 3:
                    return c.Wg = c.tj, a = this.l.G[c.tj], null != a && (b = a.Xb, 0 != (b & 2147483648) && (b = this.Uw(c), 0 != (b & 2147483648) && (c.cg = !1, b = this.EC(c))), c.tj = b), this.Ec = c.cg, a
            }
            if (0 > c.Wg) return null;
            a = this.l.G[c.Wg];
            this.Ec = c.cg;
            return a
        },
        Vw: function(a) {
            for (var b = a.Gm, c; b < a.J.length;) {
                c = a.J[b + 1];
                if (0 > c) break;
                c = this.l.T[c];
                if (c.Mb == this.Pb && (a.Tw = !0, 0 == (c.fb & 2147483648))) return a.Gm = b + 2, c.fb;
                b += 2
            }
            return -1
        },
        FC: function(a) {
            a.Gm = 0;
            a.Tw = !1;
            return this.Vw(a)
        },
        Uw: function(a) {
            for (var b = a.Gm, c; b < a.J.length;) {
                c = a.J[b + 1];
                if (0 > c) break;
                c = this.l.T[c];
                if (0 == (c.kb & 2147483648)) return a.Gm = b + 2, c.kb;
                b += 2
            }
            return -1
        },
        EC: function(a) {
            a.Gm = 0;
            return this.Uw(a)
        },
        TH: function() {
            this.Hu = !1;
            for (var a = this.l.Gs, b = this.l.Hs;;) {
                for (var c = null, d = null, e = this.l.XC; null != e;) {
                    if (0 > e.index) {
                        (c = e.next) && (p.yc(e.name, c.name) || (c = null));
                        break
                    }
                    d = e;
                    e = e.next
                }
                if (null == e) break;
                var f = -2686976,
                    g = -2686976,
                    h = null;
                0 < e.$f && (h = e.Me[0].Fa == v.Tb ? this.tf : this.sf);
                null != h && (h = h.get(e.name), void 0 != h && (f = 65536 * -h), null != c && (h = null, 0 < c.$f && (h = c.Me[0].Fa == v.Tb ? this.tf :
                    this.sf), null != h && (h = h.get(c.name), void 0 != h && (g = 65536 * -h))));
                e.stop = !1;
                for (e.index = 0; e.index < e.$f; e.index++) {
                    this.l.Gs = e;
                    if (this.l.Hs = c) c.index = e.index;
                    this.dl = 0;
                    this.yd(e.Me[e.index], f);
                    if (e.stop) break
                }
                if (c)
                    for (c.index = 0; c.index < c.$f; c.index++) {
                        this.l.Gs = c;
                        if (this.l.Hs = e) e.index = c.index;
                        this.dl = 0;
                        this.yd(c.Me[c.index], g);
                        if (c.stop) break
                    }
                c && (e.next = c.next);
                null == d ? this.l.XC = e.next : d.next = e.next
            }
            this.l.Gs = a;
            this.l.Hs = b
        },
        aI: function(a, b) {
            for (var c = 0; c < a.length; c += 2) {
                var d = this.l.T[a[c + 1]];
                if (d.Mb ==
                    this.Pb) {
                    var e = b.get(d);
                    void 0 != e ? e.length = 0 : (e = [], b.set(d, e));
                    for (d = d.fb; 0 <= d;) {
                        var f = this.l.G[d];
                        if (null == f) break;
                        0 == (f.X & L.Ye) && e.push(d);
                        d = f.jc
                    }
                }
            }
        },
        bI: function(a) {
            var b = this.Jq.length,
                c = new Map;
            if (0 < b)
                for (var b = this.Jq[b - 1], d = qb(b.keys()), e = d.next(); !e.done; e = d.next()) {
                    var e = e.value,
                        f = b.get(e).slice();
                    c.set(e, f)
                }
            this.aI(a.Db, c);
            this.Jq.push(c);
            this.af(a.iA, null);
            this.Jq.pop()
        },
        Ge: function(a) {
            var b = a & 65535;
            0 != (b & 32768) && (b = 65536 - b);
            a = this.mc[this.Qe[b] + -(a >> 16)];
            0 != a && this.af(a, null)
        },
        yd: function(a,
            b) {
            this.Ps = b;
            var c = this.mc[a.Av + -(b >> 16)];
            return 0 != c ? (this.af(c, a), !0) : !1
        },
        FI: function() {
            for (var a = !1, b = this.l.jx; b;) {
                if (this.l.si >= b.od)
                    if (b.type == kb.IG) {
                        this.l.i.Rc = b.name;
                        var c = this.mc[this.Qe[-v.An] + K.By];
                        0 != c && this.af(c, null);
                        a = b.xu = !0
                    } else
                        for (0 == b.up && (b.up = this.l.si); this.l.si >= b.up;) {
                            this.l.i.Rc = b.name;
                            this.l.i.ZC = b.index;
                            c = this.mc[this.Qe[-v.An] + K.By];
                            0 != c && this.af(c, null);
                            b.index++;
                            b.Gr--;
                            if (0 == b.Gr) {
                                a = b.xu = !0;
                                break
                            }
                            b.up += b.nL
                        }
                b = b.next
            }
            if (a)
                for (b = this.l.jx, a = null; b;) c = b.next, b.xu ? null ==
                    a ? this.l.jx = c : a.next = c : a = b, b = c
        },
        uH: function() {
            var a;
            if (0 != (this.l.Sc & k.tn)) a = this.mc[this.Qe[-v.lq] + 1], 0 != a && (this.mc[this.Qe[-v.lq] + 1] = -1, this.af(a, null), this.ep = !0);
            else {
                a = this.mc[this.Qe[-v.An] + 3];
                0 != a && this.af(a, null);
                a = this.mc[this.Qe[-v.lq] + 1];
                var b, c, d, e, f;
                if (0 != a) {
                    if (this.ep) {
                        e = null;
                        b = a;
                        do {
                            d = this.hc[b];
                            if (d != e)
                                for (e = d, c = d.Fb; c < d.Fb + d.he; c++) f = d.ab[c], 0 == (f.Ja & U.El) && (f.Ja |= U.Np);
                            b++
                        } while (null != this.hc[b])
                    }
                    this.af(a, null);
                    this.mc[this.Qe[-v.lq] + 1] = 0;
                    if (this.ep) {
                        e = null;
                        b = a;
                        do {
                            d = this.hc[b];
                            if (d != e)
                                for (e = d, c = d.Fb; c < d.Fb + d.he; c++) f = d.ab[c], f.Ja &= ~U.Np;
                            b++
                        } while (null != this.hc[b]);
                        this.ep = !1
                    }
                }
                a = this.mc[this.Qe[-v.An] + 2];
                0 != a && this.af(a, null);
                a = this.mc[this.Qe[-v.An] + 1];
                0 != a && this.af(a, null)
            }
        },
        af: function(a, b) {
            var c, d, e;
            this.cp = !1;
            do
                if (d = this.hc[a], 0 == (d.la & H.Pp))
                    if (this.Td = d, this.Ms[0] = 0, this.Ms[1] = 0, this.Ms[2] = 0, this.Ms[3] = 0, 0 == (d.la & H.At)) {
                        this.Pb += 1;
                        this.bh = !1;
                        e = 0;
                        if (d.ab[e].Na(this.l, b))
                            for (e++; e < d.Fb && 0 != d.ab[e].da(this.l); e++);
                        if (e == d.Fb)
                            if (this.cp) null != b && this.fH(b);
                            else if (this.Iu(d),
                            0 != (d.la & H.nn)) break;
                        a++
                    } else {
                        this.Is++;
                        if (0 == (d.la & H.dy)) {
                            c = !1;
                            do {
                                this.Pb++;
                                this.bh = !1;
                                e = this.bf[a];
                                0 == d.ab[e].Na(this.l, b) && (this.bh = !0);
                                for (e++; e < d.Fb && -1507329 != d.ab[e].ea;) 0 == d.ab[e].da(this.l) && (this.bh = !0), e++;
                                this.lA();
                                0 == this.bh && (c = !0);
                                a++;
                                d = this.hc[a];
                                if (null == d) break
                            } while (d == this.Td)
                        } else {
                            var f;
                            c = this.bh = !1;
                            do {
                                this.Pb++;
                                f = !1;
                                e = this.bf[a];
                                if (d.ab[e].Na(this.l, b))
                                    for (e++; e < d.Fb && -1572865 != d.ab[e].ea;) {
                                        if (0 == d.ab[e].da(this.l)) {
                                            f = !0;
                                            break
                                        }
                                        e++
                                    } else f = !0;
                                0 == f && (this.lA(), c = !0);
                                a++;
                                d = this.hc[a];
                                if (null == d) break
                            } while (d == this.Td)
                        }
                        if (c && (this.Pb++, this.jA(), d = 0 != (this.Td.la & H.nn), this.Iu(this.Td), d)) break
                    }
            else
            if (a++, null != this.hc[a])
                for (c = this.hc[a]; c == d;) {
                    a++;
                    if (null == this.hc[a]) break;
                    c = this.hc[a]
                }
            while (null != this.hc[a])
        },
        Iu: function(a) {
            this.Ou = null;
            if (0 != (a.la & H.cy)) {
                0 != (a.la & H.Ct) && (this.Aj = new P);
                if (0 != (a.la & H.pn)) {
                    var b = this.l.qc,
                        c = a.Wi;
                    a.Wi = b;
                    if (b == c || b - 1 == c) return
                }
                if (0 != (a.la & H.Bt))
                    if (0 != a.em) a.em--;
                    else return;
                if (0 != (a.la & H.on)) {
                    b = this.l.si / 10;
                    c = a.em;
                    if (0 != c && b < c) return;
                    a.em = b + a.Wi
                }
            }
            this.cl++;
            this.zj = !1;
            this.ni = 0;
            this.dl = !0;
            b = 0;
            do c = a.ab[b + a.Fb], 0 == (c.Ja & (U.ay | U.Np)) && (c.Ja &= ~X.yi, c.ga(this.l)), b++; while (b < a.he);
            if (this.zj) {
                do
                    for (this.zj = !1, this.ni++, b = 0; b < a.he; b++) c = a.ab[b + a.Fb], 0 != (c.Ja & X.yi) && (c.Ja &= ~X.yi, c.ga(this.l)); while (this.zj)
            }
            b = this.Ou;
            0 != (a.la & H.nn) && 0 != (a.la & H.Op) && (b = null);
            this.Ou = null;
            this.dl = !1;
            null != this.Aj && this.WH();
            this.Hu && this.TH();
            b && this.bI(b)
        },
        fH: function(a) {
            var b;
            b = a.ac;
            this.Pb += 1;
            this.Xi(a);
            this.cl++;
            this.zj = !1;
            this.ni = 0;
            this.dl = !0;
            var c = 0,
                d;
            do {
                a = this.Td.ab[this.Td.Fb +
                    c];
                d = a.ea & 4294901760;
                if (262144 == d || 589824 == d)
                    if (b == a.Nc) a.ga(this.l);
                    else if (d = a.Sa, 0 != (d & 32768)) {
                    var e = this.Pc[d & 32767];
                    for (d = 0; d < e.J.length;) {
                        var f = e.J[d];
                        if (0 > f) break;
                        if (f == b) {
                            a.ga(this.l);
                            break
                        }
                        d += 2
                    }
                }
                c++
            } while (c < this.Td.he);
            this.dl = !1
        },
        WH: function() {
            if (!(1 >= this.Aj.size())) {
                var a = this.l.random(this.Aj.size()),
                    b;
                do b = this.l.random(this.Aj.size()); while (a == b);
                a = this.Aj.get(a);
                b = this.Aj.get(b);
                var c = a.w,
                    d = a.u,
                    e = b.u;
                k.ec(a, b.w);
                k.fc(a, e);
                k.ec(b, c);
                k.fc(b, d);
                this.Aj = null
            }
        },
        qC: function(a, b) {
            var c;
            if (null !=
                this.l && (this.l.qv(), 0 == this.l.eg && 0 != this.Kn && (c = a, 2 == b && (c += C.qG), this.l.Zm = 0, 0 == this.l.Re))) {
                this.UC = this.Rc = c;
                this.Ge(-262150);
                this.Ge(-327686);
                c = 0;
                var d, e, f, g, h, q, k = new P;
                for (d = 0; d < this.l.zb; d++) {
                    for (; null == this.l.G[c];) c++;
                    e = this.l.G[c];
                    c++;
                    f = e.w - e.oa;
                    g = e.u - e.pa;
                    h = f + e.L;
                    q = g + e.K;
                    this.l.ap >= f && this.l.ap < h && this.l.bp >= g && this.l.bp < q && 0 != (e.gf & Q.$d) && 0 == (e.X & L.Ye) && (e.Fa == v.Tb ? 0 == (e.D.S & E.ak) ? this.Ub.ha.Wb(e.b.La).Cg(J.Gl, 0, 1, 1).mL(this.l.ap - e.w, this.l.bp - e.u, e.b.Ka, e.b.qb, e.b.rb) && k.add(e) : k.add(e) :
                        k.add(e))
                }
                for (c = 0; c < k.size(); c++) e = k.get(c), this.ZC = e.ac, this.Ge(-393222)
            }
        },
        OJ: function() {
            null != this.l && 0 != this.Kn && (this.l.Zm = 0, this.Ge(-524294))
        },
        rC: function() {
            0 != this.Kn && 0 == this.l.eg && (this.l.Zm = 0)
        },
        Cz: function(a, b) {
            var c = this.l.T[a];
            if (c.Mb != this.Pb) {
                if (this.bh) return this.Wc = 0, null;
                for (c = c.kb; 0 == (c & 2147483648);) {
                    c = this.l.G[c];
                    if (null == c) break;
                    if (0 == (c.X & L.Ye) && (this.Wc++, this.Wc == b)) return c;
                    c = c.Xb
                }
                return null
            }
            for (c = c.fb; 0 == (c & 2147483648);) {
                c = this.l.G[c];
                if (null == c) break;
                if (0 == (c.X & L.Ye) && (this.Wc++,
                        this.Wc == b)) return c;
                c = c.jc
            }
            return null
        },
        Dz: function(a, b) {
            b++;
            this.Wc = 0;
            if (0 == (a & 32768)) return this.Cz(a, b);
            if (32767 == (a & 32767)) return null;
            var c = this.Pc[a & 32767],
                d;
            for (d = 0; d < c.J.length; d += 2) {
                var e = c.J[d + 1];
                if (0 > e) break;
                e = this.Cz(e, b);
                if (null != e) return e
            }
            return null
        },
        hK: function(a, b, c, d, e) {
            a = new ff(a, b, c, d, e);
            null == this.gl && (this.gl = new P);
            this.gl.add(a)
        },
        EI: function() {
            if (null != this.gl) {
                var a;
                for (a = 0; a < this.gl.size(); a++) {
                    var b = this.gl.get(a);
                    if (null != b && 0 != b.code) switch (this.Rc = b.VJ, this.kx = b.ag,
                        b.GK) {
                        case 0:
                            this.Ge(b.code);
                            break;
                        case 1:
                            this.yd(b.UJ, b.code)
                    }
                }
                this.gl.clear()
            }
        },
        load: function(a) {
            for (var b, c, d = 0;;)
                if (b = a.file.MC(4), 69 == b[0] && 82 == b[1] && 62 == b[2] && 62 == b[3]) {
                    this.Mg = a.file.s();
                    300 > this.Mg && (this.Mg = 300);
                    a.file.s();
                    this.cC = a.file.s();
                    for (c = 0; c < 7 + v.Dy; c++) this.Nk[c] = a.file.s();
                    this.Nk[v.dd + v.Tb] < C.wt + 1 && (this.Nk[v.dd + v.Tb] = C.wt + 1);
                    this.Pg = a.file.s();
                    if (0 < this.Pg)
                        for (this.Yg = Array(this.Pg), c = 0; c < this.Pg; c++) this.Yg[c] = new ef, this.Yg[c].ns = a.file.V(), this.Yg[c].os = a.file.V()
                } else if (69 ==
                b[0] && 82 == b[1] && 101 == b[2] && 115 == b[3]) a.file.v(), this.Bo = a.file.v(), this.vd = Array(this.Bo);
            else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 118 == b[3])
                for (a.file.v(), b = a.file.v(), c = 0; c < b; c++) this.vd[d] = H.create(a), d++;
            else if (69 == b[0] && 82 == b[1] && 111 == b[2] && 112 == b[3]) 0 != (a.file.v() & C.VE) && (this.bm |= H.nn);
            else if (60 == b[0] && 60 == b[1] && 69 == b[2] && 82 == b[3]) break;
            this.pB = Math.max(this.pB, d)
        },
        TA: function(a) {
            var b, c;
            c = this.vd[a];
            c.la &= this.bm;
            c.la |= H.Pp;
            a++;
            for (b = !1;;) {
                c = this.vd[a];
                c.la &= this.bm;
                c.la |= H.Pp;
                c = c.ab[0];
                switch (c.ea) {
                    case -589825:
                        c =
                            c.o[0];
                        c.Dg |= oa.Lt;
                        a = this.TA(a);
                        continue;
                    case -655361:
                        b = !0, a++
                }
                if (b) break;
                a++
            }
            return a
        },
        Pw: function() {
            var a, b, c, d, e, f, g = new P,
                h;
            for (d = 0; d < this.vd.length;) a = this.vd[d], a.la &= this.bm, b = a.ab[0], -589825 == b.ea && (a = b.o[0], h = new df, h.id = a.BI, h.hA = d, g.add(h), a.Dg &= ~(oa.Lt | oa.Kt), 0 != (a.Dg & oa.pF) && (a.Dg |= oa.Kt)), d++;
            for (d = 0; d < this.vd.length;) {
                a = this.vd[d];
                a.la &= this.bm;
                b = a.ab[0];
                if (-589825 == b.ea && (a = b.o[0], a.Dg &= ~oa.Lt, 0 != (a.Dg & oa.Kt))) {
                    d = this.TA(d);
                    continue
                }
                d++
            }
            for (d = 0; d < this.vd.length; d++) switch (a = this.vd[d],
                b = a.ab[0], b.ea) {
                case -589825:
                case -655361:
                    break;
                default:
                    for (a.Wi = 0, e = a.em = 0; e < a.Fb + a.he; e++)
                        if (b = a.ab[e], b.Ja = 0 > b.ea ? b.Ja & U.XE : b.Ja & ~(X.yi | U.El), 0 != b.ic)
                            for (f = 0; f < b.ic; f++) switch (c = b.o[f], c.code) {
                                case 25:
                                    c.jt = 0;
                                    break;
                                case 13:
                                    c.qH = c.cm;
                                    break;
                                case 39:
                                    var q;
                                    for (q = 0; q < g.size(); q++)
                                        if (h = g.get(q), h.id == c.id) {
                                            c.R = h.hA;
                                            break
                                        }
                            }
            }
        },
        fK: function(a) {
            qualToOiListFull = qualToOiList = null;
            if (0 < this.Pg) {
                var b, c, d, e, f = Array(this.Pg);
                for (d = 0; d < a.length; d++) a[d].Mb = 0, a[d].rf = null;
                for (c = 0; c < this.Pg; c++)
                    for (e = this.Yg[c].ns &
                        32767, d = f[c] = 0; d < a.length; d++) {
                        var g = a[d];
                        if (g.jd == this.Yg[c].os)
                            for (b = 0; 8 > b && -1 != g.Dm[b]; b++)
                                if (e == g.Dm[b]) {
                                    f[c]++;
                                    g.Mb++;
                                    break
                                }
                    }
                this.Pc = Array(this.Pg);
                this.ad = Array(this.Pg);
                for (c = 0; c < this.Pg; c++) {
                    this.Pc[c] = new Ed;
                    this.ad[c] = new Ed;
                    b = f[c];
                    0 != b && (this.Pc[c].J = Array(2 * b), this.ad[c].J = Array(2 * b));
                    var h = 0;
                    e = this.Yg[c].ns & 32767;
                    for (d = 0; d < a.length; d++)
                        if (g = a[d], g.jd == this.Yg[c].os)
                            for (b = 0; 8 > b && -1 != g.Dm[b]; b++)
                                if (e == g.Dm[b]) {
                                    this.ad[c].J[2 * h] = g.$c;
                                    this.ad[c].J[2 * h + 1] = d;
                                    this.Pc[c].J[2 * h] = -1;
                                    this.Pc[c].J[2 *
                                        h + 1] = -1;
                                    null == g.rf && 0 != g.Mb && (g.rf = Array(g.Mb), g.Mb = 0);
                                    null != g.rf && (g.rf[g.Mb++] = c);
                                    h++;
                                    break
                                } this.Pc[c].ps = -1;
                    this.ad[c].ps = -1
                }
                for (d = 0; d < a.length; d++) a[d].Mb = 0
            }
        },
        Gq: function(a) {
            var b, c, d, e, f, g, h, q, k, l, t, z, m, r, E, A;
            this.l = a;
            var G = this.cl = 0;
            for (h = a = 0; h < this.l.Af; h++) - 1 != this.l.T[h].$c && (this.l.T[h].ww = -1, this.l.T[h].Rd = 0, this.l.T[h].Cm = -1, a++, this.l.T[h].$c + 1 > G && (G = this.l.T[h].$c + 1));
            this.$e = Array(200 * G + 1);
            a = 0;
            g = [];
            var w;
            for (r = 0; r < this.vd.length; r++) {
                b = this.vd[r];
                for (w = 0; w < b.he + b.Fb; w++) {
                    c = b.ab[w];
                    c.Ja &= ~U.ay;
                    0 <= C.Xe(c.ea) && (c.Sa = this.km(c.Nc, C.Xe(c.ea)));
                    if (c.ea == X.WD) d = c.o[0], d.fI = 0, d.ma[0].code == aa.Fl && 0 == d.ma[1].code && (l = {}, l.XG = c.o[0], l.name = d.ma[0].vb, g.push(l), this.l.su(d.ma[0].vb));
                    else if (c.ea == X.PL || c.ea == X.OL) d = c.o[0], d.ma[0].code == aa.Fl && 0 == d.ma[1].code && (d.ma[0] = new hb, d.ma[0].code = aa.ey, d.ma[0].value = this.l.su(d.ma[0].vb));
                    if (0 < c.ic)
                        for (l = 0; l < c.ic; l++) switch (d = c.o[l], d.code) {
                            case 25:
                                d.value = 0;
                                break;
                            case 21:
                                if (0 == (c.Nc & v.iu))
                                    for (t = this.l.B.Gd.dr(); null != t; t = this.l.B.Gd.Fo()) {
                                        if (c.Nc ==
                                            t.Uf) {
                                            d.Mn = t.fj;
                                            break
                                        }
                                    } else d.Mn = -1;
                                f = d.Oo; - 1 != f && (d.Po = this.km(f, d.hs));
                                break;
                            case 9:
                            case 18:
                            case 16:
                                f = d.Oo; - 1 != f && (d.Po = this.km(f, d.hs));
                                break;
                            case 1:
                                d.bb = this.km(d.ag, d.type);
                                break;
                            case 69:
                                for (h = 0; h < d.Db.length; h += 2) d.Db[h + 1] = this.km(d.Db[h], 0);
                                break;
                            case 15:
                            case 27:
                            case 28:
                            case 45:
                            case 46:
                            case 22:
                            case 23:
                            case 52:
                            case 59:
                            case 53:
                            case 62:
                            case 54:
                                for (t = d, h = 0; h < t.ma.length; h++) 0 < C.Xe(t.ma[h].code) && (q = t.ma[h], q.bb = this.km(q.ag, C.Xe(q.code)))
                        }
                }
                l = 0;
                t = H.Qp | H.cy | H.qn;
                for (w = 0; w < b.Fb + b.he; w++) {
                    c = b.ab[w];
                    e = C.Xe(c.ea);
                    f = c.ea;
                    q = k = h = 0;
                    d = null;
                    if (e >= v.Tb) switch (C.yk(f)) {
                        case 262144:
                        case 589824:
                            l |= H.qn;
                            f = c.Nc;
                            if (0 != (f & v.iu))
                                for (e = this.jK(c.Sa); - 1 != e; e = this.GC()) a = this.mB(b, a, this.l.T[e].$c);
                            else a = this.mB(b, a, f);
                            break;
                        case 1638400:
                            l |= H.Ct;
                            break;
                        case -917504:
                            d = c.o[0];
                            h = c.o[0];
                            this.Cq(c.Sa, c.Nc, h.bb, h.ag);
                            this.Cq(h.bb, h.ag, c.Sa, c.Nc);
                            q = C.Xe(c.ea);
                            q = this.xr(q) ? Q.$d | Q.Cn : Q.$d | Q.rq | Q.Cn;
                            k = h.type;
                            k = this.xr(k) ? Q.$d | Q.Cn : Q.$d | Q.rq | Q.Cn;
                            this.Ub.GI & n.XD && this.Cs(c.Sa, c.Nc, h.bb, h.ag);
                            h = 3;
                            break;
                        case -262144:
                            q = C.Xe(c.ea);
                            q = this.xr(q) ? Q.$d : Q.$d | Q.rq;
                            d = c.o[0];
                            k = c.o[0].type;
                            k = this.xr(k) ? Q.$d : Q.$d | Q.rq;
                            0 != (this.Ub.GI & n.XD) && this.Cs(c.Sa, c.Nc, d.bb, d.ag);
                            h = 3;
                            break;
                        case -720896:
                        case -786432:
                            k = Q.qq;
                            h = 1;
                            break;
                        case -851968:
                            k = Q.pq, h = 1
                    } else switch (f) {
                        case -327681:
                            t &= ~H.Qp;
                            break;
                        case -393217:
                            t |= H.on;
                            break;
                        case -262145:
                            t |= H.on;
                            break;
                        case -196609:
                            t |= H.pn + H.Bt;
                            break;
                        case -196614:
                            q = Q.$d;
                            d = c.o[0];
                            h = 2;
                            break;
                        case -393222:
                            q = Q.$d, d = c.o[1], h = 2
                    }
                    if (0 != (h & 1))
                        for (e = this.Xg(c.Sa); - 1 != e; e = this.dg()) this.l.T[e].Rd |= k;
                    if (0 != (h & 2))
                        for (e = this.Xg(d.bb); - 1 !=
                            e; e = this.dg()) this.l.T[e].Rd |= q
                }
                b.la &= ~t;
                b.la |= l
            }
            this.$e[a] = -1;
            k = !1;
            if (null == this.sf && null == this.tf) {
                this.sf = new Map;
                this.tf = new Map;
                k = !0;
                for (r = 0; r < this.vd.length && k; r++)
                    if (b = this.vd[r], null != b) {
                        for (w = 0; w < b.Fb; w++)
                            if (c = b.ab[w], null != c && (e = C.Xe(c.ea), e >= v.Tb && -2686976 == C.yk(c.ea))) {
                                var N = c.o[0];
                                if (2 == N.ma.length && N.ma[0].code == aa.Fl && 0 == N.ma[1].code) {
                                    N = N.ma[0].vb.toLowerCase();
                                    c = e == v.Tb ? this.tf : this.sf;
                                    var B = c.get(N);
                                    void 0 == B ? B = 1 : B++;
                                    c.set(N, B)
                                } else {
                                    k = !1;
                                    break
                                }
                            } for (h = 0; h < b.he && k; h++)
                            if (c = b.ab[h + b.Fb],
                                null != c && (e = C.Xe(c.ea), e >= v.Tb && 5046272 == C.yk(c.ea))) {
                                k = !1;
                                break
                            }
                    } if (k) {
                    for (; this.sf.size > C.tE;) {
                        b = 1E9;
                        c = null;
                        w = qb(this.sf.entries());
                        for (r = w.next(); !r.done; r = w.next()) l = r.value, r = l[1], r < b && (c = l[0], b = r);
                        null != c && this.sf["delete"](c)
                    }
                    b = C.Jp;
                    r = qb(this.sf.keys());
                    for (c = r.next(); !c.done; c = r.next()) this.sf.set(c.value, b++);
                    for (; this.tf.size > C.uE;) {
                        b = 1E9;
                        c = null;
                        w = qb(this.tf.entries());
                        for (r = w.next(); !r.done; r = w.next()) l = r.value, r = l[1], r < b && (c = l[0], b = r);
                        null != c && this.tf["delete"](c)
                    }
                    b = C.Jp;
                    r = qb(this.tf.keys());
                    for (c = r.next(); !c.done; c = r.next()) this.tf.set(c.value, b++), b == C.Ee + 1 && (b += C.kq);
                    b > C.Ee + 1 + C.kq && (this.Nk[v.dd + v.Tb] += b - (C.Ee + 1 + C.kq))
                } else this.tf = this.sf = null
            }
            t = Array(v.dd + G + 1);
            b = r = 0;
            for (e = -v.dd; 0 > e; e++, b++) t[b] = r, r += this.Nk[v.dd + e];
            for (oil = 0; oil < this.l.Af; oil++, b++) t[b] = r, r = this.l.T[oil].jd < v.lg ? r + (this.Nk[v.dd + this.l.T[oil].jd] + C.Ee + 1) : r + (this.Ub.Zq.ir(this.l.T[oil].jd) + C.Ee + 1);
            m = r;
            this.mc = Array(m);
            for (h = 0; h < m; h++) this.mc[h] = 0;
            l = z = 0;
            q = Array(this.l.B.Mg);
            for (r = 0; r < this.Bo; r++)
                for (b = this.vd[r], b.la &=
                    ~H.At, d = !0, w = E = 0; w < b.Fb; w++) {
                    c = b.ab[w];
                    e = C.Xe(c.ea);
                    f = c.ea;
                    h = -C.Dt(f);
                    k && e >= v.Tb && -2686976 == C.yk(f) && (N = c.o[0], 2 == N.ma.length && N.ma[0].code == aa.Fl && 0 == N.ma[1].code && (N = N.ma[0].vb.toLowerCase(), B = (e == v.Tb ? this.tf : this.sf).get(N), void 0 != B && (h = B, f = (f & 65535) + 65536 * -h, c.ea = f)));
                    if (d && -2686977 != c.ea)
                        if (0 != (c.Ja & U.zt) && (z++, 0 == (b.la & H.Op) && l++), 0 > e) this.mc[t[7 + e] + h]++;
                        else {
                            d = 0;
                            for (e = this.Xg(c.Sa); - 1 != e; e = this.dg()) this.mc[t[v.dd + e] + h]++, q[d++] = e;
                            q[d] = -1;
                            if (-917504 == C.yk(f))
                                for (d = c.o[0], f = this.Xg(d.bb); - 1 !=
                                    f; f = this.dg()) {
                                    for (d = 0; q[d] != f && -1 != q[d];) d++; - 1 == q[d] && this.mc[t[v.dd + f] + h]++
                                }
                        } d = !1;
                    if (-1507329 == c.ea || -1572865 == c.ea) d = !0, b.la |= H.At, 0 == E ? E = c.ea : c.ea = E, -1572865 == E && (b.la |= H.dy); - 2686977 == c.ea && (z++, b.la |= H.Pp)
                }
            c = z + 1;
            for (b = 0; b < m; b++) 0 != this.mc[b] && (r = this.mc[b], this.mc[b] = c, c += r + 1);
            this.hc = Array(c);
            this.bf = Array(c);
            for (h = 0; h < c; h++) this.hc[h] = null, this.bf[h] = 0;
            k = Array(m);
            for (h = 0; h < m; h++) k[h] = this.mc[h];
            this.l.Ae = null;
            m = 0;
            z = [];
            E = [];
            N = l + 1;
            for (r = 0; r < this.Bo; r++) {
                b = this.vd[r];
                d = !0;
                for (w = 0; w < b.Fb; w++) {
                    c =
                        b.ab[w];
                    e = C.Xe(c.ea);
                    f = c.ea;
                    h = -C.Dt(f);
                    if (d && -2686977 != c.ea)
                        if (0 != (c.Ja & U.zt) && (0 != (b.la & H.Op) ? 0 < z.length && (B = z[z.length - 1], B.push(b), B.push(w)) : (this.hc[m] = b, this.bf[m] = w, m++)), 0 > e) {
                            if (B = t[v.dd + e] + h, this.hc[k[B]] = b, this.bf[k[B]] = w, k[B]++, c.ea == K.vE) {
                                f = !1;
                                for (h = 0; h < b.Fb && b.ab[h].ea != K.wE && b.ab[h].ea != K.xE; h++);
                                h < b.Fb && (f = !0);
                                d = c.o[0];
                                if (d.ma[0].code == aa.Fl && 0 == d.ma[1].code) {
                                    h = null;
                                    d = d.ma[0].vb;
                                    this.l.su(d);
                                    for (e = 0; e < g.length; e++)
                                        if (B = g[e], p.yc(B.name, d)) {
                                            this.l.Ae || (this.l.Ae = []);
                                            if (null == h) {
                                                for (A =
                                                    0; A < this.l.Ae.length && (h = this.l.Ae[A], !p.yc(d, h.name)); A++);
                                                A == this.l.Ae.length && (h = new jb(d), this.l.Ae.push(h));
                                                h.Jx(b);
                                                h.Hr |= f
                                            }
                                            B.XG.fI = A + 1
                                        } if (null == h) {
                                        this.l.Ae || (this.l.Ae = []);
                                        for (A = 0; A < this.l.Ae.length && (h = this.l.Ae[A], !p.yc(d, h.name)); A++);
                                        A == this.l.Ae.length && (h = new jb(d), this.l.Ae.push(h));
                                        h.Jx(b);
                                        h.Hr |= f
                                    }
                                }
                            }
                        } else {
                            d = 0;
                            for (e = this.Xg(c.Sa); - 1 != e; e = this.dg()) B = t[v.dd + e] + h, this.hc[k[B]] = b, this.bf[k[B]] = w, k[B]++, q[d++] = e;
                            q[d] = -1;
                            if (-917504 == C.yk(f))
                                for (d = c.o[0], f = this.Xg(d.bb); - 1 != f; f = this.dg()) {
                                    for (d =
                                        0; q[d] != f && -1 != q[d];) d++; - 1 == q[d] && (B = t[v.dd + f] + h, this.hc[k[B]] = b, this.bf[k[B]] = w, k[B]++)
                                }
                        } d = !1;
                    if (-1507329 == c.ea || -1572865 == c.ea) d = !0;
                    if (-2686977 == c.ea && 0 < z.length) {
                        E.pop().iA = N;
                        B = z.pop();
                        for (c = 0; c < B.length; c += 2) this.hc[N] = B[c], this.bf[N] = B[c + 1], N++;
                        this.hc[N] = null;
                        this.bf[N] = null;
                        N++
                    }
                }
                if (0 != (b.la & H.by))
                    for (B = [], z.push(B), h = 0; h < b.he; h++)
                        if (c = b.ab[b.Fb + h], 2883583 == c.ea) {
                            0 < c.ic && (d = c.o[0], E.push(d));
                            break
                        }
            }
            this.Ek = Array(G + 1 + a / 2);
            for (oil = G = 0; oil < this.l.Af; oil++)
                if (A = this.l.T[oil], b = t[v.dd + oil], A.zw =
                    b, 0 != (A.ds & u.Gf)) {
                    a = 0;
                    r = this.mc[b - C.Dt(-786432)];
                    if (0 != r)
                        for (; null != this.hc[r];) {
                            b = this.hc[r];
                            c = b.ab[this.bf[r]];
                            g = c.o[0].value;
                            w = C.ZH(b);
                            for (h = b.he; 0 < h; h--, w++) c = b.ab[w], c.ea == (524288 | A.jd & 65535) && (a |= g);
                            r++
                        }
                    A.Bw = a;
                    g = A.$c;
                    for (c = a = 0; - 1 != this.$e[a]; a += 2)
                        if (this.$e[a] == g)
                            if (b = this.$e[a + 1], 0 != (b & 32768)) A.Rd |= b;
                            else {
                                for (r = 0; r < c && this.Ek[G + r] != b;) r++;
                                r == c && (this.Ek[G + c++] = b)
                            } 0 < c && (A.Cm = G, this.Ek[G + c++] = -1, G += c)
                } this.Qe[0] = 0;
            for (h = 1; h <= v.dd; h++) this.Qe[h] = t[v.dd - h];
            for (oil = 0; oil < this.l.Af; oil++)
                if (A = this.l.T[oil],
                    e = A.kb, 0 == (e & 2147483648)) {
                    do a = this.l.G[e], a.Av = A.zw, a.Bb = A, a.gf = A.Rd, 0 != (a.qa & u.Gf) && (a.A.px = A.Bw), 0 != (a.qa & u.Hi) && 0 == (a.gf & Q.$d) && a.D.Ts(!1), 0 == (a.qa & u.Ly) && (a.qa &= ~u.$j, 0 != (a.gf & Q.pq) && 0 != (this.l.B.Yb & I.py) && (a.qa |= u.$j), 0 != (a.gf & (Q.$d | Q.qq)) && (a.qa |= u.$j)), e = a.Xb; while (0 == (e & 2147483648))
                } this.$C = 0 != l ? !0 : !1;
            this.$e = null;
            this.Kn = !0
        },
        ht: function() {
            this.Kn = !1;
            this.bf = this.hc = this.mc = this.Ek = this.Pc = null
        },
        km: function(a, b) {
            if (0 != (a & v.iu)) {
                var c;
                for (c = 0; a != this.Yg[c].ns || b != this.Yg[c].os;) c++;
                return c |
                    32768
            }
            for (c = 0; c < this.l.Af && this.l.T[c].$c != a;) c++;
            return c
        },
        xr: function(a) {
            var b;
            for (b = 0; b < this.l.Af; b++)
                if (-1 != this.l.T[b].$c && this.l.T[b].jd == a)
                    if (0 != (this.l.T[b].ds & u.Hi) && 0 == (this.l.T[b].ds & u.hu)) break;
                    else return !1;
            return !0
        },
        Xg: function(a) {
            if (0 == (a & 32768)) return this.To = -1, a;
            if (-1 == a) return -1;
            this.To = a & 32767;
            this.Ro = 0;
            return this.dg()
        },
        dg: function() {
            var a;
            if (-1 == this.To || this.Ro >= this.ad[this.To].J.length) return -1;
            a = this.ad[this.To].J[this.Ro + 1];
            this.Ro += 2;
            return a
        },
        jK: function(a) {
            if (0 == (a & 32768)) return this.Uo = -1, a;
            if (-1 == a) return -1;
            this.Uo = a & 32767;
            this.So = 0;
            return this.GC()
        },
        GC: function() {
            var a;
            if (-1 == this.Uo || this.So >= this.ad[this.Uo].J.length) return -1;
            a = this.ad[this.Uo].J[this.So + 1];
            this.So += 2;
            return a
        },
        Cq: function(a, b, c, d) {
            var e, f;
            if (0 > b) {
                if (null != this.ad)
                    for (e = this.ad[a & 32767], f = 0; f < e.J.length;) this.Cq(e.J[f + 1], e.J[f], c, d), f += 2
            } else if (0 > d) {
                if (null != this.ad)
                    for (e = this.ad[c & 32767], f = 0; f < e.J.length;) this.Cq(a, b, e.J[f + 1], e.J[f]), f += 2
            } else {
                a = this.l.T[a];
                if (null == a.oj) a.oj = [], a = a.oj;
                else
                    for (a = a.oj, b = 0; b <
                        a.length; b += 2)
                        if (d == a[b]) return;
                a.push(d);
                a.push(c)
            }
        },
        Cs: function(a, b, c, d) {
            var e, f;
            if (0 > b) {
                if (null != this.ad)
                    for (e = this.ad[a & 32767], f = 0; f < e.J.length;) this.Cs(e.J[f + 1], e.J[f], c, d), f += 2
            } else if (0 > d) {
                if (null != this.ad)
                    for (e = this.ad[c & 32767], f = 0; f < e.J.length;) this.Cs(a, b, e.J[f + 1], e.J[f]), f += 2
            } else if (a = this.l.T[a], c = this.l.T[c], a.jd == v.Tb && c.jd == v.Tb && (a.Rk & u.Bn) != (c.Rk & u.Bn) && (0 != (c.Rk & u.Bn) && (a = c, b = d), d = this.Ub.tc.Zi(b), e = d.vc, c = !1, 0 != (e.Sg & u.Gf) && null != e.Pd && 0 < e.Pd.Ok && (e = e.Pd.hd[0], e.yo == S.Dh && (c = e.wr)),
                    !c)) {
                a.Rk &= ~u.Bn;
                for (a = a.kb; 0 == (a & 2147483648);) {
                    a = this.l.G[a];
                    if (null == a) break;
                    a.D.S &= ~E.ak;
                    a = a.Xb
                }
                null != this.Ub.tc.Tg && this.Ub.tc.Tg[b] && d.gc(this, null)
            }
        },
        wg: function(a) {
            a = this.Ub.ha.Wb(a);
            null != a && (a.mo |= Y.Sp);
            return -1
        },
        mB: function(a, b, c) {
            var d, e, f, g, h;
            for (h = 0; h < a.Fb; h++)
                if (g = a.ab[h], 2 <= C.Xe(g.ea)) switch (e = 32768 + Q.pG, f = C.yk(g.ea), f) {
                    case -917504:
                        f = g.o[0];
                        for (d = this.Xg(g.Sa); - 1 != d; d = this.dg()) d = this.l.T[d].$c, c == d && (e = 0, b = this.nB(b, c, f.bb));
                        if (0 == e) break;
                        for (d = this.Xg(f.bb); - 1 != d; d = this.dg()) d = this.l.T[d].$c,
                            c == d && (b = this.nB(b, c, g.Sa));
                        break;
                    case -786432:
                        f = g.o[0], e = 32768 + f.value;
                    case -851968:
                        for (d = this.Xg(g.Sa); - 1 != d; d = this.dg()) d = this.l.T[d].$c, c == d && (this.$e[b++] = c, this.$e[b++] = e)
                }
            return b
        },
        nB: function(a, b, c) {
            for (c = this.Xg(c); - 1 != c; c = this.dg()) {
                c = this.l.T[c].$c;
                var d;
                for (d = 0; d < a && (this.$e[d] != b || this.$e[d + 1] != c); d += 2);
                d == a && (this.$e[a++] = b, this.$e[a++] = c)
            }
            return a
        },
        XH: function(a) {
            var b, c, d, e, f, g;
            for (d = 0; d < this.Bo; d++)
                for (b = this.vd[d], e = 0; e < b.Fb + b.he; e++)
                    for (c = b.ab[e], f = 0; f < c.ic; f++) switch (c.o[f].code) {
                        case 6:
                        case 35:
                            g =
                                c.o[f], a.wg(g.at)
                    }
        }
    };
    H.Qp = 1;
    H.pn = 2;
    H.Bt = 4;
    H.on = 8;
    H.Ct = 16;
    H.by = 64;
    H.nn = 128;
    H.ZE = 256;
    H.PM = 512;
    H.At = 1024;
    H.qn = 2048;
    H.dy = 4096;
    H.aF = 8192;
    H.Pp = 16384;
    H.Op = 32768;
    H.cy = H.Ct + H.pn + H.Bt + H.on;
    H.$E = H.ZE + H.aF + H.by + H.Op;
    H.create = function(a) {
        var b = a.file.R,
            c = a.file.V(),
            d = new H;
        d.Fb = a.file.yb();
        d.he = a.file.yb();
        d.la = a.file.s();
        d.YH = a.file.s();
        d.Wi = a.file.v();
        d.em = a.file.v();
        d.ab = Array(d.Fb + d.he);
        var e, f = 0;
        for (e = 0; e < d.Fb; e++) d.ab[f++] = K.create(a);
        for (e = 0; e < d.he; e++) d.ab[f++] = X.create(a);
        a.file.seek(b - c);
        return d
    };
    U.YE =
        1;
    U.OM = 2;
    U.WE = 4;
    U.Np = 8;
    U.El = 16;
    U.zt = 32;
    U.NM = 64;
    U.ay = 128;
    U.XE = U.zt + U.YE + U.WE + U.Np + U.El;
    U.Dl = 1;
    U.$x = 32;
    kb.IG = 0;
    kb.bP = 1;
    Aa.Py = 0;
    Aa.NO = 1;
    Aa.OO = 2;
    Aa.PO = 3;
    Aa.prototype = {
        load: function(a) {
            this.fj = a.s();
            this.Uf = a.s();
            this.Rv = a.v();
            this.Sv = a.v();
            this.Qv = a.s();
            a.s();
            this.eB = a.s();
            a.wa(2)
        },
        sd: function(a, b) {
            this.Pv[a] = b
        }
    };
    Fd.prototype = {
        load: function(a) {
            this.Yf = a.file.v();
            this.list = Array(this.Yf);
            var b, c = 0;
            for (b = 0; b < this.Yf; b++) this.list[b] = new Aa, this.list[b].load(a.file), this.list[b].fj + 1 > c && (c = this.list[b].fj +
                1), this.list[b].Cr = a.tc.Zi(this.list[b].Uf).Ne;
            this.Ba = Array(c);
            for (b = 0; b < this.Yf; b++) this.Ba[this.list[b].fj] = b
        },
        EA: function(a) {
            return this.list[a]
        },
        tI: function(a) {
            return a < this.Ba.length ? this.list[this.Ba[a]] : null
        },
        Fo: function() {
            var a;
            if (this.Br < this.Yf) {
                do
                    if (a = this.list[this.Br++], 2 <= a.Cr) return a; while (this.Br < this.Yf)
            }
            return null
        },
        dr: function() {
            this.Br = 0;
            return this.Fo()
        }
    };
    V.Ht = 1;
    V.It = 2;
    V.YM = 4;
    V.sn = 16;
    V.Ft = 32;
    V.Gt = 64;
    V.ZM = 65536;
    V.rn = 131072;
    V.$M = 262144;
    V.prototype = {
        load: function(a) {
            this.Ia = a.v();
            this.Jj = a.LC();
            this.Lj = a.LC();
            this.Wr = a.v();
            this.Yr = a.v();
            a.Ob();
            this.ez = this.Ia;
            this.hz = this.Jj;
            this.iz = this.Lj;
            this.fz = this.Wr;
            this.gz = this.Yr
        },
        reset: function() {
            this.Ia = this.ez;
            this.Jj = this.hz;
            this.Lj = this.iz;
            this.Wr = this.fz;
            this.Yr = this.gz;
            this.x = this.y = this.nk = this.qk = this.zs = this.As = 0;
            this.Eq = this.Tk = this.Fm = this.Em = null;
            this.rp(0);
            this.scale = 1;
            this.lD(1);
            this.mD(1);
            this.rD(this.app.sa / 2);
            this.uD(this.app.Aa / 2);
            this.qD(this.app.sa / 2);
            this.tD(this.app.Aa / 2);
            this.vD(!1);
            this.Ia & V.rn ? (this.te = !0,
                this.nr()) : (this.te = !1, this.show())
        },
        LH: function() {
            this.pc.BK()
        },
        VG: function(a) {
            null == this.Em && (this.Em = new P);
            this.Em.add(a)
        },
        Yy: function(a) {
            null == this.Fm && (this.Fm = new P);
            this.Fm.add(a)
        },
        Aq: function(a) {
            null == this.Eq && (this.Eq = new P);
            this.Eq.add(a)
        },
        BH: function(a, b) {
            this.pc = new Ca;
            this.pc.x = a;
            this.pc.y = b;
            this.Nb = new Ca;
            this.Nb.x = a;
            this.Nb.y = b;
            this.Wa = new Ca;
            this.Wa.x = a;
            this.Wa.y = b;
            this.rp(0);
            this.scale = 1;
            this.lD(1);
            this.mD(1);
            this.rD(this.app.sa / 2);
            this.uD(this.app.Aa / 2);
            this.qD(this.app.sa / 2);
            this.tD(this.app.Aa /
                2);
            this.vD(!1);
            this.app.we.se(this.pc);
            this.app.we.se(this.Nb);
            this.app.we.se(this.Wa);
            this.aL()
        },
        rp: function(a) {
            this.angle = a;
            this.pc.angle = a;
            this.Nb.angle = a;
            this.Wa.angle = a
        },
        lD: function(a) {
            this.rc = a;
            this.pc.rc = a;
            this.Nb.rc = a;
            this.Wa.rc = a
        },
        mD: function(a) {
            this.sc = a;
            this.pc.sc = a;
            this.Nb.sc = a;
            this.Wa.sc = a
        },
        rD: function(a) {
            this.Ea = a;
            this.pc.Ea = a;
            this.Nb.Ea = a;
            this.Wa.Ea = a
        },
        uD: function(a) {
            this.ya = a;
            this.pc.ya = a;
            this.Nb.ya = a;
            this.Wa.ya = a
        },
        qD: function(a) {
            this.Bp = a = this.app.sa - a;
            this.pc.Bp = a;
            this.Nb.Bp = a;
            this.Wa.Bp =
                a
        },
        tD: function(a) {
            this.Dp = a = this.app.Aa - a;
            this.pc.Dp = a;
            this.Nb.Dp = a;
            this.Wa.Dp = a
        },
        vD: function(a) {
            this.sg = a;
            this.pc.sg = a;
            this.Nb.sg = a;
            this.Wa.sg = a
        },
        EK: function(a, b) {
            this.pc.x = a;
            this.pc.y = b;
            this.Nb.x = a;
            this.Nb.y = b;
            this.Wa.x = a;
            this.Wa.y = b;
            this.show()
        },
        aL: function() {
            this.Ia & V.sn ? this.show() : this.nr()
        },
        nr: function() {
            this.Ia &= ~V.rn;
            this.te && (this.pc.visible = !1, this.Nb.visible = !1, this.te = this.Wa.visible = !1)
        },
        show: function() {
            0 == this.te && (this.pc.visible = !0, this.Nb.visible = !0, this.te = this.Wa.visible = !0)
        },
        Sz: function() {
            null != this.pc && (this.app.we.removeChild(this.pc), this.pc = null);
            null != this.Nb && (this.app.we.removeChild(this.Nb), this.Nb = null);
            null != this.Wa && (this.app.we.removeChild(this.Wa), this.Wa = null)
        },
        UG: function(a, b, c, d) {
            var e = new Z;
            e.left = a;
            e.top = b;
            e.right = c;
            e.bottom = d;
            null == this.Tk && (this.Tk = new P);
            this.Tk.add(e)
        },
        uI: function(a, b) {
            a += this.x;
            b += this.y;
            if (null != this.Tk) {
                var c, d;
                for (c = 0; c < this.Tk.size(); c++)
                    if (d = this.Tk.get(c), a >= d.left && b >= d.top && a < d.right && b < d.bottom) return d
            }
            return null
        },
        Gj: function(a,
            b, c, d, e) {
            b = b + this.x - a.Ea;
            c = c + this.y - a.ya;
            var f = b + a.width,
                g = c + a.height,
                h = c;
            0 != d && (h = g - d);
            var q, k;
            k = e == ja.kn ? this.Em : this.Fm;
            if (null == k) return null;
            for (e = 0; e < k.size(); e++)
                if (q = k.get(e), q.x < f && q.x + q.width > b && q.y < g && q.y + q.height > h && q.Gj(a, b, c, d)) return q;
            return null
        },
        ct: function(a, b, c, d, e, f) {
            f = f == ja.kn ? this.Em : this.Fm;
            if (null == f) return null;
            a += this.x;
            b += this.y;
            c += this.x;
            d += this.y;
            0 != e && (b = d - e);
            for (e = 0; e < f.size(); e++) {
                var g = f.get(e);
                if (g.x < c && g.x + g.width > a && g.y < d && g.y + g.height > b && g.ct(a, b, c, d)) return g
            }
            return null
        }
    };
    ia.prototype = {
        Eb: function(a, b, c) {
            if (null != this.lJ)
                if (this.type == v.fG) {
                    var d = this.ne.vc,
                        e;
                    switch (d.jj) {
                        case 1:
                            switch (d.$h) {
                                case 1:
                                    a.Fd(b + this.x, c + this.y, this.width, this.height, this.ik, this.de, this.ee);
                                    break;
                                case 2:
                                    a.Dc(b + this.x, c + this.y, this.width, this.height, this.ik, this.de, this.ee);
                                    break;
                                case 3:
                                    a.dx(b + this.x, c + this.y, this.width, this.height, this.ik, this.de, this.ee)
                            }
                            break;
                        case 2:
                            switch (d.$h) {
                                case 1:
                                    a.Fd(b + this.x, c + this.y, this.width, this.height, this.ik, this.de, this.ee);
                                    break;
                                case 2:
                                    a.cx(b + this.x, c +
                                        this.y, this.width, this.height, this.ik, this.Pu, 0 != this.QA, this.de, this.ee);
                                    break;
                                case 3:
                                    a.PC(b + this.x, c + this.y, this.width, this.height, this.ik, this.Pu, 0 != this.QA, this.de, this.ee)
                            }
                            break;
                        case 3:
                            switch (d.$h) {
                                case 2:
                                    e = this.app.ha.Wb(d.Zh);
                                    a.QC(e, b + this.x, c + this.y, this.width, this.height, this.de, this.ee);
                                    break;
                                case 3:
                                    e = this.app.ha.Wb(d.Zh), a.RC(e, b + this.x, c + this.y, this.width, this.height, this.de, this.ee)
                            }
                    }
                    if (0 < this.borderWidth) switch (d.$h) {
                        case 1:
                            var f = e = 0,
                                g = this.width,
                                h = this.height;
                            0 != (d.Ko & Ma.OF) && (e += g,
                                g = -g);
                            0 != (d.Ko & Ma.PF) && (f += h, h = -h);
                            a.Fd(b + this.x + e, c + this.y + f, b + this.x + e + g, c + this.y + f + h, this.borderColor, this.borderWidth);
                            break;
                        case 2:
                            a.Bs(b + this.x, c + this.y, this.width, this.height, this.borderColor, this.borderWidth);
                            break;
                        case 3:
                            a.OC(b + this.x, c + this.y, this.width, this.height, 1, this.borderColor, this.borderWidth)
                    }
                } else this.type == v.eG ? a.Pe(this.gd, b + this.x + this.gd.Ea, c + this.y + this.gd.ya, 0, 1, 1, this.de, this.ee) : null != this.W && this.W.Eb(a, b, c);
            else a.Pe(this.gd, b + this.x + this.gd.Ea, c + this.y + this.gd.ya, 0,
                1, 1, this.de, this.ee)
        },
        gD: function(a, b) {
            this.de = a;
            this.ee = b
        },
        sd: function(a, b) {
            b.pc.se(this);
            this.type == v.Fy && b.Aq(this);
            switch (this.nf) {
                case da.mq:
                    b.VG(this);
                    b.Yy(this);
                    break;
                case da.og:
                    b.Yy(this);
                    break;
                case da.gu:
                    b.UG(this.x, this.y, this.x + this.width, this.y + this.height)
            }
        },
        Gj: function(a, b, c, d) {
            var e;
            switch (this.type) {
                case 0:
                    return e = this.height, this.nf == da.og && (e = I.Hl), a.wx(b, c, d, this.x, this.y, this.width, e, 0);
                case 1:
                    if (0 != this.Wl) return !0;
                    e = J.Gl;
                    this.nf == da.og && (e = J.Tj);
                    e = this.gd.Cg(e, 0, 1, 1);
                    return a.Gj(b,
                        c, d, e, this.x, this.y, 0);
                case 11:
                    if (0 != this.Wl) return !0;
                    e = J.Gl;
                    this.nf == da.og && (e = J.Tj);
                    e = this.gd.Cg(e, 0, 1, 1);
                    return a.Gj(b, c, d, e, this.x, this.y, 0)
            }
            return !1
        },
        ct: function(a, b, c, d) {
            var e;
            switch (this.type) {
                case 0:
                    if (this.nf == da.og) {
                        a = this.y + Math.min(this.height, I.Hl);
                        if (this.y < d && a > b) return !0;
                        break
                    }
                    return !0;
                case 1:
                    if (0 != this.Wl) return !0;
                    e = J.Gl;
                    this.nf == da.og && (e = J.Tj);
                    e = this.gd.Cg(e, 0, 1, 1);
                    return e.wx(this.x, this.y, 0, a, b, c, d, 0);
                case 11:
                    if (0 != this.Wl) return !0;
                    e = J.Gl;
                    this.nf == da.og && (e = J.Tj);
                    e = this.gd.Cg(e,
                        0, 1, 1);
                    return e.wx(this.x, this.y, 0, a, b, c, d, 0)
            }
            return !1
        }
    };
    v.HO = 1;
    v.FO = 2;
    v.JO = 4;
    v.IO = 8;
    v.oq = 16;
    v.nG = 32;
    v.GO = 64;
    v.EO = 1;
    v.DO = 2;
    v.Oy = 4;
    v.dd = 7;
    v.Gy = -7;
    v.bO = -6;
    v.aO = -5;
    v.An = -4;
    v.lq = -3;
    v.dO = -2;
    v.eO = -1;
    v.fG = 0;
    v.eG = 1;
    v.Tb = 2;
    v.Eh = 3;
    v.Hy = 4;
    v.Iy = 5;
    v.Ey = 6;
    v.zn = 7;
    v.cO = 8;
    v.Cy = 9;
    v.$N = 10;
    v.Fy = 11;
    v.Dy = 10;
    v.lg = 32;
    v.iu = 32768;
    v.prototype = {
        Uv: function(a) {
            this.Lo = a.s();
            this.Ne = a.s();
            this.di = a.s();
            a.wa(2);
            this.tw = a.v();
            this.uw = a.v()
        },
        load: function(a) {
            a.seek(this.lC);
            switch (this.Ne) {
                case 0:
                    this.vc = new Ma;
                    break;
                case 1:
                    this.vc =
                        new Hd;
                    break;
                default:
                    this.vc = new u
            }
            this.vc.load(a, this.Ne);
            this.mC = 0
        },
        sL: function() {
            this.vc = null
        },
        gc: function(a, b) {
            this.vc.gc(a, b)
        }
    };
    Gd.prototype = {
        hi: function(a) {
            this.nj = a.v();
            this.Db = Array(this.nj);
            var b;
            for (b = this.Ug = 0; b < this.nj; b++)
                for (var c = 0, d; 32639 != c;)
                    if (c = a.s(), a.s(), d = a.v(), 0 != d) {
                        d = a.R + d;
                        switch (c) {
                            case 17476:
                                this.Db[b] = new v;
                                this.Db[b].Uv(a);
                                this.Db[b].Lo >= this.Ug && (this.Ug = this.Db[b].Lo + 1);
                                break;
                            case 17477:
                                this.Db[b].vw = a.Ob();
                                break;
                            case 17478:
                                this.Db[b].lC = a.R
                        }
                        a.seek(d)
                    } this.ei = Array(this.Ug);
            for (b = 0; b < this.nj; b++) this.ei[this.Db[b].Lo] = b;
            this.Mo = Array(this.Ug);
            this.Tg = Array(this.Ug);
            for (a = 0; a < this.Ug; a++) this.Mo[a] = 0, this.Tg[a] = 0
        },
        Zi: function(a) {
            return this.Db[this.ei[a]]
        },
        DK: function() {
            var a;
            for (a = 0; a < this.nj; a++) this.Db[a].di &= ~v.oq
        },
        XK: function(a) {
            this.Db[this.ei[a]].di |= v.oq
        },
        CA: function() {
            var a;
            for (a = 0; a < this.nj; a++)
                if (0 != (this.Db[a].di & v.oq)) return this.Uq = a, this.Db[a];
            return null
        },
        GA: function() {
            if (this.Uq < this.nj) {
                var a;
                for (a = this.Uq + 1; a < this.nj; a++)
                    if (0 != (this.Db[a].di & v.oq)) return this.Uq =
                        a, this.Db[a]
            }
            return null
        },
        yf: function() {
            var a;
            for (a = 0; a < this.Ug; a++) this.Mo[a] = 0
        },
        Ej: function(a) {
            this.Mo[a] = 1
        },
        load: function(a) {
            var b;
            for (b = 0; b < this.Ug; b++)
                if (0 != this.Mo[b]) {
                    if (0 == this.Tg[b] || 0 != this.Tg[b] && 0 != (this.Db[this.ei[b]].mC & v.nG)) this.Db[this.ei[b]].load(a), this.Tg[b] = 1
                } else 0 != this.Tg[b] && (this.Db[this.ei[b]].sL(), this.Tg[b] = 0);
            this.yf()
        },
        gc: function(a, b) {
            var c;
            for (c = 0; c < this.Ug; c++) 0 != this.Tg[c] && this.Db[this.ei[c]].gc(a, b)
        }
    };
    da.Jy = 0;
    da.mq = 1;
    da.og = 2;
    da.gu = 3;
    da.gG = 4;
    Hd.prototype = {
        load: function(a) {
            a.wa(4);
            this.hC = a.s();
            this.dC = a.s();
            this.eC = a.v();
            this.fC = a.v();
            this.Zh = a.s()
        },
        gc: function(a) {
            null != a && (a = a.wg(this.Zh), -1 != a && (this.Zh = a))
        }
    };
    Ma.OF = 1;
    Ma.PF = 2;
    Ma.prototype = {
        load: function(a) {
            a.wa(4);
            this.hC = a.s();
            this.dC = a.s();
            this.eC = a.v();
            this.fC = a.v();
            this.as = a.s();
            this.$r = a.kd();
            this.$h = a.s();
            this.jj = a.s();
            if (1 == this.$h) this.Ko = a.s();
            else switch (this.jj) {
                case 1:
                    this.Rg = this.Am = a.kd();
                    break;
                case 2:
                    this.Rg = a.kd();
                    this.Am = a.kd();
                    this.Jo = a.v();
                    break;
                case 3:
                    this.Zh = a.s()
            }
        },
        gc: function(a) {
            3 == this.jj && null != a &&
                (a = a.wg(this.Zh), -1 != a && (ocImage = a))
        }
    };
    u.nO = 1;
    u.mO = 2;
    u.jG = 4;
    u.Ny = 8;
    u.Gf = 16;
    u.Gi = 32;
    u.pO = 64;
    u.rO = 128;
    u.mG = 256;
    u.Hi = 512;
    u.oO = 1024;
    u.lG = 2048;
    u.hu = 4096;
    u.My = 8192;
    u.$j = 16384;
    u.Ly = 32768;
    u.qO = 65536;
    u.Ky = 131072;
    u.kG = 1048576;
    u.fO = 1;
    u.lO = 2;
    u.Bn = 4;
    u.nq = 8;
    u.hO = 4;
    u.gO = 48;
    u.kO = 16;
    u.jO = 32;
    u.iO = 48;
    u.hG = 64;
    u.iG = 128;
    u.tO = 1;
    u.AO = 2;
    u.zO = 4;
    u.BO = 8;
    u.yO = 16;
    u.vO = 32;
    u.sO = 64;
    u.xO = 128;
    u.wO = 256;
    u.CO = 512;
    u.uO = 1024;
    u.prototype = da;
    u.prototype = {
        load: function(a, b) {
            var c = a.R;
            this.qw = Array(8);
            var d;
            a.wa(4);
            a.wa(2);
            var e = a.s();
            a.wa(2);
            var f = a.s(),
                g = a.s(),
                h = a.s();
            this.Sg = a.v();
            for (d = 0; 8 > d; d++) this.qw[d] = a.V();
            a.s();
            var q = a.s(),
                k = a.s();
            this.kj = a.s();
            var l = a.s();
            this.Cc = a.v();
            a.kd();
            d = a.v();
            var n = a.v();
            this.Io = this.Bm = null;
            0 != h && (a.seek(c + h), this.Pd = new Fe, this.Pd.load(a));
            0 != q && (a.seek(c + q), this.ai = new Ae, this.ai.load(a, 0 != (this.kj & u.iG)));
            0 != k && (a.seek(c + k), this.lj = new ze, this.lj.load(a));
            0 != g && (a.seek(c + g), this.ij = new Pa, this.ij.load(a));
            0 != f && (a.seek(c + f), this.Zc = new Jd, this.Zc.load(a));
            0 != l && (a.seek(c + l), f = a.v(), a.wa(4), this.jC =
                a.v(), a.v(), this.iC = a.v(), 0 != f - 20 && (this.gC = a.R));
            0 != d && (a.seek(c + d), this.Bm = new sa, this.Bm.load(a));
            0 != n && (a.seek(c + n), this.Io = new sa, this.Io.load(a));
            if (0 != e) switch (a.seek(c + e), b) {
                case 3:
                case 4:
                    this.Zc = new Ld;
                    this.Zc.load(a);
                    break;
                case 5:
                case 6:
                case 7:
                    this.nb = new la;
                    this.nb.load(a);
                    break;
                case 8:
                    this.Zc = new Kd;
                    this.Zc.load(a);
                    this.Sg &= ~(u.Hi | u.hu | u.jG);
                    break;
                case 9:
                    this.Zc = new Id, this.Zc.load(a)
            }
        },
        gc: function(a, b) {
            null != this.ij && this.ij.gc(a);
            null != this.Zc && this.Zc.gc(a, b);
            null != this.nb && this.nb.gc(a,
                b)
        }
    };
    Id.prototype = {
        load: function(a) {
            a.wa(4);
            this.bi = a.v();
            this.ci = a.v();
            a.s();
            this.kC = a.s();
            this.Qd = a.v();
            a.wa(8);
            this.rw = a.Ob()
        },
        gc: function() {}
    };
    Jd.prototype = {
        load: function(a) {
            a.wa(2);
            this.Iz = a.v();
            this.Kz = a.v();
            this.Jz = a.v()
        },
        gc: function() {}
    };
    la.vM = 0;
    la.uM = 1;
    la.JE = 2;
    la.IE = 3;
    la.tM = 4;
    la.wM = 5;
    la.st = 256;
    la.prototype = {
        load: function(a) {
            a.wa(4);
            this.bi = a.v();
            this.ci = a.v();
            this.sw = a.s();
            this.pf = a.s();
            this.Pk = a.s();
            this.mj = a.s();
            switch (this.pf) {
                case 1:
                case 4:
                    this.um = a.s();
                    this.frames = Array(this.um);
                    var b;
                    for (b = 0; b < this.um; b++) this.frames[b] = a.s();
                    break;
                case 2:
                case 3:
                case 5:
                    if (this.as = a.s(), this.$r = a.kd(), this.$h = a.s(), this.jj = a.s(), 1 == this.$h) this.Ko = a.s();
                    else switch (this.jj) {
                        case 1:
                            this.Rg = a.kd();
                            break;
                        case 2:
                            this.Rg = a.kd(), this.Am = a.kd(), this.Jo = a.v()
                    }
            }
        },
        gc: function(a, b) {
            switch (this.pf) {
                case 1:
                case 4:
                    var c;
                    for (c = 0; c < this.um; c++) null != a && a.wg(this.frames[c]);
                    break;
                case 5:
                    null != b && b.wg(this.mj)
            }
        }
    };
    Kd.prototype = {
        load: function(a) {
            a.v();
            a.v();
            this.Qd = a.v();
            a.kd();
            this.bi = a.v();
            this.ci = a.v();
            a.wa(4);
            var b = a.v();
            this.text = a.Ob(b)
        },
        gc: function() {}
    };
    qa.eP = 0;
    qa.dP = 1;
    qa.fP = 2;
    qa.gP = 4;
    qa.cP = 15;
    qa.JG = 256;
    qa.Ty = 512;
    qa.prototype = {
        load: function(a) {
            this.fn = a.V();
            this.yp = a.s();
            this.zx = a.kd();
            this.vi = a.Ob()
        },
        gc: function(a, b) {
            null != b && b.wg(this.fn)
        }
    };
    Ld.prototype = {
        load: function(a) {
            var b = a.R;
            a.wa(4);
            this.Hw = a.v();
            this.Iw = a.v();
            this.Sk = a.v();
            this.Zb = Array(this.Sk);
            var c = Array(this.Sk),
                d;
            for (d = 0; d < this.Sk; d++) c[d] = a.v();
            for (d = 0; d < this.Sk; d++) this.Zb[d] = new qa, a.seek(b + c[d]), this.Zb[d].load(a)
        },
        gc: function(a, b) {
            var c;
            for (c = 0; c < this.Sk; c++) this.Zb[c].gc(a, b)
        }
    };
    L.Ye = 1;
    L.ly = 2;
    L.rN = 4;
    L.Bi = 8;
    L.Ci = 16;
    L.xF = 32;
    L.ky = 64;
    L.vh = 8192;
    L.qN = 16384;
    L.sN = 32768;
    L.prototype = {
        kD: function(a, b) {
            if (this.b.qb != a || this.b.rb != b) {
                0 <= a && (this.b.qb = a);
                0 <= b && (this.b.rb = b);
                this.b.M = !0;
                var c = this.c.h.ha.Yi(this.b.La, this.b.Ka, this.b.qb, this.b.rb);
                null != c && (this.L = c.width, this.K = c.height, this.oa = c.Ea, this.pa = c.ya)
            }
        },
        xD: function(a, b, c, d) {
            var e = this.fd;
            b = this.c.ar(a.Mn, a.Ku, b, c, d, k.Wx | k.Bl, e, -1);
            0 <= b && (b = this.c.G[b], null != b.A ? (b.b.Qa = d, b.A.VA(b,
                S.zy, !1), b.b.aa = a.bL, b.A.ba.ur(this), -1 != e && 0 != (b.qa & u.Hi) && (this.c.B.Za[e].Ia & (V.rn | V.sn)) != V.sn && b.D.ym(), this.c.i.Xi(b), 0 != (this.qa & u.Gi) && this.ca.rg(r.Gp) && (this.ca.Gn(r.Gp), this.ca.Fq())) : this.c.Of(b.Kb))
        },
        Z: function() {},
        handle: function() {},
        Hh: function() {},
        Ez: function() {},
        display: function() {},
        Gb: function() {},
        lI: function() {
            return null
        },
        gD: function() {},
        tu: function() {},
        Ul: function() {},
        Jh: function() {
            return 0
        },
        wl: function() {},
        Ak: function() {},
        cn: function() {},
        ed: function() {
            return -1
        },
        xk: function() {
            return 0
        },
        Xd: function() {},
        Oi: function() {},
        fm: function() {}
    };
    Md.prototype = p.extend(new L, {
        handle: function() {
            this.D.handle();
            this.b.M && (this.b.M = !1)
        },
        tu: function(a, b, c, d, e) {
            this.Da = this.c.B.Za[d];
            this.za = e;
            this.Da.Wa.se(this)
        },
        Eb: function(a, b, c) {
            if (this.za && (0 == (this.X & L.Bi) || this.D.gh)) {
                var d = this.D.$b;
                this.D.S & E.uq && (d |= E.Mx);
                var e = this.c.h.ha.Wb(this.b.La);
                e && (this.zl ? a.xj(this.zl, b + this.w - this.c.fa + this.Da.x - e.Ea, c + this.u - this.c.ka + this.Da.y - e.ya, this.zl.width * this.b.qb, this.zl.height * this.b.rb, d, this.D.Rb) :
                    a.Pe(e, b + this.w - this.c.fa + this.Da.x, c + this.u - this.c.ka + this.Da.y, this.b.Ka, this.b.qb, this.b.rb, d, this.D.Rb))
            }
        },
        Jh: function() {
            return this.Da.Wa.removeChild(this)
        },
        wl: function() {
            this.za = !0
        },
        Ak: function() {
            this.za = !1
        },
        ed: function() {
            return this.Da.Wa.ed(this)
        },
        xk: function() {
            return this.Da.Wa.children.length
        },
        Xd: function(a) {
            a >= this.Da.Wa.children.length && (a = this.Da.Wa.children.length);
            0 > a && (a = 0);
            this.Da.Wa.Xd(this, a)
        },
        cn: function(a) {
            this.D.$b = E.We;
            this.D.Rb = a
        }
    });
    R.Qx = 1;
    R.mE = 2;
    R.oE = 4;
    R.pM = 8;
    R.pE = 16;
    R.nM =
        32;
    R.aM = 64;
    R.rM = 128;
    R.$L = 256;
    R.sM = 512;
    R.qM = 1024;
    R.dM = 2048;
    R.Ip = 4096;
    R.cM = 8192;
    R.Px = 16384;
    R.jM = 32768;
    R.kE = 65536;
    R.kM = 131072;
    R.bM = 262144;
    R.nE = 524288;
    R.lM = 1048576;
    R.lE = 2097152;
    R.iM = 12582912;
    R.fM = 0;
    R.hM = 4194304;
    R.gM = 8388608;
    R.eM = 12582912;
    R.oM = 16777216;
    R.mM = 33554432;
    R.prototype = p.extend(new L, {
        DD: function(a, b, c) {
            b = a.Zc;
            this.L = b.bi;
            this.K = b.ci;
            this.Qd = b.Qd;
            0 != (this.Qd & R.pE) && (this.Qd |= R.kE); - 1 == c && (c = 0, 0 != (this.Qd & R.Px) && (c = b.kC));
            null == b.rw || 0 != b.rw.length || 0 == (this.Qd & R.Px) || c >= this.c.h.Qf || c == this.c.h.Fe ||
                (this.te = 0 != (a.kj & u.nq) ? !0 : !1, this.Mc = new Ca, this.Mc.x = this.w - this.c.fa, this.Mc.y = this.u - this.c.ka, this.c.h.we.se(this), this.Fw = this.w, this.Gw = this.u, this.C = new n(this.c.h, this.c.h.file, this.c.h.path, !0), this.C.hD(this.c.h, c, this.Qd, this.Mc, this.L, this.K), this.C.digest(), 0 != (this.Qd & R.Ip) && null == this.c.h.Ng && (this.c.h.Ng = this, this.c.h.H.pause()), this.C.tx(), this.C.Ws((this.c.h.Kj + this.Mc.x) * this.c.h.rc, (this.c.h.Mj + this.Mc.y) * this.c.h.sc), this.C.tp(), this.c.h.Jb.push(this.C))
        },
        Z: function(a) {
            this.DD(a,
                !0, -1)
        },
        handle: function() {
            this.A.move();
            if (null != this.C) {
                if (this.Fw != this.w || this.Gw != this.u) this.Mc.x = this.w - this.c.fa, this.Mc.y = this.u - this.c.ka, this.Fw = this.w, this.Gw = this.u, this.C.Ws(this.Mc.x * this.c.h.rc, this.Mc.y * this.c.h.sc), this.tL();
                0 == this.C.tp() ? (this.Wq(), 0 != (this.Qd & R.Ip) && null != this.C.Ga && this.C.Ga.Ng == this && (this.C.Ga.Ng = null, this.C.Ga.H.resume()), this.C = null) : (this.pC = this.level, this.level = this.C.Fe)
            }
        },
        Eb: function(a) {
            this.te && null != this.C && this.C.bA(a, this.Mc.x, this.Mc.y)
        },
        Gb: function() {
            if (null !=
                this.C) {
                switch (this.C.hb) {
                    case 3:
                        this.C.Un()
                }
                this.Wq();
                this.C.fA();
                0 != (this.Qd & R.Ip) && null != this.C.Ga && this.C.Ga.Ng == this && (this.C.Ga.Ng = null, this.C.Ga.H.resume());
                this.C = null
            }
        },
        Wq: function() {
            var a;
            for (a = 0; a < this.c.h.Jb.length; a++)
                if (this.c.h.Jb[a] == this.C) {
                    this.c.h.Jb.splice(a, 1);
                    break
                } this.c.h.we.removeChild(this.Mc)
        },
        WQ: function() {
            if (null != this.C) {
                if (null != this.C.H) {
                    this.C.H.sb = k.Nt;
                    return
                }
                this.Gb(!0)
            }
            this.DD(this.N, !1, -1)
        },
        cQ: function() {
            null != this.C && (null != this.C.H && (this.C.H.sb = k.Up), 0 != (this.Qd &
                R.Ip) && null != this.C.Ga && this.C.Ga.Ng == this && (this.C.Ga.Ng = null, this.C.Ga.H.resume()))
        },
        nr: function() {
            this.te = !1
        },
        show: function() {
            this.te = !0
        },
        FQ: function(a) {
            null != this.C && null != this.C.H && 0 <= a && 4096 > a && (this.C.H.sb = k.Vp, this.C.H.$m = 32768 | a)
        },
        Ib: function() {
            null != this.C && null != this.C.H && (this.C.H.sb = k.Wp)
        },
        MQ: function() {
            null != this.C && null != this.C.H && (this.C.H.sb = k.Ot)
        },
        XQ: function() {
            null != this.C && null != this.C.H && (this.C.H.sb = k.RF)
        },
        pause: function() {
            null != this.C && null != this.C.H && this.C.H.pause()
        },
        resume: function() {
            null !=
                this.C && null != this.C.H && this.C.H.resume()
        },
        eR: function(a, b) {
            null != this.C && this.C.UK(a, b)
        },
        dR: function(a, b) {
            null != this.C && this.C.TK(a, b)
        },
        XI: function() {
            return null != this.C && null != this.C.H ? 0 != this.C.H.eg : !1
        },
        HP: function() {
            return null == this.C
        },
        EQ: function() {
            return this.te
        },
        gQ: function() {
            return this.level != this.pC
        },
        sQ: function(a) {
            return null != this.C ? this.C.DA(a) : ""
        },
        tQ: function(a) {
            return null != this.C ? this.C.ov(a) : 0
        },
        qQ: function() {
            return this.level + 1
        },
        rx: function() {},
        qx: function() {},
        NP: function() {
            null !=
                this.C && this.te && (hoAdRunHeader.h.bK.removeChild(this), hoAdRunHeader.h.bK.se(this))
        },
        tL: function() {
            if (null != this.C && null != this.C.H) {
                var a = this.C.H,
                    b = 0,
                    c;
                for (c = 0; c < a.zb; c++) {
                    for (; null == a.G[b];) b++;
                    var d = a.G[b];
                    b++;
                    d.fm()
                }
            }
        },
        Oi: function() {
            null != this.C && (this.C.Ws((this.c.h.Kj + this.Mc.x) * this.c.h.rc, (this.c.h.Mj + this.Mc.y) * this.c.h.sc), this.C.Nm())
        }
    });
    Nd.prototype = {
        Z: function() {
            this.rb = this.qb = 1;
            this.Ka = 0;
            this.dc = -1
        },
        Gb: function() {}
    };
    fa.Yx = 15;
    fa.DE = 240;
    fa.EE = 4;
    fa.BE = 61440;
    fa.CE = 12;
    fa.FE = 512;
    fa.HE = 1024;
    fa.GE = 2048;
    fa.prototype = p.extend(new L, {
        Z: function() {
            this.Ic = -1;
            this.lp = this.Hc = 0;
            this.L = this.K = 1;
            if (null == this.N.nb) this.K = this.nd = this.L = this.md = 1;
            else {
                var a = this.N.nb;
                this.L = this.md = a.bi;
                this.K = this.nd = a.ci;
                this.Kd = a.Pk;
                this.type = a.pf;
                switch (this.type) {
                    case 5:
                        var b = this.Ic; - 1 == b && (b = a.mj);
                        this.font = this.c.h.Vb.Rf(b);
                        this.Nd = this.font.df();
                        this.Hc = a.Rg;
                        break;
                    case 2:
                    case 3:
                        this.Hc = a.Rg, this.lp = a.Am
                }
            }
            a = this.N.Zc;
            this.tb = a.Kz;
            this.Jc = a.Jz;
            this.va = a.Iz;
            this.Pi = !1
        },
        Gb: function() {},
        handle: function() {
            this.D.handle();
            this.b.M && (this.b.M = !1)
        },
        Bg: function() {
            var a = this.N.nb;
            if (5 == this.type) {
                var b = rsFont; - 1 == b && (b = a.mj);
                return this.c.h.Vb.gr(b)
            }
            return null
        },
        vl: function(a, b) {
            5 == this.type && (this.Ic = this.c.h.Vb.Dq(a), this.font = this.c.h.Vb.Rf(this.Ic), this.Nd = this.font.df(), null != b && (this.L = this.md = b.right - b.left, this.K = this.nd = b.bottom - b.top), this.mb())
        },
        fr: function() {
            return this.Hc
        },
        Us: function(a) {
            this.Hc = a;
            this.mb()
        },
        Su: function(a) {
            0 != this.Pi || p.Jv(a) || (this.Pi = !0)
        },
        Nn: function(a) {
            0 == this.Pi ? (a = p.Md(a), a < this.tb &&
                (a = this.tb), a > this.Jc && (a = this.Jc), a != Math.round(this.va) && (this.va = a, this.b.M = !0, this.mb())) : (a < this.tb && (a = this.tb), a > this.Jc && (a = this.Jc), a != this.va && (this.va = a, this.b.M = !0, this.mb()))
        },
        xH: function(a) {
            this.Su(a);
            this.Nn(this.va + a)
        },
        zH: function(a) {
            this.Su(a);
            this.Nn(this.va - a)
        },
        YP: function(a) {
            this.tb = a;
            this.Nn(this.va)
        },
        yH: function(a) {
            this.Jc = a;
            this.Nn(this.va)
        },
        WP: function(a) {
            this.Hc = a;
            this.mb()
        },
        XP: function(a) {
            this.lp = a;
            this.mb()
        },
        VP: function() {
            return this.va
        },
        UP: function() {
            return this.tb
        },
        TP: function() {
            return this.Jc
        },
        RP: function() {
            return this.Hc
        },
        SP: function() {
            return this.lp
        },
        Ul: function(a, b, c, d, e, f) {
            null != this.N.nb && 1 != this.Va && (this.Va = !0, this.dz = d, this.za = e, this.Da = this.c.B.Za[c], this.ra = this.dz ? this.Da.Nb : this.Da.Wa, 0 > f ? this.ra.se(this) : this.ra.Bq(this, f), 5 != this.type && this.mb())
        },
        Jh: function() {
            if (null == this.N.nb || 0 == this.Va) return -1;
            this.Va = !1;
            var a = this.ra.ed(this);
            this.ra.removeChild(this);
            return a
        },
        ed: function() {
            return this.Va ? this.ra.ed(this) : -1
        },
        xk: function() {
            return this.Va ? this.ra.children.length : -1
        },
        Xd: function(a) {
            this.Va && this.ra.Xd(this, a)
        },
        wl: function() {
            null != this.N.nb && 0 == this.za && (this.za = !0, this.mb())
        },
        Ak: function() {
            null != this.N.nb && 1 == this.za && (this.za = !1)
        },
        Hh: function() {
            this.ce || this.mb()
        },
        mb: function() {
            var a, b = this.N.nb;
            switch (this.type) {
                case 4:
                    this.fh = this.Jc <= this.tb ? 0 : Math.floor((this.va - this.tb) * b.um / (this.Jc - this.tb));
                    this.fh = Math.min(this.fh, b.um - 1);
                    a = this.c.h.ha.Wb(b.frames[Math.max(this.fh, 0)]);
                    this.L = a.width;
                    this.K = a.height;
                    this.oa = a.Ea;
                    this.pa = a.ya;
                    break;
                case 2:
                case 3:
                    a = this.md;
                    b.pf == la.JE && (a = this.nd);
                    this.fh = this.Jc <= this.tb ? 0 : (this.va - this.tb) * a / (this.Jc - this.tb);
                    b.pf == la.IE ? (this.pa = 0, this.K = this.nd, this.L = this.fh, this.oa = 0 != (b.Pk & la.st) ? this.fh - this.md : 0) : (this.oa = 0, this.L = this.md, this.K = this.fh, this.pa = 0 != (b.Pk & la.st) ? this.fh - this.nd : 0);
                    break;
                case 1:
                    a = 0 == this.Pi ? p.bj(this.va, this.Kd) : p.bv(this.va, this.Kd);
                    var c, d, e, f = 0,
                        g = 0;
                    for (c = a.length - 1; 0 <= c; c--) d = a.charCodeAt(c), e = 0, 45 == d ? e = b.frames[10] : 46 == d ? e = b.frames[12] : 43 == d ? e = b.frames[11] : 101 == d || 69 == d ? e = b.frames[13] : 48 <=
                        d && 57 >= d && (e = b.frames[d - 48]), 0 <= e && (d = this.c.h.ha.Wb(e), null != d ? (f += d.width, g = Math.max(g, d.height)) : toto = 2);
                    this.oa = f;
                    this.pa = g;
                    this.L = f;
                    this.K = g;
                    break;
                case 5:
                    a = 0 == this.Pi ? p.bj(this.va, this.Kd) : p.bv(this.va, this.Kd), this.oa = b = null != this.ob ? this.ob.measureText(a, this.font) : (new na(this.c.h, 16, 16)).measureText(a, this.font), this.pa = this.nd / 2 + this.Nd / 2, this.L = b, this.K = this.Nd, null == this.ob ? this.ob = new na(this.c.h, this.L, this.K) : (this.L > this.ob.width || this.K > this.ob.height) && this.ob.resize(this.L, this.K),
                        this.ob.Ys(a, p.Lp | p.Mp, new Z(0, 0, 1E3, 1E3), this.font, this.Hc)
            }
            this.ce = !0
        },
        Eb: function(a, b, c) {
            if (this.za && this.ce) {
                var d, e, f;
                d = this.N.nb;
                b = b + this.w - this.oa - this.c.fa + this.Da.x;
                c = c + this.u - this.pa - this.c.ka + this.Da.y;
                var g = this.L,
                    h = this.K;
                switch (this.type) {
                    case 4:
                        d = this.c.h.ha.Wb(d.frames[Math.max(this.fh, 0)]);
                        a.Pe(d, b + d.Ea, c + d.ya, 0, 1, 1, this.D.$b, this.D.Rb);
                        break;
                    case 2:
                    case 3:
                        e = this.Hc;
                        f = this.lp;
                        switch (d.jj) {
                            case 1:
                                a.Dc(b, c, g, h, e, this.D.$b, this.D.Rb);
                                break;
                            case 2:
                                0 != (d.Pk & la.st) && (dl = e, e = f, f = dl), a.cx(b,
                                    c, g, h, e, f, 0 != d.Jo, this.D.$b, this.D.Rb)
                        }
                        break;
                    case 1:
                        e = 0 == this.Pi ? p.bj(this.va, this.Kd) : p.bv(this.va, this.Kd);
                        for (f = 0; f < e.length; f++) h = e.charCodeAt(f), g = 0, 45 == h ? g = d.frames[10] : 46 == h || 44 == h ? g = d.frames[12] : 43 == h ? g = d.frames[11] : 69 == h || 101 == h ? g = d.frames[13] : 48 <= h && 57 >= h && (g = d.frames[h - 48]), g = this.c.h.ha.Wb(g), null != g && (a.Pe(g, b + g.Ea, c + g.ya, 0, 1, 1, this.D.$b, this.D.Rb), b += g.width);
                        break;
                    case 5:
                        this.ob.Eb(a, b, c, this.D.$b, this.D.Rb)
                }
            }
        },
        cn: function(a) {
            this.D.$b = E.We;
            this.D.Rb = a
        }
    });
    Od.prototype = p.extend(new L, {
        Z: function() {
            this.Ic = -1;
            this.Hc = 0;
            var a = this.N.nb;
            this.L = this.md = a.bi;
            this.K = this.nd = a.ci;
            this.type = a.pf;
            this.Hc = a.Rg;
            this.ul = a.sw;
            this.va = this.c.h.JA()[this.ul - 1];
            this.Kd = a.Pk;
            if (5 == this.type) {
                var b = this.Ic; - 1 == b && (b = a.mj);
                this.font = this.c.h.Vb.Rf(b);
                this.Nd = this.font.df()
            }
        },
        Gb: function() {},
        handle: function() {
            var a = this.c.h.JA()[this.ul - 1];
            a != this.va && (this.va = a, this.mb());
            this.D.handle();
            this.b.M && (this.b.M = !1)
        },
        Bg: function() {
            var a = this.N.nb;
            if (5 == a.pf) {
                var b = this.Ic; - 1 == b && (b = a.mj);
                return this.c.h.Vb.gr(b)
            }
            return null
        },
        vl: function(a, b) {
            5 == type && (this.Ic = hoAdRunHeader.h.Vb.Dq(a), a = this.c.h.Vb.Rf(this.Ic), this.Nd = a.df(), null != b && (this.L = this.md = b.right - b.left, this.K = this.nd = b.bottom - b.top), this.mb())
        },
        fr: function() {
            return this.Hc
        },
        Us: function(a) {
            this.Hc = a;
            this.mb()
        },
        Ul: function(a, b, c, d, e, f) {
            null != this.N.nb && 1 != this.Va && (this.Va = !0, this.za = e, this.Da = this.c.B.Za[c], this.ra = d ? this.Da.Nb : this.Da.Wa, 0 > f ? this.ra.se(this) : this.ra.Bq(this, f), 5 != this.type && this.mb())
        },
        Jh: function() {
            if (null == this.N.nb || 0 == this.Va) return -1;
            this.Va = !1;
            var a = this.ra.ed(this);
            this.ra.removeChild(this);
            return a
        },
        ed: function() {
            return this.Va ? this.ra.ed(this) : -1
        },
        xk: function() {
            return this.Va ? this.ra.children.length : -1
        },
        Xd: function(a) {
            this.Va && this.ra.Xd(this, a)
        },
        wl: function() {
            null != this.N.nb && 0 == this.za && (this.za = !0, this.mb())
        },
        Ak: function() {
            null != this.N.nb && 1 == this.za && (this.za = !1)
        },
        oD: function(a) {
            a != this.va && (this.va = a, this.mb())
        },
        Hh: function() {
            this.ce || this.mb()
        },
        mb: function() {
            this.ce = !0;
            this.L = this.K = 1;
            if (null != this.N.nb) {
                var a = this.N.nb,
                    b, c = p.bj(this.va, this.Kd);
                switch (a.pf) {
                    case 1:
                        var d, e, f = 0,
                            g = 0;
                        for (d = c.length - 1; 0 <= d; d--) e = c.charCodeAt(d), b = 0, 45 == e ? b = a.frames[10] : 46 == e ? b = a.frames[12] : 43 == e ? b = a.frames[11] : 101 == e || 69 == e ? b = a.frames[13] : 48 <= e && 57 >= e && (b = a.frames[e - 48]), 0 <= b && (b = this.c.h.ha.Wb(b), f += b.width, g = Math.max(g, b.height));
                        this.oa = f;
                        this.pa = g;
                        this.L = f;
                        this.K = g;
                        break;
                    case 5:
                        this.oa = a = null != this.ob ? this.ob.measureText(c, this.font) : (new na(this.c.h, 8, 8)).measureText(c, this.font), this.pa = this.nd / 2 + this.Nd / 2, this.L = a, this.K = this.Nd,
                            null == this.ob ? this.ob = new na(this.c.h, this.L, this.K) : (this.L > this.ob.width || this.K > this.ob.height) && this.ob.resize(this.L, this.K), this.ob.Ys(c, p.Lp | p.Mp, new Z(0, 0, 1E3, 1E3), this.font, this.Hc)
                }
            }
        },
        Eb: function(a, b, c) {
            if (this.za && this.ce) {
                this.globalAlpha = this.alpha;
                this.globalCompositeOperation = this.jk;
                var d = this.N.nb;
                b = b + this.w - this.oa - this.c.fa + this.Da.x;
                var e = c + this.u - this.pa - this.c.ka + this.Da.y;
                c = p.bj(this.va, this.Kd);
                switch (this.type) {
                    case 1:
                        var f, g;
                        for (f = 0; f < c.length; f++) {
                            var h = c.charCodeAt(f);
                            g = 0;
                            45 == h ? g = d.frames[10] : 46 == h || 44 == h ? g = d.frames[12] : 43 == h ? g = d.frames[11] : 69 == h || 101 == h ? g = d.frames[13] : 48 <= h && 57 >= h && (g = d.frames[h - 48]);
                            g = this.c.h.ha.Wb(g);
                            a.Pe(g, b + g.Ea, e + g.ya, 0, 1, 1, this.D.$b, this.D.Rb);
                            b += g.width
                        }
                        break;
                    case 5:
                        this.ob.Eb(a, b, e, this.D.$b, this.D.Rb)
                }
            }
        },
        cn: function(a) {
            this.D.$b = E.We;
            this.D.Rb = a
        }
    });
    Pd.prototype = p.extend(new L, {
        Z: function() {
            this.Ic = -1;
            this.Hc = 0;
            var a = this.N.nb;
            this.L = this.md = a.bi;
            this.K = this.nd = a.ci;
            this.type = a.pf;
            this.Hc = a.Rg;
            this.ul = a.sw;
            this.va = this.c.h.FA()[this.ul -
                1];
            this.Kd = a.Pk;
            if (5 == this.type) {
                var b = this.Ic; - 1 == b && (b = a.mj);
                this.font = this.c.h.Vb.Rf(b);
                this.Nd = this.font.df()
            }
        },
        Gb: function() {},
        handle: function() {
            var a = this.c.h.FA()[this.ul - 1];
            a != this.va && (this.va = a, this.mb());
            this.D.handle();
            this.b.M && (this.b.M = !1)
        },
        Bg: function() {
            var a = this.N.nb;
            if (5 == a.pf) {
                var b = this.Ic; - 1 == b && (b = a.mj);
                return this.c.h.Vb.gr(b)
            }
            return null
        },
        vl: function(a, b) {
            5 == type && (this.Ic = hoAdRunHeader.h.Vb.Dq(a), a = this.c.h.Vb.Rf(this.Ic), this.Nd = a.df(), null != b && (this.L = this.md = b.right - b.left,
                this.K = this.nd = b.bottom - b.top), this.mb())
        },
        fr: function() {
            return this.Hc
        },
        Us: function(a) {
            this.Hc = a;
            this.mb()
        },
        Ul: function(a, b, c, d, e, f) {
            null != this.N.nb && 1 != this.Va && (this.Va = !0, this.za = e, this.Da = this.c.B.Za[c], this.ra = d ? this.Da.Nb : this.Da.Wa, 0 > f ? this.ra.se(this) : this.ra.Bq(this, f), 5 != this.type && this.mb())
        },
        Jh: function() {
            if (null == this.N.nb || 0 == this.Va) return -1;
            this.Va = !1;
            var a = this.ra.ed(this);
            this.ra.removeChild(this);
            return a
        },
        ed: function() {
            return this.Va ? this.ra.ed(this) : -1
        },
        xk: function() {
            return this.Va ?
                this.ra.children.length : -1
        },
        Xd: function(a) {
            this.Va && this.ra.Xd(this, a)
        },
        wl: function() {
            null != this.N.nb && 0 == this.za && (this.za = !0, this.mb())
        },
        Ak: function() {
            null != this.N.nb && 1 == this.za && (this.za = !1)
        },
        oD: function(a) {
            a != this.va && (this.va = a, this.mb())
        },
        Hh: function() {
            this.ce || this.mb()
        },
        mb: function() {
            this.ce = !0;
            this.L = this.K = 1;
            if (null != this.N.nb) {
                var a = this.N.nb;
                switch (a.pf) {
                    case 4:
                        if (0 != this.va) {
                            var b = this.c.h.ha.Wb(a.frames[0]),
                                c = this.va * b.width;
                            c <= this.md ? (this.L = c, this.K = b.height) : (this.L = this.md, this.K =
                                (this.md / b.width + this.va - 1) * b.height);
                            break
                        }
                        this.L = this.K = 1;
                        break;
                    case 1:
                        var d, e, b, f = 0,
                            g = 0,
                            c = p.bj(this.va, this.Kd);
                        for (d = c.length - 1; 0 <= d; d--) b = c.charCodeAt(d), e = 0, 45 == b ? e = a.frames[10] : 46 == b ? e = a.frames[12] : 43 == b ? e = a.frames[11] : 101 == b || 69 == b ? e = a.frames[13] : 48 <= b && 57 >= b && (e = a.frames[b - 48]), 0 <= e && (b = this.c.h.ha.Wb(e), f += b.width, g = Math.max(g, b.height));
                        this.oa = f;
                        this.pa = g;
                        this.L = f;
                        this.K = g;
                        break;
                    case 5:
                        c = p.bj(this.va, this.Kd), this.oa = a = null != this.ob ? this.ob.measureText(c, this.font) : (new na(this.c.h, 8,
                            8)).measureText(c, this.font), this.pa = this.nd / 2 + this.Nd / 2, this.L = a, this.K = this.Nd, null == this.ob ? this.ob = new na(this.c.h, this.L, this.K) : (this.L > this.ob.width || this.K > this.ob.height) && this.ob.resize(this.L, this.K), this.ob.Ys(c, p.Lp | p.Mp, new Z(0, 0, 1E3, 1E3), this.font, this.Hc)
                }
            }
        },
        Eb: function(a, b, c) {
            if (this.za && this.ce) {
                this.globalAlpha = this.alpha;
                this.globalCompositeOperation = this.jk;
                var d, e = this.N.nb;
                b = b + this.w - this.oa - this.c.fa + this.Da.x;
                c = c + this.u - this.pa - this.c.ka + this.Da.y;
                switch (this.type) {
                    case 1:
                        var f,
                            g;
                        d = p.bj(this.va, this.Kd);
                        for (f = 0; f < d.length; f++) {
                            var h = d.charCodeAt(f);
                            g = 0;
                            45 == h ? g = e.frames[10] : 46 == h || 44 == h ? g = e.frames[12] : 43 == h ? g = e.frames[11] : 69 == h || 101 == h ? g = e.frames[13] : 48 <= h && 57 >= h && (g = e.frames[h - 48]);
                            g = this.c.h.ha.Wb(g);
                            a.Pe(g, b + g.Ea, c + g.ya, 0, 1, 1, this.D.$b, this.D.Rb);
                            b += g.width
                        }
                        break;
                    case 4:
                        if (0 != this.va) {
                            d = b + this.L;
                            f = c + this.K;
                            var h = b,
                                q = this.va;
                            for (g = this.c.h.ha.Wb(e.frames[0]); c < f && 0 < q; c += g.height)
                                for (b = h; b < d && 0 < q; b += g.width, --q) a.Pe(g, b + g.Ea, c + g.ya, 0, 1, 1, this.D.$b, this.D.Rb)
                        }
                        break;
                    case 5:
                        this.ob.Eb(a,
                            b, c, this.D.$b, this.D.Rb)
                }
            }
        },
        cn: function(a) {
            this.D.$b = E.We;
            this.D.Rb = a
        }
    });
    Qd.prototype = p.extend(new L, {
        Z: function(a, b) {
            var c = a.Zc;
            this.L = c.Hw;
            this.K = c.Iw;
            this.md = c.Hw;
            this.nd = c.Iw;
            this.Jc = c.Sk;
            this.mp = 0;
            0 < c.Zb.length && (this.mp = c.Zb[0].zx);
            this.ti = null;
            this.Ic = -1;
            this.tb = 0;
            this.za = !0;
            this.bD = b.Lq;
            0 < c.Zb.length && (this.ti = c.Zb[0].vi);
            var d = this.Ic; - 1 == d && 0 < c.Zb.length && (d = c.Zb[0].fn);
            this.font = this.c.h.Vb.Rf(d);
            this.ob = new na(this.c.h, this.L, this.K)
        },
        Gb: function() {},
        handle: function() {
            this.D.handle();
            this.b.M && (this.b.M = !1)
        },
        Bg: function() {
            var a = this.Ic; - 1 == a && (a = this.N.Zc.Zb[0].fn);
            return this.c.h.Vb.gr(a)
        },
        vl: function(a, b) {
            this.Ic = this.c.h.Vb.Dq(a);
            this.font = this.c.h.Vb.Rf(this.Ic);
            null != b && (this.L = b.right - b.left, this.K = b.bottom - b.top, this.ob.resize(this.L, this.K));
            this.b.M = !0;
            this.mb()
        },
        fr: function() {
            return this.mp
        },
        Us: function(a) {
            this.mp = a;
            this.mb()
        },
        Ul: function(a, b, c, d, e, f) {
            1 != this.Va && (this.Va = !0, this.za = e, this.Da = this.c.B.Za[c], this.ra = d ? this.Da.Nb : this.Da.Wa, 0 > f ? this.ra.se(this) : this.ra.Bq(this,
                f))
        },
        Jh: function() {
            if (0 == this.Va) return -1;
            this.Va = !1;
            var a = this.ra.ed(this);
            this.ra.removeChild(this);
            return a
        },
        ed: function() {
            return this.Va ? this.ra.ed(this) : -1
        },
        xk: function() {
            return this.Va ? this.ra.children.length : -1
        },
        Xd: function(a) {
            this.Va && this.ra.Xd(this, a)
        },
        wl: function() {
            0 == this.za && (this.za = !0)
        },
        Ak: function() {
            1 == this.za && (this.za = !1)
        },
        pL: function(a) {
            -1 > a && (a = -1);
            a >= this.Jc && (a = this.Jc - 1);
            if (a == this.tb) return !1;
            this.tb = a;
            0 <= a && this.OD(this.N.Zc.Zb[this.tb].vi);
            this.mb();
            return 0 != (this.D.S & E.pg) ?
                !1 : !0
        },
        OD: function(a) {
            this.ti = a;
            this.mb()
        },
        Hh: function() {
            this.ce || this.mb()
        },
        mb: function() {
            this.ce = !0;
            var a = this.N.Zc,
                b = a.Zb[0].yp;
            this.pa = this.oa = 0;
            this.rect.left = 0;
            this.rect.top = 0;
            this.rect.right = this.L;
            this.rect.bottom = this.K;
            0 <= this.tb ? a = a.Zb[this.tb].vi : (a = this.ti, null == a && (a = ""));
            b &= p.Lp | p.Sj | p.yt | p.Mp | p.Kp | p.Ai | p.OE;
            a = this.ob.Ys(a, b, this.rect, this.font, this.mp);
            0 == (b & (p.Kp | p.Ai)) && (this.K = a)
        },
        cn: function(a) {
            this.D.$b = E.We;
            this.D.Rb = a
        },
        Eb: function(a, b, c) {
            this.za && this.ce && this.ob.Eb(a, b + this.w -
                this.c.fa + this.Da.x, c + this.u - this.c.ka + this.Da.y, this.D.$b, this.D.Rb)
        }
    });
    Rd.prototype = p.extend(new L, {
        Z: function() {},
        Gb: function() {},
        handle: function() {
            this.c.pause();
            this.c.rs = this;
            this.c.B.Za[this.c.B.oc - 1].Wa.se(this);
            this.rH()
        },
        Wq: function() {
            this.c.B.Za[this.c.B.oc - 1].Wa.removeChild(this)
        },
        CI: function() {
            var a;
            a = this.c.h.Wf - this.c.h.hg;
            var b = this.c.h.Xf - this.c.h.ig;
            0 == this.kk ? this.c.h.Xc[n.Hf] && (a = this.HA(a, b), 0 != a && (this.kk = a)) : this.c.h.Xc[n.Hf] || (this.HA(a, b) == this.kk ? (this.c.i.Rc = this.kk, this.c.i.yd(this,
                -5439484), 0 != (this.N.Zc.Zb[this.kk].yp & qa.JG) ? this.c.i.yd(this, -5308412) : this.c.i.yd(this, -5373948), this.Wq(), this.c.rs = null, this.c.resume(), this.c.br(this.Kb, !0)) : this.kk = 0)
        },
        HA: function(a, b) {
            var c;
            if (null != this.Sd)
                for (c = 1; c < this.Sd.length; c++)
                    if (a >= this.Sd[c].left && a < this.Sd[c].right && b > this.Sd[c].top && b < this.Sd[c].bottom) return c;
            return 0
        },
        kz: function(a, b, c) {
            var d, e;
            c ? (d = 8421504, e = 16777215) : (e = 8421504, d = 16777215);
            a.Bs(b.left, b.top, b.right - b.left, b.bottom - b.top, 0, 1);
            var f = Array(3),
                g;
            for (g = 0; 3 > g; g++) f[g] =
                new G;
            f[0].x = b.right - 1;
            0 == c && --f[0].x;
            f[0].y = b.top + 1;
            f[1].y = b.top + 1;
            f[1].x = b.left + 1;
            f[2].x = b.left + 1;
            f[2].y = b.bottom;
            0 == c && --f[2].y;
            a.Fd(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
            a.Fd(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
            0 == c && --f[0].x;
            f[0].y += 1;
            f[1].x += 1;
            f[1].y += 1;
            f[2].x += 1;
            0 == c && --f[2].y;
            a.Fd(f[0].x, f[0].y, f[1].x, f[1].y, d, 1);
            a.Fd(f[1].x, f[1].y, f[2].x, f[2].y, d, 1);
            0 == c && (f[0].x += 2, f[1].x = b.right - 1, f[1].y = b.bottom - 1, f[2].y = b.bottom - 1, --f[2].x, a.Fd(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.Fd(f[1].x, f[1].y, f[2].x, f[2].y,
                e, 1), --f[0].x, f[0].y += 1, --f[1].x, --f[1].y, f[2].x += 1, --f[2].y, a.Fd(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.Fd(f[1].x, f[1].y, f[2].x, f[2].y, e, 1))
        },
        zK: function(a, b, c) {
            var d = new Z;
            d.Bz(this.Sd[b]);
            this.kz(a, this.Sd[b], c);
            d.left += 2;
            d.top += 2;
            d.right -= 4;
            d.bottom -= 4;
            c && (d.left += 2, d.top += 2);
            this.jh[b].Eb(a, (d.left + d.right) / 2 - this.jh[b].width / 2, (d.top + d.bottom) / 2 - this.jh[b].height / 2, 0, 0)
        },
        rH: function() {
            this.Sr = new na(this.c.h, 8, 8);
            var a = this.N.Zc,
                b = this.c,
                c = a.Zb[1],
                d = c.zx,
                e = 0 != (c.yp & qa.Ty),
                f = b.h.Vb.Rf(c.fn);
            this.nt =
                Math.floor(3 * this.Sr.measureText("X", f) / 2);
            this.aj = 4;
            this.Od = 64;
            var g;
            for (g = 1; g < a.Zb.length; g++) c = a.Zb[g], 0 < c.vi.length && (c = this.Sr.measureText(c.vi, f), this.Od = Math.max(this.Od, c + 2 * this.nt + 4), this.aj = Math.max(this.aj, Math.floor(3 * f.df() / 2)));
            this.qr = Math.max(Math.floor(this.aj / 4), 2);
            this.Od += 2 * this.nt + 4;
            var h = new Z;
            for (g = 1; g < a.Zb.length; g++) c = a.Zb[g], this.jh[g] = new na(b.h, this.Od, this.aj), h.right = this.Od, h.bottom = this.aj, this.jh[g].Rr(c.vi, p.Sj | p.Ai, h, d, f, e ? 1 : 0, 16777215);
            a = a.Zb[0];
            e = 0 != (a.yp & qa.Ty);
            f = b.h.Vb.Rf(a.fn);
            g = Math.floor(3 * this.Sr.measureText("X", f) / 2);
            c = this.Sr.measureText(a.vi, f);
            this.ko = Math.floor(3 * f.df() / 2);
            this.Od = Math.max(this.Od, c + 2 * g + 4);
            this.Od > b.h.sa ? this.Od = b.h.sa : this.Od > b.B.ke && (this.Od = b.B.ke);
            h.right = this.Od;
            h.bottom = this.ko;
            this.jh[0] = new na(b.h, this.Od, this.ko);
            this.jh[0].Rr(a.vi, p.Sj | p.Ai, h, d, f, e ? 1 : 0, 16777215)
        },
        Eb: function(a) {
            var b = this.N.Zc,
                c = this.c,
                d = this.w - c.fa,
                c = this.u - c.ka,
                e = new Z;
            e.left = d;
            e.top = c;
            var f = this.ko + 1 + (this.aj + this.qr) * (b.Zb.length - 1) + this.qr + 4;
            e.right =
                d + this.Od;
            e.bottom = c + f;
            a.Dc(e.left, e.top, e.right - e.left, e.bottom - e.top, 12632256, 0, 0);
            this.kz(a, e, !1);
            e.left += 2;
            e.top += 2;
            e.right -= 2;
            e.bottom = e.top + this.ko;
            this.jh[0].Eb(a, (e.left + e.right) / 2 - this.jh[0].width / 2, (e.top + e.bottom) / 2 - this.jh[0].height / 2, 0, 0);
            e.top = e.bottom;
            a.Fd(e.left, e.top, e.right, e.bottom, 8421504, 1, 0, 0);
            e.top += 1;
            e.bottom += 1;
            a.Fd(e.left, e.top, e.right, e.bottom, 16777215, 1, 0, 0);
            if (null == this.Sd)
                for (this.Sd = Array(b.Zb.length), i = 1; i < b.Zb.length; i++) this.Sd[i] = new Z, this.Sd[i].left = d + 2 + this.nt,
                    this.Sd[i].right = d + this.Od - 2 - this.nt, this.Sd[i].top = c + 2 + this.ko + 1 + this.qr + (this.aj + this.qr) * (i - 1), this.Sd[i].bottom = this.Sd[i].top + this.aj;
            for (i = 1; i < b.Zb.length; i++) this.zK(a, i, this.kk == i)
        }
    });
    Sd.prototype = p.extend(new L, {
        Z: function(a, b) {
            this.ext.Z(this);
            var c = this.c.h.file.vg(a.gC);
            this.Qw = a.iC;
            this.ext.Gz(c, b, a.jC)
        },
        tu: function(a, b, c, d, e) {
            this.Da = this.c.B.Za[d];
            this.za = e;
            1 != this.Va && (this.Va = !0, this.ra = this.Da.Wa, this.ra.se(this))
        },
        Ul: function(a, b, c, d, e) {
            this.Da = this.c.B.Za[c];
            this.za = e;
            1 != this.Va &&
                (this.Va = !0, this.ra = d ? this.Da.Nb : this.Da.Wa, this.ra.se(this))
        },
        Jh: function() {
            if (0 == this.Va) return -1;
            this.Va = !1;
            var a = this.ra.ed(this);
            this.ra.removeChild(this);
            return a
        },
        handle: function() {
            0 != (this.qa & 512) ? this.D.handle() : 16 == (this.qa & 48) || 48 == (this.qa & 48) ? this.A.move() : 32 == (this.qa & 48) && this.ca.Ze();
            var a = 0;
            0 == this.nw && (a = this.ext.zv());
            0 != (a & Ga.Qy) && (this.nw = !0);
            null != this.b && this.b.M && (this.b.M = !1)
        },
        Oi: function() {
            this.ext.Oi()
        },
        Ez: function() {},
        Eb: function() {},
        Gb: function(a) {
            this.ext.Yu(a)
        },
        lI: function() {
            return null
        },
        Oq: function(a, b) {
            return this.ext.Oq(a, b)
        },
        action: function(a, b) {
            this.ext.action(a, b)
        },
        Yq: function(a) {
            return this.ext.Yq(a)
        },
        cn: function(a) {
            this.D.$b = E.We;
            this.D.Rb = a
        },
        cR: function() {},
        wl: function() {
            this.za = !0
        },
        Ak: function() {
            this.za = !1
        },
        ed: function() {
            return this.ra.ed(this)
        },
        xk: function() {
            return this.ra.children.length
        },
        Xd: function(a) {
            a >= this.ra.children.length && (a = this.ra.children.length);
            0 > a && (a = 0);
            this.ra.Xd(this, a)
        },
        XJ: function() {},
        vH: function() {},
        fm: function() {
            this.ext.fm()
        },
        fB: function(a) {
            this.c.h.ha.fB(a)
        },
        uQ: function(a) {
            return this.c.h.ha.Wb(a)
        },
        kQ: function() {
            return this.c.h
        },
        AQ: function() {
            return this.w
        },
        BQ: function() {
            return this.u
        },
        zQ: function() {
            return this.L
        },
        df: function() {
            return this.K
        },
        pD: function(a) {
            null != this.A ? this.A.ba.ec(a) : (this.w = a, null != this.b && (this.b.M = !0, this.b.Xa = !0))
        },
        sD: function(a) {
            null != this.A ? this.A.ba.fc(a) : (this.u = a, null != this.b && (this.b.M = !0, this.b.Xa = !0))
        },
        rx: function(a) {
            this.L = a
        },
        qx: function(a) {
            this.K = a
        },
        sp: function(a, b) {
            this.L = a;
            this.K = b
        },
        SQ: function() {
            this.nw = !1
        },
        jQ: function(a,
            b) {
            if (0 == this.c.eg) {
                var c = this.c.i.Rc;
                this.c.i.Rc = b;
                a = -(a + C.Ee + 1) << 16;
                a |= this.Fa & 65535;
                this.c.i.yd(this, a);
                this.c.i.Rc = c
            }
        },
        NQ: function(a, b) {
            0 == this.c.eg && (a = -(a + C.Ee + 1) << 16, a |= this.Fa & 65535, this.c.i.hK(1, a, b, this, this.ac))
        },
        pause: function() {
            this.c.pause()
        },
        resume: function() {
            this.c.resume()
        },
        TQ: function() {},
        ZP: function() {
            this.c.Of(this.Kb)
        },
        setPosition: function(a, b) {
            null != this.A ? (this.A.ba.ec(a), this.A.ba.fc(b)) : (this.w = a, this.u = b, null != this.b && (this.b.M = !0, this.b.Xa = !0))
        },
        oQ: function() {
            return this.Qw
        },
        bR: function(a) {
            this.Qw = a
        },
        Aq: function(a, b, c, d, e) {
            this.c.Aq(a, b, c, e, d, !0)
        },
        mQ: function() {
            return this.c.hx
        },
        hm: function() {
            this.c.Qc++;
            return this.c.getExpression()
        },
        nQ: function() {
            return this.c.i.Rc
        },
        lz: function(a, b, c) {
            return 0 != (a.qa & u.Gf) && a.b.dc == S.Dh ? a.A.ba.lz(b, c) : 0
        },
        pQ: function() {
            this.pw = this.Ho = 0;
            return this.vI()
        },
        vI: function() {
            if (this.pw < this.c.zb) {
                for (; null == this.c.G[this.Ho];) this.Ho++;
                var a = this.c.G[this.Ho];
                this.pw++;
                this.Ho++;
                return a
            }
            return null
        },
        wQ: function(a) {
            var b = 0,
                c;
            for (c = 0; c < this.c.zb; c++) {
                for (; null ==
                    this.c.G[b];) b++;
                var d = this.c.G[b];
                b++;
                if ((d.io << 16 | d.Kb & 65535) == a) return d
            }
            return null
        },
        pA: function(a) {
            return this.c.pA(a)
        },
        qA: function(a) {
            return this.c.qA(a)
        },
        TJ: function(a) {
            return hoAdRunHeader.h.TJ(a)
        },
        QP: function() {}
    });
    Wa.MO = 22;
    Wa.create = function(a) {
        var b = a.file.R,
            c = null,
            d = a.file.s(),
            e = a.file.s();
        switch (e) {
            case 1:
                c = new mf(a);
                break;
            case 2:
                c = new of(a);
                break;
            case 3:
                c = new ha(a);
                break;
            case 4:
                c = new ha(a);
                break;
            case 5:
                c = new Ea(a);
                break;
            case 6:
                c = new Qa(a);
                break;
            case 7:
                c = new Ea(a);
                break;
            case 9:
                c = new lb(a);
                break;
            case 10:
                c = new ha(a);
                break;
            case 11:
                c = new ha(a);
                break;
            case 12:
                c = new ha(a);
                break;
            case 13:
                c = new jf(a);
                break;
            case 14:
                c = new Ud(a);
                break;
            case 15:
                c = new ra(a);
                break;
            case 16:
                c = new Vd(a);
                break;
            case 17:
                c = new ha(a);
                break;
            case 18:
                c = new Wd(a);
                break;
            case 19:
                c = new Xd(a);
                break;
            case 21:
                c = new lb(a);
                break;
            case 22:
                c = new ra(a);
                break;
            case 23:
                c = new ra(a);
                break;
            case 24:
                c = new hf(a);
                break;
            case 25:
                c = new Ea(a);
                break;
            case 26:
                c = new ha(a);
                break;
            case 27:
                c = new ra(a);
                break;
            case 28:
                c = new ra(a);
                break;
            case 29:
                c = new Ea(a);
                break;
            case 31:
                c =
                    new ha(a);
                break;
            case 32:
                c = new ha(a);
                break;
            case 34:
                c = new Ea(a);
                break;
            case 35:
                c = new Qa(a);
                break;
            case 36:
                c = new Qa(a);
                break;
            case 37:
                c = new ha(a);
                break;
            case 38:
                c = new oa(a);
                break;
            case 39:
                c = new lf(a);
                break;
            case 40:
                c = new Xa(a);
                break;
            case 41:
                c = new Xa(a);
                break;
            case 42:
                c = new gf(a);
                break;
            case 43:
                c = new ha(a);
                break;
            case 44:
                c = new Ud(a);
                break;
            case 45:
                c = new ra(a);
                break;
            case 46:
                c = new ra(a);
                break;
            case 47:
                c = new Td(a);
                break;
            case 48:
                c = new Ea(a);
                break;
            case 49:
                c = new ha(a);
                break;
            case 50:
                c = new ha(a);
                break;
            case 51:
                c = new Td(a);
                break;
            case 52:
                c = new ra(a);
                break;
            case 53:
                c = new ra(a);
                break;
            case 54:
                c = new ra(a);
                break;
            case 55:
                c = new kf(a);
                break;
            case 56:
                c = new Ea(a);
                break;
            case 57:
                c = new ha(a);
                break;
            case 58:
                c = new ha(a);
                break;
            case 59:
                c = new ra(a);
                break;
            case 60:
                c = new ha(a);
                break;
            case 61:
                c = new ha(a);
                break;
            case 62:
                c = new ra(a);
                break;
            case 63:
                c = new Xa(a);
                break;
            case 64:
                c = new Xa(a);
                break;
            case 67:
                c = new ha(a);
                break;
            case 68:
                c = new Yd(a);
                break;
            case 69:
                c = new nf(a);
                break;
            case 72:
                c = new Xd(a)
        }
        c.code = e;
        a.file.seek(b + d);
        return c
    };
    oa.pF = 1;
    oa.oN = 2;
    oa.Lt = 4;
    oa.Kt = 8;
    oa.pN = 16;
    pa.zE = 1;
    pa.yE = 2;
    pa.AE = 4;
    pa.Xx = 8;
    pa.prototype = {
        bl: function(a, b, c) {
            c.om = -1;
            if (-1 == this.Oo) {
                0 != b && (c.dir = -1, 0 == (this.Wk & pa.Xx) && (c.dir = a.lr(this.fs)));
                c.x = this.js;
                c.y = this.ks;
                var d = this.Nw;
                d > a.B.oc - 1 && (d = a.B.oc - 1);
                c.om = d;
                c.zu = !1
            } else {
                a.i.Om = !1;
                d = a.i.kr(this.Po);
                c.zu = a.i.Ec;
                if (null == d) return !1;
                c.x = d.w;
                c.y = d.u;
                c.om = d.fd;
                if (0 != (this.Wk & pa.yE) && 0 != (d.qa & u.Gi) && 0 <= d.b.La) {
                    var e;
                    e = d.b.Ka;
                    null != a.Uj(d) && (e = 0, e == ca.Ex && (e = d.b.Ka));
                    e = a.h.ha.Yi(d.b.La, e, d.b.qb, d.b.rb);
                    c.x += e.ph - e.Ea;
                    c.y += e.qh -
                        e.ya
                }
                if (0 != (this.Wk & pa.zE)) {
                    e = this.Mw + d.c.Ab(d) & 31;
                    var f = M.oI(this.gs, e);
                    c.x += M.nI(this.gs, e);
                    c.y += f
                } else c.x += this.js, c.y += this.ks;
                0 != (b & 1) && (c.dir = 0 != (this.Wk & pa.Xx) ? -1 : 0 != (this.Wk & pa.AE) ? d.c.Ab(d) : a.lr(this.fs))
            }
            return 0 != (b & 2) && (c.x < a.Sm || c.x > a.Qm || c.y < a.Wm || c.y > a.Um) ? !1 : !0
        }
    };
    Vd.prototype = p.extend(new pa, {});
    lb.prototype = p.extend(new pa, {});
    Wd.prototype = p.extend(new pa, {});
    Yd.prototype = {
        evaluate: function(a) {
            if (null == a.O || 0 != this.tA && (a.O.np & this.tA) != this.hI) return !1;
            for (var b = 0; b < this.values.length; b++) {
                var c =
                    this.values[b],
                    d;
                d = c.global ? a.c.h.ov(c.index) : a.O.im(c.index);
                if (!k.Yl(d, c.RD, c.SJ)) return !1
            }
            return !0
        }
    };
    Ya.prototype = {
        Dc: function() {},
        dx: function() {},
        cx: function() {},
        PC: function() {},
        Pe: function() {},
        xj: function() {},
        QC: function() {},
        RC: function() {},
        Fd: function() {},
        Bs: function() {},
        OC: function() {},
        CK: function() {},
        DC: function(a, b, c, d) {
            var e = this.hk[this.hk.length - 1];
            e && (a < e.x && (a = e.x), b < e.y && (b = e.y), a + c > e.x + e.lt && (c = e.x + e.lt - a), b + d > e.y + e.mr && (d = e.y + e.mr - b));
            a = {
                x: a,
                y: b,
                lt: c,
                mr: d
            };
            this.hk.push(a);
            return a
        },
        wC: function() {
            this.hk.pop()
        }
    };
    Fa.prototype = p.extend(new Ya, {
        ex: function(a) {
            this.Ew = this.sx = a;
            this.Ra.imageSmoothingEnabled = a;
            this.Ra.webkitImageSmoothingEnabled = a;
            this.Ra.mozImageSmoothingEnabled = a;
            this.Ra.msImageSmoothingEnabled = a;
            this.Dw = -1;
            this.Se(0, 0)
        },
        kD: function(a, b) {
            this.Ra.scale(a, b);
            this.Cp = a;
            this.Ep = b;
            this.rk = this.pk = 0;
            1 < this.Cp ? this.pk = 1 : 0 < this.Cp && 1 > this.Cp && (this.pk = 1 / this.Cp);
            1 < this.Ep && (this.rk = 1);
            0 < this.Ep && 1 > this.Ep && (this.rk = 1 / this.Ep)
        },
        Kq: function(a, b, c, d) {
            this.Ra.clearRect(a, b,
                c, d)
        },
        Dc: function(a, b, c, d, e, f, g) {
            var h = this.Ra;
            this.Se(f, g);
            h.fillStyle = p.cf(e);
            h.fillRect(a, b, c, d)
        },
        dx: function(a, b, c, d, e, f, g) {
            var h = this.Ra;
            this.Se(f, g);
            h.fillStyle = p.cf(e);
            p.Sq(h, a, b, c, d);
            h.fill()
        },
        cx: function(a, b, c, d, e, f, g, h, q) {
            if (e == f) return this.Dc(a, b, c, d, e, h, q);
            var k = this.Ra;
            this.Se(h, q);
            this.yz(a, b, c, d, g, e, f);
            k.fillRect(a, b, c, d)
        },
        PC: function(a, b, c, d, e, f, g, h, q) {
            if (e == f) return this.dx(a, b, c, d, e, h, q);
            var k = this.Ra;
            this.Se(h, q);
            this.yz(a, b, c, d, g, e, f);
            p.Sq(k, a, b, c, d);
            this.Ra.fill()
        },
        Pe: function(a,
            b, c, d, e, f, g, h) {
            var q = this.Ra,
                k = b - a.Ea,
                l = c - a.ya;
            this.Se(g, h);
            0 == d && 1 == e && 1 == f ? 0 == a.xb ? null != a.wb && q.drawImage(a.wb, k, l) : q.drawImage(a.app.ha.Lb[a.xb], a.Ad, a.Bd, a.width, a.height, k, l, a.width, a.height) : (q.save(), q.translate(b, c), 0 != d && q.rotate(.0174532925 * -d), q.scale(Math.max(.001, e), Math.max(.001, f)), q.translate(-a.Ea, -a.ya), 0 == a.xb ? null != a.wb && 0 != a.width && 0 != a.height && q.drawImage(a.wb, 0, 0, a.width, a.height, 0, 0, a.width, a.height) : q.drawImage(a.app.ha.Lb[a.xb], a.Ad, a.Bd, a.width, a.height, 0, 0, a.width, a.height),
                q.restore())
        },
        UQ: function(a, b, c, d, e, f, g, h) {
            var q = this.Ra,
                k = b - a.Ea,
                l = c - a.ya;
            this.Se(g, h);
            0 == d && 1 == e && 1 == f ? 0 == a.xb ? null != a.wb && q.drawImage(a.wb, 0, 0, a.width, a.height, k, l, a.width + this.pk, a.height + this.rk) : q.drawImage(a.app.ha.Lb[a.xb], a.Ad, a.Bd, a.width, a.height, k, l, a.width + this.pk, a.height + this.rk) : (q.save(), q.translate(b, c), 0 != d && q.rotate(.0174532925 * -d), q.scale(Math.max(.001, e), Math.max(.001, f)), q.translate(-a.Ea, -a.ya), 0 == a.xb ? null != a.wb && q.drawImage(a.wb, 0, 0, a.width, a.height, 0, 0, a.width, a.height) :
                q.drawImage(a.app.ha.Lb[a.xb], a.Ad, a.Bd, a.width, a.height, 0, 0, a.width, a.height), q.restore())
        },
        xj: function(a, b, c, d, e, f, g) {
            this.Se(f, g);
            this.Ra.drawImage(a, b, c, d, e)
        },
        QC: function(a, b, c, d, e, f, g) {
            var h = this.Ra;
            this.Se(f, g);
            h.save();
            h.beginPath();
            h.moveTo(b, c);
            h.lineTo(b + d, c);
            h.lineTo(b + d, c + e);
            h.lineTo(b, c + e);
            h.lineTo(b, c);
            h.clip();
            f = a.width;
            g = a.height;
            d = Math.floor(d / f) + 1;
            e = Math.floor(e / g) + 1;
            var q, k;
            for (q = 0; q < d; q++)
                for (k = 0; k < e; k++) 0 == a.xb ? null != a.wb && h.drawImage(a.wb, 0, 0, a.width, a.height, b + q * f, c + k * g, a.width +
                    this.pk, a.height + this.rk) : h.drawImage(a.app.ha.Lb[a.xb], a.Ad, a.Bd, a.width, a.height, b + q * f, c + k * g, a.width + this.pk, a.height + this.rk);
            h.restore()
        },
        RC: function(a, b, c, d, e, f, g) {
            if (!(a instanceof Y)) throw Error("renderPatternEllipse: bad image type: " + typeof a);
            var h = this.Ra;
            this.Se(f, g);
            0 == a.xb ? null != a.wb && (h.fillStyle = h.createPattern(a.wb, "repeat")) : (a.pattern || (a.pattern = document.createElement("canvas"), a.pattern.width = a.width, a.pattern.height = a.height, h = a.pattern.getContext("2d"), h.drawImage(a.app.ha.Lb[a.xb],
                a.Ad, a.Bd, a.width, a.height, 0, 0, a.width, a.height)), h.fillStyle = h.createPattern(a.pattern, "repeat"));
            p.Sq(h, b, c, d, e);
            this.Ra.fill()
        },
        Fd: function(a, b, c, d, e, f, g, h) {
            var q = this.Ra;
            this.Se(g, h);
            q.strokeStyle = p.cf(e);
            q.lineCap = "round";
            q.lineWidth = f;
            q.beginPath();
            q.moveTo(a, b);
            q.lineTo(c, d);
            q.closePath();
            q.stroke()
        },
        CK: function(a, b, c, d, e, f) {
            var g = this.Ra;
            e = p.cf(e);
            1 == f ? (g.beginPath(), g.moveTo(a, b), g.lineTo(a + c, b), g.lineTo(a + c / 2, b - d)) : (g.beginPath(), g.moveTo(a, b), g.lineTo(a, b - c), g.lineTo(a - d, b - c / 2));
            g.closePath();
            g.lineWidth = 1;
            g.strokeStyle = e;
            g.stroke();
            g.fillStyle = e;
            g.fill()
        },
        Bs: function(a, b, c, d, e, f, g, h) {
            var q = this.Ra;
            this.Se(g, h);
            q.strokeStyle = p.cf(e);
            q.lineWidth = f;
            q.strokeRect(a, b, c, d)
        },
        OC: function(a, b, c, d, e, f, g, h) {
            var q = this.Ra;
            this.Se(g, h);
            q.lineWidth = e;
            q.strokeStyle = p.cf(f);
            p.Sq(q, a, b, c, d);
            this.Ra.stroke()
        },
        clip: function(a, b, c, d) {
            var e = this.Ra;
            e.save();
            e.beginPath();
            e.rect(a, b, c, d);
            e.clip()
        },
        rL: function() {
            this.Ra.restore()
        },
        DC: function() {
            var a = this.Ra,
                b = Ya.prototype.DC.apply(this, arguments);
            a.beginPath();
            a.rect(b.x, b.y, b.lt, b.mr);
            a.clip()
        },
        wC: function() {
            var a = this.Ra;
            Ya.prototype.wC.apply(this, arguments);
            if (0 < this.hk.length) {
                var b = this.hk[this.hk.length - 1];
                a.beginPath();
                a.rect(b.x, b.y, b.lt, b.mr);
                a.clip()
            } else a.VQ()
        },
        Se: function(a, b) {
            var c = this.Ra;
            if ("undefined" == typeof a) c.globalAlpha = 1, c.jk = "source-over";
            else if (a != this.Dw || b != this.NJ) {
                this.Dw = a;
                this.NJ = b;
                var d = a & E.Lx,
                    e = 0 != (a & E.Mx) | this.sx;
                e != this.Ew && (this.Ew = e, c.imageSmoothingEnabled = e, c.webkitImageSmoothingEnabled = e, c.mozImageSmoothingEnabled =
                    e, c.msImageSmoothingEnabled = e);
                c.globalAlpha = 0 != (a & E.tt) ? (b >>> 24 & 255) / 255 : d == E.We ? (128 - b) / 128 : 1;
                switch (d) {
                    case E.Kx:
                        c.jk = "lighter";
                        break;
                    case E.Nx:
                        c.jk = "xor";
                        break;
                    default:
                        c.jk = "source-over"
                }
            }
        },
        yz: function(a, b, c, d, e, f, g) {
            a = e ? this.Ra.createLinearGradient(a, b, a, b + d) : this.Ra.createLinearGradient(a, b, a + c, b);
            a.addColorStop(0, p.cf(f));
            a.addColorStop(1, p.cf(g));
            this.Ra.fillStyle = a
        }
    });
    sa.yq = 1;
    sa.prototype = {
        load: function(a) {
            var b = a.R;
            a.wa(4);
            this.ND = a.v();
            this.MD = a.v();
            this.xp = a.v();
            this.wp = a.kd();
            var c = a.v(),
                d = a.v();
            a.seek(b + c);
            this.Rn = a.Ob();
            this.Rn = this.Rn.substr(0, this.Rn.indexOf("."));
            this.Qz = b + d
        }
    };
    Zd.prototype = {
        LA: function() {
            return null
        }
    };
    z.Tp = 0;
    z.sq = 1;
    z.Sy = 2;
    z.Ox = 3;
    z.ut = 0;
    z.Mt = 1;
    z.Sx = 2;
    z.Ry = 3;
    z.Ii = 0;
    z.Ji = 1;
    z.Pj = 2;
    z.Qj = 3;
    z.Rx = 4;
    z.Zx = 0;
    z.ME = 1;
    z.nu = 1;
    z.zq = 2;
    z.prototype = {
        start: function(a, b, c, d) {
            this.Vz = b;
            this.Kh = this.Vz.getContext("2d");
            this.$ = c;
            this.m = d;
            this.Kr = (new Date).getTime();
            this.j = a.MD;
            0 == this.j && (this.j = 1);
            this.so = this.Kr;
            this.to = this.Kr + this.j;
            this.xa = this.jB = !0
        },
        finish: function() {},
        vr: function() {
            if (this.jB) {
                var a =
                    new Date;
                return a.getTime() >= this.to ? !0 : a.getTime() >= this.to
            }
            return !0
        },
        zc: function() {
            this.so = (new Date).getTime();
            this.so > this.to && (this.so = this.to);
            return this.so - this.Kr
        },
        F: function(a, b, c, d, e, f, g) {
            this.Mr && (this.Kh.globalCompositeOperation = "source-atop");
            1 == arguments.length ? this.Kh.drawImage(a, 0, 0) : 0 < f && 0 < g && this.Kh.drawImage(a, d, e, f, g, b, c, f, g)
        },
        stretch: function(a, b, c, d, e, f, g, h, q) {
            this.Mr && (this.Kh.globalCompositeOperation = "source-atop");
            0 < d && 0 < e && 0 < h && 0 < q && this.Kh.drawImage(a, f, g, h, q, b, c, d, e)
        },
        Sb: function() {},
        end: function() {},
        Z: function() {}
    };
    $d.prototype = {
        gL: function(a, b) {
            var c = a.N.Bm;
            b && (c = a.N.Io);
            var d = null,
                e;
            if (0 != (a.qa & u.Gi)) {
                var f = this.app.ha.Wb(a.b.La),
                    d = document.createElement("canvas");
                d.width = f.width;
                d.height = f.height;
                e = d.getContext("2d");
                0 == f.xb ? e.drawImage(f.wb, 0, 0) : e.drawImage(this.app.ha.Lb[f.xb], f.Ad, f.Bd, f.width, f.height, 0, 0, f.width, f.height)
            } else 32 <= a.Fa && (d = document.createElement("canvas"), d.width = a.L, d.height = a.K, new StandardRendered(d), d = null);
            if (null == d) return null;
            e = d.width;
            var g = d.height,
                f = document.createElement("canvas");
            f.width = e;
            f.height = g;
            var h = document.createElement("canvas");
            h.width = e;
            h.height = g;
            var q = document.createElement("canvas");
            q.width = e;
            q.height = g;
            b ? (e = h.getContext("2d"), e.drawImage(d, 0, 0), e = f.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.xp & sa.yq) && this.Az(q, d, c.wp)) : (e = q.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.xp & sa.yq) && this.Az(h, d, c.wp));
            c = this.am(c, f, h, q);
            null != c && (d = 0, 0 != (a.X & L.Ci) ? (c.Mr = !0, d |= z.zq) : (c.Mr = !1, d |= z.nu), a.zl = f, c.Sb(d));
            return c
        },
        Az: function(a, b, c) {
            a = a.getContext("2d");
            a.drawImage(b, 0, 0);
            var d = b.width;
            b = b.height;
            var e = a.getImageData(0, 0, d, b),
                f, g = (c & 16711680) >> 16,
                h = (c & 65280) >> 8,
                q = c & 255;
            for (f = 0; f < b; f++)
                for (c = 0; c < d; c++) 0 != e.data[4 * (f * d + c) + 3] && (e.data[4 * (f * d + c)] = g, e.data[4 * (f * d + c) + 1] = h, e.data[4 * (f * d + c) + 2] = q);
            a.putImageData(e, 0, 0)
        },
        am: function(a, b, c, d) {
            var e = null;
            "cctrans" == a.Rn.toLowerCase() && (e = new Ra);
            return null != e ? (e = e.LA(a), this.app.file.seek(a.Qz), e.Mr = !1, e.Z(a, this.app.file, b, c, d), e) : null
        }
    };
    Ra.SA = "BAND SE00 SE10 SE12 DOOR SE03 MOSA SE05 SE06 SCRL SE01 SE07 SE09 SE13 SE08 SE02 ZIGZ SE04 ZOOM SE11 FADE".split(" ");
    Ra.prototype = p.extend(new Zd, {
        LA: function(a) {
            var b = a.ND;
            a = "" + String.fromCharCode(b & 255);
            b >>= 8;
            a += String.fromCharCode(b & 255);
            b >>= 8;
            a += String.fromCharCode(b & 255);
            a += String.fromCharCode(b >> 8 & 255);
            for (b = 0; b < Ra.SA.length && a != Ra.SA[b]; b++);
            a = null;
            switch (b) {
                case 0:
                    a = new ce;
                    break;
                case 1:
                    a = new ae;
                    break;
                case 2:
                    a = new be;
                    break;
                case 3:
                    a = new de;
                    break;
                case 4:
                    a = new ee;
                    break;
                case 5:
                    a = new ge;
                    break;
                case 6:
                    a = new he;
                    break;
                case 7:
                    a = new ie;
                    break;
                case 8:
                    a = new je;
                    break;
                case 9:
                    a = new ke;
                    break;
                case 10:
                    a = new le;
                    break;
                case 11:
                    a =
                        new me;
                    break;
                case 12:
                    a = new ne;
                    break;
                case 13:
                    a = new oe;
                    break;
                case 14:
                    a = new pe;
                    break;
                case 15:
                    a = new qe;
                    break;
                case 16:
                    a = new re;
                    break;
                case 17:
                    a = new se;
                    break;
                case 18:
                    a = new te;
                    break;
                case 19:
                    a = new ue;
                    break;
                case 20:
                    a = new fe
            }
            return a
        }
    });
    ae.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.jb = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f = this.m.height, this.kB = 8 != this.jb ? this.jb : Math.floor(8 * Math.random()));
            var a = this.zc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c;
                switch (this.kB) {
                    case 0:
                        b = this.g / 3 * a / this.j;
                        c = this.f;
                        this.F(this.m, 0, 0, this.g / 3 - b, 0, b, c);
                        this.F(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                        b = this.g / 3;
                        c = this.f * a / this.j;
                        this.F(this.m, b, 0, b, this.f - c, b, c);
                        break;
                    case 1:
                        b = this.g / 3 * a / this.j;
                        c = this.f;
                        this.F(this.m, 0, 0, this.g / 3 - b, 0, b, c);
                        this.F(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                        b = this.g / 3;
                        c = this.f * a / this.j;
                        this.F(this.m, b, this.f - c, b, 0, b, c);
                        break;
                    case 2:
                        b = this.g / 3 * a / this.j;
                        c = this.f;
                        this.F(this.m, 0, 0, this.g / 3 - b, 0, b, c);
                        this.F(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                        b =
                            this.g / 3;
                        c = this.f * a / this.j;
                        this.F(this.m, b, 0, b, 0, b, c);
                        break;
                    case 3:
                        b = this.g / 3 * a / this.j;
                        c = this.f;
                        this.F(this.m, 0, 0, this.g / 3 - b, 0, b, c);
                        this.F(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                        b = this.g / 3;
                        c = this.f * a / this.j;
                        this.F(this.m, b, this.f - c, b, this.f - c, b, c);
                        break;
                    case 4:
                        b = this.g / 3 * a / this.j;
                        c = this.f;
                        this.F(this.m, 0, 0, this.g / 3 - b, 0, b, c);
                        this.F(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                        b = this.g / 3;
                        c = this.f / 2 * a / this.j;
                        this.F(this.m, b, 0, b, this.f / 2 - c, b, c);
                        this.F(this.m, b, this.f - c, b, this.f / 2, b, c);
                        break;
                    case 5:
                        b = this.g / 3 * a / this.j;
                        c = this.f;
                        this.F(this.m, 0, 0, this.g / 3 - b, 0, b, c);
                        this.F(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c);
                        b = this.g / 3;
                        c = this.f / 2 * a / this.j;
                        this.F(this.m, b, 0, b, 0, b, c);
                        this.F(this.m, b, this.f - c, b, this.f - c, b, c);
                        break;
                    case 6:
                        b = this.g / 3;
                        c = this.f * a / this.j;
                        this.F(this.m, 0, this.f - c, 0, 0, b, c);
                        this.F(this.m, b, 0, b, this.f - c, b, c);
                        this.F(this.m, 2 * b, this.f - c, 2 * b, 0, b, c);
                        break;
                    case 7:
                        b = this.g / 7;
                        c = this.f * a / this.j;
                        this.F(this.m, 0, this.f - c, 0, 0, b, c);
                        this.F(this.m, b, 0, b, this.f - c, b, c);
                        this.F(this.m, 2 * b, this.f - c, 2 * b, 0, b, c);
                        this.F(this.m, 3 * b,
                            0, 3 * b, this.f - c, b, c);
                        this.F(this.m, 4 * b, this.f - c, 4 * b, 0, b, c);
                        this.F(this.m, 5 * b, 0, 5 * b, this.f - c, b, c);
                        this.F(this.m, 6 * b, this.f - c, 6 * b, 0, 2 * b, c);
                        break;
                    default:
                        this.F(this.m)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    be.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.jb = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.zc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c;
                this.F(this.m);
                switch (this.jb) {
                    case 0:
                        b = this.g / 2 * a / this.j;
                        b = this.g / 2 -
                            b;
                        c = this.f / 2 * a / this.j;
                        c = this.f / 2 - c;
                        this.stretch(this.$, 0, 0, b, c, 0, 0, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        c = this.f / 2 - c;
                        this.stretch(this.$, this.g / 2 + b, 0, this.g / 2 - b, c, this.g / 2, 0, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        b = this.g / 2 - b;
                        c = this.f / 2 * a / this.j;
                        this.stretch(this.$, 0, this.f / 2 + c, b, this.f / 2 - c, 0, this.f / 2, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        this.stretch(this.$, this.g / 2 + b, this.f / 2 + c, this.g / 2 - b, this.f / 2 - c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
                        break;
                    case 1:
                        b = this.g *
                            a / this.j;
                        b = this.g - b;
                        c = this.f * a / this.j;
                        c = this.f - c;
                        this.F(this.$, 0, 0, this.g - b, this.f - c, b, c);
                        break;
                    case 2:
                        b = this.g * a / this.j;
                        c = this.f * a / this.j;
                        c = this.f - c;
                        this.F(this.$, b, 0, 0, this.f - c, this.g - b, c);
                        break;
                    case 3:
                        b = this.g * a / this.j;
                        b = this.g - b;
                        c = this.f * a / this.j;
                        this.F(this.$, 0, c, this.g - b, 0, b, this.f - c);
                        break;
                    case 4:
                        b = this.g * a / this.j;
                        c = this.f * a / this.j;
                        this.F(this.$, b, c, 0, 0, this.g - b, this.f - c);
                        break;
                    case 5:
                        b = this.g / 2 * a / this.j;
                        b = this.g / 2 - b;
                        c = this.f / 2 * a / this.j;
                        c = this.f / 2 - c;
                        this.F(this.$, b - this.g / 2, c - this.f / 2, 0, 0,
                            this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        c = this.f / 2 - c;
                        this.F(this.$, this.g / 2 + b, c - this.f / 2, this.g / 2, 0, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        b = this.g / 2 - b;
                        c = this.f / 2 * a / this.j;
                        this.F(this.$, b - this.g / 2, this.f / 2 + c, 0, this.f / 2, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        this.F(this.$, this.g / 2 + b, this.f / 2 + c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
                        break;
                    case 6:
                        c = this.f / 2 * a / this.j;
                        c = this.f / 2 - c;
                        this.F(this.$, 0, c - this.f / 2, 0, 0, this.g, this.f / 2);
                        this.F(this.$, 0, this.f - c, 0, this.f / 2, this.g,
                            this.f / 2);
                        break;
                    case 7:
                        b = this.g / 2 * a / this.j, b = this.g / 2 - b, this.F(this.$, b - this.g / 2, 0, 0, 0, this.g / 2, this.f), this.F(this.$, this.g - b, 0, this.g / 2, 0, this.g / 2, this.f)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    ce.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.Lf = b.s();
            this.Fu = b.s();
            this.start(a, c, d, e)
        },
        Sb: function() {
            var a = this.$.width,
                b = this.$.height,
                c;
            if (this.xa) {
                0 == this.Lf && (this.Lf = 1);
                switch (this.Fu) {
                    case z.Tp:
                    case z.sq:
                        this.Bc = (a + this.Lf - 1) / this.Lf;
                        0 == this.Bc && (this.Bc = 1, this.Lf = a);
                        break;
                    default:
                        this.Bc =
                            (b + this.Lf - 1) / this.Lf, 0 == this.Bc && (this.Bc = 1, this.Lf = b)
                }
                this.Cb = 0;
                this.xa = !1
            }
            if (0 >= this.Lf || 0 >= this.Bc || 0 == this.j) this.F(this.m);
            else {
                var d = this.Bc * this.zc() / this.j;
                if (d > this.Cb) {
                    var e = 0,
                        f = 0,
                        g = 0,
                        h = 0;
                    for (c = 0; c < this.Lf; c++) {
                        switch (this.Fu) {
                            case z.Tp:
                                e = this.Cb + c * this.Bc;
                                f = 0;
                                g = d - this.Cb;
                                h = b;
                                break;
                            case z.sq:
                                e = a - (this.Cb + c * this.Bc) - (d - this.Cb);
                                f = 0;
                                g = d - this.Cb;
                                h = b;
                                break;
                            case z.Sy:
                                e = 0;
                                f = this.Cb + c * this.Bc;
                                g = a;
                                h = d - this.Cb;
                                break;
                            case z.Ox:
                                e = 0, f = b - (this.Cb + c * this.Bc) - (d - this.Cb), g = a, h = d - this.Cb
                        }
                        this.F(this.m,
                            e, f, e, f, g, h)
                    }
                }
                this.Cb = d
            }
            return this.CJ
        },
        end: function() {
            this.finish()
        }
    });
    de.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.$a = b.v();
            this.Xq = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.zc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d, e, f, g, h, q, k, l;
                k = this.g / this.$a;
                l = this.f / this.Xq;
                d = this.g / this.$a;
                e = this.f / this.Xq;
                for (f = 0; f < this.$a; f++)
                    for (g = 0; g < this.Xq; g++) b = f * k, c = g * l, h = d * a / this.j, q = e * a / this.j, this.stretch(this.m, b + (d - h) /
                        2, c + (e - q) / 2, h, q, b + (d - h) / 2, c + (e - q) / 2, h, q)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    ee.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.gj = b.s();
            this.start(a, c, d, e)
        },
        Sb: function() {
            if (this.xa) {
                switch (this.gj) {
                    case z.ut:
                    case z.Mt:
                        this.Bc = this.$.width / 2;
                        break;
                    default:
                        this.Bc = this.$.height / 2
                }
                this.Cb = 0;
                this.xa = !1
            }
            if (0 == this.Bc) this.F(this.m);
            else {
                var a = 0,
                    b = 0,
                    c = 0,
                    d = 0,
                    e = this.Bc * this.zc() / this.j;
                if (e > this.Cb) {
                    switch (this.gj) {
                        case z.ut:
                            a = this.$.width / 2 - e;
                            b = 0;
                            c = e - this.Cb;
                            d = this.m.height;
                            break;
                        case z.Mt:
                            a =
                                this.Cb;
                            b = 0;
                            c = e - this.Cb;
                            d = this.m.height;
                            break;
                        case z.Sx:
                            a = 0;
                            b = this.$.height / 2 - e;
                            c = this.m.width;
                            d = e - this.Cb;
                            break;
                        case z.Ry:
                            a = 0, b = this.Cb, c = this.m.width, d = e - this.Cb
                    }
                    this.F(this.m, a, b, a, b, c, d);
                    switch (this.gj) {
                        case z.ut:
                            a = this.$.width / 2 + this.Cb;
                            break;
                        case z.Mt:
                            a = this.$.width - e;
                            break;
                        case z.Sx:
                            b = this.$.height / 2 + this.Cb;
                            break;
                        case z.Ry:
                            b = this.$.height - e
                    }
                    this.F(this.m, a, b, a, b, c, d)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    fe.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa &&
                (this.xa = !1);
            var a;
            this.Kh.globalAlpha = 1;
            this.F(this.$);
            a = this.zc() / this.j;
            this.Kh.globalAlpha = a;
            this.F(this.m);
            return null
        },
        end: function() {
            this.Kh.globalAlpha = 1;
            this.finish()
        }
    });
    ge.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.$a = b.v();
            this.jb = b.v();
            this.Tn = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.zc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d, e, f;
                b = 0;
                var g;
                if (0 == this.jb)
                    for (g = this.f / this.$a, f = 0; f < this.$a; f++) 0 == b ?
                        (b = 0, c = f * g, d = this.g * a / this.j, e = f == this.$a - 1 ? this.f : g + 1, 0 == this.Tn ? this.F(this.m, b, c, b, c, d, e) : this.F(this.m, b, c, this.g - d, c, d, e), b = 1) : (c = f * g, d = this.g * a / this.j, b = this.g - d, e = f == this.$a - 1 ? this.f : g + 1, 0 == this.Tn ? this.F(this.m, b, c, b, c, d, e) : this.F(this.m, b, c, 0, c, d, e), b = 0);
                else
                    for (g = this.g / this.$a, f = 0; f < this.$a; f++) 0 == b ? (b = f * g, c = 0, e = this.f * a / this.j, d = f == this.$a - 1 ? this.g : g + 1, 0 == this.Tn ? this.F(this.m, b, c, b, c, d, e) : this.F(this.m, b, c, b, this.f - e, d, e), b = 1) : (b = f * g, e = this.f * a / this.j, c = this.f - e, d = f == this.$a - 1 ? this.g :
                        g + 1, 0 == this.Tn ? this.F(this.m, b, c, b, c, d, e) : this.F(this.m, b, c, b, 0, d, e), b = 0)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    he.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.$v = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            if (this.xa) {
                var a = this.$.width,
                    b = this.$.height;
                this.I = Math.floor((a * this.$v / 100 + b * this.$v / 100) / 2);
                0 == this.I && (this.I = 1);
                this.Le = (a + this.I - 1) / this.I;
                this.Kg = (b + this.I - 1) / this.I;
                this.Jk = this.Le * this.Kg;
                a = Math.floor((this.Jk + 7) / 8 + 2);
                this.Hk = 0;
                this.ve = Array(a);
                for (b = 0; b < a; b++) this.ve[b] =
                    0;
                this.xa = !1
            }
            if (null == this.ve || 2 > this.Le || 2 > this.Kg || 0 == this.j) this.F(this.m);
            else {
                var c, d, b = a = 0;
                c = Math.floor(this.Jk * this.zc() / this.j);
                var e = c - this.Hk;
                if (0 != e)
                    for (this.Hk = c, d = 0; d < e; d++) {
                        for (c = 0; 1 > c; c++) {
                            var a = Math.floor(this.Le * Math.random()),
                                b = Math.floor(this.Kg * Math.random()),
                                f, g;
                            f = b * this.Le + a;
                            g = Math.floor(f / 8);
                            f = 1 << (f & 7);
                            if (0 == (this.ve[g] & f)) {
                                this.ve[g] |= f;
                                break
                            }
                            var h = g,
                                q = (this.Jk + 7) / 8,
                                k, l = !1;
                            for (k = g; k < q; k++, h++)
                                if (-1 != this.ve[h]) {
                                    b = Math.floor(8 * k / this.Le);
                                    a = Math.floor(8 * k % this.Le);
                                    for (f = 1; 0 !=
                                        f; f <<= 1) {
                                        if (0 == (this.ve[h] & f)) {
                                            this.ve[h] |= f;
                                            l = !0;
                                            break
                                        }
                                        if (++a >= this.Le && (a = 0, ++b >= this.Kg)) break
                                    }
                                    if (l) break
                                } if (l) break;
                            for (k = h = 0; k < g; k++, h++) {
                                if (255 != this.ve[h]) {
                                    b = Math.floor(8 * k / m_nbBlockPerLine);
                                    a = Math.floor(8 * k % m_nbBlockPerLine);
                                    for (f = 1; 0 != f; f <<= 1) {
                                        if (0 == (this.ve[h] & f)) {
                                            this.ve[h] |= f;
                                            l = !0;
                                            break
                                        }
                                        if (++a >= this.Le && (a = 0, ++b >= this.Kg)) break
                                    }
                                    if (l) break
                                }
                                if (l) break;
                                l = !1
                            }
                        }
                        1 > c && this.F(this.m, Math.floor(a * this.I), Math.floor(b * this.I), Math.floor(a * this.I), Math.floor(b * this.I), this.I, this.I)
                    }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    ie.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.jb = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.zc(),
                b = a / this.j;
            if (1 < b) this.F(this.m);
            else {
                var c, d, e;
                .25 > b ? (d = 2 * this.g * a / this.j, d *= 2, e = this.f / 7, b = this.g / 2 - d / 2, c = this.f / 2 - e / 2, this.F(this.m, b, c, b, c, d, e), d = this.g / 7, e = 2 * this.f * a / this.j, e *= 2, b = this.g / 2 - d / 2, c = this.f / 2 - e / 2) : (b = this.g / 2, d = this.g * a / this.j - b, e = this.f / 2, c = 0, this.F(this.m, b, c, b, c, d, e), c =
                    this.f / 2, e = this.f * a / this.j - c, b = d = this.g / 2, this.F(this.m, b, c, b, c, d, e), d = this.g * a / this.j - this.g / 2, b = this.g / 2 - d, c = e = this.f / 2, this.F(this.m, b, c, b, c, d, e), e = this.f * a / this.j - this.f / 2, c = this.f / 2 - e, d = this.g / 2, b = 0);
                this.F(this.m, b, c, b, c, d, e)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    je.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.jb = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f = this.m.height, this.Zv = !1);
            var a = this.zc(),
                b = a / this.j;
            if (1 < b) this.F(this.m);
            else {
                var c,
                    d, e, f;
                if (.5 >= b) switch (this.jb) {
                    case 0:
                        e = this.g * a / this.j * 2;
                        f = this.f / 2;
                        c = this.g - e;
                        d = this.f / 2;
                        this.F(this.m, 0, 0, c, d, e, f);
                        break;
                    case 1:
                        e = this.g * a / this.j * 2;
                        f = this.f / 2;
                        c = this.g - e;
                        d = this.f / 2;
                        this.F(this.m, c, 0, 0, d, e, f);
                        break;
                    case 2:
                        e = this.g * a / this.j * 2;
                        f = this.f / 2;
                        c = this.g - e;
                        d = this.f / 2;
                        this.F(this.m, 0, d, c, 0, e, f);
                        break;
                    case 3:
                        e = this.g * a / this.j * 2, f = this.f / 2, c = this.g - e, d = this.f / 2, this.F(this.m, c, d, 0, 0, e, f)
                }
                if (.5 < b) switch (0 == this.Zv && (1 >= this.jb ? this.F(this.m, 0, 0, 0, this.f / 2, this.g, this.f / 2) : this.F(this.m, 0, this.f /
                        2, 0, 0, this.g, this.f / 2), this.Zv = !0), b = a - this.j / 2, b /= this.j / 2, f = this.f / 2 * 1E3 * b / 1E3, this.jb) {
                    case 0:
                    case 1:
                        this.stretch(this.m, 0, f, this.g, this.f / 2, 0, this.f / 2, this.g, this.f / 2);
                        this.stretch(this.m, 0, 0, this.g, f, 0, this.f / 2 - f, this.g, f);
                        break;
                    case 2:
                    case 3:
                        this.stretch(this.m, 0, this.f / 2 - f, this.g, this.f / 2, 0, 0, this.g, this.f / 2), this.stretch(this.m, 0, this.f - f, this.g, f, 0, this.f / 2, this.g, f)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    ke.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.gj = b.v();
            this.start(a,
                c, d, e)
        },
        Sb: function() {
            var a = this.$.width,
                b = this.$.height;
            if (this.xa) {
                switch (this.gj) {
                    case z.Tp:
                    case z.sq:
                        this.Bc = a;
                        break;
                    default:
                        this.Bc = b
                }
                this.Cb = 0;
                this.xa = !1
            }
            if (0 == this.j) this.F(this.m);
            else {
                var c = this.Bc * this.zc() / this.j;
                if (c > this.Cb) {
                    var d = 0,
                        e = 0;
                    switch (this.gj) {
                        case z.Tp:
                            d = c - a;
                            e = 0;
                            break;
                        case z.sq:
                            d = a - c;
                            e = 0;
                            break;
                        case z.Sy:
                            d = 0;
                            e = c - b;
                            break;
                        case z.Ox:
                            d = 0, e = b - c
                    }
                    this.F(this.m, d, e, 0, 0, a, b);
                    this.Cb = c
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    le.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.jb =
                b.v();
            this.$a = b.v();
            this.eA = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.zc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d, e, f, g;
                f = this.g * this.$a / 100;
                g = this.f * this.$a / 100;
                d = f * a / this.j;
                e = g * a / this.j;
                b = this.g / 2 - d / 2;
                c = this.f / 2 - e / 2;
                0 == this.eA ? this.F(this.m, b, c, b, c, d, e) : this.stretch(this.m, b, c, d, e, this.g / 2 - f / 2, this.f / 2 - g / 2, f, g);
                b = 100 - this.$a;
                f = this.g * b / 100;
                g = this.f * b / 100;
                d = f / 2 * a / this.j;
                e = g / 2 * a / this.j;
                this.F(this.m, 0, 0, 0, 0, this.g, e);
                this.F(this.m,
                    0, 0, 0, 0, d, this.f);
                this.F(this.m, 0, this.f - e, 0, this.f - e, this.g, e);
                this.F(this.m, this.g - d, 0, this.g - d, 0, d, this.f)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    me.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.jb = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f = this.m.height);
            var a = this.zc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c;
                switch (this.jb) {
                    case 0:
                        b = this.g * a / this.j;
                        c = this.f * a / this.j;
                        this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f);
                        break;
                    case 1:
                        b = this.g *
                            a / this.j;
                        c = this.f * a / this.j;
                        this.stretch(this.m, this.g - b, 0, b, c, 0, 0, this.g, this.f);
                        break;
                    case 2:
                        b = this.g * a / this.j;
                        c = this.f * a / this.j;
                        this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f);
                        break;
                    case 3:
                        b = this.g * a / this.j;
                        c = this.f * a / this.j;
                        this.stretch(this.m, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f);
                        break;
                    case 4:
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        5 > c && (c = 5);
                        this.stretch(this.m, 0, 0, b, c, 0, 0, this.$.width / 2, this.$.height / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        5 > c && (c = 5);
                        this.stretch(this.m, this.g - b,
                            0, b, c, this.g / 2, 0, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        this.stretch(this.m, 0, this.f - c, b, c, 0, this.f / 2, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        this.stretch(this.m, this.g - b, this.f - c, b, c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
                        break;
                    case 5:
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        5 > c && (c = 5);
                        this.stretch(this.m, this.g / 2 - b, this.f / 2 - c, b, c, 0, 0, this.$.width / 2, this.$.height / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        5 > c && (c = 5);
                        this.stretch(this.m, this.g / 2, this.f / 2 - c, b, c,
                            this.g / 2, 0, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        this.stretch(this.m, this.g / 2 - b, this.f / 2, b, c, 0, this.f / 2, this.g / 2, this.f / 2);
                        b = this.g / 2 * a / this.j;
                        c = this.f / 2 * a / this.j;
                        this.stretch(this.m, this.g / 2, this.f / 2, b, c, this.g / 2, this.f / 2, this.g / 2, this.f / 2);
                        break;
                    case 6:
                        b = this.g;
                        c = this.f * a / this.j;
                        this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f);
                        break;
                    case 7:
                        b = this.g * a / this.j;
                        c = this.f;
                        this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f);
                        break;
                    case 8:
                        b = this.g * a / this.j;
                        c = this.f;
                        this.stretch(this.m, this.g -
                            b, 0, b, c, 0, 0, this.g, this.f);
                        break;
                    case 9:
                        b = this.g, c = this.f * a / this.j, this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f)
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    ne.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.jb = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f = this.m.height, this.nc = 0);
            var a = this.zc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c;
                switch (this.jb) {
                    case 0:
                        0 == this.nc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.$,
                            0, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.nc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f));
                        break;
                    case 1:
                        0 == this.nc ? (b = this.g, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.$, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.nc = 1)) : (b = this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f));
                        break;
                    case 2:
                        0 == this.nc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.$, this.g -
                            b, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.nc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, this.g - b, 0, b, c, 0, 0, this.g, this.f));
                        break;
                    case 3:
                        0 == this.nc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = this.f, this.stretch(this.$, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.nc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = this.f, this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f));
                        break;
                    case 4:
                        0 == this.nc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = this.f, this.stretch(this.$, this.g / 2 - b / 2, 0, b, c, 0,
                            0, this.g, this.f), a >= this.j / 2 && (this.nc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = this.f, this.stretch(this.m, this.g / 2 - b / 2, 0, b, c, 0, 0, this.g, this.f));
                        break;
                    case 5:
                        0 == this.nc ? (c = 2 * this.f * a / this.j, c = this.f - c, b = this.g, this.stretch(this.$, 0, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.nc = 1)) : (c = 2 * this.f * a / this.j, c -= this.f, b = this.g, this.stretch(this.m, 0, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f));
                        break;
                    case 6:
                        0 == this.nc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.$, this.g /
                            2 - b / 2, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.nc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, this.g / 2 - b / 2, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f));
                        break;
                    case 7:
                        0 == this.nc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = this.f, this.stretch(this.$, this.g - b, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.nc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = this.f, this.stretch(this.m, this.f - b, 0, b, c, 0, 0, this.g, this.f));
                        break;
                    case 8:
                        0 == this.nc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f *
                            a / this.j, c = this.f - c, this.stretch(this.$, 0, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.nc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f));
                        break;
                    case 9:
                        0 == this.nc ? (b = this.g, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.$, 0, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.nc = 1)) : (b = this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f));
                        break;
                    case 10:
                        0 == this.nc ? (b = 2 * this.g * a / this.j,
                            b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.$, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.nc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f))
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    oe.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.jb = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f = this.m.height, this.Gk = this.Fk = 0);
            var a = this.zc();
            if (1 < a /
                this.j) this.F(this.m);
            else {
                var b, c, d, e;
                b = this.f * a / this.j;
                a = this.g * a / this.j;
                if (0 == this.jb) {
                    e = b % 2;
                    for (c = 0; c < this.g; c += 2) {
                        for (d = this.Fk; d < b; d++) this.F(this.m, c, d, c, d, 1, 1);
                        for (d = this.f - b - e; d < this.f - this.Fk; d++) this.F(this.m, c + 1, d + 1, c + 1, d + 1, 1, 1)
                    }
                    this.Fk = 0 == b % 2 ? b : b - 1
                }
                if (1 == this.jb) {
                    e = a % 2;
                    for (d = 0; d < this.f; d++) {
                        for (c = this.Gk; c < a; c += 2) this.F(this.m, c + 1, d, c + 1, d, 1, 1);
                        for (c = this.g - a - e; c < this.g - this.Gk; c += 2) this.F(this.m, c, d + 1, c, d + 1, 1, 1)
                    }
                    this.Gk = 0 == a % 2 ? a : a - 1
                }
                if (2 == this.jb) {
                    e = b % 2;
                    for (c = 0; c < this.g; c += 2) {
                        for (d = this.Fk; d <
                            b; d += 2) this.F(this.m, c, d, c, d, 1, 1);
                        for (d = this.f - b - e; d < this.f - this.Fk; d += 2) this.F(this.m, c + 1, d + 1, c + 1, d + 1, 1, 1)
                    }
                    e = a % 2;
                    for (d = 0; d < this.f; d += 2) {
                        for (c = this.Gk; c < a; c += 2) this.F(this.m, c + 1, d, c + 1, d, 1, 1);
                        for (c = this.g - a - e; c < this.g - this.Gk; c += 2) this.F(this.m, c, d + 1, c, d + 1, 1, 1)
                    }
                    this.Fk = 0 == b % 2 ? b : b - 1;
                    this.Gk = 0 == a % 2 ? a : a - 1
                }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    pe.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.$a = b.v();
            this.Sn = b.v();
            this.dA = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g =
                this.m.width, this.f = this.m.height, this.qm = 0);
            var a = this.zc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d;
                b = this.g / 2;
                d = this.f / 2;
                this.qm = 6.28318 * this.$a * a / this.j;
                1 == this.dA && (this.qm = 6.28318 - this.qm);
                c = this.g / 2 - this.g / 2 * a / this.j;
                b = Math.floor(b + Math.cos(this.qm) * c);
                c = Math.floor(d + Math.sin(this.qm) * c);
                d = this.g * a / this.j;
                a = this.f * a / this.j;
                this.stretch(this.$, 0, 0, this.g, this.f, 0, 0, this.$.width, this.$.height);
                1 == this.jR ? this.stretch(this.m, b - d / 2, c - a / 2, d, a, 0, 0, this.g, this.f) : this.stretch(this.m, b - d / 2, c - a /
                    2, d, a, this.g - d, this.f - a, d, a)
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    qe.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.$a = b.v();
            this.Sn = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f = this.m.height, this.Jr = 0);
            var a = this.zc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d;
                b = this.g / 2;
                c = this.f / 2;
                d = 6.28318 * this.$a * a / this.j;
                d -= 6.28318 * this.Jr;
                1 == this.Sn && (d = 6.28318 - d);
                a = this.g * a / this.j;
                b = Math.floor(b + Math.cos(d) * a);
                c = Math.floor(c + Math.sin(d) * a);
                this.F(this.m);
                this.F(this.$, b - this.g / 2, c - this.f / 2, 0, 0, this.g, this.f);
                0 == this.Sn ? 6.28318 <= d && this.Jr++ : 0 >= d && this.Jr++
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    re.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.Dx = b.v();
            this.pt = b.s();
            this.VD = b.s();
            this.start(a, c, d, e)
        },
        Sb: function() {
            var a = this.$.width,
                b = this.$.height;
            if (this.xa) {
                this.I = Math.floor((a * this.Dx / 100 + b * this.Dx / 100) / 2);
                0 == this.I && (this.I = 1);
                this.Le = (a + this.I - 1) / this.I;
                this.Kg = (b + this.I - 1) / this.I;
                this.Yv = this.VD;
                this.zd = this.pt;
                switch (this.pt) {
                    case z.Ii:
                        this.ia =
                            this.ja = 0;
                        break;
                    case z.Ji:
                        this.ia = a - this.I;
                        this.ja = 0;
                        break;
                    case z.Pj:
                        this.ia = 0;
                        this.ja = b - this.I;
                        break;
                    case z.Qj:
                        this.ia = a - this.I;
                        this.ja = b - this.I;
                        break;
                    case z.Rx:
                        this.ia = a / 2 - this.I, this.ja = b / 2 - this.I, this.zd = this.Yv == z.Zx ? z.Ii : z.Ji, this.Lr = this.ia - this.I, this.Or = this.ja - this.I, this.Ir = this.ja + 2 * this.I, this.Nr = this.ia + 2 * this.I, this.Le = 2 + 2 * (this.ia + this.I - 1) / this.I, this.Kg = 2 + 2 * (this.ja + this.I - 1) / this.I
                }
                this.Jk = Math.floor(this.Le * this.Kg);
                this.Hk = 0;
                this.xa = !1
            }
            if (this.I >= a || this.I >= b) this.F(this.m);
            else {
                var c;
                c = Math.floor(this.Jk * this.zc() / this.j);
                var d = c - this.Hk;
                if (0 != d)
                    for (this.Hk = c, c = 0; c < d; c++)
                        if (this.F(this.m, this.ia, this.ja, this.ia, this.ja, this.I, this.I), this.pt == z.Rx) switch (this.zd) {
                            case z.Ii:
                                this.ia += this.I;
                                this.ia >= this.Nr && (this.ia -= this.I, this.ja += this.I, this.zd = z.Ji, this.Nr += this.I);
                                break;
                            case z.Ji:
                                this.ja += this.I;
                                this.ja >= this.Ir && (this.ja -= this.I, this.ia -= this.I, this.zd = z.Qj, this.Ir += this.I);
                                break;
                            case z.Qj:
                                this.ia -= this.I;
                                this.ia + this.I <= this.Lr && (this.ia += this.I, this.ja -= this.I, this.zd =
                                    z.Pj, this.Lr -= this.I);
                                break;
                            case z.Pj:
                                this.ja -= this.I, this.ja + this.I <= this.Or && (this.ja += this.I, this.ia += this.I, this.zd = z.Ii, this.Or -= this.I)
                        } else switch (this.Yv) {
                            case z.Zx:
                                switch (this.zd) {
                                    case z.Ii:
                                        this.ia += this.I;
                                        this.ia >= a && (this.ia -= this.I, this.ja += this.I, this.zd = z.Ji);
                                        break;
                                    case z.Ji:
                                        this.ia -= this.I;
                                        0 >= this.ia + this.I && (this.ia += this.I, this.ja += this.I, this.zd = z.Ii);
                                        break;
                                    case z.Pj:
                                        this.ia += this.I;
                                        this.ia >= a && (this.ia -= this.I, this.ja -= this.I, this.zd = z.Qj);
                                        break;
                                    case z.Qj:
                                        this.ia -= this.I, 0 >= this.ia +
                                            this.I && (this.ia += this.I, this.ja -= this.I, this.zd = z.Pj)
                                }
                                break;
                            case z.ME:
                                switch (this.zd) {
                                    case z.Ii:
                                        this.ja += this.I;
                                        this.ja >= b && (this.ja -= this.I, this.ia += this.I, this.zd = z.Pj);
                                        break;
                                    case z.Ji:
                                        this.ja += this.I;
                                        this.ja >= b && (this.ja -= this.I, this.ia -= this.I, this.zd = z.Qj);
                                        break;
                                    case z.Pj:
                                        this.ja -= this.I;
                                        0 >= this.ja + this.I && (this.ja += this.I, this.ia += this.I, this.zd = z.Ii);
                                        break;
                                    case z.Qj:
                                        this.ja -= this.I, 0 >= this.ja + this.I && (this.ja += this.I, this.ia -= this.I, this.zd = z.Ji)
                                }
                        }
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    se.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.jb = b.v();
            this.$a = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f = this.m.height, this.Vf = this.Ik = 0);
            var a = this.zc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d, e;
                0 == this.jb ? (b = this.f / this.$a, e = Math.floor(this.Ik * b) + Math.floor(b), c = 0, d = this.g * a / this.j, d = d * this.$a / 2, d -= this.g * this.Ik, b = 0 == this.Vf ? 0 : this.g - d, this.F(this.m, b, c, b, c, d, e), c = this.f - e, b = 1 == this.Vf ? 0 : this.g - d, this.F(this.m, b, c, b, c, d, e), d >= this.g &&
                    (this.Ik++, this.Vf++, 2 == this.Vf && (this.Vf = 0))) : (b = this.g / this.$a, d = Math.floor(this.Ik * b) + Math.floor(b), b = 0, e = this.f * a / this.j, e = e * this.$a / 2, e -= this.f * this.Ik, c = 0 == this.Vf ? 0 : this.f - e, this.F(this.m, b, c, b, c, d, e), b = this.g - d, c = 1 == this.Vf ? 0 : this.f - e, this.F(this.m, b, c, b, c, d, e), e >= this.f && (this.Ik++, this.Vf++, 2 == this.Vf && (this.Vf = 0)))
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    te.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.start(a, c, d, e)
        },
        Sb: function(a) {
            var b = this.$.width,
                c = this.$.height;
            this.xa &&
                (this.xa = !1);
            if (0 == this.j) this.F(this.m);
            else {
                var d;
                d = this.zc();
                0 != (a & z.zq) ? (a = Math.floor(b - b * d / this.j), d = Math.floor(c - c * d / this.j), this.F(this.m), this.stretch(this.$, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c)) : (a = Math.floor(b * d / this.j), d = Math.floor(c * d / this.j), this.F(this.$), this.stretch(this.m, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c))
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    ue.prototype = p.extend(new z, {
        Z: function(a, b, c, d, e) {
            this.$a = b.v();
            this.start(a, c, d, e)
        },
        Sb: function() {
            this.xa && (this.xa = !1, this.g = this.m.width, this.f =
                this.m.height);
            var a = this.zc();
            if (1 < a / this.j) this.F(this.m);
            else {
                var b, c, d;
                0 == this.$a ? (c = this.g * a / this.j, d = this.f * a / this.j, a = this.g / 2 - c / 2, b = this.f / 2 - d / 2, this.stretch(this.m, 0, 0, this.g, this.f, a, b, c, d)) : (c = this.g * a / this.j, c = this.g - c, d = this.f * a / this.j, d = this.f - d, a = this.g / 2 - c / 2, b = this.f / 2 - d / 2, this.stretch(this.$, 0, 0, this.g, this.f, a, b, c, d))
            }
            return null
        },
        end: function() {
            this.finish()
        }
    });
    l.ih = {
        qy: "PK\u0003\u0004",
        Tx: "PK\u0001\u0002",
        vt: "PK\u0005\u0006",
        Vy: "PK\u0006\u0007",
        LG: "PK\u0006\u0006",
        DM: "PK\u0007\b"
    };
    l.KH = {
        Gh: !1,
        Si: !1,
        dir: !1,
        Nf: null,
        Zl: null
    };
    l.prototype = function() {
        function a(d) {
            "/" != d.slice(-1) && (d += "/");
            if (!this.files[d]) {
                var e = b(d);
                e && a.call(this, e);
                c.call(this, d, null, {
                    dir: !0
                })
            }
            return this.files[d]
        }

        function b(a) {
            "/" == a.slice(-1) && (a = a.substring(0, a.length - 1));
            var b = a.lastIndexOf("/");
            return 0 < b ? a.substring(0, b) : ""
        }

        function c(c, e, q) {
            var g = b(c);
            g && a.call(this, g);
            q = q || {};
            !0 === q.Gh && null == q.Si && (q.Si = !0);
            q = d(q, l.KH);
            q.Nf = q.Nf || new Date;
            null !== q.Zl && (q.Zl = q.Zl.toUpperCase());
            q.dir || null === e || "undefined" ===
                typeof e ? (q.Gh = !1, q.Si = !1, e = null) : l.xl.gt && e instanceof Uint8Array ? (q.Gh = !1, q.Si = !0, e = l.oh.ft(e)) : l.xl.Zy && e instanceof ArrayBuffer ? (q.Gh = !1, q.Si = !0, e = new Uint8Array(e), e = l.oh.ft(e)) : q.Si && !q.Gh && (!0 !== q.sC && (e = l.oh.GD(e)), delete q.sC);
            return this.files[c] = new f(c, e, q)
        }

        function d() {
            var a = {},
                b, c;
            for (b = 0; b < arguments.length; b++)
                for (c in arguments[b]) arguments[b].hasOwnProperty(c) && "undefined" === typeof a[c] && (a[c] = arguments[b][c]);
            return a
        }

        function e(a, b) {
            var c = "",
                d;
            for (d = 0; d < b; d++) c += String.fromCharCode(a &
                255), a >>>= 8;
            return c
        }

        function f(a, b, c) {
            this.name = a;
            this.data = b;
            this.options = c
        }
        f.prototype = {
            $y: function() {
                var a = this.data;
                if (null === a || "undefined" === typeof a) return "";
                this.options.Gh && (a = pb.decode(a));
                this.options.Si || (a = l.prototype.QD(a));
                return a
            }
        };
        return {
            load: function() {
                throw Error("Load method is not defined. Is the file jszip-load.js included ?");
            },
            filter: function(a) {
                var b = [],
                    c, e, g;
                for (c in this.files) this.files.hasOwnProperty(c) && (e = this.files[c], g = new f(e.name, e.data, d(e.options)), e = c.slice(this.root.length,
                    c.length), c.slice(0, this.root.length) === this.root && a(e, g) && b.push(g));
                return b
            },
            file: function(a, b, d) {
                if (1 === arguments.length) {
                    if (a instanceof RegExp) {
                        var e = a;
                        return this.filter(function(a, b) {
                            return !b.options.dir && e.test(a)
                        })
                    }
                    return this.filter(function(b, c) {
                        return !c.options.dir && b === a
                    })[0] || null
                }
                a = this.root + a;
                c.call(this, a, b, d);
                return this
            },
            fQ: function(b) {
                if (!b) return this;
                if (b instanceof RegExp) return this.filter(function(a, c) {
                    return c.options.dir && b.test(a)
                });
                var c = a.call(this, this.root + b),
                    d = this.clone();
                d.root = c.name;
                return d
            },
            remove: function(a) {
                a = this.root + a;
                var b = this.files[a];
                b || ("/" != a.slice(-1) && (a += "/"), b = this.files[a]);
                if (b)
                    if (b.options.dir)
                        for (var b = this.filter(function(b, c) {
                                return c.name.slice(0, a.length) === a
                            }), c = 0; c < b.length; c++) delete this.files[b[c].name];
                    else delete this.files[a];
                return this
            },
            iQ: function(a) {
                var b, c;
                a = d(a || {}, {
                    Gh: !0,
                    Zl: "STORE",
                    type: "base64"
                });
                var f = a.Zl.toUpperCase();
                if (!l.Mf[f]) throw f + " is not a valid compression method !";
                var g = [],
                    k = [],
                    n = 0,
                    m;
                for (m in this.files)
                    if (this.files.hasOwnProperty(m)) {
                        b =
                            this.files[m];
                        var p = this.QD(b.name),
                            r, t, v;
                        t = b;
                        b = p;
                        var w = f;
                        r = b !== t.name;
                        c = t.$y();
                        var z = t.options;
                        v = z.Nf.getHours();
                        v = v << 6 | z.Nf.getMinutes();
                        v = v << 5 | z.Nf.getSeconds() / 2;
                        t = z.Nf.getFullYear() - 1980;
                        t = t << 4 | z.Nf.getMonth() + 1;
                        t = t << 5 | z.Nf.getDate();
                        var B = null !== c && 0 !== c.length,
                            w = z.Zl || w;
                        if (!l.Mf[w]) throw w + " is not a valid compression method !";
                        z = l.Mf[w];
                        w = B ? z.oH(c) : "";
                        r = "\n\x00" + (r ? "\x00\b" : "\x00\x00") + (B ? z.Qr : l.Mf.STORE.Qr);
                        r += e(v, 2);
                        r += e(t, 2);
                        r += B ? e(this.Qq(c), 4) : "\x00\x00\x00\x00";
                        r += B ? e(w.length, 4) : "\x00\x00\x00\x00";
                        r += B ? e(c.length, 4) : "\x00\x00\x00\x00";
                        r += e(b.length, 2);
                        b = r += "\x00\x00";
                        c = w;
                        c = l.ih.qy + b + p + c;
                        p = l.ih.Tx + "\u0014\x00" + b + "\x00\x00\x00\x00\x00\x00" + (!0 === this.files[m].options.dir ? "\u0010\x00\x00\x00" : "\x00\x00\x00\x00") + e(n, 4) + p;
                        n += c.length;
                        k.push(c);
                        g.push(p)
                    } f = k.join("");
                g = g.join("");
                k = f + g + (l.ih.vt + "\x00\x00\x00\x00" + e(k.length, 2) + e(k.length, 2) + e(g.length, 4) + e(f.length, 4) + "\x00\x00");
                switch (a.type.toLowerCase()) {
                    case "uint8array":
                        return l.oh.vx(k);
                    case "arraybuffer":
                        return l.oh.vx(k).buffer;
                    case "blob":
                        return l.oh.jL(k);
                    case "base64":
                        return a.Gh ? pb.encode(k) : k;
                    default:
                        return k
                }
            },
            Qq: function(a, b) {
                if ("" === a || "undefined" === typeof a) return 0;
                var c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242,
                    1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368,
                    4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646,
                    62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804,
                    3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701,
                    2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
                ];
                "undefined" == typeof b && (b = 0);
                var d;
                b ^= -1;
                for (var e = 0, f = a.length; e < f; e++) d = (b ^ a.charCodeAt(e)) & 255, d = c[d], b = b >>> 8 ^ d;
                return b ^ -1
            },
            clone: function() {
                var a = new l,
                    b;
                for (b in this) "function" !== typeof this[b] && (a[b] = this[b]);
                return a
            },
            QD: function(a) {
                for (var b = "", c = 0; c < a.length; c++) {
                    var d = a.charCodeAt(c);
                    128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
                }
                return b
            },
            PD: function(a) {
                for (var b = "", c = 0, d, e, f; c < a.length;) d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d &
                    31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3);
                return b
            }
        }
    }();
    l.Mf = {
        STORE: {
            Qr: "\x00\x00",
            oH: function(a) {
                return a
            },
            Ax: function(a) {
                return a
            }
        }
    };
    l.xl = {
        Zy: "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array,
        gt: "undefined" !== typeof Uint8Array,
        blob: function() {
            if ("undefined" === typeof ArrayBuffer) return !1;
            var a = new ArrayBuffer(0);
            try {
                return 0 === (new Blob([a], {
                    type: "application/zip"
                })).size
            } catch (c) {}
            try {
                var b = new(window.BlobBuilder ||
                    window.WebKitBlobBuilder || window.cG || window.XF);
                b.append(a);
                return 0 === b.getBlob("application/zip").size
            } catch (c) {}
            return !1
        }()
    };
    l.oh = {
        GD: function(a) {
            for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a.charCodeAt(c) & 255);
            return b
        },
        vx: function(a) {
            if (!l.xl.gt) throw Error("Uint8Array is not supported by this browser");
            for (var b = new ArrayBuffer(a.length), b = new Uint8Array(b), c = 0; c < a.length; c++) b[c] = a.charCodeAt(c);
            return b
        },
        ft: function(a) {
            if (!l.xl.gt) throw Error("Uint8Array is not supported by this browser");
            for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a[c]);
            return b
        },
        jL: function(a) {
            if (!l.xl.blob) throw Error("Blob is not supported by this browser");
            a = l.oh.vx(a).buffer;
            try {
                return new Blob([a], {
                    type: "application/zip"
                })
            } catch (c) {}
            try {
                var b = new(window.BlobBuilder || window.WebKitBlobBuilder || window.cG || window.XF);
                b.append(a);
                return b.getBlob("application/zip")
            } catch (c) {}
            throw Error("Bug : can't construct the Blob.");
        }
    };
    var pb = function() {
        return {
            encode: function(a) {
                for (var b = "", c, d, e, f, g, h, k = 0; k < a.length;) c =
                    a.charCodeAt(k++), d = a.charCodeAt(k++), e = a.charCodeAt(k++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, h = e & 63, isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h);
                return b
            },
            decode: function(a) {
                var b = "",
                    c, d, e, f, g,
                    h = 0;
                for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < a.length;) c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(h++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 !=
                    f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e));
                return b
            }
        }
    }();
    if (!l) throw "JSZip not defined";
    (function() {
        function a() {
            this.list = this.next = null
        }

        function b() {
            this.n = this.Kf = this.e = 0;
            this.t = null
        }

        function c(c, d, e, f, g, h) {
            this.Oj = 16;
            this.dG = 288;
            this.status = 0;
            this.root = null;
            this.Th = 0;
            var k = Array(this.Oj + 1),
                m, l, q, n, p, r, t, w = Array(this.Oj + 1),
                D, v, z, B = new b,
                u = Array(this.Oj);
            n = Array(this.dG);
            var A, N = Array(this.Oj + 1),
                E, G, F;
            F = this.root = null;
            for (p = 0; p < k.length; p++) k[p] = 0;
            for (p = 0; p < w.length; p++) w[p] =
                0;
            for (p = 0; p < u.length; p++) u[p] = null;
            for (p = 0; p < n.length; p++) n[p] = 0;
            for (p = 0; p < N.length; p++) N[p] = 0;
            m = 256 < d ? c[256] : this.Oj;
            D = c;
            v = 0;
            p = d;
            do k[D[v]]++, v++; while (0 < --p);
            if (k[0] == d) this.root = null, this.status = this.Th = 0;
            else {
                for (r = 1; r <= this.Oj && 0 == k[r]; r++);
                t = r;
                h < r && (h = r);
                for (p = this.Oj; 0 != p && 0 == k[p]; p--);
                q = p;
                h > p && (h = p);
                for (E = 1 << r; r < p; r++, E <<= 1)
                    if (0 > (E -= k[r])) {
                        this.status = 2;
                        this.Th = h;
                        return
                    } if (0 > (E -= k[p])) this.status = 2, this.Th = h;
                else {
                    k[p] += E;
                    N[1] = r = 0;
                    D = k;
                    v = 1;
                    for (z = 2; 0 < --p;) N[z++] = r += D[v++];
                    D = c;
                    p = v = 0;
                    do 0 != (r =
                        D[v++]) && (n[N[r]++] = p); while (++p < d);
                    d = N[q];
                    N[0] = p = 0;
                    D = n;
                    v = 0;
                    n = -1;
                    A = w[0] = 0;
                    z = null;
                    for (G = 0; t <= q; t++)
                        for (c = k[t]; 0 < c--;) {
                            for (; t > A + w[1 + n];) {
                                A += w[1 + n];
                                n++;
                                G = (G = q - A) > h ? h : G;
                                if ((l = 1 << (r = t - A)) > c + 1)
                                    for (l -= c + 1, z = t; ++r < G && !((l <<= 1) <= k[++z]);) l -= k[z];
                                A + r > m && A < m && (r = m - A);
                                G = 1 << r;
                                w[1 + n] = r;
                                z = Array(G);
                                for (l = 0; l < G; l++) z[l] = new b;
                                F = null == F ? this.root = new a : F.next = new a;
                                F.next = null;
                                F.list = z;
                                u[n] = z;
                                0 < n && (N[n] = p, B.Kf = w[n], B.e = 16 + r, B.t = z, r = (p & (1 << A) - 1) >> A - w[n], u[n - 1][r].e = B.e, u[n - 1][r].Kf = B.Kf, u[n - 1][r].n = B.n, u[n - 1][r].t =
                                    B.t)
                            }
                            B.Kf = t - A;
                            v >= d ? B.e = 99 : D[v] < e ? (B.e = 256 > D[v] ? 16 : 15, B.n = D[v++]) : (B.e = g[D[v] - e], B.n = f[D[v++] - e]);
                            l = 1 << t - A;
                            for (r = p >> A; r < G; r += l) z[r].e = B.e, z[r].Kf = B.Kf, z[r].n = B.n, z[r].t = B.t;
                            for (r = 1 << t - 1; 0 != (p & r); r >>= 1) p ^= r;
                            for (p ^= r;
                                (p & (1 << A) - 1) != N[n];) A -= w[n], n--
                        }
                    this.Th = w[1];
                    this.status = 0 != E && 1 != q ? 1 : 0
                }
            }
        }

        function d(a) {
            for (; A < a;) u |= (C.length == J ? -1 : C.charCodeAt(J++) & 255) << A, A += 8
        }

        function e(a) {
            return u & K[a]
        }

        function f(a) {
            u >>= a;
            A -= a
        }

        function g(a, b, c) {
            var g, h, k;
            if (0 == c) return 0;
            for (k = 0;;) {
                d(F);
                h = G.list[e(F)];
                for (g = h.e; 16 <
                    g;) {
                    if (99 == g) return -1;
                    f(h.Kf);
                    g -= 16;
                    d(g);
                    h = h.t[e(g)];
                    g = h.e
                }
                f(h.Kf);
                if (16 == g) t &= 32767, a[b + k++] = r[t++] = h.n;
                else {
                    if (15 == g) break;
                    d(g);
                    B = h.n + e(g);
                    f(g);
                    d(H);
                    h = I.list[e(H)];
                    for (g = h.e; 16 < g;) {
                        if (99 == g) return -1;
                        f(h.Kf);
                        g -= 16;
                        d(g);
                        h = h.t[e(g)];
                        g = h.e
                    }
                    f(h.Kf);
                    d(g);
                    E = t - h.n - e(g);
                    for (f(g); 0 < B && k < c;) B--, E &= 32767, t &= 32767, a[b + k++] = r[t++] = r[E++]
                }
                if (k == c) return c
            }
            w = -1;
            return k
        }

        function h(a, b, h) {
            var k, m, l, q, n, p, r, t = Array(316);
            for (k = 0; k < t.length; k++) t[k] = 0;
            d(5);
            p = 257 + e(5);
            f(5);
            d(5);
            r = 1 + e(5);
            f(5);
            d(4);
            k = 4 + e(4);
            f(4);
            if (286 <
                p || 30 < r) return -1;
            for (m = 0; m < k; m++) d(3), t[Q[m]] = e(3), f(3);
            for (; 19 > m; m++) t[Q[m]] = 0;
            F = 7;
            m = new c(t, 19, 19, null, null, F);
            if (0 != m.status) return -1;
            G = m.root;
            F = m.Th;
            q = p + r;
            for (k = l = 0; k < q;)
                if (d(F), n = G.list[e(F)], m = n.Kf, f(m), m = n.n, 16 > m) t[k++] = l = m;
                else if (16 == m) {
                d(2);
                m = 3 + e(2);
                f(2);
                if (k + m > q) return -1;
                for (; 0 < m--;) t[k++] = l
            } else {
                17 == m ? (d(3), m = 3 + e(3), f(3)) : (d(7), m = 11 + e(7), f(7));
                if (k + m > q) return -1;
                for (; 0 < m--;) t[k++] = 0;
                l = 0
            }
            F = 9;
            m = new c(t, p, 257, L, M, F);
            0 == F && (m.status = 1);
            if (0 != m.status) return -1;
            G = m.root;
            F = m.Th;
            for (k = 0; k < r; k++) t[k] =
                t[k + p];
            H = 6;
            m = new c(t, r, 0, O, P, H);
            I = m.root;
            H = m.Th;
            return 0 == H && 257 < p || 0 != m.status ? -1 : g(a, b, h)
        }

        function k(a, b) {
            var k, l;
            for (k = 0; k < b && (!N || -1 != w);) {
                if (0 < B) {
                    if (0 != w)
                        for (; 0 < B && k < b;) B--, E &= 32767, t &= 32767, a[0 + k++] = r[t++] = r[E++];
                    else {
                        for (; 0 < B && k < b;) B--, t &= 32767, d(8), a[0 + k++] = r[t++] = e(8), f(8);
                        0 == B && (w = -1)
                    }
                    if (k == b) break
                }
                if (-1 == w) {
                    if (N) break;
                    d(1);
                    0 != e(1) && (N = !0);
                    f(1);
                    d(2);
                    w = e(2);
                    f(2);
                    G = null;
                    B = 0
                }
                switch (w) {
                    case 0:
                        var q = a,
                            n = 0 + k,
                            D = b - k;
                        l = A & 7;
                        f(l);
                        d(16);
                        l = e(16);
                        f(16);
                        d(16);
                        if (l != (~u & 65535)) l = -1;
                        else {
                            f(16);
                            B = l;
                            for (l =
                                0; 0 < B && l < D;) B--, t &= 32767, d(8), q[n + l++] = r[t++] = e(8), f(8);
                            0 == B && (w = -1)
                        }
                        break;
                    case 1:
                        if (null != G) l = g(a, 0 + k, b - k);
                        else a: {
                            var C;l = a;q = 0 + k;n = b - k;
                            if (null == m) {
                                D = Array(288);
                                for (C = 0; 144 > C; C++) D[C] = 8;
                                for (; 256 > C; C++) D[C] = 9;
                                for (; 280 > C; C++) D[C] = 7;
                                for (; 288 > C; C++) D[C] = 8;
                                z = 7;
                                C = new c(D, 288, 257, L, M, z);
                                if (0 != C.status) {
                                    alert("HufBuild error: " + C.status);
                                    l = -1;
                                    break a
                                }
                                m = C.root;
                                z = C.Th;
                                for (C = 0; 30 > C; C++) D[C] = 5;
                                p = 5;
                                C = new c(D, 30, 0, O, P, p);
                                if (1 < C.status) {
                                    m = null;
                                    alert("HufBuild error: " + C.status);
                                    l = -1;
                                    break a
                                }
                                v = C.root;
                                p = C.Th
                            }
                            G =
                            m;I = v;F = z;H = p;l = g(l, q, n)
                        }
                        break;
                    case 2:
                        l = null != G ? g(a, 0 + k, b - k) : h(a, 0 + k, b - k);
                        break;
                    default:
                        l = -1
                }
                if (-1 == l) return N ? 0 : -1;
                k += l
            }
            return k
        }

        function n(a) {
            var b, c, d;
            null == r && (r = Array(65536));
            A = u = t = 0;
            w = -1;
            N = !1;
            B = E = 0;
            G = null;
            C = a;
            J = 0;
            b = Array(1024);
            for (a = ""; 0 < (c = k(b, b.length));)
                for (d = 0; d < c; d++) a += String.fromCharCode(b[d]);
            C = null;
            return a
        }
        var p, r, t, m = null,
            v, z, u, A, w, N, B, E, G, I, F, H, C, J, K = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
            L = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83,
                99, 115, 131, 163, 195, 227, 258, 0, 0
            ],
            M = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99],
            O = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
            P = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        l.Mf.DEFLATE ? l.Mf.DEFLATE.Ax = n : l.Mf.DEFLATE = {
            Qr: "\b\x00",
            Ax: n
        }
    })();
    (function() {
        function a(a) {
            var b = "",
                c, d;
            for (d = 0; d < (a || "").length; d++) c = a.charCodeAt(d), b += "\\x" +
                (16 > c ? "0" : "") + c.toString(16).toUpperCase();
            return b
        }

        function b(a) {
            this.stream = "";
            l.xl.gt && a instanceof Uint8Array ? this.stream = l.oh.ft(a) : l.xl.Zy && a instanceof ArrayBuffer ? (a = new Uint8Array(a), this.stream = l.oh.ft(a)) : this.stream = l.oh.GD(a);
            this.index = 0
        }

        function c(a, b) {
            this.options = a;
            this.Vv = b
        }

        function d(a, b) {
            this.files = [];
            this.Vv = b;
            a && this.load(a)
        }
        b.prototype = {
            tz: function(a) {
                this.rz(this.index + a)
            },
            rz: function(a) {
                if (this.stream.length < a || 0 > a) throw Error("End of stream reached (stream length = " + this.stream.length +
                    ", asked index = " + a + "). Corrupted zip ?");
            },
            bn: function(a) {
                this.rz(a);
                this.index = a
            },
            yD: function(a) {
                this.bn(this.index + a)
            },
            eH: function(a) {
                return this.stream.charCodeAt(a)
            },
            Ha: function(a) {
                var b = 0,
                    c;
                this.tz(a);
                for (c = this.index + a - 1; c >= this.index; c--) b = (b << 8) + this.eH(c);
                this.index += a;
                return b
            },
            xf: function(a) {
                this.tz(a);
                var b = this.stream.slice(this.index, this.index + a);
                this.index += a;
                return b
            },
            tK: function() {
                var a = this.Ha(4);
                return new Date((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (a & 31) <<
                    1)
            }
        };
        c.prototype = {
            UI: function() {
                return 1 === (this.jz & 1)
            },
            vL: function() {
                return 2048 === (this.jz & 2048)
            },
            xK: function(b) {
                var c, d;
                b.yD(22);
                this.hv = b.Ha(2);
                d = b.Ha(2);
                this.fileName = b.xf(this.hv);
                b.yD(d);
                if (-1 == this.Nq || -1 == this.it) throw Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
                this.pH = b.xf(this.Nq);
                a: {
                    b = this.xz;
                    for (c in l.Mf)
                        if (l.Mf.hasOwnProperty(c) && l.Mf[c].Qr === b) {
                            c = l.Mf[c];
                            break a
                        } c = null
                }
                if (null === c) throw Error("Corrupted zip : compression " +
                    a(this.xz) + " unknown (inner file : " + this.fileName + ")");
                this.Bx = c.Ax(this.pH);
                if (this.Bx.length !== this.it) throw Error("Bug : uncompressed data size mismatch");
                if (this.Vv.PP && l.prototype.Qq(this.Bx) !== this.Qq) throw Error("Corrupted zip : CRC32 mismatch");
            },
            sK: function(a) {
                a.xf(2);
                a.Ha(2);
                this.jz = a.Ha(2);
                this.xz = a.xf(2);
                this.Nf = a.tK();
                this.Qq = a.Ha(4);
                this.Nq = a.Ha(4);
                this.it = a.Ha(4);
                this.hv = a.Ha(2);
                this.dI = a.Ha(2);
                this.gI = a.Ha(2);
                this.Yz = a.Ha(2);
                a.Ha(2);
                this.cI = a.Ha(4);
                this.Xv = a.Ha(4);
                if (this.UI()) throw Error("Encrypted zip are not supported");
                this.fileName = a.xf(this.hv);
                this.vK(a);
                this.WJ(a);
                this.oA = a.xf(this.gI);
                this.dir = this.cI & 16 ? !0 : !1
            },
            WJ: function() {
                if (this.$q[1]) {
                    var a = new b(this.$q[1].value); - 1 === this.it && (this.it = a.Ha(8)); - 1 === this.Nq && (this.Nq = a.Ha(8)); - 1 === this.Xv && (this.Xv = a.Ha(8)); - 1 === this.Yz && (this.Yz = a.Ha(4))
                }
            },
            vK: function(a) {
                var b = a.index,
                    c, d, e;
                for (this.$q = this.$q || {}; a.index < b + this.dI;) c = a.Ha(2), d = a.Ha(2), e = a.xf(d), this.$q[c] = {
                    id: c,
                    length: d,
                    value: e
                }
            },
            DI: function() {
                this.vL() && (this.fileName = l.prototype.PD(this.fileName),
                    this.oA = l.prototype.PD(this.oA))
            }
        };
        d.prototype = {
            Iq: function(b) {
                var c = this.cb.xf(4);
                if (c !== b) throw Error("Corrupted zip or bug : unexpected signature (" + a(c) + ", expected " + a(b) + ")");
            },
            nK: function() {
                this.Xz = this.cb.Ha(2);
                this.Zz = this.cb.Ha(2);
                this.nz = this.cb.Ha(2);
                this.mz = this.cb.Ha(2);
                this.oz = this.cb.Ha(4);
                this.Lu = this.cb.Ha(4);
                this.zL = this.cb.Ha(2);
                this.cb.xf(this.zL)
            },
            oK: function() {
                this.xL = this.cb.Ha(8);
                this.cb.xf(2);
                this.cb.Ha(2);
                this.Xz = this.cb.Ha(4);
                this.Zz = this.cb.Ha(4);
                this.nz = this.cb.Ha(8);
                this.mz = this.cb.Ha(8);
                this.oz = this.cb.Ha(8);
                this.Lu = this.cb.Ha(8);
                this.yL = {};
                for (var a = this.xL - 44, b, c, d; 0 < a;) b = this.cb.Ha(2), c = this.cb.Ha(4), d = this.cb.xf(c), this.yL[b] = {
                    id: b,
                    length: c,
                    value: d
                }
            },
            pK: function() {
                this.cb.Ha(4);
                this.AK = this.cb.Ha(8);
                this.PH = this.cb.Ha(4);
                if (1 < this.PH) throw Error("Multi-volumes zip are not supported");
            },
            wK: function() {
                var a, b;
                for (a = 0; a < this.files.length; a++) b = this.files[a], this.cb.bn(b.Xv), this.Iq(l.ih.qy), b.xK(this.cb), b.DI()
            },
            rK: function() {
                var a;
                for (this.cb.bn(this.Lu); this.cb.xf(4) ===
                    l.ih.Tx;) a = new c({
                    UD: this.UD
                }, this.Vv), a.sK(this.cb), this.files.push(a)
            },
            uK: function() {
                var a = this.cb.stream.lastIndexOf(l.ih.vt);
                if (-1 === a) throw Error("Corrupted zip : can't find end of central directory");
                this.cb.bn(a);
                this.Iq(l.ih.vt);
                this.nK();
                if (65535 === this.Xz || 65535 === this.Zz || 65535 === this.nz || 65535 === this.mz || -1 === this.oz || -1 === this.Lu) {
                    this.UD = !0;
                    a = this.cb.stream.lastIndexOf(l.ih.Vy);
                    if (-1 === a) throw Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
                    this.cb.bn(a);
                    this.Iq(l.ih.Vy);
                    this.pK();
                    this.cb.bn(this.AK);
                    this.Iq(l.ih.LG);
                    this.oK()
                }
            },
            load: function(a) {
                this.cb = new b(a);
                this.uK();
                this.rK();
                this.wK()
            }
        };
        l.prototype.load = function(a, b) {
            var c, e, f;
            b = b || {};
            b.Gh && (a = pb.decode(a));
            c = (new d(a, b)).files;
            for (e = 0; e < c.length; e++) f = c[e], this.file(f.fileName, f.Bx, {
                Si: !0,
                sC: !0,
                Nf: f.Nf,
                dir: f.dir
            });
            return this
        }
    })();
    var We = document.getElementsByTagName("script"),
        Xe = We[We.length - 1].src;
    document.gR = Xe.substring(0, Xe.lastIndexOf("/") + 1);
    ka.Runtime = ve;
    ka.headerLoaded = we;
    ka.qL = "updateApplication";
    ka[window.qL] = Za;
    Ca.prototype = {
        Eb: function(a, b, c) {
            if (this.visible) {
                this.sg && (a.Ra.save(), a.Ra.translate(this.Bp, this.Dp), 0 != this.angle && a.Ra.rotate(.0174532925 * -this.angle), a.Ra.scale(Math.max(.001, this.rc), Math.max(.001, this.sc)), a.Ra.translate(-this.Ea, -this.ya));
                var d;
                for (d = 0; d < this.children.length; d++) this.children[d].Eb(a, b + this.x, c + this.y);
                this.sg && a.Ra.restore()
            }
        },
        se: function(a) {
            this.children.push(a)
        },
        Bq: function(a, b) {
            b >= this.children.length ? this.children.push(a) : (0 > b && (b = 0), this.children.splice(b,
                0, a))
        },
        BK: function() {
            this.children.length = 0
        },
        removeChild: function(a) {
            var b;
            for (b = 0; b < this.children.length; b++)
                if (this.children[b] == a) return this.children.splice(b, 1), b;
            return -1
        },
        ed: function(a) {
            var b;
            for (b = 0; b < this.children.length; b++)
                if (this.children[b] == a) return b;
            return -1
        },
        Xd: function(a, b) {
            var c, d = null;
            for (c = 0; c < this.children.length; c++)
                if (this.children[c] == a) {
                    d = this.children[c];
                    break
                } null != d && (this.children.splice(c, 1), b > c && b--, 0 > b && (b = 0), b >= this.children.length ? this.children.push(a) : this.children.splice(b,
                0, a))
        }
    };
    ja.kn = 0;
    ja.Yd = 1;
    ja.qE = 1;
    ja.rE = 2;
    ja.ln = 64;
    ja.mn = 16;
    ja.Hl = 6;
    J.XO = 0;
    J.YO = 1;
    J.Gl = 0;
    J.Tj = 1;
    J.Mv = [65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1];
    J.Ww = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535];
    J.kh = new G;
    J.Hj = new G;
    J.Vl = new G;
    J.Ti = new G;
    J.prototype = {
        Uu: function(a, b, c) {
            var d, e;
            this.width = b.width;
            this.height = b.height;
            this.Ea = b.Ea;
            this.ya = b.ya;
            var f = Math.floor((this.width + 15 & 4294967280) / 16);
            this.lineWidth = f;
            e = f * this.height +
                1;
            if ("undefined" != typeof ArrayBuffer) this.P = new Uint16Array(new ArrayBuffer(2 * e));
            else
                for (this.P = Array(e), d = 0; d < e; d++) this.P[d] = 0;
            d = document.createElement("canvas");
            d.width = b.width;
            d.height = b.height;
            d = d.getContext("2d");
            0 == b.xb ? d.drawImage(b.wb, 0, 0) : d.drawImage(a.ha.Lb[b.xb], b.Ad, b.Bd, b.width, b.height, 0, 0, b.width, b.height);
            a = d.getImageData(0, 0, this.width, this.height);
            if (0 == (c & J.Tj))
                for (c = 0; c < this.height; c++) {
                    e = c * b.width * 4 + 3;
                    var g = c * f,
                        h = 32768;
                    for (d = 0; d < this.width; d++) 0 != a.data[e] && (this.P[g] |= h),
                        e += 4, h >>>= 1, 0 == h && (h = 32768, g++)
                } else
                    for (d = 0; d < this.width; d++) {
                        for (c = 0; c < this.height && 0 == a.data[4 * (c * b.width + d) + 3]; c++);
                        if (c < this.height)
                            for (g = Math.min(this.height, c + ja.Hl), h = 32768 >> (d & 15); c < g; c++) 0 != a.data[4 * (c * b.width + d) + 3] && (e = Math.floor(c * f + (d & 4294967280) / 16), this.P[e] |= h)
                    }
        },
        Vu: function(a, b, c) {
            var d;
            this.width = b.width;
            this.height = b.height;
            this.Ea = b.Ea;
            this.ya = b.ya;
            this.lineWidth = a = Math.floor((this.width + 15 & 4294967280) / 16);
            b = a * this.height + 1;
            this.P = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 *
                b)) : Array(b);
            b = this.height;
            0 != (c & J.Tj) && b > ja.Hl && (b = ja.Hl);
            var e = a,
                f = 0;
            0 != (this.width & 15) && (f = 65535 << 16 - (this.width & 15) & 65535, e--);
            for (d = 0; d < b; d++) {
                var g = d * a;
                for (c = 0; c < e; c++) this.P[g++] = 65535;
                0 != f && (this.P[g] = f)
            }
        },
        FK: function(a, b, c) {
            var d, e, f;
            90 == c ? (c = 0, f = 1) : 180 == c ? (c = -1, f = 0) : 270 == c ? (c = 0, f = -1) : (f = c * Math.PI / 180, c = Math.cos(f), f = Math.sin(f));
            var g, h;
            null == b ? (e = h = 0, J.kh.x = J.kh.y = 0) : (g = -b.x * c, d = -b.x * f, e = -b.y * c, h = -b.y * f, J.kh.x = Math.floor(g + h), J.kh.y = Math.floor(e - d));
            d = null == b ? a.right : a.right - b.x;
            g = d * c;
            d *= f;
            J.Hj.x = Math.floor(g + h);
            J.Hj.y = Math.floor(e - d);
            e = null == b ? a.bottom : a.bottom - b.y;
            J.Ti.x = Math.floor(g + e * f);
            J.Ti.y = Math.floor(e * c - d);
            J.Vl.x = J.kh.x + J.Ti.x - J.Hj.x;
            J.Vl.y = J.kh.y + J.Ti.y - J.Hj.y;
            c = Math.min(J.kh.x, Math.min(J.Hj.x, Math.min(J.Ti.x, J.Vl.x)));
            f = Math.min(J.kh.y, Math.min(J.Hj.y, Math.min(J.Ti.y, J.Vl.y)));
            g = Math.max(J.kh.x, Math.max(J.Hj.x, Math.max(J.Ti.x, J.Vl.x)));
            d = Math.max(J.kh.y, Math.max(J.Hj.y, Math.max(J.Ti.y, J.Vl.y)));
            null != b && (b.x = -c, b.y = -f);
            a.right = g - c;
            a.bottom = d - f
        },
        CH: function(a, b, c, d) {
            var e,
                f, g = a.width;
            e = a.height;
            var h = new Z;
            h.right = Math.floor(a.width * c);
            h.bottom = Math.floor(a.height * d);
            var k = new G;
            k.x = Math.floor(a.Ea * c);
            k.y = Math.floor(a.ya * d);
            this.FK(h, k, b);
            var l = h.right,
                h = h.bottom;
            if (0 >= l || 0 >= h) return !1;
            var n = a.lineWidth,
                p = (l + 15 & 2147483632) / 16;
            this.P = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 * (p * h + 1))) : Array(p * h + 1);
            var r;
            for (r = p * h; 0 <= r; r--) this.P[r] = 0;
            this.lineWidth = p;
            this.width = l;
            this.height = h;
            this.Ea = k.x;
            this.ya = k.y;
            b *= .017453292;
            f = Math.cos(b);
            var m = Math.sin(b);
            b = 0;
            k = Math.floor(65536 * (g / 2 - (l / 2 * f - h / 2 * m) / c));
            r = Math.floor(65536 * (e / 2 - (l / 2 * m + h / 2 * f) / d));
            var t = Math.floor(65536 * f / c),
                v = Math.floor(65536 * m / d),
                z = l / 16,
                l = l % 16;
            d = Math.floor(65536 * f / d);
            c = Math.floor(65536 * m / c);
            var g = 65536 * g,
                m = 65536 * e,
                A, w;
            for (f = 0; f < h; f++) {
                var u = k,
                    B = r,
                    E = b,
                    C;
                for (e = 0; e < z; e++) {
                    var F = 0;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 32768));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A =
                        32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 16384));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 8192));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 4096));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 2048));
                    u += t;
                    B += v;
                    0 <= u &&
                        u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 1024));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 512));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 256));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w *
                        n + C / 16)], 0 != (w & A) && (F |= 128));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 64));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 32));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 16));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536),
                        w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 8));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 4));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 2));
                    u += t;
                    B += v;
                    0 <= u && u < g && 0 <= B && B < m && (C = Math.floor(u / 65536), w = Math.floor(B / 65536), A = 32768 >>> C % 16, w = a.P[Math.floor(w * n + C / 16)], 0 != (w & A) && (F |= 1));
                    u += t;
                    B += v;
                    this.P[E++] = F
                }
                if (0 != l) {
                    F = 32768;
                    for (e = C = 0; e < l; e++, F = F >> 1 & 32767) {
                        if (0 <= u && u < g && 0 <= B && B < m) {
                            w = Math.floor(u / 65536);
                            var H = Math.floor(B / 65536);
                            A = 32768 >>> w % 16;
                            w = a.P[Math.floor(H * n + w / 16)];
                            0 != (w & A) && (C |= F)
                        }
                        u += t;
                        B += v
                    }
                    this.P[E] = C
                }
                b += p;
                k -= c;
                r += d
            }
            return !0
        },
        Gj: function(a, b, c, d, e, f, g) {
            var h, k, l;
            a <= e ? (h = this, l = Math.floor(c), c = Math.floor(g), k = Math.floor(a), g = Math.floor(b), a = Math.floor(e), b = Math.floor(f)) : (h = d, d = this, l = Math.floor(g), c = Math.floor(c), k = Math.floor(e), g = Math.floor(f), a = Math.floor(a), b = Math.floor(b));
            f = h.height;
            var n = 0;
            0 != l && (f = l, g += h.height - l, n = h.height - l);
            e = d.height;
            var p = 0;
            0 != c && (e = c, b += d.height - c, p = d.height - c);
            if (k >= a + d.width || k + h.width <= a || g >= b + e || g + f < b) return !1;
            c = a - k;
            l = Math.floor(c / 16);
            c %= 16;
            k = Math.min(k + h.width - a, d.width);
            k = Math.floor((k + 15) / 16);
            g <= b ? (a = b - g + n, n = p, g = Math.min(g + f, b + e) - b) : (a = n, n = g - b + p, g = Math.min(g + f, b + e) - g);
            b = a * h.lineWidth;
            e = n * d.lineWidth;
            if (0 != c) switch (k) {
                case 1:
                    for (a = 0; a < g; a++) {
                        n = h.P[b + l] << c;
                        if (0 != (n & d.P[e]) || l + 1 < h.lineWidth && (n = h.P[b + l + 1] << c, n >>>= 16, 0 != (n & d.P[e]))) return !0;
                        b += h.lineWidth;
                        e += d.lineWidth
                    }
                    break;
                case 2:
                    for (a = 0; a < g; a++) {
                        n = h.P[b + l] << c;
                        if (0 != (n & d.P[e])) return !0;
                        n = h.P[b + l + 1] << c;
                        p = n >>> 16;
                        if (0 != (p & d.P[e]) || 0 != (n & d.P[e + 1]) || l + 2 < h.lineWidth && (n = h.P[b + l + 2] << c, n >>>= 16, 0 != (n & d.P[e + 1]))) return !0;
                        b += h.lineWidth;
                        e += d.lineWidth
                    }
                    break;
                default:
                    for (a = 0; a < g; a++) {
                        n = h.P[b + l] << c;
                        if (0 != (n & d.P[e])) return !0;
                        for (f = 0; f < k - 1; f++)
                            if (n = h.P[b + l + f + 1] << c, p = n >>> 16, 0 != (p & d.P[e + f]) || 0 != (n & d.P[e + f + 1])) return !0;
                        if (l + f + 1 < h.lineWidth && (n = h.P[b + l + f + 1] << c, n >>>= 16, 0 != (n & d.P[e + f]))) return !0;
                        b += h.lineWidth;
                        e += d.lineWidth
                    }
            } else
                for (a = 0; a < g; a++) {
                    for (f = 0; f < k; f++)
                        if (n = h.P[b + l + f], 0 != (d.P[e + f] & n)) return !0;
                    b += h.lineWidth;
                    e += d.lineWidth
                }
            return !1
        },
        wx: function(a, b, c, d, e, f, g, h) {
            a = Math.floor(a);
            b = Math.floor(b);
            d = Math.floor(d);
            e = Math.floor(e);
            var k = 0,
                l = this.height;
            0 < c && (k = this.height - c, b += k, l = c);
            c = g;
            0 < h && (e += g - h, c = h);
            if (a >= d + f || a + this.width <= d || b >= e + c || b + l < e) return !1;
            a <= d ? (g = d - a, a = Math.min(this.width - g, f)) : (g = 0, a = Math.min(d + f - a, this.width));
            b <= e ? (k = e - b + k, b = Math.min(b + l, e + c) - e) : b = Math.min(b + l, e + c) - b;
            e = Math.floor(g /
                8);
            l = Math.floor((g + a + 15) / 16) - Math.floor(g / 16);
            for (f = 0; f < b; f++) switch (d = (f + k) * this.lineWidth, l) {
                case 1:
                    c = J.Mv[g & 15] & J.Ww[(g + a - 1 & 15) + 1];
                    if (0 != (this.P[d + e] & c)) return !0;
                    break;
                case 2:
                    c = J.Mv[g & 15];
                    if (0 != (this.P[d + e] & c)) return !0;
                    c = J.Ww[(g + a - 1 & 15) + 1];
                    if (0 != (this.P[d + e + 1] & c)) return !0;
                    break;
                default:
                    c = J.Mv[g & 15];
                    if (0 != (this.P[d + e] & c)) return !0;
                    for (h = 1; h < l - 1; h++)
                        if (0 != this.P[d + e + h]) return !0;
                    c = J.Ww[(g + a - 1 & 15) + 1];
                    if (0 != (this.P[d + e + h] & c)) return !0
            }
            return !1
        },
        mL: function(a, b, c, d, e) {
            a = Math.floor(a);
            b = Math.floor(b);
            var f =
                a,
                g = b;
            if (0 == c) {
                if (1 != d || 1 != e) f = Math.floor(f / d), g = Math.floor(g / e)
            } else if (f = 3.141592653589 * c / 180, c = Math.cos(f), g = Math.sin(f), f = a * c - b * g, g = b * c + a * g, 1 != d || 1 != e) f /= d, g /= e;
            f += this.Ea;
            g += this.ya;
            a = Math.floor(f);
            b = Math.floor(g);
            return 0 > a || a >= this.width || 0 > b || b >= this.height ? !1 : 0 != (this.P[b * this.lineWidth + Math.floor(a / 16)] & 32768 >>> (a & 15)) ? !0 : !1
        }
    };
    E.pg = 1;
    E.vG = 2;
    E.ku = 4;
    E.uq = 16;
    E.qg = 32;
    E.bk = 64;
    E.ak = 128;
    E.aP = 0;
    E.$O = 1;
    E.eE = 0;
    E.We = 1;
    E.fE = 2;
    E.Nx = 3;
    E.dE = 4;
    E.hE = 5;
    E.VL = 6;
    E.WL = 7;
    E.TL = 8;
    E.Kx = 9;
    E.gE = 10;
    E.iE = 11;
    E.UL = 12;
    E.XL = 13;
    E.YL = 13;
    E.Lx = 4095;
    E.tt = 4096;
    E.Mx = 8192;
    E.prototype = {
        KI: function(a, b, c) {
            this.a = a;
            this.tl = c.vz;
            this.Ss = c.wz;
            this.S = 0;
            this.S |= E.bk;
            0 == (this.a.gf & Q.$d) && (this.S &= ~E.bk);
            0 != (this.a.Bb.Rk & u.Bn) && (this.S |= E.ak);
            0 != (c.Lq & k.Bl) ? (this.S |= E.pg, this.a.Fa == v.Eh && (this.a.X |= L.vh, this.S &= ~E.bk)) : this.S |= E.qg;
            this.$b = this.a.Bb.oC;
            this.Rb = this.a.Bb.nC;
            this.a.b.dc == S.aG && (this.S |= E.vG)
        },
        ur: function(a) {
            this.Hz(a);
            a && this.a.N.Bm && (this.a.X |= L.Bi)
        },
        handle: function() {
            var a = this.a.c,
                b, c, d, e;
            0 != (this.a.X & L.Bi) ? (this.gh ||
                this.am(!1), this.ZJ()) : 0 != (this.a.X & L.Ci) ? this.$J() : 0 == (this.S & E.ku) ? (0 != this.sl && (this.an -= a.hp, 0 > this.an && (this.an = this.sl, 0 == (this.S & E.qg) ? (this.S |= E.qg, this.ow()) : (this.S &= ~E.qg, this.ym()))), null != this.a.A && this.a.A.move(), 0 == this.a.b.mi && (0 != (this.a.qa & u.$j) ? 0 == (this.a.qa & u.My) && 0 != (a.h.Ia & n.YD) && (b = this.a.w - this.a.oa, c = this.a.u - this.a.pa, d = b + this.a.L, e = c + this.a.K, (d < a.Sm || b > a.Qm || e < a.Wm || c > a.Um) && a.Of(this.a.Kb)) : (b = this.a.w - this.a.oa, c = this.a.u - this.a.pa, d = b + this.a.L, e = c + this.a.K, d >= a.Rm &&
                b <= a.Pm && e >= a.Vm && c <= a.Tm || (d >= a.Sm && b <= a.Qm && e >= a.Wm && c <= a.Um ? (this.S |= E.ku, this.Ss = this.a.Jh()) : 0 == (this.a.qa & u.My) && a.Of(this.a.Kb))))) : (b = this.a.w - this.a.oa, c = this.a.u - this.a.pa, d = b + this.a.L, e = c + this.a.K, d >= a.Rm && b <= a.Pm && e >= a.Vm && c <= a.Tm && (this.S &= ~E.ku, this.ur(!1), this.a.Xd(this.Ss)))
        },
        Hz: function() {
            0 != (this.a.qa & u.Gi) ? this.a.tu(this.a.w - this.a.c.fa, this.a.u - this.a.c.ka, this.a.b.La, this.tl, 0 == (this.S & E.pg)) : (this.a.X |= L.xF, this.a.Ul(this.a.w - this.a.c.fa, this.a.u - this.a.c.ka, this.tl, 0 != (this.a.qa &
                u.hu), 0 == (this.S & E.pg), -1));
            this.a.gD(this.$b, this.Rb)
        },
        am: function(a) {
            this.a.X &= ~(L.Bi | L.Ci);
            if (0 == a) {
                if (!this.a.N.Bm) return !1;
                this.a.X |= L.Bi
            } else {
                if (!this.a.N.Io) return !1;
                this.a.X |= L.Ci
            }
            this.gh = this.a.c.h.uv().gL(this.a, a);
            return this.gh ? !0 : (this.a.X &= ~(L.Bi | L.Ci), !1)
        },
        ZJ: function() {
            if (0 != (this.a.X & L.Bi)) {
                if (this.gh.vr()) return this.a.X &= ~L.Bi, this.gh = this.a.zl = null, !1;
                this.gh.Sb(z.nu);
                return !0
            }
            return !1
        },
        $J: function() {
            if (0 != (this.a.X & L.Ci)) {
                if (this.gh.vr()) return this.zl = this.gh = null, this.a.c.Of(this.a.Kb),
                    !1;
                this.gh.Sb(z.zq);
                return !0
            }
            return !1
        },
        LI: function() {
            return this.am(!0) ? (this.a.X |= L.vh, !0) : !1
        },
        Gb: function() {
            this.Ss = this.a.Jh()
        },
        ym: function() {
            0 == (this.S & E.pg) && (this.S |= E.pg, this.a.b.M = !0, this.a.Ak())
        },
        ow: function() {
            0 != (this.S & E.pg) && (this.a.c.B.Za[this.a.fd].Ia & (V.rn | V.sn)) == V.sn && (this.S &= ~E.pg, this.a.X &= ~L.vh, this.a.b.M = !0, this.a.wl())
        },
        Ts: function(a) {
            this.S = a ? this.S | E.bk : this.S & ~E.bk
        },
        FB: function(a, b) {
            this.$b = a;
            this.Rb = b
        }
    };
    ze.prototype = {
        load: function(a) {
            this.wm = a.s();
            this.eb = Array(this.wm);
            var b;
            for (b = 0; b < this.wm; b++) this.eb[b] = a.Ob()
        }
    };
    Ae.prototype = {
        load: function(a, b) {
            this.xm = a.s();
            this.values = Array(this.xm);
            var c;
            for (c = 0; c < this.xm; c++) this.values[c] = a.v();
            b && (this.Oa = a.v())
        }
    };
    Na.KG = 26;
    Na.xG = 10;
    Na.prototype = {
        Z: function(a, b) {
            this.np = 0;
            var c = Na.KG;
            null != b.ai && b.ai.xm > c && (c = b.ai.xm);
            this.Ua = Array(c);
            c = Na.xG;
            null != b.lj && b.lj.wm > c && (c = b.lj.wm);
            this.Wd = Array(c);
            for (c = 0; c < this.Ua.length; c++) this.Ua[c] = 0;
            for (c = 0; c < this.Wd.length; c++) this.Wd[c] = "";
            if (null != b.ai)
                for (this.np = b.ai.Oa, c = 0; c < b.ai.xm; c++) this.Ua[c] =
                    b.ai.values[c];
            if (null != b.lj)
                for (c = 0; c < b.lj.wm; c++) this.Wd[c] = b.lj.eb[c]
        },
        Gb: function() {
            var a;
            for (a = 0; a < this.Ua.length; a++) this.Ua[a] = 0;
            for (a = 0; a < this.Wd.length; a++) this.Wd[a] = null
        },
        im: function(a) {
            return a < this.Ua.length ? this.Ua[a] : 0
        },
        KA: function(a) {
            return a < this.Wd.length ? this.Wd[a] : ""
        },
        oD: function(a, b) {
            a >= this.O.Ua.length && this.$i(a + 10);
            this.Ua[a] = b
        },
        $i: function(a) {
            if (a > this.Ua.length) {
                var b;
                for (b = this.Ua.length; b < a; b++) this.Ua[b] = 0
            }
        },
        AI: function(a) {
            if (a > this.Wd.length) {
                var b;
                for (b = this.Wd.length; b <
                    a; b++) this.Wd[b] = ""
            }
        }
    };
    Sa.lg = 32;
    Sa.prototype = {
        AH: function() {
            this.vk = Array(2);
            this.Zr = Array(2);
            var a;
            for (a = 0; 2 > a; a++) this.vk[a] = null, this.Zr[a] = 0;
            a = new Be;
            a.handle = 0;
            this.TG(a)
        },
        TG: function(a) {
            var b = a.Er();
            null != b && (this.vk[a.handle] = a, this.Zr[a.handle] = b.ir())
        },
        Er: function(a) {
            a -= Sa.lg;
            var b = null;
            a < this.vk.length && null != this.vk[a] && (b = this.vk[a].Er());
            return b
        },
        ir: function(a) {
            a -= Sa.lg;
            return a < this.vk.length ? this.Zr[a] : 0
        }
    };
    Be.prototype = {
        Er: function() {
            switch (this.handle) {
                case 0:
                    return new Oa
            }
            return null
        }
    };
    Ga.QO = 1;
    Ga.Qy = 2;
    Ga.prototype = {
        Z: function(a) {
            this.W = a;
            this.ta = a.c
        },
        ir: function() {
            return 0
        },
        Gz: function() {
            return !1
        },
        zv: function() {
            return Ga.Qy
        },
        Yu: function() {},
        Ez: function() {},
        XJ: function() {},
        vH: function() {},
        Oq: function() {
            return !1
        },
        action: function() {},
        Yq: function() {
            return null
        },
        IA: function() {
            return null
        },
        jD: function() {},
        Oi: function() {},
        fm: function() {}
    };
    Ce.prototype = {
        evaluate: function(a) {
            var b = a.i.ff(this.bb);
            if (null == b) a.na[a.Y] = 0;
            else {
                var c = (this.code >> 16) - C.Ee;
                a.Wu = this;
                a.na[a.Y] = b.Yq(c)
            }
        }
    };
    De.prototype = {
        ga: function(a) {
            var b = a.i.Pa(this);
            if (null != b) {
                var c = (this.ea >>> 16) - C.Ee;
                a.Wu = this;
                b.action(c, this)
            }
        },
        rv: function(a, b) {
            return a.i.zI(this.o[b].bb, this)
        },
        jr: function(a, b) {
            return a.Ta(this.o[b])
        },
        xd: function(a, b) {
            return a.jm(this.o[b])
        }
    };
    Ee.prototype = {
        Na: function(a, b) {
            if (null == b) return this.da(a);
            b.X |= L.ly;
            var c = -(this.ea >> 16) - C.Ee - 1;
            a.Wu = this;
            return b.Oq(c, this) ? (a.i.Xi(b), !0) : !1
        },
        da: function(a) {
            var b = a.i.zg(this.Sa),
                c = a.i.Wc,
                d = -(this.ea >> 16) - C.Ee - 1;
            for (a.Wu = this; null != b;) b.X &= ~L.ly, b.Oq(d, this) ? 0 !=
                (this.ie & U.Dl) && (c--, a.i.wd()) : 0 == (this.ie & U.Dl) && (c--, a.i.wd()), b = a.i.Pf();
            return 0 != c ? !0 : !1
        },
        rv: function(a, b) {
            return this.o[b]
        },
        jr: function(a, b) {
            return a.Ta(this.o[b])
        },
        xd: function(a, b) {
            return a.jm(this.o[b])
        }
    };
    (function() {
        this.element = null;
        this.zz = !1
    }).prototype = p.extend(new Ga, {
        fm: function() {
            this.setPosition(this.W.w, this.W.u)
        },
        Oi: function() {
            this.setPosition(this.W.w, this.W.u);
            this.sp(this.W.L, this.W.K)
        },
        aR: function(a, b) {
            this.element = a;
            a.style.position = "absolute";
            this.sp(this.W.L, this.W.K);
            this.setPosition(this.W.w,
                this.W.u);
            this.kv && this.vl(this.kv);
            this.Bu = this.W.za = b;
            this.ta.h.Jg ? (a.style.visibility = "hidden", this.Bu = !1) : a.style.visibility = b ? "visible" : "hidden";
            this.ta.h.Ru.appendChild(a)
        },
        MA: function() {
            return this.ta.h.canvas ? this.ta.h.canvas.offsetLeft : 0
        },
        NA: function() {
            return this.ta.h.canvas ? this.ta.h.canvas.offsetTop : 0
        },
        pD: function(a) {
            this.Nz = a;
            this.W.pD(a);
            this.element && (this.element.style.left = this.MA() + this.ta.h.Kj + (this.W.w - this.W.c.fa) * this.ta.h.rc + "px")
        },
        sD: function(a) {
            this.Oz = a;
            this.W.sD(a);
            this.element &&
                (this.element.style.top = this.NA() + this.ta.h.Mj + (this.W.u - this.W.c.ka) * this.ta.h.sc + "px")
        },
        setPosition: function(a, b) {
            this.Nz = a;
            this.Oz = b;
            this.W.setPosition(a, b);
            this.element && (this.element.style.left = this.MA() + this.ta.h.Kj + (this.W.w - this.W.c.fa) * this.ta.h.rc + "px", this.element.style.top = this.NA() + this.ta.h.Mj + (this.W.u - this.W.c.ka) * this.ta.h.sc + "px")
        },
        rx: function(a) {
            this.Mz = a;
            this.W.rx(a);
            this.element && (this.element.style.width = this.W.L * this.ta.h.rc + "px")
        },
        qx: function(a) {
            this.Lz = a;
            this.W.qx(a);
            this.element &&
                !this.zz && (this.element.style.height = this.W.K * this.ta.h.sc + "px")
        },
        sp: function(a, b) {
            this.Mz = a;
            this.Lz = b;
            this.W.sp(a, b);
            this.element && (this.element.style.width = this.W.L * this.ta.h.rc + "px", this.zz || (this.element.style.height = this.W.K * this.ta.h.sc + "px"))
        },
        vl: function(a) {
            this.kv = a;
            this.element && (this.element.style.font = a.Bg())
        },
        Yu: function() {
            this.element && this.ta.h.Ru.removeChild(this.element)
        },
        IA: function() {
            return this.kv
        },
        jD: function(a) {
            this.vl(a)
        },
        zv: function() {
            this.ta.h.Jg || this.W.za == this.Bu || (this.Bu =
                this.W.za, this.element && (this.element.style.visibility = this.W.za ? "visible" : "hidden"));
            this.W.w == this.Nz && this.W.u == this.Oz || this.setPosition(this.W.w, this.W.u);
            this.W.L == this.Mz && this.W.K == this.Lz || this.sp(this.W.L, this.W.K);
            return 0
        }
    });
    S.aG = 0;
    S.eu = 1;
    S.$F = 2;
    S.ZN = 3;
    S.YN = 4;
    S.Ay = 5;
    S.fu = 9;
    S.ZF = 11;
    S.XN = 12;
    S.zy = 13;
    S.Dh = 14;
    S.prototype = {
        setData: function(a, b, c, d, e) {
            this.yo = a;
            this.Mk = b;
            this.bC = c;
            this.aC = d;
            this.Vr = e
        }
    };
    Fe.prototype = {
        load: function(a) {
            var b = a.R;
            this.Ok = a.v();
            this.hd = Array(this.Ok);
            var c;
            for (c =
                0; c < this.Ok; c++) {
                a.seek(b + 4 + 16 * c);
                var d = a.v(),
                    e = a.v(),
                    f = a.v(),
                    g = a.v();
                a.seek(b + f);
                var f = a.s(),
                    h = a.s(),
                    k = a.yb(),
                    l = a.yb();
                a.wa(2);
                var n = a.v();
                switch (h) {
                    case 0:
                        this.hd[c] = new Ne;
                        break;
                    case 1:
                        this.hd[c] = new Ie;
                        break;
                    case 2:
                        this.hd[c] = new Me;
                        break;
                    case 3:
                        this.hd[c] = new He;
                        break;
                    case 4:
                        this.hd[c] = new Ge;
                        break;
                    case 5:
                        this.hd[c] = new Je;
                        break;
                    case 9:
                        this.hd[c] = new Le;
                        break;
                    case 14:
                        this.hd[c] = new Oe
                }
                this.hd[c].setData(h, f, k, n, l);
                this.hd[c].load(a, g - 12);
                14 == h && (a.seek(b + d), d = a.Ob(), d = d.substring(0, d.length -
                    4), d = d.toLowerCase(), this.hd[c].VK(d, e))
            }
        }
    };
    Ge.prototype = p.extend(new S, {
        load: function(a) {
            this.uo = a.s();
            this.rB = a.s();
            this.qB = a.s();
            this.tB = a.s();
            this.sB = a.s()
        }
    });
    He.prototype = p.extend(new S, {
        load: function(a) {
            this.AB = a.s();
            this.xB = a.s();
            this.yB = a.s();
            a.s();
            this.zB = a.v()
        }
    });
    Ie.prototype = p.extend(new S, {
        load: function(a) {
            this.BB = a.V();
            this.DB = a.V();
            this.CB = a.V();
            this.EB = a.V();
            a.s()
        }
    });
    Je.prototype = p.extend(new S, {
        load: function(a) {
            this.tm = a.s();
            this.WB = a.s();
            this.VB = a.s();
            this.lw = a.yb();
            this.YB = a.yb();
            this.$B = a.yb();
            a.wa(1);
            this.gb = Array(this.tm);
            var b, c, d;
            for (b = 0; b < this.tm; b++) d = a.R, this.gb[b] = new Ke, a.ua(), c = a.ua(), this.gb[b].load(a), a.seek(d + c)
        }
    });
    Ke.prototype = {
        load: function(a) {
            this.wB = a.yb();
            this.dw = a.yb();
            this.ew = a.V();
            this.fw = a.V();
            this.cw = a.V();
            this.hw = a.V();
            this.vB = a.s();
            this.gw = a.s();
            a = a.Ob();
            0 < a.length && (this.xe = a)
        }
    };
    Le.prototype = p.extend(new S, {
        load: function(a) {
            this.PB = a.s();
            this.KB = a.s();
            this.LB = a.s();
            this.OB = a.s();
            this.MB = a.s();
            this.NB = a.s()
        }
    });
    Me.prototype = p.extend(new S, {
        load: function(a) {
            this.TB =
                a.s();
            this.jw = a.s();
            this.kw = a.s();
            this.SB = a.s();
            a.s();
            this.QB = a.s();
            this.RB = a.s()
        }
    });
    Ne.prototype = p.extend(new S, {
        load: function() {}
    });
    Oe.prototype = p.extend(new S, {
        load: function(a) {
            a.wa(14);
            this.data = a.R
        },
        VK: function(a) {
            this.Og = a;
            if (p.yc(this.Og, "box2d8directions") || p.yc(this.Og, "box2dspring") || p.yc(this.Og, "box2dspaceship") || p.yc(this.Og, "box2dstatic") || p.yc(this.Og, "box2dracecar") || p.yc(this.Og, "box2daxial") || p.yc(this.Og, "box2dplatform") || p.yc(this.Og, "box2dbouncingball") || p.yc(this.Og, "box2dbackground")) this.wr = !0
        }
    });
    M.Rj = [256, 251, 236, 212, 181, 142, 97, 49, 0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251];
    M.ck = [0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251, 256, 251, 236, 212, 181, 142, 97, 49];
    M.RG = [2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 320, 336, 352, 368, 384, 400, 416, 432, 448, 480, 512, 544, 560, 592, 624, 640, 672, 688, 720, 736, 768, 784, 816, 848, 864, 896, 928, 944, 976,
        992, 1024, 1120, 1216, 1312, 1440, 1536, 1632, 1728, 1824, 1952, 2048, 2240, 2432, 2688, 2880, 3072, 3264, 3456, 3712, 3904, 4096, 6544, 4914, 5216, 5732, 6144, 6553, 6962, 7366, 7780, 8192, 9836, 11672, 13316, 14960, 16604, 18248, 19892, 21504, 25600, 25600
    ];
    M.KF = [-1, 8, 24, -1, 16, 12, 20, 16, 0, 4, 28, 0, -1, 8, 24, -1];
    M.Cl = [2599, 0, 844, 31, 479, 30, 312, 29, 210, 28, 137, 27, 78, 26, 25, 25, 0, 24];
    M.lf = [0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, -4, 0, -8, 0, 0, 0, -2, -2, 2, 2, -4, -4, 4, 4, -8, -8, 8, 8, -4, 4, -8, 8, 0, 0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, 0, 0, 4, 0, 8, 0, 0, -2, 2, 2, -2, -4, 4, 4, -4, -8, 8, 8, -8, 4, 4, 8,
        8, 0, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 4, 0, 8, 0, 0, 0, 2, 2, -2, -2, 4, 4, -4, -4, 8, 8, -8, -8, 4, -4, 8, -8, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 0, 0, -4, 0, -8, 0, 0, 2, -2, -2, 2, 4, -4, -4, 4, 8, -8, -8, 8, -4, -4, -8, -8, 0, 0
    ];
    M.yn = 1;
    M.nI = function(a, b) {
        return a * M.Rj[b] / 256
    };
    M.oI = function(a, b) {
        return a * M.ck[b] / 256
    };
    M.prototype = {
        hj: function(a, b) {
            this.a.c.ld++;
            this.oe = this.a.c.ld;
            this.a.A.U = !1;
            if (0 == a) return this.a.c.Zf(this.a), !1;
            var c, d, e;
            for (e = 0 != (this.a.c.B.Yb & I.Vc) ? Math.floor(a * this.a.c.Fc * 32) : a << 5; 2048 < e;) {
                c = 65536 * this.a.w + (this.a.Eg & 65535);
                d =
                    65536 * this.a.u + (this.a.Fg & 65535);
                c += 2048 * M.Rj[b];
                d += 2048 * M.ck[b];
                this.a.Eg = c & 65535;
                this.a.w = Math.floor(c / 65536);
                this.a.Fg = d & 65535;
                this.a.u = Math.floor(d / 65536);
                if (this.a.c.Zf(this.a)) return !0;
                if (this.a.A.U) break;
                e -= 2048
            }
            if (!this.a.A.U && (c = 65536 * this.a.w + (this.a.Eg & 65535), d = 65536 * this.a.u + (this.a.Fg & 65535), c += M.Rj[b] * e, d += M.ck[b] * e, this.a.Eg = c & 65535, this.a.w = Math.floor(c / 65536), this.a.Fg = d & 65535, this.a.u = Math.floor(d / 65536), this.a.c.Zf(this.a))) return !0;
            this.a.b.M = !0;
            this.a.A.U || (this.a.c.ql = 0);
            return this.a.A.U
        },
        xo: function(a) {
            0 == a.bC && this.stop()
        },
        wk: function(a) {
            return 100 >= a ? M.RG[a] : a << 8
        },
        zo: function(a) {
            if (a) this.uB(!1);
            else switch (this.a.c.i.Ps & 4294901760) {
                case -786432:
                    a = this.a.w - this.a.oa;
                    var b = this.a.u - this.a.pa,
                        c = this.a.c.Yk(a, b, a + this.a.L, b + this.a.K);
                    a = this.a.w;
                    b = this.a.u;
                    0 != (c & k.sh) && (a = this.a.oa);
                    0 != (c & k.th) && (a = this.a.c.Ud - this.a.L + this.a.oa);
                    0 != (c & k.uh) && (b = this.a.pa);
                    0 != (c & k.rh) && (b = this.a.c.Vd - this.a.K + this.a.pa);
                    this.a.w = a;
                    this.a.u = b;
                    break;
                case -851968:
                case -917504:
                    a = 18 * (this.a.c.Ab(this.a) >>
                        2);
                    do {
                        if (this.nh(this.a.w + M.lf[a], this.a.u + M.lf[a + 1], !1)) {
                            this.a.w += M.lf[a];
                            this.a.u += M.lf[a + 1];
                            return
                        }
                        a += 2
                    } while (0 != M.lf[a] || 0 != M.lf[a + 1]);
                    this.a.w = this.a.b.vj;
                    this.a.u = this.a.b.wj;
                    this.a.b.La = this.a.b.ys;
                    this.a.b.Ka = this.a.b.xs
            }
        },
        uB: function(a) {
            switch (this.a.c.i.Ps & 4294901760) {
                case -786432:
                    a = this.a.w - this.a.oa;
                    var b = this.a.u - this.a.pa,
                        c = this.a.c.Yk(a, b, a + this.a.L, b + this.a.K);
                    a = this.a.w;
                    b = this.a.u;
                    0 != (c & k.sh) && (a = this.a.oa);
                    0 != (c & k.th) && (a = this.a.c.Ud - this.a.L + this.a.oa);
                    0 != (c & k.uh) && (b = this.a.pa);
                    0 != (c & k.rh) && (b = this.a.c.Vd - this.a.K + this.a.pa);
                    this.a.w = a;
                    this.a.u = b;
                    break;
                case -851968:
                case -917504:
                    if (b = new G, this.EJ(this.a.w, this.a.u, this.a.b.vj, this.a.b.wj, a, b)) this.a.w = b.x, this.a.u = b.y;
                    else {
                        b = 18 * (this.a.c.Ab(this.a) >> 2);
                        do {
                            if (this.nh(this.a.w + M.lf[b], this.a.u + M.lf[b + 1], a)) {
                                this.a.w += M.lf[b];
                                this.a.u += M.lf[b + 1];
                                return
                            }
                            b += 2
                        } while (0 != M.lf[b] || 0 != M.lf[b + 1]);
                        0 == a && (this.a.w = this.a.b.vj, this.a.u = this.a.b.wj, this.a.b.La = this.a.b.ys, this.a.b.Ka = this.a.b.xs)
                    }
            }
        },
        gn: function(a, b, c, d, e) {
            var f;
            f = -1;
            e &&
                (f = this.a.ac);
            e = this.a.Bb;
            if (0 != (e.Rd & 15)) {
                var g = a - this.a.oa,
                    h = b - this.a.pa;
                if (0 != (this.a.c.Yk(g, h, g + this.a.L, h + this.a.K) & e.Rd)) return !1
            }
            if (0 != (e.Rd & 16) && this.a.c.Ui(this.a, this.a.b.La, this.a.b.Ka, this.a.b.qb, this.a.b.rb, a, b, c, d)) return !1;
            if (-1 == e.Cm) return !0;
            a = this.a.c.zm(this.a, this.a.b.La, this.a.b.Ka, this.a.b.qb, this.a.b.rb, a, b, e.oj);
            if (null == a) return !0;
            b = this.a.c.i.Ek;
            for (c = 0; c < a.size(); c++)
                if (d = a.get(c).ac, d != f)
                    for (g = e.Cm; 0 <= b[g]; g++)
                        if (b[g] == d) return !1;
            return !0
        },
        nh: function(a, b, c) {
            var d;
            d = -1;
            c && (d = this.a.ac);
            c = this.a.Bb;
            if (0 != (c.Rd & 15)) {
                var e = a - this.a.oa,
                    f = b - this.a.pa;
                if (0 != (this.a.c.Yk(e, f, e + this.a.L, f + this.a.K) & c.Rd)) return !1
            }
            if (0 != (c.Rd & 16) && this.a.c.Ui(this.a, this.a.b.La, this.a.b.Ka, this.a.b.qb, this.a.b.rb, a, b, 0, I.Yd)) return !1;
            if (-1 == c.Cm) return !0;
            a = this.a.c.zm(this.a, this.a.b.La, this.a.b.Ka, this.a.b.qb, this.a.b.rb, a, b, c.oj);
            if (null == a) return !0;
            b = this.a.c.i.Ek;
            for (e = 0; e < a.size(); e++)
                if (f = a.get(e).ac, f != d) {
                    var g;
                    for (g = c.Cm; 0 <= b[g]; g++)
                        if (b[g] == f) return !1
                } return !0
        },
        rm: function(a, b,
            c, d, e, f, g) {
            var h = p.Md((a + c) / 2),
                k = p.Md((b + d) / 2),
                l, n;
            do
                if (this.gn(h + this.a.c.fa, k + this.a.c.ka, e, f, !1)) {
                    if (c = h, d = k, l = h, n = k, h = p.Md((c + a) / 2), k = p.Md((d + b) / 2), h == l && k == n) return c == a && d == b || !this.gn(a + this.a.c.fa, b + this.a.c.ka, e, f, !1) || (h = a, k = b), g.x = h, g.y = k, !0
                } else if (a = h, b = k, l = h, n = k, h = p.Md((c + a) / 2), k = p.Md((d + b) / 2), h == l && k == n) {
                if ((c != a || d != b) && this.gn(c + this.a.c.fa, d + this.a.c.ka, e, f, !1)) return g.x = c, g.y = d, !0;
                g.x = h;
                g.y = k;
                return !1
            } while (1)
        },
        EJ: function(a, b, c, d, e, f) {
            var g = p.Md((a + c) / 2),
                h = p.Md((b + d) / 2),
                k, l;
            do
                if (this.nh(g, h, e)) {
                    if (c = g, d = h, k = g, l = h, g = p.Md((c + a) / 2), h = p.Md((d + b) / 2), g == k && h == l) return c == a && d == b || !this.nh(a, b, e) || (g = a, h = b), f.x = g, f.y = h, !0
                } else if (a = g, b = h, k = g, l = h, g = p.Md((c + a) / 2), h = p.Md((d + b) / 2), g == k && h == l) {
                if ((c != a || d != b) && this.nh(c, d, e)) return f.x = c, f.y = d, !0;
                f.x = g;
                f.y = h;
                return !1
            } while (1)
        },
        Xs: function(a) {
            this.a.b.dc == S.$F && (250 < a && (a = 250), 0 > a && (a = 0), this.Xs(a));
            this.a.b.dc == S.Dh && this.Cd.Xs(a)
        },
        Vs: function(a) {
            this.a.b.dc == S.fu && (250 < a && (a = 250), 0 > a && (a = 0), this.Vs(a));
            this.a.b.dc == S.Dh && this.Cd.Vs(a)
        },
        tv: function() {
            return this.a.b.dc == S.Dh ? this.Cd.tv() : this.a.b.aa
        },
        Ab: function() {
            return this.a.b.dc == S.Dh && this.Cd.Ab ? this.Cd.Ab() : this.a.b.Qa
        },
        Gb: function() {},
        start: function() {}
    };
    ta.yK = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 31, 0, 1, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 24, 25, 26, 27, 27, 28, 28, 28, 28, 29, 29, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 16, 17, 18, 19, 19, 20, 20, 20, 20, 21, 21, 22, 23, 24, 25, 28, 27, 26, 25, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17,
        16, 20, 21, 22, 22, 23, 24, 24, 24, 24, 25, 26, 27, 28, 29, 30, 8, 7, 6, 5, 4, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16, 17, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 16, 15, 14, 13, 12, 11, 10, 9, 8, 12, 13, 14, 15, 15, 16, 16, 16, 16, 17, 17, 18, 19, 20, 21, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 0, 1, 2, 0, 0, 1, 1, 2, 3, 4, 5, 8,
        7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 28, 29, 30, 31, 31, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 26, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 25, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 11, 12, 13, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ];
    ta.bG = [4294967292, 4294967294, 4294967295];
    ta.tG = [-4, 4, -2, 2, -1, 1];
    ta.uG = [-4, 4, -4, 4, -4, 4];
    ta.prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            this.a.Eg = 0;
            this.a.Fg = 0;
            this.a.b.aa = b.uo;
            this.a.b.lb = b.uo;
            this.a.b.li = b.uo;
            this.Jl = b.uo << 8;
            var c = b.sB;
            0 != c && (c = this.wk(c), this.a.b.li = 0);
            this.Be = c;
            this.sy = b.rB;
            this.Yp = b.qB;
            this.Zp = ta.bG[this.Yp];
            this.Ei = !1;
            this.Rt = -1;
            this.Il = this.$p = (100 - b.tB) / 8;
            this.xo(b);
            this.a.b.M = !0
        },
        move: function() {
            this.a.A.Bj = !1;
            this.a.c.ql =
                1;
            this.a.b.ze = r.Kc;
            null != this.a.ca && this.a.ca.Ze();
            if (0 != this.Be) {
                var a = this.Jl;
                if (0 < a) {
                    var b = this.Be;
                    0 != (this.a.c.B.Yb & I.Vc) && (b *= this.a.c.Fc);
                    a -= b;
                    0 > a && (a = 0);
                    this.Jl = a;
                    this.a.b.aa = a >> 8
                }
            }
            this.hj(this.a.b.aa, this.a.c.Ab(this.a))
        },
        stop: function() {
            0 == this.Qb && (this.Qb = this.a.b.aa | 32768, this.Jl = this.a.b.aa = 0, this.a.A.U = !0)
        },
        start: function() {
            var a = this.Qb;
            0 != a && (a &= 32767, this.a.b.aa = a, this.Jl = a << 8, this.Qb = 0, this.a.A.U = !0)
        },
        tg: function() {
            if (0 == this.Qb && this.a.c.qc != this.Rt) {
                this.Rt = this.a.c.qc;
                this.oe ==
                    this.a.c.ld && this.uB(this.Ei);
                var a = this.a.w,
                    b = this.a.u,
                    c = 0,
                    a = a - 8,
                    b = b - 8;
                0 == this.nh(a, b, this.Ei) && (c |= 1);
                a += 16;
                0 == this.nh(a, b, this.Ei) && (c |= 2);
                b += 16;
                0 == this.nh(a, b, this.Ei) && (c |= 4);
                0 == this.nh(a - 16, b, this.Ei) && (c |= 8);
                a = ta.yK[32 * c + this.a.c.Ab(this.a)];
                a &= this.Zp;
                if (!this.Ao(a)) {
                    var c = b = ta.uG[2 * this.Yp + 1],
                        d = !1;
                    do {
                        a -= b;
                        a &= 31;
                        if (this.Ao(a)) {
                            d = !0;
                            break
                        }
                        a += 2 * b;
                        a &= 31;
                        if (this.Ao(a)) {
                            d = !0;
                            break
                        }
                        a -= b;
                        a &= 31;
                        b += c
                    } while (16 >= b);
                    if (0 == d) {
                        this.Ei = !0;
                        this.a.b.Qa = this.a.c.random(32) & this.Zp;
                        this.a.A.Bj = !0;
                        this.a.A.U = !0;
                        return
                    }
                }
                this.Ei = !1;
                this.a.b.Qa = a;
                a = this.a.c.random(100);
                if (a < this.sy && (a >>= 2, 25 > a && (a = a - 12 & 31 & this.Zp, this.Ao(a)))) {
                    this.a.b.Qa = a;
                    this.a.A.Bj = !0;
                    this.a.A.U = !0;
                    return
                }
                a = this.a.c.Ab(this.a) & 7;
                12 != this.Il && (0 == a ? (this.Il--, 0 > this.Il && (a = this.a.c.Ab(this.a) + ta.tG[this.a.c.random(2) + 2 * this.Yp], a &= 31, this.Ao(a) && (this.a.b.Qa = a, this.Il = this.$p))) : this.Il = this.$p);
                this.a.A.Bj = !0;
                this.a.A.U = !0
            }
        },
        Ao: function(a) {
            var b = 2048 * M.Rj[a] + (65536 * this.a.w + (this.a.Eg & 65535));
            a = 2048 * M.ck[a] + (65536 * this.a.u + (this.a.Fg &
                65535));
            b = Math.floor(b / 65536);
            a = Math.floor(a / 65536);
            return this.nh(b, a, !1)
        },
        Ce: function() {},
        Te: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.a.b.aa = a;
            this.Jl = a << 8;
            this.Qb = 0;
            this.a.A.U = !0
        },
        hh: function(a) {
            this.Te(a)
        },
        reverse: function() {
            0 == this.Qb && (this.a.A.U = !0, this.a.b.Qa += 16, this.a.b.Qa &= 31)
        },
        ec: function(a) {
            this.a.w != a && (this.a.w = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Xa = !0)
        },
        fc: function(a) {
            this.a.u != a && (this.a.u = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Xa = !0)
        }
    });
    Pe.prototype = p.extend(new M, {
        Z: function(a) {
            this.a =
                a;
            this.l = a.c;
            this.l.jy();
            null != this.a.D && this.a.D.Ts(!1);
            null != this.a.D && (this.a.D.S &= ~E.qg, this.a.D.ym());
            this.aq = !0;
            this.a.Eg = 0;
            this.a.Fg = 0;
            null != this.a.ca && this.a.ca.WA(r.Kc);
            this.a.b.aa = 0;
            this.a.b.Xa = !0;
            this.a.b.M = !0
        },
        ur: function(a) {
            this.a.b.lb = this.a.b.aa;
            this.a.b.li = this.a.b.aa;
            this.Kl = a;
            null != a && (a.X |= L.ky)
        },
        Gb: function() {
            this.jI(this.a)
        },
        move: function() {
            if (this.aq) {
                if (null != this.Kl.ca && this.Kl.ca.Zk == r.Gp) return;
                this.CD()
            }
            null != this.a.ca && this.a.ca.Ze();
            this.hj(this.a.b.aa, this.a.c.Ab(this.a));
            if (-64 > this.a.w || this.a.w > this.a.c.Ud + 64 || -64 > this.a.u || this.a.u > this.a.c.Vd + 64) this.a.ho = !1, this.a.c.Of(this.a.Kb);
            this.a.b.Xa && (this.a.b.Xa = !1, this.a.c.Zf(this.a))
        },
        CD: function() {
            null != this.a.D && this.a.D.Ts(!0);
            null != this.a.D && (this.a.D.S |= E.qg, this.a.D.ow());
            if (null != this.l.pi) {
                var a = this.l.Uj(this.Kl);
                if (null != a) {
                    var b = this.l.pi,
                        c = new ca;
                    this.St = c;
                    c.EF(this.a, ca.YF);
                    c.BJ = b.identifier;
                    this.vn = b.QQ(a.AJ, this.a.b.aa / 250 * 50, c);
                    c.zJ = this.vn;
                    null == this.vn && (this.St = null)
                }
            }
            this.aq = !1;
            this.Kl = null
        },
        jI: function() {
            null !=
                this.vn && (pBase = this.a.c.pi, pBase.RQ(this.vn), this.vn = null);
            null != this.St && (this.St = null)
        },
        ec: function(a) {
            this.a.w != a && (this.a.w = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Xa = !0)
        },
        fc: function(a) {
            this.a.u != a && (this.a.u = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Xa = !0)
        },
        Ce: function() {},
        reverse: function() {},
        stop: function() {},
        start: function() {},
        tg: function() {},
        Te: function() {},
        hh: function() {}
    });
    Qe.prototype = p.extend(new M, {
        Z: function(a) {
            this.a = a
        },
        move: function() {
            0 == (this.a.X & L.Ci) && null != this.a.ca && (this.a.ca.Ze(),
                this.a.ca.Zg != r.Nj + 1 && this.a.c.Of(this.a.Kb))
        },
        ec: function(a) {
            this.a.w != a && (this.a.w = a, this.a.A.U = !0, this.a.b.M = !0)
        },
        fc: function(a) {
            this.a.u != a && (this.a.u = a, this.a.A.U = !0, this.a.b.M = !0)
        },
        Ce: function() {},
        reverse: function() {},
        stop: function() {},
        start: function() {},
        tg: function() {},
        Te: function() {},
        hh: function() {}
    });
    Re.prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            this.a.Eg = 0;
            this.ng = this.a.Fg = 0;
            this.wh = this.a.b.aa = 0;
            this.Tt = -1;
            this.a.b.mi = b.Mk;
            this.ip = b.xB;
            this.eh = this.wk(this.ip);
            this.jp = b.yB;
            this.Be =
                this.wk(this.jp);
            this.a.b.lb = b.AB;
            this.a.b.li = 0;
            this.Ut = b.zB;
            this.Cj = b.Vr;
            this.a.b.M = !0
        },
        move: function() {
            var a, b, c, d;
            this.a.c.ql = 1;
            a = this.a.c.Ab(this.a);
            this.a.b.Yw = a;
            if (0 == this.wh) {
                this.a.A.Bj = !1;
                b = 0;
                c = this.a.c.Gc[this.a.b.mi - 1] & 15;
                0 != c && (d = M.KF[c], -1 != d && 0 != (1 << d & this.Ut) && (b = 1, a = d));
                c = this.ng;
                0 == b ? 0 != c && (b = this.Be, 0 != (this.a.c.B.Yb & I.Vc) && (b *= this.a.c.Fc), c -= b, 0 >= c && (c = 0)) : c >> 8 < this.a.b.lb && (b = this.eh, 0 != (this.a.c.B.Yb & I.Vc) && (b *= this.a.c.Fc), c += b, c >> 8 > this.a.b.lb && (c = this.a.b.lb << 8));
                this.ng =
                    c;
                this.a.b.aa = c >> 8;
                this.a.b.Qa = a;
                this.a.b.ze = r.Kc;
                null != this.a.ca && this.a.ca.Ze();
                if (0 == this.hj(this.a.b.aa, this.a.c.Ab(this.a))) return;
                if (0 == this.a.b.aa) {
                    c = this.ng;
                    if (0 == c || this.a.b.Yw == this.a.c.Ab(this.a)) return;
                    this.a.b.aa = c >> 8;
                    this.a.b.Qa = this.a.b.Yw;
                    if (0 == this.hj(this.a.b.aa, this.a.c.Ab(this.a))) return
                }
            }
            for (; 0 != this.wh && 0 != this.a.c.ql;)
                if (c = this.ng, c -= this.Be, 0 < c) {
                    if (this.ng = c, c >>= 8, this.a.b.aa = c, d = this.a.c.Ab(this.a), 0 != this.wh && (d += 16, d &= 31), 0 == this.hj(c, d)) break
                } else {
                    this.ng = 0;
                    this.wh = this.a.b.aa =
                        0;
                    break
                }
        },
        tg: function() {
            this.oe == this.a.c.ld && this.zo(0 != (this.Cj & M.yn));
            this.a.c.qc != this.Tt && (this.Tt = this.a.c.qc, this.wh++, 12 <= this.wh ? this.stop() : (this.a.A.Bj = !0, this.a.A.U = !0))
        },
        reverse: function() {},
        Ce: function() {},
        stop: function() {
            this.ng = this.wh = this.a.b.aa = 0;
            this.a.A.U = !0;
            this.oe == this.a.c.ld && (this.zo(0 != (this.Cj & M.yn)), this.wh = 0)
        },
        start: function() {
            this.a.A.U = !0;
            this.Qb = 0
        },
        hh: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.a.b.lb = a;
            this.a.b.aa > a && (this.a.b.aa = a, this.ng = a << 8);
            this.a.A.U = !0
        },
        Te: function(a) {
            0 >
                a && (a = 0);
            250 < a && (a = 250);
            a > this.a.b.lb && (a = this.a.b.lb);
            this.a.b.aa = a;
            this.ng = a << 8;
            this.a.A.U = !0
        },
        ec: function(a) {
            this.a.w != a && (this.a.w = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Xa = !0)
        },
        fc: function(a) {
            this.a.u != a && (this.a.u = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Xa = !0)
        },
        $Q: function(a) {
            this.Ut = a
        }
    });
    Se.prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            this.a.b.mi = b.Mk;
            this.Vt = b.BB + this.a.w;
            this.Wt = b.CB + this.a.u;
            this.Xt = b.DB + this.a.w;
            this.Yt = b.EB + this.a.u;
            this.cq = this.bq = this.a.b.aa = 0;
            this.a.b.li = 0;
            this.a.b.lb =
                100;
            this.Cj = b.Vr;
            this.xo(b);
            this.a.b.M = !0;
            this.a.c.QJ(this.a)
        },
        Gb: function() {
            this.a.c.Wz(this.a)
        },
        move: function() {
            var a = this.a.w,
                b = this.a.u,
                c, d, e, f;
            if (0 == this.Qb && 0 != this.a.c.Ds[this.a.b.mi - 1] && (a = this.a.c.ap, a < this.Vt && (a = this.Vt), a > this.Xt && (a = this.Xt), b = this.a.c.bp, b < this.Wt && (b = this.Wt), b > this.Yt && (b = this.Yt), c = a - this.a.w, d = b - this.a.u, e = 0, 0 > c && (c = -c, e |= 1), 0 > d && (d = -d, e |= 2), f = c + d << 2, 250 < f && (f = 250), this.a.b.aa = f, 0 != f)) {
                0 == d && (d = 1);
                c = (c << 8) / d;
                for (d = 0; !(c >= M.Cl[d]); d += 2);
                c = M.Cl[d + 1];
                0 != (e & 2) && (c = -c +
                    32 & 31);
                0 != (e & 1) && (c = (-(c - 8 & 31) & 31) + 8 & 31);
                this.a.b.Qa = c
            }
            0 != this.a.b.aa && (this.cq = 0, this.bq = this.a.b.aa);
            this.cq++;
            10 < this.cq && (this.bq = 0);
            this.a.b.aa = this.bq;
            null != this.a.ca && this.a.ca.Ze();
            this.a.w = a;
            this.a.u = b;
            this.a.b.M = !0;
            this.a.c.ld++;
            this.oe = this.a.c.ld;
            this.a.c.Zf(this.a)
        },
        stop: function() {
            this.oe == this.a.c.ld && this.zo(0 != (this.Cj & M.yn));
            this.a.b.aa = 0
        },
        start: function() {
            this.Qb = 0;
            this.a.A.U = !0
        },
        tg: function() {
            this.stop()
        },
        reverse: function() {},
        Ce: function() {},
        ec: function(a) {
            this.a.w != a && (this.a.w =
                a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Xa = !0)
        },
        fc: function(a) {
            this.a.u != a && (this.a.u = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Xa = !0)
        }
    });
    Te.prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            this.iq = this.a.w;
            this.jq = this.a.u;
            this.rd = !1;
            this.Ah = 0;
            this.a.Bk = 0;
            this.Ma = b;
            this.a.b.li = b.WB;
            this.a.b.lb = b.VB;
            this.zh = 0;
            this.Ol = null;
            this.Lk(0);
            this.xo(b);
            this.a.b.aa = this.Lc;
            this.a.b.M = !0;
            0 == this.Ma.gb.length && this.stop()
        },
        move: function() {
            this.a.Bk = 0;
            this.a.b.ze = r.Kc;
            null != this.a.ca && this.a.ca.Ze();
            if (0 == this.Lc) {
                var a =
                    this.Ah;
                if (0 == a) {
                    this.a.b.aa = 0;
                    this.a.c.Zf(this.a);
                    return
                }
                a -= this.a.c.hp;
                if (0 < a) {
                    this.Ah = a;
                    this.a.b.aa = 0;
                    this.a.c.Zf(this.a);
                    return
                }
                this.Ah = 0;
                this.Lc = this.Qb & 32767;
                this.Qb = 0;
                this.a.b.aa = this.Lc
            }
            a = 0 != (this.a.c.B.Yb & I.Vc) ? 256 * this.a.c.Fc : 256;
            this.a.c.ri = a;
            for (var b;;) {
                b = !1;
                this.a.c.gp = a;
                a *= this.Lc;
                a <<= 5;
                524288 >= a ? this.a.c.mx = a : (a = 16384, a /= this.Lc, this.a.c.gp = a, this.a.c.mx = 524288);
                for (;;) {
                    this.gq = !1;
                    if (1 == this.XB(this.a.c.mx) && 0 == this.gq) {
                        b = !0;
                        break
                    }
                    if (this.a.c.ri == this.a.c.gp) {
                        b = !0;
                        break
                    }
                    if (this.a.c.ri >
                        this.a.c.gp) {
                        this.a.c.ri -= this.a.c.gp;
                        a = this.a.c.ri;
                        break
                    }
                    a = this.a.c.ri * MT_Speed;
                    a <<= 5;
                    this.XB(a);
                    b = !0;
                    break
                }
                if (b) break
            }
        },
        XB: function(a) {
            a += this.zh;
            var b = a >>> 16;
            if (b < this.hq) return this.zh = a, a = b * this.xn / 16384 + this.Ch, this.a.w = b * this.wn / 16384 + this.Bh, this.a.u = a, this.a.b.M = !0, this.a.c.Zf(this.a), this.a.A.U;
            b -= this.hq;
            a = b << 16 | a & 65535;
            0 != this.Lc && (a /= this.Lc);
            this.a.c.ri += a >> 5 & 65535;
            this.a.w = this.Yj;
            this.a.u = this.Zj;
            this.a.b.M = !0;
            this.a.c.Zf(this.a);
            if (this.a.A.U) return !0;
            this.a.Bk = this.a.c.qc;
            this.a.lm =
                null;
            b = this.re;
            this.zh = 0;
            if (0 == this.rd) {
                b++;
                if (b < this.Ma.tm) {
                    this.a.lm = this.Ma.gb[b].xe;
                    if (null != this.Ol && null != this.Ma.gb[b].xe && p.yc(this.Ol, this.Ma.gb[b].xe)) return this.re = b, this.kf(), this.Ur();
                    this.Lk(b);
                    this.kf();
                    return this.a.A.U
                }
                this.a.jo = this.a.c.qc;
                this.re = b;
                if (this.rd) return this.kf(), this.a.A.U;
                if (0 != this.Ma.$B) return this.rd = !0, b--, this.a.lm = this.Ma.gb[b].xe, this.sm(b), this.kf(), this.a.A.U;
                this.ZB();
                if (0 == this.Ma.lw) return this.Ur(), this.kf(), this.a.A.U;
                b = 0
            } else {
                if (null != this.Ol && null !=
                    this.Ma.gb[b].xe && p.yc(this.Ol, this.Ma.gb[b].xe)) return this.kf(), this.Ur();
                this.a.lm = this.Ma.gb[b].xe;
                this.Ah = this.Ma.gb[b].gw;
                b--;
                if (0 <= b) return this.sm(b), this.kf(), this.a.A.U;
                this.ZB();
                if (0 == this.rd) return this.kf(), this.a.A.U;
                if (0 == this.Ma.lw) return this.Ur(), this.kf(), this.a.A.U;
                b = 0;
                this.rd = !1
            }
            this.Lk(b);
            this.kf();
            return this.a.A.U
        },
        Lk: function(a) {
            a >= this.Ma.gb.length ? this.stop() : (this.rd = !1, this.re = a, this.Ah = this.Ma.gb[a].gw, this.wn = this.Ma.gb[a].cw, this.xn = this.Ma.gb[a].hw, this.Bh = this.a.w,
                this.Ch = this.a.u, this.Yj = this.a.w + this.Ma.gb[a].ew, this.Zj = this.a.u + this.Ma.gb[a].fw, this.a.b.Qa = this.Ma.gb[a].dw, this.UB())
        },
        sm: function(a) {
            a >= this.Ma.gb.length ? this.stop() : (this.rd = !0, this.re = a, this.wn = -this.Ma.gb[a].cw, this.xn = -this.Ma.gb[a].hw, this.Bh = this.a.w, this.Ch = this.a.u, this.Yj = this.a.w - this.Ma.gb[a].ew, this.Zj = this.a.u - this.Ma.gb[a].fw, this.a.b.Qa = this.Ma.gb[a].dw + 16 & 31, this.UB())
        },
        UB: function() {
            this.hq = this.Ma.gb[this.re].vB;
            var a = this.Ma.gb[this.re].wB,
                b = this.Ah;
            0 != b && (this.Ah = 20 * b,
                this.Qb = a |= 32768);
            0 != this.Qb && (a = 0);
            if (a != this.Lc || 0 != a) this.Lc = a, this.gq = this.a.A.U = !0;
            this.a.b.aa = this.Lc
        },
        kf: function() {
            this.a.Bk == this.a.c.qc && (this.a.c.i.Rc = 0, this.a.c.i.yd(this.a, -1310720 | this.a.Fa & 65535), this.a.c.i.yd(this.a, -2293760 | this.a.Fa & 65535));
            this.a.jo == this.a.c.qc && (this.a.c.i.Rc = 0, this.a.c.i.yd(this.a, -1376256 | this.a.Fa & 65535))
        },
        Ur: function() {
            this.Qb = this.Lc = 0;
            this.a.A.U = !0;
            this.gq = !1;
            return !0
        },
        ZB: function() {
            0 != this.Ma.YB && (this.a.w = this.iq, this.a.u = this.jq, this.a.b.M = !0)
        },
        IQ: function(a) {
            var b;
            for (b = 0; b < this.Ma.tm; b++)
                if (null != this.Ma.gb[b].xe && p.yc(a, this.Ma.gb[b].xe)) {
                    0 == this.rd ? (this.Lk(b), this.a.Bk = this.a.c.qc, this.a.lm = this.Ma.gb[b].xe, this.a.jo = 0, this.kf()) : 0 < b && (b--, this.sm(b), this.a.Bk = this.a.c.qc, this.a.lm = this.Ma.gb[b].xe, this.a.jo = 0, this.kf());
                    this.a.A.U = !0;
                    break
                }
        },
        JQ: function(a) {
            var b;
            for (b = 0; b < this.Ma.tm; b++)
                if (null != this.Ma.gb[b].xe && p.yc(a, this.Ma.gb[b].xe)) {
                    if (b == this.re && 0 == this.zh) break;
                    this.Ol = a;
                    if (0 == this.rd)
                        if (b > this.re) {
                            if (0 != this.Lc) break;
                            0 != (this.Qb & 32768) ? this.start() :
                                this.Lk(this.re)
                        } else {
                            if (0 != this.Lc) {
                                this.reverse();
                                break
                            }
                            0 != (this.Qb & 32768) ? (this.start(), this.reverse()) : this.sm(MT_MoveNumber - 1)
                        }
                    else if (b <= this.re) {
                        if (0 != this.Lc) break;
                        0 != (this.Qb & 32768) ? this.start() : this.sm(this.re - 1)
                    } else {
                        if (0 != this.Lc) {
                            this.reverse();
                            break
                        }
                        0 != (this.Qb & 32768) ? (this.start(), this.reverse()) : this.Lk(this.re)
                    }
                    break
                }
        },
        stop: function() {
            0 == this.Qb && (this.Qb = this.Lc | 32768);
            this.Lc = 0;
            this.a.A.U = !0
        },
        start: function() {
            0 != (this.Qb & 32768) && (this.Lc = this.Qb & 32767, this.Qb = this.Ah = 0, this.a.A.U = !0)
        },
        reverse: function() {
            if (0 == this.Qb) {
                this.a.A.U = !0;
                var a = this.re;
                if (0 == this.zh)(this.rd = !this.rd) ? 0 == a ? this.rd = !this.rd : (a--, this.sm(a)) : this.Lk(a);
                else {
                    this.rd = !this.rd;
                    this.wn = -this.wn;
                    this.xn = -this.xn;
                    var a = this.Bh,
                        b = this.Yj;
                    this.Bh = b;
                    this.Yj = a;
                    a = this.Ch;
                    this.Ch = b = this.Zj;
                    this.Zj = a;
                    this.a.b.Qa += 16;
                    this.a.b.Qa &= 31;
                    a = this.zh >>> 16;
                    a = this.hq - a;
                    this.zh = a << 16 | this.zh & 65535
                }
            }
        },
        ec: function(a) {
            var b = this.a.w;
            this.a.w = a;
            b -= this.Bh;
            a -= b;
            this.Yj = b = this.Yj - this.Bh + a;
            b = this.Bh;
            this.Bh = a;
            this.iq -= b - a;
            this.a.A.U = !0;
            this.a.b.M = !0;
            this.a.b.Xa = !0
        },
        fc: function(a) {
            var b = this.a.u;
            this.a.u = a;
            b -= this.Ch;
            a -= b;
            this.Zj = b = this.Zj - this.Ch + a;
            b = this.Ch;
            this.Ch = a;
            this.jq -= b - a;
            this.a.A.U = !0;
            this.a.b.M = !0;
            this.a.b.Xa = !0
        },
        Te: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.Lc = a;
            this.a.b.aa = a;
            this.a.A.U = !0
        },
        hh: function(a) {
            this.Te(a)
        },
        Ce: function() {}
    });
    T.IN = 0;
    T.WF = 1;
    T.GN = 2;
    T.HN = 3;
    T.xh = 0;
    T.Ll = 1;
    T.fq = 2;
    T.eq = 3;
    T.ty = 4;
    T.uy = 5;
    T.prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            this.l = this.a.c;
            this.a.Eg = 0;
            this.Zd = this.a.Fg = 0;
            this.a.b.aa =
                0;
            this.a.b.mi = b.Mk;
            this.ip = b.KB;
            this.eh = this.wk(this.ip);
            this.jp = b.LB;
            this.Be = this.wk(this.jp);
            this.a.b.lb = b.PB;
            this.a.b.li = 0;
            this.Zt = b.MB;
            this.vy = b.NB;
            var c = b.OB;
            3 < c && (c = T.WF);
            this.wy = c;
            this.Ml = this.Hd = 0;
            this.Wj = null;
            this.xo(b);
            this.a.b.M = !0;
            this.pb = T.xh
        },
        move: function() {
            var a, b;
            this.a.c.ql = 1;
            a = this.a.c.Gc[this.a.b.mi - 1];
            this.Gu();
            b = this.Zd;
            var c;
            0 == this.Ml && (0 >= b && (0 != (a & 4) ? (c = this.eh, 0 != (this.a.c.B.Yb & I.Vc) && (c *= this.a.c.Fc), b -= c, b / 256 < -this.a.b.lb && (b = 256 * -this.a.b.lb)) : 0 > b && (c = this.Be, 0 != (this.a.c.B.Yb &
                I.Vc) && (c *= this.a.c.Fc), b += c, 0 < b && (b = 0)), 0 != (a & 8) && (b = -b)), 0 <= b && (0 != (a & 8) ? (c = this.eh, 0 != (this.a.c.B.Yb & I.Vc) && (c *= this.a.c.Fc), b += c, b / 256 > this.a.b.lb && (b = 256 * this.a.b.lb)) : 0 < b && (c = this.Be, 0 != (this.a.c.B.Yb & I.Vc) && (c *= this.a.c.Fc), b -= c, 0 > b && (b = 0)), 0 != (a & 4) && (b = -b)), this.Zd = b);
            var d = this.Hd;
            for (c = !1;;) {
                switch (this.pb) {
                    case 2:
                    case 3:
                        c = this.Zt << 5;
                        0 != (this.a.c.B.Yb & I.Vc) && (c *= this.a.c.Fc);
                        d += c;
                        64E3 < d && (d = 64E3);
                        break;
                    case 0:
                        if (0 != (a & 1)) {
                            if (this.l.ug(this.a.fd, this.a.w + this.Ef, this.a.u + this.Ff - 4) == k.Df) break;
                            this.pb = T.Ll;
                            c = !0;
                            continue
                        }
                        if (0 != (a & 2) && this.l.ug(this.a.fd, this.a.w + this.Ef, this.a.u + this.Ff + 4) != k.Df) {
                            this.pb = T.Ll;
                            c = !0;
                            continue
                        }
                        break;
                    case 1:
                        if (0 == c && (this.Ml = 0, this.l.ug(this.a.fd, this.a.w + this.Ef, this.a.u + this.Ff) == k.Df && this.l.ug(this.a.fd, this.a.w + this.Ef, this.a.u + this.Ff - 4) == k.Df)) break;
                        0 >= d && (0 != (a & 1) ? (c = this.eh, 0 != (this.a.c.B.Yb & I.Vc) && (c *= this.a.c.Fc), d -= c, c = d / 256, c < -this.a.b.lb && (d = 256 * -this.a.b.lb)) : (c = this.Be, 0 != (this.a.c.B.Yb & I.Vc) && (c *= this.a.c.Fc), d += c, 0 < d && (d = 0)), 0 != (a & 2) && (d = -d));
                        0 <= d && (0 != (a & 2) ? (c = this.eh, 0 != (this.a.c.B.Yb & I.Vc) && (c *= this.a.c.Fc), d += c, c = d / 256, c > this.a.b.lb && (d = 256 * this.a.b.lb)) : (c = this.Be, 0 != (this.a.c.B.Yb & I.Vc) && (c *= this.a.c.Fc), d -= c, 0 > d && (d = 0)), 0 != (a & 1) && (d = -d))
                }
                break
            }
            this.Hd = d;
            var e = 0;
            0 > b && (e = 16);
            c = b;
            var f = d;
            if (0 != f) {
                var g = 0;
                0 > c && (g |= 1, c = -c);
                0 > f && (g |= 2, f = -f);
                c = (c << 8) / f;
                for (e = 0; !(c >= M.Cl[e]); e += 2);
                e = M.Cl[e + 1];
                0 != (g & 2) && (e = -e + 32 & 31);
                0 != (g & 1) && (e = (-(e - 8 & 31) & 31) + 8 & 31)
            }
            c = b;
            g = M.Rj[e];
            f = M.ck[e];
            0 > g && (g = -g);
            0 > f && (f = -f);
            g < f && (g = f, c = d);
            0 > c && (c = -c);
            c /= g;
            250 < c && (c =
                250);
            this.a.b.aa = c;
            switch (this.pb) {
                case 1:
                    0 > d ? this.a.b.Qa = 8 : 0 < d && (this.a.b.Qa = 24);
                    break;
                case 3:
                    this.a.b.Qa = e;
                    break;
                default:
                    0 > b ? this.a.b.Qa = 16 : 0 < b && (this.a.b.Qa = 0)
            }
            switch (this.pb) {
                case 4:
                    this.a.b.ze = r.rt;
                    break;
                case 5:
                    this.a.b.ze = r.Hp;
                    break;
                case 3:
                    this.a.b.ze = r.Gx;
                    break;
                case 2:
                    this.a.b.ze = r.Hx;
                    break;
                case 1:
                    this.a.b.ze = r.Fx;
                    break;
                default:
                    this.a.b.ze = r.Kc
            }
            null != this.a.ca && this.a.ca.Ze();
            this.Gu();
            this.hj(this.a.b.aa, e);
            this.pb != T.xh && this.pb != T.Ll || 0 != this.Vj || (b = !1, d = this.wy, 0 != d && (d--, 0 == d ? (5 == (a & 5) &&
                (b = !0), 9 == (a & 9) && (b = !0)) : 0 != (a & d << 4) && (b = !0)), b && (this.Hd = -this.vy << 8, this.pb = T.fq));
            switch (this.pb) {
                case 2:
                    0 <= this.Hd && (this.pb = T.eq);
                    break;
                case 3:
                    this.l.ug(this.a.fd, this.a.w + this.Ef, this.a.u + this.Ff) != k.Df && (this.Hd = 0, this.pb = T.Ll, this.a.b.Qa = 8);
                    break;
                case 0:
                    if (0 != (a & 3) && 0 == (a & 12) && this.l.ug(this.a.fd, this.a.w + this.Ef, this.a.u + this.Ff) != k.Df) {
                        this.pb = T.Ll;
                        this.Zd = 0;
                        break
                    }
                    0 != (a & 2) && null != this.a.ca && this.a.ca.rg(r.rt) && (this.Zd = 0, this.pb = T.ty);
                    if (this.l.ug(this.a.fd, this.a.w + this.Ef, this.a.u + this.Ff) !=
                        k.Df) break;
                    0 == this.gn(this.a.w, this.a.u + 10, this.Fi, I.Yd, !0) ? (a = this.a.w - this.a.c.fa, b = this.a.u - this.a.c.ka, d = new G, this.rm(a, b + this.Fi - 1, a, b, this.Fi, I.Yd, d), this.a.w = d.x + this.a.c.fa, this.a.u = d.y + this.a.c.ka, this.Vj = !1) : this.pb = T.eq;
                    break;
                case 1:
                    if (this.l.ug(this.a.fd, this.a.w + this.Ef, this.a.u + this.Ff) == k.Df) {
                        if (0 > this.Hd)
                            for (f = 0; 32 > f; f++)
                                if (this.l.ug(this.a.fd, this.a.w + this.Ef, this.a.u + this.Ff + f) != k.Df) {
                                    this.a.u += f;
                                    break
                                } this.Hd = 0
                    }
                    0 != (a & 12) && (this.pb = T.xh, this.Hd = 0);
                    break;
                case 4:
                    0 == (a & 2) && (null !=
                        this.a.ca && this.a.ca.rg(r.Hp) ? (this.pb = T.uy, this.a.b.ze = r.Hp, this.a.ca.Ze(), this.a.ca.$k = 1) : this.pb = T.xh);
                    break;
                case 5:
                    null != this.a.ca && 0 == this.a.ca.vf && (this.pb = T.xh)
            }
            if (this.pb == T.xh || this.pb == T.ty || this.pb == T.uy) {
                do {
                    a = null;
                    null != this.a.Bb && (a = this.a.Bb.oj);
                    if (null == this.a.c.zm(this.a, this.a.b.La, this.a.b.Ka, this.a.b.qb, this.a.b.rb, this.a.w, this.a.u, a) && (a = this.a.c.zm(this.a, this.a.b.La, this.a.b.Ka, this.a.b.qb, this.a.b.rb, this.a.w, this.a.u + 1, a), null != a && 1 == a.size())) {
                        a = a.get(0);
                        if (null == this.Wj ||
                            this.Wj != a) {
                            if (this.a.ac != a.ac) {
                                this.Wj = a;
                                this.$t = a.w;
                                this.au = a.u;
                                break
                            }
                            if (null == this.Wj) break
                        }
                        b = a.w - this.$t;
                        d = a.u - this.au;
                        this.$t = a.w;
                        this.au = a.u;
                        this.a.w += b;
                        this.a.u += d;
                        this.a.c.Zf(this.a);
                        this.a.b.M = !0;
                        break
                    }
                    this.Wj = null
                } while (0)
            } else this.Wj = null
        },
        iw: function() {
            this.Hd = this.Zd = this.a.b.aa = 0
        },
        tg: function() {
            this.stop()
        },
        stop: function() {
            if (this.oe != this.a.c.ld) this.iw();
            else {
                this.a.A.U = !0;
                var a = this.a.w - this.a.c.fa,
                    b = this.a.u - this.a.c.ka,
                    c;
                switch (this.a.c.i.Ps & 4294901760) {
                    case -786432:
                        a = this.a.w -
                            this.a.oa;
                        b = this.a.u - this.a.pa;
                        c = this.a.c.Yk(a, b, a + this.a.L, b + this.a.K);
                        a = this.a.w;
                        b = this.a.u;
                        0 != (c & k.sh) && (a = this.a.oa, this.Zd = 0, this.Vj = !0);
                        0 != (c & k.th) && (a = this.a.c.Ud - this.a.L + this.a.oa, this.Zd = 0, this.Vj = !0);
                        0 != (c & k.uh) && (b = this.a.pa, this.Hd = 0, this.Vj = !1);
                        0 != (c & k.rh) && (b = this.a.c.Vd - this.a.K + this.a.pa, this.Hd = 0, this.Vj = !1);
                        this.a.w = a;
                        this.a.u = b;
                        this.pb = this.pb == T.fq ? T.eq : T.xh;
                        this.Ml = 0;
                        break;
                    case -851968:
                    case -917504:
                        if (this.Vj = !1, c = new G, this.pb == T.eq) this.rm(a, b, this.a.b.vj - this.a.c.fa, this.a.b.wj -
                            this.a.c.ka, this.Fi, I.Yd, c), this.a.w = c.x + this.a.c.fa, this.a.u = c.y + this.a.c.ka, this.pb = T.xh, this.a.b.M = !0, this.gn(this.a.w, this.a.u + 1, 0, I.Yd, !0) ? this.Zd = this.a.b.aa = 0 : (this.Ml = 0, this.a.b.aa = Math.abs(this.Zd / 256), this.Hd = 0);
                        else {
                            if (this.pb == T.xh) {
                                if (this.rm(a, b, a, b - this.Fi, 0, I.Yd, c)) {
                                    this.a.w = c.x + this.a.c.fa;
                                    this.a.u = c.y + this.a.c.ka;
                                    this.a.b.M = !0;
                                    break
                                }
                                if (this.rm(a, b, this.a.b.vj - this.a.c.fa, this.a.b.wj - this.a.c.ka, 0, I.Yd, c)) {
                                    this.a.w = c.x + this.a.c.fa;
                                    this.a.u = c.y + this.a.c.ka;
                                    this.a.b.M = !0;
                                    this.iw();
                                    break
                                }
                            }
                            if (this.pb == T.fq) {
                                if (this.rm(a, b, a, b - this.Fi, 0, I.Yd, c)) {
                                    this.a.w = c.x + this.a.c.fa;
                                    this.a.u = c.y + this.a.c.ka;
                                    this.a.b.M = !0;
                                    break
                                }
                                this.Ml = 1;
                                this.Zd = 0
                            }
                            this.pb == T.Ll && this.rm(a, b, this.a.b.vj - this.a.c.fa, this.a.b.wj - this.a.c.ka, 0, I.Yd, c) ? (this.a.w = c.x + this.a.c.fa, this.a.u = c.y + this.a.c.ka, this.a.b.M = !0, this.iw()) : (this.a.b.La = this.a.b.ys, this.a.b.Ka = this.a.b.xs, this.gn(this.a.w, this.a.u, 0, I.Yd, !0) || (this.a.w = this.a.b.vj, this.a.u = this.a.b.wj, this.a.b.M = !0))
                        }
                }
            }
        },
        ec: function(a) {
            this.a.w != a && (this.a.w =
                a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Xa = !0)
        },
        fc: function(a) {
            this.a.u != a && (this.a.u = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Xa = !0)
        },
        Te: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            a > this.a.b.lb && (a = this.a.b.lb);
            this.a.b.aa = a;
            this.Zd = this.a.b.aa * M.Rj[this.a.c.Ab(this.a)];
            this.Hd = this.a.b.aa * M.ck[this.a.c.Ab(this.a)];
            this.a.A.U = !0
        },
        hh: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.a.b.lb = a;
            a <<= 8;
            this.Zd > a && (this.Zd = a);
            this.a.A.U = !0
        },
        Vs: function(a) {
            this.Zt = a
        },
        Ce: function(a) {
            this.a.b.Qa = a;
            this.Zd = this.a.b.aa * M.Rj[a];
            this.Hd = this.a.b.aa * M.ck[a]
        },
        Gu: function() {
            var a;
            0 < this.a.b.La ? a = this.a.c.h.ha.Yi(this.a.b.La, this.a.b.Ka, this.a.b.qb, this.a.b.rb) : (a = new Y, a.width = this.a.L, a.height = this.a.K, a.Ea = this.a.oa, a.ya = this.a.pa);
            this.Ef = 0;
            this.Ff = a.height - a.ya;
            this.Fi = 2 * a.height + a.height >>> 3
        },
        FJ: function() {
            this.Gu();
            this.l.ug(this.a.fd, this.a.w + this.Ef, this.a.u + this.Ff) == k.Df && (0 == this.a.c.Ui(this.a, this.a.b.La, this.a.b.Ka, this.a.b.qb, this.a.b.rb, this.a.w, this.a.u, 0, I.kn) && (this.pb == T.fq && 0 > this.Hd || 0 == this.a.c.Ui(this.a,
                this.a.b.La, this.a.b.Ka, this.a.b.qb, this.a.b.rb, this.a.w, this.a.u, this.Fi, I.Yd)) || this.a.c.i.yd(this.a, -851968 | this.a.Fa & 65535))
        }
    });
    $a.wG = [4294967288, 4294967292, 4294967294, 4294967295];
    $a.prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            this.Id = 0;
            this.yh = this.a.b.aa = 0;
            this.xy = -1;
            this.a.b.mi = b.Mk;
            this.ip = b.jw;
            this.eh = this.wk(b.jw);
            this.jp = b.kw;
            this.Be = this.wk(b.kw);
            this.a.b.lb = b.TB;
            this.a.b.li = 0;
            this.yy = b.RB;
            this.a.A.Dj = 0;
            this.Cj = b.Vr;
            this.bu = 0;
            this.cu = $a.wG[b.QB];
            this.du = b.SB;
            this.Nl = 0;
            this.Xj = this.a.c.Ab(this.a);
            this.a.Eg = 0;
            this.a.Fg = 0;
            this.xo(b);
            this.a.b.M = !0
        },
        move: function() {
            var a, b, c;
            this.a.c.ql = 1;
            if (0 == this.yh) {
                this.a.A.Bj = !1;
                a = this.a.c.Gc[this.a.b.mi - 1] & 15;
                b = 0;
                0 != (a & 8) && (b = -1);
                0 != (a & 4) && (b = 1);
                if (0 != b) {
                    c = this.du;
                    0 != (this.a.c.B.Yb & I.Vc) && (c *= this.a.c.Fc);
                    for (this.Nl += c; 100 < this.Nl;) this.Nl -= 100, this.Xj += b, this.Xj &= 31, this.a.b.Qa = this.Xj & this.cu;
                    this.a.b.M = !0
                }
                c = 0;
                0 != this.a.A.Dj ? (0 != (a & 1) && (c = 1), 0 != (a & 2) && (c = 2)) : (0 != (a & 1) && (c = 2), 0 != (a & 2) && (c = 1));
                for (b = this.Id;;) {
                    if (0 != (c & 1)) {
                        if (0 == this.Id) {
                            if (0 == this.yy) break;
                            if (0 != (this.bu & 3)) break;
                            this.a.A.Dj ^= 1;
                            c = this.eh;
                            0 != (this.a.c.B.Yb & I.Vc) && (c *= this.a.c.Fc);
                            b += c;
                            c = b >> 8;
                            c > this.a.b.lb && (this.Id = b = this.a.b.lb << 8);
                            this.Id = b;
                            break
                        }
                        c = this.Be;
                        0 != (this.a.c.B.Yb & I.Vc) && (c *= this.a.c.Fc);
                        b -= c;
                        0 > b && (b = 0);
                        this.Id = b
                    } else 0 != (c & 2) && (c = this.eh, 0 != (this.a.c.B.Yb & I.Vc) && (c *= this.a.c.Fc), b += c, c = b >> 8, c > this.a.b.lb && (this.Id = b = this.a.b.lb << 8), this.Id = b);
                    break
                }
                this.bu = a;
                this.a.b.aa = this.Id >> 8;
                this.a.b.ze = r.Kc;
                null != this.a.ca && this.a.ca.Ze();
                a = this.a.c.Ab(this.a);
                0 != this.a.A.Dj && (a =
                    a + 16 & 31);
                if (0 == this.hj(this.a.b.aa, a)) return
            }
            do {
                if (0 == this.yh) break;
                if (0 == this.a.c.ql) break;
                b = this.Id;
                b -= this.Be;
                if (0 >= b) {
                    this.yh = this.Id = 0;
                    break
                }
                this.Id = b;
                b >>= 8;
                a = this.a.c.Ab(this.a);
                0 != this.yh && (a += 16, a &= 31);
                if (0 == this.hj(b, a)) break
            } while (1)
        },
        reverse: function() {},
        stop: function() {
            this.Id = this.yh = 0;
            this.a.A.Dj = 0;
            this.oe == this.a.c.ld && (this.zo(0 != (this.Cj & M.yn)), this.a.A.U = !0)
        },
        start: function() {
            this.Qb = 0;
            this.a.A.U = !0
        },
        tg: function() {
            this.oe == this.a.c.ld && this.zo(0 != (this.Cj & M.yn));
            this.a.c.qc != this.xy &&
                (this.yh = this.a.A.Dj, this.a.A.Dj = 0, this.yh++, 16 <= this.yh ? this.stop() : (this.a.A.U = !0, this.a.A.Bj = !0))
        },
        Te: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            a > this.a.b.lb && (a = this.a.b.lb);
            this.Id = a << 8;
            this.a.A.U = !0
        },
        hh: function(a) {
            0 > a && (a = 0);
            250 < a && (a = 250);
            this.a.b.lb = a;
            a <<= 8;
            this.Id > a && (this.Id = a);
            this.a.A.U = !0
        },
        Xs: function(a) {
            this.du = a
        },
        ec: function(a) {
            this.a.w != a && (this.a.w = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Xa = !0)
        },
        fc: function(a) {
            this.a.u != a && (this.a.u = a, this.a.A.U = !0, this.a.b.M = !0, this.a.b.Xa = !0)
        },
        Ce: function(a) {
            this.Xj =
                a;
            this.a.b.Qa = a & this.cu
        }
    });
    ab.prototype = p.extend(new M, {
        Z: function(a) {
            this.a = a;
            this.a.b.aa = 0;
            this.a.b.Xa = !0;
            this.a.b.M = !0
        },
        move: function() {
            null != this.a.ca && this.a.ca.Ze();
            this.a.b.Xa && (this.a.b.Xa = !1, this.a.c.Zf(this.a))
        },
        ec: function(a) {
            this.a.w != a && (this.a.w = a, this.a.A.U = !0, this.a.b.M = !0);
            this.a.b.Xa = !0
        },
        fc: function(a) {
            this.a.u != a && (this.a.u = a, this.a.A.U = !0, this.a.b.M = !0);
            this.a.b.Xa = !0
        },
        Ce: function() {},
        reverse: function() {},
        stop: function() {},
        start: function() {},
        tg: function() {},
        Te: function() {},
        hh: function() {}
    });
    (function(a) {
        this.Cd = a
    }).prototype = p.extend(new M, {
        Z: function(a, b) {
            this.a = a;
            a.c.h.file.vg(b.data);
            this.a.b.Xa = !0;
            this.a.b.M = !0
        },
        Gb: function() {
            this.Cd.Gb()
        },
        move: function() {
            this.Cd.move() && (this.a.b.M = !0)
        },
        stop: function() {
            this.Cd.stop(this.oe == this.a.c.ld)
        },
        start: function() {
            this.Cd.start()
        },
        tg: function() {
            this.Cd.tg(this.oe == this.a.c.ld)
        },
        Te: function(a) {
            this.Cd.Te(a)
        },
        hh: function(a) {
            this.Cd.hh(a)
        },
        reverse: function() {
            this.Cd.reverse()
        },
        ec: function(a) {
            this.Cd.ec(a);
            this.a.b.M = !0;
            this.a.b.Xa = !0
        },
        fc: function(a) {
            this.Cd.fc(a);
            this.a.b.M = !0;
            this.a.b.Xa = !0
        },
        Ce: function(a) {
            this.Cd.Ce(a);
            this.a.b.M = !0;
            this.a.b.Xa = !0
        },
        lz: function() {
            return 0
        }
    });
    Ha.TE = 1;
    Ha.UE = 2;
    Ha.MM = 4;
    Ha.prototype = {
        Z: function(a, b, c, d, e) {
            null != this.ba && this.ba.Gb();
            null != d && (b.b.Qa = d.uz);
            this.px = b.Bb.Bw;
            d = b.b.dc;
            b.b.dc = -1;
            if (null != c.Pd && a < c.Pd.Ok) {
                c = c.Pd.hd[a];
                this.rl = a; - 1 == e && (e = c.yo);
                b.b.dc = e;
                switch (e) {
                    case 0:
                        this.ba = new ab;
                        break;
                    case 1:
                        this.ba = new Se;
                        break;
                    case 2:
                        this.ba = new $a;
                        break;
                    case 3:
                        this.ba = new Re;
                        break;
                    case 4:
                        this.ba = new ta;
                        break;
                    case 5:
                        this.ba = new Te;
                        break;
                    case 9:
                        this.ba = new T;
                        break;
                    case 14:
                        this.ba = null, null == this.ba && (this.ba = new ab)
                }
                b.b.Qa = this.Zu(b, c.aC, b.b.Qa);
                this.ba.Z(b, c)
            }
            d != b.b.dc && d == S.eu && b.c.Wz(); - 1 == b.b.dc && (b.b.dc = 0, this.ba = new ab, this.ba.Z(b, null), b.b.Qa = 0)
        },
        VA: function(a, b, c) {
            null != this.ba && this.ba.Gb();
            a.b.dc = b;
            switch (b) {
                case 11:
                    this.ba = new Qe;
                    break;
                case 13:
                    this.ba = new Pe
            }
            this.ba.a = a;
            0 == c && this.ba.Z(a, null)
        },
        Gb: function() {
            this.ba.Gb()
        },
        move: function() {
            this.ba.move()
        },
        GJ: function(a) {
            var b = a.N;
            null != b.Pd && this.rl + 1 < b.Pd.Ok && this.Z(this.rl +
                1, a, b, null, -1)
        },
        PK: function(a, b) {
            var c = a.N;
            null != c.Pd && 0 <= b && b < c.Pd.Ok && this.Z(b, a, c, null, -1)
        },
        Zu: function(a, b, c) {
            if (0 > c || 32 <= c) {
                var d = 0,
                    e = b,
                    f;
                for (c = 0; 32 > c; c++) f = e, e >>= 1, 0 != (f & 1) && d++;
                if (0 == d) c = 0;
                else
                    for (d = a.c.random(d), e = b, c = 0; !(f = e, e >>= 1, 0 != (f & 1) && (d--, 0 > d)); c++);
            }
            return c
        }
    };
    Oa.uN = 2;
    Oa.vN = 4;
    Oa.AF = 8;
    Oa.prototype = p.extend(new Ga, {
        ir: function() {
            return 0
        },
        Gz: function(a) {
            this.UA = a.s();
            this.Ac = p.tC(a.Ob());
            0 == this.Ac.length && (this.Ac = "Ini.ini");
            a = 0;
            this.UA & Oa.AF && (a |= ma.my);
            this.Oc = new ma(this.ta.h,
                a);
            this.He = "Group";
            this.nm = "Item";
            this.ue = 0;
            return !1
        },
        zv: function() {
            0 < this.ue && (this.ue--, 0 == this.ue && this.Oc.op());
            return 0
        },
        Yu: function() {
            this.Oc.op()
        },
        action: function(a, b) {
            switch (a) {
                case 0:
                    this.AG(b);
                    break;
                case 1:
                    this.BG(b);
                    break;
                case 2:
                    this.FG(b);
                    break;
                case 3:
                    this.yG(b);
                    break;
                case 4:
                    this.TF(b);
                    break;
                case 5:
                    this.CG(b);
                    break;
                case 6:
                    this.zG(b);
                    break;
                case 7:
                    this.HG(b);
                    break;
                case 8:
                    this.GG(b);
                    break;
                case 9:
                    this.EG(b);
                    break;
                case 10:
                    this.DG(b);
                    break;
                case 11:
                    this.SE(b);
                    break;
                case 12:
                    this.RE(b);
                    break;
                case 13:
                    this.QE(b)
            }
        },
        AG: function(a) {
            this.He = a.xd(this.ta, 0)
        },
        BG: function(a) {
            this.nm = a.xd(this.ta, 0)
        },
        FG: function(a) {
            a = a.jr(this.ta, 0).toString();
            this.Oc.Al(this.He, this.nm, a, this.Ac);
            this.ue = 10
        },
        yG: function(a) {
            a = a.rv(this.ta, 0);
            this.Oc.Al(this.He, "pos." + a.Bb.qj, a.w.toString() + "," + a.u.toString(), this.Ac);
            this.ue = 10
        },
        TF: function(a) {
            a = a.rv(this.ta, 0);
            var b = this.Oc.zk(this.He, "pos." + a.Bb.qj, "X", this.Ac);
            if ("X" != b) {
                var c = b.indexOf(","),
                    d = b.substring(c + 1);
                a.w = parseInt(b.substring(0, c), 10);
                isNaN(a.w) && (a.w = 0);
                a.u = parseInt(d,
                    10);
                isNaN(a.u) && (a.u = 0);
                a.b.M = !0;
                a.b.Xa = !0
            }
        },
        CG: function(a) {
            a = a.xd(this.ta, 0);
            this.Oc.Al(this.He, this.nm, a, this.Ac);
            this.ue = 10
        },
        zG: function(a) {
            this.Ac = p.tC(a.xd(this.ta, 0))
        },
        HG: function(a) {
            var b = a.xd(this.ta, 0);
            a = a.jr(this.ta, 1).toString();
            this.Oc.Al(this.He, b, a, this.Ac);
            this.ue = 10
        },
        GG: function(a) {
            var b = a.xd(this.ta, 0),
                c = a.xd(this.ta, 1);
            a = a.jr(this.ta, 2).toString();
            this.Oc.Al(b, c, a, this.Ac);
            this.ue = 10
        },
        EG: function(a) {
            var b = a.xd(this.ta, 0);
            a = a.xd(this.ta, 1);
            this.Oc.Al(this.He, b, a, this.Ac);
            this.ue =
                10
        },
        DG: function(a) {
            var b = a.xd(this.ta, 0),
                c = a.xd(this.ta, 1);
            a = a.xd(this.ta, 2);
            this.Oc.Al(b, c, a, this.Ac);
            this.ue = 10
        },
        SE: function(a) {
            this.Oc.Rz(this.He, a.xd(this.ta, 0), this.Ac);
            this.ue = 10
        },
        RE: function(a) {
            this.Oc.Rz(a.xd(this.ta, 0), a.xd(this.ta, 1), this.Ac);
            this.ue = 10
        },
        QE: function(a) {
            this.Oc.MH(a.xd(this.ta, 0), this.Ac);
            this.ue = 10
        },
        Yq: function(a) {
            switch (a) {
                case 0:
                    return this.tF();
                case 1:
                    return this.qF();
                case 2:
                    return this.vF();
                case 3:
                    return this.uF();
                case 4:
                    return this.sF();
                case 5:
                    return this.rF()
            }
            return null
        },
        tF: function() {
            var a = this.Oc.zk(this.He, this.nm, "", this.Ac),
                a = parseInt(a, 10);
            isNaN(a) && (a = 0);
            return a
        },
        qF: function() {
            return this.Oc.zk(this.He, this.nm, "", this.Ac)
        },
        vF: function() {
            var a = this.W.hm(),
                a = this.Oc.zk(this.He, a, "", this.Ac),
                a = parseInt(a, 10);
            isNaN(a) && (a = 0);
            return a
        },
        uF: function() {
            var a = this.W.hm(),
                b = this.W.hm(),
                a = this.Oc.zk(a, b, "", this.Ac),
                a = parseInt(a, 10);
            isNaN(a) && (a = 0);
            return a
        },
        sF: function() {
            var a = this.W.hm();
            return this.Oc.zk(this.He, a, "", this.Ac)
        },
        rF: function() {
            var a = this.W.hm(),
                b = this.W.hm();
            return this.Oc.zk(a, b, "", this.Ac)
        }
    });
    ve(A, W)
};
