@isset($href)
    <a {{ $attributes->class(['btn']) }}>{{ $slot }}</a>
@else
    <button {{ $attributes->class(['btn']) }}>{{ $slot }}</button>
@endisset
