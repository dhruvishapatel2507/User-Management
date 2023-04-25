<template>
<div class="container">
    <h1>Edit User Details</h1>
    <form class="row g-3" @submit.prevent="editUSer()">
        <div class="col-md-6">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="name" />
            <div v-if="errors.name" class="validation">{{ errors.name }}</div>
        </div>
        <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" />
            <div class="validation" v-if="errors.email">{{ errors.email }}</div>
        </div>

        <div class="col-md-6">
            <label for="middlename" class="form-label">middlename</label>
            <input type="text" class="form-control" id="middlename" v-model="middlename" />
            <div class="validation" v-if="errors.middlename">{{ errors.middlename }}</div>
        </div>
        <div class="col-md-6">
            <label for="surname" class="form-label">surname</label>
            <input type="text" class="form-control" id="surname" v-model="surname" />
            <div class="validation" v-if="errors.surname">{{ errors.surname }}</div>
        </div>
        <div class="col-12">
            <label for="address_line1" class="form-label">address_line1</label>
            <input type="text" class="form-control" id="address_line1" placeholder="1234 Main St" v-model="address_line1" />
            <div class="validation" v-if="errors.address_line1">{{ errors.address_line1 }}</div>
        </div>
        <div class="col-12">
            <label for="address_line2" class="form-label">address_line2</label>
            <input type="text" class="form-control" id="address_line2" placeholder="Apartment, studio, or floor" v-model="address_line2" />
            <div class="validation" v-if="errors.address_line2">{{ errors.address_line2 }}</div>
        </div>
        <div class="col-md-4">
            <label for="city" class="form-label">City</label>
            <input type="text" class="form-control" id="city" v-model="city" />
            <div class="validation" v-if="errors.city">{{ errors.city }}</div>
        </div>
        <div class="col-md-2">
            <label for="state" class="form-label">state</label>
            <input type="text" class="form-control" id="state" v-model="state" />
            <div class="validation" v-if="errors.state">{{ errors.state }}</div>
        </div>
        <div class="col-md-4">
            <label for="country" class="form-label">country</label>
            <select id="country" class="form-select" v-model="country">
                <option value="" selected>Choose...</option>
                <option value="uk">uk</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
            </select>
            <div class="validation" v-if="errors.country">{{ errors.country }}</div>
        </div>
        <div class="col-md-2">
            <label for="zipcode" class="form-label">zipcode</label>
            <input type="text" class="form-control" id="zipcode" v-model="zipcode" />
            <div class="validation" v-if="errors.zipcode">{{ errors.zipcode }}</div>
        </div>
        <div class="col-md-6">
            <label for="phone" class="form-label">phone</label>
            <input type="text" class="form-control" id="phone" v-model="phone" />
            <div class="validation" v-if="errors.phone">{{ errors.phone }}</div>
        </div>
        <div class="col-md-6">
            <label for="birth_date" class="form-label">birth_date</label>
            <input type="date" class="form-control" id="birth_date" v-model="birth_date" />
            <div class="validation" v-if="errors.birth_date">{{ errors.birth_date }}</div>
        </div>
        <div class="col-md-6">
            <label for="gender" class="form-label">gender</label>
            <div class="radio">
                <div class="form-check,col-md-2">
                    <input class="form-check-input" type="radio" name="gender" value="Male" id="Male" v-model="gender" />
                    <label class="form-check-label" for="Male">
                        Male
                    </label>
                </div>
                <div class="form-check,col-md-2">
                    <input class="form-check-input" type="radio" name="gender" value="Female" id="Female" v-model="gender" />
                    <label class="form-check-label" for="Female">
                        Female
                    </label>
                </div>
            </div>
            <div class="validation" v-if="errors.gender">{{ errors.gender }}</div>
        </div>
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
            <div class="validation" v-if="errors.hobby">{{ errors.hobby }}</div>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
</template>

<script>
import api from '@/api/api';

export default {
    name: 'EditUser',
    data() {
        return {
            errors: {},
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
            hobby: []
        }
    },
    mounted() {
        api.get(`/api/users/${this.$route.params.id}`).then((r) => {
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
                this.hobby = r.data.hobby.split(',')
        })
    },
    methods: {
        async editUSer() {
            var hobbyStr = this.hobby.join(',');
            await api.put(`/api/users/${this.$route.params.id}`, {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                middlename: this.middlename,
                surname: this.surname,
                address_line1: this.address_line1,
                address_line2: this.address_line2,
                country: this.country,
                state: this.state,
                city: this.city,
                zipcode: this.zipcode,
                phone: this.phone,
                birth_date: this.birth_date,
                gender: this.gender,
                hobby: hobbyStr,
            }).then((r) => {
                alert("submitted", r)
                this.$router.push({
                    name: 'HomePage'
                })
            }).catch((e) => {
                console.log("error", e)
            })
        }
    }
}
</script>

<style scoped>
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

.validation {
    color: red;
}

h1 {
    color: cadetblue;
}

.form-label {
    color: cadetblue;
}
</style>
