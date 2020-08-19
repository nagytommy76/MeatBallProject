<?php

namespace App\Http\Controllers\AdminsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Exception;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

use App\Model\Foods\Pizzas;
use App\Model\Foods\PivotPI;
use App\Model\Foods\PizzaIngredients;
use App\Model\Foods\PizzaImages;
use App\Model\Foods\PizzaPrice;
use App\Model\Foods\PizzaIngredPrices;

class AdminPizzaController extends AdminBaseFoodController
{
    public function index(){
        $allPizza = Pizzas::all();
        $ingredients = PizzaIngredients::orderBy('ingredient', 'asc')->get();
        
        return view('admin.pizza.pizza')->with([
            'allPizza' => $allPizza,
            'ingredients' => $ingredients,
       ]);
    }

    public function foodInput(Request $request){ 
        $validator = Validator::make($request->all(), [
            'name' => ['required','unique:pizzas,name'],
            'image' => ['image','required','max:1999'],
            'price' => ['required']
        ]);

        if ($validator->fails()) {
            return redirect('admin/pizza')->withErrors($validator)->withInput($request->all());
        }
        try {
            $pizza = new Pizzas;
            $pizza->name = $request->name;
            
            $imageId = $pizza->images()->create([
                'image_path' => $request->file('image')->store('pizza')
            ]);

            $priceId = $pizza->prices()->create([
                'price' => $request->price
            ]);
            $pizza->image_id = $imageId->id;
            $pizza->price_id = $priceId->id;
            $pizza->save();
            $pizza->ingredients()->attach($request->ingredType, [
                'pizza_id' => $pizza->id
            ]);

            return redirect('admin/pizza')->withErrors([
                'inputSuccess' => "A(z) $pizza->name bevitele sikeres volt!"
            ]);

        } catch (Exception $ex) {
            return redirect('admin/pizza')->withErrors([
                'inputFail' => "A(z) $pizza->name bevitele sikertelen volt Hiba: ".$ex->getMessage()
            ]);
        }
    }


    public function storePizzaIngredients(Request $request){
        $validator = Validator::make($request->all(),[
            'ingredient' => ['required', 'unique:pizza_ingredients'],
            'ingred_price' => ['required']
        ]);

        if ($validator->fails()) {
            return redirect('admin/pasta')->withErrors($validator)->withInput($request->all());
        }

        try {
            $ingredPrice = new PizzaIngredPrices;

            $ingredPrice->price = $request->ingred_price;
            
            $ingredId = $ingredPrice->ingredients()->create([
                'ingredient' => $request->ingredient
            ]);
            $ingredPrice->ingredient_id = $ingredId->id;
            $ingredPrice->save();

            return redirect('admin/pizza')->withErrors([
                'ingredInputSuccess' => "A pizza feltét bevitele sikeres volt!"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/pizza')->withErrors([
                'ingredInputFail' => $ex->getMessage()
            ]);
        }        
    }

    public function deletePizza(Request $request){
        try {
            $pizzaName = $this->destroyFood($request, Pizzas::class);
            return redirect('admin/pizza')->withErrors([
                'deleteSuccess' => "A $pizzaName pizza törlése sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/pizza')->withErrors([
                'deleteFail' => $ex->getMessage()
            ]);
        }  
    }

    public function deleteIngred(Request $request){
        try {
            PizzaIngredients::find($request->ingred)->delete();
            return redirect('admin/pizza')->withErrors([
                'deleteIngredSuccess' => "A törlés sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/pizza')->withErrors([
                'deleteIngredFail' => $ex->getMessage()
            ]);
        }
        
    }

    public function showModifyPizza(Request $request){
        $pizza = Pizzas::find($request->pizzaModify);

        $checkedIngreds = [];
        foreach ($pizza->ingredients as $key => $value) {
            array_push($checkedIngreds, $value->id);
        }

        return view('admin.pizza.modify-pizza')->with([
            'pizzaId' => $pizza->id,
            'pizzaName' => $pizza->name,
            'pizzaImage' => $pizza->images,
            'pizzaIngreds' => $checkedIngreds,
            'pizzaPrice' => $pizza->prices,
            'allIngred' => PizzaIngredients::orderBy('ingredient', 'asc')->get(),
        ]);
    }

    public function modifyPizza($id, Request $request){
        try {
            $pizza = Pizzas::find($id);
            $pizza->name = $request->name;

            $pizza->ingredients()->sync($request->ingredType);

            if ($request->hasFile('image')) {
                $this->updateFoodImage($pizza, $request, PizzaImages::class, 'pizza');
            }

            $pizza->prices()->update([
                'price' => $request->price
            ]);
            $pizza->save();

            return redirect('admin/pizza')->withErrors([
                'modifySuccess' => "A(z) $pizza->name módosítása sikeres volt!"
            ]);

        }catch(Exception $ex) {
            return redirect('admin/pizza')->withErrors([
                'modifyFail' => $ex->getMessage()
            ]);
        }
    }
}
