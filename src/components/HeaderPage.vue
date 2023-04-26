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
                        <router-link :to="`/registration`" class="nav-link active" aria-current="page" href="#">Registration</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="`/login`" class="nav-link" href="#">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                </ul>
                <form class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <h1>Welcome,{{name}}</h1>
                </form>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
import api from '@/api/api';
export default {
    name: 'HeaderPage',
    data() {
        return {
            name: '',
        }
    },
    methods:{
    async personalData() {
            await api.get("/api/me").then((r) => {
                this.name = r.data.name;
                this.$emit('id',r.data.id)
            }).catch((e) => {
                console.log("error", e)
            });
        },
    },
    async mounted() {
        this.personalData();
    },
}
</script>
<style scoped>
h1 {
    color: white;
    font-size: 20px;
}
</style>
