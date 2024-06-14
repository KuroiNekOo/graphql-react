-- Deploy ouser:02_crud_functions to pg

BEGIN;

-- XXX Add DDLs here.

-- insert user
CREATE FUNCTION "insert_user"(json) RETURNS "user" AS $$

  INSERT INTO "user" (
    "pseudo"
  ) VALUES (
    $1->>'pseudo'
  ) RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

-- insert role
CREATE FUNCTION "insert_role"(json) RETURNS "role" AS $$

  INSERT INTO "role" (
    "name"
  ) VALUES (
    $1->>'name'
  ) RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

-- insert user_has_role
CREATE FUNCTION "insert_user_has_role"(json) RETURNS "user_has_role" AS $$

  INSERT INTO "user_has_role" (
    "user_id",
    "role_id"
  ) VALUES (
    ($1->>'user_id')::INT,
    ($1->>'role_id')::INT
  ) RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

-- update user
CREATE FUNCTION "update_user"(json) RETURNS "user" AS $$

  UPDATE "user" SET
    "pseudo" = COALESCE($1->>'pseudo', "pseudo"),
    "updated_at" = now()
  WHERE "id" = ($1->>'id')::INT
  RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

-- update role
CREATE FUNCTION "update_role"(json) RETURNS "role" AS $$

  UPDATE "role" SET
    "name" = COALESCE($1->>'name', "name"),
    "updated_at" = now()
  WHERE "id" = ($1->>'id')::INT
  RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

-- update user_has_role
CREATE FUNCTION "update_user_has_role"(json) RETURNS "user_has_role" AS $$

  UPDATE "user_has_role" SET
    "user_id" = COALESCE(($1->>'user_id')::INT, "user_id"),
    "role_id" = COALESCE(($1->>'role_id')::INT, "role_id"),
    "updated_at" = now()
  WHERE "id" = ($1->>'id')::INT
  RETURNING *

$$ LANGUAGE sql

VOLATILE STRICT;

COMMIT;