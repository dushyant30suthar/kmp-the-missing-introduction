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
    js(IR) {
        nodejs()
        binaries.executable()
    }

    macosArm64 {
        binaries {
            executable()
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
}

android {
    namespace = "dev.tennarrates.whatismultiplatform"
    compileSdk = 35
    defaultConfig {
        minSdk = 24
    }
}