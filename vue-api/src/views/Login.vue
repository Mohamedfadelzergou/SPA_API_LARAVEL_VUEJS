<template>
  <div class="login">
      <div class>
          <div class="col-md-6 offset-md-3">
              <h2 class="display-4 text-center mt-5">
                  Login Form
              </h2>
              <form >
                  <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" class="form-control" v-model="email" name="email" id="email">
                  </div>
                  <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" v-model="password" name="password" id="password">
                    <div class="text-danger" v-if="error">
                        {{error}}
                    </div>
                  </div>
                  <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block" @click.prevent="perforlogin">Login</button>
                  </div>
              </form>
              <circle-spin v-if="isLouding"></circle-spin>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return {
            'email':'',
            'password':'',
            'error':'',
            isLouding:false
        }
    },
    methods:{
        perforlogin(){
            this.isLouding=true
            this.$store.dispatch('perforloginAction',{
                email:this.email,
                password:this.password,
            }).then(res=>{
                res
                this.isLouding=false
                this.$router.push('/profile')
            }).catch(err=>{
                this.error="there was diring error login process"
                console.log(err.message)
            })
        }
    }
}
</script>

<style>

</style>