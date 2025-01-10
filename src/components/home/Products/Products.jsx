"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Pagination from "../pagination/pagination";

const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrectPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get("https://dummyjson.com/products")
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setData(res.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const lastPageIndex = currentPage * postPerPage;
  const firstPageIndex = lastPageIndex - postPerPage;
  const currentPosts = data?.slice(firstPageIndex, lastPageIndex);
  // console.log(currentPosts);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error : {error}</p>;
  // console.log(data);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {currentPosts?.map((data, index) => {
          return (
            <div
              key={index}
              className="border border-gray-950  rounded-lg shadow-lg"
            >
              <Image
                src={data?.flags?.png}
                alt="image"
                width={200}
                height={200}
                className="w-full h-[150px] mx-center rounded-t-lg"
              />
              <h3 className="mt-2 p-2 text-lg font-bold text-center text-black ">
                {data?.region}
              </h3>
            </div>
          );
        })}
      </div>
      <Pagination totalPost={data?.length} postPerPage={postPerPage} currentPage={currentPage} setCurrectPage={setCurrectPage}/>
    </>
  );
};

export default Products;
