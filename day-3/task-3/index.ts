interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const generateRandomUsers = (num: number): User[] => {
  const namesArray = ["John", "Jane", "Jim", "Alice", "Bob", "Mary"];
  const lastnamesArray = [ "Smith","Johnson", "Williams", "Brown","Jones", "Davis" ];
  const LocationsArray = [ "Sochi", "Moscow", "Kazan", "Samara", "Novosibirsk", "Ufa" ];

  return Array.from({ length: num }, () => ({
    id: Math.floor(Math.random() * 100),
    firstName: namesArray[Math.floor(Math.random() * namesArray.length)],
    lastName: lastnamesArray[Math.floor(Math.random() * lastnamesArray.length)],
    location: LocationsArray[Math.floor(Math.random() * LocationsArray.length)],  
    age: Math.floor(Math.random() * 80)+18, 
  }));
};

const randomUsers = generateRandomUsers(3);

const fakeApi = (data: User[]): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

fakeApi(randomUsers)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
