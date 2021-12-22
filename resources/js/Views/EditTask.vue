<template>
    <div class="max-w-sm mx-auto my-24 bg-white px-5 py-10 rounded shadow-xl">
        <h4 class="text-center">Edit Task</h4>
        <div class="col-md-6">
            <form class="md:p-4 w-full mx-auto"  @submit.prevent="updateTask">
                <div class="grid grid-cols-2 gap-5">
                    <input
                        type="text"
                        class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                        placeholder="Name" v-model="task.name"
                    />
                    <select class="border border-gray-500 focus:outline-none" v-model="task.progress">
                        <option value="" selected disabled>Choose</option>
                        <option v-for="statusResult in statusResults"
                                :value="statusResult.name"
                                :key="statusResult.id">
                            {{statusResult.name}}
                        </option>
                    </select>
                </div>
                <button
                    type="submit"
                    value="Edit Task"
                    class="focus:outline-none mt-5 bg-blue-500 px-4 py-2 text-white font-bold w-full">Edit Task</button>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            task: {},
            // results: {"To Do":"To Do","In Progress":"In Progress","Done":"Done"},
            statusResults: [
                { name: "To Do", id: 1 },
                { name: "In Progress", id: 2 },
                { name: "Done", id: 3 }
            ],
        }
    },
    created() {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get(`/api/tasks/edit/${this.$route.params.id}`)
                .then(response => {
                    this.task = response.data;
                })
                .catch(function (error) {
                    console.error(error);
                });
        })
    },
    methods: {
        updateTask() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post(`/api/tasks/update/${this.$route.params.id}`, this.task)
                    .then(response => {
                        this.$router.push({name: 'tasks'});
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        }
    }
}
</script>
