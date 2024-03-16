import { defineStore } from 'pinia';

import { fetchWrapper, router } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore("auth",{
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: '/dashboard'
    }),
    actions: {
        async login(username, password, email) {
            const user = await fetchWrapper.post(`${baseUrl}/login`, { username, password, email });

            // update pinia state
            this.user = user;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        async loginTg(user){
            const token = await fetchWrapper.get(`${baseUrl}/login_tg`, { name: user.first_name, tg_id: user.id, tgLogin: user.username});
            console.log(token);
        },

        async registerTg(user){
            const token = await fetchWrapper.get(`${baseUrl}/reister_tg`,{ name: user.first_name, tg_id: user.id, tgLogin: user.username});
            console.log(token);
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});
