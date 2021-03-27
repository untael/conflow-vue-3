<template>
  <div>
    <interview-edit-form/>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import InterviewEditForm from '../components/InterviewEditForm.vue'

@Options({
  name: 'InterviewEditPage',
  components: {
    InterviewEditForm,
  },
})
export default class InterviewEditPage extends Vue {
  setup () {
    return {}
  }
}
</script>


