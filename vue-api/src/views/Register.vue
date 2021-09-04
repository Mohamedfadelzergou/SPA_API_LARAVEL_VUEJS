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
                  </div>
                  <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block" @click.prevent="perforregister">Register</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Register',
    data(){
        return{
            'name':'',
            'email':'',
            'password':''
        }
    },
    methods:{
        perforregister(){
            axios.post('http://localhost:8000/api/auth/register',{
                name:this.name,
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