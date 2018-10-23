/*
    создание карточки пользователя
*/
function createCardUser(user) {
    var block = $('<div/>', { class: 'card col-3', id: user.id });
    $('<div/>', {
        class: 'card-body',
        html: `<h5 class="card-title">${user.name}</h5>`
    }).appendTo(block);
    var list = $('<ul/>', { class: 'list-group list-group-flush' });
    createListElem('UserName', 'username');
    createListElem('Email', 'email');
    createListElem('Website', 'website');

    function createListElem(title, arg) {
        $('<li/>', {
            class: "list-group-item",
            html: `<b>${title}:</b> ${user[arg]}`
        }).appendTo(list);
    }
    list.appendTo(block);
    block.appendTo('.js-block');
}

/*
реализация запроса
*/

let listUser; //переменная для хранения списка пользователей
async function getUsers() {
    listUser = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(req => req.json());
}
getUsers();