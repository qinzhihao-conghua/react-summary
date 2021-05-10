import React, { Component } from 'react'

export default class CommentDoc extends Component {
  render() {
    return (
      <div>
        <p>
          一时之间竟不知从何说起，脑子能对比出react与angular的各种差异，以及和vue的相似地方，但是当要写成文字记录下来的时候却一时语塞，那么就从双向绑定说起吧。
        </p>
        <p>
          react是没有双向绑定的说法的，要想对表单进行实时更新与获取，那得需要通过setState来进行，这一点对于实际开发来说其实并不友好的，至少我是这么认为的，以至于当我知道对于表单数据的实时获取需要这个做，我突然想到网上说使用vue适用于快速开发这句话，这么一对比下来确实vue更方便，要是我早点学react，当初就不会和领导说我不知道vue的快到底是体现在什么地方，毕竟vue大部分有的angular也有。
        </p>
        <p>
          react还有一个大的不同就是在jsx中不能使用if语句和for语句等，只能使用表达式，这一点其实对我来说也挺不爽的，在vue和angular中，if语句和for语句在模板中的使用是十分频繁的，用于循环标签，根据条件显示标签或者组件，都是十分方便，而react则需要自己通过map等方法进行处理，这种写法使得数据操作与HTML标签关联极大，使我想到了前后端没有分离时候的apsx、jsp以及php中的写法，感觉很痛苦，但是想想，Facebook不就是PHP起家的嘛。
        </p>
        <p>
          另一个不同点还在于，react没有指令，管道(过滤器)这些东西的，比如日期管道，keyup事件，enter事件。虽然说这些东西都是自己写的，但是作为一个框架来说，提供一些高效的api还是有必要的。
        </p>
        <p>
          还有一个就是路由，react的路由和另外两个框架都不一样，angular和vue都是统一管理路由相关的东西，而react是分散在各个页面的，在相应的地方放置Route，这个Route承担了路由出口的作用，也承担了path匹配的功能。
        </p>
        <p>
          除了上述之外，有一个大的问题就是css问题，react的css是没有隔离的概念的，以至于在开始学的时候感觉不可思议，不进行隔离，对于组件化的编码而言，编写css是一个头痛的问题，以至于能在网上看到关于react中如何css的话题。不过好在与有scss和less等css预处理器，对于组件内部的css，可以通过在根标签添加组件转有属性，然后在通过属性选择器结合scss和less等的嵌套完成隔离，其实不算隔离，只是利用css的选择器提高级别和控制匹配，达到同名不影响，但这种方式，仍然会受到影响的，比如组件内一个.active类没有padding，但是全局的.active有padding，那么最后组件内的.active仍然是受影响的。目前流行的解决方案是module-css和css in js。嗯~~，react说是让创建交互式UI变得轻而易举，我是理解错UI了吗。
        </p>
        <p>
          总的来说，react适合js使用比较熟练的人员，尤其是es6比较溜的，可以把react玩出花，但是开发速度上可能没那么快，再者因为自由度高，写法可能因人而异，后续的相关维可能容易埋坑。
        </p>
      </div>
    )
  }
}
