import use from "@/lib/use";
import axiosInstance from "@/lib/axiosInstance";

async function getBlogsList(_options) {
  const options = Object.assign({page:1,pageSize:10},_options);
  const url = use.getApiUrl("blogs", {
    populate: "*",
    pagination:{
        page:options.page,
        pageSize:options.pageSize
    }
  });

  try {
    const response = await axiosInstance.get(url);
    return { success: true, data: response };
  } catch (error) {
    return { success: false, errors: error };
  }
}

// 
async function getBlogById(projectId){
    const url = use.getApiUrl("blogs/"+projectId,{
        populate: "*"
    });
    
    try {
      const response = await axiosInstance.get(url);
      return { success: true, data: response };
    } catch (error) {
      return { success: false, errors: error };
    }
}
export { getBlogsList, getBlogById };
