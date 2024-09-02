// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function RelatedAP(){
    const [combinedData, setcombinedData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/'); 
        setcombinedData(response);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    fetchData();
  }, [combinedData]);

    if(combinedData.data != undefined){

    return (
            <main className="pt-[80px] h-auto mx-[80px] w-full max-w-[1276px] lg:h-[1814px] lg:pt-[80px]">
              <div>
                <h3 className="font-semibold text-[40px] w-[625px] h-[44px]">
                  Related articles or posts
                </h3>
                <div className="pt-[16px] lg:pl-[1px] lg:pt-[32px] grid  gap-[32px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                  {combinedData.data.slice(0, 9).map((combinedData, index) => (
                    <Link key={index} to={`/posts/${combinedData.id}`}>
                      <img
                        src={combinedData.photos[0].url}
                        alt={combinedData.photos[0].title}
                        className="w-[404px] h-[346px] card hover:shadow-lg rounded-lg"
                      />
                      <div className="pt-[24px] lg:pt-[24px]"/>
                        <p className="truncate whitespace-nowrap font-semibold ">{combinedData.photos[0].title}</p>
                        <p className="pt-[4px] block text-[#828282]">Author</p> 
                      <div className='pt-[80px] lg:pt-[80px]'/>
                    </Link>
                  ))}
                  
                </div>
              </div>
            </main>

    )}
}

export default RelatedAP;