import AXIOS from "@/axios";

// TODO: handle types
export async function addMenus(menus: any, setLoading: any) {
  setLoading(true);
  try {
    const resposne = await AXIOS.post("/menus", {
      menus,
    });
    console.log(resposne, "alsfj");
  } catch (error) {
    // do nothing
    console.log(error, "axios error");
  } finally {
    setLoading(false);
  }
}

export async function getMenus() {
  try {
    const response = await AXIOS.get("/menus");

    console.log(response.data, "menussss-----reponsee");
    return response; // Access the response data
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error or do nothing if you want to suppress it
  }
}
