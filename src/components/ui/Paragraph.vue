<template>
  <div class="flex flex-col items-center gap-12 mt-5 mb-5">
      <div class="flex flex-col w-5/6 items-left gap-6">
      <h3 class="text-3xl font-theme_bold text-head_text">{{ name }}</h3>
      <p class="text-sm lg:text-lg">{{ description }}</p>
      <p class="text-2xl lg:text-lg font-theme_bold"><span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">{{ formula }}</span></p>
      <div class="flex space-x-2 justify-center">
  <h2 class="text-2xl font-theme_bold">
    <span class="inline-block py-1.5 px-2.5 text-center align-baseline font-bold bg-indigo-500 rounded">{{formula}}</span>
  </h2>
</div>
    </div>
  </div>
</template>
<script>
import ActionButton from "./ActionButton.vue";

export default {
  props: ["name", "description", "formula"],
  components: { ActionButton },
};
</script>
