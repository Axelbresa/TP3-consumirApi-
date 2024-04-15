export async function fetchAllDogImages(setImageUrls) {
    try {
      const response = await fetch("https://dog.ceo/api/breed/pug/images");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setImageUrls(data.message);
    } catch (error) {
      console.error("Error fetching all dog images:", error);
    }
  }
  