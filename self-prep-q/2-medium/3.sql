--JOIN, GROUP BY, HAVING (Multi-Table Queries & Filtering Groups)
--JOIN, GROUP BY, HAVING

-- Select all movies 'Ewan McGregor' has acted in and order them by descending release year, limit the movies to 10
--   print out title and rating and year.

SELECT  movies.title, movies.year, ratings.rating FROM movies JOIN stars ON movies.id = stars.movie_id
JOIN ratings ON movies.id = ratings.movie_id JOIN people ON stars.person_id = people.id
WHERE people.name = 'Ewan McGregor' ORDER BY ratings.rating DESC LIMIT 10;

-- print out title for a film that has two actors named 'Mark Hamill', 'Alec Guinness' in it

SELECT movies.title
FROM movies JOIN stars ON movies.id = stars.movie_id
JOIN people ON stars.person_id = people.id
WHERE people.name IN ('Mark Hamill', 'Alec Guinness')
GROUP BY movies.id HAVING COUNT(DISTINCT people.id) = 2;
