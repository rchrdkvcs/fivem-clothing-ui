<script setup lang="ts">
import CategoryBtn from "./components/buttons/CategoryBtn.vue";
import Input from "./components/buttons/Input.vue";
import CloseBtn from "./components/buttons/CloseBtn.vue";
import GradientBg from "./components/GradientBg.vue";
import TemplateBg from "./components/TemplateBg.vue";
import Item from "./components/Item.vue";
import Button from "./components/buttons/Button.vue";
import { ref } from "vue";

const isOpened = ref(false);
</script>

<template>
  <GradientBg v-if="isOpened" />
  <button class="bg-#FF7100 p-2 rounded-full" @click="isOpened = true">
    Open Menu
  </button>
  <!-- Menu Container -->
  <div
    v-if="isOpened"
    class="w-400px h-100vh flex flex-col gap-4 justify-center items-center absolute top-0 right-64px">
    <!-- Header container -->
    <div class="flex justify-between items-center w-full">
      <h1 class="color-white font-700 text-24px">Magasin de vêtement</h1>
      <CloseBtn @click="isOpened = false" />
    </div>

    <!-- Category container -->
    <div class="flex gap-2 justify-start items-start w-full overflow-x-scroll">
      <CategoryBtn />
      <CategoryBtn />
      <CategoryBtn />
      <CategoryBtn />
      <CategoryBtn />
      <CategoryBtn />
      <CategoryBtn />
      <CategoryBtn />
      <CategoryBtn />
    </div>

    <!--  Items Container -->
    <div class="flex flex-col gap-2">
      <h2 class="color-white font-600 text-20px color-op-75">Chapeau</h2>
      <div
        class="grid grid-cols-3 gap-2 justify-start items-start max-h-50vh overflow-y-scroll rounded-16px">
        <Item gender="male" :category="11" :id="12" />
      </div>
    </div>

    <!-- Inputs Container -->
    <div class="flex gap-2 w-full overflow-hidden">
      <Input />
      <Input />
    </div>

    <!-- Payment Container -->
    <div class="flex flex-col gap-4 justify-center items-center w-full">
      <!-- Information -->
      <div class="flex justify-between items-center w-full">
        <h3 class="flex flex-col color-white font-700 text-20px">
          Paiement
          <span class="font-500 text-16px">Prix Total</span>
        </h3>
        <p class="font-700 color-#FF7100 color-op-100 text-24px">
          $<span>100</span>
        </p>
      </div>

      <!-- Choix de paiment -->
      <div class="flex justify-between items-center w-full gap-2">
        <Button> Paiement par carte </Button>
        <Button> Paiement en espece </Button>
      </div>
    </div>
  </div>

  <TemplateBg />
</template>

<style>
* > * {
  font-family: "Albert Sans", serif;
  user-select: none;
}
</style>
