SELECT people.name, COUNT(stars.movie_id) AS number FROM people 
JOIN stars ON people.id = stars.person_id GROUP BY people.id HAVING COUNT(stars.movie_id) > 300;