"use client";
import { useState } from "react";
import { SubmitButton } from "@/components/form/Button";
import FormContainer from "@/components/form/FormContainer";
import { Card } from "@/components/ui/card";
import RatingInput from "@/components/reviews/RatingInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";
import { createReviewAction } from "@/utils/action";
import { useUser } from "@clerk/nextjs";

const SubmitReview = ({ productId }: { productId: string }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const { user } = useUser();
  return (
    <div>
      <Button
        variant="default"
        size="lg"
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
        className="capitalize"
      >
        leave a review
      </Button>
      {isReviewFormVisible && (
        <Card className="mt-4 p-4">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="productId" value={productId} />
            <input
              type="hidden"
              name="authorName"
              value={user?.firstName || "user"}
            />
            <input type="hidden" name="authorImageUrl" value={user?.imageUrl} />
            <RatingInput name="rating" labelText="Rating" />
            <TextAreaInput
              name="comment"
              labelText="Review"
              defaultValue="Outstanding product"
            />
            <SubmitButton className="mt-4" text="Submit" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
};

export default SubmitReview;
