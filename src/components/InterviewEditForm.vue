<template>
  <va-card class="p-2">
    <va-card-title>Edit interview</va-card-title>
    <va-card-content>
      <va-input label="Interview name" v-model="value"/>
    </va-card-content>
  </va-card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'InterviewEditForm',
})
export default class InterviewEditForm extends Vue {
  value = ''
}
</script>


