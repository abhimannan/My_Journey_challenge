import java.util.Scanner;

public class IncomeTax {
    public static void main(String[] args) {
        double tax;
        double salary;
        Scanner x = new Scanner(System.in);
        System.out.println("Enter the income : ");
        long income = x.nextLong();
        if(income<250000){
           tax = 0;
           System.out.println("Your tax amount is : "+ tax);
           salary = income-tax;
           System.out.println("Your Actual Salary is : "+salary);
        }
        else if(income>250001 && income<=500000){
             tax=income*0.05;
             System.out.println("Your tax amount is : "+ tax);
             salary = income-tax;
             System.out.println("Your Actual Salary is : "+salary);
        }
        else if(income>500001 && income<=1000000){
            tax=income*0.20;
            System.out.println("Your tax amount is : "+ tax);
            salary = income-tax;
            System.out.println("Your Actual Salary is : "+salary);
        }
        else if(income>1000000){
             tax = income*0.30;
             System.out.println("Your tax amount is : "+ tax);
             salary = income-tax;
             System.out.println("Your Actual Salary is : "+salary);
        }
        else{
             System.out.println("Enter valid amount!");
        }

    }
}
