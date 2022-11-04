// target the all id and class 
let ludo = document.getElementById('ludo')



// defind the all vareble
import Ludo from './Ludo.js'
let speed = 60
let Home = [1,2,3,4,5,6]


// all function
const gameloop = ()=>{
    console.log('send')
}

// defind the all Object
let Ludo_obj = new Ludo(ludo)
// Ludo_obj.createElement(7,10,"div",'khan','blue')
Ludo_obj.createCenter()
Ludo_obj.createDesing()
Ludo_obj.plearHomeDesing(Home,'green')


// game main loop
// gameloop()
// setInterval(gameloop, 1000/speed);

