<template>
    <section class="w-full 2xl:h-150 h-80 overflow-hidden bg-center bg-cover"
        style="background-image: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url('/src/assets/554081773_122159669798783934_3554266219846434126_n.jpg')">
    </section>
    <section class="bg-[#e2fce2] py-16 px-6 md:px-12 lg:px-24">
        <div class="max-w-7xl mx-auto">
            <div ref="sectionTitle" class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                    <span class="text-green-800 font-medium text-sm">Who We Are</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-4">
                        Life and Nature in the <br class="hidden md:block"> Heart of the Island
                    </h2>
                    <button class="bg-green-500 text-white px-6 py-2 rounded-lg font-medium ">
                        Discover More
                    </button>
                </div>
                <div>
                    <p class="text-slate-700 text-lg leading-relaxed">
                        Halamanerong Islander is a community farm with a passion for growing grapes and nurturing
                        nature.
                        We are committed to sustainable and organic farming practices that protect our environment
                        while providing fresh, natural produce for our community. Everything we grow is tended with
                        care,
                        dedication, and a deep love for the land.
                    </p>
                </div>
            </div>
            <div ref="cardsContainer" class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div class="rounded-2xl overflow-hidden shadow-lg">
                    <img src="/src/assets/504062052_122144400866783934_8778848279602940787_n.jpg" alt="Farm Grapes"
                        class="w-full h-100 object-cover" />
                </div>
                <div class="space-y-6">
                    <div class="bg-[#abf7bb] p-8 rounded-3xl shadow-sm">
                        <h3 class="font-bold text-slate-800 mb-2">About Our Farm</h3>
                        <p class="text-slate-700 text-lg">
                            We cultivate our vineyard using natural and sustainable methods,
                            ensuring that every grape we harvest is fresh, healthy, and grown
                            with respect for the environment.
                        </p>
                    </div>
                    <div class="bg-white/50 p-8 rounded-3xl border border-white">
                        <h3 class="font-bold text-slate-800 mb-2">Our Purpose</h3>
                        <p class="text-slate-700 text-lg">
                            We are more than just a farm — we are a community that believes
                            in sharing knowledge, inspiring others, and building a greener
                            and healthier future for everyone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="2xl:h-180 h-auto flex items-center p-6">
        <div class="max-w-7xl mx-auto grid 2xl:grid-cols-2 grid-cols-1 gap-5">
            <div class=" 2xl:order-1 order-2">
                <h1 class="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-4">Our Chairman</h1>
                <p class="text-slate-700 text-lg leading-relaxed">
                    Halamanerong Islander is a community farm with a passion for growing grapes and nurturing
                    nature.
                    We are committed to sustainable and organic farming practices that protect our environment
                    while providing fresh, natural produce for our community. Everything we grow is tended with
                    care,
                    dedication, and a deep love for the land.
                </p>
            </div>
            <div class="shadow-lg rounded-2xl 2xl:w-150 w-full 2xl:order-2 order-1">
                <img class="rounded-2xl 2xl:w-150 2xl:h-150 w-full h-full object-cover block"
                    src="/src/assets/Gemini_Generated_Image_ga8vdxga8vdxga8v(1).png" alt="">
            </div>
        </div>
    </section>
</template>