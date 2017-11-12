<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    protected $fillable = ['name', 'items'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function testCategories()
    {
        return $this->hasManyThrough(
            Category::class,
            TestCategory::class,
            'test',
            'id',
            'id',
            'category'
        );
    }

}
