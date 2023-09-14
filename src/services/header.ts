import AXIOS from "@/axios";

// TODO: add types
export function addHeader({headerIcon, extension, links }: any) {
    try {
        const response = AXIOS.post('/header', {
                headerIcon,
                extension,
                data: links
        })
        console.log(response, 'responseresponseresponseresponse');
    }catch(error) {
        // DO nothing
    }
}