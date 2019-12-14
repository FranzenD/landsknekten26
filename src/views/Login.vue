<template>
   <div class="login">
      <p>LOGGA IN</p>
      <input v-model="email" type="text" placeholder="Användarnamn" />
      <input v-model="password" type="password" placeholder="Lösenord" />
      <button @click="login">Logga in</button>
      <button @click="logout">Logga ut</button>
   </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
   name: 'Login',
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
   input {
      padding: 10px;
   }
}
</style>
