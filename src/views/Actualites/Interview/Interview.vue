<template>
  <div>
    <TitreDePage :titre="$t('Titre.Interview')" />

    <div class="container m-t-md">
      <div class="row">
        <b-card :header="$t('Interview.Card.Header')">
          <img
            id="franceC"
            src="https://www.lalettre.pro/photo/art/grande/21162842-24309028.jpg?v=1522156420"
            class="card-img-top img-thumbnail"
            alt="france culture"
          />

          <h5 class="card-title">{{ $t('Interview.Card.Title') }}</h5>
          <b-card-text class="card-text">
           <h6>{{$t('Interview.Doc.Reference')}}</h6>
           <br/>
            {{$t('Interview.First_paragraph_part1')}}
            {{$t('Interview.First_paragraph_part2')}}
            {{$t('Interview.First_paragraph_part3')}}
            {{$t('Interview.First_paragraph_part4')}}    
            <br /><br />
            {{$t('Interview.Second_paragraph_part1')}}
            {{$t('Interview.Second_paragraph_part2')}}
            {{$t('Interview.Second_paragraph_part3')}}
             
          </b-card-text>
          <b-card-text>{{$t('Interview.Timing')}}</b-card-text>
          <b-card-text class="card-text">
            <small class="text-muted"
              ><a
                href="https://www.franceculture.fr/emissions/sur-les-docks/bestioles-parisiennes"
                >France Culture</a
              ></small
            >
          </b-card-text>
          <AudioInterview />
        </b-card>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import TitreDePage from "@/components/Global/TitrePage.vue";
import AudioInterview from "@/components/Actualites/Interview/AudioInterview";
import Footer from "@/components/Global/Footer";
export default {
  components: {
    TitreDePage,
    AudioInterview,
    Footer
  },
};
</script>

<style>
#franceC {
  max-height: 40vh;
  width: auto;
}
</style>