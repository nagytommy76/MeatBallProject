<div>
    <section class="card-content card-content-admin text-white">
    <div class="card p-2">
        <form enctype="multipart/form-data" method="POST" action="{{ route($route) }}">
        @csrf
        <div class="card-header">
            <h2>{{$cardName}}</h2>                            
        </div>
        <div class="card-body">
            <div class="form-group row">
                <div class="col">
                    <label for="name">Étel neve:</label>
                    <input type="text" name="name" id="name" class="form-control">
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror 
                </div>
                <div class="col">
                    <label for="price">Ár:</label>
                    <input type="number" name="price" id="price" class="form-control">
                    @error('price')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror 
                </div>
            </div>
            @if ($capacity ?? false)
                <div class="form-group">
                    <div class="col">
                        <label for="capacity">Térfogat (ml)</label>
                        <input type="number" class="form-control" name="capacity" id="capacity" cols="10" rows="10">
                        @error('capacity')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
            @endif
            @if ($ingredients ?? true)              
            <div class="form-group">
                <div class="col">
                    <label for="ingredient">Összetevők (, elválasztva!)</label>
                    <textarea class="form-control" name="ingredient" id="ingredient" cols="10" rows="10"></textarea>
                    @error('ingredient')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
            @endif
            <div class="form-group row">
                <div class="col">
                    <label for="image">Kép feltöltése</label>
                    <input type="file" name="image" id="image">
                    @error('image')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>                         
            </div>
            @if ($errors->has('inputSuccess') || $errors->has('inputFail'))
                @if ($errors->first('inputSuccess'))
                    <div class="alert alert-success">
                        {{$errors->first('inputSuccess')}}
                    </div>
                @else
                    <div class="alert alert-danger">
                        {{$errors->first('inputFail')}}
                    </div>
                @endif                                                
            @endif
                          
        <div class="card-footer">
            <input type="submit" class="btn btn-confirm" value="Bevitel">
        </div>
        </form>
    </div> <!-- Input Pasta CARD END -->
    </section>
</div>