---
prev: ./readme.md
---

![logo](https://dart.dev/assets/shared/dart/icon/64.png)

# Dart

## New Image In Storage

```dart{3-8}
import 'package:http/http.dart' as http;

// An tailing / after /new will give error
var request = new http.MultipartRequest('POST', 'https://imgwhale.xyz/new');
request.files.add(http.MultipartFile.fromPath(
  'path/to/image.jpg',
  contentType: new MediaType('image', 'jpeg'),
));
request.send().then((response) {
  if (response.statusCode == 200) print(response.body);
  /// {'error': False, 'message': 'IMAGE_UPLOADED', 'fileId': 'ps2pf21kzu22rm2'}
  /// The image will be available at https://imgwhale.xyz/ps2pf21kzu22rm2
});
```

## Retreive An Image Form Storage

```dart{3-7}
import 'package:http/http.dart' as http;

var requests = http.get(
  Uri.parse('https://imgwhale.xyz/[id]'), // Let id be ps2pf21kzu22rm2
  headers: {'Accept': 'image/jpeg'});
);
print(requests.bodyBytes); // <binary data>
```
