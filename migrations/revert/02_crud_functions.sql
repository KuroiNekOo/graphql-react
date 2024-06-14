-- Revert ouser:02_crud_functions from pg

BEGIN;

-- XXX Add DDLs here.

DROP FUNCTION IF EXISTS "insert_user";

DROP FUNCTION IF EXISTS "insert_role";

DROP FUNCTION IF EXISTS "insert_user_has_role";

DROP FUNCTION IF EXISTS "update_user";

DROP FUNCTION IF EXISTS "update_role";

DROP FUNCTION IF EXISTS "update_user_has_role";

COMMIT;