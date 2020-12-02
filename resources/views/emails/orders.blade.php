@component('mail::message')
# Köszönjük a rendelést Kedves **{{$user->lastName}} {{$user->firstName}}!**

_Rendelve: {{date('Y').'. '.date('m').'. '.date('d').'. '.date('H').':'.date('i').':'.date('s')}}_

_A rendelés kiszállítása rajtunk kívülálló okokból 60-90 perc is lehet._

# Rendelés összegzése (Ételek: {{$cart->totalQty}} Db)

@component('mail::table')
| Étel neve       | Végösszeg        | Mennyiség  |
| :-------------: |:-------------:| :--------:|
@foreach ($cart->items as $item)
| {{$item['item']['foodName']}} | {{$item['oneItemTotalPrice']}} Ft| {{$item['qty']}} Db |
@endforeach

@endcomponent

@if ($paypalInfo['paidWithPayPal'])
@component('mail::panel')
_A fizetés PayPal-en keresztül megtörtént. Köszönjük a rendelést!_
<p>Tranzakció ID: {{ $paypalInfo['transactionId'] }}</p>
<p>Fizetve: {{ $paypalInfo['getCreatedAt'] }}, {{ $cart->totalPrice }} Ft</p>

# Fizetendő végösszeg 0 Ft
@endcomponent

@else
# A futárnál fizetendő végösszeg: {{$cart->totalPrice}} Ft
@endif

@component('mail::panel')
    <h2>Kedves Felhasználó!</h2>
    <p>Szeretném megköszönni, hogy megtekintette a weboldalamat!</p>
    <p>Kérem vegye figyelembe, hogy valódi rendelés nem történt! :)</p>
@endcomponent

@endcomponent
