# Using Tsung with docker

## Run load test

### Step 1: Start server

```bash
$ docker-compose up app
```

### Step 2: Start Tsung

```bash
$ docker-compose up tsung
```

dashboard available at [http://localhost:8091](http://localhost:8091)

---

## Edit load test

edit tsung/tsung-docker.xml

[doc](http://tsung.erlang-projects.org/user_manual/index.html)
