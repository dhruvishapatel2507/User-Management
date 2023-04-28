<template>
<div>
    <HeaderPage />
    <div class="container">
        <h1 class="text-center">Login USer Details</h1>
        <table class="table table-striped p-3 ">
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{{me.surname }} {{ me.name }} {{ me.middlename }}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{{ me.email }}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{{ me.address_line1 }} , {{ me.address_line2 }} , {{ me.city }} , {{ me.state }} , {{ me.country }} , {{ me.zipcode }}</td>
                </tr>
                <tr>
                    <td>PhoneNumber</td>
                    <td>{{ me.phone }}</td>
                </tr>
                <tr>
                    <td>birth_date</td>
                    <td>{{ me.birth_date }}</td>
                </tr>
                <tr>
                    <td>gender</td>
                    <td>{{ me.gender }}</td>
                </tr>
                <tr>
                    <td>Hobby</td>
                    <td>{{ me.hobby }}</td>
                </tr>
            </tbody>
        </table>
        <div class="text-center">
            <button class="button">
                <router-link class="button" :to="`/home`">Back</router-link>
            </button>
            <button class="button">
                <router-link class="button" :to="`/changeprofile`">Change Profile</router-link>
            </button>
        </div>
        <div class="pass">
            <router-link :to="`/changepassword`">Change Password</router-link>
        </div>
    </div>
</div>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
export default {
    name: 'ViewLoginUser',
    components: {
        HeaderPage,
    },
    computed: {
        me() {
            return this.$store.getters.me;
        },
    },
    mounted() {
        this.$store.dispatch('me');
    },
}
</script>

<style scoped>
.button {
    text-decoration: none;
    width: 20%;
    color: black;
    margin-right: 10px;
    background-color: #0b5ed7;
}

h1 {
    color: cadetblue;
}

.pass {
    text-align: center;
    margin-top: 25px;
}
</style>
