// store/index.ts

import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    userId: 0,
    RoleId: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    UPDATE_USER_ID(state, value) {
      state.userId = value;
    },
    UPDATE_ROLE_ID(state, value) {
      state.RoleId = value;
    },
  },
  actions: {
    updateUserId(context, value) {
      context.commit("UPDATE_USER_ID", value);
      localStorage.setItem("userId", value); 
    },
    updateRoleId(context, value) {
      context.commit("UPDATE_ROLE_ID", value);
      localStorage.setItem("roleId", value); 
    },
    initializeStore(context) {
      const userId = localStorage.getItem("userId");
      const roleId = localStorage.getItem("roleId");
      if (userId !== null) {
        context.commit("UPDATE_USER_ID", parseInt(userId));
      }
      if (roleId !== null) {
        context.commit("UPDATE_ROLE_ID", parseInt(roleId));
      }
    },
  },
  getters: {
  },
});

// Sayfa yeniden yüklendiğinde LocalStorage'dan verileri alarak store'u günceller
store.dispatch('initializeStore');

export default store;
