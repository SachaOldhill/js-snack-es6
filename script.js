function getRandomValue(min, max) {
  const localMin = min;
  const localMax = max - min + 1;
  return Math.floor(Math.random() * localMax) + localMin;
}

function es1() {
  // Creare un array di oggetti: ogni oggetto descriverà
  // una bici da corsa con le seguenti proprietà: nome e peso.
  // Stampare a schermo la bici con peso minore.
  let bikes = [{
      'nome': 'bike0',
      'peso': 10
    },
    {
      'nome': 'bike1',
      'peso': 5
    },
    {
      'nome': 'bike2',
      'peso': 15
    },
  ]
  let smallBike = {
    'nome': "",
    'peso': 100,
  };
  for (var i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    const { peso } = bike;
    if (bike.peso < smallBike.peso) {
      smallBike = bike;
    }
    console.log(smallBike);
  }
}
function es2() {
  let teams = [{
      'name': 'team1',
      'score': 0,
      'penality': 0
    },
    {
      'name': 'team2',
      'score': 0,
      'penality': 0
    },
    {
      'name': 'team3',
      'score': 0,
      'penality': 0
    },
    {
      'name': 'team4',
      'score': 0,
      'penality': 0
    }
  ];
  // console.log(teams);
  for (var i = 0; i < teams.length; i++) {
    const team = teams[i];
    const {score , penality} = team;
    team.score = getRandomValue(1,10);
    team.penality = getRandomValue(1,10);
  }
  const newArr = [];
  for (var i = 0; i < teams.length; i++) {
    const team = teams[i];
    const {name, penality} = team;
    let nameFalli = { name, penality }
    newArr.push(nameFalli);
  }
  console.log(newArr);
}
function init() {
  //es1();
  es2();
}
  $(document).ready(init);
