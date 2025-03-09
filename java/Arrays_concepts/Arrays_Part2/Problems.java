package Arrays_Part2;
import java.util.ArrayList;


public class Problems {
    public static void main(String[] args) {
        int[] arr = {1,-2,6,-1,3};
        for(int i=0;i<arr.length;i++){
            for(int j=i;j<arr.length;j++){
                int sum = 0;
                for(int k=i;k<=j;k++){
                    sum=sum+arr[k];
                    // System.out.print(arr[k]+" ");
                    
                }
                System.out.print(sum+"  ");
            }
            
            System.out.println();
        }

    }
}
