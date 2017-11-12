<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Result;
use Crypt;

class ResultController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function store(Request $request)
    {
        if ($request->ajax()) {

            try {

                $user_id = Crypt::decrypt($request->input('user_id'));

                $test = new Result([
                    'test' => $request->input('test'),
                    'result' => $request->input('result'),
                    'user' => intval($user_id),
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
