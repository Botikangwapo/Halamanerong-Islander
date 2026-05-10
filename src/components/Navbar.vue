<script setup>
import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isOpen = ref(false)


</script>

<template>
  <div>
    <!-- HEADER -->
    <header class="flex items-center justify-center w-full z-50 fixed top-0 bg-white border-b border-gray-100 h-16">
      <div class="2xl:w-[90%] w-full flex items-center justify-between px-6">

        <!-- Logo Section -->
        <div class="flex items-center gap-2.5">
          <img class="h-12 w-12 rounded-full object-cover shadow-sm" src="/src/assets/edited-photo.png" alt="Logo">
          <h1 class="text-green-700 font-medium text-sm leading-tight tracking-wider">
            Halamanerong <br> Islander
          </h1>
        </div>

        <!-- DESKTOP NAV -->
        <nav class="hidden md:block">
          <ul class="flex gap-8 font-medium text-gray-700">
            <li>
              <RouterLink to="/" class="hover:text-green-600 transition-colors [&.router-link-active]:text-green-700 ">
                Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/About"
                class="hover:text-green-600 transition-colors [&.router-link-active]:text-green-700 ">
                About Us</RouterLink>
            </li>
            <li>
              <RouterLink to="/WhatWeDo"
                class="hover:text-green-600 transition-colors [&.router-link-active]:text-green-700">
                What We Do</RouterLink>
            </li>
            <li>
              <RouterLink to="/Contact"
                class="hover:text-green-600 transition-colors [&.router-link-active]:text-green-700">
                Contact Us</RouterLink>
            </li>
            <li>
              <RouterLink to="/fqa"
                class="hover:text-green-600 transition-colors [&.router-link-active]:text-green-700">
                Frequently Ask Question</RouterLink>
            </li>
          </ul>
        </nav>

        <!-- MOBILE BURGER ICON -->
        <div class="md:hidden flex items-center">
          <button @click="isOpen = true" class="text-gray-700 hover:text-green-700 transition">
            <Icon icon="uit:align-left" width="32" />
          </button>
        </div>
      </div>
    </header>

    <!-- MOBILE SIDEBAR -->
    <div class="md:hidden">
      <!-- Background Overlay -->
      <Transition enter-active-class="transition-opacity duration-200 ease-linear" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition-opacity duration-300 ease-linear"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 bg-gray-950/40 backdrop-blur-lg z-60"></div>
      </Transition>

      <!-- Sidebar Menu -->
      <Transition enter-active-class="transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
        enter-from-class="-translate-x-full" enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]"
        leave-from-class="translate-x-0" leave-to-class="-translate-x-full">
        <aside v-if="isOpen"
          class="fixed top-0 left-0 h-full w-80 bg-white z-70 shadow-2xl p-6 flex flex-col rounded-tr-2xl rounded-br-2xl">
          <div class="flex justify-between items-center mb-10">
            <div class="flex items-center gap-2">
              <img class="h-10 w-10 rounded-full" src="/src/assets/edited-photo.png" alt="">
              <span class="font-bold text-green-700 text-sm">MENU</span>
            </div>
            <button @click="isOpen = false" class="text-gray-400 hover:text-red-500 transition">
              <Icon icon="material-symbols:close-rounded" width="28" />
            </button>
          </div>

          <nav>
            <ul class="flex flex-col gap-6 font-medium text-gray-800">
              <li>
                <RouterLink to="/" @click="isOpen = false"
                  class="hover:text-green-700 [&.router-link-active]:text-green-700">
                  Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/About" @click="isOpen = false"
                  class="hover:text-green-700 [&.router-link-active]:text-green-700">
                  About Us</RouterLink>
              </li>
              <li>
                <RouterLink to="/WhatWeDo" @click="isOpen = false"
                  class="hover:text-green-700 [&.router-link-active]:text-green-700">
                  What We Do</RouterLink>
              </li>
              <li>
                <RouterLink to="/Contact" @click="isOpen = false"
                  class="hover:text-green-700 [&.router-link-active]:text-green-700">
                  Contact Us</RouterLink>
              </li>
              <li>
                <RouterLink @click="isOpen = false" to="/fqa"
                  class="hover:text-green-700 [&.router-link-active]:text-green-700">
                  Frequently Ask Question</RouterLink>
              </li>
            </ul>
          </nav>
          <div class="mt-auto pb-6 text-xs text-gray-400">
            © 2026 Halamanerong Islander
          </div>
        </aside>
      </Transition>
    </div>
  </div>
</template>


<style scoped></style>