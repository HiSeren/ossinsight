import {categoryAxis, heatmap, itemTooltip, legend, originalDataset, title, visualMap} from '../options';
import {withChart} from '../chart';

// lines of code
export type TimeHeatData = {
  dayofweek: number
  hour: number
  pushes: number
}

const hours = [
  '0h', '1h', '2h', '3h', '4h', '5h', '6h',
  '7h', '8h', '9h', '10h', '11h',
  '12h', '13h', '14h', '15h', '16h', '17h',
  '18h', '19h', '20h', '21h', '22h', '23h',
];

const days = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat',
];

function prepareData(data: TimeHeatData[]): TimeHeatData[] {
  if (data.length === 0) {
    return [];
  }
  const newData = [...data];
  const boolMap = Array(24 * 7).fill(false, 0, 24 * 7);
  for (const item of data) {
    boolMap[item.dayofweek + item.hour * 7] = true;
  }
  for (const hour in hours) {
    for (const day in days) {
      if (!boolMap[parseInt(day) + parseInt(hour) * 7]) {
        newData.push({
          dayofweek: parseInt(day),
          hour: parseInt(hour),
          pushes: 0,
        });
      }
    }
  }
  return newData;
}

export const TimeHeatChart = withChart<TimeHeatData>(({title: propsTitle, data}) => ({
  dataset: originalDataset(data, prepareData),
  title: title(propsTitle),
  legend: legend(),
  xAxis: categoryAxis<'x'>(undefined, {data: hours, position: 'top'}),
  yAxis: categoryAxis<'y'>(undefined, {data: days, inverse: true}),
  visualMap: visualMap(0, data.data?.data.reduce((prev, current) => Math.max(prev, current.pushes), 0) ?? 1),
  series: [
    heatmap('hour', 'dayofweek', 'pushes'),
  ],
  tooltip: itemTooltip({
    renderMode: 'html',
    formatter: (params) => {
      const value = params.value as TimeHeatData;
      return `<b>${days[value.dayofweek]}</b> <b>${hours[value.hour]}</b>: ${value.pushes} pushes`;
    },
  }),
}), {
  aspectRatio: 24 / 10,
});

