// declaração das variaveis
let heroi,nivelXp,categoria;

heroi = "Seya";
nivelXp = 5000;

if (nivelXp <= 1000) {
    categoria = "Ferro";
} else if (nivelXp <= 2000 ) {
    categoria = "Bronze";
} else if (nivelXp <= 5000) {
    categoria = "Prata";
} else if (nivelXp <= 7000) {
    categoria = "Ouro"
} else if (nivelXp <= 8000) {
    categoria = "Platina"    
} else if (nivelXp <= 9000) {
    categoria = "Ascendente"    
} else if (nivelXp <= 10000) {
    categoria = "Imortal"        
} else {
    categoria = "Radiante"
}

console.log("O herói de nome " + heroi + " está no nível " + categoria + ".");