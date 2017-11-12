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

                Result::updateOrCreate(
                    ['test' => $request->input('test'), 'user' => intval($user_id)],
                    ['result' => $request->input('result')]
                );

                return response(201);

            } catch (Exception $e) {

                return response()->json(['error' => $e], 501);

            }

        } else {

            return response()->json(["error" => "Bad Request"], 400);

        }
    }

}
