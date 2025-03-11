SELECT SUBSTR(movies.title, 1, 1) AS first_letter, AVG(ratings.rating) AS average_rating
FROM movies JOIN ratings ON movies.id = ratings.movie_id
WHERE title GLOB '[A-Z]*'
GROUP BY first_letter
ORDER BY average_rating DESC;