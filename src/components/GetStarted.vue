<script setup lang="ts">
import { useRouter } from "vue-router";
import { isDark } from "../composable/mode";
const router = useRouter();

function toAnimal() {
  router.push("/info");
}
</script>

<template>
  <section class="start">
    <figure class="start__figure">
      <img
        class="start__cover"
        src="https://images.unsplash.com/photo-1615963244664-5b845b2025ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
      />
    </figure>
    <h1 class="start__title">Wiki Animal</h1>
    <p class="start__des">What do you know about the animal kingdom</p>
    <button
      class="start__btn"
      :class="{ dark: isDark, light: !isDark }"
      @click="toAnimal"
    >
      Get Started
    </button>
  </section>
</template>

<style lang="scss">
.start {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__figure {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 8px 10px rgba($color: gray, $alpha: 0.3);
  }

  &__cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 1.2;
  }

  &__des {
    color: rgb(163, 163, 163);
  }

  &__btn {
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 3rem;
    padding: 1.5rem 3rem;
    font-size: 1.4rem;
    font-weight: 700;
  }

  &__btn.dark {
    background-color: #fff;
    color: #000;
  }

  &__btn.light {
    background-color: #000;
    color: #fff;
  }
}
</style>
