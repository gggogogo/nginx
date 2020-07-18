# 测试nginx相关应用

## 动静分离
1. node server.js
2. 分别访问 http://localhost:8000 和 http://localhost:8000/node

## 负载均衡
1. node server1.js
2. node server2.js
3. 访问 http://localhost:8001