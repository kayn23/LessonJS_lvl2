/*
Проверка валидности форм. Сделал через jquery validator
*/
$.validator.methods.nameCorret = function (value, element) {
    return this.optional(element) || /[a-zA-Zа-яёА-ЯЁ]+/.test(value);
}

$('#myForm').validate({
    rules: {
        myForm_name: {
            required: true,
            nameCorret: true
        },
        myForm_email: {
            required: true,
            email: true
        }
    },
    messages: {
        myForm_name: {
            required: 'Введите пожалуйста имя',
            nameCorret: 'Неккоректное имя'
        },
        myForm_email: {
            required: 'Введите пожалуйста email',
            email: 'Введите почту корректно. Пример: example@mail.ru'
        }
    },
    errorClass: "myForm__error",
    submitHandler: function () {
        $('#myForm input').each(function () {
            var elem = $(this);
            if (elem.val().length > 0) {
                var string = `${elem.attr('placeholder')}: ${elem.val()}`;
                $('<p>', {
                    text: string
                }).appendTo('#dialog');
            }
        })
        $('#dialog').dialog('open');
    }
});

/*
Подгрузка городов
*/
var cityList = [],
    newCityList = [];
$.ajax({
    url: "http://89.108.65.123/cities",
    dataType: "json",
    success: (data) => {
        cityList = data;
    }
});
function createOption(name) {
    $('<option />', { value: name }).appendTo('#cityList')
}
function clearList() {
    document.querySelector('#cityList').innerHTML = '';
}
function createList(list) {
    list.forEach(function (element) {
        createOption(element.name)
    });
}

document.querySelector('#myForm__city').oninput = function (e) {
    let string = e.target.value;
    if (string.length >= 3) {
        const reg = RegExp('^' + string, 'i');
        newCityList = cityList.filter((item) => {

            return reg.test(item.name);
        })
    }
    clearList()
    createList(newCityList);
}
/*
 
*/
$(function () {
    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 200
        },
        hide: {
            effect: "explode",
            duration: 200
        },
        beforeClose: function (event, ui) {
            $(this).html('');
        }
    });
})
$('#myForm').on('submit', function (e) {
    e.preventDefault();
});