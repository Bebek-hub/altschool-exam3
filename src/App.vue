<template>
  <RouterView></RouterView>
  <div v-if="error"> {{ error }}</div>
  <Suspense>
    <template #default>
      <GithubRepo />
    </template>
    <template #fallback>
      <div>
        Loading Github Repository...
      </div>
    </template>
  </Suspense>
</template>

<script>
import GithubRepo from "./components/view/GithubRepo.vue";
import { ref, onErrorCaptured } from "vue";

export default {
  name: 'App',
  setup() {
    const error = ref(null);

    onErrorCaptured((e) => {
      error.value = e
    })

    return {error}
  },
  components: {
    GithubRepo
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
