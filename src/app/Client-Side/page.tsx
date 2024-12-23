"use client";
import React , {useEffect, useState} from 'react';
import Image from 'next/image';

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

const Page = () => {
    const [loading, setLoading] = useState(true);
    const[todos, setTodos] = useState<Product[]>([]);

    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setTodos(data);
        setLoading(true);
        setTimeout(() => {
          console.log("This is running before component load");
          setLoading(false);
        }, 5000);
        
      }
      fetchData();
    }, []);

    if(loading){
        return (
        <div>
        <div>
        <h1 className='font-bold'>Loading...</h1>
        </div>
        <div className='h-screen justify-center items-center mt-6 pl-8 md:pl-36 lg:pl-60'>
        <Image src="/Image/loading.gif" alt="Loading" width={700} height={700}/>
        </div>
        </div>
        )
    }

    return (
        <div>
          
        <h1 className='text-center text-3xl font-bold mb-8 mt-8'>Client Side Data Fetching</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6 mx-6'>
          {todos.map((todo, index) => (
            <div key={index} className='border-slate-600 border rounded-md  bg-slate-200 hover:bg-purple-300 p-4 text-center'>
              <Image src={todo.image} alt={todo.title} width={100} height={100} className='mb-4 ml-20 sm:ml-20 md:ml-16 lg:ml-20'/>
              <h2 className='font-bold text-[16px] hover:text-blue-600'>{todo.title}</h2>
              <p className='font-normal font-serif text-sm hover:text-orange-700'>{todo.description}</p>
              <p className='font-semibold'>${todo.price}</p>
              <button className='bg-black hover:bg-white text-white hover:text-black hover:font-bold p-2 rounded-md mt-3'>Add To Cart</button>
              </div>
          ))}
        </div>
        </div>
        
    );
}

const ClientSidePage = () => {
  return (
    <div>
      <Page />
    </div>
  )
}

export default ClientSidePage;
