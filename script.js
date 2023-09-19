
function funcaoComCallback(numero, callback) {
    setTimeout(() => {
        if (typeof numero === 'number') {
            callback(null, numero * 2);
        } else {
            callback('Erro: Não é um número', null);
        }
    }, 1000);
}


function funcaoComCallback2(texto, callback) {
    setTimeout(() => {
        if (typeof texto === 'string') {
            callback(null, `Texto modificado: ${texto.toUpperCase()}`);
        } else {
            callback('Erro: Não é uma string', null);
        }
    }, 2000);
}


function funcaoComPromise(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof numero === 'number') {
                resolve(numero * 3);
            } else {
                reject('Erro: Não é um número');
            }
        }, 1000);
    });
}


function funcaoComPromise2(texto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof texto === 'string') {
                resolve(`Texto modificado: ${texto.toLowerCase()}`);
            } else {
                reject('Erro: Não é uma string');
            }
        }, 2000);
    });
}


async function funcaoComAsyncAwait() {
    try {
        const resultado1 = await funcaoComPromise(5);
        console.log(`Resultado 1 (async/await): ${resultado1}`);

        const resultado2 = await funcaoComPromise2('Olá, Mundo!');
        console.log(`Resultado 2 (async/await): ${resultado2}`);
    } catch (error) {
        console.error(error);
    }
}


async function funcaoComAsyncAwait2() {
    try {
        const resultado1 = await new Promise((resolve, reject) => {
            funcaoComCallback(10, (err, resultado) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resultado);
                }
            });
        });

        const resultado2 = await new Promise((resolve, reject) => {
            funcaoComCallback2('Async/Await', (err, resultado) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resultado);
                }
            });
        });

        console.log(`Resultado 1 (callback): ${resultado1}`);
        console.log(`Resultado 2 (callback): ${resultado2}`);
    } catch (error) {
        console.error(error);
    }
}


funcaoComCallback(5, (err, resultado) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Resultado 1 (callback): ${resultado}`);
    }
});

funcaoComCallback2('Hello', (err, resultado) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Resultado 2 (callback): ${resultado}`);
    }
});


funcaoComPromise(7)
    .then((resultado) => {
        console.log(`Resultado 1 (Promise): ${resultado}`);
    })
    .catch((error) => {
        console.error(error);
    });

funcaoComPromise2('JavaScript')
    .then((resultado) => {
        console.log(`Resultado 2 (Promise): ${resultado}`);
    })
    .catch((error) => {
        console.error(error);
    });


funcaoComAsyncAwait();
funcaoComAsyncAwait2();
