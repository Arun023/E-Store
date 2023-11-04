import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementAsync, selectCount } from "./productListSlice";
const ProductList = () => {
  const count = useSelector(selectCount);
  console.log(count);
  const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
      id: "2",
      name: "Jeans",
      href: "https://example.com/jeans",
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      imageAlt: "Jeans",
      price: "$39.99",
      color: "Blue"
    },
    {
      id: "3",
      name: "Dress",
      href: "https://example.com/dress",
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      imageAlt: "Dress",
      price: "$49.99",
      color: "Black"
    },
    {
      id: "4",
      name: "Sweater",
      href: "https://example.com/sweater",
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Sweater",
      price: "$29.99",
      color: "Gray"
    },
    {
      id: "5",
      name: "Skirt",
      href: "https://example.com/skirt",
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      imageAlt: "Skirt",
      price: "$24.99",
      color: "Green"
    },
    {
      id: "6",
      name: "Shirt",
      href: "https://example.com/shirt",
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      imageAlt: "Shirt",
      price: "$19.99",
      color: "White"
    },
    {
      id: "7",
      name: "Jacket",
      href: "https://example.com/jacket",
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Jacket",
      price: "$59.99",
      color: "Brown"
    },
    {
      id: "8",
      name: "Socks",
      href: "https://example.com/socks",
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      imageAlt: "Socks",
      price: "$9.99",
      color: "Yellow"
    },
    {
      id: "9",
      name: "Hat",
      href: "https://example.com/hat",
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
      imageAlt: "Hat",
      price: "$14.99",
      color: "Purple"
    },
    {
      id: "10",
      name: "Shoes",
      href: "https://example.com/shoes",
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Shoes",
      price: "$69.99",
      color: "Black"
    },
    {
      id: "11",
      name: "T-Shirt",
      href: "https://example.com/t-shirt",
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
      imageAlt: "T-Shirt",
      price: "$19.99",
      color: "Red"
    },
  ]
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
