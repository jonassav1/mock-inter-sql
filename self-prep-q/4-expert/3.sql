-- Writing queries with multiple subqueries or combinations of joins & subqueries
-- Writing queries with multiple subqueries or a combination of joins and subqueries

-- write  a queries with subqueries or joins print out 10 titles year ratings for movies where actor is 'Jack Lemmon' order by rating Descending 

SELECT title, year, rating FROM movies JOIN ratings ON movies.id = ratings.movie_id
WHERE movies.id IN (SELECT movie_id FROM stars WHERE person_id = (
    SELECT id FROM people WHERE name = 'Jack Lemmon'
)) ORDER BY ratings.rating DESC LIMIT 10;

