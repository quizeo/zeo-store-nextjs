import { createClient } from "@supabase/supabase-js";

const bucket = "main-bucket";

export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now().toString();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });

  if (!data) throw new Error(`Image upload failed for ${image.name}`);

  return supabase.storage.from(bucket).getPublicUrl(data.path).data.publicUrl;
};
