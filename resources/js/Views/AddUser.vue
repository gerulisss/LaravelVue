<template>
    <div class="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
        <h4 class="text-center">Add User</h4>
        <div class="col-md-6">
            <form class="md:p-4 w-full mx-auto"  @submit.prevent="addUser">
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
                    value="Add user"
                    class="focus:outline-none mt-5 bg-blue-500 px-4 py-2 text-white font-bold w-full">Add User</button>
            </form>
        </div>
    </div>
</template>

  <script>
  export default {
      data() {
          return {
              user: {},
          }
      },
      methods: {
          addUser() {
              axios.get('/sanctum/csrf-cookie').then(response => {
                  axios.post('/api/users/add', this.user)
                      .then(response => {
                          this.$router.push({name: 'users'})
                      })
                      .catch(function (error) {
                          console.error(error);
                      });
              })
          }
      }
  }
  </script>
