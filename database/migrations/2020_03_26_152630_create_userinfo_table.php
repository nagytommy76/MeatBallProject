<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserinfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('userinfo', function (Blueprint $table) {
            $table->string('phone',11);
            $table->string('user_email',255)->unique();
            $table->string('firstName', 50);
            $table->string('lastName');
            $table->smallInteger('zipCode');
            $table->string('city',100);
            $table->string('street', 150);
            $table->smallInteger('houseNumber');
            $table->string('floorDoor')->nullable();

            $table->primary('phone');
            $table->foreign('user_email')->references('email')->on('users');
            // $table->index('email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('userinfo');
    }
}
