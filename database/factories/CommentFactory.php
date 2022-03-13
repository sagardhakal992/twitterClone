<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
           "post_id"=>rand(1,200),
            "user_id"=>rand(1,100),
            "comment"=>$this->faker->text(70)
        ];
    }
}
