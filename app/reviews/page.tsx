import { deleteReviewAction, fetchProductReviewsByUser } from "@/utils/action";
import ReviewCard from "@/components/reviews/ReviewCard";
import SectionTitle from "@/components/global/SectionTitle";
import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Button";
import { Icon } from "lucide-react";

const ReviewsPage = async () => {
  const reviews = await fetchProductReviewsByUser();

  if (reviews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <SectionTitle text="You have no reviews yet" />
      </div>
    );
  }

  return (
    <>
      <SectionTitle text="Your Reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4">
        {reviews.map((review) => {
          const { comment, rating, product } = review;
          const { name, image } = product;
          const reviewInfo = { comment, rating, name, image };
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReviewButton reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
};

const DeleteReviewButton = async ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

export default ReviewsPage;
