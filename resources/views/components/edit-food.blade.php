    <h1 class="text-black p-2 text-center">A(z) {{$foodName}} étel módosítása</h1>
    <section class="card-content card-content-admin">
        <div class="card p-2">
            <form enctype="multipart/form-data" method="POST" action="{{ route($route, $foodId) }}">
            @csrf
            @method('PATCH')
            <div class="card-header">
                <h2>{{ $foodName }} módosítása</h2>                            
            </div>
            <div class="card-body">
                <div class="form-group">
                    <div class="col">
                        <label for="name">Étel neve:</label>
                        <input class="form-control" type="text" name="name" id="name" value="{{$foodName}}">
                        @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror 
                    </div>
                    <div class="col">
                        <label for="price">Ár (Ft):</label>
                        <input type="number" name="price" id="price" class="form-control" value="{{$prices->price}}">
                        @error('price')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror 
                    </div>
                </div>
                <div class="form-group">
                    <div class="col">
                        <label for="ingredient">Összetevők (, elválasztva!)</label>
                        <textarea class="form-control" name="ingredient" id="ingredient" cols="10" rows="10">{{$ingredients}}</textarea>
                        @error('ingredient')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                </div>
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
                    <div class="form-group">
                        <h3 class="py-2">Jelenlegi kép</h3>
                        <div class="admin-image">
                            <img src="{{asset("storage/$images->image_path")}}" alt="Kép">
                        </div>                            
                    </div>
                </div>
                <div class="card-footer">
                        <input type="submit" class="btn btn-modify" value="Módosítás">
                </div>
            </div>
            </form>
        </div>
    </section>