import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)
  
const routes = {
    '/': Home,
}

new Vue({
  data: {
    currentRoute: window.location.pathname,
    currentTheme: 'red',
    isParticles: false
  },
  computed: {
    ViewComponent () {
        if(this.currentRoute == '/home-9'){
            this.isParticles = true;
        }
        return routes[this.currentRoute]
    }
  },
  mounted: function() {
    // Navbar
    function initNavbar() {
        window.jQuery('.navbar-nav a').bind('click', function(event) {
            var jQueryanchor = window.jQuery(this);
            window.jQuery('html, body').stop().animate({
                scrollTop: window.jQuery(jQueryanchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    }

    // Sticky Header
    function initSticky() {        
        window.jQuery(".sticky").sticky({
            topSpacing: 0
        });
    }
    
    //Scrollspy
	function initScrollspy() {
		// window.jQuery("#navbarCollapse").scrollspy({
		//     offset:20
        // });
	}

	// Magnific Popup
    function initMagnificPopup() {
        window.jQuery('.video-play-icon').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
    }

    function initContactForm() {
        window.jQuery('#contact-form').submit(function() {

            var action = window.jQuery(this).attr('action');

            window.jQuery("#message").slideUp(750, function() {
                window.jQuery('#message').hide();

                window.jQuery('#submit')
                    .attr('disabled', 'disabled');

                    window.jQuery.post(action, {
                        name: window.jQuery('#name').val(),
                        email: window.jQuery('#email').val(),
                        comments: window.jQuery('#comments').val(),
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        window.jQuery('#message').slideDown('slow');
                        window.jQuery('#cform img.contact-loader').fadeOut('slow', function() {
                            window.jQuery(this).remove()
                        });
                        window.jQuery('#submit').removeAttr('disabled');
                        if (data.match('success') != null) window.jQuery('#cform').slideUp('slow');
                    }
                );

            });

            return false;
        });
    }

    function init() {
        initNavbar();
        initSticky();
        initScrollspy();
        initMagnificPopup();
        initContactForm();
        window.Waves.init();
    }
    init();
    if(this.isParticles){
        //load particles
        window.jQuery('head').append("<!--Partical js--><script src='./js/particles.js'></script><script src='./js/particles.app.js'></script>");
    }
    window.jQuery("#style-switcher .bottom a.settings").click(function(e){
        e.preventDefault();
        var div = window.jQuery("#style-switcher");
        if (div.css("left") === "-189px") {
            window.jQuery("#style-switcher").animate({
                left: "0px"
            }); 
        } else {
            window.jQuery("#style-switcher").animate({
                left: "-189px"
            });
        }
    })
    
    window.jQuery("ul.pattern li a").click(function(e){
        e.preventDefault();
        window.jQuery(this).parent().parent().find("a").removeClass("active");
        window.jQuery(this).addClass("active");
    })

    window.jQuery("#style-switcher").animate({
        left: "-189px"
    }); 
  },
  methods: {
    handleScroll () {
        var scrollDistance = window.jQuery(window).scrollTop();
        // Assign active class to nav links while scolling
		window.jQuery('section.scroll-select').each(function(i) {
            if (window.jQuery(this).position().top <= scrollDistance + 160) {
                window.jQuery('#mySidenav li.active').removeClass('active');
                window.jQuery('#mySidenav li').eq(i).addClass('active');
            }
		});      
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
