<template>
<div>
    <HeaderPage @id="getMeId($event)" />
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
                <td>
                    <button class="red" v-on:click="deleteUser(item.id)" :disabled="meid == item.id">Delete</button>
                    <button class="blue" :disabled="meid == item.id">
                        <router-link class="button" :to="`/edit/${item.id}`" :disabled="meid == item.id" :event="meid == item.id ? '' : 'click'">Upadate</router-link>
                    </button>
                    <button class="green">
                        <router-link class="button" :to="`/view/${item.id}`">View</router-link>
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
    data() {
        return {
            meid: '',
            users: [],
        }
    },
    methods: {
        async userData() {
            await api.get("/api/users").then((r) => {
                this.users = r.data;
            }).catch((e) => {
                console.log("error", e)
            });
        },
        async deleteUser(id) {
            if (confirm("do ypu really want to delete")) {
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

    async mounted() {
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
</style>
