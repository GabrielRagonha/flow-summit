<template>
  <ion-img
    src="/icons/logo.svg"
    class="max-w-[70%] md:max-w-lg m-auto"
    alt="FlowSummit logo"
  ></ion-img>

  <p class="flex items-center justify-center flex-col gap-2">
    <span class="text-3xl font-bold">{{ title }}</span>
    <span class="text-sm">{{ desc }}</span>
  </p>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    desc: String,
  },
};
</script>
