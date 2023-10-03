export function total(vendas, juros) {
    let z = (vendas * juros) /100;
    let o = vendas + z;
    return o
}