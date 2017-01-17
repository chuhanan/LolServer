# LOLServer 

后端项目，使用 Roit 的 SDK 获取游戏数据，使用 docker 搭建服务。

## 使用
下载项目到本地
```bash
https://github.com/chuhanan/LolServer.git
```

### docker toolbox
如果是安装了 docker toolbox，需要将该目录挂载到虚拟机中，并**在虚拟机中**执行之后的所有命令。

### docker
安装 docker 则需要将该目录作为共享文件夹。

### 简单做法
进入项目根目录，即`/LolServer`文件夹下，执行下面命令
```bash
./scripts/start.sh
```
终端会打印正在安装依赖的进度，当安装完成后，将会进入**容器**的交互状态，可以开启服务
```bash
node start.js
```
打开浏览器，输入`http:127.0.0.1:8080`即可访问。
> 如果是使用`docker toolbox`则需要访问虚拟机 ip:8080，使用`docker-machine ip`可查看虚拟机 ip。

## 参考

- [windows7 使用 docker](https://ltaoo.github.io/2017/01/13/%E5%AE%8C%E6%95%B4%E8%AE%B0%E5%BD%95%E5%9C%A8%20windows7%20%E4%B8%8B%E4%BD%BF%E7%94%A8%20docker%20%E7%9A%84%E8%BF%87%E7%A8%8B/)
