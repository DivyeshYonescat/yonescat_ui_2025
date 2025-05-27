import use from "@/lib/use";
import axiosInstance from "@/lib/axiosInstance";

async function getTags() {
  const url = use.getApiUrl("tags", {
    populate: "*",
  });

  try {
    const response = await axiosInstance.get(url);
    return { success: true, data: response };
  } catch (error) {
    return { success: false, errors: error };
  }
}

async function getProjectList(_options) {
  const options = Object.assign({page:1,pageSize:10},_options);
  const url = use.getApiUrl("projects", {
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

async function getProjectListFilter(options={page:1,tag:"*",pageSize:10}) {
    const url = use.getApiUrl("projects", {
        pagination:{
            page:options.page,
            pageSize:10
        },
        filters:{
            tags:{
                Name:{
                    $eq:options.tag
                }
            }
        },
        populate: "*"
    });
    
    try {
        const response = await axiosInstance.get(url);
       
        
        return { success: true, data: response };
    } catch (error) {
        return { success: false, errors: error };
    }
}

// 
async function getProjectByid(projectId){
    const url = use.getApiUrl("projects/"+projectId,{
        populate: "*"
    });
    
    try {
        const response = await axiosInstance.get(url);
        return { success: true, data: response };
    } catch (error) {
        return { success: false, errors: error };
    }
}
export { getTags, getProjectList, getProjectListFilter, getProjectByid };
