const URL =
  "https://633ee4220dbc3309f3c04d34.mockapi.io/client-information/client-information";
export const callApi = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const deleteUser = async (idUser) => {
  const credenciales = { id: idUser };
  const response = await fetch(`${URL}/${idUser}`, {
    method: "DELETE",
    body: JSON.stringify(credenciales),
  });
  const data = await response.json();
  return data;
};
