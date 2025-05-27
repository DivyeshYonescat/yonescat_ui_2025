import use from "@/lib/use";
import axiosInstance from "@/lib/axiosInstance";
import { payload } from "./payload";

// File Upload 
const fileUploadToServer = async (files) => {
  var formData = new FormData();
  Array.from(files).forEach((file) => {
    formData.append('files', file, file.name );
  });

  try {
    const url = use.getApiUrl(`upload`);   
    const response = await axiosInstance.post(url,formData); 
    return response;
  } catch (error) {
  
    
    return null;
  }
};

const collectErrors = (errors)=>{
 
    if(Object(errors.details).length > 0 && errors.details.hasOwnProperty('errors'))
    {
      errors['errorCollaction'] = errors?.details?.errors.map(error=>{
        return {ref:error.path[0], message:error.message}
      });
    }
    return errors;
  
}



// Send Form data
async function SendFormData(_options,url){
  const pathUrl = use.getApiUrl(url);
  let otherdata = {"data": _options};
  try {
    const response = await axiosInstance.post(pathUrl,otherdata);
    
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}

// Fetch Data
async function FetchDataAll(url){
  const UrlData = use.getApiUrl(url);
  try {
    const response = await axiosInstance.get(UrlData);
    return { data: use.normalize(response.data), error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}

// Fetch Project list
async function FetchProjectList(url){
  const UrlData = use.getApiUrl(url);
  try {
    const response = await axiosInstance.get(UrlData);
    let data = response.data.data;
    let mete = response.data.meta;
    return { data: use.normalize(data), meta:mete, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}



async function getHeaderContent(_options = {}) {
  try {
    const url = use.getApiUrl(`navigation`, payload.navigation);
    const response = await axiosInstance.get(url);
    return use.normalize(response.data);
  } catch (error) {
    return null;
  }
}

async function getFooterContent(_options = {}) {
  try {
    const url = use.getApiUrl(`footer`, payload.footer);
    const response = await axiosInstance.get(url);
    return use.normalize(response.data);
  } catch (error) {
    return null;
  }
}

async function getCategories(_options = {}) {
  try {
    const url = use.getApiUrl(`types`, {
      locale: "ckb",
      sort: "order:asc",
      populate: {
        image: {
          fields: ["url"],
        },
      },
    });
    const response = await axiosInstance.get(url);

    return use.normalize(response.data);
  } catch (error) {
    return null;
  }
}

async function getCategoryMediaByType(_options = {}) {
  try {
    const query = {
      fields: ["title", "id", "order", "locale"],
      sort: "order:asc",
      populate: {},
      filters: {
        id: {
          $eq: _options.categoryId,
        },
      },
      locale: "ckb",
    };

    let videos = {
      fields: ["title", "date", "slug"],
      sort: "date:desc",
      populate: {
        thumbnail: {
          fields: ["url"],
        },
        type: {
          fields: ["id", "title"],
        },
      },
    };

    let seriesGroups = {
      fields: ["title", "slug"],
      populate: {
        videos: {
          fields: ["title", "date"],
          sort: "date:desc",
          populate: {
            type: {
              fields: ["id", "title"],
            },
          },
        },
        thumbnail: {
          fields: ["url"],
        },
      },
    };

    if (_options.hasOwnProperty("limit")) {
      seriesGroups = _options.limit?.seriesGroups
        ? { ...seriesGroups, ..._options.limit.seriesGroups }
        : seriesGroups;
      videos = _options.limit?.videos
        ? { ...videos, ..._options.limit.videos }
        : videos;
    }

    _options.has_series == "true"
      ? (query["populate"]["series_groups"] = seriesGroups)
      : (query["populate"]["videos"] = videos);

    const url = use.getApiUrl(`types`, query);
    const response = await axiosInstance.get(url);
    return use.normalize(response.data);
  } catch (error) {
    return null;
  }
}

async function getCategoryType(_options = {}) {
  try {
    const url = use.getApiUrl(`types`, {
      fields: ["title", "body", "has_series", "thumbnail_orientation", "id"],
      filters: {
        id: {
          $eq: _options.category,
        },
      },
      locale: "ckb",
    });

    const response = await axiosInstance.get(url);
    let data = use.normalize(response.data);
    if (data.length > 0) {
      data = data[0];
    }
    return data;
  } catch (error) {
    return null;
  }
}

async function getSearchIndex(_options = {}) {
  try {
    const response = await axiosInstance.get(
      `${process.env.SEARCH_URL}indexes`
    );
    let data = use.normalize(response.data);
    return data;
  } catch (error) {
    return [];
  }
}
async function getSearchResult(_options = {}) {
  try {
    const queries = [];

    if (_options?.searchIndexes && _options?.searchIndexes.length > 0) {
      _options?.searchIndexes.map((_index) => {
        queries.push({
          indexUid: _index.uid,
          q: _options.query,
          offset: 0,
          limit: 10,
          attributesToRetrieve: [
            "id",
            "title",
            "series_group.id",
            "thumbnail.url",
            "body",
            "type.has_series",
            "type.id",
            "types.id",
            "types.has_series",
          ],
        });
      });
    }

    const response = await axiosInstance.post(
      `${process.env.SEARCH_URL}multi-search`,
      { queries: queries }
    );
    let data = use.normalize(response.data);
    return data;
  } catch (error) {
    return [];
  }
}

export {
  // Send Formdata
  fileUploadToServer,
  collectErrors,
  SendFormData,
  FetchDataAll,
  FetchProjectList,

  getHeaderContent,
  getFooterContent,
  getCategories,
  getCategoryMediaByType,
  getCategoryType,
  getSearchIndex,
  getSearchResult,
};
