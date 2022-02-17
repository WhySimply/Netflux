<template>
  <button
      @click="$emit('clickOnButton')"
      class="font-bold px-5 py-2 bg-white bg-opacity-20 text-white rounded hover:bg-white hover:text-red-600 transition-all">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>