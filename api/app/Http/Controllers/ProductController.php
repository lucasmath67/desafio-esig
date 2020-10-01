<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    private $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }
    public function index()
    {

        $products = $this->product->get();
        return response()->json($products);
    }
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'value' => 'required|numeric',
            'units' => 'required|integer',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        } else {
            $product = $this->product->create($request->all());

            if ($product) {
                return response()->json(['message' => 'Produto Criado com sucesso', 'produto' => $product]);
            }
        }
    }
    public function show(Product $product)
    {
        return response()->json(['Produto' => $product]);
    }
    public function update(Product $product, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'max:255',
            'value' => 'numeric',
            'units' => 'integer',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        } else {
            $update = $product->update($request->all());
            if ($update) {
                return response()->json(['Message' => 'Produto Atualizado Com Sucesso', 'produto' => $product]);
            }
        }
    }

    public function destroy(Product $product)
    {
        $delete = $product->delete();
        if ($delete) {
            return response()->json(["message" => "Produto Deletado Com Sucesso"]);
        }
    }
}
