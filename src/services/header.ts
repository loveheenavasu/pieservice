import AXIOS from "@/axios";

// TODO: add types
export function addHeader({
  headerIcon,
  extension,
  links,
  headerIconBase64,
}: any) {
  try {
    const response = AXIOS.post("/header", {
      headerIcon,
      extension,
      data: links,
      headerIconBase64,
    });
    console.log(response, "responseresponseresponseresponse");
  } catch (error) {
    // DO nothing
  }
}

export async function getHeader() {
  try {
    const response = await AXIOS.get("/header");

    console.log(response.data, "reponsee");
    return response; // Access the response data
    // You can perform additional actions with the response data here
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error or do nothing if you want to suppress it
  }
}
