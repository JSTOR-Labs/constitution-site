---
layout: page
title: Support
description: For <i>Understanding the U.S. Constitution</i>
---



### Contact Us

We want to hear from you how to make this app better!  **Send us your questions, comments and suggestions.**

<a id="showContact" class="button">Send Comments</a>

### Known Issues

* Jumping to a clause brings you to the top of the Article and Section the clause appears within, not directly to the clause itself if it appears deep within a Section.
* In citations copied and pasted from the app, fields that should be italicized are tagged with an "< i >" but are not fully formatted. 
* It is possible to select a clause (such as the signatures in Article 7) with 0 articles quoting or referring to it, leading to a zero-results page.
* Occasionally the icon to refine your search results appears at the bottom of the screen (when this happens, restart the app to correct the display.)

    <div id="thankyou">Thank you for your input!</div>
    <div id="contact-form" title="Send Comments" >
        <form method="post" action="/labs-contact-us/">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" value="" class="text ui-widget-content ui-corner-all">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" value="" class="text ui-widget-content ui-corner-all">
            <input type="hidden" name="subject" id="subject" value="Understanding the US Constitution">
            <label for="comments">Comments and Suggestions</label>
            <textarea name="comments" id="comments" rows="6" cols="70" value="" class="text ui-widget-content ui-corner-all"></textarea>
            <div id="recaptcha"></div>
            <input type="submit" tabindex="-1" style="position:absolute; top:-1000px" >
        </form>
        <script src="https://www.google.com/recaptcha/api.js?onload=loadCaptcha&render=explicit"></script>
    </div>
