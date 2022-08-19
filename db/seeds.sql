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

INSERT INTO employees (first_name, last_name, department_id, role_id)
VALUES
('John', 'Jameson', 1, 1),
('Lightning', 'McQueen', 1, 1),
('Buzz', 'Lightyear', 1, 2),
('Franken', 'Stein', 2, 3),
('Hans', 'Gruber', 2, 3),
('Carl', 'Brutananadilewski', 2, 4),
('Kyle', 'Broflovski', 2, 4),
('Kenny', 'McCormick', 2, 4),
('Eric', 'Cartman', 3, 4),
('Stan', 'Marsh', 3, 5),
('Clyde', 'Donovan', 3, 4),
('Craig', 'Tucker', 3, 4),
('Randy', 'Marsh', 3, 6),
('Terrence', 'Phillips', 3, 6);
