<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Result;


class ResultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $test = new Result([
            'test' => $request->input('test'),
            'result' => $request->input('result'),
            'user' => '1',
        ]);

        $test->save();

        return response(201);
    }


}
