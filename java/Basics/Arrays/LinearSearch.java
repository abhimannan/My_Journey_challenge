package Arrays;
import java.util.*;

public class LinearSearch {
    public static int SearchElement(int nums[],int key){
        for(int i=0;i<nums.length;i++){
            if(nums[i]==key){
                return i;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int nums[] = new int[5];
        System.out.print("Enter the length of the array : ");
        int arraySize = sc.nextInt();
        for(int i=0;i<arraySize;i++){
            System.out.print("Enter the elements into array : ");
            nums[i]=sc.nextInt();
        }
        System.out.println("Enter the element to find in the array :");
        int key=sc.nextInt();
        // int nums[]={10,20,30,40,50};
        // int key = 30;
        int index = SearchElement(nums,key);
        if(index==-1){
            System.out.println("The index was not found"+key);
        }
        else{
            System.out.println(key+" is found at "+index + " index number");
        }

    }
}
