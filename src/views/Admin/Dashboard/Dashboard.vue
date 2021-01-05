<template>
  <div>
    <VerticalNavbar
      v-bind:isActive="isActive"
      v-on:photoClicked="photoMenuClicked"
      v-on:infoClicked="infoMenuClicked"
      v-on:homeClicked="homeMenuClicked"
      v-on:galeriesClicked="galeriesMenuClicked"
    />
    <!-- Page content holder -->
    <div
      class="page-content p-5"
      id="content"
      v-bind:class="{ active: isActive }"
    >
      <ToggleButton v-on:buttonClicked="buttonWasClickd" />
      <!-- only one is display at the same time -->
      <InfoAdmin v-if="viewInfo" v-on:photoLinkClicked="photoLinkWasClicked" />
      <PhotoDuMois v-if="viewPhoto" />
      <HomeAdmin v-if="viewHome" />
      <GalerieAdmin v-if="viewGaleries" />
    </div>
  </div>
</template>

<script>
import ToggleButton from "@/components/Admin/Dashboard/ToggleButton.vue";
import VerticalNavbar from "@/components/Admin/Dashboard/VerticalNavbar.vue";
import InfoAdmin from "@/components/Admin/Dashboard/Information/InfoAdmin.vue";
import PhotoDuMois from "@/components/Admin/Photo/PhotoEdit.vue";
import HomeAdmin from "@/components/Admin/Home/HomeAdmin.vue";
import GalerieAdmin from "@/components/Admin/Galeries/GaleriesAdmin.vue";
export default {
  name: "Dashboard",
  components: {
    VerticalNavbar,
    ToggleButton,
    InfoAdmin,
    PhotoDuMois,
    HomeAdmin,
    GalerieAdmin,
  },
  data: function () {
    return {
      //handle the nav status
      isActive: false,
      //handle the view
      viewPhoto: false,
      viewInfo: false,
      viewGaleries: false,
      viewHome: true,
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
        this.viewGaleries = false;
        this.viewHome = false;
        this.viewInfo = false;
        this.viewPhoto = true;
      }
    },
    infoMenuClicked(c) {
      if (c === true) {
        this.viewGaleries = false;
        this.viewHome = false;
        this.viewPhoto = false;
        this.viewInfo = true;
      }
    },
    homeMenuClicked(c) {
      if (c === true) {
        this.viewGaleries = false;
        this.viewPhoto = false;
        this.viewInfo = false;
        this.viewHome = true;
      }
    },
    galeriesMenuClicked(c) {
      if (c === true) {
        this.viewPhoto = false;
        this.viewInfo = false;
        this.viewHome = false;
        this.viewGaleries = true;
      }
    },

    // link element was clicked
    photoLinkWasClicked(c) {
      if (c === true) {
        this.viewInfo = false;
        this.viewHome = false;
        this.viewPhoto = true;
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
