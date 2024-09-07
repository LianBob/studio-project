<script setup lang="ts"></script>

<template>
  <div class="">
    <div
      class="w-1/2 hidden md:block absolute  bg-text/80 top-0 right-0 bottom-0"
    ></div>
    <div class="text-center md:text-start  sm:mx-16 lg:mx-0">
      <main class="flex justify-center md:mt-8 mt-8 flex-col">
        <div class="flex flex-col mx-8 gap-y-4">
          <h1 class="lg:text-6xl text-4xl">Welcome</h1>
          <p
            class="opacity-80 sm:mx-12 md:mx-0 md:text-sm md:w-2/5 tracking-wide"
          >
            Please set your username and password and update your email if
            necesary.
          </p>
        </div>
        <div class="mt-4 md:mt-0">
          <Form />
        </div>
        <p
          class="text-text/50 md:text-start text-center mx-12 md:mx-0 mt-8 md:mt-4 ps-1 md:p-4 md:pt-0 text-sm"
        >
          For questions, please contact your administrator.
        </p>
      </main>
    </div>

    <NuxtImg
      src="/Person in roquet.png"
      class="absolute hidden sm:block -rotate-6 z-10 md:left-[400px] md:top-14 lg:left-[600px] lg:top-16"
      width="550"
    />
    <NuxtImg
      src="/Candado con yave y matapng.png"
      class="absolute hidden xl:block z-10 bottom-3 left-2"
      width="150"
    />
    <!-- <LoginMobileDecorators class=" " /> -->
    <!-- movile decorators -->
    <NuxtImg
      src="/Llave.png"
      class="absolute blur-[1px] -z-10 bottom-8 left-4"
      format="webp"
      width="56"
      densities="x1"
    />
    <NuxtImg
      src="/Llave.png"
      class="absolute blur-[2px] -z-10 top-[430px] right-12"
      format="webp"
      width="80"
      densities="x1"
    />
    <NuxtImg
      src="/Llave.png"
      class="absolute blur-sm -z-10 top-[300px] left-2"
      format="webp"
      width="64"
      densities="x1"
    />
    <NuxtImg
      src="/Llave.png"
      class="absolute blur-sm -z-10 top-[60px] left-0"
      format="webp"
      width="116"
      densities="x1"
    />
    <NuxtImg
      src="/Llave.png"
      class="absolute blur-sm -z-10 top-[200px] right-4"
      format="webp"
      width="116"
      densities="x1"
    />
    <NuxtImg
      src="/CAndado y matapng.png"
      class="absolute blur-[1px] -z-10 bottom-0 right-2"
      format="webp"
      width="116"
      densities="x1"
    />
  </div>
</template>
