<template>
<div>
    <HeaderPage />
    <h1>USER MANAGEMENT</h1>
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
        <tbody v-for="user in user" :key="user.id">
            <tr>
                <td>{{ user.surname }} {{ user.name }} {{ user.middlename }} </td>
                <td>{{ user.email }}</td>
                <td>{{ user.address_line1 }} , {{ user.address_line2 }} , {{ user.city }} , {{ user.state }} , {{ user.country }} , {{ user.zipcode }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.birth_date }}</td>
                <td>{{ user.hobby }}</td>
                <td class="d-contents">
                    <button class="red" v-on:click="deleteUser(user.id)" :disabled="me.id == user.id">Delete</button>
                    <button class="blue" :disabled="me.id == user.id">
                        <router-link class="button" :to="`/edit/${user.id}`" :disabled="me.id == user.id" :event="me.id == user.id ? '' : 'click'">Upadate</router-link>
                    </button>
                    <button class="green">
                        <router-link class="button" :to="`/view/${user.id}`" :disabled="me.id == user.id" :event="me.id == user.id ? '' : 'click'">View</router-link>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import api from '@/api/api';
import HeaderPage from './HeaderPage.vue';

export default {
    name: 'HomePage',
    components: {
        HeaderPage,
    },
    computed: {
        me() {
            return this.$store.getters.me;
        },
    },
    data() {
        return {
            user: [],
        }
    },
    methods: {
        async userData() {
            await api.get("/api/users").then((r) => {
                this.user = r.data;
            }).catch((e) => {
                console.log("error", e)
            });
        },
        async deleteUser(id) {
            if (confirm("do you really want to delete")) {
                await api.delete(`/api/users/${id}`).then(() => {
                    this.userData()
                }).catch((e) => {
                    console.log("error", e)
                });
            }
        },
        getMeId(id) {
            this.meid = id;
        }
    },

    mounted() {
        this.userData();
        this.$store.dispatch('me');
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

.button {
    text-decoration: none;
    color: black;
}

.red {
    background-color: red;
    color: white;
    margin: 5px;
}

.green {
    background-color: green;
    margin: 5px;
}

.blue {
    background-color: blue;
    margin: 5px;
}

h1 {
    color: cadetblue;
    text-align: center;
}
</style>
