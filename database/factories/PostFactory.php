<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "caption"=>$this->faker->text(rand(100,500)),
            "image_url"=>$this->faker->imageUrl(),
            "user_id"=>rand(1,100)

        ];
    }
}
