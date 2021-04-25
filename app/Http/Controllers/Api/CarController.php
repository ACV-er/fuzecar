<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    //
    public function getList(Request $request) {
        $data = $request->only(["page", "pre_page"]);
        return msg(0, Car::list($data['page'], $data['pre_page']));
    }
}
