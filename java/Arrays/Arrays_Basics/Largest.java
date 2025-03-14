// find the largest element in an array
import java.util.*;
class Largest{
    public static int calLarge(int array[]){
        int large=Integer.MIN_VALUE;
        int small = Integer.MAX_VALUE;

        for(int i=0;i<array.length;i++){
            if(large<array[i]){
                large=array[i];
            } 
            if(small>array[i]){
                small=array[i];
            }
        }
        System.out.println("Smallest Value : "+small);
        return large;
    }
    public static void main(String[] args) {
        int array[]={15,452,254,15225,4215};
        int result = calLarge(array);
        System.out.println("largest element in the array : "+result);
    }
}