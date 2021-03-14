<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'App',
})
export default class App extends Vue {
  setup () {
    return {}
  }
}
</script>


