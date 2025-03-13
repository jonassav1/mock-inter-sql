UPDATE ratings SET rating = 6.5 WHERE movie_id = (
    SELECT id FROM movies WHERE title = 'Barbenheimer' AND year = 2023);

-- SELECT movies.title, ratings.rating
-- FROM movies JOIN ratings ON movies.id = ratings.movie_id WHERE movies.title = 'Barbenheimer' AND movies.year = 2023;
-- Selection to check if the movie rating was updated