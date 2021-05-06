define({ "api": [
  {
    "type": "get",
    "url": "/api/cars/:id",
    "title": "汽车列表",
    "group": "__",
    "version": "1.0.0",
    "description": "<p>汽车列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>分页页码，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pre_page",
            "description": "<p>每页记录条数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0：请求成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>车辆列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\":0,\n\"status\":\"成功\",\n\"data\":[\n    {\n        \"id\":1,\n        \"model\":1,\n        \"positionX\":\"122.57667\",\n        \"positionY\":\"31.202186\",\n        \"mileage\":\"10\",\n        \"number_plate\":\"沪B00001\",\n        \"imageUrls\":\"[]\",\n        \"created_at\":\"2021-04-25 00:00:00\",\n        \"updated_at\":\"2021-04-25 00:00:00\",\n        \"model_name\":\"比亚迪汉EV\",\n        \"model_img\":\"https://p4.itc.cn/images01/20210204/328dd9f36e614232ba44e5ac59c2fd89.jpeg\",\n        \"brand\":\"比亚迪\"\n    },\n    {\n        \"id\":2,\n        \"model\":2,\n        \"positionX\":\"121.47667\",\n        \"positionY\":\"31.202184\",\n        \"mileage\":\"300\",\n        \"number_plate\":\"沪A00001\",\n        \"imageUrls\":\"[]\",\n        \"created_at\":\"2021-04-28 00:00:00\",\n        \"updated_at\":\"2021-04-28 00:00:00\",\n        \"model_name\":\"宝马三系\",\n        \"model_img\":\"https://car2.autoimg.cn/cardfs/product/g30/M06/FD/CA/1024x0_1_q95_autohomecar__ChsEf2AbnlGAXWcNAC15oG1haCc768.jpg\",\n        \"brand\":\"宝马\"\n    }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/CarController.php",
    "groupTitle": "__",
    "name": "GetApiCarsId"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "登陆",
    "group": "__",
    "version": "1.0.0",
    "description": "<p>登陆</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>帐号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0：请求成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>后端参考信息，前端无关</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"status\":\"成功\",\"data\":43}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "__",
    "name": "GetUser"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "注册",
    "group": "__",
    "version": "1.0.0",
    "description": "<p>注册</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>帐号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0：请求成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>后端参考信息，前端无关</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"status\":\"成功\",\"data\":43}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "__",
    "name": "PostUser"
  },
  {
    "type": "post",
    "url": "/user/password",
    "title": "修改密码",
    "group": "__",
    "version": "1.0.0",
    "description": "<p>修改密码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "new_password",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0：请求成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>后端参考信息，前端无关</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"status\":\"成功\",\"data\":43}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "__",
    "name": "PostUserPassword"
  },
  {
    "type": "post",
    "url": "/user/signature",
    "title": "修改个性签名",
    "group": "__",
    "version": "1.0.0",
    "description": "<p>修改个性签名</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>个性签名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0：请求成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>后端参考信息，前端无关</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"status\":\"成功\",\"data\":43}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "__",
    "name": "PostUserSignature"
  },
  {
    "type": "post",
    "url": "/user/signature",
    "title": "修改头像",
    "group": "__",
    "version": "1.0.0",
    "description": "<p>修改头像</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signature",
            "description": "<p>头像url</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码，0：请求成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>后端参考信息，前端无关</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"status\":\"成功\",\"data\":43}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "__",
    "name": "PostUserSignature"
  }
] });