# Deploy Guide

<a href="#">
<img alt="Ubuntu" src="https://img.shields.io/badge/Ubuntu%20-%23E95420.svg?&style=for-the-badge&logo=ubuntu&logoColor=white"/>
</a>
<a href="#">
<img alt="NGINX" src="https://img.shields.io/badge/NGINX%20-%23009639.svg?&style=for-the-badge&logo=nginx&logoColor=white"/>
</a>
<a href="#">
<img alt="Node" src="https://img.shields.io/badge/NodeJS%20-%23339933.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="#">
<img alt="Yarn" src="https://img.shields.io/badge/Yarn%20-%232C8EBB.svg?&style=for-the-badge&logo=yarn&logoColor=white"/>
</a>
<a href="#">
<img alt="PostgreSQL" src ="https://img.shields.io/badge/PostgreSQL-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/>
</a>
<a href="#">
<img alt="Docker" src="https://img.shields.io/badge/docker%20-%230db7ed.svg?&style=for-the-badge&logo=docker&logoColor=white"/>
</a>

<br />

This guide is copy from original content of course and is for **Ubuntu** operating system, but with small changes you can use other linux distribution.

<br />

## First Access

**Access using SSH:** `ssh root@<ip>`

<br />

**Create user:** `adduser deploy`

<br />

**Add user to sudo group:** `usermod -aG sudo deploy`

<br />

**Create `.ssh` folder to user:** `mkdir -p /home/deploy/.ssh`

<br />

**Copy authorization file in root to deploy user:**

-   `cp ~/.ssh/authorized_keys /home/deploy/.ssh/`
-   `chown -R deploy:deploy /home/deploy/.ssh/`

---

<br />

## Install Updates

`apt update`

> in CentOS is `yum update`

---

<br />

## Instal NodeJS and Yarn

**Node:**

-   `curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -`
-   `apt install -y nodejs`

<br />

**Yarn:** <small>(V. 1.22.x)</small>

-   `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
-   `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
-   `sudo apt update`
-   `sudo apt install -y yarn`

---

<br />

## Docker in Server

**Install:**

1. `sudo apt install apt-transport-https ca-certificates curl software-properties-common`
2. `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
3. `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"`
4. `sudo apt update`
5. `apt-cache policy docker-ce`
6. `sudo apt install docker-ce`
7. `sudo systemctl status docker`
8. `sudo usermod -aG docker ${USER}`

**Add user deploy to Docker group:** `usermod -aG docker deploy`

> **Note:** in containers below use hash password to improve your server security

### PostgreSQL

**[Link](https://github.com/bitnami/bitnami-docker-postgresql)**

1. `docker run --name postgresql -e POSTGRESQL_USERNAME=<user> -e POSTGRESQL_PASSWORD=<password> -e POSTGRESQL_DATABASE=<database> -p 45432:5432 -d bitnami/postgresql:latest`

> **Note:** `-p xxxx:xxxx`
> the left side is port to access in your server
> the right side is port to access in container
> `docker ps`: to verify if container is running

<br />

### Redis

**[Link](https://github.com/bitnami/bitnami-docker-redis)**

1. `docker run --name redis -e REDIS_PASSWORD=<password> -p 36379:6379 -d bitnami/redis:latest`

> **Note:** `-p xxxx:xxxx`
> the left side is port to access in your server
> the right side is port to access in container
> `docker ps`: to verify if container is running

---

<br />

## Install Project in Server

**Create folder:**

1. `mkdir -p app`
2. `cd app`

**Clone project:**

1. `git clone <git-repo-https-url>`
2. `cd <app-folder>`

**Rename example files:**

-   `mv .env.example .env`
-   `mv ormconfig.example.json ormconfig.json`

> Edit files with correct data (`nano .env`; `nano ormconfig.json`)

**Generate Build:**

1.  `yarn install`
1.  `yarn build`

---

<br />

## NGINX

### Install

`sudo apt install nginx`

### Allow Port 80 in Firewall

`sudo ufw allow 80`

### Configuration

**Create file:** `/etc/nginx/sites-available/<name>`

**Content:**

```nginx
server {
  listen 80 default_server;
  listen [::]:80 default_server;
	server_name <domain>;

	location / {
		proxy_pass http://localhost:3333;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection 'upgrade';
		proxy_set_header Host $host;
		proxy_cache_bypass $http_upgrade;
	}
}
```

**Enable configuration file:** `sudo ln -s /etc/nginx/sites-available/<name> /etc/nginx/sites-enabled`

**Validate Syntax:** `sudo nginx -t`

**Restart NGINX:** `sudo service nginx restart`

---

<br />

## Auto restart containers and Node

### Docker Containers with Auto Restart

1. `docker update --restart=unless-stopped postegresql`
2. `docker update --restart=unless-stopped redis`

### NodeJS with Auto Restart

1. `yarn global add pm2`
2. `cd <app-folder> && pm2 start dist/server.js [--name <app-name>]`
3. `pm2 startup systemd` and run command appear after run

> **Kill NodeJS first:** `pkill <id>`
>
> **View Node Process's:** `ps -aux | grep node`

<br />

> **Other Commands:**
>
> -   `pm2 stop`
> -   `pm2 restart`
> -   `pm2 delete`
> -   `pm2 list`

---

<br />

## SSL <small>using Certbot</small>

1. `sudo apt install snapd`
1. `sudo snap install core; sudo snap refresh core`
1. `sudo apt-get remove certbot`
1. `sudo snap install --classic certbot`
1. `sudo ln -s /snap/bin/certbot /usr/bin/certbot`
1. `sudo certbot --nginx` or `sudo certbot certonly --nginx`
1. `sudo ufw allow 443`
1. `sudo service nginx restart`
1. `sudo certbot renew --dry-run` (optional)
