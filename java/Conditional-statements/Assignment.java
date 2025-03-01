import java.util.Scanner;
class Assignment{
     public static void main(String args[]){
         // num is +ve or -ve
         /*
         Scanner x = new Scanner(System.in);
         System.out.println("Enter a num : ");
         int num = x.nextInt();
         if(num>0){
             System.out.println("+ve");
         }
         else{
             System.out.println("-ve");
         }
             */
         // fever check
         /* 
         Scanner x = new Scanner(System.in);
         System.out.println("Enter Your Temperatore : ");
         double fever = x.nextDouble();
         if(fever>100){
             System.out.println("Fever");
         }
         else{
             System.out.println("No Fever");
         }*/
        // week names using switch
        /*Scanner x = new Scanner(System.in);
        System.out.println("Enter the number of day : ");
        int day = x.nextInt();
        switch(day){
            case 1:System.out.println("Sunday");
                   break;
            case 2:System.out.println("Monday");
                   break;
            case 3:System.out.println("Tuesday");
                   break;
            case 4:System.out.println("Wednesday");
                   break;
            case 5:System.out.println("Thursday");
                   break;
            case 6:System.out.println("Friday");
                   break;
            case 7:System.out.println("Saturday");
                   break;
            default:
                   System.out.println("day number is invalid");
        }*/
           /*
             int a = 63;
            int b = 36;
            String x = (a<b)?"true":"false";
            int y = (a>b)?a:b;
            System.out.println(x);
            System.out.println(y);
           */
          // whether the year is leap year or not
          Scanner x = new Scanner(System.in);
          System.out.println("Enter the year : ");
          int year = x.nextInt();
          if(year%4==0 && year%100!=0 || year%400==0){
             System.out.println("Leap Year!");
          }
          else{
             System.out.println("Not A Leap Year!")
          }

     }
}