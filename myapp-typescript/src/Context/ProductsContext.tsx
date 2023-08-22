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
  loading:boolean;
  setLoading: React.Dispatch<boolean>
};


export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  setProducts: (data: Product[]) => void {},
  loading:false,
  setLoading : ()=>{},
});

const Productsprovider = ({ children }: any) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const getProducts= async() => {
      setLoading(true);
      const apiUrl = 'https://fakestoreapi.com/products';
      const response = await axios.get(apiUrl)
      if (response.status==200){
        setProducts(response.data)
        setLoading(false);
      }
    }
    useEffect(() => {
      getProducts();
    }, [])
    
  const productsdata = { products, setProducts, loading, setLoading};
  return (
    <ProductsContext.Provider value={productsdata}>
      {children}
    </ProductsContext.Provider>
  );
};

export default Productsprovider;

