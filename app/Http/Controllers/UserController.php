<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use Crypt;

class UserController extends Controller
{

    /**
     * @param User $user
     * @param $userId
     * @return \Illuminate\Http\JsonResponse
     */
    public function results(User $user, $userId)
    {
        $result = array();

        $resultsCollection = $user->with('results.tests')->find(Crypt::decrypt($userId));

        foreach ($resultsCollection->toArray() as $result) {

            if (!empty($result['results'])) {

                foreach ($result['results'] as $item) {
                    array_push($result, $item);
                }

            }

        }

        return response()->json($result, 200);
    }

}
