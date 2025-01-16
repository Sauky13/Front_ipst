interface User {
  name: string;
  email: string;
  isActive: boolean;
}

const users = [
  { name: "Валерий Бондарчук ", email: "Valera@mail.ru", isActive: true },
  { name: "Леонардо Декаприо", email: "DecAprio@gmail.com", isActive: false },
  { name: " Александр Пинчук", email: "AlexX@gmail.com", isActive: true },
];

function cleanUserData(users: User[]): Promise<User[]> {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.1) {
      reject(new Error("Случайная ошибка при обработке данных"));
      return;
    }

    const UsersAfterCleaning = users
      .filter((user) => user.isActive)
      .map((user) => ({
        ...user,
        name: user.name.trim().toLowerCase(),
        email: user.email.toLowerCase(),
      }));

    resolve(UsersAfterCleaning);
  });
}

cleanUserData(users)
  .then((cleanedUsers) => {
    console.log("Очищенные данные пользователей:", cleanedUsers);
  })
  .catch((error) => {
    console.error("Ошибка при обработке данных пользователей:", error);
  });
