# 认证流程

## 引导用户访问认证服务器

1、`GET` 点击登录，重定向到授权端点：

``` url
https://open.qz5z.ren/oauth2/authorize?
  response_type=code&
  client_id=a5ce5a6c7e8c39567ca0&
  redirect_uri=https://example.com/api/oauth/callback&
  state=auth&
  scope=phone
```

| 字段            |                 描述                |
|---------------|:---------------------------------:|
| response_type |    **必须**，固定为 code，表示这是一个授权码请求    |
| client_id     |         **必须**，申请来的客户端 ID         |
| redirect_uri  | *可选*，通过客户端注册的重定向 URI（一般要求且与注册时一致） |
| state         |        **必须**，如果存在，原样返回给客户端       |
| scope         |    *可选*，请求资源范围，多个空格隔开（可选内容见附录）    |

认证成功后，用户将被重定向到：

``` url
https://example.com/api/oauth/callback?
    code=fb6a88dc09e843b33f&
    state=auth
```

## 通过 code 获取 token

`POST` 获取令牌 token，当获取到授权码 code 后，客户端需要用它获取访问令牌：

``` url
https://open.qz5z.ren/oauth2/token?
  client_id=a5ce5a6c7e8c39567ca0&
  client_secret=xxxx&
  grant_type=authorization_code&
  code=fb6a88dc09e843b33f&
  redirect_uri=https://example.com/api/oauth/callback&
  scope=phone
```

| 字段            |               描述              |
|---------------|:-----------------------------:|
| client_id     |       **必须**，申请来的客户端 ID       |
| client_secret |          **必须**，客户端密钥         |
| grant_type    | **必须**，固定为 authorization_code |
| code          |       **必须**，上一步获取到的授权码       |
| redirect_uri  |    **必须**，完成授权后的回调地址，与注册时一致   |
| scope         |   *可选*，请求资源范围，必须是第一步申请的内容的子集  |

返回值：

``` json
{
  "access_token":"a14afef0f66fcffce3e0fcd2e34f6ff4",
  "token_type":"bearer",
  "expires_in":3600,
  "refresh_token":"5d633d136b6d56a41829b73a424803ec"
}
```

| 字段            |           描述           |
|---------------|:----------------------:|
| access_token  |      这个就是最终获取到的令牌      |
| token_type    |   令牌类型，bearer（目前没啥用）   |
| expires_in    |          失效时间          |
| refresh_token | 刷新令牌，用来刷新 access_token |

## 通过 token 获取用户信息

`POST` 当获取到 token 后，服务器需要用它获取用户信息：

``` url
https://open.qz5z.ren/oauth2/api/getUserData?
  access_token=a14afef0f66fcffce3e0fcd2e34f6ff4&
  scope=phone
```

| 字段           |        描述       |
|--------------|:---------------:|
| access_token | **必须**，上一步返回的令牌 |
| scope        |   *可选*，和上一步的一致  |

如果申请失败，会返回以下信息：

``` json
{
    "error": "invalid_token",
    "error_description": "The access token provided is invalid"
}
```

| 字段                |   描述  |
|-------------------|:-----:|
| error             |  错误代号 |
| error_description |  错误描述 |

否则，会直接返回用户信息：

（注意，用户信息与申请的 `scope` 有关，在 `scope` 为空的情况下，默认返回 `uid`、`name`、`grade`、`class` 和 `number`。

``` json
{
    "uid": "2333",
    "name": "江哲明",
    "grade": "高中2016级",
    "class": "10班",
    "number": "23",
    "phone": "18900000000"
}
```

| 字段     |      描述     |
|--------|:-----------:|
| uid    | 默认返回，唯一用户编码 |
| name   |  默认返回，用户姓名  |
| grade  |  默认返回，用户年段  |
| class  |  默认返回，用户班级  |
| number |  默认返回，用户座号  |
| phone  |  需申请，用户手机号  |
