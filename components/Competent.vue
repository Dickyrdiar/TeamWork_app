<template>
  <b-container class="Competent">
    <b-row>
      <b-col cols="12" md="12" class="text-center mr-2 mt-5 pt-3">
        <h2 class="competent-title">
          plan with a <span class="text-color">competent team</span>
        </h2>
        <p class="tag-comp">
          starting from now selection of team members is very important for the
          success of the project on your team
        </p>
      </b-col>

      <b-col cols="12" md="6">
        <img
          :src="require('../assets/images/design_team.png')"
          alt="content-right"
          class="img-fluid image-hero mt-5"
        />
      </b-col>

      <b-col cols="12" md="6" class="left-team mt-5 pt-5">
        <h3 class="competent-title">
          When teams align, <span class="text-color">work flows</span>
        </h3>
        <p class="competent-desc">
          Gather Your Team with TeamWork and start achieving your project,
          Create groups to discuss anything of value, from team projects to
          company-wide initiatives.
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.Competent {
  .tag-comp {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
  }

  .competent-title {
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    .text-color {
      color: #553b8d;
      font-style: bold;
    }
  }
}
</style>
