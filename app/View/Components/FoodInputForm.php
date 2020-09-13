<?php

namespace App\View\Components;

use Illuminate\View\Component;

class FoodInputForm extends Component
{
    public $ingredients;
    public $route;
    public $cardName;
    public $capacity;

    public function __construct($ingredients, $route, $cardName, $capacity)
    {
        $this->ingredients = $ingredients;
        $this->route = $route;
        $this->cardName = $cardName;
        $this->capacity = $capacity;
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
