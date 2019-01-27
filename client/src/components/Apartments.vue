<template>
  <div class="container">
    <div class="white elevation-6">
      <v-toolbar flat dense class="teal darken-2" dark>
        <v-toolbar-title>Apartments</v-toolbar-title>
        <v-spacer/>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="apartments"
        :loading="true"
        class="elevation-1">
        <v-progress-linear slot="progress" color="teal darken-2"></v-progress-linear>
      </v-data-table>
    </div>
  </div>
</template>
<script>
import ApartmentsService from '@/services/ApartmentsService'
export default {
  data () {
    return {
      loading: true,
      headers: ['Floor', 'Door', 'Rooms', 'm<sup>2</sup>'],
      apartments: []
    }
  },
  async mounted () {
    this.apartments = (await ApartmentsService.index()).data
  }
}
</script>
<style scoped>

</style>
