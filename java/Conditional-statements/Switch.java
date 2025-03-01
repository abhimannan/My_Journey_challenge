import java.util.Scanner;

public class Switch {
    public static void main(String[] args) {
        Scanner x = new Scanner(System.in);
        /* int day =10;
        switch(day){
             case 1:
                 System.out.println("MONDAY");
                 break;
            case 2:
                 System.out.println("TUESDAY");
                 break;
            case 3:
                 System.out.println("WEDNESDAY");
                 break;
            case 4:
                 System.out.println("THURSDAY");
                 break;
            case 5:
                 System.out.println("FRIDAY");
                 break;
            case 6:
                 System.out.println("SATURDAY");
                 break;
            case 7:
                 System.out.println("SUNDAY");
                 break;
            default:
                  System.out.println("Enter 1 to 7 only!");            
        }
        */
        // user imput
        /*
        System.out.println("Enter numbers from 1 to 3");
        int option = x.nextInt();
        switch(option){
            case 1:System.out.println("burger");
                   break;
            case 2:System.out.println("pizza");
                   break;
            case 3:System.out.println("chapathi");
                   break;
            default:
            System.out.println("Enter the correct option");
        }
            */
        // calculator
        System.out.println("Enter a : ");
        int a = x.nextInt();
        System.out.println("Enter b : ");
        int b = x.nextInt();
        System.out.println("Enter Options : \n 1 for Addition \n 2 for Substraction \n 3 for Multiplication \n 4 for Division \n" + 
                        " 5 for Cofficient");
        int cal = x.nextInt();
        switch(cal){
             case 1:
                 int sum = a+b;
                 System.out.println("SUM = "+sum);
                 break;
            case 2:
                int sub = a-b;
                System.out.println("SUb = "+sub);
                break;
            case 3:
                int mul = a*b;
                System.out.println("MUL = "+mul);
                break;
            case 4:
                int div = a/b;
                System.out.println("COFFICIENT = "+div);
                break;
             case 5:
                int remainder = a/b;
                System.out.println("REMAINDER = "+remainder);
                break;
            default:
                System.out.println("Enter the valid number");
        }

    }
}
