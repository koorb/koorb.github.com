
jQuery(function($){
    $( '#socialFeed' ).tweet({
        username: "richstandbrook",
        count: 6,
        template: '{text}',
        loading_text: 'Just a sec …'
    });
});

// $(".thoughts").freetile()

$("#flickrFeed").socialist({
    networks: [
        {name:'flickr', id:'67491054@N00', apiKey:'432e6e56cc549b15e4589e702e616276'}
    ],
    maxResults: 60,
    fields: ['image']
})