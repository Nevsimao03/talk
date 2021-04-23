<template>
  <div id="app">
    <router-view/>
    <NavBar />
    <Spinner />
  </div>
</template>

<script>
import { CometChat } from "@cometchat-pro/chat";
import NavBar from "./components/NavBar.vue";
import Spinner from './components/Spinner.vue';

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
    CometChat.getLoggedInUser().then(user => {
      this.username = user.name;
      this.avatar = user.avatar;
      this.uid = user.uid;
      if (!user) {
          this.$router.push({
            name: "homepage"
          });
        }
    }, error => {
      console.log(error);
      this.$router.push({
        name: "homepage"
      });
    });
  },
};
</script>
