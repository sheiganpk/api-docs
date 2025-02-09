[UI](../modules/UI.UI.md) / UIBehavior

# UIBehavior <Badge type="tip" text="Class" />

**`Description`**

UI的驱动脚本基类

## Table of contents

| Accessors |
| :-----|
| **[canUpdate](UI.UI.UIBehavior.md#canupdate)**(): `boolean` <br> 是否能触发onUpdate函数|
| **[fullScreen](UI.UI.UIBehavior.md#fullscreen)**(`boolean`): `void` <br> 设置随父节点全屏适配,会验证父节点大小以保证跟随父节点的大小|
| **[layer](UI.UI.UIBehavior.md#layer)**(): `number` <br> 获取UI的Layer层级,显示可能会影响到zOrder,使用UIManager显示UI时，|
| **[rootCanvas](UI.UI.UIBehavior.md#rootcanvas)**(): [`Canvas`](UI.UI.Canvas.md) <br> 获取UI的根Canvas节点|
| **[uiObject](UI.UI.UIBehavior.md#uiobject)**(): [`Widget`](UI.UI.Widget.md) <br> 获取脚本挂载的UI对象|
| **[uiWidgetBase](UI.UI.UIBehavior.md#uiwidgetbase)**(): [`UserWidget`](UI.UI.UserWidget.md) <br> 转化UIObject 为指定UserWidget对象|
| **[visible](UI.UI.UIBehavior.md#visible)**(): `boolean` <br> 获取UI是否显示|

| Methods |
| :-----|
| **[destroy](UI.UI.UIBehavior.md#destroy)**(): `void` <br> 销毁UI对象|
| **[detectDrag](UI.UI.UIBehavior.md#detectdrag)**([`Keys`](../enums/Type.Type.Keys.md)): [`EventReply`](UI.UI.EventReply.md) <br> 触发DragDrop事件的检测|
| **[detectDragIfPressed](UI.UI.UIBehavior.md#detectdragifpressed)**([`PointerEvent`](UI.UI.PointerEvent.md), [`Keys`](../enums/Type.Type.Keys.md)): [`EventReply`](UI.UI.EventReply.md) <br> 如果事件检测通过就触发DragDrop事件的回复|
| **[newDragDrop](UI.UI.UIBehavior.md#newdragdrop)**([`Widget`](UI.UI.Widget.md), `string`, `any`, [`DragPivot`](../enums/UI.UI.DragPivot.md), [`Vector2`](Type.Type.Vector2.md)): [`DragDropOperation`](UI.UI.DragDropOperation.md) <br> 创建DragDrop事件|
| **[setVisible](UI.UI.UIBehavior.md#setvisible)**(`boolean` \, `any`[]): `void` <br> 设置UI是否显示,会触发绑定的脚本的OnShow/OnHide事件，可以传递参数|
| **[addBehavior](UI.UI.UIBehavior.md#addbehavior)**(`string`, `any`): `void` <br> 添加一个全局的行为记录|
| **[clearBehavior](UI.UI.UIBehavior.md#clearbehavior)**(): `void` <br> 清空全局的行为记录|
| **[getBehavior](UI.UI.UIBehavior.md#getbehavior)**(`string`): `any` <br> 获取一个全局的行为记录|
| **[removeBehavior](UI.UI.UIBehavior.md#removebehavior)**(`string`): `void` <br> 移除一个全局的行为记录|

## Accessors

### canUpdate

• `get` **canUpdate**(): `boolean`

**`Description`**

是否能触发onUpdate函数

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回能否触发的标志

• `set` **canUpdate**(`bCanUpdate`): `void`

**`Description`**

设置是否能触发onUpdate函数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bCanUpdate` | `boolean` | 能否触发的标志 |

#### Returns

`void`

___

### fullScreen

• `set` **fullScreen**(`inFull`): `void`

**`Description`**

设置随父节点全屏适配,会验证父节点大小以保证跟随父节点的大小

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inFull` | `boolean` |  设置为随父节点大小全屏适配 |

#### Returns

`void`

___

### layer

• `get` **layer**(): `number`

**`Description`**

获取UI的Layer层级,显示可能会影响到zOrder,使用UIManager显示UI时，
会根据Layer层级动态设置zOrder，每一次调用都会重新计算当前layer的新zOrder，确保UI位于当前层级的顶端

**`Effect`**

只在客户端调用生效

**`Example`**

使用示例: 一般来说，可以使用内置定义好的，也可以是自定义拓展层级
```ts
Extension.UIManager.Instance.show(UIBehavior,UIBehavior.layer)
// 内置定义好的层级
[
Extension.UILayerScene,  //场景层 zOrder开始于0
Extension.UILayerBottom, //底层 zOrder开始于100000
Extension.UILayerMiddle, //中层 zOrder开始于200000
Extension.UILayerOwn     //独享层(调用此层会自动隐藏Bottom和Middle层) zOrder开始于300000
Extension.UILayerTop     //顶层 zOrder开始于400000
Extension.UILayerDialog  //对话层 zOrder开始于500000
Extension.UILayerSystem  //系统层 zOrder开始于600000
Extension.UILayerError   //错误层 这个层级不可以使用，需要增加层级可以使用Extension.UIManager.Instance.addUILayerMap zOrder开始于700000
]
```

#### Returns

`number`

Layer层级

• `set` **layer**(`inLayer`): `void`

**`Description`**

设置UI的所在的Layer层级,显示可能会影响到zOrder,使用UIManager显示UI时，
会根据Layer层级动态设置zOrder，每一次调用都会重新计算当前layer的新zOrder，确保UI位于当前层级的顶端

**`Effect`**

只在客户端调用生效

**`Example`**

使用示例: 一般来说，可以使用内置定义好的，也可以自定义拓展层级
```ts
this.layer = Extension.UILayerScene;
// 内置定义好的层级
[
Extension.UILayerScene,  //场景层 zOrder开始于0
Extension.UILayerBottom, //底层 zOrder开始于100000
Extension.UILayerMiddle, //中层 zOrder开始于200000
Extension.UILayerOwn     //独享层(调用此层会自动隐藏Bottom和Middle层) zOrder开始于300000
Extension.UILayerTop     //顶层 zOrder开始于400000
Extension.UILayerDialog  //对话层 zOrder开始于500000
Extension.UILayerSystem  //系统层 zOrder开始于600000
Extension.UILayerError   //错误层 这个层级不可以使用，需要增加层级可以使用Extension.UIManager.Instance.addUILayerMap zOrder开始于700000
]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inLayer` | `number` |  设置Layer层级 |

#### Returns

`void`

___

### rootCanvas

• `get` **rootCanvas**(): [`Canvas`](UI.UI.Canvas.md)

**`Description`**

获取UI的根Canvas节点

**`Effect`**

只在客户端调用生效

#### Returns

[`Canvas`](UI.UI.Canvas.md)

返回canvas节点

___

### uiObject

• `get` **uiObject**(): [`Widget`](UI.UI.Widget.md)

**`Description`**

获取脚本挂载的UI对象

#### Returns

[`Widget`](UI.UI.Widget.md)

脚本挂载的UI对象

___

### uiWidgetBase

• `get` **uiWidgetBase**(): [`UserWidget`](UI.UI.UserWidget.md)

**`Description`**

转化UIObject 为指定UserWidget对象

**`Effect`**

只在客户端调用生效

#### Returns

[`UserWidget`](UI.UI.UserWidget.md)

返回转化指定UserWidget对象

___

### visible

• `get` **visible**(): `boolean`

**`Description`**

获取UI是否显示

**`Effect`**

只在客户端调用生效

#### Returns

`boolean`

返回是否可见

• `set` **visible**(`inVisible`): `void`

**`Description`**

设置UI是否显示,会触发绑定的脚本的OnShow/OnHide事件，需要传递参数的可以使用setVisible方法

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inVisible` | `boolean` |  设置是否可见 可见设置为SelfHitTestInvisible,不可见设置为Collapsed |

#### Returns

`void`

## Methods

### destroy

▸ **destroy**(): `void`

**`Description`**

销毁UI对象

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### detectDrag

▸ **detectDrag**(`dragKey`): [`EventReply`](UI.UI.EventReply.md)

**`Description`**

触发DragDrop事件的检测

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dragKey` | [`Keys`](../enums/Type.Type.Keys.md) | 触发按键 default:Type.Keys |

#### Returns

[`EventReply`](UI.UI.EventReply.md)

返回触发的事件回复

___

### detectDragIfPressed

▸ **detectDragIfPressed**(`inPointEvent`, `dragKey`): [`EventReply`](UI.UI.EventReply.md)

**`Description`**

如果事件检测通过就触发DragDrop事件的回复

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inPointEvent` | [`PointerEvent`](UI.UI.PointerEvent.md) | 传递触发的事件信息 |
| `dragKey` | [`Keys`](../enums/Type.Type.Keys.md) | 触发按键 |

#### Returns

[`EventReply`](UI.UI.EventReply.md)

返回触发的事件回复

___

### newDragDrop

▸ **newDragDrop**(`inVisualWidget`, `inTag?`, `inPayLoad?`, `inPivot?`, `inOffset?`): [`DragDropOperation`](UI.UI.DragDropOperation.md)

**`Description`**

创建DragDrop事件

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inVisualWidget` | [`Widget`](UI.UI.Widget.md) | 拖拽显示的UI控件 |
| `inTag?` | `string` | 标签文本 default:"" |
| `inPayLoad?` | `any` | 拖拽事件数据信息 default:null |
| `inPivot?` | [`DragPivot`](../enums/UI.UI.DragPivot.md) | 拖拽显示UI的锚点 default:UIType.DragPivot.TopLeft |
| `inOffset?` | [`Vector2`](Type.Type.Vector2.md) | 拖拽显示UI相对于锚点的偏移 default:vector2(0,0) |

#### Returns

[`DragDropOperation`](UI.UI.DragDropOperation.md)

返回触发的事件回复

___

### setVisible

▸ **setVisible**(`inVisible`, `...params`): `void`

**`Description`**

设置UI是否显示,会触发绑定的脚本的OnShow/OnHide事件，可以传递参数

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inVisible` | `boolean` \| [`SlateVisibility`](../enums/UI.UI.SlateVisibility.md) |  设置是否可见,如果是boolean类型设置为SelfHitTestInvisible,不可见设置为Collapsed， 否则的话就是按照枚举拉设置具体的显示类型 |
| `...params` | `any`[] |  传递给onShow的参数 |

#### Returns

`void`

___

### addBehavior

▸ `Static` **addBehavior**(`key`, `value`): `void`

**`Description`**

添加一个全局的行为记录

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` |  行为标记 |
| `value` | `any` |  行为值 |

#### Returns

`void`

___

### clearBehavior

▸ `Static` **clearBehavior**(): `void`

**`Description`**

清空全局的行为记录

**`Effect`**

只在客户端调用生效

#### Returns

`void`

___

### getBehavior

▸ `Static` **getBehavior**(`key`): `any`

**`Description`**

获取一个全局的行为记录

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` |  行为标记 |

#### Returns

`any`

返回一个行为

___

### removeBehavior

▸ `Static` **removeBehavior**(`key`): `void`

**`Description`**

移除一个全局的行为记录

**`Effect`**

只在客户端调用生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` |  行为标记 |

#### Returns

`void`
