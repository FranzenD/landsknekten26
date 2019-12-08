<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Logga in</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
