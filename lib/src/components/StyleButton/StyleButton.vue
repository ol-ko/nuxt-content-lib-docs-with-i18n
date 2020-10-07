<template>
  <button :class="$style.button"><slot></slot></button>
</template>

<style lang="scss" module>
.button {
  border: none;
  background: black;
  color: white;
}
</style>
