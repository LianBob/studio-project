<template>
  <header class="  ">
    <nav class="px-6 pt-6 relative top-0">
      <div class="flex justify-between items-center">
        <!-- icon -->
        <div
          class="flex md:items-center justify-between w-2/3 md:justify-start md:gap-x-4"
        >
          <div
            class="relative backdrop-blur-sm rounded-full"
            :class="{ 'z-50': isMenuOpen }"
          >
            <Icon name="bi:person-circle" class="size-6 md:size-8" />
            <div
              class="bg-green size-2 rounded-full absolute -top-0.5 -right-0.5"
            ></div>
          </div>
          <!-- text -->
          <p
            class="text-te font-semibold w-1/3 md:text-xl"
            :class="{ 'z-50': isMenuOpen }"
          >
            Lucerum <span class="text-primary">Key</span>
          </p>
        </div>
        <!-- button1 -->
        <button
          v-if="!isMenuOpen"
          class="p-2 rounded-full"
          @click="() => (isMenuOpen = !isMenuOpen)"
        >
          <Icon name="eva:menu-fill" class="size-7 text-text" />
        </button>
        <!-- button2 -->
        <button
          v-else
          class="z-50 p-2 rounded-full"
          @click="() => (isMenuOpen = !isMenuOpen)"
        >
          <Icon name="mingcute:close-fill" class="size-7 text-text" />
        </button>
      </div>
      <!-- menu -->
      <Transition name="fade">
        <!-- :class="[{ '-top-72': isMenuOpen }, { 'top-14': !isMenuOpen }]" -->
        <div
          v-if="isMenuOpen"
          class="w-full pt-12 rounded-b-lg mt-6 left-0 top-0 z-10 bg-bg/50 backdrop-blur-md rounded-lg absolute transition-all duration-500"
        >
          <ul class="flex transition-all px-4 flex-col items-center">
            <NavItem iconName="iconamoon:home">Home</NavItem>
            <NavItem iconName="mdi:about-circle-outline">About</NavItem>
            <NavItem iconName="icons8:services">Services</NavItem>
            <NavItem iconName="carbon:blog">Blog</NavItem>
          </ul>
        </div>
      </Transition>
    </nav>
  </header>
</template>
<script setup>
const isMenuOpen = ref(false);
</script>
<style>
fade-enter-active,
fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
