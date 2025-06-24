# メモ

## バックエンド疎通確認

### ユーザー登録

```sh
❯ curl -v -X POST http://localhost:8080/api/user \
 -H "Content-Type: application/json" \
 -d '{"name": "ishizawa"}'
Note: Unnecessary use of -X or --request, POST is already inferred.
* Host localhost:8080 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:8080...
* Connected to localhost (::1) port 8080
> POST /api/user HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/8.7.1
> Accept: */*
> Content-Type: application/json
> Content-Length: 20
>
* upload completely sent off: 20 bytes
< HTTP/1.1 200
< X-Content-Type-Options: nosniff
< X-XSS-Protection: 0
< Cache-Control: no-cache, no-store, max-age=0, must-revalidate
< Pragma: no-cache
< Expires: 0
< X-Frame-Options: DENY
< Content-Type: application/json
< Transfer-Encoding: chunked
< Date: Tue, 24 Jun 2025 14:42:59 GMT
<
* Connection #0 to host localhost left intact
{"id":1,"name":"ishizawa","createdAt":"2025-06-24T14:42:59.671919Z"}%
```

### ユーザー情報取得

```sh
❯ curl http://localhost:8080/api/user/1 | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    68    0    68    0     0   2989      0 --:--:-- --:--:-- --:--:--  3238
{
  "id": 1,
  "name": "ishizawa",
  "createdAt": "2025-06-24T14:42:59.671919Z"
}
```
