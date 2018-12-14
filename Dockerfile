FROM keymetrics/pm2:latest-alpine

ENV NODE_ENV qa

# 内容 -> image内部的路径
ADD . /app

COPY package.json /app

#工作路径
WORKDIR /app 

# 执行命令
RUN npm install 

# 指定容器在运行时监听的端口一个或者多个
EXPOSE 6011

# 指定容器卷轴挂载
VOLUME ["/app/logs"]

#执行脚本
CMD ["npm", "start"]