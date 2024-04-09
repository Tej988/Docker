package javaapp;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Docker with Non-Root User!");
        
        // Sleep indefinitely to keep the container running
        try {
            Thread.sleep(Long.MAX_VALUE);
        } catch (InterruptedException e) {
            // Handle interruption if needed
            e.printStackTrace();
        }
    }
}
