<template>
  <button @click.prevent="handleClick" class="absolute right-0 top-[45%] p-2">
    <Icon
      v-if="isText"
      name="weui:eyes-on-outlined"
      class="text-primary size-6 cursor-pointer"
    />
    <Icon
      v-else
      name="weui:eyes-off-outlined"
      class="text-primary size-6 cursor-pointer"
    />
  </button>
</template>
<script setup>
let isText = ref(false);

onMounted(() => {
  watch(isText, (newValue, oldValue) => {
    document.getElementById("password").type = newValue ? "text" : "password";
  });
});

const handleClick = () => {
  return (isText.value = !isText.value);
};
</script>
