<template>
    <div class="login">
        <p>LOGGA IN</p>
        <input v-model="email" type="text" placeholder="Användarnamn">
        <input v-model="password" type="password" placeholder="Lösenord">
        <button @click="login">Logga in</button>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
                console.log('authenticated!');
                this.$router.replace('/home');
            })
            .catch(function(error) {
                // Handle Errors here.
            
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                console.log(`Error code: ${errorCode} message: ${errorMessage}`);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.login{
    input{
        padding: 10px;
    }
}
</style>