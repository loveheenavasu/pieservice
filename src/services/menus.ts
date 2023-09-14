import AXIOS from "@/axios";

// TODO: handle types 
export async function addMenus(menus: any) {
    try {
        const resposne = await AXIOS.post('/menus', {
            menus
        })
    }catch (error) {
        // do nothing
    }
}