<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //
    protected $fillable = [
        'publisher', 'like', 'title', "content", "car_name", "stroke", "consumption", "mileage", "img"
    ];

    public static function create($oid, $title, $content)
    {
        $order = Order::find($oid);
        if (!$order || ($order->uid != session('uid'))) {
            return msg(4, "订单异常");
        }
        $car_name = Car::find($order->car_id)->getModel()->name;
        $img = Car::find($order->car_id)->getModel()->imgUrl;
        $post = new Post([
            'publisher' => session('uid'),
            'title' => $title,
            'content' => $content,
            'car_name' => $car_name,
            'stroke' => json_decode($order->begin_status, true)['city'] . "-" . json_decode($order->end_status, true)['city'],
            'consumption' => $order->consumption,
            'mileage' => $order->cost / 100,
            'img' => $img,
        ]);
        $post->save();

        return 0;
    }
}
