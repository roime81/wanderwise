'use client';

import { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a star rating before submitting.",
        variant: "destructive",
      });
      return;
    }
    if (comment.trim() === '') {
        toast({
          title: "Comment required",
          description: "Please write a comment before submitting.",
          variant: "destructive",
        });
        return;
      }
    // In a real app, you would submit this data to your backend
    console.log({ rating, comment });
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback.",
    });
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-secondary/50">
      <div>
        <label className="block text-sm font-medium mb-2">Your Rating</label>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                type="button"
                key={starValue}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHoverRating(starValue)}
                onMouseLeave={() => setHoverRating(0)}
                aria-label={`Rate ${starValue} star${starValue > 1 ? 's' : ''}`}
              >
                <Star
                  className={`h-6 w-6 cursor-pointer transition-colors ${
                    starValue <= (hoverRating || rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-muted-foreground/30'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <label htmlFor="comment" className="block text-sm font-medium mb-2">Your Review</label>
        <Textarea
          id="comment"
          placeholder="Share your experience..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
        />
      </div>
      <Button type="submit" className="w-full md:w-auto" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
        <Send className="mr-2 h-4 w-4" />
        Submit Review
      </Button>
    </form>
  );
}
