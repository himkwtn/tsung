## Problems found

### Problem

cannot put json in xml tag

### Solution

escape quotes like this

````xml
<http
    url="/"
    method="POST"
    content_type="application/json"
    contents="{
        &quot;key&quot;: &quot;value&quot;,
    }"
/>
```

### Problem

Config Error, aborting ! dtd_not_found

### Solution
download dtd file [here](http://tsung.erlang-projects.org/user_manual/dtd.html) then put in the appropriate location

[ref](https://www.gitmemory.com/issue/primait/docker-tsung/2/472911246)
````
