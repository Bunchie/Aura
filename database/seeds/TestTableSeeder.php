<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class TestTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tests')->insert([
            [
                'name' => "For programmers",
                'items' => '{"0": {"id": 0, "answers": {"answerType": "RADIO", "answerItems": [{"id": 0, "text": "PHP"}, {"id": 1, "text": "JAVA"}, {"id": 2, "text": "JS"}, {"id": 3, "text": "Haskell"}, {"id": 4, "text": "C/C++"}, {"id": 5, "text": "C#"}, {"id": 6, "text": "Prolog"}, {"id": 7, "text": "Pascal"}], "correctAnswer": "2", "answerQuantityItems": 8}, "question": "What is the best programing language?"}, "1": {"id": 1, "answers": {"answerType": "CHECKBOX", "answerItems": [{"id": 0, "text": "read the fucking manual", "checked": false, "correct": true}, {"id": 1, "text": "read the flaming manual", "checked": false, "correct": true}, {"id": 2, "text": "read the fine manual", "checked": false, "correct": true}, {"id": 3, "text": "read the friendly manual", "checked": false, "correct": true}, {"id": 4, "text": "read the frickin\' manual", "checked": false, "correct": true}, {"id": 5, "text": "read the father manual", "checked": false, "correct": false}, {"id": 6, "text": "read the Fedor manual", "checked": false, "correct": false}], "answerQuantityItems": 7}, "question": "What is RTFM?"}, "2": {"id": 2, "answers": {"answerType": "TEXT", "correctAnswer": "24"}, "question": "console.log(24.65^0)  = ?"}}',
                'created_at' => Carbon::now()
            ]
        ]);
    }
}
