# rClone 使用教程

!!! info ""
    
    author: Haohahahaha (Haorui Zhang)
    
    mail: 1259203802@qq.com

    date: 2026-07-16

!!! danger "假定你已经有了 NextCloud 网盘了"
    
    - 本文章解决的是远程传输大文件的问题。

## 一、安装

### 1. 准备所需材料

#### 安装包的具体关系与用途

```bash
|-- rclone browser: 图形界面，便于操作
  |-- rclone: 提供基础的 rclone 功能
    |-- rclone mount: 具体命令，提供挂载到本地盘的功能
    |-- Winfsp: 提供windows挂载网盘的基础部件
      |-- SSHFS-Win(x64): 提供windows挂载网盘的核心部件

```

#### 安装包地址

- [rclone browser 1.8.0](https://github.com/kapitainsky/RcloneBrowser/releases/download/1.8.0/rclone-browser-1.8.0-a0b66c6-windows-64-bit.exe)
    - [rclone 1.74.4(x64)](https://downloads.rclone.org/v1.74.4/rclone-v1.74.4-windows-amd64.zip)
        - [Winfsp](https://github.com/winfsp/winfsp/releases/download/v2.1/winfsp-2.1.25156.msi)
        - [SSHFS-Win(x64)](https://github.com/winfsp/sshfs-win/releases/download/v3.5.20357/sshfs-win-3.5.20357-x64.msi)


#### 安装过程

!!! note "SSHFS-Win(x64)"
    
    一路确认即可


!!! note "Winfsp"
    
    一路确认即可


??? note "rclone 1.74.4(x64) !!!多图预警" 
    
    - 解压缩
        
        ![解压好的情况](./01-rClone/01.png) 
   
    - 进入解压的文件夹
        
        ![进入解压的文件夹](./01-rClone/02.png)     
    
    - 将最后一层文件夹整体剪切，粘贴到 `C:\Program Files` 下
        
        ![粘贴1](./01-rClone/03.png) 
        
        ![粘贴2](./01-rClone/04.png) 
    
    - 要求管理员权限，点击继续即可。
        
        ![管理员权限](./01-rClone/05.png) 
    
    - 粘贴好后即安装完成。


??? note "rclone browser 1.8.0 !!!多图预警"    
    
    - 点击 Install for all users 
       
        ![install-f-a-u](./01-rClone/06.png) 
    
    - 授予管理员权限
        
        ![授予管理员权限](./01-rClone/07.png) 
    
    - 点击同意协议（英文
    
        ![点击同意协议](./01-rClone/08.png) 

    - <font color=red>**之后，一路确认**</font>
    
    - 安装完成时：取消勾选“启动rclone browser”
    
        ![取消勾选](./01-rClone/09.png) 

#### 设置环境变量

??? note "具体步骤 !!!多图预警"

    - 打开开始菜单
    
        ![开始菜单](./01-rClone/10.png) 
    
    - 直接键入环境变量（打开开始菜单后 直接键入文字 就等于 搜索）
    - 点击 `编辑系统环境变量`
        
        ![找环境变量](./01-rClone/11.png)     
    
    - 在弹出的窗口点击 `环境变量` （窗口的右下角）
    
        ![环境变量](./01-rClone/12.png)  
    
    - 在新弹出的窗口中，下半部分 `系统变量` 的列表中，单击选择 `Path`
    - 点击下半部分-右下角的 `编辑`
    
        ![编辑](./01-rClone/13.png) 
    
    - 在新弹出的窗口中，点击 `新建`    
    - 输入路径
        - 因为一共有三条，所以需要`新建`三次！
        - `C:\Program Files\SSHFS-Win\bin`
        - `C:\Program Files\rclone-v1.74.4-windows-amd64`
        - `C:\Program Files\Rclone Browser`
    

        ![添加](./01-rClone/14.png) 
    
    - 输入完成之后，点击 `确定`，退出最上层窗口；    
    - 再点击 `确定`，退出次上层窗口；
    - 再点击 `确定`，退出最下层窗口；
  
        ![退出](./01-rClone/15.png) 


#### 配置挂载网盘

???+ note "具体步骤 !!!多图预警"

    - 此时去开始菜单，单击打开 `RCLone Browser`

        ![打开rclone-browser](./01-rClone/16.png)

    - 点击窗口左下角的 `Config...`
    
        ![config](./01-rClone/17.png)
    
    - 此时弹出cmd窗口
        - 第一个问题 输入 `n`，回车
        - 第二个问题 输入你的网盘名称，要求英文（我就写 `Haohaha` 了）
        
            ![问题1-2](./01-rClone/18.png)
        
        - 第三个问题 输入 `63`，即选择 `WebDAV`
        
            ![问题3](./01-rClone/19.png)

        - 打开浏览器的新窗口，找网盘地址

            ![怎么找网盘地址](./01-rClone/20.png)
        
        - 第四个问题 输入 `网盘的地址`
    
            ![问题4](./01-rClone/21.png)

        - 第五个问题 输入 `2`，即选择 `NextCloud`

            ![问题5](./01-rClone/22.png) 

        - 第六个问题 输入 `用户名`，输入你的网盘用户名即可。
        - 第七个问题 输入 `y` 即使用密码
        - 第八个问题 输入 `密码`，输入你的网盘密码即可。

            ![问题6-8](./01-rClone/23.png) 

        - 第九个问题 直接回车跳过
        - 第十个问题 输入n，回车

            ![问题9-10](./01-rClone/24.png) 

      -  第11个问题 输入y 保存配置

            ![问题11](./01-rClone/25.png) 

      -  第12个问题 输入q 退出设置

            ![问题12](./01-rClone/26.png) 

## 二、使用