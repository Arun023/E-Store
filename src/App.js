import Counter from "./features/counter/Counter";
import ProductList from "./features/productList/ProductList";

export function App() {
  return (
    <h1 className="text-red-500 text-3xl">
      <div>Hello world!</div>
      {/* <Counter/> */}
      <ProductList />
    </h1>
  );
}
