<template>
  <div>

  </div>
</template>

<script lang="ts">
import { Vue, Options, setup } from 'vue-class-component'
import { useInterview } from '@/api/Event/Interview/composables/interview'

@Options({
  name: 'InterviewDisplayPage',
})
export default class InterviewDisplayPage extends Vue {
  setupData = setup(() => {
    return {
      ...useInterview(),
    }
  })

  async created () {
    this.setupData.interview = await this.setupData.getInterview(this.$route.params.id)
  }
}

</script>


