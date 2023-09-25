<template>
  <div>
    <input type="checkbox" id="nav-toggle">
    <SideBar/>
    <div class="main-content">
      <Header></Header>
      <main>
        <div class="chat-container">
        
          <div class="messages-area">
            <div
              class="message"
              v-for="(message, index) in messages"
              :key="index"
              :class="{ 'sent': message.sender === 'user', 'received': message.sender === 'other' }"
            >
              {{ message.text }}
            </div>
          </div>
          <div class="sender-area">
            <div class="input-place">
              <input placeholder="Send a message." class="send-input" type="text" v-model="newMessage">
              <div class="send" @click="sendMessage">
                <svg
                  class="send-icon"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background:new 0 0 512 512;"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        fill="#6B6C7B"
                        d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/core/SideBar.vue";
import Header from "@/components/core/Header.vue";
import { ref, onMounted } from "vue";
import { getAuth } from "firebase/auth";
import { getDatabase, ref as dbRef, push } from "firebase/database";

export default {
  components: {
    SideBar,
    Header,
  },
  data() {
    return {
      messages: [],
      newMessage: "",
      user: null,
      receiver: null,
    };
  },
  computed: {
    admin() {
          return this.$store.state.profileAdmin;
      },
  },
  methods: {
  sendMessage() {
    if (this.newMessage.trim() !== "") {
      const database = getDatabase();
      const messagesRef = dbRef(database, "messages");
      if (!this.admin) { // Corrected: Added 'this' to access the computed property
        this.receiver = "3Wwxi05qxiSXRUicozOWiEStSIm2"; // Also, add 'this' here
      }

      // Push the new message to the database
      push(messagesRef, {
        text: this.newMessage,
        sender: this.user ? this.user.uid : "anonymous",
        receiver: this.receiver,
        timestamp: new Date().toISOString(),
      });

      this.newMessage = ""; // Clear the input field
    }
  },
},


  async mounted() {
    const auth = getAuth();
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        this.user = authUser;

        const database = getDatabase();
        const messagesRef = dbRef(database, "messages");

        // Listen for changes in the messages collection
        messagesRef.on("child_added", (snapshot) => {
          const message = snapshot.val();
          this.messages.push(message);
        });
      } else {
        alert("please log in ...")
        // Handle when the user is not authenticated
      }
    });
  },
};
</script>


<style scoped>
.sidebar {
    width: 200px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #fff;
    z-index: 100;
    transition: margin-left 300ms;
}
.sidebar-brand{
    height: 90px;
    padding:1rem 0rem 1rem 2rem; 
}
.sidebar-brand span {
    display: inline-block;
    padding-right: 1rem;
}
.sidebar-menu {
    margin-top: 1rem;
}
.sidebar-menu li {
    width: 100%;
    margin-bottom: 1.3rem;
    padding-left: 2rem;
    font-size: 20px;
}
.sidebar-menu a {
    display: block;
    color: #02060b;
    padding-bottom: 1rem;
}
.sidebar-menu a.active {
    color: #1c68c4;
    padding-top: 1rem;
    padding-bottom: 1rem;
} 
.sidebar-menu a span:first-child {
    font-size: 1.5rem;
    padding-right: 1rem;
} 
#nav-toggle:checked + .sidebar {
    width: 70px;
}
#nav-toggle:checked + .sidebar .sidebar-brand,
#nav-toggle:checked + .sidebar li {
   padding-left: 1rem;
   text-align: center;
}
#nav-toggle:checked + .sidebar li a{
    padding-left: 0rem;
 }
 #nav-toggle:checked + .sidebar li a span{
    padding-right: 1rem;
 }
#nav-toggle:checked + .sidebar .sidebar-brand h3 span:last-child,
#nav-toggle:checked + .sidebar li a span:last-child {
   display: none;
}
#nav-toggle:checked ~ .main-content{
    margin-left: 70px;
 }
#nav-toggle:checked ~ .main-content header{
   width: calc(100% -70px);
   left: 70px;
 }
.main-content {
    transition: margin-left 300ms;
    margin-left: 200px;
}

.main-content header{
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    box-shadow: 2px 2px 5px rgba(0,0,0, 0.2);
    position: fixed;
    left: 200px;
    right: 0;
    /* width: calc(100% -200px); */
    top: 0;
    z-index: 100;
    transition: left 300ms;

}
#nav-toggle{
    display: none;
}
header h3 {
    color: #222;
    margin-right: 50px;
}
header label span {
    font-size: 1.7rem;
    padding-left: 1rem ;
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    min-height: calc(100vh -90px);
    width: 100%;
    
}
.chat-container {
  width: 450px;
  height: 70%;
  background-color: #343541;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 0;
}

.chat-close {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.line {
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: #6B6C7B;
  border-radius: 30px;
}

.line.one {
  transform: rotate(45deg)
}

.line.two {
  transform: rotate(135deg)
}

.messages-area {
  overflow-y: scroll;
  overflow-x: none;
  background-color: #6B6C7B;
  width: 90%;
  height: 210px;
}

.sender-area {
  background-color: #343541;
  width: 100%;
  height: 70px;
  display: flex;
  border-radius: 8px;
}

.message {
  width: 92%;
  background-color: #02060b;
  color:#fff;
  border-radius: 10px;
  height: 40px;
  padding: 3px;
  margin: 10px;

}

.message.one,
.message.three,
.message.five {
  background-color: #2E2F3A;
}

.message.two,
.message.four,
.message.six {
  background-color: #343541;
}

.send-img {
  width: 30px;
}

.send-input {
  outline: none;
  display: flex;
  border: none;
  background: none;
  height: 40px;
  width: 85%;
  border-radius: 7px;
  background: none;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-left: 5px;
}

.send-input::placeholder {
  color: #828E9E;
}

.input-place {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-left: 10px;
  align-items: center;
  background-color: #40414F;
  border-radius: 7px;
  height: 40px;
  width: 95%;
  gap: 5px;
  border: 1px solid #2E2F3A;
}

.send {
  width: 30px;
  height: 30px;
  right: 0;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.send-icon {
  width: 17px;
}
@media (max-width: 800px) {
  
  .main-content {
    margin-left: 0;
}
.chat-container{
  min-height: 600px;
}
.input-place {
  position: fixed;
  bottom:40px;
  
}
.messages-area{
  width: 100%;
  height: 700px;
}
}
.sent {
  
  display: flex;
  justify-content: flex-end;
  
  margin-right: 20px;
}
.received{
  
  margin-left: 10px;
}
</style>