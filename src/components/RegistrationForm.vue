<template>
<div class="container">
    <h1>Registration Form</h1>
    <form class="row g-3" @submit.prevent="regestration">
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
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" />
            <div class="validation" v-if="errors.password">{{ errors.password }}</div>
        </div>
        <div class="col-md-6">
            <label for="password_confirmation" class="form-label">password_confirmation</label>
            <input type="password" class="form-control" id="password_confirmation" v-model="password_confirmation" />
            <div class="validation" v-if="errors.password_confirmation">{{ errors.password_confirmation }}</div>
        </div>
        <div class="col-md-6">
            <label for="middlename" class="form-label">middlename</label>
            <input type="password" class="form-control" id="middlename" v-model="middlename" />
            <div class="validation" v-if="errors.middlename">{{ errors.middlename }}</div>
        </div>
        <div class="col-md-6">
            <label for="surname" class="form-label">surname</label>
            <input type="password" class="form-control" id="surname" v-model="surname" />
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
                <option selected>Choose...</option>
                <option>uk</option>
                <option>India</option>
                <option>Canada</option>
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
                    <input class="form-check-input" type="radio" name="gender" id="Male" v-model="gender" />
                    <label class="form-check-label" for="Male">
                        Male
                    </label>
                </div>
                <div class="form-check,col-md-2">
                    <input class="form-check-input" type="radio" name="gender" id="Female" v-model="gender" />
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
                    <input class="form-check-input" type="checkbox" name="hobby" value="" id="Hockey" v-model="hobby" />
                    <label class="form-check-label" for="Hockey">
                        Hockey
                    </label>
                </div>
                <div class="form-check-col-md-2">
                    <input class="form-check-input" type="checkbox" value="" name="hobby" id="Badminton" v-model="hobby" />
                    <label class="form-check-label" for="Badminton">
                        Badminton
                    </label>
                </div>
                <div class="form-check-col-md-2">
                    <input class="form-check-input" type="checkbox" value="" name="hobby" id="Cricket" v-model="hobby" />
                    <label class="form-check-label" for="Cricket">
                        Cricket
                    </label>
                </div>
            </div>
            <div class="validation" v-if="errors.hobby">{{ errors.hobby }}</div>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
    </form>
</div>
</template>

<script>
// import axios from 'axios';
export default {
    name: 'RegistrationForm',
    data() {
        return {
            errors: {},
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
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
        regestration() {
            if (this.name == '') {
                this.$set(this.errors, 'name', 'Name required.');
            }
            if (this.email == '') {
                this.$set(this.errors, 'email', 'email required.');
            }
            if (this.password == '') {
                this.$set(this.errors, 'password', 'password required.');
            }
            if (this.password_confirmation  == '') {
                this.$set(this.errors, 'password_confirmation', 'password_confirmation required.');
            }
            if (this.middlename == '') {
                this.$set(this.errors, 'middlename', 'middlename required.');
            }
            if (this.surname == '') {
                this.$set(this.errors, 'surname', 'surname required.');
            }
            if (this.address_line1 == '') {
                this.$set(this.errors, 'address_line1', 'address_line1 required.');
            }
            if (this.address_line2 == '') {
                this.$set(this.errors, 'address_line2', 'address_line2 required.');
            }
            if (this.country == '') {
                this.$set(this.errors, 'country', 'country required.');
            }
            if (this.state == '') {
                this.$set(this.errors, 'state', 'state required.');
            }
            if (this.city == '') {
                this.$set(this.errors, 'city', 'city required.');
            }
            if (this.zipcode == '') {
                this.$set(this.errors, 'zipcode', 'zipcode required.');
            }
            if (this.phone == '') {
                this.$set(this.errors, 'phone', 'phone required.');
            }
            if (this.birth_date == '') {
                this.$set(this.errors, 'birth_date', 'birth_date required.');
            }
            if (this.gender == '') {
                this.$set(this.errors, 'gender', 'gender required.');
            }
            if (this.hobby == '') {
                this.$set(this.errors, 'hobby', 'hobby required.');
            }

        }
    }
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

.validation {
    color: red;
}
</style>
