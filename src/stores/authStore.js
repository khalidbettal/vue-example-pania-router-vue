import { defineStore } from 'pinia';



export const useAuthStore = defineStore('auth', {
    state: () => ({
    //   loading: false,
      user: {
        data: {
            name: null,
            email: null
        },
        token: localStorage.getItem('token')
      },
      isLoggedIn : false,
    
    }),
    actions: {
       logout() {
         this.user = {
           data: {
             name: null,
             email: null
           },
           token: localStorage.removeItem('token')
         }
         window.location.reload();
       },
       login() {
         this.user = {
           data: {
             name: 'John Doe',
             email: 'a0sQV@example.com',
           },
           token: localStorage.setItem('token', '123'),
 
         };
         window.location.reload();
       }
  }
});

