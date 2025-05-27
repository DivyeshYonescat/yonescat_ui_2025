import sanitize from 'sanitize-html';
import CryptoJS from 'crypto-js';

const defaultKey = 'gWclRUkd0zKBR82D8Yw8eABPRVoDAW6XzKpW+yCJn2Y';

function encodeXOR(data, key=defaultKey) {
const str = JSON.stringify(data);
let result = '';

for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) ^ key.charCodeAt(i % key.length);
    result += String.fromCharCode(charCode);
}

return encodeURIComponent(btoa(result)); // safe for URL
}

function decodeXOR(encoded, key=defaultKey) {
    const decoded = atob(decodeURIComponent(encoded));
    let result = '';
   
    for (let i = 0; i < decoded.length; i++) {
      const charCode = decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      result += String.fromCharCode(charCode);
    }
   
    return JSON.parse(result);
  }



function objectToQueryString(obj, prefix = '') {
  const params = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const paramKey = prefix ? `${prefix}[${key}]` : key;

      if (typeof value === 'object') {
        params.push(objectToQueryString(value, paramKey));
      } else {
        params.push(`${paramKey}=${encodeURIComponent(value)}`);
      }
    }
  }
  return params.join('&');
}

const extractData = (props) => {

  if (props?.data) {
    if (Array.isArray(props?.data)) {
      return props?.data;
    }
    return {
      id: props.id || '',
      ...props.data.attributes
    };
  }
  else if (props?.attributes) {
    return {
      id: props.id || '',
      ...props.attributes
    }
  }
  else {
    return props;
  }
}

const normalize = (data) => {
  const isObject = (data) =>
    Object.prototype.toString.call(data) === '[object Object]'
  const isArray = (data) =>
    Object.prototype.toString.call(data) === '[object Array]'

  const flatten = (data) => {
    if (!data.attributes) return data

    return {
      id: data.id,
      ...data.attributes
    }
  }

  if (isArray(data)) {
    return data.map((item) => normalize(item))
  }

  if (isObject(data)) {
    if (isArray(data.data)) {
      data = [...data.data]
    } else if (isObject(data.data)) {
      data = flatten({ ...data.data })
    } else if (data.data === null) {
      data = null
    } else {
      data = flatten(data)
    }

    for (const key in data) {
      data[key] = normalize(data[key])
    }

    return data
  }

  return data
}

const getImagePath = (image, type = 'url') => {
  if (typeof image != 'object') { return '' };
  let path = (type != 'url') ? ((image?.formats && image?.formats[type]?.url) ? image?.formats[type]?.url : image?.url) : image?.url;
  const url = (path) ? `${process.env.PUBLIC_BACKEND_URL}${path}` : '';
  return url;
}

const sanitizeHTML = (html, options) => {
  const sanitizedHTML = sanitize(html, options)
  return { __html: sanitizedHTML };
}

const getApiUrl = (API_NAME = '', PARAMS = {}) => {
  let queryParams = '';
  if (Object.keys(PARAMS).length > 0) {
    queryParams = `?${objectToQueryString(PARAMS)}&timestamp=${new Date().getTime()}`;
  }
  return `${process.env.PUBLIC_BACKEND_URL}/api/${API_NAME}${queryParams}`;
};

const replaceImagePath = (content) => {
  return content?.replace(
    /<img src="\/uploads\/([^"]+)"([^>]+)>/g,
    `<img src="${process.env.PUBLIC_BACKEND_URL}/uploads/$1"$2>`
  )
}

const prepareUrl = (category, slide) => {
  let url = (category && (category.has_series === "true")) ? `/${category?.id}/${slide?.id}/` : `/${(slide?.type?.id || category?.id)}/${slide.id}/watch`;
  return url;
}

// Encrypt Data
const encryptData = (data, secretKey) => {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  return ciphertext;
};

// Decrypt Data
const decryptData = (ciphertext, secretKey) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};

// String to Date convat
function setDateFormet(date) {
  const timestamp = date;
  const stringTodate = new Date(timestamp);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${monthNames[stringTodate.getMonth()]} ${stringTodate.getDate()}, ${stringTodate.getFullYear()}`;
}

function getPaymentIds(payment) {
  var paymentIDGroup = payment.split('00ccid00');
  console.log(paymentIDGroup, 'paymentIDGroup');
  

  if (Array.isArray(paymentIDGroup) && paymentIDGroup.length > 1) {
    try {
      const group = decodeXOR(paymentIDGroup[1]);
      console.log(group);
      
      if (Object.keys(group).length > 0) {
        return {
          sessionID: paymentIDGroup[0],
          invoiceID: group.invoiceid,
          id: group.id,
        }
      }

    } catch (error) {
      return null;
    }
  }
  return null;
}

const use = { extractData, normalize, getImagePath, sanitizeHTML, getApiUrl, replaceImagePath, prepareUrl, encryptData, decryptData, setDateFormet, getPaymentIds , encodeXOR, decodeXOR}

export default use;