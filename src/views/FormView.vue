<script setup lang="js">
import FormInscription from "@/components/FormInscription.vue";
import {ref} from "vue";

const users = [
  {
    email: "hugo.rod@bluewin.ch",
    password: "Pa$$w0rd"
  },
  {
    email: "pierre.petitroque@cailloux.ch",
    password: "Super_Pa$$w0rd"
  }
]

const authenticated = ref("Vous n'étes pas authentifié")

const authenticate = (user_to_auth) => {
  const check = users.find(user => {if (user.email === user_to_auth.email && user.password === user_to_auth.password) return user})

  if (!check) authenticated.value = "Vous n'étes pas authentifié"
  else authenticated.value = "Vous étes authentifié : " + user_to_auth.email
}
</script>

<template>
  <article>
    <h1>{{authenticated}}</h1>
    <form-inscription @auth="authenticate"></form-inscription>
  </article>
</template>

<style scoped>

</style>
