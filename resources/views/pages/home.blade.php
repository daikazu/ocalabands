@seoTitle('Ocala Bands')
@seoDescription('')
@seoImage(asset(config('app.default_social_image')))
@seoRobots('index,follow')

<x-layouts.default>
    <x-slot:main>
        <!-- Hero Section -->
        <section class="hero-home relative flex h-[85vh] items-center justify-center overflow-hidden">
            <div class="isolate container mx-auto animate-jump-in px-4 animate-duration-1000 animate-ease-out">
                <div class="mx-auto max-w-3xl text-center">
                    <h1 class="mb-4 text-4xl font-black text-shadow-neutral-950 text-shadow-sm md:text-6xl">
                        <span class="animate-pulse-glow neon-glow-text">LIVE</span>
                        MUSIC IN OCALA
                    </h1>
                    <p class="mb-8 text-xl font-medium text-neutral-50 text-shadow-sm md:text-2xl">
                        {{ config('website.description') }}
                    </p>
                    <div class="flex flex-col justify-center gap-4 sm:flex-row">
                        <x-button class="btn-accent">Upcoming Shows</x-button>
                        <x-button class="btn-secondary-outline">
                            <x-lucide-search class="btn-icon" />

                            Find A Band
                        </x-button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->

        <x-utilities.tailwindcss-typology />
    </x-slot>
</x-layouts.default>
