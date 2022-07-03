export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

// <strong>
// {new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL'
// }).format(4500)}
// </strong>
