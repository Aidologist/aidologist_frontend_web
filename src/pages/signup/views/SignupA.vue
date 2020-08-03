<template>
  <div>
    <v-text-field label="Main input" :rules="rules" hide-details="auto"></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'SignupA',
  data () {
    return {
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters'
      ]
    }
  }
}
</script>

<style scoped>

</style>
