<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class UserEmailNotFound implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value, $parameters)
    {
        return DB::table($parameters[0])
            ->where($parameters[1], '=', $value)
            ->doesntExist();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Nem található ilyen :attribute';
    }
}
