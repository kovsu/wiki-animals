<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader></TheHeader>
  <div class="container">
    <RouterView v-slot="{ Component }">
      <Transition mode="out-in" name="fade">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </div>
</template>

<style lang="scss">
h1 {
  font-size: 2rem;
}

.container {
  margin-top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
