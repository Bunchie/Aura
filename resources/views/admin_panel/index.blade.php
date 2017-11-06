@extends('..layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div id="admin_panel"></div>
            <script src="{{ asset('js/admin_app.js') }}"></script>
        </div>
    </div>
@endsection