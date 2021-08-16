import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
// import 'antd/dist/antd.css';
import './index.css';


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top2: [
                {
                    "id":1,
                    "title":"小米手机"
                },
                {
                    "id":2,
                    "title":"Redmi 红米"
                },
                {
                    "id":3,
                    "title":"电视"
                },
                {
                    "id":4,
                    "title":"笔记本"
                },{
                    "id":5,
                    "title":"平板"
                },
                {
                    "id":6,
                    "title":"家电"
                },
                {
                    "id":7,
                    "title":"路由器"
                },
                {
                    "id":8,
                    "title":"智能硬件"
                },
                {
                    "id":9,
                    "title":"服务"
                },
                {
                    "id":10,
                    "title":"社区"
                }
            ],
            list1:[
                {"id":1,"as":"全部商品"},
                {"id":2,"as":"空调"},
                {"id":3,"as":"小米11"},
                {"id":4,"as":"小米手机"},
                {"id":5,"as":"红米"},
                {"id":6,"as":"小米10"},
                {"id":7,"as":"黑鲨4"}
            ],
            playlist: [
                {play: 1, src: "assets/img/xm_1100000218.webp" },
                {play: 2, src: "assets/img/xm_1100000219.webp" },
                {play: 3, src: "assets/img/xm_1100000220.webp" },
          
              ],
            list3:[
                {"id":1,"wenzi":"手机 电话卡","jiantou":">"},
                {"id":2,"wenzi":"电视 盒子","jiantou":">"},
                {"id":3,"wenzi":"笔记本 显示器","jiantou":">"},
                {"id":4,"wenzi":"家电 插线板","jiantou":">"},
                {"id":5,"wenzi":"出行 穿戴","jiantou":">"},
                {"id":6,"wenzi":"智能 路由器","jiantou":">"},
                {"id":7,"wenzi":"电源 配件","jiantou":">"},
                {"id":8,"wenzi":"健康 儿童","jiantou":">"},
                {"id":9,"wenzi":"耳机 音箱","jiantou":">"},
                {"id":10,"wenzi":"生活 箱包","jiantou":">"}
            ],
            four:[
                {"id":1,"srcs":"assets/img/xm_1100000223.png","txt":"小米秒杀"},
                {"id":2,"srcs":"assets/img/xm_1100000224.png","txt":"企业团购"},
                {"id":3,"srcs":"assets/img/xm_1100000225.png","txt":"F码通道"},
                {"id":4,"srcs":"assets/img/xm_1100000226.png","txt":"米粉卡"},
                {"id":5,"srcs":"assets/img/xm_1100000227.png","txt":"以旧换新"},
                {"id":6,"srcs":"assets/img/xm_1100000228.png","txt":"话费充值"}
            ],
            three:[
                {"id":1,"srcs":"assets/img/xm_1100000229.jpg"},
                {"id":2,"srcs":"assets/img/xm_1100000230.jpg"},
                {"id":3,"srcs":"assets/img/xm_1100000231.png"}
            ],
            big:[
                {"id":1,"name":"手机",uls:[{"id":1,"lis":"查看更多>>"}
                    ],lefts:[
                    {"id":1,"pic":"assets/img/xm_1100003030.webp"}
                    ],rights:[
                            {"id":1,"pic":"assets/img/xm_1100003031.webp","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"assets/img/xm_1100003032.webp","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"assets/img/xm_1100003033.webp","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"assets/img/xm_1100003034.webp","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"assets/img/xm_1100003050.webp","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"assets/img/xm_1100003048.webp","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"assets/img/xm_1100003051.webp","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""},
                            {"id":8,"pic":"assets/img/xm_1100003052.webp","nis":"黑鲨4 Pro","jies":"黑鲨4 Pro","mans":"3999元起","mans1":""}
                        ],
                        rig0:[
                            {"id":1,"src1":"assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                },
                {"id":2,"name":"家电",uls:[{"id":1,"lis":"热门"},{"id":2,"lis":"电视影音"}
                    ],lefts:[
                    {"id":1,"pic":"assets/img/xm_1100003063.webp"},{"id":2,"pic":"assets/img/xm_1100003064.webp"}
                    ],rights:[
                            {"id":1,"pic":"assets/img/xm_1100002948.png","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"assets/img/xm_1100002949.png","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"assets/img/xm_1100002958.png","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"assets/img/xm_1100002976.jpg","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"assets/img/xm_1100002980.jpg","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"assets/img/xm_100000019321.jpg","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"assets/img/xm_1100002983.jpg","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],
                        rig0:[
                            {"id":1,"src1":"assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                },
                {"id":3,"name":"智能",uls:[{"id":1,"lis":"热门"},{"id":2,"lis":"安防"},{"id":3,"lis":"出行"}
                    ],lefts:[
                    {"id":1,"pic":"assets/img/xm_1100003086.webp"},{"id":2,"pic":"assets/img/xm_1100003087.webp"}
                    ],rights:[
                            {"id":1,"pic":"assets/img/xm_1100002948.png","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"assets/img/xm_1100002949.png","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"assets/img/xm_1100002958.png","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"assets/img/xm_1100002976.jpg","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"assets/img/xm_1100002980.jpg","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"assets/img/xm_100000019321.jpg","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"assets/img/xm_1100002983.jpg","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],
                        rig0:[
                            {"id":1,"src1":"assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                },
                {"id":4,"name":"搭配",uls:[{"id":1,"lis":"热门"},{"id":2,"lis":"耳机音箱"}
                    ],lefts:[
                    {"id":1,"pic":"assets/img/xm_1100003107.webp"},{"id":2,"pic":"assets/img/xm_1100003108.webp"}
                    ],rights:[
                            {"id":1,"pic":"assets/img/xm_1100002948.png","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"assets/img/xm_1100002949.png","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"assets/img/xm_1100002958.png","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"assets/img/xm_1100002976.jpg","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"assets/img/xm_1100002980.jpg","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"assets/img/xm_100000019321.jpg","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"assets/img/xm_1100002983.jpg","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],
                        rig0:[
                            {"id":1,"src1":"assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                },
                {"id":5,"name":"配件",uls:[{"id":1,"lis":"热门"},{"id":2,"lis":"充电器"}
                    ],lefts:[
                    {"id":1,"pic":"assets/img/xm_1100003135.webp"},{"id":2,"pic":"assets/img/xm_1100003136.webp"}
                    ],rights:[
                            {"id":1,"pic":"assets/img/xm_1100002948.png","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"assets/img/xm_1100002949.png","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"assets/img/xm_1100002958.png","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"assets/img/xm_1100002976.jpg","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"assets/img/xm_1100002980.jpg","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"assets/img/xm_100000019321.jpg","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"assets/img/xm_1100002983.jpg","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],
                        rig0:[
                            {"id":1,"src1":"assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                        ]
                },
                {"id":6,"name":"周边",uls:[{"id":1,"lis":"热门"},{"id":2,"lis":"出行"}
                    ],lefts:[
                    {"id":1,"pic":"assets/img/xm_1100003150.webp"},{"id":2,"pic":"assets/img/xm_1100003151.webp"}
                    ],rights:[
                            {"id":1,"pic":"assets/img/xm_1100002948.png","nis":"Note 10 Pro","jies":"天玑1100年度旗舰芯，VC液冷散热","mans":"1599元起","mans1":"1699元"},
                            {"id":2,"pic":"assets/img/xm_1100002949.png","nis":"Redmi Note 10 5G","jies":"5G小金刚，旗舰长续航，VC液冷散热","mans":"1099元起","mans1":""},
                            {"id":3,"pic":"assets/img/xm_1100002958.png","nis":"小米MIX FOLD","jies":"折叠大屏｜自研芯片","mans":"9999元起","mans1":""},
                            {"id":4,"pic":"assets/img/xm_1100002976.jpg","nis":"小米11 Ultra","jies":"小米11 Ultra","mans":"5499元起","mans1":"5999元"},
                            {"id":5,"pic":"assets/img/xm_1100002980.jpg","nis":"小米11 Pro","jies":"小米11 青春版 轻薄","mans":"4499元起","mans1":"4999元"},
                            {"id":6,"pic":"assets/img/xm_100000019321.jpg","nis":"小米11 青春版","jies":"听音乐、语音遥控家电","mans":"2099元起","mans1":"2299元"},
                            {"id":7,"pic":"assets/img/xm_1100002983.jpg","nis":"K40 游戏增强版","jies":"轻薄电竞设计","mans":"1999元起","mans1":""}
                        ],
                    rig0:[
                        {"id":1,"src1":"assets/img/xm_1100002987.jpg","h3":"小米米家空气净化器 2S","yuan":"599元","src2":"assets/img/jiant.png","more0":"浏览更多","span":"热门"}
                    ]
                }
            ],
            ju:[
                {"id":1,"src":"assets/img/xm_1100003168.webp","bti":"视频","bta":"查看全部>>"}
            ],
            sp:[
                {"id":1,"srcs":"assets/img/xm_100000022284.jpg","timus":"2021年春季新品发布会第一场","desc":""},
                {"id":2,"srcs":"assets/img/xm_100000022283.jpg","timus":"Redmi 10X系列发布会","desc":"Redmi 10X系列发布会"},
                {"id":3,"srcs":"assets/img/xm_100000022282.jpg","timus":"小米10 青春版 发布会","desc":""},
                {"id":4,"srcs":"assets/img/xm_100000022281.jpg","timus":"小米10 8K手机拍大片","desc":""}
            ],
        };
    }
    render() {
        return (
            <div className="home">
                <div className="top2">
                    <div className="top2_c">
                        <div className="logo_box">
                            <a href="##" className="logo"></a>
                        </div>
                        <ul className="daohang2_uls">
                        {this.state.top2.map((item,index)=>{
                            return <li key={index + index} className="dh2_li">{item.title}</li>  
                        })}
                        </ul>
                        {/* 搜索 */}
                        <div className="search">
                            <input type="text" className="search1" placeholder="耳机" />
                            <input type="submit" className="submit" value=" " />
                            <img alt="说明" src="assets/img/ss1.png" className="fdj" />
                            <div className = "hezi">
                                <ul className="hezi_ul">
                                {this.state.list1.map((item,index)=>{
                                    return  <li className="hezi_li" key={index + index} >
                                                <a href="##">{item.as}</a>
                                            </li>
                                        }
                                    )
                                }
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                {/* 轮播 */}
                <div className="all">
                    <div className="allhome">
                        <div className="homecen">
                            <Carousel>
                                {this.state.playlist.map((item, index) => {
                                    return <Carousel.Item key={item + index}>
                                        <img className="playpic" alt="900x500" src={item.src} />
                                    </Carousel.Item>
                                })}
                            </Carousel>
                            {/* 选项卡  */}
                            <div className="xxk_box">
                                <ul className="xxk_ul">
                                {this.state.list3.map((item, index) => {
                                    return  <li className="xxk_li" key={item + index}>
                                                <a href="##">
                                                    {item.wenzi}
                                                    <span>{item.jiantou}</span>
                                                </a>
                                            </li>
                                        }
                                    )
                                }
                                </ul>
                            </div>
                            {/* 四个图片 */}
                            <div className="four">
                                <div className="liu">
                                    <ul className="liu_ul">
                                    {this.state.four.map((item, index) => {
                                        return  <li className="liu_li" key={item + index}>
                                                    <a>
                                                        <img alt="说明" src={item.srcs} />
                                                        <span className="baise">{item.txt}</span>
                                                    </a>
                                                </li>
                                            }
                                        )
                                    }
                                    </ul>
                                </div>
                                <ul className="three">
                                {this.state.three.map((item, index) => {
                                    return  <li key={item + index}>
                                                <a href="##"><img alt="说明" src={item.srcs}/></a>
                                            </li>
                                        }
                                    )
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* 中间部分图片 */}
                    <div className="cente2_box">
                        <div className="cente2">
                            <a href="##" className="pt1">
                                <img alt="说明" src="assets/img/img1.webp" />
                            </a>
                            <div className="big_div">
                            {this.state.big.map((item, index) => {
                                return  <div className="bigdivs" key={item + index}>
                                            {/* 标题文字 */}
                                            <div className="biaotis">
                                                <h2 className="bt_left">{item.name}</h2>
                                                <ul className="more">
                                                {item.uls.map((item1, index1) => {
                                                    return  <li className="gg" key={item1 + index1}>{item1.lis}</li>
                                                })}
                                                </ul>
                                            </div>
                                            {/* 八张图片盒子 */}
                                            <div className="bbox1">
                                                <div className="left_tu">
                                                    <ul className="left_uls">
                                                    {item.lefts.map((item2, index2) => {
                                                    return  <li key={item2 + index2} className="left_lis">
                                                                <a href="##">
                                                                    <img alt="说明" src={item2.pic}  />
                                                                </a>
                                                            </li>
                                                })}
                                                    </ul>
                                                </div>
                                                <div className="right_boxs">
                                                    <div className="rigbox">
                                                        <ul className="riguls">
                                                        {item.rights.map((item3, index3) => {
                                                            return  <li className="riglis" key={item3 + index3}>
                                                                        <a href="##">
                                                                            <div>
                                                                                <img alt="说明" src={item3.pic}  />
                                                                            </div>
                                                                            <p className="nichen">{item3.nis}</p>
                                                                            <p className="jieshao">{item3.jies}</p>
                                                                            <p className="jiage">
                                                                                <span className="maney">{item3.mans}</span>
                                                                                <del>
                                                                                    <span className="maney1">{item3.mans1}</span>
                                                                                </del>
                                                                            </p>
                                                                        </a>
                                                                    </li> 
                                                        })}
                                                        {item.rig0.map((item4, index4) => {
                                                            return  <li className="riglis0" key={item4 + index4}>
                                                                        <div className="xbox1">
                                                                            <a href="##" className="xbox1_a">
                                                                                <div className="xbox1_div1">
                                                                                    <img src={item4.src1} />
                                                                                </div>
                                                                                <h3>{item4.h3}</h3>
                                                                                <span className="yuanq">{item4.yuan}</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="xbox2" key={item4 + index4}>
                                                                            <a href="##" className="xbox2_a">
                                                                                <div className="jiant">
                                                                                    <img src={item4.src2}  />
                                                                                </div>
                                                                                <div className="morep">
                                                                                    {item4.more0}<br />
                                                                                    <span>{item4.span}</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </li>
                                                        })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            })}
                            </div>
                            <a href="##" className="pt1">
                                <img alt="说明" src="assets/img/img2.webp" />
                            </a>
                            <div className="xinzeng">
                            <h2 className="xz_h">视频</h2>
                                <a href="##" className="xz_a">
                                   查看全部
                                </a>
                            </div>
                            {/* 视频 */}
                            <div className="sp_box">
                                <ul className="sp_uls">
                                {this.state.sp.map((item6, index6) => {
                                    return  <li className="sp_li" key={item6 + index6}>
                                                <a href="##" className="sp_a bof1" title="点击播放视频">
                                                    <div className="ship">
                                                        <img alt="说明" src={item6.srcs}  />
                                                        <span className="bofang">
                                                            <span></span>
                                                        </span>
                                                    </div>
                                                    <h3 className="timu">{item6.timus}</h3>
                                                    <p className="desc">{item6.desc}</p>
                                                </a>
                                            </li>
                                })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
