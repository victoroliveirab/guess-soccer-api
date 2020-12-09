# GuesSoccer API

This is a serverless framework project to provide an API to a fake betting application.

## Project Structure

:open_file_folder: src

--- :file_folder: helpers - contains helper functions used on files across the project

--- :file_folder: lambdas - contains javascript functions that will be deployed as AWS lambdas

--- :file_folder: models - contains typescript types and dynamodb formats of different entities

--- :file_folder: serverless - contains `yaml` files to reduce clutter on the main `serverless.yml`

--- :file_folder: services - contains calls to any 3rd party API it might use in this project
