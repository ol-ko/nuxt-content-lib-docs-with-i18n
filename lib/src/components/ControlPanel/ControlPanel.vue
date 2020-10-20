<template>
  <div>
    <h1>{{ $t(label) }}</h1>
    <StyleButton>{{ $t('add') }}</StyleButton>
    <StyleButton>{{ $t('edit') }}</StyleButton>
    <StyleButton>{{ $t('remove') }}</StyleButton>
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
