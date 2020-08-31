@component('mail::message')
# Köszönjük a rendelést Kedves **{{$user->firstName}} {{$user->lastName}}!**

_A rendelés kiszállítása rajtunk kívülálló okokból 60-90 perc is lehet._

# Rendelés összegzése (Ételek: {{$cart->totalQty}} Db)

@component('mail::table')
| Étel neve       | Végösszeg        | Mennyiség  |
| :-------------: |:-------------:| :--------:|
@foreach ($cart->items as $item)
| {{$item['item']['foodName']}} | {{$item['oneItemTotalPrice']}} Ft| {{$item['qty']}} Db |
@endforeach

@endcomponent

# Fizetendő végösszeg: {{$cart->totalPrice}} Ft

@component('mail::panel')
    <h2>Kedves Felhasználó!</h2>
    <p>Szeretném megköszönni, hogy megtekintette a weboldalamat!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit a quia iure!</p>
@endcomponent

@endcomponent
