[Extension](../modules/Extension.Extension.md) / ObjPool

# ObjPool<T\> <Badge type="tip" text="Class" />

**`Description`**

对象池

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

| Methods |
| :-----|
| **[clear](Extension.Extension.ObjPool.md#clear)**(): `void` <br> 清除池中对象|
| **[despawn](Extension.Extension.ObjPool.md#despawn)**(`T`): `void` <br> 归还一个对象|
| **[spawn](Extension.Extension.ObjPool.md#spawn)**(): `T` <br> 生成一个对象|

**`Description`**

构造一个对象池

**`Effect`**

调用端生效

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createObj` | () => `T` |  创建新对象的回调 |
| `onReset` | (`obj`: `T`) => `void` |  重置对象的回调 |
| `onDestroy` | (`obj`: `T`) => `void` |  销毁对象的回调 |
| `initNum?` | `number` |  默认缓存对象数量 default: 2 |

## Methods

### clear

▸ **clear**(): `void`

**`Description`**

清除池中对象

**`Effect`**

调用端生效

#### Returns

`void`

___

### despawn

▸ **despawn**(`obj`): `void`

**`Description`**

归还一个对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` |  对象 |

#### Returns

`void`

___

### spawn

▸ **spawn**(): `T`

**`Description`**

生成一个对象

**`Effect`**

调用端生效

#### Returns

`T`

对象
