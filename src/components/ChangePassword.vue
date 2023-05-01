<template>
<div>
    <HeaderPage />
    <div class="container">
        <form @submit.prevent="validation()">
            <h1>Change Password</h1>
            <div class="row mb-3">
                <label for="currentPassword" class="col-sm-2 col-form-label">Current Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="currentPassword" v-model="current_password">
                </div>
                <div v-if="errors.current_password" class="validation">{{ errors.current_password }}</div>
            </div>
            <div class="row mb-3">
                <label for="password" class="col-sm-2 col-form-label">New Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="password" v-model="password">
                </div>
                <div v-if="errors.password" class="validation">{{ errors.password }}</div>
            </div>
            <div class="row mb-3">
                <label for="confirmpassword" class="col-sm-2 col-form-label">Confirm Password</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="confirmpassword" v-model="password_confirmation">
                </div>
                <div v-if="errors.password_confirmation" class="validation">{{ errors.password_confirmation }}</div>
            </div>
            <div class="button">
                <div style="margin-bottom:15px">
                    <button type="submit" class="btn btn-primary text-center">Submit</button>
                </div>
                <div style="margin-bottom:15px">
                    <button type="submit" class="btn btn-primary text-center">
                        <router-link class="button" to="/loginuser">Back</router-link>
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import api from '@/api/api';
import HeaderPage from './HeaderPage.vue';
import Swal from 'sweetalert2'

export default {
    name: 'ChangePassword',
    components: {
        HeaderPage,
    },
    data() {
        return {
            errors: [],
            current_password: '',
            password: '',
            password_confirmation: ''
        }
    },
    methods: {
        validation() {
            if (this.current_password == '') {
                this.$set(this.errors, 'current_password', 'enter current password');
            } else {
                this.$delete(this.errors, 'current_password', '');
            }

            if (this.password == '') {
                this.$set(this.errors, 'password', 'password required.');
            } else if (!this.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)) {
                this.$set(this.errors, 'password', 'Password must be 8-16 character and contain uppercase,number and special character.');
            } else {
                this.$delete(this.errors, 'password', '');
            }

            if (this.password_confirmation == '') {
                this.$set(this.errors, 'password_confirmation', 'password Must be same.');
            } else if (this.password != this.password_confirmation) {
                this.$set(this.errors, 'password_confirmation', 'password not same');
            } else {
                this.$delete(this.errors, 'password_confirmation', '');
            }

            if (Object.keys(this.errors).length == 0) {
                this.changepassword();
            }

        },
        async changepassword() {
            await api.put("/api/change-password", {
                current_password: this.current_password,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then((r) => {
                if (r.data.success == false) {
                    Swal.fire('Error', `${r.data.message}`, 'error')
                } else {
                    Swal.fire({
                        title: 'Password change successfully',
                        icon: 'success',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.$router.push({
                                path: '/home',
                            });
                        }
                    });
                }
            }).catch((e) => {
                Swal.fire({
                    title: 'Something went wrong',
                    icon: 'error',
                }, e)
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

.col-form-label {
    color: cadetblue;
    font-size: 18px
}

.form-control {
    margin-left: 30px;
    height: 50px;
}

.validation {
    color: red;
    text-align: center;
}

.button {
    text-align: center;
    text-decoration: none;
    color: white;
}
</style>
