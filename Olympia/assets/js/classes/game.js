function game(name, faction, x, y) {
  this.playerName = name;//Contient le nom du joueur.
  this.faction = faction;//Contient la faction choisie par le joueur.
  this.team;//Contient les personnages du joueur.
  this.statPoints;//Contient le nombre de points d'amélioration de statistiques que le joueur possède.
  this.map = new map(x, y); //Contient la carte de la partie
}
