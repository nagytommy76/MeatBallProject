<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDrinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drinks', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->float('capacity', 10, 2);
            $table->unsignedBigInteger('image_id');
            $table->unsignedBigInteger('price_id');

            $table->foreign('image_id')->references('id')->on('drink_images')->onDelete('cascade');
            $table->foreign('price_id')->references('id')->on('drink_price')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('drinks');
    }
}
