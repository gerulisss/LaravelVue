<template>
    <div class="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
        <h4 class="text-center">Edit user info</h4>
        <div class="col-md-6">
            <form class="md:p-4 w-full mx-auto"  @submit.prevent="updateUser">
                <div class="grid grid-cols-2 gap-5">
                    <input
                        type="text"
                        class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                        placeholder="Name" v-model="user.name"
                    />
                    <input type="email" class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500" placeholder="Email" v-model="user.email"
                    />
                    <input type="password" class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500" placeholder="Password" v-model="user.password"
                    />
                </div>
                <button
                    type="submit"
                    value="Update user info"
                    class="focus:outline-none mt-5 bg-blue-500 px-4 py-2 text-white font-bold w-full">Update user info</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {}
        }
    },
    created() {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get(`/api/users/edit/${this.$route.params.id}`)
                .then(response => {
                    this.user = response.data;
                })
                .catch(function (error) {
                    console.error(error);
                });
        })
    },
    methods: {
        updateUser() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post(`/api/users/update/${this.$route.params.id}`, this.user)
                    .then(response => {
                        this.$router.push({name: 'users'});
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        }
    }
}
</script>
