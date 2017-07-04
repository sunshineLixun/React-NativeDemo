import React, {Component} from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

export default class setLayout extends Component {
  render() {
    return (
      <View style={styles.container}>
        
          {/*<View style={styles.subView}>
                <View style={styles.paddingView}></View>
          </View>

          <View style={styles.subView}>
                <View style={styles.paddingView}></View>
          </View>*/}

          <Text style={styles.itemView}>1</Text>
          <Text style={styles.itemView}>2</Text>
          <Text style={styles.itemView}>3</Text>
          <Text style={[styles.text3Style, styles.itemView]}>4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'darkorange',
    justifyContent:'space-around',
    alignItems:'center',
  },

  
  subView:{
    backgroundColor: 'red',
    marginTop:50,
    marginLeft:100,
    // paddingTop:10,
    // paddingLeft:10,
    width:200,
    height:200,
    borderBottomWidth:5,
    borderColor:'#b8860b',
  },

  paddingView:{
    // position:'absolute',
    left:20, 
    top:20,
    backgroundColor:'#6495ed',
    width:50,
    height:50,
  },


  itemView:{
    backgroundColor:'#b8860b',
    textAlign:'center',
    width:50,
    height:50,
    margin:5,
    marginTop:64,
  },

   text3Style:{
        alignSelf:'flex-start',
    }


});
/*
borderBottomWidth number 底部边框宽度
borderLeftWidth number 左边框宽度
borderRightWidth number 右边框宽度
borderTopWidth number 顶部边框宽度
borderWidth number 边框宽度
border<Bottom|Left|Right|Top>Color 各方向边框的颜色,<>表示连着一起，例如borderBottomColor
borderColor 边框颜色

margin number 外边距
marginBottom number 下外边距
marginHorizontal number 左右外边距
marginLeft number 左外边距
marginRight number 右外边距
marginTop number 上外边距
marginVertical number 上下外边距

padding number 内边距
paddingBottom number 下内边距
paddingHorizontal number 左右内边距
paddingLeft number 做内边距
paddingRight number 右内边距
paddingTop number 上内边距
paddingVertical number 上下内边距

------子控件相对于父控件的间距--------
left   number  左边缘。
right  number  右边缘。
top    number  顶部边缘。
bottom number  底部边缘。

absolute：绝对定位，参照父控件位置定位 相当于frame
relative：相对定位，参照当前控件原始位置定位 相当于 bounds


row：主轴为水平方向，从左向右。依次排列
row-reverse：主轴为水平方向，从右向左依次排列
column（默认值）：主轴为垂直方向，默认的排列方式，从上向下排列
column-reverse：主轴为垂直方向，从下向上排列


justifyContent:决定子组件在主轴中具体布局，是靠左，还是居中等。写在父控件中
flex-start: 子组件向主轴起点对齐，如果主轴水平，从左开始，主轴垂直，从上开始。
flex-end 子组件向主轴终点对齐，如果主轴水平，从右开始，主轴垂直，从下开始。
center 居中显示，注意：并不是让某一个子组件居中，而是整体有居中效果
space-between 均匀分配,相邻元素间距离相同。每行第一个组件与行首对齐，每行最后一个组件与行尾对齐。
space-around 均匀分配,相邻元素间距离相同。每行第一个组件到行首的距离和每行最后一个组件到行尾的距离将会是相邻元素之间距离的一半


alignItems:决定子组件在测轴中具体布局
一直都没有管过侧轴，如果侧轴垂直，决定子组件在上，还是下，或者居中
alignItems共有四个值，默认为stretch。
flex-start 子组件向侧轴起点对齐。
flex-end 子组件向侧轴终点对齐。
center 子组件在侧轴居中。
stretch 子组件在侧轴方向被拉伸到与容器相同的高度或宽度。


alignSelf:自定义自己的侧轴布局，用于一个子组件设置。
auto 继承它的父容器的alignItems属性。如果没有父容器则为 "stretch"
flex-start 子组件向侧轴起点对齐。
flex-end 子组件向侧轴终点对齐。
center 子组件在侧轴居中。
stretch 子组件在侧轴方向被拉伸到与容器相同的高度或宽度。


flex: 决定子控件在主轴中占据几等分。
flex: 任意数字，所有子控件flex相加，自己flex占总共多少，就有多少宽度.

*/