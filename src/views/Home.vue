<template>
  <div>
    <p v-if="authStore.user.token" class="text-center text-3xl font-bold my-5 mt-60">you can navigate to <a href="/users" class="text-indigo-600 underline">/users</a> </p>
    <p v-else class="text-center text-3xl font-bold my-5 mt-60">you can't navigate to <a href="/users" class="text-red-600 underline">/users</a></p>
    <div class="text-center mx-auto my-12 text-3xl">
        <div v-if="authStore.user.token">
    <button @click="authStore.logout()">Logout</button>
    </div>
    <div v-else>
    <button @click="authStore.login()">Login</button>
    </div>
    </div>
   

  </div>
</template>

<script>
   import { useAuthStore } from '@/stores/authStore';


   export default {
     setup() {
       const authStore = useAuthStore();

       return {
         authStore,
       };
     }
   };
</script>
   
<style>

</style>
