<template>
	<div class="container">		
		<h1>List</h1>   

    <div class="row">
      <div class="input-field col s4">
        <select ref="select" v-model="filter">
          <option value="" disabled selected>Choose your option</option>
          <option value="active">Active</option>
          <option value="competed">Competed</option>
          <option value="outdated">Outdated</option>
        </select>
        <label>Status filter</label>
      </div>    
    </div>

    <hr>

    <div>
      <table v-if="tasks.length">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Date</th>
            <th>Description</th>
            <th>Status</th>
            <th>Open task</th>
            <th>Delete task</th>
          </tr>          
        </thead>
        <tbody>
          <tr 
            v-for="(task, idx) of displayTasks"
            :key="task.id"
          >
            <td>{{ idx + 1 }}</td>
            <td>{{ task.title }}</td>
            <td>{{ new Date(task.date).toLocaleDateString() }}</td>
            <td class="td">
              <div class="text">{{ task.description }}</div>
            </td>
            <td>{{ task.status }}</td>
            <td>
              <router-link
                tag="button"
                class="btn btn-small"
                :to="'/task/' + task.id"
              >
                Open
              </router-link>                   
            </td>
            <td>
              <button class="btn btn-small red darken-4" @click.prevent="deleteBtn">Delete</button>                   
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>No tasks</p>     
    </div>         
  </div> 	                     
</template>

<script>
export default {
	name: 'List',
	data: () => ({
    filter: ''    
  }),
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    displayTasks() {
      console.log('hi')
      return this.tasks.filter(t => {
        if (!this.filter) {
          return true
        } else {
          return t.status === this.filter
        }
      })
    }
  },
  mounted() {
    M.FormSelect.init(this.$refs.select)
  },
  methods: {
    deleteBtn() {
      console.log('Delete')
    }
  }  
}
</script>

<style lang="scss" scoped>
  .table {
    margin-top: 20px;
  }
  .line {
    height: 1px;
    background-color: rgb(156, 153, 153);    
  }
  .text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;    
  }
  .td {
    max-width: 500px;
  }  
  .input-field.col {    
    padding-left: 0;
    label {
      left: 0;
    }
  }
  .btn.back {
    margin-top: 20px;
    i {
      transform: rotate(-90deg);
    }
  }  
</style>
