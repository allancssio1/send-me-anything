import axios from "axios";

export const getAddress = async (code: string): Promise<any> => {
  const codeReplaced = code.replace(/\D/g, "");
  const params = {
    url: `https://viacep.com.br/ws/${codeReplaced}/json/`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };
  try {
    const { data } = await axios(params);
    return {
      street: data && data.logradouro ? data.logradouro : "",
      district: data && data.bairro ? data.bairro : "",
      city: data && data.localidade ? data.localidade : "",
    };
  } catch (error) {
    return { street: "", district: "", city: "" };
  }
};
