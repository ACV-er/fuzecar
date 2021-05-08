<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    protected $fillable = [
        'uid', 'car_id', 'status', 'begin_status', 'end_status', 'consumption',
        'begin_time', 'end_time', 'cost',
    ];
}
