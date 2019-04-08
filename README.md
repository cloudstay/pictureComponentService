# CloudStay

> An house sharing front end web app that allows connection of people looking for temperary housing with those with spare rooms.

## Related Projects

  - https://github.com/cloudstay/apartment-component-service
  - https://github.com/cloudstay/anthonysServiceModules
  - https://github.com/cloudstay/BookingModuleService
  - https://github.com/cloudstay/reviewComponentService

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions
-System is set up on localhost:3006 for this component
-Photos are seeded on S3, but to seed own photos run 
  -npm run randomPhotos
  -Take photos from media folder to s3 bucket
  -run npm run seedDB with change to bucket location
## Requirements


- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm run seedDB
npm run buildwb
npm run server
Open page on localhost:3006/rooms/?id=${roomnumber}
```

