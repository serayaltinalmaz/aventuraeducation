import axios from "axios";
import React, { useEffect } from "react";
import { useState, createContext } from "react";

export type Product = {
  fav: any;
  count: number;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
      rate: number;
      count: number;
  }
};

type ProductsContextType = {
  products: Product[];
  setProducts: (data: Product[]) => void;
};


export const ProductsContext = createContext<ProductsContextType>({products: [],
  setProducts: function (data: Product[]): void {
    throw new Error("Function not implemented.");
  },
});

const Productsprovider = ({ children }: any) => {
    const [products, setProducts] = useState<Product[]>([]);

    const getProducts= async() => {
      const apiUrl = 'https://fakestoreapi.com/products';
      const response = await axios.get(apiUrl)
      if (response.status==200){
        setProducts(response.data)
      }
    }
    useEffect(() => {
      getProducts();
    }, [])
    
  const productsdata = { products, setProducts };
  return (
    <ProductsContext.Provider value={productsdata}>
      {children}
    </ProductsContext.Provider>
  );
};

export default Productsprovider;

