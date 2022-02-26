---
prev: ./readme.md
---

![logo](https://www.python.org/static/favicon.ico)

# Python

## New Image In Storage

```python{3-5,7-8}
import requests

# Regular Users
# An tailing / after /new will give error
req = requests.post('https://imgwhale.xyz/new', files={'image': open('/path/to/image.jpg', 'rb')})

# Premium Users
req = requests.post('https://imgwhale.xyz/new?key=[your_api_key]', files={'image': open('/path/to/image.jpg', 'rb')})

print(req.json())  # {'error': False, 'message': 'IMAGE_UPLOADED', 'fileId': 'ps2pf21kzu22rm2'}
```

## Retreive An Image Form Storage

```python{3-5,7-8,10}
import requests

# For Regular Users
# An tailing / after /[id] will give error
req = requests.get('https://imgwhale.xyz/[id]')  # Let id be ps2pf21kzu22rm2

# For Premium Users
req = requests.get('https://imgwhale.xyz/[id]?key=[your_api_key]')

# The image will be available at https://imgwhale.xyz/ps2pf21kzu22rm2
print(req.content)  # <binary data>
with open('image.jpg', 'wb') as f:
    f.write(req.content)  # Save image to disk
```

## Delete An Image

**This feature is only available to premium users.**

```python{3}
import requests

req = requests.post('https://imgwhale.xyz/[id]?key=[your_api_key]')
print(res.json())
```
