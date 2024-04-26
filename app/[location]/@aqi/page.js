import AQICOmponents from "@/components/AQICOmponents";

const AQIPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <AQICOmponents lat={latitude} lon={longitude} />;
};

export default AQIPage;
