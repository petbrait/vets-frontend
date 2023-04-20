export const useFinder = (value: string | null, data: Array<object>) => {
  const filteredData =
    value != null && value.length > 0
      ? data.filter((item) => {
          // @ts-ignore
          return item.name
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase());
        })
      : data;

  return filteredData;
};
