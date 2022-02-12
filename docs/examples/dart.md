---
prev: ./readme.md
next: ./python.md
---

![logo](https://dart.dev/assets/shared/dart/icon/64.png)

# Dart

## New Image In Storage

```dart
import 'package:http/http.dart' as http;

// An tailing / after /new will give error
var request = new http.MultipartRequest('POST', 'https://imgwhale.xyz/new');
request.files.add(http.MultipartFile.fromPath(
    'path/to/image.jpg',
    contentType: new MediaType('image', 'jpeg'),
));
request.send().then((response) {
  if (response.statusCode == 200) print(response.body); // {'error': False, 'message': 'IMAGE_UPLOADED', 'fileId': 'd1b120kzk295tl'}
});
```

## Retreive An Image Form Storage

```dart
import 'package:http/http.dart' as http;

var requests = http.get(
    Uri.parse('https://imgwhale.xyz/[id]'), // Let id be d1b120kzk295tl
    headers: {'Accept': 'image/jpeg'});
);
print(requests.bodyBytes); // <binary data>
```
