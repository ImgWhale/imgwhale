---
next: ./get_all_uploads.md
prev: new.md
---

# Retreive An Image Form Storage

Okay, let's try getting an image stored in imgwhale server.
For that, we have to make a GET request to `/[id]` endpoint with `id` being the image's id.

```http{2}
GET /{id} HTTP/1.1
Host: imgwhale.xyz
Content-Type: application/x-www-form-urlencoded
Response-Type: image/jpeg
```

# Retreive An Image Form Storage <Badge text="Premium" type="success" vertical="middle" />

This is only for premium users...

```http{2,6}
GET /{id} HTTP/1.1
Host: imgwhale.xyz
Content-Type: application/x-www-form-urlencoded
Response-Type: image/jpeg

key=<your_api_key>
```

For examples in different languages, checkout the [Examples](/examples/) section.
