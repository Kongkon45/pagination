"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchUser = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                setData(res.data)
            } catch (error) {
                setError(error.message)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchData();
    },[])
    if(isLoading) return <p>Loading ...</p>
    if(error) return <p>Error : {error}</p>
    // console.log({data})
    // console.log(search)
    return (
        <div className='pb-10'>
            <h3 className='text-xl font-bold text-black text-center py-4'>Search Filter in Table data</h3>
            <div className='w-1/2 mx-auto pb-4'>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" className='py-2 px-4 border border-black rounded-lg w-full' placeholder='Search User ....' />
            </div>
            
            <table className='w-2/3 mx-auto'>
                <thead>
                    <tr className='border-2 border-black text-center'>
                    <th className='border-2 border-black text-center'>Id</th>
                    <th className='border-2 border-black text-center'>Name</th>
                    <th className='border-2 border-black text-center'>username</th>
                    <th className='border-2 border-black text-center'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.filter((item)=> {
                            return search.toLowerCase() === "" ? item : item?.name?.toLowerCase()?.includes(search);
                        })?.map((user)=>{
                            return <tr className='border-2 border-black text-center' key={user.id}>
                                <td className='border-2 border-black text-center'>{user.id}</td>
                                <td className='border-2 border-black text-center'>{user.name}</td>
                                <td className='border-2 border-black text-center'>{user.username}</td>
                                <td className='border-2 border-black text-center'>{user.email}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SearchUser;