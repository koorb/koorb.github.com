
// jQuery(function($){
//     $( '#socialFeed' ).tweet({
//         username: "richstandbrook",
//         count: 10,
//         template: '{text}',
//         loading_text: 'Just a sec …'
//     });
// });

$(".thoughts").freetile()

$("#socialFeed").socialist({
    networks: [
        {name:'twitter', id:'richstandbrook'}
    ],
    random: false,
    maxResults: 60,
    fields: ['text']
})

$("#flickrFeed").socialist({
    networks: [
        {name:'flickr', id:'67491054@N00', apiKey:'432e6e56cc549b15e4589e702e616276'}
    ],
    maxResults: 60,
    fields: ['image']
})