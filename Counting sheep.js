let arrayOfSheep = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

  const countSheeps = function(arrayOfSheep) {
    let score = 0;
    arrayOfSheep.forEach(element => {
      if (element == true) {
        score++;
      };
    });
    return score;
  };

countSheeps (arrayOfSheep);