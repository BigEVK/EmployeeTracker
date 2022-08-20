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
('Department Manager', '45000', 2),
('Clerk', '12.50', 7);

INSERT INTO employees (first_name, last_name, department_id, role_id)
VALUES
('John', 'Jameson', 4, 1),
('Lightning', 'McQueen', 5, 1),
('Buzz', 'Lightyear', 5, 2),
('Franken', 'Stein', 2, 3),
('Hans', 'Gruber', 2, 3),
('Carl', 'Brutananadilewski', 2, 4),
('Kyle', 'Broflovski', 7, 4),
('Kenny', 'McCormick', 7, 4),
('Eric', 'Cartman', 7, 4),
('Stan', 'Marsh', 7, 2),
('Clyde', 'Donovan', 7, 4),
('Craig', 'Tucker', 7, 4),
('Randy', 'Marsh', 7, 2),
('Terrence', 'Phillips', 7, 2);
