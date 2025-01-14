[UI](../modules/UI.UI.md) / TabGroup

# TabGroup<T\> <Badge type="tip" text="Class" />

**`Description`**

选项卡组

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

## Table of contents

| Accessors |
| :-----|
| **[currentIndex](UI.UI.TabGroup.md#currentindex)**(): `number` <br> 当前选择的标签索引|

| Methods |
| :-----|
| **[init](UI.UI.TabGroup.md#init)**((`btn`: `T`, `isSelect`: `boolean`) => `void`, (`index`: `number`) => `void`, `any`, `number`): `void` <br> 初始化|
| **[select](UI.UI.TabGroup.md#select)**(`number`, `boolean`): `boolean` <br> 设置当前的标签|
| **[setSelectableChecker](UI.UI.TabGroup.md#setselectablechecker)**((`index`: `number`) => `boolean`, `any`): `void` <br> 设置该标签是否可以切换的检测方法|

构造

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tabArr` | `T`[] | 标签的按钮数组 |

## Accessors

### currentIndex

• `get` **currentIndex**(): `number`

**`Description`**

当前选择的标签索引

**`Effect`**

只在客户端调用生效

#### Returns

`number`

当前标签

## Methods

### init

▸ **init**(`tabStyleHandle`, `selectCallBack`, `thisArg`, `defaultIndex?`): `void`

**`Description`**

初始化

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tabStyleHandle` | (`btn`: `T`, `isSelect`: `boolean`) => `void` | 设置标签的样式方法（方法参数：按钮） |
| `selectCallBack` | (`index`: `number`) => `void` | 选择标签的回调方法 |
| `thisArg` | `any` | 域 |
| `defaultIndex?` | `number` | 默认选择的标签索引 default:0 |

#### Returns

`void`

___

### select

▸ **select**(`index`, `ignoreSame?`): `boolean`

**`Description`**

设置当前的标签

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | 标签索引 |
| `ignoreSame?` | `boolean` | 是否忽略相同索引 default:true |

#### Returns

`boolean`

是否成功

___

### setSelectableChecker

▸ **setSelectableChecker**(`selectChecker`, `thisArg`): `void`

**`Description`**

设置该标签是否可以切换的检测方法

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectChecker` | (`index`: `number`) => `boolean` | 判断方法 |
| `thisArg` | `any` | 域 |

#### Returns

`void`
