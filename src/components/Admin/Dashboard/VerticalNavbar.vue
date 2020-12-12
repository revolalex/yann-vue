<template>
  <div
    class="vertical-nav bg-white"
    id="sidebar"
    v-bind:class="{ active: isActive }"
  >
    <div class="py-4 px-3 mb-4 bg-light">
      <div class="media d-flex align-items-center">
        <img
          src="https://yanncrochet.com/images/PortraitYC.JPG"
          alt="..."
          width="65"

          class="mr-3 img-thumbnail shadow-sm"
        />
        <div class="media-body">
          <h4 class="m-0">Yann Crochet</h4>
          <p class="font-weight-light text-muted mb-0">Photographe</p>
        </div>
      </div>
    </div>

    <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
      Main
    </p>

    <ul class="nav flex-column bg-white mb-0">
      <li class="nav-item">
        <a href="#" class="nav-link text-dark font-italic bg-light">
          <b-icon icon="info" variant="info"></b-icon>
          Information
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark font-italic">
          <b-icon icon="house-door" variant="info"></b-icon>
          Home
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark font-italic">
           <b-icon icon="camera" variant="info"></b-icon>
          Photo du mois
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark font-italic">
           <b-icon icon="images" variant="info"></b-icon>
          Galeries
        </a>
      </li>
    </ul>

    <!-- <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
      Charts
    </p>

    <ul class="nav flex-column bg-white mb-0">
      <li class="nav-item">
        <a href="#" class="nav-link text-dark font-italic">
          <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
          Area charts
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark font-italic">
          <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
          Bar charts
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark font-italic">
          <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
          Pie charts
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark font-italic">
          <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
          Line charts
        </a>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "VerticalNavbar",
  props: {
    isActive: Boolean,
  },
};
</script>

<style>
#sidebar.active {
  margin-left: -17rem;
}
.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
  margin-top: 60px;
}
.text-gray {
  color: #aaa;
}

</style>