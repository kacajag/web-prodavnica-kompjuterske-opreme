<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = Category::all();

        $products = [
            [
                'name' => 'Gaming laptop',
                'description' => 'Powerful gaming laptop with high-end graphics card',
                'price' => 2000,
                'category_id' => $categories->get(0)->id,
                'image'=>'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_fFdkfGgxeORGlukg19lnaBimc14KV70AGf96JcyNF8TDevekvLbCXvExX6J8cHl_2s&usqp=CAU',
            ],
            [
                'name' => 'Mechanical keyboard',
                'description' => 'Mechanical keyboard with RGB lighting and Cherry MX switches',
                'price' => 150,
                'category_id' => $categories->get(1)->id,
                'image'=>'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhVUn9oHVa5e30Z9ODEpSk8baC6jle8bm8mlccQ3pe8DKuBiYjlYE_ipIf_SgXMaWNN40&usqp=CAU',
            ],
            [
                'name' => 'Gaming mouse',
                'description' => 'High-performance gaming mouse with customizable buttons',
                'price' => 80,
                'category_id' => $categories->get(2)->id,
                'image'=>'https://www.popsci.com/uploads/2020/12/08/IAA4EDIINRCGNHCCUQU2U634GQ.jpg?auto=webp',
            ],
            [
                'name' => 'Wireless headphones',
                'description' => 'Wireless headphones with noise-cancelling and long battery life',
                'price' => 250,
                'category_id' => $categories->get(3)->id,
                'image'=>'https://www.computerland.rs/login/media/images/products/044202_slika.jpg',
            ],
            [
                'name' => 'Gaming monitor',
                'description' => '27-inch gaming monitor with 144Hz refresh rate and G-Sync',
                'price' => 500,
                'category_id' => $categories->get(4)->id,
                'image'=>'https://www.computerland.rs/login/media/images/products/042957_slika2.jpg',
            ]
        ];

        Product::insert($products);
    }
}
