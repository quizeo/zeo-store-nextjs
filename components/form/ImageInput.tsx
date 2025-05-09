import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const ImageInput = () => {
  const name = "image";
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-1">
        Image
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        required
        accept="image/*"
      ></Input>
    </div>
  );
};

export default ImageInput;
