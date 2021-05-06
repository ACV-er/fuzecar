<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    //
    protected $fillable = [
        'nickname', 'account', 'password', 'signature', 'avatar',
    ];

    public static function register($account, $pwd) {
        $user = new User([
            'nickname' => random_int(100000, 500000),
            'account' => $account,
            'password' => md5($pwd),
            'signature' => "",
            'avatar' => "",
        ]);

        return $user->save();
    }

    public function verifyPassword($pwd) {
        return md5($pwd) === $this->password;
    }

    public function setPassword($pwd) {
        $this->password = md5($pwd);
        $this->save();
    }

    public function info() {
        return [
            'nickname' => $this->nickname,
            'account' => $this->account,
            'signature' => $this->signature,
            'avatar' => $this->avatar,
        ];
    }
}
