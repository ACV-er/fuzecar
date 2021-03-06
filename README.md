# fuzecar后端

## 描述
* 基于php7.3的laravel项目，使用composer作为包管理工具，项目构建时自动完成`composer install`  
* 使用apidoc生成文档，在项目中使用`npm install`即可直接安装apidoc, `npm run apidoc` 即可生成文档。
* 使用docker进行项目部署，install.sh为一键部署脚本。

## 部署
* 使用docker-composer管理容器
* 构建条件：  
  *   docker
  *   docker-compose
  *   npm [非必须，生成文档时使用。不装也必须写好apidoc注释]
* 构建
 ```
  ./install.sh
 ```
* web访问端口映射在10304，部署前确保该端口未被占用
* mysql存在默认密码，做相应修改**\[必须修改\]**
* laravel.env需要单独配置
* 构建中数据迁移有报错手动执行 `docker exec -it upick_php php artisan migrate`
* phpMyAdmin 地址为 `/mathjucool` (数据库)

## [接口文档](https://fuzecar.acver.xyz/apidoc/)
> 暂时没有

## 默认遵守的规定
* 统一使用`msg`函数作为接口返回，如调用失败则返回行号或错误信息加行号
* api形式路由写到route/api.php中
* 引入的文件写在composer.json `autoload["files"]`
* 引入的类写在composer.jsn `autoload["psr-4"]`
* 自己封装的工具函数放到 `app/Helper/tools` 文件
```

## 对laravel默认配置的一些改动
* 通过composer.json autoload["files"] 全局引入app/Helper/tools.php
* session 名固定为 `laravel_session` 在 `config/session.php`

## 数据文件
* mysql 数据文件挂载在 dockercnf/mysql5.7/db_data
* redis 数据文件挂载在 dockercnf/redis/[redis容器名]_data

## session解释

|     session    |    意义    |
| :------------: | :----------------: |
|     `uid`      |   当前登录用户id   |

