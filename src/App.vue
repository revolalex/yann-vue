<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <!-- <router-view :key="$route.fullPath" /> --> 
  </div>
</template>
<script>
import Navbar from './components/Global/Navbar'
export default {
  components:{
    Navbar
  }
}
</script>
<style>
</style>
