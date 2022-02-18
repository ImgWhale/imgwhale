# Retreive An Image Form Storage

Okay, let's try getting an image stored in imgwhale server.
For that, we have to make a GET request to `/[id]` endpoint with `id` being the image's id.

```http{1}
GET /{id} HTTP/1.1
Host: imgwhale.xyz
Content-Type: application/x-www-form-urlencoded
Response-Type: image/jpeg
```

For examples in different languages, checkout the [Examples](/examples/) section.
