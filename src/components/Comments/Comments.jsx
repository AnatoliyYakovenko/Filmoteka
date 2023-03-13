import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'components/API/fetch';
import css from './Comments.module.css';

export default function Comments(){
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    getReviews(id).then(({ results }) => {
      setReviews(results);
    });
  }, [id]);
  if (!reviews) {
    return null;
  }
  const isReviews = !!reviews.length;
  return (
    <>
      <h3>Reviews</h3>
      {isReviews ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id} className={css.reviewContainer}>
                <p className={css.author}>
                  Author:
                  <span className={css.authorName}>{review.author}</span>
                </p>

                <div className={css.ContentContainer}>
                  <p className={css.ContentTitle}>Content:</p>
                  <span className={css.Content}>{review.content}</span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.noReview}>There are no reviews!</p>
      )}
    </>
  );
};
