# rClone MacOS 使用教程

!!! info "更新记录"

    - 20260718: 完稿
        - 应客户需求，紧急赶出一篇来了。
        - 以避免更高的后续系统维护成本。

!!! info ""
    
    author: Haohahahaha (Haorui Zhang)
    
    mail: 1259203802@qq.com

    date: 2026-07-18

!!! danger "假定你已经有了 NextCloud 网盘了"
    
    - 本文章解决的是远程传输大文件的问题。

!!! danger "<font color=red>**NextCloud 网盘必须要有 SSL 证书！**</font>"

    - 否则本篇文章无法起作用。

## 一、安装

### 安装包地址

- [RClone UI 苹果芯片版](https://get.rcloneui.com/mac)

### 安装过程

- 下载好上面链接的安装包后，双击打开

- 打开后拖动进文件夹，即完成安装。

    ![安装](./02-rClone-MacOS/01.jpg)

## 二、配置网盘

!!! danger "请注意，使用期间应将代理程序（比如 `Clash`）设置成直连模式，或者关闭系统代理！"

- 点击应用程序的图标，然后打开 `RCloneUI` 程序

    ![安装](./02-rClone-MacOS/02.jpg)

!!! warning "是否弹出了界面？如果没有，请退出后，再回顾你的代理设置。"

---

- 进入界面后，下拉菜单，点击 `Settings` 选项

    ![安装](./02-rClone-MacOS/03.jpg)

---

- 进入设置后，点击左侧 `Remotes`，配置远程云盘；然后点击右侧 `Create Remote`，添加新的远程云盘连接。

    ![安装](./02-rClone-MacOS/04.jpg)

---

!!! tip "在写入具体配置之前，我们先获取云盘的 WebDAV 地址"
    
    - 打开浏览器，进入你的云盘，按下图标出的顺序即可找到链接，点击按钮复制。

    ![安装](./02-rClone-MacOS/05.jpg)
    
---

- 按下图指引，填入相关信息。
- 注意，`Type` 选择 `WebDAV`，`vendor` 选择 `nextcloud`。

    ![安装](./02-rClone-MacOS/06.jpg)

- 最后点击右下角的 `Create Remote`，创建完成。点击 `Close` 关闭即可。


## 三、使用

### 上传（复制模式）

!!! info "没有选择 Move 模式</br>是因为在复制模式下，一旦上传失败，本地的文件不受损失。"

---

- 点击状态栏的 `RClone UI` 图标，点击 `Open`

    ![安装](./02-rClone-MacOS/07.jpg)

!!! warning "状态栏找不到图标？</br>是的，你状态栏图标太多，已经被摄像头挡住了。</br>尝试暂时消去几个吧。"

---

- 进入界面后，下拉菜单，点击 `Copy` 选项

    ![安装](./02-rClone-MacOS/08.jpg)

---

- 根据图中说明，选择你的上传文件，与上传地点。

    ![安装](./02-rClone-MacOS/09.jpg)

!!! warning "选择上传目的地时，远程云盘找不到？"

    ![安装](./02-rClone-MacOS/10.jpg)

    ![安装](./02-rClone-MacOS/11.jpg)

!!! warning "选择上传目的地时，远程云盘连接不上？"

    那大概是你使用的云盘没有配置SSL证书。

    请联系你的云盘管理员😁

---

- 选择好之后，点击 `START COPY` 即可开始传输。
    
    ![安装](./02-rClone-MacOS/12.jpg)



### 查看上传任务

- 点击状态栏图标，然后点击 `Transfers`；
- 之后就可以看到活动与非活动的传输任务了
- 根据下图，点击任务可查看具体传输情况。

    ![安装](./02-rClone-MacOS/13.jpg)

---

- 任务具体传输情况如下图。

    ![安装](./02-rClone-MacOS/14.jpg)

!!! tip "可能会有传输失败的情况，这时候在此场景下截图，并把截图提供给管理员，将会有助于其判断情况，给出解决办法。"