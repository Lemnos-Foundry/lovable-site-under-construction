<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { footerLinks, socialLinks, contactInfo } from '@/data/navigation'
import printBg from '@/assets/images/insights.jpg'

const emailInput = ref('')

const handleSubscribe = (): void => {
  console.log('Subscribe email:', emailInput.value)
  emailInput.value = ''
}
</script>

<template>
  <footer class="bg-white">
    <!-- Newsletter Section -->
    <div class="relative w-full overflow-hidden">
      <!-- Background Image -->
      <img
        :src="printBg"
        alt="Printing Press"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <!-- Gold Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-[#b78e4a]/95 to-[#b78e4a]/40"></div>

      <!-- Content Container -->
      <div class="relative py-12 md:py-16">
        <div
          class="custom-container flex flex-col justify-between gap-6 md:flex-row md:items-center"
        >
          <h2 class="text-left text-lg font-medium text-white md:text-2xl">
            Get Branding Insights Monthly
          </h2>
          <div class="flex w-full max-w-[500px] gap-0 sm:flex-row">
            <input
              v-model="emailInput"
              type="email"
              placeholder="Enter your email address"
              class="flex-1 bg-white px-3.5 py-3.5 text-gray-900 placeholder-gray-500 outline-none"
              @keyup.enter="handleSubscribe"
            />
            <button
              class="flex-shrink-0 bg-[#002a3a] px-6 py-3.5 text-sm font-semibold tracking-wider text-white transition-colors hover:bg-black"
              @click="handleSubscribe"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="custom-container pt-12 pb-12 lg:pt-16 lg:pb-16">
      <!-- Top Section with Logo and Tagline -->
      <div class="mb-12 flex flex-col items-center gap-6 md:mb-16 md:flex-row md:justify-between">
        <div class="flex items-center">
          <img
            src="@/assets/images/logo.png"
            alt="MIMO Branding & Supplies"
            class="h-10 w-auto flex-shrink-0 md:h-12"
          />
        </div>
        <p class="text-center font-medium text-[#b78e4a] italic md:text-right md:text-lg">
          Your One-Stop Shop for Printing and Branding in Nairobi.
        </p>
      </div>

      <!-- Main Footer Grid -->
      <div class="mb-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:mb-16 md:grid-cols-3 lg:gap-16">
        <!-- Our Services Section -->
        <div class="flex flex-col gap-6">
          <h3 class="text-lg text-gray-500">Our Services</h3>
          <div class="flex flex-col gap-2">
            <RouterLink
              v-for="link in footerLinks.services"
              :key="link.path"
              :to="link.path"
              class="text-[15px] font-medium text-gray-800 transition-colors hover:text-[#b78e4a]"
            >
              {{ link.name }}
            </RouterLink>
          </div>

          <!-- Social Icons -->
          <div class="mt-4 flex gap-4">
            <a
              :href="socialLinks.whatsapp"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center text-[#25D366] transition-transform hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
            </a>
            <a
              :href="socialLinks.tiktok"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center text-black transition-transform hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                />
              </svg>
            </a>
            <a
              :href="socialLinks.instagram"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center text-pink-600 transition-transform hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="url(#instagram-gradient)"
              >
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#fd5949" />
                    <stop offset="50%" stop-color="#d6249f" />
                    <stop offset="100%" stop-color="#285AEB" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a
              :href="socialLinks.linkedin"
              target="_blank"
              rel="noopener"
              class="flex items-center justify-center text-[#0A66C2] transition-transform hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Mimo Branding Section -->
        <div class="flex flex-col gap-6">
          <h3 class="text-lg text-gray-500">Mimo Branding</h3>
          <div class="flex flex-col gap-2">
            <RouterLink
              v-for="link in footerLinks.branding"
              :key="link.path"
              :to="link.path"
              class="text-[15px] font-medium text-gray-800 transition-colors hover:text-[#b78e4a]"
            >
              {{ link.name }}
            </RouterLink>
          </div>
        </div>

        <!-- Reach Us Section -->
        <div class="flex flex-col gap-6 md:text-right">
          <h3 class="text-lg text-gray-500">Reach Us</h3>
          <div class="flex flex-col gap-2">
            <p class="text-[15px] leading-relaxed font-medium text-gray-800">
              2nd Floor Room 202 Eagle Industries,<br />
              Kweria Rd, Off Kirinyaga Rd
            </p>
            <p class="mt-4 text-[15px] font-medium text-gray-800">
              <a
                :href="`tel:${contactInfo.phone}`"
                class="transition-colors hover:text-[#b78e4a]"
                >{{ contactInfo.phone }}</a
              >
              /
              <a
                :href="`tel:${contactInfo.phoneSecondary}`"
                class="transition-colors hover:text-[#b78e4a]"
                >{{ contactInfo.phoneSecondary }}</a
              >
            </p>
            <p class="text-[15px] font-medium text-gray-800">
              <a
                :href="`mailto:${contactInfo.email}`"
                class="transition-colors hover:text-[#b78e4a]"
                >{{ contactInfo.email }}</a
              >
            </p>
          </div>
        </div>
      </div>

      <!-- Legal & Copyright -->
      <div
        class="flex flex-col gap-6 pt-12 text-center md:flex-row md:items-center md:justify-between md:text-left"
      >
        <div class="flex flex-wrap justify-center gap-8 md:justify-start">
          <RouterLink
            v-for="link in footerLinks.legal"
            :key="link.path"
            :to="link.path"
            class="text-xs font-medium text-gray-700 transition-colors hover:text-[#b78e4a]"
          >
            {{ link.name }}
          </RouterLink>
        </div>
        <div class="flex justify-center md:justify-end">
          <p class="text-xs font-medium text-gray-700">© Mimo Branding - Registered in Kenya</p>
        </div>
      </div>
    </div>
  </footer>
</template>
