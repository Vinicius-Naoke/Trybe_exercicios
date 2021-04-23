let peça = "torre"

let lower = peça.toLowerCase();

switch (lower) {
    case 'bispo':
        console.log('diagonal');
        break;


    case 'rei':
        console.log('todos os lados');
        break;

    case 'cavalo':
        console.log('2 horizontais 1 vertical');
        break;


    case 'peão':
        console.log('para frente');
        break;

    case 'rainha':
        console.log('todos os lados');
        break;

    case 'torre':
        console.log('frente');
        break;

    default:
        console.log('valor inválido');

}