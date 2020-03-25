$j = jQuery;
$j(document).ready(function(){
    $j('.btn-popup-offic').click(function(){
        $j('.popup-offic').addClass('show-popup'),$j('.black-background').addClass('active-background');
    });
    $j('#check-1').change(function(){
        if($j(this).is(':checked')){
            $j('.popup-child-1').addClass('show-1');
            $j( "#check-2" ).prop( "checked", false );
            $j( "#check-3" ).prop( "checked", false );
            $j('.popup-child-2').removeClass('show-2');
            $j('.popup-child-3').removeClass('show-3');
        }
        else
            $j('.popup-child-1').removeClass('show-1');
    });
    $j('#check-2').change(function(){
        if($j(this).is(':checked')){
            $j('.popup-child-2').addClass('show-2');
            $j( "#check-1" ).prop( "checked", false );
            $j( "#check-3" ).prop( "checked", false );
            $j('.popup-child-1').removeClass('show-1');
            $j('.popup-child-3').removeClass('show-3');

        }
        else
            $j('.popup-child-2').removeClass('show-2');
    });
    $j('#check-3').change(function(){
        if($j(this).is(':checked')){
            $j('.popup-child-3').addClass('show-3');
            $j( "#check-1" ).prop( "checked", false );
            $j( "#check-2" ).prop( "checked", false );
            $j('.popup-child-1').removeClass('show-1');
            $j('.popup-child-2').removeClass('show-2');
        }
        else
            $j('.popup-child-3').removeClass('show-3');
    });
    $j('#check-3').change(function(){
        if($j(this).is(':checked')){
            $j('.popup-child-3').addClass('show-3');
            $j( "#check-1" ).prop( "checked", false );
            $j( "#check-2" ).prop( "checked", false );
            $j('.popup-child-1').removeClass('show-1');
            $j('.popup-child-2').removeClass('show-2');
        }
        else
            $j('.popup-child-3').removeClass('show-3');
    });
    //24/3
    $j('#check-4').change(function(){
        if($j(this).is(':checked')){
            $j( "#check-5" ).prop( "checked", false ),$j( "#check-6" ).prop( "checked", false ),$j( "#check-7" ).prop( "checked", false ),$j( "#check-8" ).prop( "checked", false ),$j( "#check-9" ).prop( "checked", false );
        }
    });
    $j('#check-5').change(function(){
        if($j(this).is(':checked')){
            $j( "#check-4" ).prop( "checked", false ),$j( "#check-6" ).prop( "checked", false ),$j( "#check-7" ).prop( "checked", false ),$j( "#check-8" ).prop( "checked", false ),$j( "#check-9" ).prop( "checked", false );
        }
    });
    $j('#check-6').change(function(){
        if($j(this).is(':checked')){
            $j( "#check-4" ).prop( "checked", false ),$j( "#check-5" ).prop( "checked", false ),$j( "#check-7" ).prop( "checked", false ),$j( "#check-8" ).prop( "checked", false ),$j( "#check-9" ).prop( "checked", false );
        }
    });
    $j('#check-7').change(function(){
        if($j(this).is(':checked')){
            $j( "#check-4" ).prop( "checked", false ),$j( "#check-6" ).prop( "checked", false ),$j( "#check-5" ).prop( "checked", false ),$j( "#check-8" ).prop( "checked", false ),$j( "#check-9" ).prop( "checked", false );
        }
    });
    $j('#check-8').change(function(){
        if($j(this).is(':checked')){
            $j( "#check-4" ).prop( "checked", false ),$j( "#check-6" ).prop( "checked", false ),$j( "#check-7" ).prop( "checked", false ),$j( "#check-5" ).prop( "checked", false ),$j( "#check-9" ).prop( "checked", false );
        }
    });
    $j('#check-9').change(function(){
        if($j(this).is(':checked')){
            $j( "#check-4" ).prop( "checked", false ),$j( "#check-6" ).prop( "checked", false ),$j( "#check-7" ).prop( "checked", false ),$j( "#check-8" ).prop( "checked", false ),$j( "#check-5" ).prop( "checked", false );
        }
    });
    $j('.close').click(close_function);
    //
    $j('.link-popup').click(close_click_link);
    //
    link_page_popup();
});

//============================== FUNCTION ================================//

//close function
function close_function(){
    $j('.popup-offic').removeClass('show-popup'),$j('.black-background').removeClass('active-background');
    $j(this).parents().find('.show-1').removeClass('show-1');
    $j(this).parents().find('.show-2').removeClass('show-2');
    $j(this).parents().find('.show-3').removeClass('show-3');
}
//close when click link
function close_click_link(){
    $j('.popup-offic').removeClass('show-popup'),$j('.black-background').removeClass('active-background');
    $j(this).parents().find('.show-1').removeClass('show-1');
    $j(this).parents().find('.show-2').removeClass('show-2');
    $j(this).parents().find('.show-3').removeClass('show-3');
}
function link_page_popup(){
    $j('.link-to-1').change(function(){
        if($j('.link-to-1').is(':checked')){
            window.open("https://www.helloasso.com/associations/etika-mondo/paiements/stage-immersion-nature-et-developpement-personnel","_blank");
        }
    });
    $j('.link-to-2').change(function(){
        if($j('.link-to-2').is(':checked')){
            window.open("https://www.helloasso.com/associations/etika-mondo/paiements/stages-immersion-nature","_blank");
        }
    });
    $j('.link-to-3').change(function(){
        if($j('.link-to-3').is(':checked')){
            window.open("https://www.helloasso.com/associations/etika-mondo/paiements/stages-immersion-nature-et-ecolieu","_blank");
        }
    });
    $j('.link-to-4').change(function(){
        if($j('.link-to-4').is(':checked')){
            window.open("https://www.helloasso.com/associations/etika-mondo/paiements/stages-immersion-nature-et-ecolieu-famille","_blank");
        }
    });
    $j('.link-to-5').change(function(){
        if($j('.link-to-5').is(':checked')){
            window.open("https://www.helloasso.com/associations/etika-mondo/paiements/initiation-a-la-permaculture-par-des-etudiants-pour-des-etudiants","_blank");
        }
    });
    $j('.link-to-6').change(function(){
        if($j('.link-to-6').is(':checked')){
            window.open("https://www.helloasso.com/associations/etika-mondo/paiements/stages-immersion-nature-et-ecolieu-enfant-de-13-a-17-ans","_blank");
        }
    });
}