#!/bin/bash
# 第一次安装才执行该脚本
if [ ! -f ".env" ]; then
  sudo rm -rf ./dockercnf/mysql5.7/db_data/*
  chmod a+w  -R ./dockercnf/run
  docker run --rm -it -v $PWD:/app composer:1.9.1 install --ignore-platform-reqs
  docker run --rm -it -v $PWD:/app composer:1.9.1 dump-autoload
  docker-compose up --build -d

  sleep 2
  cp .env.example .env
  docker exec -it fuzecar_php chmod g+w -R .env
  docker exec -it fuzecar_php chown :www-data -R ./storage
  docker exec -it fuzecar_php chmod g+w -R ./storage
  docker exec -it fuzecar_php php artisan key:generate
  docker exec -it fuzecar_php php artisan storage:link

  # 等待mysql容器启动
  sleep 10  
  docker exec -it fuzecar_php php artisan migrate:refresh --seed
fi

