import moment from 'moment';

export function orderByMapper(data, index) {
  let newData = [
    {
      alias: data[index].alias,
      resolved: data[index].resolved,
    },
    ...data,
  ];
  let uniqueIds = [];
  let fixData = newData.filter(element => {
    const isDuplicate = uniqueIds.includes(element.alias);
    if (!isDuplicate) {
      uniqueIds.push(element.alias);
      return true;
    }
    return false;
  });

  return fixData;
}

export function mapDates(data) {
  var newData = [];

  const ids = data.map(o => moment(o.dt_txt).format('YYYYMMDD'));
  const filtered = data.filter(
    ({dt_txt}, index) =>
      !ids.includes(moment(dt_txt).format('YYYYMMDD'), index + 1),
  );

  filtered.map(item => {
    newData.push({
      dt: item.dt,
      dt_txt: item.dt_txt,
      temp_max: item.main.temp_max,
      temp_min: item.main.temp_min,
      description: item.weather[0]?.description ?? '',
      clouds: item.clouds.all,
      humidity: item.main.humidity,
      data: data.filter(
        itemData =>
          moment(itemData.dt_txt).format('YYYYMMDD') ===
          moment(item.dt_txt).format('YYYYMMDD'),
      ),
    });
  });

  return newData;
}

export function filterData(data, ctgId) {
  if (ctgId === '00') {
    return data;
  } else {
    var newData = [];
    newData = data.filter(item => item.couponCategoryId === ctgId);
    return newData;
  }
}
