import React, {useMemo} from "react";
import {EChartsOption} from "echarts";
import * as echarts from "echarts/core";
import {GridComponent, TitleComponent, TooltipComponent} from "echarts/components";
import {BarChart as EBarChart} from "echarts/charts";
import {CanvasRenderer} from "echarts/renderers";
import ECharts from "../ECharts";

// Register the required components
echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, EBarChart, CanvasRenderer]
);

interface YoyChartProps {
  data: {
    name: string
    stars2020: number
    stars2021: number
    yoy: number
  }[]
  aspectRatio?: number
  loading?: boolean
}

export default function YoyChart({data, aspectRatio = 6 / 5, loading}: YoyChartProps) {
  const option: EChartsOption = useMemo(() => {
    return {
      legend: {
        show: true
      },
      tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
          type: 'shadow'
        }
      },
      yAxis: {
        type: "category",
        data: data.map(data => data.name),
        inverse: true
      },
      xAxis: [{
        id: 0,
        name: 'stars',
        max: value => {
          const { max, min } = value;
          return Math.max(Math.abs(max), Math.abs(min)) * 1.2
        } ,
        min: value => {
          const { max, min } = value;
          return -Math.max(Math.abs(max), Math.abs(min)) * 1.2
        },
        axisLabel: {
          show: true
        }
      }, {
        id: 1,
        name: 'yoy',
        max: value => {
          const { max, min } = value;
          return Math.max(Math.abs(max), Math.abs(min)) * 1.2
        } ,
        min: value => {
          const { max, min } = value;
          return -Math.max(Math.abs(max), Math.abs(min)) * 1.2
        },
        axisLabel: {
          show: true
        }
      }],
      grid: {
        containLabel: true,
        left: 8
      },
      series: [
        {
          name: 'stars2020',
          type: 'bar',
          data: data.map(data => data.stars2020),
          xAxisId: "0",
          itemStyle: { opacity: 0.3 }
        },
        {
          name: 'stars2021',
          type: 'bar',
          data: data.map(data => data.stars2021),
          xAxisId: "0",
          itemStyle: { opacity: 0.3 }
        },
        {
          name: 'yoy',
          type: 'bar',
          data: data.map(data => data.yoy),
          xAxisId: "1",
        }
      ]
    }
  }, [data])

  return (
    <ECharts
      showLoading={loading}
      option={option}
      aspectRatio={aspectRatio}
      lazyUpdate
      notMerge={false}
    />
  )
}