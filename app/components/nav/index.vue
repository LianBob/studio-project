<template>
  <header class="  ">
    <nav class="">
      <div class="flex px-6 pt-6 justify-between sticky top-0 items-center">
        <div class="relative">
          <Icon name="bi:person-circle" class="size-6" />
          <div
            class="bg-green size-2 rounded-full absolute -top-0.5 -right-0.5"
          ></div>
        </div>
        <p class="text-te font-semibold">
          Lucerum <span class="text-primary">Key</span>
        </p>
        <button @click="() => (isMenuOpen = !isMenuOpen)">
          <Icon name="eva:menu-fill" class="size-7 text-text" />
        </button>
      </div>
      <Transition name="fade">
        <!-- :class="[{ '-top-72': isMenuOpen }, { 'top-14': !isMenuOpen }]" -->
        <div
          v-if="isMenuOpen"
          class="w-full p-0 bg-bg/50 backdrop-blur-md rounded-lg absolute transition-all duration-500 z-10"
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
