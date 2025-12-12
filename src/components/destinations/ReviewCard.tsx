import type { Review } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const authorInitials = review.author
    .split(' ')
    .map(n => n[0])
    .join('');

  return (
    <div className="flex space-x-4">
      <Avatar>
        <AvatarImage src={review.avatar} alt={review.author} />
        <AvatarFallback>{authorInitials}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className="font-semibold">{review.author}</p>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{review.comment}</p>
        <p className="text-xs text-muted-foreground/80 pt-1">{review.date}</p>
      </div>
    </div>
  );
}
