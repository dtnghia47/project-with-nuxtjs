<template>
  <div>
    <h1 class="title">
      Saying is always easy and doing is always difficult
    </h1>
    <h2 class="subtitle" @click="screenshot">
      I always say "Code is easy"
    </h2>
    <div id="capture" class="container">
      demo
      <button @click="screenshot">
        Click
      </button>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'public',
  methods: {
    screenshot() {
      const html2canvas = window.html2canvas
      html2canvas && html2canvas(document.querySelector('#capture')).then((canvas) => {
        document.body.appendChild(canvas)
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  /*justify-content: center;
  align-items: center;
  text-align: center;*/
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
