-- Revert ouser:01_init from pg

BEGIN;

-- XXX Add DDLs here.

DROP TABLE IF EXISTS "user_has_role", "user", "role";

COMMIT;