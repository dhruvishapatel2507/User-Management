<template>
<div>
    <HeaderPage />
    <div class="container">
        <h1 class="text-center">User Details</h1>
        <table class="table table-striped p-3 ">
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{{ surname }} {{ name }} {{ middlename }}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{{ email }}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{{ address_line1 }} , {{ address_line2 }} , {{ city }} , {{ state }} , {{ country }} , {{ zipcode }}</td>
                </tr>
                <tr>
                    <td>PhoneNumber</td>
                    <td>{{ phone }}</td>
                </tr>
                <tr>
                    <td>birth_date</td>
                    <td>{{ birth_date }}</td>
                </tr>
                <tr>
                    <td>gender</td>
                    <td>{{ gender }}</td>
                </tr>
                <tr>
                    <td>Hobby</td>
                    <td>{{ hobby }}</td>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <button class="button">
                <router-link class="button" :to="`/home`">Back</router-link>
            </button>
        </div>
    </div>
</div>
</template>

<script>
import api from '@/api/api';
import HeaderPage from './HeaderPage.vue';
export default {
    name: 'ViewUser',
    components: {
        HeaderPage,
    },
    data() {
        return {
            name: "",
            email: "",
            middlename: "",
            surname: "",
            address_line1: "",
            address_line2: "",
            country: "",
            state: "",
            city: "",
            zipcode: "",
            phone: "",
            birth_date: "",
            gender: "",
            hobby: "",
        }
    },
    methods: {

        async userdata() {
            await api.get(`/api/users/${this.$route.params.id}`).then((r) => {
                this.name = r.data.name,
                    this.email = r.data.email,
                    this.middlename = r.data.middlename,
                    this.surname = r.data.surname,
                    this.address_line1 = r.data.address_line1,
                    this.address_line2 = r.data.address_line2,
                    this.country = r.data.country,
                    this.state = r.data.state,
                    this.city = r.data.city,
                    this.zipcode = r.data.zipcode,
                    this.phone = r.data.phone,
                    this.birth_date = r.data.birth_date,
                    this.gender = r.data.gender,
                    this.hobby = r.data.hobby
            })

        }
    },
    async mounted() {
        this.userdata();
    },
}
</script>

<style scoped>
.button {
    text-decoration: none;
    width: 20%;
    color: black;
}

h1 {
    color: cadetblue;
}
</style>
