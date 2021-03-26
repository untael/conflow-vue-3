<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { inject } from 'vue'
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'App',
})
export default class App extends Vue {
  setup () {
    console.log('test', )
    console.log('1', inject('banana', 'banana default'))
    console.log('2', inject('banana', () => 'banana default', true))
    console.log('3', inject('banana'))
    return {}
  }

  value = ''
}
</script>


