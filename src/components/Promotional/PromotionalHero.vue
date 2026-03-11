<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="relative overflow-hidden bg-blue-50">
    <div
      class="container mx-auto px-4 py-16 md:px-8 md:py-20 lg:flex lg:items-center lg:justify-between"
    >
      <!-- Text Content -->
      <div class="relative z-10 mb-10 lg:mb-0 lg:w-1/2">
        <nav class="mb-6 flex items-center text-sm text-gray-500">
          <RouterLink to="/" class="transition-colors hover:text-[var(--primary)]">Home</RouterLink>
          <span class="mx-2">&gt;</span>
          <span class="rounded bg-white px-3 py-1 font-medium text-gray-900 shadow-sm"
            >Promotional Products</span
          >
        </nav>

        <h1
          class="mb-6 text-4xl font-bold text-[var(--primary-text-color)] md:text-5xl lg:text-6xl"
        >
          Promotional Products
        </h1>

        <p class="mb-8 max-w-xl text-lg leading-relaxed text-[var(--gray-text-color)] md:text-xl">
          Explore our wide range of custom promotional items – from drinkware to tech essentials.
          Perfect for every occasion.
        </p>

        <button
          class="rounded bg-[#002a3a] px-10 py-4 text-sm font-bold tracking-wider text-white uppercase shadow-lg transition-colors hover:bg-[#001f2b]"
        >
          VIEW ALL
        </button>
      </div>

      <!-- Image Content (Collage) -->
      <div class="relative flex justify-end lg:w-1/2">
        <div class="relative w-full max-w-2xl">
          <!-- Main Image -->
          <img
            src="@/assets/images/promotional-items.jpg"
            alt="Promotional Products Collage"
            class="h-auto w-full rotate-1 transform rounded-lg object-cover shadow-2xl transition-transform duration-500 hover:rotate-0"
          />

          <!-- Decorative Elements -->
          <div
            class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[var(--primary)] opacity-10 blur-3xl"
          ></div>
          <div
            class="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-300 opacity-10 blur-3xl"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
