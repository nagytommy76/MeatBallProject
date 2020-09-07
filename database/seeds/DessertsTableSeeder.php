<?php

use Illuminate\Database\Seeder;

class DessertsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Model\Dessert\Dessert::class ,10)->create();
    }
}
