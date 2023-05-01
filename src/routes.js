
import RegistrationForm from './components/RegistrationForm.vue';
import LoginForm from './components/LoginForm.vue';
import HomePage from './components/HomePage.vue';
import EditUser from './components/EditUser.vue';
import ViewUser from './components/ViewUser.vue';
import HeaderPage from './components/HeaderPage.vue';
import ViewLoginUser from './components/ViewLoginUser.vue';
import ChangePassword from './components/ChangePassword.vue';
import ChangeProfile from './components/ChangeProfile.vue';
import AddNewUser from './components/AddNewUser.vue';
import auth from './middleware/auth';
import guest from './middleware/guest'

const router = [
    {
        path: '/registration',
        component: RegistrationForm,
        beforeEnter:guest
    },
    {
        path: '/',
        component: LoginForm,
        beforeEnter:guest
    },
    {
        path: '/home',
        component: HomePage,
        beforeEnter: auth
    },
    {
        path: '/edit/:id',
        component: EditUser
    },
    {
        path: '/view/:id',
        component: ViewUser
    },
    {
        path: '/header',
        component: HeaderPage
    },
    {
        path: '/loginuser',
        component: ViewLoginUser
    },
    {
        path: '/changepassword',
        component: ChangePassword
    },
    {
        path: '/changeprofile',
        component: ChangeProfile
    },
    {
        path: '/addnewuser',
        component: AddNewUser  
    }

];

export default router;
