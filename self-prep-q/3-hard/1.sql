--Subqueries

-- Write a subquery where you select 5 movie titles from actor Harrison Ford

SELECT title FROM movies WHERE id IN (SELECT movie_id FROM stars WHERE person_id = (SELECT id FROM people WHERE name = "Harrison Ford")) LIMIT 5;