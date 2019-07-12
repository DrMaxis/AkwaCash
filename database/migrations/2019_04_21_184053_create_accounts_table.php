<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('uuid')->unique();
            $table->unsignedBigInteger('user_id');
            $table->string('default_currency')->nullable();
            $table->double('account_balance')->default(0.00);
            $table->string('account_owner')->nullable();
            $table->string('account_email')->nullable();
            $table->string('account_phone')->nullable();
            $table->string('account_phone_network')->nullable();
            $table->string('account_type')->nullable();
            $table->string('default_payment_method_id')->nullable();
            $table->string('default_payment_method_type')->nullable();
            $table->timestamp('last_updated')->nullable();
            $table->boolean('closed')->default(false);
            $table->timestamps();
        });

        Schema::table('accounts', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounts');
    }
}
