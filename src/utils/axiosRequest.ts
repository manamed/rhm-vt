import axios from 'axios';

type AxiosMethod =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | undefined;

const axiosRequest = async (method: AxiosMethod, url: string, data: any) => {
  console.log(data);
  try {
    const result = await axios({
      method,
      url,
      data
    });

    return {
      error: null,
      data: result.data
    };
  } catch (e) {
    let message;

    if (e.response) {
      console.log(e.response);
      message = 'Your request was invalid.';
    } else if (e.request) {
      console.log(e.request);
      message =
        'Our server is experiencing technical issues. Please call us or email us at support@manamed.com';
    } else {
      console.log('Error:', e.message);
      message = 'We could not submit your request';
    }

    return {
      error: message,
      data: null
    };
  }
};

export default axiosRequest;
