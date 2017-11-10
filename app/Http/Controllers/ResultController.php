<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Result;
use Crypt;

class ResultController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $user_id = Crypt::decrypt($request->input('user_id'));

        $test = new Result([
            'test' => $request->input('test'),
            'result' => $request->input('result'),
            'user' => intval($user_id),
        ]);

        $test->save();

        return response(201);
    }

}
