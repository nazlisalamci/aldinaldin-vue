<template>
    <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">
            Customer Home
        </v-responsive>
    </v-container>
</template>
  
<script>
export default {
    data: (vm) => ({

    }),
    watch: {
    },
    methods: {
    },
    created() {
        console.log(this.$router.currentRoute._value.params.customer_id)
    },
}
    //
</script>
  