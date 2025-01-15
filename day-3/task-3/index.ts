interface User {
    id: number;
    firstName: string;
  }
  
  const generateRandomUsers = (num: number): User[] => {
    const namesArray = ["John", "Jane", "Jim", "Alice", "Bob", "Mary"];
    return Array.from({ length: num }, () => ({
      id: Math.floor(Math.random() * 100),
      firstName: namesArray[Math.floor(Math.random() * namesArray.length)]
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
  