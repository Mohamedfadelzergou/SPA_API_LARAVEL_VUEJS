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
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return {
            'email':'',
            'password':'',
            'error':''
        }
    },
    methods:{
        perforlogin(){
            axios.post('http://localhost:8000/api/auth/login',{
                email:this.email,
                password:this.password,
            }).then(res=>{
                console.log(res.data);
                localStorage.setItem("token", res.data.access_token)
                localStorage.setItem("user", res.data.user)
                this.$router.push('/profile')

            }).catch(err =>{
                console.log(err.message);
                this.error=err.message
            })
        }
    }
}
</script>

<style>

</style>