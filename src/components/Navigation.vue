<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { navigationLinks, secondaryLinks, contactInfo } from '@/data/navigation'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const searchQuery = ref('')
const isNavVisible = ref(true)
const lastScrollPosition = ref(0)
const scrollThreshold = 50

const toggleMobileMenu = (): void => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = (): void => {
  isMobileMenuOpen.value = false
}

const isActiveRoute = (path: string): boolean => {
  //TODO: Fix once other paths are properly routed
  if (path === '/') return false
  return route.path === path
}

const handleSearch = (): void => {
  console.log('Search query:', searchQuery.value)
}

const handleScroll = () => {
  const currentScrollPosition = window.scrollY

  // Don't hide nav if we're at the top of the page
  if (currentScrollPosition < scrollThreshold) {
    isNavVisible.value = true
    lastScrollPosition.value = currentScrollPosition
    return
  }

  // Scrolling down
  if (currentScrollPosition > lastScrollPosition.value) {
    isNavVisible.value = false
    closeMobileMenu() // close menu if open when scrolling down
  }
  // Scrolling up
  else {
    isNavVisible.value = true
  }

  lastScrollPosition.value = currentScrollPosition
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed top-0 z-[1000] w-full border-b border-gray-200 bg-white transition-transform duration-300"
    :class="{ '-translate-y-full': !isNavVisible }"
  >
    <!-- Desktop Navbar -->
    <div class="hidden md:block">
      <!-- Top Row -->
      <div class="border-b border-gray-200">
        <div class="mx-auto flex max-w-[1440px] items-center gap-8 px-8 py-4 lg:px-12">
          <!-- Logo -->
          <RouterLink to="/" class="flex flex-shrink-0 items-center" @click="closeMobileMenu">
            <img
              src="@/assets/images/logo.png"
              alt="MIMO Branding & Supplies"
              class="h-11 w-auto lg:h-12"
            />
          </RouterLink>

          <!-- Search Bar -->
          <div
            class="flex max-w-[500px] flex-1 items-center overflow-hidden rounded border border-gray-200 lg:max-w-[600px]"
          >
            <input
              v-model="searchQuery"
              type="text"
              placeholder='Search    Try "Apparel" "Stationary" "Stickers"'
              class="flex-1 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none lg:text-[15px]"
              @keyup.enter="handleSearch"
            />
            <button
              class="px-4 py-2.5 transition-colors hover:text-[var(--primary)]"
              @click="handleSearch"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>

          <!-- Contact Info -->
          <div class="flex flex-shrink-0 items-center gap-6">
            <span class="text-sm whitespace-nowrap text-gray-900">{{ contactInfo.hours }}</span>
            <span class="text-sm whitespace-nowrap text-gray-900">{{ contactInfo.phone }}</span>
          </div>
        </div>
      </div>

      <!-- Bottom Row -->
      <div class="bg-white">
        <div class="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-3.5 lg:px-12">
          <!-- Main Navigation Links -->
          <div class="flex items-center gap-8 lg:gap-10">
            <RouterLink
              v-for="link in navigationLinks"
              :key="link.path"
              :to="link.path"
              class="text-[15px] whitespace-nowrap text-gray-900 transition-colors hover:text-[var(--primary)] lg:text-base"
              :class="{ '!text-[var(--primary)]': isActiveRoute(link.path) }"
            >
              {{ link.name }}
            </RouterLink>
          </div>

          <!-- Secondary Navigation Links -->
          <div class="flex items-center gap-8 lg:gap-10">
            <RouterLink
              v-for="link in secondaryLinks"
              :key="link.path"
              :to="link.path"
              class="text-[15px] whitespace-nowrap text-gray-900 transition-colors hover:text-[var(--primary)] lg:text-base"
              :class="{ '!text-[var(--primary)]': isActiveRoute(link.path) }"
            >
              {{ link.name }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navbar -->
    <div class="md:hidden">
      <div class="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center" @click="closeMobileMenu">
          <img src="@/assets/images/logo.png" alt="MIMO Branding & Supplies" class="h-10 w-auto" />
        </RouterLink>

        <!-- Right Side Icons -->
        <div class="flex items-center gap-3">
          <button class="flex items-center justify-center p-2" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="h-7 w-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button
            class="flex items-center justify-center p-2"
            @click="toggleMobileMenu"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!isMobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-7 w-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-7 w-7"
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
      </div>

      <!-- Mobile Navigation Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-300 ease-in"
        enter-from-class="-translate-y-full opacity-0"
        leave-to-class="-translate-y-full opacity-0"
      >
        <div
          v-if="isMobileMenuOpen"
          class="absolute top-[73px] left-0 z-50 max-h-[calc(100vh-73px)] w-full overflow-y-auto border-t border-gray-200 bg-white px-6 py-4 shadow-xl"
        >
          <div class="flex flex-col gap-2">
            <RouterLink
              v-for="link in navigationLinks"
              :key="link.path"
              :to="link.path"
              class="py-3 text-lg text-gray-900 transition-colors hover:text-[var(--primary)]"
              :class="{ '!text-[var(--primary)]': isActiveRoute(link.path) }"
              @click="closeMobileMenu"
            >
              {{ link.name }}
            </RouterLink>
          </div>
          <div class="my-4 h-px bg-gray-200"></div>
          <div class="flex flex-col gap-2">
            <RouterLink
              v-for="link in secondaryLinks"
              :key="link.path"
              :to="link.path"
              class="py-3 text-lg text-gray-900 transition-colors hover:text-[var(--primary)]"
              :class="{ '!text-[var(--primary)]': isActiveRoute(link.path) }"
              @click="closeMobileMenu"
            >
              {{ link.name }}
            </RouterLink>
          </div>
        </div>
      </Transition>

      <!-- Backdrop -->
      <Transition
        enter-active-class="transition-opacity duration-300"
        leave-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 top-[73px] z-40 bg-black/50"
          @click="closeMobileMenu"
        ></div>
      </Transition>
    </div>
  </nav>
</template>
