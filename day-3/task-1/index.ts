function returnPromise(delay: number, message: string): Promise<string> {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(message);
        }, delay);

    });
}

returnPromise(2000, 'сработала через 2 секунды').then((result) => {
    console.log(result);
})
