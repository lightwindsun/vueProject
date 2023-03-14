<template>
  <div id="building">
    <div class="page-container">
      <h1>Registration</h1>
      <div class="row justify-content-center">
        <div class="form-container">
          <form @submit.prevent="handleRegister">
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <label for="username">Username:</label>
                  <input type="text" class="form-control" id="username"
                         placeholder="Enter your username" v-model="user.username" required>
                </div>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" class="form-control" id="email"
                         placeholder="Enter your email" v-model="user.email" required>
                </div>
                <div class="form-group">
                  <label for="phone">Mobile phone number:</label>
                  <input type="number" class="form-control" id="phone"
                         placeholder="Enter your phone number" v-model="user.phone" required>
                </div>
                <div class="form-group">
                  <label for="birthday">Birthday:</label>
                  <input type="date" class="form-control" id="birthday"
                         placeholder="Enter your birthday" v-model="user.birthday" required>
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input type="password" class="form-control" id="password"
                         placeholder="Enter Password" v-model="user.password" required>
                </div>
                <div class="form-group">
                  <label for="confirm-password">Confirm Password:</label>
                  <input type="password" class="form-control" id="confirm-password"
                         placeholder="Enter Password Again" v-model="user.confirmPassword" required>
                </div>
                <div class="form-group">
                  <label for="verification-code">Email Verification Code:</label>
                  <div class="input-group">
                    <input type="text" class="form-control" id="verification-code"
                           placeholder="Enter Verification Code" v-model="user.verificationCode" required>
                    <div class="input-group-append">
                      <button type="button" class="btn btn-primary" @click="generateVerificationCode">Get Code</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="radio-container">
                  <div class="form-group">
                    <label for="customer-farmer">Choose Account Type:</label>
                    <div>
                      <input type="radio" id="customer" name="account-type" value="customer" v-model="user.accountType">
                      <label for="customer">Customer</label>
                    </div>
                    <div>
                      <input type="radio" id="farmer" name="account-type" value="farmer" v-model="user.accountType">
                      <label for="farmer">Farmer</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary">Register</button>
              <button type="button" class="btn btn-secondary" @click="handleReturn">Return</button>
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
  name: "RegistrationPage",
  data() {
    return {
      user: {
        username: '',
        email: '',
        phone: '',
        birthday: '',
        password: '',
        confirmPassword: '',
        verificationCode: '',
        accountType: ''
      },
      generatedCode: ''
    }
  },
  methods: {

    // generation of code
    generateVerificationCode(){
      const code = Math.random().toString(36).substring(2,6);
      this.generatedCode = code;
      alert(`Your verificationCode is ${code}`);
    },

    //check code
    isValidVerificationCode() {
      // Check if the entered code matches the generated code
      return this.user.verificationCode === this.generatedCode;
    },

    // register check
    handleRegister() {
      // check if all fields are filled
      if (
        this.user.username === '' ||
        this.user.email === '' ||
        this.user.phone === '' ||
        this.user.birthday === '' ||
        this.user.password === '' ||
        this.user.confirmPassword === '' ||
        this.user.verificationCode === '' ||
        this.user.accountType === ''
      ) {
        alert(`Please fill out all fields.`)
        return;
      }

      // check if passwords match
      if (this.user.password !== this.user.confirmPassword) {
        alert(`Passwords do not match.`)
        return;
      }

      // check if email exists
      if (!this.isExistingEmail(this.user.email)) {
        alert(`Email address existed.`)
        return;
      }

      // check if email is valid
      if (!this.isValidEmail(this.user.email)) {
        alert(`Invalid email address.`)
        return;
      }

      // check if phone number exists
      if (!this.isExistingPhone(this.user.phone)) {
        alert(`Phone number existed.`)
        return;
      }

      // check if phone number is valid
      if (!this.isValidPhoneNumber(this.user.phone)) {
        alert(`Invalid phone number.`)
        return;
      }

      // verificationCode check
      if (!this.isValidVerificationCode()){
        alert(`Verification code is incorrect!`)
        return;
      }

      // registration successful
      alert(`You have successfully registered!`);
      //TODO database logic here
      setTimeout(() => {
        this.$router.push('/'); // redirect to login page
      }, 1000);
    },
    // back to login page
    handleReturn() {
      this.$router.go(-1);
    },

    //check email format
    isValidEmail(email) {
      if (!email) {
        return false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },

    //check phone number format
    isValidPhoneNumber(phone) {
      if (!phone) {
        return false;
      }
      const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      return phonePattern.test(phone);
    },

    // check email in the database
    isExistingEmail(email) {
      //TODO database logic here
      return true;
    },

    //check phone in the database
    isExistingPhone(phone) {
      //TODO database logic here
      return true;
    }
  },

  // live watch, leave to implement
  watch:{
  }
}
</script>

<style scoped>

.form-container {
  margin: 20px 0;
}

.form-group label {
  margin-bottom: 10px;
  text-align: left;
  color: white;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.radio-container label {
  margin-left: 10px;
}

.btn {
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.btn-primary {
  background-color: #8cba4d;
  border: none;
  color: #fff;
}

.btn-secondary {
  background-color: #ccc;
  border: none;
  color: #fff;
}

.btn-primary:hover, .btn-secondary:hover {
  opacity: 0.8;
}

.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  font-size: 48px;
  font-weight: bold;
  color: #8cba4d;
  text-shadow: 2px 2px 4px #000000;
  margin-bottom: 20px;
}


#building{
  background-size: cover;
  background: url("./assets/market2.jpg") no-repeat;
  width: 100%;
  height: 100%;
  position:fixed;
  top: 0;
  left: 0;
}

.logo-container {
  position: absolute;
  top: 60px;
  left: 1300px;
}

.logo {
  width: 250px;
  height: 250px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 1px solid white;
}

.form-row {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}


</style>
