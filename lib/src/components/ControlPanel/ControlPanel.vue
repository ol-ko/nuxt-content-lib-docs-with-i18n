<template>
  <div>
    <h1>{{ $t(label) }}</h1>
    <StyleButton :text="$t('add')" />
    <StyleButton :text="$t('edit')" />
    <StyleButton :text="$t('remove')" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import StyleButton from '../StyleButton/StyleButton.vue'

export default Vue.extend({
  name: 'ControlPanel',
  data() {
    return {
      label: 'actions'
    }
  },
  components: {
    StyleButton
  }
})
</script>
