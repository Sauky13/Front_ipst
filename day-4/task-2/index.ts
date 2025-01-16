type UserWithGadget = {
    id: string;
    name: string;
    gadget: {
        id: string;
        name: string;
        price: string | undefined;
    };
};


type UserWithGadgets = {
    id: string;
    name: string;
    gadgets: {
        id: string;
        name: string;
        price: string | undefined;
    }[];
};


const input: UserWithGadget[] = [
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "101", name: "Phone", price: "1000" },
    },
    {
        id: "2",
        name: "Khidir Karawita",
        gadget: { id: "102", name: "Tablet", price: undefined },
    },
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "103", name: "Laptop", price: "1500" },
    },
];


function sortUserWithGadgets(users: UserWithGadget[]): UserWithGadgets[] {
// созаём объект с помощью Record где ключ это идентификатор пользоватеоя
    const groupedUsers: Record<string, UserWithGadgets> = {};

// проходимся по массиву users на каждой итерации будут доставться id name и gadgets
    for (const user of users) {
        const { id, name, gadget } = user;
        // проверка наличия пользовтеля в в groupedUsers
        // если такого id нет то создаётся новая запись с ключом id
        if (!groupedUsers[id]) {
            groupedUsers[id] = { id, name, gadgets: [] };
        }
        // если такой id есть то гаджет текущего пользователя добавляется в его массив 
        groupedUsers[id].gadgets.push(gadget);
    }
    return Object.values(groupedUsers);
}

const output: UserWithGadgets[] = sortUserWithGadgets(input);
console.log(output);