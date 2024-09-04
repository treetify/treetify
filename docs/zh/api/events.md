# 事件

The Events API of treetify

## checkboxChange

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

  - **$node**

    - **Type:** `object`

    作为 jQuery 元素的节点对象

  - **record**

    - **Type:** `object`

    记录数据

  - **state**

    - **Type:** `string`

    复选框的新状态

当复选框状态改变时触发事件。

**Example:**

```html
<div id="tree" data-source="/Locations/Get" data-checkboxes="true"></div>
<script>
  var tree = $('#tree').tree()
  tree.on('checkboxChange', function (e, $node, record, state) {
    alert('The new state of record ' + record.text + ' is ' + state)
  })
</script>
```

## collapse

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

  - **$node**

    - **Type:** `object`

    作为 jQuery 元素的节点对象

  - **id**

    - **Type:** `string`

    记录id

节点折叠之前触发

## dataBinding

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

数据绑定发生之前触发的事件。

## dataBound

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

树中的数据加载后事件触发。

## destroying

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

树木被毁前发生火灾

## disable

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

  - **$node**

    - **Type:** `object`

    作为 jQuery 元素的节点对象

当树节点被禁用时，事件触发。

## enable

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

  - **$node**

    - **Type:** `object`

    作为 jQuery 元素的节点对象

事件在树节点启用时触发。

## expand

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

  - **$node**

    - **Type:** `object`

    作为 jQuery 元素的节点对象

  - **id**

    - **Type:** `string`

    记录id

事件在节点扩展之前触发。

## initialized

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

当树初始化时触发事件

## nodeDataBound

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

  - **node**

    - **Type:** `object`

    作为 jQuery 元素的节点对象

  - **id**

    - **Type:** `string`

    记录id

  - **record**

    - **Type:** `object`

    节点记录的数据

当数据绑定到节点时触发事件。

## nodeDrop

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

  - **id**

    - **Type:** `string`

    记录id

  - **parentId**

    - **Type:** `object`

    新父节点的 id

  - **orderNumber**

    - **Type:** `object`

    新的订单号

当节点被删除时触发事件。

## select

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

  - **node**

    - **Type:** `object`

    作为 jQuery 元素的节点对象

  - **id**

    - **Type:** `string`

    记录id

选择树节点后触发事件。

## unselect

- **Parameters:**

  - **e**

    - **Type:** `object`

    事件对象

  - **node**

    - **Type:** `object`

    作为 jQuery 元素的节点对象

  - **id**

    - **Type:** `string`

    记录id

取消选择树节点时触发事件
