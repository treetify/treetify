# 选项

treetify的选项API。

treetify选项在`jQuery.fn.treetify.defaults`中定义。

## autoLoad

- **Type:** `Boolean`
- **Default:** `true`

启用此设置后，树的内容将在创建树后自动加载。

## border

- **Type:** `Boolean`
- **Default:** `false`

当启用此设置时，树的内容将被边框包裹。

## cascadeCheck

- **Type:** `Boolean`
- **Default:** `true`

此设置启用子级的级联选中和取消选中

## cascadeSelection

- **Type:** `Boolean`
- **Default:** `false`

此设置启用子级的级联选择和取消选择

## checkboxes

- **Type:** `Boolean`
- **Default:** `undefined`

如果设置为 true，则为每个节点添加复选框。

## checkedField

- **Type:** `string`
- **Default:** `'checked'`

源字段的名称，指示复选框是否被选中。

## childrenField

- **Type:** `string`
- **Default:** `'children'`

子字段名称。

## dataSource

- **Type:** `string|object|array`
- **Default:** `undefined`

树的数据源。

如果设置为字符串，则树将使用此字符串作为向服务器发出 ajax 请求的 url。
如果设置为对象，则树将使用此对象作为 jquery ajax 函数的设置。
如果设置为数组，则树将使用数组作为树节点的数据。

**例子:本地数据源**

```html
<div id="tree"></div>
<script>
  $('#tree').tree({
    dataSource: [{ text: 'foo', children: [{ text: 'bar' }] }],
  })
</script>
```

**例子:远程数据源**

```html
<div id="tree"></div>
<script>
  $('#tree').tree({
    dataSource: '/Locations/Get',
  })
</script>
```

## disabledField

- **Type:** `string`
- **Default:** `'disabled'`

禁用字段名称。若未设置，则假定该项目未被禁用。

## dragAndDrop

- **Type:** `boolean`
- **Default:** `undefined`

为每个节点启用拖放功能。

## hasChildrenField

- **Type:** `string`
- **Default:** `'hasChildren'`

指示节点是否有子节点的字段名称。如果节点有子节点，则显示展开图标。

## icons.collapse

- **Type:** `string`
- **Default:** `'<i class="gj-icon chevron-down" />'`

折叠图标定义。

**例子:加号减号图标**

```html
<div id="tree"></div>
<script>
  var tree = $('#tree').tree({
    dataSource: '/Locations/Get',
    icons: {
      expand: '<i class="material-icons">add</i>',
      collapse: '<i class="material-icons">remove</i>',
    },
  })
</script>
```

## icons.expand

- **Type:** `string`
- **Default:** `'<i class="gj-icon chevron-right" />'`

定义展开图标

## iconsLibrary

- **Type:** `materialicons|fontawesome|glyphicons`
- **Default:** `'materialicons'`

将要使用的图标库的名称。目前我们支持 Material Icons、Font Awesome 和 Glyphicons。

如果您使用 Bootstrap 3 作为 uiLibrary，则 iconsLibrary 默认设置为 Glyphicons。
如果您使用 Material Design 作为 uiLibrary，则 iconsLibrary 默认设置为 Material Icons。
应将 Material Icons、Font Awesome 或 Glyphicons 的 css 文件手动包含在使用网格的页面中。

## imageCssClassField

- **Type:** `string`
- **Default:** `'imageCssClass'`

图像 CSS 类字段名称。
**例子:**

```html
<link
  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
  rel="stylesheet"
/>
<div id="tree"></div>
<script>
  var tree = $('#tree').tree({
    imageCssClassField: 'faCssClass',
    dataSource: [
      {
        text: 'folder',
        faCssClass: 'fa fa-folder',
        children: [{ text: 'file', faCssClass: 'fa fa-file' }],
      },
    ],
  })
</script>
```

## imageHtmlField

- **Type:** `string`
- **Default:** `'imageHtml'`

图像 html 字段名称。

## imageUrlField

- **Type:** `string`
- **Default:** `'imageUrl'`

图片 URL 字段名称。

## lazyLoading

- **Type:** `Boolean`
- **Default:** `false`

启用延迟加载

## paramNames.parentId

- **Type:** `string`
- **Default:** `"parentId"`

要发送父标识符的参数的名称。需要启用延迟加载才能使用此参数。

## primaryKey

- **Type:** `string`
- **Default:** `undefined`

主键名称

## selectionType

- **Type:** `single|multiple`
- **Default:** `single`

节点选择的类型。
如果类型设置为多个，则用户将能够在树中选择多个节点。

## textField

- **Type:** `single`
- **Default:** `'text'`

文本字段名称。

## uiLibrary

- **Type:** `materialdesign|bootstrap|bootstrap4|bootstrap5`
- **Default:** `materialdesign`

将要使用的 UI 库的名称。

如果使用 bootstrap，则应手动包含 bootstrap 的 css 文件。

## width

- **Type:** `number`
- **Default:** `undefined`

树的宽度。
