--UNION, INTERSECT

-- select id from movies and ratings using intersect. 

SELECT id FROM movies WHERE title = 'Star Wars: Episode IV - A New Hope'
INTERSECT
SELECT movie_id FROM ratings;
