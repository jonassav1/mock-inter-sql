--Demonstrating which queries can be used to address generic web app features like pagination or search
--Search Queries (Filtering & Sorting Large Data Sets) 

-- implement commonly used sql queries for  wb applicaton like search( pagination) filter(where and basically) count sort(order by)
--sort
SELECT title, year, rating FROM movies JOIN ratings ON movies.id = ratings.movie_id
ORDER BY rating DESC LIMIT 10;
--filter
SELECT title,year,rating FROM movies JOIN ratings ON movies.id = ratings.movie_id WHERE year =2010 AND rating >= 7.5 LIMIT 10;
--count
SELECT COUNT(*) FROM movies;