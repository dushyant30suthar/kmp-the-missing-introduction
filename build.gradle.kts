plugins {
    kotlin("multiplatform") version "2.2.0"
    id("com.android.library") version "8.7.3"
}

kotlin {
    jvm()
    androidTarget()
    macosArm64()
    linuxX64()
    mingwX64()
    iosArm64()
    watchosArm64()
    tvosArm64()
    js(IR) {
        nodejs()
        binaries.executable()
    }

    macosArm64 {
        binaries {
            executable()
            sharedLib()
        }
    }

    linuxX64 {
        binaries {
            sharedLib()
        }
    }

    mingwX64 {
        binaries {
            sharedLib()
        }
    }

    iosArm64 {
        binaries {
            framework()
        }
    }

    watchosArm64 {
        binaries {
            framework()
        }
    }

    tvosArm64 {
        binaries {
            framework()
        }
    }
}

android {
    namespace = "dev.tennarrates.whatismultiplatform"
    compileSdk = 35
    defaultConfig {
        minSdk = 24
    }
}