<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {

            try {

                return response()->json(Category::all(), 200);

            } catch (Exception $e) {

                return response()->json(['error' => $e], 501);

            }

        } else {

            return response()->json(["error" => "Bad Request"], 400);

        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->ajax()) {

            try {

                $test = new Category([
                    'name' => $request->input('name'),
                ]);

                $test->save();

                return response(201);

            } catch (Exception $e) {

                return response()->json(['error' => $e], 501);

            }

        } else {

            return response()->json(["error" => "Bad Request"], 400);

        }
    }

}
