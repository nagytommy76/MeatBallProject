@component('mail::message')
# Köszönjük a rendelést Kedves **{{$user->firstName}} {{$user->lastName}}!**

A rendelés kiszállítása rajtunk kívülálló okokból 60-90 perc is lehet.
@component('mail::panel')
    <h3>Lorem, ipsum.</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni inventore officiis, voluptates velit expedita modi illo id autem dolorum! Tempora?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit a quia iure!</p>
@endcomponent
@component('mail::table')
| Laravel       | Table         | Example  |
| :-------------: |:-------------:| :--------:|
| Col 2 is      | Centered      | $10      |
| Col 3 is      | Right-Aligned | $20      |
@endcomponent
@endcomponent
