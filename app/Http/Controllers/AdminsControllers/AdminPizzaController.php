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
    public function __construct(){
        $this->middleware('auth:admin');
    }

    public function index(){
        $allPizza = Pizzas::all();
        // All Ingredients
        $ingredients = PizzaIngredients::orderBy('ingredient', 'asc')->get();
        // die(var_dump($ingredients[0]->ingredPrices));
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
            $pizzaToDelete = Pizzas::find($request->pizzaDelete);
            Storage::delete($pizzaToDelete->images->image_path);
            $pizzaToDelete->images()->delete();
            $pizzaToDelete->prices()->delete();
            $pizzaToDelete->delete();

            return redirect('admin/pizza')->withErrors([
                'deleteSuccess' => "A $pizzaToDelete->name pizza törlése sikeres volt"
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
            // $this->updateFood(Pizzas::class);
            $pizza = Pizzas::find($id);

            $pizza->name = $request->Pname;
            $pizza->ingredients()->detach();
            foreach ($request->ingredType as $value) {
                $pizza->ingredients()->attach($value);
            }

            if ($request->hasFile('image')) {
                Storage::delete(PizzaImages::find($pizza->image_id)->image_path);

                $pizza->images()->update([
                    'image_path' => $request->file('image')->store('pizza')
                ]);
            }

            
            $pizza->save();
            $price = PizzaPrice::find($pizza->price_id);
            $price->price = $request->Pprice;
            $price->save();

            return redirect('admin/pizza')->withErrors([
                'modifySuccess' => "A(z) $pizza->name módosítása sikeres volt!"
            ]);;

        }catch(Exception $ex) {
            return redirect('admin/pizza')->withErrors([
                'modifyFail' => $ex->getMessage()
            ]);;
        }
    }
}
