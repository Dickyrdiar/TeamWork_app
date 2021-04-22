<template>
  <b-container class="login mt-5 pt-5">
    <b-row>
      <b-col cols="12" md="6">
        <b-col cols="12" md="8">
          <h3 class="login-title mt-5 pt-5 text-center">Login is here</h3>

          <b-form>
            <b-form-group
              id="input-email-1"
              label-for="input-1"
              class="text-center mt-4 pt-4"
            >
              <b-form-input
                id="email-1"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-password"
              label-for="password-1"
              class="text-center mt-3 pt-3"
            >
              <b-form-input
                type="password"
                id="text-password"
                aria-describedby="password-help-block"
                placeholder="password is here"
              ></b-form-input>
              <!-- <p class="forgot">Forgot password</p> -->
            </b-form-group>

            <a href="#" class="btn btn-tmwrk text-center">Login</a>
          </b-form>
        </b-col>
      </b-col>

      <b-col cols="12" md="6">
        <img
          :src="require('../assets/images/TeamLogin.png')"
          alt="content-right"
          class="img-fluid image-hero mt-5"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.login {
  background-color: #ffffff;
  .login-title {
    top: -12rem;
  }

  .btn-tmwrk {
    color: #fff;
    background: linear-gradient(0deg, #553b8d, #553b8d), #553b8d;
    border-color: #553b8d;
    padding: 8px 31px;
    border-radius: 10px 10px 10px 10px;
    margin: 0.5rem 0;
  }
}
</style>
