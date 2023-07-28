<template>
  <headerVue :header="'Basket'" />
  <div style="margin: 80px">
    <v-row n>
      <v-col cols="3" v-for="n in products" :key="n">
        <BasketComp :product="n" />
      </v-col>
    </v-row>
    <v-btn  @click="CreateOrder()" v-if="products.length>0" class="mt-3" color="red">Order</v-btn>
  </div>
</template>

<script>
import store from "@/store";
import headerVue from "../components/header.vue";
import BasketComp from "../components/BasketComp.vue";
export default {
  components: {
    headerVue,
    BasketComp,
  },
  data() {
    return {
      products: [],
      userId: store.state.userId,

    };
  },
  methods: {
    async GetAllProducts() {
      await this.axios
        .get(`http://localhost:8070/api/1.0/get-all-basket/${this.userId}`)
        .then((result) => {
          if (result.status === 200) {
            this.products = result.data;
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
    async CreateOrder() {
      await this.axios
        .get(`http://localhost:8070/api/1.0/create-order/${this.userId}`)
        .then((result) => {
          if (result.status === 200) {
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
  },
  created() {
    this.GetAllProducts()
  },
};
</script>

<style></style>
