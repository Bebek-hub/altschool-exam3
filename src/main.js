
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeComp from "./components/view/HomeComp.vue";
import AboutComp from  "./components/view/AboutComp.vue";
import GithubRepo from "./components/view/GithubRepo.vue";
import ErrorPage from "./components/view/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeComp,
    },
    {
      path: "/about",
      name: "About",
      component: AboutComp,
    },
    {
        path: "/github",
        name: "GithubRepo",
        component: GithubRepo,
      },
      {
        path: "/:pathMatch(.*)*",
        name: "Error",
        component: ErrorPage,
      },
  ],
});
createApp(App)
    .use(router)
    .mount("#app");