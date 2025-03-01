package Functions;
import java.util.Scanner;

public class Practice_class {
    public static boolean isEven(int n){
        if(n%2==0){
            return true;
        }
        else{
            return false;
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter n : ");
        int n = sc.nextInt();
        boolean result = isEven(n);
        System.out.println(result);
    }
}
