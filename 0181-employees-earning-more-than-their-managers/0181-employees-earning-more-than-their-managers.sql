/* Write your T-SQL query statement below */
-- select Employee as name
-- from Employee
-- where salary > (select salary from )
SELECT e1.name AS Employee
FROM Employee e1
JOIN Employee e2
  ON e1.managerId = e2.id
WHERE e1.salary > e2.salary;