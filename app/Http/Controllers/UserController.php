<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use Crypt;

class UserController extends Controller
{
    /**
     * @param Request $request
     * @param User $user
     * @param $userId
     * @return \Illuminate\Http\JsonResponse
     */
    public function results(Request $request, User $user, $userId)
    {
        if ($request->ajax()) {

            try {

                return response()->json($user->with('results.tests')->find(Crypt::decrypt($userId)), 200);

            } catch (Exception $e) {

                return response()->json(['error' => $e], 501);
            }

        } else {

            return response()->json(["error" => "Bad Request"], 400);
        }
    }

}
