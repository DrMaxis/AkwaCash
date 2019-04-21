<?php

namespace App\Listeners\Frontend\Auth;

/**
 * Class UserEventListener.
 */
class UserEventListener
{
    /**
     * @param $event
     */
    public function onCreate($event)
    {
        \Log::info('Account: '.$event->account->uuid.'Created upon Register by: '.$event->user->name);

    }

   

    /**
     * Register the listeners for the subscriber.
     *
     * @param \Illuminate\Events\Dispatcher $events
     */
    public function subscribe($events)
    {
        $events->listen(
            \App\Events\Frontend\Auth\Account\AccountCreated::class,
            'App\Listeners\Frontend\Auth\UserEventListener@onCreate'
        );

    }
}
