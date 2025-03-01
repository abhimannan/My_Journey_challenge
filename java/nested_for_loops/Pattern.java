import java.util.Scanner;
class Pattern {
    public static void main(String[] args) {
        Scanner x = new Scanner(System.in);
        System.out.print("Enter rows : ");;
        int rows = x.nextInt();
        System.out.print("Enter rows : ");;
        int cols = x.nextInt();
        int num = 1;
         for(int i=1;i<=rows;i++){
             for(int j=1;j<=cols;j++){
                 System.out.print(num+" ");
                 num++;
             }
             System.out.println(" ");

         }
    }
}