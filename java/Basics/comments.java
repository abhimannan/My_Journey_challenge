// Arrays
// import java.util.*;

public class comments {
    public static void display(int prices[],int nonChange){
        nonChange = 100;
         for(int i=0;i<prices.length;i++){
            // System.out.println(prices[i]);
             prices[i]=prices[i]+1;
         }
    }
    public static void main(String args[]){
    // this is single line comment

    /* this 
         is multy
         line
         comment
     */
    /*
    Scanner sc = new Scanner(System.in);
    int marks[] = new int[20];
    marks[0]=sc.nextInt();
    marks[1]=sc.nextInt();
    marks[2]=sc.nextInt();
    System.out.println("ps: "+marks[0]);
    System.out.println("che :"+marks[1]);
    System.out.println("math :"+marks[2]);
    marks[0]=100;
    System.out.println("updated marks of ps : "+marks[0]);
    // array length
    System.out.println("length of the array is :"+marks.length);
*/

    // Array as arguments
    int prices[] = {10,20,30};
    int nonChange = 5;
    display(prices,nonChange);
    System.out.println(nonChange);
    for(int i=0;i<prices.length;i++){
        System.out.print(prices[i]+" ");
    }  

 }
    
   
}
