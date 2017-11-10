<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Test;


class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Test::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $test = new Test([
            'name' => $request->input('name'),
            'categories' => $request->input('categories'),
            'items' => $request->input('items'),
        ]);

        $test->save();

        return response(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Test::find($id), 200);
    }
}
