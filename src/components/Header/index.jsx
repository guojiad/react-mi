import React, { Component } from 'react';
// import axios from 'axios';
import './index.css';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dh1: [
                {
                    "id":1,
                    "title":"小米商城",
                    "shugang":"|"
                },
                {
                    "id":2,
                    "title":"MIUI",
                    "shugang":"|"
                },
                {
                    "id":3,
                    "title":"loT",
                    "shugang":"|"
                },
                {
                    "id":4,
                    "title":"云服务",
                    "shugang":"|"
                },
                {
                    "id":5,
                    "title":"天星数科",
                    "shugang":"|"
                },
                {
                    "id":6,
                    "title":"有品",
                    "shugang":"|"
                },
                {
                    "id":7,
                    "title":"小爱开放平台",
                    "shugang":"|"
                },
                {
                    "id":8,
                    "title":"企业团购",
                    "shugang":"|"
                },
                {
                    "id":9,
                    "title":"资质证照",
                    "shugang":"|"
                },
                {
                    "id":10,
                    "title":"协议规则",
                    "shugang":"|"
                },
                {
                    "id":11,
                    "title":"下载app",
                    "shugang":"|"
                },
                {
                    "id":12,
                    "title":"智能生活",
                    "shugang":"|"
                },
                {
                    "id":13,
                    "title":"Select Location"
                }
            ],
            dh2:[
                {
                    "id":1,
                    "title1":"登录",
                    "shugang1":"|"
                },
                {
                    "id":2,
                    "title1":"注册",
                    "shugang1":"|"
                },
                {
                    "id":3,
                    "title1":"消息通知"
                }
            ],
        };
    }
    render() {
        return (
            <div className="header">
                <div className="nav">
                    <ul className="uls">
                        {this.state.dh1.map((item,index)=>{
                            return <li key={index + index}>
                                <a href="##">{item.title}</a>
                                <span className="gang">{item.shugang}</span>
                                <span className="yincang">
                                    <div className="sanjiao1"></div>
                                    <img src="assets/img/xm_1100000000.png"/>
                                    小米商城APP
                                </span>
                        </li>
                        })}
                    </ul>

                    <ul className="nav_3">
                        {this.state.dh2.map((item,index)=>{
                            return <li key={index + index}>
                                <a href="##">{item.title1}</a>
                                <span className="shugang1">{item.shugang1}</span>
                            </li>
                        })}
                    </ul>

                    <div className="nav_2">
                        <a href="##" className="to2_a">
                            <span className="gwc">
                                <img src="assets/img/xm_1100000358.png" className="img1" />
                            </span>
                            <span className="gwcz">购物车</span>
                            <span className="ling">（0）</span>
                        </a>
                        <div className="kuang">购物车中还没有商品，赶紧选购吧！</div>
                    </div>

                    
                </div>
            </div>
        )
    }
}
