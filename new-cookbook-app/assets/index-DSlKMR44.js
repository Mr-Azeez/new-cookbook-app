(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) d(f);
  new MutationObserver((f) => {
    for (const m of f)
      if (m.type === "childList")
        for (const x of m.addedNodes)
          x.tagName === "LINK" && x.rel === "modulepreload" && d(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(f) {
    const m = {};
    return (
      f.integrity && (m.integrity = f.integrity),
      f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function d(f) {
    if (f.ep) return;
    f.ep = !0;
    const m = o(f);
    fetch(f.href, m);
  }
})();
function nf(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var fu = { exports: {} },
  Or = {},
  du = { exports: {} },
  te = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cc;
function g1() {
  if (Cc) return te;
  Cc = 1;
  var i = Symbol.for("react.element"),
    a = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    x = Symbol.for("react.context"),
    T = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    C = Symbol.for("react.memo"),
    O = Symbol.for("react.lazy"),
    F = Symbol.iterator;
  function M(y) {
    return y === null || typeof y != "object"
      ? null
      : ((y = (F && y[F]) || y["@@iterator"]),
        typeof y == "function" ? y : null);
  }
  var j = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    D = {};
  function $(y, R, ee) {
    (this.props = y),
      (this.context = R),
      (this.refs = D),
      (this.updater = ee || j);
  }
  ($.prototype.isReactComponent = {}),
    ($.prototype.setState = function (y, R) {
      if (typeof y != "object" && typeof y != "function" && y != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, y, R, "setState");
    }),
    ($.prototype.forceUpdate = function (y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    });
  function I() {}
  I.prototype = $.prototype;
  function V(y, R, ee) {
    (this.props = y),
      (this.context = R),
      (this.refs = D),
      (this.updater = ee || j);
  }
  var b = (V.prototype = new I());
  (b.constructor = V), z(b, $.prototype), (b.isPureReactComponent = !0);
  var re = Array.isArray,
    ce = Object.prototype.hasOwnProperty,
    Ee = { current: null },
    ye = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Me(y, R, ee) {
    var ne,
      oe = {},
      ie = null,
      fe = null;
    if (R != null)
      for (ne in (R.ref !== void 0 && (fe = R.ref),
      R.key !== void 0 && (ie = "" + R.key),
      R))
        ce.call(R, ne) && !ye.hasOwnProperty(ne) && (oe[ne] = R[ne]);
    var ae = arguments.length - 2;
    if (ae === 1) oe.children = ee;
    else if (1 < ae) {
      for (var he = Array(ae), qe = 0; qe < ae; qe++)
        he[qe] = arguments[qe + 2];
      oe.children = he;
    }
    if (y && y.defaultProps)
      for (ne in ((ae = y.defaultProps), ae))
        oe[ne] === void 0 && (oe[ne] = ae[ne]);
    return {
      $$typeof: i,
      type: y,
      key: ie,
      ref: fe,
      props: oe,
      _owner: Ee.current,
    };
  }
  function Se(y, R) {
    return {
      $$typeof: i,
      type: y.type,
      key: R,
      ref: y.ref,
      props: y.props,
      _owner: y._owner,
    };
  }
  function ze(y) {
    return typeof y == "object" && y !== null && y.$$typeof === i;
  }
  function gt(y) {
    var R = { "=": "=0", ":": "=2" };
    return (
      "$" +
      y.replace(/[=:]/g, function (ee) {
        return R[ee];
      })
    );
  }
  var kt = /\/+/g;
  function Je(y, R) {
    return typeof y == "object" && y !== null && y.key != null
      ? gt("" + y.key)
      : R.toString(36);
  }
  function ct(y, R, ee, ne, oe) {
    var ie = typeof y;
    (ie === "undefined" || ie === "boolean") && (y = null);
    var fe = !1;
    if (y === null) fe = !0;
    else
      switch (ie) {
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case i:
            case a:
              fe = !0;
          }
      }
    if (fe)
      return (
        (fe = y),
        (oe = oe(fe)),
        (y = ne === "" ? "." + Je(fe, 0) : ne),
        re(oe)
          ? ((ee = ""),
            y != null && (ee = y.replace(kt, "$&/") + "/"),
            ct(oe, R, ee, "", function (qe) {
              return qe;
            }))
          : oe != null &&
            (ze(oe) &&
              (oe = Se(
                oe,
                ee +
                  (!oe.key || (fe && fe.key === oe.key)
                    ? ""
                    : ("" + oe.key).replace(kt, "$&/") + "/") +
                  y
              )),
            R.push(oe)),
        1
      );
    if (((fe = 0), (ne = ne === "" ? "." : ne + ":"), re(y)))
      for (var ae = 0; ae < y.length; ae++) {
        ie = y[ae];
        var he = ne + Je(ie, ae);
        fe += ct(ie, R, ee, he, oe);
      }
    else if (((he = M(y)), typeof he == "function"))
      for (y = he.call(y), ae = 0; !(ie = y.next()).done; )
        (ie = ie.value),
          (he = ne + Je(ie, ae++)),
          (fe += ct(ie, R, ee, he, oe));
    else if (ie === "object")
      throw (
        ((R = String(y)),
        Error(
          "Objects are not valid as a React child (found: " +
            (R === "[object Object]"
              ? "object with keys {" + Object.keys(y).join(", ") + "}"
              : R) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return fe;
  }
  function wt(y, R, ee) {
    if (y == null) return y;
    var ne = [],
      oe = 0;
    return (
      ct(y, ne, "", "", function (ie) {
        return R.call(ee, ie, oe++);
      }),
      ne
    );
  }
  function Ae(y) {
    if (y._status === -1) {
      var R = y._result;
      (R = R()),
        R.then(
          function (ee) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 1), (y._result = ee));
          },
          function (ee) {
            (y._status === 0 || y._status === -1) &&
              ((y._status = 2), (y._result = ee));
          }
        ),
        y._status === -1 && ((y._status = 0), (y._result = R));
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var xe = { current: null },
    W = { transition: null },
    J = {
      ReactCurrentDispatcher: xe,
      ReactCurrentBatchConfig: W,
      ReactCurrentOwner: Ee,
    };
  function A() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (te.Children = {
      map: wt,
      forEach: function (y, R, ee) {
        wt(
          y,
          function () {
            R.apply(this, arguments);
          },
          ee
        );
      },
      count: function (y) {
        var R = 0;
        return (
          wt(y, function () {
            R++;
          }),
          R
        );
      },
      toArray: function (y) {
        return (
          wt(y, function (R) {
            return R;
          }) || []
        );
      },
      only: function (y) {
        if (!ze(y))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return y;
      },
    }),
    (te.Component = $),
    (te.Fragment = o),
    (te.Profiler = f),
    (te.PureComponent = V),
    (te.StrictMode = d),
    (te.Suspense = w),
    (te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J),
    (te.act = A),
    (te.cloneElement = function (y, R, ee) {
      if (y == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            y +
            "."
        );
      var ne = z({}, y.props),
        oe = y.key,
        ie = y.ref,
        fe = y._owner;
      if (R != null) {
        if (
          (R.ref !== void 0 && ((ie = R.ref), (fe = Ee.current)),
          R.key !== void 0 && (oe = "" + R.key),
          y.type && y.type.defaultProps)
        )
          var ae = y.type.defaultProps;
        for (he in R)
          ce.call(R, he) &&
            !ye.hasOwnProperty(he) &&
            (ne[he] = R[he] === void 0 && ae !== void 0 ? ae[he] : R[he]);
      }
      var he = arguments.length - 2;
      if (he === 1) ne.children = ee;
      else if (1 < he) {
        ae = Array(he);
        for (var qe = 0; qe < he; qe++) ae[qe] = arguments[qe + 2];
        ne.children = ae;
      }
      return {
        $$typeof: i,
        type: y.type,
        key: oe,
        ref: ie,
        props: ne,
        _owner: fe,
      };
    }),
    (te.createContext = function (y) {
      return (
        (y = {
          $$typeof: x,
          _currentValue: y,
          _currentValue2: y,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (y.Provider = { $$typeof: m, _context: y }),
        (y.Consumer = y)
      );
    }),
    (te.createElement = Me),
    (te.createFactory = function (y) {
      var R = Me.bind(null, y);
      return (R.type = y), R;
    }),
    (te.createRef = function () {
      return { current: null };
    }),
    (te.forwardRef = function (y) {
      return { $$typeof: T, render: y };
    }),
    (te.isValidElement = ze),
    (te.lazy = function (y) {
      return { $$typeof: O, _payload: { _status: -1, _result: y }, _init: Ae };
    }),
    (te.memo = function (y, R) {
      return { $$typeof: C, type: y, compare: R === void 0 ? null : R };
    }),
    (te.startTransition = function (y) {
      var R = W.transition;
      W.transition = {};
      try {
        y();
      } finally {
        W.transition = R;
      }
    }),
    (te.unstable_act = A),
    (te.useCallback = function (y, R) {
      return xe.current.useCallback(y, R);
    }),
    (te.useContext = function (y) {
      return xe.current.useContext(y);
    }),
    (te.useDebugValue = function () {}),
    (te.useDeferredValue = function (y) {
      return xe.current.useDeferredValue(y);
    }),
    (te.useEffect = function (y, R) {
      return xe.current.useEffect(y, R);
    }),
    (te.useId = function () {
      return xe.current.useId();
    }),
    (te.useImperativeHandle = function (y, R, ee) {
      return xe.current.useImperativeHandle(y, R, ee);
    }),
    (te.useInsertionEffect = function (y, R) {
      return xe.current.useInsertionEffect(y, R);
    }),
    (te.useLayoutEffect = function (y, R) {
      return xe.current.useLayoutEffect(y, R);
    }),
    (te.useMemo = function (y, R) {
      return xe.current.useMemo(y, R);
    }),
    (te.useReducer = function (y, R, ee) {
      return xe.current.useReducer(y, R, ee);
    }),
    (te.useRef = function (y) {
      return xe.current.useRef(y);
    }),
    (te.useState = function (y) {
      return xe.current.useState(y);
    }),
    (te.useSyncExternalStore = function (y, R, ee) {
      return xe.current.useSyncExternalStore(y, R, ee);
    }),
    (te.useTransition = function () {
      return xe.current.useTransition();
    }),
    (te.version = "18.3.1"),
    te
  );
}
var Lc;
function xu() {
  return Lc || ((Lc = 1), (du.exports = g1())), du.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tc;
function k1() {
  if (Tc) return Or;
  Tc = 1;
  var i = xu(),
    a = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    d = Object.prototype.hasOwnProperty,
    f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(T, w, C) {
    var O,
      F = {},
      M = null,
      j = null;
    C !== void 0 && (M = "" + C),
      w.key !== void 0 && (M = "" + w.key),
      w.ref !== void 0 && (j = w.ref);
    for (O in w) d.call(w, O) && !m.hasOwnProperty(O) && (F[O] = w[O]);
    if (T && T.defaultProps)
      for (O in ((w = T.defaultProps), w)) F[O] === void 0 && (F[O] = w[O]);
    return {
      $$typeof: a,
      type: T,
      key: M,
      ref: j,
      props: F,
      _owner: f.current,
    };
  }
  return (Or.Fragment = o), (Or.jsx = x), (Or.jsxs = x), Or;
}
var Mc;
function w1() {
  return Mc || ((Mc = 1), (fu.exports = k1())), fu.exports;
}
var L = w1(),
  S = xu();
const s = nf(S);
var ql = {},
  pu = { exports: {} },
  Ge = {},
  mu = { exports: {} },
  hu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pc;
function E1() {
  return (
    Pc ||
      ((Pc = 1),
      (function (i) {
        function a(W, J) {
          var A = W.length;
          W.push(J);
          e: for (; 0 < A; ) {
            var y = (A - 1) >>> 1,
              R = W[y];
            if (0 < f(R, J)) (W[y] = J), (W[A] = R), (A = y);
            else break e;
          }
        }
        function o(W) {
          return W.length === 0 ? null : W[0];
        }
        function d(W) {
          if (W.length === 0) return null;
          var J = W[0],
            A = W.pop();
          if (A !== J) {
            W[0] = A;
            e: for (var y = 0, R = W.length, ee = R >>> 1; y < ee; ) {
              var ne = 2 * (y + 1) - 1,
                oe = W[ne],
                ie = ne + 1,
                fe = W[ie];
              if (0 > f(oe, A))
                ie < R && 0 > f(fe, oe)
                  ? ((W[y] = fe), (W[ie] = A), (y = ie))
                  : ((W[y] = oe), (W[ne] = A), (y = ne));
              else if (ie < R && 0 > f(fe, A))
                (W[y] = fe), (W[ie] = A), (y = ie);
              else break e;
            }
          }
          return J;
        }
        function f(W, J) {
          var A = W.sortIndex - J.sortIndex;
          return A !== 0 ? A : W.id - J.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          i.unstable_now = function () {
            return m.now();
          };
        } else {
          var x = Date,
            T = x.now();
          i.unstable_now = function () {
            return x.now() - T;
          };
        }
        var w = [],
          C = [],
          O = 1,
          F = null,
          M = 3,
          j = !1,
          z = !1,
          D = !1,
          $ = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          V = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function b(W) {
          for (var J = o(C); J !== null; ) {
            if (J.callback === null) d(C);
            else if (J.startTime <= W)
              d(C), (J.sortIndex = J.expirationTime), a(w, J);
            else break;
            J = o(C);
          }
        }
        function re(W) {
          if (((D = !1), b(W), !z))
            if (o(w) !== null) (z = !0), Ae(ce);
            else {
              var J = o(C);
              J !== null && xe(re, J.startTime - W);
            }
        }
        function ce(W, J) {
          (z = !1), D && ((D = !1), I(Me), (Me = -1)), (j = !0);
          var A = M;
          try {
            for (
              b(J), F = o(w);
              F !== null && (!(F.expirationTime > J) || (W && !gt()));

            ) {
              var y = F.callback;
              if (typeof y == "function") {
                (F.callback = null), (M = F.priorityLevel);
                var R = y(F.expirationTime <= J);
                (J = i.unstable_now()),
                  typeof R == "function"
                    ? (F.callback = R)
                    : F === o(w) && d(w),
                  b(J);
              } else d(w);
              F = o(w);
            }
            if (F !== null) var ee = !0;
            else {
              var ne = o(C);
              ne !== null && xe(re, ne.startTime - J), (ee = !1);
            }
            return ee;
          } finally {
            (F = null), (M = A), (j = !1);
          }
        }
        var Ee = !1,
          ye = null,
          Me = -1,
          Se = 5,
          ze = -1;
        function gt() {
          return !(i.unstable_now() - ze < Se);
        }
        function kt() {
          if (ye !== null) {
            var W = i.unstable_now();
            ze = W;
            var J = !0;
            try {
              J = ye(!0, W);
            } finally {
              J ? Je() : ((Ee = !1), (ye = null));
            }
          } else Ee = !1;
        }
        var Je;
        if (typeof V == "function")
          Je = function () {
            V(kt);
          };
        else if (typeof MessageChannel < "u") {
          var ct = new MessageChannel(),
            wt = ct.port2;
          (ct.port1.onmessage = kt),
            (Je = function () {
              wt.postMessage(null);
            });
        } else
          Je = function () {
            $(kt, 0);
          };
        function Ae(W) {
          (ye = W), Ee || ((Ee = !0), Je());
        }
        function xe(W, J) {
          Me = $(function () {
            W(i.unstable_now());
          }, J);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (W) {
            W.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            z || j || ((z = !0), Ae(ce));
          }),
          (i.unstable_forceFrameRate = function (W) {
            0 > W || 125 < W
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Se = 0 < W ? Math.floor(1e3 / W) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return M;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return o(w);
          }),
          (i.unstable_next = function (W) {
            switch (M) {
              case 1:
              case 2:
              case 3:
                var J = 3;
                break;
              default:
                J = M;
            }
            var A = M;
            M = J;
            try {
              return W();
            } finally {
              M = A;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (W, J) {
            switch (W) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                W = 3;
            }
            var A = M;
            M = W;
            try {
              return J();
            } finally {
              M = A;
            }
          }),
          (i.unstable_scheduleCallback = function (W, J, A) {
            var y = i.unstable_now();
            switch (
              (typeof A == "object" && A !== null
                ? ((A = A.delay),
                  (A = typeof A == "number" && 0 < A ? y + A : y))
                : (A = y),
              W)
            ) {
              case 1:
                var R = -1;
                break;
              case 2:
                R = 250;
                break;
              case 5:
                R = 1073741823;
                break;
              case 4:
                R = 1e4;
                break;
              default:
                R = 5e3;
            }
            return (
              (R = A + R),
              (W = {
                id: O++,
                callback: J,
                priorityLevel: W,
                startTime: A,
                expirationTime: R,
                sortIndex: -1,
              }),
              A > y
                ? ((W.sortIndex = A),
                  a(C, W),
                  o(w) === null &&
                    W === o(C) &&
                    (D ? (I(Me), (Me = -1)) : (D = !0), xe(re, A - y)))
                : ((W.sortIndex = R), a(w, W), z || j || ((z = !0), Ae(ce))),
              W
            );
          }),
          (i.unstable_shouldYield = gt),
          (i.unstable_wrapCallback = function (W) {
            var J = M;
            return function () {
              var A = M;
              M = J;
              try {
                return W.apply(this, arguments);
              } finally {
                M = A;
              }
            };
          });
      })(hu)),
    hu
  );
}
var Rc;
function S1() {
  return Rc || ((Rc = 1), (mu.exports = E1())), mu.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nc;
function x1() {
  if (Nc) return Ge;
  Nc = 1;
  var i = xu(),
    a = S1();
  function o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var d = new Set(),
    f = {};
  function m(e, t) {
    x(e, t), x(e + "Capture", t);
  }
  function x(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var T = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    w = Object.prototype.hasOwnProperty,
    C =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    O = {},
    F = {};
  function M(e) {
    return w.call(F, e)
      ? !0
      : w.call(O, e)
      ? !1
      : C.test(e)
      ? (F[e] = !0)
      : ((O[e] = !0), !1);
  }
  function j(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function z(e, t, n, r) {
    if (t === null || typeof t > "u" || j(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function D(e, t, n, r, l, u, c) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = u),
      (this.removeEmptyString = c);
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      $[e] = new D(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      $[t] = new D(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      $[e] = new D(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      $[e] = new D(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        $[e] = new D(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      $[e] = new D(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      $[e] = new D(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      $[e] = new D(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      $[e] = new D(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var I = /[\-:]([a-z])/g;
  function V(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, V);
      $[t] = new D(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, V);
        $[t] = new D(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, V);
      $[t] = new D(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      $[e] = new D(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    ($.xlinkHref = new D(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      $[e] = new D(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function b(e, t, n, r) {
    var l = $.hasOwnProperty(t) ? $[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (z(t, n, l, r) && (n = null),
      r || l === null
        ? M(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var re = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ce = Symbol.for("react.element"),
    Ee = Symbol.for("react.portal"),
    ye = Symbol.for("react.fragment"),
    Me = Symbol.for("react.strict_mode"),
    Se = Symbol.for("react.profiler"),
    ze = Symbol.for("react.provider"),
    gt = Symbol.for("react.context"),
    kt = Symbol.for("react.forward_ref"),
    Je = Symbol.for("react.suspense"),
    ct = Symbol.for("react.suspense_list"),
    wt = Symbol.for("react.memo"),
    Ae = Symbol.for("react.lazy"),
    xe = Symbol.for("react.offscreen"),
    W = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (W && e[W]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var A = Object.assign,
    y;
  function R(e) {
    if (y === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        y = (t && t[1]) || "";
      }
    return (
      `
` +
      y +
      e
    );
  }
  var ee = !1;
  function ne(e, t) {
    if (!e || ee) return "";
    ee = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (E) {
            var r = E;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (E) {
            r = E;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (E) {
          r = E;
        }
        e();
      }
    } catch (E) {
      if (E && r && typeof E.stack == "string") {
        for (
          var l = E.stack.split(`
`),
            u = r.stack.split(`
`),
            c = l.length - 1,
            p = u.length - 1;
          1 <= c && 0 <= p && l[c] !== u[p];

        )
          p--;
        for (; 1 <= c && 0 <= p; c--, p--)
          if (l[c] !== u[p]) {
            if (c !== 1 || p !== 1)
              do
                if ((c--, p--, 0 > p || l[c] !== u[p])) {
                  var h =
                    `
` + l[c].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      h.includes("<anonymous>") &&
                      (h = h.replace("<anonymous>", e.displayName)),
                    h
                  );
                }
              while (1 <= c && 0 <= p);
            break;
          }
      }
    } finally {
      (ee = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? R(e) : "";
  }
  function oe(e) {
    switch (e.tag) {
      case 5:
        return R(e.type);
      case 16:
        return R("Lazy");
      case 13:
        return R("Suspense");
      case 19:
        return R("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ne(e.type, !1)), e;
      case 11:
        return (e = ne(e.type.render, !1)), e;
      case 1:
        return (e = ne(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ie(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ye:
        return "Fragment";
      case Ee:
        return "Portal";
      case Se:
        return "Profiler";
      case Me:
        return "StrictMode";
      case Je:
        return "Suspense";
      case ct:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case gt:
          return (e.displayName || "Context") + ".Consumer";
        case ze:
          return (e._context.displayName || "Context") + ".Provider";
        case kt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case wt:
          return (
            (t = e.displayName || null), t !== null ? t : ie(e.type) || "Memo"
          );
        case Ae:
          (t = e._payload), (e = e._init);
          try {
            return ie(e(t));
          } catch {}
      }
    return null;
  }
  function fe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ie(t);
      case 8:
        return t === Me ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ae(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function he(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function qe(e) {
    var t = he(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        u = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (c) {
            (r = "" + c), u.call(this, c);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (c) {
            r = "" + c;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Vr(e) {
    e._valueTracker || (e._valueTracker = qe(e));
  }
  function Nu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = he(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Ur(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function go(e, t) {
    var n = t.checked;
    return A({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function zu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ae(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function _u(e, t) {
    (t = t.checked), t != null && b(e, "checked", t, !1);
  }
  function ko(e, t) {
    _u(e, t);
    var n = ae(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? wo(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && wo(e, t.type, ae(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function ju(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function wo(e, t, n) {
    (t !== "number" || Ur(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Xn = Array.isArray;
  function Sn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ae(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Eo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return A({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Ou(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(o(92));
        if (Xn(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ae(n) };
  }
  function Bu(e, t) {
    var n = ae(t.value),
      r = ae(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Fu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function $u(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function So(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? $u(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ar,
    Du = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ar = Ar || document.createElement("div"),
            Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ar.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Gn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Jn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    xf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Jn).forEach(function (e) {
    xf.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jn[t] = Jn[e]);
    });
  });
  function Iu(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Jn.hasOwnProperty(e) && Jn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Wu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Iu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var Cf = A(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function xo(e, t) {
    if (t) {
      if (Cf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function Co(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Lo = null;
  function To(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Mo = null,
    xn = null,
    Cn = null;
  function Hu(e) {
    if ((e = kr(e))) {
      if (typeof Mo != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = pl(t)), Mo(e.stateNode, e.type, t));
    }
  }
  function Vu(e) {
    xn ? (Cn ? Cn.push(e) : (Cn = [e])) : (xn = e);
  }
  function Uu() {
    if (xn) {
      var e = xn,
        t = Cn;
      if (((Cn = xn = null), Hu(e), t)) for (e = 0; e < t.length; e++) Hu(t[e]);
    }
  }
  function Au(e, t) {
    return e(t);
  }
  function Zu() {}
  var Po = !1;
  function Qu(e, t, n) {
    if (Po) return e(t, n);
    Po = !0;
    try {
      return Au(e, t, n);
    } finally {
      (Po = !1), (xn !== null || Cn !== null) && (Zu(), Uu());
    }
  }
  function qn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = pl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var Ro = !1;
  if (T)
    try {
      var bn = {};
      Object.defineProperty(bn, "passive", {
        get: function () {
          Ro = !0;
        },
      }),
        window.addEventListener("test", bn, bn),
        window.removeEventListener("test", bn, bn);
    } catch {
      Ro = !1;
    }
  function Lf(e, t, n, r, l, u, c, p, h) {
    var E = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, E);
    } catch (N) {
      this.onError(N);
    }
  }
  var er = !1,
    Zr = null,
    Qr = !1,
    No = null,
    Tf = {
      onError: function (e) {
        (er = !0), (Zr = e);
      },
    };
  function Mf(e, t, n, r, l, u, c, p, h) {
    (er = !1), (Zr = null), Lf.apply(Tf, arguments);
  }
  function Pf(e, t, n, r, l, u, c, p, h) {
    if ((Mf.apply(this, arguments), er)) {
      if (er) {
        var E = Zr;
        (er = !1), (Zr = null);
      } else throw Error(o(198));
      Qr || ((Qr = !0), (No = E));
    }
  }
  function an(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ku(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Yu(e) {
    if (an(e) !== e) throw Error(o(188));
  }
  function Rf(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = an(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return Yu(l), e;
          if (u === r) return Yu(l), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) (n = l), (r = u);
      else {
        for (var c = !1, p = l.child; p; ) {
          if (p === n) {
            (c = !0), (n = l), (r = u);
            break;
          }
          if (p === r) {
            (c = !0), (r = l), (n = u);
            break;
          }
          p = p.sibling;
        }
        if (!c) {
          for (p = u.child; p; ) {
            if (p === n) {
              (c = !0), (n = u), (r = l);
              break;
            }
            if (p === r) {
              (c = !0), (r = u), (n = l);
              break;
            }
            p = p.sibling;
          }
          if (!c) throw Error(o(189));
        }
      }
      if (n.alternate !== r) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function Xu(e) {
    return (e = Rf(e)), e !== null ? Gu(e) : null;
  }
  function Gu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Gu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ju = a.unstable_scheduleCallback,
    qu = a.unstable_cancelCallback,
    Nf = a.unstable_shouldYield,
    zf = a.unstable_requestPaint,
    Le = a.unstable_now,
    _f = a.unstable_getCurrentPriorityLevel,
    zo = a.unstable_ImmediatePriority,
    bu = a.unstable_UserBlockingPriority,
    Kr = a.unstable_NormalPriority,
    jf = a.unstable_LowPriority,
    ea = a.unstable_IdlePriority,
    Yr = null,
    Et = null;
  function Of(e) {
    if (Et && typeof Et.onCommitFiberRoot == "function")
      try {
        Et.onCommitFiberRoot(Yr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ft = Math.clz32 ? Math.clz32 : $f,
    Bf = Math.log,
    Ff = Math.LN2;
  function $f(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Bf(e) / Ff) | 0)) | 0;
  }
  var Xr = 64,
    Gr = 4194304;
  function tr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Jr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      c = n & 268435455;
    if (c !== 0) {
      var p = c & ~l;
      p !== 0 ? (r = tr(p)) : ((u &= c), u !== 0 && (r = tr(u)));
    } else (c = n & ~l), c !== 0 ? (r = tr(c)) : u !== 0 && (r = tr(u));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ft(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Df(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function If(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var c = 31 - ft(u),
        p = 1 << c,
        h = l[c];
      h === -1
        ? (!(p & n) || p & r) && (l[c] = Df(p, t))
        : h <= t && (e.expiredLanes |= p),
        (u &= ~p);
    }
  }
  function _o(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ta() {
    var e = Xr;
    return (Xr <<= 1), !(Xr & 4194240) && (Xr = 64), e;
  }
  function jo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function nr(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ft(t)),
      (e[t] = n);
  }
  function Wf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ft(n),
        u = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~u);
    }
  }
  function Oo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ft(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var se = 0;
  function na(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var ra,
    Bo,
    la,
    oa,
    ia,
    Fo = !1,
    qr = [],
    Dt = null,
    It = null,
    Wt = null,
    rr = new Map(),
    lr = new Map(),
    Ht = [],
    Hf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function ua(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dt = null;
        break;
      case "dragenter":
      case "dragleave":
        It = null;
        break;
      case "mouseover":
      case "mouseout":
        Wt = null;
        break;
      case "pointerover":
      case "pointerout":
        rr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        lr.delete(t.pointerId);
    }
  }
  function or(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        t !== null && ((t = kr(t)), t !== null && Bo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Vf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Dt = or(Dt, e, t, n, r, l)), !0;
      case "dragenter":
        return (It = or(It, e, t, n, r, l)), !0;
      case "mouseover":
        return (Wt = or(Wt, e, t, n, r, l)), !0;
      case "pointerover":
        var u = l.pointerId;
        return rr.set(u, or(rr.get(u) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (u = l.pointerId), lr.set(u, or(lr.get(u) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function aa(e) {
    var t = sn(e.target);
    if (t !== null) {
      var n = an(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ku(n)), t !== null)) {
            (e.blockedOn = t),
              ia(e.priority, function () {
                la(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function br(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Do(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Lo = r), n.target.dispatchEvent(r), (Lo = null);
      } else return (t = kr(n)), t !== null && Bo(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function sa(e, t, n) {
    br(e) && n.delete(t);
  }
  function Uf() {
    (Fo = !1),
      Dt !== null && br(Dt) && (Dt = null),
      It !== null && br(It) && (It = null),
      Wt !== null && br(Wt) && (Wt = null),
      rr.forEach(sa),
      lr.forEach(sa);
  }
  function ir(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Fo ||
        ((Fo = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, Uf)));
  }
  function ur(e) {
    function t(l) {
      return ir(l, e);
    }
    if (0 < qr.length) {
      ir(qr[0], e);
      for (var n = 1; n < qr.length; n++) {
        var r = qr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Dt !== null && ir(Dt, e),
        It !== null && ir(It, e),
        Wt !== null && ir(Wt, e),
        rr.forEach(t),
        lr.forEach(t),
        n = 0;
      n < Ht.length;
      n++
    )
      (r = Ht[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ht.length && ((n = Ht[0]), n.blockedOn === null); )
      aa(n), n.blockedOn === null && Ht.shift();
  }
  var Ln = re.ReactCurrentBatchConfig,
    el = !0;
  function Af(e, t, n, r) {
    var l = se,
      u = Ln.transition;
    Ln.transition = null;
    try {
      (se = 1), $o(e, t, n, r);
    } finally {
      (se = l), (Ln.transition = u);
    }
  }
  function Zf(e, t, n, r) {
    var l = se,
      u = Ln.transition;
    Ln.transition = null;
    try {
      (se = 4), $o(e, t, n, r);
    } finally {
      (se = l), (Ln.transition = u);
    }
  }
  function $o(e, t, n, r) {
    if (el) {
      var l = Do(e, t, n, r);
      if (l === null) ti(e, t, r, tl, n), ua(e, r);
      else if (Vf(l, e, t, n, r)) r.stopPropagation();
      else if ((ua(e, r), t & 4 && -1 < Hf.indexOf(e))) {
        for (; l !== null; ) {
          var u = kr(l);
          if (
            (u !== null && ra(u),
            (u = Do(e, t, n, r)),
            u === null && ti(e, t, r, tl, n),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else ti(e, t, r, null, n);
    }
  }
  var tl = null;
  function Do(e, t, n, r) {
    if (((tl = null), (e = To(r)), (e = sn(e)), e !== null))
      if (((t = an(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ku(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (tl = e), null;
  }
  function ca(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (_f()) {
          case zo:
            return 1;
          case bu:
            return 4;
          case Kr:
          case jf:
            return 16;
          case ea:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Vt = null,
    Io = null,
    nl = null;
  function fa() {
    if (nl) return nl;
    var e,
      t = Io,
      n = t.length,
      r,
      l = "value" in Vt ? Vt.value : Vt.textContent,
      u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var c = n - e;
    for (r = 1; r <= c && t[n - r] === l[u - r]; r++);
    return (nl = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function rl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ll() {
    return !0;
  }
  function da() {
    return !1;
  }
  function be(e) {
    function t(n, r, l, u, c) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = c),
        (this.currentTarget = null);
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(u) : u[p]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? ll
          : da),
        (this.isPropagationStopped = da),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ll));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ll));
        },
        persist: function () {},
        isPersistent: ll,
      }),
      t
    );
  }
  var Tn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wo = be(Tn),
    ar = A({}, Tn, { view: 0, detail: 0 }),
    Qf = be(ar),
    Ho,
    Vo,
    sr,
    ol = A({}, ar, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ao,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== sr &&
              (sr && e.type === "mousemove"
                ? ((Ho = e.screenX - sr.screenX), (Vo = e.screenY - sr.screenY))
                : (Vo = Ho = 0),
              (sr = e)),
            Ho);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Vo;
      },
    }),
    pa = be(ol),
    Kf = A({}, ol, { dataTransfer: 0 }),
    Yf = be(Kf),
    Xf = A({}, ar, { relatedTarget: 0 }),
    Uo = be(Xf),
    Gf = A({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jf = be(Gf),
    qf = A({}, Tn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    bf = be(qf),
    ed = A({}, Tn, { data: 0 }),
    ma = be(ed),
    td = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    rd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ld(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = rd[e])
      ? !!t[e]
      : !1;
  }
  function Ao() {
    return ld;
  }
  var od = A({}, ar, {
      key: function (e) {
        if (e.key) {
          var t = td[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = rl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? nd[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ao,
      charCode: function (e) {
        return e.type === "keypress" ? rl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? rl(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    id = be(od),
    ud = A({}, ol, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ha = be(ud),
    ad = A({}, ar, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ao,
    }),
    sd = be(ad),
    cd = A({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fd = be(cd),
    dd = A({}, ol, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    pd = be(dd),
    md = [9, 13, 27, 32],
    Zo = T && "CompositionEvent" in window,
    cr = null;
  T && "documentMode" in document && (cr = document.documentMode);
  var hd = T && "TextEvent" in window && !cr,
    va = T && (!Zo || (cr && 8 < cr && 11 >= cr)),
    ya = " ",
    ga = !1;
  function ka(e, t) {
    switch (e) {
      case "keyup":
        return md.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wa(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Mn = !1;
  function vd(e, t) {
    switch (e) {
      case "compositionend":
        return wa(t);
      case "keypress":
        return t.which !== 32 ? null : ((ga = !0), ya);
      case "textInput":
        return (e = t.data), e === ya && ga ? null : e;
      default:
        return null;
    }
  }
  function yd(e, t) {
    if (Mn)
      return e === "compositionend" || (!Zo && ka(e, t))
        ? ((e = fa()), (nl = Io = Vt = null), (Mn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return va && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var gd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ea(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gd[e.type] : t === "textarea";
  }
  function Sa(e, t, n, r) {
    Vu(r),
      (t = cl(t, "onChange")),
      0 < t.length &&
        ((n = new Wo("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var fr = null,
    dr = null;
  function kd(e) {
    Wa(e, 0);
  }
  function il(e) {
    var t = _n(e);
    if (Nu(t)) return e;
  }
  function wd(e, t) {
    if (e === "change") return t;
  }
  var xa = !1;
  if (T) {
    var Qo;
    if (T) {
      var Ko = "oninput" in document;
      if (!Ko) {
        var Ca = document.createElement("div");
        Ca.setAttribute("oninput", "return;"),
          (Ko = typeof Ca.oninput == "function");
      }
      Qo = Ko;
    } else Qo = !1;
    xa = Qo && (!document.documentMode || 9 < document.documentMode);
  }
  function La() {
    fr && (fr.detachEvent("onpropertychange", Ta), (dr = fr = null));
  }
  function Ta(e) {
    if (e.propertyName === "value" && il(dr)) {
      var t = [];
      Sa(t, dr, e, To(e)), Qu(kd, t);
    }
  }
  function Ed(e, t, n) {
    e === "focusin"
      ? (La(), (fr = t), (dr = n), fr.attachEvent("onpropertychange", Ta))
      : e === "focusout" && La();
  }
  function Sd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return il(dr);
  }
  function xd(e, t) {
    if (e === "click") return il(t);
  }
  function Cd(e, t) {
    if (e === "input" || e === "change") return il(t);
  }
  function Ld(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var dt = typeof Object.is == "function" ? Object.is : Ld;
  function pr(e, t) {
    if (dt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!w.call(t, l) || !dt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Ma(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Pa(e, t) {
    var n = Ma(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Ma(n);
    }
  }
  function Ra(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ra(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Na() {
    for (var e = window, t = Ur(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ur(e.document);
    }
    return t;
  }
  function Yo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Td(e) {
    var t = Na(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Ra(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Yo(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            u = Math.min(r.start, l);
          (r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = Pa(n, u));
          var c = Pa(n, r);
          l &&
            c &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== c.node ||
              e.focusOffset !== c.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(t), e.extend(c.node, c.offset))
              : (t.setEnd(c.node, c.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Md = T && "documentMode" in document && 11 >= document.documentMode,
    Pn = null,
    Xo = null,
    mr = null,
    Go = !1;
  function za(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Go ||
      Pn == null ||
      Pn !== Ur(r) ||
      ((r = Pn),
      "selectionStart" in r && Yo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (mr && pr(mr, r)) ||
        ((mr = r),
        (r = cl(Xo, "onSelect")),
        0 < r.length &&
          ((t = new Wo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Pn))));
  }
  function ul(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Rn = {
      animationend: ul("Animation", "AnimationEnd"),
      animationiteration: ul("Animation", "AnimationIteration"),
      animationstart: ul("Animation", "AnimationStart"),
      transitionend: ul("Transition", "TransitionEnd"),
    },
    Jo = {},
    _a = {};
  T &&
    ((_a = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Rn.animationend.animation,
      delete Rn.animationiteration.animation,
      delete Rn.animationstart.animation),
    "TransitionEvent" in window || delete Rn.transitionend.transition);
  function al(e) {
    if (Jo[e]) return Jo[e];
    if (!Rn[e]) return e;
    var t = Rn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in _a) return (Jo[e] = t[n]);
    return e;
  }
  var ja = al("animationend"),
    Oa = al("animationiteration"),
    Ba = al("animationstart"),
    Fa = al("transitionend"),
    $a = new Map(),
    Da =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Ut(e, t) {
    $a.set(e, t), m(t, [e]);
  }
  for (var qo = 0; qo < Da.length; qo++) {
    var bo = Da[qo],
      Pd = bo.toLowerCase(),
      Rd = bo[0].toUpperCase() + bo.slice(1);
    Ut(Pd, "on" + Rd);
  }
  Ut(ja, "onAnimationEnd"),
    Ut(Oa, "onAnimationIteration"),
    Ut(Ba, "onAnimationStart"),
    Ut("dblclick", "onDoubleClick"),
    Ut("focusin", "onFocus"),
    Ut("focusout", "onBlur"),
    Ut(Fa, "onTransitionEnd"),
    x("onMouseEnter", ["mouseout", "mouseover"]),
    x("onMouseLeave", ["mouseout", "mouseover"]),
    x("onPointerEnter", ["pointerout", "pointerover"]),
    x("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var hr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Nd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(hr)
    );
  function Ia(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Pf(r, t, void 0, e), (e.currentTarget = null);
  }
  function Wa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var c = r.length - 1; 0 <= c; c--) {
            var p = r[c],
              h = p.instance,
              E = p.currentTarget;
            if (((p = p.listener), h !== u && l.isPropagationStopped()))
              break e;
            Ia(l, p, E), (u = h);
          }
        else
          for (c = 0; c < r.length; c++) {
            if (
              ((p = r[c]),
              (h = p.instance),
              (E = p.currentTarget),
              (p = p.listener),
              h !== u && l.isPropagationStopped())
            )
              break e;
            Ia(l, p, E), (u = h);
          }
      }
    }
    if (Qr) throw ((e = No), (Qr = !1), (No = null), e);
  }
  function pe(e, t) {
    var n = t[ui];
    n === void 0 && (n = t[ui] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ha(t, e, 2, !1), n.add(r));
  }
  function ei(e, t, n) {
    var r = 0;
    t && (r |= 4), Ha(n, e, r, t);
  }
  var sl = "_reactListening" + Math.random().toString(36).slice(2);
  function vr(e) {
    if (!e[sl]) {
      (e[sl] = !0),
        d.forEach(function (n) {
          n !== "selectionchange" && (Nd.has(n) || ei(n, !1, e), ei(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[sl] || ((t[sl] = !0), ei("selectionchange", !1, t));
    }
  }
  function Ha(e, t, n, r) {
    switch (ca(t)) {
      case 1:
        var l = Af;
        break;
      case 4:
        l = Zf;
        break;
      default:
        l = $o;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !Ro ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function ti(e, t, n, r, l) {
    var u = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var c = r.tag;
        if (c === 3 || c === 4) {
          var p = r.stateNode.containerInfo;
          if (p === l || (p.nodeType === 8 && p.parentNode === l)) break;
          if (c === 4)
            for (c = r.return; c !== null; ) {
              var h = c.tag;
              if (
                (h === 3 || h === 4) &&
                ((h = c.stateNode.containerInfo),
                h === l || (h.nodeType === 8 && h.parentNode === l))
              )
                return;
              c = c.return;
            }
          for (; p !== null; ) {
            if (((c = sn(p)), c === null)) return;
            if (((h = c.tag), h === 5 || h === 6)) {
              r = u = c;
              continue e;
            }
            p = p.parentNode;
          }
        }
        r = r.return;
      }
    Qu(function () {
      var E = u,
        N = To(n),
        _ = [];
      e: {
        var P = $a.get(e);
        if (P !== void 0) {
          var H = Wo,
            Q = e;
          switch (e) {
            case "keypress":
              if (rl(n) === 0) break e;
            case "keydown":
            case "keyup":
              H = id;
              break;
            case "focusin":
              (Q = "focus"), (H = Uo);
              break;
            case "focusout":
              (Q = "blur"), (H = Uo);
              break;
            case "beforeblur":
            case "afterblur":
              H = Uo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = pa;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Yf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = sd;
              break;
            case ja:
            case Oa:
            case Ba:
              H = Jf;
              break;
            case Fa:
              H = fd;
              break;
            case "scroll":
              H = Qf;
              break;
            case "wheel":
              H = pd;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = bf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = ha;
          }
          var K = (t & 4) !== 0,
            Te = !K && e === "scroll",
            g = K ? (P !== null ? P + "Capture" : null) : P;
          K = [];
          for (var v = E, k; v !== null; ) {
            k = v;
            var B = k.stateNode;
            if (
              (k.tag === 5 &&
                B !== null &&
                ((k = B),
                g !== null &&
                  ((B = qn(v, g)), B != null && K.push(yr(v, B, k)))),
              Te)
            )
              break;
            v = v.return;
          }
          0 < K.length &&
            ((P = new H(P, Q, null, n, N)), _.push({ event: P, listeners: K }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((P = e === "mouseover" || e === "pointerover"),
            (H = e === "mouseout" || e === "pointerout"),
            P &&
              n !== Lo &&
              (Q = n.relatedTarget || n.fromElement) &&
              (sn(Q) || Q[Rt]))
          )
            break e;
          if (
            (H || P) &&
            ((P =
              N.window === N
                ? N
                : (P = N.ownerDocument)
                ? P.defaultView || P.parentWindow
                : window),
            H
              ? ((Q = n.relatedTarget || n.toElement),
                (H = E),
                (Q = Q ? sn(Q) : null),
                Q !== null &&
                  ((Te = an(Q)), Q !== Te || (Q.tag !== 5 && Q.tag !== 6)) &&
                  (Q = null))
              : ((H = null), (Q = E)),
            H !== Q)
          ) {
            if (
              ((K = pa),
              (B = "onMouseLeave"),
              (g = "onMouseEnter"),
              (v = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((K = ha),
                (B = "onPointerLeave"),
                (g = "onPointerEnter"),
                (v = "pointer")),
              (Te = H == null ? P : _n(H)),
              (k = Q == null ? P : _n(Q)),
              (P = new K(B, v + "leave", H, n, N)),
              (P.target = Te),
              (P.relatedTarget = k),
              (B = null),
              sn(N) === E &&
                ((K = new K(g, v + "enter", Q, n, N)),
                (K.target = k),
                (K.relatedTarget = Te),
                (B = K)),
              (Te = B),
              H && Q)
            )
              t: {
                for (K = H, g = Q, v = 0, k = K; k; k = Nn(k)) v++;
                for (k = 0, B = g; B; B = Nn(B)) k++;
                for (; 0 < v - k; ) (K = Nn(K)), v--;
                for (; 0 < k - v; ) (g = Nn(g)), k--;
                for (; v--; ) {
                  if (K === g || (g !== null && K === g.alternate)) break t;
                  (K = Nn(K)), (g = Nn(g));
                }
                K = null;
              }
            else K = null;
            H !== null && Va(_, P, H, K, !1),
              Q !== null && Te !== null && Va(_, Te, Q, K, !0);
          }
        }
        e: {
          if (
            ((P = E ? _n(E) : window),
            (H = P.nodeName && P.nodeName.toLowerCase()),
            H === "select" || (H === "input" && P.type === "file"))
          )
            var Y = wd;
          else if (Ea(P))
            if (xa) Y = Cd;
            else {
              Y = Sd;
              var X = Ed;
            }
          else
            (H = P.nodeName) &&
              H.toLowerCase() === "input" &&
              (P.type === "checkbox" || P.type === "radio") &&
              (Y = xd);
          if (Y && (Y = Y(e, E))) {
            Sa(_, Y, n, N);
            break e;
          }
          X && X(e, P, E),
            e === "focusout" &&
              (X = P._wrapperState) &&
              X.controlled &&
              P.type === "number" &&
              wo(P, "number", P.value);
        }
        switch (((X = E ? _n(E) : window), e)) {
          case "focusin":
            (Ea(X) || X.contentEditable === "true") &&
              ((Pn = X), (Xo = E), (mr = null));
            break;
          case "focusout":
            mr = Xo = Pn = null;
            break;
          case "mousedown":
            Go = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Go = !1), za(_, n, N);
            break;
          case "selectionchange":
            if (Md) break;
          case "keydown":
          case "keyup":
            za(_, n, N);
        }
        var G;
        if (Zo)
          e: {
            switch (e) {
              case "compositionstart":
                var q = "onCompositionStart";
                break e;
              case "compositionend":
                q = "onCompositionEnd";
                break e;
              case "compositionupdate":
                q = "onCompositionUpdate";
                break e;
            }
            q = void 0;
          }
        else
          Mn
            ? ka(e, n) && (q = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (q = "onCompositionStart");
        q &&
          (va &&
            n.locale !== "ko" &&
            (Mn || q !== "onCompositionStart"
              ? q === "onCompositionEnd" && Mn && (G = fa())
              : ((Vt = N),
                (Io = "value" in Vt ? Vt.value : Vt.textContent),
                (Mn = !0))),
          (X = cl(E, q)),
          0 < X.length &&
            ((q = new ma(q, e, null, n, N)),
            _.push({ event: q, listeners: X }),
            G ? (q.data = G) : ((G = wa(n)), G !== null && (q.data = G)))),
          (G = hd ? vd(e, n) : yd(e, n)) &&
            ((E = cl(E, "onBeforeInput")),
            0 < E.length &&
              ((N = new ma("onBeforeInput", "beforeinput", null, n, N)),
              _.push({ event: N, listeners: E }),
              (N.data = G)));
      }
      Wa(_, t);
    });
  }
  function yr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function cl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = qn(e, n)),
        u != null && r.unshift(yr(e, u, l)),
        (u = qn(e, t)),
        u != null && r.push(yr(e, u, l))),
        (e = e.return);
    }
    return r;
  }
  function Nn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Va(e, t, n, r, l) {
    for (var u = t._reactName, c = []; n !== null && n !== r; ) {
      var p = n,
        h = p.alternate,
        E = p.stateNode;
      if (h !== null && h === r) break;
      p.tag === 5 &&
        E !== null &&
        ((p = E),
        l
          ? ((h = qn(n, u)), h != null && c.unshift(yr(n, h, p)))
          : l || ((h = qn(n, u)), h != null && c.push(yr(n, h, p)))),
        (n = n.return);
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var zd = /\r\n?/g,
    _d = /\u0000|\uFFFD/g;
  function Ua(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        zd,
        `
`
      )
      .replace(_d, "");
  }
  function fl(e, t, n) {
    if (((t = Ua(t)), Ua(e) !== t && n)) throw Error(o(425));
  }
  function dl() {}
  var ni = null,
    ri = null;
  function li(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var oi = typeof setTimeout == "function" ? setTimeout : void 0,
    jd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Aa = typeof Promise == "function" ? Promise : void 0,
    Od =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Aa < "u"
        ? function (e) {
            return Aa.resolve(null).then(e).catch(Bd);
          }
        : oi;
  function Bd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ii(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), ur(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    ur(t);
  }
  function At(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Za(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var zn = Math.random().toString(36).slice(2),
    St = "__reactFiber$" + zn,
    gr = "__reactProps$" + zn,
    Rt = "__reactContainer$" + zn,
    ui = "__reactEvents$" + zn,
    Fd = "__reactListeners$" + zn,
    $d = "__reactHandles$" + zn;
  function sn(e) {
    var t = e[St];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Rt] || n[St])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Za(e); e !== null; ) {
            if ((n = e[St])) return n;
            e = Za(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function kr(e) {
    return (
      (e = e[St] || e[Rt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function _n(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function pl(e) {
    return e[gr] || null;
  }
  var ai = [],
    jn = -1;
  function Zt(e) {
    return { current: e };
  }
  function me(e) {
    0 > jn || ((e.current = ai[jn]), (ai[jn] = null), jn--);
  }
  function de(e, t) {
    jn++, (ai[jn] = e.current), (e.current = t);
  }
  var Qt = {},
    $e = Zt(Qt),
    Ze = Zt(!1),
    cn = Qt;
  function On(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Qt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in n) l[u] = t[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Qe(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ml() {
    me(Ze), me($e);
  }
  function Qa(e, t, n) {
    if ($e.current !== Qt) throw Error(o(168));
    de($e, t), de(Ze, n);
  }
  function Ka(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(o(108, fe(e) || "Unknown", l));
    return A({}, n, r);
  }
  function hl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Qt),
      (cn = $e.current),
      de($e, e),
      de(Ze, Ze.current),
      !0
    );
  }
  function Ya(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n
      ? ((e = Ka(e, t, cn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        me(Ze),
        me($e),
        de($e, e))
      : me(Ze),
      de(Ze, n);
  }
  var Nt = null,
    vl = !1,
    si = !1;
  function Xa(e) {
    Nt === null ? (Nt = [e]) : Nt.push(e);
  }
  function Dd(e) {
    (vl = !0), Xa(e);
  }
  function Kt() {
    if (!si && Nt !== null) {
      si = !0;
      var e = 0,
        t = se;
      try {
        var n = Nt;
        for (se = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Nt = null), (vl = !1);
      } catch (l) {
        throw (Nt !== null && (Nt = Nt.slice(e + 1)), Ju(zo, Kt), l);
      } finally {
        (se = t), (si = !1);
      }
    }
    return null;
  }
  var Bn = [],
    Fn = 0,
    yl = null,
    gl = 0,
    lt = [],
    ot = 0,
    fn = null,
    zt = 1,
    _t = "";
  function dn(e, t) {
    (Bn[Fn++] = gl), (Bn[Fn++] = yl), (yl = e), (gl = t);
  }
  function Ga(e, t, n) {
    (lt[ot++] = zt), (lt[ot++] = _t), (lt[ot++] = fn), (fn = e);
    var r = zt;
    e = _t;
    var l = 32 - ft(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var u = 32 - ft(t) + l;
    if (30 < u) {
      var c = l - (l % 5);
      (u = (r & ((1 << c) - 1)).toString(32)),
        (r >>= c),
        (l -= c),
        (zt = (1 << (32 - ft(t) + l)) | (n << l) | r),
        (_t = u + e);
    } else (zt = (1 << u) | (n << l) | r), (_t = e);
  }
  function ci(e) {
    e.return !== null && (dn(e, 1), Ga(e, 1, 0));
  }
  function fi(e) {
    for (; e === yl; )
      (yl = Bn[--Fn]), (Bn[Fn] = null), (gl = Bn[--Fn]), (Bn[Fn] = null);
    for (; e === fn; )
      (fn = lt[--ot]),
        (lt[ot] = null),
        (_t = lt[--ot]),
        (lt[ot] = null),
        (zt = lt[--ot]),
        (lt[ot] = null);
  }
  var et = null,
    tt = null,
    ve = !1,
    pt = null;
  function Ja(e, t) {
    var n = st(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function qa(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (et = e), (tt = At(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (et = e), (tt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = fn !== null ? { id: zt, overflow: _t } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = st(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (et = e),
              (tt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function di(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function pi(e) {
    if (ve) {
      var t = tt;
      if (t) {
        var n = t;
        if (!qa(e, t)) {
          if (di(e)) throw Error(o(418));
          t = At(n.nextSibling);
          var r = et;
          t && qa(e, t)
            ? Ja(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (et = e));
        }
      } else {
        if (di(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (ve = !1), (et = e);
      }
    }
  }
  function ba(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    et = e;
  }
  function kl(e) {
    if (e !== et) return !1;
    if (!ve) return ba(e), (ve = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !li(e.type, e.memoizedProps))),
      t && (t = tt))
    ) {
      if (di(e)) throw (es(), Error(o(418)));
      for (; t; ) Ja(e, t), (t = At(t.nextSibling));
    }
    if ((ba(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                tt = At(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        tt = null;
      }
    } else tt = et ? At(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    for (var e = tt; e; ) e = At(e.nextSibling);
  }
  function $n() {
    (tt = et = null), (ve = !1);
  }
  function mi(e) {
    pt === null ? (pt = [e]) : pt.push(e);
  }
  var Id = re.ReactCurrentBatchConfig;
  function wr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var l = r,
          u = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === u
          ? t.ref
          : ((t = function (c) {
              var p = l.refs;
              c === null ? delete p[u] : (p[u] = c);
            }),
            (t._stringRef = u),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function wl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function ts(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ns(e) {
    function t(g, v) {
      if (e) {
        var k = g.deletions;
        k === null ? ((g.deletions = [v]), (g.flags |= 16)) : k.push(v);
      }
    }
    function n(g, v) {
      if (!e) return null;
      for (; v !== null; ) t(g, v), (v = v.sibling);
      return null;
    }
    function r(g, v) {
      for (g = new Map(); v !== null; )
        v.key !== null ? g.set(v.key, v) : g.set(v.index, v), (v = v.sibling);
      return g;
    }
    function l(g, v) {
      return (g = tn(g, v)), (g.index = 0), (g.sibling = null), g;
    }
    function u(g, v, k) {
      return (
        (g.index = k),
        e
          ? ((k = g.alternate),
            k !== null
              ? ((k = k.index), k < v ? ((g.flags |= 2), v) : k)
              : ((g.flags |= 2), v))
          : ((g.flags |= 1048576), v)
      );
    }
    function c(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function p(g, v, k, B) {
      return v === null || v.tag !== 6
        ? ((v = ou(k, g.mode, B)), (v.return = g), v)
        : ((v = l(v, k)), (v.return = g), v);
    }
    function h(g, v, k, B) {
      var Y = k.type;
      return Y === ye
        ? N(g, v, k.props.children, B, k.key)
        : v !== null &&
          (v.elementType === Y ||
            (typeof Y == "object" &&
              Y !== null &&
              Y.$$typeof === Ae &&
              ts(Y) === v.type))
        ? ((B = l(v, k.props)), (B.ref = wr(g, v, k)), (B.return = g), B)
        : ((B = Al(k.type, k.key, k.props, null, g.mode, B)),
          (B.ref = wr(g, v, k)),
          (B.return = g),
          B);
    }
    function E(g, v, k, B) {
      return v === null ||
        v.tag !== 4 ||
        v.stateNode.containerInfo !== k.containerInfo ||
        v.stateNode.implementation !== k.implementation
        ? ((v = iu(k, g.mode, B)), (v.return = g), v)
        : ((v = l(v, k.children || [])), (v.return = g), v);
    }
    function N(g, v, k, B, Y) {
      return v === null || v.tag !== 7
        ? ((v = wn(k, g.mode, B, Y)), (v.return = g), v)
        : ((v = l(v, k)), (v.return = g), v);
    }
    function _(g, v, k) {
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return (v = ou("" + v, g.mode, k)), (v.return = g), v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ce:
            return (
              (k = Al(v.type, v.key, v.props, null, g.mode, k)),
              (k.ref = wr(g, null, v)),
              (k.return = g),
              k
            );
          case Ee:
            return (v = iu(v, g.mode, k)), (v.return = g), v;
          case Ae:
            var B = v._init;
            return _(g, B(v._payload), k);
        }
        if (Xn(v) || J(v))
          return (v = wn(v, g.mode, k, null)), (v.return = g), v;
        wl(g, v);
      }
      return null;
    }
    function P(g, v, k, B) {
      var Y = v !== null ? v.key : null;
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return Y !== null ? null : p(g, v, "" + k, B);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case ce:
            return k.key === Y ? h(g, v, k, B) : null;
          case Ee:
            return k.key === Y ? E(g, v, k, B) : null;
          case Ae:
            return (Y = k._init), P(g, v, Y(k._payload), B);
        }
        if (Xn(k) || J(k)) return Y !== null ? null : N(g, v, k, B, null);
        wl(g, k);
      }
      return null;
    }
    function H(g, v, k, B, Y) {
      if ((typeof B == "string" && B !== "") || typeof B == "number")
        return (g = g.get(k) || null), p(v, g, "" + B, Y);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case ce:
            return (
              (g = g.get(B.key === null ? k : B.key) || null), h(v, g, B, Y)
            );
          case Ee:
            return (
              (g = g.get(B.key === null ? k : B.key) || null), E(v, g, B, Y)
            );
          case Ae:
            var X = B._init;
            return H(g, v, k, X(B._payload), Y);
        }
        if (Xn(B) || J(B)) return (g = g.get(k) || null), N(v, g, B, Y, null);
        wl(v, B);
      }
      return null;
    }
    function Q(g, v, k, B) {
      for (
        var Y = null, X = null, G = v, q = (v = 0), Oe = null;
        G !== null && q < k.length;
        q++
      ) {
        G.index > q ? ((Oe = G), (G = null)) : (Oe = G.sibling);
        var ue = P(g, G, k[q], B);
        if (ue === null) {
          G === null && (G = Oe);
          break;
        }
        e && G && ue.alternate === null && t(g, G),
          (v = u(ue, v, q)),
          X === null ? (Y = ue) : (X.sibling = ue),
          (X = ue),
          (G = Oe);
      }
      if (q === k.length) return n(g, G), ve && dn(g, q), Y;
      if (G === null) {
        for (; q < k.length; q++)
          (G = _(g, k[q], B)),
            G !== null &&
              ((v = u(G, v, q)),
              X === null ? (Y = G) : (X.sibling = G),
              (X = G));
        return ve && dn(g, q), Y;
      }
      for (G = r(g, G); q < k.length; q++)
        (Oe = H(G, g, q, k[q], B)),
          Oe !== null &&
            (e &&
              Oe.alternate !== null &&
              G.delete(Oe.key === null ? q : Oe.key),
            (v = u(Oe, v, q)),
            X === null ? (Y = Oe) : (X.sibling = Oe),
            (X = Oe));
      return (
        e &&
          G.forEach(function (nn) {
            return t(g, nn);
          }),
        ve && dn(g, q),
        Y
      );
    }
    function K(g, v, k, B) {
      var Y = J(k);
      if (typeof Y != "function") throw Error(o(150));
      if (((k = Y.call(k)), k == null)) throw Error(o(151));
      for (
        var X = (Y = null), G = v, q = (v = 0), Oe = null, ue = k.next();
        G !== null && !ue.done;
        q++, ue = k.next()
      ) {
        G.index > q ? ((Oe = G), (G = null)) : (Oe = G.sibling);
        var nn = P(g, G, ue.value, B);
        if (nn === null) {
          G === null && (G = Oe);
          break;
        }
        e && G && nn.alternate === null && t(g, G),
          (v = u(nn, v, q)),
          X === null ? (Y = nn) : (X.sibling = nn),
          (X = nn),
          (G = Oe);
      }
      if (ue.done) return n(g, G), ve && dn(g, q), Y;
      if (G === null) {
        for (; !ue.done; q++, ue = k.next())
          (ue = _(g, ue.value, B)),
            ue !== null &&
              ((v = u(ue, v, q)),
              X === null ? (Y = ue) : (X.sibling = ue),
              (X = ue));
        return ve && dn(g, q), Y;
      }
      for (G = r(g, G); !ue.done; q++, ue = k.next())
        (ue = H(G, g, q, ue.value, B)),
          ue !== null &&
            (e &&
              ue.alternate !== null &&
              G.delete(ue.key === null ? q : ue.key),
            (v = u(ue, v, q)),
            X === null ? (Y = ue) : (X.sibling = ue),
            (X = ue));
      return (
        e &&
          G.forEach(function (y1) {
            return t(g, y1);
          }),
        ve && dn(g, q),
        Y
      );
    }
    function Te(g, v, k, B) {
      if (
        (typeof k == "object" &&
          k !== null &&
          k.type === ye &&
          k.key === null &&
          (k = k.props.children),
        typeof k == "object" && k !== null)
      ) {
        switch (k.$$typeof) {
          case ce:
            e: {
              for (var Y = k.key, X = v; X !== null; ) {
                if (X.key === Y) {
                  if (((Y = k.type), Y === ye)) {
                    if (X.tag === 7) {
                      n(g, X.sibling),
                        (v = l(X, k.props.children)),
                        (v.return = g),
                        (g = v);
                      break e;
                    }
                  } else if (
                    X.elementType === Y ||
                    (typeof Y == "object" &&
                      Y !== null &&
                      Y.$$typeof === Ae &&
                      ts(Y) === X.type)
                  ) {
                    n(g, X.sibling),
                      (v = l(X, k.props)),
                      (v.ref = wr(g, X, k)),
                      (v.return = g),
                      (g = v);
                    break e;
                  }
                  n(g, X);
                  break;
                } else t(g, X);
                X = X.sibling;
              }
              k.type === ye
                ? ((v = wn(k.props.children, g.mode, B, k.key)),
                  (v.return = g),
                  (g = v))
                : ((B = Al(k.type, k.key, k.props, null, g.mode, B)),
                  (B.ref = wr(g, v, k)),
                  (B.return = g),
                  (g = B));
            }
            return c(g);
          case Ee:
            e: {
              for (X = k.key; v !== null; ) {
                if (v.key === X)
                  if (
                    v.tag === 4 &&
                    v.stateNode.containerInfo === k.containerInfo &&
                    v.stateNode.implementation === k.implementation
                  ) {
                    n(g, v.sibling),
                      (v = l(v, k.children || [])),
                      (v.return = g),
                      (g = v);
                    break e;
                  } else {
                    n(g, v);
                    break;
                  }
                else t(g, v);
                v = v.sibling;
              }
              (v = iu(k, g.mode, B)), (v.return = g), (g = v);
            }
            return c(g);
          case Ae:
            return (X = k._init), Te(g, v, X(k._payload), B);
        }
        if (Xn(k)) return Q(g, v, k, B);
        if (J(k)) return K(g, v, k, B);
        wl(g, k);
      }
      return (typeof k == "string" && k !== "") || typeof k == "number"
        ? ((k = "" + k),
          v !== null && v.tag === 6
            ? (n(g, v.sibling), (v = l(v, k)), (v.return = g), (g = v))
            : (n(g, v), (v = ou(k, g.mode, B)), (v.return = g), (g = v)),
          c(g))
        : n(g, v);
    }
    return Te;
  }
  var Dn = ns(!0),
    rs = ns(!1),
    El = Zt(null),
    Sl = null,
    In = null,
    hi = null;
  function vi() {
    hi = In = Sl = null;
  }
  function yi(e) {
    var t = El.current;
    me(El), (e._currentValue = t);
  }
  function gi(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Wn(e, t) {
    (Sl = e),
      (hi = In = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Ke = !0), (e.firstContext = null));
  }
  function it(e) {
    var t = e._currentValue;
    if (hi !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
        if (Sl === null) throw Error(o(308));
        (In = e), (Sl.dependencies = { lanes: 0, firstContext: e });
      } else In = In.next = e;
    return t;
  }
  var pn = null;
  function ki(e) {
    pn === null ? (pn = [e]) : pn.push(e);
  }
  function ls(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ki(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      jt(e, r)
    );
  }
  function jt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Yt = !1;
  function wi(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function os(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Ot(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Xt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), le & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        jt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ki(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      jt(e, n)
    );
  }
  function xl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oo(e, n);
    }
  }
  function is(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var c = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          u === null ? (l = u = c) : (u = u.next = c), (n = n.next);
        } while (n !== null);
        u === null ? (l = u = t) : (u = u.next = t);
      } else l = u = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Cl(e, t, n, r) {
    var l = e.updateQueue;
    Yt = !1;
    var u = l.firstBaseUpdate,
      c = l.lastBaseUpdate,
      p = l.shared.pending;
    if (p !== null) {
      l.shared.pending = null;
      var h = p,
        E = h.next;
      (h.next = null), c === null ? (u = E) : (c.next = E), (c = h);
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (p = N.lastBaseUpdate),
        p !== c &&
          (p === null ? (N.firstBaseUpdate = E) : (p.next = E),
          (N.lastBaseUpdate = h)));
    }
    if (u !== null) {
      var _ = l.baseState;
      (c = 0), (N = E = h = null), (p = u);
      do {
        var P = p.lane,
          H = p.eventTime;
        if ((r & P) === P) {
          N !== null &&
            (N = N.next =
              {
                eventTime: H,
                lane: 0,
                tag: p.tag,
                payload: p.payload,
                callback: p.callback,
                next: null,
              });
          e: {
            var Q = e,
              K = p;
            switch (((P = t), (H = n), K.tag)) {
              case 1:
                if (((Q = K.payload), typeof Q == "function")) {
                  _ = Q.call(H, _, P);
                  break e;
                }
                _ = Q;
                break e;
              case 3:
                Q.flags = (Q.flags & -65537) | 128;
              case 0:
                if (
                  ((Q = K.payload),
                  (P = typeof Q == "function" ? Q.call(H, _, P) : Q),
                  P == null)
                )
                  break e;
                _ = A({}, _, P);
                break e;
              case 2:
                Yt = !0;
            }
          }
          p.callback !== null &&
            p.lane !== 0 &&
            ((e.flags |= 64),
            (P = l.effects),
            P === null ? (l.effects = [p]) : P.push(p));
        } else
          (H = {
            eventTime: H,
            lane: P,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            N === null ? ((E = N = H), (h = _)) : (N = N.next = H),
            (c |= P);
        if (((p = p.next), p === null)) {
          if (((p = l.shared.pending), p === null)) break;
          (P = p),
            (p = P.next),
            (P.next = null),
            (l.lastBaseUpdate = P),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (N === null && (h = _),
        (l.baseState = h),
        (l.firstBaseUpdate = E),
        (l.lastBaseUpdate = N),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (c |= l.lane), (l = l.next);
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      (vn |= c), (e.lanes = c), (e.memoizedState = _);
    }
  }
  function us(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(o(191, l));
          l.call(r);
        }
      }
  }
  var Er = {},
    xt = Zt(Er),
    Sr = Zt(Er),
    xr = Zt(Er);
  function mn(e) {
    if (e === Er) throw Error(o(174));
    return e;
  }
  function Ei(e, t) {
    switch ((de(xr, t), de(Sr, e), de(xt, Er), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : So(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = So(t, e));
    }
    me(xt), de(xt, t);
  }
  function Hn() {
    me(xt), me(Sr), me(xr);
  }
  function as(e) {
    mn(xr.current);
    var t = mn(xt.current),
      n = So(t, e.type);
    t !== n && (de(Sr, e), de(xt, n));
  }
  function Si(e) {
    Sr.current === e && (me(xt), me(Sr));
  }
  var ge = Zt(0);
  function Ll(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var xi = [];
  function Ci() {
    for (var e = 0; e < xi.length; e++)
      xi[e]._workInProgressVersionPrimary = null;
    xi.length = 0;
  }
  var Tl = re.ReactCurrentDispatcher,
    Li = re.ReactCurrentBatchConfig,
    hn = 0,
    ke = null,
    Re = null,
    _e = null,
    Ml = !1,
    Cr = !1,
    Lr = 0,
    Wd = 0;
  function De() {
    throw Error(o(321));
  }
  function Ti(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!dt(e[n], t[n])) return !1;
    return !0;
  }
  function Mi(e, t, n, r, l, u) {
    if (
      ((hn = u),
      (ke = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Tl.current = e === null || e.memoizedState === null ? Ad : Zd),
      (e = n(r, l)),
      Cr)
    ) {
      u = 0;
      do {
        if (((Cr = !1), (Lr = 0), 25 <= u)) throw Error(o(301));
        (u += 1),
          (_e = Re = null),
          (t.updateQueue = null),
          (Tl.current = Qd),
          (e = n(r, l));
      } while (Cr);
    }
    if (
      ((Tl.current = Nl),
      (t = Re !== null && Re.next !== null),
      (hn = 0),
      (_e = Re = ke = null),
      (Ml = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function Pi() {
    var e = Lr !== 0;
    return (Lr = 0), e;
  }
  function Ct() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return _e === null ? (ke.memoizedState = _e = e) : (_e = _e.next = e), _e;
  }
  function ut() {
    if (Re === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = _e === null ? ke.memoizedState : _e.next;
    if (t !== null) (_e = t), (Re = e);
    else {
      if (e === null) throw Error(o(310));
      (Re = e),
        (e = {
          memoizedState: Re.memoizedState,
          baseState: Re.baseState,
          baseQueue: Re.baseQueue,
          queue: Re.queue,
          next: null,
        }),
        _e === null ? (ke.memoizedState = _e = e) : (_e = _e.next = e);
    }
    return _e;
  }
  function Tr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ri(e) {
    var t = ut(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = Re,
      l = r.baseQueue,
      u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var c = l.next;
        (l.next = u.next), (u.next = c);
      }
      (r.baseQueue = l = u), (n.pending = null);
    }
    if (l !== null) {
      (u = l.next), (r = r.baseState);
      var p = (c = null),
        h = null,
        E = u;
      do {
        var N = E.lane;
        if ((hn & N) === N)
          h !== null &&
            (h = h.next =
              {
                lane: 0,
                action: E.action,
                hasEagerState: E.hasEagerState,
                eagerState: E.eagerState,
                next: null,
              }),
            (r = E.hasEagerState ? E.eagerState : e(r, E.action));
        else {
          var _ = {
            lane: N,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          };
          h === null ? ((p = h = _), (c = r)) : (h = h.next = _),
            (ke.lanes |= N),
            (vn |= N);
        }
        E = E.next;
      } while (E !== null && E !== u);
      h === null ? (c = r) : (h.next = p),
        dt(r, t.memoizedState) || (Ke = !0),
        (t.memoizedState = r),
        (t.baseState = c),
        (t.baseQueue = h),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (u = l.lane), (ke.lanes |= u), (vn |= u), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ni(e) {
    var t = ut(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var c = (l = l.next);
      do (u = e(u, c.action)), (c = c.next);
      while (c !== l);
      dt(u, t.memoizedState) || (Ke = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u);
    }
    return [u, r];
  }
  function ss() {}
  function cs(e, t) {
    var n = ke,
      r = ut(),
      l = t(),
      u = !dt(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Ke = !0)),
      (r = r.queue),
      zi(ps.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || u || (_e !== null && _e.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Mr(9, ds.bind(null, n, r, l, t), void 0, null),
        je === null)
      )
        throw Error(o(349));
      hn & 30 || fs(n, t, l);
    }
    return l;
  }
  function fs(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ke.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ds(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ms(t) && hs(e);
  }
  function ps(e, t, n) {
    return n(function () {
      ms(t) && hs(e);
    });
  }
  function ms(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dt(e, n);
    } catch {
      return !0;
    }
  }
  function hs(e) {
    var t = jt(e, 1);
    t !== null && yt(t, e, 1, -1);
  }
  function vs(e) {
    var t = Ct();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Ud.bind(null, ke, e)),
      [t.memoizedState, e]
    );
  }
  function Mr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ke.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ke.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ys() {
    return ut().memoizedState;
  }
  function Pl(e, t, n, r) {
    var l = Ct();
    (ke.flags |= e),
      (l.memoizedState = Mr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Rl(e, t, n, r) {
    var l = ut();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (Re !== null) {
      var c = Re.memoizedState;
      if (((u = c.destroy), r !== null && Ti(r, c.deps))) {
        l.memoizedState = Mr(t, n, u, r);
        return;
      }
    }
    (ke.flags |= e), (l.memoizedState = Mr(1 | t, n, u, r));
  }
  function gs(e, t) {
    return Pl(8390656, 8, e, t);
  }
  function zi(e, t) {
    return Rl(2048, 8, e, t);
  }
  function ks(e, t) {
    return Rl(4, 2, e, t);
  }
  function ws(e, t) {
    return Rl(4, 4, e, t);
  }
  function Es(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ss(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Rl(4, 4, Es.bind(null, t, e), n)
    );
  }
  function _i() {}
  function xs(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ti(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Cs(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ti(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ls(e, t, n) {
    return hn & 21
      ? (dt(n, t) ||
          ((n = ta()), (ke.lanes |= n), (vn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
  }
  function Hd(e, t) {
    var n = se;
    (se = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Li.transition;
    Li.transition = {};
    try {
      e(!1), t();
    } finally {
      (se = n), (Li.transition = r);
    }
  }
  function Ts() {
    return ut().memoizedState;
  }
  function Vd(e, t, n) {
    var r = bt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ms(e))
    )
      Ps(t, n);
    else if (((n = ls(e, t, n, r)), n !== null)) {
      var l = Ve();
      yt(n, e, r, l), Rs(n, t, r);
    }
  }
  function Ud(e, t, n) {
    var r = bt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ms(e)) Ps(t, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var c = t.lastRenderedState,
            p = u(c, n);
          if (((l.hasEagerState = !0), (l.eagerState = p), dt(p, c))) {
            var h = t.interleaved;
            h === null
              ? ((l.next = l), ki(t))
              : ((l.next = h.next), (h.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = ls(e, t, l, r)),
        n !== null && ((l = Ve()), yt(n, e, r, l), Rs(n, t, r));
    }
  }
  function Ms(e) {
    var t = e.alternate;
    return e === ke || (t !== null && t === ke);
  }
  function Ps(e, t) {
    Cr = Ml = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Rs(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oo(e, n);
    }
  }
  var Nl = {
      readContext: it,
      useCallback: De,
      useContext: De,
      useEffect: De,
      useImperativeHandle: De,
      useInsertionEffect: De,
      useLayoutEffect: De,
      useMemo: De,
      useReducer: De,
      useRef: De,
      useState: De,
      useDebugValue: De,
      useDeferredValue: De,
      useTransition: De,
      useMutableSource: De,
      useSyncExternalStore: De,
      useId: De,
      unstable_isNewReconciler: !1,
    },
    Ad = {
      readContext: it,
      useCallback: function (e, t) {
        return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: it,
      useEffect: gs,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Pl(4194308, 4, Es.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Pl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Pl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ct();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Ct();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Vd.bind(null, ke, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ct();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: vs,
      useDebugValue: _i,
      useDeferredValue: function (e) {
        return (Ct().memoizedState = e);
      },
      useTransition: function () {
        var e = vs(!1),
          t = e[0];
        return (e = Hd.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ke,
          l = Ct();
        if (ve) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), je === null)) throw Error(o(349));
          hn & 30 || fs(r, t, n);
        }
        l.memoizedState = n;
        var u = { value: n, getSnapshot: t };
        return (
          (l.queue = u),
          gs(ps.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          Mr(9, ds.bind(null, r, u, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ct(),
          t = je.identifierPrefix;
        if (ve) {
          var n = _t,
            r = zt;
          (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Lr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Wd++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Zd = {
      readContext: it,
      useCallback: xs,
      useContext: it,
      useEffect: zi,
      useImperativeHandle: Ss,
      useInsertionEffect: ks,
      useLayoutEffect: ws,
      useMemo: Cs,
      useReducer: Ri,
      useRef: ys,
      useState: function () {
        return Ri(Tr);
      },
      useDebugValue: _i,
      useDeferredValue: function (e) {
        var t = ut();
        return Ls(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = Ri(Tr)[0],
          t = ut().memoizedState;
        return [e, t];
      },
      useMutableSource: ss,
      useSyncExternalStore: cs,
      useId: Ts,
      unstable_isNewReconciler: !1,
    },
    Qd = {
      readContext: it,
      useCallback: xs,
      useContext: it,
      useEffect: zi,
      useImperativeHandle: Ss,
      useInsertionEffect: ks,
      useLayoutEffect: ws,
      useMemo: Cs,
      useReducer: Ni,
      useRef: ys,
      useState: function () {
        return Ni(Tr);
      },
      useDebugValue: _i,
      useDeferredValue: function (e) {
        var t = ut();
        return Re === null ? (t.memoizedState = e) : Ls(t, Re.memoizedState, e);
      },
      useTransition: function () {
        var e = Ni(Tr)[0],
          t = ut().memoizedState;
        return [e, t];
      },
      useMutableSource: ss,
      useSyncExternalStore: cs,
      useId: Ts,
      unstable_isNewReconciler: !1,
    };
  function mt(e, t) {
    if (e && e.defaultProps) {
      (t = A({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ji(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : A({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var zl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? an(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ve(),
        l = bt(e),
        u = Ot(r, l);
      (u.payload = t),
        n != null && (u.callback = n),
        (t = Xt(e, u, l)),
        t !== null && (yt(t, e, l, r), xl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ve(),
        l = bt(e),
        u = Ot(r, l);
      (u.tag = 1),
        (u.payload = t),
        n != null && (u.callback = n),
        (t = Xt(e, u, l)),
        t !== null && (yt(t, e, l, r), xl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ve(),
        r = bt(e),
        l = Ot(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Xt(e, l, r)),
        t !== null && (yt(t, e, r, n), xl(t, e, r));
    },
  };
  function Ns(e, t, n, r, l, u, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, c)
        : t.prototype && t.prototype.isPureReactComponent
        ? !pr(n, r) || !pr(l, u)
        : !0
    );
  }
  function zs(e, t, n) {
    var r = !1,
      l = Qt,
      u = t.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = it(u))
        : ((l = Qe(t) ? cn : $e.current),
          (r = t.contextTypes),
          (u = (r = r != null) ? On(e, l) : Qt)),
      (t = new t(n, u)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = zl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      t
    );
  }
  function _s(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && zl.enqueueReplaceState(t, t.state, null);
  }
  function Oi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), wi(e);
    var u = t.contextType;
    typeof u == "object" && u !== null
      ? (l.context = it(u))
      : ((u = Qe(t) ? cn : $e.current), (l.context = On(e, u))),
      (l.state = e.memoizedState),
      (u = t.getDerivedStateFromProps),
      typeof u == "function" && (ji(e, t, u, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && zl.enqueueReplaceState(l, l.state, null),
        Cl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Vn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += oe(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Bi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Fi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var Kd = typeof WeakMap == "function" ? WeakMap : Map;
  function js(e, t, n) {
    (n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Dl || ((Dl = !0), (Ji = r)), Fi(e, t);
      }),
      n
    );
  }
  function Os(e, t, n) {
    (n = Ot(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Fi(e, t);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (n.callback = function () {
          Fi(e, t),
            typeof r != "function" &&
              (Jt === null ? (Jt = new Set([this])) : Jt.add(this));
          var c = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: c !== null ? c : "",
          });
        }),
      n
    );
  }
  function Bs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Kd();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = u1.bind(null, e, t, n)), t.then(e, e));
  }
  function Fs(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function $s(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Ot(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var Yd = re.ReactCurrentOwner,
    Ke = !1;
  function He(e, t, n, r) {
    t.child = e === null ? rs(t, null, n, r) : Dn(t, e.child, n, r);
  }
  function Ds(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return (
      Wn(t, l),
      (r = Mi(e, t, n, r, u, l)),
      (n = Pi()),
      e !== null && !Ke
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Bt(e, t, l))
        : (ve && n && ci(t), (t.flags |= 1), He(e, t, r, l), t.child)
    );
  }
  function Is(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" &&
        !lu(u) &&
        u.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = u), Ws(e, t, u, r, l))
        : ((e = Al(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !(e.lanes & l))) {
      var c = u.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : pr), n(c, r) && e.ref === t.ref)
      )
        return Bt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = tn(u, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ws(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (pr(u, r) && e.ref === t.ref)
        if (((Ke = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0))
          e.flags & 131072 && (Ke = !0);
        else return (t.lanes = e.lanes), Bt(e, t, l);
    }
    return $i(e, t, n, r, l);
  }
  function Hs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          de(An, nt),
          (nt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            de(An, nt),
            (nt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = u !== null ? u.baseLanes : n),
          de(An, nt),
          (nt |= r);
      }
    else
      u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
        de(An, nt),
        (nt |= r);
    return He(e, t, l, n), t.child;
  }
  function Vs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function $i(e, t, n, r, l) {
    var u = Qe(n) ? cn : $e.current;
    return (
      (u = On(t, u)),
      Wn(t, l),
      (n = Mi(e, t, n, r, u, l)),
      (r = Pi()),
      e !== null && !Ke
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Bt(e, t, l))
        : (ve && r && ci(t), (t.flags |= 1), He(e, t, n, l), t.child)
    );
  }
  function Us(e, t, n, r, l) {
    if (Qe(n)) {
      var u = !0;
      hl(t);
    } else u = !1;
    if ((Wn(t, l), t.stateNode === null))
      jl(e, t), zs(t, n, r), Oi(t, n, r, l), (r = !0);
    else if (e === null) {
      var c = t.stateNode,
        p = t.memoizedProps;
      c.props = p;
      var h = c.context,
        E = n.contextType;
      typeof E == "object" && E !== null
        ? (E = it(E))
        : ((E = Qe(n) ? cn : $e.current), (E = On(t, E)));
      var N = n.getDerivedStateFromProps,
        _ =
          typeof N == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function";
      _ ||
        (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
          typeof c.componentWillReceiveProps != "function") ||
        ((p !== r || h !== E) && _s(t, c, r, E)),
        (Yt = !1);
      var P = t.memoizedState;
      (c.state = P),
        Cl(t, r, c, l),
        (h = t.memoizedState),
        p !== r || P !== h || Ze.current || Yt
          ? (typeof N == "function" && (ji(t, n, N, r), (h = t.memoizedState)),
            (p = Yt || Ns(t, n, p, r, P, h, E))
              ? (_ ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = h)),
            (c.props = r),
            (c.state = h),
            (c.context = E),
            (r = p))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (c = t.stateNode),
        os(e, t),
        (p = t.memoizedProps),
        (E = t.type === t.elementType ? p : mt(t.type, p)),
        (c.props = E),
        (_ = t.pendingProps),
        (P = c.context),
        (h = n.contextType),
        typeof h == "object" && h !== null
          ? (h = it(h))
          : ((h = Qe(n) ? cn : $e.current), (h = On(t, h)));
      var H = n.getDerivedStateFromProps;
      (N =
        typeof H == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function") ||
        (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
          typeof c.componentWillReceiveProps != "function") ||
        ((p !== _ || P !== h) && _s(t, c, r, h)),
        (Yt = !1),
        (P = t.memoizedState),
        (c.state = P),
        Cl(t, r, c, l);
      var Q = t.memoizedState;
      p !== _ || P !== Q || Ze.current || Yt
        ? (typeof H == "function" && (ji(t, n, H, r), (Q = t.memoizedState)),
          (E = Yt || Ns(t, n, E, r, P, Q, h) || !1)
            ? (N ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(r, Q, h),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(r, Q, h)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (p === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = Q)),
          (c.props = r),
          (c.state = Q),
          (c.context = h),
          (r = E))
        : (typeof c.componentDidUpdate != "function" ||
            (p === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Di(e, t, n, r, u, l);
  }
  function Di(e, t, n, r, l, u) {
    Vs(e, t);
    var c = (t.flags & 128) !== 0;
    if (!r && !c) return l && Ya(t, n, !1), Bt(e, t, u);
    (r = t.stateNode), (Yd.current = t);
    var p =
      c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && c
        ? ((t.child = Dn(t, e.child, null, u)), (t.child = Dn(t, null, p, u)))
        : He(e, t, p, u),
      (t.memoizedState = r.state),
      l && Ya(t, n, !0),
      t.child
    );
  }
  function As(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Qa(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Qa(e, t.context, !1),
      Ei(e, t.containerInfo);
  }
  function Zs(e, t, n, r, l) {
    return $n(), mi(l), (t.flags |= 256), He(e, t, n, r), t.child;
  }
  var Ii = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Wi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Qs(e, t, n) {
    var r = t.pendingProps,
      l = ge.current,
      u = !1,
      c = (t.flags & 128) !== 0,
      p;
    if (
      ((p = c) ||
        (p = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      p
        ? ((u = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      de(ge, l & 1),
      e === null)
    )
      return (
        pi(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((c = r.children),
            (e = r.fallback),
            u
              ? ((r = t.mode),
                (u = t.child),
                (c = { mode: "hidden", children: c }),
                !(r & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = c))
                  : (u = Zl(c, r, 0, null)),
                (e = wn(e, r, n, null)),
                (u.return = t),
                (e.return = t),
                (u.sibling = e),
                (t.child = u),
                (t.child.memoizedState = Wi(n)),
                (t.memoizedState = Ii),
                e)
              : Hi(t, c))
      );
    if (((l = e.memoizedState), l !== null && ((p = l.dehydrated), p !== null)))
      return Xd(e, t, c, r, p, l, n);
    if (u) {
      (u = r.fallback), (c = t.mode), (l = e.child), (p = l.sibling);
      var h = { mode: "hidden", children: r.children };
      return (
        !(c & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = h),
            (t.deletions = null))
          : ((r = tn(l, h)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        p !== null ? (u = tn(p, u)) : ((u = wn(u, c, n, null)), (u.flags |= 2)),
        (u.return = t),
        (r.return = t),
        (r.sibling = u),
        (t.child = r),
        (r = u),
        (u = t.child),
        (c = e.child.memoizedState),
        (c =
          c === null
            ? Wi(n)
            : {
                baseLanes: c.baseLanes | n,
                cachePool: null,
                transitions: c.transitions,
              }),
        (u.memoizedState = c),
        (u.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ii),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = tn(u, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Hi(e, t) {
    return (
      (t = Zl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function _l(e, t, n, r) {
    return (
      r !== null && mi(r),
      Dn(t, e.child, null, n),
      (e = Hi(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Xd(e, t, n, r, l, u, c) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Bi(Error(o(422)))), _l(e, t, c, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((u = r.fallback),
          (l = t.mode),
          (r = Zl({ mode: "visible", children: r.children }, l, 0, null)),
          (u = wn(u, l, c, null)),
          (u.flags |= 2),
          (r.return = t),
          (u.return = t),
          (r.sibling = u),
          (t.child = r),
          t.mode & 1 && Dn(t, e.child, null, c),
          (t.child.memoizedState = Wi(c)),
          (t.memoizedState = Ii),
          u);
    if (!(t.mode & 1)) return _l(e, t, c, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var p = r.dgst;
      return (
        (r = p), (u = Error(o(419))), (r = Bi(u, r, void 0)), _l(e, t, c, r)
      );
    }
    if (((p = (c & e.childLanes) !== 0), Ke || p)) {
      if (((r = je), r !== null)) {
        switch (c & -c) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | c) ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), jt(e, l), yt(r, e, l, -1));
      }
      return ru(), (r = Bi(Error(o(421)))), _l(e, t, c, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = a1.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = u.treeContext),
        (tt = At(l.nextSibling)),
        (et = t),
        (ve = !0),
        (pt = null),
        e !== null &&
          ((lt[ot++] = zt),
          (lt[ot++] = _t),
          (lt[ot++] = fn),
          (zt = e.id),
          (_t = e.overflow),
          (fn = t)),
        (t = Hi(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ks(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), gi(e.return, t, n);
  }
  function Vi(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((u.isBackwards = t),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = n),
        (u.tailMode = l));
  }
  function Ys(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((He(e, t, r.children, n), (r = ge.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ks(e, n, t);
          else if (e.tag === 19) Ks(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((de(ge, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && Ll(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Vi(t, !1, l, n, u);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Ll(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Vi(t, !0, n, null, u);
          break;
        case "together":
          Vi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function jl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Bt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (vn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = tn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Gd(e, t, n) {
    switch (t.tag) {
      case 3:
        As(t), $n();
        break;
      case 5:
        as(t);
        break;
      case 1:
        Qe(t.type) && hl(t);
        break;
      case 4:
        Ei(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        de(El, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (de(ge, ge.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Qs(e, t, n)
            : (de(ge, ge.current & 1),
              (e = Bt(e, t, n)),
              e !== null ? e.sibling : null);
        de(ge, ge.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Ys(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          de(ge, ge.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Hs(e, t, n);
    }
    return Bt(e, t, n);
  }
  var Xs, Ui, Gs, Js;
  (Xs = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Ui = function () {}),
    (Gs = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), mn(xt.current);
        var u = null;
        switch (n) {
          case "input":
            (l = go(e, l)), (r = go(e, r)), (u = []);
            break;
          case "select":
            (l = A({}, l, { value: void 0 })),
              (r = A({}, r, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (l = Eo(e, l)), (r = Eo(e, r)), (u = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = dl);
        }
        xo(n, r);
        var c;
        n = null;
        for (E in l)
          if (!r.hasOwnProperty(E) && l.hasOwnProperty(E) && l[E] != null)
            if (E === "style") {
              var p = l[E];
              for (c in p) p.hasOwnProperty(c) && (n || (n = {}), (n[c] = ""));
            } else
              E !== "dangerouslySetInnerHTML" &&
                E !== "children" &&
                E !== "suppressContentEditableWarning" &&
                E !== "suppressHydrationWarning" &&
                E !== "autoFocus" &&
                (f.hasOwnProperty(E)
                  ? u || (u = [])
                  : (u = u || []).push(E, null));
        for (E in r) {
          var h = r[E];
          if (
            ((p = l != null ? l[E] : void 0),
            r.hasOwnProperty(E) && h !== p && (h != null || p != null))
          )
            if (E === "style")
              if (p) {
                for (c in p)
                  !p.hasOwnProperty(c) ||
                    (h && h.hasOwnProperty(c)) ||
                    (n || (n = {}), (n[c] = ""));
                for (c in h)
                  h.hasOwnProperty(c) &&
                    p[c] !== h[c] &&
                    (n || (n = {}), (n[c] = h[c]));
              } else n || (u || (u = []), u.push(E, n)), (n = h);
            else
              E === "dangerouslySetInnerHTML"
                ? ((h = h ? h.__html : void 0),
                  (p = p ? p.__html : void 0),
                  h != null && p !== h && (u = u || []).push(E, h))
                : E === "children"
                ? (typeof h != "string" && typeof h != "number") ||
                  (u = u || []).push(E, "" + h)
                : E !== "suppressContentEditableWarning" &&
                  E !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(E)
                    ? (h != null && E === "onScroll" && pe("scroll", e),
                      u || p === h || (u = []))
                    : (u = u || []).push(E, h));
        }
        n && (u = u || []).push("style", n);
        var E = u;
        (t.updateQueue = E) && (t.flags |= 4);
      }
    }),
    (Js = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function Pr(e, t) {
    if (!ve)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Jd(e, t, n) {
    var r = t.pendingProps;
    switch ((fi(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ie(t), null;
      case 1:
        return Qe(t.type) && ml(), Ie(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Hn(),
          me(Ze),
          me($e),
          Ci(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (kl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), pt !== null && (eu(pt), (pt = null)))),
          Ui(e, t),
          Ie(t),
          null
        );
      case 5:
        Si(t);
        var l = mn(xr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Gs(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return Ie(t), null;
          }
          if (((e = mn(xt.current)), kl(t))) {
            (r = t.stateNode), (n = t.type);
            var u = t.memoizedProps;
            switch (((r[St] = t), (r[gr] = u), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                pe("cancel", r), pe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < hr.length; l++) pe(hr[l], r);
                break;
              case "source":
                pe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                pe("error", r), pe("load", r);
                break;
              case "details":
                pe("toggle", r);
                break;
              case "input":
                zu(r, u), pe("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!u.multiple }),
                  pe("invalid", r);
                break;
              case "textarea":
                Ou(r, u), pe("invalid", r);
            }
            xo(n, u), (l = null);
            for (var c in u)
              if (u.hasOwnProperty(c)) {
                var p = u[c];
                c === "children"
                  ? typeof p == "string"
                    ? r.textContent !== p &&
                      (u.suppressHydrationWarning !== !0 &&
                        fl(r.textContent, p, e),
                      (l = ["children", p]))
                    : typeof p == "number" &&
                      r.textContent !== "" + p &&
                      (u.suppressHydrationWarning !== !0 &&
                        fl(r.textContent, p, e),
                      (l = ["children", "" + p]))
                  : f.hasOwnProperty(c) &&
                    p != null &&
                    c === "onScroll" &&
                    pe("scroll", r);
              }
            switch (n) {
              case "input":
                Vr(r), ju(r, u, !0);
                break;
              case "textarea":
                Vr(r), Fu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = dl);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (c = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = $u(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = c.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = c.createElement(n, { is: r.is }))
                  : ((e = c.createElement(n)),
                    n === "select" &&
                      ((c = e),
                      r.multiple
                        ? (c.multiple = !0)
                        : r.size && (c.size = r.size)))
                : (e = c.createElementNS(e, n)),
              (e[St] = t),
              (e[gr] = r),
              Xs(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((c = Co(n, r)), n)) {
                case "dialog":
                  pe("cancel", e), pe("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  pe("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < hr.length; l++) pe(hr[l], e);
                  l = r;
                  break;
                case "source":
                  pe("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  pe("error", e), pe("load", e), (l = r);
                  break;
                case "details":
                  pe("toggle", e), (l = r);
                  break;
                case "input":
                  zu(e, r), (l = go(e, r)), pe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = A({}, r, { value: void 0 })),
                    pe("invalid", e);
                  break;
                case "textarea":
                  Ou(e, r), (l = Eo(e, r)), pe("invalid", e);
                  break;
                default:
                  l = r;
              }
              xo(n, l), (p = l);
              for (u in p)
                if (p.hasOwnProperty(u)) {
                  var h = p[u];
                  u === "style"
                    ? Wu(e, h)
                    : u === "dangerouslySetInnerHTML"
                    ? ((h = h ? h.__html : void 0), h != null && Du(e, h))
                    : u === "children"
                    ? typeof h == "string"
                      ? (n !== "textarea" || h !== "") && Gn(e, h)
                      : typeof h == "number" && Gn(e, "" + h)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (f.hasOwnProperty(u)
                        ? h != null && u === "onScroll" && pe("scroll", e)
                        : h != null && b(e, u, h, c));
                }
              switch (n) {
                case "input":
                  Vr(e), ju(e, r, !1);
                  break;
                case "textarea":
                  Vr(e), Fu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ae(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? Sn(e, !!r.multiple, u, !1)
                      : r.defaultValue != null &&
                        Sn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = dl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ie(t), null;
      case 6:
        if (e && t.stateNode != null) Js(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
          if (((n = mn(xr.current)), mn(xt.current), kl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[St] = t),
              (u = r.nodeValue !== n) && ((e = et), e !== null))
            )
              switch (e.tag) {
                case 3:
                  fl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    fl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            u && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[St] = t),
              (t.stateNode = r);
        }
        return Ie(t), null;
      case 13:
        if (
          (me(ge),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ve && tt !== null && t.mode & 1 && !(t.flags & 128))
            es(), $n(), (t.flags |= 98560), (u = !1);
          else if (((u = kl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(o(317));
              u[St] = t;
            } else
              $n(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ie(t), (u = !1);
          } else pt !== null && (eu(pt), (pt = null)), (u = !0);
          if (!u) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ge.current & 1 ? Ne === 0 && (Ne = 3) : ru())),
            t.updateQueue !== null && (t.flags |= 4),
            Ie(t),
            null);
      case 4:
        return (
          Hn(),
          Ui(e, t),
          e === null && vr(t.stateNode.containerInfo),
          Ie(t),
          null
        );
      case 10:
        return yi(t.type._context), Ie(t), null;
      case 17:
        return Qe(t.type) && ml(), Ie(t), null;
      case 19:
        if ((me(ge), (u = t.memoizedState), u === null)) return Ie(t), null;
        if (((r = (t.flags & 128) !== 0), (c = u.rendering), c === null))
          if (r) Pr(u, !1);
          else {
            if (Ne !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((c = Ll(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      Pr(u, !1),
                      r = c.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (u = n),
                      (e = r),
                      (u.flags &= 14680066),
                      (c = u.alternate),
                      c === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = c.childLanes),
                          (u.lanes = c.lanes),
                          (u.child = c.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = c.memoizedProps),
                          (u.memoizedState = c.memoizedState),
                          (u.updateQueue = c.updateQueue),
                          (u.type = c.type),
                          (e = c.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return de(ge, (ge.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              Le() > Zn &&
              ((t.flags |= 128), (r = !0), Pr(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Ll(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Pr(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !c.alternate &&
                  !ve)
              )
                return Ie(t), null;
            } else
              2 * Le() - u.renderingStartTime > Zn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Pr(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((n = u.last),
              n !== null ? (n.sibling = c) : (t.child = c),
              (u.last = c));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = Le()),
            (t.sibling = null),
            (n = ge.current),
            de(ge, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ie(t), null);
      case 22:
      case 23:
        return (
          nu(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? nt & 1073741824 &&
              (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ie(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function qd(e, t) {
    switch ((fi(t), t.tag)) {
      case 1:
        return (
          Qe(t.type) && ml(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Hn(),
          me(Ze),
          me($e),
          Ci(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Si(t), null;
      case 13:
        if (
          (me(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          $n();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return me(ge), null;
      case 4:
        return Hn(), null;
      case 10:
        return yi(t.type._context), null;
      case 22:
      case 23:
        return nu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ol = !1,
    We = !1,
    bd = typeof WeakSet == "function" ? WeakSet : Set,
    U = null;
  function Un(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ce(e, t, r);
        }
      else n.current = null;
  }
  function Ai(e, t, n) {
    try {
      n();
    } catch (r) {
      Ce(e, t, r);
    }
  }
  var qs = !1;
  function e1(e, t) {
    if (((ni = el), (e = Na()), Yo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var c = 0,
              p = -1,
              h = -1,
              E = 0,
              N = 0,
              _ = e,
              P = null;
            t: for (;;) {
              for (
                var H;
                _ !== n || (l !== 0 && _.nodeType !== 3) || (p = c + l),
                  _ !== u || (r !== 0 && _.nodeType !== 3) || (h = c + r),
                  _.nodeType === 3 && (c += _.nodeValue.length),
                  (H = _.firstChild) !== null;

              )
                (P = _), (_ = H);
              for (;;) {
                if (_ === e) break t;
                if (
                  (P === n && ++E === l && (p = c),
                  P === u && ++N === r && (h = c),
                  (H = _.nextSibling) !== null)
                )
                  break;
                (_ = P), (P = _.parentNode);
              }
              _ = H;
            }
            n = p === -1 || h === -1 ? null : { start: p, end: h };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      ri = { focusedElem: e, selectionRange: n }, el = !1, U = t;
      U !== null;

    )
      if (((t = U), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (U = e);
      else
        for (; U !== null; ) {
          t = U;
          try {
            var Q = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Q !== null) {
                    var K = Q.memoizedProps,
                      Te = Q.memoizedState,
                      g = t.stateNode,
                      v = g.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? K : mt(t.type, K),
                        Te
                      );
                    g.__reactInternalSnapshotBeforeUpdate = v;
                  }
                  break;
                case 3:
                  var k = t.stateNode.containerInfo;
                  k.nodeType === 1
                    ? (k.textContent = "")
                    : k.nodeType === 9 &&
                      k.documentElement &&
                      k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (B) {
            Ce(t, t.return, B);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (U = e);
            break;
          }
          U = t.return;
        }
    return (Q = qs), (qs = !1), Q;
  }
  function Rr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          (l.destroy = void 0), u !== void 0 && Ai(t, n, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Bl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Zi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function bs(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), bs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[St],
          delete t[gr],
          delete t[ui],
          delete t[Fd],
          delete t[$d])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ec(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function tc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ec(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Qi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = dl));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Qi(e, t, n), e = e.sibling; e !== null; )
        Qi(e, t, n), (e = e.sibling);
  }
  function Ki(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ki(e, t, n), e = e.sibling; e !== null; )
        Ki(e, t, n), (e = e.sibling);
  }
  var Be = null,
    ht = !1;
  function Gt(e, t, n) {
    for (n = n.child; n !== null; ) nc(e, t, n), (n = n.sibling);
  }
  function nc(e, t, n) {
    if (Et && typeof Et.onCommitFiberUnmount == "function")
      try {
        Et.onCommitFiberUnmount(Yr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        We || Un(n, t);
      case 6:
        var r = Be,
          l = ht;
        (Be = null),
          Gt(e, t, n),
          (Be = r),
          (ht = l),
          Be !== null &&
            (ht
              ? ((e = Be),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Be.removeChild(n.stateNode));
        break;
      case 18:
        Be !== null &&
          (ht
            ? ((e = Be),
              (n = n.stateNode),
              e.nodeType === 8
                ? ii(e.parentNode, n)
                : e.nodeType === 1 && ii(e, n),
              ur(e))
            : ii(Be, n.stateNode));
        break;
      case 4:
        (r = Be),
          (l = ht),
          (Be = n.stateNode.containerInfo),
          (ht = !0),
          Gt(e, t, n),
          (Be = r),
          (ht = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !We &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var u = l,
              c = u.destroy;
            (u = u.tag),
              c !== void 0 && (u & 2 || u & 4) && Ai(n, t, c),
              (l = l.next);
          } while (l !== r);
        }
        Gt(e, t, n);
        break;
      case 1:
        if (
          !We &&
          (Un(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (p) {
            Ce(n, t, p);
          }
        Gt(e, t, n);
        break;
      case 21:
        Gt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((We = (r = We) || n.memoizedState !== null), Gt(e, t, n), (We = r))
          : Gt(e, t, n);
        break;
      default:
        Gt(e, t, n);
    }
  }
  function rc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new bd()),
        t.forEach(function (r) {
          var l = s1.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function vt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var u = e,
            c = t,
            p = c;
          e: for (; p !== null; ) {
            switch (p.tag) {
              case 5:
                (Be = p.stateNode), (ht = !1);
                break e;
              case 3:
                (Be = p.stateNode.containerInfo), (ht = !0);
                break e;
              case 4:
                (Be = p.stateNode.containerInfo), (ht = !0);
                break e;
            }
            p = p.return;
          }
          if (Be === null) throw Error(o(160));
          nc(u, c, l), (Be = null), (ht = !1);
          var h = l.alternate;
          h !== null && (h.return = null), (l.return = null);
        } catch (E) {
          Ce(l, t, E);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) lc(t, e), (t = t.sibling);
  }
  function lc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((vt(t, e), Lt(e), r & 4)) {
          try {
            Rr(3, e, e.return), Bl(3, e);
          } catch (K) {
            Ce(e, e.return, K);
          }
          try {
            Rr(5, e, e.return);
          } catch (K) {
            Ce(e, e.return, K);
          }
        }
        break;
      case 1:
        vt(t, e), Lt(e), r & 512 && n !== null && Un(n, n.return);
        break;
      case 5:
        if (
          (vt(t, e),
          Lt(e),
          r & 512 && n !== null && Un(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Gn(l, "");
          } catch (K) {
            Ce(e, e.return, K);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            c = n !== null ? n.memoizedProps : u,
            p = e.type,
            h = e.updateQueue;
          if (((e.updateQueue = null), h !== null))
            try {
              p === "input" && u.type === "radio" && u.name != null && _u(l, u),
                Co(p, c);
              var E = Co(p, u);
              for (c = 0; c < h.length; c += 2) {
                var N = h[c],
                  _ = h[c + 1];
                N === "style"
                  ? Wu(l, _)
                  : N === "dangerouslySetInnerHTML"
                  ? Du(l, _)
                  : N === "children"
                  ? Gn(l, _)
                  : b(l, N, _, E);
              }
              switch (p) {
                case "input":
                  ko(l, u);
                  break;
                case "textarea":
                  Bu(l, u);
                  break;
                case "select":
                  var P = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var H = u.value;
                  H != null
                    ? Sn(l, !!u.multiple, H, !1)
                    : P !== !!u.multiple &&
                      (u.defaultValue != null
                        ? Sn(l, !!u.multiple, u.defaultValue, !0)
                        : Sn(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[gr] = u;
            } catch (K) {
              Ce(e, e.return, K);
            }
        }
        break;
      case 6:
        if ((vt(t, e), Lt(e), r & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (l = e.stateNode), (u = e.memoizedProps);
          try {
            l.nodeValue = u;
          } catch (K) {
            Ce(e, e.return, K);
          }
        }
        break;
      case 3:
        if (
          (vt(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ur(t.containerInfo);
          } catch (K) {
            Ce(e, e.return, K);
          }
        break;
      case 4:
        vt(t, e), Lt(e);
        break;
      case 13:
        vt(t, e),
          Lt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Gi = Le())),
          r & 4 && rc(e);
        break;
      case 22:
        if (
          ((N = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((We = (E = We) || N), vt(t, e), (We = E)) : vt(t, e),
          Lt(e),
          r & 8192)
        ) {
          if (
            ((E = e.memoizedState !== null),
            (e.stateNode.isHidden = E) && !N && e.mode & 1)
          )
            for (U = e, N = e.child; N !== null; ) {
              for (_ = U = N; U !== null; ) {
                switch (((P = U), (H = P.child), P.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Rr(4, P, P.return);
                    break;
                  case 1:
                    Un(P, P.return);
                    var Q = P.stateNode;
                    if (typeof Q.componentWillUnmount == "function") {
                      (r = P), (n = P.return);
                      try {
                        (t = r),
                          (Q.props = t.memoizedProps),
                          (Q.state = t.memoizedState),
                          Q.componentWillUnmount();
                      } catch (K) {
                        Ce(r, n, K);
                      }
                    }
                    break;
                  case 5:
                    Un(P, P.return);
                    break;
                  case 22:
                    if (P.memoizedState !== null) {
                      uc(_);
                      continue;
                    }
                }
                H !== null ? ((H.return = P), (U = H)) : uc(_);
              }
              N = N.sibling;
            }
          e: for (N = null, _ = e; ; ) {
            if (_.tag === 5) {
              if (N === null) {
                N = _;
                try {
                  (l = _.stateNode),
                    E
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((p = _.stateNode),
                        (h = _.memoizedProps.style),
                        (c =
                          h != null && h.hasOwnProperty("display")
                            ? h.display
                            : null),
                        (p.style.display = Iu("display", c)));
                } catch (K) {
                  Ce(e, e.return, K);
                }
              }
            } else if (_.tag === 6) {
              if (N === null)
                try {
                  _.stateNode.nodeValue = E ? "" : _.memoizedProps;
                } catch (K) {
                  Ce(e, e.return, K);
                }
            } else if (
              ((_.tag !== 22 && _.tag !== 23) ||
                _.memoizedState === null ||
                _ === e) &&
              _.child !== null
            ) {
              (_.child.return = _), (_ = _.child);
              continue;
            }
            if (_ === e) break e;
            for (; _.sibling === null; ) {
              if (_.return === null || _.return === e) break e;
              N === _ && (N = null), (_ = _.return);
            }
            N === _ && (N = null),
              (_.sibling.return = _.return),
              (_ = _.sibling);
          }
        }
        break;
      case 19:
        vt(t, e), Lt(e), r & 4 && rc(e);
        break;
      case 21:
        break;
      default:
        vt(t, e), Lt(e);
    }
  }
  function Lt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ec(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Gn(l, ""), (r.flags &= -33));
            var u = tc(e);
            Ki(e, u, l);
            break;
          case 3:
          case 4:
            var c = r.stateNode.containerInfo,
              p = tc(e);
            Qi(e, p, c);
            break;
          default:
            throw Error(o(161));
        }
      } catch (h) {
        Ce(e, e.return, h);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function t1(e, t, n) {
    (U = e), oc(e);
  }
  function oc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; U !== null; ) {
      var l = U,
        u = l.child;
      if (l.tag === 22 && r) {
        var c = l.memoizedState !== null || Ol;
        if (!c) {
          var p = l.alternate,
            h = (p !== null && p.memoizedState !== null) || We;
          p = Ol;
          var E = We;
          if (((Ol = c), (We = h) && !E))
            for (U = l; U !== null; )
              (c = U),
                (h = c.child),
                c.tag === 22 && c.memoizedState !== null
                  ? ac(l)
                  : h !== null
                  ? ((h.return = c), (U = h))
                  : ac(l);
          for (; u !== null; ) (U = u), oc(u), (u = u.sibling);
          (U = l), (Ol = p), (We = E);
        }
        ic(e);
      } else
        l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (U = u)) : ic(e);
    }
  }
  function ic(e) {
    for (; U !== null; ) {
      var t = U;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                We || Bl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !We)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : mt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = t.updateQueue;
                u !== null && us(t, u, r);
                break;
              case 3:
                var c = t.updateQueue;
                if (c !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  us(t, c, n);
                }
                break;
              case 5:
                var p = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = p;
                  var h = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      h.autoFocus && n.focus();
                      break;
                    case "img":
                      h.src && (n.src = h.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var E = t.alternate;
                  if (E !== null) {
                    var N = E.memoizedState;
                    if (N !== null) {
                      var _ = N.dehydrated;
                      _ !== null && ur(_);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          We || (t.flags & 512 && Zi(t));
        } catch (P) {
          Ce(t, t.return, P);
        }
      }
      if (t === e) {
        U = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (U = n);
        break;
      }
      U = t.return;
    }
  }
  function uc(e) {
    for (; U !== null; ) {
      var t = U;
      if (t === e) {
        U = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (U = n);
        break;
      }
      U = t.return;
    }
  }
  function ac(e) {
    for (; U !== null; ) {
      var t = U;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Bl(4, t);
            } catch (h) {
              Ce(t, n, h);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (h) {
                Ce(t, l, h);
              }
            }
            var u = t.return;
            try {
              Zi(t);
            } catch (h) {
              Ce(t, u, h);
            }
            break;
          case 5:
            var c = t.return;
            try {
              Zi(t);
            } catch (h) {
              Ce(t, c, h);
            }
        }
      } catch (h) {
        Ce(t, t.return, h);
      }
      if (t === e) {
        U = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        (p.return = t.return), (U = p);
        break;
      }
      U = t.return;
    }
  }
  var n1 = Math.ceil,
    Fl = re.ReactCurrentDispatcher,
    Yi = re.ReactCurrentOwner,
    at = re.ReactCurrentBatchConfig,
    le = 0,
    je = null,
    Pe = null,
    Fe = 0,
    nt = 0,
    An = Zt(0),
    Ne = 0,
    Nr = null,
    vn = 0,
    $l = 0,
    Xi = 0,
    zr = null,
    Ye = null,
    Gi = 0,
    Zn = 1 / 0,
    Ft = null,
    Dl = !1,
    Ji = null,
    Jt = null,
    Il = !1,
    qt = null,
    Wl = 0,
    _r = 0,
    qi = null,
    Hl = -1,
    Vl = 0;
  function Ve() {
    return le & 6 ? Le() : Hl !== -1 ? Hl : (Hl = Le());
  }
  function bt(e) {
    return e.mode & 1
      ? le & 2 && Fe !== 0
        ? Fe & -Fe
        : Id.transition !== null
        ? (Vl === 0 && (Vl = ta()), Vl)
        : ((e = se),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ca(e.type))),
          e)
      : 1;
  }
  function yt(e, t, n, r) {
    if (50 < _r) throw ((_r = 0), (qi = null), Error(o(185)));
    nr(e, n, r),
      (!(le & 2) || e !== je) &&
        (e === je && (!(le & 2) && ($l |= n), Ne === 4 && en(e, Fe)),
        Xe(e, r),
        n === 1 &&
          le === 0 &&
          !(t.mode & 1) &&
          ((Zn = Le() + 500), vl && Kt()));
  }
  function Xe(e, t) {
    var n = e.callbackNode;
    If(e, t);
    var r = Jr(e, e === je ? Fe : 0);
    if (r === 0)
      n !== null && qu(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && qu(n), t === 1))
        e.tag === 0 ? Dd(cc.bind(null, e)) : Xa(cc.bind(null, e)),
          Od(function () {
            !(le & 6) && Kt();
          }),
          (n = null);
      else {
        switch (na(r)) {
          case 1:
            n = zo;
            break;
          case 4:
            n = bu;
            break;
          case 16:
            n = Kr;
            break;
          case 536870912:
            n = ea;
            break;
          default:
            n = Kr;
        }
        n = gc(n, sc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function sc(e, t) {
    if (((Hl = -1), (Vl = 0), le & 6)) throw Error(o(327));
    var n = e.callbackNode;
    if (Qn() && e.callbackNode !== n) return null;
    var r = Jr(e, e === je ? Fe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ul(e, r);
    else {
      t = r;
      var l = le;
      le |= 2;
      var u = dc();
      (je !== e || Fe !== t) && ((Ft = null), (Zn = Le() + 500), gn(e, t));
      do
        try {
          o1();
          break;
        } catch (p) {
          fc(e, p);
        }
      while (!0);
      vi(),
        (Fl.current = u),
        (le = l),
        Pe !== null ? (t = 0) : ((je = null), (Fe = 0), (t = Ne));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = _o(e)), l !== 0 && ((r = l), (t = bi(e, l)))),
        t === 1)
      )
        throw ((n = Nr), gn(e, 0), en(e, r), Xe(e, Le()), n);
      if (t === 6) en(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !r1(l) &&
            ((t = Ul(e, r)),
            t === 2 && ((u = _o(e)), u !== 0 && ((r = u), (t = bi(e, u)))),
            t === 1))
        )
          throw ((n = Nr), gn(e, 0), en(e, r), Xe(e, Le()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            kn(e, Ye, Ft);
            break;
          case 3:
            if (
              (en(e, r),
              (r & 130023424) === r && ((t = Gi + 500 - Le()), 10 < t))
            ) {
              if (Jr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ve(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = oi(kn.bind(null, e, Ye, Ft), t);
              break;
            }
            kn(e, Ye, Ft);
            break;
          case 4:
            if ((en(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var c = 31 - ft(r);
              (u = 1 << c), (c = t[c]), c > l && (l = c), (r &= ~u);
            }
            if (
              ((r = l),
              (r = Le() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * n1(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = oi(kn.bind(null, e, Ye, Ft), r);
              break;
            }
            kn(e, Ye, Ft);
            break;
          case 5:
            kn(e, Ye, Ft);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Xe(e, Le()), e.callbackNode === n ? sc.bind(null, e) : null;
  }
  function bi(e, t) {
    var n = zr;
    return (
      e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
      (e = Ul(e, t)),
      e !== 2 && ((t = Ye), (Ye = n), t !== null && eu(t)),
      e
    );
  }
  function eu(e) {
    Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
  }
  function r1(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!dt(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function en(e, t) {
    for (
      t &= ~Xi,
        t &= ~$l,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ft(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function cc(e) {
    if (le & 6) throw Error(o(327));
    Qn();
    var t = Jr(e, 0);
    if (!(t & 1)) return Xe(e, Le()), null;
    var n = Ul(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = _o(e);
      r !== 0 && ((t = r), (n = bi(e, r)));
    }
    if (n === 1) throw ((n = Nr), gn(e, 0), en(e, t), Xe(e, Le()), n);
    if (n === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      kn(e, Ye, Ft),
      Xe(e, Le()),
      null
    );
  }
  function tu(e, t) {
    var n = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      (le = n), le === 0 && ((Zn = Le() + 500), vl && Kt());
    }
  }
  function yn(e) {
    qt !== null && qt.tag === 0 && !(le & 6) && Qn();
    var t = le;
    le |= 1;
    var n = at.transition,
      r = se;
    try {
      if (((at.transition = null), (se = 1), e)) return e();
    } finally {
      (se = r), (at.transition = n), (le = t), !(le & 6) && Kt();
    }
  }
  function nu() {
    (nt = An.current), me(An);
  }
  function gn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), jd(n)), Pe !== null))
      for (n = Pe.return; n !== null; ) {
        var r = n;
        switch ((fi(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && ml();
            break;
          case 3:
            Hn(), me(Ze), me($e), Ci();
            break;
          case 5:
            Si(r);
            break;
          case 4:
            Hn();
            break;
          case 13:
            me(ge);
            break;
          case 19:
            me(ge);
            break;
          case 10:
            yi(r.type._context);
            break;
          case 22:
          case 23:
            nu();
        }
        n = n.return;
      }
    if (
      ((je = e),
      (Pe = e = tn(e.current, null)),
      (Fe = nt = t),
      (Ne = 0),
      (Nr = null),
      (Xi = $l = vn = 0),
      (Ye = zr = null),
      pn !== null)
    ) {
      for (t = 0; t < pn.length; t++)
        if (((n = pn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            u = n.pending;
          if (u !== null) {
            var c = u.next;
            (u.next = l), (r.next = c);
          }
          n.pending = r;
        }
      pn = null;
    }
    return e;
  }
  function fc(e, t) {
    do {
      var n = Pe;
      try {
        if ((vi(), (Tl.current = Nl), Ml)) {
          for (var r = ke.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          Ml = !1;
        }
        if (
          ((hn = 0),
          (_e = Re = ke = null),
          (Cr = !1),
          (Lr = 0),
          (Yi.current = null),
          n === null || n.return === null)
        ) {
          (Ne = 1), (Nr = t), (Pe = null);
          break;
        }
        e: {
          var u = e,
            c = n.return,
            p = n,
            h = t;
          if (
            ((t = Fe),
            (p.flags |= 32768),
            h !== null && typeof h == "object" && typeof h.then == "function")
          ) {
            var E = h,
              N = p,
              _ = N.tag;
            if (!(N.mode & 1) && (_ === 0 || _ === 11 || _ === 15)) {
              var P = N.alternate;
              P
                ? ((N.updateQueue = P.updateQueue),
                  (N.memoizedState = P.memoizedState),
                  (N.lanes = P.lanes))
                : ((N.updateQueue = null), (N.memoizedState = null));
            }
            var H = Fs(c);
            if (H !== null) {
              (H.flags &= -257),
                $s(H, c, p, u, t),
                H.mode & 1 && Bs(u, E, t),
                (t = H),
                (h = E);
              var Q = t.updateQueue;
              if (Q === null) {
                var K = new Set();
                K.add(h), (t.updateQueue = K);
              } else Q.add(h);
              break e;
            } else {
              if (!(t & 1)) {
                Bs(u, E, t), ru();
                break e;
              }
              h = Error(o(426));
            }
          } else if (ve && p.mode & 1) {
            var Te = Fs(c);
            if (Te !== null) {
              !(Te.flags & 65536) && (Te.flags |= 256),
                $s(Te, c, p, u, t),
                mi(Vn(h, p));
              break e;
            }
          }
          (u = h = Vn(h, p)),
            Ne !== 4 && (Ne = 2),
            zr === null ? (zr = [u]) : zr.push(u),
            (u = c);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var g = js(u, h, t);
                is(u, g);
                break e;
              case 1:
                p = h;
                var v = u.type,
                  k = u.stateNode;
                if (
                  !(u.flags & 128) &&
                  (typeof v.getDerivedStateFromError == "function" ||
                    (k !== null &&
                      typeof k.componentDidCatch == "function" &&
                      (Jt === null || !Jt.has(k))))
                ) {
                  (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                  var B = Os(u, p, t);
                  is(u, B);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        mc(n);
      } catch (Y) {
        (t = Y), Pe === n && n !== null && (Pe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function dc() {
    var e = Fl.current;
    return (Fl.current = Nl), e === null ? Nl : e;
  }
  function ru() {
    (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
      je === null || (!(vn & 268435455) && !($l & 268435455)) || en(je, Fe);
  }
  function Ul(e, t) {
    var n = le;
    le |= 2;
    var r = dc();
    (je !== e || Fe !== t) && ((Ft = null), gn(e, t));
    do
      try {
        l1();
        break;
      } catch (l) {
        fc(e, l);
      }
    while (!0);
    if ((vi(), (le = n), (Fl.current = r), Pe !== null)) throw Error(o(261));
    return (je = null), (Fe = 0), Ne;
  }
  function l1() {
    for (; Pe !== null; ) pc(Pe);
  }
  function o1() {
    for (; Pe !== null && !Nf(); ) pc(Pe);
  }
  function pc(e) {
    var t = yc(e.alternate, e, nt);
    (e.memoizedProps = e.pendingProps),
      t === null ? mc(e) : (Pe = t),
      (Yi.current = null);
  }
  function mc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = qd(n, t)), n !== null)) {
          (n.flags &= 32767), (Pe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ne = 6), (Pe = null);
          return;
        }
      } else if (((n = Jd(n, t, nt)), n !== null)) {
        Pe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Pe = t;
        return;
      }
      Pe = t = e;
    } while (t !== null);
    Ne === 0 && (Ne = 5);
  }
  function kn(e, t, n) {
    var r = se,
      l = at.transition;
    try {
      (at.transition = null), (se = 1), i1(e, t, n, r);
    } finally {
      (at.transition = l), (se = r);
    }
    return null;
  }
  function i1(e, t, n, r) {
    do Qn();
    while (qt !== null);
    if (le & 6) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = n.lanes | n.childLanes;
    if (
      (Wf(e, u),
      e === je && ((Pe = je = null), (Fe = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Il ||
        ((Il = !0),
        gc(Kr, function () {
          return Qn(), null;
        })),
      (u = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || u)
    ) {
      (u = at.transition), (at.transition = null);
      var c = se;
      se = 1;
      var p = le;
      (le |= 4),
        (Yi.current = null),
        e1(e, n),
        lc(n, e),
        Td(ri),
        (el = !!ni),
        (ri = ni = null),
        (e.current = n),
        t1(n),
        zf(),
        (le = p),
        (se = c),
        (at.transition = u);
    } else e.current = n;
    if (
      (Il && ((Il = !1), (qt = e), (Wl = l)),
      (u = e.pendingLanes),
      u === 0 && (Jt = null),
      Of(n.stateNode),
      Xe(e, Le()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Dl) throw ((Dl = !1), (e = Ji), (Ji = null), e);
    return (
      Wl & 1 && e.tag !== 0 && Qn(),
      (u = e.pendingLanes),
      u & 1 ? (e === qi ? _r++ : ((_r = 0), (qi = e))) : (_r = 0),
      Kt(),
      null
    );
  }
  function Qn() {
    if (qt !== null) {
      var e = na(Wl),
        t = at.transition,
        n = se;
      try {
        if (((at.transition = null), (se = 16 > e ? 16 : e), qt === null))
          var r = !1;
        else {
          if (((e = qt), (qt = null), (Wl = 0), le & 6)) throw Error(o(331));
          var l = le;
          for (le |= 4, U = e.current; U !== null; ) {
            var u = U,
              c = u.child;
            if (U.flags & 16) {
              var p = u.deletions;
              if (p !== null) {
                for (var h = 0; h < p.length; h++) {
                  var E = p[h];
                  for (U = E; U !== null; ) {
                    var N = U;
                    switch (N.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rr(8, N, u);
                    }
                    var _ = N.child;
                    if (_ !== null) (_.return = N), (U = _);
                    else
                      for (; U !== null; ) {
                        N = U;
                        var P = N.sibling,
                          H = N.return;
                        if ((bs(N), N === E)) {
                          U = null;
                          break;
                        }
                        if (P !== null) {
                          (P.return = H), (U = P);
                          break;
                        }
                        U = H;
                      }
                  }
                }
                var Q = u.alternate;
                if (Q !== null) {
                  var K = Q.child;
                  if (K !== null) {
                    Q.child = null;
                    do {
                      var Te = K.sibling;
                      (K.sibling = null), (K = Te);
                    } while (K !== null);
                  }
                }
                U = u;
              }
            }
            if (u.subtreeFlags & 2064 && c !== null) (c.return = u), (U = c);
            else
              e: for (; U !== null; ) {
                if (((u = U), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(9, u, u.return);
                  }
                var g = u.sibling;
                if (g !== null) {
                  (g.return = u.return), (U = g);
                  break e;
                }
                U = u.return;
              }
          }
          var v = e.current;
          for (U = v; U !== null; ) {
            c = U;
            var k = c.child;
            if (c.subtreeFlags & 2064 && k !== null) (k.return = c), (U = k);
            else
              e: for (c = v; U !== null; ) {
                if (((p = U), p.flags & 2048))
                  try {
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Bl(9, p);
                    }
                  } catch (Y) {
                    Ce(p, p.return, Y);
                  }
                if (p === c) {
                  U = null;
                  break e;
                }
                var B = p.sibling;
                if (B !== null) {
                  (B.return = p.return), (U = B);
                  break e;
                }
                U = p.return;
              }
          }
          if (
            ((le = l),
            Kt(),
            Et && typeof Et.onPostCommitFiberRoot == "function")
          )
            try {
              Et.onPostCommitFiberRoot(Yr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (se = n), (at.transition = t);
      }
    }
    return !1;
  }
  function hc(e, t, n) {
    (t = Vn(n, t)),
      (t = js(e, t, 1)),
      (e = Xt(e, t, 1)),
      (t = Ve()),
      e !== null && (nr(e, 1, t), Xe(e, t));
  }
  function Ce(e, t, n) {
    if (e.tag === 3) hc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          hc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Jt === null || !Jt.has(r)))
          ) {
            (e = Vn(n, e)),
              (e = Os(t, e, 1)),
              (t = Xt(t, e, 1)),
              (e = Ve()),
              t !== null && (nr(t, 1, e), Xe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function u1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ve()),
      (e.pingedLanes |= e.suspendedLanes & n),
      je === e &&
        (Fe & n) === n &&
        (Ne === 4 || (Ne === 3 && (Fe & 130023424) === Fe && 500 > Le() - Gi)
          ? gn(e, 0)
          : (Xi |= n)),
      Xe(e, t);
  }
  function vc(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Gr), (Gr <<= 1), !(Gr & 130023424) && (Gr = 4194304))
        : (t = 1));
    var n = Ve();
    (e = jt(e, t)), e !== null && (nr(e, t, n), Xe(e, n));
  }
  function a1(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), vc(e, n);
  }
  function s1(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    r !== null && r.delete(t), vc(e, n);
  }
  var yc;
  yc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ze.current) Ke = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (Ke = !1), Gd(e, t, n);
        Ke = !!(e.flags & 131072);
      }
    else (Ke = !1), ve && t.flags & 1048576 && Ga(t, gl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        jl(e, t), (e = t.pendingProps);
        var l = On(t, $e.current);
        Wn(t, n), (l = Mi(null, t, r, e, l, n));
        var u = Pi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Qe(r) ? ((u = !0), hl(t)) : (u = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              wi(t),
              (l.updater = zl),
              (t.stateNode = l),
              (l._reactInternals = t),
              Oi(t, r, e, n),
              (t = Di(null, t, r, !0, u, n)))
            : ((t.tag = 0), ve && u && ci(t), He(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (jl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = f1(r)),
            (e = mt(r, e)),
            l)
          ) {
            case 0:
              t = $i(null, t, r, e, n);
              break e;
            case 1:
              t = Us(null, t, r, e, n);
              break e;
            case 11:
              t = Ds(null, t, r, e, n);
              break e;
            case 14:
              t = Is(null, t, r, mt(r.type, e), n);
              break e;
          }
          throw Error(o(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          $i(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          Us(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((As(t), e === null)) throw Error(o(387));
          (r = t.pendingProps),
            (u = t.memoizedState),
            (l = u.element),
            os(e, t),
            Cl(t, r, null, n);
          var c = t.memoizedState;
          if (((r = c.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: c.cache,
                pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
                transitions: c.transitions,
              }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              (l = Vn(Error(o(423)), t)), (t = Zs(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Vn(Error(o(424)), t)), (t = Zs(e, t, r, n, l));
              break e;
            } else
              for (
                tt = At(t.stateNode.containerInfo.firstChild),
                  et = t,
                  ve = !0,
                  pt = null,
                  n = rs(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if (($n(), r === l)) {
              t = Bt(e, t, n);
              break e;
            }
            He(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          as(t),
          e === null && pi(t),
          (r = t.type),
          (l = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (c = l.children),
          li(r, l) ? (c = null) : u !== null && li(r, u) && (t.flags |= 32),
          Vs(e, t),
          He(e, t, c, n),
          t.child
        );
      case 6:
        return e === null && pi(t), null;
      case 13:
        return Qs(e, t, n);
      case 4:
        return (
          Ei(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Dn(t, null, r, n)) : He(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          Ds(e, t, r, l, n)
        );
      case 7:
        return He(e, t, t.pendingProps, n), t.child;
      case 8:
        return He(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return He(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (u = t.memoizedProps),
            (c = l.value),
            de(El, r._currentValue),
            (r._currentValue = c),
            u !== null)
          )
            if (dt(u.value, c)) {
              if (u.children === l.children && !Ze.current) {
                t = Bt(e, t, n);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var p = u.dependencies;
                if (p !== null) {
                  c = u.child;
                  for (var h = p.firstContext; h !== null; ) {
                    if (h.context === r) {
                      if (u.tag === 1) {
                        (h = Ot(-1, n & -n)), (h.tag = 2);
                        var E = u.updateQueue;
                        if (E !== null) {
                          E = E.shared;
                          var N = E.pending;
                          N === null
                            ? (h.next = h)
                            : ((h.next = N.next), (N.next = h)),
                            (E.pending = h);
                        }
                      }
                      (u.lanes |= n),
                        (h = u.alternate),
                        h !== null && (h.lanes |= n),
                        gi(u.return, n, t),
                        (p.lanes |= n);
                      break;
                    }
                    h = h.next;
                  }
                } else if (u.tag === 10) c = u.type === t.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((c = u.return), c === null)) throw Error(o(341));
                  (c.lanes |= n),
                    (p = c.alternate),
                    p !== null && (p.lanes |= n),
                    gi(c, n, t),
                    (c = u.sibling);
                } else c = u.child;
                if (c !== null) c.return = u;
                else
                  for (c = u; c !== null; ) {
                    if (c === t) {
                      c = null;
                      break;
                    }
                    if (((u = c.sibling), u !== null)) {
                      (u.return = c.return), (c = u);
                      break;
                    }
                    c = c.return;
                  }
                u = c;
              }
          He(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          Wn(t, n),
          (l = it(l)),
          (r = r(l)),
          (t.flags |= 1),
          He(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = mt(r, t.pendingProps)),
          (l = mt(r.type, l)),
          Is(e, t, r, l, n)
        );
      case 15:
        return Ws(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : mt(r, l)),
          jl(e, t),
          (t.tag = 1),
          Qe(r) ? ((e = !0), hl(t)) : (e = !1),
          Wn(t, n),
          zs(t, r, l),
          Oi(t, r, l, n),
          Di(null, t, r, !0, e, n)
        );
      case 19:
        return Ys(e, t, n);
      case 22:
        return Hs(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function gc(e, t) {
    return Ju(e, t);
  }
  function c1(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function st(e, t, n, r) {
    return new c1(e, t, n, r);
  }
  function lu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function f1(e) {
    if (typeof e == "function") return lu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === kt)) return 11;
      if (e === wt) return 14;
    }
    return 2;
  }
  function tn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = st(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Al(e, t, n, r, l, u) {
    var c = 2;
    if (((r = e), typeof e == "function")) lu(e) && (c = 1);
    else if (typeof e == "string") c = 5;
    else
      e: switch (e) {
        case ye:
          return wn(n.children, l, u, t);
        case Me:
          (c = 8), (l |= 8);
          break;
        case Se:
          return (
            (e = st(12, n, t, l | 2)), (e.elementType = Se), (e.lanes = u), e
          );
        case Je:
          return (e = st(13, n, t, l)), (e.elementType = Je), (e.lanes = u), e;
        case ct:
          return (e = st(19, n, t, l)), (e.elementType = ct), (e.lanes = u), e;
        case xe:
          return Zl(n, l, u, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ze:
                c = 10;
                break e;
              case gt:
                c = 9;
                break e;
              case kt:
                c = 11;
                break e;
              case wt:
                c = 14;
                break e;
              case Ae:
                (c = 16), (r = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = st(c, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = u), t
    );
  }
  function wn(e, t, n, r) {
    return (e = st(7, e, r, t)), (e.lanes = n), e;
  }
  function Zl(e, t, n, r) {
    return (
      (e = st(22, e, r, t)),
      (e.elementType = xe),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ou(e, t, n) {
    return (e = st(6, e, null, t)), (e.lanes = n), e;
  }
  function iu(e, t, n) {
    return (
      (t = st(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function d1(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = jo(0)),
      (this.expirationTimes = jo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = jo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function uu(e, t, n, r, l, u, c, p, h) {
    return (
      (e = new d1(e, t, n, p, h)),
      t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
      (u = st(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      wi(u),
      e
    );
  }
  function p1(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ee,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function kc(e) {
    if (!e) return Qt;
    e = e._reactInternals;
    e: {
      if (an(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Qe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Qe(n)) return Ka(e, n, t);
    }
    return t;
  }
  function wc(e, t, n, r, l, u, c, p, h) {
    return (
      (e = uu(n, r, !0, e, l, u, c, p, h)),
      (e.context = kc(null)),
      (n = e.current),
      (r = Ve()),
      (l = bt(n)),
      (u = Ot(r, l)),
      (u.callback = t ?? null),
      Xt(n, u, l),
      (e.current.lanes = l),
      nr(e, l, r),
      Xe(e, r),
      e
    );
  }
  function Ql(e, t, n, r) {
    var l = t.current,
      u = Ve(),
      c = bt(l);
    return (
      (n = kc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ot(u, c)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Xt(l, t, c)),
      e !== null && (yt(e, l, c, u), xl(e, l, c)),
      c
    );
  }
  function Kl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ec(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function au(e, t) {
    Ec(e, t), (e = e.alternate) && Ec(e, t);
  }
  var Sc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function su(e) {
    this._internalRoot = e;
  }
  (Yl.prototype.render = su.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      Ql(e, t, null, null);
    }),
    (Yl.prototype.unmount = su.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          yn(function () {
            Ql(null, e, null, null);
          }),
            (t[Rt] = null);
        }
      });
  function Yl(e) {
    this._internalRoot = e;
  }
  Yl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = oa();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
      Ht.splice(n, 0, e), n === 0 && aa(e);
    }
  };
  function cu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Xl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function xc() {}
  function m1(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var E = Kl(c);
          u.call(E);
        };
      }
      var c = wc(t, r, e, 0, null, !1, !1, "", xc);
      return (
        (e._reactRootContainer = c),
        (e[Rt] = c.current),
        vr(e.nodeType === 8 ? e.parentNode : e),
        yn(),
        c
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var p = r;
      r = function () {
        var E = Kl(h);
        p.call(E);
      };
    }
    var h = uu(e, 0, !1, null, null, !1, !1, "", xc);
    return (
      (e._reactRootContainer = h),
      (e[Rt] = h.current),
      vr(e.nodeType === 8 ? e.parentNode : e),
      yn(function () {
        Ql(t, h, n, r);
      }),
      h
    );
  }
  function Gl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var c = u;
      if (typeof l == "function") {
        var p = l;
        l = function () {
          var h = Kl(c);
          p.call(h);
        };
      }
      Ql(t, c, e, l);
    } else c = m1(n, t, e, l, r);
    return Kl(c);
  }
  (ra = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = tr(t.pendingLanes);
          n !== 0 &&
            (Oo(t, n | 1), Xe(t, Le()), !(le & 6) && ((Zn = Le() + 500), Kt()));
        }
        break;
      case 13:
        yn(function () {
          var r = jt(e, 1);
          if (r !== null) {
            var l = Ve();
            yt(r, e, 1, l);
          }
        }),
          au(e, 1);
    }
  }),
    (Bo = function (e) {
      if (e.tag === 13) {
        var t = jt(e, 134217728);
        if (t !== null) {
          var n = Ve();
          yt(t, e, 134217728, n);
        }
        au(e, 134217728);
      }
    }),
    (la = function (e) {
      if (e.tag === 13) {
        var t = bt(e),
          n = jt(e, t);
        if (n !== null) {
          var r = Ve();
          yt(n, e, t, r);
        }
        au(e, t);
      }
    }),
    (oa = function () {
      return se;
    }),
    (ia = function (e, t) {
      var n = se;
      try {
        return (se = e), t();
      } finally {
        se = n;
      }
    }),
    (Mo = function (e, t, n) {
      switch (t) {
        case "input":
          if ((ko(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = pl(r);
                if (!l) throw Error(o(90));
                Nu(r), ko(r, l);
              }
            }
          }
          break;
        case "textarea":
          Bu(e, n);
          break;
        case "select":
          (t = n.value), t != null && Sn(e, !!n.multiple, t, !1);
      }
    }),
    (Au = tu),
    (Zu = yn);
  var h1 = { usingClientEntryPoint: !1, Events: [kr, _n, pl, Vu, Uu, tu] },
    jr = {
      findFiberByHostInstance: sn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    v1 = {
      bundleType: jr.bundleType,
      version: jr.version,
      rendererPackageName: jr.rendererPackageName,
      rendererConfig: jr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: re.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Xu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: jr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jl.isDisabled && Jl.supportsFiber)
      try {
        (Yr = Jl.inject(v1)), (Et = Jl);
      } catch {}
  }
  return (
    (Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h1),
    (Ge.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!cu(t)) throw Error(o(200));
      return p1(e, t, null, n);
    }),
    (Ge.createRoot = function (e, t) {
      if (!cu(e)) throw Error(o(299));
      var n = !1,
        r = "",
        l = Sc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = uu(e, 1, !1, null, null, n, !1, r, l)),
        (e[Rt] = t.current),
        vr(e.nodeType === 8 ? e.parentNode : e),
        new su(t)
      );
    }),
    (Ge.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = Xu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ge.flushSync = function (e) {
      return yn(e);
    }),
    (Ge.hydrate = function (e, t, n) {
      if (!Xl(t)) throw Error(o(200));
      return Gl(null, e, t, !0, n);
    }),
    (Ge.hydrateRoot = function (e, t, n) {
      if (!cu(e)) throw Error(o(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        u = "",
        c = Sc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (c = n.onRecoverableError)),
        (t = wc(t, null, e, 1, n ?? null, l, !1, u, c)),
        (e[Rt] = t.current),
        vr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Yl(t);
    }),
    (Ge.render = function (e, t, n) {
      if (!Xl(t)) throw Error(o(200));
      return Gl(null, e, t, !1, n);
    }),
    (Ge.unmountComponentAtNode = function (e) {
      if (!Xl(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (yn(function () {
            Gl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Rt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ge.unstable_batchedUpdates = tu),
    (Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Xl(n)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Gl(e, t, n, !1, r);
    }),
    (Ge.version = "18.3.1-next-f1338f8080-20240426"),
    Ge
  );
}
var zc;
function C1() {
  if (zc) return pu.exports;
  zc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (a) {
        console.error(a);
      }
  }
  return i(), (pu.exports = x1()), pu.exports;
}
var _c;
function L1() {
  if (_c) return ql;
  _c = 1;
  var i = C1();
  return (ql.createRoot = i.createRoot), (ql.hydrateRoot = i.hydrateRoot), ql;
}
var T1 = L1();
function Ue() {
  return (
    (Ue =
      Object.assign ||
      function (i) {
        for (var a = 1; a < arguments.length; a++) {
          var o = arguments[a];
          for (var d in o)
            Object.prototype.hasOwnProperty.call(o, d) && (i[d] = o[d]);
        }
        return i;
      }),
    Ue.apply(this, arguments)
  );
}
function M1(i, a) {
  if (i == null) return {};
  var o = {},
    d = Object.keys(i),
    f,
    m;
  for (m = 0; m < d.length; m++)
    (f = d[m]), !(a.indexOf(f) >= 0) && (o[f] = i[f]);
  return o;
}
function rt(i, a) {
  if (i == null) return {};
  var o = M1(i, a),
    d,
    f;
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(i);
    for (f = 0; f < m.length; f++)
      (d = m[f]),
        !(a.indexOf(d) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(i, d) &&
          (o[d] = i[d]);
  }
  return o;
}
var vu = { exports: {} },
  yu,
  jc;
function P1() {
  if (jc) return yu;
  jc = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (yu = i), yu;
}
var gu, Oc;
function R1() {
  if (Oc) return gu;
  Oc = 1;
  var i = P1();
  function a() {}
  function o() {}
  return (
    (o.resetWarningCache = a),
    (gu = function () {
      function d(x, T, w, C, O, F) {
        if (F !== i) {
          var M = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((M.name = "Invariant Violation"), M);
        }
      }
      d.isRequired = d;
      function f() {
        return d;
      }
      var m = {
        array: d,
        bigint: d,
        bool: d,
        func: d,
        number: d,
        object: d,
        string: d,
        symbol: d,
        any: d,
        arrayOf: f,
        element: d,
        elementType: d,
        instanceOf: f,
        node: d,
        objectOf: f,
        oneOf: f,
        oneOfType: f,
        shape: f,
        exact: f,
        checkPropTypes: o,
        resetWarningCache: a,
      };
      return (m.PropTypes = m), m;
    }),
    gu
  );
}
var Bc;
function N1() {
  return Bc || ((Bc = 1), (vu.exports = R1()())), vu.exports;
}
var z1 = N1();
const Z = nf(z1);
var _1 = ["variant", "color", "size"],
  j1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        fill: o,
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.03 10.53l-3 3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l1.72-1.72H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.19l-1.72-1.72a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3 3c.29.29.29.77 0 1.06z",
      })
    );
  },
  O1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        stroke: o,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M8.5 12h6M12.5 15l3-3-3-3",
      }),
      s.createElement("path", {
        stroke: o,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",
      })
    );
  },
  B1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        fill: o,
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
        opacity: ".4",
      }),
      s.createElement("path", {
        fill: o,
        d: "M16.03 11.47l-3-3a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l1.72 1.72H8.5c-.41 0-.75.34-.75.75s.34.75.75.75h5.19l-1.72 1.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3-3c.29-.29.29-.77 0-1.06z",
      })
    );
  },
  Fc = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        stroke: o,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8.5 12h6",
      }),
      s.createElement("path", {
        stroke: o,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M12.5 15l3-3-3-3",
      })
    );
  },
  F1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        fill: o,
        d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z",
      }),
      s.createElement("path", {
        fill: o,
        d: "M14.5 12.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75z",
      }),
      s.createElement("path", {
        fill: o,
        d: "M12.5 15.75c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L14.44 12l-2.47-2.47a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3 3c.29.29.29.77 0 1.06l-3 3c-.15.15-.34.22-.53.22z",
      })
    );
  },
  $1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        stroke: o,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
      }),
      s.createElement(
        "g",
        { opacity: ".54" },
        s.createElement("path", {
          stroke: o,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          d: "M8.5 12h6M12.5 15l3-3-3-3",
        })
      )
    );
  },
  D1 = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(j1, { color: o });
      case "Broken":
        return s.createElement(O1, { color: o });
      case "Bulk":
        return s.createElement(B1, { color: o });
      case "Linear":
        return s.createElement(Fc, { color: o });
      case "Outline":
        return s.createElement(F1, { color: o });
      case "TwoTone":
        return s.createElement($1, { color: o });
      default:
        return s.createElement(Fc, { color: o });
    }
  },
  ro = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, _1);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      D1(o, d)
    );
  });
ro.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
ro.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
ro.displayName = "ArrowCircleRight2";
var I1 = ["variant", "color", "size"],
  W1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        fill: o,
        d: "M17.919 8.18H6.079c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97 3.21-3.21c.67-.68.19-1.84-.77-1.84z",
      })
    );
  },
  H1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        stroke: o,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.5",
        d: "M16.01 12.85l-2.62 2.62c-.77.77-2.03.77-2.8 0L4.08 8.95M19.92 8.95l-1.04 1.04",
      })
    );
  },
  V1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        fill: o,
        d: "M15.48 13.23l-3.79-5.05H6.08c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97z",
        opacity: ".4",
      }),
      s.createElement("path", {
        fill: o,
        d: "M17.92 8.18h-6.23l3.79 5.05 3.21-3.21c.67-.68.19-1.84-.77-1.84z",
      })
    );
  },
  $c = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        stroke: o,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.5",
        d: "M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95",
      })
    );
  },
  U1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        fill: o,
        d: "M12 16.8c-.7 0-1.4-.27-1.93-.8L3.55 9.48a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.48.48 1.26.48 1.74 0l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L13.93 16c-.53.53-1.23.8-1.93.8z",
      })
    );
  },
  A1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        stroke: o,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.5",
        d: "M19.92 8.95l-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95",
      })
    );
  },
  Z1 = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(W1, { color: o });
      case "Broken":
        return s.createElement(H1, { color: o });
      case "Bulk":
        return s.createElement(V1, { color: o });
      case "Linear":
        return s.createElement($c, { color: o });
      case "Outline":
        return s.createElement(U1, { color: o });
      case "TwoTone":
        return s.createElement(A1, { color: o });
      default:
        return s.createElement($c, { color: o });
    }
  },
  lo = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, I1);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      Z1(o, d)
    );
  });
lo.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
lo.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
lo.displayName = "ArrowDown2";
var Q1 = ["variant", "color", "size"],
  K1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        fill: o,
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm.63 12.24l-4.29 4.29a.75.75 0 01-1.06 0l-4.29-4.29a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.01 3.01V6c0-.41.34-.75.75-.75s.75.34.75.75v10.19l3.01-3.01c.29-.29.77-.29 1.06 0 .15.15.22.34.22.53s-.08.39-.22.53z",
      })
    );
  },
  Y1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        stroke: o,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.5",
        d: "M18.07 14.43L12 20.5l-6.07-6.07M12 12v8.33M12 3.5v4.53",
      })
    );
  },
  X1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        fill: o,
        d: "M2 16.19V7.81C2 4.17 4.17 2 7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19z",
        opacity: ".4",
      }),
      s.createElement("path", {
        fill: o,
        d: "M11.47 18.53l-4.29-4.29a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.01 3.01V6c0-.41.34-.75.75-.75s.75.34.75.75v10.19l3.01-3.01c.29-.29.77-.29 1.06 0 .15.15.22.34.22.53s-.07.38-.22.53l-4.29 4.29a.75.75 0 01-1.06 0z",
      })
    );
  },
  Dc = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        stroke: o,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.5",
        d: "M18.07 14.43L12 20.5l-6.07-6.07M12 3.5v16.83",
      })
    );
  },
  G1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        fill: o,
        d: "M12 21.25c-.19 0-.38-.07-.53-.22L5.4 14.96a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0L12 19.44l5.54-5.54c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.07 6.07c-.15.15-.34.22-.53.22z",
      }),
      s.createElement("path", {
        fill: o,
        d: "M12 21.08c-.41 0-.75-.34-.75-.75V3.5c0-.41.34-.75.75-.75s.75.34.75.75v16.83c0 .41-.34.75-.75.75z",
      })
    );
  },
  J1 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        stroke: o,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.5",
        d: "M18.07 14.43L12 20.5l-6.07-6.07",
      }),
      s.createElement("path", {
        stroke: o,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "10",
        strokeWidth: "1.5",
        d: "M12 3.5v16.83",
        opacity: ".4",
      })
    );
  },
  q1 = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(K1, { color: o });
      case "Broken":
        return s.createElement(Y1, { color: o });
      case "Bulk":
        return s.createElement(X1, { color: o });
      case "Linear":
        return s.createElement(Dc, { color: o });
      case "Outline":
        return s.createElement(G1, { color: o });
      case "TwoTone":
        return s.createElement(J1, { color: o });
      default:
        return s.createElement(Dc, { color: o });
    }
  },
  oo = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, Q1);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      q1(o, d)
    );
  });
oo.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
oo.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
oo.displayName = "ArrowDown";
var b1 = ["variant", "color", "size"],
  e2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        fill: o,
        d: "M16.16 10s-.15 1-3.25 5c-2.91 3.77 1.3 6.64 1.8 6.97.03.02.06.02.1 0 .68-.42 8.25-5.29 1.35-11.97z",
      }),
      s.createElement("path", {
        fill: o,
        d: "M13.76 7.79c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10z",
      })
    );
  },
  t2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M17.85 12c-.43-.65-.98-1.31-1.69-2 0 0-.15 1-3.25 5-2.91 3.77 1.3 6.64 1.8 6.97.03.02.06.02.1 0 .46-.29 4.03-2.58 4.22-6.09",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        d: "M13.76 7.79c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  n2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        opacity: ".4",
        d: "M16.16 10s-.15 1-3.25 5c-2.91 3.77 1.3 6.64 1.8 6.97.03.02.06.02.1 0 .68-.42 8.25-5.29 1.35-11.97Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M13.76 7.79c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10Z",
        fill: o,
      })
    );
  },
  Ic = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M16.2 10s-.2 1-3.2 5c-2.9 3.8 1.3 6.6 1.8 7h.1c.6-.5 8.2-5.3 1.3-12Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        d: "M13.8 7.8c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  r2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M14.76 22.721c-.17 0-.33-.04-.46-.12-.45-.29-2.69-1.84-3.1-4.2-.22-1.31.15-2.61 1.11-3.85 2.79-3.61 3.1-4.66 3.11-4.7.04-.28.23-.48.5-.57.27-.09.55 0 .76.2 2.28 2.21 3.32 4.49 3.08 6.78-.38 3.59-3.86 5.94-4.55 6.37-.12.05-.29.09-.45.09Zm1.62-11.41c-.46.81-1.3 2.11-2.88 4.14-.71.91-.97 1.79-.82 2.68.24 1.39 1.46 2.48 2.09 2.95.99-.69 3.23-2.51 3.49-5.02.17-1.54-.46-3.13-1.88-4.75Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M10.28 22.73c-.26 0-.52-.07-.71-.12-2.21-.63-4.21-2.65-4.99-5.02-.8-2.43-.31-4.97 1.39-7.16 3.1-4.06 4.13-7.33 4.37-8.23.11-.43.43-.76.87-.89.45-.12.94.01 1.28.35.03.02.05.05.07.08.94 1.26 1.95 3.51 1.95 6.05 0 1.74-1.22 3.32-2.4 4.84-1.25 1.62-2.54 3.29-2.4 5.1.13 1.34.71 2.36 1.1 3.04.33.57.64 1.11.25 1.62-.21.26-.49.34-.78.34Zm-.53-.76h.01-.01Zm1.9-18.91c-.46 1.51-1.66 4.57-4.49 8.29-1.77 2.29-1.6 4.41-1.15 5.78.53 1.61 1.73 3.01 3.13 3.71-.38-.74-.8-1.74-.92-2.98-.18-2.4 1.35-4.39 2.71-6.15 1.07-1.39 2.08-2.7 2.08-3.93 0-1.9-.68-3.64-1.36-4.72Zm.14-.49s0 .01 0 0c0 .01 0 0 0 0Z",
        fill: o,
      })
    );
  },
  l2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        opacity: ".4",
        d: "M16.16 10s-.15 1-3.25 5c-2.91 3.77 1.3 6.64 1.8 6.97.03.02.06.02.1 0 .68-.42 8.25-5.29 1.35-11.97Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        d: "M13.76 7.79c0-2.3-.9-4.4-1.8-5.6-.3-.3-.8-.2-.9.2-.4 1.5-1.6 4.7-4.5 8.5-3.7 4.8-.3 10 3.2 11 1.9.5-.5-1-.8-4.1-.3-3.9 4.8-6.8 4.8-10Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  o2 = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(e2, { color: o });
      case "Broken":
        return s.createElement(t2, { color: o });
      case "Bulk":
        return s.createElement(n2, { color: o });
      case "Linear":
        return s.createElement(Ic, { color: o });
      case "Outline":
        return s.createElement(r2, { color: o });
      case "TwoTone":
        return s.createElement(l2, { color: o });
      default:
        return s.createElement(Ic, { color: o });
    }
  },
  io = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, b1);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      o2(o, d)
    );
  });
io.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
io.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
io.displayName = "HuobiToken";
var i2 = ["variant", "color", "size"],
  u2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M17 2H7C4.24 2 2 4.23 2 6.98v6.98c0 2.75 2.24 4.98 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4H17c2.76 0 5-2.23 5-4.98V6.98C22 4.23 19.76 2 17 2Zm-4 11.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Zm4-5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Z",
        fill: o,
      })
    );
  },
  a2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M2 8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-1",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        d: "M15.988 8h1.01M7 8h5.51M7 13h6",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  s2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        opacity: ".4",
        d: "M2 12.97V6.99C2 4.23 4.24 2 7 2h10c2.76 0 5 2.23 5 4.99v6.98c0 2.75-2.24 4.98-5 4.98h-1.5c-.31 0-.61.15-.8.4l-1.5 1.99c-.66.88-1.74.88-2.4 0l-1.5-1.99c-.16-.22-.52-.4-.8-.4H7c-2.76 0-5-2.23-5-4.98v-1Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M17 8.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM13 13.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
        fill: o,
      })
    );
  },
  Wc = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        d: "M7 8h10M7 13h6",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  c2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M16 22.75H3c-.96 0-1.75-.79-1.75-1.75V8c0-4.42 2.33-6.75 6.75-6.75h8c4.42 0 6.75 2.33 6.75 6.75v8c0 4.42-2.33 6.75-6.75 6.75Zm-8-20C4.42 2.75 2.75 4.42 2.75 8v13c0 .14.11.25.25.25h13c3.58 0 5.25-1.67 5.25-5.25V8c0-3.58-1.67-5.25-5.25-5.25H8Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M17 10.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM14 15.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75Z",
        fill: o,
      })
    );
  },
  f2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        opacity: ".4",
        d: "M7 8h10M7 13h6",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  d2 = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(u2, { color: o });
      case "Broken":
        return s.createElement(a2, { color: o });
      case "Bulk":
        return s.createElement(s2, { color: o });
      case "Linear":
        return s.createElement(Wc, { color: o });
      case "Outline":
        return s.createElement(c2, { color: o });
      case "TwoTone":
        return s.createElement(f2, { color: o });
      default:
        return s.createElement(Wc, { color: o });
    }
  },
  uo = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, i2);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      d2(o, d)
    );
  });
uo.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
uo.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
uo.displayName = "MessageText1";
var p2 = ["variant", "color", "size"],
  m2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM17 17.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-4.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-4.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Z",
        fill: o,
      })
    );
  },
  h2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M3 7h18M9.49 12H21M3 12h2.99M3 17h18",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
      })
    );
  },
  v2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        opacity: ".4",
        d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M17 8.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM17 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM17 17.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Z",
        fill: o,
      })
    );
  },
  Hc = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M3 7h18M3 12h18M3 17h18",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
      })
    );
  },
  y2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 12.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 17.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z",
        fill: o,
      })
    );
  },
  g2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M3 7h18",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
      }),
      s.createElement("path", {
        opacity: ".34",
        d: "M3 12h18",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
      }),
      s.createElement("path", {
        d: "M3 17h18",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
      })
    );
  },
  k2 = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(m2, { color: o });
      case "Broken":
        return s.createElement(h2, { color: o });
      case "Bulk":
        return s.createElement(v2, { color: o });
      case "Linear":
        return s.createElement(Hc, { color: o });
      case "Outline":
        return s.createElement(y2, { color: o });
      case "TwoTone":
        return s.createElement(g2, { color: o });
      default:
        return s.createElement(Hc, { color: o });
    }
  },
  ao = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, p2);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      k2(o, d)
    );
  });
ao.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
ao.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
ao.displayName = "HambergerMenu";
var w2 = ["variant", "color", "size"],
  E2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M20.36 12.732c-.37 0-.68-.28-.72-.65a7.614 7.614 0 0 0-3.24-5.44.723.723 0 0 1-.18-1.01c.23-.33.68-.41 1.01-.18a9.115 9.115 0 0 1 3.86 6.48c.04.4-.25.76-.65.8h-.08ZM3.74 12.781h-.07a.73.73 0 0 1-.65-.8 9.083 9.083 0 0 1 3.8-6.49c.32-.23.78-.15 1.01.17.23.33.15.78-.17 1.01a7.632 7.632 0 0 0-3.19 5.45c-.04.38-.36.66-.73.66ZM15.99 21.1c-1.23.59-2.55.89-3.93.89-1.44 0-2.81-.32-4.09-.97a.715.715 0 0 1-.32-.97c.17-.36.61-.5.97-.33.63.32 1.3.54 1.98.67.92.18 1.86.19 2.78.03.68-.12 1.35-.33 1.97-.63.37-.17.81-.03.97.34.18.36.04.8-.33.97ZM12.05 2.012c-1.55 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.56 0 2.82-1.26 2.82-2.82 0-1.56-1.26-2.82-2.82-2.82ZM5.05 13.871c-1.55 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.56 0 2.82-1.26 2.82-2.82 0-1.56-1.27-2.82-2.82-2.82ZM18.95 13.871c-1.55 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.56 0 2.82-1.26 2.82-2.82 0-1.56-1.26-2.82-2.82-2.82Z",
        fill: o,
      })
    );
  },
  S2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M16.96 6.172c2 1.39 3.38 3.6 3.66 6.15M3.49 12.369a8.601 8.601 0 0 1 3.6-6.15M8.19 20.941c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M9.28 4.92a2.78 2.78 0 1 0 2.78-2.78M4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM21.94 17.14a2.78 2.78 0 1 0-2.78 2.78",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  x2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        opacity: ".4",
        d: "M20.36 12.732c-.37 0-.68-.28-.72-.65a7.614 7.614 0 0 0-3.24-5.44.723.723 0 0 1-.18-1.01c.23-.33.68-.41 1.01-.18a9.115 9.115 0 0 1 3.86 6.48c.04.4-.25.76-.65.8h-.08ZM3.74 12.781h-.07a.73.73 0 0 1-.65-.8 9.083 9.083 0 0 1 3.8-6.49c.32-.23.78-.15 1.01.17.23.33.15.78-.17 1.01a7.632 7.632 0 0 0-3.19 5.45c-.04.38-.36.66-.73.66ZM15.99 21.1c-1.23.59-2.55.89-3.93.89-1.44 0-2.81-.32-4.09-.97a.715.715 0 0 1-.32-.97c.17-.36.61-.5.97-.33.63.32 1.3.54 1.98.67.92.18 1.86.19 2.78.03.68-.12 1.35-.33 1.97-.63.37-.17.81-.03.97.34.18.36.04.8-.33.97Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M12.05 2.012c-1.55 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.56 0 2.82-1.26 2.82-2.82 0-1.56-1.26-2.82-2.82-2.82ZM5.05 13.871c-1.55 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.56 0 2.82-1.26 2.82-2.82 0-1.56-1.27-2.82-2.82-2.82ZM18.95 13.871c-1.55 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.56 0 2.82-1.26 2.82-2.82 0-1.56-1.26-2.82-2.82-2.82Z",
        fill: o,
      })
    );
  },
  Vc = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  C2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M20.62 13.07c-.38 0-.7-.29-.75-.67a7.834 7.834 0 0 0-3.34-5.61.752.752 0 0 1-.19-1.04c.24-.34.71-.42 1.04-.19a9.335 9.335 0 0 1 3.97 6.68c.04.41-.25.78-.67.83h-.06ZM3.49 13.12h-.08a.766.766 0 0 1-.67-.83c.27-2.69 1.7-5.12 3.91-6.69a.753.753 0 1 1 .87 1.23 7.847 7.847 0 0 0-3.29 5.62.74.74 0 0 1-.74.67ZM12.06 22.61c-1.48 0-2.89-.34-4.21-1a.75.75 0 0 1-.33-1.01.75.75 0 0 1 1.01-.33 7.904 7.904 0 0 0 6.94.06c.37-.18.82-.02 1 .35.18.37.02.82-.35 1-1.28.62-2.64.93-4.06.93ZM12.06 8.439a3.53 3.53 0 1 1-.002-7.059 3.53 3.53 0 0 1 .001 7.059Zm0-5.55c-1.12 0-2.03.91-2.03 2.03 0 1.12.91 2.03 2.03 2.03 1.12 0 2.03-.91 2.03-2.03 0-1.12-.92-2.03-2.03-2.03ZM4.83 20.67a3.53 3.53 0 1 1 0-7.06 3.53 3.53 0 0 1 0 7.06Zm0-5.56c-1.12 0-2.03.91-2.03 2.03 0 1.12.91 2.03 2.03 2.03 1.12 0 2.03-.91 2.03-2.03 0-1.12-.91-2.03-2.03-2.03ZM19.17 20.67a3.53 3.53 0 1 1 3.53-3.53c-.01 1.94-1.59 3.53-3.53 3.53Zm0-5.56c-1.12 0-2.03.91-2.03 2.03 0 1.12.91 2.03 2.03 2.03 1.12 0 2.03-.91 2.03-2.03a2.038 2.038 0 0 0-2.03-2.03Z",
        fill: o,
      })
    );
  },
  L2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        opacity: ".34",
        d: "M16.96 6.172c2 1.39 3.38 3.6 3.66 6.15M3.49 12.369a8.601 8.601 0 0 1 3.6-6.15M8.19 20.941c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        d: "M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  T2 = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(E2, { color: o });
      case "Broken":
        return s.createElement(S2, { color: o });
      case "Bulk":
        return s.createElement(x2, { color: o });
      case "Linear":
        return s.createElement(Vc, { color: o });
      case "Outline":
        return s.createElement(C2, { color: o });
      case "TwoTone":
        return s.createElement(L2, { color: o });
      default:
        return s.createElement(Vc, { color: o });
    }
  },
  so = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, w2);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      T2(o, d)
    );
  });
so.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
so.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
so.displayName = "Share";
var M2 = ["variant", "color", "size"],
  P2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "m19.34 14.49-1-1.66c-.21-.37-.4-1.07-.4-1.48V8.82a5.91 5.91 0 0 0-3.37-5.33A2.926 2.926 0 0 0 11.99 2c-1.09 0-2.07.59-2.59 1.52-1.95.97-3.3 2.98-3.3 5.3v2.53c0 .41-.19 1.11-.4 1.47l-1.01 1.67c-.4.67-.49 1.41-.24 2.09.24.67.81 1.19 1.55 1.44 1.94.66 3.98.98 6.02.98 2.04 0 4.08-.32 6.02-.97.7-.23 1.24-.76 1.5-1.45s.19-1.45-.2-2.09ZM14.83 20.01A3.014 3.014 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z",
        fill: o,
      })
    );
  },
  R2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3a2.996 2.996 0 0 0 2.83-3.99M2 14.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5M14 2H9C4 2 2 4 2 9v2",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  N2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        opacity: ".4",
        d: "m19.34 14.488-1-1.66c-.21-.37-.4-1.07-.4-1.48v-2.53c0-3.26-2.65-5.92-5.92-5.92S6.1 5.558 6.1 8.818v2.53c0 .41-.19 1.11-.4 1.47l-1.01 1.67c-.4.67-.49 1.41-.24 2.09.24.67.81 1.19 1.55 1.44 1.94.66 3.98.98 6.02.98 2.04 0 4.08-.32 6.02-.97.7-.23 1.24-.76 1.5-1.45s.19-1.45-.2-2.09Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M14.25 3.32c-.69-.27-1.44-.42-2.23-.42-.78 0-1.53.14-2.22.42.43-.81 1.28-1.32 2.22-1.32.95 0 1.79.51 2.23 1.32ZM14.83 20.01A3.014 3.014 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z",
        fill: o,
      })
    );
  },
  Uc = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
      }),
      s.createElement("path", {
        d: "M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        d: "M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
      })
    );
  },
  z2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M12.02 20.532c-2.33 0-4.66-.37-6.87-1.11-.84-.29-1.48-.88-1.76-1.65-.29-.77-.19-1.62.27-2.38l1.15-1.91c.24-.4.46-1.2.46-1.67v-2.89c0-3.72 3.03-6.75 6.75-6.75s6.75 3.03 6.75 6.75v2.89c0 .46.22 1.27.46 1.68l1.14 1.9c.43.72.51 1.59.22 2.38a2.72 2.72 0 0 1-1.71 1.65c-2.2.74-4.53 1.11-6.86 1.11Zm0-16.86c-2.89 0-5.25 2.35-5.25 5.25v2.89c0 .73-.3 1.81-.67 2.44l-1.15 1.91c-.22.37-.28.76-.15 1.09.12.34.42.6.83.74a20 20 0 0 0 12.79 0c.36-.12.64-.39.77-.75s.1-.75-.1-1.08l-1.15-1.91c-.38-.65-.67-1.72-.67-2.45v-2.88c0-2.9-2.35-5.25-5.25-5.25Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M13.88 3.94c-.07 0-.14-.01-.21-.03-.29-.08-.57-.14-.84-.18-.85-.11-1.67-.05-2.44.18-.28.09-.58 0-.77-.21a.742.742 0 0 1-.14-.78 2.724 2.724 0 0 1 2.55-1.74c1.14 0 2.14.68 2.55 1.74.1.27.05.57-.14.78-.15.16-.36.24-.56.24ZM12.02 22.809c-.99 0-1.95-.4-2.65-1.1-.7-.7-1.1-1.66-1.1-2.65h1.5c0 .59.24 1.17.66 1.59.42.42 1 .66 1.59.66 1.24 0 2.25-1.01 2.25-2.25h1.5c0 2.07-1.68 3.75-3.75 3.75Z",
        fill: o,
      })
    );
  },
  _2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
      }),
      s.createElement("path", {
        d: "M13.87 3.201a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        opacity: ".4",
        d: "M15.02 19.059c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
      })
    );
  },
  j2 = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(P2, { color: o });
      case "Broken":
        return s.createElement(R2, { color: o });
      case "Bulk":
        return s.createElement(N2, { color: o });
      case "Linear":
        return s.createElement(Uc, { color: o });
      case "Outline":
        return s.createElement(z2, { color: o });
      case "TwoTone":
        return s.createElement(_2, { color: o });
      default:
        return s.createElement(Uc, { color: o });
    }
  },
  co = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, M2);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      j2(o, d)
    );
  });
co.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
co.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
co.displayName = "Notification";
var O2 = ["variant", "color", "size"],
  B2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM21.3 21.999c-.18 0-.36-.07-.49-.2l-1.86-1.86a.706.706 0 0 1 0-.99c.27-.27.71-.27.99 0l1.86 1.86c.27.27.27.71 0 .99-.14.13-.32.2-.5.2Z",
        fill: o,
      })
    );
  },
  F2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M11.5 2c5.25 0 9.5 4.25 9.5 9.5S16.75 21 11.5 21 2 16.75 2 11.5c0-3.7 2.11-6.9 5.2-8.47M22 22l-2-2",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  $2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        opacity: ".4",
        d: "M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M21.3 21.999c-.18 0-.36-.07-.49-.2l-1.86-1.86a.706.706 0 0 1 0-.99c.27-.27.71-.27.99 0l1.86 1.86c.27.27.27.71 0 .99-.14.13-.32.2-.5.2Z",
        fill: o,
      })
    );
  },
  Ac = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  D2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M11.5 21.75c-5.65 0-10.25-4.6-10.25-10.25S5.85 1.25 11.5 1.25s10.25 4.6 10.25 10.25-4.6 10.25-10.25 10.25Zm0-19c-4.83 0-8.75 3.93-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.93 8.75-8.75-3.92-8.75-8.75-8.75ZM22 22.751c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z",
        fill: o,
      })
    );
  },
  I2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        opacity: ".4",
        d: "m22 22-2-2",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  W2 = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(B2, { color: o });
      case "Broken":
        return s.createElement(F2, { color: o });
      case "Bulk":
        return s.createElement($2, { color: o });
      case "Linear":
        return s.createElement(Ac, { color: o });
      case "Outline":
        return s.createElement(D2, { color: o });
      case "TwoTone":
        return s.createElement(I2, { color: o });
      default:
        return s.createElement(Ac, { color: o });
    }
  },
  fo = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, O2);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      W2(o, d)
    );
  });
fo.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
fo.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
fo.displayName = "SearchNormal1";
var H2 = ["variant", "color", "size"],
  V2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M7.24 2h-1.9C3.15 2 2 3.15 2 5.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C10.57 3.15 9.42 2 7.24 2ZM18.67 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C22 3.15 20.85 2 18.67 2ZM18.67 13.43h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33ZM7.24 13.43h-1.9C3.15 13.43 2 14.58 2 16.76v1.9C2 20.85 3.15 22 5.33 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34Z",
        fill: o,
      })
    );
  },
  U2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3ZM19 2h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3h2c2 0 3-1 3-3V5M17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  A2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M7.24 2h-1.9C3.15 2 2 3.15 2 5.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C10.57 3.15 9.42 2 7.24 2Z",
        fill: o,
      }),
      s.createElement("path", {
        opacity: ".4",
        d: "M18.67 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C22 3.15 20.85 2 18.67 2Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M18.67 13.43h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33Z",
        fill: o,
      }),
      s.createElement("path", {
        opacity: ".4",
        d: "M7.24 13.43h-1.9C3.15 13.43 2 14.58 2 16.76v1.9C2 20.85 3.15 22 5.33 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34Z",
        fill: o,
      })
    );
  },
  Zc = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3ZM17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  Z2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M7 10.75H5c-2.42 0-3.75-1.33-3.75-3.75V5c0-2.42 1.33-3.75 3.75-3.75h2c2.42 0 3.75 1.33 3.75 3.75v2c0 2.42-1.33 3.75-3.75 3.75Zm-2-8c-1.58 0-2.25.67-2.25 2.25v2c0 1.58.67 2.25 2.25 2.25h2c1.58 0 2.25-.67 2.25-2.25V5c0-1.58-.67-2.25-2.25-2.25H5ZM19 10.75h-2c-2.42 0-3.75-1.33-3.75-3.75V5c0-2.42 1.33-3.75 3.75-3.75h2c2.42 0 3.75 1.33 3.75 3.75v2c0 2.42-1.33 3.75-3.75 3.75Zm-2-8c-1.58 0-2.25.67-2.25 2.25v2c0 1.58.67 2.25 2.25 2.25h2c1.58 0 2.25-.67 2.25-2.25V5c0-1.58-.67-2.25-2.25-2.25h-2ZM19 22.75h-2c-2.42 0-3.75-1.33-3.75-3.75v-2c0-2.42 1.33-3.75 3.75-3.75h2c2.42 0 3.75 1.33 3.75 3.75v2c0 2.42-1.33 3.75-3.75 3.75Zm-2-8c-1.58 0-2.25.67-2.25 2.25v2c0 1.58.67 2.25 2.25 2.25h2c1.58 0 2.25-.67 2.25-2.25v-2c0-1.58-.67-2.25-2.25-2.25h-2ZM7 22.75H5c-2.42 0-3.75-1.33-3.75-3.75v-2c0-2.42 1.33-3.75 3.75-3.75h2c2.42 0 3.75 1.33 3.75 3.75v2c0 2.42-1.33 3.75-3.75 3.75Zm-2-8c-1.58 0-2.25.67-2.25 2.25v2c0 1.58.67 2.25 2.25 2.25h2c1.58 0 2.25-.67 2.25-2.25v-2c0-1.58-.67-2.25-2.25-2.25H5Z",
        fill: o,
      })
    );
  },
  Q2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        opacity: ".34",
        d: "M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        d: "M17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        opacity: ".34",
        d: "M17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        d: "M5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeMiterlimit: "10",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  K2 = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(V2, { color: o });
      case "Broken":
        return s.createElement(U2, { color: o });
      case "Bulk":
        return s.createElement(A2, { color: o });
      case "Linear":
        return s.createElement(Zc, { color: o });
      case "Outline":
        return s.createElement(Z2, { color: o });
      case "TwoTone":
        return s.createElement(Q2, { color: o });
      default:
        return s.createElement(Zc, { color: o });
    }
  },
  po = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, H2);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      K2(o, d)
    );
  });
po.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
po.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
po.displayName = "Category";
var Y2 = ["variant", "color", "size"],
  X2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M16.44 3.102c-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 0 0-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z",
        fill: o,
      })
    );
  },
  G2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M20.59 4.972c.88.99 1.41 2.29 1.41 3.72 0 7-6.48 11.13-9.38 12.13-.34.12-.9.12-1.24 0-2.9-1-9.38-5.13-9.38-12.13 0-3.09 2.49-5.59 5.56-5.59 1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  J2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M22 8.692c0 1.19-.19 2.29-.52 3.31H2.52c-.33-1.02-.52-2.12-.52-3.31 0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59Z",
        fill: o,
      }),
      s.createElement("path", {
        opacity: ".4",
        d: "M21.48 12c-1.58 5-6.45 7.99-8.86 8.81-.34.12-.9.12-1.24 0C8.97 19.99 4.1 17 2.52 12h18.96Z",
        fill: o,
      })
    );
  },
  Qc = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  q2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M12 21.652c-.31 0-.61-.04-.86-.13-3.82-1.31-9.89-5.96-9.89-12.83 0-3.5 2.83-6.34 6.31-6.34 1.69 0 3.27.66 4.44 1.84a6.214 6.214 0 0 1 4.44-1.84c3.48 0 6.31 2.85 6.31 6.34 0 6.88-6.07 11.52-9.89 12.83-.25.09-.55.13-.86.13Zm-4.44-17.8c-2.65 0-4.81 2.17-4.81 4.84 0 6.83 6.57 10.63 8.88 11.42.18.06.57.06.75 0 2.3-.79 8.88-4.58 8.88-11.42 0-2.67-2.16-4.84-4.81-4.84-1.52 0-2.93.71-3.84 1.94-.28.38-.92.38-1.2 0a4.77 4.77 0 0 0-3.85-1.94Z",
        fill: o,
      })
    );
  },
  b2 = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M12.62 20.812c-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12 0-3.09 2.49-5.59 5.56-5.59 1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24c3.07 0 5.56 2.5 5.56 5.59 0 7-6.48 11.13-9.38 12.12Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  ep = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(X2, { color: o });
      case "Broken":
        return s.createElement(G2, { color: o });
      case "Bulk":
        return s.createElement(J2, { color: o });
      case "Linear":
        return s.createElement(Qc, { color: o });
      case "Outline":
        return s.createElement(q2, { color: o });
      case "TwoTone":
        return s.createElement(b2, { color: o });
      default:
        return s.createElement(Qc, { color: o });
    }
  },
  Dr = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, Y2);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      ep(o, d)
    );
  });
Dr.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
Dr.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
Dr.displayName = "Heart";
var tp = ["variant", "color", "size"],
  np = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M5.74 16c.11-.49-.09-1.19-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27.23-.7.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.56 18.44c-.14.14-.38.01-.34-.19L5.74 16ZM18.7 14.462c-.36.36-.56 1.05-.44 1.54l.69 3.01c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27c-.51 0-1.11-.19-1.77-.58l-2.93-1.74c-.46-.27-1.22-.27-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31-.23-.17-.4-.4-.51-.7l12.16-12.16c.46-.46 1.11-.67 1.74-.56l1.01.17c1.06.18 1.77.66 2 1.36.22.7-.08 1.51-.84 2.27l-2.42 2.43Z",
        fill: o,
      })
    );
  },
  rp = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.95-1.91 2.51-1.91 3.47 0l1.76 3.52c.1.21.28.42.49.59",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  lp = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        opacity: ".4",
        d: "M5.74 16c.11-.49-.09-1.19-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27.23-.7.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.56 18.44c-.14.14-.38.01-.34-.19L5.74 16Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M18.7 14.462c-.36.36-.56 1.05-.44 1.54l.69 3.01c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27c-.51 0-1.11-.19-1.77-.58l-2.93-1.74c-.46-.27-1.22-.27-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31-.23-.17-.4-.4-.51-.7l12.16-12.16c.46-.46 1.11-.67 1.74-.56l1.01.17c1.06.18 1.77.66 2 1.36.22.7-.08 1.51-.84 2.27l-2.42 2.43Z",
        fill: o,
      })
    );
  },
  Kc = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  op = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M17.66 22.67c-.53 0-1.21-.17-2.06-.67l-2.99-1.77c-.31-.18-.91-.18-1.21 0L8.4 22c-1.77 1.05-2.81.63-3.28.29-.46-.34-1.18-1.21-.71-3.21l.71-3.07c.08-.32-.08-.87-.32-1.11l-2.48-2.48c-1.24-1.24-1.14-2.3-.97-2.82.17-.52.71-1.44 2.43-1.73l3.19-.53c.3-.05.73-.37.86-.64L9.6 3.17c.8-1.61 1.85-1.85 2.4-1.85.55 0 1.6.24 2.4 1.85l1.76 3.52c.14.27.57.59.87.64l3.19.53c1.73.29 2.27 1.21 2.43 1.73.16.52.26 1.58-.97 2.82L19.2 14.9c-.24.24-.39.78-.32 1.11l.71 3.07c.46 2-.25 2.87-.71 3.21-.25.18-.65.38-1.22.38ZM12 18.59c.49 0 .98.12 1.37.35l2.99 1.77c.87.52 1.42.52 1.63.37.21-.15.36-.68.14-1.66l-.71-3.07c-.19-.83.12-1.9.72-2.51l2.48-2.48c.49-.49.71-.97.61-1.3-.11-.33-.57-.6-1.25-.71l-3.19-.53c-.77-.13-1.61-.75-1.96-1.45l-1.76-3.52c-.32-.64-.72-1.02-1.07-1.02-.35 0-.75.38-1.06 1.02L9.17 7.37c-.35.7-1.19 1.32-1.96 1.45l-3.18.53c-.68.11-1.14.38-1.25.71-.11.33.12.82.61 1.3l2.48 2.48c.6.6.91 1.68.72 2.51l-.71 3.07c-.23.99-.07 1.51.14 1.66.21.15.75.14 1.63-.37l2.99-1.77c.38-.23.87-.35 1.36-.35Z",
        fill: o,
      })
    );
  },
  ip = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  up = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(np, { color: o });
      case "Broken":
        return s.createElement(rp, { color: o });
      case "Bulk":
        return s.createElement(lp, { color: o });
      case "Linear":
        return s.createElement(Kc, { color: o });
      case "Outline":
        return s.createElement(op, { color: o });
      case "TwoTone":
        return s.createElement(ip, { color: o });
      default:
        return s.createElement(Kc, { color: o });
    }
  },
  mo = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, tp);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      up(o, d)
    );
  });
mo.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
mo.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
mo.displayName = "Star1";
var ap = ["variant", "color", "size"],
  sp = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.35 13.57a.746.746 0 0 1-1.03.26l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.48.67.26 1.03Z",
        fill: o,
      })
    );
  },
  cp = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "m15.71 15.182-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  fp = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        opacity: ".4",
        d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M15.71 15.932a.67.67 0 0 1-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
        fill: o,
      })
    );
  },
  Yc = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        d: "m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  dp = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
        fill: o,
      }),
      s.createElement("path", {
        d: "M15.71 15.932a.67.67 0 0 1-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
        fill: o,
      })
    );
  },
  pp = function (a) {
    var o = a.color;
    return s.createElement(
      s.Fragment,
      null,
      s.createElement("path", {
        d: "M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      s.createElement("path", {
        opacity: ".4",
        d: "m15.71 15.182-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1",
        stroke: o,
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      })
    );
  },
  mp = function (a, o) {
    switch (a) {
      case "Bold":
        return s.createElement(sp, { color: o });
      case "Broken":
        return s.createElement(cp, { color: o });
      case "Bulk":
        return s.createElement(fp, { color: o });
      case "Linear":
        return s.createElement(Yc, { color: o });
      case "Outline":
        return s.createElement(dp, { color: o });
      case "TwoTone":
        return s.createElement(pp, { color: o });
      default:
        return s.createElement(Yc, { color: o });
    }
  },
  ho = S.forwardRef(function (i, a) {
    var o = i.variant,
      d = i.color,
      f = i.size,
      m = rt(i, ap);
    return s.createElement(
      "svg",
      Ue({}, m, {
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        width: f,
        height: f,
        viewBox: "0 0 24 24",
        fill: "none",
      }),
      mp(o, d)
    );
  });
ho.propTypes = {
  variant: Z.oneOf(["Linear", "Bold", "Broken", "Bulk", "Outline", "TwoTone"]),
  color: Z.string,
  size: Z.oneOfType([Z.string, Z.number]),
};
ho.defaultProps = { variant: "Linear", color: "currentColor", size: "24" };
ho.displayName = "Clock";
var Br = {},
  Xc;
function hp() {
  if (Xc) return Br;
  (Xc = 1),
    Object.defineProperty(Br, "__esModule", { value: !0 }),
    (Br.parse = x),
    (Br.serialize = C);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    a = /^[\u0021-\u003A\u003C-\u007E]*$/,
    o =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    d = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    m = (() => {
      const M = function () {};
      return (M.prototype = Object.create(null)), M;
    })();
  function x(M, j) {
    const z = new m(),
      D = M.length;
    if (D < 2) return z;
    const $ = (j == null ? void 0 : j.decode) || O;
    let I = 0;
    do {
      const V = M.indexOf("=", I);
      if (V === -1) break;
      const b = M.indexOf(";", I),
        re = b === -1 ? D : b;
      if (V > re) {
        I = M.lastIndexOf(";", V - 1) + 1;
        continue;
      }
      const ce = T(M, I, V),
        Ee = w(M, V, ce),
        ye = M.slice(ce, Ee);
      if (z[ye] === void 0) {
        let Me = T(M, V + 1, re),
          Se = w(M, re, Me);
        const ze = $(M.slice(Me, Se));
        z[ye] = ze;
      }
      I = re + 1;
    } while (I < D);
    return z;
  }
  function T(M, j, z) {
    do {
      const D = M.charCodeAt(j);
      if (D !== 32 && D !== 9) return j;
    } while (++j < z);
    return z;
  }
  function w(M, j, z) {
    for (; j > z; ) {
      const D = M.charCodeAt(--j);
      if (D !== 32 && D !== 9) return j + 1;
    }
    return z;
  }
  function C(M, j, z) {
    const D = (z == null ? void 0 : z.encode) || encodeURIComponent;
    if (!i.test(M)) throw new TypeError(`argument name is invalid: ${M}`);
    const $ = D(j);
    if (!a.test($)) throw new TypeError(`argument val is invalid: ${j}`);
    let I = M + "=" + $;
    if (!z) return I;
    if (z.maxAge !== void 0) {
      if (!Number.isInteger(z.maxAge))
        throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
      I += "; Max-Age=" + z.maxAge;
    }
    if (z.domain) {
      if (!o.test(z.domain))
        throw new TypeError(`option domain is invalid: ${z.domain}`);
      I += "; Domain=" + z.domain;
    }
    if (z.path) {
      if (!d.test(z.path))
        throw new TypeError(`option path is invalid: ${z.path}`);
      I += "; Path=" + z.path;
    }
    if (z.expires) {
      if (!F(z.expires) || !Number.isFinite(z.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${z.expires}`);
      I += "; Expires=" + z.expires.toUTCString();
    }
    if (
      (z.httpOnly && (I += "; HttpOnly"),
      z.secure && (I += "; Secure"),
      z.partitioned && (I += "; Partitioned"),
      z.priority)
    )
      switch (
        typeof z.priority == "string" ? z.priority.toLowerCase() : void 0
      ) {
        case "low":
          I += "; Priority=Low";
          break;
        case "medium":
          I += "; Priority=Medium";
          break;
        case "high":
          I += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${z.priority}`);
      }
    if (z.sameSite)
      switch (
        typeof z.sameSite == "string" ? z.sameSite.toLowerCase() : z.sameSite
      ) {
        case !0:
        case "strict":
          I += "; SameSite=Strict";
          break;
        case "lax":
          I += "; SameSite=Lax";
          break;
        case "none":
          I += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${z.sameSite}`);
      }
    return I;
  }
  function O(M) {
    if (M.indexOf("%") === -1) return M;
    try {
      return decodeURIComponent(M);
    } catch {
      return M;
    }
  }
  function F(M) {
    return f.call(M) === "[object Date]";
  }
  return Br;
}
hp();
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Gc = "popstate";
function vp(i = {}) {
  function a(d, f) {
    let { pathname: m, search: x, hash: T } = d.location;
    return Eu(
      "",
      { pathname: m, search: x, hash: T },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default"
    );
  }
  function o(d, f) {
    return typeof f == "string" ? f : $r(f);
  }
  return gp(a, o, null, i);
}
function we(i, a) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(a);
}
function Tt(i, a) {
  if (!i) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {}
  }
}
function yp() {
  return Math.random().toString(36).substring(2, 10);
}
function Jc(i, a) {
  return { usr: i.state, key: i.key, idx: a };
}
function Eu(i, a, o = null, d) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof a == "string" ? Kn(a) : a),
    state: o,
    key: (a && a.key) || d || yp(),
  };
}
function $r({ pathname: i = "/", search: a = "", hash: o = "" }) {
  return (
    a && a !== "?" && (i += a.charAt(0) === "?" ? a : "?" + a),
    o && o !== "#" && (i += o.charAt(0) === "#" ? o : "#" + o),
    i
  );
}
function Kn(i) {
  let a = {};
  if (i) {
    let o = i.indexOf("#");
    o >= 0 && ((a.hash = i.substring(o)), (i = i.substring(0, o)));
    let d = i.indexOf("?");
    d >= 0 && ((a.search = i.substring(d)), (i = i.substring(0, d))),
      i && (a.pathname = i);
  }
  return a;
}
function gp(i, a, o, d = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = d,
    x = f.history,
    T = "POP",
    w = null,
    C = O();
  C == null && ((C = 0), x.replaceState({ ...x.state, idx: C }, ""));
  function O() {
    return (x.state || { idx: null }).idx;
  }
  function F() {
    T = "POP";
    let $ = O(),
      I = $ == null ? null : $ - C;
    (C = $), w && w({ action: T, location: D.location, delta: I });
  }
  function M($, I) {
    T = "PUSH";
    let V = Eu(D.location, $, I);
    C = O() + 1;
    let b = Jc(V, C),
      re = D.createHref(V);
    try {
      x.pushState(b, "", re);
    } catch (ce) {
      if (ce instanceof DOMException && ce.name === "DataCloneError") throw ce;
      f.location.assign(re);
    }
    m && w && w({ action: T, location: D.location, delta: 1 });
  }
  function j($, I) {
    T = "REPLACE";
    let V = Eu(D.location, $, I);
    C = O();
    let b = Jc(V, C),
      re = D.createHref(V);
    x.replaceState(b, "", re),
      m && w && w({ action: T, location: D.location, delta: 0 });
  }
  function z($) {
    let I = f.location.origin !== "null" ? f.location.origin : f.location.href,
      V = typeof $ == "string" ? $ : $r($);
    return (
      (V = V.replace(/ $/, "%20")),
      we(
        I,
        `No window.location.(origin|href) available to create URL for href: ${V}`
      ),
      new URL(V, I)
    );
  }
  let D = {
    get action() {
      return T;
    },
    get location() {
      return i(f, x);
    },
    listen($) {
      if (w) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(Gc, F),
        (w = $),
        () => {
          f.removeEventListener(Gc, F), (w = null);
        }
      );
    },
    createHref($) {
      return a(f, $);
    },
    createURL: z,
    encodeLocation($) {
      let I = z($);
      return { pathname: I.pathname, search: I.search, hash: I.hash };
    },
    push: M,
    replace: j,
    go($) {
      return x.go($);
    },
  };
  return D;
}
function rf(i, a, o = "/") {
  return kp(i, a, o, !1);
}
function kp(i, a, o, d) {
  let f = typeof a == "string" ? Kn(a) : a,
    m = rn(f.pathname || "/", o);
  if (m == null) return null;
  let x = lf(i);
  wp(x);
  let T = null;
  for (let w = 0; T == null && w < x.length; ++w) {
    let C = zp(m);
    T = Rp(x[w], C, d);
  }
  return T;
}
function lf(i, a = [], o = [], d = "") {
  let f = (m, x, T) => {
    let w = {
      relativePath: T === void 0 ? m.path || "" : T,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: x,
      route: m,
    };
    w.relativePath.startsWith("/") &&
      (we(
        w.relativePath.startsWith(d),
        `Absolute route path "${w.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (w.relativePath = w.relativePath.slice(d.length)));
    let C = $t([d, w.relativePath]),
      O = o.concat(w);
    m.children &&
      m.children.length > 0 &&
      (we(
        m.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${C}".`
      ),
      lf(m.children, a, O, C)),
      !(m.path == null && !m.index) &&
        a.push({ path: C, score: Mp(C, m.index), routesMeta: O });
  };
  return (
    i.forEach((m, x) => {
      var T;
      if (m.path === "" || !((T = m.path) != null && T.includes("?"))) f(m, x);
      else for (let w of of(m.path)) f(m, x, w);
    }),
    a
  );
}
function of(i) {
  let a = i.split("/");
  if (a.length === 0) return [];
  let [o, ...d] = a,
    f = o.endsWith("?"),
    m = o.replace(/\?$/, "");
  if (d.length === 0) return f ? [m, ""] : [m];
  let x = of(d.join("/")),
    T = [];
  return (
    T.push(...x.map((w) => (w === "" ? m : [m, w].join("/")))),
    f && T.push(...x),
    T.map((w) => (i.startsWith("/") && w === "" ? "/" : w))
  );
}
function wp(i) {
  i.sort((a, o) =>
    a.score !== o.score
      ? o.score - a.score
      : Pp(
          a.routesMeta.map((d) => d.childrenIndex),
          o.routesMeta.map((d) => d.childrenIndex)
        )
  );
}
var Ep = /^:[\w-]+$/,
  Sp = 3,
  xp = 2,
  Cp = 1,
  Lp = 10,
  Tp = -2,
  qc = (i) => i === "*";
function Mp(i, a) {
  let o = i.split("/"),
    d = o.length;
  return (
    o.some(qc) && (d += Tp),
    a && (d += xp),
    o
      .filter((f) => !qc(f))
      .reduce((f, m) => f + (Ep.test(m) ? Sp : m === "" ? Cp : Lp), d)
  );
}
function Pp(i, a) {
  return i.length === a.length && i.slice(0, -1).every((d, f) => d === a[f])
    ? i[i.length - 1] - a[a.length - 1]
    : 0;
}
function Rp(i, a, o = !1) {
  let { routesMeta: d } = i,
    f = {},
    m = "/",
    x = [];
  for (let T = 0; T < d.length; ++T) {
    let w = d[T],
      C = T === d.length - 1,
      O = m === "/" ? a : a.slice(m.length) || "/",
      F = no(
        { path: w.relativePath, caseSensitive: w.caseSensitive, end: C },
        O
      ),
      M = w.route;
    if (
      (!F &&
        C &&
        o &&
        !d[d.length - 1].route.index &&
        (F = no(
          { path: w.relativePath, caseSensitive: w.caseSensitive, end: !1 },
          O
        )),
      !F)
    )
      return null;
    Object.assign(f, F.params),
      x.push({
        params: f,
        pathname: $t([m, F.pathname]),
        pathnameBase: Bp($t([m, F.pathnameBase])),
        route: M,
      }),
      F.pathnameBase !== "/" && (m = $t([m, F.pathnameBase]));
  }
  return x;
}
function no(i, a) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [o, d] = Np(i.path, i.caseSensitive, i.end),
    f = a.match(o);
  if (!f) return null;
  let m = f[0],
    x = m.replace(/(.)\/+$/, "$1"),
    T = f.slice(1);
  return {
    params: d.reduce((C, { paramName: O, isOptional: F }, M) => {
      if (O === "*") {
        let z = T[M] || "";
        x = m.slice(0, m.length - z.length).replace(/(.)\/+$/, "$1");
      }
      const j = T[M];
      return (
        F && !j ? (C[O] = void 0) : (C[O] = (j || "").replace(/%2F/g, "/")), C
      );
    }, {}),
    pathname: m,
    pathnameBase: x,
    pattern: i,
  };
}
function Np(i, a = !1, o = !0) {
  Tt(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let d = [],
    f =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (x, T, w) => (
            d.push({ paramName: T, isOptional: w != null }),
            w ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    i.endsWith("*")
      ? (d.push({ paramName: "*" }),
        (f += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : o
      ? (f += "\\/*$")
      : i !== "" && i !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, a ? void 0 : "i"), d]
  );
}
function zp(i) {
  try {
    return i
      .split("/")
      .map((a) => decodeURIComponent(a).replace(/\//g, "%2F"))
      .join("/");
  } catch (a) {
    return (
      Tt(
        !1,
        `The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
      ),
      i
    );
  }
}
function rn(i, a) {
  if (a === "/") return i;
  if (!i.toLowerCase().startsWith(a.toLowerCase())) return null;
  let o = a.endsWith("/") ? a.length - 1 : a.length,
    d = i.charAt(o);
  return d && d !== "/" ? null : i.slice(o) || "/";
}
function _p(i, a = "/") {
  let {
    pathname: o,
    search: d = "",
    hash: f = "",
  } = typeof i == "string" ? Kn(i) : i;
  return {
    pathname: o ? (o.startsWith("/") ? o : jp(o, a)) : a,
    search: Fp(d),
    hash: $p(f),
  };
}
function jp(i, a) {
  let o = a.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((f) => {
      f === ".." ? o.length > 1 && o.pop() : f !== "." && o.push(f);
    }),
    o.length > 1 ? o.join("/") : "/"
  );
}
function ku(i, a, o, d) {
  return `Cannot include a '${i}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    d
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Op(i) {
  return i.filter(
    (a, o) => o === 0 || (a.route.path && a.route.path.length > 0)
  );
}
function uf(i) {
  let a = Op(i);
  return a.map((o, d) => (d === a.length - 1 ? o.pathname : o.pathnameBase));
}
function af(i, a, o, d = !1) {
  let f;
  typeof i == "string"
    ? (f = Kn(i))
    : ((f = { ...i }),
      we(
        !f.pathname || !f.pathname.includes("?"),
        ku("?", "pathname", "search", f)
      ),
      we(
        !f.pathname || !f.pathname.includes("#"),
        ku("#", "pathname", "hash", f)
      ),
      we(!f.search || !f.search.includes("#"), ku("#", "search", "hash", f)));
  let m = i === "" || f.pathname === "",
    x = m ? "/" : f.pathname,
    T;
  if (x == null) T = o;
  else {
    let F = a.length - 1;
    if (!d && x.startsWith("..")) {
      let M = x.split("/");
      for (; M[0] === ".."; ) M.shift(), (F -= 1);
      f.pathname = M.join("/");
    }
    T = F >= 0 ? a[F] : "/";
  }
  let w = _p(f, T),
    C = x && x !== "/" && x.endsWith("/"),
    O = (m || x === ".") && o.endsWith("/");
  return !w.pathname.endsWith("/") && (C || O) && (w.pathname += "/"), w;
}
var $t = (i) => i.join("/").replace(/\/\/+/g, "/"),
  Bp = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Fp = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  $p = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function Dp(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var sf = ["POST", "PUT", "PATCH", "DELETE"];
new Set(sf);
var Ip = ["GET", ...sf];
new Set(Ip);
var Yn = S.createContext(null);
Yn.displayName = "DataRouter";
var vo = S.createContext(null);
vo.displayName = "DataRouterState";
var cf = S.createContext({ isTransitioning: !1 });
cf.displayName = "ViewTransition";
var Wp = S.createContext(new Map());
Wp.displayName = "Fetchers";
var Hp = S.createContext(null);
Hp.displayName = "Await";
var Mt = S.createContext(null);
Mt.displayName = "Navigation";
var Ir = S.createContext(null);
Ir.displayName = "Location";
var Pt = S.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Pt.displayName = "Route";
var Cu = S.createContext(null);
Cu.displayName = "RouteError";
function Vp(i, { relative: a } = {}) {
  we(
    Wr(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: d } = S.useContext(Mt),
    { hash: f, pathname: m, search: x } = Hr(i, { relative: a }),
    T = m;
  return (
    o !== "/" && (T = m === "/" ? o : $t([o, m])),
    d.createHref({ pathname: T, search: x, hash: f })
  );
}
function Wr() {
  return S.useContext(Ir) != null;
}
function on() {
  return (
    we(
      Wr(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    S.useContext(Ir).location
  );
}
var ff =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function df(i) {
  S.useContext(Mt).static || S.useLayoutEffect(i);
}
function pf() {
  let { isDataRoute: i } = S.useContext(Pt);
  return i ? nm() : Up();
}
function Up() {
  we(
    Wr(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = S.useContext(Yn),
    { basename: a, navigator: o } = S.useContext(Mt),
    { matches: d } = S.useContext(Pt),
    { pathname: f } = on(),
    m = JSON.stringify(uf(d)),
    x = S.useRef(!1);
  return (
    df(() => {
      x.current = !0;
    }),
    S.useCallback(
      (w, C = {}) => {
        if ((Tt(x.current, ff), !x.current)) return;
        if (typeof w == "number") {
          o.go(w);
          return;
        }
        let O = af(w, JSON.parse(m), f, C.relative === "path");
        i == null &&
          a !== "/" &&
          (O.pathname = O.pathname === "/" ? a : $t([a, O.pathname])),
          (C.replace ? o.replace : o.push)(O, C.state, C);
      },
      [a, o, m, f, i]
    )
  );
}
S.createContext(null);
function Ap() {
  let { matches: i } = S.useContext(Pt),
    a = i[i.length - 1];
  return a ? a.params : {};
}
function Hr(i, { relative: a } = {}) {
  let { matches: o } = S.useContext(Pt),
    { pathname: d } = on(),
    f = JSON.stringify(uf(o));
  return S.useMemo(() => af(i, JSON.parse(f), d, a === "path"), [i, f, d, a]);
}
function Zp(i, a) {
  return mf(i, a);
}
function mf(i, a, o, d) {
  var I;
  we(
    Wr(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = S.useContext(Mt),
    { matches: m } = S.useContext(Pt),
    x = m[m.length - 1],
    T = x ? x.params : {},
    w = x ? x.pathname : "/",
    C = x ? x.pathnameBase : "/",
    O = x && x.route;
  {
    let V = (O && O.path) || "";
    hf(
      w,
      !O || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${
        V === "/" ? "*" : `${V}/*`
      }">.`
    );
  }
  let F = on(),
    M;
  if (a) {
    let V = typeof a == "string" ? Kn(a) : a;
    we(
      C === "/" || ((I = V.pathname) == null ? void 0 : I.startsWith(C)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ),
      (M = V);
  } else M = F;
  let j = M.pathname || "/",
    z = j;
  if (C !== "/") {
    let V = C.replace(/^\//, "").split("/");
    z = "/" + j.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let D = rf(i, { pathname: z });
  Tt(
    O || D != null,
    `No routes matched location "${M.pathname}${M.search}${M.hash}" `
  ),
    Tt(
      D == null ||
        D[D.length - 1].route.element !== void 0 ||
        D[D.length - 1].route.Component !== void 0 ||
        D[D.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let $ = Gp(
    D &&
      D.map((V) =>
        Object.assign({}, V, {
          params: Object.assign({}, T, V.params),
          pathname: $t([
            C,
            f.encodeLocation
              ? f.encodeLocation(V.pathname).pathname
              : V.pathname,
          ]),
          pathnameBase:
            V.pathnameBase === "/"
              ? C
              : $t([
                  C,
                  f.encodeLocation
                    ? f.encodeLocation(V.pathnameBase).pathname
                    : V.pathnameBase,
                ]),
        })
      ),
    m,
    o,
    d
  );
  return a && $
    ? S.createElement(
        Ir.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...M,
            },
            navigationType: "POP",
          },
        },
        $
      )
    : $;
}
function Qp() {
  let i = tm(),
    a = Dp(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    o = i instanceof Error ? i.stack : null,
    d = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: d },
    m = { padding: "2px 4px", backgroundColor: d },
    x = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (x = S.createElement(
      S.Fragment,
      null,
      S.createElement("p", null, "💿 Hey developer 👋"),
      S.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        S.createElement("code", { style: m }, "ErrorBoundary"),
        " or",
        " ",
        S.createElement("code", { style: m }, "errorElement"),
        " prop on your route."
      )
    )),
    S.createElement(
      S.Fragment,
      null,
      S.createElement("h2", null, "Unexpected Application Error!"),
      S.createElement("h3", { style: { fontStyle: "italic" } }, a),
      o ? S.createElement("pre", { style: f }, o) : null,
      x
    )
  );
}
var Kp = S.createElement(Qp, null),
  Yp = class extends S.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, a) {
      return a.location !== i.location ||
        (a.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : a.error,
            location: a.location,
            revalidation: i.revalidation || a.revalidation,
          };
    }
    componentDidCatch(i, a) {
      console.error(
        "React Router caught the following error during render",
        i,
        a
      );
    }
    render() {
      return this.state.error !== void 0
        ? S.createElement(
            Pt.Provider,
            { value: this.props.routeContext },
            S.createElement(Cu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Xp({ routeContext: i, match: a, children: o }) {
  let d = S.useContext(Yn);
  return (
    d &&
      d.static &&
      d.staticContext &&
      (a.route.errorElement || a.route.ErrorBoundary) &&
      (d.staticContext._deepestRenderedBoundaryId = a.route.id),
    S.createElement(Pt.Provider, { value: i }, o)
  );
}
function Gp(i, a = [], o = null, d = null) {
  if (i == null) {
    if (!o) return null;
    if (o.errors) i = o.matches;
    else if (a.length === 0 && !o.initialized && o.matches.length > 0)
      i = o.matches;
    else return null;
  }
  let f = i,
    m = o == null ? void 0 : o.errors;
  if (m != null) {
    let w = f.findIndex(
      (C) => C.route.id && (m == null ? void 0 : m[C.route.id]) !== void 0
    );
    we(
      w >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ),
      (f = f.slice(0, Math.min(f.length, w + 1)));
  }
  let x = !1,
    T = -1;
  if (o)
    for (let w = 0; w < f.length; w++) {
      let C = f[w];
      if (
        ((C.route.HydrateFallback || C.route.hydrateFallbackElement) && (T = w),
        C.route.id)
      ) {
        let { loaderData: O, errors: F } = o,
          M =
            C.route.loader &&
            !O.hasOwnProperty(C.route.id) &&
            (!F || F[C.route.id] === void 0);
        if (C.route.lazy || M) {
          (x = !0), T >= 0 ? (f = f.slice(0, T + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((w, C, O) => {
    let F,
      M = !1,
      j = null,
      z = null;
    o &&
      ((F = m && C.route.id ? m[C.route.id] : void 0),
      (j = C.route.errorElement || Kp),
      x &&
        (T < 0 && O === 0
          ? (hf(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (M = !0),
            (z = null))
          : T === O &&
            ((M = !0), (z = C.route.hydrateFallbackElement || null))));
    let D = a.concat(f.slice(0, O + 1)),
      $ = () => {
        let I;
        return (
          F
            ? (I = j)
            : M
            ? (I = z)
            : C.route.Component
            ? (I = S.createElement(C.route.Component, null))
            : C.route.element
            ? (I = C.route.element)
            : (I = w),
          S.createElement(Xp, {
            match: C,
            routeContext: { outlet: w, matches: D, isDataRoute: o != null },
            children: I,
          })
        );
      };
    return o && (C.route.ErrorBoundary || C.route.errorElement || O === 0)
      ? S.createElement(Yp, {
          location: o.location,
          revalidation: o.revalidation,
          component: j,
          error: F,
          children: $(),
          routeContext: { outlet: null, matches: D, isDataRoute: !0 },
        })
      : $();
  }, null);
}
function Lu(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jp(i) {
  let a = S.useContext(Yn);
  return we(a, Lu(i)), a;
}
function qp(i) {
  let a = S.useContext(vo);
  return we(a, Lu(i)), a;
}
function bp(i) {
  let a = S.useContext(Pt);
  return we(a, Lu(i)), a;
}
function Tu(i) {
  let a = bp(i),
    o = a.matches[a.matches.length - 1];
  return (
    we(
      o.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    o.route.id
  );
}
function em() {
  return Tu("useRouteId");
}
function tm() {
  var d;
  let i = S.useContext(Cu),
    a = qp("useRouteError"),
    o = Tu("useRouteError");
  return i !== void 0 ? i : (d = a.errors) == null ? void 0 : d[o];
}
function nm() {
  let { router: i } = Jp("useNavigate"),
    a = Tu("useNavigate"),
    o = S.useRef(!1);
  return (
    df(() => {
      o.current = !0;
    }),
    S.useCallback(
      async (f, m = {}) => {
        Tt(o.current, ff),
          o.current &&
            (typeof f == "number"
              ? i.navigate(f)
              : await i.navigate(f, { fromRouteId: a, ...m }));
      },
      [i, a]
    )
  );
}
var bc = {};
function hf(i, a, o) {
  !a && !bc[i] && ((bc[i] = !0), Tt(!1, o));
}
S.memo(rm);
function rm({ routes: i, future: a, state: o }) {
  return mf(i, void 0, o, a);
}
function En(i) {
  we(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function lm({
  basename: i = "/",
  children: a = null,
  location: o,
  navigationType: d = "POP",
  navigator: f,
  static: m = !1,
}) {
  we(
    !Wr(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let x = i.replace(/^\/*/, "/"),
    T = S.useMemo(
      () => ({ basename: x, navigator: f, static: m, future: {} }),
      [x, f, m]
    );
  typeof o == "string" && (o = Kn(o));
  let {
      pathname: w = "/",
      search: C = "",
      hash: O = "",
      state: F = null,
      key: M = "default",
    } = o,
    j = S.useMemo(() => {
      let z = rn(w, x);
      return z == null
        ? null
        : {
            location: { pathname: z, search: C, hash: O, state: F, key: M },
            navigationType: d,
          };
    }, [x, w, C, O, F, M, d]);
  return (
    Tt(
      j != null,
      `<Router basename="${x}"> is not able to match the URL "${w}${C}${O}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    j == null
      ? null
      : S.createElement(
          Mt.Provider,
          { value: T },
          S.createElement(Ir.Provider, { children: a, value: j })
        )
  );
}
function om({ children: i, location: a }) {
  return Zp(Su(i), a);
}
function Su(i, a = []) {
  let o = [];
  return (
    S.Children.forEach(i, (d, f) => {
      if (!S.isValidElement(d)) return;
      let m = [...a, f];
      if (d.type === S.Fragment) {
        o.push.apply(o, Su(d.props.children, m));
        return;
      }
      we(
        d.type === En,
        `[${
          typeof d.type == "string" ? d.type : d.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        we(
          !d.props.index || !d.props.children,
          "An index route cannot have child routes."
        );
      let x = {
        id: d.props.id || m.join("-"),
        caseSensitive: d.props.caseSensitive,
        element: d.props.element,
        Component: d.props.Component,
        index: d.props.index,
        path: d.props.path,
        loader: d.props.loader,
        action: d.props.action,
        hydrateFallbackElement: d.props.hydrateFallbackElement,
        HydrateFallback: d.props.HydrateFallback,
        errorElement: d.props.errorElement,
        ErrorBoundary: d.props.ErrorBoundary,
        hasErrorBoundary:
          d.props.hasErrorBoundary === !0 ||
          d.props.ErrorBoundary != null ||
          d.props.errorElement != null,
        shouldRevalidate: d.props.shouldRevalidate,
        handle: d.props.handle,
        lazy: d.props.lazy,
      };
      d.props.children && (x.children = Su(d.props.children, m)), o.push(x);
    }),
    o
  );
}
var eo = "get",
  to = "application/x-www-form-urlencoded";
function yo(i) {
  return i != null && typeof i.tagName == "string";
}
function im(i) {
  return yo(i) && i.tagName.toLowerCase() === "button";
}
function um(i) {
  return yo(i) && i.tagName.toLowerCase() === "form";
}
function am(i) {
  return yo(i) && i.tagName.toLowerCase() === "input";
}
function sm(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function cm(i, a) {
  return i.button === 0 && (!a || a === "_self") && !sm(i);
}
var bl = null;
function fm() {
  if (bl === null)
    try {
      new FormData(document.createElement("form"), 0), (bl = !1);
    } catch {
      bl = !0;
    }
  return bl;
}
var dm = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function wu(i) {
  return i != null && !dm.has(i)
    ? (Tt(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${to}"`
      ),
      null)
    : i;
}
function pm(i, a) {
  let o, d, f, m, x;
  if (um(i)) {
    let T = i.getAttribute("action");
    (d = T ? rn(T, a) : null),
      (o = i.getAttribute("method") || eo),
      (f = wu(i.getAttribute("enctype")) || to),
      (m = new FormData(i));
  } else if (im(i) || (am(i) && (i.type === "submit" || i.type === "image"))) {
    let T = i.form;
    if (T == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let w = i.getAttribute("formaction") || T.getAttribute("action");
    if (
      ((d = w ? rn(w, a) : null),
      (o = i.getAttribute("formmethod") || T.getAttribute("method") || eo),
      (f =
        wu(i.getAttribute("formenctype")) ||
        wu(T.getAttribute("enctype")) ||
        to),
      (m = new FormData(T, i)),
      !fm())
    ) {
      let { name: C, type: O, value: F } = i;
      if (O === "image") {
        let M = C ? `${C}.` : "";
        m.append(`${M}x`, "0"), m.append(`${M}y`, "0");
      } else C && m.append(C, F);
    }
  } else {
    if (yo(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (o = eo), (d = null), (f = to), (x = i);
  }
  return (
    m && f === "text/plain" && ((x = m), (m = void 0)),
    { action: d, method: o.toLowerCase(), encType: f, formData: m, body: x }
  );
}
function Mu(i, a) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(a);
}
async function mm(i, a) {
  if (i.id in a) return a[i.id];
  try {
    let o = await import(i.module);
    return (a[i.id] = o), o;
  } catch (o) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(o),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function hm(i) {
  return i == null
    ? !1
    : i.href == null
    ? i.rel === "preload" &&
      typeof i.imageSrcSet == "string" &&
      typeof i.imageSizes == "string"
    : typeof i.rel == "string" && typeof i.href == "string";
}
async function vm(i, a, o) {
  let d = await Promise.all(
    i.map(async (f) => {
      let m = a.routes[f.route.id];
      if (m) {
        let x = await mm(m, o);
        return x.links ? x.links() : [];
      }
      return [];
    })
  );
  return wm(
    d
      .flat(1)
      .filter(hm)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" }
      )
  );
}
function ef(i, a, o, d, f, m) {
  let x = (w, C) => (o[C] ? w.route.id !== o[C].route.id : !0),
    T = (w, C) => {
      var O;
      return (
        o[C].pathname !== w.pathname ||
        (((O = o[C].route.path) == null ? void 0 : O.endsWith("*")) &&
          o[C].params["*"] !== w.params["*"])
      );
    };
  return m === "assets"
    ? a.filter((w, C) => x(w, C) || T(w, C))
    : m === "data"
    ? a.filter((w, C) => {
        var F;
        let O = d.routes[w.route.id];
        if (!O || !O.hasLoader) return !1;
        if (x(w, C) || T(w, C)) return !0;
        if (w.route.shouldRevalidate) {
          let M = w.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: ((F = o[0]) == null ? void 0 : F.params) || {},
            nextUrl: new URL(i, window.origin),
            nextParams: w.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof M == "boolean") return M;
        }
        return !0;
      })
    : [];
}
function ym(i, a) {
  return gm(
    i
      .map((o) => {
        let d = a.routes[o.route.id];
        if (!d) return [];
        let f = [d.module];
        return d.imports && (f = f.concat(d.imports)), f;
      })
      .flat(1)
  );
}
function gm(i) {
  return [...new Set(i)];
}
function km(i) {
  let a = {},
    o = Object.keys(i).sort();
  for (let d of o) a[d] = i[d];
  return a;
}
function wm(i, a) {
  let o = new Set();
  return (
    new Set(a),
    i.reduce((d, f) => {
      let m = JSON.stringify(km(f));
      return o.has(m) || (o.add(m), d.push({ key: m, link: f })), d;
    }, [])
  );
}
function Em(i) {
  let a =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : i;
  return (
    a.pathname === "/"
      ? (a.pathname = "_root.data")
      : (a.pathname = `${a.pathname.replace(/\/$/, "")}.data`),
    a
  );
}
function Sm() {
  let i = S.useContext(Yn);
  return (
    Mu(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    i
  );
}
function xm() {
  let i = S.useContext(vo);
  return (
    Mu(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    i
  );
}
var Pu = S.createContext(void 0);
Pu.displayName = "FrameworkContext";
function vf() {
  let i = S.useContext(Pu);
  return (
    Mu(i, "You must render this element inside a <HydratedRouter> element"), i
  );
}
function Cm(i, a) {
  let o = S.useContext(Pu),
    [d, f] = S.useState(!1),
    [m, x] = S.useState(!1),
    {
      onFocus: T,
      onBlur: w,
      onMouseEnter: C,
      onMouseLeave: O,
      onTouchStart: F,
    } = a,
    M = S.useRef(null);
  S.useEffect(() => {
    if ((i === "render" && x(!0), i === "viewport")) {
      let D = (I) => {
          I.forEach((V) => {
            x(V.isIntersecting);
          });
        },
        $ = new IntersectionObserver(D, { threshold: 0.5 });
      return (
        M.current && $.observe(M.current),
        () => {
          $.disconnect();
        }
      );
    }
  }, [i]),
    S.useEffect(() => {
      if (d) {
        let D = setTimeout(() => {
          x(!0);
        }, 100);
        return () => {
          clearTimeout(D);
        };
      }
    }, [d]);
  let j = () => {
      f(!0);
    },
    z = () => {
      f(!1), x(!1);
    };
  return o
    ? i !== "intent"
      ? [m, M, {}]
      : [
          m,
          M,
          {
            onFocus: Fr(T, j),
            onBlur: Fr(w, z),
            onMouseEnter: Fr(C, j),
            onMouseLeave: Fr(O, z),
            onTouchStart: Fr(F, j),
          },
        ]
    : [!1, M, {}];
}
function Fr(i, a) {
  return (o) => {
    i && i(o), o.defaultPrevented || a(o);
  };
}
function Lm({ page: i, ...a }) {
  let { router: o } = Sm(),
    d = S.useMemo(() => rf(o.routes, i, o.basename), [o.routes, i, o.basename]);
  return d ? S.createElement(Mm, { page: i, matches: d, ...a }) : null;
}
function Tm(i) {
  let { manifest: a, routeModules: o } = vf(),
    [d, f] = S.useState([]);
  return (
    S.useEffect(() => {
      let m = !1;
      return (
        vm(i, a, o).then((x) => {
          m || f(x);
        }),
        () => {
          m = !0;
        }
      );
    }, [i, a, o]),
    d
  );
}
function Mm({ page: i, matches: a, ...o }) {
  let d = on(),
    { manifest: f, routeModules: m } = vf(),
    { loaderData: x, matches: T } = xm(),
    w = S.useMemo(() => ef(i, a, T, f, d, "data"), [i, a, T, f, d]),
    C = S.useMemo(() => ef(i, a, T, f, d, "assets"), [i, a, T, f, d]),
    O = S.useMemo(() => {
      if (i === d.pathname + d.search + d.hash) return [];
      let j = new Set(),
        z = !1;
      if (
        (a.forEach(($) => {
          var V;
          let I = f.routes[$.route.id];
          !I ||
            !I.hasLoader ||
            ((!w.some((b) => b.route.id === $.route.id) &&
              $.route.id in x &&
              (V = m[$.route.id]) != null &&
              V.shouldRevalidate) ||
            I.hasClientLoader
              ? (z = !0)
              : j.add($.route.id));
        }),
        j.size === 0)
      )
        return [];
      let D = Em(i);
      return (
        z &&
          j.size > 0 &&
          D.searchParams.set(
            "_routes",
            a
              .filter(($) => j.has($.route.id))
              .map(($) => $.route.id)
              .join(",")
          ),
        [D.pathname + D.search]
      );
    }, [x, d, f, w, a, i, m]),
    F = S.useMemo(() => ym(C, f), [C, f]),
    M = Tm(C);
  return S.createElement(
    S.Fragment,
    null,
    O.map((j) =>
      S.createElement("link", {
        key: j,
        rel: "prefetch",
        as: "fetch",
        href: j,
        ...o,
      })
    ),
    F.map((j) =>
      S.createElement("link", { key: j, rel: "modulepreload", href: j, ...o })
    ),
    M.map(({ key: j, link: z }) => S.createElement("link", { key: j, ...z }))
  );
}
function Pm(...i) {
  return (a) => {
    i.forEach((o) => {
      typeof o == "function" ? o(a) : o != null && (o.current = a);
    });
  };
}
var yf =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  yf && (window.__reactRouterVersion = "7.1.1");
} catch {}
function Rm({ basename: i, children: a, window: o }) {
  let d = S.useRef();
  d.current == null && (d.current = vp({ window: o, v5Compat: !0 }));
  let f = d.current,
    [m, x] = S.useState({ action: f.action, location: f.location }),
    T = S.useCallback(
      (w) => {
        S.startTransition(() => x(w));
      },
      [x]
    );
  return (
    S.useLayoutEffect(() => f.listen(T), [f, T]),
    S.createElement(lm, {
      basename: i,
      children: a,
      location: m.location,
      navigationType: m.action,
      navigator: f,
    })
  );
}
var gf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ln = S.forwardRef(function (
    {
      onClick: a,
      discover: o = "render",
      prefetch: d = "none",
      relative: f,
      reloadDocument: m,
      replace: x,
      state: T,
      target: w,
      to: C,
      preventScrollReset: O,
      viewTransition: F,
      ...M
    },
    j
  ) {
    let { basename: z } = S.useContext(Mt),
      D = typeof C == "string" && gf.test(C),
      $,
      I = !1;
    if (typeof C == "string" && D && (($ = C), yf))
      try {
        let Se = new URL(window.location.href),
          ze = C.startsWith("//") ? new URL(Se.protocol + C) : new URL(C),
          gt = rn(ze.pathname, z);
        ze.origin === Se.origin && gt != null
          ? (C = gt + ze.search + ze.hash)
          : (I = !0);
      } catch {
        Tt(
          !1,
          `<Link to="${C}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let V = Vp(C, { relative: f }),
      [b, re, ce] = Cm(d, M),
      Ee = jm(C, {
        replace: x,
        state: T,
        target: w,
        preventScrollReset: O,
        relative: f,
        viewTransition: F,
      });
    function ye(Se) {
      a && a(Se), Se.defaultPrevented || Ee(Se);
    }
    let Me = S.createElement("a", {
      ...M,
      ...ce,
      href: $ || V,
      onClick: I || m ? a : ye,
      ref: Pm(j, re),
      target: w,
      "data-discover": !D && o === "render" ? "true" : void 0,
    });
    return b && !D
      ? S.createElement(S.Fragment, null, Me, S.createElement(Lm, { page: V }))
      : Me;
  });
ln.displayName = "Link";
var Nm = S.forwardRef(function (
  {
    "aria-current": a = "page",
    caseSensitive: o = !1,
    className: d = "",
    end: f = !1,
    style: m,
    to: x,
    viewTransition: T,
    children: w,
    ...C
  },
  O
) {
  let F = Hr(x, { relative: C.relative }),
    M = on(),
    j = S.useContext(vo),
    { navigator: z, basename: D } = S.useContext(Mt),
    $ = j != null && Dm(F) && T === !0,
    I = z.encodeLocation ? z.encodeLocation(F).pathname : F.pathname,
    V = M.pathname,
    b =
      j && j.navigation && j.navigation.location
        ? j.navigation.location.pathname
        : null;
  o ||
    ((V = V.toLowerCase()),
    (b = b ? b.toLowerCase() : null),
    (I = I.toLowerCase())),
    b && D && (b = rn(b, D) || b);
  const re = I !== "/" && I.endsWith("/") ? I.length - 1 : I.length;
  let ce = V === I || (!f && V.startsWith(I) && V.charAt(re) === "/"),
    Ee =
      b != null &&
      (b === I || (!f && b.startsWith(I) && b.charAt(I.length) === "/")),
    ye = { isActive: ce, isPending: Ee, isTransitioning: $ },
    Me = ce ? a : void 0,
    Se;
  typeof d == "function"
    ? (Se = d(ye))
    : (Se = [
        d,
        ce ? "active" : null,
        Ee ? "pending" : null,
        $ ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let ze = typeof m == "function" ? m(ye) : m;
  return S.createElement(
    ln,
    {
      ...C,
      "aria-current": Me,
      className: Se,
      ref: O,
      style: ze,
      to: x,
      viewTransition: T,
    },
    typeof w == "function" ? w(ye) : w
  );
});
Nm.displayName = "NavLink";
var zm = S.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: a,
      navigate: o,
      reloadDocument: d,
      replace: f,
      state: m,
      method: x = eo,
      action: T,
      onSubmit: w,
      relative: C,
      preventScrollReset: O,
      viewTransition: F,
      ...M
    },
    j
  ) => {
    let z = Fm(),
      D = $m(T, { relative: C }),
      $ = x.toLowerCase() === "get" ? "get" : "post",
      I = typeof T == "string" && gf.test(T),
      V = (b) => {
        if ((w && w(b), b.defaultPrevented)) return;
        b.preventDefault();
        let re = b.nativeEvent.submitter,
          ce = (re == null ? void 0 : re.getAttribute("formmethod")) || x;
        z(re || b.currentTarget, {
          fetcherKey: a,
          method: ce,
          navigate: o,
          replace: f,
          state: m,
          relative: C,
          preventScrollReset: O,
          viewTransition: F,
        });
      };
    return S.createElement("form", {
      ref: j,
      method: $,
      action: D,
      onSubmit: d ? w : V,
      ...M,
      "data-discover": !I && i === "render" ? "true" : void 0,
    });
  }
);
zm.displayName = "Form";
function _m(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function kf(i) {
  let a = S.useContext(Yn);
  return we(a, _m(i)), a;
}
function jm(
  i,
  {
    target: a,
    replace: o,
    state: d,
    preventScrollReset: f,
    relative: m,
    viewTransition: x,
  } = {}
) {
  let T = pf(),
    w = on(),
    C = Hr(i, { relative: m });
  return S.useCallback(
    (O) => {
      if (cm(O, a)) {
        O.preventDefault();
        let F = o !== void 0 ? o : $r(w) === $r(C);
        T(i, {
          replace: F,
          state: d,
          preventScrollReset: f,
          relative: m,
          viewTransition: x,
        });
      }
    },
    [w, T, C, o, d, a, i, f, m, x]
  );
}
var Om = 0,
  Bm = () => `__${String(++Om)}__`;
function Fm() {
  let { router: i } = kf("useSubmit"),
    { basename: a } = S.useContext(Mt),
    o = em();
  return S.useCallback(
    async (d, f = {}) => {
      let { action: m, method: x, encType: T, formData: w, body: C } = pm(d, a);
      if (f.navigate === !1) {
        let O = f.fetcherKey || Bm();
        await i.fetch(O, o, f.action || m, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: C,
          formMethod: f.method || x,
          formEncType: f.encType || T,
          flushSync: f.flushSync,
        });
      } else
        await i.navigate(f.action || m, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: C,
          formMethod: f.method || x,
          formEncType: f.encType || T,
          replace: f.replace,
          state: f.state,
          fromRouteId: o,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [i, a, o]
  );
}
function $m(i, { relative: a } = {}) {
  let { basename: o } = S.useContext(Mt),
    d = S.useContext(Pt);
  we(d, "useFormAction must be used inside a RouteContext");
  let [f] = d.matches.slice(-1),
    m = { ...Hr(i || ".", { relative: a }) },
    x = on();
  if (i == null) {
    m.search = x.search;
    let T = new URLSearchParams(m.search),
      w = T.getAll("index");
    if (w.some((O) => O === "")) {
      T.delete("index"),
        w.filter((F) => F).forEach((F) => T.append("index", F));
      let O = T.toString();
      m.search = O ? `?${O}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      f.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"),
    o !== "/" && (m.pathname = m.pathname === "/" ? o : $t([o, m.pathname])),
    $r(m)
  );
}
function Dm(i, a = {}) {
  let o = S.useContext(cf);
  we(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: d } = kf("useViewTransitionState"),
    f = Hr(i, { relative: a.relative });
  if (!o.isTransitioning) return !1;
  let m = rn(o.currentLocation.pathname, d) || o.currentLocation.pathname,
    x = rn(o.nextLocation.pathname, d) || o.nextLocation.pathname;
  return no(f.pathname, x) != null || no(f.pathname, m) != null;
}
new TextEncoder();
function Im({ noOfStars: i = 5 }) {
  return L.jsx("div", {
    className: "star-rating",
    children: [...Array(i)].map(
      (a, o) => (
        (o += 1),
        L.jsx(
          mo,
          {
            className: "star-icon",
            size: "16",
            color: "#EA5781",
            variant: "Bold",
          },
          o
        )
      )
    ),
  });
}
function wf({ recipeItem: i, isFavorite: a, addToFavorite: o }) {
  return L.jsxs("div", {
    className: "recipe-card",
    children: [
      L.jsx("div", {
        className: "image-container",
        children: L.jsx("img", {
          className: "recipe-image",
          src: i.image,
          alt: "",
        }),
      }),
      L.jsx("div", {
        className: "heart-icon-container",
        onClick: () => o(i.id),
        style: { backgroundColor: a ? "#e9083f" : "#fff" },
        children: L.jsx(Dr, {
          className: "heart-icon",
          size: "26",
          color: a ? "#fff" : "#222",
        }),
      }),
      L.jsx("p", { className: "author", children: i.sourceName }),
      L.jsx("h3", { children: i.title }),
      L.jsxs("div", {
        className: "star-icon-container",
        children: [L.jsx(Im, {}), L.jsx("span", { children: "(4.5)" })],
      }),
      L.jsxs("div", {
        className: "recipe-details",
        children: [
          L.jsxs("div", {
            children: [
              L.jsx(ho, {
                className: "small-icon",
                size: "16",
                color: "#EA5781",
              }),
              L.jsx("p", { children: i.readyInMinutes + " min" }),
            ],
          }),
          L.jsxs("div", {
            children: [
              L.jsx(io, {
                className: "small-icon",
                size: "16",
                color: "#EA5781",
              }),
              L.jsx("p", { children: i.noOfIngredients }),
            ],
          }),
          L.jsxs("div", {
            children: [
              L.jsx(po, {
                className: "small-icon",
                size: "16",
                color: "#EA5781",
              }),
              L.jsx("p", { children: i.dishTypes[0] }),
            ],
          }),
        ],
      }),
      L.jsx(ln, {
        to: `/details/${i.title}/${i.id}`,
        className: "view-details-btn",
        children: "View Recipe",
      }),
    ],
  });
}
function Ef({ recipe: i, favoriteList: a }) {
  const o = i.filter((d) => a.includes(d.id));
  return (
    console.log(o),
    L.jsxs("div", {
      className: "container favorite-container",
      children: [
        L.jsx("h2", { children: "Favorites" }),
        L.jsx("div", {
          className: "recipe-card-container",
          children:
            o && o.length > 0
              ? o.map((d) =>
                  L.jsx(
                    wf,
                    { isFavorite: !0, recipeItem: d, addToFavorite: () => {} },
                    d.id
                  )
                )
              : L.jsx("div", {
                  children: L.jsx("p", {
                    children: "Nothing have been added to favorites",
                  }),
                }),
        }),
        L.jsx(ln, {
          to: "/home",
          children: L.jsx("button", {
            className: "homepage-btn",
            children: "Back to Home page",
          }),
        }),
      ],
    })
  );
}
const un = S.createContext(null);
function Wm({ children: i }) {
  const [a, o] = S.useState([]),
    [d, f] = S.useState(""),
    [m, x] = S.useState([]),
    [T, w] = S.useState([]),
    [C, O] = S.useState(""),
    [F, M] = S.useState([]),
    [j, z] = S.useState([]);
  async function D() {
    try {
      const V = await (
        await fetch(
          "https://api.spoonacular.com/recipes/random?number=20&apiKey=4d7c682e693448de9a7b5a9092177bff"
        )
      ).json();
      o(V.recipes);
    } catch ($) {
      console.log($);
    }
  }
  return (
    S.useEffect(() => {
      D();
    }, []),
    L.jsx(un.Provider, {
      value: {
        recipe: a,
        searchParameter: d,
        setSearchParameter: f,
        recipeIngredients: m,
        setRecipeIngredients: x,
        nutritionData: T,
        setNutritionData: w,
        detailedSteps: C,
        setDetailedSteps: O,
        searchResult: F,
        setSearchResult: M,
        favoriteList: j,
        setFavoriteList: z,
      },
      children: i,
    })
  );
}
function Sf({ title: i, recipe: a }) {
  const { favoriteList: o, setFavoriteList: d } = S.useContext(un);
  return (
    S.useEffect(() => {
      const f = JSON.parse(localStorage.getItem("favorites")) || [];
      d(f);
    }, []),
    S.useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(o));
    }, [o]),
    L.jsxs("section", {
      className: "hero-section",
      children: [
        L.jsx("h1", { children: i }),
        L.jsx("div", {
          className: "recipe-card-container",
          children: a.map((f) =>
            L.jsx(
              wf,
              {
                recipeItem: f,
                isFavorite: o.includes(f.id),
                addToFavorite: (m) => {
                  d((x) =>
                    x.includes(m) ? x.filter((T) => T !== m) : [...x, m]
                  );
                },
              },
              f.id
            )
          ),
        }),
      ],
    })
  );
}
function Ru() {
  const {
      searchParameter: i,
      setSearchParameter: a,
      setSearchResult: o,
    } = S.useContext(un),
    d = pf();
  async function f(m) {
    m.preventDefault();
    try {
      const w = await (
        await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${i}&addRecipeInformation=true&apiKey=4d7c682e693448de9a7b5a9092177bff&number=20`
        )
      ).json();
      o(w.results), d(`/search-result?s=${encodeURIComponent(i)}`);
    } catch (x) {
      console.error(x);
    }
  }
  return (
    S.useEffect(() => {
      a("");
    }, [a]),
    L.jsxs("nav", {
      className: "navbar-container",
      children: [
        L.jsxs("div", {
          className: "searchbar-container",
          children: [
            L.jsx(ln, {
              to: `/search-result/${i}`,
              onClick: f,
              children: L.jsx(fo, {
                size: "25",
                color: "#808080",
                className: "search-icon",
              }),
            }),
            L.jsx("form", {
              onSubmit: f,
              children: L.jsx("input", {
                type: "text",
                name: "search",
                placeholder: "Search recipe here...",
                value: i,
                onChange: (m) => a(m.target.value),
              }),
            }),
          ],
        }),
        L.jsxs("div", {
          className: "navbar-secondpart",
          children: [
            L.jsx("div", {
              className: "hamburger-menu",
              id: "hamburger-menu",
              children: L.jsx(ao, { size: "32", color: "#222" }),
            }),
            L.jsx("div", {
              className: "icon-container",
              id: "icon-container",
              children: L.jsx(uo, {
                className: "icon",
                size: "32",
                color: "#222",
              }),
            }),
            L.jsx("div", {
              className: "icon-container",
              id: "icon-container",
              children: L.jsx(co, {
                className: "icon",
                size: "32",
                color: "#222",
              }),
            }),
            L.jsx("div", {
              className: "profile-container",
              id: "icon-container",
              children: L.jsxs(ln, {
                to: "/profile",
                children: [
                  L.jsx("span", {
                    className: "profile-img",
                    children: L.jsx("img", {
                      src: "https://www.w3schools.com/howto/img_avatar.png",
                      alt: "Users Profile Pic",
                    }),
                  }),
                  L.jsx("span", {
                    className: "users-name",
                    children: "Abolurin Azeez",
                  }),
                  L.jsx("span", {
                    children: L.jsx(lo, {
                      className: "arrow-icon",
                      size: "18",
                      color: "#222",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function Hm() {
  return L.jsxs("div", {
    className: "header1",
    children: [
      L.jsx("h2", {
        children:
          "Taste the world: Discover diverse cuisines worldwide at your home!",
      }),
      L.jsx(ln, {
        to: "/favorite",
        children: L.jsxs("button", {
          className: "explore-btn",
          children: [
            L.jsx("p", { children: "Go to Favorite" }),
            L.jsx(ro, {
              size: "45",
              color: "#fff",
              variant: "Bold",
              className: "arrow-circle-icon",
            }),
          ],
        }),
      }),
    ],
  });
}
function tf() {
  const { recipe: i } = S.useContext(un);
  return L.jsxs("div", {
    className: "container",
    children: [
      L.jsx(Ru, {}),
      L.jsx(Hm, {}),
      L.jsx(Sf, { title: "Recipe Ideas", recipe: i.slice(0, 15) }),
    ],
  });
}
var Vm = {};
function Um() {
  const { id: i, title: a } = Ap(),
    {
      recipeIngredients: o,
      setRecipeIngredients: d,
      nutritionData: f,
      setNutritionData: m,
      detailedSteps: x,
      setDetailedSteps: T,
    } = S.useContext(un),
    w = "4d7c682e693448de9a7b5a9092177bff",
    C = [];
  for (let j = 0; j < o.length; j++)
    C.push({
      recipeName: o[j].name,
      recipeAmount: o[j].amount,
      recipeUnit: o[j].unit,
    });
  async function O() {
    const z = await (
      await fetch(
        `https://api.spoonacular.com/recipes/${i}/nutritionWidget.json?apiKey=${w}`
      )
    ).json();
    d(z.ingredients), m(z.nutrients);
  }
  const F = Vm.REACT_APP_OPENAI_API_KEY;
  async function M(j) {
    try {
      const D = await (
        await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${F}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful assistant" },
              {
                role: "user",
                content: `Here is an array of ingredients: ${j}. Can you suggest the steps used in cooking the meal`,
              },
            ],
            max_tokens: 500,
            temperature: 0.7,
          }),
        })
      ).json();
      console.log(D);
    } catch (z) {
      console.error("Error generating steps:", z);
    }
  }
  return (
    S.useEffect(() => {
      O(), M(C);
    }, []),
    L.jsxs("div", {
      className: "container",
      children: [
        L.jsx(Ru, {}),
        L.jsxs("div", {
          className: "ingredients-page",
          children: [
            L.jsxs("div", {
              className: "ingredients-image-container",
              children: [
                L.jsx("h1", { className: "food-name", children: a }),
                L.jsx("img", {
                  src: `https://img.spoonacular.com/recipes/${i}-556x370.jpg`,
                  alt: "",
                }),
              ],
            }),
            L.jsxs("div", {
              className: "more-action-plus-info",
              children: [
                L.jsxs("div", {
                  className: "ingredients-more-action",
                  children: [
                    L.jsxs("div", {
                      children: [
                        L.jsx(Dr, {
                          size: "26",
                          color: "#222",
                          className: "ingredients-icon",
                        }),
                        L.jsx("p", { children: "Favorite" }),
                      ],
                    }),
                    L.jsxs("div", {
                      children: [
                        L.jsx(oo, {
                          size: "26",
                          color: "#222",
                          className: "ingredients-icon",
                        }),
                        L.jsx("p", { children: "Download" }),
                      ],
                    }),
                    L.jsxs("div", {
                      children: [
                        L.jsx(so, {
                          size: "26",
                          color: "#222",
                          className: "ingredients-icon",
                        }),
                        L.jsx("p", { children: "Share" }),
                      ],
                    }),
                  ],
                }),
                L.jsxs("ul", {
                  className: "ingredients-information",
                  children: [
                    L.jsx("h2", { children: "Ingredients" }),
                    o.map((j, z) =>
                      L.jsx(
                        "li",
                        {
                          className: "list-of-ingredients",
                          children: L.jsxs("span", {
                            children: [j.amount, " ", j.unit, " ", j.name],
                          }),
                        },
                        z
                      )
                    ),
                  ],
                }),
                L.jsxs("div", {
                  className: "nutrition",
                  children: [
                    L.jsx("h2", { children: "Nutrition" }),
                    f.map((j, z) =>
                      L.jsxs(
                        "li",
                        {
                          className: "list-of-nutrition",
                          children: [
                            L.jsxs("span", { children: [j.name, ":"] }),
                            L.jsxs("span", {
                              className: "nutrition-unit",
                              children: [j.amount, " ", j.unit],
                            }),
                          ],
                        },
                        z
                      )
                    ),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Am() {
  const { searchResult: i } = S.useContext(un),
    a = on(),
    d = new URLSearchParams(a.search).get("s");
  return L.jsxs("div", {
    className: "container",
    children: [
      L.jsx(Ru, {}),
      L.jsx(Sf, {
        title: `Search Results for: "${d}"`,
        recipe: i.slice(0, 10),
      }),
      L.jsx(ln, {
        to: "/home",
        children: L.jsx("button", {
          className: "homepage-btn",
          children: "Back to Home page",
        }),
      }),
    ],
  });
}
function Zm() {
  const { favoriteList: i, recipe: a } = S.useContext(un);
  return L.jsxs("div", {
    children: [
      L.jsxs("div", {
        className: "container",
        children: [
          L.jsx("img", {
            src: "https://www.w3schools.com/howto/img_avatar.png",
            alt: "Users Profile Pic",
          }),
          L.jsxs("div", {
            className: "profile-info",
            children: [
              L.jsx("h1", { children: "Abolurin Azeez" }),
              L.jsx("p", {
                children:
                  "Food enthusiast, recipe creator, and cookbook lover.",
              }),
              L.jsx("p", { children: "London UK" }),
              L.jsx("button", {
                className: "edit-profile-btn",
                children: "Edit Profile",
              }),
            ],
          }),
        ],
      }),
      L.jsx("div", {
        className: "favorite-list",
        children: L.jsx(Ef, { recipe: a, favoriteList: i }),
      }),
    ],
  });
}
function Qm() {
  const { favoriteList: i, recipe: a } = S.useContext(un);
  return L.jsx("div", {
    className: "App",
    children: L.jsx(Rm, {
      children: L.jsxs(om, {
        children: [
          L.jsx(En, { index: !0, element: L.jsx(tf, {}) }),
          L.jsx(En, { path: "/home", element: L.jsx(tf, {}) }),
          L.jsx(En, { path: "/details/:title/:id", element: L.jsx(Um, {}) }),
          L.jsx(En, {
            path: "/favorite",
            element: L.jsx(Ef, { recipe: a, favoriteList: i }),
          }),
          L.jsx(En, { path: "/search-result", element: L.jsx(Am, {}) }),
          L.jsx(En, { path: "/profile", element: L.jsx(Zm, {}) }),
        ],
      }),
    }),
  });
}
T1.createRoot(document.getElementById("root")).render(
  L.jsx(S.StrictMode, { children: L.jsx(Wm, { children: L.jsx(Qm, {}) }) })
);
