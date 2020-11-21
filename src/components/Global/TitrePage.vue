<template>
  <h1 class="titrePage" data-test="titre-h1">{{titre}}</h1>
</template>

<script>
export default {
    name:"TitreDePage",
    props: 
       { titre: String }
    ,
}
</script>

<style>
.titrePage {
  text-align: center;
  padding-bottom: 3vh;
  padding-top: 3vh;
  font-size: 4em;
  font-family: "Handlee", cursive;
  color: #444444;
  background: #ffffff;
  text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
    1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
    4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
    4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
    7px 6px 1px #cccccc;
}

</style>