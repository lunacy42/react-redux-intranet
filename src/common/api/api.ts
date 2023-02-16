import { Announcement, User } from '../types';

export const loginUser = async (email: string, password: string) => {
  let responseJsonData;
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
    responseJsonData = await response.json();
    return responseJsonData;
  } catch (e: any) {
    return Promise.reject(e.message ? e.message : responseJsonData);
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

export const mutateUser = async (user: User) => {
  let responseJsonData;
  console.log('userapi', JSON.stringify(user));
  try {
    const response = await fetch('api/update-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
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

export const getAnnouncements = async () => {
  let responseJsonData;
  try {
    const response = await fetch('api/announcements', {
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

export const getEvents = async () => {
  let responseJsonData;
  try {
    const response = await fetch('api/events', {
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

export const mutateAnnouncements = async (announcement: Announcement) => {
  let responseJsonData;
  try {
    const response = await fetch('api/update-announcement', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(announcement)
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

export const mutateEvents = async (event: Event) => {
  let responseJsonData;
  try {
    const response = await fetch('api/update-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
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
