<template>
  <v-card class="rounded-xl" style="height: 100%">
    <v-card-title>{{ product.user.name }}</v-card-title>
    <v-divider></v-divider>
    <v-card-title>{{ product.product.name }}</v-card-title>
    <v-card-subtitle>{{ product.product.description }}</v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text style="max-height: 200px; min-height: 200px">
      <img width="300" :src="product.product.image" />
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text> Price : {{ product.product.price }}TL </v-card-text>
    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="DeleteProduct(product.id)">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import store from "@/store";
export default {
  props: ["product"],
  data() {
    return {
      role: store.state.RoleId,
      userId: store.state.userId,
    };
  },
  watch: {
    product: {
      handler(val) {},
      deep: true,
    },

  },
  created() {},
  methods: {
    async DeleteProduct(id) {
      await this.axios
        .get(`http://localhost:8070/api/1.0/delete-product-in-basket/${id}`)
        .then((result) => {
          if (result.status === 200) {
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
  },
};
</script>
