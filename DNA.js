let dna = "ATTGC";

// вариант 1 через цикл
function DNAStrand(dna){
dna = dna.split('');
for (let i=0; i<dna.length; i++) {
  if (dna[i] == 'A') {
    dna[i] = 'T';
  } else if (dna[i] == 'T') {
    dna[i] = 'A';
  } else if (dna[i] == 'G') {
    dna[i] = 'C';
  } else if (dna[i] == 'C') {
    dna[i] = 'G';
  }
}
return dna.join("");
};

DNAStrand(dna);

// вариант 2 replace
function DNAStrand(dna){
  let change = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  return dna.replace(/./g, a=>change[a]);
};

DNAStrand(dna);

// вариант 3 через map
function DNAStrand(dna){
  let change = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  return dna.split('').map(a=>change[a]).join('');
};

DNAStrand(dna);