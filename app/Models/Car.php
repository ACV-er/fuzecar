<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Car extends Model
{
    //
    protected $fillable = [
        'model', 'positionX', 'positionY', "mileage", "imageUrls", "city"
    ];

    public static function list(int $page, int $per_page): array
    {
        $page -= 1;
        return DB::select('SELECT t.*, m.name AS model_name, m.imgUrl AS model_img, b.name AS brand  FROM ' .
            '(SELECT * FROM `cars` LIMIT ? OFFSET ?) AS t ' .
            'LEFT JOIN car_models AS m ON(t.model=m.id) LEFT JOIN brands AS b ON(m.brand=b.id)', 
            [$per_page, $page*$per_page]);
    }

    public function status() {
        return [
            "positionX" => $this->positionX,
            "positionY" => $this->positionY,
            "mileage" => $this->mileage,
            "city" => $this->city,
        ];
    }

    public function info() {
        return array_merge([
            "model" => $this->model,
            "number_plate" => $this->number_plate,
            "imageUrls" => $this->imageUrls,
        ], $this->status());
    }

    public function setPosition($positionX, $positionY) {
        $this->positionX = $positionX;
        $this->positionY = $positionY;

        $this->save();
    }

    public function setCity($city) {
        $this->city = $city;

        $this->save();
    }

    public function addMileage($mileage) {
        $this->mileage = floatval($mileage) + floatval($this->mileage);

        $this->save();
    }
}
