<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $fillable = ['test', 'result', 'user'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function tests()
    {
        return $this->belongsTo(Test::class, 'test', 'id');
    }

}
