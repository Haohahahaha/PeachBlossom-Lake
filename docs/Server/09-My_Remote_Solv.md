# 浩哈哈的个人远程方案

!!! info ""
    
    author: Haohahahaha (Haorui Zhang)

    mail: 1259203802@qq.com
   
    date: 2026-05-04

## 体验：多种远程方案对比选型

- QQ & 腾讯会议远控
- VNC
- Windows 远程桌面
- 向日葵
- Parsec
- Sunshine/Moonlight

## 云主机与终端的完整配置

- (云)Sunshine/(端)Moonlight(Apollo/Artemis)
    - 正常安装
    - Moonlight好用就好用在，可以自定义[IP:Port]，可以自定义分辨率/刷新率/码率，丰俭由人呐！
- (云)ParsecVDisplay
    - 可以创建虚拟屏幕、自定义需要的屏幕分辨率和刷新率
- (云)AutoHotKey
    - 可以设置 切换屏幕 和 把应用切换到另一个桌面 的功能（当然更多是你自己需求+GPT）
    - 规避终端与云主机的键位冲突问题
- (云&&端)调用显卡的图形设置
    - 这个嘛……开始菜单搜索“图形设置”就好啦，不会搜一下应该就有。

## 网络链路的完整配置

- 云服务器：
    - Frps 部署：[Frps搭建内网穿透 - CSDN](https://blog.csdn.net/dog6507371/article/details/123084970) 这篇文章基本OK，只看服务器端配置。
    - 端口放行：阿里云是安全组，腾讯云更明显好找（没续费没法访问后台所以忘了）。
- 本地服务器/终端：
    - Frpc on OpenWRT(iStoreOS)
        - 更新软件源，不过好像 iStoreOS 就只有 0.48.1，回头搞个更新的 opkg 安装包会更好一点。
    - Frpc-desktop on Windows
        - [frpc-desktop - Github Release](https://github.com/luckjiawei/frpc-desktop/releases/)
        - 安装就行了，要配置的：`Frp Version`、服务器 IP、端口、验证方法选令牌、填写服务端的令牌、打开 TLS
        - 然后建立相关的 Proxy 即可。

## 关于编解码串流的系统与硬件……

- Ubuntu 调用显卡解码能力怎么样我还真不好说，我不觉得Linux当终端是一个很养老的事情……
- 我觉得是不如 MacBook 一根儿（最起码人家屏幕好色域好，支持 YUV4:4:4，支持 HEVC-10bit）
- Win 本儿在挑选时就得好好看看其中 核显(能耗低更推荐以此为主)/独显 的解码能力
- NV的卡是有网站的：[video-encode-decode-support-matrix](https://developer.nvidia.com/video-encode-decode-support-matrix)，编解码能力都能看到。
    - 目前来看，P400、P4都是不错的方案，P400适合单虚拟机，P4适合多虚拟机，都挺便宜~
- 至于 Intel/AMD 的核显……自己找吧，网上表格好多嘞。
