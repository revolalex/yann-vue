<template>
  <div>
    <VerticalNavbar v-bind:isActive="isActive" v-on:photoClicked="photoMenuClicked" v-on:infoClicked="infoMenuClicked" />
    <!-- Page content holder -->
    <div
      class="page-content p-5"
      id="content"
      v-bind:class="{ active: isActive }"
    >
      <ToggleButton v-on:buttonClicked="buttonWasClickd" />
      <!-- only one is display at the same time -->
      <InfoAdmin v-if="viewInfo"   v-bind:class="{ display: isActive }" />
      <PhotoDuMois v-if="viewPhoto" v-bind:class="{ display: isActive }"/>
    </div>
  </div>
</template>

<script>
import ToggleButton from "@/components/Admin/Dashboard/ToggleButton.vue";
import VerticalNavbar from "@/components/Admin/Dashboard/VerticalNavbar.vue";
import InfoAdmin from "@/components/Admin/Dashboard/InfoAdmin.vue";
import PhotoDuMois from "@/components/Admin/Photo/PhotoEdit.vue";
export default {
  name: "Dashboard",
  components: {
    VerticalNavbar,
    ToggleButton,
    InfoAdmin,
    PhotoDuMois,
  },
  data: function () {
    return {
      isActive: false,
      viewPhoto: false,
      viewInfo: false
    };
  },
  methods: {
    buttonWasClickd(c) {
      if (c === true) {
        this.isActive = !this.isActive;
      }
    },
    photoMenuClicked(c){
      if(c===true){
        this.viewInfo = false 
        this.viewPhoto = true
      }
    },
     infoMenuClicked(c){
      if(c===true){
        this.viewPhoto = false 
        this.viewInfo =true
      }
    }
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

@media (max-width: 768px) {
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
  .display {
    display: none;
  }
}

</style>
