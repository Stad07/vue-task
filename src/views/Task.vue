<template>
  <div class="container">
    <div class="row">
      <div class="col s6 offset-s3">
        <h1>{{task.title}}</h1>
        <form @submit.prevent="submitHandler">
          <div class="chips" ref="chips"></div>

          <div class="input-field">
            <textarea style="min-height: 150px; overflow: auto;" id="description" class="materialize-textarea" v-model="description"></textarea>
            <label for="description">Description</label>
            <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
          </div>

          <input type="text" ref="datepicker">

          <div v-if="task.status !== 'completed'">
            <button class="btn" type="submit">Update Task</button>
            <button class="btn blue darken-3" type="button" @click="completeTask">Complete Task</button>
          </div>
        </form>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'Task',
  data: () => ({
    description: '',
    chips: null,
    date: null
  }),
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  },
  mounted() {    
    this.description = this.task.description
    this.ships = M.Chips.init(this.$refs.chips, {
      placeholder: 'Task tags',
		  data: this.task.tags
    })
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true      
    })
    setTimeout(() => {
      M.updateTextFields()
    }, 0)
  },
  methods: {
    submitHandler() {      
      this.$store.dispatch('updateTask', {
        id: this.task.id,
				description: this.description,
				date: this.date.date
      })
      this.$router.push('/list')
    },
    completeTask() {      
      this.$store.dispatch('completeTask', this.task.id)
      this.$router.push('/list')
    }
  },
  destroyed() {
    if (this.chips && this.chips.destroy) {
      this.chips.destroy
    }
    if (this.date && this.date.destroy) {
      this.date.destroy
    }
  }  
}
</script>

<style lang="scss" scoped>
  .btn {
    margin-right: 15px;
  }  
</style>
