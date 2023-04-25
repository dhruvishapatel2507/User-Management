import RegistrationForm from './components/RegistrationForm.vue';
import LoginForm from './components/LoginForm.vue';
import HomePage from './components/HomePage.vue';
import EditUser from './components/EditUser.vue';

export default[
    {
        name:'RegistrationForm',
        path: '/registrationform',
        component: RegistrationForm
    },
    {
        name:'LoginForm',
        path: '/loginform',
        component: LoginForm
    },
    {
        name:'HomePage',
        path: '/homepage',
        component: HomePage
    },
    {
        name:'EditUser',
        path: '/edituser/:id',
        component: EditUser
    },
]