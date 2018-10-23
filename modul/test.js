// describe('тест получения старых значений', () => {
//     it('TX01 RUB       888YR, object', () => {
//         assert.isObject(parser.getOldTax('TX01 RUB       888YR')); 
//     });
//     it('TX01 RUB       888YR  TX01 RUB       888YR, array', () => {
//         assert.isArray(parser.getOldTax('TX01 RUB       888YR  TX01 RUB       888YR'));
//     });
// });
// describe('тест значений получаемых из строки', () => {
//     it('тест 1 TX01 RUB       888YR, value = 888', () => {
//         assert.equal(parser.getOldTax('TX01 RUB       888YR').value, 888);
//     });
//     it('тест 2 TX01 RUB       888YR  TX01 RUB      1250YQ', () => {
//         assert.equal(parser.getOldTax('TX01 RUB       888YR  TX01 RUB      1250YQ')[0].value, 888);
//         assert.equal(parser.getOldTax('TX01 RUB       888YR  TX01 RUB      1250YQ')[1].value, 1250);
//     });
//     it(`тест 3 TX01 RUB       888YR  TX02 RUB       198RI  TX03 RUB      1512GE  TX04 RUB       274JA` , () => {
//         var a = parser.getOldTax('TX01 RUB       888YR  TX02 RUB       198RI  TX03 RUB      1512GE TX04 RUB       274JA');
//         assert.equal(a[0].value, 888);
//         assert.equal(a[1].value, 198);
//         assert.equal(a[2].value, 1512);
//         assert.equal(a[3].value, 274);
//     });
// });

describe('текст получения новых значений', () => {
// RUB     2148-YR   XT RUB 130-RI RUB 130-RI RUB 172-RI RUB RUB     7496-YQ   172-RI RUB 1469-CY RUB 120-JX RUB 264-JW
    it('одно значение', () => {
        assert.isObject(parser.getNewTax('RUB     2148-YR'));
    });
    it('два значения', () => {
        assert.isArray(parser.getNewTax('RUB     2148-YR   XT RUB 130-RI'));
    });
});