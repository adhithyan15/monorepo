# Comments

Comments in Haskell start with `--`. Here is an example

```haskell
-- This is a hello world program
main :: IO ()
main = 
    do
        print("Hello World!!!")
```

Anything after `--` is ignored by the compiler

```haskell
main :: IO ()
main = 
    do
        print("Hello World!!!") -- This prints out hello world
```