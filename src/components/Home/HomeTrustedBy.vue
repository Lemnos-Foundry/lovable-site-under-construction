<script setup lang="ts">
import { trustedBy } from '@/data/trusted-by'
</script>

<template>
  <section
    class="custom-container overflow-hidden border-b border-gray-100 bg-white py-16 text-center"
  >
    <div class="container mx-auto mb-10 px-4">
      <h3 class="text-sm tracking-widest uppercase">TRUSTED BY</h3>
    </div>

    <div class="marquee-container">
      <div class="marquee-track">
        <div class="marquee-group">
          <div v-for="company in trustedBy" :key="company.name" class="marquee-item">
            <img
              v-if="company.logo"
              :src="company.logo"
              :alt="company.name"
              class="h-10 w-auto max-w-full object-contain md:h-12"
            />
            <span
              v-else
              class="text-sm font-bold tracking-wider text-gray-400 uppercase md:text-base"
            >
              {{ company.name }}
            </span>
          </div>
        </div>
        <div class="marquee-group">
          <div v-for="company in trustedBy" :key="`${company.name}-dup`" class="marquee-item">
            <img
              v-if="company.logo"
              :src="company.logo"
              :alt="company.name"
              class="h-10 w-auto max-w-full object-contain md:h-12"
            />
            <span
              v-else
              class="text-sm font-bold tracking-wider text-gray-400 uppercase md:text-base"
            >
              {{ company.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-container {
  overflow: hidden;
  //mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  //animation: marquee 30s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-group {
  display: flex;
  flex-shrink: 0;
  gap: 4rem;
  padding-right: 4rem;
}

.marquee-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
