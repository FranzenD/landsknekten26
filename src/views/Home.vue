<template>
   <div class="home">
      <h1>Boka</h1>
      <bookings />
   </div>
</template>

<script>
// @ is an alias to /src
import Bookings from '@/components/Bookings.vue';

export default {
   name: 'Home',
   components: {
      Bookings
   }
};
</script>
