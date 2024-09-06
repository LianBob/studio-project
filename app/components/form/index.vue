<template>
  <div class="flex flex-col mx-6 items-center">
    <form class="mt-6 w-full flex flex-col gap-y-2">
      <div class="flex flex-col gap-y-2">
        <label class="self-start" for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          class="px-2 placeholder:opacity-80 rounded-lg py-1"
          placeholder="lucerumKey@gmail.com"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <label class="self-start" for="name">User name</label>
        <input
          id="name"
          name="name"
          type="text"
          class="px-2 placeholder:opacity-80 rounded-lg py-1"
          placeholder="LucerumKey"
        />
      </div>
      <div class="flex flex-col gap-y-2 relative">
        <label class="self-start" for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          class="px-2 placeholder:opacity-100 rounded-lg py-1"
          placeholder="lucerumKey@gmail.com"
        />
        <FormEye />
      </div>
      <button
        class="shadow-lg shadow-primary/50 text-bg w-full bg-primary p-2 mt-4 font-semibold text-lg rounded-lg"
      >
        Send
      </button>
      <p class="text-text/50 mt-2 text-sm">
        For questions, please contact your administrator.
      </p>
    </form>
  </div>
</template>
