<template>
  <!-- <div>
    <p>{{ data.name }}</p>
    <p>{{ data.bio }}</p>
    <p>{{ data.followers }}</p> -->
    <div>
        <div class="header">
            <div class="logo">Favvy</div>
            <div class="routers">
                <router-link to="/" class="router">Home</router-link>
                <router-link to="/about" class="router">About</router-link>
            </div>
        </div>

      <div v-if="error"> {{ error }}</div>
      <div v-else v-for="user in users" :key="user.id">
        <div class="each-repo">{{ user.full_name }}</div>
        <!-- <ul><li><href href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">
            {{ user.full_name }}
        </href></li></ul> -->
      </div>

      <!-- <Suspense>
    <template #default>
      <GithubRepo />
    </template>
    <template #fallback>
      <div>
        Loading Github Repository...
      </div>
    </template>
  </Suspense>  -->
    </div>
  <!-- </div> -->
</template>

<script>
import { ref } from "vue";
export default {
  name: "GithubRepo",

  async setup() {
    const error = ref(null);
    const users = ref(null);

//     onErrorCaptured((e) => {
//       error.value = e
//    })

    try {
      const usersResponse = await fetch(
        "https://api.github.com/users/bebek-hub/repos"
      );
      users.value = await usersResponse.json();
    } catch (e) {
      error.value = e;
    }
    return { users, error };
  },
};

//    mounted() {
//     fetch("https://api.github.com/users/Bebek-hub/repos", {
//         headers: {
//             Accept: "application.json",
//         }
//     })
//     .then((res) => res.json)
//     .then((data) => (this.data = data))
//    }
</script>

<style scoped>
.each-repo {
    border: 1px solid #0b143a;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    width: 10rem;
}
</style>
