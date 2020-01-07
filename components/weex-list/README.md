## weex-list

下拉加载上拉刷新组件

### Attributes

|参数|类型|说明|
|-|-|-|
|pageInit|Object|分页参数初始化配置|
|active|Boolean|单list下可以不用设置，多list下与activeIndex保持一致即可，用于标记初始化数据加载|

### Methods

|方法名|说明|参数|
|-|-|-|
|endBySize|用于判断当前list是否还能加载更多数据，dataSize为当前这次请求返回的数据的长度，totalSize为数据总数|Function(dataSize: Number, totalSize: Number)|
