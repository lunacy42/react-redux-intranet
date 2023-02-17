import { Announcement, User, CompanyEvent } from '../types';

const basePath = 'http://localhost:3000';

export const loginUser = async (email: string, password: string) => {
  let responseJsonData;
  try {
    const response = await fetch(`${basePath}/api/login`, {
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
    const response = await fetch(`${basePath}/api/users`, {
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
    const response = await fetch(`${basePath}/api/update-user`, {
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

export const createNewUser = async (user: User) => {
  let responseJsonData;
  try {
    const response = await fetch(`${basePath}/api/create-user`, {
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

export const removeUser = async (userId: string) => {
  let responseJsonData;
  try {
    const response = await fetch(`${basePath}/api/delete-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userId)
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
    const response = await fetch(`${basePath}/api/announcements`, {
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

export const mutateAnnouncement = async (announcement: Announcement) => {
  let responseJsonData;
  try {
    const response = await fetch(`${basePath}/api/update-announcement`, {
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

export const createNewAnnouncement = async (announcement: Announcement) => {
  let responseJsonData;
  try {
    const response = await fetch(`${basePath}/api/create-announcement`, {
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

export const removeAnnouncement = async (announcementId: string) => {
  let responseJsonData;
  try {
    const response = await fetch(`${basePath}/api/delete-announcement`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(announcementId)
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
    const response = await fetch(`${basePath}/api/events`, {
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

export const mutateEvent = async (event: CompanyEvent) => {
  let responseJsonData;
  try {
    const response = await fetch(`${basePath}/api/update-event`, {
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

export const createNewEvent = async (event: CompanyEvent) => {
  let responseJsonData;
  try {
    const response = await fetch(`${basePath}/api/create-event`, {
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

export const removeEvent = async (eventId: string) => {
  let responseJsonData;
  try {
    const response = await fetch(`${basePath}/api/delete-event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(eventId)
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
