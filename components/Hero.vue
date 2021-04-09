<template>
  <b-container class="hero">
    <b-row>
      <b-col cols="12" md="6">
        <b-col cols="12" md="12">
          <h3 class="hero-title mt-5 pt-5">
            collaborate on your project and achieve
            <span class="color-text">maximum results with the team</span>
          </h3>
        </b-col>

        <b-col cols="12">
          <p class="hero-desc">
            Connect your project with the best team and make sure TeamWork helps
            you and your team's work
          </p>

          <a href="#" class="btn btn-tmwrk">Join Us</a>
        </b-col>
      </b-col>

      <b-col cols="12" md="6">
        <img
          :src="require('../assets/images/hero.png')"
          alt="content-right"
          class="img-fluid image-hero mt-5"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.hero {
  .hero-title {
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    .color-text {
      color: #553b8d;
      font-style: bold;
    }
  }

  .hero-desc {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
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
