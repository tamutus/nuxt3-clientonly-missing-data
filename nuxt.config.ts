// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "author",
          content: "Lavra Tamutus",
        },
        {
          name: "description",
          content:
            "Nuxt 3 Client Only Missing style scope data attribute Bug Repro",
        },
      ],
      link: [{ rel: "stylesheet", href: "/stylesheets/main.css" }],
    },
    pageTransition: {
      name: "page",
    },
  },
  components: true,
});
