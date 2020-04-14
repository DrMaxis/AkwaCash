<?php

use App\Models\Auth\ProductCategory;
use Illuminate\Database\Seeder;

/**
 * Class ProductCateogyTableSeeder.
 */
class ProductCategoryTableSeeder extends Seeder
{
    use DisableForeignKeys;

    /**
     * Run the database seed.
     */
    public function run()
    {
        $this->disableForeignKeys();

         ProductCategory::create([
            'name' => 'Agriculture',
            'slug' => slugify('Agriculture'),
        ]);
         ProductCategory::create([
            'name' => 'Food & Beverage',
            'slug' => slugify('Food & Beverage'),
        ]);
        ProductCategory::create([
            'name' => 'Apparel',
            'slug' => slugify('Apparel'),
        ]);
        ProductCategory::create([
            'name' => 'Textile & Leather Product',
            'slug' => slugify('Textile & Leather Product'),
        ]);
        ProductCategory::create([
            'name' => 'Fashion Accessories',
            'slug' => slugify('Fashion Accessories'),
        ]);
        ProductCategory::create([
            'name' => 'Timepieces, Jewelry, Eyewear',
            'slug' => slugify('Timepieces, Jewelry, Eyewear'),
        ]);
        ProductCategory::create([
            'name' => 'Vehicles & Accessories',
            'slug' => slugify('Vehicles & Accessories'),
        ]);
        ProductCategory::create([
            'name' => 'Luggage, Bags & Cases',
            'slug' => slugify('Luggage, Bags & Cases'),
        ]);
        ProductCategory::create([
            'name' => 'Shoes & Accessories',
            'slug' => slugify('Shoes & Accessories'),
        ]);
        ProductCategory::create([
            'name' => 'Consumer Electronic',
            'slug' => slugify('Consumer Electronic'),
        ]);
        ProductCategory::create([
            'name' => 'Home Appliance ',
            'slug' => slugify('Home Appliance '),
        ]);
        ProductCategory::create([
            'name' => 'Security & Protection',
            'slug' => slugify('Security & Protection'),
        ]);
        ProductCategory::create([
            'name' => 'Electrical Equipment & Supplies',
            'slug' => slugify('Electrical Equipment & Supplies'),
        ]);
        ProductCategory::create([
            'name' => 'Sports & Entertainment',
            'slug' => slugify('Sports & Entertainment'),
        ]);
        ProductCategory::create([
            'name' => 'Gifts & Crafts ',
            'slug' => slugify('Gifts & Crafts'),
        ]);
        ProductCategory::create([
            'name' => 'Toys & Hobbies ',
            'slug' => slugify('Toys & Hobbies'),
        ]);
        ProductCategory::create([
            'name' => 'Health & Medical',
            'slug' => slugify('Health & Medical'),
        ]);
        ProductCategory::create([
            'name' => 'Beauty & Personal Care',
            'slug' => slugify('Beauty & Personal Care'),
        ]);
        ProductCategory::create([
            'name' => 'Construction & Real Estate',
            'slug' => slugify('Construction & Real Estate'),
        ]);
        ProductCategory::create([
            'name' => 'Home & Garden',
            'slug' => slugify('Home & Garden'),
        ]);
        ProductCategory::create([
            'name' => 'Lights & Lighting',
            'slug' => slugify('Lights & Lighting'),
        ]);
        ProductCategory::create([
            'name' => 'Furniture',
            'slug' => slugify('Furniture'),
        ]);

        ProductCategory::create([
            'name' => 'Machinery',
            'slug' => slugify('Machinery'),
        ]);
        ProductCategory::create([
            'name' => 'Fabrication Services',
            'slug' => slugify('Fabrication Services'),
        ]);
        ProductCategory::create([
            'name' => 'Tools & Hardware ',
            'slug' => slugify('Tools & Hardware'),
        ]);
        ProductCategory::create([
            'name' => 'Minerals & Metallurgy',
            'slug' => slugify('Minerals & Metallurgy'),
        ]);
        ProductCategory::create([
            'name' => 'Chemicals',
            'slug' => slugify('Chemicals'),
        ]);
        ProductCategory::create([
            'name' => 'Rubber & Plastics',
            'slug' => slugify('Rubber & Plastics'),
        ]);
        ProductCategory::create([
            'name' => 'Energy',
            'slug' => slugify('Energy'),
        ]);
        ProductCategory::create([
            'name' => 'Packaging & Printing',
            'slug' => slugify('Packaging & Printing'),
        ]);
        ProductCategory::create([
            'name' => 'Office & School Supplies',
            'slug' => slugify('Office & School Supplies'),
        ]);
        ProductCategory::create([
            'name' => 'Service Equipment',
            'slug' => slugify('Service Equipment'),
        ]);







        $this->enableForeignKeys();
    }
}
