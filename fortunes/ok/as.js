function stepfinal() {
    jQuery("#p_body_content").fadeOut("slow");
    jQuery("#p_loading").fadeIn("slow");
}

function goToUrlFinish() {
    stepfinal();
    PreventExitPop = false;
    document.getElementById("p_form_post").submit();
}

function scrollTo(a) {
    if ($("#" + a).length) {
        var c = $("#" + a).offset();
        var b = c.top;
        $("html,body").animate({
            scrollTop: b
        }, {
            duration: "slow"
        });
    }
}

$(document).ready(function() {
    $(".bq1").click(function() {
        $("#q1").fadeOut("slow", function() {
            $("#q2").fadeIn("slow")
        })
    }), $(".bq2").click(function() {
        $("#q2").fadeOut("slow", function() {
            $("#q3").fadeIn("slow")
        })
    }), $(".bq3").click(function() {
        $("#q3").fadeOut("slow", function() {
            $("#q4").fadeIn("slow")
        })
    }), $(".bq4").click(function() {
        scrollTo("id1"), $("#content1").fadeOut("slow", function() {
            $("#content2").fadeIn(), setTimeout(function() {
                $("#result1").fadeIn(1e3)
            }, 3e3), setTimeout(function() {
                $("#result2").fadeIn(1e3)
            }, 4100), setTimeout(function() {
                $("#result3").fadeIn(1e3)
            }, 6e3), setTimeout(function() {
                $("#content2").fadeOut("slow", function() {
                    "undefined" != typeof roulette_ini ? rouletteRoot._init() : "undefined" != typeof box_ini && boxRoot._init(), $("#content3").fadeIn()
                })
            }, 7100)
        })
    })
});
var count = 1;
var intentos = 3;
var puedo = false;
var boxRoot;
(function() {
    "use strict";
    boxRoot = {
        _init: function() {
            setTimeout(function() {
                jQuery('#p_modal1').modal();
            }, 1000);
            jQuery('.try').on('click', function() {
                if (puedo && count <= intentos) {
                    if (jQuery(this).hasClass('abierta')) {} else {
                        puedo = false;
                        jQuery('.circle-loader').removeClass("load-complete");
                        jQuery('.checkmark').css("display", "none");
                        jQuery(this).addClass('abierta');
                        if (count == 2) {
                            jQuery(this).addClass('premiazo');
                            setTimeout(function() {
                                jQuery(".div_img_gift, .img_gift").fadeIn("slow", function() {
                                    setTimeout(function() {
                                        jQuery('#p_modal3').modal();
                                        jQuery('.circle-loader').addClass("load-complete");
                                        jQuery('.checkmark').css("display", "block");
                                    }, 1500);
                                });
                            }, 4000);
                        } else {
                            count++;
                            intentos--;
                            jQuery('#num_intentos').html(intentos);
                            setTimeout(function() {
                                jQuery('#p_modal2').modal();
                                setTimeout(function() {
                                    jQuery('.circle-loader').addClass("load-complete");
                                    jQuery('.checkmark').css("display", "block");
                                    puedo = true;
                                }, 1000);
                            }, 2000);
                        }
                    }
                }
            });
            jQuery("#p_modal_button1").on("click", function(event) {
                event.stopPropagation();
                jQuery('#p_modal1').modal('hide');
                puedo = true;
            });
            jQuery("#p_modal_button2").on("click", function(event) {
                event.stopPropagation();
                jQuery('#p_modal2').modal('hide');
            });
        }
    };
    jQuery(document).ready(function() {
        if (typeof box_ini == "undefined") {
            boxRoot._init();
        }
    });
})();