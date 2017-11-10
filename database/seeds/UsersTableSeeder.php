<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            ['name' => "Valera",
                'user_type' => 1,
                'email' => "valera228@gmail.com",
                'password' => bcrypt('777'),
                'created_at' => Carbon::now()
            ],
            ['name' => "Sveta",
                'user_type' => 2,
                'email' => "sveta@gmail.com",
                'password' => bcrypt('111'),
                'created_at' => Carbon::now()
            ],
        ]);
    }
}
