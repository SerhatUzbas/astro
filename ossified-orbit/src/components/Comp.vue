<script>
import { ref } from "vue";

const x = "asdasd";
export default {
  setup() {
    const count = ref(0);
    return { count, x };
  },
};
</script>
<style></style>
<template>
  <div>
    <p>x is an {{ count }}</p>
    <button class="bg-red-500 w-20 h-20" onclick="count++">click</button>
  </div>
</template>
