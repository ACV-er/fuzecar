<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('car_id');
            $table->integer("status")->comment("-1失败，0发起，1待支付，2支付成功，3进行中，4完成");
            $table->json("begin_status")->comment("订单开始时车辆状态");
            $table->json("end_status")->comment("订单结束时车辆状态");
            $table->float("consumption")->comment("订单内油耗");
            $table->dateTime("begin_time")->comment("行程开始时间");
            $table->dateTime("end_time")->comment("行程结束时间");
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
        Schema::dropIfExists('orders');
    }
}
