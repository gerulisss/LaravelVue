<template>
    <div>
        <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
                <div>
                    <h2 class="text-2xl font-semibold leading-tight">
                        Users
                        <button type="button" class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white text-sm" @click="this.$router.push('/users/add')">Add User</button>
                    </h2>
                </div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                    >
                        <table class="min-w-full leading-normal">
                            <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Name
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    ID
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Email
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                >
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex">
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{ user.name }}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">{{ user.id }}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                      aria-hidden
                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">{{ user.email }}</span>
                </span>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="space-x-2">
                                        <router-link :to="{name: 'edituser', params: { id: user.id }}" class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white">
                                            Edit
                                        </router-link>
                                        <button class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-5 text-white" @click="deleteUser(user.id)"> Delete</button>

                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div></div>
</template>

<script>
export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get('/api/users')
                .then(response => {
                    this.users = response.data;
                })
                .catch(function (error) {
                    console.error(error);
                });
        })
    },
    methods: {
        deleteUser(id) {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.delete(`/api/users/delete/${id}`)
                    .then(response => {
                        let i = this.users.map(item => item.id).indexOf(id); // find index of your object
                        this.users.splice(i, 1)
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        }
    }
}
</script>
