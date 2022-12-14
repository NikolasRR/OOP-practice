import TaxItem from "./../src/Item";
import Order from "./../src/Order";

test("Deve criar um pedido e calcular o total", () => {
  const order = new Order();
  order.addItem(new TaxItem("Beer", "Brahma", 6));
  order.addItem(new TaxItem("Cigar", "Malboro", 10));
  order.addItem(new TaxItem("Eletronics", "IPhone 13", 13000));
  order.addItem(new TaxItem("Water", "Crystal", 1));
  const total = order.getTotal();
  expect(total).toBe(13017);
});

test("Deve criar um pedido e calcular os impostos", () => {
  const order = new Order();
  order.addItem(new TaxItem("Beer", "Brahma", 6));
  order.addItem(new TaxItem("Cigar", "Malboro", 10));
  order.addItem(new TaxItem("Eletronics", "IPhone 13", 13000));
  order.addItem(new TaxItem("Water", "Crystal", 1));
  const taxes = order.getTaxes();
  expect(taxes).toBe(3903.7);
});
