# Auth

Types:

- <code><a href="./src/resources/auth/auth.ts">AuthRefreshTokenResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthRevokeRefreshTokenResponse</a></code>

Methods:

- <code title="post /v1/auth/access-tokens">client.auth.<a href="./src/resources/auth/auth.ts">refreshToken</a>() -> AuthRefreshTokenResponse</code>
- <code title="post /v1/auth/users">client.auth.<a href="./src/resources/auth/auth.ts">registerUser</a>({ ...params }) -> User</code>
- <code title="delete /v1/auth/refresh-tokens">client.auth.<a href="./src/resources/auth/auth.ts">revokeRefreshToken</a>() -> AuthRevokeRefreshTokenResponse</code>

## Actions

Types:

- <code><a href="./src/resources/auth/actions.ts">User</a></code>

Methods:

- <code title="post /v1/auth/actions/login">client.auth.actions.<a href="./src/resources/auth/actions.ts">loginUser</a>({ ...params }) -> User</code>

## Passwords

Types:

- <code><a href="./src/resources/auth/passwords/passwords.ts">PasswordUpdatePasswordResponse</a></code>

Methods:

- <code title="put /v1/auth/passwords">client.auth.passwords.<a href="./src/resources/auth/passwords/passwords.ts">updatePassword</a>({ ...params }) -> PasswordUpdatePasswordResponse</code>

### Actions

Types:

- <code><a href="./src/resources/auth/passwords/actions.ts">ActionRequestPasswordResetResponse</a></code>
- <code><a href="./src/resources/auth/passwords/actions.ts">ActionResetPasswordResponse</a></code>

Methods:

- <code title="post /v1/auth/passwords/actions/request-reset">client.auth.passwords.actions.<a href="./src/resources/auth/passwords/actions.ts">requestPasswordReset</a>({ ...params }) -> ActionRequestPasswordResetResponse</code>
- <code title="post /v1/auth/passwords/actions/reset">client.auth.passwords.actions.<a href="./src/resources/auth/passwords/actions.ts">resetPassword</a>({ ...params }) -> ActionResetPasswordResponse</code>
