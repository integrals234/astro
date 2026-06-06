-- Table to store global cities and their exact coordinates
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    latitude DECIMAL(9,6) NOT NULL,
    longitude DECIMAL(9,6) NOT NULL,
    timezone_id VARCHAR(50) NOT NULL
);

-- Table to store your custom interpretive content
CREATE TABLE interpretations (
    id SERIAL PRIMARY KEY,
    celestial_body VARCHAR(50) NOT NULL,
    zodiac_sign VARCHAR(50),
    house_number INT,
    content TEXT NOT NULL,
    UNIQUE (celestial_body, zodiac_sign, house_number)
);

-- Insert a test location
INSERT INTO locations (city_name, country, latitude, longitude, timezone_id) 
VALUES ('Tokyo', 'Japan', 35.6895, 139.6917, 'Asia/Tokyo');

-- Insert a test interpretation
INSERT INTO interpretations (celestial_body, zodiac_sign, house_number, content)
VALUES ('Sun', 'Aries', 1, 'The Sun is exalted here, providing immense vitality, leadership, and a pioneering spirit.');