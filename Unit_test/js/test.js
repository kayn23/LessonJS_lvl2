describe('Проверка умножения',()=> {
    it('7*8 = 56', ()=>{
        assert.equal(multi(7,8),56)
    })
});
describe('проверка api', () => {
    var list;
    before(async () => {
        list = await fetch('https://dog.ceo/api/breeds/list/all')
            .then(req => req.json());
    });
    it('есть ли будьдог', () => {
        assert.isDefined(list.message.bulldog);
    });
});