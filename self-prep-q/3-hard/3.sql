--LEFT JOIN, self-joins

-- select 10 movies without rating (left join) print out title and rating

SELECT title, ratings.rating FROM movies LEFT JOIN ratings ON movies.id = ratings.movie_id
WHERE rating IS NULL LIMIT 10;

-- SELECT movie that has same release year as another movie, print title and release year of for both movies// database too big load time too long

SELECT m1.title AS movie_1, m1.year, m2.title AS movie_2, m2.year
FROM movies AS m1
JOIN movies AS m2 ON m1.year = m2.year AND m1.id < m2.id
WHERE m1.year BETWEEN 2005 AND 2010 AND m2.year BETWEEN 2005 AND 2010
ORDER BY m1.year, m1.title LIMIT 2;