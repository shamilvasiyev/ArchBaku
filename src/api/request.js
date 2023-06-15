function parceData(data) {
  const formData = new FormData();
  const id = (Math.random() * Math.pow(10, 17)).toFixed();

  formData.append("id", id);

  for (let [key, values] of Object.entries(data)) {
    formData.append(key, values);
  }
  return formData;
}

const request = async (
  url,
  data = false,
  method = "GET",
  type = "FORM_DATA"
) => {
  try {
    const options = {
      method,
    };

    if (data && method === "POST") {
      options.headers = {
        "Content-type": "application/json; charset=UTF-8",
      };

      const id = (Math.random() * Math.pow(10, 17)).toFixed();
      data.id = id;

      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    return method === "POST"
      ? { message: "Təşəkkür edirik! Sorğunuz qəbul edildi." }
      : result;
  } catch (error) {
    return error;
  }
};

export const post = (url, data) => request(url, data, "POST");
export const get = (url) => request(url);
