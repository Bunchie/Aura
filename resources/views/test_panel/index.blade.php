@extends('../layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div id="test_panel"></div>
            <script src="{{ asset('js/test_app.js') }}"></script>
        </div>
    </div>
@endsection