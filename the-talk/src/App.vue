<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { CometChat } from "@cometchat-pro/chat";
import NavBar from "../components/NavBar.vue";
import Spinner from "../components/Spinner.vue";

export default {
  name: "home",
  components: {
    NavBar,
    Spinner
  },
  data(){
    return{
      username:"",
      avatar:"",
      uid:"",
      sendingMessage: false,
      chatMessage:"",
      loggingOut: false,
      groupMessages:[],
      loadingMessages: false
    };
  },
  created(){
    this.getLoggedInUser();
  },
  methods:{
    getLoggedInUser(){
      CometChat.getLoggedInUser().then(user => {
        this.username = user.name;
        this.avatar = user.avatar;
        this.uid = user.uid;
      }, error => {
        this.$router.push({
          name: "homepage"
        });
        console.log(error);
      });
    },
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
