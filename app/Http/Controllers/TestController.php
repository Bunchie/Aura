<?php

namespace App\Http\Controllers;

use App\TestCategory;
use Illuminate\Http\Request;
use App\Test;
use Validator;

class TestController extends Controller
{

    /**
     * @param Test $test
     * @param $categories
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Test $test, $categories)
    {
        if ((boolean)$categories) {

            $resultTests = $test->whereHas(
                'testCategories', function ($query) use ($categories) {
                $query->whereIn('category', explode(",", $categories));
            }
            )->get()->toArray();

        } else {

            $resultTests = $test->all();

        }

        return response()->json($resultTests, 200);
    }

    /**
     * @param Request $request
     * @param Test $test
     * @param TestCategory $testCategory
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, Test $test, TestCategory $testCategory)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:tests|max:255',
            'categories' => 'required',
            'items' => 'required',
        ]);

        if ($validator->passes()) {

            $test->fill($request->all())->save();
            $categories = explode(",", $request->input('categories'));

            $data = array_map(function ($category) use ($test) {
                return ["category" => $category, "test" => $test->id];
            }, $categories);

            $testCategory->insert($data);

            return response()->json(['success' => 'Created new test.', 201]);

        }

        return response()->json(['error' => $validator->errors()->all()], 422);
    }

    /**
     * @param Test $test
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Test $test, $id)
    {
        return response()->json($test->find($id), 200);
    }
}
