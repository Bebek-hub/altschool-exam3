<template>
    <div class="container">
        <div class="header">
            <div class="logo">Favvy</div>
            <div class="routers">
                <router-link to="/" class="router">Home</router-link>
                <router-link to="/about" class="router">About</router-link>
            </div>
        </div>

        <section>
            <p>Home Page</p>
        </section>

        <section>
            <router-link to="/github" class="git-repo">Github Repository</router-link>
            <!-- <ul>
                <li><a href="./AboutComp.vue" target="_blank">Github Repository</a></li>
            </ul> -->
        </section>
    </div>
</template>

<style>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0b143a;
    padding: 1rem 2rem;
}

.logo {
    font-size: 1.5rem;
    color: aliceblue;
}

.routers {
    padding: 1rem;
}

.router {
    font-size: 1rem;
    text-decoration: none;
    color: #ffffff;
    padding: 1rem;
}

.git-repo {
    background-color: #0b143a;
    text-decoration: none;
    color: #ffffff;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
}
</style>