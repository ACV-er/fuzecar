<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger("model")->comment("汽车型号表ID");
            $table->string("positionX")->comment("经度");
            $table->string("positionY")->comment("纬度");
            $table->string("mileage")->comment("总里程");
            $table->string("number_plate", 20);
            $table->json("imageUrls")->comment("车辆照片");
            $table->float("consumption")->default(7.0)->comment("油耗");
            $table->string("city", 500);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
