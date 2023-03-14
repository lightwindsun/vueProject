<template>
  <div id="building">
    <div class="page-container">
      <h1>Welcome to FarmersMarket !</h1>
      <div class="row justify-content-center">
        <div class="form-container">
          <form @submit.prevent="handleSignIn">
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email"
                     placeholder="Enter your email" v-model="email" required>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" id="password"
                     placeholder="Enter Password" v-model="password" required>
            </div>
            <div class="button-container">
              <button type="submit" class="btn btn-primary">Sign In</button>
              <button type="button" class="btn btn-secondary" @click="handleSignUp">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="logo-container">
      <img class="logo" src="./assets/marketLogo.png" alt="Logo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    // sign in check
    handleSignIn(){
      // check email format
      if (!this.isValidEmail(this.email)) {
        alert(`Invalid email address.`)
        return;
      }
      // check null value
      if (
        this.email === '' ||
        this.password === ''
      ) {
        alert(`Please fill out all fields.`)
        return;
      }

      // check database
      if (!this.isExistEmail(this.email)) {
        alert(`No such email, please Sign up first!`)
        return;
      }

      if (!this.isCorrectPassword(this.password,this.email)) {
        alert(`Incorrect password`)
        return;
      }

      alert(`You have successfully signed in!`)
      this.$router.push({ name: 'HomePage' })
    },

    // redirection to Sign Up
    handleSignUp(){
      this.$router.push({ name: 'RegistrationPage' })
    },

    // check email function
    isValidEmail(email) {
      if (!email) {
        return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },

    // check password function
    isCorrectPassword(password,email) {
      //TODO the database logic here

      return true;
    },

    // check email function
    isExistEmail(email) {
      //TODO the database logic here
      return true;
    }
  }
}
</script>

<style scoped>

.form-control {
  width: 100%;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-group label {
  margin-bottom: 10px;
  text-align: left;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);

}

.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.form-container {
  max-width: 600px;
}

h1 {
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: #8cba4d;
  text-shadow: 2px 2px 4px #000000;
}

#building{
  background-size: cover;
  background: url("./assets/market.jpg") no-repeat;
  width: 100%;
  height: 100%;
  position:fixed;
  top: 0;
  left: 0;
}

.logo-container {
  position: absolute;
  top: 60px;
  left: 200px;
}

.logo {
  width: 250px;
  height: 250px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 1px solid white;
}

</style>
