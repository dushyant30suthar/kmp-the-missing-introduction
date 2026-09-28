// Without extern "C" the compiler mangles the symbol (C++ name mangling);
// with extern "C" the symbol keeps its plain C name and is linkable from C.
extern "C" int add_c(int a, int b) {
    return a + b;
}

int add_cpp(int a, int b) {
    return a + b;
}