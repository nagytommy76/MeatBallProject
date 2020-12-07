<?php

namespace App\Notifications;

use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;

class VerifyEmail extends Notification
{

    /**
     * The callback that should be used to build the mail message.
     *
     * @var \Closure|null
     */
     public static $toMailCallback;

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $verificationUrl = $this->verificationUrl($notifiable);

        if (static::$toMailCallback) {
            return call_user_func(static::$toMailCallback, $notifiable, $verificationUrl);
        }

        return (new MailMessage)
            ->subject('Aktiválja e-mail címét!')
            ->greeting('Kedves Felhasználó!')
            ->line('Kérem kattintson a lenti gombra a hitelesítéshez')
            ->action('Aktiválás', $verificationUrl)
            ->line('Ha nem készített fiókot, nincs teendője')
            ->markdown('emails.emailNotification');
    }

    /**
     * Set a callback that should be used when building the notification mail message.
     *
     * @param  \Closure  $callback
     * @return void
     */
     public static function toMailUsing($callback)
     {
         static::$toMailCallback = $callback;
     }

    /**
     * Get the verification URL for the given notifiable.
     *
     * @param  mixed  $notifiable
     * @return string
     */
     protected function verificationUrl($notifiable)
     {
         return URL::temporarySignedRoute(
             'verification.verify',
             Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
             [
                 'id' => $notifiable->getKey(),
                 'hash' => sha1($notifiable->getEmailForVerification()),
             ]
         );
     }
}
