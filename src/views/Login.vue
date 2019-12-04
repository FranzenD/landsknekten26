<template>
    <div class="login">
        <p>LOGGA IN</p>
        <input v-model="username" type="text" placeholder="Användarnamn">
        <input v-model="password" type="password" placeholder="Lösenord">
        
    </div>
</template>

<script>
export default {
    name: 'login',
    data(){
        return{
            username: '',
            password: ''
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