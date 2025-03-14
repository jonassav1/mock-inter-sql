--Pagination (LIMIT, OFFSET)
--Demonstrating which queries can be used to address generic web app features like pagination or search

-- search for 10 movie titles with word 'Wars'

SELECT title, year FROM movies WHERE title LIKE '%wars%' LIMIT 10;

-- pagination get 10 movies titles and years from db sort by year in desc order  
-- limit defines how many results per page
-- offset skips previous results based on pageSize * (page - 1)

SELECT title, year FROM movies ORDER BY year DESC LIMIT 10 OFFSET 1;