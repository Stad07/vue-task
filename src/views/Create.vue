<template>
  <div class="container-full">    
    <div class="row">
      <div class="col s6 offset-s3">
        <h1>Create</h1>
        <form @submit.prevent="submitHandler">
          <div class="input-field">
            <input id="title" type="text" v-model.trim="title">
            <label for="title">Title</label>
          </div>

          <div class="chips" ref="chips"></div>   

          <div class="input-field">
            <textarea id="description" class="materialize-textarea" v-model.trim="description"></textarea>
            <label for="description">Description</label>
            <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
          </div>

          <input type="text" ref="datepicker">           

          <button class="btn btn-small" type="submit">create task</button>                          
        </form>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Create',
  data: () => ({
    title: '',
    description: '',
    chips: null,
    date: null
  }),
  mounted() {
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Task tags'
    })

    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true      
    })    
  },
  methods: {
    submitHandler() {
      const formData = {        
        title: this.title,
        tags: this.chips.chipsData,
        description: this.description,
        id: Date.now(),
        status: 'active',
        date: this.date.date
      }
      this.$store.dispatch('createTask', formData)
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
