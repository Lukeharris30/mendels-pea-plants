import {mix, offspring } from './modules/createHybrids.js'
import { PeaFlower } from './customElements/peaFlower.js'

const tallPlants = ['T', 'T']
const shortPlants = ['t', 't']

mix(tallPlants, shortPlants, 20)

console.log('offspringrsult',offspring)

const app = document.querySelector('#app')

for( let childPair of offspring){
    const pea = new PeaFlower( 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Snow_pea_flowers.jpg/330px-Snow_pea_flowers.jpg', childPair[0].isTall ? 'Tall' : 'Short', 'h2', childPair[0].genotype, childPair[0].isTall )
    const pea1 = new PeaFlower( 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Snow_pea_flowers.jpg/330px-Snow_pea_flowers.jpg', childPair[1].isTall ? 'Tall' : 'Short',  'h2', childPair[1].genotype, childPair[1].isTall )
    app.appendChild(pea)
    app.appendChild(pea1)
}