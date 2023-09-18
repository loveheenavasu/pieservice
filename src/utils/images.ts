/**
 * @description this method check if the url is base64 or not and return's the correct url
 * - `base64` then `base64` url
 * - `link` then backend `link`
 * @param currentURL url string
 * @returns
 */
export function getImageURL(currentURL: string) {
  const isBase64 =
    /^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/g.test(
      currentURL
    );
  if (isBase64) {
    return currentURL;
  }
  return `https://piemultilingualbackend.onrender.com/${currentURL}`;
  // return `http://localhost:8000/${currentURL}`;
}

/**
 * @description this method converts file to base64 encoded string
 * @param file
 * @returns resolve with base64 encoded string or reject with error
 */
export function fileToBase64URL(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64URL = e?.target?.result as string;

      resolve(base64URL);
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}

export function getFileExtension(file: File) {
  const filename = file.name;
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex === -1) {
    return ""; // No extension found
  }
  return filename.slice(lastDotIndex + 1);
}
