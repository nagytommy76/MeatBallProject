<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderConfirm extends Mailable
{
    use Queueable, SerializesModels;

    public $cart;
    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($cart, $user)
    {
        // Session
        $this->cart = $cart;
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
        ->from(\env('MAIL_FROM_ADDRESS','nagytommy76@gmail.com'))
        ->subject("Rendelés visszaigazolás Húsgolyó Étterem")
        ->markdown('emails.orders');
    }
}
