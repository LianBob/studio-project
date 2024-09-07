<template>
  <div class="mx-auto mt-8 text-center">
    <div class="max-w-sm mx-auto">
      <h1 class="font-semibold px-10 text-3xl tracking-wide">
        Explore Our Complete Studies
      </h1>
      <p class="text-sm mt-4 opacity-80">
        This section contains a detailed list of all the studies conducted,
        organized in a clear way for easy reference.
      </p>
      <div></div>
    </div>
    <div class="mt-12 flex gap-2 justify-center">
      <input
        type="search"
        placeholder="Type here..."
        class="bg-text text-bg px-4 py-3 rounded-xl"
      />
      <button
        class="font-semibold text-bg px-4 py-3 bg-primary rounded-xl"
        @click.prevent="''"
      >
        Search
      </button>
    </div>
    <div
      class="bg-text p-2 ps-0 pt-0 rounded-lg mt-8 whitespace-nowrap text-bg overflow-auto"
    >
      <Table />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
