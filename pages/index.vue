<template>
  <div id="index-page">
    <BoxBlueText />
    <BoxOrangeText />
    <h2>
      <NuxtLink to="/another-page">Navigate elsewhere</NuxtLink>
    </h2>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home Page",
});
</script>

<style scoped>
#index-page {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  margin: 0;
}
</style>
