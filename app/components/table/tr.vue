<template>
  <tr :class="{ 'bg-bg/10': $props.isMarked }">
    <slot />
  </tr>
</template>
<script setup>
defineProps({
  isMarked: {
    type: Boolean,
    default: false,
  },
});
</script>
