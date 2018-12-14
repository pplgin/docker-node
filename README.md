## docker compsoe node 实例

> node docker demo
> > 
>### 环境依赖

- docker 
- docker-compose 
- node > 9

### 运行启动

```
// 镜像名称
docker build -t [imagename] .

docker-compose up
```

### 运行测试

```
// 访问
curl -X POST -H "Content-Type: application/json" http://0.0.0.0:6000/napi/login/register -d "{\"name\":\"pplgin\",\"pwd\":\"123\"}"

// 进入容器
docker-compose exec -it mongo([web]) /bin/sh
```




