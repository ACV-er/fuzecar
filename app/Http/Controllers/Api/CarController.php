<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    //
    /**
     * @api {get} /api/cars/:id     汽车列表
     * @apiGroup 车辆
     * @apiVersion 1.0.0
     *
     * @apiDescription 汽车列表
     *
     * @apiParam {Number}  page        分页页码，从1开始
     * @apiParam {Number}  pre_page    每页记录条数
     *
     * @apiSuccess {Number} code     状态码，0：请求成功
     * @apiSuccess {String} message  提示信息
     * @apiSuccess {Object} data     车辆列表
     *
     * @apiSuccessExample {json} Success-Response:
     * {
     * "code":0,
     * "status":"成功",
     * "data":[
     *     {
     *         "id":1,
     *         "model":1,
     *         "positionX":"122.57667",
     *         "positionY":"31.202186",
     *         "mileage":"10",
     *         "number_plate":"沪B00001",
     *         "imageUrls":"[]",
     *         "created_at":"2021-04-25 00:00:00",
     *         "updated_at":"2021-04-25 00:00:00",
     *         "model_name":"比亚迪汉EV",
     *         "model_img":"https://p4.itc.cn/images01/20210204/328dd9f36e614232ba44e5ac59c2fd89.jpeg",
     *         "brand":"比亚迪"
     *     },
     *     {
     *         "id":2,
     *         "model":2,
     *         "positionX":"121.47667",
     *         "positionY":"31.202184",
     *         "mileage":"300",
     *         "number_plate":"沪A00001",
     *         "imageUrls":"[]",
     *         "created_at":"2021-04-28 00:00:00",
     *         "updated_at":"2021-04-28 00:00:00",
     *         "model_name":"宝马三系",
     *         "model_img":"https://car2.autoimg.cn/cardfs/product/g30/M06/FD/CA/1024x0_1_q95_autohomecar__ChsEf2AbnlGAXWcNAC15oG1haCc768.jpg",
     *         "brand":"宝马"
     *     }
     * ]
     *}     
     */
    public function getList(Request $request) {
        $data = $request->only(["page", "pre_page"]);
        return msg(0, Car::list($data['page'], $data['pre_page']));
    }
}
