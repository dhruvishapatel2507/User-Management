<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link to="Homepage" class="navbar-brand" href="#">Home</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="registrationform" class="nav-link active" aria-current="page" href="#">Registration</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="loginform" class="nav-link" href="#">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Logout</a>
                    </li>
                </ul>
                <form class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <h1>Welcome,{{name}} to HomePage</h1>
                </form>
            </div>
        </div>
    </nav>
    <table class="table">
        <thead class="table-light">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>PhoneNumber</th>
                <th>Gender</th>
                <th>BirthDate</th>
                <th>Hobby</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody v-for="item in users" :key="item.id">
            <tr>
                <td>{{ item.surname }} {{ item.name }} {{ item.middlename }} </td>
                <td>{{ item.email }}</td>
                <td>{{ item.address_line1 }} , {{ item.address_line2 }} , {{ item.city }} , {{ item.state }} , {{ item.country }} , {{ item.zipcode }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.gender }}</td>
                <td>{{ item.birth_date }}</td>
                <td>{{ item.hobby }}</td>
                <td ><button v-on:click="deleteUser(item.id)">Delete</button>
                    <button ><router-link class="button" :to="`/edituser/${item.id}`">Upadate</router-link></button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import api from '@/api/api';

export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            users: [],
        }
    },
    methods: {
        async personalData() {
            await api.get("/api/me").then((r) => {
                this.name = r.data.name;
            }).catch((e) => {
                console.log("error", e)
            });
        },
        async userData() {
            await api.get("/api/users").then((r) => {
                this.users = r.data;
            }).catch((e) => {
                console.log("error", e)
            });
        },
        async deleteUser(id) {
            await api.delete(`/api/users/${id}`).then(() => {
                this.userData()
            }).catch((e) => {
                console.log("error", e)
            });
        },
    },
    async mounted() {
        this.personalData();
        this.userData();
    },

}
</script>

<style scoped>
table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
}

th,
td {
    border: 1px solid;
    padding: 8px;
}

h1 {
    color: white;
    font-size: 20px;
}
.button{
    text-decoration: none;
    color: black;
}
</style>
