<script setup lang="ts">
import { ref } from 'vue'
import { productData } from '@/data/product-details'

const { details } = productData
const activeTab = ref(details.tabs[0]?.id || '')
const activeAccordion = ref<number | null>(0)
const activeImageIndex = ref(0)

const setActiveTab = (id: string) => {
  activeTab.value = id
}

const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? null : index
}

const setActiveImage = (index: number) => {
  activeImageIndex.value = index
}
</script>

<template>
  <section class="bg-white py-16">
    <div class="container mx-auto px-4 md:px-8 lg:flex lg:gap-16">
      <!-- Left: Image Gallery -->
      <div class="mb-12 lg:mb-0 lg:w-1/2">
        <div class="relative mb-6 aspect-square overflow-hidden rounded-lg bg-gray-100 shadow-2xl">
          <img
            :src="details.images[activeImageIndex]"
            :alt="details.name"
            class="h-full w-full cursor-zoom-in object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div class="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
          <button
            v-for="(image, index) in details.images"
            :key="index"
            @click="setActiveImage(index)"
            class="h-20 w-20 flex-shrink-0 transform overflow-hidden rounded-lg border-2 transition-all duration-300 hover:scale-105 md:h-24 md:w-24"
            :class="
              activeImageIndex === index
                ? 'ring-opacity-50 border-[var(--primary)] ring-2 ring-[var(--primary)]'
                : 'border-gray-200 opacity-70 hover:opacity-100'
            "
          >
            <img :src="image" :alt="details.name" class="h-full w-full object-cover" />
          </button>
        </div>

        <div class="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            class="flex-1 rounded bg-[#002a3a] py-4 font-bold tracking-wider text-white uppercase shadow-lg transition-colors hover:bg-[#001f2b]"
          >
            GET A QUOTE
          </button>
          <button
            class="flex-1 rounded bg-[#c39c63] py-4 font-bold tracking-wider text-white uppercase shadow-lg transition-colors hover:bg-[#a07a3d]"
          >
            CONTACT TEAM
          </button>
        </div>

        <div
          class="mt-6 flex flex-col gap-2 rounded-lg border border-gray-100 bg-gray-50 p-4 text-sm text-gray-600"
        >
          <p class="flex items-center gap-2">
            <span class="font-bold text-green-600">✓</span>
            Get it as soon as <span class="font-bold text-gray-900">Thursday, Oct 30th</span>
          </p>
          <p class="flex items-center gap-2">
            <span class="font-bold text-green-600">✓</span>
            Free shipping on orders over <span class="font-bold text-gray-900">Ksh 10,000</span>
          </p>
        </div>
      </div>

      <!-- Right: Product Info & Tabs -->
      <div class="lg:w-1/2">
        <h2 class="mb-8 text-3xl font-bold text-[var(--primary-text-color)] md:text-4xl">
          {{ details.name }}
        </h2>

        <!-- Tabs Header -->
        <div class="scrollbar-hide mb-8 flex overflow-x-auto border-b border-gray-200">
          <button
            v-for="tab in details.tabs"
            :key="tab.id"
            @click="setActiveTab(tab.id)"
            class="border-b-2 px-6 py-3 text-sm font-bold tracking-wider whitespace-nowrap uppercase transition-colors"
            :class="
              activeTab === tab.id
                ? 'rounded-t-lg border-[var(--primary)] bg-gray-50 text-[var(--primary)]'
                : 'rounded-t-lg border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900'
            "
          >
            {{ tab.label }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="min-h-[300px] transition-all duration-300">
          <!-- Description Tab -->
          <div v-if="activeTab === 'description'" class="animate-fade-in">
            <h3 class="mb-4 text-xl font-bold text-[var(--primary-text-color)]">Description</h3>
            <p class="text-lg leading-loose text-[var(--gray-text-color)]">
              {{ details.description }}
            </p>
          </div>

          <!-- Additional Info Tab (Accordion) -->
          <div v-if="activeTab === 'additional'" class="animate-fade-in">
            <div class="space-y-4">
              <div
                v-for="(item, index) in details.tabs.find((t) => t.id === 'additional')?.accordion"
                :key="index"
                class="overflow-hidden rounded-lg border border-gray-200 transition-all duration-300 hover:border-gray-300"
                :class="{ 'shadow-md': activeAccordion === index }"
              >
                <button
                  @click="toggleAccordion(index)"
                  class="flex w-full items-center justify-between bg-white p-5 text-left text-lg font-medium transition-colors hover:bg-gray-50"
                >
                  {{ item.title }}
                  <span
                    class="transform text-gray-400 transition-transform duration-300"
                    :class="{ 'rotate-180': activeAccordion === index }"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  v-show="activeAccordion === index"
                  class="border-t border-gray-100 bg-gray-50 p-5 leading-relaxed text-[var(--gray-text-color)]"
                >
                  {{ item.content }}
                </div>
              </div>
            </div>
          </div>
        </div>
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

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
</style>
