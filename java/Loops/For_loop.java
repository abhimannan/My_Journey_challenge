import java.util.Scanner;
public class For_loop {
    public static void main(String[] args) {
        //  for(int i=1;i<=5;i++){
        //      System.out.print(i+"\t");
        //  }
        // printing aquare pattern
        /*
        for(int i=1;i<=4;i++){
            System.out.print("\n");
            for(int j=1;j<=4;j++){
                 System.out.print("*");
            }
        }
            */
        // reverse of a number
       /*
        int num = 10899;
        while(num>0){
            int lastDigit = num%10;
            System.out.print(lastDigit);
             num = num/10;

        }
        System.out.println(); 
        */
        // reverse the given number
       /* Scanner x = new Scanner(System.in);
        System.out.print("Enter the number want to reverse : ");
        int num = x.nextInt();
        while(num>0){
            int lastDigit = num%10;
            System.out.print(lastDigit);
            num=num/10;
        }
        System.out.println();
        */
        /*
        for(int i=1;i<=5;i++){
             System.out.println(i);
             if(i==3){
                 break;
             }
        }
        System.out.println("out");
            // keep enter the numbers 10multiples
        Scanner x = new Scanner(System.in);
            while(true){
            System.out.println("Enter 10 multiples : ");
            int num = x.nextInt();
            if(num%10!=0){
                System.out.println(num+ "is not 10 multiple");
                break;
            }
        }
        */
        // continue
        /*
        for(int i=1;i<=5;i++){
             if(i==3){
                 continue;
             } 
             System.out.print(i+" ");                                 
        }
        */
        // Accept all numbers from the user except 10 multiples
        while(true){
            Scanner sc = new Scanner(System.in);
            System.out.print("Enter a num : ");
            int num = sc.nextInt();
            if(num%10==0){
                continue;
            }
            System.out.println(num);
        }

    

    }
}
