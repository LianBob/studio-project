<template>
  <li>
    <NuxtLink
      class="p-4 flex md:py-2 md:px-4 md:hover md:hover:bg-transparent hover:bg-primary justify-center cursor-pointer transition-colors w-full rounded-lg"
      :to="$props.to"
    >
      <div
        class="hover:scale-125 flex items-center gap-x-2 transition-transform"
      >
        <Icon :name="$props.iconName" class="size-5" />
        <slot>Nav Link Name</slot>
      </div>
    </NuxtLink>
  </li>
</template>
<script setup>
defineProps({
  iconName: {
    required: true,
  },
  to: {
    type: String,
    default: "/",
  },
});
</script>
