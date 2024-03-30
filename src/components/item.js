import React from 'react';

const Item = () => {
  const puzzles = [
    {
      id: 1,
      description: "Где правили фараоны??",
      option1: "в Египте",
      option2: "в Греции",
      option3: "в Риме",
      correct: 1
    },
    {
      id: 2,
      description: "Какой орган спасает тушканчика от перегрева?",
      option1: "нос",
      option2: "уши",
      option3: "хвост",
      correct: 2
    },
    {
      id: 3,
      description: "Какой гриб самый ядовитый?",
      option1: "поганка",
      option2: "мухомор",
      option3: "лисичка",
      correct: 2
    },
    {
      id: 4,
      description: "Чем является арбуз?",
      option1: "фруктом",
      option2: "овощем",
      option3: "ягодой",
      correct: 3
    },
    {
      id: 5,
      description: "Сколько копеек в 1 рубле?",
      option1: "10",
      option2: "100",
      option3: "1000",
      correct: 2
    },
    {
      id: 6,
      description: "Какую максимальную скорость может развивать гепард?",
      option1: "70 км/ч",
      option2: "80 км/ч",
      option3: "более 90 км/ч",
      correct: 3
    }
   
  ];

  return (
    <div>
      {}
      {puzzles.map(puzzle => (
        <div key={puzzle.id}>
          <p>{puzzle.description}</p>
          <ul>
            <li>{puzzle.option1}</li>
            <li>{puzzle.option2}</li>
            <li>{puzzle.option3}</li>
         
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Item;