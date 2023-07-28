<template>
  <v-card class="rounded-xl" style="height: 100%">
    <v-card-title v-if="role == 1">{{ product.user.name }}</v-card-title>
    <v-divider></v-divider>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>{{ product.description }}</v-card-subtitle>
    <v-divider></v-divider>
    <v-card-text style="max-height:200px; min-height:200px; ">
      <img width="300"   :src="product.image" />
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text> Price : {{ product.price }}TL </v-card-text>
    <v-divider></v-divider>
    <v-card-actions v-if="role == 2" >
      <v-spacer></v-spacer>
      <v-btn @click="DeleteProduct(product.id)">Delete</v-btn>
      <v-btn @click="GetThisProduct(product)">Update</v-btn>
    </v-card-actions>
    <v-card-actions v-else-if="role == 1" >
      <v-spacer></v-spacer>
      <v-btn @click="AddToBasket(product)">Add</v-btn>
    </v-card-actions>
  </v-card>

  <v-dialog v-model="dialog" width="70%" >
    <v-card>
      <v-text-field
        v-model="updateProduct.name"
        label="Name"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="updateProduct.description"
        label="Description"
        variant="outlined"
      ></v-text-field>
      <v-text-field
        v-model="updateProduct.price"
        label="Price"
        type="number"
        variant="outlined"
      ></v-text-field>
      <v-card-text>
        <img width="300" :src="updateProduct.image" />
      </v-card-text>
      <v-file-input
        v-model="imgFile"
        label="Image"
        variant="outlined"
        prepend-icon="mdi-camera"
      ></v-file-input>
      <v-btn @click="UpdateProduct()">Update</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import store from "@/store";
export default {
  props: ["product"],
  data() {
    return {
      role: store.state.RoleId,
      userId:store.state.userId,
      dialog: false,
      imgFile:null,
      updateProduct: {
        price: null,
        description: null,
        name: null,
        image: null,
      },
    };
  },
  watch: {
    product: {
      handler(val) {},
      deep: true,
    },
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
        this.updateProduct.image = result;
      },
      deep: true,
    },
  },
  created() {},
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
    async GetThisProduct(product) {
      this.updateProduct=product;
      this.dialog=true;
    },
    async UpdateProduct() {
      await this.axios
        .post(`http://localhost:8070/api/1.0/update-product`,{
          Product:this.updateProduct
        })
        .then((result) => {
          if (result.status === 200) {
          }
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
    async AddToBasket(product) {
      await this.axios
        .post(`http://localhost:8070/api/1.0/add-to-basket/${this.userId}`,{
          Product:product
        })
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
