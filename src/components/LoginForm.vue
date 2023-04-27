<template>
<div class="container">
    <form @submit.prevent="validation()">
        <h1>LoginForm</h1>
        <div class="row mb-3">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="email" v-model="email">
                <div class="validation" v-if="errors.email">{{ errors.email }}</div>
            </div>
        </div>
        <div class="row mb-3">
            <label for="password" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="password" v-model="password">
                <div class="validation" v-if="errors.password">{{ errors.password }}</div>
            </div>
        </div>
        <div class="button">
            <div style="margin-bottom:15px">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
            <div>
                <router-link to="/forgotpass">Forgot Password</router-link>
            </div>
        </div>
        <div class="newuser">
            <router-link to="/registration">Create New User</router-link>
        </div>
    </form>
</div>
</template>

<script>
import api from '@/api/api';

export default {
    name: 'LoginForm',
    data() {
        return {
            errors: {},
            email: '',
            password: '',
        }
    },
    methods: {
        validation() {
            if (this.email == '') {
                this.$set(this.errors, 'email', 'email required.');
            } else {
                this.$delete(this.errors, 'email', '');
            }

            if (this.password == '') {
                this.$set(this.errors, 'password', 'password required.');
            } else {
                this.$delete(this.errors, 'password', '');
            }
            if (Object.keys(this.errors).length == 0) {
                this.login();
            }
        },
        async login() {
            await api.post("/api/login", {
                email: this.email,
                password: this.password,
            }).then((r) => {
                localStorage.setItem("token", r.data.token);
                this.$router.push({
                    path: '/home',
                })
            }).catch(() => {
                alert('invalid email or password');
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

.form-control {
    margin-left: 30px;
    height: 50px;
}

.col-form-label {
    color: cadetblue;
    font-size: 25px;
    padding-right: 60px;
}

.button {
    text-align: center;
}

.validation {
    color: red;
    text-align: center;
}

.newuser{
    text-align: center;
    margin-top: 10px;
}
</style>
