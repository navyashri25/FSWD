import { useState } from "react";
export default function StateExample()
{
    const[count,setcount]=useState(0);
    function buttonclick()
    {
        setcount(count+1); 
    }
    return<>
        <h1>State Example</h1>
        <button onClick={buttonclick} style={{backgroundColor:"#A039E5", color:"rgba(242, 244, 238, 1)"}}>
            Visitor Count = {count}
            </button>
    </>
}
