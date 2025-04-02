package Strings;
import java.util.*;

public class Basics {
    public static void Print(String name) {
        for(int i=0;i<name.length();i++) {
            System.out.print(name.charAt(i));
        }
        System.out.println();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Name = ");
        String name = sc.nextLine();
        // System.out.println(name.charAt(0));

        Print(name);
    }
}
