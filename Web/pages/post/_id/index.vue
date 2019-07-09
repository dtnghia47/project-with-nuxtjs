<template>
  <div>
    <h1 class="title">
      post detail
    </h1>
    <div id="capture" class="container">
      content post
      <button @click="fetchSomething">
        Click
      </button>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'public',
  asyncData: (context) => {
    // called every time before loading the component
    // as the name said, it can be async
    // Also, the returned object will be merged with your data object
    console.log(context)
    debugger
    // let { data } = axios.get(`https://my-api/posts/${params.id}`)
    // let { data1 } = axios.get(`/demo-slug`)
    // return { title: data.title }
    return { name: 'World' }
  },
  methods: {
    async fetchSomething() {
      debugger
      const ip = await this.$axios.$get('/demo-slug')
      this.ip = ip
    }
  },
  // fetch: {
  // The `fetch` method is used to fill the store before rendering the page
  // },
  head: {
    // Set Meta Tags for this Page
    script: [
      { src: 'https://unpkg.com/axios/dist/axios.min.js' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://demo.com' }
    ]
  }
  // and more functionality to discover
}
</script>

<style>

</style>
