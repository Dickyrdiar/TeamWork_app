<template>
  <b-container class="Competent">
    <b-row>
      <b-col cols="12" md="12" class="text-center mr-2 mt-5 pt-3">
        <p class="tag-comp">starting from now</p>
        <h2 class="competent-title">
          plan with a <span class="text-color">competent team</span>
        </h2>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.Competent {
  .tag-comp {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
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
