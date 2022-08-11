export default function validate(input) {
  let error = {};

  if (input.height? input.height < 1 || input.height > 15:null) {
    error.height = "La altura debe ser un número entre 1 y 15 metros";
  }
  if (input.weight? input.weight < 1 || input.weight > 2000: null) {
    error.weight = "El peso debe ser estar entre 1 y 2.000 kilogramos";
  }
 
  if (input.hp?input.hp < 1 || input.hp > 100:null) {
    error.hp = "la vida debe ser entre 1 y 100 de HP";
  }
  if (input.speed?input.speed < 1 || input.speed > 200:null) {
    error.speed = "La velocidad debe ser entre 1 y 200";
  }

  if (input.attack?input.attack < 1 || input.attack > 100:null) {
    error.attack = "La fuerza debe ser entre 1 y 100";
  }

  if (input.defense?input.defense < 1 || input.defense > 100:null) {
    error.defense = "La defensa debe ser entre 1 y 100";
  }

  if (input.types.length > 2) {
    error.types = "puedes seleccionar hasta 2";
  }
  return error;
}
  // if (!input.defense) {
  //   error.defense = "Este campo es obligatorio";
  // } 
  //  if (!input.attack) {
  //   error.attack = "Este campo es obligatorio";
  // }
  // if (!input.speed) {
  //   error.speed = "Este campo es obligatorio";
  // }
  // if (!input.name) {
  //   error.name = "Este campo es obligatorio";
  // }
  // if (!input.height) {
  //   error.height = "Este campo es obligatorio";
  // }
  // if (!input.weight) {
  //   error.weight = "Este campo es obligatorio";
  // }
  // if (!input.hp) {
  //   error.hp = "Este campo es obligatorio";
  // }
  // if (!input.weight) {
  //   error.weight = "Este campo es obligatorio";
  // }