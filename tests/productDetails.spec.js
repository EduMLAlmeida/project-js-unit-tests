const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se productDetails é uma função.', () => {
    expect(typeof (productDetails)).toBe('function');
    // Teste se productDetails é uma função.
  });
  it('Verifica se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails('teste', 'teste'))).toBe(true);
    // Teste se o retorno da função é um array.
  });
  it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails('teste', 'teste').length).toBe(2);
    // Teste se o array retornado pela função contém dois itens dentro.
  });
  it('Verifica se a os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(typeof (productDetails('teste', 'teste')[0])).toBe('object');
    expect(typeof (productDetails('teste', 'teste')[1])).toBe('object');
    // Teste se os dois itens dentro do array retornado pela função são objetos.
  });
  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(productDetails('teste', 'teste2')[0] === productDetails('teste', 'teste2')[1]).toBe(false);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  });
  it('Verifica se os dois productIds terminam com 123.', () => {
    expect(productDetails('teste', 'teste')[0].details.productId).toBe('teste123');
    expect(productDetails('teste', 'teste')[1].details.productId).toBe('teste123');
    // Teste se os dois productIds terminam com 123.
  });
});
