<template>
  <v-card class="rounded-xl" style="margin: 20px">
    <v-card-title>{{ order.creationDate }}  <v-btn style="float:right" v-if="order.orderStatus!=4" @click="cancelOrder(order.id)">İptal Et</v-btn> </v-card-title>
    <v-card-subtitle>Total :{{ order.invoice }} TL</v-card-subtitle>
    <v-spacer></v-spacer>
    <v-divider></v-divider>

    <v-card-actions
      >{{ orderStatus }} <v-btn v-if="role==2" @click="changeStatus(order.id)">{{ nextstatus }}</v-btn> <v-spacer></v-spacer>
      <v-icon @click="OrderDetail(order.id)"
        >mdi-chevron-right</v-icon
      ></v-card-actions
    >
  </v-card>
  <v-dialog v-model="dialog" width="70%">
    <v-card>
      <v-card-title class="d-flex justify-space-between"
        ><span>Order</span>
        <v-icon @click="dialog = false">mdi-close</v-icon></v-card-title
      >
      <v-row>
        <v-col cols="3" v-for="product in orderProducts" :key="product.id">
          <v-card class="rounded-xl" style="margin: 10px">
            <v-card-title>{{ product.name }}</v-card-title>
            <v-card-subtitle>{{ product.description }}</v-card-subtitle>

            <v-card-text> <img width="200" :src="product.image" /></v-card-text>
            <v-card-actions>Price : {{ product.price }}</v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-card-actions><br /></v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import store from "@/store";
export default {
  props: ["order"],
  data() {
    return {
      role:store.state.RoleId,
      dialog: false,
      orderProducts: [],
    };
  },
  methods: {
    async cancelOrder(id) {
      await this.axios
        .get(`http://localhost:8070/api/1.0/cancel-order/${id}`)
        .then((result) => {
          if (result.status === 200) {
                   
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
    async changeStatus(id) {
      await this.axios
        .get(`http://localhost:8070/api/1.0/change-order-status/${id}`)
        .then((result) => {
          if (result.status === 200) {
                   
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
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
  computed: {
    orderStatus() {
      var status = "";

      switch (this.order.orderStatus) {
        case 1:
          status = "Hazırlanıyor";
          break;
        case 2:
          status = "Yolda";
          break;
        case 3:
          status = "Bitti";
          break;
        case 4:
          status = "İptal";
          break;
      }
      return status;
    },
    nextstatus() {
      var newStatus = "";
      switch (this.orderStatus) {
        case "Hazırlanıyor":
          newStatus = "Yola Çıkar";
          break;
        case "Yolda":
          newStatus = "Bitir";
          break;
      }

      return newStatus;
    },
  },
};
</script>

<style></style>
