<template>
    <div id="home1">
        <navbar></navbar>

        <hero-section></hero-section>

        <numbers></numbers>

        <services></services>
        
        <testimonial2></testimonial2>

        <contact></contact>

        <social></social>
        
        <footer-alter></footer-alter>
        
        <switcher />
    </div>
    
</template>

<script>
"use strict";

import Navbar from './Elements/Navbar.vue'
import HeroSection from './Sections/HeroSection.vue'
import Services from './Sections/Services.vue'
import About from './Sections/About.vue'
import WebConfiguration from './Sections/WebConfiguration.vue'
import Pricing from './Sections/Pricing.vue'
import Testimonial2 from './Sections/Testimonial2.vue'
import StartProcess from './Sections/StartProcess.vue'
import Testimonial from './Sections/Testimonial.vue'
import GetStarted from './Sections/GetStarted.vue'
import Blog from './Sections/Blog.vue'
import Contact from './Sections/Contact.vue'
import Social from './Sections/Social.vue'
import FooterSection from './Elements/FooterSection.vue'
import FooterAlter from './Elements/FooterAlter.vue'
import Switcher from './Elements/Switcher.vue'
import Numbers from './Sections/Numbers'

export default {
  name: 'Home',
  components: {
    Navbar,
    HeroSection,
    Services,
    About,
    WebConfiguration,
    Pricing,
    Testimonial2,
    StartProcess,
    Testimonial,
    GetStarted,
    Blog,
    Contact,
    Social,
    FooterSection,
    FooterAlter,
    Switcher,
    Numbers
  }
}

</script>
