INSERT INTO
    "user" ("pseudo")
VALUES ('seb'),
    ('florent'),
    ('max'),
    ('ronane');

INSERT INTO
    "role" ("name")
VALUES ('admin'),
    ('visitor'),
    ('moderator');

INSERT INTO
    "user_has_role" ("user_id", "role_id")
VALUES (1, 2),
    (1, 3),
    (1, 1),
    (2, 3),
    (2, 1),
    (2, 2),
    (3, 1),
    (3, 2),
    (3, 3),
    (4, 1),
    (4, 2),
    (4, 3);