<template>
   <div class="calendar-container">
      <vue-cal
         show-week-numbers
         locale="sv"
         :time-from="8 * 60"
         :events="bookings"
         class="vuecal--blue-theme"
         @ready="fetchBookings"
         @view-change="viewChange"
         @cell-click="cellClicked"
         @event-focus="eventFocus"
      />
   </div>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';
import 'vue-cal/dist/i18n/sv.js';
import firebase from 'firebase/app';
import 'firebase/firestore';
import dayjs from 'dayjs';

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
      // const db = firebase.firestore();
      console.log('created');
   },
   methods: {
      fetchBookings({ view, startDate, endDate, week }) {
         console.log('fetchBookings');

         const db = firebase.firestore();
         var query = db.collection('bookings');
         // query = query.where('week', '==', week);
         // query = query.where('end', '<=', endDate);
         query.onSnapshot(querySnapshot => {
            this.bookings = querySnapshot.docs.map(item => {
               const { start, end } = item.data();
               return {
                  start: dayjs(start).format('YYYY-MM-DD HH:mm'),
                  end: dayjs(end).format('YYYY-MM-DD HH:mm'),
                  title: 'Franzén',
                  content: '',
                  class: 'washing'
               };
            });
         });
      },
      viewChange({ view, startDate, endDate, week }) {
         console.log(`view changed ${view} ${startDate} ${endDate} ${week}`);
      },
      cellClicked(date) {
         if (!date) return;
         console.log(`cell clicked ${date}`);
      },
      eventFocus(event) {
         console.log(`event focus ${event}`);
      }
   }
};
</script>

<style lang="scss" scoped>
.calendar-container {
   width: 100%;
   height: 600px;
}
</style>
