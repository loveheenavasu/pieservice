import AXIOS from "@/axios";

export function toggleSearch(value: boolean) {
    AXIOS.put('/setting', {
      searchBar: value  
    })
}