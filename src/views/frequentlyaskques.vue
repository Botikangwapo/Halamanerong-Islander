<template>
  <section class="bg-white py-30 px-6 md:px-12 lg:px-24">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <p class="text-slate-600">May mga katanungan ba kayo tungkol sa aming farm at mga produkto? Narito ang mga sagot.</p>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
          :class="{'ring-2 ring-[#76e08d] border-transparent': activeIndex === index}"
        >
          <button 
            @click="toggleFAQ(index)"
            class="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-slate-50 transition-colors"
          >
            <span class="font-semibold text-slate-800 text-lg">{{ faq.question }}</span>
            <span 
              class="transform transition-transform duration-300 text-[#2d8a45]"
              :class="{'rotate-180': activeIndex === index}"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <div 
            v-show="activeIndex === index"
            class="p-6 pt-0 text-slate-600 leading-relaxed bg-white"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const faqs = ref([
  {
    question: "Anong klaseng ubas ang tinatanim niyo?",
    answer: "Kami ay nagtatanim ng iba't ibang varieties na hiyang sa klima ng Pilipinas, kabilang ang aming signature sweet table grapes at experimental wine grapes."
  },
  {
    question: "Kailan ang best time bumisita para sa fruit picking?",
    answer: "Ang aming harvest season ay karaniwang tumatama sa mga buwan ng Marso hanggang Mayo. Maigi na i-check ang aming Facebook page para sa official harvest announcements."
  },
  {
    question: "Open ba ang farm para sa mga school field trips?",
    answer: "Opo! Layunin naming makatulong sa edukasyon tungkol sa agrikultura. Maaari niyo kaming i-message para sa scheduling ng group tours at educational walkthroughs."
  },
  {
    question: "Gumagamit ba kayo ng pesticides?",
    answer: "Naniniwala kami sa sustainable farming. Hangga't maaari, gumagamit kami ng organic fertilizers at natural pest control methods para masiguro na ligtas at healthy ang aming mga ubas."
  },
  {
    question: "Saan matatagpuan ang Halamanerong Islander?",
    answer: "Matatagpuan kami sa gitna ng isla, napapalibutan ng kalikasan. Maaari niyo kaming hanapin sa Google Maps para sa eksaktong direksyon."
  }
]);

const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
/* Optional: Dagdagan ng smooth transition kung hindi sapat ang v-show */
.v-enter-active, .v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>