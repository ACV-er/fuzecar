<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Car extends Model
{
    //
    protected $fillable = [
        'model', 'positionX', 'positionY', "mileage", "imageUrls"
    ];

    public static function list(int $page, int $per_page): array
    {
        $page -= 1;
        return DB::select('SELECT t.*, m.name AS model_name, m.imgUrl AS model_img, b.name AS brand  FROM ' .
            '(SELECT * FROM `cars` LIMIT ? OFFSET ?) AS t ' .
            'LEFT JOIN car_models AS m ON(t.model=m.id) LEFT JOIN brands AS b ON(m.brand=b.id)', 
            [$per_page, $page*$per_page]);
    }
}
