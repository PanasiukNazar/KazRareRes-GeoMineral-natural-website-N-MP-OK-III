
// Replace   enter_your_form_action_url_here   with your actual Mailchimp URL
const formActionURL = `enter_your_form_action_url_here`; 


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Get the value of the dir=""
var textDirectionOfTheDom = document.querySelector('html').getAttribute('dir');



/*  
  -------------------------------------------
  -----      JS for loader-wrapper      -----
  -------------------------------------------
*/

window.addEventListener("load", function(event){
    var loaderWrapper = document.querySelector('.loader-wrapper');
    if (loaderWrapper) {
        loaderWrapper.style.display = "none";
    } 

    // initialize the AOS
    if (typeof AOS === 'object') {
        AOS.init({
            offset: 0,
            once: true,
        });
    }
})



/*  
  ---------------------------------------------------------------------
  -----      JS to update all the current year automatically      -----
  ---------------------------------------------------------------------
*/

var currentYear = new Date().getFullYear();
var currentYearTag = document.getElementsByClassName("current-year");

if (currentYearTag.length > 0) {
    for (var i = 0; i < currentYearTag.length; i++) {
        currentYearTag[i].innerHTML = currentYear;
    }
}





/*  
  -----------------------------------------------
  -----      JS for button back to top      -----
  -----------------------------------------------
*/

let btnBackToTop = document.querySelector(".btn-back-to-top");

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// When the user scrolls down 800px from the top of the document, show the button
function scrollbtnBackToTopFun() {
    if ( document.body.scrollTop > 800 || document.documentElement.scrollTop > 800 ) {
        btnBackToTop.style.display = "inline-flex";
    } else {
        btnBackToTop.style.display = "none";
    }
}

window.onscroll = function () {
    if (btnBackToTop) {
        scrollbtnBackToTopFun();
    }
};

// When the user clicks on the button, scroll to the top of the document
if (btnBackToTop) {
    btnBackToTop.addEventListener("click", backToTop);
}



/*  
  --------------------------------------------------
  -----      JS for header top navigation      -----
  --------------------------------------------------
*/

const navigation = document.querySelector('.navigation');
if (navigation) {
    
    navigation.style.transition = 'top 2s';
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            if (scrollTop > 300) {
                navigation.classList.add("fixed-top");
                navigation.classList.remove("position-absolute");
                navigation.style.top = '-190px'; // Hide the navigation menu
            }
        } else {
            // Scrolling up
            if (scrollTop > 300) {
                navigation.classList.add("fixed-top");
                navigation.classList.remove("position-absolute");
                navigation.style.top = '0'; // Show the navigation menu
            } else {
                navigation.classList.remove("fixed-top");
                navigation.classList.add("position-absolute");
                navigation.style.top = ''; // Reset top style
            }
        }

        lastScrollTop = scrollTop;
    });
}




/*  
  ---------------------------------------------------
  -----      JS to embed a video on modal!      -----
  ---------------------------------------------------
*/

var iframeVideo;
var videoSrc;
var videoDataBsTarget;
var videoDataBsTargetModale;
var videoBtn = document.querySelectorAll('.video-btn-modal');

if (videoBtn.length > 0) {
    videoBtn.forEach(element => {
        element.addEventListener('click',function(e){
            videoSrc = element.getAttribute('data-bs-src')
            videoDataBsTarget = element.getAttribute('data-bs-target')

            iframeVideo = document.querySelector(videoDataBsTarget + " .iframeVideo");

            videoDataBsTarget = videoDataBsTarget.slice(1)
            videoDataBsTargetModale = document.getElementById(videoDataBsTarget)

            videoDataBsTargetModale.addEventListener('shown.bs.modal',(e)=>{
                iframeVideo.setAttribute('src', videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0')
            })

            videoDataBsTargetModale.addEventListener('hide.bs.modal',(e)=>{
                iframeVideo.setAttribute('src', videoSrc)
            })

        })
    })
}





/*  
  ----------------------------------
  -----      JS for Glide      -----
  ----------------------------------
*/ 



// Select all elements with the class 'glide'
const glideElements = document.querySelectorAll('.glide');

// Loop through each element and create a Glide instance
if (glideElements.length > 0) {
    // Create an object to store the options for each class
    const glideOptions = {
        glideHighLinear: {
            direction: textDirectionOfTheDom,
            type: 'carousel',
            focusAt: 'center',
            startAt: 4,
            perView: 6,
            breakpoints: {
                1400: { perView: 5 },
                1200: { perView: 4 },
                992: { perView: 3 },
                768: { perView: 2 },
                576: { perView: 1 }
            },
            autoplay: true,
            animationDuration: 3000,
            animationTimingFunc: 'linear'
        },

        glideLowGap: {
            direction: textDirectionOfTheDom,
            type: 'carousel',
            perView: 3,
            focusAt: 'center',
            autoplay: 3000,
            gap: 20,
            breakpoints: {
                1400: { perView: 2 },
                1200: { perView: 2 },
                992: { perView: 1 },
                768: { perView: 1 },
                576: { perView: 1 }
            }
        },

        // Add more classes and options as needed
    };

    glideElements.forEach(element => {
        const classList = element.classList;
        const className = classList[1];
        const option = glideOptions[className];

        // Create and mount the Glide instance
        const glide = new Glide(element, option);
        glide.mount();
    });

}



