import React from 'react'

interface Book {
    id: number;
    name: string;
    type: string;
}

    async function fetchBooks(): Promise<Book[]>{
    const res = await fetch("https://simple-books-api.glitch.me/books/");
    
    if(!res.ok){
        throw new Error("Failed to fetch books");
        }

        const data:Book[] = await res.json();
        return data;
    }

    const Page = async() => {
        try{
            const books = await fetchBooks();
    return (
    <div>
      <h1 className='text-center text-3xl font-bold mb-8 mt-8'>Server Side Data Fetching</h1>
      <div>
        {books.length === 0 ? (
            <p>Books Not Found.</p>
        ) : (
            books.map((book) => (
                
            <div key={book.id} className=' grid p-7 m-6 mx-12 sm:mx-12 md:mx-40 lg:mx-80 bg-slate-300 hover:bg-purple-300 border-violet-900 shadow-inner border rounded-lg '>
                <h1 className='text-[16px] text-center font-bold'>Id: {book.id}</h1>
                <h2 className='text-xl text-center text-blue-950 font-semibold'>Name: {book.name}</h2>
                <p className='text-center text-green-950 font-medium'>Type: {book.type}</p>
                <button className='bg-black hover:bg-white text-white hover:text-black hover:font-bold p-1 mx-28 sm:mx-28 md:mx-40 lg:mx-56 mt-3 rounded-md'>See More</button>
            </div>
            
            ))
        )}
      </div>
    </div>
  );
} catch (error) {
    return <div>Error Loading Books</div>;
  }
}


export default Page;
