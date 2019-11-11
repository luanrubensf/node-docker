# node-docker
Node project working with docker

npm init -y

npm install express

criar index.js básico

npm install nodemon

nodemon index.js

npm install redis

Integrar com redis

npm i --save body-parser

npm i uuid

================== node ==================

node --version
node: operar no console

================== docker ==================

docker version

docker run hello-world

docker run busybox echo hello world

================== Construindo a imagem de dev ==================

docker build -f Dockerfile.dev -t node-docker-v1 .

docker run -p 3000:3000 -v /app/node_modules -v %cd%:/app node-docker-v1

docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app node-docker-v1

================== Rodar redis  ==================

docker run -d redis -- sem mapeamento, não será possível acessar local

docker run -d -p 6379:6379 redis

================== GIT  ==================

git init

git status

criar arquivo

git add teste.txt

git commit -m "arquivo teste.txt"

git status

git remote add origin https://github.com/luanrubensf/teste-git.git

git push -u origin master

git branch

git branch teste

git checkout teste

alterar arquivo branch e master e commitar

trocar para master

git merge teste

git status

ajustar arquivo

git commit -m "merge teste"

============================================
