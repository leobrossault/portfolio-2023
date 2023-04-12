<template>
  <NuxtPage />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply relative;
}

@font-face {
  font-family: 'Khorla';
  src: url('~assets/fonts/khorla/Khorla.woff2') format('woff2'),
    url('~assets/fonts/khorla/Khorla.woff') format('woff');
  font-style: normal;
  font-weight: normal;
}
</style>
