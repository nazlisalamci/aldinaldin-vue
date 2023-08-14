<template>
  <v-layout v-if="role==2">
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item
          prepend-avatar="@/assets/aldinaldin.png"
          title="Aldın Aldın"
        ></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" nav>
      <v-list-item to='/aldinaldin/seller-home/home-page' prepend-icon="mdi-home" title="Anasayfa"  ></v-list-item>
      <v-list-item to='/aldinaldin/seller-home/urun-ekle' prepend-icon="mdi-plus" title="Ürün ekle"></v-list-item>
        <v-list-item to='/aldinaldin/seller-home/order' prepend-icon="mdi-reorder-horizontal" title="Siparişler" ></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="Profil"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar><v-app-bar-title>{{ header }}</v-app-bar-title></v-app-bar>
  </v-layout>
  <v-layout v-if="role==1">
  
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item
          prepend-avatar="@/assets/aldinaldin.png"
          title="Aldın Aldın"
        ></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" nav>
      <v-list-item to='/aldinaldin/customer-home/home-page' prepend-icon="mdi-home" title="Anasayfa"  ></v-list-item>
      <v-list-item to='/aldinaldin/customer-home/sepet' prepend-icon="mdi-basket" title="Sepet"></v-list-item>
      <v-list-item to='/aldinaldin/customer-home/order' prepend-icon="mdi-reorder-horizontal" title="Siparişler" ></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="Profil"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar><v-app-bar-title>{{ header }}</v-app-bar-title></v-app-bar>
  </v-layout>
</template>

<script>
import store from "@/store";

export default {
  props: ["header"],
  data() {
    return {
      role:store.state.RoleId,
      CustomerId:store.state.userId
    };
  },
  watch: {},
  methods: {},
  created() {},
};
</script>
