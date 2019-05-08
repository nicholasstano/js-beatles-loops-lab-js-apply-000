// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var i = 0; 
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}

function iLoveTheBeatles(i) {
  var array = []
  do {
    array.push(`I love the Beatles!`) 
    i++
  } while (i < 15)
  return array
}

/* 
function theBeatlesPlay(mus, ins) {
  var array = []
  for (var i = 0; i < mus.length; i++) {
    array.push(`${mus[i]} plays ${ins[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var n = 0
  var array = []
  while (n < facts.length) {
    array.push(`${facts[n]}!!!`)
    n++
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push(`I love the Beatles!`)
    n++
  } while (n < 15)
  return array
}
*/