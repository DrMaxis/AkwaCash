<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

/**
 * Class CreateUsersTable.
 */
class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create(config('access.table_names.users'), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('uuid');
            $table->string('account')->unique()->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('email')->unique();
            $table->string('username')->unique()->nullable();
            $table->string('phone_number')->unique()->nullable();
            $table->string('phone_network')->nullable();
            $table->string('password');
            $table->timestamp('password_changed_at')->nullable();
            $table->timestamp('phone_number_changed_at')->nullable();
            $table->unsignedTinyInteger('active')->default(1);
            $table->string('confirmation_code')->nullable();
            $table->string('phone_number_confirmation_code')->nullable();
            $table->boolean('confirmed')->default(config('access.users.confirm_email') ? false : true);
            $table->boolean('phone_number_confirmed')->default(config('access.users.confirm_phone_number') ? false : true);
            $table->string('avatar_type')->default('gravatar');
            $table->string('avatar_location')->nullable();
            $table->string('timezone')->nullable();
            $table->timestamp('last_login_at')->nullable();
            $table->string('last_login_ip')->nullable();
            $table->boolean('to_be_logged_out')->default(false);
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists(config('access.table_names.users'));
    }
}
