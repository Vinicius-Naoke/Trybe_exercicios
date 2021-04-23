    function calcImposto(precoCompra) {
        return ((precoCompra * 0.2) + precoCompra);
    }

    function calcVenda(valorImposto) {
        return ((valorImposto * 0.4) + valorImposto);
    }
    let valorCompra = calcImposto(10);
    let precoVenda = calcVenda(valorCompra);

    if (precoVenda <= 0) {
        console.log('Valor Invalido');
    } else {
        let lucro = parseInt((precoVenda - valorImposto) * 1000);
        console.log('seu lucro é de R$ ' + lucro);
    }