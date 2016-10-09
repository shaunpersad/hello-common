# hello-common
Provides some common utilities to be shared across all services for the "Hello" project.

Currently only provides a "ready" function that can check the health of a service
by making a GET request to it.  It is used to check if RabitMQ is up and running.