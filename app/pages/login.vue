<script setup lang="ts"></script>

<template>
  <div class="text-center">
    <main class="flex justify-center flex-col mt-4">
      <div class="flex flex-col mx-8 items-center gap-y-2">
        <h1 class="text-6xl">Welcome</h1>
        <p class="opacity-80">
          Please set your username and password and update your email if
          necesary.
        </p>
      </div>
      <div>
        <Form />
      </div>
    </main>
    <LoginMobileDecorators />
  </div>
</template>
