# methods

treetify的方法API。

调用方法语法：`$('#selectory').treetify('method',parameter)`

## addNode

- **Parameters:**

  - **data**

    - **Type:** `object`

    节点数据

  - **parentNode**

    - **Type:** `object`

    父节点作为 jquery 对象。

  - **position**

    - **Type:** `Number`

    需要添加新节点的位置。

- **Returns:** `jQuery object`

将节点添加到树中。

## check

- **Parameters:**

  - **node**

    - **Type:** `object`

    作为 jQuery 对象的节点

- **Returns:** `tree jQuery object`

勾选树节点。

## checkAll

- **Parameters:**`undefined`

- **Returns:** `tree jQuery object`

勾选所有树节点。

## collapse

- **Parameters:**

  - **node**

    - **Type:** `object`

    作为 jQuery 对象的节点

  - **cascade**

    - **Type:** `boolean`
    - **Default:** `false`

    是否级联折叠所有子项,如果设置为true,则会同时折叠所有的子项

- **Returns:** `jQuery object`

从树中折叠节点。

## collapseAll

- **Parameters:**`undefined`

- **Returns:** `jQuery object`

折叠所有的节点

## destroy

- **Parameters:**`undefined`

- **Returns:** `jQuery object`

销毁实例

## disable

- **Parameters:**

  - **node**

    - **Type:** `object`

    作为 jQuery 对象的节点

  - **cascade**

    - **Type:** `boolean`
    - **Default:** `true`

    禁用所有子项。默认设置为 true。

- **Returns:** `jQuery object`

从树中禁用节点。

## enableAll

- **Parameters:**`undefined`

- **Returns:** `jQuery object`

启用树中的所有节点。

## expand

- **Parameters:**

  - **node**

    - **Type:** `object`

    作为 jQuery 对象的节点

  - **cascade**

    - **Type:** `boolean`
    - **Default:** `false`

    禁用所有子项。默认设置为 false。

- **Returns:** `jQuery object`

从树中展开节点。

## expandAll

- **Parameters:**`undefined`
- **Returns:** `jQuery object`

从树中展开所有节点。

## getAll

- **Parameters:**`undefined`
- **Returns:** `Array`

返回包含树中所有记录的数组。

## getCheckedNodes

- **Parameters:**`undefined`
- **Returns:** `Array`

获取所有已检查节点的 ID

## getChildren

- **Parameters:**

  - **node**

    - **Type:** `object`

    作为 jQuery 对象的节点

  - **cascade**

    - **Type:** `boolean`
    - **Default:** `true`

    级联所有的子项,默认设置为 true

- **Returns:** `Array`

返回包含所有子项 id 的数组。

## getDataById

- **Parameters:**

  - **id**

    - **Type:** `string|number`

    需要返回的记录id

- **Returns:** `object`

根据记录的id返回节点数据。

## getDataByText

- **Parameters:**

  - **text**

    - **Type:** `string`

    需要返回的记录文本

- **Returns:** `object`

通过节点名称获取数据

## getSelections

- **Parameters:**`undefined`

- **Returns:** `array`

返回包含所选节点的 ID 的数组。

## parents

- **Parameters:**

  - **id**

    - **Type:** `string`

    目标节点的id

- **Returns:** `array`

返回包含所有父母姓名的数组。

## reload

- **Parameters:**

  - **params**

    - **Type:** `object`

    需要发送到服务器的参数。仅适用于远程数据源。

- **Returns:** `jQuery object`

重新加载树。

## removeNode

- **Parameters:**

  - **node**

    - **Type:** `object`

    作为 jQuery 对象的节点

- **Returns:** `jQuery object`

从树中删除节点

## render

- **Parameters:**

  - **response**

    - **Type:** `object`

    包含需要加载到树中的数据的对象。

- **Returns:** `tree`

在树中渲染数据

## select

- **Parameters:**

  - **node**

    - **Type:** `object`

    该节点作为 jquery 对象。

- **Returns:** `jQuery Object`

从树中选择节点。

## selectAll

- **Parameters:**`undefined`

- **Returns:** `jQuery Object`

选择所有树节点

## uncheck

- **Parameters:**

  - **node**

    - **Type:** `object`

    该节点作为 jquery 对象。

- **Returns:** `tree jQuery Object`

取消选中树节点。

## uncheckAll

- **Parameters:**`undefined`

- **Returns:** `tree jQuery Object`

取消选中所有树节点

## unselect

- **Parameters:**

  - **node**

    - **Type:** `object`

    该节点作为 jquery 对象。

- **Returns:** `jQuery Object`

取消选中树节点。

## unselectAll

- **Parameters:**`undefined`

- **Returns:** `jQuery Object`

取消选择所有树节点

## updateNode

- **Parameters:**

  - **id**

    - **Type:** `string`

    需要更新的节点的id

  - **record**

    - **Type:** `object`

    作为 jQuery 对象的节点

- **Returns:** `jQuery Object`

从树中更新节点。
