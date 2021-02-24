<!--- components/Fab.vue -->

<!---
  FontAwesome 5 Free Brands Icon Component

  Usage Example:

  <Fab i="facebook" />

  Props:
  - i: The FontAwesome 5 Free Brands icon name (like "twitter" or "reddit")
  - classes: CSS classes to add to the icon

  Caveats:
  - Each icon has to be pre-loaded in nuxt.config.js or it won't show up

-->
<template>
  <a v-if="url" :href="url">
    <font-awesome-icon
      :class="`${classes}`"
      :icon="['fab', i]"
      :style="styleBind"
    />
  </a>
  <font-awesome-icon
    v-else
    :class="`${classes}`"
    :icon="['fab', i]"
    :style="styleBind"
  />
</template>

<script>
  export default {
    props: {
      i: {
        type: String,
        required: true,
        default: 'facebook'
      },
      classes: {
        type: String,
        required: false,
        default: 'icon'
      },
      sizeRem: {
        type: Number,
        default: 1.6
      },
      url: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        styleBind: { width: this.sizeRem + 'rem', height: this.sizeRem + 'rem' }
      }
    },
  }
</script>
