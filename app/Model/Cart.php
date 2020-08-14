<?php

namespace App\Model;


class Cart
{
    public $items = null;
    public $totalQty = 0;
    public $totalPrice = 0;

    private $arrayKey = 0;
    private $storedItem = array();

    /**
    * @param array $oldCart Items from Session::get()
    * @param boolean $toDeleteItem=false if delete: True
    **/
    public function __construct($oldCart, $toDeleteItem = false){
        if ($oldCart) {
            $this->items = $oldCart->items;
            $this->totalQty = $oldCart->totalQty;
            if($toDeleteItem) $this->totalPrice = $oldCart->totalPrice;
        }
    }
    public function addToCart($item, $id, $foodType){
        $this->storedItem = [
            'foodType' => $foodType,
            'item' => $item,
            'qty' => 0,
            'oneItemTotalPrice' => 0
        ]; 

        // Ez a sor biztosítja, hogy az ITEMS Array mindig növekedjen
        $this->arrayKey = $this->items == null ? 0 : count($this->items);

            // If ingreds !NULL
            if ($item['plusIngreds']) {
                // Ha van plussz feltét hozzáfűzöm a meglévő ARRAY-hez
                $this->storedItem['oneItemTotalPrice'] += $item['plusIngreds']['totalIngredPrice'];
            }else{
                // Nincs Plussz feltét
                // If items !NULL
                if ($this->items) {
                    if ($this->elementExistsInArray($this->items, $id, $foodType)) {
                       
                        $keresettArrayIndex = $this->getItemsArrayKey($this->items, $id, $foodType);
                        $this->arrayKey = $keresettArrayIndex;
                        $this->storedItem['qty'] = $this->items[$keresettArrayIndex]['qty'];
                    }                    
                }
            }
            

        $this->storedItem['qty']++;
        $this->storedItem['oneItemTotalPrice'] += $item['price'] * $this->storedItem['qty'];
        $this->items[$this->arrayKey] = $this->storedItem;
        $this->totalQty++;
        foreach ($this->items as $item) {
            $this->totalPrice += $item['oneItemTotalPrice'];
        }
    }

    public function removeFromCart($foodId, $selectedItemIndex){
        if (in_array($foodId,$this->items[$selectedItemIndex]['item'])) {
            // return true;
            $this->totalPrice -= $this->items[$selectedItemIndex]['oneItemTotalPrice'];
            $this->totalQty -= $this->items[$selectedItemIndex]['qty'];
            array_splice($this->items, $selectedItemIndex, 1);
        }
    }

    // ============================================================================
    //                              PRIVATE FUNCTIONS
    // ============================================================================

    private function elementExistsInArray($array, $id, $foodType){
        foreach ($array as $value) {
            if (in_array($id, $value['item']) && $value['item']['plusIngreds'] == null && $value['foodType'] == $foodType) {
                return true;
            }
        }
        return false;
    }
    
    // Visszaküldi azt az ITEMS Key-t amely elemben megtalálható az adott $id
    private function getItemsArrayKey($array, $id, $foodType){
        foreach ($array as $key => $value) {
            if (in_array($id, $value['item']) && $value['item']['plusIngreds'] == null && $value['foodType'] == $foodType) {
                return $key;
            }
        }
    }
}