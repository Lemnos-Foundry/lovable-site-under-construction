<script setup lang="ts">
import { productData } from '@/data/product-details'

const { header } = productData
</script>

<template>
  <section class="relative overflow-hidden bg-blue-50 py-16">
    <div class="container mx-auto flex items-center justify-between px-4 md:px-8">
      <!-- Text Content -->
      <div class="relative z-10 max-w-2xl">
        <nav class="mb-6 flex flex-wrap items-center text-sm text-gray-500">
          <template v-for="(crumb, index) in header.breadcrumbs" :key="index">
            <span v-if="index > 0" class="mx-2">&gt;</span>
            <span
              v-if="index === header.breadcrumbs.length - 1"
              class="rounded bg-white px-3 py-1 font-medium text-gray-900 shadow-sm"
            >
              {{ crumb.name }}
            </span>
            <router-link
              v-else
              :to="crumb.path"
              class="transition-colors hover:text-[var(--primary)]"
            >
              {{ crumb.name }}
            </router-link>
          </template>
        </nav>

        <h1 class="mb-6 text-4xl font-bold text-[var(--primary-text-color)] md:text-5xl">
          {{ header.title }}
        </h1>

        <p class="mb-8 text-lg leading-relaxed text-[var(--gray-text-color)] md:text-xl">
          {{ header.description }}
        </p>
      </div>

      <!-- Right Image (Placeholder or Specific Hero Image) -->
      <div class="relative hidden w-1/3 lg:block">
        <!-- Using a placeholder image for the hero, possibly reusing print.jpg or similar -->
        <img
          src="@/assets/images/print.jpg"
          alt="Business Cards Hero"
          class="h-auto w-full rotate-3 transform rounded-lg object-cover shadow-xl transition-transform duration-500 hover:rotate-0"
        />
      </div>
    </div>
  </section>
</template>
