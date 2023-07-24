<template>

    <headerVue :header="'Add Product'" />
    <div style="margin:80px">
    <v-responsive class="align-center text-center fill-height">
      <v-card>
        <!-- Use v-model on the text fields -->
        <v-text-field
          v-model="product.name"
          label="Name"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="product.description"
          label="Description"
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="product.price"
          label="Price"
          type="number"
          variant="outlined"
        ></v-text-field>
        <v-file-input
          v-model="imgFile"
          label="Image"
          variant="outlined"
          prepend-icon="mdi-camera"
        ></v-file-input>
        <v-btn @click="createProduct()">Upload</v-btn>
      </v-card>
    </v-responsive>
    </div>
  
</template>

<script>
import store from "@/store";
import headerVue from "../components/header.vue";


export default {
  components: {
    headerVue
  },
  data() {
    return {
      imgFile: null,
      product: {
        price: null,
        description: null,
        name: null,
        image: null,
      },
    };
  },
  created() {
    
  },
  watch: {
    imgFile: {
      async handler(val) {
        const file = val[0];
        const fileReader = new FileReader();
        // Create a Promise to handle the FileReader result
        const resultPromise = new Promise((resolve) => {
          fileReader.onload = () => resolve(fileReader.result);
        });

        fileReader.readAsDataURL(file);

        // Wait for the Promise to resolve
        const result = await resultPromise;
        this.product.image = result;
      },
      deep: true,
    },
  },
  methods: {
    async createProduct() {
      console.log(this.product);
      const response = await this.axios
        .post(
          `http://localhost:8070/api/1.0/create-product/${store.state.userId}`,
          { Product: this.product }
        )
        .then((result) => {
          if (response.status === 200) {
            console.log(response);
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
  },
};
</script>
