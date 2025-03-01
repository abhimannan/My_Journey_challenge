import java.util.Arrays;

public class Reversearr {
    
    public static void main(String[] args) {
        int arr[]={15,25,32,1,54};
        System.out.println(Arrays.toString(arr));
        int first=0;
        int last=arr.length-1;
        while(first<=last){
            int temp;
            temp=arr[first];
            arr[first]=arr[last];
            arr[last]=temp;
            first++;
            last--;
        }
            System.out.println((Arrays.toString(arr)));
    }
}
