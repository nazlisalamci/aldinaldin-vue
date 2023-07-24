<template>
    <v-card class="rounded-xl " style="height: 100%">
      <v-card-title v-if="role==1" >{{ product.user.name }}</v-card-title>
      <v-divider></v-divider>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>{{ product.description }}</v-card-subtitle>
      <v-card-text>
        <img width="300"  :src="product.image" />
      </v-card-text>
      <v-card-text> Price : {{ product.price }}TL </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="DeleteProduct(product.id)">Delete</v-btn>
        <v-btn>Update</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import store from '@/store';
export default {
  props: ["product"],
  data() {
    return {
      role:store.state.RoleId
    };
  },
  watch: {
    product: {
      handler(val) {},
      deep: true,
    },
  },
  created() {
  },
  methods: {
    async DeleteProduct(id) {
      await this.axios
        .get(`http://localhost:8070/api/1.0/delete-product/${id}`)
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
