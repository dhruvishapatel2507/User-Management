<template>
<div class="container">
    <form @submit.prevent="changepassword()">
        <h1>Change Password</h1>
        <div class="row mb-3">
            <h3>{{ error }}</h3>
            <label for="currentPassword" class="col-sm-2 col-form-label">Current Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="currentPassword" v-model="current_password">
            </div>
        </div>
        <div class="row mb-3">
            <label for="password" class="col-sm-2 col-form-label">New Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="password" v-model="password">
            </div>
        </div>
        <div class="row mb-3">
            <label for="confirmpassword" class="col-sm-2 col-form-label">Confirm Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="confirmpassword" v-model="password_confirmation">
            </div>
        </div>
        <div class="button">
            <div style="margin-bottom:15px">
                <button type="submit" class="btn btn-primary text-center">Submit</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import api from '@/api/api';

export default {
    name: 'ChangePassword',
    data() {
        return {
            error: '',
            current_password: '',
            password: '',
            password_confirmation: ''
        }
    },
    methods: {
        async changepassword() {
            await api.put("/api/change-password").then((r) => {
                this.current_password = r.current_password,
                    this.password = r.password,
                    this.confirmpassword = r.confirmpassword

            }).catch((e) => {
                this.error = e.message
            })

        }
    }
}
</script>

<style scoped>
.container {
    width: 70%;
    display: flex;
    justify-content: center;
    margin: 200px;
}

h1 {
    color: cadetblue;
    text-align: center;
    font-size: 50px;
    padding-bottom: 25px;
}
h3{
    color: red;
    text-align: center;
}

.col-form-label {
    color: cadetblue;
    font-size: 18px
}

.form-control {
    margin-left: 30px;
    height: 50px;
}

.button {
    text-align: center;
}
</style>
