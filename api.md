# Healthz

Types:

- <code><a href="./src/resources/healthz.ts">HealthzCheckResponse</a></code>

Methods:

- <code title="get /healthz">client.healthz.<a href="./src/resources/healthz.ts">check</a>() -> HealthzCheckResponse</code>

# Auth

Types:

- <code><a href="./src/resources/auth/auth.ts">AuthRefreshTokenResponse</a></code>

Methods:

- <code title="post /v2/auth/access-tokens">client.auth.<a href="./src/resources/auth/auth.ts">refreshToken</a>() -> unknown</code>

## Actions

Types:

- <code><a href="./src/resources/auth/actions.ts">ActionLoginUserResponse</a></code>

Methods:

- <code title="post /v2/auth/actions/login">client.auth.actions.<a href="./src/resources/auth/actions.ts">loginUser</a>({ ...params }) -> ActionLoginUserResponse</code>
