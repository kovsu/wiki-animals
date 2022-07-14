<script setup lang="ts">
import { useToggle } from "@vueuse/core";
import { isDark } from "../composable/mode";

const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="header">
    <span class="header__title">Wiki Animal</span>
    <a
      href="https://github.com/vworldown/wiki-animals"
      target="_blank"
      class="header__github"
    >
      <font-awesome-icon icon="fa-brands fa-github" class="header__icon" />
    </a>
    <button @click="toggleDark()" class="header__toggle">
      <font-awesome-icon
        icon="fa-solid fa-moon"
        v-if="isDark"
        class="header__icon"
      />
      <font-awesome-icon icon="fa-solid fa-sun" class="header__icon" v-else />
    </button>
  </header>
</template>

<style lang="scss">
.header {
  padding: 2rem 5rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.5);
  display: flex;
  gap: 2rem;
  align-items: center;

  &__github {
    text-decoration: none;
    font-size: 1.2rem;

    &:visited {
      color: inherit;
    }
  }

  &__icon {
    font-size: 1.5em;
    cursor: pointer;
  }

  &__toggle {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.2rem;
  }

  &__title {
    font-size: 1.6rem;
    font-weight: 700;
    margin-right: auto;
  }
}
</style>
