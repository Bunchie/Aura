<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Test;
use Validator;

class TestController extends Controller
{

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {

            try {

                return response()->json(Test::all(), 200);

            } catch (Exception $e) {

                return response()->json(['error' => $e], 501);

            }

        } else {

            return response()->json(["error" => "Bad Request"], 400);

        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        if ($request->ajax()) {

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

        } else {

            return response()->json(["error" => "Bad Request"], 400);

        }
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request, $id)
    {
        if ($request->ajax()) {

            try {

                return response()->json(Test::find($id), 200);

            } catch (Exception $e) {

                return response()->json(['error' => $e], 501);

            }

        } else {

            return response()->json(["error" => "Bad Request"], 400);

        }
    }
}
