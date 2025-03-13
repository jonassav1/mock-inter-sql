--LIKE (pattern matching for text searches)

-- Find 5 movie titles and release year where title begins with "Star"

SELECT title, year FROM movies WHERE title LIKE "Star%" LIMIT 5;