
import Chance from 'chance';
const chance = new Chance();

it('does a thing', async() => {
  console.log('ok world!', chance.address())
})