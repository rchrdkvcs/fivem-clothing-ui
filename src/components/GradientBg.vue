<template>
  <div class="custom-gradient" />
</template>

<style scoped>
.custom-gradient {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50%;
  z-index: 0;
}
</style>
