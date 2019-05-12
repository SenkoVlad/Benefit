$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 900); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	dots: false,
	margin: 50,
	loop:true,
	nav: true,
    items: 1,
    center: true,
    responsiveClass: true,
    navText: ["<img src='img/back.png'>", "<img src='img/next.png'>"],
       responsive: {
           0: {
               items: 1,
               margin: 150,
               center: true,
               autoWidth: true,
               nav: false,
               navText: []
           },
           992: {
               items: 1
           }
       }

})

});

function requestCall(elem) {
    var name = elem.parentNode.querySelector("#name").value;
    var email = elem.parentNode.querySelector("#email").value;
    var phonenumber = elem.parentNode.querySelector("#phonenumber").value;

    $.ajax({
        type: "POST",
        url: "actionCall.php",
        data: {
            "name": name,
            "email": email,
            "phonenumber": phonenumber
        }
    }).done(function (result) {
        // alert(result);
    });
    alert("Заявка на звонок принята");
    // $('#modal_form').close();
};



function requestClaim(elem) {
    var name = elem.parentNode.querySelector("#name").value;
    var email = elem.parentNode.querySelector("#email").value;
    var phonenumber = elem.parentNode.querySelector("#phonenumber").value;
    var message = elem.parentNode.querySelector("#message").value;

    $.ajax({
        type: "POST",
        url: "actionClaim.php",
        data: {
            "message": message,
            "name": name,
            "email": email,
            "phonenumber": phonenumber
        }
    }).done(function (result) {
        //  alert(result);
    });
    alert("Заявка  принята");
    // $('#modal_form').close();
};

// function feedback(elem) {
//     var name = elem.parentNode.querySelector("#name").value;
//     var job = elem.parentNode.querySelector("#job").value;
//     var message = elem.parentNode.querySelector("#message").value;
//     var photo = elem.parentNode.querySelector("#photo");

//     $.ajax({
//         type: "POST",
//         url: "actionComment.php",
//         data: {
//             "name": name,
//             "job": job,
//             "message": message,
//             "photo": photo
//         }
//     }).done(function (result) {
//         // 
//     });

//     alert("Комментарий добавлен");
// };




function closeForm(elem) {
    setTimeout(() => {
        alert("Отзыв отправлен");
    }, 500);
};




