

interface User {
    id: number;
    name: string;
    surname: string;
    job: string;
};

async function getUsers(Url: string): Promise<User[] | void> {
    try {
      const response = await fetch(Url);
      const users: User[] = await response.json();
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      console.log(users);
      return users;
    } catch (error) {
      console.log("Ошибка при загрузке данных:", error);
    }
  }
  

const Url = "https://b28ed4ed27274f37.mokky.dev/users";

getUsers(Url);