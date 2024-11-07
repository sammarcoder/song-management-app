<template>
    <div class="w-100 fill-height d-flex align-center justify-center m-auto">

        <div class="w-33 h-50 border-lg rounded-lg d-flex flex-column align-center justify-center">
            <h1 class="mb-3">Register</h1>
            <div>
                <v-text-field label="Enter your Email" v-model="email" placeholder="Email" variant="outlined"
                    width="350"></v-text-field>
            </div>
            <div>
                <v-text-field label="Enter your Password" v-model="password" placeholder="Enter your password" variant="outlined"
                    type="password" width="350"></v-text-field>
            </div>
            <v-btn @click="register" color="primary">Register</v-btn>
            <div v-html="error" class="text-red"></div>
            <!-- <p>Your email is: {{ email }}</p>
            <p>Your password is: {{ password }}</p> -->
        </div>
    </div>
</template>
<script>
import AuthenticationServices from '../services/AuthenticationServices'

export default {
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {

        async register() {
            this.error = null;
            try {
                await AuthenticationServices.register({
                    email: this.email,
                    password: this.password
                })
            }
            catch (err) {
                this.error = err.response.data.error
            }
            console.log('hi')

        }
    }
}
</script>
<style></style>
