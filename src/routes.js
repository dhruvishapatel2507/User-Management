
import RegistrationForm from './components/RegistrationForm.vue';
import LoginForm from './components/LoginForm.vue';
import HomePage from './components/HomePage.vue';
import EditUser from './components/EditUser.vue';
import ViewUser from './components/ViewUser.vue';
import HeaderPage from './components/HeaderPage.vue';
import auth from './middleware/auth';

const router = [
    {
        path: '/registration',
        component: RegistrationForm,
        mode: 'history',
    },
    {
        path: '/login',
        component: LoginForm,
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

];

// // Creates a `nextMiddleware()` function which not only
// // runs the default `next()` callback but also triggers
// // the subsequent Middleware function.
// function nextFactory(context, middleware, index) {
//     const subsequentMiddleware = middleware[index];
//     // If no subsequent Middleware exists,
//     // the default `next()` callback is returned.
//     if (!subsequentMiddleware) return context.next;

//     return (...parameters) => {
//         // Run the default Vue Router `next()` callback first.
//         context.next(...parameters);
//         // Then run the subsequent Middleware with a new
//         // `nextMiddleware()` callback.
//         const nextMiddleware = nextFactory(context, middleware, index  + 1);
//         subsequentMiddleware({ ...context, next: nextMiddleware });
//     };
// }

// router.beforeEach((to, from, next) => {
//     if (to.meta.middleware) {
//         const middleware = Array.isArray(to.meta.middleware)
//             ? to.meta.middleware
//             : [to.meta.middleware];

//         const context = {
//             from,
//             next,
//             router,
//             to,
//         };
//         const nextMiddleware = nextFactory(context, middleware, 1);

//         return middleware[0]({ ...context, next: nextMiddleware });
//     }

//     return next();
// });


export default router;
