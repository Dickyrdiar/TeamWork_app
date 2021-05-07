<template>
  <div class="sign_up">
    <b-container fluid>
      <b-row no-gutter>
        <b-col cols="12" md="7" class="bg-white d-none d-md-flex">
          <img
            :src="require('../assets/images/sign_up_image.png')"
            class="img-fluid mt-4"
          />
        </b-col>

        <b-col cols="12" md="5" class="mt-2 pt-2">
          <form class="signup_form ml-2 pl-4 mt-5 pt-5">
            <h4 class="signup_title">Signup to TeamWork</h4>

            <p class="member">
              already have a member ? <a href="/login">Login</a>
            </p>
            <div class="mt-3 pt-3">
              <b-form-group id="emailset-2" label="Email" label-for="input_1">
                <b-form-input type="email" id="email-2" trim class="col-md-6" />
              </b-form-group>

              <b-form-group
                id="usernameset-1"
                label="Username"
                label-for="input_2"
              >
                <b-form-input
                  type="text"
                  id="username-1"
                  trim
                  class="col-md-6"
                />
              </b-form-group>

              <b-form-group
                id="usernameset-1"
                label="Password"
                label-for="input_2"
              >
                <b-form-input
                  type="password"
                  id="password-1"
                  trim
                  class="col-md-6"
                />
              </b-form-group>

              <b-form-group
                id="usernameset-1"
                label="Password Confirmation"
                label-for="input_2"
              >
                <b-form-input
                  type="password"
                  id="pasword-1"
                  trim
                  class="col-md-6"
                />
              </b-form-group>

              <b-button
                type="submit"
                class="btn btn-tmwrk col-md-6"
                id="login_button"
                >Register</b-button
              >

              <b-col cols="12" md="6" class="pt-2 mt-2">
                <a href="#" class="btn btn-white">Google</a>
                <a href="#" class="btn btn-white">Github</a>
              </b-col>
            </div>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.sign_up {
  .signup_form {
    top: 12%;
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
