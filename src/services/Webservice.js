import API from './Api'

export const smsDetail = async (json) => {
    return fetch(API.BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic YWRtaW46QXBwbGVAMTIz',
      },
      body: JSON.stringify(json),
    });
  };