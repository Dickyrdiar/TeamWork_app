<template>
  <div class="login-page">
    <b-container fluid>
      <b-row no-gutter>
        <b-col cols="12" md="4" class="login mt-4 pt-4">
          <h4 class="login_title mb-5 pb-5" href="/">TeamWork</h4>

          <form class="ml-3 pl-3 login_form" method="post" @submit="submitForm">
            <h5 class="text_heading mt-4">Login</h5>
            <b-form-group
              id="emailset-1"
              description="enter your email here"
              label="Email"
              label-for="input-1"
            >
              <b-form-input
                type="email"
                id="email-1"
                v-model="email"
                trim
                class="col-md-8"
              />
            </b-form-group>

            <b-form-group
              id="password-set-1"
              description="password is here"
              label="Password"
              label-for="input-2"
            >
              <b-form-input
                type="password"
                id="password-1"
                v-model="password"
                trim
                class="col-md-8"
              />
            </b-form-group>

            <b-button type="submit" class="btn btn-tmwrk" id="login_button"
              >Login</b-button
            >
            <p>don't have an account ? <a href="/signup">Register</a></p>
          </form>

          <b-col cols="12" md="6" class="pt-4 mt-4">
            <a href="#" class="btn btn-white">Google</a>
            <a href="#" class="btn btn-white">Github</a>
          </b-col>
        </b-col>

        <b-col cols="12" md="8" class="bg-white d-none d-md-flex bg-image">
          <img
            :src="require('../assets/images/login.png')"
            class="img-fluid image-hero mt5"
          />
        </b-col>
      </b-row>

      <b-row> </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async submitForm(evt) {
      evt.preventDefault();
      const credentials = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$auth.loginWith("local", {
          data: credentials,
        });
        this.$router.push("/");
      } catch (e) {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;

  .text-heading {
    left: 3rem;
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
