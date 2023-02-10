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

export const getUser = async () => {
  try {
    const response = await fetch('api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseJsonData = await response.json();
    return responseJsonData;
  } catch (e) {
    return { apiError: e };
  }
};
