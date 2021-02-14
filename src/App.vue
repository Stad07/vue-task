<template>
  <div id="app"> 
    <Navbar />   
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
}
</script>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
  @import '@/assets/styles/main.scss';
</style>
