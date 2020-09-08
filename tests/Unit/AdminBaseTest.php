<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\TestCase;

class AdminBaseTest extends TestCase
{
    /** @test */
    public function base_admin_food_saving_method()
    {
        $meal = factory(\App\Model\Soup\Soup::class)->make();
        $this->assertTrue(true);
    }
}
