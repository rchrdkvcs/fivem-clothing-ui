<script lang="ts" setup>
import { ref } from "vue";

const isHovered = ref(false);
const props = defineProps<{
  gender: string;
  category: number;
  id: number;
}>();
const img = `${props.gender}_${props.category}_${props.id}`;
</script>

<template>
  <div
    class="relative w-128px h-128px flex justify-center items-center rounded-16px bg-black transition-all duration-300 ease-in-out cursor-pointer"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :class="isHovered ? 'bg-opacity-100' : 'bg-opacity-50'">
    <p
      class="absolute top-8px left-8px color-white font-500 text-16px transition-all duration-300 ease-in-out"
      :class="isHovered ? 'color-op-75' : 'color-op-50'">
      {{ props.id }}
    </p>
    <img
      :src="`/public/images/${img}.png`"
      :alt="img"
      class="w-5/6 h-5/6 transition-all duration-300 ease-in-out"
      :class="isHovered ? '' : ''" />
  </div>
</template>
