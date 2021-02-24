<template>
  <validation-observer v-slot="{ handleSubmit, reset }">
    <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="reset">
      <validation-provider name="E-mail" rules="required|email" v-slot="{ errors }">
        <input v-model="email" type="email">
        <span>{{ errors[0] }}</span>
      </validation-provider>

      <validation-provider name="First Name" rules="required" v-slot="{ errors }">
        <input v-model="firstName" type="text">
        <span>{{ errors[0] }}</span>
      </validation-provider>

      <validation-provider name="Last Name" rules="required" v-slot="{ errors }">
        <input v-model="lastName" type="text">
        <span>{{ errors[0] }}</span>
      </validation-provider>

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  </validation-observer>
</template>

<script>
  export default {
    data: () => ({
      firstName: '',
      lastName: '',
      email: ''
    }),
    methods: {
      onSubmit() {
        alert('Form has been submitted!');
      }
    }
  };
</script>

<style scoped>
  span {
    display: block;
  }
</style>

