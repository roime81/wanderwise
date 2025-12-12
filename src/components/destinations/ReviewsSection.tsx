import type { Review } from "@/lib/data";
import { ReviewList } from "./ReviewList";
import { ReviewForm } from "./ReviewForm";
import { Card, CardContent } from "@/components/ui/card";

interface ReviewsSectionProps {
  reviews: Review[];
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="font-headline text-2xl font-bold mb-6">Reviews & Ratings</h2>
        <div className="space-y-8">
          <ReviewForm />
          <ReviewList reviews={reviews} />
        </div>
      </CardContent>
    </Card>
  );
}
