package Functions;
import java.util.Scanner;

public class Swap {
    // function defintion
    public static void Swap(int x,int y){// parameters or formal parameters
        System.out.println("x value before swaping : "+ x);
        System.out.println("y value before swaping : "+ y);
        // logic
        int temp = x;
        x=y;
        y=temp;
        System.out.println("x value after swaping : "+ x);
        System.out.println("x value after swaping : "+ y);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter X = ");
        int x = sc.nextInt();
        System.out.println("Enter y = ");
        int y = sc.nextInt();
        // function calling
            Swap(x,y);// arguments or actual parameters
        

    }
}
