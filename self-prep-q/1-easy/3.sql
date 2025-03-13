--Comparison operators (>, <, =, <>)

-- Find 10 movies ids whose rating is higher then 9.5
--    print movie_id and rating in descending order by rating


SELECT movie_id, rating FROM  ratings WHERE rating > 9.5 ORDER BY rating DESC LIMIT 10;