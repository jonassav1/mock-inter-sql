--Proficiency in executing simple SELECT queries (WHERE, ORDER BY, LIMIT, OFFSET)

-- Select 5 movies where year = 2012 and order them by release year ascending
--   print out id title and year.

SELECT id, title, year FROM movies WHERE year = 2012 ORDER BY id ASC LIMIT 5;