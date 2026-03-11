<script setup lang="ts">
import { ref } from 'vue'
import { clothingPromo } from '@/data/clothing-promo'

const activeIndex = ref(0)

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % clothingPromo.length
}

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + clothingPromo.length) % clothingPromo.length
}
</script>

<template>
  <section class="relative h-[500px] overflow-hidden bg-gray-900">
    <!-- Background Slides -->
    <div
      v-for="(item, index) in clothingPromo"
      :key="item.title"
      class="absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out"
      :class="{ 'opacity-100': index === activeIndex, 'opacity-0': index !== activeIndex }"
    >
      <img :src="item.image" :alt="item.title" class="h-full w-full object-cover opacity-60" />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content Card -->
    <div
      class="relative z-10 container mx-auto flex h-full items-center justify-center px-4 md:justify-end"
    >
      <div class="animate-fade-in-up max-w-lg rounded-lg bg-white p-8 shadow-2xl md:p-12">
        <h2
          class="mb-4 text-3xl font-bold tracking-wide text-[var(--primary-text-color)] uppercase md:text-4xl"
        >
          {{ clothingPromo[activeIndex]?.title }}
        </h2>
        <p class="mb-8 text-lg leading-relaxed text-[var(--gray-text-color)]">
          {{ clothingPromo[activeIndex]?.description }}
        </p>

        <a
          :href="clothingPromo[activeIndex]?.link"
          class="inline-block rounded bg-[#002a3a] px-8 py-3 text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#001f2b] hover:shadow-lg"
        >
          SHOP {{ clothingPromo[activeIndex]?.title }}
        </a>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div
      class="pointer-events-none absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 transform justify-between px-4 md:px-8"
    >
      <button
        @click="prevSlide"
        class="pointer-events-auto rounded-full bg-white/80 p-3 shadow-lg transition-colors hover:bg-white active:scale-95"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="pointer-events-auto rounded-full bg-white/80 p-3 shadow-lg transition-colors hover:bg-white active:scale-95"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}
</style>
