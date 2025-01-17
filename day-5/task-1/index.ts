function gamePlay(playerChoice: string) {

    const choices = ["Камень", "Ножницы", "Бумага"];
    const choiceIndex = parseInt(playerChoice, 10);

   
    if (isNaN(choiceIndex) || choiceIndex < 1 || choiceIndex > 3) {
        return "Неверный выбор! Введите цифру: 1 для Камня, 2 для Ножниц или 3 для Бумаги.";
    }

    const playerSelection = choices[choiceIndex - 1];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result: string;

    if (playerSelection === computerChoice) {
        result = "Ничья!";
    } else if (
        (playerSelection === "Камень" && computerChoice === "Ножницы") ||
        (playerSelection === "Ножницы" && computerChoice === "Бумага") ||
        (playerSelection === "Бумага" && computerChoice === "Камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил!";
    }
 
    const gameResult = {
        playerChoice: playerSelection,
        computerChoice,
        result,
    };

    return gameResult;
}


const userChoice = prompt("Выберите: 1 для Камня, 2 для Ножниц, 3 для Бумаги") || "";
console.log(gamePlay(userChoice));
