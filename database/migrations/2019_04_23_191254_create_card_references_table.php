<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCardReferencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('card_references', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('uuid')->unique();
            $table->string('account_id')->unique();
            $table->integer('reference_email')->nullable();
            $table->string('token')->unique();
            $table->string('gateway')->nullable();
            $table->boolean('default')->default(false);
            $table->timestamps();
        });
        Schema::table('card_references', function (Blueprint $table) {
            $table->foreign('account_id')->references('uuid')->on('accounts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('card_references');
    }
}
