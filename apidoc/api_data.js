define({ "api": [
  {
    "type": "post",
    "url": "/api/image",
    "title": "图片上传",
    "group": "图片",
    "name": "图片上传",
    "version": "1.0.0",
    "description": "<p>上传图片，返回url。登陆后可操作</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>图片文件</p>"
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
            "field": "status",
            "description": "<p>状态信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>图片url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"status\":\"成功\",\"data\":\"https://upick.acver.xyz/image/123.jpg\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\"code\":500,\"status\":\"上传失败\"}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/ImageController.php",
    "groupTitle": "图片"
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "登陆",
    "group": "用户",
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
            "description": "<p>个人信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"status\":\"成功\",\"data\":{\"nickname\":\"124090\",\"account\":\"123456\",\"signature\":\"签名测试\",\"avatar\":\"\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/UserController.php",
    "groupTitle": "用户",
    "name": "GetApiUser"
  },
  {
    "type": "post",
    "url": "/api/user",
    "title": "注册",
    "group": "用户",
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
    "groupTitle": "用户",
    "name": "PostApiUser"
  },
  {
    "type": "post",
    "url": "/api/user/avatar",
    "title": "修改头像",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>修改头像</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
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
    "groupTitle": "用户",
    "name": "PostApiUserAvatar"
  },
  {
    "type": "post",
    "url": "/api/user/nickname",
    "title": "修改昵称",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>修改昵称</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
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
    "groupTitle": "用户",
    "name": "PostApiUserNickname"
  },
  {
    "type": "post",
    "url": "/api/user/password",
    "title": "修改密码",
    "group": "用户",
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
    "groupTitle": "用户",
    "name": "PostApiUserPassword"
  },
  {
    "type": "post",
    "url": "/api/user/signature",
    "title": "修改个性签名",
    "group": "用户",
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
    "groupTitle": "用户",
    "name": "PostApiUserSignature"
  },
  {
    "type": "get",
    "url": "/api/order/:id",
    "title": "获取用户订单",
    "group": "订单",
    "version": "1.0.0",
    "description": "<p>获取用户订单,id为url参数，如订单id为1则url为 /api/order/1</p> <p>apiParam {Number}  id    订单id</p>",
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
            "description": "<p>订单信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"status\":\"成功\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/OrderController.php",
    "groupTitle": "订单",
    "name": "GetApiOrderId"
  },
  {
    "type": "get",
    "url": "/api/orders",
    "title": "获取用户订单列表",
    "group": "订单",
    "version": "1.0.0",
    "description": "<p>获取用户订单列表</p>",
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
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>订单列表信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"code\":0,\"status\":\"成功\",\"data\":{}}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/OrderController.php",
    "groupTitle": "订单",
    "name": "GetApiOrders"
  },
  {
    "type": "post",
    "url": "/api/order",
    "title": "开始租车订单",
    "group": "订单",
    "version": "1.0.0",
    "description": "<p>开始租车订单</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "car_id",
            "description": "<p>车辆id</p>"
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
            "description": "<p>返回生成的订单id</p>"
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
    "filename": "app/Http/Controllers/Api/OrderController.php",
    "groupTitle": "订单",
    "name": "PostApiOrder"
  },
  {
    "type": "post",
    "url": "/api/order/:id/close",
    "title": "结束租车订单",
    "group": "订单",
    "version": "1.0.0",
    "description": "<p>结束租车订单</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单id，url参数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "consumption",
            "description": "<p>订单内油耗</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "positionX",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "positionY",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mileage",
            "description": "<p>订单内里程</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>还车城市</p>"
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
    "filename": "app/Http/Controllers/Api/OrderController.php",
    "groupTitle": "订单",
    "name": "PostApiOrderIdClose"
  },
  {
    "type": "get",
    "url": "/api/car/:car_id",
    "title": "汽车使用记录",
    "group": "车辆",
    "version": "1.0.0",
    "description": "<p>汽车列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "car_id",
            "description": "<p>url参数,汽车id</p>"
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
          "content": "{\n\"code\":0,\n\"status\":\"成功\",\n\"data\":{\n    \"info\": {\n      汽车信息\n    },\n    \"history\": [\n      使用记录\n    ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/CarController.php",
    "groupTitle": "车辆",
    "name": "GetApiCarCar_id"
  },
  {
    "type": "get",
    "url": "/api/cars",
    "title": "汽车列表",
    "group": "车辆",
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
    "groupTitle": "车辆",
    "name": "GetApiCars"
  }
] });
