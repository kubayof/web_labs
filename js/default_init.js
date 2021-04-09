/**
 * Initializes model with default values (should be )
 */

import Chords from "./model/Chords.js";
import Comment from "./model/Comment.js";
import UserPrincipal from "./model/UserPrincipal.js";

export default function newChords() {
    const chords = new Chords('Jenny', 'Studio Killers', new Date(), `
[Verse]
<Am>Jenny darlin', <F>you're my best <C>friend
<Am>But there's a few <F>things that you don't <C>know of
<Am>Why I borrow your lipstick <F>so often<C>
<Am>I'm using your shirt as a <F>pillow case<C>

[Chorus]
<F>I wanna <Dm>ruin our friend<Am>ship
<G>We should be lovers instead
<F>I don't <Dm>know how to say<Am> this
<G>Cause you're really my dearest friend



[Verse]
<Am>Jenny darlin', <F>you're my best <C>friend
<Am>I've been doing bad <F>things that you don't <C>know about
<Am>Stealing your stuff<F> now and then<C>
<Am>Nothing you'd miss but it <F>means the <C>world to me

[Chorus]
<F>I wanna <Dm>ruin our friend<Am>ship
<G>We should be lovers instead
<F>I don't <Dm>know how to say<Am> this
<G>Cause you're really my dearest friend
<F>I wanna <Dm>ruin our friend<Am>ship
<G>We should be lovers instead
<F>I don't <Dm>know how to say<Am> this
<G>Cause you're really my dearest friend

[Verse]
<F>Jenny take <Dm>my hand, we <Am>are more than friends
<G>I will follow you until the end
<F>Jenny take <Dm>my hand, I <Am>cannot pretend
<G>Why I never like your new boyfriends
    `, 1);

    chords.addComment(new Comment(new UserPrincipal('Name', 'Email', 'male', '11.11.2000'),
        'Awesome', new Date()))

    return chords;
}