<template>
<div>
    <HeaderPage />
    <div class="container">
        <h1>Change User Profile</h1>
        <form class="row g-3">
            <div class="col-md-6">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" v-model="me.name" />
            </div>
            <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="me.email" />
            </div>

            <div class="col-md-6">
                <label for="middlename" class="form-label">middlename</label>
                <input type="text" class="form-control" id="middlename" v-model="me.middlename" />
            </div>
            <div class="col-md-6">
                <label for="surname" class="form-label">surname</label>
                <input type="text" class="form-control" id="surname" v-model="me.surname" />
            </div>
            <div class="col-12">
                <label for="address_line1" class="form-label">address_line1</label>
                <input type="text" class="form-control" id="address_line1" placeholder="1234 Main St" v-model="me.address_line1" />
            </div>
            <div class="col-12">
                <label for="address_line2" class="form-label">address_line2</label>
                <input type="text" class="form-control" id="address_line2" placeholder="Apartment, studio, or floor" v-model="me.address_line2" />
            </div>
            <div class="col-md-4">
                <label for="city" class="form-label">City</label>
                <input type="text" class="form-control" id="city" v-model="me.city" />
            </div>
            <div class="col-md-2">
                <label for="state" class="form-label">state</label>
                <input type="text" class="form-control" id="state" v-model="me.state" />
            </div>
            <div class="col-md-4">
                <label for="country" class="form-label">country</label>
                <select id="country" class="form-select" v-model="me.country">
                    <option value="" selected>Choose...</option>
                    <option value="uk">uk</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                </select>
            </div>
            <div class="col-md-2">
                <label for="zipcode" class="form-label">zipcode</label>
                <input type="text" class="form-control" id="zipcode" v-model="me.zipcode" />
            </div>
            <div class="col-md-6">
                <label for="phone" class="form-label">phone</label>
                <input type="text" class="form-control" id="phone" v-model="me.phone" />
            </div>
            <div class="col-md-6">
                <label for="birth_date" class="form-label">birth_date</label>
                <input type="date" class="form-control" id="birth_date" v-model="me.birth_date" />
            </div>
            <div class="col-md-6">
                <label for="gender" class="form-label">gender</label>
                <div class="radio">
                    <div class="form-check,col-md-2">
                        <input class="form-check-input" type="radio" name="gender" value="Male" id="Male" v-model="me.gender" />
                        <label class="form-check-label" for="Male">
                            Male
                        </label>
                    </div>
                    <div class="form-check,col-md-2">
                        <input class="form-check-input" type="radio" name="gender" value="Female" id="Female" v-model="me.gender" />
                        <label class="form-check-label" for="Female">
                            Female
                        </label>
                    </div>
                </div>
            </div>
        </form>
        <div class="col-md-6">
            <label for="hobby" class="form-label">hobby</label>
            <div class="radio">
                <div class="form-check-col-md-2">
                    <input class="form-check-input" type="checkbox" name="hobby" value="Hockey" id="Hockey" v-model="hobby" />
                    <label class="form-check-label" for="Hockey">
                        Hockey
                    </label>
                </div>
                <div class="form-check-col-md-2">
                    <input class="form-check-input" type="checkbox" value="Badminton" name="hobby" id="Badminton" v-model="hobby" />
                    <label class="form-check-label" for="Badminton">
                        Badminton
                    </label>
                </div>
                <div class="form-check-col-md-2">
                    <input class="form-check-input" type="checkbox" value="Cricket" name="hobby" id="Cricket" v-model="hobby" />
                    <label class="form-check-label" for="Cricket">
                        Cricket
                    </label>
                </div>
            </div>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary" v-on:click="changeprofile()">Submit</button>
            <button class="btn btn-primary ms-2 button">
                <router-link class="button" :to="`/loginuser`">Back</router-link>
            </button>
        </div>
    </div>
</div>
</template>

<script>
import HeaderPage from './HeaderPage.vue';
import api from '@/api/api';

export default {
    name: "ChangeProfile",
    components: {
        HeaderPage
    },
    data() {
        return {
            me: {},
            hobby: [],
        }
    },
    mounted() {
        this.me = this.$store.getters.me;
        this.hobby = this.me.hobby.split(',');
    },
    methods: {
        async changeprofile() {
            var hobbyStr = this.hobby.join(',');
            await api.put(`/api/change-profile`, {
                name: this.me.name,
                email: this.me.email,
                middlename: this.me.middlename,
                surname: this.me.surname,
                address_line1: this.me.address_line1,
                address_line2: this.me.address_line2,
                country: this.me.country,
                state: this.me.state,
                city: this.me.city,
                zipcode: this.me.zipcode,
                phone: this.me.phone,
                birth_date: this.me.birth_date,
                gender: this.me.gender,
                hobby: hobbyStr,
            }).then((r) => {
                alert("submitted", r)
                this.$router.push({
                    path: '/loginuser'
                })
            }).catch((e) => {
                console.log("error", e)
            })

        }
    },

}
</script>

<style>
.container {
    width: 50%;
}

.form-label {
    display: flex;
}

.radio {
    display: flex;
}

.form-check-label {
    padding-left: 12px;
    padding-right: 12px;
}

h1 {
    color: cadetblue;
}

.form-label {
    color: cadetblue;
}

.button {
    text-decoration: none;
    color: white;
}
</style>
