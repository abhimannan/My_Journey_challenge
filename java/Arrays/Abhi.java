// swaping of array elements
import java.util.*;

public class Main {
  public static void swap(int[] arr,int i1,int i2){
      int temp;
      for(int i=0;i<arr.length;i++){
          temp = arr[i1];
          arr[i1] = arr[i2];
          arr[i2] = temp;
      }
      System.out.println(Arrays.toString(arr));
  }
    public static void main(String[] args) {
      int[] arr = {1,2,3,4,5};
      System.out.println("Before swaping : "+Arrays.toString(arr));
      
      Scanner sc = new Scanner(System.in);
      System.out.print("Enter the index1 : ");
      int i1 = sc.nextInt();
      System.out.print("Enter the index2 : ");
      int i2 = sc.nextInt();
      swap(arr,i1,i2);
      
      
  }
}
