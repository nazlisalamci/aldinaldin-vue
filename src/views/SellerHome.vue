<template>
  <headerVue :header="'Seller Home'" />
  <div style="margin:80px">
    <v-row>
      <v-col cols="3" v-for="n in products" :key="n">
        <CustomCard :product="n" />
      </v-col>
    </v-row>
</div>
</template>

<script>
import CustomCard from "../components/CustomerComp.vue";
import headerVue from "../components/header.vue";
import store from "@/store";

export default {
  components: {
    CustomCard,
    headerVue,
  },
  data() {
    return {
      products: [],
      userId: store.state.userId,
    };
  },
  created() {
    this.GetProducts();
  },
  watch: {},
  methods: {
    async GetProducts() {
      await this.axios
        .get(`http://localhost:8070/api/1.0/get-product/${this.userId}`)
        .then((result) => {
          if (result.status === 200) {
            this.products = result.data;
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
  },
};
</script>
