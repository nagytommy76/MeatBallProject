<?php

namespace App\View\Components;

use Illuminate\View\Component;

class FoodInputForm extends Component
{
    public $route;
    public $cardName;

    public function __construct($route, $cardName)
    {
        $this->route = $route;
        $this->cardName = $cardName;
    }
    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.food-input-form');
    }
}
