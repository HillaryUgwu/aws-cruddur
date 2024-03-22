SELECT
  users.uuid,
  users.cognito_user_id as cognito_user_uuid,
  users.handle,
  users.display_name
FROM public.users
WHERE 
  users.handle = %(handle)s