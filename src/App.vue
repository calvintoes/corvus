<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col>
          <img src="./assets/helpButton.svg" alt="helpButton">
        </b-col>
        <b-col>
          <div class="speech">
            <img v-bind:src="speechLink" alt="speechBubble">
          </div>
        </b-col>
      </b-row>
      <b-row>
        <div class="mx-auto mb-5">
          <img src="./assets/bird.svg" alt="bird">
        </div>
      </b-row>
      <b-row>
        <div class="mx-auto">
          <span class="button game">
            <router-link to="/game">
              <img src="./assets/yellowGame.svg" @mouseover="speechLink = gameSpeech" alt="gameSpeech">
            </router-link>
          </span>
          <span class="button tool">
            <img src="./assets/yellowTool.svg"  @mouseover="speechLink = toolSpeech" alt="toolSpeech">
          </span>
        </div>
      </b-row>
    </b-container>
  </div>
  
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
  name: 'app',
  data() {
    return{
      speechLink: './assets/speechBubbleMain.svg',
      gameSpeech: './assets/speechBubbleGame.svg',
      toolSpeech: './assets/speechBubbleTool.svg'
    };
  },
  methods:{
    getSpeech: function() {
      
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

#app {
  font-family: 'Rubik', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 4rem 1rem;
  background-color: #645BE0;
}

.button{
  margin: 5rem;
}
.button:hover{
  cursor: pointer;
}

</style>
