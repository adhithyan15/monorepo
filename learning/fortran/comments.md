# Comments

Comments are how most programmers document code.

To add a comment, you need to add one of the following characters in the first column - `c`, `C`, `*` or `!`.

Here are some examples

```fortran
c This is a hello world program
program hello_world
    print *, "Hello World!!!"
end program hello_world
```

```fortran
C This is a hello world program
program hello_world
    print *, "Hello World!!!"
end program hello_world
```

```fortran
* This is a hello world program
program hello_world
    print *, "Hello World!!!"
end program hello_world
```

```fortran
! This is a hello world program
program hello_world
    print *, "Hello World!!!"
end program hello_world
```

If you use `!` in a statement, anything after `!` is considered a comment

```fortran
program hello_world
    print *, "Hello World!!!" ! This is a hello world program
end program hello_world
```

You can also use `d` or `D` in the first column to mark that line as a comment. But if you use the `-xld` option while compiling the code, they will be compiled as debug lines.