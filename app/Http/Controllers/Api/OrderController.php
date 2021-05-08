<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Car;
use App\Models\Order;

class OrderController extends Controller
{
    /**
     * @api {get} /api/orders    获取用户订单列表
     * @apiGroup 订单
     * @apiVersion 1.0.0
     *
     * @apiDescription 获取用户订单列表
     *
     *
     * @apiSuccess {Number} code     状态码，0：请求成功
     * @apiSuccess {String} message  提示信息
     * @apiSuccess {Object} data     订单列表信息
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":43}
     */
    public function orderList(Request $request) {
        $order_list = Order::query()->where("uid", session('uid'))->get()->toArray();

        return msg(0, $order_list);
    }

    /**
     * @api {get} /api/order/:id    获取用户订单
     * @apiGroup 订单
     * @apiVersion 1.0.0
     *
     * @apiDescription 获取用户订单,id为url参数，如订单id为1则url为 /api/order/1
     * 
     * apiParam {Number}  id    订单id
     *
     * @apiSuccess {Number} code     状态码，0：请求成功
     * @apiSuccess {String} message  提示信息
     * @apiSuccess {Object} data     订单列表信息
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":43}
     */
    public function order(Request $request) {
        $id = $request->route('id');
        $order = Order::query()->where("id", $id)->where("uid", session('uid'))
                                    ->first();

        return msg(0, $order);
    }

    /**
     * @api {post} /api/order    开始租车订单
     * @apiGroup 订单
     * @apiVersion 1.0.0
     *
     * @apiDescription 开始租车订单
     *
     * @apiParam {Number}  car_id    车辆id
     *
     * @apiSuccess {Number} code     状态码，0：请求成功
     * @apiSuccess {String} message  提示信息
     * @apiSuccess {Object} data     返回生成的订单id
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":43}
     */
    public function create(Request $request) {
        $car_id = $request->input("car_id");
        // $user = User::find(session('uid'));
        $car = Car::find($car_id);
        
        $order = new Order([
            'uid' => session('uid'),
            'car_id' => $car_id,
            'status' => 3,
            'begin_status' => json_encode($car->status(), JSON_UNESCAPED_UNICODE),
            'begin_time' => date("Y-m-d H:i:s"),
        ]);

        $order->save();

        return msg(0, $order->id);
    }

    /**
     * @api {post} /api/order/:id/close    结束租车订单
     * @apiGroup 订单
     * @apiVersion 1.0.0
     *
     * @apiDescription 结束租车订单
     *
     * @apiParam {Number}  id    订单id，url参数
     * 
     * @apiParam {Number}  consumption  订单内油耗
     * @apiParam {String}  positionX    经度
     * @apiParam {String}  positionY    纬度
     * @apiParam {string}  mileage      订单内里程
     * @apiParam {string}  city         还车城市
     *
     * @apiSuccess {Number} code     状态码，0：请求成功
     * @apiSuccess {String} message  提示信息
     * @apiSuccess {Object} data     后端参考信息，前端无关
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":43}
     */
    public function close(Request $request) {
        // $user = User::find(session('uid'));
        $id = $request->route('id');
        $order = Order::find($id);
        if($order->uid != session("uid") || $order->status == 4) {
            return msg(5, "非法操作");
        }

        $car = Car::find($order->car_id);
        $car->setPosition($request->input("positionX"), $request->input("positionY"));
        $car->addMileage($request->input("mileage"));
        $car->setCity($request->input("city"));

        $order->end_status = json_encode($car->status(), JSON_UNESCAPED_UNICODE);
        $order->consumption = $request->input("consumption");
        $order->status = 4;
        $order->end_time = date("Y-m-d H:i:s");
        $order->cost = $request->input("mileage") * 100;

        $order->save();

        return msg(0, "");
    }
}
