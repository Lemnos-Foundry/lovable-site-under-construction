<script setup lang="ts">
import { brochures } from '@/data/brochures'
import { ref } from 'vue'

const scrollContainer = ref<HTMLElement | null>(null)

const scrollLeft = () => {
  if (scrollContainer.value) {
    const width = scrollContainer.value.clientWidth
    if (scrollContainer.value.scrollLeft <= 10) {
      // If at the beginning, scroll to the last one
      const maxScroll = scrollContainer.value.scrollWidth - width
      scrollContainer.value.scrollTo({ left: maxScroll, behavior: 'smooth' })
    } else {
      scrollContainer.value.scrollBy({ left: -width, behavior: 'smooth' })
    }
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    const width = scrollContainer.value.clientWidth
    const maxScroll = scrollContainer.value.scrollWidth - width
    if (scrollContainer.value.scrollLeft >= maxScroll - 10) {
      // If at the end, scroll to the first one
      scrollContainer.value.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      scrollContainer.value.scrollBy({ left: width, behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <section class="relative w-full overflow-hidden bg-[var(--primary-background)]">
    <!-- Carousel Wrapper -->
    <div class="relative flex w-full items-center">
      <!-- Scroll Container -->
      <div
        ref="scrollContainer"
        class="scrollbar-hide flex w-full snap-x snap-mandatory overflow-x-auto"
      >
        <!-- Carousel Items -->
        <div
          v-for="(item, index) in brochures"
          :key="index"
          class="relative w-full flex-shrink-0 snap-center"
        >
          <!-- Background Image -->
          <div class="relative h-[500px] w-full md:h-[600px] lg:h-[700px]">
            <img
              :src="item.image"
              :alt="item.title"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <!-- Subtle dark overlay for better text contrast if needed -->
            <div class="absolute inset-0 bg-black/5"></div>
          </div>

          <!-- Content Card Container overlay -->
          <!-- On mobile, add padding bottom so the card doesn't overlap the buttons -->
          <div
            class="absolute inset-0 flex items-center justify-center px-4 pb-24 sm:justify-end sm:pr-16 sm:pb-0 md:pr-24 lg:container lg:mx-auto lg:px-8 lg:pr-32"
          >
            <div class="w-full max-w-lg bg-white p-8 shadow-2xl md:p-12">
              <h2 class="mb-3 text-3xl font-semibold text-[var(--primary-text-color)] md:text-4xl">
                {{ item.title }}
              </h2>
              <p class="mb-8 text-base text-[var(--primary-text-color)] md:text-lg">
                {{ item.description }}
              </p>
              <a
                :href="item.link"
                class="inline-block bg-[var(--secondary)] px-8 py-3.5 text-center text-sm font-semibold tracking-wider text-white uppercase transition-colors duration-300 hover:bg-[var(--primary)]"
              >
                Shop {{ item.title }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <div
        class="pointer-events-none absolute right-0 bottom-8 left-0 z-10 flex justify-center gap-4 px-4 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:justify-between md:px-8 lg:container lg:mx-auto lg:px-4"
      >
        <button
          @click="scrollLeft"
          class="pointer-events-auto rounded-full bg-white p-3 text-[var(--secondary)] shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 md:p-4"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>

        <button
          @click="scrollRight"
          class="pointer-events-auto rounded-full bg-white p-3 text-[var(--secondary)] shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 md:p-4"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 md:h-6 md:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
