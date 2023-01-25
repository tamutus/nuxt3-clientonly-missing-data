# Nuxt 3 bug reproduction: Client-only component's root element missing data attribute for itself.

To reproduce this bug, I created a new nuxt 3 project, set up two pages, and added two components: one with a root element that has a class, which successfully applies relevant styles, and a clone of that component suffixed with `.client.vue` . When you load the app, both data nonces (parent and child) load correctly for the root element of the normal component loads. The .client-suffixed component fails to do this on page load, yet it will be added on file-save HMR or navigation between pages. As refreshing resets the app, the orange text will lose its style.

I noticed that this can be solved by simply not applying scoped styles to the root component - making the current easiest workaround to wrap the contents of the component in a plain old `<div>`.
