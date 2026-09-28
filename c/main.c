#include <stdio.h>
#include "lib.h"

int main(void) {
    printf("%s + add(%d, %d) = %d\n", greeting(), 2, 3, add(2, 3));
    return 0;
}