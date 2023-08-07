<template>
  <headerVue :header="'Order'" />
  <div style="margin: 80px;">
    <v-list >
      <v-list-item v-for="order in orders" :key="order.id">
        <OrderComp :order="order" />
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import store from "@/store";
import headerVue from "../components/header.vue";
import OrderComp from "../components/OrderComp.vue";
export default {
  components: {
    headerVue,
    OrderComp,
  },
  data() {
    return {
      userId: store.state.userId,
      orders: [],
    };
  },
  created() {
    this.GetAllOrders();
  },
  methods: {
    async GetAllOrders() {
      await this.axios
        .get(`http://localhost:8070/api/1.0/get-all-orders/${this.userId}`)
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
