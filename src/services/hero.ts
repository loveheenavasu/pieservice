import AXIOS from "@/axios";

export enum RESPONSE_STATUS {
  SUCCESS = "success",
  FAILED = "failed",
}
export interface ImageStructure {
  // _id?: string;
  imageUrl?: string;
  base64?: string;
  extension?: string;
}

export interface AddHeroProps {
  heroSection: ImageStructure;
  data: ImageStructure[];
}

// TODO: add types
export async function addHero({ heroSection, data }: AddHeroProps) {
  try {
    await AXIOS.post("/heroSection", {
      data,
      heroSection,
    });
    return RESPONSE_STATUS.SUCCESS;
  } catch (error) {
    console.error(
      error,
      "Hero section image upload failed--- please check hero.ts"
    );
    return RESPONSE_STATUS.FAILED;
  }
}

export async function getHero() {
  try {
    const response = await AXIOS.get("/heroSection");

    console.log(response.data, "herooo-----reponsee");
    return response; // Access the response data
    // You can perform additional actions with the response data here
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error or do nothing if you want to suppress it
  }
}

export async function updateHero(heroData: {
  data: { imageUrl: string; extension: string }[]; // Assuming this is an array
  heroSection: { imageUrl: string; extension: string };
}) {
  try {
    const response = await AXIOS.put("/heroSection", heroData);
    console.log(response.data, "hero update response");
    return response; // Access the response data
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
