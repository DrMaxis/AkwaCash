<?php

use App\Models\Auth\ProductSubcategory;
use Illuminate\Database\Seeder;

/**
 * Class ProductSubCateogyTableSeeder.
 */
class ProductSubCategoryTableSeeder extends Seeder
{
    use DisableForeignKeys;

    /**
     * Run the database seed.
     */
    public function run()
    {
        $this->disableForeignKeys();

        /* 

            Agriculture


*/

        ProductSubcategory::create([
            'name' => 'Agricultural Waste',
            'slug' => slugify('Agricultural Waste'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Beans',
            'slug' => slugify('Beans'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Coffee Beans',
            'slug' => slugify('Coffee Beans'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Feed',
            'slug' => slugify('Feed'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Fruit',
            'slug' => slugify('Fruit'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Herbal Cigars & Cigarettes',
            'slug' => slugify('Herbal Cigars & Cigarettes'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Nuts& Kernels',
            'slug' => slugify('Nuts& Kernels'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Other Agriculture Products',
            'slug' => slugify('Other Agriculture Products'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Plant Seeds & Bulbs',
            'slug' => slugify('Plant Seeds & Bulbs'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Vanilla Beans',
            'slug' => slugify('Vanilla Beans'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Animal Products',
            'slug' => slugify('Animal Products'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Cocoa Beans',
            'slug' => slugify('Cocoa Beans'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Farm Machinery & Equipment',
            'slug' => slugify('Farm Machinery & Equipment'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Grain',
            'slug' => slugify('Grain'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Fresh Seafood',
            'slug' => slugify('Fresh Seafood'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Mushrooms & Truffles',
            'slug' => slugify('Mushrooms & Truffles'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Ornamental Plants',
            'slug' => slugify('Ornamental Plants'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Plant & Animal Oil',
            'slug' => slugify('Plant & Animal Oil'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Timber Raw Materials',
            'slug' => slugify('Timber Raw Materials'),
            'category_id' => 1
        ]);
        ProductSubcategory::create([
            'name' => 'Vegetables',
            'slug' => slugify('Vegetables'),
            'category_id' => 1
        ]);


        /* Food & Beverage */
        ProductSubcategory::create([
            'name' => 'Alcoholic Beverage',
            'slug' => slugify('Alcoholic Beverage'),
            'category_id' => 2
        ]);
        ProductSubcategory::create([
            'name' => 'Baked Goods',
            'slug' => slugify('Baked Goods'),
            'category_id' => 2
        ]);
        ProductSubcategory::create([
            'name' => 'Canned Food',
            'slug' => slugify('Canned Food'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Confectionery',
            'slug' => slugify('Confectionery'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Drinking Water',
            'slug' => slugify('Drinking Water'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Food Ingredients',
            'slug' => slugify('Food Ingredients'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Grain Products',
            'slug' => slugify('Grain Products'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Instant Food',
            'slug' => slugify('Instant Food'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Other Food & Beverage',
            'slug' => slugify('Other Food & Beverage'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Seasonings & Condiments',
            'slug' => slugify('Seasonings & Condiments'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Soft Drinks',
            'slug' => slugify('Soft Drinks'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Vegetable Products',
            'slug' => slugify('Vegetable Products'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Baby Food',
            'slug' => slugify('Baby Food'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Bean Products',
            'slug' => slugify('Bean Products'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Coffee',
            'slug' => slugify('Coffee'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Dairy',
            'slug' => slugify('Dairy'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Egg & Egg Products',
            'slug' => slugify('Egg & Egg Products'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Fruit Products',
            'slug' => slugify('Fruit Products'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Honey Products',
            'slug' => slugify('Honey Products'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Meat & Poultry',
            'slug' => slugify('Meat & Poultry'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Seafood',
            'slug' => slugify('Seafood'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Snack Food',
            'slug' => slugify('Snack Food'),
            'category_id' => 2
        ]);

        ProductSubcategory::create([
            'name' => 'Tea',
            'slug' => slugify('Tea'),
            'category_id' => 2
        ]);



        /*Apparel*/


        ProductSubcategory::create([
            'name' => 'Apparel Design Services',
            'slug' => slugify('Apparel Design Services'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Apparel Stock',
            'slug' => slugify('Apparel Stock'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Costumes',
            'slug' => slugify('Costumes'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Garment Accessories',
            'slug' => slugify('Garment Accessories'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Infant & Toddlers Clothing',
            'slug' => slugify('Infant & Toddlers Clothing'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Maternity Clothing',
            'slug' => slugify('Maternity Clothing'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Sewing Supplies',
            'slug' => slugify('Sewing Supplies'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Stage & Dance Wear',
            'slug' => slugify('Stage & Dance Wear'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Uniforms',
            'slug' => slugify('Uniforms'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Wedding Apparel & Accessories',
            'slug' => slugify('Wedding Apparel & Accessories'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Boys Clothing',
            'slug' => slugify('Boys Clothing'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Ethnic Clothing',
            'slug' => slugify('Ethnic Clothing'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Girl Clothing',
            'slug' => slugify('Girl Clothing'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Mannequins',
            'slug' => slugify('Mannequins'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Sportswear',
            'slug' => slugify('Sportswear'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Tag Guns',
            'slug' => slugify('Tag Guns'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Used Clothes',
            'slug' => slugify('Used Clothes'),
            'category_id' => 3
        ]);
        ProductSubcategory::create([
            'name' => 'Women Clothing',
            'slug' => slugify('Women Clothing'),
            'category_id' => 3
        ]);


        /* Textile & Leather Product*/



        ProductSubcategory::create([
            'name' => 'Down & Feather',
            'slug' => slugify('Down & Feather'),
            'category_id' => 4
        ]);
        ProductSubcategory::create([
            'name' => 'Grey Fabric',
            'slug' => slugify('Grey Fabric'),
            'category_id' => 4
        ]);
        ProductSubcategory::create([
            'name' => 'Leather',
            'slug' => slugify('Leather'),
            'category_id' => 4
        ]);
        ProductSubcategory::create([
            'name' => 'Other Textiles & Leather Product',
            'slug' => slugify('Other Textiles & Leather Product'),
            'category_id' => 4
        ]);
        ProductSubcategory::create([
            'name' => 'Textile Processing',
            'slug' => slugify('Textile Processing'),
            'category_id' => 4
        ]);
        ProductSubcategory::create([
            'name' => 'Yarn',
            'slug' => slugify('Yarn'),
            'category_id' => 4
        ]);
        ProductSubcategory::create([
            'name' => ' 100% Polyester Fabric',
            'slug' => slugify(' 100% Polyester Fabric'),
            'category_id' => 4
        ]);
        ProductSubcategory::create([
            'name' => 'Towel',
            'slug' => slugify('Towel'),
            'category_id' => 4
        ]);
        ProductSubcategory::create([
            'name' => 'Genuine Leather',
            'slug' => slugify('Genuine Leather'),
            'category_id' => 4
        ]);


        ProductSubcategory::create([
            'name' => 'Fabric',
            'slug' => slugify('Fabric'),
            'category_id' => 4
        ]);

        ProductSubcategory::create([
            'name' => 'Home Textile',
            'slug' => slugify('Home Textile'),
            'category_id' => 4
        ]);

        ProductSubcategory::create([
            'name' => 'Leather Product',
            'slug' => slugify('Leather Product'),
            'category_id' => 4
        ]);
        ProductSubcategory::create([
            'name' => 'Textile Accessories',
            'slug' => slugify('Textile Accessories'),
            'category_id' => 4
        ]);

        ProductSubcategory::create([
            'name' => 'Thread',
            'slug' => slugify('Thread'),
            'category_id' => 4
        ]);

        ProductSubcategory::create([
            'name' => '100% Cotton Fabric',
            'slug' => slugify('100% Cotton Fabric'),
            'category_id' => 4
        ]);

        ProductSubcategory::create([
            'name' => 'Bedding Set',
            'slug' => slugify('Bedding Set'),
            'category_id' => 4
        ]);
        ProductSubcategory::create([
            'name' => 'Chair Cover',
            'slug' => slugify('Chair Cover'),
            'category_id' => 4
        ]);




        /* Fashion Accessories */

        ProductSubcategory::create([
            'name' => 'Belt Accessories',
            'slug' => slugify('Belt Accessories'),
            'category_id' => 5
        ]);

        ProductSubcategory::create([
            'name' => ' Fashion Accessories Design Services',
            'slug' => slugify(' Fashion Accessories Design Services'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Fashion Accessories Design Services',
            'slug' => slugify('Fashion Accessories Design Services'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Gloves & Mittens',
            'slug' => slugify('Gloves & Mittens'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Hats & Caps',
            'slug' => slugify('Hats & Caps'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Hair Accessories',
            'slug' => slugify('Hair Accessories'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Leather Gloves & Mittens',
            'slug' => slugify('Leather Gloves & Mittens'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Belt Buckles',
            'slug' => slugify('Belt Buckles'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Suspenders',
            'slug' => slugify('Suspenders'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Bells',
            'slug' => slugify('Bells'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Fashion Accessories Processing Services',
            'slug' => slugify('Fashion Accessories Processing Services'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Scarf, Hat & Glove Sets',
            'slug' => slugify('Scarf, Hat & Glove Sets'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Scarves & Shawls',
            'slug' => slugify('Scarves & Shawls'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Genuine Leather Belts',
            'slug' => slugify('Genuine Leather Belts'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Ties & Accessories',
            'slug' => slugify('Ties & Accessories'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'PU Belts',
            'slug' => slugify('PU Belts'),
            'category_id' => 5
        ]);
        ProductSubcategory::create([
            'name' => 'Metal Belts',
            'slug' => slugify('Metal Belts'),
            'category_id' => 5
        ]);

        /* Timepieces, Jewelry, Eyewear  */
        ProductSubcategory::create([
            'name' => 'Eyewear',
            'slug' => slugify('Eyewear'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Watches',
            'slug' => slugify('Watches'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Sunglasses',
            'slug' => slugify('Sunglasses'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Body Jewelry',
            'slug' => slugify('Body Jewelry'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Brooches',
            'slug' => slugify('Brooches'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Earrings',
            'slug' => slugify('Earrings'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Jewelry Sets',
            'slug' => slugify('Jewelry Sets'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Loose Beads',
            'slug' => slugify('Loose Beads'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Necklaces',
            'slug' => slugify('Necklaces'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Rings',
            'slug' => slugify('Rings'),
            'category_id' => 6
        ]);

        ProductSubcategory::create([
            'name' => 'Jewelry',
            'slug' => slugify('Jewelry'),
            'category_id' => 6
        ]);

        ProductSubcategory::create([
            'name' => 'Eyeglasses Frames',
            'slug' => slugify('Eyeglasses Frames'),
            'category_id' => 6
        ]);

        ProductSubcategory::create([
            'name' => 'Sports Eyewear',
            'slug' => slugify('Sports Eyewear'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Bracelets & Bangles',
            'slug' => slugify('Bracelets & Bangles'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Cuff Links & Tie Clips',
            'slug' => slugify('Cuff Links & Tie Clips'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Jewelry Boxes',
            'slug' => slugify('Jewelry Boxes'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Jewelry Tools & Equipment',
            'slug' => slugify('Jewelry Tools & Equipment'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Loose Gemstone',
            'slug' => slugify('Loose Gemstone'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Pendants & Charms',
            'slug' => slugify('Pendants & Charms'),
            'category_id' => 6
        ]);
        ProductSubcategory::create([
            'name' => 'Wristwatches',
            'slug' => slugify('Wristwatches'),
            'category_id' => 6
        ]);



        /* Vehicles & Accessories  */


        ProductSubcategory::create([
            'name' => 'Automobiles',
            'slug' => slugify('Automobiles'),
            'category_id' => 7
        ]);

        ProductSubcategory::create([
            'name' => 'Trucks',
            'slug' => slugify('Trucks'),
            'category_id' => 7
        ]);
        ProductSubcategory::create([
            'name' => 'Marine Parts & Accessories',
            'slug' => slugify('Marine Parts & Accessories'),
            'category_id' => 7
        ]);
        ProductSubcategory::create([
            'name' => 'Bus Parts & Accessories',
            'slug' => slugify('Bus Parts & Accessories'),
            'category_id' => 7
        ]);
        ProductSubcategory::create([
            'name' => 'Bus',
            'slug' => slugify('Bus'),
            'category_id' => 7
        ]);
        ProductSubcategory::create([
            'name' => 'Other Vehicle Parts & Accessories',
            'slug' => slugify('Other Vehicle Parts & Accessories'),
            'category_id' => 7
        ]);
        ProductSubcategory::create([
            'name' => 'Trailers',
            'slug' => slugify('Trailers'),
            'category_id' => 7
        ]);
        ProductSubcategory::create([
            'name' => 'Golf Carts',
            'slug' => slugify('Golf Carts'),
            'category_id' => 7
        ]);
        ProductSubcategory::create([
            'name' => 'Truck Parts & Accessorie',
            'slug' => slugify('Truck Parts & Accessorie'),
            'category_id' => 7
        ]);
        ProductSubcategory::create([
            'name' => 'Motorcycles & Scooters',
            'slug' => slugify('Motorcycles & Scooters'),
            'category_id' => 7
        ]);
        ProductSubcategory::create([
            'name' => 'ATVs & LITVs',
            'slug' => slugify('ATVs & LITVs'),
            'category_id' => 7
        ]);
        ProductSubcategory::create([
            'name' => 'Containers',
            'slug' => slugify('Containers'),
            'category_id' => 7
        ]);
        ProductSubcategory::create([
            'name' => 'Other Vehicles',
            'slug' => slugify('Other Vehicles'),
            'category_id' => 7
        ]);



        /* Luggage, Bags & Cases  */


        ProductSubcategory::create([
            'name' => 'Bag & Luggage Making Materials',
            'slug' => slugify('Bag & Luggage Making Materials'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Business Bags & Cases',
            'slug' => slugify('Business Bags & Cases'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Handbags & Messenger Bags',
            'slug' => slugify('Handbags & Messenger Bags'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Luggage Cart',
            'slug' => slugify('Luggage Cart'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Special Purpose Bags & Cases',
            'slug' => slugify('Special Purpose Bags & Cases'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Wallets & Holders',
            'slug' => slugify('Wallets & Holders'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Luggage Sets',
            'slug' => slugify('Luggage Sets'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Briefcases',
            'slug' => slugify('Briefcases'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Shopping Bags',
            'slug' => slugify('Shopping Bags'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Backpacks',
            'slug' => slugify('Backpacks'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Bag Parts & Accessories',
            'slug' => slugify('Bag Parts & Accessories'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Digital Gear & Camera Bags',
            'slug' => slugify('Digital Gear & Camera Bags'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Luggage & Travel Bags',
            'slug' => slugify('Luggage & Travel Bags'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Other Luggage, Bags & Cases',
            'slug' => slugify('Other Luggage, Bags & Cases'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Sports & Leisure Bags',
            'slug' => slugify('Sports & Leisure Bags'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Carry-on Luggage',
            'slug' => slugify('Carry-on Luggage'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Trolley Bags',
            'slug' => slugify('Trolley Bags'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Cosmetic Bags & Cases',
            'slug' => slugify('Cosmetic Bags & Cases'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Handbags',
            'slug' => slugify('Handbags'),
            'category_id' => 8
        ]);
        ProductSubcategory::create([
            'name' => 'Wallets',
            'slug' => slugify('Wallets'),
            'category_id' => 8
        ]);


        /* Shoes & Accessories  */

        ProductSubcategory::create([
            'name' => 'Baby Shoes',
            'slug' => slugify('Baby Shoes'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Dance Shoes',
            'slug' => slugify('Dance Shoes'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Men Shoes',
            'slug' => slugify('Men Shoes'),
            'category_id' => 9
        ]);
        
        ProductSubcategory::create([
            'name' => 'Shoe Materials',
            'slug' => slugify('Shoe Materials'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Shoe Repairing Equipment',
            'slug' => slugify('Shoe Repairing Equipment'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Shoes Processing Services',
            'slug' => slugify('Shoes Processing Services'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Special Purpose Shoes',
            'slug' => slugify('Special Purpose Shoes'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Used Shoes',
            'slug' => slugify('Used Shoes'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Children Shoes',
            'slug' => slugify('Children Shoes'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Genuine Leather Shoes',
            'slug' => slugify('Genuine Leather Shoes'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Other Shoes',
            'slug' => slugify('Other Shoes'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Shoe Parts & Accessories',
            'slug' => slugify('Shoe Parts & Accessories'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Shoes Design Services',
            'slug' => slugify('Shoes Design Services'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Shoes Stock',
            'slug' => slugify('Shoes Stock'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Sports Shoes',
            'slug' => slugify('Sports Shoes'),
            'category_id' => 9
        ]);
        ProductSubcategory::create([
            'name' => 'Women Shoes',
            'slug' => slugify('Women Shoes'),
            'category_id' => 9
        ]);


        /* Consumer Electronic  */


        ProductSubcategory::create([
            'name' => 'Computer Hardware & Software',
            'slug' => slugify('Computer Hardware & Software'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Accessories & Parts',
            'slug' => slugify('Accessories & Parts'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Electronic Publications',
            'slug' => slugify('Electronic Publications'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Mobile Phone & Accessories',
            'slug' => slugify('Mobile Phone & Accessories'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Portable Audio, Video & Accessories',
            'slug' => slugify('Portable Audio, Video & Accessories'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Mobile Phones',
            'slug' => slugify('Mobile Phones'),
            'category_id' => 10
        ]);
        
        ProductSubcategory::create([
            'name' => 'Radio & TV Accessories',
            'slug' => slugify('Radio & TV Accessories'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Power Banks',
            'slug' => slugify('Power Banks'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Television',
            'slug' => slugify('Television'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Charger',
            'slug' => slugify('Charger'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Electronic Cigarettes',
            'slug' => slugify('Electronic Cigarettes'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Camera, Photo & Accessories',
            'slug' => slugify('Camera, Photo & Accessories'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Home Audio, Video & Accessories',
            'slug' => slugify('Home Audio, Video & Accessories'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Video Game & Accessories',
            'slug' => slugify('Video Game & Accessories'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Earphone & Headphone',
            'slug' => slugify('Earphone & Headphone'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Speaker',
            'slug' => slugify('Speaker'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Cables',
            'slug' => slugify('Cables'),
            'category_id' => 10
        ]);
        ProductSubcategory::create([
            'name' => 'Digital Battery',
            'slug' => slugify('Digital Battery'),
            'category_id' => 10
        ]);


        /* Home Appliance  */

        ProductSubcategory::create([
            'name' => 'Air Conditioning Appliances',
            'slug' => slugify('Air Conditioning Appliances'),
            'category_id' => 11
        ]);
        ProductSubcategory::create([
            'name' => 'Hand Dryers',
            'slug' => slugify('Hand Dryers'),
            'category_id' => 11
        ]);
        ProductSubcategory::create([
            'name' => 'Home Appliances Stocks',
            'slug' => slugify('Home Appliances Stocks'),
            'category_id' => 11
        ]);


        ProductSubcategory::create([
            'name' => 'Kitchen Appliances',
            'slug' => slugify('Kitchen Appliances'),
            'category_id' => 11
        ]);

        ProductSubcategory::create([
            'name' => 'Other Home Appliances',
            'slug' => slugify('Other Home Appliances'),
            'category_id' => 11
        ]);

        ProductSubcategory::create([
            'name' => 'Water Heaters',
            'slug' => slugify('Water Heaters'),
            'category_id' => 11
        ]);

        ProductSubcategory::create([
            'name' => 'Wet Towel Dispensers',
            'slug' => slugify('Wet Towel Dispensers'),
            'category_id' => 11
        ]);


        ProductSubcategory::create([
            'name' => 'Fans',
            'slug' => slugify('Fans'),
            'category_id' => 11
        ]);

        ProductSubcategory::create([
            'name' => 'Solar Water Heaters',
            'slug' => slugify('Solar Water Heaters'),
            'category_id' => 11
        ]);
        ProductSubcategory::create([
            'name' => 'Coffee Makers',
            'slug' => slugify('Coffee Makers'),
            'category_id' => 11
        ]);
        ProductSubcategory::create([
            'name' => 'Cleaning Appliances',
            'slug' => slugify('Cleaning Appliances'),
            'category_id' => 11
        ]);
        ProductSubcategory::create([
            'name' => 'Home Appliance Parts',
            'slug' => slugify('Home Appliance Parts'),
            'category_id' => 11
        ]);
        ProductSubcategory::create([
            'name' => 'Home Heaters',
            'slug' => slugify('Home Heaters'),
            'category_id' => 11
        ]);

        ProductSubcategory::create([
            'name' => 'Laundry Appliances',
            'slug' => slugify('Laundry Appliances'),
            'category_id' => 11
        ]);

      

        ProductSubcategory::create([
            'name' => 'Refrigerators & Freezerss',
            'slug' => slugify('Refrigerators & Freezerss'),
            'category_id' => 11
        ]);

        ProductSubcategory::create([
            'name' => 'Water Treatment Appliances',
            'slug' => slugify('Water Treatment Appliances'),
            'category_id' => 11
        ]);

        ProductSubcategory::create([
            'name' => 'Air Conditioners',
            'slug' => slugify('Air Conditioners'),
            'category_id' => 11
        ]);
        ProductSubcategory::create([
            'name' => 'Vacuum Cleaners',
            'slug' => slugify('Vacuum Cleaners'),
            'category_id' => 11
        ]);
        ProductSubcategory::create([
            'name' => 'Cooking Appliances',
            'slug' => slugify('Cooking Appliances'),
            'category_id' => 11
        ]);

        ProductSubcategory::create([
            'name' => 'Blenders',
            'slug' => slugify('Blenders'),
            'category_id' => 11
        ]);

        /* Security & Protection  */


        ProductSubcategory::create([
            'name' => 'Locks & Keys',
            'slug' => slugify('Locks & Keys'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Access Control Systems & Products',
            'slug' => slugify('Access Control Systems & Products'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'CCTV Products',
            'slug' => slugify('CCTV Products'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Locksmith Supplies',
            'slug' => slugify('Locksmith Supplies'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Police & Military Supplies',
            'slug' => slugify('Police & Military Supplies'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Safes',
            'slug' => slugify('Safes'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Self Defense Supplies',
            'slug' => slugify('Self Defense Supplies'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'CCTV Camera',
            'slug' => slugify('CCTV Camera'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Alcohol Tester',
            'slug' => slugify('Alcohol Tester'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Personal Protective Equipment',
            'slug' => slugify('Personal Protective Equipment'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Alarm',
            'slug' => slugify('Alarm'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Firefighting Supplies',
            'slug' => slugify('Firefighting Supplies'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Other Security & Protection Products',
            'slug' => slugify('Other Security & Protection Products'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Roadway Safety',
            'slug' => slugify('Roadway Safety'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Security Services',
            'slug' => slugify('Security Services'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Water Safety Products',
            'slug' => slugify('Water Safety Products'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Bullet Proof Vest',
            'slug' => slugify('Bullet Proof Vest'),
            'category_id' => 12
        ]);
        ProductSubcategory::create([
            'name' => 'Fire Alarm',
            'slug' => slugify('Fire Alarm'),
            'category_id' => 12
        ]);


        /* Electrical Equipment & Supplies  */


        ProductSubcategory::create([
            'name' => 'Solar Energy Products',
            'slug' => slugify('Solar Energy Products'),
            'category_id' => 13
        ]);
        ProductSubcategory::create([
            'name' => 'Electrical Instruments',
            'slug' => slugify('Electrical Instruments'),
            'category_id' => 13
        ]);

        ProductSubcategory::create([
            'name' => 'Connectors & Terminals',
            'slug' => slugify('Connectors & Terminals'),
            'category_id' => 13
        ]);

        ProductSubcategory::create([
            'name' => 'Contactors',
            'slug' => slugify('Contactors'),
            'category_id' => 13
        ]);

        ProductSubcategory::create([
            'name' => 'Electrical Supplies',
            'slug' => slugify('Electrical Supplies'),
            'category_id' => 13
        ]);

        ProductSubcategory::create([
            'name' => 'Fuse Components',
            'slug' => slugify('Fuse Components'),
            'category_id' => 13
        ]);

        ProductSubcategory::create([
            'name' => 'Generators',
            'slug' => slugify('Generators'),
            'category_id' => 13
        ]);

        ProductSubcategory::create([
            'name' => 'Power Distribution Equipment',
            'slug' => slugify('Power Distribution Equipment'),
            'category_id' => 13
        ]);

        ProductSubcategory::create([
            'name' => 'Switches',
            'slug' => slugify('Switches'),
            'category_id' => 13
        ]);

        ProductSubcategory::create([
            'name' => 'Batteries',
            'slug' => slugify('Batteries'),
            'category_id' => 13
        ]);

        ProductSubcategory::create([
            'name' => 'Circuit Breakers',
            'slug' => slugify('Circuit Breakers'),
            'category_id' => 13
        ]);

        ProductSubcategory::create([
            'name' => 'Industrial Controls',
            'slug' => slugify('Industrial Controls'),
            'category_id' => 13
        ]);

        ProductSubcategory::create([
            'name' => 'Motors',
            'slug' => slugify('Motors'),
            'category_id' => 13
        ]);

        ProductSubcategory::create([
            'name' => 'Fuses',
            'slug' => slugify('Fuses'),
            'category_id' => 13
        ]);
        ProductSubcategory::create([
            'name' => 'Power Accessories',
            'slug' => slugify('Power Accessories'),
            'category_id' => 13
        ]);
        ProductSubcategory::create([
            'name' => 'Power Supplies',
            'slug' => slugify('Power Supplies'),
            'category_id' => 13
        ]);
        ProductSubcategory::create([
            'name' => 'Relays',
            'slug' => slugify('Relays'),
            'category_id' => 13
        ]);
        ProductSubcategory::create([
            'name' => 'Transformers',
            'slug' => slugify('Transformers'),
            'category_id' => 13
        ]);

        /* Sports & Entertainment */

        ProductSubcategory::create([
            'name' => 'Amusement Park',
            'slug' => slugify('Amusement Park'),
            'category_id' => 14
        ]);

        ProductSubcategory::create([
            'name' => 'Fitness & Body Building',
            'slug' => slugify('Fitness & Body Building'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Golf',
            'slug' => slugify('Golf'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Musical Instruments',
            'slug' => slugify('Musical Instruments'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Outdoor Sports',
            'slug' => slugify('Outdoor Sports'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Sports Safety',
            'slug' => slugify('Sports Safety'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Team Sports',
            'slug' => slugify('Team Sports'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Water Sports',
            'slug' => slugify('Water Sports'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Camping & Hiking',
            'slug' => slugify('Camping & Hiking'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Gym Equipment',
            'slug' => slugify('Gym Equipment'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Artificial Grass & Sports Flooring',
            'slug' => slugify('Artificial Grass & Sports Flooring'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Gambling',
            'slug' => slugify('Gambling'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Indoor Sports',
            'slug' => slugify('Indoor Sports'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Other Sports & Entertainment Products',
            'slug' => slugify('Other Sports & Entertainment Products'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Sports Gloves',
            'slug' => slugify('Sports Gloves'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Sports Souvenirs',
            'slug' => slugify('Sports Souvenirs'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Tennis',
            'slug' => slugify('Tennis'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Winter Sports',
            'slug' => slugify('Winter Sports'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Scooters',
            'slug' => slugify('Scooters'),
            'category_id' => 14
        ]);
        ProductSubcategory::create([
            'name' => 'Swimming & Diving',
            'slug' => slugify('Swimming & Diving'),
            'category_id' => 14
        ]);


        /* Gifts & Crafts  */


        ProductSubcategory::create([
            'name' => 'Art & Collectible',
            'slug' => slugify('Art & Collectible'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Arts & Crafts Stocks',
            'slug' => slugify('Arts & Crafts Stocks'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Festive & Party Supplies',
            'slug' => slugify('Festive & Party Supplies'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Gift Sets',
            'slug' => slugify('Gift Sets'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Home Decoration',
            'slug' => slugify('Home Decoration'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Knitting & Crocheting',
            'slug' => slugify('Knitting & Crocheting'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Lanyard',
            'slug' => slugify('Lanyard'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Music Boxes',
            'slug' => slugify('Music Boxes'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Sculptures',
            'slug' => slugify('Sculptures'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Stickers',
            'slug' => slugify('Stickers'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Crafts',
            'slug' => slugify('Crafts'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Cross Stitch',
            'slug' => slugify('Cross Stitch'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Flags, Banners & Accessories',
            'slug' => slugify('Flags, Banners & Accessories'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Holiday Gifts',
            'slug' => slugify('Holiday Gifts'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Key Chains',
            'slug' => slugify('Key Chains'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Lacquerware',
            'slug' => slugify('Lacquerware'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Money Boxes',
            'slug' => slugify('Money Boxes'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Pottery & Enamel',
            'slug' => slugify('Pottery & Enamel'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Souvenirs',
            'slug' => slugify('Souvenirs'),
            'category_id' => 16
        ]);

        ProductSubcategory::create([
            'name' => 'Wedding Decorations & Gifts',
            'slug' => slugify('Wedding Decorations & Gifts'),
            'category_id' => 16
        ]);

        /* Toys & Hobbies  */

        ProductSubcategory::create([
            'name' => 'Action Figure',
            'slug' => slugify('Action Figure'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Balloons',
            'slug' => slugify('Balloons'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Classic Toys',
            'slug' => slugify('Classic Toys'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Educational Toys',
            'slug' => slugify('Educational Toys'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Glass Marbles',
            'slug' => slugify('Glass Marbles'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Light-Up Toys',
            'slug' => slugify('Light-Up Toys'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Other Toys & Hobbies',
            'slug' => slugify('Other Toys & Hobbies'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Plastic Toys',
            'slug' => slugify('Plastic Toys'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Solar Toys',
            'slug' => slugify('Solar Toys'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Toy Animal',
            'slug' => slugify('Toy Animal'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Toy Parts',
            'slug' => slugify('Toy Parts'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Toy Vehicle',
            'slug' => slugify('Toy Vehicle'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Wooden Toys',
            'slug' => slugify('Wooden Toys'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Baby Toys',
            'slug' => slugify('Baby Toys'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Candy Toys',
            'slug' => slugify('Candy Toys'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Dolls',
            'slug' => slugify('Dolls'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Electronic Toys',
            'slug' => slugify('Electronic Toys'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Inflatable Toys',
            'slug' => slugify('Inflatable Toys'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Noise Maker',
            'slug' => slugify('Noise Maker'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Outdoor Toys & Structures',
            'slug' => slugify('Outdoor Toys & Structures'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Pretend Play & Preschool',
            'slug' => slugify('Pretend Play & Preschool'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Toy Accessories',
            'slug' => slugify('Toy Accessories'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Toy Guns',
            'slug' => slugify('Toy Guns'),
            'category_id' => 16
        ]);
     
        ProductSubcategory::create([
            'name' => 'Toy Robots',
            'slug' => slugify('Toy Robots'),
            'category_id' => 16
        ]);
        ProductSubcategory::create([
            'name' => 'Wind Up Toys',
            'slug' => slugify('Wind Up Toys'),
            'category_id' => 16
        ]);



        /* Health & Medical */

        ProductSubcategory::create([
            'name' => 'Animal Extract',
            'slug' => slugify('Animal Extract'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Body Weights',
            'slug' => slugify('Body Weights'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Health Care Supplies',
            'slug' => slugify('Health Care Supplies'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Prepared Drugs In Pieces',
            'slug' => slugify('Prepared Drugs In Pieces'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Body Fluid-Processing & Circulation Devices',
            'slug' => slugify('Body Fluid-Processing & Circulation Devices'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Dental Equipment',
            'slug' => slugify('Dental Equipment'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Medical Consumable',
            'slug' => slugify('Medical Consumable'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Medical Software',
            'slug' => slugify('Medical Software'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Radiology Equipment & Accessories',
            'slug' => slugify('Radiology Equipment & Accessories'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Surgical Instrument',
            'slug' => slugify('Surgical Instrument'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Ward Nursing Equipments',
            'slug' => slugify('Ward Nursing Equipments'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Plant Extracts',
            'slug' => slugify('Plant Extracts'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Health Care Supplement',
            'slug' => slugify('Health Care Supplement'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Crude Medicine',
            'slug' => slugify('Crude Medicine'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Traditional Patented Medicines',
            'slug' => slugify('Traditional Patented Medicines'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Clinical Analytical Instruments',
            'slug' => slugify('Clinical Analytical Instruments'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Emergency & Clinics Apparatuses',
            'slug' => slugify('Emergency & Clinics Apparatuses'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'General Assay & Diagnostic Appparatuses',
            'slug' => slugify('General Assay & Diagnostic Appparatuses'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Medical Cryogenic Equipments',
            'slug' => slugify('Medical Cryogenic Equipments'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Physical Therapy Equipments',
            'slug' => slugify('Physical Therapy Equipments'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Sterilization Equipments',
            'slug' => slugify('Sterilization Equipments'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Ultrasonic, Optical, Electronic Equipments',
            'slug' => slugify('Ultrasonic, Optical, Electronic Equipments'),
            'category_id' => 17
        ]);
        ProductSubcategory::create([
            'name' => 'Medicines',
            'slug' => slugify('Medicines'),
            'category_id' => 17
        ]);

        /* Beauty & Personal Care  */


        ProductSubcategory::create([
            'name' => 'Baby Care',
            'slug' => slugify('Baby Care'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Beauty Equipment',
            'slug' => slugify('Beauty Equipment'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Breast Care',
            'slug' => slugify('Breast Care'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Fragrance & Deodorant',
            'slug' => slugify('Fragrance & Deodorant'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Hair Extensions & Wigs',
            'slug' => slugify('Hair Extensions & Wigs'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Makeup',
            'slug' => slugify('Makeup'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Men Care',
            'slug' => slugify('Men Care'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Oral Hygiene',
            'slug' => slugify('Oral Hygiene'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Sanitary Paper',
            'slug' => slugify('Sanitary Paper'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Skin Care',
            'slug' => slugify('Skin Care'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Bath Supplies',
            'slug' => slugify('Bath Supplies'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Body Art',
            'slug' => slugify('Body Art'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Feminine Hygiene',
            'slug' => slugify('Feminine Hygiene'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Hair Care',
            'slug' => slugify('Hair Care'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Hair Salon Equipment',
            'slug' => slugify('Hair Salon Equipment'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Makeup Tools',
            'slug' => slugify('Makeup Tools'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Nail Supplies',
            'slug' => slugify('Nail Supplies'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Other Beauty & Personal Care Products',
            'slug' => slugify('Other Beauty & Personal Care Products'),
            'category_id' => 18
        ]);
        ProductSubcategory::create([
            'name' => 'Shaving & Hair Removal',
            'slug' => slugify('Shaving & Hair Removal'),
            'category_id' => 18
        ]);
      

        /* Construction & Real Estate  */


        ProductSubcategory::create([
            'name' => 'Aluminum Composite Panels',
            'slug' => slugify('Aluminum Composite Panels'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Bathroom',
            'slug' => slugify('Bathroom'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Building Glass',
            'slug' => slugify('Building Glass'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Corner Guards',
            'slug' => slugify('Corner Guards'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Curtain Walls & Accessories',
            'slug' => slugify('Curtain Walls & Accessories'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Door & Window Accessories',
            'slug' => slugify('Door & Window Accessories'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Earthwork Products',
            'slug' => slugify('Earthwork Products'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Escalators & Escalator Parts',
            'slug' => slugify('Escalators & Escalator Parts'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Fireproofing Materials',
            'slug' => slugify('Fireproofing Materials'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Flooring & Accessories',
            'slug' => slugify('Flooring & Accessories'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Gates',
            'slug' => slugify('Gates'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'HVAC Systems & Parts',
            'slug' => slugify('HVAC Systems & Parts'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Ladders & Scaffoldings',
            'slug' => slugify('Ladders & Scaffoldings'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Masonry Materials',
            'slug' => slugify('Masonry Materials'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Mosaics',
            'slug' => slugify('Mosaics'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Skin Care Tool',
            'slug' => slugify('Skin Care Tool'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Multifunctional Materials',
            'slug' => slugify('Multifunctional Materials'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Plastic Building Materials',
            'slug' => slugify('Plastic Building Materials'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Real Estate',
            'slug' => slugify('Real Estate'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Stairs & Stair Parts',
            'slug' => slugify('Stairs & Stair Parts'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Sunrooms & Glass Houses',
            'slug' => slugify('Sunrooms & Glass Houses'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Timber',
            'slug' => slugify('Timber'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Wallpapers & Wall Coating',
            'slug' => slugify('Wallpapers & Wall Coating'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Balustrades & Handrails',
            'slug' => slugify('Balustrades & Handrails'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Boards',
            'slug' => slugify('Boards'),
            'category_id' => 19
        ]);

        ProductSubcategory::create([
            'name' => 'Ceilings',
            'slug' => slugify('Ceilings'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Countertops,Vanity Tops & Table Tops',
            'slug' => slugify('Countertops,Vanity Tops & Table Tops'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Decorative Films',
            'slug' => slugify('Decorative Films'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Doors & Windows',
            'slug' => slugify('Doors & Windows'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Elevators & Elevator Parts',
            'slug' => slugify('Elevators & Elevator Parts'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Faucets, Mixers & Taps',
            'slug' => slugify('Faucets, Mixers & Taps'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Fireplaces,Stoves',
            'slug' => slugify('Fireplaces,Stoves'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Floor Heating Systems & Parts',
            'slug' => slugify('Floor Heating Systems & Parts'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Formwork',
            'slug' => slugify('Formwork'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Heat Insulation Materials',
            'slug' => slugify('Heat Insulation Materials'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Kitchen',
            'slug' => slugify('Kitchen'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Landscaping Stone',
            'slug' => slugify('Landscaping Stone'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Metal Building Materials',
            'slug' => slugify('Metal Building Materials'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Mouldings',
            'slug' => slugify('Mouldings'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Other Construction & Real Estate',
            'slug' => slugify('Other Construction & Real Estate'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Quarry Stone & Slabs',
            'slug' => slugify('Quarry Stone & Slabs'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Soundproofing Materials',
            'slug' => slugify('Soundproofing Materials'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Stone Carvings and Sculptures',
            'slug' => slugify('Stone Carvings and Sculptures'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Tiles & Accessories',
            'slug' => slugify('Tiles & Accessories'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Tombstones and Monuments',
            'slug' => slugify('Tombstones and Monuments'),
            'category_id' => 19
        ]);
        ProductSubcategory::create([
            'name' => 'Waterproofing Materials',
            'slug' => slugify('Waterproofing Materials'),
            'category_id' => 19
        ]);



        /* Home & Garden  */

        ProductSubcategory::create([
            'name' => 'Bakeware',
            'slug' => slugify('Bakeware'),
            'category_id' => 20
        ]);
        ProductSubcategory::create([
            'name' => 'Bathroom Products',
            'slug' => slugify('Bathroom Products'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Cookware',
            'slug' => slugify('Cookware'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Home Decor',
            'slug' => slugify('Home Decor'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Household Chemicals',
            'slug' => slugify('Household Chemicals'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Household Sundries',
            'slug' => slugify('Household Sundries'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Laundry Products',
            'slug' => slugify('Laundry Products'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Kitchen,Dining,Bar & Tableware',
            'slug' => slugify('Kitchen,Dining,Bar & Tableware'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Drinkware',
            'slug' => slugify('Drinkware'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Rain Gear',
            'slug' => slugify('Rain Gear'),
            'category_id' => 20
        ]);
        ProductSubcategory::create([
            'name' => 'Barware',
            'slug' => slugify('Barware'),
            'category_id' => 20
        ]);
        ProductSubcategory::create([
            'name' => 'Cooking Tools',
            'slug' => slugify('Cooking Tools'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Garden Supplies',
            'slug' => slugify('Garden Supplies'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Home Storage & Organization',
            'slug' => slugify('Home Storage & Organization'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Household Cleaning Tools & Accessories',
            'slug' => slugify('Household Cleaning Tools & Accessories'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Kitchen Knives & Accessories',
            'slug' => slugify('Kitchen Knives & Accessories'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Pet Products',
            'slug' => slugify('Pet Products'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Dinnerware',
            'slug' => slugify('Dinnerware'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Baby Supplies & Products',
            'slug' => slugify('Baby Supplies & Products'),
            'category_id' => 20
        ]);

        ProductSubcategory::create([
            'name' => 'Lighters & Smoking Accessories',
            'slug' => slugify('Lighters & Smoking Accessories'),
            'category_id' => 20
        ]);



        /*  Lights & Lighting  */



        ProductSubcategory::create([
            'name' => 'Emergency Lighting',
            'slug' => slugify('Emergency Lighting'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'Indoor Lighting',
            'slug' => slugify('Indoor Lighting'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'Lighting Accessories',
            'slug' => slugify('Lighting Accessories'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'Other Lights & Lighting Products',
            'slug' => slugify('Other Lights & Lighting Products'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'Professional Lighting',
            'slug' => slugify('Professional Lighting'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'LED Outdoor Lighting',
            'slug' => slugify('LED Outdoor Lighting'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'Ceiling Lights',
            'slug' => slugify('Ceiling Lights'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'Stage Lights',
            'slug' => slugify('Stage Lights'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'Energy Saving & Fluorescent',
            'slug' => slugify('Energy Saving & Fluorescent'),
            'category_id' => 21
        ]);
      
        ProductSubcategory::create([
            'name' => 'LED Professional Lighting',
            'slug' => slugify('LED Professional Lighting'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'Holiday Lighting',
            'slug' => slugify('Holiday Lighting'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'LED Lighting',
            'slug' => slugify('LED Lighting'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'Lighting Bulbs & Tubes',
            'slug' => slugify('Lighting Bulbs & Tubes'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'Outdoor Lighting',
            'slug' => slugify('Outdoor Lighting'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'LED Residential Lighting',
            'slug' => slugify('LED Residential Lighting'),
            'category_id' => 21
        ]);
      
        ProductSubcategory::create([
            'name' => 'Crystal Lights',
            'slug' => slugify('Crystal Lights'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'Chandeliers & Pendant Lights',
            'slug' => slugify('Chandeliers & Pendant Lights'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'Street Lights',
            'slug' => slugify('Street Lights'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'LED Landscape Lamps',
            'slug' => slugify('LED Landscape Lamps'),
            'category_id' => 21
        ]);
        ProductSubcategory::create([
            'name' => 'LED Encapsulation Series',
            'slug' => slugify('LED Encapsulation Series'),
            'category_id' => 21
        ]);


        /* Furniture  */

        ProductSubcategory::create([
            'name' => 'Antique Furniture',
            'slug' => slugify('Antique Furniture'),
            'category_id' => 22
        ]);
        ProductSubcategory::create([
            'name' => 'Bamboo Furniture',
            'slug' => slugify('Bamboo Furniture'),
            'category_id' => 22
        ]);

        ProductSubcategory::create([
            'name' => 'Commercial Furniture',
            'slug' => slugify('Commercial Furniture'),
            'category_id' => 22
        ]);

        ProductSubcategory::create([
            'name' => 'Furniture Accessories',
            'slug' => slugify('Furniture Accessories'),
            'category_id' => 22
        ]);

        ProductSubcategory::create([
            'name' => 'Furniture Parts',
            'slug' => slugify('Furniture Parts'),
            'category_id' => 22
        ]);

        ProductSubcategory::create([
            'name' => 'Home Furniture',
            'slug' => slugify('Home Furniture'),
            'category_id' => 22
        ]);

        ProductSubcategory::create([
            'name' => 'Metal Furniture',
            'slug' => slugify('Metal Furniture'),
            'category_id' => 22
        ]);

        ProductSubcategory::create([
            'name' => 'Outdoor Furniture',
            'slug' => slugify('Outdoor Furniture'),
            'category_id' => 22
        ]);
        ProductSubcategory::create([
            'name' => 'Rattan / Wicker Furniture',
            'slug' => slugify('Rattan / Wicker Furniture'),
            'category_id' => 22
        ]);

        ProductSubcategory::create([
            'name' => 'Living Room Furniture',
            'slug' => slugify('Living Room Furniture'),
            'category_id' => 22
        ]);
        ProductSubcategory::create([
            'name' => 'Baby Furniture',
            'slug' => slugify('Baby Furniture'),
            'category_id' => 22
        ]);
        ProductSubcategory::create([
            'name' => 'Children Furniture',
            'slug' => slugify('Children Furniture'),
            'category_id' => 22
        ]);
        ProductSubcategory::create([
            'name' => 'Folding Furniture',
            'slug' => slugify('Folding Furniture'),
            'category_id' => 22
        ]);
        ProductSubcategory::create([
            'name' => 'Furniture Hardware',
            'slug' => slugify('Furniture Hardware'),
            'category_id' => 22
        ]);
        ProductSubcategory::create([
            'name' => 'Glass Furniture',
            'slug' => slugify('Glass Furniture'),
            'category_id' => 22
        ]);
        ProductSubcategory::create([
            'name' => 'Inflatable Furnituree',
            'slug' => slugify('Inflatable Furnituree'),
            'category_id' => 22
        ]);
        ProductSubcategory::create([
            'name' => 'Other Furniture',
            'slug' => slugify('Other Furniture'),
            'category_id' => 22
        ]);
        ProductSubcategory::create([
            'name' => 'Plastic Furniture',
            'slug' => slugify('Plastic Furniture'),
            'category_id' => 22
        ]);
        ProductSubcategory::create([
            'name' => 'Wood Furniture',
            'slug' => slugify('Wood Furniture'),
            'category_id' => 22
        ]);
       


        /* Machinery  */

        ProductSubcategory::create([
            'name' => 'Agriculture Machinery & Equipment',
            'slug' => slugify('Agriculture Machinery & Equipment'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Building Material Machinery',
            'slug' => slugify('Building Material Machinery'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Electronic Products Machinery',
            'slug' => slugify('Electronic Products Machinery'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Engineering & Construction Machinery',
            'slug' => slugify('Engineering & Construction Machinery'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'General Industrial Equipment',
            'slug' => slugify('General Industrial Equipment'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Industry Laser Equipment',
            'slug' => slugify('Industry Laser Equipment'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Metal & Metallurgy Machinery',
            'slug' => slugify('Metal & Metallurgy Machinery'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Packaging Machine',
            'slug' => slugify('Packaging Machine'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Pharmaceutical Machinery',
            'slug' => slugify('Pharmaceutical Machinery'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Printing Machine',
            'slug' => slugify('Printing Machine'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Used Machinery & Equipment',
            'slug' => slugify('Used Machinery & Equipment'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Apparel & Textile Machinery',
            'slug' => slugify('Apparel & Textile Machinery'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Bedroom Furniture',
            'slug' => slugify('Bedroom Furniture'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Chemical Machinery & Equipment',
            'slug' => slugify('Chemical Machinery & Equipment'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Energy & Mineral Equipment',
            'slug' => slugify('Energy & Mineral Equipment'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Food & Beverage Machinery',
            'slug' => slugify('Food & Beverage Machinery'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Home Product Making Machinery',
            'slug' => slugify('Home Product Making Machinery'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Machine Tool Equipment',
            'slug' => slugify('Machine Tool Equipment'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Other Machinery & Industry Equipment',
            'slug' => slugify('Other Machinery & Industry Equipment'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Paper Production Machinery',
            'slug' => slugify('Paper Production Machinery'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Refrigeration & Heat Exchange Equipment',
            'slug' => slugify('Refrigeration & Heat Exchange Equipment'),
            'category_id' => 23
        ]);
        ProductSubcategory::create([
            'name' => 'Woodworking Machinery',
            'slug' => slugify('Woodworking Machinery'),
            'category_id' => 23
        ]);






        /* Fabrication Services  */

        ProductSubcategory::create([
            'name' => 'Custom Fabrication Services',
            'slug' => slugify('Custom Fabrication Services'),
            'category_id' => 24
        ]);
        ProductSubcategory::create([
            'name' => 'Machine Tools Accessory',
            'slug' => slugify('Machine Tools Accessory'),
            'category_id' => 24
        ]);

        ProductSubcategory::create([
            'name' => 'Industrial Brake',
            'slug' => slugify('Industrial Brake'),
            'category_id' => 24
        ]);

        ProductSubcategory::create([
            'name' => 'Moulds',
            'slug' => slugify('Moulds'),
            'category_id' => 24
        ]);

        ProductSubcategory::create([
            'name' => 'Other Mechanical Parts',
            'slug' => slugify('Other Mechanical Parts'),
            'category_id' => 24
        ]);

        ProductSubcategory::create([
            'name' => 'Coating Services',
            'slug' => slugify('Coating Services'),
            'category_id' => 24
        ]);


        /* Tools & Hardware */

        ProductSubcategory::create([
            'name' => 'Hardware',
            'slug' => slugify('Hardware'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Material Handling Tools',
            'slug' => slugify('Material Handling Tools'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Power Tools',
            'slug' => slugify('Power Tools'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Tool Parts',
            'slug' => slugify('Tool Parts'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Tool Sets',
            'slug' => slugify('Tool Sets'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Knife',
            'slug' => slugify('Knife'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Lawn Mower',
            'slug' => slugify('Lawn Mower'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Hand Tools',
            'slug' => slugify('Hand Tools'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Power Tool Accessories',
            'slug' => slugify('Power Tool Accessories'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Tool Design Services',
            'slug' => slugify('Tool Design Services'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Tool Processing Services',
            'slug' => slugify('Tool Processing Services'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Tool Stock',
            'slug' => slugify('Tool Stock'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Hand Carts & Trolleys',
            'slug' => slugify('Hand Carts & Trolleys'),
            'category_id' => 25
        ]);
        ProductSubcategory::create([
            'name' => 'Sander',
            'slug' => slugify('Sander'),
            'category_id' => 25
        ]);



        /* Minerals & Metallurgy  */




        ProductSubcategory::create([
            'name' => 'Aluminum',
            'slug' => slugify('Aluminum'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Billets',
            'slug' => slugify('Billets'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Carbon Fiber',
            'slug' => slugify('Carbon Fiber'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Cemented Carbide',
            'slug' => slugify('Cemented Carbide'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Glass',
            'slug' => slugify('Glass'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Ingots',
            'slug' => slugify('Ingots'),
            'category_id' => 26
        ]);

        
        

        ProductSubcategory::create([
            'name' => 'Barbed Wire',
            'slug' => slugify('Barbed Wire'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Carbon',
            'slug' => slugify('Carbon'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Cast & Forged',
            'slug' => slugify('Cast & Forged'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Ceramic Fiber Products',
            'slug' => slugify('Ceramic Fiber Products'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Copper',
            'slug' => slugify('Copper'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Fiberglass Products',
            'slug' => slugify('Fiberglass Products'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Graphite Products',
            'slug' => slugify('Graphite Products'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Iron',
            'slug' => slugify('Iron'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Lime',
            'slug' => slugify('Lime'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Lead',
            'slug' => slugify('Lead'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Magnetic Materials',
            'slug' => slugify('Magnetic Materials'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Metal Slabs',
            'slug' => slugify('Metal Slabs'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Molybdenum',
            'slug' => slugify('Molybdenum'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Non-Metallic Mineral Deposit',
            'slug' => slugify('Non-Metallic Mineral Deposit'),
            'category_id' => 26
        ]);

        ProductSubcategory::create([
            'name' => 'Other Metals & Metal Products',
            'slug' => slugify('Other Metals & Metal Products'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Pig Iron',
            'slug' => slugify('Pig Iron'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Rare Earth & Products',
            'slug' => slugify('Rare Earth & Products'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Refractory',
            'slug' => slugify('Refractory'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Titanium',
            'slug' => slugify('Titanium'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Wire Mesh',
            'slug' => slugify('Wire Mesh'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Mineral Wool',
            'slug' => slugify('Mineral Wool'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Nickel',
            'slug' => slugify('Nickel'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Ore',
            'slug' => slugify('Ore'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Other Non-Metallic Minerals',
            'slug' => slugify('Other Non-Metallic Minerals'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Quartz Products',
            'slug' => slugify('Quartz Products'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Rare Earth Magnets',
            'slug' => slugify('Rare Earth Magnets'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Steel',
            'slug' => slugify('Steel'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Tungsten',
            'slug' => slugify('Tungsten'),
            'category_id' => 26
        ]);
        ProductSubcategory::create([
            'name' => 'Zinc',
            'slug' => slugify('Zinc'),
            'category_id' => 26
        ]);


        /* Chemicals  */

        ProductSubcategory::create([
            'name' => 'Gas Disposal',
            'slug' => slugify('Gas Disposal'),
            'category_id' => 27
        ]);

        ProductSubcategory::create([
            'name' => 'Other Environmental Products',
            'slug' => slugify('Other Environmental Products'),
            'category_id' => 27
        ]);
        ProductSubcategory::create([
            'name' => 'Recycling',
            'slug' => slugify('Recycling'),
            'category_id' => 27
        ]);
        ProductSubcategory::create([
            'name' => 'Waste Management',
            'slug' => slugify('Waste Management'),
            'category_id' => 27
        ]);
        ProductSubcategory::create([
            'name' => 'Textile Waste',
            'slug' => slugify('Textile Waste'),
            'category_id' => 27
        ]);
        ProductSubcategory::create([
            'name' => 'Other Recycling Products',
            'slug' => slugify('Other Recycling Products'),
            'category_id' => 27
        ]);
        ProductSubcategory::create([
            'name' => 'Noise Reduction Device',
            'slug' => slugify('Noise Reduction Device'),
            'category_id' => 27
        ]);
        ProductSubcategory::create([
            'name' => 'Other Excess Inventory',
            'slug' => slugify('Other Excess Inventory'),
            'category_id' => 27
        ]);
        ProductSubcategory::create([
            'name' => 'Sewer',
            'slug' => slugify('Sewer'),
            'category_id' => 27
        ]);
        ProductSubcategory::create([
            'name' => 'Water Treatment',
            'slug' => slugify('Water Treatment'),
            'category_id' => 27
        ]);
        ProductSubcategory::create([
            'name' => 'Waste Paper',
            'slug' => slugify('Waste Paper'),
            'category_id' => 27
        ]);

        /* Rubber & Plastics  */


        ProductSubcategory::create([
            'name' => 'Plastic Processing Service',
            'slug' => slugify('Plastic Processing Service'),
            'category_id' => 28
        ]);

        ProductSubcategory::create([
            'name' => 'Plastic Projects',
            'slug' => slugify('Plastic Projects'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Plastic Stocks',
            'slug' => slugify('Plastic Stocks'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Recycled Rubber',
            'slug' => slugify('Recycled Rubber'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Rubber Products',
            'slug' => slugify('Rubber Products'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Plastic Cards',
            'slug' => slugify('Plastic Cards'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Plastic Tubes',
            'slug' => slugify('Plastic Tubes'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Rubber Hoses',
            'slug' => slugify('Rubber Hoses'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'LDPE',
            'slug' => slugify('LDPE'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Plastic Products',
            'slug' => slugify('Plastic Products'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Plastic Raw Materials',
            'slug' => slugify('Plastic Raw Materials'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Recycled Plastic',
            'slug' => slugify('Recycled Plastic'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Rubber Processing Service',
            'slug' => slugify('Rubber Processing Service'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Rubber Projects',
            'slug' => slugify('Rubber Projects'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Rubber Stocks',
            'slug' => slugify('Rubber Stocks'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'PVC',
            'slug' => slugify('PVC'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'HDPE',
            'slug' => slugify('HDPE'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Plastic Sheets',
            'slug' => slugify('Plastic Sheets'),
            'category_id' => 28
        ]);
        ProductSubcategory::create([
            'name' => 'Agricultural Rubber',
            'slug' => slugify('Agricultural Rubber'),
            'category_id' => 28
        ]);

        /* Energy  */

        ProductSubcategory::create([
            'name' => 'Biodiesel',
            'slug' => slugify('Biodiesel'),
            'category_id' => 29
        ]);

        ProductSubcategory::create([
            'name' => 'Charcoal',
            'slug' => slugify('Charcoal'),
            'category_id' => 29
        ]);

        ProductSubcategory::create([
            'name' => 'Coal Gas',
            'slug' => slugify('Coal Gas'),
            'category_id' => 29
        ]);

        ProductSubcategory::create([
            'name' => 'Crude Oil',
            'slug' => slugify('Crude Oil'),
            'category_id' => 29
        ]);

        ProductSubcategory::create([
            'name' => 'Petrochemical Products',
            'slug' => slugify('Petrochemical Products'),
            'category_id' => 29
        ]);

        ProductSubcategory::create([
            'name' => 'Industrial Fuel',
            'slug' => slugify('Industrial Fuel'),
            'category_id' => 29
        ]);

        ProductSubcategory::create([
            'name' => 'Other Energy Related Products',
            'slug' => slugify('Other Energy Related Products'),
            'category_id' => 29
        ]);

        ProductSubcategory::create([
            'name' => 'Solar Energy Systems',
            'slug' => slugify('Solar Energy Systems'),
            'category_id' => 29
        ]);

        ProductSubcategory::create([
            'name' => 'Diesel Fuel',
            'slug' => slugify('Diesel Fuel'),
            'category_id' => 29
        ]);

        ProductSubcategory::create([
            'name' => 'Biogas',
            'slug' => slugify('Biogas'),
            'category_id' => 29
        ]);


        ProductSubcategory::create([
            'name' => 'Coal',
            'slug' => slugify('Coal'),
            'category_id' => 29
        ]);
        ProductSubcategory::create([
            'name' => 'Coke Fuel',
            'slug' => slugify('Coke Fuel'),
            'category_id' => 29
        ]);

        ProductSubcategory::create([
            'name' => 'Electricity Generation',
            'slug' => slugify('Electricity Generation'),
            'category_id' => 29
        ]);

       
        ProductSubcategory::create([
            'name' => 'Natural Gas',
            'slug' => slugify('Natural Gas'),
            'category_id' => 29
        ]);
        ProductSubcategory::create([
            'name' => 'Wood Pellets',
            'slug' => slugify('Wood Pellets'),
            'category_id' => 29
        ]);
        ProductSubcategory::create([
            'name' => 'Lubricant',
            'slug' => slugify('Lubricant'),
            'category_id' => 29
        ]);
        ProductSubcategory::create([
            'name' => 'Solar Collectors',
            'slug' => slugify('Solar Collectors'),
            'category_id' => 29
        ]);

        /* Packaging & Printing  */

        ProductSubcategory::create([
            'name' => 'Adhesive Tape',
            'slug' => slugify('Adhesive Tape'),
            'category_id' => 30
        ]);
        ProductSubcategory::create([
            'name' => 'Aluminum Foil',
            'slug' => slugify('Aluminum Foil'),
            'category_id' => 30
        ]);
        ProductSubcategory::create([
            'name' => 'Blister Cards',
            'slug' => slugify('Blister Cards'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Cans',
            'slug' => slugify('Cans'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Composite Packaging Materials',
            'slug' => slugify('Composite Packaging Materials'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Electronics Packaging',
            'slug' => slugify('Electronics Packaging'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Hot Stamping Foil',
            'slug' => slugify('Hot Stamping Foil'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Lids, Bottle Caps, Closures',
            'slug' => slugify('Lids, Bottle Caps, Closures'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Metallized Film',
            'slug' => slugify('Metallized Film'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Other Packaging Materials',
            'slug' => slugify('Other Packaging Materials'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Packaging Boxes',
            'slug' => slugify('Packaging Boxes'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Packaging Trays',
            'slug' => slugify('Packaging Trays'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Paper & Paperboard',
            'slug' => slugify('Paper & Paperboard'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Pharmaceutical Packaging',
            'slug' => slugify('Pharmaceutical Packaging'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Plastic Packaging',
            'slug' => slugify('Plastic Packaging'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Printing Services',
            'slug' => slugify('Printing Services'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Pulp',
            'slug' => slugify('Pulp'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Strapping',
            'slug' => slugify('Strapping'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Tobacco Packaging',
            'slug' => slugify('Tobacco Packaging'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Agricultural Packaging',
            'slug' => slugify('Agricultural Packaging'),
            'category_id' => 30
        ]);


        ProductSubcategory::create([
            'name' => 'Apparel Packaging',
            'slug' => slugify('Apparel Packaging'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Bottles',
            'slug' => slugify('Bottles'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Chemical Packaging',
            'slug' => slugify('Chemical Packaging'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Cosmetics Packaging',
            'slug' => slugify('Cosmetics Packaging'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Handles',
            'slug' => slugify('Handles'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Jars',
            'slug' => slugify('Jars'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Media Packaging',
            'slug' => slugify('Media Packaging'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Other Packaging Applications',
            'slug' => slugify('Other Packaging Applications'),
            'category_id' => 30
        ]);
        ProductSubcategory::create([
            'name' => 'Packaging Bags',
            'slug' => slugify('Packaging Bags'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Packaging Labels',
            'slug' => slugify('Packaging Labels'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Packaging Tubes',
            'slug' => slugify('Packaging Tubes'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Paper Packaging',
            'slug' => slugify('Paper Packaging'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Plastic Film',
            'slug' => slugify('Plastic Film'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Printing Materials',
            'slug' => slugify('Printing Materials'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Protective Packaging',
            'slug' => slugify('Protective Packaging'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Shrink Film',
            'slug' => slugify('Shrink Film'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Stretch Film',
            'slug' => slugify('Stretch Film'),
            'category_id' => 30
        ]);

        ProductSubcategory::create([
            'name' => 'Transport Packaging',
            'slug' => slugify('Transport Packaging'),
            'category_id' => 30
        ]);

        /* Office & School Supplies */

        ProductSubcategory::create([
            'name' => 'Art Supplies',
            'slug' => slugify('Art Supplies'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Board',
            'slug' => slugify('Board'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Book Cover',
            'slug' => slugify('Book Cover'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Calculator',
            'slug' => slugify('Calculator'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Clipboard',
            'slug' => slugify('Clipboard'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Desk Organizer',
            'slug' => slugify('Desk Organizer'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Easels',
            'slug' => slugify('Easels'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Filing Products',
            'slug' => slugify('Filing Products'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Notebooks & Writing Pads',
            'slug' => slugify('Notebooks & Writing Pads'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Office Binding Supplies',
            'slug' => slugify('Office Binding Supplies'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Other Office & School Supplies',
            'slug' => slugify('Other Office & School Supplies'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Pencil Cases & Bags',
            'slug' => slugify('Pencil Cases & Bags'),
            'category_id' => 31
        ]);

        ProductSubcategory::create([
            'name' => 'Printer Supplies',
            'slug' => slugify('Printer Supplies'),
            'category_id' => 31
        ]);

        ProductSubcategory::create([
            'name' => 'Stationery Set',
            'slug' => slugify('Stationery Set'),
            'category_id' => 31
        ]);

        ProductSubcategory::create([
            'name' => 'Writing Accessories',
            'slug' => slugify('Writing Accessories'),
            'category_id' => 31
        ]);

        ProductSubcategory::create([
            'name' => 'Yellow Pages',
            'slug' => slugify('Yellow Pages'),
            'category_id' => 31
        ]);

        ProductSubcategory::create([
            'name' => 'Badge Holder & Accessories',
            'slug' => slugify('Badge Holder & Accessories'),
            'category_id' => 31
        ]);

        ProductSubcategory::create([
            'name' => 'Board Eraser',
            'slug' => slugify('Board Eraser'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Books',
            'slug' => slugify('Books'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Calendar',
            'slug' => slugify('Calendar'),
            'category_id' => 31
        ]);

        ProductSubcategory::create([
            'name' => 'Correction Supplies',
            'slug' => slugify('Correction Supplies'),
            'category_id' => 31
        ]);

        ProductSubcategory::create([
            'name' => 'Drafting Supplies',
            'slug' => slugify('Drafting Supplies'),
            'category_id' => 31
        ]);

        ProductSubcategory::create([
            'name' => 'Educational Supplies',
            'slug' => slugify('Educational Supplies'),
            'category_id' => 31
        ]);

        ProductSubcategory::create([
            'name' => 'Letter Pad / Paper',
            'slug' => slugify('Letter Pad / Paper'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Map',
            'slug' => slugify('Map'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Office Adhesives & Tapes',
            'slug' => slugify('Office Adhesives & Tapes'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Office Cutting Supplies',
            'slug' => slugify('Office Cutting Supplies'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Office Paper',
            'slug' => slugify('Office Paper'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Paper Envelopes',
            'slug' => slugify('Paper Envelopes'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Pencil Sharpeners',
            'slug' => slugify('Pencil Sharpeners'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Stamps',
            'slug' => slugify('Stamps'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Stencils',
            'slug' => slugify('Stencils'),
            'category_id' => 31
        ]);
        ProductSubcategory::create([
            'name' => 'Writing Instruments',
            'slug' => slugify('Writing Instruments'),
            'category_id' => 31
        ]);


        /*  Service Equipment  */

        ProductSubcategory::create([
            'name' => 'Advertising Equipment',
            'slug' => slugify('Advertising Equipment'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Commercial Laundry Equipment',
            'slug' => slugify('Commercial Laundry Equipment'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Funeral Supplies',
            'slug' => slugify('Funeral Supplies'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Restaurant & Hotel Supplies',
            'slug' => slugify('Restaurant & Hotel Supplies'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Trade Show Equipment',
            'slug' => slugify('Trade Show Equipment'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Wedding Supplies',
            'slug' => slugify('Wedding Supplies'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Advertising Players',
            'slug' => slugify('Advertising Players'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Hotel Amenities',
            'slug' => slugify('Hotel Amenities'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Supermarket Shelves',
            'slug' => slugify('Supermarket Shelves'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Refrigeration Equipment',
            'slug' => slugify('Refrigeration Equipment'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Cargo & Storage Equipment',
            'slug' => slugify('Cargo & Storage Equipment'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Financial Equipment',
            'slug' => slugify('Financial Equipment'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Other Service Equipment',
            'slug' => slugify('Other Service Equipment'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Store & Supermarket Supplies',
            'slug' => slugify('Store & Supermarket Supplies'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Vending Machines',
            'slug' => slugify('Vending Machines'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Display Racks',
            'slug' => slugify('Display Racks'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Advertising Light Boxes',
            'slug' => slugify('Advertising Light Boxes'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'POS Systems',
            'slug' => slugify('POS Systems'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Stacking Racks & Shelves',
            'slug' => slugify('Stacking Racks & Shelves'),
            'category_id' => 32
        ]);
        ProductSubcategory::create([
            'name' => 'Trade Show Tent',
            'slug' => slugify('Trade Show Tent'),
            'category_id' => 32
        ]);







        $this->enableForeignKeys();
    }
}
