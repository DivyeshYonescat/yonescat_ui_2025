import use from "@/lib/use";
import axiosInstance from "@/lib/axiosInstance";

async function getFaqList(_options) {
  const options = Object.assign({page:1,pageSize:5},_options);
  const url = use.getApiUrl("faqs", {
    priority:"high",
    pagination:{
      page:options.page,
      pageSize:options.pageSize
    },
  });

  try {
    const response = await axiosInstance.get(url);
    return { success: true, data: response };
  } catch (error) {
    return { success: false, errors: error };
  }
}

export { getFaqList};
