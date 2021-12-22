const Settings = () => import('../Views/Settings.vue');
const Profile = () => import('../Views/Profile.vue');
const Password = () => import('../Views/Password.vue');
const Login = () => import('../Views/Login.vue');
const ForgotPassword = () => import('../Views/ForgotPassword.vue');
const ResetPassword = () => import('../Views/ResetPassword.vue');
const VerifyEmail = () => import('../Views/VerifyEmail.vue');
const Register = () => import('../Views/Register.vue');
const Home = () => import('../Views/Home.vue');
const Tasks = () => import('../Views/Tasks.vue');
const AddTask = () => import('../Views/AddTask.vue');
const EditTask = () => import('../Views/EditTask.vue');
const Users = () => import('../Views/Users.vue');
const AddUser = () => import('../Views/AddUser.vue');
const EditUser = () => import('../Views/EditUser.vue');
const Welcome = () => import('../Views/Welcome.vue')

export default [{
        path: '/',
        component: Welcome,
        name: 'welcome',

    },
    {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/tasks',
        component: Tasks,
        name: 'tasks',
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/tasks/add',
        component: AddTask,
        name: 'addtask',
        meta: {
            guard: 'auth',
        }
    },
    {
        path: '/tasks/edit/:id',
        component: EditTask,
        name: 'edittask',
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/users',
        component: Users,
        name: 'users',
        meta: {
            guard: 'auth',
        }
    },
    {
        path: '/users/add',
        component: AddUser,
        name: 'adduser',
        meta: {
            guard: 'auth',
        }
    },
    {
        path: '/users/edit/:id',
        component: EditUser,
        name: 'edituser',
        meta: {
            guard: 'auth',
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta : {
            guard : 'guest'
        }
    },
    {
        path: '/forgot-password',
        component: ForgotPassword,
        name: 'forgot-password',
        meta : {
            guard : 'guest'
        }
    },
    {
        path: '/reset-password/:token',
        props: route => ({
            token: route.params.token,
            email: route.query.email
        }),
        component: ResetPassword,
        name: 'reset-password',
        meta : {
            guard : 'guest'
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta : {
            guard : 'guest'
        }
    },
    {
        path: '/verify-email/:id/:hash',
        props: route => ({
            id: route.params.id,
            hash: route.params.hash
        }),
        component: VerifyEmail,
        name: 'verify-email',

    },
    {
        path: '/settings',
        component: Settings,
        redirect: {
            name: 'profile'
        },
        name: 'settings',
        meta: {
            guard: 'auth'
        },
        children: [{
                path: 'profile',
                component: Profile,
                name: 'profile',
                meta: {
                    guard: 'auth'
                },

            },
            {
                path: 'password',
                component: Password,
                name: 'password',
                meta: {
                    guard: 'auth'
                },

            },

        ]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home',

    }
];
