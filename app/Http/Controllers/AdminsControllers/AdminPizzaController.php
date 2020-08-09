<?php

namespace App\Http\Controllers\AdminsControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use Illuminate\Support\Facades\Validator;

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
            return redirect('admin/')->withErrors($validator)->withInput($request->all());
        }
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
        
        return redirect('admin')->withErrors($validator)->withInput();
    }


    public function storePizzaIngredients(Request $request){
        $validator = Validator::make($request->all(),[
            'ingredient' => ['required', 'unique:pizza_ingredients'],
            'ingred_price' => ['required']
        ]);

        if ($validator->fails()) {
            return redirect('admin/')->withErrors($validator)->withInput($request->all());
        }

        $ing = new PizzaIngredients;
        $ing->ingredient = $request->ingredient;
        $ing->save();
        // die(var_dump($ing));
        $ingredPrice = new PizzaIngredPrices;
        $ingredPrice->ingredient_id = $ing->id;
        $ingredPrice->price = $request->ingred_price;
        $ingredPrice->save();

        return redirect()->route('admin.dashboard');
    }

    public function deletePizza(Request $request){
        $pizzaToDelete = Pizzas::find($request->pizzaDelete);
        $imageToDelete = PizzaImages::find($pizzaToDelete->image_id);
        $pizzaPriceToDelete = PizzaPrice::find($pizzaToDelete->price_id);
        $pivotToDelete = PivotPI::where('pizza_id', '=', $pizzaToDelete->id)->get();

        foreach ($pivotToDelete as $pivot) {
            $pivot->delete();
        }
        $pizzaToDelete->delete();
        $pizzaPriceToDelete->delete();
        $imageToDelete->delete();
        

        return redirect()->back()->with(['success' => "A $pizzaToDelete->name pizza törlése sikeres volt"]);

        // var_dump($pivotToDelete);
    }

    public function showModifyPizza(Request $request){
        $pizza = Pizzas::find($request->pizzaModify);
        // pizza képek, ha módosítom, törlöm az előzőt és az újat brakom

        $data = [
            'pizzaName' => $pizza->name,
            'pizzaImage' => $pizza->images,
            'pizzaIngreds' => $pizza->ingredients,
            'pizzaPrice' => $pizza->prices,
            'allIngred' => PizzaIngredients::orderBy('ingredient', 'asc')->get(),
        ];
        return view('admin.pizza.modify-pizza')->with(
            'data', $data
        );
    }

    public function modifyPizza(){

    }


}
