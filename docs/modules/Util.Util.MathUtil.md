[Util](Util.Util.md) / MathUtil

# MathUtil <Badge type="tip" text="Namespace" />

## Table of contents

| Variables |
| :-----|
| **[D2R](Util.Util.MathUtil.md#d2r)**: `number` <br> 角度转换弧度参数|
| **[DBL\_DECIMAL\_DIG](Util.Util.MathUtil.md#dbl_decimal_dig)**: ``17`` <br> 序列化/反序列化浮点值所要求的十进制精度 (double)|
| **[DBL\_DIG](Util.Util.MathUtil.md#dbl_dig)**: ``15`` <br> 文本的往返转换中保留而不会因舍入或溢出发生改变的的十进制位数 (double)|
| **[DBL\_EPSILON](Util.Util.MathUtil.md#dbl_epsilon)**: ``2.220446049250313e-16`` <br> 1 和大于 1 的最小浮点数之间的差值。(double)|
| **[DBL\_HAS\_SUBNORM](Util.Util.MathUtil.md#dbl_has_subnorm)**: ``1`` <br> 指明类型是否支持非正规数值：-1 为不确定，0 为不支持，1 为支持。 (double)|
| **[DBL\_MANT\_DIG](Util.Util.MathUtil.md#dbl_mant_dig)**: ``53`` <br> 有效数字（尾数）的位数(double)|
| **[DBL\_MAX](Util.Util.MathUtil.md#dbl_max)**: ``1.7976931348623157e+308`` <br> 最大的有效浮点数的值（为正数），也即浮点数的最大值。(double)|
| **[DBL\_MAX\_10\_EXP](Util.Util.MathUtil.md#dbl_max_10_exp)**: ``308`` <br> 分别为能够使 10 的该整数减一次幂为可表示的有限的最大正整数 (double)|
| **[DBL\_MAX\_EXP](Util.Util.MathUtil.md#dbl_max_exp)**: ``1024`` <br> 最大二进制指数 (double)|
| **[DBL\_MIN](Util.Util.MathUtil.md#dbl_min)**: ``2.2250738585072014e-308`` <br> 最小规格化正数值 (double)|
| **[DBL\_MIN\_10\_EXP](Util.Util.MathUtil.md#dbl_min_10_exp)**: ``-307`` <br> 能够使 10 的该整数减一次幂为规格化的最小负整数 (double)|
| **[DBL\_MIN\_EXP](Util.Util.MathUtil.md#dbl_min_exp)**: ``-1021`` <br> 能够使FLT_RADIX 的该整数减一次幂为规格化的最小负整数 (double)|
| **[DBL\_RADIX](Util.Util.MathUtil.md#dbl_radix)**: ``2`` <br> 基数(进制)(double)|
| **[DBL\_TRUE\_MIN](Util.Util.MathUtil.md#dbl_true_min)**: ``5e-324`` <br> 最小正数值(double)|
| **[EPSILON](Util.Util.MathUtil.md#epsilon)**: ``1e-7`` <br> 最小误差数|
| **[FLOAT\_NON\_FRACTIONAL](Util.Util.MathUtil.md#float_non_fractional)**: ``8388608`` <br> 所有大于或等于此值的单精度浮点数都没有小数|
| **[FLT\_DECIMAL\_DIG](Util.Util.MathUtil.md#flt_decimal_dig)**: ``9`` <br> 序列化/反序列化浮点值所要求的十进制精度 (float)|
| **[FLT\_DIG](Util.Util.MathUtil.md#flt_dig)**: ``6`` <br> 文本的往返转换中保留而不会因舍入或溢出发生改变的的十进制位数 (float)|
| **[FLT\_EPSILON](Util.Util.MathUtil.md#flt_epsilon)**: ``1.192092896e-7`` <br> 1 和大于 1 的最小浮点数之间的差值。(float)|
| **[FLT\_GUARD](Util.Util.MathUtil.md#flt_guard)**: ``0`` <br> 算术结果中是否使用保护位(例如 0)|
| **[FLT\_HAS\_SUBNORM](Util.Util.MathUtil.md#flt_has_subnorm)**: ``1`` <br> 指明类型是否支持非正规数值：-1 为不确定，0 为不支持，1 为支持。|
| **[FLT\_MANT\_DIG](Util.Util.MathUtil.md#flt_mant_dig)**: ``24`` <br> 有效数字（尾数）的位数 (float)|
| **[FLT\_MAX](Util.Util.MathUtil.md#flt_max)**: ``3.402823466e+38`` <br> 最大的有效浮点数的值(为正数)，也即浮点数的最大值。(float)|
| **[FLT\_MAX\_10\_EXP](Util.Util.MathUtil.md#flt_max_10_exp)**: ``38`` <br> 转换成十进制形式后，规格化浮点数的指数的最大值（为正数）。 (float)|
| **[FLT\_MAX\_EXP](Util.Util.MathUtil.md#flt_max_exp)**: ``128`` <br> 最大二进制指数 (float)|
| **[FLT\_MIN](Util.Util.MathUtil.md#flt_min)**: ``1.175494351e-38`` <br> 最小正规值 (float)|
| **[FLT\_MIN\_10\_EXP](Util.Util.MathUtil.md#flt_min_10_exp)**: ``-37`` <br> 最小十进制指数 (float)|
| **[FLT\_MIN\_EXP](Util.Util.MathUtil.md#flt_min_exp)**: ``-125`` <br> 最小二进制指数 (float)|
| **[FLT\_NORMALIZE](Util.Util.MathUtil.md#flt_normalize)**: ``0`` <br> 指示应始终规范化浮点数。|
| **[FLT\_RADIX](Util.Util.MathUtil.md#flt_radix)**: ``2`` <br> 基数(进制)(float)|
| **[FLT\_TRUE\_MIN](Util.Util.MathUtil.md#flt_true_min)**: ``1.401298464e-45`` <br> 最小正数值 (float)|
| **[HALF\_PI](Util.Util.MathUtil.md#half_pi)**: ``1.57079632679`` <br> PI/2|
| **[INV\_PI](Util.Util.MathUtil.md#inv_pi)**: ``0.31830988618`` <br> 1/PI|
| **[R2D](Util.Util.MathUtil.md#r2d)**: `number` <br> 弧度转换角度参数|
| **[SIGN\_BIT](Util.Util.MathUtil.md#sign_bit)**: `number` <br> 字节偏移|

| Functions |
| :-----|
| **[clamp](Util.Util.MathUtil.md#clamp)**(`number`, `number`, `number`): `number` <br> 数值a在最小值和最大值之间，包括最小值和最大值|
| **[cos](Util.Util.MathUtil.md#cos)**(`number`): `number` <br> 计算cos值|
| **[degreesToRadians](Util.Util.MathUtil.md#degreestoradians)**(`number`): `number` <br> 根据输入的度数返回弧度值|
| **[fmod](Util.Util.MathUtil.md#fmod)**(`number`, `number`): `number` <br> 返回 数值x 除以 数值y 的余数|
| **[lerp](Util.Util.MathUtil.md#lerp)**(`number`, `number`, `number`): `number` <br> 基于 alpha 在 数值a 和 数值b 之间线性插值|
| **[radiansToDegrees](Util.Util.MathUtil.md#radianstodegrees)**(`number`): `number` <br> 根据输入的弧度值返回度数|
| **[randomFloat](Util.Util.MathUtil.md#randomfloat)**(`number`, `number`): `number` <br> 获取随机范围内浮点数[包含min, 不包含max)|
| **[randomInt](Util.Util.MathUtil.md#randomint)**(`number`, `number`): `number` <br> 获取随机范围内整数[包含min, 不包含max)|
| **[sin](Util.Util.MathUtil.md#sin)**(`number`): `number` <br> 计算sin值|
| **[tan](Util.Util.MathUtil.md#tan)**(`number`): `number` <br> 计算tan值|

## Variables

### D2R

• `Const` **D2R**: `number`

**`Description`**

角度转换弧度参数

___

### DBL\_DECIMAL\_DIG

• `Const` **DBL\_DECIMAL\_DIG**: ``17``

**`Description`**

序列化/反序列化浮点值所要求的十进制精度 (double)

___

### DBL\_DIG

• `Const` **DBL\_DIG**: ``15``

**`Description`**

文本的往返转换中保留而不会因舍入或溢出发生改变的的十进制位数 (double)

___

### DBL\_EPSILON

• `Const` **DBL\_EPSILON**: ``2.220446049250313e-16``

**`Description`**

1 和大于 1 的最小浮点数之间的差值。(double)

___

### DBL\_HAS\_SUBNORM

• `Const` **DBL\_HAS\_SUBNORM**: ``1``

**`Description`**

指明类型是否支持非正规数值：-1 为不确定，0 为不支持，1 为支持。 (double)

___

### DBL\_MANT\_DIG

• `Const` **DBL\_MANT\_DIG**: ``53``

**`Description`**

有效数字（尾数）的位数(double)

___

### DBL\_MAX

• `Const` **DBL\_MAX**: ``1.7976931348623157e+308``

**`Description`**

最大的有效浮点数的值（为正数），也即浮点数的最大值。(double)

___

### DBL\_MAX\_10\_EXP

• `Const` **DBL\_MAX\_10\_EXP**: ``308``

**`Description`**

分别为能够使 10 的该整数减一次幂为可表示的有限的最大正整数 (double)

___

### DBL\_MAX\_EXP

• `Const` **DBL\_MAX\_EXP**: ``1024``

**`Description`**

最大二进制指数 (double)

___

### DBL\_MIN

• `Const` **DBL\_MIN**: ``2.2250738585072014e-308``

**`Description`**

最小规格化正数值 (double)

___

### DBL\_MIN\_10\_EXP

• `Const` **DBL\_MIN\_10\_EXP**: ``-307``

**`Description`**

能够使 10 的该整数减一次幂为规格化的最小负整数 (double)

___

### DBL\_MIN\_EXP

• `Const` **DBL\_MIN\_EXP**: ``-1021``

**`Description`**

能够使FLT_RADIX 的该整数减一次幂为规格化的最小负整数 (double)

___

### DBL\_RADIX

• `Const` **DBL\_RADIX**: ``2``

**`Description`**

基数(进制)(double)

___

### DBL\_TRUE\_MIN

• `Const` **DBL\_TRUE\_MIN**: ``5e-324``

**`Description`**

最小正数值(double)

___

### EPSILON

• `Const` **EPSILON**: ``1e-7``

**`Description`**

最小误差数

___

### FLOAT\_NON\_FRACTIONAL

• `Const` **FLOAT\_NON\_FRACTIONAL**: ``8388608``

**`Description`**

所有大于或等于此值的单精度浮点数都没有小数

___

### FLT\_DECIMAL\_DIG

• `Const` **FLT\_DECIMAL\_DIG**: ``9``

**`Description`**

序列化/反序列化浮点值所要求的十进制精度 (float)

___

### FLT\_DIG

• `Const` **FLT\_DIG**: ``6``

**`Description`**

文本的往返转换中保留而不会因舍入或溢出发生改变的的十进制位数 (float)

___

### FLT\_EPSILON

• `Const` **FLT\_EPSILON**: ``1.192092896e-7``

**`Description`**

1 和大于 1 的最小浮点数之间的差值。(float)

___

### FLT\_GUARD

• `Const` **FLT\_GUARD**: ``0``

**`Description`**

算术结果中是否使用保护位(例如 0)

___

### FLT\_HAS\_SUBNORM

• `Const` **FLT\_HAS\_SUBNORM**: ``1``

**`Description`**

指明类型是否支持非正规数值：-1 为不确定，0 为不支持，1 为支持。

___

### FLT\_MANT\_DIG

• `Const` **FLT\_MANT\_DIG**: ``24``

**`Description`**

有效数字（尾数）的位数 (float)

___

### FLT\_MAX

• `Const` **FLT\_MAX**: ``3.402823466e+38``

**`Description`**

最大的有效浮点数的值(为正数)，也即浮点数的最大值。(float)

___

### FLT\_MAX\_10\_EXP

• `Const` **FLT\_MAX\_10\_EXP**: ``38``

**`Description`**

转换成十进制形式后，规格化浮点数的指数的最大值（为正数）。 (float)

___

### FLT\_MAX\_EXP

• `Const` **FLT\_MAX\_EXP**: ``128``

**`Description`**

最大二进制指数 (float)

___

### FLT\_MIN

• `Const` **FLT\_MIN**: ``1.175494351e-38``

**`Description`**

最小正规值 (float)

___

### FLT\_MIN\_10\_EXP

• `Const` **FLT\_MIN\_10\_EXP**: ``-37``

**`Description`**

最小十进制指数 (float)

___

### FLT\_MIN\_EXP

• `Const` **FLT\_MIN\_EXP**: ``-125``

**`Description`**

最小二进制指数 (float)

___

### FLT\_NORMALIZE

• `Const` **FLT\_NORMALIZE**: ``0``

**`Description`**

指示应始终规范化浮点数。

___

### FLT\_RADIX

• `Const` **FLT\_RADIX**: ``2``

**`Description`**

基数(进制)(float)

___

### FLT\_TRUE\_MIN

• `Const` **FLT\_TRUE\_MIN**: ``1.401298464e-45``

**`Description`**

最小正数值 (float)

___

### HALF\_PI

• `Const` **HALF\_PI**: ``1.57079632679``

**`Description`**

PI/2

___

### INV\_PI

• `Const` **INV\_PI**: ``0.31830988618``

**`Description`**

1/PI

___

### R2D

• `Const` **R2D**: `number`

**`Description`**

弧度转换角度参数

___

### SIGN\_BIT

• `Const` **SIGN\_BIT**: `number`

**`Description`**

字节偏移

## Functions

### clamp

▸ **clamp**(`a`, `min`, `max`): `number`

**`Description`**

数值a在最小值和最大值之间，包括最小值和最大值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 数值a |
| `min` | `number` | 最小值 |
| `max` | `number` | 最大值 |

#### Returns

`number`

计算结果

___

### cos

▸ **cos**(`a`): `number`

**`Description`**

计算cos值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 待机算的数值a |

#### Returns

`number`

cos值

___

### degreesToRadians

▸ **degreesToRadians**(`a`): `number`

**`Description`**

根据输入的度数返回弧度值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 度数 |

#### Returns

`number`

弧度值

___

### fmod

▸ **fmod**(`x`, `y`): `number`

**`Description`**

返回 数值x 除以 数值y 的余数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | 数值x |
| `y` | `number` | 数值y |

#### Returns

`number`

数值x 除以 数值y 的余数

___

### lerp

▸ **lerp**(`a`, `b`, `alpha`): `number`

**`Description`**

基于 alpha 在 数值a 和 数值b 之间线性插值

**`Effect`**

调用端生效

**`Precautions`**

alpha=0 时 数值a 的 100% 和 alpha=1 时 数值b 的 100%

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 数值a |
| `b` | `number` | 数值b |
| `alpha` | `number` | 插值 |

#### Returns

`number`

计算结果

___

### radiansToDegrees

▸ **radiansToDegrees**(`a`): `number`

**`Description`**

根据输入的弧度值返回度数

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 弧度值 |

#### Returns

`number`

度数

___

### randomFloat

▸ **randomFloat**(`min`, `max`): `number`

**`Description`**

获取随机范围内浮点数[包含min, 不包含max)

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | 最小值 |
| `max` | `number` | 最大值 |

#### Returns

`number`

随机范围内的浮点数

___

### randomInt

▸ **randomInt**(`min`, `max`): `number`

**`Description`**

获取随机范围内整数[包含min, 不包含max)

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | 最小值 |
| `max` | `number` | 最大值 |

#### Returns

`number`

随机范围内的整数

___

### sin

▸ **sin**(`a`): `number`

**`Description`**

计算sin值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 待机算的数值a |

#### Returns

`number`

sin值

___

### tan

▸ **tan**(`a`): `number`

**`Description`**

计算tan值

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `number` | 待机算的数值a |

#### Returns

`number`

tan值
