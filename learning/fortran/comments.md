# Comments

*This only applies to Fortran 90 and above*

Comments are how most programmers document code.

To add a comment, you need to use the `!` (exclamation mark). Anything you write after the `!` will be ignored by the compiler as a comment

Here are two examples

```fortran
! This is a hello world program
program hello_world
    print *, "Hello World!!!"
end program hello_world
```

```fortran
program hello_world
    print *, "Hello World!!!" ! This is a hello world program
end program hello_world
```