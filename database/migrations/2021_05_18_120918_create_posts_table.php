<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('publisher')->comment("发布者id");
            $table->integer("like")->default(0)->comment("赞数");
            $table->string("title");
            $table->string("content");
            $table->string("car_name");
            $table->string("stroke")->comment("行程");
            $table->string("consumption")->comment("油耗");
            $table->string("img", 200)->comment("汽车图片");
            $table->float("mileage")->comment("里程");

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
        Schema::dropIfExists('posts');
    }
}
