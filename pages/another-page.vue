<template>
  <div id="another-page">
    <BoxBlueText>
      <div>
        <h2>From BoxBlueText</h2>
        <p>Am I blue?</p>
      </div>
    </BoxBlueText>
    <BoxOrangeText>
      <div>
        <h2>From BoxOrangeText</h2>
        <p>Am I orange?</p>
      </div>
    </BoxOrangeText>
    <h2>
      <NuxtLink to="/">Navigate back home</NuxtLink>
    </h2>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: `Another Page`,
});
</script>

<style scoped>
#another-page {
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
