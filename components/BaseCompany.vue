<template>
  <b-container class="company">
    <b-row>
      <b-col cols="12" md="6">
        <h3 class="company-title mt-5 pt-5">
          Even projects with other <span class="color-text">Groups</span>
        </h3>

        <p class="company-desc">
          TeamWork Connect lets two groups move as quickly as one. Hatch a
          partnership. Close the deal. Build something new.
        </p>
      </b-col>

      <b-col cols="12" md="6">
        <img
          :src="require('../assets/images/shared_groups.png')"
          alt="content-right"
          class="img-fluid image-hero mt-5"
        />
      </b-col>

      <!-- <b-col cols="12" md="12">
        <p>text center</p>
      </b-col> -->
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.company {
  .company-title {
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    .color-text {
      color: #553b8d;
      font-style: bold;
    }
  }

  .company-desc {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
  }
}
</style>
