/**
 * allowedSites: map of id/label for loading sites
 * tries: changes how many tries you get to finish the wordle
 * shuffle: shuffle the words in the wordlist each time you load the app (note: you will lose the 'word of the day' functionality if this is true)
 * unicode: whether to apply Unicode normalization to words and orthography - options: 'NFC', 'NFD', 'NKFC', 'NKFD', false
 */ 
export const SETTINGS = {
  allowedSites: [{
    id: "tseshahtlanguage",
    label: "c̕išaaʔatḥ"
  },{
    id: "homalco",
    label: "Homalco"
  },{
    id: "lilwat",
    label: "Líl̓wat"
  },{
    id: "nadleh-stella-whutenne",
    label: "Nadleh-Stella Whut’enne"
  },{
    id: "sliammon",
    label: "Sliammon"
  },{
    id: "smalgyax-beta",
    label: "Sm'algya̱x"
  },{
    id: "stzuminus",
    label: "Stz’uminus"
  },{
    id: "tahltan",
    label: "Tāłtān"
  },{
    id: "wuikala",
    label: "’Uik̓ala"
  }],
  tries: 6,
  shuffle: false,
  normalization: 'NFC',
}
