# DataStorage <Badge type="tip" text="Namespace" />

## Table of contents

| Enumerations |
| :-----|
| [DataStorageResultCode](../enums/DataStorage.DataStorage.DataStorageResultCode.md) <br> 数据储存返回代码|

| Functions |
| :-----|
| **[asyncGetCustomData](DataStorage.DataStorage.md#asyncgetcustomdata)**(`string`): `Promise`<`unknown`\> <br> 异步获取自定义数据|
| **[asyncGetPlayerData](DataStorage.DataStorage.md#asyncgetplayerdata)**([`Player`](../classes/Gameplay.Gameplay.Player.md)): `Promise`<`unknown`\> <br> 异步获取玩家数据|
| **[asyncRemoveCustomData](DataStorage.DataStorage.md#asyncremovecustomdata)**(`string`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\> <br> 异步删除自定义数据|
| **[asyncRemovePlayerData](DataStorage.DataStorage.md#asyncremoveplayerdata)**([`Player`](../classes/Gameplay.Gameplay.Player.md)): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\> <br> 异步删除用户数据|
| **[asyncSetCustomData](DataStorage.DataStorage.md#asyncsetcustomdata)**(`string`, `unknown`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\> <br> 异步设置自定义数据|
| **[asyncSetPlayerData](DataStorage.DataStorage.md#asyncsetplayerdata)**([`Player`](../classes/Gameplay.Gameplay.Player.md), `unknown`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\> <br> 异步设置自定义数据|
| **[setTemporaryStorage](DataStorage.DataStorage.md#settemporarystorage)**(`boolean`): `void` <br> 设置数据存储环境是否是临时的|
| **[sizeOfData](DataStorage.DataStorage.md#sizeofdata)**(`unknown`): `number` <br> 返回data的当前大小。单位为bytes（字节）。|

## Functions

### asyncGetCustomData

▸ **asyncGetCustomData**(`key`): `Promise`<`unknown`\>

**`Description`**

异步获取自定义数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<`unknown`\>

之前保存的自定义数据

___

### asyncGetPlayerData

▸ **asyncGetPlayerData**(`player`): `Promise`<`unknown`\>

**`Description`**

异步获取玩家数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Gameplay.Player.md) | 玩家对象 |

#### Returns

`Promise`<`unknown`\>

保存的玩家数据

___

### asyncRemoveCustomData

▸ **asyncRemoveCustomData**(`key`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

**`Description`**

异步删除自定义数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型键 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

数据删除状态

___

### asyncRemovePlayerData

▸ **asyncRemovePlayerData**(`player`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

**`Description`**

异步删除用户数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Gameplay.Player.md) | 玩家对象 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

数据储存状态

___

### asyncSetCustomData

▸ **asyncSetCustomData**(`key`, `value`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

**`Description`**

异步设置自定义数据

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 字符串类型的键，用来唯一标识存储的数据。 |
| `value` | `unknown` | 任意类型的数据 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

数据储存状态

___

### asyncSetPlayerData

▸ **asyncSetPlayerData**(`player`, `data`): `Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

**`Description`**

异步设置自定义数据

**`Effect`**

只在服务端调用生效

**`Precautions`**

每个玩家在每一个游戏中允许最多存储16Kb的编码数据。超过此限制的任何数据都不能保证被存储。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `player` | [`Player`](../classes/Gameplay.Gameplay.Player.md) | 玩家对象 |
| `data` | `unknown` | 要保存的数据 |

#### Returns

`Promise`<[`DataStorageResultCode`](../enums/DataStorage.DataStorage.DataStorageResultCode.md)\>

设置操作结果

___

### setTemporaryStorage

▸ **setTemporaryStorage**(`isTemporary`): `void`

**`Description`**

设置数据存储环境是否是临时的

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isTemporary` | `boolean` | true代表临时存储，数据在游戏服务器进程中，游戏退出时数据被删除。false为永久存储，数据存储在专用服务器，游戏退出时数据不会被删除。 |

#### Returns

`void`

___

### sizeOfData

▸ **sizeOfData**(`data`): `number`

**`Description`**

返回data的当前大小。单位为bytes（字节）。

**`Effect`**

只在服务端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `unknown` |  数据键值对对象。 |

#### Returns

`number`

数据大小
