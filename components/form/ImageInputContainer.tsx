"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Button";
import { type actionFunction } from "@/utils/type";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

const ImageInputContainer = (props: ImageInputContainerProps) => {
  const { image, name, action, text, children } = props;
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  return (
    <>
      <div className="mb-8">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="rounded object-cover mb-4 w-[200px] h-[200px]"
          priority
        />
        <Button
          variant="outline"
          className="mb-4"
          onClick={() => setUpdateFormVisible((prev) => !prev)}
        >
          {text}
        </Button>
      </div>
      {isUpdateFormVisible && (
        <div className="max-w-md mt-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" text={text} className="mt-4" />
          </FormContainer>
        </div>
      )}
    </>
  );
};

export default ImageInputContainer;
