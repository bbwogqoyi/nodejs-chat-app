<template>
  <div class="flex">
    <!-- Sidebar -->
    <div class="w-16 h-screen flex flex-col items-center justify-between bg-gray-50 border-r border-solid border-gray-200">
      <img class="w-12 pt-3" alt="GRAHSLAGG LOGO" src="../assets/w_logo.png"/>
      
      <!-- Navigation -->
      <div class="flex flex-col justify-between h-32">
        <!-- Postings -->
        <div class="relative flex flex-col justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
          <span class="hidden mt-10 w-1 h-1 bg-indigo-700 rounded-full absolute"></span>
        </div>

        <!-- Chat -->
        <div class="relative flex flex-col justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span class="mt-8 w-1 h-1 bg-indigo-700 rounded-full absolute"></span>
        </div>
        
        <!-- Contacts -->
        <div class="relative flex flex-col justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
          <span class="hidden mt-10 w-1 h-1 bg-indigo-700 rounded-full absolute"></span>
        </div>

        

      </div>

      <!-- Settings Icon -->
      <div class="mb-16">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 stroke-current text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

    </div>

    <!-- Contact List -->
    <div class="w-64 h-screen bg-gray-100 px-2 py-2">
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

      <div class="pt-4 flex">
        <div class="w-2/12 flex justify-center items-center bg-gray-200 rounded-tl-xl rounded-bl-xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-current text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input class="p-2 w-10/12 bg-gray-200 text-sm focus:outline-none rounded-tr-xl rounded-br-xl" type="text" placeholder="Search for messages or ..." />
      </div>

      <div class="pt-4 flex justify-between">
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
    </div>   

    <!-- Main Pane -->
    <div class="flex-grow h-screen bg-pink-100">
      Chat Screen   
    </div>
  </div>
</template>

<style scoped lang="postcss">

</style>

<script setup lang="ts">
import { ref } from 'vue'

// defineProps<{ msg: string }>()

const count = ref(0)
</script>