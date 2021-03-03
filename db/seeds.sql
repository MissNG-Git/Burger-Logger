USE burgers_db;

INSERT INTO burgers 
    (burger_name, devoured)
VALUE 
    ('Hamburger', false),
    ('Cheesburger', true),
    ('Steakburger', false),
    ('Fishburger', true),
    ('Veggieburger', true);

SELECT * from burgers;