<template>
  <v-toolbar app class="teal" dark dense>
    <router-link to="/">LOGO</router-link>
    <v-toolbar-title>est</v-toolbar-title>

    <v-spacer/>

    <v-toolbar-items>
      <v-btn to='Apartments' flat dark><v-icon>fas fa-bed</v-icon>&nbsp;Apartments</v-btn>
      <v-btn to='/tenants' flat disabled><v-icon>fas fa-users</v-icon>&nbsp;Tenants</v-btn>
      <v-btn to='/calendar' flat disabled><v-icon>fas fa-calendar-day</v-icon>&nbsp;Timeline</v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
}
</script>
<style scoped>

</style>
