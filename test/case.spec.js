const should = require('should');
const Zombie = require('zombie');
const page  = new  Zombie();

const cases = [
    { s: 'abc', xs: 'CBA' }, 
    { s: 'mob', xs: 'BOM' }, 
    { s: '123', xs: '321' },
    { s: 'omen', xs: 'NEMO' }
];

const URL = 'https://kodaktor.ru/g/autocase';        
     
cases.forEach(({ s, xs }) =>
    describe(xs + ' asyncREV()', () => 
      it('responds with revers', async () => {
        await page.visit(URL);  
        page.fill('#inp', s);
        page.pressButton('#button_do'); 
        page.document.querySelector('#ans').value.should.equal(xs);
      })
    )
);
