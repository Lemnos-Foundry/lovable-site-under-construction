<script setup lang="ts">
import { brandingPrinting } from '@/data/branding-printing'
</script>

<template>
  <section class="bg-[#F4F5F5] py-20">
    <div class="custom-container mx-auto mb-16 px-4 text-center md:text-left">
      <h2 class="mb-6 text-3xl font-medium text-[var(--primary-text-color)] md:text-4xl">
        Branding & Printing Services
      </h2>
      <p class="max-w-3xl leading-relaxed text-[var(--gray-text-color)] xl:text-lg">
        Whether it's corporate stationery, event branding, or large-format printing, Mimo Branding
        makes your ideas tangible.
      </p>
    </div>

    <div class="custom-container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-2">
      <div
        v-for="service in brandingPrinting"
        :key="service.title"
        class="group overflow-hidden rounded-md border border-gray-100 bg-white transition-all duration-300 hover:shadow-md"
      >
        <div class="relative h-64 overflow-hidden sm:h-72">
          <img
            :src="service.image"
            :alt="service.title"
            class="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <!-- Overlay gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 transition-opacity group-hover:opacity-40"
          ></div>
        </div>

        <div class="p-8">
          <div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h3 class="text-xl font-medium text-[var(--primary-text-color)] transition-colors">
              {{ service.title }}
            </h3>
          </div>

          <div class="flex items-center justify-between gap-4">
            <p class="overflow-hidden text-base leading-relaxed text-[var(--gray-text-color)]">
              {{ service.description }}
            </p>

            <button>
              <a
                :href="service.link"
                class="inline-block transform rounded bg-[var(--secondary)] px-8 py-3 text-sm tracking-wider text-white uppercase shadow-md transition-colors hover:bg-[#001f2b] hover:shadow-lg"
              >
                SHOP
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
