<template>
  <Header/>
  <div id="main">
    <div id="inputAndMap">
      <Input/>
      <Map/>
    </div>
    <div id="output" v-if="showOutput">
      <Output/>
    </div>
    
  </div>
  
</template>

<script>

import Header from './components/Header';
import Input from './components/Input';
import Map from './components/Map';
import Output from './components/Output'

export default {
  name: 'App',
  components: {
    Header,
    Input,
    Map,
    Output,

  },
  data: function(){
    return {
      latitude: null,
      longitude: null,
      day_of_year: null
    }
  },
  computed:{
    // true if the user has submitted the form
    showOutput: function(){
      return this.$store.getters.getDisplayOutput;
    }
  }
}
</script>

<style>

* {
  margin: 0px;
  padding: 0px;
  font-family: cursive;
}
html, body{
  width: 100%;
  height: 100%;
}
#app{
  height: 90%;
}

#main{
  margin-top: 50px;

}


#inputAndMap{
  display: flex;
  justify-content:space-evenly;
}

#output{
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}


</style>
