import { storage } from "./config";

export const campaignImageUrl = async (campaignId: string) => {
  const CAMPAIGN_IMAGE_DIR =
    process.env.NEXT_PUBLIC_ENV === "production"
      ? "campaign_images"
      : "test/campaign_images";
  const CAMPAIGN_IMAGE_NAME = "campaign_img";
  const imgPath = `${CAMPAIGN_IMAGE_DIR}/${campaignId}/${CAMPAIGN_IMAGE_NAME}`;
  const storageRef = storage.ref(imgPath);
  return storageRef
    .getDownloadURL()
    .then((url) => {
      return { url: url, error: undefined };
    })
    .catch((error) => {
      return { url: undefined, error: error };
    });
};
