var captcha_widget;

var loadCaptcha = function() {
        captcha_widget = grecaptcha.render('recaptcha', {
          'sitekey' : '6LeVuQ0TAAAAAPQ96Z4YC0lq-vJ78A088-C7OxvZ',
          'callback' : function(response) {
           console.log(response)
        }
        });
      };


 $(function() {

function getCookie(name) {
var cookieValue = null;
if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
        }
    }
}
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
console.log(csrftoken);
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

    $("#thankyou").css("display","block");
    $("#thankyou").hide();
    var dialog, form,
    name = $( "#name" ),
    email = $( "#email" ),
    comments = $( "#comments" ),
    allFields = $( [] ).add( name ).add( email ).add( comments );
    
    
    function closeDialog() {
        response = grecaptcha.getResponse(captcha_widget);
        if(response){
            $.post( "/labs-contact-us-captcha/", { name: $("#name").val(), email: $("#email").val(), subject: $("#subject").val(), comments: $("#comments").val(), captcharesponse: response})
            .done(function(data) {
                $('#thankyou').html('Thank you for your input!');
                console.log("Message sent");
            })
            .fail(function(data) {
                $('#thankyou').html('Something went wrong. Please try again or email <a href="mailto:labs@ithaka.org">labs@ithaka.org</a>');
                console.log("Message failed");
            })
            .always(function(data) {
                $("#thankyou").fadeIn().delay(4000).fadeOut();
                dialog.dialog( "close" );
            });
        } else {
            alert("Please enter the CAPTCHA or refresh the page");}
    }      

    dialog = $( "#contact" ).dialog({
        autoOpen: false,
        height: 540,
        width: 360,
        modal: true,
        buttons: {
            "Send Comments": closeDialog,
            Cancel: function() {
                dialog.dialog( "close" );
            }
   	    },
        close: function() {
            form[ 0 ].reset();
        }
    });
    form = dialog.find( "form" ).on( "submit", function( event ) {
    });
    
    $( "#showContact" ).on( "click", function() {
        dialog.dialog( "open" );
    });

     function getUrlVars() {
         var vars = [], hash;
         var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
         for (var i = 0; i < hashes.length; i++) {
             hash = hashes[i].split('=');
             vars.push(hash[0]);
             vars[hash[0]] = hash[1];
         }
         return vars;
     }


 });
