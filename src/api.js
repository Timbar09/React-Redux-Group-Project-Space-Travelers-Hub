const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const processedData = data.map((item) => ({
      id: item.mission_id,
      name: item.mission_name,
      description: item.description,
      reserved: false,
    }));
    return processedData;
  } catch (error) {
    return error.message;
  }
};

export default getData;
