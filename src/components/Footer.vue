<script>
import { Icon } from '@iconify/vue';
</script>

<template>
    <!-- footer -->
    <footer class="bg-[#248232] text-white pt-12 pb-6 px-6 font-sans">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-3">
                    <img class="h-12 w-12 rounded-full object-cover shadow-sm" src="/src/assets/edited-photo.png"
                        alt="">
                    <h1 class="font-black leading-tight text-sm uppercase">
                        Halamanerong <br> Islander
                    </h1>
                </div>
                <p class="text-lg opacity-90">
                    Pagandahin ang environment sa ating kapaligiran
                </p>
            </div>
            <div>
                <h3 class="font-bold mb-5 text-lg">Navigation</h3>
                <ul class="flex flex-col gap-3 text-lg opacity-80">
                    <li><a href="#" class="hover:opacity-100 transition-opacity">Home</a></li>
                    <li><a href="#" class="hover:opacity-100 transition-opacity">About</a></li>
                    <li><a href="#" class="hover:opacity-100 transition-opacity">What we do?</a></li>
                    <li><a href="#" class="hover:opacity-100 transition-opacity">Contact</a></li>
                </ul>
            </div>


            <div>
                <h3 class="font-bold mb-5 text-lg">Contact information</h3>
                <div class="text-lg opacity-80 flex flex-col gap-4">
                    <p class="leading-relaxed">
                        Barangay Kaytome Talim Island <br>
                        Binangonan Rizal, Binangonan, <br>
                        Philippines, 1940
                    </p>
                    <p class="font-semibold text-base">0933 815 7125</p>
                </div>
            </div>
            <div>
                <h3 class="font-bold mb-5 text-lg">Follow Us</h3>
                <div class="flex gap-4">
                    <a href="#" class="hover:scale-110 transition-transform">
                        <Icon icon="ri:facebook-fill" width="28" />
                    </a>
                    <a href="#" class="hover:scale-110 transition-transform">
                        <Icon icon="ri:instagram-line" width="28" />
                    </a>
                    <a href="#" class="hover:scale-110 transition-transform">
                        <Icon icon="ri:youtube-fill" width="28" />
                    </a>
                </div>
            </div>
        </div>
        <div
            class="max-w-7xl mx-auto pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-70">
            <p>©2026 Halamanerong Islander. All right reserve</p>
            <div class="flex gap-6">
                <a href="#" class="hover:underline">Privacy Policy</a>
                <a href="#" class="hover:underline">Terms Of Serves</a>
            </div>
        </div>
    </footer>
</template>