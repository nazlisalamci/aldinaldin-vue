<template>
  <headerVue :header="'Customer Home'" />
  <div style="margin: 80px">
    <v-row>
        <v-col cols="3" v-for="n in products" :key="n">
          <CustomCard :product="n" />
        </v-col>
      </v-row>
  </div>
</template>

<script>
import headerVue from "../components/header.vue";
import CustomCard from "../components/CustomerComp.vue";

export default {
  components: {
    headerVue,
    CustomCard,
  },
  data: (vm) => ({
    products: [],
  }),
  watch: {},
  methods: {
    async GetAllProducts() {
      await this.axios
        .get(`http://localhost:8070/api/1.0/get-all-product`)
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
  created() {
    this.GetAllProducts()
  },
};
//
</script>
