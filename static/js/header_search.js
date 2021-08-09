$(".header_search_btn").on('click', function () {
    var med_search_text = $(".med_search_text").val();
    if (med_search_text != "") {
        window.open("/list?q=" + med_search_text);
    }
})
