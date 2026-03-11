<script setup lang="ts">
import HomeHero from '@/components/Home/HomeHero.vue'
import HomeTrustedBy from '@/components/Home/HomeTrustedBy.vue'
import HomeServices from '@/components/Home/HomeServices.vue'
import HomeBrochures from '@/components/Home/HomeBrochures.vue'
import HomeInsights from '@/components/Home/HomeInsights.vue'
import HomeCallToAction from '@/components/Home/HomeCallToAction.vue'
</script>

<template>
  <div class="home-page">
    <HomeHero />
    <HomeTrustedBy />
    <HomeServices />
    <HomeBrochures />
    <HomeCallToAction />
    <HomeInsights />
  </div>
</template>

<style scoped>
/* Components handle their own styling */
</style>
