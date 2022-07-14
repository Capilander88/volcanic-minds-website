<template>
  <Header />
  <div class="container">
    <h1>
      Hello world
    </h1>
  </div>
</template>

<script setup>
useHead({
  title: 'Volcanic Minds homepage',
  meta: [
    { name: 'description', content: 'Main contents' }
  ],
})
</script>

<style lang="stylus" scoped>
.container
  color red
</style>