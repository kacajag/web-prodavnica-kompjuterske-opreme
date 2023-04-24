<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            ['name' => 'Desktop računari'],
            ['name' => 'Laptop računari'],
            ['name' => 'Monitori'],
            ['name' => 'Periferija'],
            ['name' => 'Mrežna oprema'],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
