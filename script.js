function carregar() {
    alert(`Bem vindo ao meu primeiro site, espero que goste :)`)
}
function gerarMegaSena() {
    let dezenas = document.getElementById(`txtMegaSena`).value
    let numeros = []
    let res = document.getElementById(`res`)

    if (dezenas.length === 0 && dezenas % 0) {
        alert(`Por favor cite um número entre 6 e 15`)
    } else {
        if (dezenas > 5 && dezenas < 16) {
            while (numeros.length < dezenas) {
                var aleatorio = Math.floor(Math.random() * 60);
                if (numeros.indexOf(aleatorio) == -1)
                    numeros.push(aleatorio);
                numeros.sort((a, b) => a - b)
                res.innerHTML = `Seus números são: <br>  ${numeros.join(" - ")}`
            }
        } else {
            alert(`Por favor, insira um número entre 6 e 15`)
        }
    }
}

function gerarLotofacil() {
    let dezenas = document.getElementById(`txtLoto`).value
    let numeros = []
    let res = document.getElementById(`res`)
    if (dezenas.length === 0) {
        alert(`Por favor cite um número entre 15 e 20`)
    } else {
        if (dezenas > 14 && dezenas < 21) {
            while (numeros.length < dezenas) {
                var aleatorio = Math.floor(Math.random() * 25);
                if (numeros.indexOf(aleatorio) == -1)
                    numeros.push(aleatorio);
                numeros.sort((a, b) => a - b)
                res.innerHTML = `Seus números são: <br>  ${numeros.join(" - ")}`
            }
        } else {
            alert(`Por favor, insira um número entre 15 e 20`)
        }
    }
}

function gerarQuina() {
    let dezenas = document.getElementById(`txtQuina`).value
    let numeros = []
    let res = document.getElementById(`res`)

    if (dezenas.length === 0) {
        alert(`Por favor cite um número entre 5 e 15`)
    } else {
        if (dezenas > 4 && dezenas < 16) {
            while (numeros.length < dezenas) {
                var aleatorio = Math.floor(Math.random() * 80);
                if (numeros.indexOf(aleatorio) == -1)
                    numeros.push(aleatorio);
                numeros.sort((a, b) => a - b)
                res.innerHTML = `Seus números são: <br>  ${numeros.join(" - ")}`
            }
        } else {
            alert(`Por favor, insira um número entre 5 e 15`)
        }
    }
}

function gerarDiadeSorte() {
    let dezenas = document.getElementById(`txtSorte`).value
    let numeros = []
    let mes = parseInt(Math.random() * (12 - 1) + 1);
    let textMes = ""
    let res = document.getElementById(`res`)

    if (dezenas.length === 0) {
        alert(`Por favor cite um número entre 7 e 15`)
    } else {
        if (dezenas > 6 && dezenas < 16) {
            while (numeros.length < dezenas) {
                var aleatorio = Math.floor(Math.random() * 30) + 1;
                if (numeros.indexOf(aleatorio) == -1)
                    numeros.push(aleatorio);
                numeros.sort((a, b) => a - b)

                switch (mes) {
                    case 1:
                        textMes = `Janeiro`
                        break;
                    case 2:
                        textMes = `Fevereiro`
                        break;
                    case 3:
                        textMes = `Março`
                        break;
                    case 4:
                        textMes = `Abril`
                        break;
                    case 5:
                        textMes = `Maio`
                        break;
                    case 6:
                        textMes = `Junho`
                        break;
                    case 7:
                        textMes = `Julho`
                        break;
                    case 8:
                        textMes = `Agosto`
                        break;
                    case 9:
                        textMes = `Setembro`
                        break;
                    case 10:
                        textMes = `Outubro`
                        break;
                    case 11:
                        textMes = `Novembro`
                        break;
                    case 12:
                        textMes = `Dezembro`
                        break;
                }
                res.innerHTML = `Seus números são: ${numeros.join(" - ")}.<br> Seu mês é: ${textMes}`
            }
        } else {
            alert(`Por favor, insira um número entre 7 e 15`)
        }
    }
}

function gerarDuplaSena() {
    let dezenas = document.getElementById(`txtDuplaSena`).value
    let numeros1 = []
    let numeros2 = []
    let res = document.getElementById(`res`)

    if (dezenas.length === 0 && dezenas % 0) {
        alert(`Por favor cite um número entre 6 e 15`)
    } else {
        if (dezenas > 5 && dezenas < 16) {
            while (numeros1.length < dezenas) {
                var aleatorio = Math.floor(Math.random() * 50);
                if (numeros1.indexOf(aleatorio) == -1)
                    numeros1.push(aleatorio);
                numeros1.sort((a, b) => a - b)

                if (dezenas > 5 && dezenas < 16) {
                    while (numeros2.length < dezenas) {
                        var aleatorio2 = Math.floor(Math.random() * 50);
                        if (numeros2.indexOf(aleatorio2) == -1)
                            numeros2.push(aleatorio2);
                        numeros2.sort((a, b) => a - b)
                    }
                }
                res.innerHTML = `Seus números são: <br>  <p>${numeros1.join(" - ")}<p> e <br>  <p>${numeros2.join(" - ")}<p>`
            }
        } else {
            alert(`Por favor, insira um número entre 6 e 15`)
        }
    }
}

function gerarLotoMania() {
    let dezenas = document.getElementById(`txtLotoMania`).value
    let numeros = []
    let res = document.getElementById(`res`)

    if (dezenas.length === 0) {
        alert(`Por favor cite um número válido`)
    } else {
        if (dezenas >= 50 && dezenas <= 50) {
            while (numeros.length < dezenas) {
                var aleatorio = Math.floor(Math.random() * 100);
                if (numeros.indexOf(aleatorio) == -1)
                    numeros.push(aleatorio);
                numeros.sort((a, b) => a - b)
                res.innerHTML = `Seus números são: <br>  ${numeros.join(" - ")}`
            }
        } else {
            alert(`Só são permitidas 50 dezenas nesse jogo!`)
        }
    }
}

console.clear();

function gerar(dezenas) {
    let numeros = 10;
    let colunas = Array.from({ length: 7 }, () =>
        Array.from({ length: dezenas }, () => null)
    );
    let jogos = colunas.map((jogo) =>
        // TODO: do/while números iguais
        jogo.map(() => Math.floor(Math.random() * numeros)).sort()
    );

    return jogos;
}

let gerador = document.getElementById("gerador");

gerador.addEventListener("click", function (e) {
    e.preventDefault();

    let dezenas = document.getElementById("dezenas").value;

    if (dezenas.length === 0) {
        alert(`Por favor insira um número válido`)
        return;
    }

    if (dezenas < 1) {
        alert("Escolha um valor maior do que zero.");
        return;
    }

    if (dezenas > 3) {
        alert(`Escolha um valor menor ou igual a três`);
        return;
    }

    let resultado = document.getElementById("resultado");
    let jogos = gerar(dezenas);

    while (resultado.lastChild) {
        resultado.removeChild(resultado.lastChild);
    }

    jogos.forEach((jogo, index) => {
        let div = document.createElement("div");

        div.innerHTML = `<strong>Coluna ${index + 1}:</strong> ${jogo.join(" - ")}`;
        resultado.appendChild(div);
    });
});

function gerarTimeMania() {
    let dezenas = document.getElementById(`txtTimeMania`).value
    let numeros = []
    let time = parseInt(Math.random() * (80 - 1) + 1);
    let textTime = ""
    let res = document.getElementById(`res`)

    if (dezenas.length === 0) {
        alert(`Por favor cite um valor válido`)
    } else {
        if (dezenas >= 10 && dezenas <= 10) {
            while (numeros.length < dezenas) {
                var aleatorio = Math.floor(Math.random() * 80);
                if (numeros.indexOf(aleatorio) == -1)
                    numeros.push(aleatorio);
                numeros.sort((a, b) => a - b)

                switch (time) {
                    case 1:
                        textTime = `Flamengo`
                        break;
                    case 2:
                        textTime = `Corinthians`
                        break;
                    case 3:
                        textTime = `Santos`
                        break;
                    case 4:
                        textTime = `Palmeiras`
                        break;
                    case 5:
                        textTime = `São Paulo`
                        break;
                    case 6:
                        textTime = `Grêmio`
                        break;
                    case 7:
                        textTime = `Vasco da Gama`
                        break;
                    case 8:
                        textTime = `Internacional`
                        break;
                    case 9:
                        textTime = `Botafogo`
                        break;
                    case 10:
                        textTime = `Atlético-MG`
                        break;
                    case 11:
                        textTime = `Cruzeiro`
                        break;
                    case 12:
                        textTime = `Fluminense`
                        break;
                    case 13:
                        textTime = `Bahia`
                        break;
                    case 14:
                        textTime = `Fortaleza`
                        break;
                    case 15:
                        textTime = `Goiás`
                        break;
                    case 16:
                        textTime = `Vitória`
                        break;
                    case 17:
                        textTime = `Ceará`
                        break;
                    case 18:
                        textTime = `ABC`
                        break;
                    case 19:
                        textTime = `Avaí`
                        break;
                    case 20:
                        textTime = `Atlético-PR`
                        break;
                    case 21:
                        textTime = `Santa Cruz`
                        break;
                    case 22:
                        textTime = `Treze`
                        break;
                    case 23:
                        textTime = `Coritiba`
                        break;
                    case 24:
                        textTime = `Atlético-GO`
                        break;
                    case 25:
                        textTime = `Sport`
                        break;
                    case 26:
                        textTime = `Londrina`
                        break;
                    case 27:
                        textTime = `Guarani`
                        break;
                    case 28:
                        textTime = `Remo`
                        break;
                    case 29:
                        textTime = `Gama`
                        break;
                    case 30:
                        textTime = `Náutico`
                        break;
                    case 31:
                        textTime = `América-MG`
                        break;
                    case 32:
                        textTime = `Joinville`
                        break;
                    case 33:
                        textTime = `Juventude`
                        break;
                    case 34:
                        textTime = `Ipatinga`
                        break;
                    case 35:
                        textTime = `América`
                        break;
                    case 36:
                        textTime = `River`
                        break;
                    case 37:
                        textTime = `Ituano`
                        break;
                    case 38:
                        textTime = `América-RN`
                        break;
                    case 39:
                        textTime = `Botafogo-PB`
                        break;
                    case 40:
                        textTime = `Bangu`
                        break;
                    case 41:
                        textTime = `Portuguesa`
                        break;
                    case 42:
                        textTime = `Moto Clube`
                        break;
                    case 43:
                        textTime = `Vila Nova`
                        break;
                    case 44:
                        textTime = `Mixto`
                        break;
                    case 45:
                        textTime = `Ji-Paraná`
                        break;
                    case 46:
                        textTime = `Marília`
                        break;
                    case 47:
                        textTime = `Inter de Limeira`
                        break;
                    case 48:
                        textTime = `Juventus`
                        break;
                    case 49:
                        textTime = `Ponte Preta`
                        break;
                    case 50:
                        textTime = `Paysandu`
                        break;
                    case 51:
                        textTime = `Palmas`
                        break;
                    case 52:
                        textTime = `Criciúma`
                        break;
                    case 53:
                        textTime = `Sampaio Corrêa`
                        break;
                    case 54:
                        textTime = `Paraná`
                        break;
                    case 55:
                        textTime = `São Caetano`
                        break;
                    case 56:
                        textTime = `Santo André`
                        break;
                    case 57:
                        textTime = `Americano`
                        break;
                    case 58:
                        textTime = `CRB`
                        break;
                    case 59:
                        textTime = `Bragantino`
                        break;
                    case 60:
                        textTime = `Sergipe`
                        break;
                    case 61:
                        textTime = `Barueri`
                        break;
                    case 62:
                        textTime = `Figueirense`
                        break;
                    case 63:
                        textTime = `Brasiliense`
                        break;
                    case 64:
                        textTime = `Rio Branco-ES`
                        break;
                    case 65:
                        textTime = `CSA`
                        break;
                    case 66:
                        textTime = `Rio Branco-AC`
                        break;
                    case 67:
                        textTime = `Tuna Luso`
                        break;
                    case 68:
                        textTime = `Olaria`
                        break;
                    case 69:
                        textTime = `Ypiranga`
                        break;
                    case 70:
                        textTime = `Uberlândia`
                        break;
                    case 71:
                        textTime = `São Raimundo`
                        break;
                    case 72:
                        textTime = `Nacional`
                        break;
                    case 73:
                        textTime = `Operário`
                        break;
                    case 74:
                        textTime = `Roraima`
                        break;
                    case 75:
                        textTime = `União São João`
                        break;
                    case 76:
                        textTime = `XV de Piracicaba`
                        break;
                    case 77:
                        textTime = `Desportiva`
                        break;
                    case 78:
                        textTime = `Paulista`
                        break;
                    case 79:
                        textTime = `Villa Nova`
                        break;
                    case 80:
                        textTime = `União Barbarense`
                        break;

                    default:
                        textTime = `Time não encontrado`
                        break;


                }
                res.innerHTML = `Seus números são: ${numeros.join(" - ")}.<br> Seu time é: ${textTime}`
            }
        } else {
            alert(`Só são permitidas 10 dezenas nesse jogo!`)
        }
    }
}