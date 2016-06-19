import React, { Component, PropTypes } from 'react';
import { 
  VictoryGroup, 
  VictoryAnimation, 
  VictoryChart, 
  VictoryLine, 
  VictoryStack, 
  VictoryArea, 
  VictoryBar, 
  VictoryPie, 
} from "victory";


class Charts extends Component {

  render() {
    const data = [
      {x: 1, y: 1},
      {x: 2, y: 10},
      {x: 3, y: 2},
      {x: 4, y: 3},
      {x: 5, y: 5}
    ];
    
    const style = {
      width:"95%",
    }
    
    return (
      <div>
        <h2>Bar chart</h2>
        <VictoryChart domainPadding={{x: 100}} style={style} height={200}>
          <VictoryBar data={data} colorScale={"qualitative"}/>
        </VictoryChart>

        <h2>Grouped bar chart</h2>
        <VictoryGroup
          height={200}
          offset={10}
          colorScale={"qualitative"}
        >
            <VictoryBar data={data}/>
            <VictoryBar data={data}/>
            <VictoryBar data={data}/>
        </VictoryGroup>

        <h2>Line chart</h2>
        <VictoryChart style={style} height={200}>
          <VictoryLine data={data} colorScale={"qualitative"}/>
        </VictoryChart>
      </div>
    );
  }
}

export default Charts;
