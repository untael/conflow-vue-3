<template>
  <va-card>
    <va-input v-model="value"/>
  </va-card>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'InterviewEditForm',
})
export default class InterviewEditForm extends Vue {
  setup () {
    const value = ref('')
    return { value }
  }
}
</script>


