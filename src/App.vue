<template>
   <div id="app">
      <nav id="nav">
         <router-link to="/home">Boka</router-link>
         &nbsp;|
         <router-link to="/about">Hjälp</router-link>
         &nbsp;|
         <router-link to="/login">Logga in</router-link>
      </nav>
      <router-view />
   </div>
</template>

<style>
#app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
</style>
