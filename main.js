// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

pAequorFactory = (specimenNum, dna) => ({
  specimenNum,
  dna, 
  mutate() {
    let randomBase = Math.floor(Math.random() * (this.dna.length -1));
    let newDna = returnRandBase();
    while (randomBase === newDna) {
      let newDna = returnRandBase();
    }
    this.dna[randomBase] = newDna;
    console.log('Mutated DNA at ' + randomBase );
  },
  compareDNA(pAequorObj) { 
    let count = 0;
    for (base in this.dna) {
      if (this.dna[base] == pAequorObj.dna[base]) { 
        count++; 
      }
    }
    console.log(`specimen ${this.specimenNum} and specimen ${pAequorObj.specimenNum} have ${(count/dna.length) * 100 + "%"} DNA in common`)

  },
  willLikelySurvive() {
    let chance = 0;
    for (base in this.dna) {
      if (this.dna[base] === 'C' || this.dna[base] === 'G') {
        chance++;
      }
    }
    return ((chance/this.dna.length)*100) >= 60 ? true : false;
  }

});

// With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.

let count = 0; 
let finalArr = [];
while (count <= 30) {
  let generatedObj = pAequorFactory(count, mockUpStrand()); 
  if (generatedObj.willLikelySurvive()) {
    finalArr.push(generatedObj); 
    count++;
  }
}

console.log(finalArr);