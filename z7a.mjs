import Zombie from 'zombie';
const URL = 'https://floating-mountain-40491.herokuapp.com/';
const page = new Zombie();
const g=URL=>new Promise((rs,rj)=>page.visit(URL,e=>(e)?rj(e):rs()));
(async()=>{
    await g(URL);
    console.log(page.document.querySelector('h4#author').title==='GossJS' );
    console.log(page.document.querySelector('h4#author').textContent );
})();
