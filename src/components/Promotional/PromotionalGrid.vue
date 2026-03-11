<script setup lang="ts">
import { ref } from 'vue'
import { topCategories, sidebarFilters } from '@/data/promotional-filters'
import { promotionalProducts } from '@/data/promotional-products'

const isMobileFiltersOpen = ref(false)

const toggleMobileFilters = () => {
  isMobileFiltersOpen.value = !isMobileFiltersOpen.value
}
</script>

<template>
  <section class="bg-white py-12">
    <div class="container mx-auto px-4">
      <!-- Top Categories (Tabs) -->
      <div class="scrollbar-hide mb-10 overflow-x-auto pb-4">
        <div class="flex min-w-max items-center gap-4">
          <button
            v-for="category in topCategories"
            :key="category"
            class="rounded-lg border border-transparent px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors hover:border-gray-200 hover:bg-gray-100"
            :class="{ 'border-gray-200 bg-gray-100 font-bold': category === 'Technology' }"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-12 lg:flex-row">
        <!-- Sidebar Filters -->
        <aside class="w-full flex-shrink-0 lg:w-1/4">
          <!-- Mobile Filter Toggle -->
          <div class="mb-6 lg:hidden">
            <button
              @click="toggleMobileFilters"
              class="flex w-full items-center justify-center gap-2 rounded border border-gray-300 py-3 text-sm font-bold tracking-wider uppercase transition-colors hover:bg-gray-50"
            >
              FILTER
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </button>
          </div>

          <!-- Filters Content (Desktop: Always visible / Mobile: Collapsible) -->
          <div
            :class="{ 'hidden lg:block': !isMobileFiltersOpen, block: isMobileFiltersOpen }"
            class="space-y-6"
          >
            <div class="mb-4 flex items-center justify-between lg:hidden">
              <h3 class="text-lg font-bold">Filters</h3>
              <button @click="toggleMobileFilters" class="text-gray-500 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div
              v-for="(section, index) in sidebarFilters"
              :key="index"
              class="border-b border-gray-200 pb-4 last:border-0"
            >
              <button
                class="flex w-full items-center justify-between py-2 text-lg font-medium transition-colors hover:text-[var(--primary)]"
              >
                <span>{{ section.name }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 transform transition-transform duration-300"
                  :class="{ 'rotate-180': section.isOpen }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <!-- Placeholder for expanded content logic if I were implementing full interactivity -->
              <!-- For now, assuming static 'isOpen' from data or user interaction would toggle this -->
              <ul class="mt-2 space-y-2 pl-2">
                <li v-for="option in section.options" :key="option">
                  <a
                    href="#"
                    class="block py-1 text-sm text-gray-600 transition-colors hover:text-[var(--primary)]"
                  >
                    {{ option }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <!-- Product Grid -->
        <main class="w-full lg:w-3/4">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div
              v-for="product in promotionalProducts"
              :key="product.title"
              class="group flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg"
            >
              <div class="relative aspect-[4/3] overflow-hidden">
                <img
                  :src="product.image"
                  :alt="product.title"
                  class="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div class="flex flex-grow flex-col p-6">
                <h3 class="mb-2 text-2xl font-bold text-[var(--primary-text-color)]">
                  {{ product.title }}
                </h3>
                <p class="mb-6 flex-grow text-sm text-[var(--gray-text-color)]">
                  {{ product.description }}
                </p>

                <div>
                  <a
                    :href="product.link"
                    class="inline-block rounded bg-[#002a3a] px-6 py-2 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#001f2b]"
                  >
                    SHOP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
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
