(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{165:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"认证流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 认证流程")]),t._v(" "),a("h2",{attrs:{id:"引导用户访问认证服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引导用户访问认证服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 引导用户访问认证服务器")]),t._v(" "),a("p",[t._v("1、"),a("code",[t._v("GET")]),t._v(" 点击登录，重定向到授权端点：")]),t._v(" "),a("div",{staticClass:"language-url extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://open.qz5z.ren/oauth2/authorize?\n  response_type=code&\n  client_id=a5ce5a6c7e8c39567ca0&\n  redirect_uri=https://example.com/api/oauth/callback&\n  state=auth&\n  scope=phone\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("response_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("必须")]),t._v("，固定为 code，表示这是一个授权码请求")])]),t._v(" "),a("tr",[a("td",[t._v("client_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("必须")]),t._v("，申请来的客户端 ID")])]),t._v(" "),a("tr",[a("td",[t._v("redirect_uri")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("em",[t._v("可选")]),t._v("，通过客户端注册的重定向 URI（一般要求且与注册时一致）")])]),t._v(" "),a("tr",[a("td",[t._v("state")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("必须")]),t._v("，如果存在，原样返回给客户端")])]),t._v(" "),a("tr",[a("td",[t._v("scope")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("em",[t._v("可选")]),t._v("，请求资源范围，多个空格隔开（可选内容见附录）")])])])]),t._v(" "),a("p",[t._v("认证成功后，用户将被重定向到：")]),t._v(" "),a("div",{staticClass:"language-url extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://example.com/api/oauth/callback?\n    code=fb6a88dc09e843b33f&\n    state=auth\n")])])]),a("h2",{attrs:{id:"通过-code-获取-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-code-获取-token","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过 code 获取 token")]),t._v(" "),a("p",[a("code",[t._v("POST")]),t._v(" 获取令牌 token，当获取到授权码 code 后，应用所在服务器需要用它获取访问令牌：")]),t._v(" "),a("div",{staticClass:"language-url extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://open.qz5z.ren/oauth2/authorize/token?\n  client_id=a5ce5a6c7e8c39567ca0&\n  client_secret=xxxx&\n  grant_type=authorization_code&\n  code=fb6a88dc09e843b33f&\n  redirect_uri=https://example.com/api/oauth/callback&\n  scope=phone\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("client_id")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("必须")]),t._v("，申请来的客户端 ID")])]),t._v(" "),a("tr",[a("td",[t._v("client_secret")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("必须")]),t._v("，客户端密钥")])]),t._v(" "),a("tr",[a("td",[t._v("grant_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("必须")]),t._v("，固定为 authorization_code")])]),t._v(" "),a("tr",[a("td",[t._v("code")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("必须")]),t._v("，上一步获取到的授权码")])]),t._v(" "),a("tr",[a("td",[t._v("redirect_uri")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("必须")]),t._v("，完成授权后的回调地址，与注册时一致")])]),t._v(" "),a("tr",[a("td",[t._v("scope")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("em",[t._v("可选")]),t._v("，请求资源范围，必须是第一步申请的内容的子集")])])])]),t._v(" "),a("p",[t._v("返回值：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"access_token"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"a14afef0f66fcffce3e0fcd2e34f6ff4"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"token_type"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"bearer"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"expires_in"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3600")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"refresh_token"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"5d633d136b6d56a41829b73a424803ec"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("access_token")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("这个就是最终获取到的令牌")])]),t._v(" "),a("tr",[a("td",[t._v("token_type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("令牌类型，bearer（目前没啥用）")])]),t._v(" "),a("tr",[a("td",[t._v("expires_in")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("失效时间")])]),t._v(" "),a("tr",[a("td",[t._v("refresh_token")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("刷新令牌，用来刷新 access_token")])])])]),t._v(" "),a("h2",{attrs:{id:"通过-token-获取用户信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-token-获取用户信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过 token 获取用户信息")]),t._v(" "),a("p",[a("code",[t._v("POST")]),t._v(" 当获取到 token 后，服务器需要用它获取用户信息：")]),t._v(" "),a("div",{staticClass:"language-url extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://open.qz5z.ren/oauth2/api/getUserData?\n  access_token=a14afef0f66fcffce3e0fcd2e34f6ff4&\n  scope=phone\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("access_token")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("必须")]),t._v("，上一步返回的令牌")])]),t._v(" "),a("tr",[a("td",[t._v("scope")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("em",[t._v("可选")]),t._v("，和上一步的一致")])])])]),t._v(" "),a("p",[t._v("如果申请失败，会返回以下信息：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"error"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"invalid_token"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"error_description"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"The access token provided is invalid"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("error")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("错误代号")])]),t._v(" "),a("tr",[a("td",[t._v("error_description")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("错误描述")])])])]),t._v(" "),a("p",[t._v("否则，会直接返回用户信息：")]),t._v(" "),a("p",[t._v("（注意，用户信息与申请的 "),a("code",[t._v("scope")]),t._v(" 有关，在 "),a("code",[t._v("scope")]),t._v(" 为空的情况下，默认返回 "),a("code",[t._v("uid")]),t._v("、"),a("code",[t._v("name")]),t._v("、"),a("code",[t._v("grade")]),t._v("、"),a("code",[t._v("class")]),t._v(" 和 "),a("code",[t._v("number")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"uid"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2333"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"江哲明"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"grade"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"高中2016级"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"class"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"10班"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"number"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"23"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"phone"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"18900000000"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("字段")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("uid")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认返回，唯一用户编码")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认返回，用户姓名")])]),t._v(" "),a("tr",[a("td",[t._v("grade")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认返回，用户年段")])]),t._v(" "),a("tr",[a("td",[t._v("class")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认返回，用户班级")])]),t._v(" "),a("tr",[a("td",[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("默认返回，用户座号")])]),t._v(" "),a("tr",[a("td",[t._v("phone")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("需申请，用户手机号")])])])])])}],!1,null,null,null);n.options.__file="steps.md";e.default=n.exports}}]);