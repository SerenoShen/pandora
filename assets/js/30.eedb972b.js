(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{188:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("Process is defined in procfile.js, depending on the following syntax:")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._m(9),e._v(" "),s("p",[e._v("The second parameter can also pass a reference to an implementation class in addition to passing a relative path.\nIn the end, the statement returns an object, "),s("a",{attrs:{href:"http://www.midwayjs.org/pandora/api-reference/pandora/classes/servicerepresentationchainmodifier.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ServiceRepresentationChainModifier"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("We can use "),s("a",{attrs:{href:"http://www.midwayjs.org/pandora/api-reference/pandora/classes/servicerepresentationchainmodifier.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ServiceRepresentationChainModifier"),s("OutboundLink")],1),e._v(" to improve the definition of this service.")]),e._v(" "),s("p",[e._v("The following is a simple example of all of the definition capabilities:")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._m(18),e._v(" "),s("p",[e._v("Each service is a Class that needs to implement 0 required interfaces, and four optional interfaces.")]),e._v(" "),s("p",[s("strong",[e._v("new (context: "),s("a",{attrs:{href:"http://www.midwayjs.org/pandora/api-reference/pandora/classes/servicecontextaccessor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ServiceContextAccessor"),s("OutboundLink")],1),e._v(")")])]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),s("p",[e._v("There are a lot of attributes and methods on this, specific reference "),s("a",{attrs:{href:"http://www.midwayjs.org/pandora/api-reference/pandora/classes/servicecontextaccessor.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ServiceContextAccessor"),s("OutboundLink")],1),e._v(" API. Here are a few common:")]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"custom-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-service","aria-hidden":"true"}},[this._v("#")]),this._v(" Custom service")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"what-is-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-service","aria-hidden":"true"}},[this._v("#")]),this._v(" What is Service?")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Service is also like "),t("code",[this._v("process('x).entry('./y.js')")]),this._v(" similarly, define the Node.js program in the process. But it's more structured, and provides the following basic capabilities:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("The standard "),s("code",[e._v("async start()")]),e._v(" interface allows the user to asynchronous start the Node.js program.")]),e._v(" "),s("li",[e._v("The standard "),s("code",[e._v("async stop()")]),e._v(" interface allows users to have elegant offline Nodes.js programs (for example, elegant offline RPC services, to avoid service flash break).")]),e._v(" "),s("li",[e._v("Structured log management, and configure capabilities.")]),e._v(" "),s("li",[e._v("Start-up order (dependency relationship) management in the process.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-to-get-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-service","aria-hidden":"true"}},[this._v("#")]),this._v(" How to get Service")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("User can be obtained by "),t("code",[this._v("require('dorapan').getService(serviceName)")]),this._v(".")]),this._v(" "),t("li",[this._v("This method is also available in the Service builder with the passed-in ServiceContext.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-to-define-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-define-service","aria-hidden":"true"}},[this._v("#")]),this._v(" How to define Service")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("procfile.js")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("exports")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("pandora"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  pandora\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'serviceName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./service.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("pandora. service('serviceName', './service.js')")]),this._v(" means that defines a Service called "),t("code",[this._v("serviceName")]),this._v(", and define the implementation of the Service in "),t("code",[this._v("./service.js")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("procfile.js")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("exports")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("pandora"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Define a service named serviceA")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The second parameter is a specific implementation, can be an address, or a reference to an implementation class")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// If the second parameter is not passed, the defined Service are modified")]),e._v("\n  pandora"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'serviceA'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./ServiceA'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Rename Service")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Obtained without passing parameters")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'renameIt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Specify the process that is assigned to, by default being worker")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// You can use `pandora.defaultServiceCategory('worker')` to modify the default value.")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Obtained without passing parameters")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("process")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'worker'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Configure to Service")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Obtained without passing parameters")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5555")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Define dependency, the following means that the serviceX must start with this service")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Obtained without passing parameters")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'serviceX'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The service is published at the IPC-Hub, specifically refer to the [《Inter-Process Communication Hub》](http://www.midwayjs.org/pandora/zh-cn/process/ipc_hub.html)")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// .publish(false) To cancel the release")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("publish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Drop: (Delete) the service definition")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("drop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-value-of-serive-process-processname-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-value-of-serive-process-processname-string","aria-hidden":"true"}},[this._v("#")]),this._v(" The value of "),t("code",[this._v("serive().process(processName: string)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("processName")]),this._v(" in "),t("code",[this._v("service().process(processName: string)")]),this._v(" can have the following values:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("A process name that has been defined.")]),this._v(" "),t("li",[this._v("'weak-all', all processes that have been activated (via entry or other Service), but they do not activate any processes themselves.")]),this._v(" "),t("li",[this._v("'all', all processes that defined (Will activate all defined processes, including built-in default definitions, not recommended for use).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"modify-the-process-for-the-default-allocation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-process-for-the-default-allocation","aria-hidden":"true"}},[this._v("#")]),this._v(" Modify the Process for the default allocation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Use the "),t("code",[this._v("pandora.defaultServiceCategory()")]),this._v(" mentioned above to modify.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("exports")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("pandora"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  pandora"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("defaultServiceCategory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'processName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-to-implement-a-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-implement-a-service","aria-hidden":"true"}},[this._v("#")]),this._v(" How to implement a Service")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Optional, the first parameter of the builder is a ServiceContextAccessor, the service context object, as described below.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("start(): Promise<void> | void")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Optional, life cycle methods, start the service.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("stop?(): Promise<void> | void")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Optional, life cycle methods, stop the service. The Pandora.js gives a 5-second time window for an elegant exit at the time of the stop.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"static-attribute-method-constraint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#static-attribute-method-constraint","aria-hidden":"true"}},[this._v("#")]),this._v(" Static attribute, method constraint")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("dependencies: string[]")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Optional, also known as the static property in the class system. Define the dependency of a certain service.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"the-main-interface-provided-by-servicecontextaccessor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-main-interface-provided-by-servicecontextaccessor","aria-hidden":"true"}},[this._v("#")]),this._v(" The main interface provided by ServiceContextAccessor")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"primary-attribute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#primary-attribute","aria-hidden":"true"}},[this._v("#")]),this._v(" Primary attribute")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("serviceName: string")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("The name of Service")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("config: any")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Configuration for Service, defined in "),t("code",[this._v(".service().config({ key: 'value' })")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("dependencies: { [depName: string]: Service }")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("All the Service instance that dependent.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("logger: ServiceLogger")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Service proprietary log objects, log file to "),t("code",[this._v("${logsDir}/${appName}/service.log")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"unit-test"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unit-test","aria-hidden":"true"}},[this._v("#")]),this._v(" Unit test")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can directly "),t("code",[this._v("new")]),this._v(" your implementation class to write the unit test.")])}],!1,null,null,null);n.options.__file="service_std.md";t.default=n.exports}}]);