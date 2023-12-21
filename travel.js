const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

// Header Container

ScrollReveal().reveal(".header_container h1",scrollRevealOption);

ScrollReveal().reveal(".header_container h4",{
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header_container .btn",{
    ...scrollRevealOption,
    delay:1000,
});
// about container
ScrollReveal().reveal(".about_container .section_header",scrollRevealOption);
ScrollReveal().reveal(".about_container .section_subheader",{
   ...scrollRevealOption,
   delay:500, 
} );

ScrollReveal().reveal(".about_container .about_flex",{
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".about_container .btn",{
    ...scrollRevealOption,
    delay:1500,
});
// Discover Container

ScrollReveal().reveal(".discover_card",{
    ...scrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".discover_card_content",{
    ...scrollRevealOption,
    interval:500,
    delay:200,
});
// Blogs Section
ScrollReveal().reveal(".blogs_card",{
    duration:1000,
    interval:400,
});
// Journals Container
ScrollReveal().reveal(".journals_card",{
    ...scrollRevealOption,
    interval:400,
});
//Contact Container
ScrollReveal().reveal(".footer_container",{
    ...scrollRevealOption,
    interval:400,
});