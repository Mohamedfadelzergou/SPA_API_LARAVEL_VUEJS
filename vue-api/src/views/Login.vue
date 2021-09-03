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
export default {
    name:'Login',
    data(){
        return {
            'email':'',
            'password':''
        }
    },
    methods:{
        perforlogin(){
            console.log('Performance Login');
            console.log('Email:'+this.email);
            console.log('Password'+this.password);
            // this.$router.push('/profile');
        }
    }
}
</script>

<style>

</style>