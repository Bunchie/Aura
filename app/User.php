<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'password'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function userType()
    {
        return $this->belongsToMany(UserType::class, 'users', 'user_type', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function results()
    {
        return $this->hasMany(Result::class, 'user', 'id');
    }

    /**
     * @param \Illuminate\Database\Eloquent\Model|null String $roleName
     * @return bool
     */
    public function is($roleName)
    {
        foreach ($this->userType()->get() as $role) {
            if ($role->name == $roleName) {
                return true;
            }
        }

        return false;
    }

}
