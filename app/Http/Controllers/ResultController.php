<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Result;
use Crypt;

class ResultController extends Controller
{

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Routing\ResponseFactory|
     * \Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function store(Request $request)
    {
        $user_id = Crypt::decrypt($request->input('user_id'));

        Result::updateOrCreate(
            ['test' => $request->input('test'), 'user' => intval($user_id)],
            ['result' => $request->input('result')]
        );

        return response(201);
    }

}
