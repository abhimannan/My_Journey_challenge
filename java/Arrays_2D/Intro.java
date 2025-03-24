package Arrays_2D;
import java.util.*;

public class Intro {
    public static boolean search(int[][] matrix,int key){
         for(int i=0;i<matrix.length;i++) {
            for(int j=0;j<matrix[0].length;j++) {
                if(matrix[i][j]==key){
                    System.out.println("Element Found!!");
                    return true;
                }
            }
         }
         System.out.println("Not found!");
         return false;
    }
    public static void largestvalue(int[][] age){
        // find the largest element
        int largest = Integer.MIN_VALUE;
        for(int i=0;i<age.length;i++){
            for(int j=0;j<age[i].length;j++) {
                 if(age[i][j]>largest){
                     largest = age[i][j];
                 }
            }
        }
        System.out.println(largest);
    }

    public static void main(String[] args) {
        int[][] matrix = new int[3][3];
        int[][] age = {
            {12,45,12},
            {54,25,14},
            {63,25,20}
        };
        // Scanner sc = new Scanner(System.in);
        // input 
        /*
        for(int i=0;i<matrix.length;i++){
            for(int j=0;j<matrix[i].length;j++){
                matrix[i][j] = sc.nextInt();
            }
        }
            */
        // output
        /*
        for(int i=0;i<matrix.length;i++){
            for(int j=0;j<matrix[i].length;j++){
                System.out.print(matrix[i][j]+" ");
            }
            System.out.println();
        }
            */
        // search(matrix,5);
        largestvalue(age);
    }
}
