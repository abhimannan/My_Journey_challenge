package My_Journey_challenge.java.Arrays;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Scanner;


public class Kumal {
    public static void main(String[] args) {
        // String[] names = new String[5];
        Scanner sc = new Scanner(System.in);

        // user input through loop
        /*
        for(int i=0;i<names.length;i++){
            names[i]=sc.nextLine();
        }
            */
            
        // print the arrays values
        // for(int i=0;i<names.length;i++){
        //     System.out.print(names[i]+" ");
        // }
        // print using forEach method
        /*
        for(String name : names){
            System.out.print(name+"  ");
        }
            */

        // Arrays.toString()
            // int[] rols = {1,2,3,4,5};
            // System.out.print(Arrays.toString(rols));

        //2D arrays
        
        // int[][] arr = new int[2][5];
        // input
        // for(int i=0;i<arr.length;i++){
        //     for(int j=0;j<arr[i].length;j++){
        //         arr[i][j] =sc.nextInt(); 
        //     }
        // }
        // output
        // for(int[] nums : arr){
        //     System.out.println(Arrays.toString(nums) +" ");
        // }
        // example
        int[][] arr = {
            {2,3,25},
            {2,3},
            {6,7,5,9}
        };
        for(int i=0;i<arr.length;i++){
             for(int j=0;j<arr[i].length;j++){
                 System.out.print(arr[i][j]+" ");
             }
             System.out.println();
        }
        for(int[] ma : arr){
            System.out.println(Arrays.toString(ma));
        }
    }
}
