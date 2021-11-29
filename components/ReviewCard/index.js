export default function ReviewCard(review) {
  return (
    <p>
      {review.review.review} - <strong>{review.review.grade}</strong> -{' '}
      {review.review.author}
    </p>
  );
}
