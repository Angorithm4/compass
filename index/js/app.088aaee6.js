(function(e) {
    function t(t) {
        for (var i, o, r = t[0], s = t[1], c = t[2], d = 0, f = []; d < r.length; d++)
            o = r[d],
            Object.prototype.hasOwnProperty.call(l, o) && l[o] && f.push(l[o][0]),
            l[o] = 0;
        for (i in s)
            Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
        u && u(t);
        while (f.length)
            f.shift()();
        return a.push.apply(a, c || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], i = !0, r = 1; r < n.length; r++) {
                var s = n[r];
                0 !== l[s] && (i = !1)
            }
            i && (a.splice(t--, 1),
            e = o(o.s = n[0]))
        }
        return e
    }
    var i = {}
      , l = {
        app: 0
    }
      , a = [];
    function o(t) {
        if (i[t])
            return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o),
        n.l = !0,
        n.exports
    }
    o.m = e,
    o.c = i,
    o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(e, t) {
        if (1 & t && (e = o(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                o.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
      , s = r.push.bind(r);
    r.push = t,
    r = r.slice();
    for (var c = 0; c < r.length; c++)
        t(r[c]);
    var u = s;
    a.push([1, "chunk-vendors"]),
    n()
}
)({
    0: function(e, t) {},
    "034f": function(e, t, n) {
        "use strict";
        n("1530")
    },
    1: function(e, t, n) {
        e.exports = n("56d7")
    },
    10: function(e, t) {},
    11: function(e, t) {},
    12: function(e, t) {},
    13: function(e, t) {},
    14: function(e, t) {},
    15: function(e, t) {},
    1530: function(e, t, n) {},
    16: function(e, t) {},
    17: function(e, t) {},
    2: function(e, t) {},
    3: function(e, t) {},
    3240: function(e, t, n) {},
    4: function(e, t) {},
    4667: function(e, t, n) {},
    "49b9": function(e, t, n) {
        e.exports = n.p + "img/YouXiuLogo.a3266f82.png"
    },
    5: function(e, t) {},
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("acb6"),
        n("450d");
        var i = n("c673")
          , l = n.n(i)
          , a = (n("e3ea"),
        n("7bc3"))
          , o = n.n(a)
          , r = (n("fd71"),
        n("a447"))
          , s = n.n(r)
          , c = (n("bdc7"),
        n("aa2f"))
          , u = n.n(c)
          , d = (n("de31"),
        n("c69e"))
          , f = n.n(d)
          , p = (n("a769"),
        n("5cc3"))
          , b = n.n(p)
          , h = (n("a673"),
        n("7b31"))
          , g = n.n(h)
          , v = (n("adec"),
        n("3d2d"))
          , m = n.n(v)
          , k = (n("f4f9"),
        n("c2cc"))
          , _ = n.n(k)
          , y = (n("7a0f"),
        n("0f6c"))
          , w = n.n(y)
          , C = (n("b5c2"),
        n("20cf"))
          , x = n.n(C)
          , V = (n("b84d"),
        n("c216"))
          , S = n.n(V)
          , R = (n("8f24"),
        n("76b9"))
          , N = n.n(R)
          , I = (n("0c67"),
        n("299c"))
          , T = n.n(I)
          , D = (n("5466"),
        n("ecdf"))
          , j = n.n(D)
          , O = (n("38a0"),
        n("ad41"))
          , A = n.n(O)
          , E = (n("ae26"),
        n("845f"))
          , P = n.n(E)
          , M = (n("1951"),
        n("eedf"))
          , z = n.n(M)
          , B = (n("6611"),
        n("e772"))
          , L = n.n(B)
          , G = (n("1f1a"),
        n("4e4b"))
          , Y = n.n(G)
          , F = (n("d4df"),
        n("7fc1"))
          , H = n.n(F)
          , q = (n("c526"),
        n("1599"))
          , K = n.n(q)
          , X = (n("560b"),
        n("dcdc"))
          , $ = n.n(X)
          , Q = (n("a7cc"),
        n("df33"))
          , J = n.n(Q)
          , W = (n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d"),
        n("2b0e"))
          , Z = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("el-container", {
                staticStyle: {
                    height: "100%"
                }
            }, [n("el-header", [n("Header")], 1), n("el-main", [n("CruelBoardTable", {
                staticStyle: {
                    height: "100%"
                }
            })], 1)], 1)], 1)
        }
          , U = []
          , ee = function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                attrs: {
                    id: "header"
                }
            }, [i("el-link", {
                attrs: {
                    id: "logo-title",
                    href: "https://wisdompeak.github.io/lc-score-board/",
                    target: "_blank",
                    underline: !1
                }
            }, [i("div", [i("img", {
                attrs: {
                    src: n("49b9"),
                    alt: "logo"
                }
            }), i("h1", {
                staticClass: "hidden-xs-only"
            }, [e._v("残酷刷题群")])])]), i("div", {
                attrs: {
                    id: "links"
                }
            }, [i("el-divider", {
                attrs: {
                    direction: "vertical"
                }
            }), i("el-link", {
                attrs: {
                    underline: !1
                },
                on: {
                    click: function(t) {
                        e.joiningInfoVisible = !0
                    }
                }
            }, [e._v("入群")]), i("el-divider", {
                attrs: {
                    direction: "vertical"
                }
            }), i("el-link", {
                attrs: {
                    underline: !1
                },
                on: {
                    click: function(t) {
                        e.rulesVisible = !0
                    }
                }
            }, [e._v("群规")]), i("el-divider", {
                attrs: {
                    direction: "vertical"
                }
            }), i("el-link", {
                attrs: {
                    href: "https://bit.ly/2X0NW4e",
                    target: "_blank",
                    icon: "el-icon-link"
                }
            }, [e._v("每日题列表")]), i("el-divider", {
                attrs: {
                    direction: "vertical"
                }
            }), i("el-link", {
                attrs: {
                    underline: !1
                },
                on: {
                    click: function(t) {
                        e.otherInfoVisible = !0
                    }
                }
            }, [e._v("其他链接")]), i("el-divider", {
                attrs: {
                    direction: "vertical"
                }
            }), i("el-link", {
                attrs: {
                    underline: !1
                },
                on: {
                    click: function(t) {
                        e.curveFormVisible = !0
                    }
                }
            }, [e._v("统计")])], 1), i("el-dialog", {
                attrs: {
                    title: "入群割韭菜",
                    visible: e.joiningInfoVisible,
                    center: ""
                },
                on: {
                    "update:visible": function(t) {
                        e.joiningInfoVisible = t
                    }
                }
            }, [i("p", [e._v("\n      If you are interested in joining this group, please contact:\n      "), i("el-link", {
                attrs: {
                    type: "primary",
                    icon: "el-icon-message",
                    href: "mailto:guan.huifeng@gmail.com"
                }
            }, [e._v("guan.huifeng@gmail.com")]), e._v(".\n    ")], 1), i("p", [e._v("\n      Make sure you agree with our "), i("el-link", {
                attrs: {
                    type: "primary",
                    href: "https://wisdompeak.github.io/lc-score-board/rules.html",
                    target: "_blank"
                }
            }, [e._v("terms and regulations")]), e._v(".\n      Think twice before you apply.\n    ")], 1), i("p", [e._v("\n      ["), i("el-link", {
                attrs: {
                    type: "danger",
                    href: "https://wisdompeak.github.io/lc-score-board/Blacklist/Darren_Zang.html",
                    target: "_blank"
                }
            }, [e._v("Blacklisted Persons")]), e._v("]\n    ")], 1)]), i("el-dialog", {
                attrs: {
                    visible: e.rulesVisible,
                    center: ""
                },
                on: {
                    "update:visible": function(t) {
                        e.rulesVisible = t
                    }
                }
            }, [i("template", {
                slot: "title"
            }, [i("a", {
                staticClass: "el-dialog__title",
                attrs: {
                    href: "https://board.cruelcoding.com/rules.html",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" 群规\n      ")])]), i("iframe", {
                attrs: {
                    src: "https://board.cruelcoding.com/rules.html",
                    frameborder: "0",
                    width: "100%",
                    height: "600px"
                }
            })], 2), i("el-dialog", {
                attrs: {
                    title: "其他链接",
                    width: "40%",
                    visible: e.otherInfoVisible,
                    center: ""
                },
                on: {
                    "update:visible": function(t) {
                        e.otherInfoVisible = t
                    }
                }
            }, [i("p", [i("el-link", {
                attrs: {
                    type: "danger",
                    href: "https://wisdompeak.github.io/lc-score-board/rules.html",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" 群规\n    ")])], 1), i("p", [i("el-link", {
                attrs: {
                    type: "primary",
                    href: "https://github.com/haozihong/cruel-board-ui",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" 此榜GitHub\n    ")])], 1), i("p", [i("el-link", {
                attrs: {
                    type: "primary",
                    href: "https://faq.cruelcoding.com/",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" FAQ\n    ")])], 1), i("p", [i("el-link", {
                attrs: {
                    type: "primary",
                    href: "http://lcpredictor.herokuapp.com/",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" 力扣分预测 Leetcode Rating Predictor\n    ")])], 1), i("p", [i("el-link", {
                attrs: {
                    type: "primary",
                    href: "https://clist.by/resource/leetcode.com/",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" CLIST力扣数据统计\n    ")])], 1), i("p", [i("el-link", {
                attrs: {
                    href: "https://docs.google.com/presentation/d/1wIYIszpPuKEKTMAQXyb4lllhXApNWfa9J53lYK5gHmM/",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" Happy New Year! See 2021 Year-end Review! 残酷群2021年会\n    ")])], 1), i("p", [i("el-link", {
                attrs: {
                    href: "https://docs.google.com/presentation/d/11Vv8RnbGZm8hQEa9T6DhxtMtsBknI1Io0nfcFVVOYUw/",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" Happy New Year! See 2020 Year-end Review! 残酷群2020年会\n    ")])], 1), i("p", [i("el-link", {
                attrs: {
                    href: "https://wisdompeak.github.io/lc-score-board/cup.html",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" Looking for more challenges? Try Wisdom Cup!\n    ")])], 1), i("p", [i("el-link", {
                attrs: {
                    href: "https://wisdompeak.github.io/lc-score-board/resources.html",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" Recommended resources\n    ")])], 1), i("p", [i("el-link", {
                attrs: {
                    href: "https://www.google.com/maps/d/viewer?mid=1c1t3qKsKxTTnDD_P2BsFsrL7p8l9Bou8",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" See where we are from\n    ")])], 1), i("p", [i("el-link", {
                attrs: {
                    href: "https://wisdompeak.github.io/lc-score-board/sd.html",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" Cruel System Design Group 残酷系统设计群\n    ")])], 1), i("p", [i("el-link", {
                attrs: {
                    href: "https://wisdompeak.github.io/lc-score-board/graduates.html",
                    target: "_blank"
                }
            }, [i("i", {
                staticClass: "el-icon-link"
            }), e._v(" Graduated members and archived scores\n    ")])], 1)]), i("el-dialog", {
                attrs: {
                    title: "统计（点击看大图）",
                    visible: e.curveFormVisible,
                    center: ""
                },
                on: {
                    "update:visible": function(t) {
                        e.curveFormVisible = t
                    }
                }
            }, [i("el-image", {
                attrs: {
                    src: "https://board.cruelcoding.com/Img/curve.png",
                    fit: "contain",
                    "preview-src-list": ["https://board.cruelcoding.com/Img/curve.png"]
                }
            })], 1)], 1)
        }
          , te = []
          , ne = {
            name: "Header",
            data: function() {
                return {
                    joiningInfoVisible: !1,
                    rulesVisible: !1,
                    otherInfoVisible: !1,
                    curveFormVisible: !1
                }
            }
        }
          , ie = ne
          , le = (n("99b5"),
        n("2877"))
          , ae = Object(le["a"])(ie, ee, te, !1, null, "d8183340", null)
          , oe = ae.exports
          , re = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", [n("div", {
                staticStyle: {
                    height: "2rem",
                    "white-space": "nowrap"
                },
                attrs: {
                    id: "boardCheckboxGroup"
                }
            }, [n("el-checkbox", {
                attrs: {
                    label: "残酷排名",
                    size: "mini"
                },
                model: {
                    value: e.cruelRankingColVisible,
                    callback: function(t) {
                        e.cruelRankingColVisible = t
                    },
                    expression: "cruelRankingColVisible"
                }
            }), n("el-checkbox", {
                attrs: {
                    label: "Days",
                    size: "mini"
                },
                model: {
                    value: e.daysColVisible,
                    callback: function(t) {
                        e.daysColVisible = t
                    },
                    expression: "daysColVisible"
                }
            }), n("el-checkbox", {
                attrs: {
                    label: "工号",
                    size: "mini"
                },
                model: {
                    value: e.workNumColVisible,
                    callback: function(t) {
                        e.workNumColVisible = t
                    },
                    expression: "workNumColVisible"
                }
            }), n("el-checkbox", {
                attrs: {
                    label: "LC Rating",
                    size: "mini"
                },
                model: {
                    value: e.ratingColVisible,
                    callback: function(t) {
                        e.ratingColVisible = t
                    },
                    expression: "ratingColVisible"
                }
            }), n("el-checkbox", {
                attrs: {
                    size: "mini",
                    value: !0
                }
            }, [e._v("\n      显示最近\n      "), n("el-select", {
                staticStyle: {
                    width: "60px"
                },
                attrs: {
                    "allow-create": "",
                    filterable: "",
                    "default-first-option": "",
                    size: "mini"
                },
                model: {
                    value: e.contestsShowingNumRaw,
                    callback: function(t) {
                        e.contestsShowingNumRaw = t
                    },
                    expression: "contestsShowingNumRaw"
                }
            }, e._l(e.contestsNumOptions, (function(e) {
                return n("el-option", {
                    key: e,
                    attrs: {
                        value: e
                    }
                })
            }
            )), 1), e._v("\n      场周赛\n    ")], 1)], 1), n("el-table", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    id: "boardTable",
                    data: e.qunyouData,
                    "row-style": {
                        height: "30px"
                    },
                    "cell-style": {
                        padding: "0"
                    },
                    "header-row-style": {
                        height: "40px"
                    },
                    "header-cell-style": {
                        padding: "0px"
                    },
                    stripe: "",
                    height: "calc(100% - 1.8rem)",
                    "default-sort": {
                        prop: "cruelScore",
                        order: "ascending"
                    }
                }
            }, [n("el-table-column", {
                attrs: {
                    type: "index"
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [n("el-tooltip", {
                            attrs: {
                                disabled: e.colorTipDisabled,
                                effect: "light",
                                placement: "left",
                                transition: "el-fade-in",
                                enterable: !1,
                                "open-delay": 0
                            }
                        }, [n("div", {
                            attrs: {
                                slot: "content"
                            },
                            slot: "content"
                        }, [e._v("红色 红包A组"), n("br"), e._v("蓝色 红包B组")]), n("span", {
                            style: "color: #" + (1 === t.row.redPacketGroup ? "CC3333" : "3366CC")
                        }, [e._v("\n            " + e._s("" + (t.$index + 1)) + "\n          ")])])]
                    }
                }])
            }), e.cruelRankingColVisible ? n("el-table-column", {
                attrs: {
                    align: "center",
                    prop: "cruelRanking",
                    label: "残酷排名",
                    width: "48"
                }
            }, [n("template", {
                slot: "header"
            }, [n("div", {
                staticStyle: {
                    "font-size": "13px",
                    "line-height": "1.3"
                }
            }, [e._v("残酷排名")])])], 2) : e._e(), n("el-table-column", {
                attrs: {
                    label: "LC ID",
                    width: "120",
                    align: "center"
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [n("a", {
                            attrs: {
                                href: t.row.lcLink
                            }
                        }, [e._v(e._s("" + t.row.lcId))])]
                    }
                }])
            }), e.daysColVisible ? n("el-table-column", {
                attrs: {
                    align: "center",
                    prop: "days",
                    label: "Days",
                    width: "80",
                    sortable: ""
                }
            }) : e._e(), e.workNumColVisible ? n("el-table-column", {
                attrs: {
                    align: "center",
                    prop: "workNum",
                    label: "工号",
                    width: "80",
                    sortable: ""
                }
            }) : e._e(), e.ratingColVisible ? n("el-table-column", {
                attrs: {
                    align: "center",
                    prop: "lcRating",
                    label: "Rating",
                    width: "100",
                    sortable: ""
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [n("span", {
                            style: "color: #" + (t.row.lcRating >= 2100 ? "A30000" : "0426A4")
                        }, [e._v("\n          " + e._s(t.row.lcRating) + "\n        ")])]
                    }
                }], null, !1, 2370465636)
            }) : e._e(), n("el-table-column", {
                attrs: {
                    align: "center",
                    prop: "cruelScore",
                    label: "滚动积分",
                    width: "100",
                    sortable: "",
                    "sort-by": "cruelRanking",
                    "sort-orders": ["ascending", "descending"]
                }
            }), e._l(e.contestsShowingNum < e.contests.length ? e.contestsShowingNum : e.contests.length, (function(t) {
                return n("el-table-column", {
                    key: t,
                    attrs: {
                        align: "center",
                        prop: "contest" + e.contests[t - 1].contestIndex + "Ranking",
                        label: e.contests[t - 1].contestIndex + " (" + e.contests[t - 1].participantNum + ")",
                        sortable: "",
                        width: "100"
                    },
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(i) {
                            return [n("el-tooltip", {
                                attrs: {
                                    disabled: e.colorTipDisabled,
                                    effect: "light",
                                    placement: "left",
                                    transition: "el-fade-in",
                                    enterable: !1,
                                    "open-delay": 1e3
                                }
                            }, [n("div", {
                                attrs: {
                                    slot: "content"
                                },
                                slot: "content"
                            }, [e._v("深绿色 4 题"), n("br"), e._v("鲜绿色 3 题"), n("br"), e._v("亮黄色 2 题"), n("br"), e._v("杏仁白 1 题")]), n("div", {
                                style: "background: #" + i.row.contestRankings[t - 1].rankingClr + "; color: black",
                                on: {
                                    click: function(t) {
                                        e.colorTipDisabled = !e.colorTipDisabled
                                    }
                                }
                            }, [e._v("\n            " + e._s(-2 === i.row.contestRankings[t - 1].attendance ? "未入群" : -1 === i.row.contestRankings[t - 1].attendance ? "缺赛" : i.row.contestRankings[t - 1].ranking + " | " + i.row.contestRankings[t - 1].score) + "\n          ")])])]
                        }
                    }], null, !0)
                }, [n("template", {
                    slot: "header"
                }, [n("span", {
                    staticStyle: {
                        display: "inline-block"
                    }
                }, [n("div", {
                    staticStyle: {
                        "font-size": "13px",
                        "line-height": "1.3"
                    }
                }, [e._v(e._s(e.contests[t - 1].contestIndex) + "场")]), n("div", {
                    staticStyle: {
                        "font-size": "11px",
                        "line-height": "1.1"
                    }
                }, [e._v(e._s(e.contests[t - 1].participantNum) + "人")])])])], 2)
            }
            ))], 2)], 1)
        }
          , se = []
          , ce = (n("d3b7"),
        n("5cc6"),
        n("9a8c"),
        n("a975"),
        n("735e"),
        n("c1ac"),
        n("d139"),
        n("3a7b"),
        n("d5d6"),
        n("82f8"),
        n("e91f"),
        n("60bd"),
        n("5f96"),
        n("3280"),
        n("3fcc"),
        n("ca91"),
        n("25a1"),
        n("cd26"),
        n("3c5d"),
        n("2954"),
        n("649e"),
        n("219c"),
        n("170b"),
        n("b39a"),
        n("72f7"),
        n("fb6a"),
        n("cb29"),
        n("4e82"),
        n("159b"),
        n("1088"))
          , ue = n.n(ce)
          , de = 3
          , fe = 8
          , pe = {
            name: "CruelBoardTable",
            data: function() {
                return {
                    daysColVisible: !1,
                    workNumColVisible: !1,
                    ratingColVisible: !0,
                    cruelRankingColVisible: !1,
                    contestsShowingNumRaw: de,
                    colorTipDisabled: !1,
                    contests: [],
                    qunyouData: []
                }
            },
            computed: {
                contestsShowingNum: function() {
                    return Math.max(de, Math.min(this.contests.length, this.contestsShowingNumRaw))
                },
                contestsNumOptions: function() {
                    for (var e = [de], t = Math.round(this.contests.length / fe), n = 1; n <= t; ++n)
                        e.push(Math.round((this.contests.length - de) / t * n) + de);
                    return e
                }
            },
            methods: {},
            mounted: function() {
                var e = this;
                this.axios.get("../sheet/index.xlsx", {
                    responseType: "arraybuffer",
                    headers: {
                        "Cache-Control": "no-cache",
                        Pragma: "no-cache",
                        Expires: "0"
                    }
                }).then((function(t) {
                    var n = new Uint8Array(t.data)
                      , i = ue.a.read(n, {
                        type: "array",
                        cellStyles: !0
                    })
                      , l = i.Sheets[i.SheetNames[0]]
                      , a = 0;
                    while (void 0 === l[ue.a.utils.encode_cell({
                        c: 0,
                        r: a
                    })])
                        ++a;
                    for (var o = 5, r = o; void 0 !== l[ue.a.utils.encode_cell({
                        r: a - 3,
                        c: r
                    })]; r += 2)
                        e.contests.push({
                            id: e.contests.length,
                            contestIndex: l[ue.a.utils.encode_cell({
                                r: a - 3,
                                c: r
                            })].v,
                            participantNum: l[ue.a.utils.encode_cell({
                                r: a - 2,
                                c: r
                            })].v
                        });
                    for (var s = [], c = a; void 0 !== l["A".concat(c + 1)]; ++c) {
                        var u, d, f = {
                            cruelRanking: l["A".concat(c + 1)].v,
                            lcId: l["B".concat(c + 1)].v,
                            lcLink: l["B".concat(c + 1)].l.Rel.Target,
                            days: l["C".concat(c + 1)].v,
                            workNum: 0,
                            lcRating: l["D".concat(c + 1)].v,
                            cruelScore: l["E".concat(c + 1)].v,
                            contestRankings: [],
                            company: null !== (u = null === (d = l[ue.a.utils.encode_cell({
                                r: c,
                                c: 5 + 2 * e.contests.length
                            })]) || void 0 === d ? void 0 : d.v.slice(0, -5)) && void 0 !== u ? u : "",
                            redPacketGroup: l["A".concat(c + 1)].s.font.color ? 2 : 1
                        };
                        s.push(f.days);
                        for (var p = 0; p < e.contests.length; ++p) {
                            var b, h, g, v = l[ue.a.utils.encode_cell({
                                r: c,
                                c: 5 + 2 * p
                            })].v, m = null !== (b = null === (h = l[ue.a.utils.encode_cell({
                                r: c,
                                c: 5 + 2 * p
                            })].s.fill) || void 0 === h || null === (g = h.fgColor) || void 0 === g ? void 0 : g.rgb.slice(2)) && void 0 !== b ? b : "EAEAEA", k = l[ue.a.utils.encode_cell({
                                r: c,
                                c: 6 + 2 * p
                            })].v;
                            f["contest".concat(e.contests[p].contestIndex, "Ranking")] = v < 0 ? 1 / 0 : v,
                            f.contestRankings.push({
                                ranking: v < 0 ? 1 / 0 : v,
                                rankingClr: m,
                                score: k,
                                attendance: v
                            })
                        }
                        e.qunyouData.push(f)
                    }
                    s.sort((function(e, t) {
                        return t - e
                    }
                    ));
                    for (var _ = {}, y = 0; y < s.length; ++y)
                        s[y]in _ || (_[s[y]] = y + 1);
                    e.qunyouData.forEach((function(e) {
                        return e.workNum = _[e.days]
                    }
                    ))
                }
                ))
            }
        }
          , be = pe
          , he = (n("842d"),
        n("b571"),
        Object(le["a"])(be, re, se, !1, null, "6e11da08", null))
          , ge = he.exports
          , ve = {
            name: "App",
            components: {
                Header: oe,
                CruelBoardTable: ge
            }
        }
          , me = ve
          , ke = (n("034f"),
        Object(le["a"])(me, Z, U, !1, null, null, null))
          , _e = ke.exports
          , ye = (n("0fae"),
        n("e05f"),
        n("bc3a"))
          , we = n.n(ye)
          , Ce = n("2106")
          , xe = n.n(Ce)
          , Ve = n("a584");
        W["default"].use(J.a),
        W["default"].use($.a),
        W["default"].use(K.a),
        W["default"].use(H.a),
        W["default"].use(Y.a),
        W["default"].use(L.a),
        W["default"].use(z.a),
        W["default"].use(P.a),
        W["default"].use(A.a),
        W["default"].use(j.a),
        W["default"].use(T.a),
        W["default"].use(N.a),
        W["default"].use(S.a),
        W["default"].use(x.a),
        W["default"].use(w.a),
        W["default"].use(_.a),
        W["default"].use(m.a),
        W["default"].use(g.a),
        W["default"].use(b.a),
        W["default"].use(f.a),
        W["default"].use(u.a),
        W["default"].use(s.a),
        W["default"].use(o.a),
        W["default"].use(l.a),
        W["default"].use(xe.a, we.a),
        W["default"].use(Ve["a"], {
            config: {
                id: "G-E2QRC2LZ7M"
            }
        }),
        W["default"].config.productionTip = !1,
        new W["default"]({
            render: function(e) {
                return e(_e)
            }
        }).$mount("#app")
    },
    5776: function(e, t, n) {},
    6: function(e, t) {},
    7: function(e, t) {},
    8: function(e, t) {},
    "842d": function(e, t, n) {
        "use strict";
        n("5776")
    },
    9: function(e, t) {},
    "99b5": function(e, t, n) {
        "use strict";
        n("3240")
    },
    "9cc5": function(e, t) {
        e.exports = cptable
    },
    b571: function(e, t, n) {
        "use strict";
        n("4667")
    }
});
//# sourceMappingURL=app.088aaee6.js.map
