<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero-section">
    <div class="custom-container-left md:pl-6 lg:flex lg:items-center lg:justify-between lg:gap-16">
      <!-- Content -->
      <div class="mb-12 px-6 md:px-0 lg:mb-0 lg:w-2/5 lg:text-left">
        <!-- Badge -->
        <div class="mb-6 inline-flex items-center justify-center gap-3">
          <span class="text-xs tracking-widest uppercase md:text-sm">
            Modern Identity, Made Original
          </span>
        </div>

        <h1 class="mb-6 text-xl leading-tight font-medium md:text-3xl">
          Your One-Stop Shop for Printing and Branding Services in Nairobi
        </h1>

        <p class="mx-auto mb-10 max-w-xl leading-relaxed lg:mx-0">
          From business cards and promotional items to event branding and billboards.
        </p>

        <div class="flex justify-center gap-4 sm:flex-row lg:justify-start">
          <RouterLink
            to="/"
            class="btn-styling bg-[var(--secondary)] text-white hover:bg-[#001f2b]"
          >
            VIEW SERVICES
          </RouterLink>
          <RouterLink to="/" class="btn-styling bg-[var(--primary)] text-white hover:bg-[#a07a3d]">
            GET A QUOTE
          </RouterLink>
        </div>
      </div>

      <!-- Image -->
      <div class="relative lg:w-1/3">
        <div class="relative overflow-hidden rounded-lg shadow-2xl">
          <img
            src="@/assets/images/header-image.jpg"
            alt="Printing Services"
            class="aspect-[1] h-auto w-full transform object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background-color: var(--primary-background);
  //min-height: 85vh;
  display: flex;
  align-items: center;
}
</style>
