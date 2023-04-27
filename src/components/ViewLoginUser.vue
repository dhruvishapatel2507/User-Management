<template>
<div class="container">
    <h1 class="text-center">Login USer Details</h1>
    <table class="table table-striped p-3 ">
        <tbody>
            <tr>
                <td>Name</td>
                <td>{{ users.surname }} {{ users.name }} {{ users.middlename }}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{{ users.email }}</td>
            </tr>
            <tr>
                <td>Address</td>
                <td>{{ users.address_line1 }} , {{ users.address_line2 }} , {{ users.city }} , {{ users.state }} , {{ users.country }} , {{ users.zipcode }}</td>
            </tr>
            <tr>
                <td>PhoneNumber</td>
                <td>{{ users.phone }}</td>
            </tr>
            <tr>
                <td>birth_date</td>
                <td>{{ users.birth_date }}</td>
            </tr>
            <tr>
                <td>gender</td>
                <td>{{ users.gender }}</td>
            </tr>
            <tr>
                <td>Hobby</td>
                <td>{{ users.hobby }}</td>
            </tr>
        </tbody>
    </table>
    <div class="text-center">
        <button class="button">
            <router-link class="button" :to="`/home`">Back</router-link>
        </button>
        <button class="button">
            <router-link class="button" :to="`/edit/${users.id}`">Edit</router-link>
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: 'ViewLoginUser',
    computed: {
        users() {
            return this.$store.getters.users;
        },
    },
    mounted() {
        this.$store.dispatch('users');
    },
}
</script>

<style scoped>
.button {
    text-decoration: none;
    width: 20%;
    color: black;
    margin-right: 10px;
}

h1 {
    color: cadetblue;
}
</style>
