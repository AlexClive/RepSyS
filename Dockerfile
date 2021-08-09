# WORKDIR 在linux中构建
#定制node镜像版本
FROM node:14.17.3-alpine AS BUILD_IMAGE
MAINTAINER zxr
#创建 app文件夹
RUN mkdir -p /usr/app

# cd到app文件夹下
WORKDIR /usr/app
# 将根目录下的文件copy到container（运行此镜像的容器）文件系统的app文件夹下

COPY ./nodeService /usr/app/
COPY ./ProtosFile /usr/app/ProtosFile

# 下载nodejs的依赖
RUN npm set registry http://nexus.rd.wanfangdata.com.cn/repository/npm-group && npm install

# 对外暴露的端口号
EXPOSE 3499
# 容器启动时执行的命令，类似npm run start
CMD ["npm","start"]
