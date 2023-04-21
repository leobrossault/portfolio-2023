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
  @apply relative transition-all duration-[1200ms];
}

.page-leave-active .page-element-transition,
.page-leave-active .page-element-transition > div {
  @apply left-0;
}

.page-leave-active .page-text-transition {
  @apply animate-[textTransition_450ms_300ms_ease-in-out_reverse_forwards];
}

.page-enter-active .page-element-transition,
.page-enter-active .page-element-transition > div {
  @apply right-0;
}

.page-enter-active .page-text-transition {
  @apply animate-[textTransition_450ms_ease-in-out_forwards];
}

.page-enter-from .page-element-transition,
.page-leave-to .page-element-transition {
  @apply max-w-full;
}

.fadeWithBlur-enter-active,
.fadeWithBlur-leave-active {
  @apply transition-all duration-300;
}

.fadeWithBlur-enter-from,
.fadeWithBlur-leave-to {
  @apply opacity-0 blur-sm;
}
</style>
