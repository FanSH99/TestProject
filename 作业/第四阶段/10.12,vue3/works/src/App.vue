<template>
  <div>
    <city></city>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import city from "@/components/city.vue";
export default defineComponent({
  name: "App",
  components: {
    city,
  },
});
</script>

<style>
</style>
