<template>
  <div id="nfContainer" class="page-wrap d-flex flex-row align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center whiteText">
                <span class="display-1 d-block">404</span>
                <div id="whiteC" class="mb-4 lead">Page not Found</div>
                <b-button href="/" variant="outline-light">Back Home</b-button>
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

.whiteText{
  color: white;
  text-shadow: 2px 2px 2px rgb(88, 87, 87);
}
</style>