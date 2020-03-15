<template>
   <div class="home">
      <h1>Boka</h1>
      <datetime
         v-model="start"
         intpt-id="date-from"
         type="datetime"
         :minute-step="15"
         title="Från"
      />
      <datetime
         v-model="end"
         input-id="date-to"
         type="datetime"
         :minute-step="15"
         title="Till"
      />
      <button type="button" class="btn" @click="addBooking">Boka</button>
      <bookings />
   </div>
</template>

<script>
// @ is an alias to /src
import { Datetime } from 'vue-datetime';
import firebase from 'firebase/app';
import 'firebase/firestore';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import Bookings from '@/components/Bookings.vue';

dayjs.extend(isoWeek);

export default {
   name: 'Home',
   components: {
      Bookings,
      Datetime
   },
   data() {
      return {
         start: '',
         end: ''
      };
   },
   methods: {
      async addBooking() {
         const week = dayjs(this.start).isoWeek();
         console.log(week);
         debugger;
         const db = firebase.firestore();
         try {
            const docRef = await db.collection('bookings').add({
               start: this.start,
               end: this.end,
               uid: firebase.auth().currentUser.uid,
               week
            });
            console.log('booking added:' + docRef.id);
         } catch (error) {
            console.log('ERROR: ' + error);
         }
      }
   }
};
</script>

<style lang="scss" scoped>
.home {
}
</style>
