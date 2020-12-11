$(function() {
    $('#search-btn').click(function() {
        $('.search').toggle(100);
    })
    $('#images').click(function() {
        $('.images').show(200);
        $('.videos').hide(200);
        $('.ebooks').hide(200);
        $('#images').css('background', '#004e63');
        $('#videos').css('background', 'none');
        $('#ebook').css('background', 'none');
    })
    $('#videos').click(function() {
        $('.videos').show(200);
        $('.images').hide(200);
        $('.ebooks').hide(200);
        $('#videos').css('background', '#004e63');
        $('#images').css('background', 'none');
        $('#ebook').css('background', 'none');
    })

    $('#ebook').click(function() {
        $('.ebooks').show(200);
        $('.images').hide(200);
        $('.videos').hide(200);
        $('#ebook').css('background', '#004e63');
        $('#images').css('background', 'none');
        $('#videos').css('background', 'none');
    })
    $('.close-btn').click(function() {
        $('.profilePicture').hide(200)
    })
    $('.myProfile').click(function() {
        $('.profilePicture').show(200)
    })
    $('#myImages').click(function() {
        $('#images').show(100);
        $('#movies').hide(100);
        $('#ebooks').hide(100);
    })
    $('#myMovies').click(function() {
        $('#movies').show(100);
        $('#images').hide(100);
        $('#ebooks').hide(100);
    })
    $('#myEbooks').click(function() {
        $('#ebooks').show(100);
        $('#movies').hide(100);
        $('#images').hide(100);
    })
    $('#uploads').click(function() {
        $('#myUploads').show(100);
        $('#info').hide(100)
        $('#myInfo').css('border-bottom', 'none');
        $('#uploads').css('border-bottom', '3px solid black');

    })
    $('#myInfo').click(function() {
        $('#myUploads').hide(100);
        $('#info').show(100);
        $('#myInfo').css('border-bottom', '3px solid black');
        $('#uploads').css('border-bottom', 'none');
    });
    $('#editProfile').click(function() {
        $('#profileForm').show(250);
        $('.profile-data').hide(250);
    })
    $('#infoEditBtn').click(function() {
        $('#infoEdit').show(250);
        $('#infos').hide(250);
    })
    $('#infoBackBtn').click(function() {
        $('#infoEdit').hide(250);
        $('#infos').show(250);
    })
    $('.fa-heart-o').click(function() {
        $('.fa-heart-o').css('color', '#fff');
    })
})
$(document).ready(function() {
    var ckbox = $("input[name='ips']");
    var chkId = '';
    var text = $('.text');
    $('input').on('click', function() {
        if (ckbox.is(':checked')) {
            $("input[name='ips']:checked").each(function() {
                chkId = $(this).val();
            });
            text.html(chkId);
        } else {
            chkId = $(this).val();
            text.html(chkId - 1);
        }
    });
    var formInputs = $('input[type="email"],input[type="password"],input[type="text"]');
    formInputs.focus(function() {
        $(this).parent().children('p.formLabel').addClass('formTop');
        $('div#formWrapper').addClass('darken-bg');
        $('div.logo').addClass('logo-active');
    });
    formInputs.focusout(function() {
        if ($.trim($(this).val()).length == 0) {
            $(this).parent().children('p.formLabel').removeClass('formTop');
        }
        $('div#formWrapper').removeClass('darken-bg');
        $('div.logo').removeClass('logo-active');
    });
    $('p.formLabel').click(function() {
        $(this).parent().children('.form-style').focus();
    });
})