<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductVariantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_variants', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('product_id')->unique();
            $table->string('slug')->nullable();
            $table->string('sku')->nullable();
            $table->string('model')->nullable();
            $table->integer('price');
            $table->integer('shipping_weight')->nullable();
            $table->integer('box_length')->nullable();
            $table->integer('box_width')->nullable();
            $table->integer('box_height')->nullable();
            $table->unsignedInteger('inventory_stock');
            $table->string('color')->nullable();
            $table->timestamps();
        });
     /*    Schema::table('product_variants', function (Blueprint $table) {
            $table->foreign('product_id')->references('uuid')->on('products')->onDelete('cascade');
        }); */
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_variants');
    }
}
