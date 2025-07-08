[**nervoscan-js-sdk v1.0.5**](../README.md)

***

[nervoscan-js-sdk](../globals.md) / Client

# Class: Client

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:12](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L12)

Client class for interacting with the Nervoscan API.
This class provides methods for authentication, video upload, and result retrieval.

## Methods

### ~~checkResults()~~

> **checkResults**(`jobID`): `Promise`\<`any`\>

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:108](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L108)

Checks the status of a video processing job.
⚠️ This function is deprecated and will be removed in a future version.

#### Parameters

##### jobID

`string`

The job ID to check

#### Returns

`Promise`\<`any`\>

The job status

#### Deprecated

Use setOnWindowResults() and setOnFinalResults() instead

#### Throws

If the client is not initialized

#### Throws

If the access token is invalid

#### Throws

If the username is invalid. The user should reinitialize the client with the correct credentials. Run Client.initialize()

#### Throws

If the password is invalid. The user should reinitialize the client with the correct credentials. Run Client.initialize()

***

### ~~getResults()~~

> **getResults**(`jobID`): `Promise`\<`any`\>

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:136](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L136)

Retrieves the results for a completed video processing job.
⚠️ This function is deprecated and will be removed in a future version.

#### Parameters

##### jobID

`string`

The job ID to get results for

#### Returns

`Promise`\<`any`\>

The job results

#### Deprecated

Use setOnWindowResults() and setOnFinalResults() instead

#### Throws

If the client is not initialized

#### Throws

If the access token is invalid

#### Throws

If the job has no scan data

#### Throws

If the username is invalid. The user should reinitialize the client with the correct credentials. Run Client.initialize()

#### Throws

If the password is invalid. The user should reinitialize the client with the correct credentials. Run Client.initialize()

***

### initialize()

> **initialize**(`username`, `password`, `serverType`): `void`

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:55](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L55)

Initializes the client with user credentials and sets the backend URL.

#### Parameters

##### username

`string`

The username for authentication

##### password

`string`

The password for authentication

##### serverType

`string` = `'server'`

The type of server to use ('server' or 'serverless'). Defaults to 'server'

#### Returns

`void`

#### Throws

If the server type is invalid

***

### initializeStreaming()

> **initializeStreaming**(`videoStream`, `videoElement`): `void`

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:185](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L185)

Initializes the streaming manager.

#### Parameters

##### videoStream

`MediaStream`

The video stream to stream

##### videoElement

`HTMLVideoElement`

The video element to stream to

#### Returns

`void`

***

### setOnDisconnection()

> **setOnDisconnection**(`callback`): `void`

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:176](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L176)

Sets a callback function to handle disconnection.

#### Parameters

##### callback

() => `void`

Function to be called when the connection is lost. Takes no parameters.

#### Returns

`void`

***

### setOnError()

> **setOnError**(`callback`): `void`

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:168](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L168)

Sets a callback function to handle errors.

#### Parameters

##### callback

(`error`) => `void`

Function to be called with error. Takes a single parameter of type any containing the error data.

#### Returns

`void`

***

### setOnFinalResults()

> **setOnFinalResults**(`callback`): `void`

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:160](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L160)

Sets a callback function to handle final averaged results when they arrive.

#### Parameters

##### callback

(`results`) => `void`

Function to be called with final results. Takes a single parameter of type any containing the averaged results data.

#### Returns

`void`

***

### setOnWindowResults()

> **setOnWindowResults**(`callback`): `void`

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:152](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L152)

Sets a callback function to handle window-based results as they arrive.

#### Parameters

##### callback

(`results`) => `void`

Function to be called with window results. Takes a single parameter of type any containing the results data.

#### Returns

`void`

***

### startStreaming()

> **startStreaming**(): `Promise`\<`any`\>

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:197](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L197)

Starts streaming the video to the server.

#### Returns

`Promise`\<`any`\>

#### Throws

If the client is not initialized

#### Throws

If the user has no scans available in the current plan

#### Throws

If the access token is invalid

#### Throws

If the username is invalid. The user should reinitialize the client with the correct credentials. Run Client.initialize()

#### Throws

If the password is invalid. The user should reinitialize the client with the correct credentials. Run Client.initialize()

***

### stopStreaming()

> **stopStreaming**(): `void`

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:215](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L215)

Stops streaming the video to the server.

#### Returns

`void`

***

### uploadVideo()

> **uploadVideo**(`videoBlob`): `Promise`\<`any`\>

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:78](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L78)

Uploads a video and returns the API key.

#### Parameters

##### videoBlob

`Blob`

The video blob to upload

#### Returns

`Promise`\<`any`\>

The API key

#### Throws

If the client is not initialized

#### Throws

If the video blob is not a Blob

#### Throws

If the video blob is empty

#### Throws

If the user has no scans available in the current plan

#### Throws

If the access token is invalid

#### Throws

If the username is invalid. The user should reinitialize the client with the correct credentials. Run Client.initialize()

#### Throws

If the password is invalid. The user should reinitialize the client with the correct credentials. Run Client.initialize()

***

### getInstance()

> `static` **getInstance**(): `Client`

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/Client.ts:41](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/Client.ts#L41)

Gets the singleton instance of the Client class.

#### Returns

`Client`
