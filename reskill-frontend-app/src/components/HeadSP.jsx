// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react"
import axios from 'axios';
import { useParams } from "react-router-dom";

function HeadSP(){
    const {id}  = useParams();
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
    const bodyParts = combinedData.data[id-1].body.split('\n');
    
    return (
        <div>
            <main className="pt-[80px] w-[1440px] h-[940px] ">
                <div className="pt-[80px] flex pl-20 ">
                    <div className=" w-[624px] h-[521px] ">
                        
                        <h1 className="text-[64px] h-[77px] w-[624px] font-bold space-y-[80px]">{bodyParts[0]}</h1> <br/>
                        <h2 className="text-[24px] h-[36px] w-[624px] text-[#828282]">{bodyParts[1]}</h2><br/>
                        <p className="text-xl w-[624px] h[360px] leading-[30px] text-[#000000]">{bodyParts[2]}</p><br/>
                        <p className="text-xl w-[624px] h[360px] leading-[30px] text-[#000000]">{bodyParts[3]}</p><br/>
                    </div>
                    <div className="w-[508px] h-[657px] space-x-[772px]">
                        <img className=" top-[244px] space-x-[772px] ml-[148px] rounded-lg" src={combinedData.data[id-1].photos[0].url}></img>
                    </div>
                </div>
            </main>
        </div>
    )
  }
    
    

}
export default HeadSP