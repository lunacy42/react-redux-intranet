export const login = async () => {
  try {
    const response = await fetch('api/login', {
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
