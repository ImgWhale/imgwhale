---
prev: ./readme.md
---

![logo](https://dart.dev/assets/shared/dart/icon/64.png)

# Dart

## New Image In Storage

```dart{3-5,7-8}
import 'package:http/http.dart' as http;

// Regular users
// An tailing / after /new will give error
var request = new http.MultipartRequest('POST', 'https://imgwhale.xyz/new');

// Premium Users
var request = new http.MultipartRequest('POST', 'https://imgwhale.xyz/new?key=[your_api_key]');

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

```dart{4-5,7-8}
import 'package:http/http.dart' as http;

var requests = http.get(
  // For Regular Users
  Uri.parse('https://imgwhale.xyz/[id]'), // Let id be ps2pf21kzu22rm2

  // For Premium Users
  Uri.parse('https://imgwhale.xyz/[id]?key=[your_api_key]'),

  headers: {'Accept': 'image/jpeg'});
);
print(requests.bodyBytes); // <binary data>
```

## Delete An Image

**This feature is only available to premium users.**

```dart{4,6}
import 'package:http/http.dart' as http;

var requests = http.post(
  Uri.parse('https://imgwhale.xyz/[id]?key=[your_api_key]'),
);
print(response.body);
```
