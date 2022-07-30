<template>
  <div class="flex flex-col items-center gap-12 mt-5 mb-5">
      <div class="flex flex-col w-5/6 items-left gap-6">
      <h3 class="text-3xl font-theme_bold text-head_text">{{ name }}</h3>
      <p class="text-sm lg:text-lg">{{ description }}</p>
      <p class="text-2xl lg:text-lg font-theme_bold"><span class="text-highlight_text">{{ formula }}</span></p>
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
