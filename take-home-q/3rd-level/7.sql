SELECT DISTINCT title FROM movies 
JOIN stars ON movies.id = stars.movie_id 
JOIN people ON stars.person_id = people.id 
WHERE people.name IN ("Scarlett Johansson", 'Chris Evans')
GROUP BY movies.id HAVING  COUNT(DISTINCT people.id)= 2;
