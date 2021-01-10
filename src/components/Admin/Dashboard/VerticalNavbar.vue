<template>
  <div
    class="vertical-nav bg-white"
    id="sidebar"
    v-bind:class="{ active: isActive }"
  >
    <div class="py-4 px-3 mb-4 bg-light">
      <div class="media d-flex align-items-center">
        <img
          :src="adminUrlImg"
          alt="..."
          width="65"
          class="mr-3 img-thumbnail shadow-sm"
        />
        <div class="media-body">
          <h4 class="m-0">{{ adminName }}</h4>
          <p class="font-weight-light text-muted mb-0" v-if="!isSuperAdmin">
            Admin
          </p>
          <p class="font-weight-light text-muted mb-0" v-if="isSuperAdmin">
            Super Admin
          </p>
        </div>
      </div>
    </div>

    <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
      Main
    </p>

    <ul class="nav flex-column bg-white mb-0">
      <li class="nav-item">
        <a href="#" class="nav-link text-dark font-italic bg-light" @click="homeIsClick">
          <b-icon icon="house-door" variant="info"></b-icon>
          Home
        </a>
      </li>
      <li class="nav-item">
        <a
          href="#"
          class="nav-link text-dark font-italic bg-light"
          @click="infoIsClick"
        >
          <b-icon icon="info-circle" variant="info"></b-icon>
          Information
        </a>
      </li>
      <li class="nav-item">
        <a
          href="#"
          class="nav-link text-dark font-italic bg-light"
          @click="photoIsClick"
        >
          <b-icon icon="camera" variant="info"></b-icon>
          Photo du mois
        </a>
      </li>
      <li class="nav-item">
        <a
          href="#"
          class="nav-link text-dark font-italic bg-light"
          @click="galeriesIsClick"
        >
          <b-icon icon="images" variant="info"></b-icon>
          Galeries
        </a>
      </li>
      <li class="nav-item" v-if="isSuperAdmin">
        <a
          href="#"
          class="nav-link text-dark font-italic bg-light"
          @click="SuperAdminIsClick"
        >
          <b-icon icon="tools" variant="info"></b-icon>
          SuperAdmin
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark text-red font-italic bg-light" @click="disconnect">
          <b-iconstack>
            <b-icon stacked icon="camera" variant="info" scale="0.75"></b-icon>
            <b-icon stacked icon="slash-circle" variant="danger"></b-icon>
          </b-iconstack>
          Quitté
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
    </ul>  -->
  </div>
</template>

<script>
export default {
  name: "VerticalNavbar",
  props: {
    isActive: Boolean,
  },
  computed: {
    adminName() {
      return this.$store.state.name;
    },
    adminUrlImg() {
      return this.$store.state.url;
    },
    isSuperAdmin() {
      if (this.$store.state.is_super_admin === 1) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    photoIsClick() {
      this.$emit("photoClicked", true);
    },
    infoIsClick() {
      this.$emit("infoClicked", true);
    },
    homeIsClick() {
      this.$emit("homeClicked", true);
    },
    galeriesIsClick() {
      this.$emit("galeriesClicked", true);
    },
    SuperAdminIsClick(){
      this.$emit("superAdminClicked", true);
    },
    disconnect() {
      this.$store.dispatch("RESET_TOKEN");
      this.$router.push("/");
    },
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