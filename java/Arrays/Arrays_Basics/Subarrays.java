public class Subarrays {
    
    public static void main(String[] args) {
        int totalsubArrs = 0;
        
        int arr[] = {2,4,6,8,10};
        for(int i=0;i<arr.length;i++){
            // int start=i;
            for(int j=0;j<arr.length;j++){
                int sum = 0;
                int large = Integer.MIN_VALUE;
                int small = Integer.MAX_VALUE;
                // int end = j;
                for(int k=i;k<=j;k++){
                    
                    System.out.print(arr[k]+" ");
                }
                totalsubArrs++;
                // sum of the array
                for(int x=i;x<=j;x++){
                    sum=sum+arr[x];
                }
                System.out.print("Sum = "+ sum + "  ");
                // largest of an array
                for(int l=i;l<=j;l++){
                    if(arr[l]>large){
                        large=arr[l];
                    }
                }
                System.out.print("larget element = "+large+"  ");
                // smallest element
                for(int s=i;s<=j;s++){
                    if(arr[s]<small){
                        small=arr[s];
                    }
                }
                System.out.print("Smallest element = "+small+"  ");
                System.out.println();
            }
            System.out.println();
        }
        System.out.println("Total Sub Arrays is = "+totalsubArrs);
    }
}