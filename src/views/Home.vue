<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <!-- Fisrt Section -->
    <section>
        <div class="w-full 2xl:h-200 h-140 bg-cover bg-center relative overflow-hidden"
            style="background-image: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0)), url('/src/assets/504062052_122144400866783934_8778848279602940787_n.jpg')">
            <div
                class="absolute inset-0 flex 2xl:items-center 2xl:justify-center 2xl:text-center lg:items-center lg:justify-center lg:text-center  items-start justify-center text-start flex-col gap-2.5 p-4">
                <div
                    class="flex flex-col 2xl:items-center items-start gap-3 2xl:max-w-6xl md:max-w-4xl max-w-5xl 2xl:pt-0 pt-20">
                    <div ref="con1" class="text-white bg-green-600 p-0.5 w-60 text-center rounded-2xl">Halamanerong
                        Islander
                    </div>
                    <h1 ref="con2"
                        class="text-white 2xl:text-7xl lg:text-5xl md:text-4xl text-4xl font-black leading-tight">Life
                        and Nature in
                        the Heart
                        of the Island
                    </h1>
                    <p ref="con3" class="text-white text-lg leading-relaxed">Welcome to Halamanerong Islander — a home
                        of thriving
                        vineyards and natural
                        living
                        nestled in the
                        heart of our community. Here, we plant life, and we nurture nature for the generations to come.
                    </p>
                    <div ref="con4"
                        class="text-white grid 2xl:grid-cols-2 grid-cols-1 gap-2.5 2xl:w-100 md:w-100 w-full">
                        <button class="bg-green-600 2xl:p-3 p-2.5 w-full rounded-2xl flex items-center justify-between">
                            <h1>Learn More</h1>
                            <Icon icon="circum:circle-chev-right" width="30" />
                        </button>
                        <button
                            class="bg-white border backdrop-blur-2xl text-gray-900 2xl:p-3 p-2.5 w-full rounded-2xl text-start 2xl:text-center">
                            <h1>Get in Touch</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- Second Section -->
    <section class="bg-[#e2fce2] min-h-200 flex items-center justify-center p-6 md:p-12">
        <div ref="container" class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <!-- Left Side: Image -->
            <div class="relative overflow-hidden rounded-2xl shadow-2xl h-80">
                <img src="/src/assets/504062052_122144400866783934_8778848279602940787_n.jpg" alt="Vineyard"
                    class="w-full h-80 object-cover lg:aspect-auto rounded-2xl" />
            </div>

            <div class="flex flex-col gap-8">
                <h2 class="text-[#3c4a43] text-3xl md:text-4xl font-black leading-tight">
                    Life and Nature in the <br> Heart of the Island
                </h2>

                <div class="flex flex-col gap-4">

                    <div ref="slide1" class=" bg-white p-5 rounded-2xl shadow-sm flex items-start gap-4">
                        <div
                            class="bg-[#70e08b] text-white font-black text-3xl w-12 h-12 flex items-center justify-center rounded-xl shrink-0">
                            1
                        </div>
                        <div>
                            <h3 class="text-green-700 font-bold text-lg">Our Story</h3>
                            <p class="text-gray-600 text-lg leading-relaxed">
                                Halamanerong Islander started with a simple dream to grow life in the land we call home.
                            </p>
                        </div>
                    </div>


                    <div ref="slide2" class=" bg-white p-5 rounded-2xl shadow-sm flex items-start gap-4">
                        <div
                            class="bg-[#70e08b] text-white font-black text-3xl w-12 h-12 flex items-center justify-center rounded-xl shrink-0">
                            2
                        </div>
                        <div>
                            <h3 class="text-green-700 font-bold text-lg">Our Vineyard</h3>
                            <p class="text-gray-600 text-lg leading-relaxed">
                                We tend a thriving vineyard with care and dedication, growing fresh grapes the natural
                                way.
                            </p>
                        </div>
                    </div>


                    <div ref="slide3" class=" bg-white p-5 rounded-2xl shadow-sm flex items-start gap-4">
                        <div
                            class="bg-[#70e08b] text-white font-black text-3xl w-12 h-12 flex items-center justify-center rounded-xl shrink-0">
                            3
                        </div>
                        <div>
                            <h3 class="text-green-700 font-bold text-lg">Our Mission</h3>
                            <p class="text-gray-600 text-lg leading-relaxed">
                                We share knowledge about organic farming and inspire others to embrace a greener way of
                                life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- Third Section -->
    <section class="bg-white 2xl:py-16 py-12 px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

            <div ref="box1" class=" bg-[#E3FFEA] p-10 rounded-[40px] shadow-sm flex flex-col gap-4 cursor-default">
                <h2 class="text-[#2d7a42] text-3xl font-black">Vineyard</h2>
                <p class="text-[#3c4a43] leading-relaxed text-lg">
                    We grow a variety of grapes cultivated through natural and sustainable farming methods — safe,
                    fresh, and packed with goodness straight from the earth.
                </p>
            </div>

            <div ref="box2" class=" bg-[#E3FFEA] p-10 rounded-[40px] shadow-sm flex flex-col gap-4 cursor-default">
                <h2 class="text-[#2d7a42] text-3xl font-black">Organic</h2>
                <p class="text-[#3c4a43] leading-relaxed text-lg">

                    We use all-natural methods to care for our plants — no harmful chemicals, just the pure and
                    wholesome gifts of nature.
                </p>
            </div>

            <div ref="box3" class=" bg-[#E3FFEA] p-10 rounded-[40px] shadow-sm flex flex-col gap-4 cursor-default">
                <h2 class="text-[#2d7a42] text-3xl font-black">Community</h2>
                <p class="text-[#3c4a43] leading-relaxed text-lg">

                    This is more than a farm — it's a mission. We share our knowledge and harvest with our neighbors to
                    help build a healthier and more sustainable community.
                </p>
            </div>

        </div>
    </section>



    <!-- Fourth Section -->
    <section class=" flex items-center justify-center 2xl:py-16 py-12 px-6">
        <div class="max-w-6xl mx-auto w-full grid grid-cols-1 gap-10">

            <div
                class="flex flex-col md:flex-row md:items-center md:justify-between items-start justify-start w-full gap-6">
                <h1 class="text-[#3c4a43] text-3xl md:text-5xl font-black leading-tight max-w-xl">
                    Life and Nature in the Heart of the Island
                </h1>
                <div class="text-white bg-green-500 py-1 px-6 text-center rounded-full shadow-md">
                    What it is all about?
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div ref="serv1"
                    class="p-6 shadow-xl border border-gray-100 flex flex-col gap-4 rounded-[30px] bg-white transition-all">
                    <!-- <div
                        class="bg-[#70e08b] text-white font-black text-3xl w-14 h-14 flex items-center justify-center rounded-2xl shrink-0 shadow-sm">
                        1
                    </div> -->
                    <h1 class="text-3xl font-black text-[#2d7a42]">Our Farm</h1>
                    <p class="leading-relaxed text-lg text-gray-600">
                        Our farm is more than just a place to grow plants — it is a space of learning, blessing, and
                        community that is open to everyone who wants to discover the beauty of nature.
                    </p>
                    <img class="w-full h-48 object-cover rounded-[20px] mt-2"
                        src="/src/assets/514041925_122145123086783934_7314259041562917189_n.jpg" alt="Our Farm Image">
                </div>
                <div ref="serv2"
                    class="p-6 shadow-xl border border-gray-100 flex flex-col gap-4 rounded-[30px] bg-white transition-all">
                    <!-- <div
                        class="bg-[#70e08b] text-white font-black text-3xl w-14 h-14 flex items-center justify-center rounded-2xl shrink-0 shadow-sm">
                        2
                    </div> -->
                    <h1 class="text-3xl font-black text-[#2d7a42]">Our Vineyard</h1>
                    <p class="leading-relaxed text-lg text-gray-600">
                        Experience the tranquility of our vineyard. A dedicated space for growth and the harvest of
                        nature's finest gifts, shared with the heart of the community.
                    </p>
                    <img class="w-full h-48 object-cover rounded-[20px] mt-2"
                        src="/src/assets/496179608_122144403836783934_8111404697149262332_n.jpg" alt="Vineyard Image">
                </div>
                <div ref="serv3"
                    class="p-6 shadow-xl border border-gray-100 flex flex-col gap-4 rounded-[30px] bg-white transition-all">
                    <!-- <div
                        class="bg-[#70e08b] text-white font-black text-3xl w-14 h-14 flex items-center justify-center rounded-2xl shrink-0 shadow-sm">
                        3
                    </div> -->
                    <h1 class="text-3xl font-black text-[#2d7a42]">Our Mission</h1>
                    <p class="leading-relaxed text-lg text-gray-600">
                        Beyond agriculture, our mission is to cultivate connection and inspiration. We aim to leave a
                        green legacy for the next generation of islanders.
                    </p>
                    <img class="w-full h-48 object-cover rounded-[20px] mt-2"
                        src="/src/assets/554081773_122159669798783934_3554266219846434126_n.jpg" alt="Mission Image">
                </div>
            </div>
        </div>
    </section>
</template>