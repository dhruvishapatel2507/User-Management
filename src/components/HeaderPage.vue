<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

        <div class="container-fluid">
            <router-link :to="`/home`" class="navbar-brand" href="#">Home</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="navbar-brand" href="#" v-on:click="logout">Logout</a>
                    </li>
                </ul>
                <button class="btn">
                    <router-link class="button navbar-brand" :to="`/addnewuser`">
                        AddNewUSer
                    </router-link>
                </button>

                <form class="navbar-nav ms-auto mb-2 mb-lg-0 form">
                    <h1>Hellow, {{ me.name }}</h1>
                    <button class="btn">
                        <router-link class="button" :to="`/loginuser`">
                            <i class="bi bi-person-fill icon-white"></i>Profile
                        </router-link>
                    </button>
                </form>

            </div>
        </div>
    </nav>
</div>
</template>

<script>
import api from '@/api/api';
import Swal from 'sweetalert2';

export default {
    name: 'HeaderPage',
    computed: {
        me() {
            return this.$store.getters.me;
        },
    },
    methods: {

        async logout() {
            Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, logout!'

                }).then((result) => {
                        if (result.isConfirmed) {
                            api.post("/api/logout").then((r) => {
                                localStorage.clear(r);
                                this.$router.push({
                                path: '/'
                            });
                            }).catch((e) => {
                                console.log("error", e)
                            });  
                        }

                    })
                },
                mounted() {
                    this.$store.dispatch('me');
                },
        }
    }
</script>

<style scoped>
h1 {
    color: white;
    font-size: 20px;
    text-align: center;
}

.icon-white {
    color: white;
}

.form {
    display: flex;
    align-items: baseline;
}

.button {
    text-decoration: none;
    color: white;
}
</style>
