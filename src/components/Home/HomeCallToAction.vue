<script setup lang="ts">
// Using quote.jpg or another suitable image as a placeholder for the right side
import ctaImage from '@/assets/images/quote.jpg'
</script>

<template>
  <section class="w-full py-16 md:py-24">
    <div class="custom-container">
      <div
        class="flex w-full flex-col overflow-hidden rounded-lg bg-[var(--primary-background)] md:flex-row"
      >
        <!-- Text & Action Content -->
        <div
          class="flex w-full flex-col items-center justify-center p-8 text-center md:w-1/2 md:p-12 lg:p-16"
        >
          <h2 class="mb-4 text-3xl font-semibold text-[var(--primary-text-color)] md:text-4xl">
            Not Sure Where to Start?
          </h2>
          <p
            class="mb-8 max-w-md text-base leading-relaxed text-[var(--primary-text-color)] md:text-lg"
          >
            No worries—we'll guide you. Tell us your idea and we'll recommend the best branding or
            printing solution for your business
          </p>

          <!-- Buttons -->
          <div class="flex w-full flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="/"
              class="inline-block w-full rounded-md bg-[var(--secondary)] px-8 py-3.5 text-center text-sm tracking-wider text-white uppercase transition-opacity duration-300 hover:opacity-90 sm:w-auto"
            >
              Contact Us
            </a>
            <a
              href="/"
              class="inline-block w-full rounded-md bg-[#b78e4a] px-8 py-3.5 text-center text-sm tracking-wider text-white uppercase transition-opacity duration-300 hover:opacity-90 sm:w-auto"
            >
              Get a Quote
            </a>
          </div>
        </div>

        <!-- Image Content -->
        <div class="hidden w-full md:block md:w-1/2">
          <img
            :src="ctaImage"
            alt="Customer Support Representative"
            class="h-64 w-full object-cover md:h-full md:min-h-[400px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
