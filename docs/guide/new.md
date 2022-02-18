---
next: ./get.md
---

# New Image In Storage

Okay, let's try storing a new image to imgwhale server.
For that, we have to make a POST request to `/new` endpoint with file as binary data.

```http{2,5}
POST /new HTTP/1.1
Host: imgwhale.xyz
Content-Type: image/jpeg

> input.jpg
```

For examples in different languages, checkout the [Examples](/examples/) section.
