<template>
  <div>
    <TitreDePage titre="Biographie"/>
    <div class="aproposContainer">
      <CardApropos/>
      <PortraitApropos/>
    </div>
  </div>
</template>

<script>
import CardApropos from '../components/APropos/CardApropos'
import PortraitApropos from '../components/APropos/PortraitApropos'
import TitreDePage from '../components/Global/TitrePage'

export default {
  name: "Apropos",
  methods: {},
  components:{
    CardApropos,
    PortraitApropos,
    TitreDePage
  }
  
};
</script>

<style>
.aproposContainer {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: justify;
  padding-bottom: 10vh;
}

</style>