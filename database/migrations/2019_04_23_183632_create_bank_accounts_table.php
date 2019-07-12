<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBankAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bank_accounts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('uuid')->unique();
            $table->string('account_id')->unique();
            $table->string('bank_name')->nullable();
            $table->string('bank_code')->nullable();
            $table->string('bank_branch_code')->nullable();
            $table->string('account_routing')->nullable();
            $table->string('account_first_name')->nullable();
            $table->string('account_last_name')->nullable();
            $table->integer('account_number')->nullable();
            $table->integer('account_passcode')->nullable();
            $table->integer('account_bvn')->nullable();
            $table->string('account_currency')->nullable();
            $table->string('account_country')->nullable();
            $table->boolean('default')->default(false);
            $table->string('error')->nullable();
            $table->timestamp('last_updated')->nullable();

            $table->timestamps();
        });
       
        Schema::table('bank_accounts', function (Blueprint $table) {
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
        Schema::dropIfExists('bank_accounts');
    }
}
