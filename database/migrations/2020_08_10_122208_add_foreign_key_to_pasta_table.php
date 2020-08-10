<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyToPastaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('pasta_and_rizotto', function (Blueprint $table) {
            $table->unsignedBigInteger('image_id');
            $table->unsignedBigInteger('price_id');
            $table->foreign('image_id')->references('id')->on('pasta_and_rizotto_images');
            $table->foreign('price_id')->references('id')->on('pasta_and_rizotto_price');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pasta_and_rizotto', function (Blueprint $table) {
            //
        });
    }
}
