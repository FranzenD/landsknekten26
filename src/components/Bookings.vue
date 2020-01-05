<template>
   <div class="calendar-container">
      <vue-cal show-week-numbers locale="sv" :time-from="8 * 60" />
   </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import 'vue-cal/dist/i18n/sv.js';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
   name: 'Bookings',
   components: {
      VueCal
   },
   data() {
      return {
         bookings: []
      };
   },
   created() {
      const db = firebase.firestore();
   }
};
</script>

<style lang="scss" scoped>
.calendar-container {
   width: 100%;
   height: 500px;
}
</style>
