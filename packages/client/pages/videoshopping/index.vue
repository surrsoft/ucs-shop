<template>
  <div>
    <h1 class="title is-1">{{pc.pages.videoshopping.title}}</h1>
  </div>
</template>

<script>
  import pc from '../../utils/project-config'

  export default {
    layout: 'lay_main',
    data() {
      return {
        pc
      }
    },
  }
</script>
