<template>
  <headerVue :header="'Order'" />
  <v-card>
    <v-card-title>{{ order.orderStatus }}</v-card-title>
  </v-card>
</template>

<script>
import store from "@/store";
import headerVue from "../components/header.vue";
export default {
  components: {
    headerVue,
  },
  data() {
    return {
      userId: store.state.userId,
      orders: [],
    };
  },
  methods: {
    async GetAllOrders() {
      await this.axios
        .get(`http://localhost:8070/api/1.0/get-all-ordes/${this.userId}`)
        .then((result) => {
          if (result.status === 200) {
            this.orders = result.data;
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
  },
};
</script>

<style></style>
