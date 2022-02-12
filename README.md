# imgwhale

A dropbox based image storage service built in typescript.

## Usage

### **POST** `/new`

Upload a file to the endpoint via a post requests and the file will be stored and an uniqe id will be returned.

### **GET** /[id]

Make a get request to the endpoint with the id of the file you want to retrieve.
