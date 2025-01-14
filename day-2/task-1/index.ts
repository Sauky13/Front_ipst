let Person: PersonType = {
  name: "Alex",
  age: 19,
  phone: undefined,
  notes: null,
  email: "",
};

//типы для значений ключей
type PersonType = {
  name: string;
  age: number;
  phone?: string;
  notes: string | null;
  email: string;
};

const countFilledValues = (obj: PersonType): number => {
  //для подсчёта пустых значений
  let emptyKeys = 0;

  //проходимся по ключам объекта
  for (const key in obj) {
    //здесь получаем значение ключа
    const value = obj[key as keyof PersonType];
    // проверка что значение не null не undefined и то что это не пустая строка
    if (
      value === null ||
      value === undefined ||
      //typeof нужен для того чтобы метод trim применялся только к строкам
      (typeof value === "string" && value.trim() === "")
    ) {
      emptyKeys++;
    }
  }

  return emptyKeys;
};

console.log(countFilledValues(Person));
