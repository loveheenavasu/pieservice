import AXIOS from "@/axios";

// TODO: add types
export async function addHero({heroSection, data}: any) {
    try {
        const response = await AXIOS.post('/heroSection', {
            data,
            heroSection
        })
    }catch (error) {
        // do Nothing
    }
}