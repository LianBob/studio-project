<template>
  <div class="flex ps-2 flex-col mx-6 md:w-2/5 items-center">
    <form class="md:mt-6 w-full flex flex-col gap-y-2">
      <div class="flex flex-col gap-y-2">
        <label class="self-start" for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          class="px-2 placeholder:opacity-80 focus:outline-none focus:outline-1 focus:outline-primary text-bg rounded-lg py-1"
          placeholder="lucerumKey@gmail.com"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <label class="self-start" for="name">User name</label>
        <input
          id="name"
          name="name"
          type="text"
          class="px-2 focus:outline-1 focus:outline-primary focus:outline-none placeholder:opacity-80 text-bg rounded-lg py-1"
          placeholder="LucerumKey"
        />
      </div>
      <div class="flex flex-col gap-y-2 relative">
        <label class="self-start" for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          class="px-2 placeholder:opacity-80 focus:outline-1 focus:outline-none focus:outline-primary text-bg rounded-lg py-1"
          placeholder="LucerumKey1234*-"
        />
        <FormEye />
      </div>
      <button
        class="shadow-lg shadow-primary/50 text-bg w-full bg-primary p-2 mt-4 font-semibold text-lg rounded-lg"
      >
        Send
      </button>
    </form>
  </div>
</template>
