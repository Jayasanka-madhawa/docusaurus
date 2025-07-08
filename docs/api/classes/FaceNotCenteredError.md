[**nervoscan-js-sdk v1.0.5**](../README.md)

***

[nervoscan-js-sdk](../globals.md) / FaceNotCenteredError

# Class: FaceNotCenteredError

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/utils/errors.ts:135](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/utils/errors.ts#L135)

Error thrown when the face is not centered.

## Extends

- [`NervoscanError`](NervoscanError.md)

## Constructors

### Constructor

> **new FaceNotCenteredError**(`message`): `FaceNotCenteredError`

Defined in: [Documents/Nervotec/docusaurus/nervoscan-js/src/api/utils/errors.ts:136](https://github.com/nervotec/nervoscan-js/blob/a3e202b0aed347d51c982d0e67d7d962d141bec3/src/api/utils/errors.ts#L136)

#### Parameters

##### message

`string`

#### Returns

`FaceNotCenteredError`

#### Overrides

[`NervoscanError`](NervoscanError.md).[`constructor`](NervoscanError.md#constructor)

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: Documents/Nervotec/docusaurus/my-docs/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

#### Inherited from

[`NervoscanError`](NervoscanError.md).[`cause`](NervoscanError.md#cause)

***

### message

> **message**: `string`

Defined in: Documents/Nervotec/docusaurus/my-docs/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`NervoscanError`](NervoscanError.md).[`message`](NervoscanError.md#message)

***

### name

> **name**: `string`

Defined in: Documents/Nervotec/docusaurus/my-docs/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`NervoscanError`](NervoscanError.md).[`name`](NervoscanError.md#name)

***

### stack?

> `optional` **stack**: `string`

Defined in: Documents/Nervotec/docusaurus/my-docs/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`NervoscanError`](NervoscanError.md).[`stack`](NervoscanError.md#stack)

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

[`NervoscanError`](NervoscanError.md).[`prepareStackTrace`](NervoscanError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:30

#### Inherited from

[`NervoscanError`](NervoscanError.md).[`stackTraceLimit`](NervoscanError.md#stacktracelimit)

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

[`NervoscanError`](NervoscanError.md).[`captureStackTrace`](NervoscanError.md#capturestacktrace)
