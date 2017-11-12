<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function testCategories()
    {
        return $this->hasManyThrough(
            Test::class,
            TestCategory::class,
            'category',
            'id',
            'id',
            'test'
        );
    }

}
