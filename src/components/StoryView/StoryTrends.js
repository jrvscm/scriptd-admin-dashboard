import React from 'react';
import glamorous from 'glamorous';
import moment from 'moment';

import { brandBlue, beige } from '../../colors';
import { LineChart, Line, XAxis, YAxis, Legend, Tooltip} from 'recharts';

const graphData = [
  {name: 'Published', date:'May 23, 2018', daily: 0},
  {name: null, daily: 600 },
  {name: null, daily: 1200 },
  {name: null, daily: 1900 },
  {name: 'Today', date: `${moment().format('ll')}`, daily: 2000 },
];

const CustomizedDot = ({cx, cy, stroke, payload, value}) => (
  <svg x={cx - 7} y={cy - 7} width={14} height={14} fill={brandBlue} viewBox="0 0 1024 1024">
    <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z"/>
  </svg>
)///

const CustomizedTick = (props) => {
  const { index, data, x, y, height, width } = props;
  return(  
    <text y={y +10} width={width}>
      <Tspan x={x-20}>{data[index].name}</Tspan>
      <SubTspan x={x-20} dy={10}>{data[index].date}</SubTspan>
    </text>     
  )
}///

const StoryTrends = () => {
	return(
		<Container>
    	<LineChart 
    		width={600} 
    		height={300} 
    		data={graphData}
        margin={{
          top: 10, 
          right: 100, 
          left: 100, 
          bottom: 10
        }}
      > 
        <svg>
          <defs>
            <marker 
              id="arrow" 
              markerWidth="10" 
              markerHeight="10" 
              refX="0" 
              refY="3" 
              orient="auto" 
              markerUnits="strokeWidth" 
              viewBox="0 0 20 20"
            >
              <path 
                d="M0,0 L0,6 L9,3 z" 
                fill="#4a4a4a" 
              />
            </marker>
          </defs>
          <line 
            strokeWidth={2} 
            stroke={'#4a4a4a'} 
            width={600} 
            height={30} 
            x1={100} 
            x2={500} 
            y1={260} 
            y2={260} 
            marker-end="url(#arrow)"
          />
      	</svg>
        <XAxis 
          dataKey="name" 
          stroke="transparent" 
          tick={<CustomizedTick  data={graphData} />} 
        />
      	<YAxis hide />
      	<Tooltip />
      	<Line 
          type="monotone" 
          dataKey="daily" 
          stroke={beige} 
          dot={<CustomizedDot />}
        />
    	</LineChart>
		</Container>
	)
}

export default StoryTrends;

const Container = glamorous.div({
	width: `100%`,
  height: `100%`,
  '& .recharts-default-tooltip':{
    backgroundColor: `transparent !important`,
    fontFamily: `Stolzl-Reg !important`,
    fontSize: `14px !important`,
    fontWeight: `500 !important`,
    fontStyle: `normal !important`,
    fontStretch: `normal !important`,
    lineHeight: `1.29 !important`,
    letterSpacing: `normal !important`,
    border: `none !important`,
    color: `#979797 !important`,
  }
})

const Tspan = glamorous.tspan({
  fontFamily: `Stolzl-Reg`,
  fontSize: `10`,
  fontWeight: `normal`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: 1.4,
  letterSpacing: 0.2,
  color: `#000000`,
  textShadow: `0 0 0 rgba(0, 0, 0, 0.5)`
})

const SubTspan = glamorous.tspan({
  fontFamily: `Stolzl-Reg`,
  fontSize: `6`,
  fontWeight: `normal`,
  fontStyle: `normal`,
  fontStretch: `normal`,
  lineHeight: 2.33,
  letterSpacing: 0.1,
  fill: `#979797`,
  textShadow: `0 0 0 rgba(0, 0, 0, 0.5)`
})

const Text = glamorous.text({
	margin: 5,
	padding: 5
})

const GlamorousXAxis = glamorous(XAxis)({
  fill: `#4a4a4a`
})