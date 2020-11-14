<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">@:)@</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link to="/">Admin</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/about">Jumbo</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/carousel">Carousel</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link to="/apropos">A propos</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
</style>