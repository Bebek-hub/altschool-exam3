<template>
    <div>
        <p>{{ data.name }}</p>
        <p>{{ data.bio }}</p>
        <p>{{ data.followers }}</p>
        <div>
            <router-link to="/">Home page</router-link>
            <router-link to="/about">About page</router-link>
            <router-link to="/github">Github page</router-link>
            <router-link to="/error">Error page</router-link>
        </div>
    </div>
</template>
<!-- https://github.com/Bebek-hub -->
<!-- https://api.github.com/users/Bebek-hub/repos -->
<script>
export default {
    data() {
        return {
            data: ""
        }
    },
   mounted() {
    fetch("https://github.com/Bebek-hub", {
        headers: {
            Accept: "application.json",
        }
    })
    .then((res) => res.json)
    .then((data) => (this.data = data))
   }
}
</script>