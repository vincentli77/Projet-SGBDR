CREATE SCHEMA `backendProject`;
USE backendProject;

-- 테이블 순서는 관계를 고려하여 한 번에 실행해도 에러가 발생하지 않게 정렬되었습니다.

-- Challenges Table Create SQL
CREATE TABLE Challenges
(
    `id`    VARCHAR(36)    NOT NULL    DEFAULT ( uuid() )    PRIMARY KEY,
    `name`  VARCHAR(50)    NOT NULL
);


-- Users Table Create SQL
CREATE TABLE Users
(
    `id`          VARCHAR(36)     NOT NULL    DEFAULT ( uuid() )    PRIMARY KEY,
    `email`       VARCHAR(320)    NOT NULL UNIQUE,
    `first_name`  VARCHAR(50)     NOT NULL, 
    `last_name`   VARCHAR(50)     NOT NULL, 
    `role`        CHAR(7)         NOT NULL, 
    `created_at`  TIMESTAMP       NOT NULL, 
    `promo_id`    VARCHAR(36)     NOT NULL
);


-- Promotions Table Create SQL
CREATE TABLE Promotions
(
    `id`    VARCHAR(36)    NOT NULL    DEFAULT ( uuid() )    PRIMARY KEY,
    `name`  VARCHAR(50)    NOT NULL
);


-- Results Table Create SQL
CREATE TABLE Results
(
    `id`            VARCHAR(36)    NOT NULL    DEFAULT ( uuid() )    PRIMARY KEY,
    `challenge_id`  VARCHAR(36)    NOT NULL, 
    `score`         INT            NOT NULL, 
    `created_at`    TIMESTAMP      NOT NULL, 
    `user_id`       VARCHAR(36)    NOT NULL, 
    `promo_id`      VARCHAR(36)    NOT NULL
);

ALTER TABLE Results
    ADD CONSTRAINT FK_Results_user_id_Users_id FOREIGN KEY (user_id)
        REFERENCES Users (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Results
    ADD CONSTRAINT FK_Results_promo_id_Promotions_id FOREIGN KEY (promo_id)
        REFERENCES Promotions (id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- Promotions_Challenges Table Create SQL
CREATE TABLE Promotions_Challenges
(
    `id`            VARCHAR(36)    NOT NULL    DEFAULT ( uuid() )    PRIMARY KEY,
    `promo_id`      VARCHAR(36)    NOT NULL, 
    `challenge_id`  VARCHAR(36)    NOT NULL
);

ALTER TABLE Promotions_Challenges
    ADD CONSTRAINT FK_Promotions_Challenges_challenge_id_Challenges_id FOREIGN KEY (challenge_id)
        REFERENCES Challenges (id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE Promotions_Challenges
    ADD CONSTRAINT FK_Promotions_Challenges_promo_id_Promotions_id FOREIGN KEY (promo_id)
        REFERENCES Promotions (id) ON DELETE RESTRICT ON UPDATE RESTRICT;
