---
permalink: /portfolio.html
---

## [ArkScript](https://github.com/ArkScript-lang)

Fibonacci function
```clojure
{
    (let fibo (fun (n)
        (if (< n 2)
            n
            (+ (fibo (- n 1)) (fibo (- n 2))))))

    (print (fibo 28))  # display 317811
}
```

HTTP client and server
```clojure
{
    (import "http.bin")

    (let srv (httpCreateServer))
    (let f (fun (str) {
        (print "hello world")
        (+ "we got: '" str "', it worked!")
    }))
    (print (type f))
    (httpServerGet srv "/hi" f)
    (httpServerListen srv "localhost" 80)

    (let cli (httpCreateClient "ifconfig.me" 80))

    (mut output (httpClientGet cli "/"))
    (if (nil? output)
        (print "couldn't reach the server")
        (print output)
    )

    (let cli2 (httpCreateClient "yahoo.com" 80))

    (set output (httpClientGet cli2 "/"))
    (print (@ output 0))  # status: 301

    (httpClientSetFollowLocation cli2 true)
    (set output (httpClientGet cli2 "/"))
    (if (nil? output)
        (print "error")
        (print (@ output 0))  # status: 200
    )
}
```

Closures with explicit capture
```clojure
{
    (let countdown-from (fun (number)
        (fun (&number) {
            (set number (- number 1))
            number
        }))
    )
    (let countdown-from-3 (countdown-from 3))
    (print (countdown-from-3))
    (print (countdown-from-3))
    (print (countdown-from-3))
}
```

## [The Fate of Marcus](https://superfola.itch.io/the-fate-of-marcus)

![biom](images/tfom_biom.png)
![in game](images/tfom_ig.png)
![tutorial](images/tfom_tuto.png)

## [Zavtrak](https://gitlab.com/SuperFola/Zavtrak)

![triangle](images/zk_hello_triangle.png)
![3D](images/zk_hello_3d.png)
![cubes](images/zk_hello_cubes.png)
![light](images/zk_hello_light.png)

## [Project-E](https://github.com/SuperFola/project-E)

![booting](images/pe_boot.png)
![commands](images/pe_commands.png)
![loading test application](images/pe_app.png)