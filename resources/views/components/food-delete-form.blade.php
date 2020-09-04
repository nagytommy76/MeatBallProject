<div>
    <section class="card-content card-content-admin text-white">
    <div class="card p-2">
        <div class="card-header">
            <h2>{{$cardName}}</h2>                            
        </div>
        <form action="{{ route($route) }}" method="POST">
            @csrf
            <input type="hidden" name="_method" value="{{$method}}">
            <div class="card-body">
                <div class="form-group">
                    <label for="foodId">Étel Kiválasztása:</label>
                    <select class="form-control" name="foodId" id="foodId">
                        @foreach ($allFood as $food)
                            <option value="{{$food->id}}">{{$food->name}} ({{$food->prices->price}} Ft)</option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="card-footer">
                <div class="form-group">
                    <input type="submit" class="{{$btnClass ?? ''}}" value="{{$btnValue}}">
                </div>
            </div>
            @if ($errors->has('fail') || $errors->has('success'))
                @if ($errors->first('fail'))
                    <div class="alert alert-danger">
                        <p>Sajnos hiba történt: </p>
                        <p>{{$errors->first('fail')}}</p>
                    </div>
                @else
                    <div class="alert alert-success">
                        <p>{{$errors->first('success')}}</p>
                    </div>
                @endif
                
            @endif
        </form>
    </div>
</section>
</div>