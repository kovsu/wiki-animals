<script setup lang="ts">
import { reactive, ref } from "vue";
import { getRandomAnimal } from "../api/requests";
import { IAnimal } from "../api/types";
import { isDark } from "../composable/mode";

let data = reactive({}) as IAnimal;
let flag = ref(true);

function renderAnimal() {
  flag.value = false;
  getRandomAnimal().then((res) => {
    data.animal_type = res.animal_type;
    data.name = res.name;
    data.geo_range = res.geo_range;
    data.diet = res.diet;
    data.habitat = res.habitat;
    data.lifespan = res.lifespan;
    data.image_link = res.image_link;
    flag.value = true;
  });
}

renderAnimal();
</script>

<template>
  <transition mode="out-in" name="scale">
    <section class="animals" v-if="flag">
      <h1 class="animals__name">{{ data.name }}</h1>
      <figure class="animals__cover">
        <img :src="data.image_link" :alt="data.name" class="animals__img" />
      </figure>
      <ul>
        <li>
          <p>动物类型: {{ data.name }}</p>
        </li>
        <li>
          <p>寿命: {{ data.lifespan }}年</p>
        </li>
        <li>
          <p>生活范围: {{ data.geo_range }}</p>
        </li>
        <li>
          <p>栖息地: {{ data.habitat }}</p>
        </li>
        <li>
          <p>饮食习惯: {{ data.diet }}</p>
        </li>
      </ul>
      <button
        class="animals__btn"
        :class="{ dark: isDark, light: !isDark }"
        @click="renderAnimal"
      >
        换一个
      </button>
    </section>
  </transition>
</template>

<style lang="scss">
.animals {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  &__cover {
    width: 30rem;
    height: 30rem;
    border-radius: 10px;
    overflow: hidden;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ul {
    max-width: 28rem;
    font-size: 1.4rem;
  }

  &__btn {
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 3rem;
    padding: 1.5rem 5rem;
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

.scale-enter-active,
.scale-leave-active {
  transition: all 1s ease;
}

.scale-enter-from,
.scale-leave-to {
  transform: translateX(100px) translateY(-50px) scale(0.8);
  opacity: 0;
}
</style>
