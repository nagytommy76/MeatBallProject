<?php

namespace App\View\Components;

use Illuminate\View\Component;

class EditFood extends Component
{
    public $route;
    public $foodName;
    public $foodId;
    public $ingredients;
    public $prices;
    public $images;

    public function __construct($route, $foodName, $foodId, $ingredients, $prices, $images)
    {
        $this->route = $route;
        $this->foodName = $foodName;
        $this->foodId = $foodId;
        $this->ingredients = $ingredients;
        $this->prices = $prices;
        $this->images = $images;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.edit-food');
    }
}
