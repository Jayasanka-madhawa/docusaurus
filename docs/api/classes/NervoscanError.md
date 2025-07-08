[**nervoscan-js-sdk v1.0.5**](../README.md)

***

[nervoscan-js-sdk](../globals.md) / NervoscanError

# Class: NervoscanError

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/utils/errors.ts:5](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/utils/errors.ts#L5)

Base error class for all Nervoscan errors.

## Extends

- `Error`

## Extended by

- [`NotInitializedError`](NotInitializedError.md)
- [`EmptyVideoError`](EmptyVideoError.md)
- [`VideoTypeError`](VideoTypeError.md)
- [`InvalidUsernameError`](InvalidUsernameError.md)
- [`InvalidPasswordError`](InvalidPasswordError.md)
- [`NoScansAvailableError`](NoScansAvailableError.md)
- [`InvalidAccessTokenError`](InvalidAccessTokenError.md)
- [`NoScanDataError`](NoScanDataError.md)
- [`InvalidServerTypeError`](InvalidServerTypeError.md)
- [`NotImplementedError`](NotImplementedError.md)
- [`LowFPSError`](LowFPSError.md)
- [`FPSCalculationError`](FPSCalculationError.md)
- [`FaceNotCenteredError`](FaceNotCenteredError.md)
- [`FaceTooFarError`](FaceTooFarError.md)
- [`FaceTooCloseError`](FaceTooCloseError.md)
- [`FaceLookingLeftError`](FaceLookingLeftError.md)
- [`FaceLookingRightError`](FaceLookingRightError.md)
- [`ErrorCallbackNotSetError`](ErrorCallbackNotSetError.md)
- [`UnhandledScanError`](UnhandledScanError.md)
- [`SkinExtractionError`](SkinExtractionError.md)

## Constructors

### Constructor

> **new NervoscanError**(`message`): `NervoscanError`

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/utils/errors.ts:6](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/utils/errors.ts#L6)

#### Parameters

##### message

`string`

#### Returns

`NervoscanError`

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: Documents/Nervotec/docusaurus/my-docs/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

#### Inherited from

`Error.cause`

***

### message

> **message**: `string`

Defined in: Documents/Nervotec/docusaurus/my-docs/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: Documents/Nervotec/docusaurus/my-docs/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack**: `string`

Defined in: Documents/Nervotec/docusaurus/my-docs/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:28

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:30

#### Inherited from

`Error.stackTraceLimit`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/@types/node/globals.d.ts:21

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
