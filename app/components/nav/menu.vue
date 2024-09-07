<template>
  <ul class="flex transition-all items-center">
    <NavItem @click="$emit('closeMenu')" to="/" iconName="iconamoon:home"
      >Home</NavItem
    >
    <NavItem
      @click="$emit('closeMenu')"
      to="about"
      iconName="mdi:about-circle-outline"
      >About</NavItem
    >
    <NavItem
      @click="$emit('closeMenu')"
      to="services"
      iconName="icons8:services"
      >Services</NavItem
    >
    <NavItem @click="$emit('closeMenu')" to="blog" iconName="carbon:blog"
      >Blog</NavItem
    >
    <NavItem
      @click="$emit('closeMenu')"
      to="login"
      iconName="solar:login-linear"
      >Login</NavItem
    >
    <NavItem
      @click="$emit('closeMenu')"
      to="table"
      iconName="material-symbols:table"
      >Testing Table</NavItem
    >
  </ul>
</template>
