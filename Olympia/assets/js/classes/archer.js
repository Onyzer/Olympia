function archer(hp, ap, mp , init, name, faction, p_a, m_a) {

  character.call(this, hp, ap, mp , init, name, faction, p_a, m_a);

  /*Zone/Monocible : Monocible
    Portée : 3
    Coût en AP : 3
    Effet : Inflige [physical_attack] dégats à la cible.*/
  this.spell1 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 3) {
        if (getDistance(this.cell,cell) <=3) {
          if(target.block != true){
            damage(target, this.physical_attack);
          }
          else {
            console.log('L\'adversaire pare votre attaque.');
            target.block = false;
          }
          this.ap -= 3;
        }
        else {
          console.log('La cible est trop éloignée.');
        }
      }
      else {
        console.log('Vous n\'avez pas assez de PA pour cette action.');
      }
    }
    else {
      console.log('Ceci n\'est pas une cible valide');
    }
  }.bind(this);

  /*Zone/Monocible : Monocible
    Portée : 6
    Coût en AP : 4
    Effet : Inflige [physical_attack] dégats à la cible.*/
  this.spell2 = function() {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 4) {
        if (getDistance(this.cell,cell) <=6) {
          if(target.block != true){
            damage(target, this.physical_attack);
          }
          else {
            console.log('L\'adversaire pare votre attaque.');
            target.block = false;
          }
          this.ap -= 4;
        }
        else {
          console.log('La cible est trop éloignée.');
        }
      }
      else {
        console.log('Vous n\'avez pas assez de PA pour cette action.');
      }
    }
    else {
      console.log('Ceci n\'est pas une cible valide');
    }
  }.bind(this);

  /*Zone/Monocible : Monocible
    Portée : 5
    Coût en AP : 4
    Effet : Inflige [physical_attack] dégats à la cible et la cible perd 1 MP pour son prochain tour.*/
  this.spell3 = function() {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 4) {
        if (getDistance(this.cell,cell) <=5) {
          if(target.block != true){
            damage(target, this.physical_attack);
            target.mp -= 1;
          }
          else {
            console.log('L\'adversaire pare votre attaque.');
            target.block = false;
          }
          this.ap -= 4;
        }
        else {
          console.log('La cible est trop éloignée.');
        }
      }
      else {
        console.log('Vous n\'avez pas assez de PA pour cette action.');
      }
    }
    else {
      console.log('Ceci n\'est pas une cible valide');
    }
  }.bind(this);

  /*Zone/Monocible : Monocible
    Portée : 4
    Coût en AP : 6
    Effet : Inflige [physical_attack * 2] dégats à la cible et le brule
            pendant 3 tours à hauteur de [magical_attack * 2 ] dégats par tour*/
  this.spell4 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 6) {
        if (getDistance(this.cell,cell) <=4) {
          if(target.block != true){
            damage(target, this.physical_attack*2);
            target.burning = [3, this.magical_attack/2];
          }
          else {
            console.log('L\'adversaire pare votre attaque.');
            target.block = false;
          }
          this.ap -= 6;
        }
        else {
          console.log('La cible est trop éloignée.');
        }
      }
      else {
        console.log('Vous n\'avez pas assez de PA pour cette action.');
      }
    }
    else {
      console.log('Ceci n\'est pas une cible valide');
    }
  }.bind(this);

  this.spells = new Array(this.spell1, this.spell2, this.spell3, this.spell4);
}
