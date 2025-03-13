--Ability to insert, update, and remove data into a table

--Insert a movie called two crows into the database

INSERT INTO movies (title) VALUES ('Two Crows');

-- Update movies title

UPDATE movies SET title = "Three Crows" WHERE id = (SELECT id FROM movies WHERE title = 'Two Crows');

-- delete a movie from database 

DELETE FROM movies WHERE title = "Three Crows";