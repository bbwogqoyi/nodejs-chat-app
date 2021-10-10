<script setup lang="ts">
defineProps<{
  username:string
  avatarUrl: string
  message: string
  timestamp: string
  isLeftAligned?: boolean
}>();
</script>

<template>
  <div v-if="isLeftAligned" class="flex justify-start">
    <div class="flex items-end w-max m-2">
      <img class="w-8 h-8 mb-1 rounded-full" :src="avatarUrl" :alt="username" :title="username" />
      <div class="rounded-t-xl rounded-r-xl bg-gray-50 py-3 px-4 ml-2 shadow-md" >
        <span class="text-xs text-gray-400">{{timestamp}}</span><br/>
        <span v-nlbr>{{message}}</span>
      </div>
    </div>
  </div>

  <div v-if="!isLeftAligned" class="flex justify-end">
    <div class="flex items-end w-max m-2">
      <div class="rounded-t-xl rounded-l-xl bg-green-100 py-3 px-4 mr-2 shadow-md" >
        <span class="text-xs text-gray-400">{{timestamp}}</span><br/>
        <span v-nlbr>{{message}}</span>
      </div>
      <img class="w-8 h-8 mb-1 rounded-full" :src="avatarUrl" :alt="username" :title="username" />
    </div>
  </div>
</template>


