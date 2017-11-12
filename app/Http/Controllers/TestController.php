<?php

namespace App\Http\Controllers;

use App\Category;
use App\TestCategory;
use Illuminate\Http\Request;
use App\Test;
use Validator;

class TestController extends Controller
{

    /**
     * @param $array
     * @param $key
     * @return array
     */
    function unique_multidim_array($array, $key)
    {
        $temp_array = array();
        $i = 0;
        $key_array = array();

        foreach ($array as $val) {
            if (!in_array($val[$key], $key_array)) {
                $key_array[$i] = $val[$key];
                $temp_array[$i] = $val;
            }
            $i++;
        }
        return $temp_array;
    }

    /**
     * @param Request $request
     * @param Category $category
     * @param $categories
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request, Category $category, $categories)
    {
        if ($request->ajax()) {

            $tests = array();

            try {

                if ((boolean)$categories) {
                    $categoriesArray = $category->with('testCategories')
                        ->whereIn('id', explode(",", $categories))->get()->toArray();

                    foreach ($categoriesArray as $category) {
                        if (!empty($category['test_categories'])) {
                            foreach ($category['test_categories'] as $test) {
                                array_push($tests, $test);
                            }
                        }
                    }

                    $resultTests = $this->unique_multidim_array($tests, 'id');

                } else {
                    $resultTests = Test::all();
                }

                return response()->json($resultTests, 200);

            } catch (Exception $e) {

                return response()->json(['error' => $e], 501);

            }

        } else {

            return response()->json(["error" => "Bad Request"], 400);

        }
    }

    /**
     * @param Request $request
     * @param Test $test
     * @param TestCategory $testCategory
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, Test $test, TestCategory $testCategory)
    {
        if ($request->ajax()) {

            $validator = Validator::make($request->all(), [
                'name' => 'required|unique:tests|max:255',
                'categories' => 'required',
                'items' => 'required',
            ]);

            if ($validator->passes()) {

                try {

                    $test->fill($request->all())->save();
                    $categories = explode(",", $request->input('categories'));

                    $data = array_map(function ($v) use ($test) {
                        return ["category" => $v, "test" => $test->id];
                    }, $categories);

                    $testCategory->insert($data);

                    return response()->json(['success' => 'Created new test.', 201]);

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
