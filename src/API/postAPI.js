const postAPI = async (url, onSuccess, onError) => {
  await fetch(`${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Server response not ok");
      }
      return response.json();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      onError(error);
    });
};

export default postAPI;
