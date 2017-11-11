<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Test;
use Validator;

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
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:tests|max:255',
            'categories' => 'required',
            'items' => 'required',
        ]);

        if ($validator->passes()) {

            try {

                $test = new Test([
                    'name' => $request->input('name'),
                    'categories' => $request->input('categories'),
                    'items' => $request->input('items'),
                ]);

                $test->save();

                return response()->json(['success' => 'Added new test.', 201]);

            } catch (Exception $e) {

                return response()->json(['error' => $e], 501);

            }

        }

        return response()->json(['error' => $validator->errors()->all()], 422);
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
