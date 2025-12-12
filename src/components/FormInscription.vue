<script setup lang="js">
import {ref} from "vue";

const emit = defineEmits(["auth"])

const email = ref('')
const password = ref('')

const Submit = () => {
  emit("auth", {
    email: email.value,
    password: password.value
  })
}
</script>

<template>
  <form id="inscription-form" @submit.prevent="Submit">
    <label for="email">Entrez votre mail :</label>
    <input type="email" id="email" v-model="email">

    <label for="password">Entrez votre mot de passe</label>
    <input type="password" id="password" v-model="password">

    <input type="submit">
  </form>
</template>

<style scoped>
#inscription-form {
  display: flex;
  flex-direction: column;
}
</style>
