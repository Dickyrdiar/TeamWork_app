<template>
  <b-container class="icons">
    <b-row>
      <b-col cols="12" md="12" class="text-center mr-2 mt-5 pt-3">
        <h3 class="icon-title">
          Be more <span class="color-text">productive</span>
        </h3>
        <p class="icon-desc">
          TeamWork helps cross-functional project and groups stay sharp with a
          robust suite of shared productivity tools
        </p>

        <b-row
          cols="12"
          md="12"
          v-for="(image, index) in icons"
          :key="index"
          class="mt-4 pt-4 pl-5 ml-5 text-center"
        >
          <!--  -->
          <img :src="getImgUrl(image.icon)" class="img-fluid ml-5 pl-5" />
          <!-- <p class="content">{{ image.content }}</p> -->
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "icons",
  data: () => ({
    icons: [
      {
        icon: "icon_1.png",
        content: "save your work",
      },

      {
        icon: "icon_2.png",
        content: "manage your work",
      },

      {
        icon: "icon_3.png",
        content: "finish your job",
      },
    ],
  }),

  methods: {
    getImgUrl(icon) {
      return require(`../assets/images/${icon}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.icons {
  .icon-title {
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    .color-text {
      color: #553b8d;
      font-style: bold;
    }
  }

  .icon-desc {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
  }

  .text-center {
    float: left;
    padding: 2.5rem;
  }
}
</style>
