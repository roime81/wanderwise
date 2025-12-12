import type { Review } from "@/lib/data";
import { ReviewCard } from "./ReviewCard";
import { Separator } from "@/components/ui/separator";

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return <p className="text-muted-foreground text-center py-8">No reviews yet. Be the first to leave one!</p>;
  }

  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <div key={review.id}>
          <ReviewCard review={review} />
          {index < reviews.length - 1 && <Separator className="mt-6" />}
        </div>
      ))}
    </div>
  );
}
