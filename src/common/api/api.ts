export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch('api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const responseJsonData = await response.json();
    return responseJsonData;
  } catch (e) {
    return { apiError: e };
  }
};

export const getUsers = async () => {
  let responseJsonData;
  try {
    const response = await fetch('api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    responseJsonData = await response.json();

    if (response.ok) {
      return responseJsonData;
    }
    throw new Error(response.statusText);
  } catch (e: any) {
    return Promise.reject(e.message ? e.message : responseJsonData);
  }
};
