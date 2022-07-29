<template>
<router-link
        class="hover:bg-action_back font-theme_bold px-3 py-1 pb-2 rounded-md transition-all sm:px-6 sm:py-2 lg:text-base"
        :to="link"
      >
        <slot>{{name}}
      </slot
  >
      </router-link>
</template>
<script>
export default {
  props: ["link","name"],
};
</script>
