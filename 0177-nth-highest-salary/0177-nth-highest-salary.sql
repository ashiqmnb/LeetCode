CREATE FUNCTION getNthHighestSalary(@N INT) 
RETURNS INT 
AS
BEGIN
    DECLARE @Result INT;

    -- Select the nth highest salary using DENSE_RANK
    SELECT @Result = MAX(salary)
    FROM (
        SELECT 
            salary,
            DENSE_RANK() OVER (ORDER BY salary DESC) AS rank
        FROM Employee
    ) AS ranked_salaries
    WHERE rank = @N;

    -- Return the result
    RETURN @Result;
END;