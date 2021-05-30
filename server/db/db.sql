CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    employee_id  BIGINT NOT NULL REFERENCES employees(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL CHECK(rating >=1 AND  rating <=5)
);

