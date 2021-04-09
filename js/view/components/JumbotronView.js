export default class JumbotronView {
    constructor() {

    }

    toHtml() {
        return `
<div class="jumbotron jumbotron-fluid bg-dark">
    <div class="jumbotron-background">
        <img src="img/stage_cropped.jpg" class="blur ">
    </div>
    <div class="container text-white">

        <h1 class="display-4">
            <img src="img/logo.png" alt="logo"/>
        </h1>
        <hr class="my-4">
        <p class="lead">Play, sing, share</p>
    </div>
</div>
        `;
    }
}