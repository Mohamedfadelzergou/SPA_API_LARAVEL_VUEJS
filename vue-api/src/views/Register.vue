<template>
  <div class="login">
      <div class>
          <div class="col-md-6 offset-md-3">
              <h2 class="display-4 text-center mt-5">
                  Register Form
              </h2>
              
              <form>
                  <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" v-model="name" id="name">
                  </div>
                  <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" class="form-control" v-model="email" id="email">
                  </div>
                  <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" v-model="password" id="password">
                      <div class="text-danger" v-if="error">
                        {{error}}
                      </div>
                  </div>
                  <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block" @click.prevent="perforregister">Register</button>
                  </div>
              </form>
              <circle-spin v-show="isLouding"></circle-spin>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Register',
    data(){
        return{
            'name':'',
            'email':'',
            'password':'',
            'error':'',
            isLouding:false
        }
    },
    methods:{
        perforregister(){
            this.isLouding=true
            this.$store.dispatch('perforRegisterAction',{
                name:this.name,
                email:this.email,
                password:this.password,
            }).then(res=>{
                res
                this.isLouding=false
                this.$router.push('/profile')
            }).catch(err=>{
                this.error="there was diring error register process"
                console.log(err.message)
            })
        }
    }
}
</script>

<style>

</style>