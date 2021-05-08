<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    //
    /**
     * @api {post} /api/user     注册
     * @apiGroup 用户
     * @apiVersion 1.0.0
     *
     * @apiDescription 注册
     *
     * @apiParam {String}  account     帐号
     * @apiParam {String}  password    密码
     *
     * @apiSuccess {Number} code     状态码，0：请求成功
     * @apiSuccess {String} message  提示信息
     * @apiSuccess {Object} data     后端参考信息，前端无关
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":43}
     */
    public function register(Request $request) {
        $data = $request->only(["account", "password"]);
        $rel = User::register($data["account"], $data["password"]);
        if(!$rel) {
            return msg(-1, __LINE__);
        }
        return msg(0, __LINE__);
    }

    /**
     * @api {get} /api/user     登陆
     * @apiGroup 用户
     * @apiVersion 1.0.0
     *
     * @apiDescription 登陆
     *
     * @apiParam {String}  account     帐号
     * @apiParam {String}  password    密码
     *
     * @apiSuccess {Number} code     状态码，0：请求成功
     * @apiSuccess {String} message  提示信息
     * @apiSuccess {Object} data     个人信息
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":{"nickname":"124090","account":"123456","signature":"签名测试","avatar":""}}
     */
    public function login(Request $request) {
        $data = $request->only(["account", "password"]);
        $user = User::query()->where('account', $data["account"])->first();
        if($user->verifyPassword($data["password"])) {
            session(["uid" => $user->id]);
            return msg(0, $user->info());
        }
        return msg(2, "帐号密码不匹配" . __LINE__);
    }

    /**
     * @api {post} /api/user/password     修改密码
     * @apiGroup 用户
     * @apiVersion 1.0.0
     *
     * @apiDescription 修改密码
     *
     * @apiParam {String}  password     密码
     * @apiParam {String}  new_password    新密码
     *
     * @apiSuccess {Number} code     状态码，0：请求成功
     * @apiSuccess {String} message  提示信息
     * @apiSuccess {Object} data     后端参考信息，前端无关
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":43}
     */
    public function updatePassword(Request $request) {
        $data = $request->only(["password", "new_password"]);
        $user = User::find(session('uid'));
        $user->setPassword($data["new_password"]);
        return msg(0, "");
    }

    /**
     * @api {post} /api/user/signature     修改个性签名
     * @apiGroup 用户
     * @apiVersion 1.0.0
     *
     * @apiDescription 修改个性签名
     *
     * @apiParam {String}  signature     个性签名
     *
     * @apiSuccess {Number} code     状态码，0：请求成功
     * @apiSuccess {String} message  提示信息
     * @apiSuccess {Object} data     后端参考信息，前端无关
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":43}
     */
    public function updateSignature(Request $request) {
        $data = $request->only(["signature"]); 
        $user = User::find(session('uid'));
        $user->signature = $data["signature"];
        $user->save();
        return msg(0, __LINE__);
    }

    /**
     * @api {post} /api/user/avatar     修改头像
     * @apiGroup 用户
     * @apiVersion 1.0.0
     *
     * @apiDescription 修改头像
     *
     * @apiParam {String}  avatar     头像url
     *
     * @apiSuccess {Number} code     状态码，0：请求成功
     * @apiSuccess {String} message  提示信息
     * @apiSuccess {Object} data     后端参考信息，前端无关
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":43}
     */
    public function updateAvatar(Request $request) {
        $data = $request->only(["avatar"]);
        $user = User::find(session('uid'));
        $user->avatar = $data["avatar"];
        $user->save();
        return msg(0, __LINE__);
    }

    /**
     * @api {post} /api/user/nickname     修改昵称
     * @apiGroup 用户
     * @apiVersion 1.0.0
     *
     * @apiDescription 修改昵称
     *
     * @apiParam {String}  nickname     昵称
     *
     * @apiSuccess {Number} code     状态码，0：请求成功
     * @apiSuccess {String} message  提示信息
     * @apiSuccess {Object} data     后端参考信息，前端无关
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":43}
     */
    public function updateNickname(Request $request) {
        $data = $request->only(["nickname"]);
        $user = User::find(session('uid'));
        $user->avatar = $data["nickname"];
        $user->save();
        return msg(0, __LINE__);
    }
}
