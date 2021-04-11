<template>
  <div>
    <div class="footer mt-4 pt-4">
      <div class="container">
        <div class="row">
          <div class="footer__content-left col-md-5">
            <div class="desc">
              <h4>TeamWork</h4>
              <p>
                Connect your project with the best team and make sure TeamWork
                helps you and your team's work
              </p>
            </div>
          </div>
          <div class="footer__content-right col-md-7">
            <div class="row">
              <div class="col">
                <div class="our-services">
                  <h4>Services</h4>
                  <ul class="list-unstyled">
                    <li v-for="items in our_services" :key="items.id">
                      <a href="#!">{{ items.text }}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col">
                <div class="our-services">
                  <h4>Source</h4>
                  <ul class="list-unstyled">
                    <li v-for="item in social_media" :key="item.id">
                      <a
                        v-if="item.text !== 'About Us'"
                        :href="'/' + item.text.toLowerCase().replace(/\s/g, '')"
                        >{{ item.text }}</a
                      >
                      <a v-else href="/abouts">{{ item.text }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tag-footer">
      <p class="text-tag">&copy; 2021 TeamWork</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      our_services: [
        { text: "Why Us", id: 1 },
        { text: "Resource", id: 2 },
        { text: "Services", id: 3 },
        { text: "Features", id: 4 },
      ],

      social_media: [
        { text: "Github", id: 1 },
        { text: "Twitter", id: 2 },
        { text: "Dribble", id: 3 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #553b8d;
  .container {
    padding-bottom: 5rem;
  }
  &__content-left {
    color: #ffffff;
    .desc {
      padding-right: 4rem;
    }
    .our-sosmed {
      a {
        text-decoration: none;
        color: #ffffff;
        margin-left: 0.5rem;
        &:hover {
          color: #ffc800;
        }
      }
    }
    ul li a {
      text-decoration: none;
      color: #ffffff;
      &:hover {
        color: #ffc800;
      }
    }
  }
  &__content-right {
    .col {
      h4 {
        font-size: 20px;
        color: #ffffff;
        margin-bottom: 14px;
      }
      ul li a {
        text-decoration: none;
        color: #ffffff;
        &:hover {
          color: #ffffff;
        }
      }
    }
  }
  .content {
    margin-top: 5rem;
  }
  @media (max-width: 767.98px) {
    .col-md-7 {
      .col {
        h4 {
          font-size: 16px;
        }
        ul li a {
          font-size: 10px;
        }
      }
    }
  }
}
.tag-footer {
  padding: 0.5rem;
  background: #553b8d;
  .text-tag {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    margin: 0;
    color: #ffffff;
  }
}
.our-services {
  h4 {
    font-size: 20px;
    color: #ffffff;
    margin-bottom: 14px;
  }
}
.desc {
  h4 {
    color: #ffffff;
  }
}
</style>
