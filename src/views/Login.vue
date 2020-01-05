<template>
   <div class="login">
      <p>LOGGA IN</p>
      <v-input v-model="email" type="text" placeholder="Epost" />
      <v-input v-model="password" type="password" placeholder="Lösenord" />
      <button type="button" class="btn" @click="login">Logga in</button>
      <button type="button" class="btn" @click="logout">Logga ut</button>
   </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
import VInput from '@/components/VInput.vue';

export default {
   name: 'Login',
   components: {
      VInput
   },
   data() {
      return {
         email: '',
         password: ''
      };
   },
   computed: {},
   methods: {
      login() {
         // prettier-ignore
         firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(response => {
               console.log('authenticated!');
               this.updateOrCreateUser(response.user);
               this.$router.replace('/home');
            })
            .catch(function(error) {
               // Handle Errors here.

               const errorCode = error.code;
               const errorMessage = error.message;
               console.log(error);
               console.log(`Error code: ${errorCode} message: ${errorMessage}`);
            });
      },
      logout() {
         // prettier-ignore
         firebase.auth().signOut().then(() => {
               console.log('logged out');
            });
      },
      updateOrCreateUser(user) {
         const db = firebase.firestore();
         var docRef = db.collection('users').doc(user.uid);

         docRef
            .get()
            .then(function(doc) {
               if (doc.exists) {
                  console.log('Document data:', doc.data());
                  docRef.update({
                     lastLogin: new Date()
                  });
               } else {
                  // doc.data() will be undefined in this case
                  const newUser = {
                     uid: user.uid,
                     name: '',
                     displayName: '',
                     lastLogin: new Date()
                  };
                  db.collection('users')
                     .doc(user.uid)
                     .set(newUser)
                     .then(() => {
                        console.log('user created');
                     });
               }
            })
            .catch(function(error) {
               console.log('Error getting document:', error);
            });
      }
   }
};
</script>

<style lang="scss" scoped>
.login {
   display: flex;
   flex-direction: column;
   align-items: center;

   input {
      padding: 10px;
   }
}
</style>
