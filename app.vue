<template>
  <NuxtPage />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer layer {
  body {
    @apply relative;
  }
}

@layer components {
  h3 {
    @apply text-4xl font-head text-white underline;
  }

  .text-gradient {
    @apply text-transparent saturate-200 bg-clip-text bg-gradient-to-tr from-a-tertiary from-[2%] via-a-secondary to-a-primary;
  }
}

@font-face {
  font-family: 'Khorla';
  src: url('~/assets/fonts/khorla/Khorla.woff2') format('woff2'),
    url('~/assets/fonts/khorla/Khorla.woff') format('woff');
  font-style: normal;
  font-weight: normal;
}

.page-enter-active,
.page-leave-active {
  @apply relative transition-all duration-700 before:content-[''];
}
.page-enter-active::before,
.page-leave-active::before {
  @apply fixed z-40 top-0 bottom-0 w-full h-screen max-w-[0px] bg-a-primary transition-all duration-700;
}

.page-leave-active::before {
  @apply left-0;
}

.page-enter-active::before {
  @apply right-0;
}

.page-enter-from::before,
.page-leave-to::before {
  @apply max-w-full;
}
</style>
