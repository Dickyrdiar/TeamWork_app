<template>
  <div>
    <div class="header">
      <b-navbar toggleable="lg" type="light">
        <b-container>
          <b-navbar-brand href="#">TeamWork</b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto menu">
              <b-nav-item>Why Us</b-nav-item>
              <b-nav-item>Resource</b-nav-item>
              <b-nav-item>Services</b-nav-item>
              <b-nav-item>Features</b-nav-item>
              <a href="#" class="btn btn-tmwrk"> Started Here </a>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: #ffff;
  font-size: 17.5px;

  .navbar-toggler {
    border: none;
    color: #553b8d;
    padding: 0;
  }

  .nav-item {
    margin: 0.5rem 0.325rem;
    text-align: center;
    color: #1e1135;
    a:hover {
      color: #553b8d !important;
    }
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
