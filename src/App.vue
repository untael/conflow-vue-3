<template>
  <div id="app">
    <header class="p-test">
test
    </header>
    <main>
      <router-view/>
    </main>
    <footer>

    </footer>
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

  value = ''
}
</script>


