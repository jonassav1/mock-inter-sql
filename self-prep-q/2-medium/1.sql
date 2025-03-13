--Using DISTINCT, IN
--Using DISTINCT, IN (Filtering Unique & Multiple Values)

-- Find unique release year for movies where titles are 'Mortal Combat' or "The Matrix" print out title and release year

SELECT DISTINCT  title, year FROM movies WHERE title IN ('Mortal Kombat', 'The Matrix');