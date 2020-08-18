<?php

namespace App\Http\Controllers\AdminsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

use App\Model\Foods\Pizzas;
use App\Model\Foods\PivotPI;
use App\Model\Foods\PizzaIngredients;
use App\Model\Foods\PizzaImages;
use App\Model\Foods\PizzaPrice;
use App\Model\Foods\PizzaIngredPrices;

class AdminPizzaController extends Controller
{
    public function __construct(){
        $this->middleware('auth:admin');
    }

    public function index(){
        $allPizza = Pizzas::all();
        // All Ingredients
        $ingredients = PizzaIngredients::orderBy('ingredient', 'asc')->get();
        return view('admin.pizza.pizza')->with([
            'allPizza' => $allPizza,
            'ingredients' => $ingredients,
       ]);
    }

    public function foodInput(Request $request){ 
        $validator = Validator::make($request->all(), [
            'Pname' => ['required','unique:pizzas,name'],
            'Pimage' => ['image','required','max:1999'],
            'Pprice' => ['required']
        ]);

        if ($validator->fails()) {
            return redirect('admin/pizza')->withErrors($validator)->withInput($request->all());
        }
        try {
            //Pizza Price
            $pPrice = new PizzaPrice;
            $pPrice->price = $request->Pprice;
            $pPrice->save();
            // Save the img
            $path = $request->file('Pimage')->store('pizza');
            
            // Pizza Images
            $pImage = new PizzaImages;
            $pImage->image_path = $path;
            $pImage->save();

            // Insert Pizzas
            $pizza = new Pizzas;
            $pizza->name = $request->Pname;
            $pizza->image_id = $pImage->id;
            $pizza->price_id = $pPrice->id;
            $pizza->save();

            // Save ingredients
            foreach ($request->ingredType as $ingred) {
                $ingreds = new PivotPI;
                $ingreds->ingredient_id = $ingred;
                $ingreds->pizza_id = $pizza->id;
                $ingreds->save();
            }         
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
            $ing = new PizzaIngredients;
            $ing->ingredient = $request->ingredient;
            $ing->save();
            // die(var_dump($ing));
            $ingredPrice = new PizzaIngredPrices;
            $ingredPrice->ingredient_id = $ing->id;
            $ingredPrice->price = $request->ingred_price;
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
            $imageToDelete = PizzaImages::find($pizzaToDelete->image_id);
            $pizzaPriceToDelete = PizzaPrice::find($pizzaToDelete->price_id);
            $pivotToDelete = PivotPI::where('pizza_id', '=', $pizzaToDelete->id)->get();

            foreach ($pivotToDelete as $pivot) {
                $pivot->delete();
            }
            $pizzaToDelete->delete();
            $pizzaPriceToDelete->delete();
            Storage::delete($imageToDelete->image_path);
            $imageToDelete->delete();

            return redirect('admin/pizza')->withErrors([
                'deleteSuccess' => "A $pizzaToDelete->name pizza törlése sikeres volt"
            ]);
        } catch (Exception $ex) {
            return redirect('admin/pizza')->withErrors([
                'deleteFail' => $ex->getMessage()
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
