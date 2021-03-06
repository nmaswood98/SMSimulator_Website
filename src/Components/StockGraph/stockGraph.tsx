
import React, { useState } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

import {
    RadioGroup,
    FormControlLabel,
    Radio,
    Grid,
    FormControl
  } from "@material-ui/core";


function StockGraph(props: any){

    const [data, setData] = useState(props.data);

    let clickedStock = () => {
        props.handleClick({name:props.name, domain: props.domain, data: props.data})
    };

   return  (
        <div style={{border: '0px solid black'}} onClick={clickedStock}>
            <ResponsiveContainer width={props.width} height={props.height}>
             <LineChart  data={data}>
                 <Tooltip />
                 <XAxis dataKey="dateTime" tick={false} stroke="#FFFFFF" hide={true}/>
                 <YAxis domain={props.domain} tick={false} stroke="#FFFFFF" hide={true}/>
                 <Line  dataKey="price" stroke="#008006" dot={false} />
             </LineChart>
             </ResponsiveContainer>
         </div>
     );
}

StockGraph.defaultProps = {
    width: 300,
    height: 150,
    name: "",
    domain: [890,920],
    handleClick: ()=>{},
    data: [{ name: "9:30 AM", price: 911.12 }, { name: "9:35 AM", price: 899.36 },
        { name: "9:40 AM", price: 902.45 }, { name: "9:45 AM", price: 909.07 },
        { name: "9:45 AM", price: 906.17 }, { name: "9:50 AM", price: 908.23 },
        { name: "9:55 AM", price: 903.42 }]
}


export default StockGraph;