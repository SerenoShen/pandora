(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{187:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("EndPoint 是预埋在 Daemon 端的一组接收器，用于接收每个进程的 Indicator 数据，这些数据按照应用来分组。")]),t._v(" "),s("p",[t._v("在默认的场景下，我们会预埋一些 EndPoint，用户可以对这些东西全部自定义。")]),t._v(" "),s("p",[t._v("默认预埋的 EndPoint 包括：")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./info.html"}},[t._v("应用静态信息")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./process.html"}},[t._v("应用进程信息")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./health.html"}},[t._v("健康检查")])],1),t._v(" "),s("li",[t._v("错误日志")]),t._v(" "),s("li",[t._v("链路追踪")]),t._v(" "),s("li",[t._v("metrics 指标")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),s("p",[t._v("在代码内部我们使用了接口来进行定义，我们对 EndPoint 增加了一个 group 字段，这样 Indicator 只要配置里这个 group，就可以上报到同一个 EndPoint 上。")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("每个 Indicator 是一个 IPC 客户端，可以在不同的进程中初始化，我们使用 pid 作为区分，所以一般来说，一个进程只允许一个同名的 Indicator 存在，在 cluster 模式下，Indicator 就可以以多个的形式通过同一个 group 上报给 EndPoint。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("Pandora.js 中埋入了一些默认的 EndPoint 和Resource，具体可以参考 Pandora.js 的默认配置文件，这些 Resource 列举的数据并不一定完全一致，所有的 key 会根据应用当前执行的 Indicator 变化。")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("不同版本的配置可能会有些增减，但是大致的配置如下：")]),t._v(" "),t._m(11),s("p",[t._v("每个 EndPoint 都有几个通用的配置")]),t._v(" "),t._m(12),t._v(" "),t._m(13),s("p",[t._v("以上就是 EndPoint 的配置方法。")])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"使用-endpoint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-endpoint","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 EndPoint")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"关于-endpoint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于-endpoint","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于 EndPoint")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("每个 EndPoint 是一个 IPC 服务器，用于接收 Indicator 调用的结果，并进行汇总，最为常用的两个方法就是 "),n("code",[this._v("invoke")]),this._v(" 和 "),n("code",[this._v("processQueryResults")]),this._v("，定义如下：")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("IEndPoint")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  indicators"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("IIndicator"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  group"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n   * 调用名下指标\n   * @param appName\n   * @param args\n   */")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("invoke")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appName"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{attrs:{class:"token comment"}},[t._v("/**\n   * 处理查询返回结果\n   */")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("processQueryResults")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("results"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Array"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("IIndicatorResult"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"关于-indicator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于-indicator","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于 Indicator")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Indicator 有几个重要的字段，和 EndPoint 类似，"),n("code",[this._v("group")]),this._v(" 表示对应连接到哪个 EndPoint，而 "),n("code",[this._v("invoke")]),this._v(" 方法则是真正的调用执行的地方。")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("/**\n * 单个指标\n */")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("IIndicator")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  group"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("invoke")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" any"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" builder"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IBuilder"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"关于-builder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于-builder","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于 builder")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"关于-resource"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于-resource","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于 Resource")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("在 Pandora.js 中，我们提供了一批将内置的 EndPoint  汇聚的数据通过 Http 对外暴露的能力，每一个 EndPoint 都可以有配套的 Resource 资源对外输出，这里的数据格式是通过 "),n("code",[this._v("koa")]),this._v(" 和 "),n("code",[this._v("koa-router")]),this._v(" 来简单扩展的。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"配置-endpoint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-endpoint","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置 EndPoint")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  actuator"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    endPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      error"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ErrorEndPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resource"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ErrorResource"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        initConfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          maxErrorCount"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      health"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HealthEndPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resource"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HealthResource"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        initConfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          port"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            checkUrl"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`http://127.1:6001`")])]),t._v("\n          "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          disk_space"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            rate"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      process"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ProcessEndPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      metrics"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricsEndPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resource"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricsResource\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[t._v("name {String} 名字，全局唯一就行")]),t._v(" "),s("li",[t._v("enabled {Boolean} 是否启用")]),t._v(" "),s("li",[t._v("target {IEndPoint} 对应的 EndPoint 类")]),t._v(" "),s("li",[t._v("resource {ActuatorResource} 对应的 Resource 类")]),t._v(" "),s("li",[t._v("initConfig {Object} 初始化配置")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("metrics"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricsEndPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  resource"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricsResource\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="base.md";n.default=e.exports}}]);