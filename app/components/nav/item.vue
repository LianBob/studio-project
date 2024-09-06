
<template>
  <li
    class="p-4 flex hover:bg-primary justify-center cursor-pointer transition-colors w-full rounded-lg"
  >
    <div class="hover:scale-125 flex items-center gap-x-2 transition-transform">
      <Icon :name="$props.iconName" class="size-5" />
      <slot>Nav Link Name</slot>
    </div>
  </li>
</template>
<script setup>
defineProps({
  iconName: {
    required: true,
  },
});
</script>
