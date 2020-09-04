<?php

namespace App\View\Components;

use Illuminate\View\Component;

class FoodDeleteForm extends Component
{
    public $route;
    public $method;
    public $cardName;
    public $allFood;
    public $btnClass;
    public $btnValue;

    public function __construct($route, $method, $cardName, $allFood, $btnClass, $btnValue)
    {
        $this->route = $route;
        $this->method = $method;
        $this->cardName = $cardName;
        $this->allFood = $allFood;
        $this->btnClass = $btnClass;
        $this->btnValue = $btnValue;
    }
 
    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.food-delete-form');
    }
}
