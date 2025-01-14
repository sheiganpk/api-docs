[Service](../modules/Service.Service.md) / EffectService

# EffectService <Badge type="tip" text="Class" />

**`Instance`**

**`Description`**

特效管理器

## Table of contents

| Methods |
| :-----|
| **[clearAll](Service.Service.EffectService.md#clearall)**(): `void` <br> 停止所有特效，并释放所有特效资源|
| **[getEffectGameObject](Service.Service.EffectService.md#geteffectgameobject)**(`number`): `Promise`<[`Particle`](Gameplay.Gameplay.Particle.md)\> <br> 根据播放id获取一个特效对象|
| **[playEffectAtLocation](Service.Service.EffectService.md#playeffectatlocation)**(`string`, [`Vector`](Type.Type.Vector.md), `number`, [`Rotation`](Type.Type.Rotation.md), [`Vector`](Type.Type.Vector.md)): `number` <br> 在指定位置播放特效|
| **[playEffectOnGameObject](Service.Service.EffectService.md#playeffectongameobject)**(`string`, `GameObject`, `number`, [`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md), [`Vector`](Type.Type.Vector.md)): `number` <br> 在一个GameObject上播放特效|
| **[playEffectOnPlayer](Service.Service.EffectService.md#playeffectonplayer)**(`string`, [`Player`](Gameplay.Gameplay.Player.md) \, [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md), `number`, [`Vector`](Type.Type.Vector.md), [`Rotation`](Type.Type.Rotation.md), [`Vector`](Type.Type.Vector.md)): `number` <br> 在一个角色的挂点上播放特效|
| **[stopAllEffect](Service.Service.EffectService.md#stopalleffect)**(): `void` <br> 停止所有特效|
| **[stopEffect](Service.Service.EffectService.md#stopeffect)**(`number`): `void` <br> 停止一个特效的播放|
| **[stopEffectFromHost](Service.Service.EffectService.md#stopeffectfromhost)**(`string`, `GameObject` \): `void` <br> 停止目标对象上所有资源Id的特效|
| **[getInstance](Service.Service.EffectService.md#getinstance)**(): [`EffectService`](Service.Service.EffectService.md) <br> 获取特效管理器全局实例|

## Methods

### clearAll

▸ **clearAll**(): `void`

**`Description`**

停止所有特效，并释放所有特效资源

**`Effect`**

调用端生效

#### Returns

`void`

___

### getEffectGameObject

▸ **getEffectGameObject**(`playId`): `Promise`<[`Particle`](Gameplay.Gameplay.Particle.md)\>

**`Description`**

根据播放id获取一个特效对象

**`Effect`**

客户端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` |  播放id |

#### Returns

`Promise`<[`Particle`](Gameplay.Gameplay.Particle.md)\>

Sound对象的gameObject

___

### playEffectAtLocation

▸ **playEffectAtLocation**(`resId`, `location`, `loop?`, `rotation?`, `scale?`): `number`

**`Description`**

在指定位置播放特效

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` |  特效资源Id |
| `location` | [`Vector`](Type.Type.Vector.md) |  世界坐标 |
| `loop?` | `number` |  循环方式(0为无限, 正数为循环次数，负数为循环时间(单位:秒)) default: 1 |
| `rotation?` | [`Rotation`](Type.Type.Rotation.md) |  旋转 default: Type.Rotation.zero |
| `scale?` | [`Vector`](Type.Type.Vector.md) |  缩放 default: Type.Vector.one |

#### Returns

`number`

本次播放的唯一标识，可用于停止

___

### playEffectOnGameObject

▸ **playEffectOnGameObject**(`resId`, `target`, `loop?`, `offset?`, `rotation?`, `scale?`): `number`

**`Description`**

在一个GameObject上播放特效

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` |  特效资源Id |
| `target` | `GameObject` |  目标GameObject \| 目标GameObject的guid |
| `loop?` | `number` |  循环方式(0为无限, 正数为循环次数，负数为循环时间(单位:秒)) default: 1 |
| `offset?` | [`Vector`](Type.Type.Vector.md) |  坐标偏移 default: Type.Vector.zero |
| `rotation?` | [`Rotation`](Type.Type.Rotation.md) |  旋转 default: Type.Rotation.zero |
| `scale?` | [`Vector`](Type.Type.Vector.md) |  缩放 default: Type.Vector.one |

#### Returns

`number`

本次播放的唯一标识，可用于停止

___

### playEffectOnPlayer

▸ **playEffectOnPlayer**(`resId`, `target`, `slotType`, `loop?`, `offset?`, `rotation?`, `scale?`): `number`

**`Description`**

在一个角色的挂点上播放特效

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` |  特效资源Id |
| `target` | [`Player`](Gameplay.Gameplay.Player.md) \| [`Humanoid`](Gameplay.Gameplay.Humanoid.md) |  玩家\|npc |
| `slotType` | [`SlotType`](../enums/Gameplay.Gameplay.SlotType.md) |  挂点类型 |
| `loop?` | `number` |  循环方式(0为无限, 正数为循环次数，负数为循环时间(单位:秒)) default: 1 |
| `offset?` | [`Vector`](Type.Type.Vector.md) |  坐标偏移 default: Type.Vector.zero |
| `rotation?` | [`Rotation`](Type.Type.Rotation.md) |  旋转 default: Type.Rotation.zero |
| `scale?` | [`Vector`](Type.Type.Vector.md) |  缩放 default: Type.Vector.one |

#### Returns

`number`

本次播放的唯一标识，可用于停止

___

### stopAllEffect

▸ **stopAllEffect**(): `void`

**`Description`**

停止所有特效

**`Effect`**

调用端生效|服务端调用自动广播

#### Returns

`void`

___

### stopEffect

▸ **stopEffect**(`playId`): `void`

**`Description`**

停止一个特效的播放

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `playId` | `number` |  播放的唯一标识 |

#### Returns

`void`

___

### stopEffectFromHost

▸ **stopEffectFromHost**(`resId`, `target?`): `void`

**`Description`**

停止目标对象上所有资源Id的特效

**`Effect`**

调用端生效|服务端调用自动广播

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resId` | `string` |  特效资源Id |
| `target?` | `GameObject` \| [`Player`](Gameplay.Gameplay.Player.md) \| [`Humanoid`](Gameplay.Gameplay.Humanoid.md) |  目标对象(Player或者GameObject) default: undefined |

#### Returns

`void`

___

### getInstance

▸ `Static` **getInstance**(): [`EffectService`](Service.Service.EffectService.md)

**`Description`**

获取特效管理器全局实例

**`Effect`**

调用端生效

#### Returns

[`EffectService`](Service.Service.EffectService.md)

特效管理器全局实例
