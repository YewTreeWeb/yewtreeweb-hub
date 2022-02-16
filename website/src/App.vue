<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ title }}</h1>
  <div class="posts-container" v-if="posts.length">
    <div class="posts" v-for="post in posts" :key="post.id">
      <h2>{{ post.attributes.Title }}</h2>
    </div>
  </div>
  <p v-else>{{ error }}</p>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      title: 'Hello Vue 3 + Vite',
      posts: [],
      error: null
    }
  },
  async created () {
    try {
      const response = await axios.get('http://localhost:1337/api/posts')
      this.posts = response.data.data
    } catch (error) {
      console.error(error)
      this.error = error
    } finally {
      console.log(this.posts)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
