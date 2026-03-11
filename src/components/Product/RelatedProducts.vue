<script setup lang="ts">
import { productData } from '@/data/product-details'

const { related } = productData
</script>

<template>
  <section class="border-t border-gray-200 bg-gray-50 py-16">
    <div class="container mx-auto mb-8 flex items-center justify-between px-4 md:px-8">
      <h2 class="text-3xl font-bold text-[var(--primary-text-color)] md:text-4xl">
        Related Products
      </h2>

      <div class="flex gap-2">
        <button class="rounded-full bg-white p-3 shadow transition-colors hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-500"
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
          class="rounded-full bg-[#002a3a] p-3 text-white shadow transition-colors hover:bg-[#001f2b]"
        >
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="container mx-auto grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4"
    >
      <div
        v-for="item in related"
        :key="item.id"
        class="group flex transform flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div class="relative h-48 overflow-hidden bg-gray-100">
          <img
            :src="item.image"
            :alt="item.name"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div class="flex flex-grow flex-col p-6">
          <h3 class="mb-2 text-xl font-bold text-[var(--primary-text-color)]">{{ item.name }}</h3>
          <p class="mb-4 line-clamp-2 flex-grow text-sm text-[var(--gray-text-color)]">
            Description of item
          </p>
          <div>
            <button
              class="rounded bg-[#002a3a] px-6 py-2 text-xs font-bold tracking-wider text-white uppercase shadow-md transition-colors hover:bg-[#001f2b]"
            >
              SHOP
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
