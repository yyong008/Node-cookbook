(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{214:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("向GraphQL模式询问有关其支持哪些查询的信息通常很有用。 GraphQL允许我们使用自省系统！")]),t._v(" "),a("p",[t._v("对于我们的《星球大战》示例，文件starWarsIntrospection-test.js包含许多说明内省系统的查询，并且是一个可运行以行使参考实现的内省系统的测试文件。")]),t._v(" "),a("p",[t._v("我们设计了类型系统，所以我们知道可用的类型，但是如果没有，我们可以通过查询__schema字段询问GraphQL，该字段始终在查询的根类型上可用。现在让我们开始，并询问可用的类型。")]),t._v(" "),a("div",{staticClass:"language-graphql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-graphql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  __schema "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    types "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"__schema"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"types"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Query"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Episode"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Character"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("哇，种类很多！这些是什么？让我们将它们分组：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("查询")]),t._v("，"),a("code",[t._v("角色")]),t._v("，"),a("code",[t._v("人")]),t._v("，"),a("code",[t._v("情节")]),t._v("，"),a("code",[t._v("机器人")]),t._v("-这些是我们在类型系统中定义的。")]),t._v(" "),a("li",[a("code",[t._v("字符串")]),t._v("，"),a("code",[t._v("布尔值")]),t._v("-这些是类型系统提供的内置标量。")]),t._v(" "),a("li",[a("code",[t._v("__Schema")]),t._v("，"),a("code",[t._v("__Type")]),t._v("，"),a("code",[t._v("__TypeKind")]),t._v("，"),a("code",[t._v("__Field")]),t._v("，"),a("code",[t._v("__InputValue")]),t._v("，"),a("code",[t._v("__EnumValue")]),t._v("，"),a("code",[t._v("__Directive-")]),t._v("这些都带有双下划线，表示它们是自省系统的一部分。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);