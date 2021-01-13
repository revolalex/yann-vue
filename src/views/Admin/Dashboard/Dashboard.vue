<template>
  <div>
    <VerticalNavbar
      v-bind:isActive="isActive"
      v-on:photoClicked="photoMenuClicked"
      v-on:infoClicked="infoMenuClicked"
      v-on:homeClicked="homeMenuClicked"
      v-on:galeriesClicked="galeriesMenuClicked"
      v-on:superAdminClicked="superAdminMenuCliked"
    />
    <!-- Page content holder -->
    <div
      class="page-content p-5"
      id="content"
      v-bind:class="{ active: isActive }"
    >
      <ToggleButton v-on:buttonClicked="buttonWasClickd" />
      <!-- only one is display at the same time -->
      <InfoAdmin
        v-if="viewInfo"
        v-on:photoLinkClicked="photoLinkWasClicked"
        v-on:carousselLinkClicked="carousselLinkWasClicked"
      />
      <PhotoDuMois v-if="viewPhoto" />
      <HomeAdmin v-if="viewHome" />
      <CarousselEdit v-if="viewCaroussel" />
      <SuperAdmin v-if="viewSuperAdmin" />
    </div>
  </div>
</template>

<script>
import ToggleButton from "@/components/Admin/Dashboard/ToggleButton.vue";
import VerticalNavbar from "@/components/Admin/Dashboard/VerticalNavbar.vue";
import InfoAdmin from "@/components/Admin/Information/InfoAdmin.vue";
import PhotoDuMois from "@/components/Admin/Photo/PhotoEdit.vue";
import HomeAdmin from "@/components/Admin/Home/HomeAdmin.vue";
import CarousselEdit from "@/components/Admin/Caroussel/CarousselEdit.vue";
import SuperAdmin from "@/components/Admin/SuperAdmin/SuperAdmin.vue";
export default {
  name: "Dashboard",
  components: {
    VerticalNavbar,
    ToggleButton,
    InfoAdmin,
    PhotoDuMois,
    HomeAdmin,
    CarousselEdit,
    SuperAdmin,
  },
  data: function () {
    return {
      //handle the nav status
      isActive: false,
      //handle the view
      viewPhoto: false,
      viewInfo: false,
      viewCaroussel: false,
      viewHome: true,
      viewSuperAdmin: false,
    };
  },
  methods: {
    buttonWasClickd(c) {
      if (c === true) {
        this.isActive = !this.isActive;
      }
    },
    // nav element was clicked
    photoMenuClicked(c) {
      if (c === true) {
        this.viewCaroussel = false;
        this.viewSuperAdmin = false;
        this.viewHome = false;
        this.viewInfo = false;
        this.viewPhoto = true;
      }
    },
    infoMenuClicked(c) {
      if (c === true) {
        this.viewCaroussel = false;
        this.viewSuperAdmin = false;
        this.viewHome = false;
        this.viewPhoto = false;
        this.viewInfo = true;
      }
    },
    homeMenuClicked(c) {
      if (c === true) {
        this.viewCaroussel = false;
        this.viewSuperAdmin = false;
        this.viewPhoto = false;
        this.viewInfo = false;
        this.viewHome = true;
      }
    },
    galeriesMenuClicked(c) {
      if (c === true) {
        this.viewPhoto = false;
        this.viewSuperAdmin = false;
        this.viewInfo = false;
        this.viewHome = false;
        this.viewCaroussel = true;
      }
    },
    superAdminMenuCliked(c) {
      if (c === true) {
        this.viewCaroussel = false;
        this.viewPhoto = false;
        this.viewInfo = false;
        this.viewHome = false;
        this.viewSuperAdmin = true;
      }
    },

    // link element was clicked
    photoLinkWasClicked(c) {
      if (c === true) {
        this.viewSuperAdmin = false;
        this.viewInfo = false;
        this.viewHome = false;
        this.viewPhoto = true;
        this.viewCaroussel = false;
      }
    },
    carousselLinkWasClicked(c) {
      if (c === true) {
        this.viewCaroussel = true;
        this.viewPhoto = false;
        this.viewInfo = false;
        this.viewHome = false;
        this.viewSuperAdmin = false;
      }
    },
  },
};
</script>

<style  scoped>
.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}

.text-uppercase {
  letter-spacing: 0.1em;
}

/* for toggle behavior */
#content.active {
  width: 100%;
  margin: 0;
}

@media (max-width: 1050px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}
@media (max-width: 768px) {
  .display {
    display: none;
  }
}
</style>
