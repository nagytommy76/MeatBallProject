<?php

use Illuminate\Database\Seeder;

class SoupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Model\Soup\Soup::class ,1)->create();
    }
}
