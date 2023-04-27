
import RegistrationForm from './components/RegistrationForm.vue';
import LoginForm from './components/LoginForm.vue';
import HomePage from './components/HomePage.vue';
import EditUser from './components/EditUser.vue';
import ViewUser from './components/ViewUser.vue';
import HeaderPage from './components/HeaderPage.vue';
import ViewLoginUser from './components/ViewLoginUser.vue';
import ForgotPass from './components/ForgotPass.vue';
import auth from './middleware/auth';
import guest from './middleware/guest'

const router = [
    {
        path: '/registration',
        component: RegistrationForm,
        beforeEnter:guest
    },
    {
        path: '/login',
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
        path: '/loginuser/:id',
        component: ViewLoginUser
    },
    {
        path: '/forgotpass',
        component: ForgotPass
    }

];

export default router;
