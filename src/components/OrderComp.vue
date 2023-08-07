<template>
  <v-card class="rounded-xl" style="margin: 20px">
    <v-card-title>{{ order.creationDate }} </v-card-title>
    <v-card-subtitle>Total :{{ order.invoice }} TL</v-card-subtitle>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <v-card-actions
      >{{ order.orderStatus }} <v-spacer></v-spacer>
      <v-icon @click="OrderDetail(order.id)"
        >mdi-chevron-right</v-icon
      ></v-card-actions>
  </v-card>
  <v-dialog v-model="dialog" width="70%">
    <v-card>
        <v-card-title class="d-flex justify-space-between"><span>Order</span> <v-icon @click="dialog=false">mdi-close</v-icon></v-card-title> 
        <v-row>
            <v-col cols="3" v-for="product in orderProducts" :key="product.id">
              <v-card class="rounded-xl" style="margin:10px">
                <v-card-title>{{ product.name }}</v-card-title>
                <v-card-subtitle>{{ product.description }}</v-card-subtitle>
                
                <v-card-text> <img width="200" :src="product.image" /></v-card-text>
                <v-card-actions>Price : {{ product.price }}</v-card-actions>
              </v-card>
            </v-col>
          </v-row>
    </v-card>
  
  </v-dialog>
</template>

<script>
import store from "@/store";
export default {
  props: ["order"],
  data() {
    return {
      dialog: false,
      orderProducts: [],
    };
  },
  methods: {
    async OrderDetail(id) {
      await this.axios
        .get(`http://localhost:8070/api/1.0/order-detail/${id}`)
        .then((result) => {
          if (result.status === 200) {
            this.orderProducts = result.data.map(function (value) {
              return value.product;
            });
            console.log(result.data);
            console.log(this.orderProducts);
            this.dialog = true;
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
