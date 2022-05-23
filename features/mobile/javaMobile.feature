Feature: Java Mobile content page

Background: Navigate to the home page
    Given the user navigates to Tech Radar

Scenario: Java Mobile page content appears as expected
    When the user clicks "View Our Tech Radar"
    And the user clicks the hamburger menu
    And the user navigates to "Mobile" via the hamburger menu
    And the user navigates to category "Java Mobile"
    Then the user should see "In the Java programming language all source code is first written in plain text files ending with the .java extension. Those source files are then compiled into .class files by the javac compiler. The .class files do not contain code that is native to our processor, but instead contain bytecodes which is the machine language of the Java Virtual Machine. The java launcher tool then runs our application with an instance of the JVM. Because the Java VM is available on many different operating systems, the same .class files can run on Microsoft Windows, Solaris OS, Linux & Mac OS."
    And the user should see "Java programming language was originally developed by Sun Microsystems which was initiated by James Gosling. It was released in 1995 as core component of Sun Microsystems' Java platform."
    And the user should see "A platform is the hardware or software environment in which a program runs (Microsoft Windows, Linux, etc). Most platforms can be described as a combination of the operating system and the underlying hardware. The Java platform is a software - only platform that runs on top of other hardware - based platforms. The Java platform has two components: The Java Virtual Machine (JVM) & The Java Application Programming Interface (API). These isolate the program from the underlying hardware."
    And the user clicks accordion "Object Oriented"
    And the user can see accordion "Object Oriented" description "In Java, everything is an Object. Java can be easily extended since it is based on the Object model."
    And the user clicks accordion "Platform Independent"
    And the user can see accordion "Platform Independent" description "Unlike other programming languages like C & C++, when Java is compiled, it is not compiled into platform specific machine, but into platform independent byte code. This byte code is distributed over the web and interpreted by the Java Virtual Machine (JVM) on whichever platform it is being run on."
    And the user clicks accordion "Simple"
    And the user can see accordion "Simple" description "Java is designed to be easy to learn."
    And the user clicks accordion "Secure"
    And the user can see accordion "Secure" description "With Java's secure feature it enables to develop virus-free, tamper-free systems. Authentication techniques are based on public-key encryption."
    And the user clicks accordion "Architecture-neutral"
    And the user can see accordion "Architecture-neutral" description "Java compiler generates an architecture-neutral object file format, which makes the compiled code executable on many processors with the presence of Java runtime system."
    And the user clicks accordion "Portable"
    And the user can see accordion "Portable" description "Being architecture-neutral and having no implementation dependent aspects of the specification makes Java portable. Compiler in Java is written in ANSI C with a clean portability boundary, which is a POSIX subset."
    And the user clicks accordion "Robust"
    And the user can see accordion "Robust" description "Java tries to eliminate error prone situations by emphasizing mainly on compile time error checking and runtime checking."
    And the user clicks accordion "Multithreaded"
    And the user can see accordion "Multithreaded" description "With Java's multithreaded feature it is possible to write programs that can perform many tasks simultaneously. This design feature allows the developers to construct interactive applications that can run smoothly."
    And the user clicks accordion "Interpreted"
    And the user can see accordion "Interpreted" description "Java byte code is translated on the fly to native machine instructions and is not stored anywhere. The development process is more rapid and analytical since the linking is an incremental and light-weight process."
    And the user clicks accordion "High Performance"
    And the user can see accordion "High Performance" description "With the use of Just-In-Time compilers, Java enables high performance."
    And the user clicks accordion "Distributed"
    And the user can see accordion "Distributed" description "Java is designed for the distributed environment of the internet."
    And the user clicks accordion "Dynamic"
    And the user can see accordion "Dynamic" description "Java is considered more dynamic than C or C++, since it’s designed to adapt to an evolving environment. Java programs can carry extensive amount of run-time information that can be used to verify and resolve access to objects on run-time."
    And the user clicks accordion "Java in Android Development"
    And the user can see accordion "Java in Android Development" description 
    """
    Java is an official language of Android development and is supported by Android Studio. However, Kotlin has become Google’s preferred language for Android. Like Java, Kotlin runs on the JVM. It’s also completely interoperable with Java and addresses some of Java’s weaknesses i.e., Brevity, Interoperability, Inbuilt Null Safety, No Raw Types, No Checked Exceptions.

    Java is still used and supported by Google for Android development. Most Android apps today have some mix of Java and Kotlin code. Developers can build the same functionality with Java as they can with Kotlin. It’s unlikely that Android will stop supporting Java any time soon. The Android SDK is still mostly written in Java. Most Android apps still include Java. The Android OS is built upon a Java Virtual Machine. To move away from Java completely would represent a monumental shift in the Android ecosystem.

    Google announced official Android support for Kotlin at Google I/O in 2017 and adopted their current Kotlin-first approach to Android at Google I/O in 2019. Both Java and Kotlin can be used to build performant applications, but Google’s libraries, tooling, docs, and learning resources continue to embrace a Kotlin-first approach making it the better language for Android in 2021. Many Android Jetpack libraries have been either written completely in Kotlin, or support Kotlin language features such as coroutines.

    Kotlin is not faster than Java although the true answer depends on what performance metrics you are interested in. At runtime, the performance of the languages is very similar. At compile time however, Kotlin is measurably slower than Java. The extent of the slowdown depends on factors such as the usage of annotation processors, and the presence of mixed Java & Kotlin source sets.
    """
    And the user clicks accordion "Conversion process from Java code to Android application "
    And the user can see accordion "Conversion process from Java code to Android application " description 
    """
    The Java source files are converted to Java class files by the Java compiler. The Android SDK contains a tool called dx which converts Java class files into a Dalvik Executable (.dex) file. All class files of the application are placed in this .dex file. During this conversion process redundant information in the class files are optimized in the .dex file. For example, if the same String is found in different class files, the .dex file will contain only one reference of this String, so .dex files are much smaller in size than the corresponding class files. The .dex file and other resources (e.g., images and XML files) are packed into an Android Package (.apk) file. Android Asset Packaging Tool (aapt) performs this step. The resulting .apk file contains all the necessary data to run the Android application and can be deployed to an Android device via the adb tool. During the installation on an Android device the application code is translated into machine code. The dex2oat tool takes the .dex file created by the Android tool chain and compiles that into an Executable and Linkable Format (ELF file). This file contains the dex code, compiled native code and meta-data.
    """
