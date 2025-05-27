import axios from '@/utils/axiosConfig';
import use from './use';

export async function fetcher(url,options={}){
  let locale = options.hasOwnProperty('locale') ? options.locale : 'en';
      
  url = (url.toString().includes('?')) ? url+'&locale='+locale : url+'?locale='+locale;

  const apiendpoint = `${process.env.PUBLIC_BACKEND_URL}/api/${url}`;

  try {
      const response = await axios.get(apiendpoint,options.params);
      const extractData = use.extractData(response.data);
      return extractData;
    }catch(e){
      return e;
    }
}