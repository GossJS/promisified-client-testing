import Zombie from 'zombie';
const URL = process.argv[2] || 'https://kodaktor.ru/g/boo'  // https://infinite-lake-15917.herokuapp.com/';
const page = new Zombie();
const g=URL=>new Promise((rs,rj)=>page.visit(URL,e=>(e)?rj(e):rs()));
(async()=>{
    await g(URL);
    console.log(page.document.querySelector('h4#author').title==='GossJS' );
    console.log(page.document.querySelector('h4#author').textContent );
})();
