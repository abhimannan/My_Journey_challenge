public class Arraypairs {
    public static void main(String[] args) {
        int arr[]={2,4,6,8,10};
        for(int i=0;i<=arr.length-1;i++){
            int current = arr[i];
            System.out.print("["+current+"]"+" ");
            for(int j=i+1;j<arr.length;j++){
                System.out.print("["+ current + "," + arr[j]+"]" + " ");
            }
            System.out.println();
        }
    }
}