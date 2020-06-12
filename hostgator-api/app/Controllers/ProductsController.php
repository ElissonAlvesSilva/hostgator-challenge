<?php

namespace App\Controllers;

use App\Models\Products;
use App\Models\Cycles;
use Illuminate\Support\Facades\DB;
use Psr\Http\Message\{
    ServerRequestInterface as Request,
    ResponseInterface as Response
};

class ProductsController extends Controller
{
    /**
     * @param Request $request
     * @param Response $response
     *
     * @return mixed
     */
    public function products(Request $request, Response $response)
    {

        $products =   Products::all();
        $test = $products->load('cycles');
        $data = array('shared' => $products);
        $payload = json_encode($data);

        $response->getBody()->write($payload);
        return $response
                ->withHeader('Content-Type', 'application/json')
                ->withStatus(201);
    }
}