let tour = 0;

let tabJeu = new Array;

tabJeu = [
    [NaN,NaN,NaN],
    [NaN,NaN,NaN],
    [NaN,NaN,NaN]
]; // NaN car c'est le seul "type" qui n'est pas égal à lui même;

for(let iCase = 1 ; iCase < 10 ; iCase ++){
    document.getElementById(iCase).addEventListener('click', (event) => {
            let estFinLigne = iCase %3 == 0;
            let ligne = Math.floor(iCase/3) - estFinLigne; 
            let colonne = iCase%3 + (estFinLigne ? 2 : -1);

            if(verifCaseJoue(ligne, colonne)){
                jouerTour(iCase, ligne, colonne);
                if(verifVictoire()){
                    alert("Victoire des : " + (tour%2 == 0 ? "O" : "X"));
                    location.reload();
                }
            }
            else
                alert("Cette case est déjà jouée, veuillez reessayer");
      })
}

function jouerTour(nbCase, ligne, colonne){
    let estJoueurCroix = tour%2 == 0;
    tabJeu[ligne][colonne] = estJoueurCroix ? 'x' : 'o';
    document.getElementById(nbCase).style.backgroundImage = estJoueurCroix ? "url('img/cross.png')" : "url('img/rond.png')";
    tour ++;
}

function verifCaseJoue(ligne, colonne){
        return tabJeu[ligne][colonne] != 'x' && tabJeu[ligne][colonne] != 'o';
}

function verifVictoire(){
    for(let iLigne = 0 ; iLigne < 3 ; iLigne ++){
        if(tabJeu[iLigne][0] == tabJeu[iLigne][1] && tabJeu[iLigne][1] == tabJeu[iLigne][2])
            return true;
    }
    for(let iColonne = 0 ; iColonne < 3 ; iColonne ++){
        if(tabJeu[0][iColonne] == tabJeu[1][iColonne] && tabJeu[1][iColonne] == tabJeu[2][iColonne])
            return true;
    }
    
    if(tabJeu[0][0] == tabJeu[1][1] && tabJeu[1][1] == tabJeu[2][2] || tabJeu[0][2] == tabJeu[1][1] && tabJeu[1][1] == tabJeu[2][0])
        return true;
    
        return false;
}

