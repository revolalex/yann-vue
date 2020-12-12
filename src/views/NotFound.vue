<template>
  <div id="nfContainer" class="page-wrap d-flex flex-row align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <span class="display-1 d-block">404</span>
                <div id="whiteC" class="mb-4 lead">La page que vous recherchez n'a pas été trouvé</div>
                <b-button href="/" variant="outline-light">Retour à l'accueil </b-button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:"NotFound",
};
</script>

<style>
#nfContainer{
  height: 100vh;
  width: auto;
  background: url("https://yanncrochet.com/photo/jardin/jardin5xs.jpg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#whiteC span{
  color: white;
}

</style>