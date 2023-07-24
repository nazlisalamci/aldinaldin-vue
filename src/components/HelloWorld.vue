<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-row >
        <v-col cols="5 offset-3">
          <v-card style="padding: 7px;">
            <v-text-field variant="outlined" v-model="userModel.mail" label="E-mail"></v-text-field>
            <v-text-field variant="outlined" v-model="userModel.password" label="password" type="password"></v-text-field>
            <v-btn @click="PostLogin()">Login</v-btn>
          </v-card>
        </v-col>
      </v-row>

    </v-responsive>
  </v-container>
</template>

<script >
import store from '@/store';

export default {
  data: (vm) => ({
    userModel: {
      mail: "customerSeller@gmail.com",
      password: "sellerPassword"
    }
  }),
  watch: {
    userModel: {
      handler(val) {
      },
      deep: true
    }
  },
  methods: {
    async PostLogin() {
      let self = this
      try {
        const response = await this.axios
          .post("http://localhost:8070/api/1.0/login-user", {
            User: self.userModel
          }).then((res) => {
            if (res.status == 200) {
              this.$store.dispatch('updateUserId', res.data.id);
              this.$store.dispatch('updateRoleId', res.data.role.id);

              if (res.data.role.id == 1) {
                self.$router.push({ name: "CustomerHome", params: { customer_id: res.data.id } })
              }
              else {
                self.$router.push({ path:"aldinaldin/seller-home/home-page" })
              }
            }
          })
      } catch (err) {
       console.log("err")
       console.log(err)
      }
    }
  },
}
  //
</script>
