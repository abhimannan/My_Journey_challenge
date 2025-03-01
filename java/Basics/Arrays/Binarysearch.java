
public class Binarysearch {
     public static int search_element(int arr[],int key){
        int start=0;
        int end=arr.length-1;
        while(start<=end){
            int mid=(start+end)/2;
            if(arr[mid]==key){
                return mid;
            }
            if(arr[mid]>key){
                end=mid-1;
            }
            else{
                start=mid+1;
            }
        }
        return -1;
     }
    public static void main(String[] args) {
        int arr[]={10,20,30,40,50};
        int key = 50;
        int found_element = search_element(arr,key);
        if(found_element==-1){
            System.out.println("The Key is Not Found!");
        }
        else{
            System.out.println(key+" is found at index of : "+found_element);
        }
        
    }
}
