import WeatherComponent from "@/components/WeatherComponet";

const WeatherPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <WeatherComponent lat={latitude} lon={longitude} />;
};

export default WeatherPage;
