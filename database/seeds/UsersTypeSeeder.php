<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UsersTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_types')->insert([
            ['id' => 1, 'name' => "Admin", 'created_at' => Carbon::now()],
            ['id' => 2, 'name' => "Customer", 'created_at' => Carbon::now()],
        ]);
    }
}
