<script>
import FeaturedProjects from "../components/layouts/FeaturedProjects.vue";
import TheHero from "../components/layouts/TheHero.vue";
export default {
  setup() {},
  components: { TheHero, FeaturedProjects },
};
</script>

<template>
  <div class="flex flex-col gap-16 mb-16">
    <TheHero />
    <hr class="bg-squgily bg-repeat border-0 h-[6px]" />
    <FeaturedProjects />
  </div>
</template>
