import WindComponent from "@/components/WindContent";

const WindPage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <WindComponent lat={latitude} lon={longitude} />;
};

export default WindPage;
