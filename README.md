# cf-amz-scrapper

## Run function locally

Using start script from package.json
```
"scripts": {
    "start": "npx functions-framework --target=price_scrapper --signature-type=http"
}
```

At project root execute
     
    npm start

## Testing function
```
curl -X POST http://localhost:8080 \
-H "Content-Type: application/json" \
-d '{
  "name": "Mario"
}'
```

## Deploy to Google Cloud

Configure gcloud project

    gcloud config set project PROJECT_ID

Deploy from local machine

    gcloud functions deploy amz-scraper \
    --gen2 \
    --region=us-west4 \
    --runtime=nodejs16 \
    --source=. \
    --entry-point=price_scrapper \
    --trigger-http \
    --allow-unauthenticated 

## Testing Cloud function
