@extends('..layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div id="customer_panel"></div>
            <script src="{{ asset('js/customer_app.js') }}"></script>
        </div>
    </div>
@endsection