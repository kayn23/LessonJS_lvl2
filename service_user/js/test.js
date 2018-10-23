describe('запрос к серверу', () => {
    var list;

    before(async () => {
        list = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(req => req.json());
    });
    console.log(list)
    // console.log(list)
    it('Список не нулевой', () => {
        assert.isDefined(list);
    });

    function isObject(item) {
        it(`Элемент является объектом`, () => {
            assert.strictEqual(item, 'Object');
        });
    }
});

/*
структура запроса:
1) список не нулевой
2) список содержит объекты
3) каждый объект имеет name,username,email,website
*/