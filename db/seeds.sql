INSERT INTO departments (name)
VALUES
('Men'),
('Women'),
('Children'),
('Toys'),
('Shoes'),
('Perfume'),
('Sports');

INSERT INTO roles (title, salary, department_id)
VALUES
('Regional Manager', '85000', 4),
('Store Manager', '65000', 5),
('Depatment Manager', '45000', 2),
('Clerk', '12.50', 7);

INSERT INTO employees (first_name, last_name, role_id)
VALUES
('John', 'Jameson', 1),
('Lightning', 'McQueen', 1),
('Buzz', 'Lightyear', 1),
('Franken', 'Stein', 2),
('Hans', 'Gruber', 2),
('Carl', 'Brutananadilewski', 2),
('Kyle', 'Broflovski', 2),
('Kenny', 'McCormick', 2),
('Eric', 'Cartman', 3),
('Stan', 'Marsh', 3),
('Clyde', 'Donovan', 3),
('Craig', 'Tucker', 3),
('Randy', 'Marsh', 3),
('Terrence', 'Phillips', 3);
