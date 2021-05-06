<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    //
    public function register(Request $request) {
        $data = $request->only(["account", "password"]);
        $rel = User::register($data["account"], $data["password"]);
        if(!$rel) {
            return msg(-1, "失败");
        }
        return msg(0, "成功");
    }

    public function login(Request $request) {
        $data = $request->only(["account", "password"]);
        $user = User::query()->where('account', $data["account"])->first();
        if($user->verifyPassword($data["password"])) {
            session(["uid" => $user->id]);
            return msg(0, $user->info());
        }
        return msg(2, "帐号密码不匹配");
    }

    public function updatePassword(Request $request) {
        $data = $request->only(["password", "new_password"]);
        $user = User::find(session('uid'));
        $user->setPassword($data["new_password"]);
        return msg(0, "");
    }

    public function updateSignature(Request $request) {
        $data = $request->only(["signature"]); 
        $user = User::find(session('uid'));
        $user->signature = $data["signature"];
        $user->save();
        return msg(0, "");
    }

    public function updateAvatar(Request $request) {
        $data = $request->only(["avatar"]);
        $user = User::find(session('uid'));
        $user->avatar = $data["avatar"];
        $user->save();
        return msg(0, "");
    }
}
