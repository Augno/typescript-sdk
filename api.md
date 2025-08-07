# Customers

## Addresses

Types:

- <code><a href="./src/resources/customers/addresses.ts">Address</a></code>
- <code><a href="./src/resources/customers/addresses.ts">GetCustomerAddress</a></code>

Methods:

- <code title="post /customers/{customer_id}/addresses">client.customers.addresses.<a href="./src/resources/customers/addresses.ts">create</a>(customerID, { ...params }) -> Address</code>
- <code title="get /customers/{customer_id}/addresses/{address_id}">client.customers.addresses.<a href="./src/resources/customers/addresses.ts">retrieve</a>(addressID, { ...params }) -> GetCustomerAddress</code>
- <code title="put /customers/{customer_id}/addresses/{address_id}">client.customers.addresses.<a href="./src/resources/customers/addresses.ts">update</a>(addressID, { ...params }) -> Address</code>
- <code title="get /customers/{customer_id}/addresses">client.customers.addresses.<a href="./src/resources/customers/addresses.ts">list</a>(customerID) -> GetCustomerAddress</code>
- <code title="delete /customers/{customer_id}/addresses/{address_id}">client.customers.addresses.<a href="./src/resources/customers/addresses.ts">delete</a>(addressID, { ...params }) -> void</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>
