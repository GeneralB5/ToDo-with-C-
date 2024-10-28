import React, { useEffect, useState } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLabel } from 'victory';
import {separarPorPrioridad} from '../../../../functions/arryFunc/arryPrioSta';

function MountainChart(List) {
  const [arrySettings, setArrySettings] = useState({arryNumbers:[],arryResult:[]})  
  useEffect(()=>{
    const { arryResult , arryNumbers } = separarPorPrioridad(List.List)
    setArrySettings({arryNumbers,arryResult})
  },[])
  
  if(arrySettings.arryNumbers.length == 0)return(
    <VictoryChart>
    <VictoryBar
      data={[
        { quarter: 1, earnings: 2, color: 'grey' },
        { quarter: 2, earnings: 5, color: 'black' },
        { quarter: 3, earnings: 3, color: 'white' }
      ]}
      x="quarter"
      y="earnings"
      style={{
        data:{
          fill:({ datum }) => datum.color === "grey" ? "grey" : datum.color === "black" ? "black":"lightgray"
        },
        labels:{fill:'black'}
      }}
    />
    <VictoryAxis 
    domain={{x:[0,4]}}
    tickValues={[1,2,3]} />
    <VictoryAxis dependentAxis />
    <VictoryLabel
        x={70} 
        y={150}
        inline                
        backgroundPadding={[{left:4,right:20}]}
        backgroundStyle={[{fill:'black',opacity:0.7}]}
        text="Nada por aqui..."
        style={[
          { fill:"lightgray",fontWeight:600,fontSize: 42 },
        ]}
      />
  </VictoryChart>
  
  )
  return (
    <VictoryChart>
      <VictoryBar
        data={arrySettings.arryResult}
        x="text"
        y="prio"
        style={{
          data:{
            fill:({ datum }) => datum.color === "red" ? "red" : datum.color === "yellow" ? "yellow":"green"
          }
        }}
        barWidth={30} 
      />
      <VictoryAxis 
        domain={{x: [0, arrySettings.arryResult.length +1],y:arrySettings.arryNumbers}}
        tickValues={[1, 2, 3]}
        padding={5}
        style={{
          axis: { stroke: 'white' },
          tickLabels:{
            text: { fill: 'white', fontSize: 22,color:"white" },
            fontSize:22,
            fill:'white'
          }
        }}
      />
      <VictoryAxis dependentAxis 
      tickValues={arrySettings.arryNumbers}
      style={{
        axis: { stroke: 'white' },
        tickLabels:{
          fontSize:22,
            fill:'white',
          text: { fill: 'white', fontSize: 12,color:"white" }
        },
        label: {
          color: 'blue',
          fontFamily: 'Arial', 
          fontWeight: 'bold'
        }
      }}
      />
    </VictoryChart>
  );
}
export default MountainChart