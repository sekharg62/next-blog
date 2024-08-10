"use client";
import { Fascinate } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

const Dashboard = () => {
  /* const [data, setData] = useState(false)
  const [error, seterror] = useState(false)
  const [isLoasding,setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
     
        setIsLoading(true)
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          next: { revalidate: 10 },
        });
        if (!res.ok) {
          seterror(true)
        }
        const mydata = await res.json();
        //console.log(mydata)
        setData(mydata);
        setIsLoading(false);
      

    };
    getData()
  },[]) */

  const fetcher = (...args) => fetch(...args).then(res => res.json()) 
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  console.log(data)
  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard
