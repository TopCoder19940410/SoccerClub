import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        userId: null,
        role: null,
        isAuthenticated: false, 
    }),
    actions: {
        setUser(id, role) {
            this.userId = id;
            this.role = role;
            this.isAuthenticated = true; 
        },
        clearUser() {
            this.userId = null;
            this.role = null;
            this.isAuthenticated = false;
        }
    }
});
