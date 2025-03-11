<template>
  <button
    class="yx-button"
    :class="{
      [`yx-button--${props.type}`]: props.type,
      [`yx-button--${props.size}`]: props.size,
      'is-disabled': props.disabled,
      'is-loading': props.loading,
    }"
    :disabled="props.disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  type?: "primary" | "success" | "warning" | "danger";
  size?: "large" | "small";
  disabled?: boolean;
  loading?: boolean;
}>();
</script>

<style scoped>
@import "./Button.style.css";
</style>
