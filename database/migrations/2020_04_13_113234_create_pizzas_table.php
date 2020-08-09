<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePizzasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pizzas', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('image_id');
            $table->unsignedBigInteger('price_id');
            // $table->foreign('image_id')->references('id')->on('pizza_images');
            // $table->foreign('price_id')->references('id')->on('pizza_price');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pizzas');
        Schema::table('pizzas', function (Blueprint $table) {
            $table->dropForeign('image_id');
            $table->dropForeign('price_id');
        });
        
    }
}
