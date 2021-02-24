<template>
  <div class="column has-text-centered mx-5">
    <div class="box">
      <p class="title is-4">{{text1}}</p>
      <p class="is-size-5">{{text2}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text1: String,
      text2: String
    },
  };
</script>
