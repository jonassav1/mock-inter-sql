SELECT movies.title, movies.year FROM movies JOIN directors ON movies.id = directors.movie_id WHERE directors.person_id IN (
    SELECT id FROM people WHERE name = 'Frank Darabont'
) ORDER BY movies.year DESC;