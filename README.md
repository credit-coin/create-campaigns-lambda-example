# Simple node lamda example 

- Make sure secrets, connection information etc are store in env variables and accessed from process.env not as plain text
- Use ES6, and try/catch await pattern for promises
- Add proper validations to fields
- Store lambda code in S3, setup lambda function to reference deployment from there
    - Updates and changes should be made in git, function should be executed locally using aws sam to make sure everything works
    - Build package and deploy should be part of some CD pipeline, code should not be updated directly in AWS console git should be the version control source. (PR -> Merge -> CD (Run Test, Build, -> Package -> Deploy)

## Build and deploy 

First make an S3 buck 
```linux
$ BUCKET_NAME=my-bucket REGION=us-east-1 yarn run s3bucket
```

Deploy lambda
```linux
$ BUCKET_NAME=my-bucket REGION=us-east-1 yarn run deploy
```

