<template>
  <ul class="flex transition-all items-center">
    <NavItem iconName="iconamoon:home">Home</NavItem>
    <NavItem iconName="mdi:about-circle-outline">About</NavItem>
    <NavItem iconName="icons8:services">Services</NavItem>
    <NavItem iconName="carbon:blog">Blog</NavItem>
    <NavItem :to="'/login'" iconName="carbon:blog">Login</NavItem>
  </ul>
</template>

<script setup></script>

<style></style>
