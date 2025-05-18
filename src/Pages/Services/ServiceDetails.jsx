import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const [details, setDetails] = useState({});
  console.log(details);

  const { id } = useParams();
  const convertedId = parseInt(id);

  const serviceData = useLoaderData();

  useEffect(() => {
    const clicked = serviceData.find((service) => service.id === convertedId);
    setDetails(clicked);
  }, [serviceData, convertedId]);

  return (
    <div>
      <h1>Service Details</h1>
    </div>
  );
};

export default ServiceDetails;
