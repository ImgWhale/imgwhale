---
prev: ./readme.md
---

![logo](https://www.python.org/static/favicon.ico)

# Python

## New Image In Storage

```python{3,4}
import requests

# An tailing / after /new will give error
req = requests.post('https://imgwhale.xyz/new', files={'image': open('/path/to/image.jpg', 'rb')})
print(req.json())  # {'error': False, 'message': 'IMAGE_UPLOADED', 'fileId': 'd1b120kzk295tl'}
```

## Retreive An Image Form Storage

```python{3,4}
import requests

# An tailing / after /[id] will give error
req = requests.get('https://imgwhale.xyz/[id]')  # Let id be d1b120kzk295tl
print(req.content)  # <binary data>
with open('image.jpg', 'wb') as f:
    f.write(req.content)  # Save image to disk
```
