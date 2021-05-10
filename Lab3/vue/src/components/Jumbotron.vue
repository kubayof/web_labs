<template>
  <div class="jumbotron jumbotron-fluid bg-dark">
    <div class="jumbotron-background">
      <img :src="require('@/assets/stage_cropped.jpg')" class="blur ">
    </div>
    <div class="container text-white">

      <h1 class="display-4">
        <img :src="require('@/assets/logo.png')" alt="logo"/>
      </h1>
      <hr class="my-4">
      <p class="lead">Play, sing, share</p>
    </div>
  </div>
</template>

<script>

</script>

<style>
.jumbotron {
  position:relative;
  overflow:hidden;
}

.jumbotron .container {
  position:relative;
  z-index:2;

  /*background:rgba(0,0,0,0.2);*/
  padding:2rem;
  /*border:1px solid rgba(0,0,0,0.1);*/
  border-radius:3px;
}

.jumbotron-background {
  object-fit:cover;
  font-family: 'object-fit: cover;',serif;
  position:absolute;
  top:0;
  z-index:1;
  width:100%;
  height:100%;
  opacity:0.5;
}

img.blur {
  -webkit-filter: blur(4px);
  filter: blur(4px);
  /*filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='4');*/
}

.text-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>