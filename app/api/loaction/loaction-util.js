import "server-only";

const locationsData = () =>
  import("../../../data/data.json").then((module) => module.default);

export const getAllLocation = async () => {
  const data = await locationsData();
  return data;
};

export const getLocationByName = async (location) => {
  const data = await locationsData();

  if (!data) {
    return null;
  }

  const found = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  return found || {};
};
