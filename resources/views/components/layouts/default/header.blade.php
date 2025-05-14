<div
    x-data="MainNavScrollPeek"
    x-bind:class="isVisible ? 'translate-y-0' : '-translate-y-full'"
    class="fixed top-0 z-10 w-full transition-all duration-300 ease-in-out"
>
    <x-nav.main />
</div>
