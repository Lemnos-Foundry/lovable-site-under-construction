<script setup lang="ts">
import { beyondPrint } from '@/data/beyond-print'
</script>

<template>
  <section class="bg-gray-50 py-24">
    <div class="custom-container">
      <!-- Header Section -->
      <div
        class="mb-12 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end"
      >
        <div class="max-w-xl">
          <h2
            class="relative mb-6 inline-block text-3xl font-semibold text-[var(--primary-text-color)] md:text-4xl"
          >
            Beyond the Print
          </h2>
          <p class="mt-2 text-base text-[var(--gray-text-color)] md:text-lg">
            Fresh ideas, success stories and expert tips on building a bold brand identity in
            Nairobi.
          </p>
        </div>
        <a
          href="#"
          class="hidden rounded bg-[#002a3a] px-8 py-2.5 text-sm tracking-wider text-white transition-colors hover:bg-black md:inline-block"
        >
          VIEW ALL
        </a>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div
          v-for="item in beyondPrint"
          :key="item.title"
          class="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
        >
          <!-- Card Image -->
          <div class="h-48 w-full overflow-hidden sm:h-56">
            <img
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <!-- Card Content -->
          <div class="flex flex-col p-6">
            <h3
              class="mb-3 text-lg leading-snug font-semibold text-[var(--primary-text-color)] sm:text-xl"
            >
              {{ item.title }}
            </h3>
            <p class="text-sm leading-relaxed text-[var(--gray-text-color)]">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile View All Button -->
      <div class="mt-8 text-center md:hidden">
        <a
          href="#"
          class="inline-block rounded bg-[#002a3a] px-8 py-3 text-sm tracking-wider text-white transition-colors hover:bg-black"
        >
          VIEW ALL
        </a>
      </div>
    </div>
  </section>
</template>
