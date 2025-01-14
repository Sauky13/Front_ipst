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

  let values = Object.values(obj);

 //console.log(values);

  let emptyValues = values.filter(
      (value) => value === null || value === undefined ||
          (typeof value === "string" && value.trim() === "")
  );

  return emptyValues.length;
};



console.log(countFilledValues(Person));
