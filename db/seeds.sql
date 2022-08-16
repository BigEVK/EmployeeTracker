INSERT INTO department (name)
VALUES
('Men'),
('Women'),
('Children'),
('Toys'),
('Shoes'),
('Perfume'),
('Sports');

INSERT INTO role (title, salary)
VALUES
('Regional Manager', '85000'),
('Store Manager', '65000'),
('Depatment Manager', '45000'),
('Clerk', '12.50');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Jameson', 1, null),
('Lightning', 'McQueen', 2, 1),
('Buzz', 'Lightyear', 2, 1),
('Franken', 'Stein', 3, 2),
('Hans', 'Gruber', 3, 2),
('Carl', 'Brutananadilewski', 3, 2),
('Kyle', 'Broflovski', 3, 2),
('Kenny', 'McCormick', 3, 2),
('Eric', 'Cartman', 4, 3),
('Stan', 'Marsh', 4, 3),
('Clyde', 'Donovan', 4, 3),
('Craig', 'Tucker', 4, 3),
('Randy', 'Marsh', 4, 3),
('Terrence', 'Phillips', 4, 3);
