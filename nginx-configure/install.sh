#!/bin/bash

SOURCE_DIR=/source/
PCRE_DIR=pcre-8.37
PCRE_TAR=pcre-8.37.tar.gz
PCRE_URL=http://sourceforge.net/projects/pcre/files/pcre/8.37/pcre-8.37.tar.gz
ZLIB_DIR=zlib-1.2.8
ZLIB_TAR=zlib-1.2.8.tar.gz
ZLIB_URL=http://sourceforge.net/projects/libpng/files/zlib/1.2.8/zlib-1.2.8.tar.gz
OPENSSL_DIR=openssl-1.0.2h
OPENSSL_TAR=openssl-1.0.2h.tar.gz
OPENSSL_URL=https://www.openssl.org/source/openssl-1.0.2h.tar.gz
LUAJIT_DIR=LuaJIT-2.0.4
LUAJIT_TAR=LuaJIT-2.0.4.tar.gz
LUAJIT_URL=http://luajit.org/download/LuaJIT-2.0.4.tar.gz
NGINX_DIR=nginx-1.11.1
NGINX_TAR=nginx-1.11.1.tar.gz
NGINX_URL=http://nginx.org/download/nginx-1.11.1.tar.gz
NGINX_INSTALL_DIR=/usr/local/nginx/

NGX_DEVEL_KIT=https://github.com/simpl/ngx_devel_kit/archive/v0.3.0.tar.gz
NGX_DEVEL_KIT_TAR=v0.3.0.tar.gz
NGX_DEVEL_KIT_DIR=ngx_devel_kit-0.3.0
NGX_LUA=https://github.com/openresty/lua-nginx-module/archive/v0.10.5.tar.gz
NGX_LUA_TAR=v0.10.5.tar.gz
NGX_LUA_DIR=lua-nginx-module-0.10.5

export LUAJIT_LIB=/usr/local/lib
export LUAJIT_INC=/usr/local/include/luajit-2.0

mkdir -p $SOURCE_DIR

# 更新yum源以及安装gcc、gcc-c++
yum update -y && yum install -y gcc gcc-c++

# 安装pcre
cd $SOURCE_DIR
wget $PCRE_URL
tar -zxvf $PCRE_TAR
cd $SOURCE_DIR$PCRE_DIR
./configure && make && make install

# 安装zlib
cd $SOURCE_DIR
wget $ZLIB_URL
tar -zxvf $ZLIB_TAR
cd $SOURCE_DIR$ZLIB_DIR
./configure
make && make install

# 安装perl
yum install -y perl

# 安装openssl
cd $SOURCE_DIR
wget $OPENSSL_URL
tar -zxvf $OPENSSL_TAR
cd $SOURCE_DIR$OPENSSL_DIR
./config --prefix=/usr/local/openssl
make && make install

# 安装luajit
cd $SOURCE_DIR
wget $LUAJIT_URL
tar -zxvf $LUAJIT_TAR
cd $SOURCE_DIR$LUAJIT_DIR
make
make install

cd $SOURCE_DIR
wget $NGX_DEVEL_KIT
tar -zxvf $NGX_DEVEL_KIT_TAR
wget $NGX_LUA
tar -zxvf $NGX_LUA_TAR

# 安装nginx
cd $SOURCE_DIR
wget $NGINX_URL
tar -zxvf $NGINX_TAR
cd $NGINX_DIR

groupadd www
useradd www -g www
./configure --user=www --group=www --prefix=$NGINX_INSTALL_DIR --with-http_stub_status_module --with-http_ssl_module --with-http_v2_module --with-openssl=$SOURCE_DIR$OPENSSL_DIR --add-module=$SOURCE_DIR$NGX_DEVEL_KIT_DIR --add-module=$SOURCE_DIR$NGX_LUA_DIR
make && make install

# 解决nginx启动问题
ln -s /lib64/libpcre.so.0.0.1 /lib64/libpcre.so.1
ln -s /usr/local/lib/libluajit-5.1.so.2 -s /lib64/libluajit-5.1.so.2
