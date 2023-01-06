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

## Deploy to GCloud
