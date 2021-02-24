<template>
  <div
    class="level-item has-text-centered mx-5"
    style="background-color: red"
  >
    <div>
      <p class="heading">{{text1}}</p>
      <p class="subtitle">{{text2}}</p>
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
