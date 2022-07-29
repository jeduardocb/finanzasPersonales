<template>
  <div class="flex flex-col gap-16 slg:gap-24">
    <div class="flex flex-col gap-5 slg:gap-12">
      <h1
        class="text-2xl sm:text-3xl md:text-4xl slg:text-5xl font-theme_bold text-head_text"
      >
      {{ title }}<span class="text-link_text_hover">.</span>
      </h1>
      <p class="text-base slg:text-lg">
        {{description}}
      </p>
    </div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px]"  />
  </div>
</template>
<script>
export default {
  setup() {},
  props: ["title","description"],
};
</script>
