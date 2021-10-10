<script setup lang="ts">
import ChatMessage from './ChatMessage.vue'
import io from 'socket.io-client';
import { onMounted, reactive } from 'vue'

var socket = io("http://localhost:8080", {
  transports: ["websocket", "polling"],
  withCredentials: false,
  extraHeaders: {
    "Access-Control-Allow-Origin": "*"
  }
});

/* props and variables */
let toggle = false;
let message:string = "";

/* methods */
function getDateTimeNow() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return today.toUTCString(); // "Sat, 13 Jun 2020 18:30:00 GMT" 
}

function updateMessage(elem:any) { 
  //let message = document.getElementById('messageBox')?.value.trim();
  message = elem.value.replace(/\r?\n/g, '<br/>');
  //document.getElementById('messageBox').value = "";
}

function autoScrollChatPanel() {
  let chat = document.getElementById('chatPanel');
  chat?.scrollTo(0,chat.offsetHeight);
}

let messages= reactive([{
  id:1,
  isLeftAligned:true,
  username:"John Doe",
  avatar:"https://images.unsplash.com/photo-1542513217-0b0eedf7005d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5MDEzMDcx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
  message:"Are we still going out on the weekend?<br/>I need to confirm the booking with the restaurant.",
  timestamp:getDateTimeNow()
}]);
messages.pop();

// let messages= reactive([]);

onMounted(() => {
  document.getElementById('messageBox')?.addEventListener(
    "keypress", function(e) {
      if (e.keyCode == 13 && !e.shiftKey)
      {
        // prevent default behavior
        e.preventDefault();

        // update UI view
        messages.push({
          id:Math.round(Math.random()*100),
          isLeftAligned:false,
          username:"John Doe",
          avatar:"https://images.unsplash.com/photo-1542513217-0b0eedf7005d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5MDEzMDcx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
          message:message,
          timestamp:getDateTimeNow()
        });
        
        // emit a socket.io event
        socket.emit('chat message', message);

        // cleanup the UI inputs
        message = "";
        toggle = !toggle;
        autoScrollChatPanel();

      }
      else return true;
    }
  );
})

socket.on('chat message', function(message) {
  messages.push({
    id:Math.round(Math.random()*100),
    isLeftAligned:true,
    username:"John Doe",
    avatar:"https://images.unsplash.com/photo-1542513217-0b0eedf7005d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5MDEzMDcx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    message:message,
    timestamp:getDateTimeNow()
  });
});



</script>

<template>
  <div class="flex">
    <!-- Contact List -->
    <div class="hidden md:block w-72 h-screen bg-gray-100 px-2 py-2 border-r border-solid">
      <div class="flex justify-between items-center bg-gray-50 -mx-2 -my-2 py-2 px-2">
        <img class="w-10 h-10 rounded-full" src="../assets/user.jpg" alt="Profile Image" >

         <div class="w-10 flex justify-between">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
         </div>
      </div> 

      <!-- Searchbar -->
      <div class="pt-4 flex">
        <div class="w-2/12 flex justify-center items-center bg-gray-200 rounded-tl-xl rounded-bl-xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input class="p-2 w-10/12 bg-gray-200 text-sm focus:outline-none rounded-tr-xl rounded-br-xl" type="text" placeholder="Search for messages or ..." />
      </div>

      <!-- frequnt user row -->
      <div class="pt-4 px-3 -ml-1 flex justify-between">
        <div class="relative flex flex-col justify-center items-center">
          <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt="Profile Image" >
          <span class="-mt-6 ml-7 w-3 h-3 bg-green-700 border border-solid border-white border-white rounded-full absolute"></span>
        </div>
        
        <div class="relative flex flex-col justify-center items-center">
          <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=faces&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt="Profile Image" >
          <span class="-mt-6 ml-7 w-3 h-3 bg-gray-400 border border-solid border-white border-white rounded-full absolute"></span>
        </div>

        <div class="relative flex flex-col justify-center items-center">
         <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1578831906480-b33b9282891b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTY1ODA3OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="Profile Image" >
          <span class="-mt-6 ml-7 w-3 h-3 bg-gray-400 border border-solid border-white border-white rounded-full absolute"></span>
        </div>

        <div class="relative flex flex-col justify-center items-center">
          <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt="Profile Image" >
          <span class="-mt-6 ml-7 w-3 h-3 bg-green-700 border border-solid border-white border-white rounded-full absolute"></span>
        </div>

        <div class="relative flex flex-col justify-center items-center">
          <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1542513217-0b0eedf7005d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5MDEzMDcx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt="Profile Image" >
          <span class="-mt-6 ml-7 w-3 h-3 bg-green-700 border border-solid border-white border-white rounded-full absolute"></span>
        </div>  
      </div>

      <!-- Contact list -->
      <div class="mt-8 mx-1 flex flex-col">
        <div class="flex bg-white rounded-md px-2 py-2 drop-shadow-md">
          <div class="relative flex flex-col justify-center items-center">
            <img class="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt="Profile Image" >
            <span class="-mt-6 ml-7 w-3 h-3 bg-green-700 border border-solid border-white border-white rounded-full absolute"></span>
          </div>

          <div class="flex flex-col flex-grow ml-4 truncate max-w-full">
            <div class="flex justify-between pt-[2px] text-sm font-semibold">
              <div>
                Frank Hobbs
              </div>
              <div class="text-gray-400 ">
                 15:10
              </div>
            </div>
            <div class="text-sm truncate">
              Howdy partner! Lets do some weird shit!
            </div>
          </div>
          
        </div>
      </div>
    </div>   

    <!-- Main Pane -->
    <div class="w-screen flex-grow flex flex-col h-screen justify-between bg-pink-100">
      <!-- Top Panel -->
      <div class="flex justify-between items-center bg-gray-50 py-2 px-6">
        <div class="flex">
          <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1542513217-0b0eedf7005d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5MDEzMDcx&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit" alt="Active Chat User" />

          <div class="flex flex-col flex-grow ml-4 w-32">
            <div class="flex justify-between pt-[2px] text-sm font-semibold">
              <div>
                Ntando Rini
              </div>
            </div>
            <div class="text-sm">
              Online
            </div>
          </div>
        </div>
        

         <div class="w-16 flex justify-between ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-current text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
         </div>
      </div>

      <!-- messages -->
      <div class="flex-grow pt-2 px-6 overflow-y-auto pb-32" id="chatPanel">
        <ChatMessage 
          v-for="entry in messages" :key="entry.id"
          :isLeftAligned="entry.isLeftAligned"
          :username="entry.username"
          :avatar-url="entry.avatar" 
          :message="entry.message"
          :timestamp="entry.timestamp"
        />

      </div> <!-- end -->

      <!-- bottom input -->
      <div class="flex justify-between items-center bg-gray-200 py-2 px-6 inset-x-0 bottom-0 ">
        <div class="flex w-16 justify-between mx-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
          </svg>
        </div>

        <textarea :value="message" @input="updateMessage($event?.target)" type="text" name="messageBox" id="messageBox" placeholder="Type your message" class="h-12 flex-grow focus:outline-none my-1 py-2 px-4 rounded-2xl place-content-center resize-none scrollbar-w-2 scrollbar-thumb-gray-400 scrollbar-track-gray-200"></textarea>
        
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-4 rotate-45 -translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

