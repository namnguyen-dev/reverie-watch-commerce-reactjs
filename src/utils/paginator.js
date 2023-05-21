const paginator = products => {
  const itemsPerPage = 10;
  const newProducts = new Array(Math.ceil(products.length / itemsPerPage))
    .fill()
    .map(_ => products.splice(0, itemsPerPage));

  return newProducts;
};

export default paginator;
